<?php
/**
 * Product: champs.
 * Date: 24/06/2020
 */

namespace App\Service;


use App\Entity\MatchPickAndBan;
use DiDom\Document;
use DiDom\Query;
use PhpParser\JsonDecoder;

class HLTVService
{
    private static $baseUrl = 'https://www.hltv.org';

    const TEAM_RESULT_STAT_RIGHT = 'results-right';
    const TEAM_RESULT_STAT_LEFT = 'results-left';

    const PLAYER_STAT_PARAM_NICK = 'nick';
    const PLAYER_STAT_PARAM_KILLS = 'kills';
    const PLAYER_STAT_PARAM_DEATH = 'death';
    const PLAYER_STAT_PARAM_ADR = 'adr';
    const PLAYER_STAT_PARAM_KAST = 'kast';
    const PLAYER_STAT_PARAM_RATING = 'rating';

    /**
     * @param $match
     * @param $matches
     * @return bool|mixed
     * @throws \Exception
     */
    public static function findMatch($match, $matches)
    {
        LoggerService::add("try to find on hltv get match {$match['teams'][0]['name']} vs {$match['teams'][1]['name']}", LoggerService::TYPE_INFO);

        if (empty($match['start_at']))
        {
            return false;
        }

        foreach ($matches as $matchItem)
        {
            $matchDateTime = false;
            if (!empty($matchItem['is_live']))
            {
                $matchDateTime = new \DateTime('now');
            }
            elseif (!empty($matchItem['start_at']))
            {
                $matchDateTime = $matchItem['start_at'];
            }

            if (empty($matchDateTime))
            {
                continue;
            }

            if ($match['start_at']->format('Y-m-d') != $matchDateTime->format('Y-m-d'))
            {
                continue;
            }

            $foundItemsCount = 0;
            $matchItem['start_at'] = $match['start_at'];
            $matchItem['code'] = $matchItem['start_at']->format('Y-m-d');

            foreach ($match['teams'] as $team)
            {
                if (in_array($team['name'], $matchItem['teams']) || in_array($team['full_name'], $matchItem['teams']))
                {
                    $matchItem['code'] .= (!empty($matchItem['code']) ? '|' : "") . $team['name'];
                    $foundItemsCount++;
                }
            }

            $matchItem['code'] = md5($matchItem['code']);

            if ($foundItemsCount == 2)
            {
                return $matchItem;
            }
        }

        LoggerService::add("match not found", LoggerService::TYPE_WARNING);
        return false;
    }

    /**
     * @return array|bool
     * @throws \DiDom\Exceptions\InvalidSelectorException
     */
    public static function getMatches()
    {
        LoggerService::add("hltv get matches", LoggerService::TYPE_INFO);
        $content = PageContentService::getPageContent(static::$baseUrl . '/matches');
        if ($content and is_array($content) && isset($content['error']))
        {
            return false;
        }

        $document = new Document($content);

        $matches = [];
        $matchLiveCells = $document->find("//div[contains(concat(' ', normalize-space(@class), ' '), ' liveMatch ')]//a[contains(@class, 'a-reset')]", Query::TYPE_XPATH);

        foreach ($matchLiveCells as $matchCellLink)
        {
            $matchUrl = $matchCellLink->attr('href');
            $matchUrl = self::urlDecorator($matchUrl);

            $matchItem = [
                'url' => $matchUrl,
                'is_live' => true,
            ];

            $teams = $matchCellLink->find("//div[contains(@class, 'matchTeams')]//div[contains(@class, 'matchTeamName')]", Query::TYPE_XPATH);

            if (count($teams) == 0)
            {
                continue;
            }

            $dateTime = (new \DateTime());
            $matchItem['start_at'] = $dateTime->setTime($dateTime->format('H'),0,0);
            $matchItem['teams'] = [];
            foreach($teams as $teamRaw)
            {
                $matchItem['teams'][] = trim($teamRaw->text());
            }

            $matches[] = $matchItem;
        }
        $matchSections = $document->find(".upcomingMatchesSection");

        $matchesSortedByDay = [];
        foreach ($matchSections as $matchSection){
            $is_live = false;
            $matchCells = $matchSection->find(".upcomingMatch");

            foreach ($matchCells as $matchCell){
                $matchUrlRaw = $matchCell->first('a');

                if (isset($matchUrlRaw))
                {
                    $url = $matchUrlRaw->attr('href');

                    if (strrpos($url, 'http') === false)
                    {
                        $url = static::$baseUrl . $url;
                    }
                }
                $start_at = $matchCell->attr('data-zonedgrouping-entry-unix');

                if (!empty($start_at))
                {
                    $unixtime = trim($start_at);
                    $dateTime = new \DateTime();
                    if (strlen($unixtime) == 13)
                    {
                        $unixtime = substr($unixtime, 0, -3);
                    }

                    $dateTime = $dateTime->setTimestamp($unixtime);

                    $start_at = $dateTime;
                }
                $matchTeamsSector = $matchCell->first(".matchTeams");

                $teams = [];
                if (isset($matchTeamsSector)){
                    $matchTeams = $matchTeamsSector->find('.matchTeam');

                    foreach($matchTeams as $teamRaw)
                    {
                        $teams[] = trim($teamRaw->text());
                    }
                }

                $matchesSortedByDay[$start_at->format('m.d')][] = compact('url', 'teams', 'is_live', 'start_at');
            }
        }
        $matchesSortedByDay = array_slice($matchesSortedByDay, 0, 7);

        foreach ($matchesSortedByDay as $matchesDay){

            $matches =  array_merge($matches, $matchesDay);
        }

        return $matches;
    }

    /**
     * @param $match
     * @return array|bool|string
     * @throws \DiDom\Exceptions\InvalidSelectorException
     */
    public static function getMatchFull($match)
    {
        ini_set('max_execution_time', 0);

        LoggerService::info("getMatchFull");

        $content = PageContentService::getPageContent($match['url']);
        if (!$content or ($content and is_array($content) && isset($content['error'])))
        {
            return false;
        }

        $document = new Document($content);
        $teamsCells = $document->find("//div[contains(@class, 'teamsBox')]//div[contains(concat(' ', normalize-space(@class), ' '), ' team ')]", Query::TYPE_XPATH);

        $match['teams'] = [];

        foreach ($teamsCells as $teamCell)
        {
            $team = [];
            $teamUrlRaw = $teamCell->find("//a", Query::TYPE_XPATH);
            if (count($teamUrlRaw) > 0)
            {
                $team['name'] = trim($teamUrlRaw[0]->text());
                $teamUrl = $teamUrlRaw[0]->attr('href');
                $teamUrl = self::urlDecorator($teamUrl);

                $team['url'] = $teamUrl;
            }

            $teamScoreRaw = $teamCell->find("//div[contains(@class, '-gradient')]//div[contains(@class, 'lost')]", Query::TYPE_XPATH);
            if (count($teamScoreRaw) == 0)
            {
                $teamScoreRaw = $teamCell->find("//div[contains(@class, '-gradient')]//div[contains(@class, 'won')]", Query::TYPE_XPATH);
            }

            if (count($teamScoreRaw) > 0)
            {
                $team['score'] = trim($teamScoreRaw[0]->text());
            }

            $match['teams'][] = $team;
        }

        if (empty($match['code'])){
            $match['code'] =  $match['url'];
        }
        $match['code'] = md5($match['code']);

        $match['maps'] = static::getMatchMapsInfo($document);
        $match['streams'] = static::getStreams($document);

        $match['is_detail_info'] = true;

        $eventRaw = $document->first('.event a');
        if (isset($eventRaw))
        {
            $eventUrl = $eventRaw->attr('href');
            $eventUrl = self::urlDecorator($eventUrl);

            $match['event'] = $eventRaw->text();
            $match['eventUrl'] = $eventUrl;
        }
        $matchMaps = $document->first('.map-stats-infobox');

        if (isset($matchMaps)){
            $maps = $matchMaps->find('.map-stats-infobox-maps');

            $mapsData = [];

            foreach ($match['teams'] as $num => $team)
            {
                foreach ($maps as $map)
                {
                    $name = self::getSubElemByClass($map, '.mapname');
                    $winRates = $map->find('.map-stats-infobox-stats');
                    $image = $map->first('img');
                    if (isset($image)){
                        $image = $image->attr('src');

                        $image = self::urlDecorator($image);
                    }

                    $winRateTeam = null;
                    if (count($winRates) === 2)
                    {
                        $winRateTeam = self::getSubElemByClass($winRates[$num], 'a');
                    }

                    $mapsData[$team['name']][] = [
                        'name' => $name,
                        'image' => $image,
                        'winrate' => $winRateTeam,
                    ];
                }
            }

            $match['winrate'] = $mapsData;
        }

        //Past matches
        $pastMatches = $document->first('.past-matches');
        if (isset($pastMatches)){
            $teamBoxes = $pastMatches->find('.standard-box');

            $teamBoxData = [];
            foreach ($teamBoxes as $teamBox)
            {
                $teamName = self::getSubElemByClass($teamBox, 'a');

                $teamMatches = $teamBox->find('.matches tr');
                foreach ($teamMatches as $teamMatch)
                {
                    $matchResult = $teamMatch->first('.result');
                    if (isset($matchResult))
                    {
                        $matchResult = $matchResult->text();
                    }
                    $opponent = $teamMatch->first('.opponent a');
                    if (isset($opponent))
                    {
                        $opponent = $opponent->text();
                    }
                    if (isset($matchResult)){

                        $teamBoxData[$teamName][] = [
                            'score' => $matchResult,
                            'team_two' => $opponent
                        ];
                    }
                }
            }
            $match['pastMatches'] = $teamBoxData;
        }

        //head to head
        $headToHead = $document->first('.head-to-head');
        if (isset($headToHead)){
            $leftTeamWins =  $document->first('.flexbox-column.flexbox-center.grow.right-border');
            if (isset($leftTeamWins)){
                $leftTeamWins = self::getSubElemByClass($leftTeamWins, '.bold');
                if (isset($leftTeamWins)){
                    $match['headToHead'][0] = $leftTeamWins;
                }
            }
            $rightTeamWins = $document->first('.flexbox-column.flexbox-center.grow.left-border');
            if (isset($rightTeamWins)){
                $rightTeamWins = self::getSubElemByClass($rightTeamWins, '.bold');
                if (isset($rightTeamWins)){
                    $match['headToHead'][1] = $rightTeamWins;
                }
            }
        }

        if (empty($match['start_at']))
        {
            $time = $document->first('.time');
            $time = $time->attr('data-unix');
            $match['start_at'] = self::parseUnixToDateTime($time);
        }
        return $match;
    }

    /**
     * @param $matchUrl
     * @return array|bool
     * @throws \DiDom\Exceptions\InvalidSelectorException
     */
    public static function getMatchStatistic($matchUrl)
    {
        LoggerService::add("get match {$matchUrl} statistic", LoggerService::TYPE_INFO);

        $content = PageContentService::getPageContent($matchUrl);
        if (!$content or ($content and is_array($content) && isset($content['error'])))
        {
            return false;
        }

        LoggerService::add("get match {$matchUrl} statistic hltv debug", LoggerService::TYPE_INFO);
        $document = new Document($content);

        $teamsCells = $document->find("//div[contains(@class, 'teamsBox')]//div[contains(concat(' ', normalize-space(@class), ' '), ' team ')]", Query::TYPE_XPATH);

        if (count($teamsCells) == 0)
        {
            LoggerService::error("teams not found");
            return false;
        }

        LoggerService::add("get match {$matchUrl} statistic hltv debug 2", LoggerService::TYPE_INFO);
        $match = [];

        foreach ($teamsCells as $teamCell)
        {
            $teamScoreRaw = $teamCell->find("//div[contains(@class, '-gradient')]//div[contains(@class, 'lost')]", Query::TYPE_XPATH);
            if (count($teamScoreRaw) == 0)
            {
                $teamScoreRaw = $teamCell->find("//div[contains(@class, '-gradient')]//div[contains(@class, 'won')]", Query::TYPE_XPATH);
            }
            LoggerService::add("get match {$matchUrl} statistic hltv debug cicle", LoggerService::TYPE_INFO);
            if (count($teamScoreRaw) > 0)
            {
                if (!array_key_exists('score1', $match))
                {
                    $match['score1'] = trim($teamScoreRaw[0]->text());
                }
                else
                {
                    $match['score2'] = trim($teamScoreRaw[0]->text());
                }
            }
        }

        LoggerService::add("get match {$matchUrl} statistic hltv debug after cicle", LoggerService::TYPE_INFO);
        try {
            $match['maps'] = static::getMatchMapsInfo($document);
            $match['streams'] = static::getStreams($document);
            $match['maps-pick'] = static::getMathPickInfo($document);
        } catch (\Exception $e){
            $match['maps'] = [];
            $match['streams'] = [];
            $match['maps-pick'] = [];

            LoggerService::error("get match {$matchUrl} statistic hltv error: $e", LoggerService::TYPE_ERROR);
        }


        $eventRaw = $document->find("//div[contains(@class, 'match-page')]//div[contains(@class, 'timeAndEvent')]//div[contains(@class, 'countdown')]", Query::TYPE_XPATH);
        if ($eventRaw)
        {
            if(is_array($eventRaw))
            {
                $match['live'] = $eventRaw[0]->text() == 'LIVE' ? 1 : 0;
            }
            else
            {
                $match['live'] = $eventRaw->text() == 'LIVE' ? 1 : 0;
            }
        }

        LoggerService::add("get match {$matchUrl} statistic hltv debug beforeend", LoggerService::TYPE_INFO);
        return $match;
    }

    /**
     * @param $document
     * @return array|bool
     */
    protected static function getMatchMapsInfo($document)
    {
        $maps = [];
        $mapsRaw = $document->find("//div[contains(concat(' ', normalize-space(@class), ' '), ' maps ')]//div[contains(concat(' ', normalize-space(@class), ' '), ' mapholder ')]", Query::TYPE_XPATH);

        if (count($mapsRaw) > 0)
        {

            $maps = [];
            foreach ($mapsRaw as $mapRaw)
            {

                $mapsNameRaw = $mapRaw->find("//div[contains(concat(' ', normalize-space(@class), ' '), ' map-name-holder ')]/div[contains(concat(' ', normalize-space(@class), ' '), ' mapname ')]", Query::TYPE_XPATH);
                if (count($mapsNameRaw) == 0)
                {
                    continue;
                }

                $map = [
                    'name' => trim($mapsNameRaw[0]->text()),
                    'stat' => []
                ];

                $mapsStatItemRaw = $mapRaw->find("//div[contains(concat(' ', normalize-space(@class), ' '), ' results ')]", Query::TYPE_XPATH);
                if (count($mapsStatItemRaw) == 0)
                {
                    continue;
                }

                $mapsStatItemRaw = $mapsStatItemRaw[0];

                $teamLeftStat = static::getMapResultByType($mapsStatItemRaw, static::TEAM_RESULT_STAT_LEFT);
                if (empty($teamLeftStat))
                {
                    LoggerService::add("left team info not found", LoggerService::TYPE_ERROR);
                    return false;
                }

                $teamRightStat = static::getMapResultByType($mapsStatItemRaw, static::TEAM_RESULT_STAT_RIGHT);
                if (empty($teamRightStat))
                {
                    LoggerService::add("right team info not found", LoggerService::TYPE_ERROR);
                    return false;
                }

                $map['stat'] = [
                    $teamLeftStat,
                    $teamRightStat,
                ];
                unset($teamLeftStat, $teamRightStat);

                $resultLinkRaw = $mapsStatItemRaw->find("//a[contains(concat(' ', normalize-space(@class), ' '), ' results-stats ')]", Query::TYPE_XPATH);
                if (count($resultLinkRaw) > 0)
                {
                    $statUrl = $resultLinkRaw[0]->attr('href');
                    $statUrl = self::urlDecorator($statUrl);
                    $map['stat_url'] = $statUrl;
                    unset($resultLinkRaw);
                }

                $maps[] = $map;
            }
        }

        if (!empty($maps))
        {
            foreach ($maps as &$map)
            {
                if (empty($map['stat_url']))
                {
                    continue;
                }

                $fullStat = static::getMapStat($map['stat_url']);
                if (!$fullStat)
                {
                    LoggerService::error("maps full stat error {$map['stat_url']}");
                    continue;
                }

                $map['full_stat'] = $fullStat;
            }
            unset($map);
        }

        return $maps;
    }

    /**
     * @param $document
     * @return array
     */
    protected static function getMathPickInfo($document): array
    {
        $maps = [];
        $mapsRaw = $document->find("//div[contains(concat(' ', normalize-space(@class), ' '), ' maps ')]//div[contains(concat(' ', normalize-space(@class), ' '), ' standard-box ')]//div[contains(concat(' ', normalize-space(@class), ' '), ' padding ')]", Query::TYPE_XPATH);

        if (count($mapsRaw) == 2)
        {
            $mapRaw = $mapsRaw[1];
            foreach ($mapRaw->find("//div//div", Query::TYPE_XPATH) as $mapPick)
            {
                if (!$mapPick)
                {
                    continue;
                }

                preg_match('/\d\. (.*) removed (.*)/', $mapPick->text(), $matchesRemoved);
                preg_match('/\d\. (.*) picked (.*)/', $mapPick->text(), $matchesPicked);
                preg_match('/\d\. (.*) was left over/', $mapPick->text(), $matchesLeft);
                $map = [];

                if($matchesRemoved)
                {
                    $map['map'] = $matchesRemoved[2];
                    $map['type'] = MatchPickAndBan::OPERATION_TYPE_REMOVED;
                    $map['team'] = $matchesRemoved[1];
                }
                if($matchesPicked)
                {
                    $map['map'] = $matchesPicked[2];
                    $map['type'] = MatchPickAndBan::OPERATION_TYPE_PICKED;
                    $map['team'] = $matchesPicked[1];
                }
                if($matchesLeft)
                {
                    $map['map'] = $matchesLeft[1];
                    $map['type'] = MatchPickAndBan::OPERATION_TYPE_LEFT;
                }

                $maps[] = $map;
            }
        }

        return $maps;
    }

    /**
     * @param $mapsStatItemRaw
     * @param $type
     * @return array|bool
     */
    private static function getMapResultByType($mapsStatItemRaw, $type)
    {
        if (!in_array($type, [static::TEAM_RESULT_STAT_RIGHT, static::TEAM_RESULT_STAT_LEFT]))
        {
            return false;
        }

        $resultRaw = $mapsStatItemRaw->find("//*[contains(concat(' ', normalize-space(@class), ' '), ' {$type} ')]", Query::TYPE_XPATH);

        if (count($resultRaw) == 0)
        {
            LoggerService::add("{$type} team info block not found", LoggerService::TYPE_ERROR);
            return false;
        }

        $resultRaw = $resultRaw[0];
        $resultTeamNameRaw = $resultRaw->find("//div[contains(concat(' ', normalize-space(@class), ' '), ' results-teamname ')]", Query::TYPE_XPATH);

        if (count($resultTeamNameRaw) == 0)
        {
            LoggerService::add("{$type} team name info not found", LoggerService::TYPE_ERROR);
            return false;
        }

        $resultTeamScoreRaw = $resultRaw->find("//div[contains(concat(' ', normalize-space(@class), ' '), ' results-team-score ')]", Query::TYPE_XPATH);

        if (count($resultTeamScoreRaw) == 0)
        {
            LoggerService::add("{$type} team score info not found", LoggerService::TYPE_ERROR);
            return false;
        }

        return [
            'name' => trim($resultTeamNameRaw[0]->text()),
            'score' => trim($resultTeamScoreRaw[0]->text())
        ];
    }

    /**
     * @param $mapStatUrl
     * @return array|bool
     * @throws \DiDom\Exceptions\InvalidSelectorException
     */
    private static function getMapStat($mapStatUrl)
    {
        $content = PageContentService::getPageContent($mapStatUrl);
        if (!$content or ($content and is_array($content) && isset($content['error'])))
        {
            return false;
        }

        $result = [];

        $document = new Document($content);
        $statTables = $document->find("//table[contains(@class, 'stats-table')]", Query::TYPE_XPATH);
        if (count($statTables) == 0)
        {
            LoggerService::add("map stat info not found", LoggerService::TYPE_ERROR);
            return false;
        }

        $result['teams'] = [];

        foreach ($statTables as $statTableRaw)
        {
            $teamRaw = $statTableRaw->find("//th[contains(@class, 'st-teamname')]", Query::TYPE_XPATH);
            if (count($teamRaw) == 0)
            {
                continue;
            }

            $team = [
                'name' => trim($teamRaw[0]->text()),
                'players' => []
            ];

            $playersStatRaw = $statTableRaw->find("//tbody/tr", Query::TYPE_XPATH);
            if (count($playersStatRaw) == 0)
            {
                continue;
            }

            foreach ($playersStatRaw as $playerStatRaw)
            {
                $playerStat = static::getPlayerStat($playerStatRaw);
                if (empty($playerStat))
                {
                    continue;
                }
                $team['players'][] = $playerStat;
            }

            $result['teams'][] = $team;
        }

        return $result;
    }

    /**
     * @param $playerStatRaw
     * @return array|bool
     */
    private static function getPlayerStat($playerStatRaw)
    {

        $result = [];
        $params = [
            static::PLAYER_STAT_PARAM_NICK => 'st-player',
            static::PLAYER_STAT_PARAM_KILLS => 'st-kills',
            static::PLAYER_STAT_PARAM_DEATH => 'st-deaths',
            static::PLAYER_STAT_PARAM_ADR => 'st-adr',
            static::PLAYER_STAT_PARAM_KAST => 'st-kdratio',
            static::PLAYER_STAT_PARAM_RATING => 'st-rating',
        ];

        foreach ($params as $paramCode => $paramPattern)
        {
            $paramRaw = $playerStatRaw->find("//td[contains(@class, '{$paramPattern}')]", Query::TYPE_XPATH);
            if (count($paramRaw) == 0)
            {
                continue;
            }

            $result[$paramCode] = trim($paramRaw[0]->text());
        }

        return (!empty($result) ? $result : false);
    }

    /**
     * @param $team
     * @return array|bool
     * @throws \DiDom\Exceptions\InvalidSelectorException
     */
    public static function getTeam($team)
    {
        ini_set('max_execution_time', 0);
        try {
            $content = PageContentService::getPageContent($team['url']);
        } catch (\Exception $e){
            LoggerService::error("get team {$team['name']} error: $e");

            $content = null;
        }
        LoggerService::info("get team {$team['name']}");
        if (!$content or ($content and is_array($content) && isset($content['error'])))
        {
            return false;
        }

        $document = new Document($content);

        $teamLogoRaw = $document->first('img.teamlogo');
        if (empty($teamLogoRaw))
        {
            LoggerService::error('team logo not found');
            return false;
        }

        $team = [
            'logo' => trim($teamLogoRaw->attr('src')),
            'players' => []
        ];

        $profileRaw = $document->first('.profile-team-info');
        if (empty($profileRaw))
        {
            LoggerService::error('team profile not found');
            return false;
        }

        $nameTeamRaw = $profileRaw->first('.profile-team-name');
        if (empty($nameTeamRaw))
        {
            LoggerService::error('team name not found');
            return false;
        }

        $team['name'] = trim($nameTeamRaw->text());

        $regionTeamRaw = $profileRaw->first("//div[contains(concat(' ', normalize-space(@class), ' '), ' team-country ')]/img", Query::TYPE_XPATH);
        if (isset($regionTeamRaw))
        {
            $team['region'] = trim($regionTeamRaw->attr('title'));

            LoggerService::info('team get region icon name');

            $flagIconPath = parse_url($regionTeamRaw->attr('src'), PHP_URL_PATH);
            $flagIcon = explode('/', $flagIconPath);
            $flagIcon = end($flagIcon);

            $team['regionIconName'] = explode('.', $flagIcon)[0];
        }

        $teamPersonsRaw = $document->find("//div[contains(concat(' ', normalize-space(@class), ' '), ' bodyshot-team ')]/a[contains(concat(' ', normalize-space(@class), ' '), ' col-custom ')]", Query::TYPE_XPATH);

        if (count($teamPersonsRaw) === 0)
        {
            LoggerService::error('teams players not found');
            return false;
        }

        foreach ($teamPersonsRaw as $teamPersonRaw)
        {
            $playerUrl = $teamPersonRaw->attr('href');
            if (strrpos($playerUrl, 'http') === false)
            {
                $playerUrl = static::$baseUrl . $playerUrl;
            }

            $player = [
                'nick' => trim($teamPersonRaw->attr('title')),
                'url' => $playerUrl
            ];

            $playerImageRaw = $teamPersonRaw->first("//img[contains(@class, 'bodyshot-team-img')]", Query::TYPE_XPATH);
            if (isset($playerImageRaw))
            {
                $player['photo'] = trim($playerImageRaw->attr('src'));
            }

            $team['players'][] = $player;
        }

        if (!empty($team['players']))
        {
            foreach ($team['players'] as &$player)
            {
                if (empty($player['url']))
                {
                    continue;
                }

                $personItem = static::getPerson($player);
                if (!$personItem)
                {
                    LoggerService::error("person of player {$player['nick']} not found");
                    continue;
                }
                $player = $player + $personItem;
            }
        }
        
        return $team;
    }

    /**
     * @param $player
     * @return bool
     * @throws \DiDom\Exceptions\InvalidSelectorException
     */
    public static function getPerson($player)
    {
        ini_set('max_execution_time', 0);

        LoggerService::info("get player {$player['nick']} person info");
        try {
            $content = PageContentService::getPageContent($player['url']);
        } catch (\Exception $e){
            LoggerService::error("get player {$player['nick']} person error: $e");

            $content = null;
        }

        if (empty($content) or ($content and is_array($content) && isset($content['error'])))
        {
            return null;
        }

        $document = new Document($content);

        $profileRaw = $document->find("//div[contains(@class, 'playerProfile')]", Query::TYPE_XPATH);

        if (count($profileRaw) == 0)
        {
            return null;
        }

        $profileRaw = $profileRaw[0];

        $profileNickRaw = $profileRaw->find("//h1[contains(@class, 'playerNickname')]", Query::TYPE_XPATH);
        if (count($profileNickRaw) > 0)
        {
            $player['nick'] = trim($profileNickRaw[0]->text());
        }

        $profileAgeRaw = $profileRaw->find("//div[contains(@class, 'playerAge')]/span[2]", Query::TYPE_XPATH);
        if (count($profileAgeRaw) > 0)
        {
            $player['age'] = intval($profileAgeRaw[0]->text());
        }

        $profileRealNameRaw = $profileRaw->find("//div[contains(@class, 'playerRealname')]", Query::TYPE_XPATH);
        if (count($profileRealNameRaw) > 0)
        {
            $player['realname'] = trim($profileRealNameRaw[0]->text());
        }

        $profileRegionRaw = $profileRaw->first("//div[contains(@class, 'playerRealname')]/img[contains(@class, 'flag')]", Query::TYPE_XPATH);
        if (isset($profileRegionRaw))
        {
            $player['region'] = trim($profileRegionRaw->attr('title'));

            LoggerService::info('person get region icon name');

            $flagIconPath = parse_url($profileRegionRaw->attr('src'), PHP_URL_PATH);
            $flagIcon = explode('/', $flagIconPath);
            $flagIcon = end($flagIcon);

            $player['regionIconName'] = explode('.', $flagIcon)[0];
        }

        $profilePhotoRaw = $profileRaw->find("//img[contains(@class, 'bodyshot-img')]", Query::TYPE_XPATH);
        if (count($profilePhotoRaw) > 0)
        {
            $player['photo'] = trim($profilePhotoRaw[0]->attr('src'));
        }

        $profileTeamsRaw = $profileRaw->find("//table[contains(@class, 'team-breakdown')]/tbody/tr", Query::TYPE_XPATH);

        if (count($profileTeamsRaw) > 0)
        {
            $player['teams'] = [];
            foreach ($profileTeamsRaw as $profileTeamRaw)
            {

                $teamNameRaw = $profileTeamRaw->first("//td[contains(@class, 'team-name-cell')]//img[contains(@class, 'team-logo')]", Query::TYPE_XPATH);
                if (empty($teamNameRaw))
                {
                    continue;
                }
                $team = [
                    'name' => trim($teamNameRaw->attr('title')),
                    'logo' => trim($teamNameRaw->attr('src'))
                ];

                $timePeriodRaw = $profileTeamRaw->find("//td[contains(@class, 'time-period-cell')]", Query::TYPE_XPATH);
                if (count($timePeriodRaw) == 0)
                {
                    continue;
                }

                $timePeriodRaw = $timePeriodRaw[0];
                $timeStartRaw = $timePeriodRaw->find("span[1]", Query::TYPE_XPATH);
                if (count($timeStartRaw) == 0)
                {
                    continue;
                }

                $unixtime = trim($timeStartRaw[0]->attr('data-unix'));
                $dateTime = new \DateTime();
                if (strlen($unixtime) == 13)
                {
                    $unixtime = substr($unixtime, 0, -3);
                }
                $dateTime = $dateTime->setTimestamp($unixtime + 3600);

                $team['start_at'] = $dateTime;

                $timeEndRaw = $timePeriodRaw->find("span[2]", Query::TYPE_XPATH);
                if (count($timeEndRaw) > 0)
                {
                    $unixtime = trim($timeEndRaw[0]->attr('data-unix'));
                    $dateTime = new \DateTime();
                    if (strlen($unixtime) == 13)
                    {
                        $unixtime = substr($unixtime, 0, -3);
                    }
                    $dateTime = $dateTime->setTimestamp($unixtime);
                    $team['end_at'] = $dateTime;
                }

                $player['teams'][] = $team;
            }
        }
        //get current team
        $currentTeamBlock = $document->first('.playerTeam');
        if (isset($currentTeamBlock)){
            $currentTeamName = $currentTeamBlock->first('a');

            $teamUrl = $currentTeamName->attr('href');
            $teamUrl = self::urlDecorator($teamUrl);

            $teamName = trim($currentTeamName->text());

            $teamIcon = $currentTeamBlock->first('img');
            $teamIcon = isset($teamIcon) ? $teamIcon->attr('src'): null;
            $teamIcon = isset($teamIcon) ? self::urlDecorator($teamIcon): null;

            $player['currentTeam'] = [
                'name' => $teamName,
                'url' => $teamUrl,
                'logo' => $teamIcon
            ];
        }

        return $player;
    }

    /**
     * @param $match
     * @return array|bool
     * @throws \DiDom\Exceptions\InvalidSelectorException
     */
    public static function getTeams($match)
    {
        $result = [];
        if (empty($match['teams']))
        {
            LoggerService::error('teams not found');
            return null;
        }

        foreach ($match['teams'] as $team)
        {
            if(empty($team))
            {
                continue;
            }
            $teamItem = static::getTeam($team);

            if (!$teamItem)
            {
                LoggerService::error("team not found {$team['name']}");
            } else {
                $result[] = $teamItem;
            }
        }

        return $result;
    }

    /**
     * @param $document
     * @return array|bool
     */
    protected static function getStreams($document)
    {
        $streamsRaw = $document->find("//div[contains(concat(' ', normalize-space(@class), ' '), ' streams ') ]//div[contains(concat(' ', normalize-space(@class), ' '), ' stream-box ') and not(contains(concat(' ', normalize-space(@class), ' '), ' hltv-live '))]//div[contains(concat(' ', normalize-space(@class), ' '), ' stream-box-embed ')]", Query::TYPE_XPATH);
        if (count($streamsRaw) == 0)
        {
            return false;
        }

        $streams = [];
        foreach ($streamsRaw as $streamRaw)
        {
            $streamItem = [
                'url' => trim($streamRaw->attr('data-stream-embed')),
                'name' => trim($streamRaw->text()),
            ];

            $streamLanguageRaw = $streamRaw->find("//img", Query::TYPE_XPATH);
            if (count($streamLanguageRaw) > 0)
            {
                $streamItem['language'] = trim($streamLanguageRaw[0]->attr('title'));
            }

            $streams[] = $streamItem;
        }

        return $streams;
    }

    /**
     * @param $streamUrl
     * @return bool|string
     * @throws \DiDom\Exceptions\InvalidSelectorException
     */
    protected static function getStreamUrl($streamUrl)
    {
        $content = PageContentService::getPageContent($streamUrl);
        if ($content and is_array($content) && isset($content['error']))
        {
            return false;
        }

        $document = new Document($content);
        $streamRaw = $document->find("//iframe", Query::TYPE_XPATH);
        if (count($streamRaw) == 0)
        {
            return false;
        }

        return trim($streamRaw[0]->attr('src'));
    }

    /**
     * @return array|bool
     * @throws \DiDom\Exceptions\InvalidSelectorException
     */
    public static function getMainEvents()
    {
        LoggerService::add("hltv get events", LoggerService::TYPE_INFO);
        $content = PageContentService::getPageContent(static::$baseUrl);
        if ($content and is_array($content) && isset($content['error']))
        {
            return false;
        }
        $document = new Document($content);
        $events = [];
        $eventLiveCells = $document->find('.event');
        foreach ($eventLiveCells as $eventCellLink){
            $eventItem = static::getEventMainInfo($eventCellLink);

            if (empty($eventItem))
            {
                continue;
            }
            $events[] = $eventItem;
        }
        return $events;
    }

    /**
     * @param $eventCellLink
     * @return array|bool
     */
    protected static function getEventMainInfo($eventCellLink)
    {
        $eventUrl = $eventCellLink->attr('href');
        if (strrpos($eventUrl, 'http') === false)
        {
            $eventUrl = static::$baseUrl . $eventUrl;
        }

        $eventItem = [
            'url' => $eventUrl,
        ];

        $imageRaw = $eventCellLink->first("//img[contains(@class, 'logo')]", Query::TYPE_XPATH);

        if (isset($imageRaw))
        {
            $eventItem['image'] = trim($imageRaw->attr('src'));
        }
        $imageHeaderRaw = $eventCellLink->first('.event-header');

        if (isset($imageHeaderRaw))
        {
            $imageHeaderUrl = trim($imageHeaderRaw->attr('src'));
            $imageHeaderUrl = self::urlDecorator($imageHeaderUrl);

            $eventItem['imageHeader'] = $imageHeaderUrl;
        }
        $eventFull = static::getEventFull($eventUrl);

        if (is_array($eventFull)){
            $eventItem += $eventFull;
        }
        return $eventItem;
    }

    /**
     * @param $document
     * @return array
     */
    protected static function getEventDate($document): array
    {
        $result = [];

        $eventDateFrom = $document->first('td.eventdate > span:nth-child(1)');
        $eventDateTo =  $document->first('td.eventdate > span:nth-child(2) > span');

        if (!empty($eventDateFrom))
        {
            $result['started_at'] = static::parseUnixToDateTime($eventDateFrom->attr('data-unix'));
            $result['ended_at'] = static::parseUnixToDateTime($eventDateFrom->attr('data-unix'));
        }
        if (!empty($eventDateTo))
        {
            $result['ended_at'] = static::parseUnixToDateTime($eventDateTo->attr('data-unix'));
        }

        return $result;
    }

    /**
     * @param $unix
     * @return \DateTime
     * @throws \Exception
     */
    protected static function parseUnixToDateTime($unix): \DateTime
    {
        $unixtime = trim($unix);
        $dateTime = new \DateTime();
        if (strlen($unixtime) == 13)
        {
            $unixtime = substr($unixtime, 0, -3);
        }
        $dateTime = $dateTime->setTimestamp((int)$unixtime);

        return $dateTime;
    }

    /**
     * @param $url
     * @return array|bool
     * @throws \DiDom\Exceptions\InvalidSelectorException
     */
    protected static function getEventFull($url)
    {
        LoggerService::add("hltv get event full", LoggerService::TYPE_INFO);
        $content = PageContentService::getPageContent($url);
        if ($content and is_array($content) && isset($content['error']))
        {
            return false;
        }
        $document = new Document($content);

        $eventNameRaw = $document->find("//div[contains(concat(' ', normalize-space(@class), ' '), ' event-page ')]//div[contains(concat(' ', normalize-space(@class), ' '), ' eventname ')]", Query::TYPE_XPATH);

        if (count($eventNameRaw) == 0)
        {
            return false;
        }

        $result = [
            'name' => $eventNameRaw[0]->text(),
            'prize' => 'Other',
            'teams' => null,
            'location' => 'Online'
        ];

        $prizeNameRaw = $document->find("//table[contains(concat(' ', normalize-space(@class), ' '), ' info ')]//td[contains(concat(' ', normalize-space(@class), ' '), ' prizepool ')]", Query::TYPE_XPATH);

        if (count($prizeNameRaw) !== 0)
        {
            $prize = $prizeNameRaw[0]->text();

            $prize = str_replace('spots in', 'места в', $prize);
            $prize = str_replace('spot at', 'место в', $prize);
            $result['prize'] = $prize;
        }

        $teamNameRaw = $document->first("//table[contains(concat(' ', normalize-space(@class), ' '), ' info ')]//td[contains(concat(' ', normalize-space(@class), ' '), ' teamsNumber ')]", Query::TYPE_XPATH);

        if (isset($teamNameRaw))
        {
            $result['teams'] = $teamNameRaw->text() === 'TBA' ? null : ((int) filter_var($teamNameRaw->text(), FILTER_SANITIZE_NUMBER_INT));
        }

        $locationRaw = $document->first("//table[contains(concat(' ', normalize-space(@class), ' '), ' info ')]//td[contains(concat(' ', normalize-space(@class), ' '), ' location  ')]//span[contains(concat(' ', normalize-space(@class), ' '), ' text-ellipsis  ')]", Query::TYPE_XPATH);
        if (isset($locationRaw))
        {
            $result['location'] = $locationRaw->text();
        }

        $eventDates = static::getEventDate($document);
        if (count($eventDates) !== 0)
        {
            $result += $eventDates;
        }
        return $result;
    }

    /**
     * @param int $maxCount
     * @return array
     * @throws \DiDom\Exceptions\InvalidSelectorException
     */
    public static function getMatchesResults($maxCount = 10): array
    {
        $content = PageContentService::getPageContent(self::$baseUrl);

        $document = new Document($content);

        $results = $document->find('.result-box');

        $matchUrls = [];
        foreach ($results as $result){
            $classNames = $result->attr('class');
            if (!stristr($classNames, 'hidden')){
                $resultBlocks[] = $result;

                $url = $result->first('.teambox.a-reset');
                if (isset($url)){
                    $url = $url->attr('href');
                    $matchUrls[] = [
                        'url' => self::urlDecorator($url),
                        'is_live' => false
                    ];
                }
            }
        }
        $matches = [];
        foreach ($matchUrls as $url){
            $matches[] = self::getMatchFull($url);
        }
        return $matches;
    }

    /**
     * @return array
     * @throws \DiDom\Exceptions\InvalidSelectorException
     */
    public static function getPlayersRating(): array
    {
        $content = PageContentService::getPageContent(self::$baseUrl.'/stats');

        $document = new Document($content);

        $players = [];

        $ratingPlayersBlock = $document->first('div.stats-section > div.columns > div:nth-child(1)');
        $ratingPlayers = $ratingPlayersBlock->find('.top-x-box.standard-box');

        foreach ($ratingPlayers as $player)
        {
            $nick = self::getSubElemByClass($player, '.name');
            $rating = self::getSubElemByClass($player, '.rating .bold');
            $maps = self::getSubElemByClass($player, '.average.gtSmartphone-only .bold');
            $url = $player->first('a')->attr('href');

            if (strrpos($url, 'http') === false)
            {
                $url = static::$baseUrl . $url;
                $url = str_replace('stats/players', 'player', $url);
            }

            $players[] = compact('nick', 'rating', 'maps', 'url');
        }

        return $players;
    }

    /**
     * @param $elem
     * @param $class
     * @return string
     */
    private static function getSubElemByClass($elem, $class): string
    {
        $element = $elem->first($class);
        if (isset($element)){
            $element = trim($element->text());
        }
        return $element;
    }

    /**
     * @return array
     * @throws \DiDom\Exceptions\InvalidSelectorException
     */
    public static function getTeamsRating(): array
    {
        $content = PageContentService::getPageContent(self::$baseUrl.'/stats');

        $document = new Document($content);

        $teams = [];

        $ratingTeamsBlock = $document->first('div.stats-section > div.columns > div:nth-child(2)');
        $ratingTeams = $ratingTeamsBlock->find('.top-x-box.standard-box');

        foreach ($ratingTeams as $team)
        {
            $name = self::getSubElemByClass($team, '.name');
            $rating = self::getSubElemByClass($team, '.rating .bold');
            $maps = self::getSubElemByClass($team, '.average.gtSmartphone-only .bold');
            $url = $team->first('a')->attr('href');

            if (strrpos($url, 'http') === false)
            {
                $url = static::$baseUrl . $url;
                $url = str_replace('stats/teams', 'team', $url);
            }

            $teams[] = compact('name', 'rating', 'maps', 'url');
        }

        return $teams;
    }

    /**
     * @param $team
     * @return array|bool
     * @throws \DiDom\Exceptions\InvalidSelectorException
     */
    public static function getTeamRatingInfo($team)
    {
        ini_set('max_execution_time', 0);

        try {
            $content = PageContentService::getPageContent($team['url']);
        } catch (\Exception $e){
            LoggerService::error("get team {$team['name']} error: $e");

            $content = null;
        }
        LoggerService::info("get team {$team['name']}");

        if (!$content or ($content and is_array($content) && isset($content['error'])))
        {
            return false;
        }

        $document = new Document($content);

        $teamLogoRaw = $document->first('.teamlogo');
        if (empty($teamLogoRaw))
        {
            LoggerService::error('team logo not found');
            return false;
        }

        $team = [
            'logo' => trim($teamLogoRaw->attr('src')),
            'players' => []
        ];

        $profileRaw = $document->first('.profile-team-info');
        if (empty($profileRaw))
        {
            LoggerService::error('team profile not found');
            return false;
        }

        $nameTeamRaw = $profileRaw->first( '.profile-team-name');
        if (empty($nameTeamRaw))
        {
            LoggerService::error('team name not found');
            return false;
        }
        $team['name'] = trim($nameTeamRaw->text());

        $regionTeamRaw = $profileRaw->first(".team-country img");

        if (isset($regionTeamRaw))
        {
            $team['region'] = trim($regionTeamRaw->attr('title'));
        }

        $teamPersonsRaw = $document->find("//div[contains(concat(' ', normalize-space(@class), ' '), ' bodyshot-team ')]/a[contains(concat(' ', normalize-space(@class), ' '), ' col-custom ')]", Query::TYPE_XPATH);

        foreach ($teamPersonsRaw as $teamPersonRaw)
        {
            $playerUrl = $teamPersonRaw->attr('href');
            if (strrpos($playerUrl, 'http') === false)
            {
                $playerUrl = static::$baseUrl . $playerUrl;
            }

            $player = [
                'nick' => trim($teamPersonRaw->attr('title')),
                'url' => $playerUrl
            ];

            $playerImageRaw = $teamPersonRaw->find("//img[contains(@class, 'bodyshot-team-img')]", Query::TYPE_XPATH);
            if (count($playerImageRaw) > 0)
            {
                $player['photo'] = trim($playerImageRaw[0]->attr('src'));
            }

            $team['players'][] = $player;
        }

        if (!empty($team['players']))
        {
            $players = [];
            foreach ($team['players'] as $player)
            {
                if (empty($player['url']))
                {
                    continue;
                }

                $personItem = static::getPerson($player);
                if (!$personItem)
                {
                    LoggerService::error("person of player {$player['nick']} not found");
                    continue;
                }
                $players[] = $player + $personItem;
            }
            $team['players'] = $players;
        }

        return $team;
    }

    /**
     * @return array
     * @throws \DiDom\Exceptions\InvalidSelectorException
     */
    public static function getWeekPlayer(): array
    {
        LoggerService::info("getWeekPlayer");
        $content = PageContentService::getPageContent(self::$baseUrl);

        $document = new Document($content);
        $playerOfTheWeekContainer = $document->first('.playerOfTheWeekContainer');

        $nick = self::getSubElemByClass($playerOfTheWeekContainer, '.playerOfTheWeekPlayerName');
        $data = self::getSubElemByClass($playerOfTheWeekContainer, '.playerOfTheWeekData');
        $title =  self::getSubElemByClass($playerOfTheWeekContainer, '.playerOfTheWeekTitle');

        return compact('nick', 'data', 'title');
    }

    /**
     * @param $url
     * @return string
     */
    public static function urlDecorator($url): string
    {
        if (strrpos($url, 'http') === false)
        {
            $url = static::$baseUrl . $url;
        }
        return $url;
    }

    /**
     * @param $url
     * @return array
     * @throws \DiDom\Exceptions\InvalidSelectorException
     */
    public static function getEventData($url)
    {
        LoggerService::info("getEventData");
        $content = PageContentService::getPageContent($url);

        $document = new Document($content);

        $eventName = self::getSubElemByClass($document, '.eventname');
        $dates = $document->first('td.eventdate');

        $dateFrom = $dates->first('td.eventdate > span:nth-child(1)');
        $dateFrom = isset($dateFrom) ? $dateFrom->attr('data-unix'): null;
        $dateFrom = isset($dateFrom) ? self::parseUnixToDateTime($dateFrom): null;

        LoggerService::info("getEventData dateFrom");

        $dateTo = $dates->first('td.eventdate > span:nth-child(2) > span');
        $dateTo = isset($dateTo) ? $dateTo->attr('data-unix'): null;
        $dateTo = isset($dateTo) ? self::parseUnixToDateTime($dateTo): null;

        LoggerService::info("getEventData dateTo");

        $image = $document->first('.sidebar-first-level .event-logo');
        $image = isset($image) ? $image->attr('src'): null;

        if (isset($image)){
            $image = self::urlDecorator($image);
        }
        LoggerService::info("getEventData image $image");


        $prize = self::getSubElemByClass($document, 'td.prizepool');
        $location = self::getSubElemByClass($document, '.location span');
        $teamsCount = self::getSubElemByClass($document, 'td.teamsNumber');

        LoggerService::info("getEventData prize $prize , location $location, teamsCount $teamsCount");

        $event = [
            'name' => $eventName,
            'started_at' => $dateFrom,
            'ended_at' => $dateTo,
            'image' => $image,
            'location' => $location,
            'prize' => $prize,
            'teams' => $teamsCount
        ];
        return $event;
    }

    /**
     * @return array|mixed|\PhpParser\Comment|\PhpParser\Node
     * @throws \DiDom\Exceptions\InvalidSelectorException
     */
    public static function getRatingWeapons()
    {
        $weaponsRatings = [];
        $content = PageContentService::getPageContent(self::$baseUrl. '/stats');

        $document = new Document($content);

        $statsWeaponSection = $document->first('.stats-section');
        if (isset($statsWeaponSection))
        {
            $weaponRatingBlock = $statsWeaponSection->first('.graph');
            if (isset($weaponRatingBlock))
            {
                $weaponsRatingJson = $weaponRatingBlock->attr('data-fusionchart-config');
                if (isset($weaponsRatingJson))
                {
                    $jsonEncoder = new JsonDecoder();

                    $weaponsRatings = $jsonEncoder->decode($weaponsRatingJson);
                    $weaponsRatings = $weaponsRatings['dataSource']['data'] ?? [];
                }
            }
        }
        return $weaponsRatings;
    }

    /**
     * @return array
     * @throws \DiDom\Exceptions\InvalidSelectorException
     */
    public static function getEvents()
    {
        $content = PageContentService::getPageContent(self::$baseUrl. '/events');

        $document = new Document($content);

        $eventsBlocks = $document->find('.events-month');

        $events = [];
        foreach ($eventsBlocks as $eventsBlock)
        {
            $smallEvents = $eventsBlock->find('a.small-event');
            $bigEvents = $eventsBlock->find('a.big-event');

            foreach ($smallEvents as $smallEvent){
                $eventItem = static::getEventMainInfo($smallEvent);

                $events[] = $eventItem;
            }

            foreach ($bigEvents as $bigEvent){
                $eventItem = static::getEventMainInfo($bigEvent);

                $events[] = $eventItem;
            }
        }

        return $events;
    }

    /**
     * @param string $url
     * @return array
     * @throws \DiDom\Exceptions\InvalidSelectorException
     */
    public static function parseFlags(string $url): array
    {
        $content = PageContentService::getPageContent($url);

        $document = new Document($content);
        $flags = $document->find('a');

        unset($flags[0]);

        $urls = [];

        foreach ($flags as $flag){
            $href = $flag->attr('href');
            [$name, $extension] = explode('.', $href);

            $urls[] = [
                'url' => $url.$href,
                'name' => $name,
                'extension' => $extension
            ];
        }
        return $urls;
    }
}
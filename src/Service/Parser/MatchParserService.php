<?php


namespace App\Service\Parser;


use App\Entity\MatchPickAndBan;
use App\Service\HLTVService;
use App\Service\PageContentService;
use DiDom\Document;
use DiDom\Element;
use DiDom\Query;

class MatchParserService
{
    /**
     * @param Document $document
     * @return array
     * @throws \DiDom\Exceptions\InvalidSelectorException
     */
    public function getLiveMatches(Document $document)
    {
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

            if (empty($matchItem['code'])){
                $matchItem['code'] =  $matchItem['url'];
            }
            $matchItem['code'] = md5($matchItem['code']);

            $eventName = $this->getMatchEventName($matchCellLink);

            $matchItem['eventName'] = $eventName;
            $matches[] = $matchItem;
        }

        return $matches;
    }

    /**
     * @param Document $document
     * @return array
     * @throws \DiDom\Exceptions\InvalidSelectorException
     */
    public function getUpcomingMatches(Document $document)
    {
        $matchSections = $document->find(".upcomingMatchesSection");

        $matchesSortedByDay = [];
        foreach ($matchSections as $matchSection){
            $matchCells = $matchSection->find(".upcomingMatch");

            foreach ($matchCells as $matchCell){

                $start_at = $this->getMatchStart($matchCell);

                if (!empty($start_at))
                {
                    $matchesSortedByDay[$start_at->format('m.d')][] = $this->getMatch($matchCell);
                }
            }
        }
        return array_slice($matchesSortedByDay, 0, 7);
    }

    /**
     * @param Document $document
     * @return array
     * @throws \DiDom\Exceptions\InvalidSelectorException
     */
    public function getMatchesResults(Document $document)
    {
        $matchSections = $document->find(".results-sublist");

        $matchesSortedByDay = [];
        foreach ($matchSections as $matchSection){
            $matchCells = $matchSection->find(".result-con");

            foreach ($matchCells as $matchCell){
                $start_at = $this->getMatchStart($matchCell);

                if (!empty($start_at))
                {
                    $matchesSortedByDay[$start_at->format('m.d')][] = $this->getMatch($matchCell);
                }
            }
        }
        return $matchesSortedByDay;
    }

    /**
     * @param Element $matchCell
     * @return array
     */
    public function getMatch(Element $matchCell)
    {
        $url = $this->getMatchUrl($matchCell);
        $eventName = $this->getMatchEventName($matchCell);
        $eventLogo = $this->getMatchEventLogo($matchCell);

        return [
            'url' => $url,
            'is_live' => false,
            'eventName' => $eventName,
            'eventLogo' => $eventLogo
        ];
    }

    /**
     * @param Document $document
     * @param $match
     * @return mixed
     * @throws \DiDom\Exceptions\InvalidSelectorException
     */
    public function getMatchFull(Document $document, $match)
    {
        $teamsCells = $document->find("//div[contains(@class, 'teamsBox')]//div[contains(concat(' ', normalize-space(@class), ' '), ' team ')]", Query::TYPE_XPATH);

        $match['teams'] = $this->getMatchTeams($teamsCells);

        if (empty($match['code'])){
            $match['code'] = $match['url'];
            $match['code'] = md5($match['code']);
        }
        $match['maps'] = $this->getMatchMapsInfo($document);
        $match['streams'] = $this->getStreams($document);

        $eventRaw = $document->first('.event a');
        if (isset($eventRaw))
        {
            $eventUrl = $eventRaw->attr('href');
            $eventUrl = $this->urlDecorator($eventUrl);

            $match['eventName'] = $eventRaw->text();
            $match['eventUrl'] = $eventUrl;
        }

        $match['winrate'] = $this->getMatchMapsWinrate($document, $match['teams']);
        $match['pastMatches'] = $this->getPastMatches($document);
        $match['headToHead'] = $this->getMatchHeadToHead($document);
        $match['statistics'] = $this->updateMatchStatistics($document);

        if (empty($match['start_at']))
        {
            $time = $document->first('.time');
            $time = $time->attr('data-unix');
            $match['start_at'] = HLTVService::parseUnixToDateTime($time);
        }
        return $match;
    }

    /**
     * @param Element $matchCell
     * @return Element|string|null
     * @throws \DiDom\Exceptions\InvalidSelectorException
     */
    public function getMatchUrl(Element $matchCell)
    {
        $matchUrlRaw = $matchCell->first('a');

        $url = $matchUrlRaw->attr('href');
        $url = $this->urlDecorator($url);

        return $url;
    }

    /**
     * @param $url
     * @return string
     */
    public function urlDecorator($url): string
    {
        if (strrpos($url, 'http') === false)
        {
            $url = HLTVService::$baseUrl . $url;
        }
        return $url;
    }

    /**
     * @param Element $matchCell
     * @return \DateTime|Element|string|null
     * @throws \Exception
     */
    public function getMatchStart(Element $matchCell)
    {
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

        return $start_at;
    }

    /**
     * @param Element $matchCell
     * @return Element|\DOMElement|string|null
     * @throws \DiDom\Exceptions\InvalidSelectorException
     */
    public function getMatchEventName(Element $matchCell)
    {
        $matchEvent = $matchCell->first('.matchEventName');

        if (empty($matchEvent))
        {
            $matchEvent = $matchCell->first('.matchInfoEmpty .line-clamp-3');
        }
        if (isset($matchEvent))
        {
            $matchEvent = trim($matchEvent->text());
        }

        return $matchEvent;
    }

    /**
     * @param Element $matchCell
     * @return Element|\DOMElement|string|null
     * @throws \DiDom\Exceptions\InvalidSelectorException
     */
    public function getMatchEventLogo(Element $matchCell)
    {
        $matchEventLogo = $matchCell->first('.matchEventLogo');

        if (isset($matchEventLogo))
        {
            $matchEventLogo = trim($matchEventLogo->attr('src'));

            $matchEventLogo = $this->urlDecorator($matchEventLogo);
        }

        return $matchEventLogo;
    }

    /**
     * @param array $teamsCells
     * @return array
     */
    public function getMatchTeams(array $teamsCells): array
    {
        $teams = [];
        foreach ($teamsCells as $teamCell)
        {
            $team = [];
            $teamUrlRaw = $teamCell->first("//a", Query::TYPE_XPATH);
            if (isset($teamUrlRaw))
            {
                $team['name'] = trim($teamUrlRaw->text());
                $teamUrl = $teamUrlRaw->attr('href');
                $teamUrl = $this->urlDecorator($teamUrl);

                $team['url'] = $teamUrl;
            }

            $teamScoreRaw = $teamCell->first('.lost');
            if (empty($teamScoreRaw))
            {
                $teamScoreRaw = $teamCell->first('.won');
            }

            if (isset($teamScoreRaw))
            {
                $team['score'] = trim($teamScoreRaw->text());
            }

            $teams[] = $team;
        }
        return $teams;
    }

    /**
     * @param $document
     * @return array
     */
    public function getMatchMapsInfo($document)
    {
        $maps = [];
        $mapsRaw = $document->find('.mapholder');

        if (!empty($mapsRaw))
        {

            $maps = [];
            foreach ($mapsRaw as $mapRaw)
            {
                $mapsNameRaw = $mapRaw->first('.mapname');
                if (empty($mapsNameRaw))
                {
                    continue;
                }

                $map = [
                    'name' => trim($mapsNameRaw->text()),
                    'stat' => []
                ];

                $mapsStatItemRaw = $mapRaw->first('.results');
                if (empty($mapsStatItemRaw))
                {
                    continue;
                }

                $teamLeftStat = $this->getMapResultByType($mapsStatItemRaw, HLTVService::TEAM_RESULT_STAT_LEFT);
                $teamRightStat = $this->getMapResultByType($mapsStatItemRaw, HLTVService::TEAM_RESULT_STAT_RIGHT);

                if (empty($teamRightStat) or empty($teamLeftStat))
                {
                    return [];
                }

                $map['stat'] = [
                    $teamLeftStat,
                    $teamRightStat,
                ];
                unset($teamLeftStat, $teamRightStat);

                $resultLinkRaw = $mapsStatItemRaw->first('.results-stats');
                if (isset($resultLinkRaw))
                {
                    $statUrl = $resultLinkRaw->attr('href');
                    $statUrl = $this->urlDecorator($statUrl);

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

                $fullStat = $this->getMapStat($map['stat_url']);
                if (!$fullStat)
                {
                    continue;
                }

                $map['full_stat'] = $fullStat;
            }
            unset($map);
        }

        return $maps;
    }

    /**
     * @param $mapsStatItemRaw
     * @param $type
     * @return array|bool
     */
    private function getMapResultByType($mapsStatItemRaw, $type)
    {
        if (!in_array($type, [HLTVService::TEAM_RESULT_STAT_RIGHT, HLTVService::TEAM_RESULT_STAT_LEFT]))
        {
            return false;
        }

        $resultRaw = $mapsStatItemRaw->first("//*[contains(concat(' ', normalize-space(@class), ' '), ' {$type} ')]", Query::TYPE_XPATH);

        if (empty($resultRaw))
        {
            return false;
        }

        $resultTeamNameRaw = $resultRaw->first("//div[contains(concat(' ', normalize-space(@class), ' '), ' results-teamname ')]", Query::TYPE_XPATH);

        if (empty($resultTeamNameRaw))
        {
            return false;
        }

        $resultTeamScoreRaw = $resultRaw->first("//div[contains(concat(' ', normalize-space(@class), ' '), ' results-team-score ')]", Query::TYPE_XPATH);

        if (empty($resultTeamScoreRaw))
        {
            return false;
        }

        return [
            'name' => trim($resultTeamNameRaw->text()),
            'score' => trim($resultTeamScoreRaw->text())
        ];
    }

    /**
     * @param $mapStatUrl
     * @return array|bool
     * @throws \DiDom\Exceptions\InvalidSelectorException
     */
    private function getMapStat($mapStatUrl)
    {
        $content = PageContentService::getPageContent($mapStatUrl);
        if (!$content or ($content and is_array($content) && isset($content['error'])))
        {
            return false;
        }

        $result = [];

        $document = new Document($content);
        $statTables = $document->find("//table[contains(@class, 'stats-table')]", Query::TYPE_XPATH);
        if (empty($statTables))
        {
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
                $playerStat = $this->getPlayerStat($playerStatRaw);
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
    private function getPlayerStat($playerStatRaw)
    {
        $result = [];
        $params = [
            HLTVService::PLAYER_STAT_PARAM_NICK => 'st-player',
            HLTVService::PLAYER_STAT_PARAM_KILLS => 'st-kills',
            HLTVService::PLAYER_STAT_PARAM_DEATH => 'st-deaths',
            HLTVService::PLAYER_STAT_PARAM_ADR => 'st-adr',
            HLTVService::PLAYER_STAT_PARAM_KAST => 'st-kdratio',
            HLTVService::PLAYER_STAT_PARAM_RATING => 'st-rating',
        ];

        foreach ($params as $paramCode => $paramPattern)
        {
            $paramRaw = $playerStatRaw->first("//td[contains(@class, '{$paramPattern}')]", Query::TYPE_XPATH);
            if (empty($paramRaw))
            {
                continue;
            }

            $result[$paramCode] = trim($paramRaw->text());
        }

        return (!empty($result) ? $result : false);
    }

    /**
     * @param $document
     * @return array
     */
    public function getStreams($document)
    {
        $streamsRaw = $document->find("//div[contains(concat(' ', normalize-space(@class), ' '), ' streams ') ]//div[contains(concat(' ', normalize-space(@class), ' '), ' stream-box ') and not(contains(concat(' ', normalize-space(@class), ' '), ' hltv-live '))]//div[contains(concat(' ', normalize-space(@class), ' '), ' stream-box-embed ')]", Query::TYPE_XPATH);
        if (empty($streamsRaw))
        {
            return [];
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
     * @param $document
     * @param $matchTeams
     * @return array
     */
    public function getMatchMapsWinrate($document, $matchTeams)
    {
        $matchMaps = $document->first('.map-stats-infobox');

        if (isset($matchMaps)){
            $maps = $matchMaps->find('.map-stats-infobox-maps');

            $mapsData = [];

            foreach ($matchTeams as $num => $team)
            {
                foreach ($maps as $map)
                {
                    $name = HLTVService::getSubElemByClass($map, '.mapname');
                    $winRates = $map->find('.map-stats-infobox-stats');
                    $image = $map->first('img');
                    if (isset($image)){
                        $image = $image->attr('src');

                        $image = $this->urlDecorator($image);
                    }

                    $winRateTeam = null;
                    if (count($winRates) === 2)
                    {
                        $winRateTeam = HLTVService::getSubElemByClass($winRates[$num], 'a');
                    }

                    $mapsData[$team['name']][] = [
                        'name' => $name,
                        'image' => $image,
                        'winrate' => $winRateTeam,
                    ];
                }
            }
            return $mapsData;
        }
    }

    /**
     * @param $document
     * @return array
     */
    public function getPastMatches($document)
    {
        $teamBoxData = [];
        $pastMatches = $document->first('.past-matches');

        if (isset($pastMatches)){
            $teamBoxes = $pastMatches->find('.standard-box');

            foreach ($teamBoxes as $teamBox)
            {
                $teamName = HLTVService::getSubElemByClass($teamBox, 'a');

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
        }
        return $teamBoxData;
    }

    /**
     * @param $document
     * @return array
     */
    public function getMatchHeadToHead($document)
    {
        $headToHead = [];

        $headToHeadSection = $document->first('.head-to-head');
        if (isset($headToHeadSection)){
            $leftTeamWins =  $document->first('.flexbox-column.flexbox-center.grow.right-border');
            if (isset($leftTeamWins)){
                $leftTeamWins = HLTVService::getSubElemByClass($leftTeamWins, '.bold');
                if (isset($leftTeamWins)){
                    $headToHead[0] = $leftTeamWins;
                }
            }
            $rightTeamWins = $document->first('.flexbox-column.flexbox-center.grow.left-border');
            if (isset($rightTeamWins)){
                $rightTeamWins = HLTVService::getSubElemByClass($rightTeamWins, '.bold');
                if (isset($rightTeamWins)){
                    $headToHead[1] = $rightTeamWins;
                }
            }
        }
        return $headToHead;
    }

    /**
     * @param Document $document
     * @return array|bool
     * @throws \DiDom\Exceptions\InvalidSelectorException
     */
    public function updateMatchStatistics(Document $document)
    {
        $teamsCells = $document->find("//div[contains(@class, 'teamsBox')]//div[contains(concat(' ', normalize-space(@class), ' '), ' team ')]", Query::TYPE_XPATH);

        if (empty($teamsCells))
        {
            return false;
        }
        $match = [];

        foreach ($teamsCells as $teamCell)
        {

            $teamScoreRaw = $teamCell->first("//div[contains(@class, '-gradient')]//div[contains(@class, 'lost')]", Query::TYPE_XPATH);
            if (empty($teamScoreRaw))
            {
                $teamScoreRaw = $teamCell->first("//div[contains(@class, '-gradient')]//div[contains(@class, 'won')]", Query::TYPE_XPATH);
            }
            if (isset($teamScoreRaw))
            {
                if (!array_key_exists('score1', $match))
                {
                    $match['score1'] = trim($teamScoreRaw->text());
                }
                else
                {
                    $match['score2'] = trim($teamScoreRaw->text());
                }
            }
        }

        try {
            $match['maps'] = $this->getMatchMapsInfo($document);
            $match['streams'] = $this->getStreams($document);
            $match['maps-pick'] = $this->getMathPickInfo($document);
        } catch (\Exception $e){
            $match['maps'] = [];
            $match['streams'] = [];
            $match['maps-pick'] = [];
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
        $match['playerMapStats'] = $this->getMatchsMapsStatistics($document);

        return $match;
    }

    /**
     * @param $document
     * @return array
     */
    protected function getMathPickInfo($document)
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
     * @param $document
     * @return array
     */
    public function getMatchsMapsStatistics($document)
    {
        $matchMapPlayersStats = $document->first('.matchstats');

        if (empty($matchMapPlayersStats))
        {
            return [];
        }
        $pageMatchStatisticsMenu = $matchMapPlayersStats->first('.box-headline.flexbox.nowrap.header');
        if (empty($pageMatchStatisticsMenu))
        {
            return [];
        }
        $menuOptions = $pageMatchStatisticsMenu->find('.dynamic-map-name-full');
        if (empty($menuOptions))
        {
            return [];
        }

        $maps = [];
        $mapStats = [];

        if (empty($menuOptions))
        {
            return $mapStats;
        }
        foreach ($menuOptions as $menuOption)
        {
            $maps[] = [
                'name' => trim($menuOption->text()),
                'id' => $menuOption->attr('id')
            ];
        }
        foreach ($maps as $map)
        {
            $mapStats[$map['name']] = [
                'name' => $map['name']
            ];
            $mapStat = $matchMapPlayersStats->first("#{$map['id']}-content");

            if (isset($mapStat)){
                $totalStat = $mapStat->find('.totalstats');

                if (!empty($totalStat) and count($totalStat) > 1)
                {
                    $mapStats[$map['name']]['stat']['left']['total'] =  $this->getMatchPlayersStatsArray($totalStat[0]);
                    $mapStats[$map['name']]['stat']['right']['total'] =  $this->getMatchPlayersStatsArray($totalStat[1]);
                }

                $terroristStat = $mapStat->find('.tstats');

                if (!empty($terroristStat) and count($terroristStat) > 1)
                {
                    $mapStats[$map['name']]['stat']['left']['terrorist'] =  $this->getMatchPlayersStatsArray($terroristStat[0]);
                    $mapStats[$map['name']]['stat']['right']['terrorist'] =  $this->getMatchPlayersStatsArray($terroristStat[1]);
                }

                $counterTerroristStat = $mapStat->find('.ctstats');

                if (!empty($counterTerroristStat) and count($counterTerroristStat) > 1)
                {
                    $mapStats[$map['name']]['stat']['left']['counterTerrorist'] =  $this->getMatchPlayersStatsArray($counterTerroristStat[0]);
                    $mapStats[$map['name']]['stat']['right']['counterTerrorist'] =  $this->getMatchPlayersStatsArray($counterTerroristStat[1]);
                }
            }
        }

        return $mapStats;
    }

    /**
     * @param $stats
     * @return array
     */
    public function getMatchPlayersStatsArray($stats)
    {
        $playersStats = $stats->find('tr');

        unset($playersStats[0]);

        $players = [];
        foreach ($playersStats as $playersStat){

            $nick = HLTVService::getSubElemByClass($playersStat, '.players .player-nick');
            $kd = HLTVService::getSubElemByClass($playersStat, '.kd');
            $plusMinus = HLTVService::getSubElemByClass($playersStat, '.plus-minus');
            $adr = HLTVService::getSubElemByClass($playersStat, '.adr');
            $kast = HLTVService::getSubElemByClass($playersStat, '.kast');
            $rating = HLTVService::getSubElemByClass($playersStat, '.rating');

            $players[] = compact('nick', 'kd', 'plusMinus', 'adr', 'kast', 'rating');
        }

        return $players;
    }

    /**
     * @param $document
     * @return array
     */
    public function getMainMatchesResults($document)
    {
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
                        'url' => $this->urlDecorator($url),
                        'is_live' => false,
                        'is_main_result' => true
                    ];
                }
            }
        }
        return $matchUrls;
     }
}
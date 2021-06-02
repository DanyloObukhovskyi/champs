<?php
/**
 * Product: champs.
 * Date: 24/06/2020
 */

namespace App\Service;


use App\Entity\MatchPickAndBan;
use App\Service\Parser\EventParserService;
use App\Service\Parser\MatchParserService;
use App\Service\Parser\TeamParserService;
use DiDom\Document;
use DiDom\Query;
use PhpParser\JsonDecoder;

class HLTVService
{
    public static $baseUrl = 'https://www.hltv.org';

    const TEAM_RESULT_STAT_RIGHT = 'results-right';
    const TEAM_RESULT_STAT_LEFT = 'results-left';

    const PLAYER_STAT_PARAM_NICK = 'nick';
    const PLAYER_STAT_PARAM_KILLS = 'kills';
    const PLAYER_STAT_PARAM_DEATH = 'death';
    const PLAYER_STAT_PARAM_ADR = 'adr';
    const PLAYER_STAT_PARAM_KAST = 'kast';
    const PLAYER_STAT_PARAM_RATING = 'rating';

    /**
     * @return array|bool
     * @throws \DiDom\Exceptions\InvalidSelectorException
     */
    public static function getMatches()
    {
        $parseMatchService = new MatchParserService();

        LoggerService::add("hltv get matches", LoggerService::TYPE_INFO);
        $content = PageContentService::getPageContent(static::$baseUrl . '/matches');
        if ($content and is_array($content) && isset($content['error'])) {
            return false;
        }
        $document = new Document($content);

        $matches = $parseMatchService->getLiveMatches($document);
        $matchesSortedByDay = $parseMatchService->getUpcomingMatches($document);

        $content = PageContentService::getPageContent(self::$baseUrl . '/results');
        $document = new Document($content);
        $resultMatchesSortedByDay = $parseMatchService->getMatchesResults($document);

        foreach ($matchesSortedByDay as $matchesDay) {

            $matches = array_merge((array)$matches, $matchesDay);
        }
        foreach ($resultMatchesSortedByDay as $matchesDay) {

            $matches = array_merge((array)$matches, $matchesDay);
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
        $matchParserService = new MatchParserService();

        ini_set('max_execution_time', 0);

        $content = PageContentService::getPageContent($match['url']);
        if (!$content or ($content and is_array($content) && isset($content['error']))) {
            return null;
        }
        $document = new Document($content);

        return $matchParserService->getMatchFull($document, $match);
    }

    /**
     * @param $team
     * @return array|bool
     * @throws \DiDom\Exceptions\InvalidSelectorException
     */
    public static function getTeam($team)
    {
        ini_set('max_execution_time', 0);
        $teamParserService = new TeamParserService();

        try {
            $content = PageContentService::getPageContent($team['url']);
        } catch (\Exception $e) {

            $content = null;
        }
        if (!$content or ($content and is_array($content) && isset($content['error']))) {
            return false;
        }

        $document = new Document($content);

        return $teamParserService->getMatchTeam($document);
    }

    /**
     * @param $player
     * @return bool
     * @throws \DiDom\Exceptions\InvalidSelectorException
     */
    public static function getPerson($player)
    {
        ini_set('max_execution_time', 0);

        try {
            $content = PageContentService::getPageContent($player['url']);
        } catch (\Exception $e) {

            $content = null;
        }

        if (empty($content) or ($content and is_array($content) && isset($content['error']))) {
            return null;
        }

        $document = new Document($content);

        $profileRaw = $document->find("//div[contains(@class, 'playerProfile')]", Query::TYPE_XPATH);

        if (count($profileRaw) == 0) {
            return null;
        }

        $profileRaw = $profileRaw[0];

        $profileNickRaw = $profileRaw->find("//h1[contains(@class, 'playerNickname')]", Query::TYPE_XPATH);
        if (count($profileNickRaw) > 0) {
            $player['nick'] = trim($profileNickRaw[0]->text());
        }

        $profileAgeRaw = $profileRaw->find("//div[contains(@class, 'playerAge')]/span[2]", Query::TYPE_XPATH);
        if (count($profileAgeRaw) > 0) {
            $player['age'] = intval($profileAgeRaw[0]->text());
        }

        $profileRealNameRaw = $profileRaw->find("//div[contains(@class, 'playerRealname')]", Query::TYPE_XPATH);
        if (count($profileRealNameRaw) > 0) {
            $player['realname'] = trim($profileRealNameRaw[0]->text());
        }

        $profileRegionRaw = $profileRaw->first("//div[contains(@class, 'playerRealname')]/img[contains(@class, 'flag')]", Query::TYPE_XPATH);
        if (isset($profileRegionRaw)) {
            $player['region'] = trim($profileRegionRaw->attr('title'));

            // LoggerService::info('person get region icon name');

            $flagIconPath = parse_url($profileRegionRaw->attr('src'), PHP_URL_PATH);
            $flagIcon = explode('/', $flagIconPath);
            $flagIcon = end($flagIcon);

            $player['regionIconName'] = explode('.', $flagIcon)[0];
        }

        $profilePhotoRaw = $profileRaw->find("//img[contains(@class, 'bodyshot-img')]", Query::TYPE_XPATH);
        if (count($profilePhotoRaw) > 0) {
            $player['photo'] = trim($profilePhotoRaw[0]->attr('src'));
        }

        $profileTeamsRaw = $profileRaw->find("//table[contains(@class, 'team-breakdown')]/tbody/tr", Query::TYPE_XPATH);

        if (count($profileTeamsRaw) > 0) {
            $player['teams'] = [];
            foreach ($profileTeamsRaw as $profileTeamRaw) {

                $teamNameRaw = $profileTeamRaw->first("//td[contains(@class, 'team-name-cell')]//img[contains(@class, 'team-logo')]", Query::TYPE_XPATH);
                if (empty($teamNameRaw)) {
                    continue;
                }
                $team = [
                    'name' => trim($teamNameRaw->attr('title')),
                    'logo' => trim($teamNameRaw->attr('src'))
                ];

                $timePeriodRaw = $profileTeamRaw->find("//td[contains(@class, 'time-period-cell')]", Query::TYPE_XPATH);
                if (count($timePeriodRaw) == 0) {
                    continue;
                }

                $timePeriodRaw = $timePeriodRaw[0];
                $timeStartRaw = $timePeriodRaw->find("span[1]", Query::TYPE_XPATH);
                if (count($timeStartRaw) == 0) {
                    continue;
                }

                $unixtime = trim($timeStartRaw[0]->attr('data-unix'));
                $dateTime = new \DateTime();
                if (strlen($unixtime) == 13) {
                    $unixtime = substr($unixtime, 0, -3);
                }
                $dateTime = $dateTime->setTimestamp($unixtime + 3600);

                $team['start_at'] = $dateTime;

                $timeEndRaw = $timePeriodRaw->find("span[2]", Query::TYPE_XPATH);
                if (count($timeEndRaw) > 0) {
                    $unixtime = trim($timeEndRaw[0]->attr('data-unix'));
                    $dateTime = new \DateTime();
                    if (strlen($unixtime) == 13) {
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
        if (isset($currentTeamBlock)) {
            $currentTeamName = $currentTeamBlock->first('a');

            $teamUrl = $currentTeamName->attr('href');
            $teamUrl = self::urlDecorator($teamUrl);

            $teamName = trim($currentTeamName->text());

            $teamIcon = $currentTeamBlock->first('img');
            $teamIcon = isset($teamIcon) ? $teamIcon->attr('src') : null;
            $teamIcon = isset($teamIcon) ? self::urlDecorator($teamIcon) : null;

            $player['currentTeam'] = [
                'name' => $teamName,
                'url' => $teamUrl,
                'logo' => $teamIcon
            ];
        }

        return $player;
    }

    /**
     * @return array|bool
     * @throws \DiDom\Exceptions\InvalidSelectorException
     */
    public static function getMainEvents()
    {
        LoggerService::add("hltv get events", LoggerService::TYPE_INFO);

        try {
            $content = PageContentService::getPageContent(static::$baseUrl);
        } catch (\Exception $e) {
            LoggerService::error("hltv get events $e", LoggerService::TYPE_INFO);

            $content = null;
        }

        if ($content and is_array($content) && isset($content['error'])) {
            return false;
        }
        $document = new Document($content);
        $events = [];
        $eventLiveCells = $document->find('.event');

        foreach ($eventLiveCells as $eventCellLink) {
            $eventItem = static::getEventMainInfo($eventCellLink);

            if (empty($eventItem)) {
                continue;
            }
            $events[] = $eventItem;
        }
        return $events;
    }


    /**
     * @param $eventCellLink
     * @return array|bool
     * @throws \DiDom\Exceptions\InvalidSelectorException
     */
    protected static function getEventMainInfo($eventCellLink)
    {
        $eventUrl = $eventCellLink->attr('href');
        if (strrpos($eventUrl, 'http') === false) {
            $eventUrl = static::$baseUrl . $eventUrl;
        }

        $eventItem = [
            'url' => $eventUrl,
        ];

        $imageRaw = $eventCellLink->first("//img[contains(@class, 'logo')]", Query::TYPE_XPATH);

        if (isset($imageRaw)) {
            $eventItem['image'] = trim($imageRaw->attr('src'));
        }
        $imageHeaderRaw = $eventCellLink->first('.event-header');

        if (isset($imageHeaderRaw)) {
            $imageHeaderUrl = trim($imageHeaderRaw->attr('src'));
            $imageHeaderUrl = self::urlDecorator($imageHeaderUrl);

            $eventItem['imageHeader'] = $imageHeaderUrl;
        }
        $eventFull = static::getEventFull($eventUrl);

        if (is_array($eventFull)) {
            $eventItem += $eventFull;
        }

        return $eventItem;
    }

    /**
     * @param $unix
     * @return \DateTime
     * @throws \Exception
     */
    public static function parseUnixToDateTime($unix): \DateTime
    {
        $unixtime = trim($unix);
        $dateTime = new \DateTime();
        if (strlen($unixtime) == 13) {
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
    public static function getEventFull($url, $isRelated = false)
    {
        $eventParserService = new EventParserService();

        try {
            $content = PageContentService::getPageContent($url);
        } catch (\Exception $e) {

            $content = null;
        }
        if ($content and is_array($content) && isset($content['error'])) {
            return false;
        }
        $document = new Document($content);

        return $eventParserService->getEventFull($document, $url, $isRelated);
    }

    /**
     * @return array
     * @throws \DiDom\Exceptions\InvalidSelectorException
     */
    public static function getPlayersRating(): array
    {
        $content = PageContentService::getPageContent(self::$baseUrl . '/stats');

        $document = new Document($content);

        $players = [];

        $ratingPlayersBlock = $document->first('div.stats-section > div.columns > div:nth-child(1)');
        $ratingPlayers = $ratingPlayersBlock->find('.top-x-box.standard-box');

        foreach ($ratingPlayers as $player) {
            $nick = self::getSubElemByClass($player, '.name');
            $rating = self::getSubElemByClass($player, '.rating .bold');
            $maps = self::getSubElemByClass($player, '.average.gtSmartphone-only .bold');
            $url = $player->first('a')->attr('href');

            if (strrpos($url, 'http') === false) {
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
    public static function getSubElemByClass($elem, $class)
    {
        $element = $elem->first($class);
        if (isset($element)) {
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
        $content = PageContentService::getPageContent(self::$baseUrl . '/stats');

        $document = new Document($content);

        $teams = [];

        $ratingTeamsBlock = $document->first('div.stats-section > div.columns > div:nth-child(2)');
        $ratingTeams = $ratingTeamsBlock->find('.top-x-box.standard-box');

        foreach ($ratingTeams as $team) {
            $name = self::getSubElemByClass($team, '.name');
            $rating = self::getSubElemByClass($team, '.rating .bold');
            $maps = self::getSubElemByClass($team, '.average.gtSmartphone-only .bold');
            $url = $team->first('a')->attr('href');

            if (strrpos($url, 'http') === false) {
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
        } catch (\Exception $e) {
            LoggerService::error("get team {$team['name']} error: $e");

            $content = null;
        }
        LoggerService::info("get team {$team['name']}");

        if (!$content or ($content and is_array($content) && isset($content['error']))) {
            return false;
        }

        $document = new Document($content);

        $teamLogoRaw = $document->first('.teamlogo');
        if (empty($teamLogoRaw)) {
            LoggerService::error('team logo not found');
            return false;
        }

        $team = [
            'logo' => trim($teamLogoRaw->attr('src')),
            'players' => []
        ];

        $profileRaw = $document->first('.profile-team-info');
        if (empty($profileRaw)) {
            LoggerService::error('team profile not found');
            return false;
        }

        $nameTeamRaw = $profileRaw->first('.profile-team-name');
        if (empty($nameTeamRaw)) {
            LoggerService::error('team name not found');
            return false;
        }
        $team['name'] = trim($nameTeamRaw->text());

        $regionTeamRaw = $profileRaw->first(".team-country img");

        if (isset($regionTeamRaw)) {
            $team['region'] = trim($regionTeamRaw->attr('title'));
        }

        $teamPersonsRaw = $document->find("//div[contains(concat(' ', normalize-space(@class), ' '), ' bodyshot-team ')]/a[contains(concat(' ', normalize-space(@class), ' '), ' col-custom ')]", Query::TYPE_XPATH);

        foreach ($teamPersonsRaw as $teamPersonRaw) {
            $playerUrl = $teamPersonRaw->attr('href');
            if (strrpos($playerUrl, 'http') === false) {
                $playerUrl = static::$baseUrl . $playerUrl;
            }

            $player = [
                'nick' => trim($teamPersonRaw->attr('title')),
                'url' => $playerUrl
            ];

            $playerImageRaw = $teamPersonRaw->find("//img[contains(@class, 'bodyshot-team-img')]", Query::TYPE_XPATH);
            if (count($playerImageRaw) > 0) {
                $player['photo'] = trim($playerImageRaw[0]->attr('src'));
            }

            $team['players'][] = $player;
        }

        if (!empty($team['players'])) {
            $players = [];
            foreach ($team['players'] as $player) {
                if (empty($player['url'])) {
                    continue;
                }

                $personItem = static::getPerson($player);
                if (!$personItem) {
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
        $title = self::getSubElemByClass($playerOfTheWeekContainer, '.playerOfTheWeekTitle');

        return compact('nick', 'data', 'title');
    }

    /**
     * @param $url
     * @return string
     */
    public static function urlDecorator($url): string
    {
        if (strrpos($url, 'http') === false) {
            $url = static::$baseUrl . $url;
        }
        return $url;
    }

    /**
     * @return array|mixed|\PhpParser\Comment|\PhpParser\Node
     * @throws \DiDom\Exceptions\InvalidSelectorException
     */
    public static function getRatingWeapons()
    {
        $weaponsRatings = [];
        $content = PageContentService::getPageContent(self::$baseUrl . '/stats');

        $document = new Document($content);

        $statsWeaponSection = $document->first('.stats-section');
        if (isset($statsWeaponSection)) {
            $weaponRatingBlock = $statsWeaponSection->first('.graph');
            if (isset($weaponRatingBlock)) {
                $weaponsRatingJson = $weaponRatingBlock->attr('data-fusionchart-config');
                if (isset($weaponsRatingJson)) {
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
        try {
            $content = PageContentService::getPageContent(self::$baseUrl . '/events');
        } catch (\Exception $e) {
            LoggerService::info("getEvents $e");

            return [];
        }

        $document = new Document($content);

        $eventsBlocks = $document->find('.events-month');

        $events = [];
        foreach ($eventsBlocks as $eventsBlock) {
            $smallEvents = $eventsBlock->find('a.small-event');
            $bigEvents = $eventsBlock->find('a.big-event');

            foreach ($smallEvents as $smallEvent) {
                $url = $smallEvent->attr('href');
                if (isset($url)) {
                    $url = self::urlDecorator($url);
                }

                $eventItem = static::getEventFull($url);

                $image = $smallEvent->first('img.logo');

                if (isset($image)) {
                    $image = $image->attr('src');

                    $image = self::urlDecorator($image);

                    $eventItem['image'] = $image;
                }
                $events[] = $eventItem;
            }

            foreach ($bigEvents as $bigEvent) {
                $url = $bigEvent->attr('href');
                if (isset($url)) {
                    $url = self::urlDecorator($url);
                }
                $eventItem = static::getEventFull($url);

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

        foreach ($flags as $flag) {
            $href = $flag->attr('href');
            [$name, $extension] = explode('.', $href);

            $urls[] = [
                'url' => $url . $href,
                'name' => $name,
                'extension' => $extension
            ];
        }
        return $urls;
    }

    /**
     * @return array
     */
    public static function getMainMatchesResults()
    {
        $matchParserService = new MatchParserService();
        $content = PageContentService::getPageContent(self::$baseUrl);
        $document = new Document($content);

        return $matchParserService->getMainMatchesResults($document);
    }
}
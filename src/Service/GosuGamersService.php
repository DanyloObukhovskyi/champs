<?php
/**
 * Product: champs.
 * Date: 24/06/2020
 */

namespace App\Service;


use DiDom\Document;
use DiDom\Query;

class GosuGamersService
{
    private static $baseUrl = 'https://www.gosugamers.net';

    const TEAM_RESULT_STAT_1 = 'team-1';
    const TEAM_RESULT_STAT_2 = 'team-2';

    public static function getMatches()
    {
        LoggerService::add("mathes func");
        LoggerService::add("gosu get cs matches", LoggerService::TYPE_INFO);
        $content = PageContentService::getPageContent(static::$baseUrl . '/counterstrike/matches');
        if ($content and is_array($content) && isset($content['error'])) {
            return false;
        }

        $document = new Document($content);

        $matches = [];
        $matchCells = $document->find("//div[contains(@class, 'cell')]/a", Query::TYPE_XPATH);

        foreach ($matchCells as $matchCellLink) {
            if (count($matchCellLink->find("div[contains(@class, 'match')]", Query::TYPE_XPATH)) == 0) {
                continue;
            }

            $matchItem = [];
            $url = $matchCellLink->attr('href');

            if (strrpos($url, 'http') === false) {
                $url = static::$baseUrl . $url;
            }

            $matchItem['url'] = $url;

            $matchInfo = $matchCellLink->find("//div[contains(@class, 'match-info')]", Query::TYPE_XPATH);
            if (empty($matchInfo)) {
                return ['error' => true, 'code' => 'match_info_not_found'];
            }

            $matchItem['teams'] = [];

            $team1 = $matchInfo[0]->find("//span[contains(@class, 'team-1')]", Query::TYPE_XPATH);
            if (!empty($team1)) {
                $matchItem['teams'][] = trim($team1[0]->text());
            }


            $team2 = $matchInfo[0]->find("//span[contains(@class, 'team-2')]", Query::TYPE_XPATH);
            if (!empty($team2)) {
                $matchItem['teams'][] = trim($team2[0]->text());
            }

            $matchStatus = $matchCellLink->find("//div[contains(@class, 'match-status')]", Query::TYPE_XPATH);
            if (empty($matchStatus)) {
                return ['error' => true, 'code' => 'match_status_not_found'];
            }

            $startTime = null;
            $matchDate = $matchStatus[0]->find("//span[contains(@class, 'post-date')]/time", Query::TYPE_XPATH);
            if (!empty($matchDate)) {
                $matchItem['start_time'] = $matchDate[0]->attr('datetime');
            } else {
                $matchLive = $matchStatus[0]->find("//span", Query::TYPE_XPATH);
                if (!empty($matchLive)) {
                    if (strtolower($matchLive[0]->text()) == 'live') {
                        $matchItem['is_live'] = true;
                    }
                }
            }

            $matches[] = $matchItem;

        }

        return $matches;
    }

    public static function getMatch($match)
    {
        LoggerService::add("match func");
        LoggerService::add("get match info {$match['teams'][0]} vs {$match['teams'][1]}", LoggerService::TYPE_INFO);

        $content = PageContentService::getPageContent($match['url']);
        if ($content and is_array($content) && isset($content['error'])) {
            return false;
        }

        $document = new Document($content);

        $dateRaw = $document->find("//div[contains(@class, 'match')]//div[contains(@class, 'details')]/small", Query::TYPE_XPATH);
        if (count($dateRaw) > 0) {
            $date = trim($dateRaw[0]->text());

            $match['start_at'] = \DateTime::createFromFormat("M d, Y, H:i A e", $date);
        }

        $teamsCells = $document->find("//div[contains(@class, 'cell match')]//div[contains(@class, 'team')]", Query::TYPE_XPATH);

        $match['teams'] = [];
        $match['code'] = $match['start_at']->format('Y-m-d');

        foreach ($teamsCells as $teamCell) {
            $team = [];

            $teamUrlRaw = $teamCell->find("//h2/a", Query::TYPE_XPATH);
            if (empty($teamUrlRaw)) {
                return false;
            }

            $teamUrl = $teamUrlRaw[0]->attr('href');
            if (strrpos($teamUrl, 'http') === false) {
                $teamUrl = static::$baseUrl . $teamUrl;
            }

            $team['url'] = $teamUrl;

            $teamFullInfo = static::getTeam($team);
            if (!$teamFullInfo or ($teamFullInfo and is_array($teamFullInfo) && isset($teamFullInfo['error']))) {
                if (isset($team['name'])) {
                    LoggerService::error("team not found {$team['name']}");
                } else {
                    LoggerService::error("team not found {$team['url']}");
                }
//                try{
//                    TeamService::cr
//                }

                return false;
            }

            if ($teamFullInfo) {
                $team = $team + $teamFullInfo;
                $match['code'] .= (!empty($matchItem['code']) ? '|' : "") . $team['name'];
            }

            $match['teams'][] = $team;

            $match['code'] = md5($match['code']);

        }
        unset($team);

        return $match;
    }

    public static function getMatchFull($match)
    {
        LoggerService::add("matchfull func");
        LoggerService::add("get match full info {$match['teams'][0]['name']} vs {$match['teams'][1]['name']}", LoggerService::TYPE_INFO);

        $content = PageContentService::getPageContent($match['url']);
        if ($content and is_array($content) && isset($content['error'])) {
            return false;
        }

        $document = new Document($content);

        foreach ($match['teams'] as &$team) {
            $teamFull = static::getTeamFull($team);
            if (!$teamFull) {
                LoggerService::error("team  {$team['name']} full info is empty");
                continue;
            }
            $team = $teamFull;
        }
        unset($team);

        $scoreRaw = $document->find("//div[contains(@class, 'match')]//div[contains(@class, 'details')]//div[contains(@class, 'score')]/span", Query::TYPE_XPATH);
        if (count($scoreRaw) > 0) {
            $match['score1'] = trim($scoreRaw[0]->text());
            $match['score2'] = trim($scoreRaw[1]->text());
        }

        $match['maps'] = static::getMatchMapsInfo($document);

        $match['streams'] = static::getStreams($document);

        return $match;
    }

    public static function getMatchStatistic($matchUrl)
    {
        LoggerService::add("matchStatistic func");
        LoggerService::add("get match {$matchUrl} statistic", LoggerService::TYPE_INFO);

        $content = PageContentService::getPageContent($matchUrl);
        if ($content and is_array($content) && isset($content['error'])) {
            return false;
        }

        $document = new Document($content);

        $scoreRaw = $document->find("//div[contains(@class, 'match')]//div[contains(@class, 'details')]//div[contains(@class, 'score')]/span", Query::TYPE_XPATH);
        if (count($scoreRaw) > 0) {
            $match['score1'] = trim($scoreRaw[0]->text());
            $match['score2'] = trim($scoreRaw[1]->text());
        }

        $match['maps'] = static::getMatchMapsInfo($document);

        $match['streams'] = static::getStreams($document);

        return $match;
    }

    protected static function getMatchMapsInfo($document)
    {
        LoggerService::add("matchesMapsInfo func");
        $mapsRaw = $document->find("//div[contains(@data-tabs-content, 'matchGames')]//div[contains(@id, 'game')]//div[contains(@class, 'game-data')]", Query::TYPE_XPATH);
        if (count($mapsRaw) == 0) {
            return false;
        }

        $maps = [];
        foreach ($mapsRaw as $mapRaw) {
            $mapsNameRaw = $mapRaw->find("//div[contains(concat(' ', normalize-space(@class), ' '), ' map ')]/following::text()[1]", Query::TYPE_XPATH);
            if (count($mapsNameRaw) == 0) {
                continue;
            }

            $map = [
                'name' => trim($mapsNameRaw[0]),
                'stat' => []
            ];

            $mapsStatItemRaw = $mapRaw->find("//div[contains(@class, 'game-data')]", Query::TYPE_XPATH);
            if (count($mapsStatItemRaw) == 0) {
                continue;
            }

            $mapsStatItemRaw = $mapsStatItemRaw[0];

            $teamLeftStat = static::getMapResultByType($mapsStatItemRaw, static::TEAM_RESULT_STAT_1);
            if (empty($teamLeftStat)) {
                LoggerService::add("left team info not found", LoggerService::TYPE_ERROR);
                return false;
            }

            $teamRightStat = static::getMapResultByType($mapsStatItemRaw, static::TEAM_RESULT_STAT_2);
            if (empty($teamRightStat)) {
                LoggerService::add("right team info not found", LoggerService::TYPE_ERROR);
                return false;
            }

            $map['stat'] = [
                $teamLeftStat,
                $teamRightStat,
            ];
            unset($teamLeftStat, $teamRightStat);
            $maps[] = $map;
        }

        return $maps;
    }

    private static function getMapResultByType($mapsStatItemRaw, $type)
    {
        LoggerService::add("mapResultByType func");
        if (!in_array($type, [static::TEAM_RESULT_STAT_1, static::TEAM_RESULT_STAT_2])) {
            return false;
        }

        $resultRaw = $mapsStatItemRaw->find("//div[contains(concat(' ', normalize-space(@class), ' '), ' {$type} ')]//div[contains(concat(' ', normalize-space(@class), ' '), ' details ')]", Query::TYPE_XPATH);

        if (count($resultRaw) == 0) {
            LoggerService::add("{$type} team info block not found", LoggerService::TYPE_ERROR);
            return false;
        }

        $resultRaw = $resultRaw[0];
        $resultTeamNameRaw = $resultRaw->find("//a[contains(concat(' ', normalize-space(@class), ' '), ' name ')]", Query::TYPE_XPATH);

        if (count($resultTeamNameRaw) == 0) {
            LoggerService::add("{$type} team name info not found", LoggerService::TYPE_ERROR);
            return false;
        }

        $resultTeamScoreRaw = $resultRaw->find("//span[contains(concat(' ', normalize-space(@class), ' '), ' score ')]", Query::TYPE_XPATH);

        if (count($resultTeamScoreRaw) == 0) {
            LoggerService::add("{$type} team score info not found", LoggerService::TYPE_ERROR);
            return false;
        }

        return [
            'name' => trim($resultTeamNameRaw[0]->text()),
            'score' => trim($resultTeamScoreRaw[0]->text())
        ];
    }

    public static function getTeams($match)
    {
        LoggerService::add("teams func");
        $result = [];
        if (empty($match['teams'])) {
            LoggerService::error('teams not found');
            return false;
        }

        foreach ($match['teams'] as $team) {
            $teamItem = static::getTeam($team);
            if (!$teamItem) {
                LoggerService::error('team not found');
                return false;
            }

            $result[] = $teamItem;

        }
        LoggerService::add("end teams func");

        return $result;
    }

    public static function getTeam($team)
    {
        LoggerService::add("team func 365");
        if (!empty($team['full_name'])) {
            LoggerService::add($team['full_name']);
            return $team;
        }

        LoggerService::add("team func debug 0");

        $content = PageContentService::getPageContent($team['url']);
        if (!$content or ($content and is_array($content) && isset($content['error']))) {
            return false;
        }
        LoggerService::add("team func debug 1");

        $document = new Document($content);

        $avatarRaw = $document->find("//div[contains(@class, 'player-header')]//div[contains(@class, 'avatar')]", Query::TYPE_XPATH);
        if (count($avatarRaw) > 0) {
            $avatarRaw = $avatarRaw[0]->attr('style');
            preg_match("/url\(\'(.*?)\'\)/i", $avatarRaw, $avatarMatch);
            if (!empty($avatarMatch) && !empty($avatarMatch[1])) {
                $team['logo'] = trim($avatarMatch[1]);
            }
        }

        LoggerService::add("team func debug 2");

        $nameRaw = $document->find("//h3[contains(@class, 'name')]", Query::TYPE_XPATH);
        if (count($nameRaw) > 0) {
            $team['name'] = trim($nameRaw[0]->text());
        }


        $realNameRaw = $document->find("//div[contains(@class, 'meta')]//span[contains(@class, 'real-name')]", Query::TYPE_XPATH);
        if (count($realNameRaw) > 0) {
            $team['full_name'] = trim($realNameRaw[0]->text());
        }
        LoggerService::add("team func debug 3");

        $regionRaw = $document->find("//span[contains(@class, 'region')]", Query::TYPE_XPATH);
        if (count($regionRaw) > 0) {
            $team['region'] = trim($regionRaw[0]->text());
        }

        return $team;
    }

    public static function getTeamFull($team)
    {
        LoggerService::add("teamfull func");
        $content = PageContentService::getPageContent($team['url']);
        if (!$content or ($content and is_array($content) && isset($content['error']))) {
            return $content;
        }

        $document = new Document($content);

        $playersRaw = $document->find("//div[contains(@class, 'team-players')]//div[contains(@class, 'row')]/a[contains(@class, 'player')]", Query::TYPE_XPATH);
        if (count($playersRaw) == 0) {
            return $team;
        }

        foreach ($playersRaw as $playersItemRaw) {
            $playerUrl = $playersItemRaw->attr('href');
            if (strrpos($playerUrl, 'http') === false) {
                $playerUrl = static::$baseUrl . $playerUrl;
            }

            $playerNickRaw = $playersItemRaw->find("//div[contains(@class, 'name')]", Query::TYPE_XPATH);
            $player = [
                'nick' => trim($playerNickRaw[0]->text()),
                'url' => $playerUrl
            ];

            $team['players'][] = $player;

        }

        if (!empty($team['players'])) {
            foreach ($team['players'] as &$player) {
                if (empty($player['url'])) {
                    continue;
                }

                $playerItem = static::getPerson($player);
                if (!$playerItem) {
                    LoggerService::error("team player {$player['nick']} not found, url: {$player['url']}");
                    continue;
                }
                $player = $player + $playerItem;
            }
        }


        return $team;
    }

    public static function getPerson($player)
    {
        LoggerService::add("person func");
        $content = PageContentService::getPageContent($player['url']);
        if ($content and is_array($content) && isset($content['error'])) {
            return false;
        }

        $document = new Document($content);

        $avatarRaw = $document->find("//div[contains(@class, 'avatar')]", Query::TYPE_XPATH);
        if (count($avatarRaw) > 0) {
            $avatarRaw = $avatarRaw[0]->attr('style');
            preg_match("/url\(\'(.*?)\'\)/i", $avatarRaw, $avatarMatch);
            if (!empty($avatarMatch) && !empty($avatarMatch[1])) {
                $player['photo'] = trim($avatarMatch[1]);
            }
        }

        if (empty($player['nick'])) {
            $nickRaw = $document->find("//h3[contains(@class, 'name')]", Query::TYPE_XPATH);
            if (count($nickRaw) > 0) {
                $player['nick'] = trim($nickRaw[0]->text());
            }
        }

        $realNameRaw = $document->find("//span[contains(@class, 'real-name')]", Query::TYPE_XPATH);
        if (count($realNameRaw) > 0) {
            $realName = trim($realNameRaw[0]->text());
            if (!empty($realName)) {
                $player['real_name'] = $realName;
            }
        }


        $regionRaw = $document->find("//span[contains(@class, 'region')]", Query::TYPE_XPATH);
        if (count($regionRaw) > 0) {
            $region = trim($regionRaw[0]->text());
            if (!empty($region)) {
                $player['region'] = $region;
            }
        }

        return $player;
    }

    protected static function getStreams($document)
    {
        LoggerService::add("streams func");
        $streamsRaw = $document->find("//ul[contains(@id, 'streamTabs')]/li/a[contains(concat(' ', normalize-space(@class), ' '), ' stream ') and not(contains(concat(' ', normalize-space(@class), ' '), ' icon-plus '))]", Query::TYPE_XPATH);
        if (count($streamsRaw) == 0) {
            return false;
        }

        $streams = [];
        foreach ($streamsRaw as $streamRaw) {
            $streamItem = [];
            $url = $streamRaw->attr('href');
            if (strrpos($url, 'http') === false) {
                $url = static::$baseUrl . $url;
            }

            $streamItemUrl = static::getStreamUrl($url);
            if (empty($streamItemUrl)) {
                continue;
            }

            $streamItem['url'] = $streamItemUrl;

            $streamNameRaw = $streamRaw->find("text()", Query::TYPE_XPATH);
            if (count($streamNameRaw) > 0) {
                $streamItem['name'] = trim($streamNameRaw[0]);
            }

            $streamLanguageRaw = $streamRaw->find("//small", Query::TYPE_XPATH);
            if (count($streamLanguageRaw) > 0) {
                $streamLanguageText = $streamLanguageRaw[0]->find("text()", Query::TYPE_XPATH);
                $streamItem['language'] = trim($streamLanguageText[0]);
            }

            $streams[] = $streamItem;
        }

        return $streams;
    }

    protected static function getStreamUrl($streamUrl)
    {
        LoggerService::add("streamUrl func");
        $content = PageContentService::getPageContent($streamUrl);
        if ($content and is_array($content) && isset($content['error'])) {
            return false;
        }

        $document = new Document($content);
        $streamRaw = $document->find("//iframe", Query::TYPE_XPATH);
        if (count($streamRaw) == 0) {
            return false;
        }

        return trim($streamRaw[0]->attr('src'));
    }

}
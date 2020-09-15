<?php


namespace App\Service\Parser;


use App\Service\HLTVService;
use DiDom\Document;
use DiDom\Element;

class MatchParserService
{
    public function getUpcomingMatches(Document $document)
    {
        $matchSections = $document->find(".upcomingMatchesSection");

        $matchesSortedByDay = [];
        foreach ($matchSections as $matchSection){
            $matchCells = $matchSection->find(".upcomingMatch");

            foreach ($matchCells as $matchCell){

                $url = $this->getMatchUrl($matchCell);
                $start_at = $this->getMatchStart($matchCell);
                $teams = $this->getMatchTeams($matchCell);
                $eventName = $this->getMatchEventName($matchCell);

                if (isset($url))
                {
                    $code = md5($url);
                }
                $matchesSortedByDay[$start_at->format('m.d')][] = [
                    'url' => $url,
                    'teams' => $teams,
                    'is_live' => false,
                    'start_at' => $start_at,
                    'code' => $code,
                    'eventName' => $eventName
                ];
            }
        }
        return array_slice($matchesSortedByDay, 0, 7);
    }

    public function getMatchUrl(Element $matchCell)
    {
        $matchUrlRaw = $matchCell->first('a');

        if (isset($matchUrlRaw))
        {
            $url = $matchUrlRaw->attr('href');

            $url = $this->urlDecorator($url);
        }

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

    public function getMatchTeams(Element $matchCell)
    {
        $matchTeamsSector = $matchCell->first(".matchTeams");

        $teams = [];
        if (isset($matchTeamsSector)){
            $matchTeams = $matchTeamsSector->find('.matchTeam');

            foreach($matchTeams as $teamRaw)
            {
                $teams[] = trim($teamRaw->text());
            }
        }
        return $teams;
    }

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
}
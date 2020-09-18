<?php


namespace App\Service\Parser;


use App\Service\HLTVService;
use App\Service\PageContentService;
use DiDom\Document;
use DiDom\Query;
use phpDocumentor\Reflection\DocBlock\Tags\Return_;

class EventParserService
{
    /**
     * @param $document
     * @param $url
     * @param bool $isRelated
     * @return array|bool
     */
    public function getEventFull($document, $url, $isRelated = false)
    {
        $eventNameRaw = $document->first("//div[contains(concat(' ', normalize-space(@class), ' '), ' event-page ')]//div[contains(concat(' ', normalize-space(@class), ' '), ' eventname ')]", Query::TYPE_XPATH);

        if (empty($eventNameRaw))
        {
            return false;
        }

        $result = [
            'url' => $url,
            'name' => $eventNameRaw->text(),
            'prize' => 'Other',
            'teams' => null,
            'location' => 'Online'
        ];

        $prizeNameRaw = $document->first("//table[contains(concat(' ', normalize-space(@class), ' '), ' info ')]//td[contains(concat(' ', normalize-space(@class), ' '), ' prizepool ')]", Query::TYPE_XPATH);

        if (isset($prizeNameRaw) !== 0)
        {
            $prizeNameRaw = str_replace('spots in', 'места в', $prizeNameRaw->text());
            $prizeNameRaw = str_replace('spot at', 'место в', $prizeNameRaw);

            $result['prize'] = $prizeNameRaw;
        }

        $teamNameRaw = $document->first("//table[contains(concat(' ', normalize-space(@class), ' '), ' info ')]//td[contains(concat(' ', normalize-space(@class), ' '), ' teamsNumber ')]", Query::TYPE_XPATH);

        if (isset($teamNameRaw))
        {
            $result['teams'] = $teamNameRaw->text() === 'TBA' ? null : ((int) filter_var($teamNameRaw->text(), FILTER_SANITIZE_NUMBER_INT));
        }

        $locationRaw = $document->first('.location .flag-align');
        if (isset($locationRaw))
        {
            $result['location'] = $locationRaw->text();

            $locationIcon = $locationRaw->first('img');

            if (isset($locationIcon))
            {
                $iconUrl = $locationIcon->attr('src');
                $iconUrlExplode = explode('/', $iconUrl);
                [$iconName, $extension] = explode('.', end($iconUrlExplode));

                $result['flag'] = [
                    'url' => $iconUrl,
                    'name' => $iconName,
                    'extension' => $extension
                ];
            }
        }
        $imageHeader = $document->first('.header img.event-img');
        if (isset($imageHeader))
        {
            $imageHeader = $imageHeader->attr('src');
            $imageHeader = HLTVService::urlDecorator($imageHeader);

            $result['imageHeader'] = $imageHeader;
        }

        $eventDates = $this->getEventDate($document);
        if (count($eventDates) !== 0)
        {
            $result += $eventDates;
        }
        $eventItem = $result;

        $prizeDistributionBlock = $document->first('.placements');


        if (isset($prizeDistributionBlock))
        {
            $prizeDistributions = $prizeDistributionBlock->find('.placement');

            foreach ($prizeDistributions as $prizeDistribution)
            {
                $distribution = [];
                $team = $prizeDistribution->first('.team a');
                if (isset($team))
                {
                    $teamName = trim($team->text());
                    $teamUrl = $team->attr('href');

                    if (isset($teamUrl))
                    {
                        $teamUrl = HLTVService::urlDecorator($teamUrl);
                    }

                    $distribution['teamName'] = $teamName;
                    $distribution['teamUrl'] = $teamUrl;
                }
                $position = $prizeDistribution->first('div:nth-child(2)');
                if (isset($position))
                {
                    $distribution['position'] = trim($position->text());
                }
                $prizes = $prizeDistribution->find('.prizeMoney');
                if (!empty($prizes))
                {
                    foreach ($prizes as $prize)
                    {
                        if (!empty(trim($prize->text())))
                        {
                            $distribution['prize'] = trim($prize->text());
                        }
                    }
                }
                $eventItem['prizeDistributions'][] = $distribution;
            }
        }

        $groupPlayBlock = $document->first('.groups-container');

        $groups = [];
        if (isset($groupPlayBlock))
        {
            $groupPlays = $groupPlayBlock->find('.group');
            foreach ($groupPlays as $groupPlay)
            {
                $teams = $groupPlay->find('tr');

                if (!empty($teams))
                {
                    $groupHeader = $teams[0]->find('td');

                    $groupName = trim($groupHeader[0]->text());
                    $groups[$groupName] = [];

                    unset($teams[0]);

                    foreach ($teams as $team)
                    {
                        $teamValues = $team->find('td');
                        $teamName = trim($teamValues[0]->text());
                        $groups[$groupName][$teamName] = [];

                        unset($teamValues[0]);
                        for ($i = 1; $i <= (int)count($teamValues); $i++)
                        {
                            $fieldName = trim($groupHeader[$i]->text());
                            $groups[$groupName][$teamName][$fieldName] = trim($teamValues[$i]->text());
                        }
                    }
                }
            }
            $eventItem['groupPLay'] = $groups;
        }
        $mapPoolBlock = $document->first('.map-pool');

        if (isset($mapPoolBlock))
        {
            $maps = [];
            $mapPools = $mapPoolBlock->find('.map-pool-map-name');

            foreach ($mapPools as $mapPool)
            {
                $maps[] = trim($mapPool->text());
            }

            $eventItem['mapsPool'] = $maps;
        }

        if (!$isRelated){
            $eventItem['relatedEvents'] = $this->getRelatedEvents($document);
        }

        $eventItem['teamsAttending'] = $this->parseTeamsAttenting($document);

        return $eventItem;
    }

    /**
     * @param $document
     * @return array
     * @throws \DiDom\Exceptions\InvalidSelectorException
     */
    protected function getRelatedEvents($document)
    {
        $relatedEventsBlock = $document->first('.related-events');

        if (isset($relatedEventsBlock))
        {
            $relatedEvents = [];
            $events = $relatedEventsBlock->find('.related-event a');

            foreach ($events as $event)
            {
                $eventUrl = $event->attr('href');
                if (isset($eventUrl))
                {
                    $eventUrl = HLTVService::urlDecorator($eventUrl);

                    $relatedEvents[] =  HLTVService::getEventFull($eventUrl, true);
                }
            }
            return $relatedEvents;
        }
    }

    /**
     * @param $document
     * @return array
     * @throws \Exception
     */
    protected function getEventDate($document): array
    {
        $result = [];

        $eventDateFrom = $document->first('.eventdate > span:nth-child(1)');
        $eventDateTo =  $document->first('.eventdate > span:nth-child(2) > span');

        if (!empty($eventDateFrom))
        {
            $result['started_at'] = HLTVService::parseUnixToDateTime($eventDateFrom->attr('data-unix'));
            $result['ended_at'] = HLTVService::parseUnixToDateTime($eventDateFrom->attr('data-unix'));
        }
        if (!empty($eventDateTo))
        {
            $result['ended_at'] = HLTVService::parseUnixToDateTime($eventDateTo->attr('data-unix'));
        }

        return $result;
    }

    /**
     * @param $document
     * @return array
     */
    public function parseTeamsAttenting($document)
    {
        $attendingBlock = $document->first('.teams-attending');

        if (empty($attendingBlock))
        {
            return [];
        }
        $teamsAttendingCols = $attendingBlock->find('.col');

        $teamsAttending = [];
        foreach ($teamsAttendingCols as $team)
        {
            $teamLink = $team->first('.team-name a');

            if (empty($teamLink))
            {
                continue;
            }

            $teamUrl = HLTVService::urlDecorator($teamLink->attr('href'));
            $teamName = HLTVService::getSubElemByClass($teamLink, '.text');
            $number = HLTVService::getSubElemByClass($teamLink, '.event-world-rank');

            $teamsAttending[] = [
                'teamName' => $teamName,
                'teamUrl' => $teamUrl,
                'number' => $number
            ];
        }

        return $teamsAttending;
    }
}
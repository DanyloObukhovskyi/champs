<?php


namespace App\Service\Parser;


use App\Service\HLTVService;
use App\Traits\EntityManager;
use DiDom\Document;
use DiDom\Query;
use App\Service\TeamService;
use Doctrine\ORM\EntityManagerInterface;

class EventParserService
{
    use EntityManager;
    /**
     * @var EntityManagerInterface
     */
    public $entityManager;

    /** @var TeamService */
    protected $teamService;

    public function __construct()
    {
        $entityManager = $this->getEntityManager();
        $this->teamService = new TeamService($entityManager);
    }

    /**
     * @param Document $document
     * @param $url
     * @param bool $isRelated
     * @return array|bool
     * @throws \DiDom\Exceptions\InvalidSelectorException
     */
    public function getEventFull(Document $document, $url, $isRelated = false)
    {
        dump($url);
        $eventNameRaw = $document->first("//div[contains(concat(' ', normalize-space(@class), ' '), ' event-page ')]//div[contains(concat(' ', normalize-space(@class), ' '), ' eventname ')]", Query::TYPE_XPATH);
        if(empty($eventNameRaw)){
            $eventNameRaw = $document->first("//div[contains(concat(' ', normalize-space(@class), ' '), ' event-page ')]//h1[contains(concat(' ', normalize-space(@class), ' '), ' eventname ')]", Query::TYPE_XPATH);
        }

        if (empty($eventNameRaw)) {
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

        if (isset($prizeNameRaw) !== 0) {
            $prizeNameRaw = str_replace('spots in', 'места в', $prizeNameRaw->text());
            $prizeNameRaw = str_replace('spot at', 'место в', $prizeNameRaw);

            $result['prize'] = $prizeNameRaw;
        }

        $teamNameRaw = $document->first("//table[contains(concat(' ', normalize-space(@class), ' '), ' info ')]//td[contains(concat(' ', normalize-space(@class), ' '), ' teamsNumber ')]", Query::TYPE_XPATH);

        if (isset($teamNameRaw)) {
            $result['teams'] = $teamNameRaw->text() === 'TBA' ? null : ((int)filter_var($teamNameRaw->text(), FILTER_SANITIZE_NUMBER_INT));
        }

        $locationRaw = $document->first('.location .flag-align');
        if (isset($locationRaw)) {
            $result['location'] = $locationRaw->text();

            $locationIcon = $locationRaw->first('img');

            if (isset($locationIcon)) {
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
        if (isset($imageHeader)) {
            $imageHeader = $imageHeader->attr('src');
            $imageHeader = HLTVService::urlDecorator($imageHeader);

            $result['imageHeader'] = $imageHeader;
        }

        $eventDates = $this->getEventDate($document);
        if (count($eventDates) !== 0) {
            $result += $eventDates;
        }
        $eventItem = $result;
        $eventItem['brackets'] = $this->getBracketsTable($document);

        $prizeDistributionBlock = $document->first('.placements');


        if (isset($prizeDistributionBlock)) {
            $prizeDistributions = $prizeDistributionBlock->find('.placement');

            foreach ($prizeDistributions as $prizeDistribution) {
                $distribution = [];
                $team = $prizeDistribution->first('.team a');
                if (isset($team)) {
                    $teamName = trim($team->text());
                    $teamUrl = $team->attr('href');

                    if (isset($teamUrl)) {
                        $teamUrl = HLTVService::urlDecorator($teamUrl);
                    }

                    $distribution['teamName'] = $teamName;
                    $distribution['teamUrl'] = $teamUrl;
                    if(!empty($teamName) && !empty($teamUrl)){
                        $fullTeam = HLTVService::getTeam(['name' => $teamName, 'url' => $teamUrl]);

                        $this->teamService->createTeams([$fullTeam]);
                    }
                }
                $position = $prizeDistribution->first('div:nth-child(2)');
                if (isset($position)) {
                    $distribution['position'] = trim($position->text());
                }
                $prizes = $prizeDistribution->find('.prizeMoney');
                if (!empty($prizes)) {
                    foreach ($prizes as $prize) {
                        if (!empty(trim($prize->text()))) {
                            $distribution['prize'] = trim($prize->text());
                        }
                    }
                }
                $eventItem['prizeDistributions'][] = $distribution;
            }
        }

        $groupPlayBlock = $document->first('.groups-container');

        $groups = [];
        if (isset($groupPlayBlock)) {
            $groupPlays = $groupPlayBlock->find('.group');
            foreach ($groupPlays as $groupPlay) {
                $teams = $groupPlay->find('tr');

                if (!empty($teams)) {
                    $groupHeader = $teams[0]->find('td');

                    $groupName = trim($groupHeader[0]->text());
                    $groups[$groupName] = [];

                    unset($teams[0]);

                    foreach ($teams as $team) {
                        $teamValues = $team->find('td');
                        $teamName = trim($teamValues[0]->text());
                        $groups[$groupName][$teamName] = [];

                        unset($teamValues[0]);
                        for ($i = 1; $i <= (int)count($teamValues); $i++) {
                            $fieldName = trim($groupHeader[$i]->text());
                            $groups[$groupName][$teamName][$fieldName] = trim($teamValues[$i]->text());
                        }
                    }
                }
            }
            $eventItem['groupPLay'] = $groups;
        }
        $mapPoolBlock = $document->first('.map-pool');

        if (isset($mapPoolBlock)) {
            $maps = [];
            $mapPools = $mapPoolBlock->find('.map-pool-map-name');

            foreach ($mapPools as $mapPool) {
                $maps[] = trim($mapPool->text());
            }

            $eventItem['mapsPool'] = $maps;
        }

        if (!$isRelated) {
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

        if (isset($relatedEventsBlock)) {
            $relatedEvents = [];
            $events = $relatedEventsBlock->find('.related-event a');

            foreach ($events as $event) {
                $eventUrl = $event->attr('href');
                if (isset($eventUrl)) {
                    $eventUrl = HLTVService::urlDecorator($eventUrl);

                    $relatedEvents[] = HLTVService::getEventFull($eventUrl, true);
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
        $eventDateTo = $document->first('.eventdate > span:nth-child(2) > span');

        if (!empty($eventDateFrom)) {
            $result['started_at'] = HLTVService::parseUnixToDateTime($eventDateFrom->attr('data-unix'));
            $result['ended_at'] = HLTVService::parseUnixToDateTime($eventDateFrom->attr('data-unix'));
        }
        if (!empty($eventDateTo)) {
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

        if (empty($attendingBlock)) {
            return [];
        }
        $teamsAttendingCols = $attendingBlock->find('.col');

        $teamsAttending = [];
        foreach ($teamsAttendingCols as $team) {
            $teamLink = $team->first('.team-name a');

            if (empty($teamLink)) {
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

            if(!empty($teamName) && !empty($teamUrl)){
                $fullTeam = HLTVService::getTeam(['name' => $teamName, 'url' => $teamUrl]);

                $this->teamService->createTeams([$fullTeam]);
            }

        }
        return $teamsAttending;
    }

    /**
     * @param $document
     * @return array
     */
    public function getBracketsTable($document)
    {
        $brackets = $document->first('.slotted-bracket-placeholder');

        $bracketsTeamInfo = [];
        if (isset($brackets)) {
            $brackets = $brackets->attr('data-slotted-bracket-json');

            $brackets = json_decode($brackets, false);

            $bracketsJson = $brackets;

            if (isset($bracketsJson->rounds)) {
                $bracketsJson = $bracketsJson->rounds;
            } else {
                unset($bracketsJson->name);
                unset($bracketsJson->display);
            }

            foreach ($bracketsJson as $roundsType => $rounds) {
                $roundName = $rounds->roundName->name ?? null;

                if (!is_string($rounds) and isset($roundName)) {
                    $bracketsTeamInfo['rounds'][$roundsType][$roundName] = [];
                }
            }

            foreach ($bracketsJson as $roundsType => $rounds) {
                dump($rounds->roundName->name ?? null);
                if (isset($rounds->match)) {
                    $bracket = [
                        'matchUrl' => HLTVService::urlDecorator($rounds->slot1->match->matchPageURL),
                    ];
                    $bracketsTeamInfo['rounds'][$roundsType][$rounds->roundName->name][] = $bracket;
                } else {
                    dump('---------------------------------------------------');

                    if (!is_string($rounds)) {
                        $roundName = $rounds->roundName->name;

                        unset($rounds->roundName);

                        foreach ($rounds as $type => $round) {

                            if (!empty($round->match)) {
                                $team1Score = isset($round->result) ? $round->result->matchScore->team1Score ?? null : null;
                                $team2Score = isset($round->result) ? $round->result->matchScore->team2Score ?? null : null;
                                $bracket = [
                                    'matchUrl' => HLTVService::urlDecorator($round->match->matchPageURL),
                                ];
                                if (isset($round->team1) and isset($round->team1->team)) {
                                    $teamLogo = $round->team1->team->logoURL ?? null;
                                    if(empty($teamLogo)){
                                        $teamLogo = $round->team1->team->teamLogo->dayLogoURL ?? null;
                                    }

                                    $bracket['team1'] = [
                                        'name' => $round->team1->team->name,
                                        'url' => HLTVService::urlDecorator($round->team1->team->profileURL),
                                        'logo' => $teamLogo ?? null,
                                        'score' => $team1Score
                                    ];
                                }
                                if (isset($round->team2) and isset($round->team2->team)) {
                                    $teamLogo2 = $round->team2->team->logoURL ?? null;
                                    if(empty($teamLogo2)){
                                        $teamLogo2 = $round->team2->team->teamLogo->dayLogoURL ?? null;
                                    }
                                    $bracket['team2'] = [
                                        'name' => $round->team2->team->name,
                                        'url' => HLTVService::urlDecorator($round->team2->team->profileURL),
                                        'logo' => $teamLogo2 ?? null,
                                        'score' => $team2Score
                                    ];
                                }
                                $bracketsTeamInfo['rounds'][$roundsType][$roundName][] = $bracket;
                            }
                        }
                    }
                }
            }
        } else {
            $brackets = $document->first('.bracket');

            if (isset($brackets)) {
                $bracketsJson = $brackets->attr('data-bracket-json');

                $bracketsJson = json_decode($bracketsJson, false);

                foreach ($bracketsJson->rounds as $round) {
                    $roundMatches = [];
                    foreach ($round->matchUps as $match) {
                        $bracket = [];
                        if (isset($match->team1)) {
                            $name = str_replace('...', '', $match->team1->name);

                            $bracket['team1'] = [
                                'name' => $name,
                                'logo' => $match->team1->country,
                                'score' => $match->team1->score,
                            ];
                        }
                        if (isset($match->team2)) {
                            $name = str_replace('...', '', $match->team2->name);

                            $bracket['team2'] = [
                                'name' => $name,
                                'logo' => $match->team2->country,
                                'score' => $match->team2->score,
                            ];
                        }
                        $roundMatches[] = $bracket;
                    }
                    $bracketsTeamInfo['rounds'][] = [$roundMatches];
                }
            }
        }
        return $bracketsTeamInfo;
    }
}
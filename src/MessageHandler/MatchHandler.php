<?php


namespace App\MessageHandler;


use App\Entity\Match;
use App\Entity\MatchPickAndBan;
use App\Entity\Person;
use App\Entity\Player;
use App\Message\Match as MatchMessage;
use App\Service\Event\EventService;
use App\Service\HLTVService;
use App\Service\MapService;
use App\Service\MatchMapTeamWinRateService;
use App\Service\MatchService;
use App\Service\MatchStatisticsService;
use App\Service\PastMatchService;
use App\Service\PersonService;
use App\Service\PlayerService;
use App\Service\PlayerStatisticsService;
use App\Service\ResultService;
use App\Service\StreamService;
use App\Service\TeamService;
use App\Traits\EntityManager;
use Carbon\Carbon;
use Symfony\Component\Messenger\Handler\MessageHandlerInterface;

class MatchHandler implements MessageHandlerInterface
{
    use EntityManager;

    /**
     * @var MatchService
     */
    protected $matchService;

    /**
     * @var TeamService
     */
    protected $teamService;

    /**
     * @var EventService
     */
    protected $eventService;

    /**
     * @var PersonService
     */
    protected $personService;

    /**
     * @var PlayerService
     */
    protected $playerService;

    /**
     * @var StreamService
     */
    protected $streamService;

    /**
     * @var MapService
     */
    protected $mapService;

    /**
     * @var MatchMapTeamWinRateService
     */
    protected $matchMapTeamWinRateService;

    /**
     * @var PastMatchService
     */
    protected $pastMatchService;

    /**
     * @var MatchStatisticsService
     */
    protected $matchStatisticsService;

    /**
     * @var PlayerStatisticsService
     */
    protected $playerStatisticsService;

    /**
     * @var ResultService
     */
    protected $resultsMatchService;

    /**
     * MatchHandler constructor.
     */
    public function __construct()
    {
        $entityManager = $this->getEntityManager();

        $this->matchService = new MatchService($entityManager);
        $this->teamService = new TeamService($entityManager);
        $this->eventService = new EventService($entityManager);

        $this->personService = new PersonService($entityManager);
        $this->playerService = new PlayerService($entityManager);
        $this->streamService = new StreamService($entityManager);

        $this->mapService = new MapService($entityManager);
        $this->matchMapTeamWinRateService = new MatchMapTeamWinRateService($entityManager);
        $this->pastMatchService = new PastMatchService($entityManager);

        $this->matchStatisticsService = new MatchStatisticsService($entityManager);
        $this->playerStatisticsService = new PlayerStatisticsService($entityManager);
        $this->resultsMatchService = new ResultService($entityManager);
    }

    /**
     * @param MatchMessage $match
     * @throws \DiDom\Exceptions\InvalidSelectorException
     */
    public function __invoke(MatchMessage $match)
    {
        dump($match->getMatch());
        $matchFull = HLTVService::getMatchFull($match->getMatch());
        $matchFull = $this->setScores($matchFull);
        $teams = $this->createTeams($matchFull['teams']);
        $match = $this->createMatch($matchFull, $teams);
        $streams = $this->createStreams($matchFull['streams'], $match);

        if (isset($matchFull['is_main_result']) and $matchFull['is_main_result'] === true)
        {
            $createdAt = Carbon::now();

            $this->resultsMatchService->create($match, $createdAt);
        }
        $this->updateMatchScores($match, $matchFull['statistics'] ?? []);
        $this->updateMatchStatistics($match, $matchFull['statistics']);
        $this->updateMatchPickAndBans($matchFull['statistics'], $match);
        $this->updateMatchTeamPastMatches($matchFull, $match);
        $this->updateMatchTeamWinrate($matchFull, $match);
    }

    /**
     * @param $matchData
     * @param $teams
     * @return Match|mixed
     * @throws \DiDom\Exceptions\InvalidSelectorException
     * @throws \Doctrine\ORM\ORMException
     * @throws \Doctrine\ORM\OptimisticLockException
     */
    public function createMatch($matchData, $teams)
    {
        if (isset($matchData['eventUrl']))
        {
            $eventEntity = $this->eventService->getByUrl($matchData['eventUrl']);
            if (empty($eventEntity))
            {
                $eventData = HLTVService::getEventFull($matchData['eventUrl']);

                $eventEntity = $this->eventService->create($eventData);
            }
        } else {
            $eventEntity = null;
        }

        if (isset($eventEntity) and empty($eventEntity->getImage()) and isset($matchData['eventLogo']))
        {
            $this->eventService->setEventImage($eventEntity, $matchData['eventLogo']);
        }

        return $this->matchService->create($matchData, $teams, $eventEntity);
    }

    /**
     * @param $match
     * @param $statistics
     */
    public function updateMatchScores($match, $statistics)
    {
        if (!empty($statistics['score1']) && !empty($statistics['score2']))
        {
            $match
                ->setScore1($statistics['score1'])
                ->setScore2($statistics['score2']);
            if(((int)$statistics['score1'] === 2) or ((int)$statistics['score2'] === 2))
            {
                $match->setLive(false);
            }

            $this->matchService->updateStatistic($match, $statistics);
        }
    }

    /**
     * @param $teams
     * @return array
     * @throws \DiDom\Exceptions\InvalidSelectorException
     */
    public function createTeams($teams)
    {
        $left =  $teams[0] ?? [];
        $right = $teams[1] ?? [];

        if (isset($left['name'])){
            $leftTeamEntity = $this->teamService->getByName($left['name']);
        }
        $date = (date('Y.m.d H:m:s', strtotime("-7 days")));

        $leftTeamParseDate = isset($leftTeamEntity) ? $leftTeamEntity->getParseDate(): null;
        if (empty($leftTeamParseDate)){
            $isDateParse = true;
        } else {
            $isDateParse = $leftTeamParseDate->format('Y.m.d H:m:s') >= $date;
        }
        if (empty($leftTeamEntity) or count($leftTeamEntity->getPlayers()) < 5 or $isDateParse){

            $team = HLTVService::getTeam($left);
            $leftTeamEntity = $this->teamService->create($team);
            $this->createPlayers($team['players'], $leftTeamEntity);
        }
        if (isset($right['name'])){
            $rightTeamEntity = $this->teamService->getByName($right['name']);
        }
        $rightTeamParseDate = isset($rightTeamEntity) ? $rightTeamEntity->getParseDate(): null;
        if (empty($rightTeamParseDate)){
            $isDateParse = true;
        } else {
            $isDateParse = $rightTeamParseDate->format('Y.m.d H:m:s') >= $date;
        }
        if (empty($rightTeamEntity) or count($rightTeamEntity->getPlayers()) < 5 or $isDateParse){
            $team = HLTVService::getTeam($right);

            $rightTeamEntity = $this->teamService->create($team);
            $this->createPlayers($team['players'], $rightTeamEntity);
        }
        return array($leftTeamEntity, $rightTeamEntity);
    }

    /**
     * @param $players
     * @param $team
     */
    public function createPlayers($players, $team)
    {
        foreach ($players as $player)
        {
            $personEntity = $this->personService->create($player);

            if (!isset($personEntity))
            {
                continue;
            }

            /** @var Player|null $playerEntity */
            $this->playerService->create($personEntity, $team);
        }
    }

    /**
     * @param $streams
     * @param $match
     * @return array|bool
     */
    public function createStreams($streams, $match)
    {
        $result = [];

        foreach ($streams as $stream)
        {
            $streamEntity = $this->streamService->create($match, $stream);
            if (!isset($streamEntity))
            {
                return false;
            }
            $result[] = $streamEntity;
        }

        return $result;
    }

    /**
     * @param $matchDataFull
     * @param $match
     * @throws \Doctrine\ORM\NonUniqueResultException
     * @throws \Doctrine\ORM\ORMException
     * @throws \Doctrine\ORM\OptimisticLockException
     */
    protected function updateMatchTeamWinrate($matchDataFull, $match)
    {

        if (isset($matchDataFull['winrate']))
        {
            foreach ($matchDataFull['winrate'] as $teamName => $winRates)
            {
                $team = $this->teamService->getByName($teamName);

                foreach ($winRates as $winRate)
                {
                    $map = $this->mapService->getByName($winRate['name']);
                    if (empty($map)) {
                        $map = $this->mapService->create($winRate['name']);
                    }
                    $this->mapService->updateImage($map, $winRate['image']);

                    if (isset($team) and isset($match) and isset($map)){
                        $this->matchMapTeamWinRateService->create($team, $match, $map, $winRate['winrate']);
                    }
                }
            }
        }
    }

    /**
     * @param $matchDataFull
     * @param $match
     */
    protected function updateMatchTeamPastMatches($matchDataFull, $match)
    {
        if (isset($matchDataFull['pastMatches']))
        {
            foreach ($matchDataFull['pastMatches'] as $teamName => $pastMatches)
            {
                $matchTeam = $this->teamService->getByName($teamName);

                foreach ($pastMatches as $pastMatch){
                    if (isset($match) and isset($matchTeam))
                    {
                        $this->pastMatchService->create($match, $pastMatch, $matchTeam);
                    }
                }
            }
        }
    }

    /**
     * @param $matchDataFull
     * @return mixed
     */
    private function setScores($matchDataFull)
    {
        if (isset($matchDataFull['teams'])){
            $matchDataFull['score1'] = $matchDataFull['teams'][0]['score'] ?? null;
            $matchDataFull['score2'] = $matchDataFull['teams'][1]['score'] ?? null;
        }
        return $matchDataFull;
    }

    /**
     * @param Match $match
     * @param $mapEntity
     * @param $playersStats
     * @param $type
     * @return array|bool
     */
    private function createPlayerStatistics(Match $match, $mapEntity, $playersStats, $type)
    {
        foreach ($playersStats as $playerStat)
        {
            /** @var Person $person */
            $person = $this->personService->getByNick($playerStat['nick']);
            if (isset($person) and !empty( $person->getPlayer())){
                $player = $person->getPlayer();

                $result[] = $this->playerStatisticsService->create($player, $match, $mapEntity, $playerStat, $type);
            }
        }
        $result = [];

        return !empty($result) ? $result : false;
    }

    /**
     * @param $match
     * @param $matchStatistics
     * @return bool
     */
    private function updateMatchStatistics($match, $matchStatistics)
    {
        if (empty($matchStatistics['maps']))
        {
            return false;
        }

        foreach ($matchStatistics['maps'] as $map)
        {
            $code = $this->mapService->makeCode($map['name']);
            $mapEntity = $this->mapService->getByCode($code);
            if (!$mapEntity)
            {
                $mapEntity = $this->mapService->create($map['name']);
            }

            $this->matchStatisticsService->create($match, $mapEntity, $map['stat']);
        }
        if (!empty($matchStatistics['playerMapStats']))
        {
            foreach ((array)$matchStatistics['playerMapStats'] as $name => $mapStats)
            {
                $mapEntity = null;
                if ($name !== 'All maps')
                {
                    $code = $this->mapService->makeCode($name);
                    $mapEntity = $this->mapService->getByCode($code);
                }
                foreach ($mapStats['stat']['left'] as $type => $playersStats){
                    $this->createPlayerStatistics($match, $mapEntity, $playersStats, $type);
                }
                foreach ($mapStats['stat']['right'] as $type => $playersStats){
                    $this->createPlayerStatistics($match, $mapEntity, $playersStats, $type);
                }
            }
        }
        return true;
    }

    /**
     * @param $matchStatistics
     * @param $match
     */
    protected function updateMatchPickAndBans($matchStatistics, $match)
    {
        if (isset($matchStatistics['maps-pick']))
        {
            foreach ($matchStatistics['maps-pick'] as $mapPick)
            {
                $add = true;
                foreach ($match->getMatchPickAndBans() as $pickAndBan)
                {
                    if($pickAndBan->getOperationType() == $mapPick['type'] && $pickAndBan->getMap() == $mapPick['map'])
                    {
                        $add = false;
                    }
                }
                if($add)
                {
                    $mapPickEntity = new MatchPickAndBan();
                    $mapPickEntity
                        ->setGame($match)
                        ->setMap($mapPick['map'])
                        ->setOperationType($mapPick['type']);

                    if ($mapPickEntity->getOperationType() != MatchPickAndBan::OPERATION_TYPE_LEFT)
                    {
                        $team = $this->teamService->getByName($mapPick['team']);
                        $mapPickEntity->setTeam($team);
                    }

                    $this->teamService->save($mapPickEntity);
                }
            }
        }
    }
}
<?php

namespace App\Command;

use App\Entity\Match;
use App\Entity\MatchPickAndBan;
use App\Entity\Player;
use App\Service\EventService;
use App\Service\HLTVService;
use App\Service\LoggerService;
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
use Carbon\Carbon;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

/**
 * Class ParserMatchesCommand
 * @package App\Command
 */
class ParserMatchesCommand extends Command
{
    protected static $defaultName = 'parser:matches';

    /** @var TeamService */
    protected $teamService;

    /** @var PersonService */
    protected $personService;

    /** @var PlayerService */
    protected $playerService;

    /** @var MatchService */
    protected $matchService;

    /** @var PlayerStatisticsService */
    protected $playerStatisticsService;

    /** @var MatchStatisticsService */
    protected $matchStatisticsService;

    /** @var MapService */
    protected $mapService;

    /** @var StreamService */
    protected $streamService;

    /** @var EventService */
    protected $eventService;

    /** @var ResultService */
    protected $resultService;

    /** @var MatchMapTeamWinRateService */
    protected $matchMapTeamWinRateService;

    /** @var PastMatchService */
    protected $pastMatchService;


    protected function configure()
    {
        $this
            ->setDescription('get matches')
            ->addArgument('arg1', InputArgument::OPTIONAL, 'Argument description')
            ->addOption('option1', null, InputOption::VALUE_NONE, 'Option description')
        ;
    }

    /**
     * @param InputInterface $input
     * @param OutputInterface $output
     * @return int
     * @throws \DiDom\Exceptions\InvalidSelectorException
     */
    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        ini_set('max_execution_time', 0);

        $entityManager = $this->getApplication()->getKernel()->getContainer()->get('doctrine')->getManager();
        new LoggerService(new SymfonyStyle($input, $output));

        $this->teamService = new TeamService($entityManager);
        $this->personService = new PersonService($entityManager);
        $this->playerService = new PlayerService($entityManager);
        $this->matchService = new MatchService($entityManager);
        $this->playerStatisticsService = new PlayerStatisticsService($entityManager);
        $this->matchStatisticsService = new MatchStatisticsService($entityManager);
        $this->mapService = new MapService($entityManager);
        $this->streamService = new StreamService($entityManager);
        $this->eventService = new EventService($entityManager);
        $this->resultService = new ResultService($entityManager);
        $this->matchMapTeamWinRateService = new MatchMapTeamWinRateService($entityManager);
        $this->pastMatchService = new PastMatchService($entityManager);

        LoggerService::info("Get results Matches");
        $this->updateResultsBlock();

        LoggerService::info("Get live Matches");
        $this->updateMatchInfoFromArray($this->matchService->getLiveMatches());

        LoggerService::info("Get not full Matches");

        $this->updateMatchInfoFromArray($this->matchService->getNotFullMatches());
        $this->updateMatchInfoFromArray($this->matchService->getMatchesWhereEmptyTeams());

        $hlTvMatches = HLTVService::getMatches();
        if (!$hlTvMatches)
        {
            LoggerService::error("hltv matches not found");
            return 0;
        }
        $matches = $hlTvMatches;

        LoggerService::info("found " . count($matches) . " matches");

        LoggerService::info("parse results matches");

        foreach ($matches as $match)
        {
            $hlTvMatch = $match;
            $hlTvMatch['code'] = $match['url'];

            if(!$match['is_live'] && $this->isExist($match))
            {
                continue;
            }

            $matchDataFull = HLTVService::getMatchFull($hlTvMatch);

            if (!$matchDataFull)
            {
                LoggerService::error("match full data error");
                continue;
            }

            $teamEntityList = [];
            if (!empty($match['teams'])){
                $teams = HLTVService::getTeams($matchDataFull);

                if (empty($teams))
                {
                    LoggerService::error('teams errors');
                    continue;
                }

                if (count($teams) < 2)
                {
                    LoggerService::note('Матч пока без определенной второй команды');
                    continue;
                }

                $teamEntityList = $this->createTeams($teams);
            }

            $this->createMaps($matchDataFull);
            $matchEntity = $this->createMatch($matchDataFull, $teamEntityList);

            if (empty($matchEntity))
            {
                continue;
            }

            $this->createStreams($matchEntity, $matchDataFull);
            $this->updateMatchStatistics($matchEntity, $matchDataFull);
            $this->updateMatchTeamWinrate($matchEntity, $matchDataFull);
            $this->updateMatchTeamPastMatches($matchEntity, $matchDataFull);
            sleep(1);
        }

        LoggerService::info("done");
        return 0;
    }

    /**
     * @param $match
     * @return bool
     */
    protected function isExist($match): bool
    {
        return (bool) $this->matchService->isExist($match['url']);
    }

    /**
     * @param $matches
     * @return bool
     * @throws \DiDom\Exceptions\InvalidSelectorException
     */
    protected function updateMatchInfoFromArray($matches)
    {
        LoggerService::info("check live matches");

        if (empty($matches))
        {
            return false;
        }

        /** @var Match $match */
        foreach ($matches as $match)
        {
            $matchEmptyTeams = [
                'url' => $match->getUrl(),
                'code' => $match->getCode(),
            ];

            $matchEmptyTeams = HLTVService::getMatchFull($matchEmptyTeams);

            $teams = [];

            if (is_array($matchEmptyTeams['teams']))
            {
                foreach ($matchEmptyTeams['teams'] as $team)
                {
                    $teamEntity = $this->teamService->getByName($team['name'] ?? null);
                    if (empty($teamEntity) or empty($teamEntity->getLogo()))
                    {
                        if (!empty($matchEmptyTeams['teams'])) {
                            $matchTeams = HLTVService::getTeams($matchEmptyTeams);

                            if (!empty($matchTeams) ){
                                $this->createTeams($matchTeams);
                            }
                        }
                        $teamEntity = $this->teamService->getByName($team['name'] ?? null);
                        if (empty($teamEntity))
                        {
                            continue;
                        }
                    }
                    $teams[] = $teamEntity;
                }
                $match = $this->matchService->updateTeams($matchEmptyTeams, $teams);
            }
            $this->updateMatchTeamWinrate($match, $matchEmptyTeams);
            $this->updateMatchTeamPastMatches($match, $matchEmptyTeams);

            $isMatchChanged = false;
            if ($match->getDetailInfo())
            {
                $matchStatistics = HLTVService::getMatchStatistic($match->getUrl());
            }
            else
            {
                $matchStatistics = [];
            }
            if (!$matchStatistics)
            {
                LoggerService::error("match statistics empty");
                continue;
            }

            if (!empty($matchStatistics['score1']) && !empty($matchStatistics['score2']))
            {
                $match
                    ->setScore1($matchStatistics['score1'])
                    ->setScore2($matchStatistics['score2']);
                if(($matchStatistics['score1'] == 2)||($matchStatistics['score2'] == 2))
                {
                    $match->setLive(False);
                }

                $isMatchChanged = true;
            }

            if (!empty($matchStatistics['maps-pick']))
            {
                foreach ($matchStatistics['maps-pick'] as $map_pick)
                {
                    $add = true;
                    foreach ($match->getMatchPickAndBans() as $pick_and_ban)
                    {
                        if($pick_and_ban->getOperationType() == $map_pick['type'] && $pick_and_ban->getMap() == $map_pick['map'])
                        {
                            $add = false;
                        }
                    }
                    if($add)
                    {
                        $map_pick_entity = new MatchPickAndBan();
                        $map_pick_entity
                            ->setGame($match)
                            ->setMap($map_pick['map'])
                            ->setOperationType($map_pick['type']);

                        if ($map_pick_entity->getOperationType() != MatchPickAndBan::OPERATION_TYPE_LEFT)
                        {
                            $team = $this->teamService->getByName($map_pick['team']);
                            $map_pick_entity->setTeam($team);
                        }

                        $this->teamService->save($map_pick_entity);
                    }
                }
            }

            if (array_key_exists('live', $matchStatistics))
            {
                $match->setLive((bool) $matchStatistics['live']);
                $isMatchChanged = true;
            }

            LoggerService::add("get match command 211", LoggerService::TYPE_INFO);
            if ($isMatchChanged)
            {
                $this->matchService->save($match);
            }
            LoggerService::add("get match command 216", LoggerService::TYPE_INFO);

            $this->updateMatchStatistics($match, $matchStatistics);
            LoggerService::add("get match command 218", LoggerService::TYPE_INFO);
        }

        return true;
    }

    /**
     * @param Match $match
     * @param $matchStatistics
     * @return bool
     */
    private function updateMatchStatistics(Match $match, $matchStatistics)
    {
        if (empty($matchStatistics['maps']))
        {
            return false;
        }
        LoggerService::add("get match command 230", LoggerService::TYPE_INFO);
        foreach ($matchStatistics['maps'] as $map)
        {
            $code = $this->mapService->makeCode($map['name']);
            $mapEntity = $this->mapService->getByCode($code);
            if (!$mapEntity)
            {
                $mapEntity = $this->mapService->create($map['name']);
            }
            LoggerService::add("get match command 239", LoggerService::TYPE_INFO);
            $this->createMatchStatistics( $match, $mapEntity, $map['stat']);

            if (!empty($map['full_stat']))
            {
                LoggerService::add("get match command 244", LoggerService::TYPE_INFO);
                $this->createPlayerStatistics( $match, $mapEntity, $map['full_stat']['teams']);
                LoggerService::add("get match command 246", LoggerService::TYPE_INFO);
            }
        }

        return true;
    }

    /**
     * @param Match $match
     * @param $mapEntity
     * @param $teamStat
     * @return array|bool
     */
    private function createPlayerStatistics(Match $match, $mapEntity, $teamStat)
    {
        LoggerService::add("get match command 255", LoggerService::TYPE_INFO);
        $result = [];
        foreach ($teamStat as $stat)
        {
            $team = $this->teamService->getByName($stat['name']);
            LoggerService::add("get match command 259", LoggerService::TYPE_INFO);
            foreach ($stat['players'] as $playerStat)
            {
                LoggerService::add("get match command 263", LoggerService::TYPE_INFO);
                $player = $this->playerService->getByTeamAndNick($team->getId(), $playerStat['nick']);
                if (!$player)
                {
                    continue;
                }
                LoggerService::add("get match command 269", LoggerService::TYPE_INFO);
                $result[] = $this->playerStatisticsService->create($player, $match, $mapEntity, $playerStat);
                LoggerService::add("get match command 271", LoggerService::TYPE_INFO);
            }
        }
        LoggerService::add("get match command 274", LoggerService::TYPE_INFO);
        return !empty($result) ? $result : false;
    }

    /**
     * @param Match $match
     * @param $mapEntity
     * @param $matchStat
     * @return \App\Entity\MatchStatistics|bool|null
     */
    private function createMatchStatistics(Match $match, $mapEntity, $matchStat)
    {
        return $this->matchStatisticsService->create($match, $mapEntity, $matchStat);
    }

    /**
     * @param $teams
     * @return array|bool
     */
    private function createTeams($teams)
    {
        $result = [];
        foreach ($teams as $team)
        {
            LoggerService::add("parserMatchesCommand 283");
            $teamEntity = $this->teamService->create($team);

            if (!isset($teamEntity))
            {
                LoggerService::error("team entity {$team['name']} didnt created");
                return false;
            }
            LoggerService::add("parserMatchesCommand 290");
            foreach ($team['players'] as $playerValues)
            {
                LoggerService::add("parserMatchesCommand 293");
                $personEntity = $this->personService->create($playerValues);
                LoggerService::add("parserMatchesCommand 295");
                if (!isset($personEntity))
                {
                    LoggerService::error("person entity {$playerValues['nick']} didn't created");
                    continue;
                }
                LoggerService::add("parserMatchesCommand 299");
                /** @var Player|null $playerEntity */
                $playerEntity = $this->playerService->create($personEntity, $teamEntity);
                if (!isset($playerEntity))
                {
                    LoggerService::error("player entity {$playerValues['nick']} didn't created");
                    return false;
                }
            }

            $result[] = $teamEntity;
        }

        return !empty($result) ? $result : false;
    }

    /**
     * @param $matchData
     * @return array|bool
     */
    private function createMaps($matchData)
    {
        $result = [];
        if (empty($matchData['maps']))
        {
            LoggerService::warning("maps not found");
            return false;
        }

        foreach ($matchData['maps'] as $map)
        {
            $mapEntity = $this->mapService->create($map['name']);
            if (!isset($mapEntity))
            {
                LoggerService::error("map entity {$map['name']} didnt created");
                return false;
            }

            $result[] = $mapEntity;
        }

        return !empty($result) ? $result : false;
    }

    /**
     * @param Match $match
     * @param $matchData
     * @return array|bool
     */
    private function createStreams(Match $match, $matchData)
    {
        $result = [];
        if (empty($matchData['streams']))
        {
            LoggerService::warning("stream not found");
            return false;
        }

        foreach ($matchData['streams'] as $stream)
        {
            $streamEntity = $this->streamService->create($match, $stream);
            if (!isset($streamEntity))
            {
                LoggerService::warning("stream {$stream['name']} not created");
                return false;
            }

            $result[] = $streamEntity;
        }

        return !empty($result) ? $result : false;
    }

    /**
     * @param $matchDataFull
     * @param $teamEntityList
     * @return Match|mixed
     * @throws \Doctrine\ORM\NonUniqueResultException
     * @throws \Doctrine\ORM\ORMException
     */
    private function createMatch($matchDataFull, $teamEntityList)
    {
        $eventEntity = null;
        if (isset($matchDataFull['event']) and isset($matchDataFull['start_at']))
        {
            $eventEntity = $this->eventService->getByNameAndBetweenDate($matchDataFull['event'], $matchDataFull['start_at']);
            if (empty($eventEntity) and isset($matchDataFull['eventUrl'])){
                $eventEntity = $this->getEvent($matchDataFull['eventUrl']);
            }
        }

        return $this->matchService->create($matchDataFull, $teamEntityList, $eventEntity);
    }

    /**
     * @param $url
     * @return \App\Entity\Event
     * @throws \DiDom\Exceptions\InvalidSelectorException
     * @throws \Doctrine\ORM\ORMException
     * @throws \Doctrine\ORM\OptimisticLockException
     */
    private function getEvent($url)
    {
        $event = HLTVService::getEventData($url);

        return $this->eventService->create($event);
    }

    /**
     * @throws \DiDom\Exceptions\InvalidSelectorException
     * @throws \Doctrine\ORM\NonUniqueResultException
     * @throws \Doctrine\ORM\ORMException
     * @throws \Doctrine\ORM\OptimisticLockException
     */
    private function updateResultsBlock()
    {
        $resultsMatches = HLTVService::getMatchesResults();
        $createdAt = Carbon::now();

        foreach ($resultsMatches as $resultsMatch){
            $teams = HLTVService::getTeams($resultsMatch);

            $teamEntityList = $this->createTeams($teams);
            $this->createMaps($resultsMatch);

            $matchEntity = $this->createMatch($resultsMatch, $teamEntityList);
            $this->updateMatchTeamPastMatches($matchEntity, $resultsMatch);
            $matchDataFull = $this->setScores($resultsMatch);
            $this->createStreams($matchEntity, $matchDataFull);
            $this->resultService->create($matchEntity, $createdAt);

            $this->matchService->updateStatistic($matchEntity, $matchDataFull);
            $this->updateMatchTeamWinrate($matchEntity, $matchDataFull);
        }
    }

    /**
     * @param $matchDataFull
     * @return mixed
     */
    private function setScores($matchDataFull)
    {
        $matchDataFull['score1'] = $matchDataFull['teams'][0]['score'] ?? null;
        $matchDataFull['score2'] = $matchDataFull['teams'][1]['score'] ?? null;

        return $matchDataFull;
    }

    /**
     * @param $match
     * @param $matchDataFull
     * @throws \Doctrine\ORM\NonUniqueResultException
     * @throws \Doctrine\ORM\ORMException
     * @throws \Doctrine\ORM\OptimisticLockException
     */
    protected function updateMatchTeamWinrate($match, $matchDataFull)
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
     * @param $match
     * @param $matchDataFull
     */
    protected function updateMatchTeamPastMatches($match, $matchDataFull)
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
}
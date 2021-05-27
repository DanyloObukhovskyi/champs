<?php

namespace App\Command;

use App\Message\Event;
use App\Service\Event\EventService;
use App\Service\Event\EventShowService;
use App\Service\HLTVService;
use App\Service\LoggerService;
use App\Service\TeamService;
use App\Traits\Dispatchable;
use App\Traits\EntityManager;
use DateTime;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Component\Messenger\MessageBusInterface;

/**
 * Class ParserEventsCommand
 * @package App\Command
 */
class ParserEventsCommand extends Command
{
    use Dispatchable;
    use EntityManager;

    protected static $defaultName = 'parser:events';

    /** @var DateTime */
    private $parseDate;

    /** @var EventService */
    private $eventService;

    /** @var EventShowService */
    private $eventShowService;

    /** @var TeamService */
    private $teamService;

    protected function configure()
    {
        $this
            ->setDescription('get events')
            ->addArgument('arg1', InputArgument::OPTIONAL, 'Argument description')
            ->addOption('option1', null, InputOption::VALUE_NONE, 'Option description');
    }

    /**
     * @param InputInterface $input
     * @param OutputInterface $output
     * @param MessageBusInterface $bus
     * @return int
     * @throws \DiDom\Exceptions\InvalidSelectorException
     * @throws \Doctrine\ORM\ORMException
     * @throws \Doctrine\ORM\OptimisticLockException
     */
    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $this->parseDate = new DateTime();
        $entityManager = $this->getEntityManager();

        new LoggerService(new SymfonyStyle($input, $output));

        $this->eventService = new EventService($entityManager);
        $this->eventShowService = new EventShowService($entityManager);
        $this->teamService = new TeamService($entityManager);

        LoggerService::info("hltv events getMainEvents");
        $mainEvents = $this->getMainEvents();

        if (empty($mainEvents)) {
            LoggerService::error("hltv events not found");
//            return 0;
        } else {
            $this->createEvents($mainEvents);
        }

        $events = $this->getEvents();
        if (empty($events)) {
            LoggerService::error("hltv events not found");
            return 0;
        } else {
            $this->createEvents($events, true);
        }

        $this->updateInfiEventsFromArray($this->eventService->getOldEvents());
        $this->updateInfiEventsFromArray($this->eventService->getFeatureEvents());

        LoggerService::info("done");
        return 0;
    }

    /**
     * @return array|bool|null
     * @throws \DiDom\Exceptions\InvalidSelectorException
     */
    private function getMainEvents()
    {
        LoggerService::info("get events");

        $events = HLTVService::getMainEvents();
        if (empty($events)) {
            return null;
        }
        return $events;
    }

    /**
     * @param $events
     * @param bool $isNotMain
     * @return array|null
     * @throws \Doctrine\ORM\ORMException
     * @throws \Doctrine\ORM\OptimisticLockException
     */
    private function createEvents($events, bool $isNotMain = false)
    {
        $result = [];
        foreach ($events as $event) {
            $parseDate = $this->parseDate;
            if ($isNotMain) {
                $parseDate = null;
            }
            if (isset($event['started_at'])) {
                $eventEntity = $this->eventService->create($event, $parseDate);
            }

            if (empty($eventEntity)) {
                LoggerService::error("event entity didnt created");
            } else {
                if ($isNotMain) {
                    $this->eventShowService->createOrUpdate($eventEntity, $this->parseDate);
                }
                $result[] = $eventEntity;
            }
        }

        return !empty($result) ? $result : null;
    }

    /**
     * @return array|null
     */
    private function getEvents()
    {
        $events = HLTVService::getEvents();

        if (empty($events)) {
            return null;
        }
        return $events;
    }

    /**
     * @param $teams
     * @throws \DiDom\Exceptions\InvalidSelectorException
     */
    private function createTeams($teams)
    {
        $fullTeams = [];
        foreach ($teams as $team) {
            if (isset($team['teamName'])) {
                $teamEntity = $this->teamService->getByName($team['teamName']);

                if (isset($teamEntity)) {
                    continue;
                }

                $fullTeam = HLTVService::getTeam(['name' => $team['teamName'], 'url' => $team['teamUrl']]);

                if (empty($fullTeam)) {
                    continue;
                }
                $fullTeams[] = $fullTeam;
            }
        }
        $this->teamService->createTeams($fullTeams);
    }

    /**
     * @param $events
     */
    private function updateInfiEventsFromArray($events)
    {
        foreach ($events as $eventEntity) {
            LoggerService::info("dispatch event: {$eventEntity->getUrl()}");

            $this->dispatch(new Event($eventEntity->getUrl()));
        }
    }
}

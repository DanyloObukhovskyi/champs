<?php

namespace App\Command;

use App\Service\EventService;
use App\Service\EventShowService;
use App\Service\HLTVService;
use App\Service\LoggerService;
use DateTime;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

class ParserEventsCommand extends Command
{
    protected static $defaultName = 'parser:events';

    /** @var DateTime */
    private $parseDate;

    /** @var EventService */
    private $eventService;

    /** @var EventShowService */
    private $eventShowService;

    protected function configure()
    {
        $this
            ->setDescription('get events')
            ->addArgument('arg1', InputArgument::OPTIONAL, 'Argument description')
            ->addOption('option1', null, InputOption::VALUE_NONE, 'Option description')
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $this->parseDate = new DateTime();
        $entityManager = $this->getApplication()->getKernel()->getContainer()->get('doctrine')->getManager();

        new LoggerService(new SymfonyStyle($input, $output));


        $this->eventService = new EventService($entityManager);
        $this->eventShowService = new EventShowService($entityManager);

        $mainEvents = $this->getMainEvents();

        if (empty($mainEvents))
        {
            LoggerService::error("hltv events not found");
            return 0;
        }
        $this->createEvents($mainEvents);

        $events = $this->getEvents();
        if (empty($events))
        {
            LoggerService::error("hltv events not found");
            return 0;
        }
        $this->createEvents($events, true);

        LoggerService::info("done");
        return 0;
    }

    private function getMainEvents()
    {
        LoggerService::info("get events");

        $events = HLTVService::getMainEvents();
        if (empty($events))
        {
            return null;
        }
        return $events;
    }

    private function createEvents($events, bool $isNotMain = false)
    {
        $result = [];
        foreach ($events as $event)
        {
            $parseDate = $this->parseDate;
            if ($isNotMain ){
                $parseDate = null;
            }
            $eventEntity = $this->eventService->create($event, $parseDate);

            if (empty($eventEntity)) {
                LoggerService::error("event entity {$event['name']} didnt created");
            } else {
                if ($isNotMain ){
                    $this->eventShowService->createOrUpdate($eventEntity, $this->parseDate);
                }
                $result[] = $eventEntity;
            }
        }

        return !empty($result) ? $result : null;
    }

    public function getEvents()
    {
        $events = HLTVService::getEvents();

        if (empty($events))
        {
            return null;
        }
        return $events;
    }
}

<?php

namespace App\Command;

use App\Service\EventService;
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

    /** @var EventService */
    private $eventService;

    /** @var DateTime */
    private $parseDate;

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

        $events = $this->getEvents();

        if (empty($events))
        {
            LoggerService::error("hltv events not found");
            return 0;
        }

        $this->createEvents($events);

        LoggerService::info("done");
        return 0;
    }

    private function getEvents()
    {
        LoggerService::info("get events");

        $events = HLTVService::getEvents();
        if (empty($events))
        {
            return false;
        }
        return $events;
    }

    private function createEvents($events)
    {
        $result = [];
        foreach ($events as $event)
        {
            $eventEntity = $this->eventService->create($event, $this->parseDate);

            if (!isset($eventEntity))
            {
                LoggerService::error("event entity {$event['name']} didnt created");
                return false;
            }
            $result[] = $eventEntity;
        }

        return !empty($result) ? $result : false;
    }
}

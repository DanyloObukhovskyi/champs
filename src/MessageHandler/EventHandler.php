<?php


namespace App\MessageHandler;

use App\Message\Event;
use App\Service\Event\EventService;
use App\Service\HLTVService;
use App\Service\LoggerService;
use App\Service\TeamService;
use App\Traits\EntityManager;
use Symfony\Component\Messenger\Handler\MessageHandlerInterface;

class EventHandler implements MessageHandlerInterface
{
    use EntityManager;

    protected $eventService;

    protected $teamService;

    public function __construct()
    {
        $entityManager = $this->getEntityManager();

        $this->eventService = new EventService($entityManager);
        $this->teamService = new TeamService($entityManager);
    }

    public function __invoke(Event $event)
    {
        dump($event->getUrl());

        $event = HLTVService::getEndEventData($event->getUrl());

        if (isset($event['prizeDistributions']))
        {
            $this->createTeams($event['prizeDistributions']);
        }

        if (!empty($event['teamsAttending']))
        {
            $this->createTeams($event['teamsAttending']);
        }

        $this->eventService->create($event);
    }

    private function createTeams($teams)
    {
        $fullTeams = [];
        foreach ($teams as $team)
        {
            if (isset($team['teamName']))
            {
                $teamEntity = $this->teamService->getByName($team['teamName']);

                if (isset($teamEntity))
                {
                    continue;
                }

                $fullTeam = HLTVService::getTeam(['name' => $team['teamName'], 'url' =>  $team['teamUrl']]);

                if (empty($fullTeam))
                {
                    continue;
                }
                $fullTeams[] = $fullTeam;
            }
        }
        $this->teamService->createTeams($fullTeams);
    }
}
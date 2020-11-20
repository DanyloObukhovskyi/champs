<?php

namespace App\Controller;

use App\Entity\Event;
use App\Entity\EventTeamAttending;
use App\Entity\RelatedEvent;
use App\Service\Event\EventBracketService;
use App\Service\Event\EventGroupPlayService;
use App\Service\Event\EventMapPoolService;
use App\Service\Event\EventPrizeDistributionService;
use App\Service\Event\EventService;
use App\Service\Event\EventTeamAttendingService;
use App\Service\MatchService;
use App\Service\TeamService;
use App\Traits\EntityManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/{_locale}", requirements={"locale": "ru"})
 */
class EventsController extends AbstractController
{
    use EntityManager;

    /** @var MatchService */
    public $matchService;

    /** @var EventService */
    public $eventService;

    /** @var \Doctrine\ORM\EntityManager */
    public $entityManager;

    /** @var EventPrizeDistributionService */
    public $eventPrizeDistributionService;

    /** @var EventGroupPlayService */
    public $eventGroupsService;

    /** @var EventTeamAttendingService */
    public $eventTeamAttendingService;

    /** @var EventMapPoolService */
    public $eventMapPoolService;

    /** @var EventBracketService */
    public $eventBracketService;

    /** @var TeamService */
    public $teamService;

    /**
     * EventsController constructor.
     */
    public function __construct()
    {
        $this->entityManager = $this->getEntityManager();

        $this->matchService =  new MatchService($this->entityManager);
        $this->eventService = new EventService($this->entityManager);

        $this->eventPrizeDistributionService = new EventPrizeDistributionService($this->entityManager);
        $this->eventGroupsService = new EventGroupPlayService($this->entityManager);

        $this->eventTeamAttendingService = new EventTeamAttendingService($this->entityManager);
        $this->eventMapPoolService = new EventMapPoolService($this->entityManager);

        $this->eventBracketService = new EventBracketService($this->entityManager);
        $this->teamService = new TeamService($this->entityManager);
    }

    /**
     * @Route("/events", name="events_index")
     */
    public function eventsPage()
    {
        return $this->render('templates/events.html.twig', ['router' => 'events']);
    }

    /**
     * @Route("/ajax/events/{type}/{page}")
     */
    public function getEvents(Request $request, $type, $page)
    {
        $filters = $request->getContent();
        $filters = json_decode($filters, false);

        $events = $this->eventService->getEventsByType($filters, $type, $page);
        $events = $this->eventService->eventsDecorator($events);

        $counts = [];
        foreach (MatchService::MATCH_TYPES as $type){
            $counts[$type] = $this->eventService->getEventsCountByType($filters, $type);
        }
        return $this->json([
            'events' => $events,
            'limit' => $_ENV['MATCHES_PAGINATION'] ?? null,
            'counts' => $counts,
        ]);
    }

    /**
     * @Route("/event/{id}", name="event.page")
     */
    public function eventPage(int $id)
    {
        /** @var Event $event */
        $event = $this->entityManager->getRepository(Event::class)->find($id);
        $this->eventService->addEventView($event);

        $router = 'events';

        return $this->render('templates/event.view.html.twig', compact(
            'router',
            'event'
        ));
    }

    /**
     * @Route("/ajax/event/{id}")
     */
    public function getEvent($id)
    {
        /** @var Event $event */
        $event = $this->entityManager->getRepository(Event::class)
            ->find($id);

        $matches = $this->matchService->findByEvent($event);
        $matchesByDay = $this->matchService->matchesDecorator($matches);

        $prizeDistribution = $event->getPrizeDistribution();
        $prizeDistribution = $this->eventPrizeDistributionService
            ->prizeDecorator($prizeDistribution);

        $brackets = $event->getTournamentBrackets();
        $brackets = $this->eventBracketService
            ->eventBracketDecorator($brackets);

        $teams = [];
        /** @var EventTeamAttending $team */
        foreach ($event->getTeamsAttending() as $team){
            $teams[] = $team->getTeam();
        }
        $teamsLineups = $this->teamService->teamsDecorator($teams);
        
        return $this->json([
            'event' => $event,
            'prizeDistribution' => $prizeDistribution,
            'teamsLineups' => $teamsLineups,
            'mapsPool' => $event->getMapPool(),
            'brackets' => $brackets,
            'matches' => $matchesByDay,
        ]);
    }
}

<?php

namespace App\Controller;

use App\Entity\Event;
use App\Entity\EventBracket;
use App\Entity\EventGroup;
use App\Entity\EventMapPool;
use App\Entity\EventPrizeDistribution;
use App\Entity\EventTeamAttending;
use App\Entity\RelatedEvent;
use App\Service\Event\EventBracketService;
use App\Service\Event\EventGroupPlayService;
use App\Service\Event\EventMapPoolService;
use App\Service\Event\EventPrizeDistributionService;
use App\Service\Event\EventService;
use App\Service\Event\EventTeamAttendingService;
use App\Service\MatchService;
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
    }

    /**
     * @Route("/events", name="events.index")
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
        $router = 'events';

        /** @var Event $event */
        $event = $this->entityManager->getRepository(Event::class)->find($id);

        $prizeDistribution = $this->entityManager->getRepository(EventPrizeDistribution::class)->findByEvent($event);
        $prizeDistribution = $this->eventPrizeDistributionService->prizeDecorator($prizeDistribution);

        $groupPlays = $this->entityManager->getRepository(EventGroup::class)->findByEvent($event);
        $groupPlays = $this->eventGroupsService->groupsDecorator($groupPlays);

        $teamsAttending = $this->entityManager->getRepository(EventTeamAttending::class)->findByEvent($event);
        $teamsAttending = $this->eventTeamAttendingService->teamsDecorator($teamsAttending);

        $mapsPool =  $this->entityManager->getRepository(EventMapPool::class)->findByEvent($event);
        $mapsPool = $this->eventMapPoolService->mapsDecorator($mapsPool);

        $relatedEvents = $this->entityManager->getRepository(RelatedEvent::class)->findByEvent($event);
        $events = [];

        $brackets =  $this->entityManager->getRepository(EventBracket::class)->findByEvent($event);
        $brackets = $this->eventBracketService->eventBracketDecorator($brackets);

        /** @var RelatedEvent $relatedEvent */
        foreach ($relatedEvents as $relatedEvent)
        {
            $events[] = $relatedEvent->getRelated();
        }
        $relatedEvents = $this->eventService->eventsDecorator($events);

        return $this->render('templates/event.view.html.twig', compact(
            'router',
            'event',
            'prizeDistribution',
            'groupPlays',
            'teamsAttending',
            'mapsPool',
            'relatedEvents',
            'brackets'
        ));
    }
}

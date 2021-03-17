<?php

namespace App\Controller;

use App\Entity\Event;
use App\Entity\EventTeamAttending;
use App\Service\Event\EventBracketService;
use App\Service\Event\EventGroupPlayService;
use App\Service\Event\EventMapPoolService;
use App\Service\Event\EventPrizeDistributionService;
use App\Service\Event\EventService;
use App\Service\Event\EventStreamService;
use App\Service\Event\EventTeamAttendingService;
use App\Service\Match\MatchService;
use App\Service\Seo\SeoService;
use App\Service\TeamService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

/**
 * @Route("/{_locale}", requirements={"locale": "ru"})
 */
class EventsController extends AbstractController
{
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

    /** @var EventStreamService */
    public $eventStreamService;

    /** @var SeoService */
    public $seoService;

    /**
     * EventsController constructor.
     */
    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;

        $this->matchService = new MatchService($this->entityManager);
        $this->eventService = new EventService($this->entityManager);

        $this->eventPrizeDistributionService = new EventPrizeDistributionService($this->entityManager);
        $this->eventGroupsService = new EventGroupPlayService($this->entityManager);

        $this->eventTeamAttendingService = new EventTeamAttendingService($this->entityManager);
        $this->eventMapPoolService = new EventMapPoolService($this->entityManager);

        $this->eventBracketService = new EventBracketService($this->entityManager);
        $this->teamService = new TeamService($this->entityManager);

        $this->seoService = new SeoService($entityManager);
        $this->eventStreamService = new EventStreamService($entityManager);
    }

    /**
     * @Route("/events", name="events_index")
     */
    public function eventsPage()
    {
        $seoSettings = $this->seoService->getSeo('events_index');

        return $this->render('templates/events.html.twig', [
            'heading_type' => $seoSettings['heading_type'],
            'heading' => $seoSettings['heading'],
            'title' => $seoSettings['title'],
            'description' => $seoSettings['description'],
            'keywords' => $seoSettings['keywords'],
            'meta_tags' => $seoSettings['meta'],
            'router' => 'events']);
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
        foreach (MatchService::MATCH_TYPES as $type) {
            $counts[$type] = $this->eventService->getEventsCountByType($filters, $type);
        }
        return $this->json([
            'events' => $events,
            'limit' => $_ENV['MATCHES_PAGINATION'] ?? null,
            'counts' => $counts,
        ]);
    }

    /**
     * @Route("/event/{id}/{slug}", name="event.page")
     */
    public function eventPage($id, $slug)
    {
        /** @var Event $event */
        $event = $this->entityManager->getRepository(Event::class)->find($id);
        $this->eventService->addEventView($event);

        $router = 'events';


        $teams = [];
        /** @var EventTeamAttending $team */
        foreach ($event->getTeamsAttending() as $team) {
            $teams[] = $team->getTeam()->getName();
        }

        return $this->render('templates/event.view.html.twig', compact(
            'router',
            'event',
            'teams'
        ));
    }

    /**
     * @Route("/ajax/event/{id}")
     */
    public function getEvent($id)
    {
        /** @var Event $event */
        $event = $this->entityManager
            ->getRepository(Event::class)
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
        foreach ($event->getTeamsAttending() as $team) {
            $teams[] = $team->getTeam();
        }
        $teamsLineups = $this->teamService->teamsDecorator($teams);

        $mapPool = [];
        if(!empty($event->getMapPool())){
            foreach($event->getMapPool() as $map){
                $mapPoll[] = $map->jsonSerialize();
            }
        }
        $streams = $event->getStreams();
        $streams = $this->decorateStreams($streams);

        return $this->json([
            'event' => $event->jsonSerialize(),
            'prizeDistribution' => $prizeDistribution,
            'teamsLineups' => $teamsLineups,
            'mapsPool' => $mapPool,
            'brackets' => $brackets,
            'matches' => $matchesByDay,
            'streams' => $streams
        ]);
    }

    /**
     * @param $streams
     * @return \Generator
     */
    public function decorateStreams($streams): \Generator
    {
        foreach ($streams as $stream)
        {
            yield $this->eventStreamService->decorate($stream);
        }
    }

    /**
     * @Route("/daydzhest_turnirov", name="digest_events")
     */
    public function digestPage(Request $request)
    {
        $seoSettings = $this->seoService->getSeo('digest_events');

        $link = $request->getSchemeAndHttpHost().$request->getBasePath();

        return $this->render('templates/digest.events.html.twig', [
            'link' => $link,
            'heading_type' => $seoSettings['heading_type'],
            'heading' => $seoSettings['heading'],
            'title' => $seoSettings['title'],
            'description' => $seoSettings['description'],
            'keywords' => $seoSettings['keywords'],
            'meta_tags' => $seoSettings['meta'],
            'router' => 'digest',
        ]);
    }

    /**
     * @Route("/ajax/digest/events/{type}/{page}")
     */
    public function ajaxDigestPage(Request $request, $type, $page)
    {
        $filters = json_decode($request->getContent(), false);

        $events = $this->eventService->getEventsByType($filters, $type, $page);
        $events = $this->eventService->eventsDecorator($events);

        $counts = [];
        foreach (MatchService::MATCH_TYPES as $type) {
            $counts[$type] = $this->eventService->getEventsCountByType($filters, $type);
        }
        $digestEvents = [];
        foreach ($events as $event) {
            $digestEvent = $event;
            $digestEvent['game'] = 'cs';

            $digestEvents[] = $digestEvent;
        }

        return $this->json([
            'events' => $digestEvents,
            'limit' => $_ENV['MATCHES_PAGINATION'] ?? null,
            'counts' => $counts,
        ]);
    }
}

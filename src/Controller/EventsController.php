<?php

namespace App\Controller;

use App\Entity\Event;
use App\Service\EventService;
use App\Service\MatchService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Match;
use App\Repository\MatchRepository;

class EventsController extends AbstractController
{
    /**
      * @Route("/ru/events", name="events_index")
      */

    public function events_index()
    {
        $entityManager = $this->getDoctrine()->getManager();
        $matchService = new MatchService($entityManager);
        $eventService = new EventService($entityManager);

        $matches = $entityManager->getRepository(Match::class)->findMatchesByDay(new \DateTime());
        $matches = $matchService->matchesDecorator($matches);

        $events = $entityManager->getRepository(Event::class)->findByDate(new \DateTime());
        $eventItems = $eventService->eventsDecorator($events);

        $futureEvents = $entityManager->getRepository(Event::class)->findFutureEvents(new \DateTime());
        $futureEventItems = $eventService->futureEventsDecorator($futureEvents);

        $lives = $entityManager->getRepository(Match::class)->findLive();
        return $this->render('templates/events.html.twig',
            [
                'router' => 'events',
                'matches' => $matches,
                "lives" => $lives,
                "events" => $eventItems,
                "futureEvents" => $futureEventItems,
            ]);
    }
}

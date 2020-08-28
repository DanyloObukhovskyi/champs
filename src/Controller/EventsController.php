<?php

namespace App\Controller;

use App\Entity\Event;
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

        $matches = $entityManager->getRepository(Match::class)->findMatchesByDay(new \DateTime());

        $items    = [];
        $currDate = null;

        foreach ($matches as $match)
        {
            /** @var Match $match */

            if (!array_key_exists(date("d", $match->getStartAt()->getTimestamp()), $items))
            {
                $items[date("d", $match->getStartAt()->getTimestamp())] = [
                    "date" => date("d F", $match->getStartAt()->getTimestamp()),
                    "items" => [],
                ];
            }
            $items[date("d", $match->getStartAt()->getTimestamp())]["items"][] =
                [
                    "match_id" => $match->getId(),
                    "time" => date("H:i", $match->getStartAt()->getTimestamp()),
                    "title" => "",
                    "startedAt" => $match->getStartAt()->getTimestamp(),
                    "logo" => "",
                    "teamA" => [
                        "title" => str_replace("'", "", $match->getTeam1()->getName()),
                        "logo" => "/uploads/images/" . $match->getTeam1()->getLogo(),
                        "score" => $match->getScore1()
                    ],
                    "teamB" => [
                        "title" => str_replace("'", "", $match->getTeam2()->getName()),
                        "logo" => "/uploads/images/" . $match->getTeam2()->getLogo(),
                        "score" => $match->getScore2()
                    ],
                    "event" => [
                        "name" => $match->getEvent() === null ? null : $match->getEvent()->getName(),
                        "startedAt" => $match->getEvent() === null ? null : $match->getEvent()->getStartedAt(),
                        "endedAt" => $match->getEvent() === null ? null : $match->getEvent()->getEndedAt(),
                        "image" => $match->getEvent() === null ? null : $match->getEvent()->getImage(),
                    ],
                ];
        }

        $events = $entityManager->getRepository(Event::class)->findByDate(new \DateTime());

        $eventItems    = [];
        foreach ($events as $event)
        {
            /** @var Event $event */
            $eventItems[] = [
                "name" => $event->getName(),
                "startedAt" => $event->getStartedAt(),
                "endedAt" => $event->getEndedAt(),
                "image" => $event->getImage(),
            ];
        }
//        dump($eventItems);exit();

        $events = $entityManager->getRepository(Event::class)->findFutureEvents(new \DateTime());

        $futureEventItems    = [];
        foreach ($events as $event)
        {

            /** @var Event $event */
            if (!array_key_exists(date("F Y", $event->getStartedAt()->getTimestamp()), $futureEventItems))
            {
                $futureEventItems[date("F Y",$event->getStartedAt()->getTimestamp())] = [
                    "date" => date("F Y", $event->getStartedAt()->getTimestamp()),
                    "items" => [],
                ];
            }
            $futureEventItems[date("F Y", $event->getStartedAt()->getTimestamp())]["items"][] = [
                "name" => $event->getName(),
                "startedAt" => $event->getStartedAt(),
                "endedAt" => $event->getEndedAt(),
                "image" => $event->getImage(),
                "teams" => $event->getCommandCount(),
                "location" => $event->getLocation(),
                "prize" => $event->getPrize()
            ];
        }

        $lives = $entityManager->getRepository(Match::class)->findLive();
        return $this->render('templates/events.html.twig',
            [
                'router' => 'events',
                'matches' => $items,
                "lives" => $lives,
                "events" => $eventItems,
                "futureEvents" => $futureEventItems,
            ]);
    }
}

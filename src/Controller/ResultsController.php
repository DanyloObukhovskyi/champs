<?php

namespace App\Controller;

use App\Entity\Event;
use App\Entity\Match;
use Symfony\Component\Routing\Annotation\Route;

class ResultsController extends MatchesController
{
    /**
     * @Route("/ru/results", name="results_index_page")
     */
    public function index()
    {
        $manager = $this->getDoctrine()->getManager();

        $matches = $manager->getRepository(Match::class)->findResults();

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
                    "logo" => "",
                    "teamA" => [
                        "title" => $match->getTeam1() !== null ? $match->getTeam1()->getName() : null,
                        "logo" => "/uploads/images/" .  ($match->getTeam1() !== null ? $match->getTeam1()->getLogo(): null),
                        "score" => $match->getScore1()
                    ],
                    "teamB" => [
                        "title" => $match->getTeam2() !== null ? $match->getTeam2()->getName(): null,
                        "logo" => "/uploads/images/" . ($match->getTeam2() !== null ? $match->getTeam2()->getLogo(): null),
                        "score" => $match->getScore2()
                    ],
                ];
        }

        $events = $manager->getRepository(Event::class)->findByDate(new \DateTime());

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



        return $this->render('templates/results.html.twig',
            [
                'router' => 'results',
                'resultsItems' => array_reverse($items),
                'events' => $eventItems
            ]);


    }

    /**
     * @Route("/ru/results/{id}", name="results_view")
     */
    public function view($id, $router = 'results')
    {
        return parent::view($id, $router);
    }
}
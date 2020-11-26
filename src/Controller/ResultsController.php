<?php

namespace App\Controller;

use App\Entity\Event;
use App\Entity\EventShow;
use App\Entity\Match;
use App\Service\ImageService;
use App\Service\Match\MatchService;
use Symfony\Component\Routing\Annotation\Route;

class ResultsController extends MatchesController
{
    /**
     * @Route("/ru/results", name="results_index_page")
     */
    public function index()
    {
        $manager = $this->getDoctrine()->getManager();
        $matchService = new MatchService($manager);

        $matches = $manager->getRepository(Match::class)->findResults();
        $imageService = new ImageService();

        $matchesItems = $matchService->matchesDecorator($matches);
        $currDate = null;

        $eventsShow = $manager->getRepository(EventShow::class)->getCurrent();
        $eventItems = [];

        foreach ($eventsShow as $eventShow){
            /** @var Event $event */
            $event = $eventShow->getEvent();

            $imageService->setImage($event->getImage());
            $eventImage = $imageService->getImagePath();

            $eventImageHeader = !empty($event->getImageHeader()) ?  '/uploads/images/'.$event->getImageHeader(): null;

            $eventItems[] = [
                "name" => $event->getName(),
                "startedAt" => $event->getStartedAt(),
                "endedAt" => $event->getEndedAt(),
                "image" => $eventImage,
                "imageHeader" => $eventImageHeader,
            ];
        }

        return $this->render('templates/results.html.twig',
            [
                'router' => 'results',
                'resultsItems' => array_reverse($matchesItems),
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

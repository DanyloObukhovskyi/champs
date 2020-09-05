<?php

namespace App\Controller;

use App\Entity\Event;
use App\Entity\Match;
use App\Entity\Person;
use App\Entity\RatingPerson;
use App\Entity\RatingTeam;
use App\Entity\Result;
use App\Service\EventService;
use App\Service\ImageService;
use App\Service\MatchService;
use App\Service\RatingPersonService;
use App\Service\RatingTeamService;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class MainController extends DefController
{
    /**
     * @Route("/ru/", name="main")
     */
    public function login(AuthenticationUtils $authenticationUtils): Response
    {
        // get the login error if there is one
        $authenticationUtils->getLastAuthenticationError();
        // last username entered by the user
        $authenticationUtils->getLastUsername();

        $entityManager = $this->getDoctrine()->getManager();
        $matchService = new MatchService($entityManager);
        $eventService = new EventService($entityManager);
        $ratingPlayersService = new RatingPersonService($entityManager);
        $ratingCommandService = new RatingTeamService($entityManager);

        $matches = $entityManager->getRepository(Match::class)->findMatchesByDate(new \DateTime());
        $matchesItems = $matchService->matchesDecorator($matches);

        $events = $entityManager->getRepository(Event::class)->getCurrentEvents();
        $eventItems = $eventService->eventsDecorator($events);

        $results =  $entityManager->getRepository(Result::class)->getCurrent();
        $matchResults = [];

        // RATING PLAYERS
        $ratingPlayers = $entityManager->getRepository(RatingPerson::class)->getRatingPersons();
        $ratingPlayers = $ratingPlayersService->retingPlayersDecorator($ratingPlayers);

        // RATING COMMANDS
        $ratingCommands = $entityManager->getRepository(RatingTeam::class)->getRatingTeams();
        $ratingCommands = $ratingCommandService->retingTeamsDecorator($ratingCommands);

        // BEST PLAYER WEEK
        /** @var Person $playerWeek */
        $playerWeek = $entityManager->getRepository(Person::class)->getWeekPlayer();

        $currDate = null;
        foreach ($results as $result)
        {
            $match = $result->getMatch();

            $key = date("d", $match->getStartAt()->getTimestamp());
            /** @var Match $match */

            if (!array_key_exists($key, $matchResults))
            {
                $matchResults[$key] = [
                    "date" => date("d F", $match->getStartAt()->getTimestamp()),
                    "items" => [],
                ];
            }
            $matchResults[$key]["items"][] = $matchService->matchDecorator($match);
        }

        $livesItems = [
            [
                'id' => 1,
                'videoId' => "Nz3_Vg5GBio",
                'videoType' => 0,
                'title' => "ТОП 5 мобильных игр | Champs | Hino",
            ],
            [
                'id' => 2,
                'videoId' => "1NnA3hbwqRY",
                'videoType' => 0,
                'title' => "ММОшим / Champs / ModirDred",
            ],
            [
                'id' => 3,
                'videoId' => "Lmz9itL7sqs",
                'videoType' => 0,
                'title' => "Новости недели / Hino x ModirDred / Champs",
            ],
            [
                'id' => 4,
                'videoId' => "cwd6zSjKEW4",
                'videoType' => 0,
                'title' => "Cyberpunk 2077 | Однопользовательские | Champs | MontemDred"
            ],
        ];
        
        return $this->render('templates/home.html.twig', [
            'events' => $eventItems,
            'router' => 'home',
            'matches' => $matchesItems,
            'results' => $matchResults,
            'videoNews' => $livesItems,
            'ratingPlayers' => $ratingPlayers,
            'ratingCommands' => $ratingCommands,
            'playerWeek' => $playerWeek,
            ]);
    }

    /**
     * @Route("/ru/404", name="notFound")
     */
    public function notFound()
    {
        return $this->render('templates/404.html.twig', ['router' => '404']);
    }

    /**
     * @Route("/ru/setcookies", name="main_setcookies")
     */
    public function setcookies()
    {
        setcookie("cookie_agree", 'true');
        return $this->json(array('status' => true));
    }

    /**
     * @Route("/ru/map", name="map_index")
     */
    public function index()
    {
        return $this->render('templates/map.html.twig', [
            'router' => 'map',
            'styles' => [
                'cabinet/cabinet.css',
                'map.css'
            ]
        ]);
    }

    /**
     * @Route("/ru/service_agreement", name="service_agreement_index")
     */
    public function service_agreement()
    {
        return $this->render('templates/service.agreement.html.twig', [
            'router' => 'map',
            'styles' => [
                'politica.css',
            ]
        ]);
    }

}

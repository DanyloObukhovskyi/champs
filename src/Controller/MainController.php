<?php

namespace App\Controller;

use App\Entity\Event;
use App\Entity\Match;
use App\Entity\Result;
use App\Service\EventService;
use App\Service\MatchService;
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

        $matches = $entityManager->getRepository(Match::class)->findMatchesByDate(new \DateTime());
        $matchesItems = $matchService->matchesDecorator($matches);

        $events = $entityManager->getRepository(Event::class)->getCurrentEvents();
        $eventItems = $eventService->eventsDecorator($events);

        $results =  $entityManager->getRepository(Result::class)->getCurrent();
        $matchResults = [];

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
        $video = [
            1 => 'sfXOTa-69Rc',
            2 => 'kgitmggEgrA',
            3 => 'vz03NPJGhQk',
            0 => 'EkJu4laFGTs',
        ];
        $k = 0;

        $livesItems = [
            [
                'id' => 1,
                'videoId' => "sfXOTa-69Rc",
                'videoType' => 0,
                'title' => "Битва Инстаграмов #2 / путешествие kanecsgo, cгоревший ceh999 / ModirDred x bRuslan / Champs",
            ],
            [
                'id' => 2,
                'videoId' => "qgtn3ZKjYNI",
                'videoType' => 0,
                'title' => "Битва Инстаграмов #1 / мемы от NaVi, выход og_n0tail / Dota 2, CS:GO / ModirDred x Hino / Champs",
            ],
            [
                'id' => 3,
                'videoId' => "oSOcsUuexpo",
                'videoType' => 0,
                'title' => "Зал славы #1 / интервью Black^ / история игрока Dota 2 / Montem / Champs",
            ],
            [
                'id' => 4,
                'videoId' => "AXyQ4-PbwgA",
                'videoType' => 0,
                'title' => "ТОП-КОММЕНТ #1 / угадай, кому этот комментарий / Dota 2, CS:GO / ModirDred x Hino / Champs",
            ],

        ];

        // RATING PLAYERS
        $ratingPlayers = [
            [
                'nickname' => 's1mple',
                'fullname' => 'Александр Костылев',
                'image' => '/images/temp/Player1.png',
                'team' => [
                    'title' => 'Natus Vincere',
                    'image' => '/images/temp/Rectangle5.png'
                ],
                'event' => [
                    'title' => 'Home Sweet Home Cup',
                    'date' => 1596104684,
                ]
            ],
            [
                'nickname' => 's1mple',
                'fullname' => 'Александр Костылев',
                'image' => '/images/temp/Player1.png',
                'team' => [
                    'title' => 'Natus Vincere',
                    'image' => '/images/temp/Rectangle5.png'
                ],
                'event' => [
                    'title' => 'Home Sweet Home Cup',
                    'date' => 1596104684,
                ]
            ],
            [
                'nickname' => 's1mple',
                'fullname' => 'Александр Костылев',
                'image' => '/images/temp/Player1.png',
                'team' => [
                    'title' => 'Natus Vincere',
                    'image' => '/images/temp/Rectangle5.png'
                ],
                'event' => [
                    'title' => 'Home Sweet Home Cup',
                    'date' => 1596104684,
                ]
            ],
            [
                'nickname' => 's1mple',
                'fullname' => 'Александр Костылев',
                'image' => '/images/temp/Player1.png',
                'team' => [
                    'title' => 'Natus Vincere',
                    'image' => '/images/temp/Rectangle5.png'
                ],
                'event' => [
                    'title' => 'Home Sweet Home Cup',
                    'date' => 1596104684,
                ]
            ],
            [
                'nickname' => 's1mple',
                'fullname' => 'Александр Костылев',
                'image' => '/images/temp/Player1.png',
                'team' => [
                    'title' => 'Natus Vincere',
                    'image' => '/images/temp/Rectangle5.png'
                ],
                'event' => [
                    'title' => 'Home Sweet Home Cup',
                    'date' => 1596104684,
                ]
            ],
        ];

        // RATING COMMANDS
        $ratingCommands = [
            [
                'title' => 'Natus Vincere',
                'image' => '/images/temp/Rectangle5.png',
                'teams' => ['/images/temp/Rectangle2.png', '/images/temp/Rectangle4.png'],
            ],
            [
                'title' => 'Natus Vincere',
                'image' => '/images/temp/Rectangle5.png',
                'teams' => ['/images/temp/Rectangle2.png', '/images/temp/Rectangle4.png'],
            ],
            [
                'title' => 'Natus Vincere',
                'image' => '/images/temp/Rectangle5.png',
                'teams' => ['/images/temp/Rectangle2.png', '/images/temp/Rectangle4.png'],
            ],
            [
                'title' => 'Natus Vincere',
                'image' => '/images/temp/Rectangle5.png',
                'teams' => ['/images/temp/Rectangle2.png', '/images/temp/Rectangle4.png'],
            ],
            [
                'title' => 'Natus Vincere',
                'image' => '/images/temp/Rectangle5.png',
                'teams' => ['/images/temp/Rectangle2.png', '/images/temp/Rectangle4.png'],
            ],
        ];

        // BEST PLAYER WEEK
        $playerWeek = [
          [
            'nickname' => 's1mple',
            'fullname' => 'Александр Костылев',
            'image' => '/images/temp/Player1.png',
            'rate' => '0.59',
            'skill' => 'Лучшие убийства с AWP',
          ]
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

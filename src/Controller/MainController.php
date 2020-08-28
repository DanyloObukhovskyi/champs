<?php

namespace App\Controller;

use App\Entity\Event;
use App\Entity\Match;
use App\Entity\Result;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
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
        $error = $authenticationUtils->getLastAuthenticationError();
        // last username entered by the user
        $lastUsername = $authenticationUtils->getLastUsername();

        //return $this->render('security/login.html.twig', ['last_username' => $lastUsername, 'error' => $error]);

        $entityManager = $this->getDoctrine()->getManager();
        $matches = $entityManager->getRepository(Match::class)->findMatchesByDate(new \DateTime());

        $events = $entityManager->getRepository(Event::class)->getCurrentEvents();

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
                        "title" => $match->getTeam1() !== null ? str_replace("'", "", $match->getTeam1()->getName()): null,
                        "logo" => "/uploads/images/" .($match->getTeam1() !== null ? $match->getTeam1()->getLogo(): null),
                        "score" => $match->getScore1() == 0 ? null : $match->getScore1(),
                    ],
                    "teamB" => [
                        "title" => $match->getTeam2() !== null ? str_replace("'", "", $match->getTeam2()->getName()): null,
                        "logo" => "/uploads/images/" . ($match->getTeam2() !== null ? $match->getTeam2()->getLogo(): null),
                        "score" => $match->getScore2() == 0 ? null : $match->getScore2(),
                    ],
                    "event" => [
                        "name" => $match->getEvent() === null ? null : $match->getEvent()->getName(),
                        "startedAt" => $match->getEvent() === null ? null : $match->getEvent()->getStartedAt(),
                        "endedAt" => $match->getEvent() === null ? null : $match->getEvent()->getEndedAt(),
                        "image" => $match->getEvent() === null ? null : $match->getEvent()->getImage(),
                    ],
                ];
        }
        $matchesItems = $items;

        $results =  $entityManager->getRepository(Result::class)
            ->getCurrent();
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
            $matchResults[date("d", $match->getStartAt()->getTimestamp())]["items"][] =
                [
                    "match_id" => $match->getId(),
                    "time" => date("H:i", $match->getStartAt()->getTimestamp()),
                    "title" => "",
                    "logo" => "",
                    "teamA" => [
                        "title" => str_replace("'", "", $match->getTeam1()->getName()),
                        "logo" => "/uploads/images/" . $match->getTeam1()->getLogo(),
                        "score" => $match->getScore1() == 0 ? null : $match->getScore1(),
                    ],
                    "teamB" => [
                        "title" => str_replace("'", "", $match->getTeam2()->getName()),
                        "logo" => "/uploads/images/" . $match->getTeam2()->getLogo(),
                        "score" => $match->getScore2() == 0 ? null : $match->getScore2(),
                    ],
                    "event" => [
                        "name" => $match->getEvent() === null ? null : $match->getEvent()->getName(),
                        "startedAt" => $match->getEvent() === null ? null : $match->getEvent()->getStartedAt(),
                        "endedAt" => $match->getEvent() === null ? null : $match->getEvent()->getEndedAt(),
                        "image" => $match->getEvent() === null ? null : $match->getEvent()->getImage(),
                    ],
                ];
        }
        $lives = $entityManager->getRepository(Match::class)->findLive();
        $livesItems = [];
        $video = [];


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

//        foreach ($lives as $live)
//        {
//            $k++;
//            /** @var Match $live */
//            $livesItems[] = [
//                'id' => $live->getId(),
//                'videoId' => $video[$k % 4],
//                'videoType' => 0,
//                'title' => str_replace("'", "", $live->getTeam1()->getName()) ." vs " . str_replace("'", "", $live->getTeam2()->getName()),
////                'url' => $live->getUrl(),
//            ];
//        }

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

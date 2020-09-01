<?php

namespace App\Controller;

use App\Entity\Match;
use App\Entity\PlayerStatistics;
use App\Entity\Stream;
use App\Kernel;
use App\Repository\MatchRepository;
use App\Service\MatchService;
use http\Env\Response;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class MatchesController extends AbstractController
{
    /**
     * @Route("/ru/matches", name="matches_index_page")
     */
    public function index()
    {
        $entityManager = $this->getDoctrine()->getManager();
        $matchService = new MatchService($entityManager);

        $matches = $entityManager->getRepository(Match::class)->findMatchesNotEnded();
        $matchesItems = $matchService->matchesDecorator($matches);

        $lives = $entityManager->getRepository(Match::class)->findLive();

        return $this->render('templates/matches.html.twig',
            ['router' => 'matches', 'matches' => $matches, "items" => $matchesItems, "lives" => $lives]);
    }

    /**
     *
     * @Route("/ru/matches/{id}", name="matches_view")
     */
    public function view($id, $router = 'matches')
    {
        $entityManager = $this->getDoctrine()->getManager();

        /** @var Match $match */
        $match_view                 = $entityManager->getRepository(Match::class)->findOneBy([
            'id' => $id,
        ]);
        $playerStatisticsTeam1 = $this->getDoctrine()->getRepository(PlayerStatistics::class)->findByMatchTeam($match_view->getId(),
            $match_view->getTeam1());
        $playerStatisticsTeam2 = $this->getDoctrine()->getRepository(PlayerStatistics::class)->findByMatchTeam($match_view->getId(),
            $match_view->getTeam2());

        $results = $entityManager->getRepository(Match::class)->findResults();

        $items    = [];
        $currDate = null;

        foreach ($results as $match)
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
                        "logo" => "/uploads/images/" . ($match->getTeam1() !== null ? $match->getTeam1()->getLogo(): null),
                        "score" => $match->getScore1() == 0 ? null : $match->getScore1(),
                    ],
                    "teamB" => [
                        "title" =>$match->getTeam2() !== null ?  str_replace("'", "", $match->getTeam2()->getName()): null,
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
        /** @var Match $match_view */
        $date = $match_view->getStartAt()->format(("d F Y H:i"));
        str_replace("January", "Января", $date);
        str_replace("February", "Февраля", $date);
        str_replace("March", "Марта", $date);
        str_replace("April", "Апреля", $date);
        str_replace("May", "Мая", $date);
        str_replace("June", "Июня", $date);
        str_replace("Jule", "Июля", $date);
        str_replace("August", "Августа", $date);
        str_replace("September", "Сентября", $date);
        str_replace("October", "Октября", $date);
        str_replace("November", "Ноября", $date);
        str_replace("December", "Декабря", $date);

        return $this->render('templates/matches.view.html.twig', [
            'router' => $router,
            'match' => $match_view,
            'results' => $items,
            'date' => $date,
            'playerStatisticsTeam1' => $playerStatisticsTeam1,
            'playerStatisticsTeam2' => $playerStatisticsTeam2,
        ]);
    }

    /**
     *
     * @Route("/ru/matches/before/{id}", name="before_match")
     */
    public function before_match($id)
    {
        return $this->render('templates/matches.before.html.twig', ['router' => 'matches']);
    }

    /**
     *
     * @Route("/ru/matches/live/{id}", name="live_match")
     */
    public function live_match($id)
    {
        $entityManager = $this->getDoctrine()->getManager();

        $match = $entityManager->getRepository(Match::class)->findOneBy([
            'id' => $id,
        ]);

        $playerStatisticsTeam1 = $this->getDoctrine()->getRepository(PlayerStatistics::class)->findByMatchTeam($match->getId(),
            $match->getTeam1());
        $playerStatisticsTeam2 = $this->getDoctrine()->getRepository(PlayerStatistics::class)->findByMatchTeam($match->getId(),
            $match->getTeam2());



        return $this->render('templates/matches.live.html.twig', [
            'router' => 'matches',
            'match' => $match,
            'playerStatisticsTeam1' => $playerStatisticsTeam1,
            'playerStatisticsTeam2' => $playerStatisticsTeam2,
        ]);
    }

    /**
     *
     * @Route("/ru/live/{matchId}", name="live_video")
     */
    public function live_video($matchId)
    {
        $entityManager = $this->getDoctrine()->getManager();

        $match = $entityManager->getRepository(Match::class)->findOneBy([
            'id' => $matchId,
        ]);

        $streams = $match->getStreams();
//        $streamItems = [];
        $url = null;
        foreach ($streams as $stream)
        {
            /** @var Stream $stream */
            $url = $stream->getUrl();
//            $streamItems[$stream->getLanguage()] =  $stream->getUrl();
        }
        return $this->render('templates/matches.live.html.twig', [
            'router' => 'live',
            'match_id' => $matchId,
//            'streams' => $streamItems,
            'url' => $url,
        ]);
    }

    /**
     * Matches /ru/matches/*
     *
     * @Route("/ru/matches/filter/{$filter}", name="get_matches_by_filter_page")
     */
    public function getMatchesByFilter($filter)
    {
        $entityManager = $this->getDoctrine()->getManager();

        $matches = $entityManager->getRepository(Match::class)->findMatchesNotEnded();

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
                        "title" => $match->getTeam1()->getName(),
                        "logo" => "/uploads/images/" . $match->getTeam1()->getLogo(),
                    ],
                    "teamB" => [
                        "title" => $match->getTeam2()->getName(),
                        "logo" => "/uploads/images/" . $match->getTeam2()->getLogo(),
                    ],
                ];
        }

        $lives = $entityManager->getRepository(Match::class)->findLive();

        return $this->json([
            'router' => 'matches',
            'matches' => $matches,
            "items" => $items,
            "lives" => $lives,
        ]);
    }

    /**
     * Matches /ru/matches/*
     *
     * @Route("/ru/matches/date/{filter}", name="get_matches_by_date_page")
     */
    public function getMatchesByDate($filter)
    {
        $form          = json_decode($filter);
        $date          = new \DateTime($form['date']);
        $entityManager = $this->getDoctrine()->getManager();

        $matches = $entityManager->getRepository(Match::class)->findMatchesByDate($date);

        return $this->json([
            'matches' => $matches,
        ]);
    }
}

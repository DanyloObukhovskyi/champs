<?php

namespace App\Controller;

use App\Entity\Match;
use App\Entity\MatchCommentLike;
use App\Entity\PlayerStatistics;
use App\Entity\Stream;
use App\Entity\Team;
use App\Repository\MatchRepository;
use App\Service\MapService;
use App\Service\Match\MatchCommentLikeService;
use App\Service\Match\MatchCommentService;
use App\Service\Match\MatchMapTeamWinRateService;
use App\Service\Match\MatchService;
use App\Entity\MatchMapTeamStatistic;
use App\Service\Match\PastMatchService;
use App\Service\PersonService;
use App\Service\PlayerStatisticsService;
use Doctrine\ORM\EntityManagerInterface;
use org\bovigo\vfs\example\FailureExample;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\Translation\TranslatorInterface;

/**
 * @Route("/{_locale}", requirements={"locale": "ru"})
 */
class MatchesController extends AbstractController
{
    /**
     * @var EntityManagerInterface
     */
    public $entityManager;

    /**
     * @var MatchService
     */
    public $matchService;

    /**
     * @var PastMatchService
     */
    public $pastMatchService;

    /**
     * @var PlayerStatisticsService
     */
    public $playerStatisticsService;

    /**
     * @var MapService
     */
    public $mapService;

    /**
     * @var MatchMapTeamWinRateService
     */
    public $matchMapTeamWinRateService;

    /**
     * @var PersonService
     */
    public $personService;

    /**
     * @var MatchRepository
     */
    public $matchRepository;

    /**
     * @var MatchCommentService
     */
    public $matchCommentService;

    public $matchCommentLikeService;

    /**
     * MatchesController constructor.
     * @param EntityManagerInterface $entityManager
     */
    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;

        $this->matchService = new MatchService($entityManager);
        $this->pastMatchService = new PastMatchService($entityManager);

        $this->playerStatisticsService = new PlayerStatisticsService($entityManager);
        $this->mapService = new MapService($entityManager);

        $this->matchMapTeamWinRateService = new MatchMapTeamWinRateService($entityManager);
        $this->personService = new PersonService($entityManager);

        $this->matchRepository = $entityManager->getRepository(Match::class);
        $this->matchCommentService = new MatchCommentService($entityManager);
        $this->matchCommentLikeService = new MatchCommentLikeService($entityManager);
    }

    /**
     * @Route("/matches", name="matches_index_page")
     */
    public function index()
    {
        return $this->render('templates/matches.html.twig', ['router' => 'matches']);
    }

    /**
     * @Route("/ajax/matches/{type}/{page}", defaults={"page"=1})
     */
    public function getMatchesAjax(Request $request, $type, $page)
    {
        $filters = $request->getContent();
        $filters = json_decode($filters, false);

        $matches = $this->matchService->getMatchesByType($filters, $type, $page);
        $matches = $this->matchService->matchesDecorator($matches);

        $counts = [];

        foreach (MatchService::MATCH_TYPES as $type){
            $counts[$type] = $this->matchService->getMatchesCountByType($filters, $type);
        }

        return $this->json([
            'matches' => $matches,
            'limit' => $_ENV['MATCHES_PAGINATION'] ?? null,
            'counts' => $counts
        ]);
    }

    /**
     *
     * @Route("/matches/{id}", name="matches_view")
     */
    public function view($id, $router = 'matches')
    {
        /** @var Match $match */
        $match = $this->matchService->find($id);

        return $this->render('templates/matches.view.html.twig', [
            'router' => $router,
            'match' => $match
        ]);
    }

    /**
     *
     * @Route("/get/match/{id}")
     */
    public function getMatch($id, TranslatorInterface $translator)
    {
        /** @var Match $match */
        $match = $this->matchService->find($id);
        $matchDecorate = $this->matchService->matchDecorator($match);

        $matchDecorate['teamA']['pastMatches'] = $this->getMatchTeamPastMatches($match, $match->getTeam1());
        $matchDecorate['teamB']['pastMatches'] = $this->getMatchTeamPastMatches($match, $match->getTeam2());

        $matchDecorate['teamA']['mapStatistics'] = $this->getMatchTeamMapStatistics($match, $match->getTeam1());
        $matchDecorate['teamB']['mapStatistics'] = $this->getMatchTeamMapStatistics($match, $match->getTeam2());

        $matchDecorate['teamA']['playerStatistics'] = $this->getMatchPlayerStatistics($match, $match->getTeam1());
        $matchDecorate['teamB']['playerStatistics'] = $this->getMatchPlayerStatistics($match, $match->getTeam2());

        $matchDecorate['teamA']['players'] = $this->getTeamPlayers($match, $match->getTeam1());
        $matchDecorate['teamB']['players'] = $this->getTeamPlayers($match, $match->getTeam2());

        $matchDecorate['startedAt']['date'] = $this->matchService->translateMatchDate($match, $translator);
        $matchDecorate['startedAt']['time'] = $match->getStartAt()->format('H:m');
        $matchDecorate['startedAt']['timeStamp'] = $match->getStartAt()->getTimestamp();

        $comments = $this->matchCommentService
            ->getRepository()->findBy([
                'match' =>  $match,
                'parent' => null
            ]);

        $matchDecorate['commentsCount'] = count($match->getComments());

        $comments = $this->matchCommentService->recurciveComments(
            $comments,
            $_ENV['MAX_COMMENTS_ANSWERS'],
            $this->getUser()
        );

        return $this->json([
            'match'    => $matchDecorate,
            'maps'     => $this->mapService->getAll(),
            'comments' => $comments
        ]);
    }

    /**
     * @param $match
     * @param $team
     * @return array
     * @throws \Doctrine\ORM\NonUniqueResultException
     * @throws \Doctrine\ORM\ORMException
     */
    public function getMatchTeamPastMatches($match, $team)
    {
        $team1PastMatches = [];

        if (isset($team)){
            $team1PastMatches = $this->pastMatchService->getByMatchAndTeam($match, $team);
        }

        return $this->pastMatchService->decorateAll($team1PastMatches);
    }

    /**
     * @param Match $match
     * @param Team|null $team
     * @return array
     */
    public function getMatchTeamMapStatistics(Match $match, $team)
    {
        $teamMapStatistics = [];
        $matchMapStatistics = [];

        if (isset($team)){
            /** @var MatchMapTeamStatistic[] $matchMapStatistics */
            $matchMapStatistics = $this->matchMapTeamWinRateService->getByMatchAndTeam($match, $team);
        }
        /** @var MatchMapTeamStatistic $mapTeamStatistic */
        foreach ($matchMapStatistics as $mapTeamStatistic)
        {
            $teamMapStatistics[] = [
                'map' => $mapTeamStatistic->getMap(),
                'rating' => $mapTeamStatistic->getWinRate()
            ];
        }
        return $teamMapStatistics;
    }

    /**
     * @param Match $match
     * @param Team|null $team
     * @return array
     */
    public function getMatchPlayerStatistics(Match $match, $team)
    {
        $matchPlayerStatistics = null;

        if(isset($team)){
            $playerStatisticsTeam = $this->getDoctrine()
                ->getRepository(PlayerStatistics::class)
                ->findByMatchTeam(
                    $match->getId(),
                    $team
                );
            $playerStatisticsTeam = $this->playerStatisticsService
                ->statisticsDecorator($playerStatisticsTeam);

            $matchPlayerStatistics = empty($playerStatisticsTeam) ? null : $playerStatisticsTeam;
        }
        return $matchPlayerStatistics;
    }

    /**
     * @param Match $match
     * @param Team|null $team
     * @return array
     */
    public function getTeamPlayers(Match $match, $team)
    {
        $teamPersons = [];
        $playerStatistics = $match->getPlayerStatistics();

        if (isset($team)){
            /** @var PlayerStatistics $playerStatistic */
            foreach ($playerStatistics as $playerStatistic)
            {
                $teamId = $playerStatistic->getPlayer()
                    ->getTeam()
                    ->getId();

                if ($teamId === $team->getId()){
                    $teamPerson = $playerStatistic->getPlayer()->getPerson();

                    $teamPersons[$teamPerson->getId()] = $this->personService->personDecorate($teamPerson);
                }
            }
        }
        return $teamPersons;
    }

    /**
     *
     * @Route("/matches/before/{id}", name="before_match")
     */
    public function before_match($id)
    {
        return $this->render('templates/matches.before.html.twig', ['router' => 'matches']);
    }

    /**
     *
     * @Route("/matches/live/{id}", name="live_match")
     */
    public function liveMatch($id)
    {
        $match = $this->entityManager->getRepository(Match::class)->findOneBy([
            'id' => $id,
        ]);

        $playerStatisticsTeam1 = $this->entityManager
            ->getRepository(PlayerStatistics::class)
            ->findByMatchTeam(
                $match->getId(),
                $match->getTeam1()
            );
        $playerStatisticsTeam2 = $this->entityManager
            ->getRepository(PlayerStatistics::class)
            ->findByMatchTeam(
                $match->getId(),
                $match->getTeam2()
            );

        return $this->render('templates/matches.live.html.twig', [
            'router' => 'matches',
            'match' => $match,
            'playerStatisticsTeam1' => $playerStatisticsTeam1,
            'playerStatisticsTeam2' => $playerStatisticsTeam2,
        ]);
    }

    /**
     *
     * @Route("/live/{matchId}", name="live_video")
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
     * @Route("/matches/filter/{$filter}", name="get_matches_by_filter_page")
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
     * @Route("/matches/date/{filter}", name="get_matches_by_date_page")
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

    /**
     * @Route("/match/add/comment")
     */
    public function addComment(Request $request)
    {
        $request = json_decode($request->getContent(), false);
        $match = $this->matchService->find($request->id);

        $parentComment = null;

        if (isset($request->commentId)){
            $parentComment = $this->matchCommentService->getRepository()
                ->find($request->commentId);
        }

        if (!empty($this->getUser()) and isset($match))
        {
            $this->matchCommentService->create(
                $this->getUser(),
                $match,
                $parentComment,
                $request->comment
            );

            return $this->json('ok');
        }
        return $this->json('unauthorized', 401);
    }

    /**
     * @Route("/match/{matchId}/comments")
     */
    public function getComments(int $matchId)
    {
        /** @var Match $news */
        $match = $this->matchService->find($matchId);

        $newsComments = $this->matchCommentService
            ->getRepository()
            ->findBy([
                'match' => $match,
                'parent' => null
            ]);
        $newsComments = $this->matchCommentService->recurciveComments(
            $newsComments,
            $_ENV['MAX_COMMENTS_ANSWERS'],
            $this->getUser()
        );

        return $this->json([
            'comments' => $newsComments,
            'commentsCount' => count($match->getComments())
        ]);
    }

    /**
     * @Route("/like/match/comment/{commentId}")
     */
    public function setLikeComment(Request $request, $commentId)
    {
        $request = json_decode($request->getContent(), false);

        $matchComment = $this->matchCommentService
            ->getRepository()
            ->find($commentId);

        $matchCommentLike = null;

        if (isset($matchComment) and !empty($this->getUser())){
            $matchCommentLike = $this->entityManager
                ->getRepository(MatchCommentLike::class)
                ->findOneBy([
                    'comment' => $matchComment,
                    'user' => $this->getUser()
                ]);

            if (empty($matchCommentLike)){
                $matchCommentLike = new MatchCommentLike();
                $matchCommentLike->setUser($this->getUser());
                $matchCommentLike->setComment($matchComment);
            }
            $matchCommentLike->setType($request->type);

            $this->entityManager->persist($matchCommentLike);
            $this->entityManager->flush();
        }
        $likesCount = $this->matchCommentLikeService->getLikesCount($matchComment);

        $userLike = null;

        if (!empty($this->getUser())) {
            $like = $this->matchCommentLikeService->userLike($matchComment, $this->getUser());
            if (isset($like)) {
                $userLike = $this->matchCommentLikeService->decorator($like);
            }
        }
        return $this->json([
            'likesCount' => $likesCount,
            'userLike' => $userLike
        ]);
    }
}

<?php

namespace App\Controller;

use App\Entity\Event;
use App\Entity\Match;
use App\Entity\News;
use App\Entity\Result;
use App\Service\Event\EventService;
use App\Service\Match\MatchService;
use App\Service\News\NewsService;
use App\Service\RatingPersonService;
use App\Service\YouTubeService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
use Symfony\Component\Translation\TranslatorInterface;

class MainController extends DefController
{
    public $entityManager;

    public $matchService;

    public $newsService;

    public $eventService;

    public $ratingPersonService;

    public $youTubeService;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;

        $this->matchService = new MatchService($entityManager);
        $this->newsService = new NewsService($entityManager);

        $this->eventService = new EventService($entityManager);
        $this->ratingPersonService = new RatingPersonService($entityManager);
        $this->youTubeService = new YouTubeService();
    }

    /**
     * @Route("/ru/", name="main")
     */
    public function login(AuthenticationUtils $authenticationUtils, Request $request): Response
    {
        // get the login error if there is one
        $authenticationUtils->getLastAuthenticationError();
        // last username entered by the user
        $authenticationUtils->getLastUsername();

        $token = $request->get('token');

        return $this->render('templates/home.html.twig', [
            'router' => 'home',
            'token' => $token
        ]);
    }

    public function prepareVideo($data = array())
    {
        $VideoItems = array();
        if (!empty($data)) {
            foreach ($data as $v_key => &$v_value) {
                $tmp = array();
                $tmp['id'] = $v_value->getId();

                $link = $v_value->getText();
                preg_match("/http|s:\/\//", $link, $match_items);
                preg_match("/twitch/", $link, $is_TW);
                preg_match("/youtu/", $link, $is_YT);
                if (strlen($link) == 11 && count($match_items) == 0) {
                    $tmp['video_type'] = 0; //YouTube video
                    $tmp['video_id'] = $link;
                }
                if (count($is_TW) > 0) {
                    $tmp['video_type'] = 1; //Twich video
                    $link = str_replace("https://www.twitch.tv/", "", $link);
                    $link = str_replace("http://www.twitch.tv/", "", $link);
                    $link = str_replace("https://twitch.tv/", "", $link);
                    $link = str_replace("http://twitch.tv/", "", $link);
                    $link = str_replace("https://player.twitch.tv/?channel=", "", $link);
                    $link = str_replace("http://player.twitch.tv/?channel=", "", $link);
                    $tmp['video_id'] = $link;
                }
                if (count($is_YT) > 0) {
                    $tmp['video_type'] = 0; //YouTube video
                    $link = str_replace("https://youtu.be/", "", $link);
                    $link = str_replace("http://youtu.be/", "", $link);
                    $link = str_replace("https://www.youtube.com/watch?v=", "", $link);
                    $link = str_replace("http://www.youtube.com/watch?v=", "", $link);

                    $tmp['video_id'] = $link;
                }
                $tmp['logo'] = $v_value->getLogo();
                $tmp['title'] = $v_value->getTitle();
                $date = $v_value->getDate()->format('d F Y');

                foreach (MatchService::MOHTHS as $month => $lang) {
                    $date = str_replace($month, $lang, $date);
                }
                $tmp['date'] = $date;
                $VideoItems[$v_key] = $tmp;
            }
        }
        return $VideoItems;
    }

    /**
     * @Route("/ru/main/matches")
     */
    public function getMainMatches(Request $request)
    {
        $request = json_decode($request->getContent(), false);
        $date = !empty($request->date) ? new \DateTime($request->date) : new \DateTime();

        $matches = $this->entityManager
            ->getRepository(Match::class)
            ->findMatchesByDate($date);

        $matchesParse = [];
        foreach ($matches as $match) {
            $matchesParse[] = $this->matchService->matchDecorator($match);
        }

        return $this->json([
            'dateRu' => NewsService::replaceMonth($date->format('d F')),
            'matches' => $matchesParse
        ]);
    }

    /**
     * @Route("/ru/main/results")
     */
    public function getMainResults()
    {
        $results = $this->entityManager
            ->getRepository(Result::class)
            ->getCurrent();

        $matchResults = [];
        foreach ($results as $result) {
            /** @var Match $match */
            $match = $result->getMatch();
            $matchResults[] = $this->matchService->matchDecorator($match);
        }
        return $this->json($matchResults);
    }

    /**
     * @Route("/ru/main/live/matches")
     */
    public function getMainLiveMatches()
    {
        $matches = $this->entityManager
            ->getRepository(Match::class)
            ->findBy(['live' => 1], ['id' => 'DESC'], 6);
        $matchesItems = $this->matchService->matchesDecorator($matches);

        return $this->json($matchesItems);
    }

    /**
     * @Route("/ru/main/news")
     */
    public function getMainNews()
    {
        $news = $this->newsService->getMainNews();

        $newsArray = [];
        foreach ($news as $new) {
            $newsArray[] = $this->newsService->decorator($new);
        }
        return $this->json($newsArray);
    }

    /**
     * @Route("/ru/main/video/news")
     */
    public function getVideoNews(TranslatorInterface $translator)
    {
        try {
            $videos = $this->youTubeService->getVideoList(10);
        } catch (\Exception $e) {
            $videos = [];
        }
        $parseVideos = [];

        foreach ($videos as $video) {
            $month = $translator->trans($video['date']->format('F'));
            $date = $video['date']->format('d ') . $month . $video['date']->format(' Y');

            $video['date'] = $date;
            $parseVideos[] = $video;
        }
        return $this->json($parseVideos);
    }

    /**
     * @Route("/ru/main/events")
     */
    public function getMainRatingPlayers()
    {
        $events = $this->entityManager
            ->getRepository(Event::class)
            ->getCurrentEvents();

        $events = $this->eventService
            ->eventsDecorator($events);

        return $this->json($events);
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
        setcookie("cookie_agree", true);
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

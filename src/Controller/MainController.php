<?php

namespace App\Controller;

use App\Entity\Event;
use App\Entity\Match;
use App\Entity\News;
use App\Entity\Result;
use App\Service\Event\EventService;
use App\Service\MatchService;
use App\Service\News\NewsService;
use App\Service\RatingPersonService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class MainController extends DefController
{
    public $entityManager;

    public $matchService;

    public $newsService;

    public $eventService;

    public $ratingPersonService;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;

        $this->matchService = new MatchService($entityManager);
        $this->newsService = new NewsService($entityManager);

        $this->eventService = new EventService($entityManager);
        $this->ratingPersonService = new RatingPersonService($entityManager);
    }

    /**
     * @Route("/ru/", name="main")
     */
    public function login(AuthenticationUtils $authenticationUtils): Response
    {
        // get the login error if there is one
        $authenticationUtils->getLastAuthenticationError();
        // last username entered by the user
        $authenticationUtils->getLastUsername();

        return $this->render('templates/home.html.twig', [
                'router' => 'home',
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
    public function getMainMatches()
    {
        $matches = $this->entityManager
            ->getRepository(Match::class)
            ->findMatchesByDate(new \DateTime());
        $matchesItems = $this->matchService->matchesDecorator($matches);

        return $this->json($matchesItems);
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
    public function getVideoNews()
    {
        $livesItems = [
            [
                'id' => 1,
                'video_id' => "Nz3_Vg5GBio",
                'video_type' => 0,
                'logo' => "",
                'title' => "ТОП 5 мобильных игр | Champs | Hino",
            ],
            [
                'id' => 2,
                'video_id' => "1NnA3hbwqRY",
                'video_type' => 0,
                'logo' => "",
                'title' => "ММОшим / Champs / ModirDred",
            ],
            [
                'id' => 3,
                'video_id' => "Lmz9itL7sqs",
                'video_type' => 0,
                'logo' => "",
                'title' => "Новости недели / Hino x ModirDred / Champs",
            ],
            [
                'id' => 4,
                'video_id' => "cwd6zSjKEW4",
                'video_type' => 0,
                'logo' => "",
                'title' => "Cyberpunk 2077 | Однопользовательские | Champs | MontemDred"
            ],
        ];
        /*
        * stream - news type - 8
        * video - news type - 3
        */
        $VideoData = $this->entityManager
            ->getRepository(News::class)
            ->findBy(['type' => [8, 3]], ['date' => 'DESC'], 10, 0); //8 - stream; 3 - video

        $VideoItems = $this->prepareVideo($VideoData);

        if (count($VideoItems) < 4) {
            $ij = 4 - (4 - count($VideoItems));
            for ($ij; $ij < 4; $ij++) {
                $VideoItems[$ij] = $livesItems[$ij];
            }
        }
        return $this->json($VideoItems);
    }

    /**
     * @Route("/ru/main/events")
     */
    public function getMainRatingPlayers()
    {
        $events = $this->entityManager->getRepository(Event::class)->getCurrentEvents();
        $events = $this->eventService->eventsDecorator($events);

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

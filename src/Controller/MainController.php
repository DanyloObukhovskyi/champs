<?php

namespace App\Controller;

use App\Entity\Event;
use App\Service\HLTVService;
use App\Service\LoggerService;
use App\Entity\{Game, News, Result, Match, Teachers, User};
use App\Service\Event\EventService;
use App\Service\Match\MatchService;
use App\Service\News\NewsService;
use App\Service\News\NewsTagService;
use App\Service\RatingPersonService;
use App\Service\YouTubeService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
use Symfony\Component\Translation\TranslatorInterface;
use App\Entity\SeoPages;
use App\Service\Seo\SeoService;
use App\Service\UserService;
/**
 * @Route("/{_locale}", requirements={"locale": "ru"})
 */
class MainController extends DefController
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
     * @var NewsService
     */
    public $newsService;

    /**
     * @var EventService
     */
    public $eventService;

    /**
     * @var RatingPersonService
     */
    public $ratingPersonService;

    /**
     * @var YouTubeService
     */
    public $youTubeService;

    /**
     * @var NewsTagService
     */
    public $newsTagService;

    /**
     * @var SeoService
     */
    public $seoService;

    /**
     * @var UserService
     */
    public $userService;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;

        $this->matchService = new MatchService($entityManager);
        $this->newsService = new NewsService($entityManager);

        $this->eventService = new EventService($entityManager);
        $this->ratingPersonService = new RatingPersonService($entityManager);

        $this->youTubeService = new YouTubeService();
        $this->newsTagService = new NewsTagService($entityManager);

        $this->seoService = new SeoService($entityManager);

        $this->userService = new UserService($entityManager);
    }

    /**
     * @Route("/", name="main")
     */
    public function login(AuthenticationUtils $authenticationUtils, Request $request): Response
    {
        // get the login error if there is one
        $authenticationUtils->getLastAuthenticationError();
        // last username entered by the user
        $authenticationUtils->getLastUsername();

        $token = $request->get('token');

        $popularTags = $this->newsTagService->popularTags(10);

        $seoSettings = $this->seoService->getSeo($request->attributes->get('_route'));

        $newsEntities = $this->newsService->getMainNews();

        $news = [];
        foreach ($newsEntities as $newsEntity) {
            $news[] = $this->newsService->decorator($newsEntity);
        }
        $link = $request->getSchemeAndHttpHost() . $request->getBasePath();

        return $this->render('templates/home.html.twig', [
            'link' => $link,
            'news' => $news,
            'heading_type' => $seoSettings['heading_type'],
            'heading' => $seoSettings['heading'],
            'title' => $seoSettings['title'],
            'description' => $seoSettings['description'],
            'keywords' => $seoSettings['keywords'],
            'meta_tags' => $seoSettings['meta'],
            'router' => 'home',
            'token' => $token,
            'popularTags' => $popularTags
        ]);
    }

    /**
     * @Route("/", name="main_redirect")
     */
    public function redirectToLogin(AuthenticationUtils $authenticationUtils, Request $request): Response
    {
        // get the login error if there is one
        $authenticationUtils->getLastAuthenticationError();
        // last username entered by the user
        $authenticationUtils->getLastUsername();

        $token = $request->get('token');

        $popularTags = $this->newsTagService->popularTags(10);

        $seoSettings = $this->seoService->getSeo($request->attributes->get('_route'));

        $newsEntities = $this->newsService->getMainNews();

        $news = [];
        foreach ($newsEntities as $newsEntity) {
            $news[] = $this->newsService->decorator($newsEntity);
        }
        $link = $request->getSchemeAndHttpHost() . $request->getBasePath();

        return $this->render('templates/home.html.twig', [
            'link' => $link,
            'news' => $news,
            'heading_type' => $seoSettings['heading_type'],
            'heading' => $seoSettings['heading'],
            'title' => $seoSettings['title'],
            'description' => $seoSettings['description'],
            'keywords' => $seoSettings['keywords'],
            'meta_tags' => $seoSettings['meta'],
            'router' => 'home',
            'token' => $token,
            'popularTags' => $popularTags
        ]);
    }

    /**
     * @Route("/{game}", requirements={"game": "cs"})
     */
    public function gameHome($game): Response
    {
        return $this->render("templates/home/$game.html.twig", [
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
     * @Route("/main/results")
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
     * @Route("/main/live/matches")
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
     * @Route("/main/news")
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
     * @Route("/main/video/news")
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
     * @Route("/main/events")
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
     * @Route("/404", name="notFound")
     */
    public function notFound()
    {
        return $this->render('templates/404.html.twig', ['router' => '404']);
    }

    /**
     * @Route("/setcookies", name="main_setcookies")
     */
    public function setcookies()
    {
        setcookie("cookie_agree", true);
        return $this->json(array('status' => true));
    }

    /**
     * @Route("/map", name="map_index")
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
     * @Route("/oferta_na_okazanie_uslug_treneru", name="service_agreement_index")
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

    /**
     * @Route("/main/matches")
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
     * @Route("/test/mail")
     */
    public function testMail(\Swift_Mailer $mailer)
    {
        $this->dispatchMessage(new TestMail($mailer));
    }

    /**
     * @Route("/test/parser")
     */
    public function checkParser(){
        LoggerService::info("get events");
        $events = HLTVService::getMainEvents();
        echo "<pre>";
        var_dump($events);
        die;
        if (empty($events)) {
            return null;
        }
        $result = [];

        foreach ($events as $event) {

            if (isset($event['started_at'])) {
                $eventEntity = $this->eventService->create($event, $parseDate);
            }

            if (empty($eventEntity)) {
                LoggerService::error("event entity didnt created");
            } else {
                if ($isNotMain) {
                    $this->eventShowService->createOrUpdate($eventEntity, $this->parseDate);
                }
                $result[] = $eventEntity;
            }
        }

        return !empty($result) ? $result : null;

        return $events;
    }

    /**
     * @Route("/generateSitemap",defaults={"_format"="xml"}
     *     )
     */
    public function generateSitemap(Request $request)
    {
        $baseUrl = $request->getSchemeAndHttpHost().$request->getBasePath().'/ru/';
        $filename = 'sitemap.xml';

        header("content-type: text/xml;");

        $siteData = '<?xml version="1.0" encoding="UTF-8" ?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';

        $siteData.= ' <url>
                      <loc>'.$baseUrl.'</loc> 
                      <changefreq>daily</changefreq> 
                      <lastmod>'.date('Y-m-d').'</lastmod>
                      <priority>0.5</priority> 
                    </url>';

        $siteData.= ' <url>
                      <loc>'.$baseUrl.'novosti</loc> 
                      <changefreq>daily</changefreq> 
                      <lastmod>'.date('Y-m-d').'</lastmod>
                      <priority>0.5</priority> 
                    </url>';

        $siteData.= $this->getUrls($baseUrl,'news');

        $siteData.= ' <url>
                      <loc>'.$baseUrl.'matches</loc> 
                      <changefreq>daily</changefreq> 
                      <lastmod>'.date('Y-m-d').'</lastmod>
                      <priority>0.5</priority> 
                    </url>';

        $siteData.= $this->getUrls($baseUrl,'matches');

        $siteData.= ' <url>
                      <loc>'.$baseUrl.'statistika</loc> 
                      <changefreq>daily</changefreq> 
                      <lastmod>'.date('Y-m-d').'</lastmod>
                      <priority>0.5</priority> 
                    </url>';

        $siteData.= ' <url>
                      <loc>'.$baseUrl.'obucheniye</loc> 
                      <changefreq>daily</changefreq> 
                      <lastmod>'.date('Y-m-d').'</lastmod>
                      <priority>0.5</priority> 
                    </url>';

        $siteData.= $this->getUrls($baseUrl,'trainers');

        $siteData.= ' <url>
                      <loc>'.$baseUrl.'daydzhest_turnirov</loc> 
                      <changefreq>daily</changefreq> 
                      <lastmod>'.date('Y-m-d').'</lastmod>
                      <priority>0.5</priority> 
                    </url>';

        $siteData.= $this->getUrls($baseUrl,'digest');

        $siteData.= ' <url>
                      <loc>'.$baseUrl.'politika_konfedinczialnosti</loc> 
                      <changefreq>daily</changefreq> 
                      <lastmod>'.date('Y-m-d').'</lastmod>
                      <priority>0.5</priority> 
                    </url>';

        $siteData.= ' <url>
                      <loc>'.$baseUrl.'pravila_ispolzovaniya</loc> 
                      <changefreq>daily</changefreq> 
                      <lastmod>'.date('Y-m-d').'</lastmod>
                      <priority>0.5</priority> 
                    </url>';

        $siteData.= ' <url>
                      <loc>'.$baseUrl.'usloviya_oformleniya_zakaza_trenirovok</loc> 
                      <changefreq>daily</changefreq> 
                      <lastmod>'.date('Y-m-d').'</lastmod>
                      <priority>0.5</priority> 
                    </url>';

        $siteData.= ' <url>
                      <loc>'.$baseUrl.'oferta_na_okazanie_uslug</loc> 
                      <changefreq>daily</changefreq> 
                      <lastmod>'.date('Y-m-d').'</lastmod>
                      <priority>0.5</priority> 
                    </url>';

        $siteData.= ' <url>
                      <loc>'.$baseUrl.'oferta_na_okazanie_uslug_treneru</loc> 
                      <changefreq>daily</changefreq> 
                      <lastmod>'.date('Y-m-d').'</lastmod>
                      <priority>0.5</priority> 
                    </url>';

        $siteData.= ' <url>
                      <loc>'.$baseUrl.'polozhenie_o_konkurse</loc> 
                      <changefreq>daily</changefreq> 
                      <lastmod>'.date('Y-m-d').'</lastmod>
                      <priority>0.5</priority> 
                    </url>';

        $siteData.= ' <url>
                      <loc>'.$baseUrl.'kontakty</loc> 
                      <changefreq>daily</changefreq> 
                      <lastmod>'.date('Y-m-d').'</lastmod>
                      <priority>0.5</priority> 
                    </url>';

        $siteData.= ' <url>
                      <loc>'.$baseUrl.'o_nas</loc> 
                      <changefreq>daily</changefreq> 
                      <lastmod>'.date('Y-m-d').'</lastmod>
                      <priority>0.5</priority> 
                    </url>';


        $siteData.= '</urlset>';

        $response = new Response($siteData);
        $disposition = $response->headers->makeDisposition(
            ResponseHeaderBag::DISPOSITION_ATTACHMENT,
            $filename
        );
        $response->headers->set('Content-Disposition', $disposition);
        return $response;

        return new Response($siteData);
    }

    public function getUrls($baseUrl, $type)
    {
        $urlData = '';
        switch ($type){
            case 'news':
                $newsCollect = $this->newsService->getHotNews([], 0 , 0);
                /** @var News $newsEntity */
                foreach ($newsCollect as $newsEntity) {
                    $news = $this->newsService->decorator($newsEntity);
                    try {
                        $newsType = $this->sanitize($news['type']->getTitle());
                        $game = !empty($news['game']) ? $this->sanitize($news['game']->getName()) : null;
                        $title =  $this->sanitize($news['title']);
                        $date = $this->sanitize($news['date_ru_with_year']);
                        if(empty($newsType) || empty($game) || empty($title) || empty($date)){
                            $newsUrl = $news['slug'];
                        } else {
                            $newsUrl = $newsType.'/'.$game.'/'.$title.'-'.$date;
                        }
                    } catch (\Exception $e){
                        $title =  $this->sanitize($news['title']);
                        $newsUrl = $title;
                    }
                    $urlData.= ' <url>
                      <loc>'.$baseUrl.'article/'.$news['id'].'/'.$newsUrl.'</loc> 
                      <changefreq>daily</changefreq> 
                      <lastmod>'.date('Y-m-d').'</lastmod>
                      <priority>0.5</priority> 
                    </url>';
                }
                break;
            case 'matches':
                $matches = $this->matchService->getAllMatches();
                $matches = $this->matchService->matchesDecorator($matches);
                foreach($matches as $dates) {
                    foreach ($dates['items'] as $match) {
                        try {
                            $team1 = $this->sanitize($match['teamA']['title']);
                            $team2 = $this->sanitize($match['teamB']['title']);
                            $event = $this->sanitize($match['event']['name']);
                            $game = $this->sanitize($match['event']['game']['name']);
                            $start_date = $this->sanitize($match['startedAtRu']);
                            $matchUrl = $team1 . '_vs_' . $team2 . '_' . $event . '_' . $game . '_' . $start_date;
                        } catch (\Exception $e) {
                            if(isset($match['slug']) && !empty($match['slug'])){
                                $matchUrl = $match['slug'];
                            } else {
                                continue;
                            }
                        }
                        $urlData.= ' <url>
                          <loc>'.$baseUrl.'matches/'.$match['match_id'].'/'.$matchUrl.'</loc> 
                          <changefreq>daily</changefreq> 
                          <lastmod>'.date('Y-m-d').'</lastmod>
                          <priority>0.5</priority> 
                        </url>';
                    }
                }
                break;
            case 'trainers':
                $games = $this->entityManager->getRepository(Game::class)
                    ->findAll();
                foreach($games as $game){
                    $users = $this->userService->getTrainers(['search' => null, 'workout' => 'all', 'isExpensive' => false], $game,0);
                    $trainers = $this->userService->teachersDecorator($users, $game->getCode());
                    foreach($trainers as $trainer){
                        $trainerUrl = $this->sanitize($game->getCode()).'/'.$this->sanitize($trainer['slug']);
                        $urlData.= ' <url>
                          <loc>'.$baseUrl.'obucheniye/'.$trainer['id'].'/'.$trainerUrl.'</loc> 
                          <changefreq>daily</changefreq> 
                          <lastmod>'.date('Y-m-d').'</lastmod>
                          <priority>0.5</priority> 
                        </url>';
                    }
                }
                break;
            case 'digest':
                $events = $this->eventService->getAllEvents();
                $events = $this->eventService->eventsDecorator($events);
                foreach($events as $event){
                    try{
                        $name = $this->sanitize($event['name']);
                        $location =  $this->sanitize($event['location']);
                        $game = $this->sanitize($event['game']['name']);
                        $start_date = $this->sanitize($event['startedAtRu']);
                        $end_date = $this->sanitize($event['endedAtRu']);
                        $eventUrl =  $name.'_'.$location.'_'.$game.'_'.$start_date.'-'.$end_date;
                    } catch (\Exception $e) {
                        if(isset($event['slug']) && !empty($event['slug'])){
                            $eventUrl = $event['slug'];
                        } else {
                            continue;
                        }
                    }
                    $urlData.= ' <url>
                          <loc>'.$baseUrl.'event/'.$event['id'].'/'.$eventUrl.'</loc> 
                          <changefreq>daily</changefreq> 
                          <lastmod>'.date('Y-m-d').'</lastmod>
                          <priority>0.5</priority> 
                        </url>';
                }

                break;
        }

        return $urlData;
    }











    public function utf8_uri_encode( $utf8_string, $length = 0 ) {
        $unicode = '';
        $values = array();
        $num_octets = 1;
        $unicode_length = 0;

        $string_length = strlen( $utf8_string );
        for ($i = 0; $i < $string_length; $i++ ) {

            $value = ord( $utf8_string[ $i ] );

            if ( $value < 128 ) {
                if ( $length && ( $unicode_length >= $length ) )
                    break;
                $unicode .= chr($value);
                $unicode_length++;
            } else {
                if ( count( $values ) == 0 ) $num_octets = ( $value < 224 ) ? 2 : 3;

                $values[] = $value;

                if ( $length && ( $unicode_length + ($num_octets * 3) ) > $length )
                    break;
                if ( count( $values ) == $num_octets ) {
                    if ($num_octets == 3) {
                        $unicode .= '%' . dechex($values[0]) . '%' . dechex($values[1]) . '%' . dechex($values[2]);
                        $unicode_length += 9;
                    } else {
                        $unicode .= '%' . dechex($values[0]) . '%' . dechex($values[1]);
                        $unicode_length += 6;
                    }

                    $values = array();
                    $num_octets = 1;
                }
            }
        }

        return $unicode;
    }


    public function seems_utf8($str) {
        $length = strlen($str);
        for ($i=0; $i < $length; $i++) {
            $c = ord($str[$i]);
            if ($c < 0x80) $n = 0; # 0bbbbbbb
            elseif (($c & 0xE0) == 0xC0) $n=1; # 110bbbbb
            elseif (($c & 0xF0) == 0xE0) $n=2; # 1110bbbb
            elseif (($c & 0xF8) == 0xF0) $n=3; # 11110bbb
            elseif (($c & 0xFC) == 0xF8) $n=4; # 111110bb
            elseif (($c & 0xFE) == 0xFC) $n=5; # 1111110b
            else return false; # Does not match any model
            for ($j=0; $j<$n; $j++) { # n bytes matching 10bbbbbb follow ?
                if ((++$i == $length) || ((ord($str[$i]) & 0xC0) != 0x80))
                    return false;
            }
        }
        return true;
    }


    public function sanitize($title) {
        $title = transliterator_transliterate('Any-Latin; Latin-ASCII; [\u0100-\u7fff] remove', $title);
        $title = strip_tags($title);
        // Preserve escaped octets.
        $title = preg_replace('|%([a-fA-F0-9][a-fA-F0-9])|', '---$1---', $title);
        // Remove percent signs that are not part of an octet.
        $title = str_replace('%', '', $title);
        // Restore octets.
        $title = preg_replace('|---([a-fA-F0-9][a-fA-F0-9])---|', '%$1', $title);

        if ($this->seems_utf8($title)) {
            if (function_exists('mb_strtolower')) {
                $title = mb_strtolower($title, 'UTF-8');
            }
            $title = $this->utf8_uri_encode($title, 200);
        }

        $title = strtolower($title);
        $title = preg_replace('/&.+?;/', '', $title); // kill entities
        $title = str_replace('.', '-', $title);
        $title = preg_replace('/[^%a-z0-9 _-]/', '', $title);
        $title = preg_replace('/\s+/', '-', $title);
        $title = preg_replace('|-+|', '-', $title);
        $title = trim($title, '-');

        return $title;
    }
}

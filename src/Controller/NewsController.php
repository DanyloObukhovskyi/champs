<?php

namespace App\Controller;

use App\Entity\Match;
use App\Entity\News;
use App\Service\NewsService;
use App\Traits\EntityManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class NewsController extends AbstractController
{
    use EntityManager;

    public $newsService;

    public function __construct()
    {
        $this->newsService = new NewsService($this->getEntityManager());
    }

    /**
     * @Route("/ru/news/", name="news_index")
     */
    public function index()
    {
        $newsEntities = $this->newsService->getHotNews();

        return $this->render('templates/news.html.twig', [
            'items' => $newsEntities,
            'router' => 'news'
        ]);
    }

    /**
     * @Route("/ru/ajax/news/{offset}", name="news.ajax", defaults={"offset" = null})
     */
    public function getNews(Request $request, $offset = 0)
    {
        $request = json_decode($request->getContent(), false);
        if (isset($request->tag)){
            $newsEntities = $this->newsService->getByTag($request->tag, 10, $offset);
        } else {
            $newsEntities = $this->newsService
                ->getRepository()
                ->findBy([] ,['id'=>'DESC'], 10, $offset);
        }
        $news = [];
        foreach ($newsEntities as $newsEntity)
        {
            $news[] = $this->newsService->decorator($newsEntity);
        }
        return $this->json($news);
    }
    /**
     * Matches /ru/news/*
     *
     * @Route("/ru/news/{id}", name="news_view_single")
     */
    public function view($id)
    {
        $entityManager = $this->getDoctrine()->getManager();
        $newsUrl = substr(stristr($id, '-'), 1);
        /** @var News $news */
        $news = $this->getDoctrine()
            ->getRepository(News::class)
            ->findOneBy([
                'url' => $newsUrl
            ]);

        if (!$news) {
            throw $this->createNotFoundException(
                'No product found for id '.$id
            );
        }
        $this->newsService->incrementingViews($news);

        $news->link = '';
        $date = $news->unix = $news->getCreatedAt()->format(("d F Y H:i"));
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
        $news->unixdate =
        $news->link_name = '';

        $tournaments = [];

        $matches = $entityManager->getRepository(Match::class)->findMatchesByDay(new \DateTime());

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
                    "startedAt" => $match->getStartAt()->getTimestamp(),
                    "logo" => "",
                    "teamA" => [
                        "title" => str_replace("'", "", $match->getTeam1()->getName()),
                        "logo" => "/uploads/images/" . $match->getTeam1()->getLogo(),
                        "score" => $match->getScore1()
                    ],
                    "teamB" => [
                        "title" => str_replace("'", "", $match->getTeam2()->getName()),
                        "logo" => "/uploads/images/" . $match->getTeam2()->getLogo(),
                        "score" => $match->getScore2()
                    ],
                    "event" => [
                        "name" => $match->getEvent() === null ? null : $match->getEvent()->getName(),
                        "startedAt" => $match->getEvent() === null ? null : $match->getEvent()->getStartedAt(),
                        "endedAt" => $match->getEvent() === null ? null : $match->getEvent()->getEndedAt(),
                        "image" => $match->getEvent() === null ? null : $match->getEvent()->getImage(),
                    ],
                ];
        }

        return $this->render('templates/news.view.html.twig', [
            'item' => $news,
            'date' => $date,
            'tournaments' => $tournaments,
            'router' => 'news',
            'matches' => $items
        ]);
    }

    /**
     * Lessons /ru/news/*
     *
     * @Route("/ru/last/news", name="last_news_info")
     */
    public function getLastNews()
    {
        $entityManager = $this->getDoctrine()->getManager();
        $repository = $entityManager->getRepository(News::class);
        $items = $repository->findBy(array(),array('id'=>'DESC'),10,0);

        return $this->json($items);
    }

    /**
     * Lessons /ru/news/*
     *
     * @Route("/ru/news/search/{form}", name="search_news_info")
     */
    public function getSearchedNews($form)
    {
        $form = json_decode($form);
        $type = $form->type;
        $dateFrom = new \DateTime($form->datefrom);
        $dateTo = new \DateTime($form->dateto);
        $search = $form->search;

//        return $this->json($form);
        $items = $this->getDoctrine()
            ->getRepository(News::class)
            ->findBySearchForm($type, $dateFrom, $dateTo, $search);

        return $this->json($items);
    }
}

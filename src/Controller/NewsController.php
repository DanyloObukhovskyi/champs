<?php

namespace App\Controller;

use App\Entity\Match;
use App\Entity\News;
use App\Service\MatchService;
use App\Traits\EntityManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class NewsController extends AbstractController
{
    use EntityManager;

    /**
     * @var MatchService
     */
    protected $matchService;

    /**
     * NewsController constructor.
     */
    public function __construct()
    {
        $this->matchService = new MatchService($this->getEntityManager());
    }

    /**
     * @Route("/ru/news", name="news_index")
     */
    public function index()
    {
        $entityManager = $this->getDoctrine()->getManager();
        $repository = $entityManager->getRepository(News::class);

        $items = $repository->findBy(array(),array('id'=>'DESC'),10,0);

        return $this->render('templates/news.html.twig', ['items' => $items, 'counts' => ceil(count($items) / 5) - 1, 'router' => 'news']);
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

        $matches = $entityManager->getRepository(Match::class)->findMatchesByDate(new \DateTime());
        $matches = $this->matchService->matchesDecorator($matches);

        return $this->render('templates/news.view.html.twig', [
            'item' => $news,
            'date' => $date,
            'tournaments' => $tournaments,
            'router' => 'news',
            'matches' => $matches
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

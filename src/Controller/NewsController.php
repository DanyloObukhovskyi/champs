<?php

namespace App\Controller;

use App\Entity\Match;
use App\Entity\News;
use App\Service\NewsService;
use App\Service\MatchService;
use App\Traits\EntityManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class NewsController extends AbstractController
{
    use EntityManager;

    protected $newsService;

    /**
     * @var MatchService
     */
    protected $matchService;

    /**
     * NewsController constructor.
     */
    public function __construct()
    {
        $this->newsService = new NewsService($this->getEntityManager());
        $this->matchService = new MatchService($this->getEntityManager());
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

        $newsEntities = $this->newsService->getByFilters($request, 10, $offset);

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
        $newsId = explode('-', $id)[0];

        /** @var News $news */
        $news = $this->getDoctrine()
            ->getRepository(News::class)
            ->findOneBy([
                'id' => $newsId
            ]);

        if (!$news) {
            return $this->redirectToRoute('news_index');
        }
        $this->newsService->incrementingViews($news);

        $news->link = '';
        $date = $news->unix = $news->getCreatedAt()
            ->format(("d F Y H:i"));

        $this->newsService->replaceMonth($date);
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

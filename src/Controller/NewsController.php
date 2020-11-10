<?php

namespace App\Controller;

use App\Entity\Match;
use App\Entity\News;
use App\Entity\NewsTag;
use App\Service\News\NewsCommentService;
use App\Service\News\NewsService;
use App\Service\MatchService;
use App\Service\News\NewsTagService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class NewsController extends AbstractController
{
    /**
     * @var EntityManagerInterface
     */
    protected $entityManager;

    /**
     * @var NewsService
     */
    protected $newsService;

    /**
     * @var MatchService
     */
    protected $matchService;

    /**
     * @var NewsCommentService
     */
    protected $newsCommentService;

    /**
     * @var NewsTagService
     */
    protected $newsTagService;

    /**
     * NewsController constructor.
     * @param EntityManagerInterface $entityManager
     */
    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;

        $this->newsService = new NewsService($entityManager);
        $this->matchService = new MatchService($entityManager);

        $this->newsCommentService = new NewsCommentService($entityManager);
        $this->newsTagService = new NewsTagService($entityManager);
    }

    /**
     * @Route("/ru/news/", name="news_index")
     */
    public function index(Request $request)
    {
        $popularTags = $this->newsTagService->popularTags(5);

        return $this->render('templates/news.html.twig', [
            'router' => 'news',
            'tag' => $request->get('tag', null),
            'popularTags' => $popularTags
        ]);
    }

    /**
     * @Route("/ru/hot/news/", name="get.hot.news")
     */
    public function getHotNews(Request $request)
    {
        $filters = json_decode($request->getContent(), false);

        $newsCollect = $this->newsService->getHotNews($filters);
        $hotNews = [];

        /** @var News $newsEntity */
        foreach ($newsCollect as $newsEntity){
            $hotNews[] = $this->newsService->decorator($newsEntity);
        }
        return $this->json($hotNews);
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
     * News /ru/news/*
     *
     * @Route("/ru/news/{id}", name="news_view_single")
     */
    public function view($id)
    {
        $newsId = explode('-', $id)[0];

        /** @var News $news */
        $news = $this->entityManager
            ->getRepository(News::class)
            ->find($newsId);

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

        $matches = $this->entityManager
            ->getRepository(Match::class)
            ->findMatchesByDate(new \DateTime());

        $matches = $this->matchService->matchesDecorator($matches);

        return $this->render('templates/news.view.html.twig', [
            'newsId' => $newsId,
            'item' => $news,
            'date' => $date,
            'tournaments' => $tournaments,
            'router' => 'news',
            'matches' => $matches
        ]);
    }

    /**
     * News /ru/news/*
     *
     * @Route("/ru/ajax/news/single/{id}")
     */
    public function getNewsAjax($id)
    {
        /** @var News $news */
        $news = $this->entityManager
            ->getRepository(News::class)
            ->find($id);

        $news = $this->newsService->decorator($news);

        return $this->json($news);
    }

    /**
     * News /ru/news/*
     *
     * @Route("/ru/last/news", name="last_news_info")
     */
    public function getLastNews()
    {
        $items = $this->entityManager
            ->getRepository(News::class)
            ->findBy(array(),array('id'=>'DESC'),10,0);

        return $this->json($items);
    }

    /**
     * News /ru/news/*
     *
     * @Route("/ru/news/add/comment", name="news.add.comment")
     */
    public function addComment(Request $request)
    {
        $request = json_decode($request->getContent(), false);
        $news = $this->newsService->getRepository()->find($request->id);

        if (!empty($this->getUser()) and isset($news))
        {
            $this->newsCommentService->create(
                $this->getUser(),
                $news,
                $request->comment
            );

            return $this->json('ok');
        }
        return $this->json('unauthorized', 401);
    }

    /**
     * News /ru/news/*
     *
     * @Route("/ru/news/{newsId}/comments", name="news.get.comments")
     */
    public function getComments(int $newsId)
    {
        /** @var News $news */
        $news = $this->newsService
            ->getRepository()
            ->find($newsId);

        $newsComments = $this->newsCommentService->getRepository()->findBy([
            'news' => $news
        ]);
        $newsComments = $this->newsCommentService->decorateComments($newsComments);
        return $this->json($newsComments);
    }

    public function makeTag(string $title)
    {
        $code = dechex(crc32($title));
        $code = substr($code, 0, 6);

        return [
            'title' => $title,
            'color' => $code
        ];
    }

    /**
     * News /ru/news/*
     *
     * @Route("/ru/news/popular/tags/{offset}", name="news.popular.tags", defaults={"offset" = 5})
     */
    public function getPopularTags($offset)
    {
        $tags = $this->entityManager->getRepository(NewsTag::class)
            ->popularTags();

        return $this->json($tags);
    }
}

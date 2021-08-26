<?php

namespace App\Controller;

use App\Entity\Blogs;
use App\Entity\Game;
use App\Entity\News;
use App\Entity\NewsType;
use App\Entity\NewsBookmark;
use App\Entity\NewsCommentLike;
use App\Entity\NewsLike;
use App\Entity\NewsTag;
use App\Service\Blog\BlogService;
use App\Service\News\NewsCommentLikeService;
use App\Service\News\NewsCommentService;
use App\Service\News\NewsLikeService;
use App\Service\News\NewsService;
use App\Service\Match\MatchService;
use App\Service\News\NewsTagService;
use App\Service\Seo\SeoService;
use Doctrine\ORM\EntityManagerInterface;
use http\Env\Url;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use App\Rss\RssTape;

/**
 * @Route("/{_locale}", requirements={"locale": "ru"})
 */
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
     * @var BlogService
     */
    protected $blogsService;

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
     * @var NewsLikeService
     */
    protected $newsLikeService;

    /**
     * @var NewsCommentLikeService
     */
    protected $newsCommentLikeService;

    /**
     * @var SeoService
     */
    protected $seoService;

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

        $this->newsLikeService = new NewsLikeService($entityManager);
        $this->newsCommentLikeService = new NewsCommentLikeService($entityManager);

        $this->blogsService = new BlogService($entityManager);

        $this->seoService = new SeoService($entityManager);
    }

    /**
     * @Route("/novosti", name="news_index")
     */
    public function index(Request $request)
    {
        $popularTags = $this->newsTagService->popularTags(19);

        $seoSettings = $this->seoService->getSeo('news_index');
        $newsEntities = $this->newsService->getMainNews();

        $news = [];
        foreach ($newsEntities as $newsEntity) {
            $news[] = $this->newsService->decoratorForAllNews($newsEntity);
        }
        $link = $request->getSchemeAndHttpHost().$request->getBasePath();

        return $this->render('templates/news.html.twig', [
            'link' => $link,
            'news' => $news,
            'heading_type' => $seoSettings['heading_type'],
            'heading' => $seoSettings['heading'],
            'title' => $seoSettings['title'],
            'description' => strip_tags($seoSettings['description']),
            'keywords' => $seoSettings['keywords'],
            'meta_tags' => $seoSettings['meta'],
            'router' => 'novosti',
            'tag' => $request->get('tag', null),
            'popularTags' => $popularTags
        ]);
    }

    /**
     * @Route("/novosti/tags/{from}")
     */
    public function getPopularNextTags(Request $request, $from = 0) {
        $request = json_decode($request->getContent(), false);
        $popularNextTags = $this->newsTagService->popularNextTags($from, 20);
//        dump($from);
//        dump($popularNextTags);
        return $this->json($popularNextTags);
    }

    /**
     * @Route("/hot/news/{offset}")
     */
    public function getHotNews(Request $request, $offset = 0)
    {
        $filters = json_decode($request->getContent(), false);

        $newsCollect = $this->newsService->getHotNews($filters, 0 , $offset);
        $hotNews = [];

        /** @var News $newsEntity */
        foreach ($newsCollect as $newsEntity) {
            $hotNews[] = $this->newsService->decoratorForHotNews($newsEntity);
        }
        return $this->json($hotNews);
    }

    /**
     * @Route("/ajax/news/{offset}", name="news.ajax", defaults={"offset" = 0})
     */
    public function getNews(Request $request, $offset = 0)
    {
        $request = json_decode($request->getContent(), false);

        $formats = [];
        if(!empty($request->formats)){
            $allFormats = $this->entityManager
                ->getRepository(NewsType::class)
                ->findBy(['title' => $request->formats]);
            if(!empty($allFormats))
            {
                foreach($allFormats as $format){
                    $formats[] = $format->getId();
                }
            }
        }

        $newsEntities = $this->newsService->getByFilters($request, 10, $offset, $formats);

        $news = [];
        foreach ($newsEntities as $newsEntity) {
            $news[] = $this->newsService->decoratorForAllNews($newsEntity);
        }
        return $this->json($news);
    }

    /**
     * @Route("/ajax/main_news/{offset}", name="mainNews.ajax", defaults={"offset" = 0})
     */
    public function getMainNews(Request $request, $offset = 0)
    {
        $topNewsEntities = $this->newsService->getTopNews();
        $topsNewsIds = [];
        foreach ($topNewsEntities as $topNewsEntity) {
            $top = $this->newsService->decorator($topNewsEntity);
            $topsNewsIds[] = $top['id'];
        }

        if(!empty($topsNewsIds)){
            $allTopNewsEntities = $this->entityManager->getRepository(News::class)
                ->getByNotTopIds($topsNewsIds);

            /** @var News $newsTop */
            foreach($allTopNewsEntities as $newsTop){
                $newsTop->setIsTop(false);
            }
            $this->entityManager->flush();
        }

        $request = json_decode($request->getContent(), false);

        $formats = [];
        if(!empty($request->formats)){
            $allFormats = $this->entityManager
                ->getRepository(NewsType::class)
                ->findBy(['title' => $request->formats]);
            if(!empty($allFormats))
            {
                foreach($allFormats as $format){
                    $formats[] = $format->getId();
                }
            }
        }
        $request->is_main = true;
        $newsEntities = $this->newsService->getByFilters($request, 10, $offset, $formats);

        $news = [];
        foreach ($newsEntities as $newsEntity) {
            $news[] = $this->newsService->decoratorForMainNews($newsEntity);
        }
        return $this->json($news);
    }

    /**
     * @Route("/novosti/{id}/{format}/{game}/{title}", name="news_view_single")
     */
    public function view($id, $format, $game, $title, Request $request)
    {
        /** @var News $news */
        $news = $this->entityManager
            ->getRepository(News::class)
            ->find($id);

        if (!$news) {
            return $this->redirectToRoute('news_index');
        }
        $this->newsService->incrementingViews($news);

        $description = strip_tags($news->getText());

        $news->category = $this->entityManager
            ->getRepository(NewsType::class)
            ->findOneBy(['id' => $news->getType()])->getTitle();

        $link = $request->getSchemeAndHttpHost().$request->getBasePath();

        return $this->render('templates/news.view.html.twig', [
            'date' => $news->getDate()->format('Y-m-d H:i:s'),
            'link' => $link,
            'description' => $description,
            'newsId' => $id,
            'news' => $news,
            'router' => 'news',
        ]);
    }

    /**
     * @Route("/novosti/{id}/{slug}", name="news_view_single_slug")
     */
    public function viewSlug($id, $slug, Request $request)
    {
        /** @var News $news */
        $news = $this->entityManager
            ->getRepository(News::class)
            ->find($id);

        if (!$news) {
            return $this->redirectToRoute('news_index');
        }
        $this->newsService->incrementingViews($news);

        $description = strip_tags($news->getText());

        $news->category = $this->entityManager
            ->getRepository(NewsType::class)
            ->findOneBy(['id' => $news->getType()])->getTitle();

        $link = $request->getSchemeAndHttpHost().$request->getBasePath();

        return $this->render('templates/news.view.html.twig', [
            'date' => $news->getDate()->format('Y-m-d H:i:s'),
            'link' => $link,
            'description' => $description,
            'newsId' => $id,
            'news' => $news,
            'router' => 'news',
        ]);
    }

    /**
     * @Route("/ajax/news/single/{id}")
     */
    public function getNewsAjax($id)
    {
        $user = $this->getUser();

        /** @var News $news */
        $newsEntity = $this->entityManager
            ->getRepository(News::class)
            ->find($id);

        $news = $this->newsService->decorator($newsEntity);

        $likes = $this->newsLikeService->getLikes($newsEntity, 3);
        $likes = $this->newsLikeService->decorateAll($likes);

        $userLike = null;

        if (isset($user)) {
            $like = $this->newsLikeService->userLike($newsEntity, $this->getUser());
            if (isset($like)) {
                $userLike = $this->newsLikeService->decorator($like);
            }
        }
        $likesCount = $this->newsLikeService->getLikesCount($newsEntity);

        $newsComments = $this->newsCommentService->getRepository()->findBy([
            'news' => $newsEntity,
            'parent' => null
        ]);

        $comments = $this->newsCommentService->recurciveComments(
            $newsComments,
            $_ENV['MAX_COMMENTS_ANSWERS'],
            $this->getUser()
        );

        return $this->json([
            'news' => $news,
            'likes' => $likes,
            'userLike' => $userLike,
            'likesCount' => $likesCount,
            'comments' => $comments
        ]);
    }

    /**
     * @Route("/last/news", name="last_news_info")
     */
    public function getLastNews()
    {
        $items = $this->entityManager
            ->getRepository(News::class)
            ->findBy(array(), array('id' => 'DESC'), 10, 0);

        return $this->json($items);
    }

    /**
     * @Route("/news/add/comment")
     */
    public function addComment(Request $request)
    {
        $request = json_decode($request->getContent(), false);
        $news = $this->newsService->getRepository()->find($request->id);

        $parentComment = null;

        if (isset($request->commentId)) {
            $parentComment = $this->newsCommentService->getRepository()
                ->find($request->commentId);
        }

        if (!empty($this->getUser()) and isset($news)) {
            $this->newsCommentService->create(
                $this->getUser(),
                $news,
                $parentComment,
                $request->comment
            );

            return $this->json('ok');
        }
        return $this->json('unauthorized', 401);
    }

    /**
     * @Route("/news/{newsId}/comments")
     */
    public function getComments(int $newsId)
    {
        /** @var News $news */
        $news = $this->newsService
            ->getRepository()
            ->find($newsId);

        $newsComments = $this->newsCommentService->getRepository()->findBy([
            'news' => $news,
            'parent' => null
        ]);
        $newsComments = $this->newsCommentService->recurciveComments($newsComments);

        return $this->json([
            'comments' => $newsComments,
            'commentsCount' => count($news->getComments())
        ]);
    }

    /**
     * @param string $title
     * @return array
     */
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
     * @Route("/news/popular/tags/{offset}", defaults={"offset" = 5})
     */
    public function getPopularTags($offset)
    {
        $tags = $this->entityManager->getRepository(NewsTag::class)
            ->popularTags();

        return $this->json($tags);
    }

    /**
     * @Route("/ajax/news/by/game/{game}")
     */
    public function getNewsByGame($game)
    {
        $gameEntity = $this->entityManager
            ->getRepository(Game::class)
            ->findOneBy([
                'code' => $game
            ]);
        
        $news = $this->newsService->getByGame($gameEntity);

        $newsArray = [];
        foreach ($news as $new) {
            $newsArray[] = $this->newsService->decorator($new);
        }
        return $this->json($newsArray);
    }

    /**
     * @Route("/like/news/{newsId}")
     */
    public function setLike(Request $request, $newsId)
    {
        $request = json_decode($request->getContent(), false);

        /** @var News $news */
        $news = $this->newsService
            ->getRepository()
            ->find($newsId);

        $user = $this->getUser();

        if (isset($request->type) and isset($user)
            and in_array($request->type, NewsLike::TYPES, true)) {

            $userLike = $this->entityManager->getRepository(NewsLike::class)
                ->findOneBy([
                    'user' => $user,
                    'news' => $news
                ]);

            if (empty($userLike)) {
                $userLike = new NewsLike();
                $userLike->setUser($user);
                $userLike->setNews($news);
            }
            $userLike->setType($request->type);

            $this->entityManager->persist($userLike);
            $this->entityManager->flush();
        }
        $likesCount = $this->newsService->getLikesCount($news);

        $userLike = null;

        if (isset($user)) {
            $like = $this->newsLikeService->userLike($news, $this->getUser());
            if (isset($like)) {
                $userLike = $this->newsLikeService->decorator($like);
            }
        }
        return $this->json([
            'likesCount' => $likesCount,
            'userLike' => $userLike
        ]);
    }

    /**
     * @Route("/like/news/comment/{commentId}")
     */
    public function setLikeComment(Request $request, $commentId)
    {
        $request = json_decode($request->getContent(), false);

        $newsComment = $this->newsCommentService
            ->getRepository()
            ->find($commentId);

        $newsCommentLike = null;
        if (isset($newsComment) and !empty($this->getUser())) {
            $newsCommentLike = $this->entityManager->getRepository(NewsCommentLike::class)
                ->findOneBy([
                    'comment' => $newsComment,
                    'user' => $this->getUser()
                ]);

            if (empty($newsCommentLike)) {
                $newsCommentLike = new NewsCommentLike();
                $newsCommentLike->setUser($this->getUser());
                $newsCommentLike->setComment($newsComment);
            }
            $newsCommentLike->setType($request->type);

            $this->entityManager->persist($newsCommentLike);
            $this->entityManager->flush();
        }
        $likesCount = $this->newsCommentLikeService->getLikesCount($newsComment);

        $userLike = null;

        if (!empty($this->getUser())) {
            $like = $this->newsCommentLikeService->userLike($newsComment, $this->getUser());
            if (isset($like)) {
                $userLike = $this->newsCommentLikeService->decorator($like);
            }
        }
        return $this->json([
            'likesCount' => $likesCount,
            'userLike' => $userLike
        ]);
    }

    /**
     * @Route("/set/bookmark/")
     */
    public function setBookmark(Request $request)
    {
        $request = json_decode($request->getContent(), false);

        $news = $this->entityManager
            ->getRepository(News::class)
            ->find($request->newsId);

        if (!empty($this->getUser())) {
            $newsBookmark = $this->entityManager->getRepository(NewsBookmark::class)
                ->findOneBy([
                    'user' => $this->getUser(),
                    'news' => $news
                ]);
            if (empty($newsBookmark)) {
                $newsBookmark = new NewsBookmark();
                $newsBookmark->setUser($this->getUser());
                $newsBookmark->setNews($news);
                $this->entityManager->persist($newsBookmark);
            } else {
                $this->entityManager->remove($newsBookmark);
            }
            $this->entityManager->flush();

            return $this->json('ok', 200);
        }
        return $this->json('error', 422);
    }


    /**
     * @Route("/news/user/bookmark")
     */
    public function getUserBookmarkNews()
    {
        $userBookmarks = $this->entityManager
            ->getRepository(NewsBookmark::class)
            ->findBy([
                'user' => $this->getUser()
            ]);

        $news = [];

        /** @var NewsBookmark $bookmark */
        foreach ($userBookmarks as $bookmark) {
            $news[] = $this->newsService->decorator($bookmark->getNews());
        }
        return $this->json($news);
    }

    /**
     * @Route("/top/news/five")
     */
    public function getTopNews()
    {
        $news = [];
        $newsEntities = $this->newsService->getTopNews();

        foreach ($newsEntities as $newsEntity) {
            $news[] = $this->newsService->decoratorForAllNews($newsEntity);
        }
        return $this->json($news);
    }

    /**
     * @Route("/news/formats")
     */
    public function getFormats()
    {
        $formats = [];
        $allFormats = $this->entityManager
            ->getRepository(NewsType::class)
            ->findAll();
        if(!empty($allFormats)){
            foreach($allFormats as $format){
                $formats[] = $this->newsService->decoratorForNewsTypes($format);
            }
        }
        return $this->json(['formats' => $formats]);
    }

    /**
     * @Route("/news/rss")
     */
    public function getRss(Request $request)
    {
        $rssTape = new RssTape();

        $link = $request->getSchemeAndHttpHost().$request->getBasePath();

        $rssTape
            ->setTitle('Champs.pro - киберспорт и игры, новости, турниры, расписание матчей, рейтинги команд и игроков, обучение')
            ->setDescription('Самые актуальные новости, интервью и обзоры из мира киберспорта и онлайн игр - Dota 2, CS:GO, Valorant, PUBG, Fortnite и других игр. Турниры, расписание матчей, рейтинги команд и игроков. Обучение от профессионалов.')
            ->setLink($link.'/')
            ->setLanguage(RssTape::LANGUAGE_RU)
            ->setLastBuildDate(date('Y-m-d'));

        $request = [
            'tags' => [],
            'titles' => [],
            'texts' => []
        ];

        $newsCollect = $this->newsService->getByFilters((object)$request, 0 , 0, []);
        $records = [];

        /** @var News $newsEntity */
        foreach ($newsCollect as $newsEntity) {
            $records[] = $this->newsService->decoratorForRssNews($newsEntity, $link. '/ru/');
        }

        $blogsCollect = $this->blogsService->getByFilters((object)$request, 0 , 0, []);

        /** @var Blogs $blogsEntity */
        foreach ($blogsCollect as $blogsEntity) {
            $records[] = $this->blogsService->decoratorForRssNews($blogsEntity, $link. '/ru/');
        }

        foreach ($records as $record) {
            $item = [
                'title' => $record['title'],
                'link' => $record['link'],
                'description' => $record['description'],
                'author' => $record['author'],
                'category' => $record['category']
            ];
            $rssTape->addItem($item);
        }

        /**
         * Add Content-Type, for xml document.
         */
        header("Content-Type: text/xml");

        echo $rssTape->output();

        exit;
    }
}

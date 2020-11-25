<?php

namespace App\Controller;

use App\Entity\News;
use App\Entity\NewsCommentLike;
use App\Entity\NewsLike;
use App\Entity\NewsTag;
use App\Service\News\NewsCommentLikeService;
use App\Service\News\NewsCommentService;
use App\Service\News\NewsLikeService;
use App\Service\News\NewsService;
use App\Service\MatchService;
use App\Service\News\NewsTagService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

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
    }

    /**
     * @Route("/news", name="news_index")
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
     * @Route("/hot/news")
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
     * @Route("/ajax/news/{offset}", name="news.ajax", defaults={"offset" = null})
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
     * @Route("/news/{id}", name="news_view_single")
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

        return $this->render('templates/news.view.html.twig', [
            'newsId' => $newsId,
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
            ->findBy(array(),array('id'=>'DESC'),10,0);

        return $this->json($items);
    }

    /**
     * @Route("/news/add/comment", name="news.add.comment")
     */
    public function addComment(Request $request)
    {
        $request = json_decode($request->getContent(), false);
        $news = $this->newsService->getRepository()->find($request->id);

        $parentComment = null;

        if (isset($request->commentId)){
            $parentComment = $this->newsCommentService->getRepository()
                ->find($request->commentId);
        }

        if (!empty($this->getUser()) and isset($news))
        {
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
     * @Route("/news/{newsId}/comments", name="news.get.comments")
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
     * @Route("/news/popular/tags/{offset}", name="news.popular.tags", defaults={"offset" = 5})
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
        $news = $this->newsService->getByGame($game);

        $newsArray = [];
        foreach ($news as $new){
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

            if (empty($userLike)){
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
        if (isset($newsComment) and !empty($this->getUser())){
            $newsCommentLike = $this->entityManager->getRepository(NewsCommentLike::class)
                ->findOneBy([
                    'comment' => $newsComment,
                    'user' => $this->getUser()
                ]);

            if (empty($newsCommentLike)){
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
}

<?php


namespace App\Service\News;


use App\Entity\News;
use App\Entity\NewsComment;
use App\Entity\NewsType;
use App\Entity\User;
use App\Repository\NewsCommentRepository;
use App\Service\EntityService;
use App\Service\ImageService;
use App\Traits\CommentRecursiveDecorator;
use Doctrine\ORM\EntityManagerInterface;

/**
 * Class NewsCommentService
 * @package App\Service\News
 */
class NewsCommentService extends EntityService
{
    use CommentRecursiveDecorator;

    protected $entity = NewsComment::class;

    /**
     * @var NewsCommentRepository
     */
    protected $repository;

    /**
     * @var NewsCommentLikeService
     */
    protected $newsCommentLikeService;

    /**
     * NewsCommentService constructor.
     * @param EntityManagerInterface $entityManager
     */
    public function __construct(EntityManagerInterface $entityManager)
    {
        parent::__construct($entityManager);

        $this->newsCommentLikeService = new NewsCommentLikeService($entityManager);
    }

    /**
     * @param User $user
     * @param News $news
     * @param NewsComment|null $parentComment
     * @param $comment
     * @return mixed
     */
    public function create(User $user, News $news, ?NewsComment $parentComment, $comment)
    {
        /** @var NewsComment $newsComment */
        $newsComment = new $this->entity;
        $newsComment->setNews($news);
        $newsComment->setUser($user);
        $newsComment->setParent($parentComment);
        $newsComment->setComment($comment);

        return $this->save($newsComment);
    }

    /**
     * @return mixed
     */
    public function getRepository()
    {
        return $this->repository;
    }

    /**
     * @param NewsComment $comment
     * @param null $authUser
     * @return array
     * @throws \Doctrine\ORM\NoResultException
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function decorator(NewsComment $comment, $user = null)
    {
        $userLike = null;
        if (isset($user)) {
            $userLike = $this->newsCommentLikeService
                ->getRepository()
                ->findOneBy([
                    'comment' => $comment,
                    'user' => $user
                ]);

            if (isset($userLike)) {
                $userLike = $this->newsCommentLikeService->decorator($userLike);
            }
        }

        $newsTypeId = $comment->getNews()->getType();
        $type = [];
        if(!empty($newsTypeId)){
            $type = $this->entityManager
                ->getRepository(NewsType::class)
                ->findOneBy(['id' => $newsTypeId]);
        }

        return [
            'id' => $comment->getId(),
            'newsId' => $comment->getNews()->getId(),
            'user' => [
                'id' => $comment->getUser()->getId(),
                'nickname' => $comment->getUser()->getNickname(),
                'surname' => $comment->getUser()->getFamily(),
                'name' => $comment->getUser()->getName(),
                'photo' => $comment->getUser()->getPhoto(),
            ],
            'news' => [
                'id' => $comment->getNews()->getId(),
                'title' => $comment->getNews()->getTitle(),
                'type' => $type,
                'game' => !empty($comment->getNews()->getGame()) ? $comment->getNews()->getGame() : null,
                'date_ru_with_year_for_url' => $comment->getNews()->getDate()->format('Y') === date('Y') ? $comment->getNews()->getDate()->format('d m') : $comment->getNews()->getDate()->format('d m Y')
            ],
            'comment' => $comment->getComment(),
            'createdAt' => NewsService::replaceMonth($comment->getCreatedAt()->format('d F H:i')),
            'date' => $comment->getCreatedAt()->format('d F H:i'),
            'timestamp' => $comment->getCreatedAt()->getTimestamp(),
            'likesCount' => $this->newsCommentLikeService->getLikesCount($comment),
            'userLike' => $userLike,
            'type' => 'news'
        ];
    }

    /**
     * @param $comments
     * @return array
     * @throws \Doctrine\ORM\NoResultException
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function decorateAll($comments)
    {
        $newsComments = [];

        foreach ($comments as $comment) {
            $newsComments[] = $this->decorator($comment);
        }
        return $newsComments;
    }
}
<?php


namespace App\Service\News;


use App\Entity\News;
use App\Entity\NewsComment;
use App\Entity\User;
use App\Repository\NewsCommentRepository;
use App\Service\EntityService;
use App\Service\ImageService;
use Doctrine\ORM\EntityManagerInterface;

/**
 * Class NewsCommentService
 * @package App\Service\News
 */
class NewsCommentService extends EntityService
{
    protected $entity = NewsComment::class;

    /**
     * @var NewsCommentRepository
     */
    protected $repository;

    /**
     * @var ImageService
     */
    protected $imageService;

    /**
     * NewsCommentService constructor.
     * @param EntityManagerInterface $entityManager
     */
    public function __construct(EntityManagerInterface $entityManager)
    {
        parent::__construct($entityManager);

        $this->imageService = new ImageService();
    }

    /**
     * @param News $news
     * @param User $user
     * @param $comment
     * @return mixed
     */
    public function create(User $user, News $news, $comment)
    {
        /** @var NewsComment $newsComment */
        $newsComment = new $this->entity;
        $newsComment->setNews($news);
        $newsComment->setUser($user);
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
     * @param array $comments
     * @return array
     */
    public function decorateComments(array $comments)
    {
        $newsComments = [];
        /** @var NewsComment $comment */
        foreach ($comments as $comment){
            $this->imageService->setImage($comment->getUser()->getPhoto());

            $newsComments[] = [
                'newsId' => $comment->getNews()->getId(),
                'comment' => $comment->getComment(),
                'user' => [
                    'name' => $comment->getUser()->getName() ?? $comment->getUser()->getNickname(),
                    'photo' => $this->imageService->getImagePath(),
                ],
                'createdAt' => $comment->getCreatedAt()->format('Y.m.d H:i')
            ];
        }
        return $newsComments;
    }
}
<?php


namespace App\Service\Blog;


use App\Entity\BlogComment;
use App\Entity\Blogs;
use App\Entity\User;
use App\Repository\BlogCommentRepository;
use App\Service\EntityService;
use App\Service\ImageService;
use App\Service\News\BlogService;
use App\Traits\CommentRecursiveDecorator;
use Doctrine\ORM\EntityManagerInterface;

/**
 * Class NewsCommentService
 * @package App\Service\News
 */
class BlogsCommentService extends EntityService
{
    use CommentRecursiveDecorator;

    protected $entity = BlogComment::class;

    /**
     * @var BlogCommentRepository
     */
    protected $repository;

    /**
     * @var BlogsCommentLikeService
     */
    protected $blogsCommentLikeService;

    /**
     * NewsCommentService constructor.
     * @param EntityManagerInterface $entityManager
     */
    public function __construct(EntityManagerInterface $entityManager)
    {
        parent::__construct($entityManager);

        $this->blogsCommentLikeService = new BlogsCommentLikeService($entityManager);
    }

    /**
     * @param User $user
     * @param Blogs $blogs
     * @param BlogComment|null $parentComment
     * @param $comment
     * @return mixed
     */
    public function create(User $user, Blogs $blogs, ?BlogComment $parentComment, $comment)
    {
        /** @var BlogComment $blogComment */
        $blogComment = new $this->entity;
        $blogComment->setBlog($blogs);
        $blogComment->setUser($user);
        $blogComment->setParent($parentComment);
        $blogComment->setComment($comment);
        $blogComment->setCreatedAt(new \DateTime());

        return $this->save($blogComment);
    }

    /**
     * @return mixed
     */
    public function getRepository()
    {
        return $this->repository;
    }

    /**
     * @param BlogComment $comment
     * @param null $authUser
     * @return array
     * @throws \Doctrine\ORM\NoResultException
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function decorator(BlogComment $comment, $user = null)
    {
        $userLike = null;
        if (isset($user)) {
            $userLike = $this->blogsCommentLikeService
                ->getRepository()
                ->findOneBy([
                    'comment' => $comment,
                    'user' => $user
                ]);

            if (isset($userLike)) {
                $userLike = $this->blogsCommentLikeService->decorator($userLike);
            }
        }
        return [
            'id' => $comment->getId(),
            'blogId' => $comment->getBlog()->getId(),
            'user' => [
                'id' => $comment->getUser()->getId(),
                'nickname' => $comment->getUser()->getNickname(),
                'surname' => $comment->getUser()->getFamily(),
                'name' => $comment->getUser()->getName(),
                'photo' => $comment->getUser()->getPhoto(),
            ],
            'comment' => $comment->getComment(),
            'createdAt' => BlogService::replaceMonth($comment->getCreatedAt()->format('d F H:i')),
            'timestamp' => $comment->getCreatedAt()->getTimestamp(),
            'likesCount' => $this->blogsCommentLikeService->getLikesCount($comment),
            'userLike' => $userLike,
            'type' => 'blog'
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
        $blogsComments = [];

        foreach ($comments as $comment) {
            $blogsComments[] = $this->decorator($comment);
        }
        return $blogsComments;
    }
}
<?php


namespace App\Service\Blog;


use App\Entity\BlogComment;
use App\Entity\BlogCommentLikes;
use App\Entity\BlogLikes;
use App\Entity\User;
use App\Repository\BlogCommentLikesRepository;
use App\Service\EntityService;

class BlogsCommentLikeService extends EntityService
{
    protected $entity = BlogCommentLikes::class;

    /**
     * @var BlogCommentLikesRepository
     */
    protected $repository;

    /**
     * @param BlogComment $comment
     * @return mixed
     * @throws \Doctrine\ORM\NoResultException
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function getLikesCount(BlogComment $comment)
    {
        return $this->repository->getCount($comment);
    }

    /**
     * @param BlogComment $comment
     * @param User $user
     * @return BlogLikes|null
     */
    public function userLike(BlogComment $comment, User $user)
    {
        return $this->repository->findOneBy([
            'user' => $user,
            'comment' => $comment
        ]);
    }

    /**
     * @param $likes
     * @return array
     */
    public function decorateAll($likes)
    {
        $newsLikes = [];

        foreach ($likes as $like) {
            $newsLikes[] = $this->decorator($like);
        }
        return $newsLikes;
    }

    /**
     * @param BlogCommentLikes $like
     * @return array
     */
    public function decorator(BlogCommentLikes $like)
    {
        /** @var User $user */
        $user = $like->getUser();

        return [
            'type' => $like->getType(),
            'user' => [
                'name' => $user->getName(),
                'photo' => $user->getPhoto(),
                'nickname' => $user->getNickname()
            ]
        ];
    }

    /**
     * @return BlogCommentLikesRepository
     */
    public function getRepository(): BlogCommentLikesRepository
    {
        return $this->repository;
    }
}
<?php


namespace App\Service\News;


use App\Entity\NewsComment;
use App\Entity\NewsCommentLike;
use App\Entity\User;
use App\Repository\NewsCommentLikeRepository;
use App\Service\EntityService;

class NewsCommentLikeService extends EntityService
{
    protected $entity = NewsCommentLike::class;

    /**
     * @var NewsCommentLikeRepository
     */
    protected $repository;

    /**
     * @param NewsComment $comment
     * @return mixed
     * @throws \Doctrine\ORM\NoResultException
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function getLikesCount(NewsComment $comment)
    {
        return $this->repository->getCount($comment);
    }

    /**
     * @param NewsComment $comment
     * @param User $user
     * @return NewsLike|null
     */
    public function userLike(NewsComment $comment, User $user)
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
     * @param NewsCommentLike $like
     * @return array
     */
    public function decorator(NewsCommentLike $like)
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
     * @return NewsCommentLikeRepository
     */
    public function getRepository(): NewsCommentLikeRepository
    {
        return $this->repository;
    }
}
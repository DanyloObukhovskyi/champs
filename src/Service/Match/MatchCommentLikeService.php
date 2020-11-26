<?php


namespace App\Service\Match;


use App\Entity\MatchComment;
use App\Entity\MatchCommentLike;
use App\Entity\User;
use App\Repository\MatchCommentLikeRepository;
use App\Service\EntityService;

class MatchCommentLikeService extends EntityService
{
    protected $entity = MatchCommentLike::class;

    /**
     * @var MatchCommentLikeRepository
     */
    protected $repository;


    /**
     * @param MatchComment $comment
     * @return mixed
     * @throws \Doctrine\ORM\NoResultException
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function getLikesCount(MatchComment $comment)
    {
        return $this->repository->getCount($comment);
    }

    /**
     * @param MatchComment $comment
     * @param User $user
     * @return NewsLike|null
     */
    public function userLike(MatchComment $comment, User $user)
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

        foreach ($likes as $like){
            $newsLikes[] = $this->decorator($like);
        }
        return $newsLikes;
    }

    /**
     * @param MatchCommentLike $like
     * @return array
     */
    public function decorator(MatchCommentLike $like)
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
     * @return MatchCommentLikeRepository
     */
    public function getRepository(): MatchCommentLikeRepository
    {
        return $this->repository;
    }
}
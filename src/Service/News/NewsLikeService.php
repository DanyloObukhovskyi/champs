<?php


namespace App\Service\News;


use App\Entity\News;
use App\Entity\NewsLike;
use App\Entity\User;
use App\Repository\NewsLikeRepository;
use App\Service\EntityService;

class NewsLikeService extends EntityService
{
    protected $entity = NewsLike::class;

    protected $entityManager;

    /**
     * @var NewsLikeRepository
     */
    protected $repository;

    /**
     * @param News $news
     * @return mixed
     * @throws \Doctrine\ORM\NoResultException
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function getLikesCount(News $news)
    {
        return $this->repository->getCount($news);
    }

    /**
     * @param News $news
     * @param User $user
     * @return NewsLike|null
     */
    public function userLike(News $news, User $user)
    {
        return $this->repository->findOneBy([
            'user' => $user,
            'news' => $news
        ]);
    }

    /**
     * @param News $news
     * @param $limit
     * @return mixed
     */
    public function getLikes(News $news, $limit)
    {
        return $this->repository->getLikes($news, $limit);
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
     * @param NewsLike $like
     * @return array
     */
    public function decorator(NewsLike $like)
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
}
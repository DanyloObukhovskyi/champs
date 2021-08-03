<?php


namespace App\Service\Blog;


use App\Entity\BlogLikes;
use App\Entity\Blogs;
use App\Entity\User;
use App\Repository\BlogLikesRepository;
use App\Service\EntityService;

class BlogsLikeService extends EntityService
{
    protected $entity = BlogLikes::class;

    protected $entityManager;

    /**
     * @var BlogLikesRepository
     */
    protected $repository;

    /**
     * @param Blogs $blog
     * @return mixed
     * @throws \Doctrine\ORM\NoResultException
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function getLikesCount(Blogs $blog)
    {
        return $this->repository->getCount($blog);
    }

    /**
     * @param Blogs $blog
     * @param User $user
     * @return BlogLikes|null
     */
    public function userLike(Blogs $blog, User $user)
    {
        return $this->repository->findOneBy([
            'user' => $user,
            'blog' => $blog
        ]);
    }

    /**
     * @param Blogs $blog
     * @param $limit
     * @return mixed
     */
    public function getLikes(Blogs $blog, $limit)
    {
        return $this->repository->getLikes($blog, $limit);
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
     * @param BlogLikes $like
     * @return array
     */
    public function decorator(BlogLikes $like)
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
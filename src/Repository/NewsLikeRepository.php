<?php

namespace App\Repository;

use App\Entity\News;
use App\Entity\NewsLike;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method NewsLike|null find($id, $lockMode = null, $lockVersion = null)
 * @method NewsLike|null findOneBy(array $criteria, array $orderBy = null)
 * @method NewsLike[]    findAll()
 * @method NewsLike[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class NewsLikeRepository extends ServiceEntityRepository
{
    /**
     * NewsLikeRepository constructor.
     * @param ManagerRegistry $registry
     */
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, NewsLike::class);
    }

    /**
     * @param News $news
     * @return mixed
     * @throws \Doctrine\ORM\NoResultException
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function getCount(News $news)
    {
        $likes = $this->createQueryBuilder('n')
            ->select('count(n.id)')
            ->andWhere('n.news = :news')
            ->andWhere('n.type = :type')
            ->setParameter('news', $news)
            ->setParameter('type', NewsLike::LIKE)
            ->getQuery()
            ->getSingleScalarResult();

        $dislikes = $this->createQueryBuilder('n')
            ->select('count(n.id)')
            ->andWhere('n.news = :news')
            ->andWhere('n.type = :type')
            ->setParameter('news', $news)
            ->setParameter('type', NewsLike::DISLIKE)
            ->getQuery()
            ->getSingleScalarResult();

        return $likes - $dislikes;
    }

    /**
     * @param News $news
     * @param $limit
     * @return mixed
     */
    public function getLikes(News $news, $limit)
    {
        return $this->createQueryBuilder('n')
            ->leftJoin('n.user', 'nu')
            ->orderBy('nu.photo', 'DESC')
            ->andWhere('n.news = :news')
            ->setParameter('news', $news)
            ->setMaxResults($limit)
            ->getQuery()
            ->getResult();
    }
}

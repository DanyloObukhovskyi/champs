<?php

namespace App\Repository;

use App\Entity\NewsComment;
use App\Entity\NewsCommentLike;
use App\Entity\NewsLike;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method NewsCommentLike|null find($id, $lockMode = null, $lockVersion = null)
 * @method NewsCommentLike|null findOneBy(array $criteria, array $orderBy = null)
 * @method NewsCommentLike[]    findAll()
 * @method NewsCommentLike[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class NewsCommentLikeRepository extends ServiceEntityRepository
{
    /**
     * NewsCommentLikeRepository constructor.
     * @param ManagerRegistry $registry
     */
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, NewsCommentLike::class);
    }

    /**
     * @param NewsComment $comment
     * @return mixed
     * @throws \Doctrine\ORM\NoResultException
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function getCount(NewsComment $comment)
    {
        $likes = $this->createQueryBuilder('n')
            ->select('count(n.id)')
            ->andWhere('n.comment = :comment')
            ->setParameter('comment', $comment)
            ->andWhere('n.type = :type')
            ->setParameter('type', NewsLike::LIKE)
            ->getQuery()
            ->getSingleScalarResult();

        $dislikes = $this->createQueryBuilder('n')
            ->select('count(n.id)')
            ->andWhere('n.comment = :comment')
            ->setParameter('comment', $comment)
            ->andWhere('n.type = :type')
            ->setParameter('type', NewsLike::DISLIKE)
            ->getQuery()
            ->getSingleScalarResult();

        return $likes - $dislikes;
    }
}

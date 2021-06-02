<?php

namespace App\Repository;

use App\Entity\MatchComment;
use App\Entity\MatchCommentLike;
use App\Entity\NewsLike;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method MatchCommentLike|null find($id, $lockMode = null, $lockVersion = null)
 * @method MatchCommentLike|null findOneBy(array $criteria, array $orderBy = null)
 * @method MatchCommentLike[]    findAll()
 * @method MatchCommentLike[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MatchCommentLikeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, MatchCommentLike::class);
    }

    /**
     * @param NewsComment $comment
     * @return mixed
     * @throws \Doctrine\ORM\NoResultException
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function getCount(MatchComment $comment)
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

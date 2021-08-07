<?php

namespace App\Repository;

use App\Entity\BlogComment;
use App\Entity\BlogCommentLikes;
use App\Entity\BlogLikes;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method BlogCommentLikes|null find($id, $lockMode = null, $lockVersion = null)
 * @method BlogCommentLikes|null findOneBy(array $criteria, array $orderBy = null)
 * @method BlogCommentLikes[]    findAll()
 * @method BlogCommentLikes[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class BlogCommentLikesRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, BlogCommentLikes::class);
    }

    // /**
    //  * @return BlogCommentLikes[] Returns an array of BlogCommentLikes objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('b')
            ->andWhere('b.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('b.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?BlogCommentLikes
    {
        return $this->createQueryBuilder('b')
            ->andWhere('b.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */

    /**
     * @param BlogComment $comment
     * @return mixed
     * @throws \Doctrine\ORM\NoResultException
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function getCount(BlogComment $comment)
    {
        $likes = $this->createQueryBuilder('n')
            ->select('count(n.id)')
            ->andWhere('n.comment = :comment')
            ->setParameter('comment', $comment)
            ->andWhere('n.type = :type')
            ->setParameter('type', BlogLikes::LIKE)
            ->getQuery()
            ->getSingleScalarResult();

        $dislikes = $this->createQueryBuilder('n')
            ->select('count(n.id)')
            ->andWhere('n.comment = :comment')
            ->setParameter('comment', $comment)
            ->andWhere('n.type = :type')
            ->setParameter('type', BlogLikes::DISLIKE)
            ->getQuery()
            ->getSingleScalarResult();

        return $likes - $dislikes;
    }
}

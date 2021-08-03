<?php

namespace App\Repository;

use App\Entity\BlogLikes;
use App\Entity\Blogs;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method BlogLikes|null find($id, $lockMode = null, $lockVersion = null)
 * @method BlogLikes|null findOneBy(array $criteria, array $orderBy = null)
 * @method BlogLikes[]    findAll()
 * @method BlogLikes[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class BlogLikesRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, BlogLikes::class);
    }

    // /**
    //  * @return BlogLikes[] Returns an array of BlogLikes objects
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
    public function findOneBySomeField($value): ?BlogLikes
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
     * @param Blogs $blog
     * @return mixed
     * @throws \Doctrine\ORM\NoResultException
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function getCount(Blogs $blog)
    {
        $likes = $this->createQueryBuilder('n')
            ->select('count(n.id)')
            ->andWhere('n.blog = :blog')
            ->andWhere('n.type = :type')
            ->setParameter('blog', $blog)
            ->setParameter('type', BlogLikes::LIKE)
            ->getQuery()
            ->getSingleScalarResult();

        $dislikes = $this->createQueryBuilder('n')
            ->select('count(n.id)')
            ->andWhere('n.blog = :blog')
            ->andWhere('n.type = :type')
            ->setParameter('blog', $blog)
            ->setParameter('type', BlogLikes::DISLIKE)
            ->getQuery()
            ->getSingleScalarResult();

        return $likes - $dislikes;
    }

    /**
     * @param Blogs $blog
     * @param $limit
     * @return mixed
     */
    public function getLikes(Blogs $blog, $limit)
    {
        return $this->createQueryBuilder('n')
            ->leftJoin('n.user', 'nu')
            ->orderBy('nu.photo', 'DESC')
            ->andWhere('n.blog = :blog')
            ->setParameter('blog', $blog)
            ->setMaxResults($limit)
            ->getQuery()
            ->getResult();
    }
}

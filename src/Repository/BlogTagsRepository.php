<?php

namespace App\Repository;

use App\Entity\BlogTags;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method BlogTags|null find($id, $lockMode = null, $lockVersion = null)
 * @method BlogTags|null findOneBy(array $criteria, array $orderBy = null)
 * @method BlogTags[]    findAll()
 * @method BlogTags[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class BlogTagsRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, BlogTags::class);
    }

    // /**
    //  * @return BlogTags[] Returns an array of BlogTags objects
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
    public function findOneBySomeField($value): ?BlogTags
    {
        return $this->createQueryBuilder('b')
            ->andWhere('b.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}

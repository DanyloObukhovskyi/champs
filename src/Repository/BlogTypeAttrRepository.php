<?php

namespace App\Repository;

use App\Entity\BlogTypeAttr;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method BlogTypeAttr|null find($id, $lockMode = null, $lockVersion = null)
 * @method BlogTypeAttr|null findOneBy(array $criteria, array $orderBy = null)
 * @method BlogTypeAttr[]    findAll()
 * @method BlogTypeAttr[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class BlogTypeAttrRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, BlogTypeAttr::class);
    }

    // /**
    //  * @return BlogTypeAttr[] Returns an array of BlogTypeAttr objects
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
    public function findOneBySomeField($value): ?BlogTypeAttr
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

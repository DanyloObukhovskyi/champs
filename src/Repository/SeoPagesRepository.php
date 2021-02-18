<?php

namespace App\Repository;

use App\Entity\SeoPages;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method SeoPages|null find($id, $lockMode = null, $lockVersion = null)
 * @method SeoPages|null findOneBy(array $criteria, array $orderBy = null)
 * @method SeoPages[]    findAll()
 * @method SeoPages[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class SeoPagesRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, SeoPages::class);
    }

    // /**
    //  * @return SeoPages[] Returns an array of SeoPages objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('s.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?SeoPages
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}

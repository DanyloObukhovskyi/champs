<?php

namespace App\Repository;

use App\Entity\SeoPagesMeta;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method SeoPagesMeta|null find($id, $lockMode = null, $lockVersion = null)
 * @method SeoPagesMeta|null findOneBy(array $criteria, array $orderBy = null)
 * @method SeoPagesMeta[]    findAll()
 * @method SeoPagesMeta[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class SeoPagesMetaRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, SeoPagesMeta::class);
    }

    // /**
    //  * @return SeoPagesMeta[] Returns an array of SeoPagesMeta objects
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
    public function findOneBySomeField($value): ?SeoPagesMeta
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

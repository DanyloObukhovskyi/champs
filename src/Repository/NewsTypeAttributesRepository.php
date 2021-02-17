<?php

namespace App\Repository;

use App\Entity\NewsTypeAttributes;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method NewsTypeAttributes|null find($id, $lockMode = null, $lockVersion = null)
 * @method NewsTypeAttributes|null findOneBy(array $criteria, array $orderBy = null)
 * @method NewsTypeAttributes[]    findAll()
 * @method NewsTypeAttributes[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class NewsTypeAttributesRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, NewsTypeAttributes::class);
    }

    // /**
    //  * @return NewsTypeAttributes[] Returns an array of NewsTypeAttributes objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('n')
            ->andWhere('n.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('n.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?NewsTypeAttributes
    {
        return $this->createQueryBuilder('n')
            ->andWhere('n.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}

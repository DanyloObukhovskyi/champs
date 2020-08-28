<?php

namespace App\Repository;

use App\Entity\MatchPickAndBan;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method MatchPickAndBan|null find($id, $lockMode = null, $lockVersion = null)
 * @method MatchPickAndBan|null findOneBy(array $criteria, array $orderBy = null)
 * @method MatchPickAndBan[]    findAll()
 * @method MatchPickAndBan[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MatchPickAndBanRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, MatchPickAndBan::class);
    }

    // /**
    //  * @return MatchPickAndBan[] Returns an array of MatchPickAndBan objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('m')
            ->andWhere('m.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('m.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?MatchPickAndBan
    {
        return $this->createQueryBuilder('m')
            ->andWhere('m.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}

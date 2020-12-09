<?php

namespace App\Repository;

use App\Entity\TrainerAward;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method TrainerAward|null find($id, $lockMode = null, $lockVersion = null)
 * @method TrainerAward|null findOneBy(array $criteria, array $orderBy = null)
 * @method TrainerAward[]    findAll()
 * @method TrainerAward[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TrainerAwardRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TrainerAward::class);
    }

    // /**
    //  * @return TrainerAward[] Returns an array of TrainerAward objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('t.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?TrainerAward
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}

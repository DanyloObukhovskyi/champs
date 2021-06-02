<?php

namespace App\Repository;

use App\Entity\TrainerBanner;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method TrainerBanner|null find($id, $lockMode = null, $lockVersion = null)
 * @method TrainerBanner|null findOneBy(array $criteria, array $orderBy = null)
 * @method TrainerBanner[]    findAll()
 * @method TrainerBanner[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TrainerBannerRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TrainerBanner::class);
    }

    // /**
    //  * @return TrainerBanner[] Returns an array of TrainerBanner objects
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
    public function findOneBySomeField($value): ?TrainerBanner
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

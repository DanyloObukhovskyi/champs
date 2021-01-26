<?php

namespace App\Repository;

use App\Entity\TrainerBannerLink;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method TrainerBannerLink|null find($id, $lockMode = null, $lockVersion = null)
 * @method TrainerBannerLink|null findOneBy(array $criteria, array $orderBy = null)
 * @method TrainerBannerLink[]    findAll()
 * @method TrainerBannerLink[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TrainerBannerLinkRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TrainerBannerLink::class);
    }

    // /**
    //  * @return TrainerBannerLink[] Returns an array of TrainerBannerLink objects
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
    public function findOneBySomeField($value): ?TrainerBannerLink
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

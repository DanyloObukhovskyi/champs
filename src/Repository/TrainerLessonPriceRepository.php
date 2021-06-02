<?php

namespace App\Repository;

use App\Entity\TrainerLessonPrice;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method TrainerLessonPrice|null find($id, $lockMode = null, $lockVersion = null)
 * @method TrainerLessonPrice|null findOneBy(array $criteria, array $orderBy = null)
 * @method TrainerLessonPrice[]    findAll()
 * @method TrainerLessonPrice[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TrainerLessonPriceRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TrainerLessonPrice::class);
    }

    // /**
    //  * @return TrainerLessonPrice[] Returns an array of TrainerLessonPrice objects
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
    public function findOneBySomeField($value): ?TrainerLessonPrice
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

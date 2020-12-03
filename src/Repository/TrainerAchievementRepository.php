<?php

namespace App\Repository;

use App\Entity\TrainerAchievement;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method TrainerAchievement|null find($id, $lockMode = null, $lockVersion = null)
 * @method TrainerAchievement|null findOneBy(array $criteria, array $orderBy = null)
 * @method TrainerAchievement[]    findAll()
 * @method TrainerAchievement[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TrainerAchievementRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TrainerAchievement::class);
    }

    // /**
    //  * @return TrainerAchievement[] Returns an array of TrainerAchievement objects
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
    public function findOneBySomeField($value): ?TrainerAchievement
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

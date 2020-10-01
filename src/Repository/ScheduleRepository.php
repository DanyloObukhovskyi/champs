<?php

namespace App\Repository;

use App\Entity\Schedule;
use App\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Schedule|null find($id, $lockMode = null, $lockVersion = null)
 * @method Schedule|null findOneBy(array $criteria, array $orderBy = null)
 * @method Schedule[]    findAll()
 * @method Schedule[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ScheduleRepository extends ServiceEntityRepository
{
    /**
     * ScheduleRepository constructor.
     * @param ManagerRegistry $registry
     */
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Schedule::class);
    }

    /**
     * @param $trainer
     * @param $date
     * @return mixed
     */
    public function findByTrainerAndDate($trainer, $date)
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.trainer = :trainer')
            ->andWhere('s.date = :date')
            ->setParameter('trainer', $trainer)
            ->setParameter('date', $date)
            ->orderBy('s.time', 'ASC')
            ->getQuery()
            ->getResult();
    }

    /**
     * @param User $trainer
     * @param $date
     * @param $time
     * @return mixed
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function getByTrainerDateAndTime(User $trainer, $date, $time)
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.trainer = :trainer')
            ->andWhere('s.date = :date')
            ->andWhere('s.time = :time')
            ->setParameter('trainer', $trainer)
            ->setParameter('date', $date)
            ->setParameter('time', $time)
            ->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult();
    }

    // /**
    //  * @return Schedule[] Returns an array of Schedule objects
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
    public function findOneBySomeField($value): ?Schedule
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

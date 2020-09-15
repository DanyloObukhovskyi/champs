<?php

namespace App\Repository;

use App\Entity\Schledule;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Schledule|null find($id, $lockMode = null, $lockVersion = null)
 * @method Schledule|null findOneBy(array $criteria, array $orderBy = null)
 * @method Schledule[]    findAll()
 * @method Schledule[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class SchleduleRepository extends ServiceEntityRepository
{
    /**
     * SchleduleRepository constructor.
     * @param ManagerRegistry $registry
     */
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Schledule::class);
    }

    /**
     * @param \Datetime $date
     * @return mixed
     * @throws \Exception
     */
    public function getByDate(\Datetime $date)
    {
        $from = new \DateTime($date->format("Y-m-d")." 00:00:00");
        $to   = new \DateTime($date->format("Y-m-d")." 23:59:59");

        $qb = $this->createQueryBuilder("e");
        $qb
            ->andWhere('e.date BETWEEN :from AND :to')
            ->setParameter('from', $from )
            ->setParameter('to', $to)
        ;
        $result = $qb->getQuery()->getResult();

        return $result;
    }

    /**
     * @param $value
     * @return mixed
     */
    public function findByUserId($value)
    {
        return $this->createQueryBuilder('l')
            ->andWhere('l.trainer_id = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getResult()
            ;
    }

    /**
     * @param int $userId
     * @param \Datetime $date
     * @return mixed
     * @throws \Exception
     */
    public function findByUserAndDate(int $userId, \Datetime $date)
    {
        $from = new \DateTime($date->format("Y-m-d")." 00:00:00");
        $to   = new \DateTime($date->format("Y-m-d")." 23:59:59");

        $qb = $this->createQueryBuilder("e");
        $qb
            ->andWhere('e.date BETWEEN :from AND :to')
            ->setParameter('from', $from )
            ->setParameter('to', $to)
            ->andWhere('e.trainer_id = :val')
            ->setParameter('val', $userId)
        ;
        $result = $qb->getQuery()->getResult();

        return $result;

    }

    /**
     * @param int $userId
     * @param \Datetime $date
     * @return mixed
     * @throws \Exception
     */
    public function findByUserAndDateFrom(int $userId, \Datetime $date)
    {
        $from = new \DateTime($date->format("Y-m-d")." 00:00:00");

        $qb = $this->createQueryBuilder("e");
        $qb
            ->andWhere('e.date > :from')
            ->setParameter('from', $from )
            ->andWhere('e.trainer_id = :val')
            ->setParameter('val', $userId)
        ;
        $result = $qb->getQuery()->getResult();

        return $result;

    }

    /**
     * @param int $trainer_id
     * @param \Datetime $date
     * @return mixed
     * @throws \Exception
     */
    public function findByTrainerAndDateWeek(int $trainer_id, \Datetime $date)
    {
        $from = new \DateTime($date->format("Y-m-d")." 00:00:00");
        $to   = new \DateTime($date->format("Y-m-d")." 23:59:59");
        $to->modify('+6 day');

        $qb = $this->createQueryBuilder("e");
        $qb->andWhere('e.date BETWEEN :from AND :to')
            ->setParameter('from', $from )
            ->setParameter('to', $to)
            ->andWhere('e.trainer_id = :val')
            ->setParameter('val', $trainer_id);

        $result = $qb->getQuery()->getResult();

        return $result;
    }

    public function findByTrainerAndDate(int $trainerId, string $date)
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.trainer_id = :trainer_id')
            ->andWhere('s.date = :date')
            ->setParameter('trainer_id', $trainerId)
            ->setParameter('date', $date)
            ->getQuery()
            ->setMaxResults(1)
            ->getOneOrNullResult();
    }
}

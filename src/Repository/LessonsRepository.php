<?php

namespace App\Repository;

use App\Entity\Lessons;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Lessons|null find($id, $lockMode = null, $lockVersion = null)
 * @method Lessons|null findOneBy(array $criteria, array $orderBy = null)
 * @method Lessons[]    findAll()
 * @method Lessons[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class LessonsRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Lessons::class);
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
            ->andWhere('e.datetime BETWEEN :from AND :to')
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
    public function findByStudentId($value)
    {
        return $this->createQueryBuilder('l')
            ->andWhere('l.student_id = :val')
            ->setParameter('val', $value)
            ->orderBy('l.datetime', 'DESC')
            ->getQuery()
            ->getResult();
    }

    /**
     * @param $value
     * @return mixed
     */
    public function findByTrainerId($value)
    {
        return $this->createQueryBuilder('l')
            ->andWhere('l.trainer_id = :val')
            ->setParameter('val', $value)
            ->orderBy('l.datetime', 'DESC')
            ->getQuery()
            ->getResult()
            ;
    }

    /**
     * @param int $student_id
     * @param \Datetime $date
     * @return mixed
     * @throws \Exception
     */
    public function findByStudentAndDate(int $student_id, \Datetime $date)
    {
        $from = new \DateTime($date->format("Y-m-d")." 00:00:00");
        $to   = new \DateTime($date->format("Y-m-d")." 23:59:59");

        $qb = $this->createQueryBuilder("e");
        $qb
            ->andWhere('e.datetime BETWEEN :from AND :to')
            ->setParameter('from', $from )
            ->setParameter('to', $to)
            ->andWhere('e.student_id = :val')
            ->setParameter('val', $student_id)
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
    public function findByTrainerAndDate(int $trainer_id, \Datetime $date)
    {
        $from = new \DateTime($date->format("Y-m-d")." 00:00:00");
        $to   = new \DateTime($date->format("Y-m-d")." 23:59:59");

        $qb = $this->createQueryBuilder("e");
        $qb
            ->andWhere('e.datetime BETWEEN :from AND :to')
            ->setParameter('from', $from )
            ->setParameter('to', $to)
            ->andWhere('e.trainer_id = :val')
            ->setParameter('val', $trainer_id)
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
        $to->modify('+1 week');

        $qb = $this->createQueryBuilder("e");
        $qb
            ->andWhere('e.datetime BETWEEN :from AND :to')
            ->setParameter('from', $from )
            ->setParameter('to', $to)
            ->andWhere('e.trainer_id = :val')
            ->setParameter('val', $trainer_id)
        ;
        $result = $qb->getQuery()->getResult();

        return $result;

    }

    /**
     * @param $value
     * @return mixed
     * @throws \Doctrine\ORM\NoResultException
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function findCountByTrainerId($value)
    {
        return $this->createQueryBuilder('l')
            ->select('count(l.id)')
            ->andWhere('l.trainer_id = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getSingleScalarResult()
            ;
    }

    /**
     * @param $value
     * @param $val
     * @return mixed
     * @throws \Doctrine\ORM\NoResultException
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function findCountByTrainerAndStudent($value, $val)
    {
        return $this->createQueryBuilder('l')
            ->select('count(l.id)')
            ->andWhere('l.trainer_id = :value')
            ->setParameter('value', $value)
            ->andWhere('l.student_id = :val')
            ->setParameter('val', $val)
            ->getQuery()
            ->getSingleScalarResult()
            ;
    }

}

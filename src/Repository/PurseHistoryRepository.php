<?php

namespace App\Repository;

use App\Entity\PurseHistory;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method PurseHistory|null find($id, $lockMode = null, $lockVersion = null)
 * @method PurseHistory|null findOneBy(array $criteria, array $orderBy = null)
 * @method PurseHistory[]    findAll()
 * @method PurseHistory[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PurseHistoryRepository extends ServiceEntityRepository
{
    /**
     * PurseHistoryRepository constructor.
     * @param ManagerRegistry $registry
     */
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PurseHistory::class);
    }

    /**
     * @param $id
     * @return mixed
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function sumByLastMonth($id)
    {
        $date = new \DateTime();
        $to = $date;
        $from = (new \DateTime($date->format("Y-m-d") . " 23:59:59"))->modify('-1 month');

        return $this->createQueryBuilder('m')
            ->andWhere('m.datetime BETWEEN :from AND :to')
            ->setParameter('from', $from)
            ->setParameter('to', $to)
            ->andWhere('m.user = :id')
            ->setParameter('id', $id)
            ->andWhere('m.operation > 0')
            ->select('SUM(m.operation) as sum')
            ->getQuery()
            ->setMaxResults(1)
            ->getOneOrNullResult();
    }

    /**
     * @param $id
     * @return mixed
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function sumByPreLastMonth($id)
    {
        $date = new \DateTime();
        $to = (new \DateTime($date->format("Y-m-d") . " 23:59:59"))->modify('-1 month');
        $from = (new \DateTime($date->format("Y-m-d") . " 23:59:59"))->modify('-2 month');

        return $this->createQueryBuilder('m')
            ->andWhere('m.datetime BETWEEN :from AND :to')
            ->setParameter('from', $from)
            ->setParameter('to', $to)
            ->andWhere('m.user = :id')
            ->setParameter('id', $id)
            ->andWhere('m.operation > 0')
            ->select('SUM(m.operation) as sum')
            ->getQuery()
            ->setMaxResults(1)
            ->getOneOrNullResult();
    }
}

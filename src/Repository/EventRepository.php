<?php

namespace App\Repository;

use App\Entity\Event;
use App\Entity\Match;
use Carbon\Carbon;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Event|null find($id, $lockMode = null, $lockVersion = null)
 * @method Event|null findOneBy(array $criteria, array $orderBy = null)
 * @method Event[]    findAll()
 * @method Event[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class EventRepository extends ServiceEntityRepository
{
    /**
     * EventRepository constructor.
     * @param ManagerRegistry $registry
     */
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Event::class);
    }

    /**
     * @param $name
     * @param $startAt
     * @return mixed
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function getByNameAndStartDate($name, $startAt)
    {
        return $this->createQueryBuilder('e')
            ->andWhere('e.name = :name')
            ->andWhere('e.started_at = :started_at')
            ->setParameter('name', $name)
            ->setParameter('started_at', $startAt)
            ->getQuery()
            ->getOneOrNullResult();
    }

    /**
     * @param $name
     * @param $date
     * @return Event|null
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function getByNameAndBetweenDate($name, $date): ?Event
    {
        return $this->createQueryBuilder('e')
            ->andWhere('e.name = :name')
            ->andWhere(':date BETWEEN e.started_at AND e.ended_at')
            ->setParameter('name', $name)
            ->setParameter('date', $date)
            ->getQuery()
            ->getOneOrNullResult();
    }

    /**
     * @param \Datetime $date
     * @return mixed
     */
    public function findByDate(\Datetime $date)
    {
        /** @var Match[] $matches */
        $matches = $this->createQueryBuilder('m')
            ->orderBy('m.started_at', 'ASC')
            ->andWhere('m.started_at <= :date')
            ->andWhere('m.ended_at >= :date')
            ->setParameter('date', $date->format("Y-m-d"))
            ->getQuery()
            ->getResult();

        return $matches;

    }

    /**
     * @param \Datetime $date
     * @return mixed
     * @throws \Exception
     */
    public function findFutureEvents(\Datetime $date)
    {
        /** @var Match[] $matches */
        $matches = $this->createQueryBuilder('m')
            ->orderBy('m.started_at', 'ASC')
            ->andWhere(' m.started_at > :date')
            ->setParameter('date', (new \DateTime($date->format("Y-m-d"))) )
            ->getQuery()
            ->getResult();

        return $matches;

    }

    /**
     * @return array|mixed
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function getCurrentEvents()
    {
        $event = $this->createQueryBuilder('e')
            ->orderBy('e.id', 'DESC')
            ->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult();

        if (isset($event)){
            $dateFrom = $event->getCreatedAt()->setSeconds(0)->format('Y-m-d H:i:s');
            $dateTo = $event->getCreatedAt()->addMinutes(5)->format('Y-m-d H:i:s');

            /** @var Event[] $events */
            $events = $this->createQueryBuilder('e')
                ->where("e.createdAt >= '$dateFrom'")
                ->andWhere("e.createdAt <= '$dateTo'")
                ->orderBy('e.id', 'ASC')
                ->getQuery()
                ->getResult();

            return $events;
        }
        return [];
    }
}

<?php

namespace App\Repository;

use App\Entity\Event;
use App\Entity\Match;
use Carbon\Carbon;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\Validator\Constraints\DateTime;

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
            ->setMaxResults(1)
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
            ->setMaxResults(1)
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
        /** @var Event[] $events */
        $events = $this->createQueryBuilder('m')
            ->orderBy('m.started_at', 'ASC')
            ->andWhere(' m.started_at > :date')
            ->setParameter('date', (new \DateTime($date->format("Y-m-d"))) )
            ->getQuery()
            ->getResult();

        return $events;

    }

    /**
     * @return array|mixed
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function getCurrentEvents()
    {
        /** @var Event[] $events */
        $events = $this->createQueryBuilder('e')
            ->orderBy('e.createdAt', 'DESC')
            ->andWhere(' e.createdAt is not null')
            ->setMaxResults(5)
            ->getQuery()
            ->getResult();

        return $events;
    }

    public function getLastWeekEvents()
    {
        $dateNow = date('Y.m.d');
        $dateWeek = date('Y.m.d', strtotime("-7 days"));

        /** @var Event[] $events */
        $events = $this->createQueryBuilder('e')
            ->andWhere(' e.url is not null')
            ->andWhere('e.ended_at <= :dateNow')
            ->andWhere('e.ended_at >= :dateWeek')
            ->setParameter('dateNow', $dateNow)
            ->setParameter('dateWeek', $dateWeek)
            ->getQuery()
            ->getResult();

        return $events;
    }

    public function getFeatureEvents()
    {
        $date = date('Y.m.d');

        /** @var Event[] $events */
        $events = $this->createQueryBuilder('e')
            ->andWhere(' e.url is not null')
            ->andWhere('e.ended_at >= :date')
            ->setParameter('date', $date)
            ->getQuery()
            ->getResult();

        return $events;
    }

    public function getByUrl($url)
    {
        return $this->createQueryBuilder('e')
            ->andWhere('e.url = :url')
            ->setParameter('url', $url)
            ->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult();
    }

    public function getByName($name)
    {
        return $this->createQueryBuilder('e')
            ->andWhere('e.name = :name')
            ->orderBy('e.id', 'DESC')
            ->setParameter('name', $name)
            ->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult();
    }
}

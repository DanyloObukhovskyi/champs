<?php

namespace App\Repository;

use App\Entity\Event;
use App\Entity\Match;
use App\Service\Event\EventService;
use App\Service\Match\MatchService;
use Carbon\Carbon;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use DateTime;

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
            ->andWhere('e.startedAt = :startedAt')
            ->setParameter('name', $name)
            ->setParameter('startedAt', $startAt)
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
            ->andWhere(':date BETWEEN e.startedAt AND e.endedAt')
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
            ->orderBy('m.startedAt', 'ASC')
            ->andWhere('m.startedAt <= :date')
            ->andWhere('m.endedAt >= :date')
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
            ->orderBy('m.startedAt', 'ASC')
            ->andWhere(' m.startedAt > :date')
            ->setParameter('date', (new \DateTime($date->format("Y-m-d"))))
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
        $date = new DateTime();

        /** @var Event[] $events */
        $events = $this->createQueryBuilder('e')
            ->orderBy('e.startedAt', 'ASC')
            ->andWhere(' e.startedAt >= :date')
            ->setParameter('date', $date->format('Y-m-d'))
            ->setMaxResults(6)
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
            ->andWhere('e.endedAt <= :dateNow')
            ->andWhere('e.endedAt >= :dateWeek')
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
            ->andWhere('e.endedAt >= :date')
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
            ->orderBy('e.id', 'DESC')
            ->andWhere('e.name like :name')
            ->setParameter('name', $name)
            ->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult();
    }

    public function getOldEvents()
    {
        $dateNow = date('Y.m.d');
        if (isset($_ENV['DATE_FROM_EVENT_PARSE'])) {
            $dateFrom = $_ENV['DATE_FROM_EVENT_PARSE'];
        } else {
            $dateFrom = date('Y.m.d', strtotime("-7 days"));
        }

        /** @var Event[] $events */
        $events = $this->createQueryBuilder('e')
            ->andWhere(' e.url is not null')
            ->andWhere('e.endedAt <= :dateNow')
            ->andWhere('e.endedAt >= :dateFrom')
            ->setParameter('dateNow', $dateNow)
            ->setParameter('dateFrom', $dateFrom)
            ->getQuery()
            ->getResult();

        return $events;
    }

    /**
     * @param $filters
     * @param string $type
     * @return \Doctrine\ORM\QueryBuilder
     * @throws \Exception
     */
    public function getEventsQueryByType($filters, string $type)
    {
        $date = new \DateTime();
        $date = $date->format("Y-m-d");

        $query = $this->createQueryBuilder('e')
            ->orderBy('e.startedAt', 'DESC');

        if (isset($filters->teamA) || isset($filters->teamB)) {
            $query->innerJoin('e.teamsAttending', 'ta');
        }
        $parameters = [];
        if ($type === EventService::FUTURE) {
            $query->andWhere('e.startedAt > :date');
            $parameters['date'] = $date;
        }
        if ($type === EventService::LIVE) {
            $query->andWhere('e.startedAt > :date')
                ->andWhere('e.endedAt < :date');
            $parameters['date'] = $date;
        }
        if ($type === EventService::PAST) {
            $query->andWhere('e.startedAt < :date');
            $parameters['date'] = $date;
        }

        if (isset($filters->teamA)) {
            $query->andWhere('ta.team = :teamA');
            $parameters['teamA'] = $filters->teamA;
        }

        if (isset($filters->teamB)) {
            $query->andWhere('ta.team = :teamB');
            $parameters['teamB'] = $filters->teamB;
        }

        if (!empty($filters->dateFrom)) {
            $from = new \DateTime("$filters->dateFrom 00:00:00");
            $query->andWhere('e.startedAt >= :dateFrom');
            $parameters['dateFrom'] = $from;
        }
        if (!empty($filters->dateTo)) {
            $to = new \DateTime("$filters->dateTo 23:59:59");
            $query->andWhere('e.startedAt <= :dateTo');
            $parameters['dateTo'] = $to;
        }
        if (!empty($filters->name)) {
            $query->andWhere('e.name like :name');
            $parameters['name'] = "%$filters->name%";
        }
        if (!is_null($filters->online)) {
            $query->andWhere('e.isOnline = :isOnline');
            $parameters['isOnline'] = $filters->online;
        }
        if (!empty($filters->tournamentType)) {
            $query->andWhere('e.status = :status');
            $parameters['status'] = $filters->tournamentType;
        }
        if(!empty($parameters)){
            $query->setParameters($parameters);
        }
        return $query;
    }

    /**
     * @param $filters
     * @param string $type
     * @param int $page
     * @param null $length
     * @return array|mixed
     * @throws \Exception
     */
    public function getEventsByType($filters, string $type, $page = 0, $length = null)
    {
        if (empty($length)) {
            $length = 20;
        }
        $result = [];

        if (in_array($type, EventService::TYPES, false)) {
            $query = $this->getEventsQueryByType(
                $filters,
                $type
            )->setFirstResult($page * $length)
                ->setMaxResults($length);

            $result = $query->getQuery()
                ->getResult();
        }
        return $result;
    }
}

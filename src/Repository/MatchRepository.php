<?php

namespace App\Repository;

use App\Entity\Match;
use App\Entity\Team;
use App\Service\Match\MatchService;
use Carbon\Carbon;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use phpDocumentor\Reflection\DocBlock\Tags\Return_;

/**
 * @method Match|null find($id, $lockMode = null, $lockVersion = null)
 * @method Match|null findOneBy(array $criteria, array $orderBy = null)
 * @method Match[]    findAll()
 * @method Match[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MatchRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Match::class);
    }

    /**
     * @param $code
     * @return Match|null
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function getByCode($code): ?Match
    {
        return $this->createQueryBuilder('m')
            ->andWhere('m.code = :code')
            ->setParameter('code', $code)
            ->getQuery()
            ->setMaxResults(1)
            ->getOneOrNullResult();
    }

    /**
     * @return array
     */
    public function findLive(): array
    {
        $matches = $this->createQueryBuilder('m')
            ->orderBy('m.start_at', 'ASC')
            ->andWhere('m.live = 1')
            ->getQuery()
            ->getResult();

        $results = [];
        foreach ($matches as $match) {
            /** @var Match $match */
            $results[] = $match;
        }

        return $results;
    }

    /**
     * @return Match[]
     */
    public function findLiveForParse(): array
    {
        $matches = $this->createQueryBuilder('m')
            ->orderBy('m.start_at', 'ASC')
            ->andWhere('m.live = 1')
            ->getQuery()
            ->getResult();

        return $matches;
    }

    /**
     * @return Match[]
     */
    public function getNotFullMatches(): array
    {
        return $this->createQueryBuilder('m')
            ->leftJoin('m.matchStatistics', 'ms', 'WITH')
            ->orderBy('m.start_at', 'ASC')
            ->andWhere('ms.score1 is null or ms.score2 is null')
            ->andWhere('m.start_at <= :date')
            ->andWhere('m.live = 0')
            ->setParameter('date', date('Y-m-d H:i:s'))
            ->getQuery()
            ->getResult();
    }

    /**
     * @param string $url
     * @return ?Match
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function findByUrl(string $url): ?Match
    {
        return $this->createQueryBuilder('m')
            ->orderBy('m.start_at', 'ASC')
            ->andWhere('m.url like :url')
            ->setParameter('url', $url)
            ->getQuery()
            ->setMaxResults(1)
            ->getOneOrNullResult();
    }

    /**
     * @return Match[]
     */
    public function findMatches(): array
    {
        /** @var Match[] $matches */
        $matches = $this->createQueryBuilder('m')
            ->orderBy('m.start_at', 'ASC')
            ->getQuery()
            ->getResult();


        $results = [];
        foreach ($matches as $match) {
            /** @var Match $match */
            if ($match->getScore1() < 2 && $match->getScore2() < 2) {
                $results[] = $match;
            }
        }

        return $results;
    }

    /**
     * @return Match[]
     */
    public function findResults(): array
    {
        $date = new \DateTime();
        $from = (new \DateTime($date->format("Y-m-d") . " 23:59:59"))->modify('-7 day');
        $to = $date->format("Y-m-d") . " 23:59:59";

        $matches = $this->createQueryBuilder('m')
            ->orderBy('m.start_at', 'ASC')
            ->andWhere('m.start_at BETWEEN :from AND :to')
            ->setParameter('from', $from)
            ->setParameter('to', $to)
            ->getQuery()
            ->getResult();

        return $matches;
    }

    /**
     * @return array
     * @throws \Exception
     */
    public function findMatchesNotEnded(): array
    {
        $date = new \DateTime();
        $from = $date;
        $to = (new \DateTime($date->format("Y-m-d") . " 23:59:59"))->modify('+1 week');

        $matches = $this->createQueryBuilder('m')
            ->orderBy('m.start_at', 'ASC')
            ->andWhere('m.start_at BETWEEN :from AND :to')
            ->orWhere('m.live LIKE :live')
            ->setParameter('from', $from)
            ->setParameter('to', $to)
            ->setParameter('live', 1)
            ->getQuery()
            ->getResult();


        $results = [];
        foreach ($matches as $match) {
            /** @var Match $match */
            if ($match->getScore1() < 2 && $match->getScore2() < 2) {
                $results[] = $match;
            }
        }

        return $results;
    }

    /**
     * @param \Datetime $date
     * @return mixed
     * @throws \Exception
     */
    public function findMatchesByDate(\Datetime $date)
    {
        $from = new \DateTime($date->format("Y-m-d") . " 00:00:00");
        $to = new \DateTime($date->format("Y-m-d") . " 23:59:59");

        /** @var Match[] $matches */
        $matches = $this->createQueryBuilder('m')
            ->andWhere('m.start_at >= :from')
            ->andWhere('m.start_at <= :to')
            ->setParameter('from', $from)
            ->setParameter('to', $to)
            ->getQuery()
            ->getResult();

        return $matches;
    }

    /**
     * @param \Datetime $date
     * @return mixed
     * @throws \Exception
     */
    public function findMatchesByDay(\Datetime $date)
    {
        $from = (new \DateTime($date->format("Y-m-d") . " 00:00:00"));
        $to = (new \DateTime($date->format("Y-m-d") . " 23:59:59"));

        $matches = $this->createQueryBuilder('m')
            ->orderBy('m.start_at', 'ASC')
            ->andWhere('m.start_at BETWEEN :from AND :to')
            ->setParameter('from', $from)
            ->setParameter('to', $to)
            ->getQuery()
            ->getResult();

        return $matches;

    }

    /**
     * @param $team1
     * @param $team2
     * @param $url
     * @return mixed
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function getByData($team1, $team2, $url)
    {
        $match = $this->createQueryBuilder('m')
            ->where("m.team1_id = '$team1'")
            ->andWhere("m.team2_id = '$team2'")
            ->andWhere("m.url = '$url'")
            ->getQuery()
            ->setMaxResults(1)
            ->getOneOrNullResult();

        return $match;
    }

    /**
     * @return array
     */
    public function getMatchesWhereEmptyTeams(): array
    {
        /** @var Match[] $matches */
        $matches = $this->createQueryBuilder('m')
            ->where("m.team1_id is null or m.team2_id is null")
            ->getQuery()
            ->getResult();

        return $matches;
    }

    /**
     * @param \DateTime $startAt
     * @param $teams
     * @return mixed
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function findByStartAtAndTeams(\DateTime $startAt, $teams)
    {
        $team1Id = isset($teams[0]) ? $teams[0]->getId() : null;
        $team2Id = isset($teams[1]) ? $teams[1]->getId() : null;
        $startAt = $startAt->format('Y-m-d H:i:s');

        $match = $this->createQueryBuilder('m')
            ->where("m.start_at = '$startAt'")
            ->setParameter('team1_id', $team1Id)
            ->setParameter('team2_id', $team2Id)
            ->andWhere("m.team1_id = :team1_id")
            ->andWhere("m.team2_id = :team2_id")
            ->getQuery()
            ->setMaxResults(1)
            ->getOneOrNullResult();

        return $match;
    }

    /**
     * @param $filters
     * @param string $type
     * @return \Doctrine\ORM\QueryBuilder
     * @throws \Exception
     */
    public function getMatchesQueryByType($filters, string $type)
    {
        $date = new \DateTime();
        $date = $date->format("Y-m-d") . " 23:59:59";

        $query = $this->createQueryBuilder('m')
            ->orderBy('m.start_at', 'DESC');

        if ($type === MatchService::FUTURE_MATCHES) {
            $query->andWhere('m.start_at > :date')
                ->setParameter('date', $date);
        }
        if ($type === MatchService::LIVE_MATCHES) {
            $query->andWhere('m.live = :live')
                ->andWhere('m.start_at <= :date')
                ->setParameter('date', $date)
                ->setParameter('live', true);
        }
        if ($type === MatchService::PAST_MATCHES) {
            $query->andWhere('m.start_at < :date')
                ->setParameter('date', $date);
        }

        if (isset($filters->teamA)) {
            $query->andWhere('m.team1 = :teamA')
                ->setParameter('teamA', $filters->teamA);
        }

        if (isset($filters->teamB)) {
            $query->andWhere('m.team2 = :teamB')
                ->setParameter('teamB', $filters->teamB);
        }

        if (!empty($filters->dateFrom)) {
            $from = new \DateTime("$filters->dateFrom 00:00:00");
            $query->andWhere('m.start_at >= :dateFrom')
                ->setParameter('dateFrom', $from);
        }
        if (!empty($filters->dateTo)) {
            $to = new \DateTime("$filters->dateTo 23:59:59");
            $query->andWhere('m.start_at <= :dateTo')
                ->setParameter('dateTo', $to);
        }
        return $query;
    }

    /**
     * @param $dateFrom
     * @param $dateTo
     * @param $teamA
     * @param $teamB
     * @param string $type
     * @param int $page
     * @param int $length
     * @return array|mixed
     * @throws \Exception
     */
    public function getMatchesByType(
        $filters,
        string $type,
        ?int $page = 0,
        ?int $length = 20
    )
    {
        $result = [];

        if (in_array($type, MatchService::MATCH_TYPES, false)) {
            $query = $this->getMatchesQueryByType(
                $filters,
                $type
            )->setFirstResult($page * $length)
                ->setMaxResults($length);

            $result = $query->getQuery()
                ->getResult();
        }
        return $result;
    }

    /**
     * @param Team|null $teamA
     * @param Team|null $teamB
     * @param $startedAt
     * @return array|mixed
     */
    public function getMeetingMatches(?Team $teamA, ?Team $teamB, $startedAt)
    {
        $matches = [];

        if (isset($teamA) and isset($teamB)) {
            $first = $this->createQueryBuilder('m')
                ->where('m.start_at < :startedAt')
                ->andWhere('m.team1 = :teamA')
                ->andWhere('m.team2 = :teamB')
                ->setParameter('teamA', $teamA)
                ->setParameter('teamB', $teamB)
                ->setParameter('startedAt', $startedAt)
                ->setMaxResults(5)
                ->getQuery()
                ->getResult();

            $second = $this->createQueryBuilder('m')
                ->where('m.start_at < :startedAt')
                ->andWhere('m.team1 = :teamB')
                ->andWhere('m.team2 = :teamA')
                ->setParameter('teamA', $teamA)
                ->setParameter('teamB', $teamB)
                ->setParameter('startedAt', $startedAt)
                ->setMaxResults(5 - (int)count($first))
                ->getQuery()
                ->getResult();

            foreach ($first as $match) {
                $matches[] = $match;
            }
            foreach ($second as $match) {
                $matches[] = $match;
            }
        }
        return $matches;
    }
}

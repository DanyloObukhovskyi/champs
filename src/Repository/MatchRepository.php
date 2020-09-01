<?php

namespace App\Repository;

use App\Entity\Match;
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
            ->getOneOrNullResult()
        ;
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
        foreach ($matches as $match)
        {
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
            ->andWhere('m.detail_info = 1')
            ->andWhere('m.url = :url')
            ->setParameter('url', $url)
            ->getQuery()
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
        foreach ($matches as $match)
        {
            /** @var Match $match */
            if($match->getScore1() < 2 && $match->getScore2() < 2)
            {
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
        /** @var Match[] $matches */
        $matches = $this->createQueryBuilder('m')
            ->orderBy('m.start_at', 'ASC')
            ->andWhere('m.start_at <= :date')
            ->andWhere('m.live = 0')
            ->setParameter('date', date('Y-m-d H:i:s'))
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
        $to   = (new \DateTime($date->format("Y-m-d")." 23:59:59"))->modify('+1 week');

        $matches = $this->createQueryBuilder('m')
            ->orderBy('m.start_at', 'ASC')
            ->andWhere('m.start_at BETWEEN :from AND :to')
            ->orWhere('m.live LIKE :live')
            ->setParameter('from', $from )
            ->setParameter('to', $to)
            ->setParameter('live', 1)
            ->getQuery()
            ->getResult();


        $results = [];
        foreach ($matches as $match)
        {
            /** @var Match $match */
            if($match->getScore1() < 2 && $match->getScore2() < 2)
            {
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
        $from = new \DateTime();
        $to   = (new \DateTime($date->format("Y-m-d")." 23:59:59"))->modify('+7 day');

        $matches = $this->createQueryBuilder('m')
            ->orderBy('m.start_at', 'ASC')
            ->andWhere('m.start_at BETWEEN :from AND :to')
            ->setParameter('from', $from )
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
        $from = (new \DateTime($date->format("Y-m-d")." 00:00:00"));
        $to   = (new \DateTime($date->format("Y-m-d")." 23:59:59"));

        $matches = $this->createQueryBuilder('m')
            ->orderBy('m.start_at', 'ASC')
            ->andWhere('m.start_at BETWEEN :from AND :to')
            ->setParameter('from', $from )
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
    public function findByStartAtAndTeams(\DateTime $startAt, array $teams)
    {
        $team1Id = isset($teams[0]) ? $teams[0]->getId(): null;
        $team2Id = isset($teams[1]) ? $teams[1]->getId(): null;
        $startAt = $startAt->format('Y-m-d H:i:s');

        $match = $this->createQueryBuilder('m')
            ->where("m.start_at = '$startAt'")
            ->setParameter('team1_id', $team1Id )
            ->setParameter('team2_id', $team2Id)
            ->andWhere("m.team1_id = :team1_id")
            ->andWhere("m.team2_id = :team2_id")
            ->getQuery()
            ->getOneOrNullResult();

        return $match;
    }
}

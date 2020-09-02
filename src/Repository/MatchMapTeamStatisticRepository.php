<?php

namespace App\Repository;

use App\Entity\Map;
use App\Entity\Match;
use App\Entity\MatchMapTeamStatistic;
use App\Entity\Team;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method MatchMapTeamStatistic|null find($id, $lockMode = null, $lockVersion = null)
 * @method MatchMapTeamStatistic|null findOneBy(array $criteria, array $orderBy = null)
 * @method MatchMapTeamStatistic[]    findAll()
 * @method MatchMapTeamStatistic[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MatchMapTeamStatisticRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, MatchMapTeamStatistic::class);
    }

    /**
     * @param Match $match
     * @param Team $team
     * @param Map $map
     * @return mixed
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function findByMatchTeamAndMap(Match $match, Team $team, Map $map)
    {
        return $this->createQueryBuilder('m')
            ->where('m.match_id = :match')
            ->andWhere('m.team_id = :team')
            ->andWhere('m.map_id = :map')
            ->setParameter('match', $match->getId())
            ->setParameter('team', $team->getId())
            ->setParameter('map', $map->getId())
            ->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult();
    }

    public function getMatchTeamStatistic(Match $match)
    {
        return $this->createQueryBuilder('m')
            ->where('m.match_id = :match')
            ->setParameter('match', $match->getId())
            ->getQuery()
            ->getResult();
    }
}

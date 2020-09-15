<?php

namespace App\Repository;

use App\Entity\PlayerStatistics;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\Query\Expr\Join;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method PlayerStatistics|null find($id, $lockMode = null, $lockVersion = null)
 * @method PlayerStatistics|null findOneBy(array $criteria, array $orderBy = null)
 * @method PlayerStatistics[]    findAll()
 * @method PlayerStatistics[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PlayerStatisticsRepository extends ServiceEntityRepository
{
    /**
     * PlayerStatisticsRepository constructor.
     * @param ManagerRegistry $registry
     */
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PlayerStatistics::class);
    }

    /**
     * @param $matchId
     * @return array
     */
    public function findByMatch($matchId): array
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.game_match = :match_id')
            ->setParameter('match_id', $matchId)
            ->getQuery()
            ->getResult();
    }

    /**
     * @param $matchId
     * @param $teamId
     * @return array
     */
    public function findByMatchTeam($matchId, $teamId): array
    {
        return $this->createQueryBuilder('p')
            ->leftJoin('App\Entity\Player', 'pl', Join::WITH, 'p.player = pl.id')
            ->andWhere('pl.team = :team_id')
            ->andWhere('p.game_match = :match_id')
            ->setParameters([
                'team_id' => $teamId,
                'match_id' => $matchId])
            ->getQuery()
            ->getResult();
    }

    /**
     * @param $matchId
     * @param $playerId
     * @return PlayerStatistics|null
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function getByMatchAndPlayerAndType($matchId, $playerId, $type): ?PlayerStatistics
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.game_match = :match_id AND p.player = :player_id')
            ->andWhere('p.type = :type')
            ->andWhere('p.mapId is null')
            ->setParameter('match_id', $matchId)
            ->setParameter('player_id', $playerId)
            ->setParameter('type', $type)
            ->getQuery()
            ->setMaxResults(1)
            ->getOneOrNullResult();
    }

    public function getByMatchAndPlayerAndTypeAndMap($matchId, $playerId, $type, $mapId): ?PlayerStatistics
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.game_match = :match_id AND p.player = :player_id')
            ->andWhere('p.type = :type')
            ->andWhere('p.mapId = :map_id')
            ->setParameter('map_id', $mapId)
            ->setParameter('match_id', $matchId)
            ->setParameter('player_id', $playerId)
            ->setParameter('type', $type)
            ->getQuery()
            ->setMaxResults(1)
            ->getOneOrNullResult();
    }
}

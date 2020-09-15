<?php

namespace App\Repository;

use App\Entity\MatchStatistics;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method MatchStatistics|null find($id, $lockMode = null, $lockVersion = null)
 * @method MatchStatistics|null findOneBy(array $criteria, array $orderBy = null)
 * @method MatchStatistics[]    findAll()
 * @method MatchStatistics[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MatchStatisticsRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, MatchStatistics::class);
    }

    /**
     * @param $matchId
     * @param $mapId
     * @return MatchStatistics|null
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function getByMatchAndMap($matchId, $mapId): ?MatchStatistics
    {
        return $this->createQueryBuilder('m')
            ->andWhere('m.game_match = :match_id')
            ->andWhere('m.map = :map_id')
            ->setParameter('match_id', $matchId)
            ->setParameter('map_id', $mapId)
            ->getQuery()
            ->setMaxResults(1)
            ->getOneOrNullResult()
        ;
    }

}

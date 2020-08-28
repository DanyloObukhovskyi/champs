<?php

namespace App\Repository;

use App\Entity\Match;
use App\Entity\PastMatch;
use App\Entity\Team;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method PastMatch|null find($id, $lockMode = null, $lockVersion = null)
 * @method PastMatch|null findOneBy(array $criteria, array $orderBy = null)
 * @method PastMatch[]    findAll()
 * @method PastMatch[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PastMatchRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PastMatch::class);
    }

    /**
     * @param Match $match
     * @param Match $pastMatch
     * @param Team $team
     * @return mixed
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function findByMatchPastMatchAndTeam(Match $match, Match $pastMatch, Team $team)
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.match_id = :match_id')
            ->andWhere('p.past_id = :past_id')
            ->andWhere('p.team_id = :team_id')
            ->setParameter('match_id', $match->getId())
            ->setParameter('past_id', $pastMatch->getId())
            ->setParameter('team_id', $team->getId())
            ->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult();
    }

    /**
     * @param Match $match
     * @param $pastMatch
     * @param Team $team
     * @return mixed
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function findMatch(Match $match, $pastMatch, Team $team)
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.match_id = :match_id')
            ->andWhere('p.team_two = :team_two')
            ->andWhere('p.team_id = :team_id')
            ->andWhere('p.score = :score')
            ->setParameter('match_id', $match->getId())
            ->setParameter('team_id', $team->getId())
            ->setParameter('score', $pastMatch['score'])
            ->setParameter('team_two', $pastMatch['team_two'])
            ->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult();
    }
}

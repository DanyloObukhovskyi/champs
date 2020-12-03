<?php

namespace App\Repository;

use App\Entity\GameRank;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method GameRank|null find($id, $lockMode = null, $lockVersion = null)
 * @method GameRank|null findOneBy(array $criteria, array $orderBy = null)
 * @method GameRank[]    findAll()
 * @method GameRank[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class GameRankRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, GameRank::class);
    }

    public function getByPoints($game, int $points)
    {
        return $this->createQueryBuilder('g')
            ->andWhere('g.pointsTo >= :points')
            ->orWhere('g.pointsTo is null')
            ->andWhere('g.pointsFrom <= :points')
            ->andWhere('g.game = :game')
            ->setParameter('points', $points)
            ->setParameter('game', $game)
            ->orderBy('g.id', 'ASC')
            ->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult();
    }

    // /**
    //  * @return GameRank[] Returns an array of GameRank objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('g')
            ->andWhere('g.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('g.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?GameRank
    {
        return $this->createQueryBuilder('g')
            ->andWhere('g.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}

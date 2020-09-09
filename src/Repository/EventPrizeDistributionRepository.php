<?php

namespace App\Repository;

use App\Entity\EventPrizeDistribution;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method EventPrizeDistribution|null find($id, $lockMode = null, $lockVersion = null)
 * @method EventPrizeDistribution|null findOneBy(array $criteria, array $orderBy = null)
 * @method EventPrizeDistribution[]    findAll()
 * @method EventPrizeDistribution[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class EventPrizeDistributionRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, EventPrizeDistribution::class);
    }

    public function findByTeamAndEvent($position, $event, $team)
    {
        return $this->createQueryBuilder('e')
            ->andWhere('e.position = :position')
            ->andWhere('e.event = :event')
            ->andWhere('e.team = :team')
            ->setParameter('position', $position)
            ->setParameter('event', $event)
            ->setParameter('team', $team)
            ->getQuery()
            ->getOneOrNullResult();
    }

    /*
    public function findOneBySomeField($value): ?EventPrizeDistribution
    {
        return $this->createQueryBuilder('e')
            ->andWhere('e.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}

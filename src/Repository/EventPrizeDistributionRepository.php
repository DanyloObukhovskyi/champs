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
        $eventPrize = $this->createQueryBuilder('e')
                ->andWhere('e.position = :position')
                ->andWhere('e.event = :event')
                ->setParameter('position', $position)
                ->setParameter('event', $event);

        if (isset($team)){
            $eventPrize = $eventPrize
                ->andWhere('e.team = :team')
                ->setParameter('team', $team);
        }
        return $eventPrize->getQuery()
            ->setMaxResults(1)
            ->getOneOrNullResult();
    }

    public function findByEvent($event)
    {
        return $this->createQueryBuilder('e')
            ->andWhere('e.event = :event')
            ->setParameter('event', $event)
            ->getQuery()
            ->getResult();
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

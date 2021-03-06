<?php

namespace App\Repository;

use App\Entity\Event;
use App\Entity\EventGroup;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method EventGroup|null find($id, $lockMode = null, $lockVersion = null)
 * @method EventGroup|null findOneBy(array $criteria, array $orderBy = null)
 * @method EventGroup[]    findAll()
 * @method EventGroup[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class EventGroupRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, EventGroup::class);
    }

    public function findByGroupAndTeamAndEvent($group, $team, $event)
    {
        return $this->createQueryBuilder('e')
            ->andWhere('e.groupName = :group')
            ->andWhere('e.team = :team')
            ->andWhere('e.event = :event')
            ->setParameter('event', $event)
            ->setParameter('team', $team)
            ->setParameter('group', $group)
            ->getQuery()
            ->setMaxResults(1)
            ->getOneOrNullResult();
    }

    public function findByEvent(Event $event)
    {
        return $this->createQueryBuilder('e')
            ->andWhere('e.event = :event')
            ->setParameter('event', $event)
            ->orderBy('e.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult();
    }
}

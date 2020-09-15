<?php

namespace App\Repository;

use App\Entity\Event;
use App\Entity\EventTeamAttending;
use App\Entity\Team;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method EventTeamAttending|null find($id, $lockMode = null, $lockVersion = null)
 * @method EventTeamAttending|null findOneBy(array $criteria, array $orderBy = null)
 * @method EventTeamAttending[]    findAll()
 * @method EventTeamAttending[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class EventTeamAttendingRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, EventTeamAttending::class);
    }

    public function findByEventAndTeam(Event $event, Team $team)
    {
        return $this->createQueryBuilder('e')
            ->andWhere('e.event = :event')
            ->andWhere('e.team = :team')
            ->setParameter('event', $event)
            ->setParameter('team', $team)
            ->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult();
    }

    public function findByEvent(Event $event)
    {
        return $this->createQueryBuilder('e')
            ->andWhere('e.event = :event')
            ->setParameter('event', $event)
            ->orderBy('e.number', 'ASC')
            ->getQuery()
            ->getResult();
    }
}

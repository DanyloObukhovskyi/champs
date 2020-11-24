<?php

namespace App\Repository;

use App\Entity\Event;
use App\Entity\EventBracket;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method EventBracket|null find($id, $lockMode = null, $lockVersion = null)
 * @method EventBracket|null findOneBy(array $criteria, array $orderBy = null)
 * @method EventBracket[]    findAll()
 * @method EventBracket[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class EventBracketRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, EventBracket::class);
    }

    public function findByEventAndTypeAndNameAndTeams($event, $type, $name, $team1, $team2)
    {
        return $this->createQueryBuilder('e')
            ->andWhere('e.event = :event')
            ->andWhere('e.type = :type')
            ->andWhere('e.name = :name')
            ->andWhere('e.team1 = :team1')
            ->andWhere('e.team2 = :team2')
            ->setParameter('event', $event)
            ->setParameter('type', $type)
            ->setParameter('name', $name)
            ->setParameter('team1', $team1)
            ->setParameter('team2', $team2)
            ->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult();
    }

    public function findByEvent(Event $event)
    {
        return $this->createQueryBuilder('e')
            ->andWhere('e.event = :event')
            ->setParameter('event', $event)
            ->orderBy('e.id', 'ASC')
            ->getQuery()
            ->getResult();
    }

    public function findByEventAndType(Event $event, $type)
    {
        return $this->createQueryBuilder('e')
            ->andWhere('e.event = :event')
            ->andWhere('e.type = :type')
            ->setParameter('event', $event)
            ->setParameter('type', $type)
            ->orderBy('e.id', 'ASC')
            ->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult();
    }

    // /**
    //  * @return EventBracket[] Returns an array of EventBracket objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('e')
            ->andWhere('e.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('e.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?EventBracket
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

<?php

namespace App\Repository;

use App\Entity\RelatedEvent;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method RelatedEvent|null find($id, $lockMode = null, $lockVersion = null)
 * @method RelatedEvent|null findOneBy(array $criteria, array $orderBy = null)
 * @method RelatedEvent[]    findAll()
 * @method RelatedEvent[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class RelatedEventRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, RelatedEvent::class);
    }

    public function findByEventAndRelated($event, $relatedEvent)
    {
        return $this->createQueryBuilder('r')
            ->andWhere('r.event = :event')
            ->andWhere('r.related = :related')
            ->setParameter('event', $event)
            ->setParameter('related', $relatedEvent)
            ->getQuery()
            ->getOneOrNullResult();
    }
    // /**
    //  * @return RelatedEvent[] Returns an array of RelatedEvent objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('r')
            ->andWhere('r.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('r.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?RelatedEvent
    {
        return $this->createQueryBuilder('r')
            ->andWhere('r.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}

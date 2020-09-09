<?php

namespace App\Repository;

use App\Entity\EventMapPool;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method EventMapPool|null find($id, $lockMode = null, $lockVersion = null)
 * @method EventMapPool|null findOneBy(array $criteria, array $orderBy = null)
 * @method EventMapPool[]    findAll()
 * @method EventMapPool[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class EventMapPoolRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, EventMapPool::class);
    }

    public function findByEventAndMap($event, $map)
    {
        return $this->createQueryBuilder('e')
            ->andWhere('e.event = :event')
            ->andWhere('e.map = :map')
            ->setParameter('event', $event)
            ->setParameter('map', $map)
            ->getQuery()
            ->getOneOrNullResult();
    }

    // /**
    //  * @return EventMapPool[] Returns an array of EventMapPool objects
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
}

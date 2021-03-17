<?php

namespace App\Repository;

use App\Entity\EventStream;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method EventStream|null find($id, $lockMode = null, $lockVersion = null)
 * @method EventStream|null findOneBy(array $criteria, array $orderBy = null)
 * @method EventStream[]    findAll()
 * @method EventStream[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class EventStreamRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, EventStream::class);
    }

    // /**
    //  * @return EventStream[] Returns an array of EventStream objects
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
    public function findOneBySomeField($value): ?EventStream
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

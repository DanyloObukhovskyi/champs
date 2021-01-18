<?php

namespace App\Repository;

use App\Entity\InvitePrize;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method InvitePrize|null find($id, $lockMode = null, $lockVersion = null)
 * @method InvitePrize|null findOneBy(array $criteria, array $orderBy = null)
 * @method InvitePrize[]    findAll()
 * @method InvitePrize[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class InvitePrizeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, InvitePrize::class);
    }

    // /**
    //  * @return InvitePrize[] Returns an array of InvitePrize objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('i')
            ->andWhere('i.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('i.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?InvitePrize
    {
        return $this->createQueryBuilder('i')
            ->andWhere('i.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}

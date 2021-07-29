<?php

namespace App\Repository;

use App\Entity\AttrTypes;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method AttrTypes|null find($id, $lockMode = null, $lockVersion = null)
 * @method AttrTypes|null findOneBy(array $criteria, array $orderBy = null)
 * @method AttrTypes[]    findAll()
 * @method AttrTypes[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class AttrTypesRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, AttrTypes::class);
    }

    // /**
    //  * @return AttrTypes[] Returns an array of AttrTypes objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('a.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?AttrTypes
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}

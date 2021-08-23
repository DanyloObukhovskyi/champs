<?php

namespace App\Repository;

use App\Entity\BlogTypes;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method BlogTypes|null find($id, $lockMode = null, $lockVersion = null)
 * @method BlogTypes|null findOneBy(array $criteria, array $orderBy = null)
 * @method BlogTypes[]    findAll()
 * @method BlogTypes[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class BlogTypesRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, BlogTypes::class);
    }

    // /**
    //  * @return BlogTypes[] Returns an array of BlogTypes objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('b')
            ->andWhere('b.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('b.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?BlogTypes
    {
        return $this->createQueryBuilder('b')
            ->andWhere('b.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}

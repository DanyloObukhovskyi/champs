<?php

namespace App\Repository;

use App\Entity\NewsBookmark;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method NewsBookmark|null find($id, $lockMode = null, $lockVersion = null)
 * @method NewsBookmark|null findOneBy(array $criteria, array $orderBy = null)
 * @method NewsBookmark[]    findAll()
 * @method NewsBookmark[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class NewsBookmarkRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, NewsBookmark::class);
    }

    // /**
    //  * @return NewsBookmark[] Returns an array of NewsBookmark objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('n')
            ->andWhere('n.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('n.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?NewsBookmark
    {
        return $this->createQueryBuilder('n')
            ->andWhere('n.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}

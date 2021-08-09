<?php

namespace App\Repository;

use App\Entity\BlogPayment;
use App\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method BlogPayment|null find($id, $lockMode = null, $lockVersion = null)
 * @method BlogPayment|null findOneBy(array $criteria, array $orderBy = null)
 * @method BlogPayment[]    findAll()
 * @method BlogPayment[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class BlogPaymentRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, BlogPayment::class);
    }

    // /**
    //  * @return BlogPayment[] Returns an array of BlogPayment objects
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
    public function findOneBySomeField($value): ?BlogPayment
    {
        return $this->createQueryBuilder('b')
            ->andWhere('b.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */


    /**
     * @param User $user
     * @param \DateTime $dateTime
     * @return int|mixed|string
     */
    public function getByUserAndPaymentDateFrom(User $user, \DateTime $dateTime)
    {
        return $this->createQueryBuilder('l')
            ->andWhere('l.user = :user')
            ->andWhere('l.datetime <= :dateFrom')
            ->setParameter('user', $user)
            ->setParameter('dateFrom', $dateTime)
            ->getQuery()
            ->getResult();
    }

    /**
     * @param User $trainer
     * @param \DateTime $dateFrom
     * @param \DateTime $dateTo
     * @return int|mixed|string
     */
    public function getByUserAndPeriod(User $user, \DateTime $dateFrom, \DateTime $dateTo)
    {
        return $this->createQueryBuilder('l')
            ->andWhere('l.user = :user')
            ->andWhere('l.datetime >= :dateFrom')
            ->andWhere('l.datetime <= :dateTo')
            ->setParameter('user', $user)
            ->setParameter('dateFrom', $dateFrom)
            ->setParameter('dateTo', $dateTo)
            ->getQuery()
            ->getResult();
    }
}

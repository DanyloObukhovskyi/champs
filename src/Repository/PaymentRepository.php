<?php

namespace App\Repository;

use App\Entity\Payment;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Payment|null find($id, $lockMode = null, $lockVersion = null)
 * @method Payment|null findOneBy(array $criteria, array $orderBy = null)
 * @method Payment[]    findAll()
 * @method Payment[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PaymentRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Payment::class);
    }

    public function findNotPayedByLessonsIds($lessonsIds)
    {
        return $this->createQueryBuilder('p')
            ->andWhere("p.lesson_id IN (:lessonsIds)")
            ->setParameter('lessonsIds', $lessonsIds)
            ->andWhere("p.payment_status = 0")
            ->orderBy('p.id', 'DESC')
            ->getQuery()
            ->getResult();
    }

    public function findByLessonId($id)
    {
        return $this->createQueryBuilder('p')
            ->andWhere("p.lesson_id = :id")
            ->setParameter('id', $id)
            ->getQuery()
            ->getOneOrNullResult();
    }

    // /**
    //  * @return Payment[] Returns an array of Payment objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('p.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Payment
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}

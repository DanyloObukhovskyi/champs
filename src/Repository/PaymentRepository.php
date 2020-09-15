<?php

namespace App\Repository;

use App\Entity\Payment;
use Carbon\Carbon;
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
            ->setMaxResults(1)
            ->getOneOrNullResult();
    }

    public function getPaymentWithinThirtyMinutes()
    {
        $time = (new \DateTime())->modify('-30 minutes');

        return $this->createQueryBuilder('p')
            ->andWhere("p.updated_at <= :time")
            ->setParameter('time', $time)
            ->getQuery()
            ->getResult();
    }
}

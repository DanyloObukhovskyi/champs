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
    /**
     * PaymentRepository constructor.
     * @param ManagerRegistry $registry
     */
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Payment::class);
    }

    /**
     * @param $lessonsIds
     * @return int|mixed|string
     */
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

    /**
     * @param $id
     * @return int|mixed|string|null
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function findByLessonId($id)
    {
        return $this->createQueryBuilder('p')
            ->andWhere("p.lesson_id = :id")
            ->setParameter('id', $id)
            ->getQuery()
            ->setMaxResults(1)
            ->getOneOrNullResult();
    }

    /**
     * @return int|mixed|string
     */
    public function getPaymentWithinThirtyMinutes()
    {
        $time = (new \DateTime())->modify('-30 minutes');

        return $this->createQueryBuilder('p')
            ->andWhere("p.updated_at <= :time")
            ->setParameter('time', $time)
            ->getQuery()
            ->getResult();
    }

    /**
     * @param array $ids
     * @return int|mixed|string
     */
    public function findByIds(array $ids)
    {
        return $this->createQueryBuilder('p')
            ->andWhere("p.id IN(:ids)")
            ->orderBy('p.created_at', 'DESC')
            ->setParameter('ids', $ids)
            ->getQuery()
            ->getResult();
    }
}

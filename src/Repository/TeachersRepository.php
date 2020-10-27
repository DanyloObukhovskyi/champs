<?php

namespace App\Repository;

use App\Entity\Teachers;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Teachers|null find($id, $lockMode = null, $lockVersion = null)
 * @method Teachers|null findOneBy(array $criteria, array $orderBy = null)
 * @method Teachers[]    findAll()
 * @method Teachers[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TeachersRepository extends ServiceEntityRepository
{
    /**
     * TeachersRepository constructor.
     * @param ManagerRegistry $registry
     */
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Teachers::class);
    }

    /**
     * @param $value
     * @return mixed
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function findByUserId($value)
    {
        return $this->createQueryBuilder('l')
            ->andWhere('l.userid = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult();
    }

    /**
     * @param $value
     * @return mixed
     */
    public function findEntityByUserId($value)
    {
        $fields = ["l.cost", "l.about", "l.videolink", "l.shorttitle", "l.method"];

        return $this->createQueryBuilder('l')
//            ->select($fields)
            ->andWhere('l.userid = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getResult()
            ;
    }

    /**
     * @param $cost
     * @return mixed
     */
    public function findWithCostLessThan($cost)
    {
        return $this->createQueryBuilder('l')
            ->andWhere('l.cost < :val')
            ->setParameter('val', $cost)
            ->getQuery()
            ->getResult()
            ;

    }
}

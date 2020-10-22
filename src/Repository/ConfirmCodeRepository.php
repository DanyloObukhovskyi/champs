<?php

namespace App\Repository;

use App\Entity\ConfirmCode;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method ConfirmCode|null find($id, $lockMode = null, $lockVersion = null)
 * @method ConfirmCode|null findOneBy(array $criteria, array $orderBy = null)
 * @method ConfirmCode[]    findAll()
 * @method ConfirmCode[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ConfirmCodeRepository extends ServiceEntityRepository
{
    /**
     * ConfirmCodeRepository constructor.
     * @param ManagerRegistry $registry
     */
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ConfirmCode::class);
    }

    /**
     * @param string $email
     * @return mixed
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function getLastCodeByMail(string $email)
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.email = :email')
            ->setParameter('email', $email)
            ->orderBy('c.id', 'DESC')
            ->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult();
    }
}

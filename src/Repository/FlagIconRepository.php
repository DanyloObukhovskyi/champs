<?php

namespace App\Repository;

use App\Entity\FlagIcon;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method FlagIcon|null find($id, $lockMode = null, $lockVersion = null)
 * @method FlagIcon|null findOneBy(array $criteria, array $orderBy = null)
 * @method FlagIcon[]    findAll()
 * @method FlagIcon[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class FlagIconRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, FlagIcon::class);
    }

    public function getFlagByOrigName($name): ?FlagIcon
    {
        return $this->createQueryBuilder('f')
            ->andWhere('f.origName like :name')
            ->setParameter('name', $name)
            ->getQuery()
            ->setMaxResults(1)
            ->getOneOrNullResult()
        ;
    }
}

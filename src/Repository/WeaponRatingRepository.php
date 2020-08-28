<?php

namespace App\Repository;

use App\Entity\WeaponRating;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method WeaponRating|null find($id, $lockMode = null, $lockVersion = null)
 * @method WeaponRating|null findOneBy(array $criteria, array $orderBy = null)
 * @method WeaponRating[]    findAll()
 * @method WeaponRating[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class WeaponRatingRepository extends ServiceEntityRepository
{
    /**
     * WeaponRatingRepository constructor.
     * @param ManagerRegistry $registry
     */
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, WeaponRating::class);
    }

    /**
     * @param string $name
     * @return mixed
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function findByName(string $name)
    {
        return $this->createQueryBuilder('w')
            ->andWhere('w.name = :name')
            ->setParameter('name', $name)
            ->getQuery()
            ->getOneOrNullResult();
    }
}

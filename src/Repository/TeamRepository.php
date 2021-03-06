<?php

namespace App\Repository;

use App\Entity\Team;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Team|null find($id, $lockMode = null, $lockVersion = null)
 * @method Team|null findOneBy(array $criteria, array $orderBy = null)
 * @method Team[]    findAll()
 * @method Team[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TeamRepository extends ServiceEntityRepository
{
    /**
     * TeamRepository constructor.
     * @param ManagerRegistry $registry
     */
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Team::class);
    }

    /**
     * @param $name
     * @return Team|null
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function getByName($name): ?Team
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.name like :name')
            ->setParameter('name', "%$name%")
            ->getQuery()
            ->setMaxResults(1)
            ->getOneOrNullResult();
    }

    /**
     * @param $name
     * @return mixed
     */
    public function findByName($name)
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.name like :name')
            ->setParameter('name', "%$name%")
            ->getQuery()
            ->getResult();
    }
}

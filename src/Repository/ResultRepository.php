<?php

namespace App\Repository;

use App\Entity\Result;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Result|null find($id, $lockMode = null, $lockVersion = null)
 * @method Result|null findOneBy(array $criteria, array $orderBy = null)
 * @method Result[]    findAll()
 * @method Result[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ResultRepository extends ServiceEntityRepository
{
    /**
     * ResultRepository constructor.
     * @param ManagerRegistry $registry
     */
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Result::class);
    }

    /**
     * @return Result[]|array
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function getCurrent(): array
    {
        /** @var Result[] $results */
        $results = $this->createQueryBuilder('r')
            ->orderBy('r.createdAt', 'DESC')
            ->andWhere('r.createdAt is not null')
            ->setMaxResults(5)
            ->getQuery()
            ->getResult();

        return $results;
    }
}

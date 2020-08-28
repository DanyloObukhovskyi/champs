<?php

namespace App\Repository;

use App\Entity\MatchMap;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method MatchMap|null find($id, $lockMode = null, $lockVersion = null)
 * @method MatchMap|null findOneBy(array $criteria, array $orderBy = null)
 * @method MatchMap[]    findAll()
 * @method MatchMap[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MatchMapRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, MatchMap::class);
    }
}

<?php

namespace App\Repository;

use App\Entity\Stream;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Stream|null find($id, $lockMode = null, $lockVersion = null)
 * @method Stream|null findOneBy(array $criteria, array $orderBy = null)
 * @method Stream[]    findAll()
 * @method Stream[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class StreamRepository extends ServiceEntityRepository
{
    /**
     * StreamRepository constructor.
     * @param ManagerRegistry $registry
     */
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Stream::class);
    }


    /**
     * @param $matchId
     * @param $name
     * @return Stream|null
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function getByName($matchId, $name): ?Stream
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.game_match = :matchId')
            ->andWhere('s.name = :name')
            ->setParameter(':matchId', $matchId)
            ->setParameter(':name', $name)
            ->getQuery()
            ->setMaxResults(1)
            ->getOneOrNullResult()
        ;
    }

}

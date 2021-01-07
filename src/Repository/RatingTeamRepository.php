<?php

namespace App\Repository;

use App\Entity\RatingTeam;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method RatingTeam|null find($id, $lockMode = null, $lockVersion = null)
 * @method RatingTeam|null findOneBy(array $criteria, array $orderBy = null)
 * @method RatingTeam[]    findAll()
 * @method RatingTeam[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class RatingTeamRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, RatingTeam::class);
    }

    /**
     * @param int $teamId
     * @return RatingTeam
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function findByTeamId(int $teamId)
    {
        /** @var RatingTeam $ratingTeam */
        $ratingTeam = $this->createQueryBuilder('r')
            ->where("r.teamId = $teamId")
            ->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult();

        return $ratingTeam;
    }

    public function getRatingTeams()
    {
        /** @var RatingTeam[] $ratingTeams */
        $ratingTeams = $this->createQueryBuilder('r')
            ->orderBy('r.createdAt', 'DESC')
            ->andWhere('r.createdAt is not null')
            ->setMaxResults(5)
            ->getQuery()
            ->getResult();

        return $ratingTeams;
    }
}

<?php

namespace App\Repository;

use App\Entity\Player;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\Query\Expr\Join;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Player|null find($id, $lockMode = null, $lockVersion = null)
 * @method Player|null findOneBy(array $criteria, array $orderBy = null)
 * @method Player[]    findAll()
 * @method Player[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PlayerRepository extends ServiceEntityRepository
{
    /**
     * PlayerRepository constructor.
     * @param ManagerRegistry $registry
     */
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Player::class);
    }

    /**
     * @param $personId
     * @return Player|null
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function getByPersonId($personId): ?Player
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.person = :person_id')
            ->setParameter('person_id', $personId)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }

    /**
     * @param $teamId
     * @param $nick
     * @return Player|null
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function getByTeamAndNick($teamId, $nick): ?Player
    {
        return $this->createQueryBuilder('pl')
            ->leftJoin('App\Entity\Person', 'pr', Join::WITH, 'pr.id = pl.person')
            ->andWhere('pl.team = :team_id AND pr.nick = :nick')
            ->setParameters([
                'team_id' => $teamId,
                'nick' => $nick])
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }

}

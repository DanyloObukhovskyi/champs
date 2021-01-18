<?php

namespace App\Repository;

use App\Entity\Invite;
use App\Entity\MvpTeam;
use App\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Invite|null find($id, $lockMode = null, $lockVersion = null)
 * @method Invite|null findOneBy(array $criteria, array $orderBy = null)
 * @method Invite[]    findAll()
 * @method Invite[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class InviteRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Invite::class);
    }

    public function findByTeamAndToken(MvpTeam $team, string $token)
    {
        $dateNow = new \DateTime();

        return $this->createQueryBuilder('i')
            ->andWhere('i.team = :team')
            ->andWhere('i.token = :token')
            ->andWhere('i.availableAt >= :date')
            ->setParameter('team', $team)
            ->setParameter('token', $token)
            ->setParameter('date', $dateNow)
            ->getQuery()
            ->getOneOrNullResult();
    }

    /**
     * @param User $user
     * @return int|mixed|string
     */
    public function getCabinetInvite(User $user)
    {
        $date = new \DateTime();

        return $this->createQueryBuilder('i')
            ->andWhere('i.type = :type')
            ->andWhere('i.user = :user')
            ->andWhere('i.availableAt >= :date')
            ->setParameter('type', Invite::LOGIN_TYPE)
            ->setParameter('user', $user)
            ->setParameter('date', $date)
            ->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult();
    }

    /**
     * @param string $token
     * @return int|mixed|string|null
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function findByToken(string $token)
    {
        $date = new \DateTime();

        return $this->createQueryBuilder('i')
            ->andWhere('i.availableAt >= :date')
            ->andWhere('i.token = :token')
            ->setParameter('date', $date)
            ->setParameter('token', $token)
            ->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult();
    }

    // /**
    //  * @return Invite[] Returns an array of Invite objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('i')
            ->andWhere('i.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('i.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Invite
    {
        return $this->createQueryBuilder('i')
            ->andWhere('i.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}

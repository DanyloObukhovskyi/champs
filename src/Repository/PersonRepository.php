<?php

namespace App\Repository;

use App\Entity\Person;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Person|null find($id, $lockMode = null, $lockVersion = null)
 * @method Person|null findOneBy(array $criteria, array $orderBy = null)
 * @method Person[]    findAll()
 * @method Person[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PersonRepository extends ServiceEntityRepository
{

    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Person::class);
    }

    /**
     * @param $nick
     * @return Person|null
     */
    public function getByNick($nick): ?Person
    {
        try
        {
            $query = $this->createQueryBuilder('p')
                ->andWhere('p.nick = :nick')
                ->setParameter('nick', $nick)
                ->getQuery()
                ->getOneOrNullResult();
        }
        catch (\Exception $e)
        {
            return null;
        }

        return $query;
    }

    /**
     * @param $name
     * @param $nick
     * @return Person|null
     */
    public function getByNameAndNick($name, $nick): ?Person
    {
        try
        {
            $query = $this->createQueryBuilder('p')
                ->andWhere('p.name = :name')
                ->andWhere('p.nick = :nick')
                ->setParameter('name', $name)
                ->setParameter('nick', $nick)
                ->getQuery()
                ->getOneOrNullResult();
        }
        catch (\Exception $e)
        {
            return null;
        }

        return $query;
    }

    /**
     * @return mixed
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function getWeekPlayer()
    {
        $weekPlayer = $this->createQueryBuilder('p')
            ->andWhere('p.isWeekPlayer = true')
            ->getQuery()
            ->getOneOrNullResult();

        return $weekPlayer;
    }
}

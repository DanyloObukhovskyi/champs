<?php

namespace App\Repository;

use App\Entity\RatingPerson;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method RatingPerson|null find($id, $lockMode = null, $lockVersion = null)
 * @method RatingPerson|null findOneBy(array $criteria, array $orderBy = null)
 * @method RatingPerson[]    findAll()
 * @method RatingPerson[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class RatingPersonRepository extends ServiceEntityRepository
{
    /**
     * RatingPersonRepository constructor.
     * @param ManagerRegistry $registry
     */
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, RatingPerson::class);
    }

    /**
     * @param int $personId
     * @return RatingPerson|null
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function findByPersonId(int $personId)
    {
        /** @var RatingPerson $ratingPerson */
        $ratingPerson =  $this->createQueryBuilder('r')
            ->where("r.personId = $personId")
            ->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult();

        return $ratingPerson;
    }

    public function getRatingPersons()
    {
        /** @var RatingPerson $events */
        $ratingPerson = $this->createQueryBuilder('r')
            ->orderBy('r.id', 'DESC')
            ->where('r.createdAt is not null')
            ->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult();

        if (isset($ratingPerson)){
            $createdAt = $ratingPerson->getCreatedAt();
            /** @var RatingPerson[] $ratingPersons */
            $ratingPersons = $this->createQueryBuilder('e')
                ->where("e.createdAt = '$createdAt'")
                ->orderBy('e.id', 'ASC')
                ->getQuery()
                ->getResult();

            return $ratingPersons;
        }
        return [];
    }
}

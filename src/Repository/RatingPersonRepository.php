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

    public function update($person, $rating)
    {

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
}

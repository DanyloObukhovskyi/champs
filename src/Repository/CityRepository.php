<?php

namespace App\Repository;

use App\Entity\City;
use App\Entity\Country;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method City|null find($id, $lockMode = null, $lockVersion = null)
 * @method City|null findOneBy(array $criteria, array $orderBy = null)
 * @method City[]    findAll()
 * @method City[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CityRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, City::class);
    }

    public function findByCountry(Country $country, $search)
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.country = :country')
            ->andWhere('c.nameRu like :search')
            ->setParameter('search', "%$search%")
            ->setParameter('country', $country)
            ->orderBy('c.id', 'ASC')
            ->getQuery()
            ->getResult();
    }
}

<?php

namespace App\Repository;

use App\Entity\MarketplaceBanner;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method MarketplaceBanner|null find($id, $lockMode = null, $lockVersion = null)
 * @method MarketplaceBanner|null findOneBy(array $criteria, array $orderBy = null)
 * @method MarketplaceBanner[]    findAll()
 * @method MarketplaceBanner[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MarketplaceBannerRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, MarketplaceBanner::class);
    }

    public function getBannersGameDistinct()
    {
        $banners = $this->findAll();

        $bannersByGame = [];

        /** @var MarketplaceBanner $banner */
        foreach ($banners as $banner) {
            $bannersByGame[$banner->getGame()->getId()] = $banner;
        }
        $banners = [];
        foreach ($bannersByGame as $banner) {
            $banners[] = $banner;
        }

        return $banners;
    }

    // /**
    //  * @return MarketplaceBanner[] Returns an array of MarketplaceBanner objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('m')
            ->andWhere('m.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('m.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?MarketplaceBanner
    {
        return $this->createQueryBuilder('m')
            ->andWhere('m.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}

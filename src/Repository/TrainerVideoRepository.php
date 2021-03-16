<?php

namespace App\Repository;

use App\Entity\Teachers;
use App\Entity\TrainerVideo;
use App\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method TrainerVideo|null find($id, $lockMode = null, $lockVersion = null)
 * @method TrainerVideo|null findOneBy(array $criteria, array $orderBy = null)
 * @method TrainerVideo[]    findAll()
 * @method TrainerVideo[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TrainerVideoRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TrainerVideo::class);
    }

    public function getByTrainer(Teachers $trainer)
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.trainer = :trainer')
            ->setParameter('trainer', $trainer)
            ->orderBy('t.id', 'ASC')
            ->getQuery()
            ->getResult();
    }

    public function getByTrainerAndVideo(Teachers $trainer, $video)
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.trainer = :trainer')
            ->andWhere('t.videoUrl = :videoUrl')
            ->setParameter('trainer', $trainer)
            ->setParameter('videoUrl', $video)
            ->orderBy('t.id', 'ASC')
            ->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult();
    }

    // /**
    //  * @return TrainerVideo[] Returns an array of TrainerVideo objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('t.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?TrainerVideo
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}

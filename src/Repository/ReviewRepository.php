<?php

namespace App\Repository;

use App\Entity\Review;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Review|null find($id, $lockMode = null, $lockVersion = null)
 * @method Review|null findOneBy(array $criteria, array $orderBy = null)
 * @method Review[]    findAll()
 * @method Review[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ReviewRepository extends ServiceEntityRepository
{
    /**
     * ReviewRepository constructor.
     * @param ManagerRegistry $registry
     */
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Review::class);
    }

    /**
     * @param $value
     * @return array
     */
    public function findRateByTrainerId($value): array
    {
        $fields = [
            "l.id",
            "l.rate",
            "IDENTITY(l.student)",
            "l.comment",
            "l.createdAt"
        ];

        $query = $this->createQueryBuilder('l')
            ->select($fields)
            ->andWhere('l.trainer = :val')
            ->setParameter('val', $value)
            ->leftJoin("l.student", "p")
            ->addSelect("p.photo", "p.name", "p.family")
            ->leftJoin("l.lesson", "o")
            ->addSelect("o.dateTimeFrom", "o.dateTimeTo")
            ->getQuery();

        return $query->getResult();
    }

    /**
     * @param $features
     * @return mixed
     */
    public function findForRecommendations($features)
    {
        $query = $this->createQueryBuilder('l')
            ->andWhere('l.lesson > 0');

        if ($features['tactics']) {
            $query->orWhere('l.tactics = 1');
        }
        if ($features['scatter']) {
            $query->orWhere('l.scatter = 1');
        }
        if ($features['aim']) {
            $query->orWhere('l.aim = 1');
        }
        if ($features['mentor']) {
            $query->orWhere('l.mentor = 1');
        }
        if ($features['duel']) {
            $query->orWhere('l.duel = 1');
        }

        return $query
            ->getQuery()
            ->getResult();
    }

    /**
     * @param $lesson
     * @param $trainer
     * @param $student
     * @return mixed
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function findByLessonAndTrainerAndStudent($lesson, $trainer, $student)
    {
        $query = $this->createQueryBuilder('l')
            ->andWhere('l.lesson = :lesson')
            ->andWhere('l.trainer = :trainer')
            ->andWhere('l.student = :student')
            ->setParameter('lesson', $lesson)
            ->setParameter('trainer', $trainer)
            ->setParameter('student', $student)
            ->getQuery()
            ->setMaxResults(1)
            ->getOneOrNullResult();

        return $query;
    }


}

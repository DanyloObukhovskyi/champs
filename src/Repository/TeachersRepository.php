<?php

namespace App\Repository;

use App\Entity\Teachers;
use App\Entity\TrainerLessonPrice;
use App\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\Query\ResultSetMapping;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Teachers|null find($id, $lockMode = null, $lockVersion = null)
 * @method Teachers|null findOneBy(array $criteria, array $orderBy = null)
 * @method Teachers[]    findAll()
 * @method Teachers[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TeachersRepository extends ServiceEntityRepository
{
    /**
     * TeachersRepository constructor.
     * @param ManagerRegistry $registry
     */
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Teachers::class);
    }

    /**
     * @param $value
     * @return mixed
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function findByUserId($value)
    {
        return $this->createQueryBuilder('l')
            ->andWhere('l.userid = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult();
    }

    /**
     * @param $value
     * @return mixed
     */
    public function findEntityByUserId($value)
    {
        $fields = ["l.cost", "l.about", "l.videolink", "l.shorttitle", "l.method"];

        return $this->createQueryBuilder('l')
//            ->select($fields)
            ->andWhere('l.userid = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getResult();
    }

    /**
     * @param $cost
     * @return mixed
     */
    public function findWithCostLessThan($cost)
    {
        return $this->createQueryBuilder('l')
            ->andWhere('l.cost < :val')
            ->setParameter('val', $cost)
            ->getQuery()
            ->getResult();

    }

    /**
     * @param $filters
     * @param $game
     * @return \Doctrine\ORM\QueryBuilder
     * @throws \Doctrine\DBAL\Driver\Exception
     * @throws \Doctrine\DBAL\Exception
     */
    public function getTrainers($filters, $game, $offset)
    {
        $users = $this->getEntityManager()
            ->getRepository(User::class)
            ->findByGameAndNick($game, $filters['search']);

        $userIds = [];
        foreach ($users as $user) {
            $userIds[$user->getId()] = $user->getId();
        }

        $trainers = $this->createQueryBuilder('t')
            ->where('t.userid IN(:ids)')
            ->andWhere('t.is_active = 1')
            ->setParameter('ids', $userIds)
            ->getQuery()
            ->getResult();

        $orderByWorkout = [];

        if ($filters['workout'] !== 'all') {
            /** @var Teachers $trainer */
            foreach ($trainers as $trainer) {
                /** @var TrainerLessonPrice $cost */
                foreach ($trainer->getCosts() as $cost) {
                    if ($cost->getIsActive() and $cost->getLessonType() === $filters['workout']) {
                        $orderByWorkout[$cost->getPrice()][] = $trainer;
                    }
                }
            }
        } else {
            foreach ($trainers as $trainer) {
                $sumCost = 0;
                /** @var TrainerLessonPrice $cost */
                foreach ($trainer->getCosts() as $cost) {
                    $sumCost += $cost->getPrice();
                }
                $orderByWorkout[$sumCost][] = $trainer;
            }
        }
        ksort($orderByWorkout);

        if (!$filters['isExpensive']) {
            $orderByWorkout = array_reverse($orderByWorkout);
        }
        $trainers = [];

        foreach ($orderByWorkout as $orderByWorkoutTrainers) {
            foreach ($orderByWorkoutTrainers as $trainer) {
                $trainers[] = $trainer;
            }
        }
        return array_slice($trainers, $offset, $_ENV['TRAINERS_ON_PAGE']);
    }
}

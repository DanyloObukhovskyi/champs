<?php

namespace App\Repository;

use App\Entity\Lessons;
use App\Entity\LessonsPayment;
use App\Entity\Payment;
use App\Service\LessonService;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Lessons|null find($id, $lockMode = null, $lockVersion = null)
 * @method Lessons|null findOneBy(array $criteria, array $orderBy = null)
 * @method Lessons[]    findAll()
 * @method Lessons[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class LessonsRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Lessons::class);
    }

    /**
     * @param \Datetime $date
     * @return mixed
     * @throws \Exception
     */
    public function getByDate(\Datetime $date)
    {
        $from = new \DateTime($date->format("Y-m-d")." 00:00:00");
        $to   = new \DateTime($date->format("Y-m-d")." 23:59:59");

        $qb = $this->createQueryBuilder("e");
        $qb
            ->andWhere('e.dateTimeFrom BETWEEN :from AND :to')
            ->setParameter('from', $from )
            ->setParameter('to', $to)
        ;
        $result = $qb->getQuery()->getResult();

        return $result;
    }

    /**
     * @param $value
     * @return mixed
     */
    public function findByStudentId($value)
    {
        $lessons = $this->createQueryBuilder('l')
            ->andWhere('l.student = :student')
            ->setParameter('student', $value)
            ->orderBy('l.dateTimeFrom', 'DESC')
            ->getQuery()
            ->getResult();

        $paymentLessons = [];

        $lessonService = new LessonService($this->getEntityManager());

        /** @var Lessons $lesson */
        foreach ($lessons as $lesson)
        {
            $isPayed = $lessonService->checkIsLessonPayed($lesson);
            $isPayed = true;
            if ($isPayed){
                $paymentLessons[] = $lesson;
            }
        }
        return $paymentLessons;
    }

    /**
     * @param $value
     * @return mixed
     */
    public function findByTrainerId($value)
    {
        $lessons = $this->createQueryBuilder('l')
            ->andWhere('l.trainer = :trainer')
            ->setParameter('trainer', $value)
            ->orderBy('l.dateTimeFrom', 'DESC')
            ->getQuery()
            ->getResult();

        $paymentLessons = [];

        $lessonService = new LessonService($this->getEntityManager());

        /** @var Lessons $lesson */
        foreach ($lessons as $lesson)
        {
            $isPayed = $lessonService->checkIsLessonPayed($lesson);
            $isPayed = true;
            if ($isPayed){
                $paymentLessons[] = $lesson;
            }
        }
        return $paymentLessons;
    }

    /**
     * @param int $student_id
     * @param \Datetime $date
     * @return mixed
     * @throws \Exception
     */
    public function findByStudentAndDate(int $student_id, \Datetime $date)
    {
        $from = new \DateTime($date->format("Y-m-d")." 00:00:00");
        $to   = new \DateTime($date->format("Y-m-d")." 23:59:59");

        $qb = $this->createQueryBuilder("e");
        $qb
            ->andWhere('e.dateTimeFrom BETWEEN :from AND :to')
            ->setParameter('from', $from )
            ->setParameter('to', $to)
            ->andWhere('e.student = :val')
            ->setParameter('val', $student_id)
        ;
        $result = $qb->getQuery()->getResult();

        return $result;
    }

    /**
     * @param int $trainer_id
     * @param \Datetime $date
     * @return mixed
     * @throws \Exception
     */
    public function findByTrainerAndDate(int $trainer_id, \Datetime $date)
    {
        $from = new \DateTime($date->format("Y-m-d")." 00:00:00");
        $to   = new \DateTime($date->format("Y-m-d")." 23:59:59");

        $qb = $this->createQueryBuilder("e");
        $qb
            ->andWhere('e.dateTimeFrom BETWEEN :from AND :to')
            ->setParameter('from', $from )
            ->setParameter('to', $to)
            ->andWhere('e.trainer = :val')
            ->setParameter('val', $trainer_id)
        ;
        $result = $qb->getQuery()->getResult();

        return $result;

    }

    /**
     * @param int $trainer_id
     * @param \Datetime $date
     * @return mixed
     * @throws \Exception
     */
    public function findByTrainerAndDateWeek(int $trainer_id, \Datetime $date)
    {
        $from = new \DateTime($date->format("Y-m-d")." 00:00:00");
        $to   = new \DateTime($date->format("Y-m-d")." 23:59:59");
        $to->modify('+1 week');

        $qb = $this->createQueryBuilder("e");
        $qb
            ->andWhere('e.dateTimeFrom BETWEEN :from AND :to')
            ->setParameter('from', $from )
            ->setParameter('to', $to)
            ->andWhere('e.trainer = :val')
            ->setParameter('val', $trainer_id)
        ;
        $result = $qb->getQuery()->getResult();

        return $result;

    }

    /**
     * @param $value
     * @return mixed
     * @throws \Doctrine\ORM\NoResultException
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function findCountByTrainerId($value)
    {
        return $this->createQueryBuilder('l')
            ->select('count(l.id)')
            ->andWhere('l.trainer = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getSingleScalarResult();
    }

    /**
     * @param $value
     * @return mixed
     * @throws \Doctrine\ORM\NoResultException
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function findCountByStudentId($value)
    {
        return $this->createQueryBuilder('l')
            ->select('count(l.id)')
            ->andWhere('l.student = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getSingleScalarResult();
    }

    /**
     * @param $trainer
     * @param $student
     * @return mixed
     * @throws \Doctrine\ORM\NoResultException
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function findCountByTrainerAndStudent($trainer, $student)
    {
        return $this->createQueryBuilder('l')
            ->select('count(l.id)')
            ->andWhere('l.trainer = :trainer')
            ->andWhere('l.student  = :student')
            ->setParameter('trainer', $trainer)
            ->setParameter('student', $student)
            ->getQuery()
            ->getSingleScalarResult();
    }

    /**
     * @param $teacher
     * @param $datetime
     * @return mixed
     */
    public function getByTeacherAndDate($teacher, $datetime)
    {
        return $this->createQueryBuilder('l')
            ->andWhere('l.trainer = :teacher')
            ->andWhere('l.datetime = :datetime')
            ->setParameter('teacher', $teacher)
            ->setParameter('datetime', $datetime)
            ->getQuery()
            ->getResult();
    }

    /**
     * @param $ids
     * @return mixed
     */
    public function findByIds($ids)
    {
        return $this->createQueryBuilder('l')
            ->andWhere('l.id in (:ids)')
            ->setParameter('ids', $ids)
            ->getQuery()
            ->getResult();
    }

    /**
     * @param $trainer
     * @param $user
     * @return mixed
     */
    public function getEndedLessonsByTrainerAndUser($trainer, $user)
    {
        return $this->createQueryBuilder('l')
            ->andWhere('l.trainer = :teacher')
            ->andWhere('l.student = :user')
            ->andWhere('l.student_status = 1')
            ->andWhere('l.trainer_status = 1')
            ->setParameter('teacher', $trainer)
            ->setParameter('user', $user)
            ->getQuery()
            ->getResult();
    }

    public function getNotNoticedLessons()
    {
        $date = new \DateTime();
        $date->modify('+5 minutes');

        return $this->createQueryBuilder('l')
            ->where('l.dateTimeTo >= :date')
            ->andWhere('l.isNotice is null')
            ->setParameter('date', $date)
            ->getQuery()
            ->getResult();
    }
}

<?php


namespace App\Service;


use App\Entity\Schledule;
use App\Repository\SchleduleRepository;

class ScheduleService extends EntityService
{
    protected $entity = Schledule::class;

    /** @var SchleduleRepository */
    protected $repository;

    /**
     * @param int $teacherId
     * @param string $date
     * @return mixed
     */
    public function findByTrainerAndDate(int $teacherId, string $date)
    {
        return $this->repository->findByTrainerAndDate($teacherId, $date);
    }

    /**
     * @param Schledule $schedule
     * @param $time
     * @param int $value
     * @return Schledule|null
     * @throws \Doctrine\ORM\ORMException
     * @throws \Doctrine\ORM\OptimisticLockException
     */
    public function setTime(Schledule $schedule, $time, int $value)
    {
        switch ((int)$time)
        {
            case 10:
                $schedule->setTime1011($value);
                break;
            case 11:
                $schedule->setTime1112($value);
                break;
            case 12:
                $schedule->setTime1213($value);
                break;
            case 13:
                $schedule->setTime1314($value);
                break;
            case 14:
                $schedule->setTime1415($value);
                break;
            case 15:
                $schedule->setTime1516($value);
                break;
            case 16:
                $schedule->setTime1617($value);
                break;
            case 17:
                $schedule->setTime1718($value);
                break;
            default:
                return null;
        }

        $this->entityManager->persist($schedule);
        $this->entityManager->flush();

        return $schedule;
    }
}
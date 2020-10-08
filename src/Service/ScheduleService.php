<?php


namespace App\Service;


use App\Entity\Schedule;
use App\Repository\ScheduleRepository;

class ScheduleService extends EntityService
{
    protected $entity = Schedule::class;

    /** @var ScheduleRepository */
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
     * @param $userId
     * @param $dateFrom
     * @param bool $isLessonCost
     * @return array
     * @throws \Exception
     */
    public function createWeek($userId, $dateFrom)
    {
        $from = new \DateTime($dateFrom->format("Y-m-d"));
        $hours = 24;

        $schedules = [];
        for ($i = 0; $i < 7; $i++)
        {
            $schedulesEntities = $this->repository->findByTrainerAndDate($userId, $from->format("Y-m-d"));

            $scheduleCollect = [];
            for ($k = 0; $k < $hours; $k++)
            {
                $timeFrom = $k < 10 ? "0$k" : $k;
                $timeTo = $k + 1 < 10 ? "0".($k + 1) : $k + 1;
                $time = "time". $timeFrom. "_". $timeTo;

                $scheduleCollect[$time] = 0;

                /** @var Schedule $schedule */
                foreach ($schedulesEntities as $schedule)
                {
                    if ($schedule->getTime() === $k){
                        $scheduleCollect[$time] = $schedule->getStatus();
                    }
                }
            }
            $scheduleCollect['date'] = $from->format("Y-m-d");

            $schedules[] = $scheduleCollect;
            $from = $from->modify('+1 day');
        }
        return $schedules;
    }

    /**
     * @param $trainer
     * @param $date
     * @param $time
     * @param $status
     * @return mixed
     */
    public function update($trainer, $date, $time, $status)
    {
        $schedule = $this->getByTrainerDateAndTime($trainer, $date, $time);

        if (empty($schedule))
        {
            /** @var Schedule $schedule */
            $schedule = new $this->entity;
            $schedule->setTrainer($trainer);
            $schedule->setDate($date);
            $schedule->setTime($time);
        }
        $schedule->setStatus($status);

        return $this->save($schedule);
    }

    /**
     * @param $trainer
     * @param $date
     * @param $time
     * @return mixed
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function getByTrainerDateAndTime($trainer, $date, $time)
    {
        return $this->repository->getByTrainerDateAndTime($trainer, $date, $time);
    }

    /**
     * @param Schedule $schedule
     * @param $status
     * @return mixed
     */
    public function setScheduleStatus(Schedule $schedule, $status)
    {
        /** @var Schedule $schedule */
        $schedule->setStatus($status);

        return $this->save($schedule);
    }
}
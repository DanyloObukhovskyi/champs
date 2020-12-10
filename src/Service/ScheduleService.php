<?php


namespace App\Service;


use App\Entity\Schedule;
use App\Entity\User;
use App\Repository\ScheduleRepository;
use Carbon\Carbon;
use Doctrine\ORM\EntityManagerInterface;

class ScheduleService extends EntityService
{
    protected $entity = Schedule::class;

    /** @var ScheduleRepository */
    protected $repository;

    protected $timezoneService;

    public function __construct(EntityManagerInterface $entityManager)
    {
        parent::__construct($entityManager);

        $this->timezoneService = new TimeZoneService();
    }

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
     * @param $date
     * @param int $timeOffset
     * @param bool $isStudent
     * @return array
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function createDay($userId, $date, int $timeOffset, bool $isStudent = false)
    {
        $trainer = $this->entityManager
            ->getRepository(User::class)
            ->find($userId);

        $date = new \DateTime($date->format("Y-m-d"));
        $hours = 24;

        $carbonDayDate = Carbon::createFromFormat(
            "Y-m-d",
            $date->format("Y-m-d")
        );
        $carbonDayDate->setHour( 0 - $timeOffset);
        $carbonDayDate->setMinutes(0);

        $schedules = [];
        for ($i = 0; $i < $hours; $i++)
        {
            $scheduleDayDate = Carbon::createFromFormat(
                "Y-m-d",
                $date->format("Y-m-d")
            );
            $scheduleDayDate->setHour($i);
            $scheduleDayDate->setMinutes(0);

            /** @var Schedule $scheduleEntity */
            $scheduleEntity = $this->repository
                ->getByTrainerDateAndTime(
                    $trainer,
                    $carbonDayDate->format("Y-m-d"),
                    $carbonDayDate->hour
                );
            if (isset($scheduleEntity)){
                $carbonNow = Carbon::now();
                $carbonNow->addHour($_ENV['LIMITING_BOOKING_LESSON']);

                if (((int)$carbonNow->timestamp - (int)$carbonDayDate->timestamp) > 0 and $isStudent){
                    $status = 0;
                } else {
                    $status = $scheduleEntity->getStatus();
                }
                $schedules[] = [
                    'date' => $scheduleEntity->getDate(),
                    'time' => $scheduleDayDate->hour,
                    'status' => $status
                ];
            } else {
                $schedules[] = [
                    'date' => $scheduleDayDate->format("Y-m-d"),
                    'time' => $scheduleDayDate->hour,
                    'status' => 0
                ];
            }
            $carbonDayDate->addHour(1);
        }

        $scheduleCollect = [];
        foreach ($schedules as $schedule){
            $timeFrom = $schedule['time'] < 10 ? "0".$schedule['time'] : $schedule['time'];
            $timeTo = $schedule['time'] + 1 < 10 ? "0".($schedule['time'] + 1) : $schedule['time'] + 1;
            $time = "time". $timeFrom. "_". $timeTo;

            $scheduleCollect[$time] = $schedule['status'];
        }
        $scheduleCollect['date'] = $date->format("Y-m-d");

        return $scheduleCollect;
    }

    /**
     * @param $userId
     * @param $dateFrom
     * @param bool $isStudent
     * @return array
     * @throws \Exception
     */
    public function createWeek($userId, $dateFrom, $isStudent = false)
    {
        $from = new \DateTime($dateFrom->format("Y-m-d"));

        $carbonNow = Carbon::now();
        $carbonNow->addHour($_ENV['LIMITING_BOOKING_LESSON']);

        $schedules = [];
        for ($i = 0; $i < 7; $i++)
        {
            $schedules[] = $this->createDay($userId, $from, $isStudent);
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
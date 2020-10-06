<?php


namespace App\Service;


use App\Entity\Lessons;
use App\Entity\LessonsPayment;
use App\Entity\LessonTime;
use App\Entity\Payment;
use App\Entity\Schedule;
use App\Entity\Teachers;
use App\Entity\User;
use App\Repository\LessonsRepository;
use Carbon\Carbon;
use Doctrine\ORM\EntityManagerInterface;

class LessonService extends EntityService
{
    protected $entity = Lessons::class;

    /**
     * @var LessonsRepository
     */
    protected $repository;

    /**
     * @var ScheduleService
     */
    protected $scheduleService;

    /**
     * @var ImageService
     */
    protected $imageService;

    /**
     * @var TeacherService
     */
    protected $teacherService;

    public function __construct(EntityManagerInterface $entityManager)
    {
        parent::__construct($entityManager);

        $this->scheduleService = new ScheduleService($entityManager);
        $this->imageService = new ImageService();
        $this->teacherService = new TeacherService($entityManager);
    }

    /**
     * @param $teacher
     * @param $datetime
     * @return mixed
     */
    public function getByTeacherAndDate($teacher, $datetime)
    {
        return $this->repository->getByTeacherAndDate($teacher, $datetime);
    }

    /**
     * @param $teacherId
     * @param $userId
     * @return mixed
     */
    public function getEndedLessonsByTrainerAndUser($teacherId, $userId)
    {
        return $this->repository->getEndedLessonsByTrainerAndUser($teacherId, $userId);
    }

    /**
     * @param $lessons
     * @return array
     */
    public function decorationLessonsForPayed($lessons)
    {
        $orderedLessons = [];
        foreach ($lessons as $lesson)
        {
            $lesson->time = (int)explode(':',  $lesson->time)[0];
            $orderedLessons[$lesson->date][] = $lesson;
        }

        $orderedLessonsStepTwo = [];
        foreach ($orderedLessons as $data => $lessons)
        {
            $orderLessons = [];
            foreach ($lessons as $index => $lesson)
            {
                if (empty($orderLessons))
                {
                    $orderLessons[] = $lesson;
                } else {
                    $lastLesson = end($orderLessons);

                    if ($lastLesson->time + 1 === $lesson->time)
                    {
                        $orderLessons[] = $lesson;
                    } else {
                        $orderedLessonsStepTwo[$data][] = $orderLessons;

                        $orderLessons = [$lesson];
                    }
                }
                if ($index + 1 === count($lessons))
                {
                    $orderedLessonsStepTwo[$data][] = $orderLessons;
                }
            }
        }
        return $orderedLessonsStepTwo;
    }

    /**
     * @param array $lessonsCollection
     * @param $trainer
     * @param $user
     * @return array
     * @throws \Exception
     */
    public function createLessons(array $lessonsCollection, $trainer, $user)
    {
        $lessonIds = [];
        $bookedTime = [];

        foreach ($lessonsCollection as $date => $lessons)
        {
            foreach ($lessons as $lessonTimes)
            {
                if (isset($trainer) and isset($user) and !empty($lessonTimes))
                {
                    $timeFrom = $lessonTimes[0]->time;
                    $timeTo = end($lessonTimes)->time + 1;

                    $dateFrom = new Carbon((string)$date );
                    $dateFrom = $dateFrom->setHour($timeFrom);

                    $dateTo = new Carbon((string)$date);
                    $dateTo = $dateTo->setHour($timeTo);


                    $lesson = new Lessons();
                    /** @var Teachers $trainerEntity */
                    $trainerEntity = $this->entityManager->getRepository(Teachers::class)
                        ->findByUserId($trainer->getId());

                    $lessonsCount = count($lessonTimes);

                    if ($trainerEntity->getIsLessonCost())
                    {
                        $lessonsCount = (int)$lessonsCount / Lessons::LESSON_HOURS;
                    }

                    $lesson->setStudent($user);
                    $lesson->setTrainer($trainer);
                    $lesson->setCost($trainerEntity->getCost() * $lessonsCount);
                    $lesson->setStatus(Lessons::STATUS_NEW);
                    $lesson->setDateTimeFrom($dateFrom);
                    $lesson->setDateTimeTo($dateTo);
                    $lesson->setStudentStatus(0);
                    $lesson->setTrainerStatus(0);

                    $this->save($lesson);

                    foreach ($lessonTimes as $lessonTime)
                    {
                        $time = (int)explode(':',  $lessonTime->time)[0];
                        $date = new Carbon($lessonTime->date);

                        /** @var Schedule $schedule */
                        $schedule = $this->scheduleService->getByTrainerDateAndTime($trainer, $date, $time);

                        $lessonTime = new LessonTime();
                        $lessonTime->setLesson($lesson);
                        $lessonTime->setTrainerTime($schedule);

                        $this->save($lessonTime);

                        $schedule->setStatus(Schedule::TIME_STATUS_RESERVED);
                        $this->save($schedule);
                    }

                    $lessonIds[] = $lesson->getId();

                    $bookedTime[$lesson->getDateTimeTo()->format('Y-m-d')][] = [
                        'day' => $lesson->getDateTimeTo()->format('Y-m-d'),
                        'from' => $timeFrom,
                        'to' => $timeTo,
                        'cost' => $lesson->getCost()
                    ];
                }
            }
        }
        return [$lessonIds, $bookedTime];
    }

    /**
     * @param $lessons
     * @return array
     */
    public function lessonsDecoratorForCabinet($lessons)
    {
        $result = [];
        /** @var Lessons $lesson */
        foreach ($lessons as $lesson)
        {
            $result[] = $this->lessonDecorator($lesson);
        }
        return $result;
    }

    /**
     * @param Lessons $lesson
     * @return array
     * @throws \Doctrine\ORM\NoResultException
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function lessonDecorator(Lessons $lesson)
    {
        [$timeFrom, $timeTo] = $this->getLessonTimes($lesson);
        $userData = $this->getLessonPerson($lesson->getStudent());

        $trainer = $this->teacherService->findByUserId($lesson->getTrainer()->getId());
        $trainerData = $this->getLessonPerson($lesson->getTrainer(), true);

        $trainerData['training'] = $this->repository
            ->findCountByTrainerAndStudent(
                $lesson->getTrainer(),
                $lesson->getStudent()
            );
        $trainerData['cost'] = $trainer->getCost();

        /** @var Lessons $lesson */
        return [
            'id' => $lesson->getId(),
            'timeFrom' => $timeFrom,
            'timeTo' => $timeTo,
            'dateTimeFrom' => $lesson->getDateTimeFrom(),
            'dateTimeTo' => $lesson->getDateTimeTo(),
            'cost' => $lesson->getCost(),
            'student' => $userData,
            'trainer' => $trainerData,
            'studentStatus' => $lesson->getStudentStatus(),
            'trainerStatus' => $lesson->getTrainerStatus(),
            'status' => $lesson->getStatus(),
            'reviewIsset' => $lesson->getReview() === null ? false : true,
            'trainerDiscord' => $lesson->getTrainer()->getDiscord()
        ];
    }

    /**
     * @param Lessons $lesson
     * @return array
     */
    public function getLessonTimes(Lessons $lesson)
    {
        $timeFrom = $lesson->getDateTimeFrom()->format('H');
        $timeTo   = empty($lesson->getDateTimeTo()) ? null : $lesson->getDateTimeTo()->format('H');
        if (empty($timeTo))
        {
            $timeTo = $lesson->getDateTimeFrom()->modify('+1 hour')->format('H');
        }

        return [$timeFrom, $timeTo];
    }

    /**
     * @param User $user
     * @param bool $isTrainer
     * @return array
     * @throws \Doctrine\ORM\NoResultException
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function getLessonPerson(User $user, $isTrainer = false)
    {
        $this->imageService->setImage($user->getPhoto());
        $photo = $this->imageService->getImagePath();

        if ($isTrainer){
            $lessonsCount = $this->repository
                ->findCountByTrainerId($user->getId());
        } else {
            $lessonsCount = $this->repository
                ->findCountByStudentId($user->getId());
        }

        return  [
            'id' => $user->getId(),
            'email' => $user->getEmail(),
            'istrainer' => $user->getIsTrainer(),
            'nickname' => $user->getNickname(),
            'photo' => $photo,
            'name' => $user->getName(),
            'family' => $user->getFamily(),
            'game' => $user->getGame(),
            'rank' => $user->getRank(),
            'discord' => $user->getDiscord(),
            'trainingAll' => $lessonsCount,
        ];
    }

    /**
     * @param Lessons $lesson
     * @return bool
     */
    public function checkIsLessonPayed(Lessons $lesson)
    {
        $isPayment = false;

        /** @var LessonsPayment $lessonPayment */
        $lessonPayment = $this->entityManager->getRepository(LessonsPayment::class)
            ->findBy(['lesson' => $lesson]);
        $lessonPayment = $lessonPayment[0] ?? null;

        if (isset($lessonPayment)){
            $paymentStatus = $lessonPayment->getPayment()->getPaymentStatus();

            if ($paymentStatus === 1)
            {
                $isPayment = true;
            }
        } else {
            /** @var Payment $payment */
            $payment = $this->entityManager->getRepository(Payment::class)
                ->findBy(['lesson_id' => $lesson->getId()]);
            $payment = $payment[0] ?? null;

            if (isset($payment)){
                if ($payment->getPaymentStatus() === 1)
                {
                    $isPayment = true;
                }
            }
        }
        return $isPayment;
    }

    /**
     * @param $ids
     * @return mixed
     */
    public function getLessonsByIds($ids)
    {
        return $this->repository->findByIds($ids);
    }
}
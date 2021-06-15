<?php


namespace App\Service;


use App\Entity\Lessons;
use App\Entity\LessonsPayment;
use App\Entity\LessonTime;
use App\Entity\Payment;
use App\Entity\Review;
use App\Entity\Schedule;
use App\Entity\Teachers;
use App\Entity\TrainerLessonPrice;
use App\Entity\User;
use App\Repository\LessonsRepository;
use App\Service\ReviewService;
use Carbon\Carbon;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Validator\Constraints\DateTime;


class LessonService extends EntityService
{
    protected $entity = Lessons::class;

    /**
     * @var ReviewService
     */
    public $reviewService;

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

    /**
     * @var TimeZoneService
     */
    protected $timezoneService;

    /**
     * @var UserService
     */
    protected $userService;

    public function __construct(EntityManagerInterface $entityManager)
    {
        parent::__construct($entityManager);

        $this->imageService = new ImageService();
        $this->timezoneService = new TimeZoneService();

        $this->scheduleService = new ScheduleService($entityManager);
        $this->teacherService = new TeacherService($entityManager);
        $this->userService = new UserService($entityManager);

        $this->reviewService = new ReviewService($entityManager);
    }

    /**
     * @param $teacher
     * @param $datetime
     * @param null $count
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
        foreach ($lessons as $lesson) {
            $lesson = (object)$lesson;
            $lesson->time = (int)explode(':', $lesson->time)[0];
            $orderedLessons[$lesson->date][] = $lesson;
        }

        $orderedLessonsStepTwo = [];
        foreach ($orderedLessons as $data => $lessons) {
            $orderLessons = [];
            foreach ($lessons as $index => $lesson) {
                $lesson = (object)$lesson;
                if (empty($orderLessons)) {
                    $orderLessons[] = $lesson;
                } else {
                    $lastLesson = end($orderLessons);

                    if ($lastLesson->time + 1 === $lesson->time) {
                        $orderLessons[] = $lesson;
                    } else {
                        $orderedLessonsStepTwo[$data][] = $orderLessons;

                        $orderLessons = [$lesson];
                    }
                }
                if ($index + 1 === count($lessons)) {
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
     * @param null $type
     * @return array
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function createLessons(array $lessonsCollection, $trainer, $user, $type = null)
    {
        $lessonIds = [];
        $bookedTime = [];

        foreach ($lessonsCollection as $date => $lessons) {
            foreach ($lessons as $lessonTimes) {
                if (isset($trainer) and isset($user) and !empty($lessonTimes)) {
                    $timeFrom = $lessonTimes[0]->time;
                    $timeTo = end($lessonTimes)->time + 1;

                    $dateFrom = new Carbon((string)$date);
                    $dateFrom = $dateFrom->setHour($timeFrom);

                    $dateTo = new Carbon((string)$date);
                    $dateTo = $dateTo->setHour($timeTo);


                    $lesson = new Lessons();
                    /** @var Teachers $trainerEntity */
                    $trainerEntity = $this->entityManager
                        ->getRepository(Teachers::class)
                        ->findByUserId($trainer->getId());

                    $lessonsCount = count($lessonTimes);

                    if ($trainerEntity->getIsLessonCost()) {
                        $lessonsCount = (int)$lessonsCount;
                    }
                    $lessonCost = 0;
                    /** @var TrainerLessonPrice $cost */
                    foreach ($trainerEntity->getCosts() as $cost) {
                        if ($cost->getLessonType() === $type) {
                            $lessonCost = $cost->getPrice();
                        }
                    }
                    $percentageMarkup = !empty($trainerEntity->getAdminPercentage()) ?
                        $trainerEntity->getAdminPercentage():
                        $_ENV['PERCENTAGE_MARKUP_LESSON'];
                    if (isset($percentageMarkup)) {
                        $cost = abs(((($lessonCost * $lessonsCount) / 100) * $percentageMarkup) - ($lessonCost * $lessonsCount));
                    } else {
                        $cost = $lessonCost * $lessonsCount;
                    }

                    $lesson->setStudent($user);
                    $lesson->setTrainer($trainer);
                    $lesson->setType($type);
                    $lesson->setCost($lessonCost * $lessonsCount);
                    $lesson->setTrenerPrice($cost);
                    $lesson->setStatus(Lessons::STATUS_NEW);
                    $lesson->setDateTimeFrom($dateFrom);
                    $lesson->setDateTimeTo($dateTo);
                    $lesson->setStudentStatus(0);
                    $lesson->setTrainerStatus(0);

                    $this->save($lesson);

                    foreach ($lessonTimes as $lessonTime) {
                        $time = (int)explode(':', $lessonTime->time)[0];
                        $date = new Carbon($lessonTime->date);

                        /** @var Schedule $schedule */
                        $schedule = $this->scheduleService->getByTrainerDateAndTime($trainer, $date, $time);

                        $lessonTime = new LessonTime();
                        $lessonTime->setLesson($lesson);
                        $lessonTime->setTrainerTime($schedule);

                        $schedule->setStatus(Schedule::TIME_STATUS_RESERVED);
                        $this->save($lessonTime);
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
     * @param $timezone
     * @return array
     * @throws \Doctrine\ORM\NoResultException
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function lessonsDecoratorForCabinet($lessons, $timezone)
    {
        $result = [];
        /** @var Lessons $lesson */
        foreach ($lessons as $lesson) {
            $result[] = $this->lessonDecoratorForCabinet($lesson, $timezone);
        }
        return $result;
    }

    /**
     * @param Lessons $lesson
     * @param $timezone
     * @return array
     * @throws \Doctrine\ORM\NoResultException
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function lessonDecoratorForCabinet(Lessons $lesson, $timezone)
    {
        $userData = $this->getLessonPerson($lesson->getStudent());

        /** @var Teachers $trainer */
        $trainer = $this->teacherService->findByUserId($lesson->getTrainer()->getId());
        $trainerData = $this->getLessonPerson($lesson->getTrainer(), true);

        $trainerData['training'] = $this->repository
            ->findCountByTrainerAndStudent(
                $lesson->getTrainer(),
                $lesson->getStudent()
            );

        [$gmt, $gmtNumeric, $timeZone] = $this->timezoneService->getGmtTimezoneString(
            $trainer->getTimeZone() ?? Teachers::DEFAULT_TIMEZONE
        );
        if ($gmtNumeric < 0) {
            $trainerTimezone = -(int)gmdate("g", $gmtNumeric);
        } else {
            $trainerTimezone = (int)gmdate("g", $gmtNumeric);
        }
        $timeOffset = $trainerTimezone - (int)$timezone;

        $timeFrom = Carbon::createFromFormat('Y-m-d H:i:s', $lesson->getDateTimeFrom());
        $timeFrom->setHour($timeFrom->hour - $timeOffset);

        $timeTo = Carbon::createFromFormat('d.m.Y', $lesson->getDateTimeTo());
        $timeTo->setHour($timeTo->hour - $timeOffset);

        /** @var Lessons $lesson */
        return [
            'id' => $lesson->getId(),
            'timeFrom' => $timeFrom,
            'timeTo' => $timeTo,
            'dateTimeFrom' => $lesson->getDateTimeFrom(),
            'dateTimeTo' => $lesson->getDateTimeTo(),
            'cost' => $lesson->getCost(),
            'type' => $lesson->getType(),
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

        /** @var Lessons $lesson */
        return [
            'id' => $lesson->getId(),
            'timeFrom' => $timeFrom,
            'timeTo' => $timeTo,
            'dateTimeFrom' => $lesson->getDateTimeFrom(),
            'dateTimeTo' => $lesson->getDateTimeTo(),
            'cost' => $lesson->getCost(),
            'type' => $lesson->getType(),
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
        $timeTo = empty($lesson->getDateTimeTo()) ? null : $lesson->getDateTimeTo()->format('H');
        if (empty($timeTo)) {
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

        if ($isTrainer) {
            $lessonsCount = $this->repository
                ->findCountByTrainerId($user->getId());
        } else {
            $lessonsCount = $this->repository
                ->findCountByStudentId($user->getId());
        }

        return [
            'id' => $user->getId(),
            'email' => $user->getEmail(),
            'istrainer' => $user->getIsTrainer(),
            'nickname' => $user->getNickname(),
            'photo' => $photo,
            'name' => $user->getName(),
            'family' => $user->getFamily(),
            'game' => $user->getGame(),
            'rank' => $user->getRang(),
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

        if (isset($lessonPayment)) {
            $paymentStatus = $lessonPayment->getPayment()->getPaymentStatus();

            if ($paymentStatus === 1) {
                $isPayment = true;
            }
        } else {
            /** @var Payment $payment */
            $payment = $this->entityManager->getRepository(Payment::class)
                ->findBy(['lesson_id' => $lesson->getId()]);
            $payment = $payment[0] ?? null;

            if (isset($payment)) {
                if ($payment->getPaymentStatus() === 1) {
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

    /**
     * @param $id
     * @return Lessons|null
     */
    public function find($id)
    {
        return $this->repository->find($id);
    }

    /**
     * @param Lessons $lesson
     * @return mixed
     */
    public function setCanceled(Lessons $lesson)
    {
        $lesson->setStatus(1);
        $lesson->setIsCanceled(true);

        return $this->save($lesson);
    }

    /**
     * @return mixed
     * @throws \Exception
     */
    public function getNotNoticedLessons()
    {
        return $this->repository->getNotNoticedLessons();
    }

    /**
     * @param Lessons $lesson
     * @return mixed
     */
    public function setNoticed(Lessons $lesson)
    {
        $lesson->setIsNotice(true);

        return $this->save($lesson);
    }

    /**
     * @param Lessons $lesson
     * @return mixed
     * @throws \Doctrine\ORM\NoResultException
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function getTrainingTogetherCount(Lessons $lesson)
    {
        return $this->repository->getTrainingTogetherCount($lesson->getStudent(), $lesson->getTrainer());
    }

    /**
     * @param User $trainer
     * @param null $count
     * @return mixed
     */
    public function getFutureByTeacher(User $trainer, $count = null)
    {
        return $this->repository->getFutureByTeacher($trainer, $count);
    }

    /**
     * @param User $user
     * @param \DateTime $dateFrom
     * @param \DateTime $dateTo
     * @return mixed
     */
    public function getByTrainerAndPeriod(User $user, \DateTime $dateFrom, \DateTime $dateTo)
    {
        return $this->repository->getByTrainerAndPeriod($user, $dateFrom, $dateTo);
    }

    /**
     * @param User $trainer
     * @param Carbon $date
     * @return mixed
     * @throws \Exception
     */
    public function getTrainerEarnedLessonsByMonth(User $trainer, Carbon $date)
    {
        $currentDateFrom = new \DateTime($date->format('Y-m-d'));
        $currentDateTo = new \DateTime($date->endOfMonth()->format('Y-m-d'));

        $lessons = $this->getByTrainerAndPeriod(
            $trainer, $currentDateFrom, $currentDateTo
        );
        $earned = 0;

        /** @var Lessons $lesson */
        foreach ($lessons as $lesson) {
            /** @var Payment $payment */
            $payment = $lesson->getPayment();

            if (isset($payment) and $payment->getPaymentStatus() === Payment::STATUS_OK) {
                $earned += (int)$lesson->getTrenerPrice();
            }
        }
        return $earned;
    }

    /**
     * @param User $user
     * @return Lessons[]
     */
    public function getByTeacher(User $user)
    {
        return $this->repository->findBy([
            'trainer' => $user
        ]);
    }

    /**
     * @param User $trainer
     * @param \DateTime $dateTime
     * @return int|mixed|string
     */
    public function getByTrainerAndPaymentDateFrom(User $trainer, \DateTime $dateTime)
    {
        return $this->repository->getByTrainerAndPaymentDateFrom($trainer, $dateTime);
    }

    /**
     * @param Lessons $lesson
     * @param $user
     * @param $timezone
     * @param $translator
     * @return array
     * @throws \Doctrine\ORM\NoResultException
     * @throws \Doctrine\ORM\NonUniqueResultException
     * @throws \Doctrine\ORM\ORMException
     * @throws \Doctrine\ORM\OptimisticLockException
     */
    public function decorateLesson(Lessons $lesson, $user, $timezone = null, $translator)
    {
        $trainer = $lesson->getTrainer();

        $dateFrom = $lesson->getDateTimeFrom()->format('Y.m.d H');
        if (empty($lesson->getDateTimeTo())) {
            $dateTo = $lesson->getDateTimeFrom()->modify('+1 hour')->format('Y.m.d H');
        } else {
            $dateTo = $lesson->getDateTimeTo()->format('Y.m.d H');
        }

        $timeOffset = 0;

        if (!$user->getIsTrainer()) {
            [$gmt, $gmtNumeric, $timeZone] = $this->timezoneService->getGmtTimezoneString(
                $trainer->getTimeZone() ?? Teachers::DEFAULT_TIMEZONE
            );
            if ($gmtNumeric < 0) {
                $trainerTimezone = -(int)gmdate("g", $gmtNumeric);
            } else {
                $trainerTimezone = (int)gmdate("g", $gmtNumeric);
            }

            if ($trainerTimezone < 0 && $timezone < 0) {
                $timeOffset = $trainerTimezone + abs($timezone);
            } elseif($trainerTimezone < 0 || $timezone < 0) {
                $timeOffset = $trainerTimezone + $timezone;
            } else {
                $timeOffset = $trainerTimezone - $timezone;
            }
        }

        $dateFrom = $this->parseDateToUserTimezone($dateFrom, $timeOffset);
        $dateTo = $this->parseDateToUserTimezone($dateTo, $timeOffset);

        $trainingTogetherCount = $this->getTrainingTogetherCount($lesson);
        $decorateTrainer = $this->userService->decorator($lesson->getTrainer());

        $month = $translator->trans($dateFrom->format('F'));
        $isOver = false;
        if($dateFrom->format('Y.m.d H:i:s') < Carbon::now()->format('Y.m.d H:i:s')){
            $isOver = true;
        }
        $review = $this->entityManager->getRepository(Review::class)
            ->findBy(['lesson' => $lesson->getId()]);

        $reviewsData = $this->reviewService->reviewsDecoratorForOne($review, $timeOffset);

        $reviewDataExist = $reviewsData['reviewCount'] > 0 ? true : false;

        return [
            'id' => $lesson->getId(),
            'type' => $lesson->getType(),
            'cost' => $user->getIsTrainer() ? $this->getCostWithPercentage($lesson) : $this->getCostWithOutPercentage($lesson),
            'month' => $month,
            'costWithPercentage' => $user->getIsTrainer() ? $this->getCostWithPercentage($lesson) : $this->getCostWithOutPercentage($lesson),
            'studentPrice' => $this->getCostWithOutPercentage($lesson),
            'trainerNotice' => $lesson->getTrainerNotice(),
            'typeRu' => $translator->trans('trainings.titles.' . $lesson->getType()),
            'dateFrom' => $dateFrom->format('Y.m.d H:i:s'),
            'dateTo' => $dateTo->format('Y.m.d H:i:s'),
            'trainerStatus' => $lesson->getTrainerStatus(),
            'studentStatus' => $lesson->getStudentStatus(),
            'trainingTogetherCount' => $trainingTogetherCount,
            'trainer' => $decorateTrainer,
            'student' => [
                'id' => $lesson->getStudent()->getId(),
                'nickname' => $lesson->getStudent()->getNickname(),
                'photo' => $lesson->getStudent()->getPhoto()
            ],
            'availableReview' =>  $lesson->getStudentStatus(),
            'dateAfter7Days' => $dateTo->modify('+7 days')->format('Y.m.d H:i:s'),
            'today' => Carbon::now()->format('Y.m.d H:i:s'),
            'isOver' => $isOver,
            'reviewExist' => $reviewDataExist,
            'review' => $reviewsData['reviews']
        ];
    }

    /**
     * @param Lessons $lessons
     * @return float|int|null
     */
    public function getCostWithPercentage(Lessons $lessons)
    {
        $cost = $lessons->getTrenerPrice();

        return $cost;
    }

    public function getCostWithOutPercentage(Lessons $lessons)
    {
        $cost = $lessons->getCost();
        return $cost;
    }

    /**
     * @param $date
     * @param $timeOffset
     * @return string
     */
    public function parseDateToUserTimezone($date, $timeOffset)
    {
        $dateFrom = Carbon::createFromFormat('Y.m.d H', $date);
        $dateFrom->setHour($dateFrom->hour + $timeOffset);

        return $dateFrom;
    }
}
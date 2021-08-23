<?php


namespace App\Service;

use App\Entity\BlogPayment;
use App\Entity\PurseHistoryBlog;
use App\Entity\Teachers;
use App\Service\Payment\PaymentService;
use Carbon\Carbon;
use DateTime;
use App\Entity\Lessons;
use App\Entity\Payment;
use App\Entity\PurseHistory;
use App\Entity\User;
use Doctrine\ORM\EntityManager;

class WalletService
{
    /**
     * @var EntityManager|null
     */
    public $entityManager;

    /**
     * @var PurseHistoryService
     */
    public $purseHistoryService;

    /**
     * @var PurseHistoryBlogService
     */
    public $purseHistoryBlogService;

    /**
     * @var LessonService
     */
    public $lessonService;

    /**
     * @var UserService
     */
    public $userService;

    /**
     * @var PaymentService
     */
    public $paymentService;

    /**
     * @var BlogPaymentService
     */
    public $blogPaymentService;

    public function __construct()
    {
        global $kernel;

        $this->entityManager = $kernel->getContainer()->get('doctrine.orm.entity_manager');

        $this->purseHistoryService = new PurseHistoryService($this->entityManager);
        $this->purseHistoryBlogService = new PurseHistoryBlogService($this->entityManager);
        $this->lessonService = new LessonService($this->entityManager);
        $this->userService = new UserService($this->entityManager);
        $this->paymentService = new PaymentService($this->entityManager);
        $this->blogPaymentService = new BlogPaymentService($this->entityManager);
    }

    /**
     * @param User $user
     * @return PurseHistory[]
     */
    public function getPurseHistory(User $user)
    {
        return $this->purseHistoryService->findByUser($user);
    }

    /**
     * @param User $user
     * @return PurseHistory[]
     */
    public function getPurseHistoryForBlog(User $user)
    {
        return $this->purseHistoryBlogService->findByUser($user);
    }

    /**
     * @param User $user
     * @param DateTime|null $dateTime
     * @return array
     */
    public function getPaymentsByDate(User $user, ?DateTime $dateTime = null)
    {
        /** @var Lessons[] $lessons */
        if (isset($dateTime)) {
            $lessons = $this->lessonService->getByTrainerAndPaymentDateFrom($user, $dateTime);
        } else {
            $lessons = $this->lessonService->getByTeacher($user);
        }

        $payments = [];
        /** @var Lessons $lesson */
        foreach ($lessons as $lesson) {
            /** @var Payment $payment */
            $payment = $lesson->getPayment();

            if (!empty($payment) && $payment->getPaymentStatus() === Payment::STATUS_OK) {
                $payments[] = $lesson->getPayment();
            }
        }
        return $payments;
    }

    /**
     * @param User $user
     * @return int
     */
    public function getBalance(User $user): int
    {
        $allPurseSum = $this->getPurseHistorySum($user);

        $earnedAll = 0;
        $payments = $this->getPaymentsByDate($user);

        /** @var Payment $payment */
        foreach ($payments as $payment) {
            $earnedAll += (int)$payment->getLesson()->getTrenerPrice();
        }
        return $earnedAll - $allPurseSum;
    }

    /**
     * @param User $user
     * @return int
     */
    public function getBalanceBlog(User $user): int
    {
        $allPurseSum = $this->getPurseHistorySumBlog($user);

        $earnedAll = 0;
        $payments = $this->getPaymentsByDateForBlog($user);

        /** @var BlogPayment $payment */
        foreach ($payments as $payment) {
            $earnedAll += (int)$payment->getAmount();
        }
        return $earnedAll - $allPurseSum;
    }

    /**
     * @param User $user
     * @return int
     */
    public function getPurseHistorySum(User $user): int
    {
        $allPurseSum = 0;
        $purseHistories = $this->getPurseHistory($user);

        /** @var PurseHistory $purseHistory */
        foreach ($purseHistories as $purseHistory) {
            if($purseHistory->getStatus() !== 'cancel' && $purseHistory->getAmount() !== 0){
                $allPurseSum += (int)$purseHistory->getAmount();
            }
        }
        return $allPurseSum;
    }

    /**
     * @param User $user
     * @return int
     */
    public function getPurseHistorySumBlog(User $user): int
    {
        $allPurseSum = 0;
        $purseHistories = $this->getPurseHistoryForBlog($user);

        /** @var PurseHistoryBlog $purseHistory */
        foreach ($purseHistories as $purseHistory) {
            if($purseHistory->getStatus() !== 'cancel' && $purseHistory->getAmount() !== 0){
                $allPurseSum += (int)$purseHistory->getAmount();
            }
        }
        return $allPurseSum;
    }

    /**
     * @param User $user
     * @return int
     * @throws \Exception
     */
    public function getAvailableToPurse(User $user)
    {
        $dateFrom = Carbon::now();
        $dateFrom = $dateFrom->subDays((int)$_ENV['TRAINER_HOLD_PAYMENTS_AVAILABLE']);

        $dateTime = new DateTime($dateFrom->format('Y-m-d'));

        $payments = $this->getPaymentsByDate($user, $dateTime);

        $available = 0;

        $allPurseSum = $this->getPurseHistorySum($user);

        /** @var Payment $payment */
        foreach ($payments as $payment) {
            $available += (int)$payment->getLesson()->getTrenerPrice();
        }
        return $available - $allPurseSum;
    }

    /**
     * @param User $user
     * @return int
     * @throws \Exception
     */
    public function getAvailableToPurseBlog(User $user)
    {
        $dateFrom = Carbon::now();
        $dateFrom = $dateFrom->subDays((int)$_ENV['TRAINER_HOLD_PAYMENTS_AVAILABLE']);

        $dateTime = new DateTime($dateFrom->format('Y-m-d'));

        $payments = $this->getPaymentsByDateForBlog($user);

        $available = 0;

        $allPurseSum = $this->getPurseHistorySumBlog($user);

        /** @var BlogPayment $payment */
        foreach ($payments as $payment) {
            $available += (int)$payment->getAmount();
        }
        return $available - $allPurseSum;
    }

    /**
     * @param User $user
     * @param $translator
     * @return array
     * @throws \Doctrine\ORM\NoResultException
     * @throws \Doctrine\ORM\NonUniqueResultException
     * @throws \Doctrine\ORM\ORMException
     * @throws \Doctrine\ORM\OptimisticLockException
     */
    public function getStudentsPaymentHistory($timezone = null, User $user, $translator)
    {
        $confirmedPayments = $this->getPaymentsByDate($user);

        $studentsHistoryIds = [];

        /** @var Payment $payment */
        foreach ($confirmedPayments as $payment) {
            $studentsHistoryIds[] = $payment->getId();
        }
        $payments = $this->paymentService->findByIds($studentsHistoryIds);

        $studentsHistory = [];

        foreach ($payments as $payment) {
            $lesson = $payment->getLesson();

            if (isset($lesson) and !empty($lesson->getStudent())) {

                $studentsHistoryIds[] = $payment->getId();

                $trainer = $lesson->getTrainer();

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

                $lessonDate = $this->parseDateToUserTimezone($lesson->getDateTimeFrom()->format('Y.m.d H'), $timeOffset);

                $studentsHistory[] = [
                    'date' => $lessonDate->format('Y-m-d H:i:s'),
                    'cost' => (int)$this->lessonService->getCostWithPercentage($lesson),
                    'student' => $this->userService->getUserData($lesson->getStudent()),
                    'lesson' => $this->lessonService->decorateLesson($lesson, $user, null, $translator),
                    'show' => false
                ];
            }
        }
        return $studentsHistory;
    }

    public function parseDateToUserTimezone($date, $timeOffset)
    {
        $dateFrom = Carbon::createFromFormat('Y.m.d H', $date);
        $dateFrom->setHour($dateFrom->hour + $timeOffset);

        return $dateFrom;
    }

    /**
     * @param User $user
     * @param $translator
     * @return array
     * @throws \Doctrine\ORM\NoResultException
     * @throws \Doctrine\ORM\NonUniqueResultException
     * @throws \Doctrine\ORM\ORMException
     * @throws \Doctrine\ORM\OptimisticLockException
     */
    public function getStudentsPaymentHistoryBlog($timezone = null, User $user, $translator)
    {
        $confirmedPayments = $this->getPaymentsByDateForBlog($user);

        $studentsHistory = [];

        /** @var BlogPayment $blogPayment */
        foreach ($confirmedPayments as $blogPayment) {
            $studentsHistory[] = [
                'cost' => $blogPayment->getAmount(),
                'user' => $this->userService->getUserData($blogPayment->getUser()),
                'blog' => [],
                'show' => false
            ];
        }
        return $studentsHistory;
    }

    /**
     * @param User $user
     * @param DateTime|null $dateTime
     * @return array
     */
    public function getPaymentsByDateForBlog(User $user, ?DateTime $dateTime = null)
    {
        /** @var BlogPayments[] $blogPayments */
        if (isset($dateTime)) {
            $blogPayments = $this->blogPaymentService->getByUserAndPaymentDateFrom($user, $dateTime);
        } else {
            $blogPayments = $this->blogPaymentService->getByUser($user);
        }

        return $blogPayments;
    }

    /**
     * @param User $user
     * @param Carbon $date
     * @return mixed
     * @throws \Exception
     */
    public function getUserEarnedLessonsByMonthBlog(User $user, Carbon $date)
    {

        $currentDateFrom = new \DateTime($date->format('Y-m-d'));
        $currentDateTo = new \DateTime($date->endOfMonth()->format('Y-m-d H:i:s'));

        $payments = $this->getByUserAndPeriod(
            $user, $currentDateFrom, $currentDateTo
        );
        $earned = 0;

        /** @var BlogPayment $payment */
        foreach ($payments as $payment) {
                $earned += (int)$payment->getAmount();
        }
        return $earned;
    }

    /**
     * @param User $user
     * @param \DateTime $dateFrom
     * @param \DateTime $dateTo
     * @return mixed
     */
    public function getByUserAndPeriod(User $user, \DateTime $dateFrom, \DateTime $dateTo)
    {
        return $this->blogPaymentService->getByUserAndPeriod($user, $dateFrom, $dateTo);
    }
}
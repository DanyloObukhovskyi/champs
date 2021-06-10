<?php

namespace App\Controller;

use App\Entity\Lessons;
use App\Entity\Payment;
use App\Entity\PurseHistory;
use App\Entity\Review;
use App\Entity\Schedule;
use App\Entity\Teachers;
use App\Entity\User;
use App\Message\EndLessonMail;
use App\Message\PaymentLessonMail;
use App\Service\LessonService;
use App\Service\LessonTimeService;
use App\Service\ScheduleService;
use App\Service\TimeZoneService;
use Carbon\Carbon;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Swift_Mailer;
use Symfony\Contracts\Translation\TranslatorInterface;

/**
 * @Route("/{_locale}", requirements={"locale": "ru"})
 */
class DiscordApiController extends AbstractController
{
    /**
     * @var LessonService
     */
    public $lessonService;

    /**
     * @var ScheduleService
     */
    public $scheduleService;

    /**
     * @var LessonTimeService
     */
    public $lessonTimeService;

    /**
     * @var TimeZoneService
     */
    public $timezoneService;

    /**
     * DiscordApiController constructor.
     */
    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->lessonService = new LessonService($entityManager);
        $this->scheduleService = new ScheduleService($entityManager);

        $this->lessonTimeService = new LessonTimeService($entityManager);
        $this->timezoneService = new TimeZoneService();
    }


    /**
     *
     * @Route("/discordApi/getLessons", name="get_lessons_for_creating_rooms")
     */
    public function getLessonsForCreatingRooms(Request $request)
    {
        $lessons = [];

        $payments = $this->getDoctrine()
            ->getRepository(Payment::class)
            ->findBy(['payment_status' => 1]);

        /** @var Payment $payment */
        foreach($payments as $payment){
            $lessonId = $payment->getLesson()->getId();
            $trainer = $payment->getLesson()->getTrainer();
            $student = $payment->getLesson()->getStudent();
            $dateFrom = $payment->getLesson()->getDateTimeFrom()->format('Y.m.d H');
            $dateTo = $payment->getLesson()->getDateTimeTo()->format('Y.m.d H');

            [$gmt, $gmtNumeric, $timeZone] = $this->timezoneService->getGmtTimezoneString(
                $trainer->getTimeZone() ?? Teachers::DEFAULT_TIMEZONE
            );

            if ($gmtNumeric < 0) {
                $trainerTimezone = -(int)gmdate("g", $gmtNumeric);
            } else {
                $trainerTimezone = (int)gmdate("g", $gmtNumeric);
            }

            $dateFrom = $this->parseDateToUserTimezone($dateFrom, $trainerTimezone);
            $dateTo = $this->parseDateToUserTimezone($dateTo, $trainerTimezone);
            $discordTrainer = $trainer->getDiscord();
            $discordStudent = $student->getDiscord();
            $lessons[] = [
                'lesson_id'       => $lessonId,
                'date_from'       => $dateFrom->format('Y.m.d H:i'),
                'date_to'         => $dateTo->format('Y.m.d H:i'),
                'student_discord' => $discordStudent,
                'teacher_discord' => $discordTrainer,
            ];
        }

        return $this->json($lessons);
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
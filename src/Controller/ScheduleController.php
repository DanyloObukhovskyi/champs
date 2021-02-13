<?php

namespace App\Controller;

use App\Entity\Schedule;
use App\Entity\Schledule;
use App\Entity\Teachers;
use App\Entity\User;
use App\Service\ScheduleService;
use App\Service\TimeZoneService;
use Carbon\Carbon;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/{_locale}", requirements={"locale": "ru"})
 */
class ScheduleController extends AbstractController
{
    /**
     * @var ScheduleService
     */
    public $scheduleService;

    /**
     * @var TimeZoneService
     */
    public $timezoneService;

    /**
     * @var EntityManagerInterface
     */
    public $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;

        $this->scheduleService = new ScheduleService($entityManager);
        $this->timezoneService = new TimeZoneService();
    }

    /**
     * Schledule /ru/calendar/*
     *
     * @Route("/calendar/change/time/status/", methods={"POST"}, name="change_scheledule_date_time_status")
     */
    public function changeTimeStatus(Request $request)
    {
        $trainer = $this->getDoctrine()
            ->getRepository(User::class)
            ->find($request->request->get('user_id'));

        $date = new \DateTime($request->request->get('date'));

        $time = $request->request->get('time');
        $status = $request->request->get('status');

        /** @var Schedule $schedule */
        $schedule = $this->scheduleService->update($trainer, $date, $time, $status);

        return $this->json('ok');
    }

    /**
     * Schedule /calendar/*
     *
     * @Route("/calendar/trainer/date/week/", methods={"GET","POST"}, name="user_schedule_date_week")
     */
    public function viewScheduleWeek(Request $request)
    {
        $form = json_decode($request->getContent());

        $userId = $form->user_id;
        $dateFrom = new \DateTime($form->date);

        $isStudent = !empty($this->getUser()) ? (int)$this->getUser()->getId() !== (int)$userId : true;

        $schedule = $this->scheduleService
            ->createWeek($userId, $dateFrom, $isStudent);

        return $this->json($schedule);
    }

    /**
     * Schedule /calendar/*
     *
     * @Route("/calendar/trainer/date/day", methods={"POST"})
     */
    public function viewScheduleDay(Request $request)
    {
        $form = json_decode($request->getContent(), false);

        $userId = $form->trainerId;
        $date = new \DateTime($form->date);

        $isStudent = !empty($this->getUser()) ? (int)$this->getUser()->getId() !== (int)$userId : true;

        $trainerUser = $this->entityManager
            ->getRepository(User::class)
            ->find($userId);

        $authUser = $this->getUser();

        [$gmt, $gmtNumeric, $timeZone] = $this->timezoneService->getGmtTimezoneString(
            $trainerUser->getTimeZone() ?? Teachers::DEFAULT_TIMEZONE
        );
        if ($gmtNumeric < 0) {
            $trainerTimezone = -(int)gmdate("g", $gmtNumeric);
        } else {
            $trainerTimezone = (int)gmdate("g", $gmtNumeric);
        }
        if (isset($authUser) && $authUser->getTimezone() !== null) {
            [$gmt, $gmtNumeric, $timeZone] = $this->timezoneService->getGmtTimezoneString(
                $authUser->getTimeZone()
            );
            if ($gmtNumeric < 0) {
                $userTimezone = -(int)gmdate("g", $gmtNumeric);
            } else {
                $userTimezone = (int)gmdate("g", $gmtNumeric);
            }
        } else {
            $userTimezone = (int)$form->timezone;
        }

        if ($trainerTimezone < 0 and $userTimezone < 0) {
            $timeOffset = $trainerTimezone + abs($userTimezone);
        } elseif($trainerTimezone < 0 or $userTimezone < 0) {
            $timeOffset = $trainerTimezone + $userTimezone;
        } else {
            $timeOffset = $trainerTimezone - $userTimezone;
        }

        $schedule = $this->scheduleService
            ->createDay($userId, $date, $timeOffset, $isStudent);

        return $this->json($schedule);
    }

    /**
     * Schedule /calendar/*
     *
     * @Route("/calendar/available/training/dates/for/month/{trainerId}", methods={"POST"})
     */
    public function getTrainerAvailableTrainingDatesForMonth(Request $request, $trainerId)
    {
        $request = json_decode($request->getContent(), false);

        $trainer = $this->entityManager
            ->getRepository(User::class)
            ->find($trainerId);

        $availableDates = [];
        if (isset($request->date) and isset($trainer)) {
            $date = Carbon::createFromFormat('d.m.Y', $request->date);
            $from = $date->setDay(1);

            $to = Carbon::createFromFormat('d.m.Y', $request->date);
            $to->setDay($to->daysInMonth);

            for ($day = 1; $day <= $from->daysInMonth; $day++) {
                $from->setDay($day);

                $schedules = $this->scheduleService
                    ->findAvailableByTrainerAndDate(
                        $trainer,
                        $from->format('Y-m-d')
                    );


                if (Carbon::now()->timestamp - $from->timestamp >= 0) {
                    $availableDates[$day] = false;
                } else {
                    if (empty($schedules)) {
                        $availableDates[$day] = false;
                    } else {
                        $availableDates[$day] = true;
                    }
                }
            }
        }

        return $this->json($availableDates);
    }
}

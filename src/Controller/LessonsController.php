<?php

namespace App\Controller;

use App\Entity\Lessons;
use App\Entity\PurseHistory;
use App\Entity\Review;
use App\Entity\Schedule;
use App\Entity\Schledule;
use App\Entity\Teachers;
use App\Entity\TrainerLessonPrice;
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

/**
 * Class LessonsController
 * @package App\Controller
 */
class LessonsController extends AbstractController
{
    /**
     * @var LessonService
     */
    public $lessonsService;

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
     * LessonsController constructor.
     */
    public function __construct( EntityManagerInterface $entityManager)
    {
        $this->lessonsService = new LessonService($entityManager);
        $this->scheduleService = new ScheduleService($entityManager);

        $this->lessonTimeService = new LessonTimeService($entityManager);
        $this->timezoneService = new TimeZoneService();
    }

    /**
     * Lessons /ru/lessons/*
     *
     * @Route("/ru/lessons/set-status-ended/{form}", name="student_trainer_lesson_end")
     */
    public function setLessonEnd($form, Swift_Mailer $mailer)
    {
        $form = json_decode($form, false);

        $lesson_id = $form->lesson_id;
        $entityManager = $this->getDoctrine()->getManager();
        /** @var Lessons $lesson */
        $lesson = $entityManager->getRepository(Lessons::class)->find($lesson_id);

        if (!$lesson) {
            throw $this->createNotFoundException(
                'No lesson found for id ' . $lesson_id
            );
        }

        $userId = (int)$form->user_id;

        if(($lesson->getTrainer()->getId() === $userId) || ($lesson->getStudent()->getId() === $userId))
        {
            if($form->istrainer === true){
                $this->dispatchMessage(new EndLessonMail($mailer, $lesson, true));

                $lesson->setTrainerStatus(Lessons::STATUS_ENDED);

            } else {
                $lesson->setStudentStatus(Lessons::STATUS_ENDED);
            }

            if(($lesson->getTrainerStatus()) && ($lesson->getStudentStatus()))
            {
                $lesson->setStatus(Lessons::STATUS_ENDED);
                /** @var User $user */
                $user = $this->getDoctrine()
                    ->getRepository(User::class)
                    ->find(intval($userId));

                /** @var PurseHistory $purse */
                $purse = new PurseHistory();
                $purse->setUser($user);
                $purse->setOperation($lesson->getCost()/2);
                $purse->setDatetime($lesson->getDateTimeFrom());

                $user->setPurse($user->getPurse() + $purse->getOperation());

                $entityManager->persist($purse, $user, $lesson);

            }
        }else{
            return new JsonResponse('У вас нет прав на закрытие тренировки');
        }

        $entityManager->persist($lesson);
        $entityManager->flush();

        return $this->json($this->lessonsService->lessonDecorator($lesson));
    }

    /**
     * Lessons /ru/lessons/*
     *
     * @Route("/ru/lessons/create/", methods={"GET","POST"}, name="create_student_trainer_lesson")
     */
    public function createNewLesson(Request $request, Swift_Mailer $mailer)
    {
        $entityManager = $this->getDoctrine()->getManager();
        $data = json_decode($request->getContent(), false);

        /** @var User $trainer */
        $trainer = $entityManager->getRepository(User::class)->find($data->trainer_id);

        /** @var Teachers $trainerEntity */
        $trainerEntity = $entityManager->getRepository(Teachers::class)->findOneBy([
            'userid' => $trainer->getId()
        ]);

        if ($trainerEntity->getIsLessonCost() and count($data->lessons) % Lessons::LESSON_HOURS !== 0)
        {
            return $this->json(['message' => 'Неверные данные!']);
        }

        [$gmt, $gmtNumeric, $timeZone] = $this->timezoneService->getGmtTimezoneString(
            $trainerEntity->getTimeZone() ?? Teachers::DEFAULT_TIMEZONE
        );
        if ($gmtNumeric < 0){
            $trainerTimezone = -(int)gmdate("g", $gmtNumeric);
        } else {
            $trainerTimezone = (int)gmdate("g", $gmtNumeric);
        }
        $timeOffset = $trainerTimezone - (int)$data->timezone;

        $lessons = [];
        foreach ($data->lessons as $lesson) {
            $carbon = Carbon::createFromFormat('d.m.Y', $lesson->date);
            $carbon->setHour($lesson->time - $timeOffset);

            $lessons[] = [
                'date' => $carbon->format('d.m.Y'),
                'time' => $carbon->hour
            ];
        }
        /** @var User $user */
        $user = $this->getUser();

        $lessons = $this->lessonsService
            ->decorationLessonsForPayed($lessons);

        [$lessonIds] = $this->lessonsService
            ->createLessons(
                $lessons,
                $trainer,
                $user,
                $data->type
            );

        $lessons = $this->lessonsService->getLessonsByIds($lessonIds);

        foreach ($lessons as $lesson)
        {
            // Dispatch payment mail
            $this->dispatchMessage(new PaymentLessonMail($mailer, $lesson));
        }
        return $this->json(['ids' => $lessonIds]);
    }

    /**
     * Lessons /ru/lessons/finished/*
     *
     * @Route("/ru/lesson/finished", methods={"GET","POST"}, name="finished.user.lessons")
     */
    public function getFinishedUserLessons(Request $request)
    {
        $userId = $request->get('student_id', null);
        $trainerId = $request->get('trainer_id', null);

        $lessons = $this->lessonsService->getEndedLessonsByTrainerAndUser($trainerId, $userId);

        foreach ($lessons as $lesson)
        {
            $student = $this->getDoctrine()->getRepository(User::class)->find($userId);
            $trainer = $this->getDoctrine()->getRepository(User::class)->find($trainerId);

            /** @var Review $lessonReview */
            $lessonReview = $this->getDoctrine()
                ->getRepository(Review::class)
                ->findByLessonAndTrainerAndStudent($lesson, $trainer, $student);

            if (empty($lessonReview))
            {
                return $this->json($lesson->getId());
            }
        }
        return  $this->json(null);
    }

    /**
     * Lessons /ru/lessons/cancel/*
     *
     * @Route("/ru/lesson/cancel/{lessonId}", methods={"GET","POST"}, name="lesson.cancel")
     */
    public function cancelLesson($lessonId)
    {
        $trainer = $this->getUser();
        $lesson = $this->lessonsService->find($lessonId);

        if (isset($lesson))
        {
            if (empty($trainer))
            {
                return $this->render('templates/login.html.twig', [
                    'router' => 'login'
                ]);
            }
            if ($trainer->getId() === $lesson->getTrainer()->getId())
            {
                $lesson = $this->lessonsService->setCanceled($lesson);
                $lessonTimes = $this->lessonTimeService->getTimesByLesson($lesson);

                /** @var Schedule $time */
                foreach ($lessonTimes as $time)
                {
                    $this->scheduleService->setScheduleStatus($time, Schedule::TIME_STATUS_BLOCK);
                }
                $this->addFlash('notice', 'Урок был отменен!');
            }
        }
        return $this->redirectToRoute('timetable_index');
    }
}

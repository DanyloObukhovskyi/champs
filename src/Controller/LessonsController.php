<?php

namespace App\Controller;

use App\Entity\Lessons;
use App\Entity\LessonTime;
use App\Entity\Payment;
use App\Entity\PurseHistory;
use App\Entity\Review;
use App\Entity\Schedule;
use App\Entity\Schledule;
use App\Entity\Teachers;
use App\Entity\User;
use App\Service\LessonService;
use App\Service\ScheduleService;
use App\Traits\AuthUser;
use App\Traits\EntityManager;
use App\Traits\Mail;
use Carbon\Carbon;
use DateTime;
use Doctrine\DBAL\Exception;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Finder\Exception\AccessDeniedException;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Routing\Annotation\Route;
use Swift_Mailer;

class LessonsController extends AbstractController
{
    use EntityManager;
    use Mail;
    use AuthUser;

    /**
     * @var LessonService
     */
    public $lessonsService;

    /**
     * @var ScheduleService
     */
    public $scheduleService;

    public function __construct()
    {
        $this->lessonsService = new LessonService($this->getEntityManager());
        $this->scheduleService = new ScheduleService($this->getEntityManager());
    }

    /**
     * @Route("/lessons", name="lessons")
     */
    public function index()
    {
        return $this->render('lessons/index.html.twig', [
            'controller_name' => 'LessonsController',
        ]);
    }

    /**
     * Lessons /ru/lessons/*
     *
     * @Route("/ru/lessons/trainer/date/{form}", name="trainer_schledule_date")
     */
    public function viewTrainerLessons($form)
    {
        $form = json_decode($form);
        $user_id = $form->user_id;
        $date = new \DateTime($form->date);

        $lessons = $this->getDoctrine()
            ->getRepository(Lessons::class)
            ->findByTrainerAndDate($user_id, $date);

        return $this->json($lessons);
    }

    /**
     * Lessons /ru/lessons/*
     *
     * @Route("/ru/lessons/trainer/date/week/{form}", name="trainer_schledule_week")
     */
    public function viewTrainerLessonsFrom($form)
    {
        $form = json_decode($form);
        $user_id = $form->user_id;
        $dateform = new \DateTime($form->date);

        $lessons = $this->getDoctrine()
            ->getRepository(Lessons::class)
            ->findByTrainerAndDateWeek($user_id, $dateform);

        return $this->json($lessons);
    }

    /**
     * Lessons /ru/lessons/*
     *
     * @Route("/ru/lessons/trainer/{id}", name="trainer_schledule")
     */
    public function viewTrainerLessonsWithoutDate($id)
    {

        $lessons = $this->getDoctrine()
            ->getRepository(Lessons::class)
            ->findByTrainerId($id);



        $lessons = $this->lessonsService->lessonsDecoratorForCabinet($lessons);

        $lessonsOrderedByDate = [];
        foreach ($lessons as $lesson)
        {
            $date = $lesson['dateTimeFrom']->format('Y-m-d');
            $lessonsOrderedByDate[$date][] = $lesson;
        }

        return $this->json($lessonsOrderedByDate);
    }

    /**
     * Lessons /ru/lessons/*
     *
     * @Route("/ru/lessons/student/date/{form}", name="student_schledule_date")
     */
    public function viewStudentLessons($form)
    {
        $form = json_decode($form);
        $user_id = $form->user_id;
        $date = new \DateTime($form->date);

        $lessons = $this->getDoctrine()
            ->getRepository(Lessons::class)
            ->findByStudentAndDate($user_id, $date);

        return $this->json($lessons);
    }

    /**
     * Lessons /ru/lessons/*
     *
     * @Route("/ru/lessons/student/{id}", name="student_schledule")
     */
    public function viewStudentLessonsWithoutDate($id)
    {
        $lessons = $this->getDoctrine()
            ->getRepository(Lessons::class)
            ->findByStudentId($id);

        $lessonsWithTrainerStatusNotConfirm = [];
        /** @var Lessons $lesson */
        foreach ($lessons as $lesson)
        {
            if (!$lesson->getTrainerStatus() or !$lesson->getStudentStatus()) {
                $lessonsWithTrainerStatusNotConfirm[] = $lesson;
            }
        }

        $lessons = $this->lessonsService
            ->lessonsDecoratorForCabinet($lessonsWithTrainerStatusNotConfirm);

        $lessonsOrderedByDate = [];

        foreach ($lessons as $lesson)
        {
            $date = $lesson['dateTimeFrom']->format('Y-m-d');
            $lessonsOrderedByDate[$date][] = $lesson;
        }

        return $this->json($lessonsOrderedByDate);
    }

    /**
     * Lessons /ru/lessons/*
     *
     * @Route("/ru/lessons/count/{form}", name="student_trainer_lessons_count")
     * @param $form
     * @return JsonResponse
     */
    public function getLessonsCountByTrainer($form)
    {
        $form = json_decode($form);
        $student_id = $form->student_id;
        $trainer_id = $form->trainer_id;
        $trainerLessons = $this->getDoctrine()
            ->getRepository(Lessons::class)
            ->findCountByTrainerId($trainer_id);

        $lessons = $this->getDoctrine()
            ->getRepository(Lessons::class)
            ->findCountByTrainerAndStudent($trainer_id, $student_id);

        $count = [];
        $count['trainer'] = $trainerLessons;
        $count['together'] = $lessons;
        return $this->json($count);
    }

    /**
     * Lessons /ru/lessons/*
     *
     * @Route("/ru/lessons/set-status-ended/{form}", name="student_trainer_lesson_end")
     */
    public function setLessonEnd($form)
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
                $lesson->setTrainerStatus(Lessons::STATUS_ENDED);
            }else{
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

        /** @var User $user */
        $user = $this->authUser();
        $lessons = $data->lessons ?? [];

        $lessons = $this->lessonsService
            ->decorationLessonsForPayed($lessons);

        [$lessonIds, $bookedTime] = $this->lessonsService->createLessons($lessons, $trainer, $user);
        $trainerTeacher = $this->getDoctrine()
            ->getRepository(Teachers::class)
            ->findBy(['userid' => $trainer->getId()]);

        $trainerTeacher = $trainerTeacher[0] ?? null;

        // Send trainer mail
        $this->sendPayedMail($mailer, $user, $bookedTime, $trainerTeacher, true);
        // Send user mail
        if (!empty($user->getEmail())) {
            $this->sendPayedMail($mailer, $trainer, $bookedTime, $trainerTeacher);
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
            $student = $this->getDoctrine() ->getRepository(User::class)->find($userId);
            $trainer = $this->getDoctrine() ->getRepository(User::class)->find($trainerId);

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
}

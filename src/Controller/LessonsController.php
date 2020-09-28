<?php

namespace App\Controller;

use App\Entity\Lessons;
use App\Entity\Payment;
use App\Entity\PurseHistory;
use App\Entity\Review;
use App\Entity\Schledule;
use App\Entity\Teachers;
use App\Entity\User;
use App\Service\LessonService;
use App\Traits\EntityManager;
use App\Traits\Mail;
use DateTime;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Finder\Exception\AccessDeniedException;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Routing\Annotation\Route;

class LessonsController extends AbstractController
{
    use EntityManager;
    use Mail;

    public $lessonsService;

    public function __construct()
    {
        $this->lessonsService = new LessonService($this->getEntityManager());
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

        $result = [];
        foreach ($lessons as $lesson)
        {
            /** @var Lessons $lesson */
            $result[] = [
                'id' => $lesson->getId(),
                'datetime' => $lesson->getDatetime(),
                'cost' => $lesson->getCost(),
                'student' => [
                    'id' => $lesson->getStudentId()->getId(),
                    'email' => $lesson->getStudentId()->getEmail(),
                    'istrainer' => $lesson->getStudentId()->getIsTrainer(),
                    'nickname' => $lesson->getStudentId()->getNickname(),
                    'name' => $lesson->getStudentId()->getName(),
                    'game' => $lesson->getStudentId()->getGame(),
                    'rank' => $lesson->getStudentId()->getRank(),
                    'family' => $lesson->getStudentId()->getFamily(),
                    'discord' => $lesson->getStudentId()->getDiscord(),
                ],
                'trainer' => [
                    'id' => $lesson->getTrainerId()->getId(),
                    'email' => $lesson->getTrainerId()->getEmail(),
                    'istrainer' => $lesson->getTrainerId()->getIsTrainer(),
                    'nickname' => $lesson->getTrainerId()->getNickname(),
                    'name' => $lesson->getTrainerId()->getName(),
                    'game' => $lesson->getTrainerId()->getGame(),
                    'rank' => $lesson->getTrainerId()->getRank(),
                    'family' => $lesson->getTrainerId()->getFamily(),
                    'discord' => $lesson->getTrainerId()->getDiscord(),
                ],
                'studentStatus' => $lesson->getStudentStatus(),
                'trainerStatus' => $lesson->getTrainerStatus(),
                'status' => $lesson->getStatus(),
                'rate' => $lesson->getReview() === null ? null : $lesson->getReview()->getRate()
            ];
        }

        return $this->json($result);
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

        $result =[];
        foreach ($lessons as $lesson)
        {
            /** @var Lessons $lesson */
            $result[] = [
                'id' => $lesson->getId(),
                'datetime' => $lesson->getDatetime(),
                'cost' => $lesson->getCost(),
                'student_id' => [
                    'id' => $lesson->getStudentId()->getId(),
                    'email' => $lesson->getStudentId()->getEmail(),
                    'istrainer' => $lesson->getStudentId()->getIsTrainer(),
                    'nickname' => $lesson->getStudentId()->getNickname(),
                    'photo' => $lesson->getStudentId()->getPhoto(),
                    'name' => $lesson->getStudentId()->getName(),
                    'family' => $lesson->getStudentId()->getFamily(),
                    'game' => $lesson->getStudentId()->getGame(),
                    'rank' => $lesson->getStudentId()->getRank(),
                    'discord' => $lesson->getStudentId()->getDiscord(),
                ],
                'trainer_id' => [
                    'id' => $lesson->getTrainerId()->getId(),
                    'email' => $lesson->getTrainerId()->getEmail(),
                    'istrainer' => $lesson->getTrainerId()->getIsTrainer(),
                    'nickname' => $lesson->getTrainerId()->getNickname(),
                    'photo' => $lesson->getTrainerId()->getPhoto(),
                    'name' => $lesson->getTrainerId()->getName(),
                    'family' => $lesson->getTrainerId()->getFamily(),
                    'game' => $lesson->getTrainerId()->getGame(),
                    'rank' => $lesson->getTrainerId()->getRank(),
                    'discord' => $lesson->getTrainerId()->getDiscord(),
                ],
                'student_status' => $lesson->getStudentStatus(),
                'trainer_status' => $lesson->getTrainerStatus(),
                'status' => $lesson->getStatus(),
                'reviewIsset' => $lesson->getReview() === null ? false : true,
            ];
        }



        return $this->json($result);
    }

    /**
     * Lessons /ru/lessons/*
     *
     * @Route("/ru/lessons/count/{form}", name="student_trainer_lessons_count")
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
        $form = json_decode($form);

        $lesson_id = $form->lesson_id;
        $entityManager = $this->getDoctrine()->getManager();
        /** @var Lessons $lesson */
        $lesson = $entityManager->getRepository(Lessons::class)->find($lesson_id);

        if (!$lesson) {
            throw $this->createNotFoundException(
                'No lesson found for id ' . $lesson_id
            );
        }

        $user_id = $form->user_id;
        if(($lesson->getTrainerId()->getId() == $user_id)||($lesson->getStudentId()->getId() == $user_id))
        {
            if($form->istrainer == "true"){
                $lesson->setTrainerStatus(Lessons::STATUS_ENDED);
            }else{
                $lesson->setStudentStatus(Lessons::STATUS_ENDED);
            }

            if(($lesson->getTrainerStatus())&&($lesson->getStudentStatus()))
            {
                $lesson->setStatus(Lessons::STATUS_ENDED);
                /** @var User $user */
                $user = $this->getDoctrine()
                    ->getRepository(User::class)
                    ->find(intval($user_id));
                /** @var PurseHistory $purse */
                $purse = new PurseHistory();
                $purse->setUser($user);
                $purse->setOperation($lesson->getCost()/2);
                $purse->setDatetime($lesson->getDatetime());

                $entityManager->persist($purse);
                $entityManager->flush();

                $user->setPurse($user->getPurse() + $purse->getOperation());

                $entityManager->persist($user);
                $entityManager->flush();
            }
        }else{
            return new JsonResponse('У вас нет прав на закрытие тренировки');
        }

        $entityManager->persist($lesson);
        $entityManager->flush();

        $response = [
            'id' => $lesson->getId(),
            'datetime' => $lesson->getDatetime(),
            'cost' => $lesson->getCost(),
            'student_id' => [
                'id' => $lesson->getStudentId()->getId(),
                'email' => $lesson->getStudentId()->getEmail(),
                'istrainer' => $lesson->getStudentId()->getIsTrainer(),
                'nickname' => $lesson->getStudentId()->getNickname(),
                'photo' => $lesson->getStudentId()->getPhoto(),
                'name' => $lesson->getStudentId()->getName(),
                'family' => $lesson->getStudentId()->getFamily(),
                'game' => $lesson->getStudentId()->getGame(),
                'rank' => $lesson->getStudentId()->getRank(),
                'discord' => $lesson->getStudentId()->getDiscord(),
            ],
            'trainer_id' => [
                'id' => $lesson->getTrainerId()->getId(),
                'email' => $lesson->getTrainerId()->getEmail(),
                'istrainer' => $lesson->getTrainerId()->getIsTrainer(),
                'nickname' => $lesson->getTrainerId()->getNickname(),
                'photo' => $lesson->getTrainerId()->getPhoto(),
                'name' => $lesson->getTrainerId()->getName(),
                'family' => $lesson->getTrainerId()->getFamily(),
                'game' => $lesson->getTrainerId()->getGame(),
                'rank' => $lesson->getTrainerId()->getRank(),
                'discord' => $lesson->getTrainerId()->getDiscord(),
            ],
            'student_status' => $lesson->getStudentStatus(),
            'trainer_status' => $lesson->getTrainerStatus(),
            'status' => $lesson->getStatus()
        ];

        return $this->json($response);
    }

    /**
     * Lessons /ru/lessons/*
     *
     * @Route("/ru/lessons/create/", methods={"GET","POST"}, name="create_student_trainer_lesson")
     */
    public function createNewLesson(Request $request, MailerInterface $mailer)
    {
        $data = json_decode($request->getContent());

        $entityManager = $this->getDoctrine()->getManager();

        $lessonsIds = [];
        $sum = 0;

        $user = null;
        /** @var User $trainer */
        $trainer = null;

        $bookedTime = [];

        if (isset($data->data)){
            foreach ($data->data as $form)
            {
                $user = $entityManager->getRepository(User::class)->find($form->user_id);
                $trainer = $entityManager->getRepository(User::class)->find($form->trainer_id);

                $lesson = new Lessons();
                $date = DateTime::createFromFormat('j.n.Y H:i:s',$form->date . ' ' . $form->time . ':00');

                $date->format('Y-m-d H:i:s');
                /** @var Schledule $schledule */
                $schledule = $entityManager->getRepository(Schledule::class)->findOneBy([
                    'trainer_id' => $form->trainer_id,
                    'date' => $date,
                ]);
                switch ($form->time) {
                    case "10:00":
                        $schledule->setTime1011(Schledule::TIME_STATUS_RESERVED);
                        break;
                    case "11:00":
                        $schledule->setTime1112(Schledule::TIME_STATUS_RESERVED);
                        break;
                    case "12:00":
                        $schledule->setTime1213(Schledule::TIME_STATUS_RESERVED);
                        break;
                    case "13:00":
                        $schledule->setTime1314(Schledule::TIME_STATUS_RESERVED);
                        break;
                    case "14:00":
                        $schledule->setTime1415(Schledule::TIME_STATUS_RESERVED);
                        break;
                    case "15:00":
                        $schledule->setTime1516(Schledule::TIME_STATUS_RESERVED);
                        break;
                    case "16:00":
                        $schledule->setTime1617(Schledule::TIME_STATUS_RESERVED);
                        break;
                    case "17:00":
                        $schledule->setTime1718(Schledule::TIME_STATUS_RESERVED);
                        break;
                }


                /** @var Lessons $oldLesson */
                $oldLesson = $entityManager->getRepository(Lessons::class)->findBy([
                    'trainer_id' => $form->trainer_id,
                    'datetime' => $date,
                    'student_id' => $form->user_id,
                ]);

                $oldLesson = $oldLesson[0] ?? null;

                if(!empty($oldLesson)){
                    $payed = $entityManager->getRepository(Payment::class)->findBy([
                        'lesson_id' => $oldLesson->getId(),
                        'payment_status' => '1'
                    ]);

                    if (!empty($payed))
                    {
                        return new Response('ЭТОТ УРОК УЖЕ ЗАНЯТ');
                    }
                }
                /** @var Teachers $trainer */
                $trainerTeacher = $entityManager->getRepository(Teachers::class)->findOneBy([
                    'userid' => $form->trainer_id
                ]);

                $lesson->setStudentId($user);
                $lesson->setTrainerId($trainer);
                $lesson->setCost($trainerTeacher->getCost());
                $lesson->setStatus(Lessons::STATUS_NEW);
                $lesson->setDatetime($date);
                $lesson->setStudentStatus(0);
                $lesson->setTrainerStatus(0);

                $entityManager->persist($schledule);
                $entityManager->flush();
                $entityManager->persist($lesson);
                $entityManager->flush();

                $lessonsIds[] = $lesson->getId();

                $lessonHourStart = $lesson->getDatetime()->format('H');
                $bookedTime[] = [
                    'day' => $lesson->getDatetime()->format('Y-m-d'),
                    'from' => (int)$lessonHourStart,
                    'to' => (int)$lessonHourStart + 1,
                ];
                $sum += $lesson->getCost();
            }
        }
        /** @var Teachers $trainer */
        $trainerTeacher = $entityManager->getRepository(Teachers::class)->findOneBy([
            'userid' => $trainer->getId()
        ]);

        // Send trainer mail
        $trainerMail = $this->makeMail()
            ->to($trainer->getEmail())
            ->subject('Бронирование урока')
            ->htmlTemplate('templates/mails/booked.lesson.html.twig')
            ->context([
                'user' => $user,
                'bookedTime' => $bookedTime,
                'trainer' => $trainerTeacher,
                'isTrainer' => true,
            ]);
        $mailer->send($trainerMail);

        // Send user mail
        if (!empty($user->getEmail())){
            $userMail = $this->makeMail()
                ->to($user->getEmail())
                ->subject('Бронирование урока')
                ->htmlTemplate('templates/mails/booked.lesson.html.twig')
                ->context([
                    'user' => $trainer,
                    'bookedTime' => $bookedTime,
                    'trainer' => $trainerTeacher,
                    'isTrainer' => false,
                ]);
            $mailer->send($userMail);
        }
        $response = [
            'ids' => $lessonsIds,
            'cost' => $sum,
        ];

        return $this->json($response);
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

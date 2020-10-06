<?php

namespace App\Controller;

use App\Entity\Schedule;
use App\Entity\Schledule;
use App\Entity\Teachers;
use App\Entity\User;
use App\Service\ScheduleService;
use App\Traits\EntityManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Validator\Constraints\Date;

class SchleduleController extends AbstractController
{
    use EntityManager;

    /**
     * @var ScheduleService
     */
    public $scheduleService;

    public function __construct()
    {
        $this->scheduleService = new ScheduleService($this->getEntityManager());
    }

    /**
     * @Route("/schledule", name="schledule")
     */
    public function index()
    {
        return $this->render('schledule/index.html.twig', [
            'controller_name' => 'SchleduleController',
        ]);
    }

    /**
     * Schledule /ru/calendar/*
     *
     * @Route("/ru/calendar/user/{user_id}", name="user_schledule")
     */
    public function viewSchledule($user_id)
    {
        $scheledule = $this->getDoctrine()
            ->getRepository(Schledule::class)
            ->findOneBy([
                'trainer_id' => $user_id,
            ]);

        if (!$scheledule) {
            throw $this->createNotFoundException(
                'No schledule found for id '.$user_id
            );
        }

        return $this->json($scheledule);
    }


    /**
     * Schledule /ru/calendar/*
     *
     * @Route("/ru/calendar/user/date/{form}", name="user_schledule_date")
     */
    public function viewSchleduleDate($form)
    {
        $form = json_decode($form);
        $user_id = $form->user_id;
        $date = new \DateTime($form->started_at);

        $scheledule = $this->getDoctrine()
            ->getRepository(Schledule::class)
            ->findByUserAndDate($user_id, $date);

        return $this->json($scheledule);
    }

    /**
     * Schledule /ru/calendar/*
     *
     * @Route("/ru/calendar/user/date/from/{form}", name="user_schledule_date_from")
     */
    public function viewSchleduleDateFrom($form)
    {
        $form = json_decode($form);
        $user_id = $form->user_id;
        $date = new \DateTime($form->started_at);

        $scheledule = $this->getDoctrine()
            ->getRepository(Schledule::class)
            ->findByUserAndDateFrom($user_id, $date);

        return $this->json($scheledule);
    }

    /**
     * Schledule /ru/calendar/*
     *
     * @Route("/ru/calendar/change/time/status/", methods={"POST"}, name="change_scheledule_date_time_status")
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
     * Schedule /ru/calendar/*
     *
     * @Route("/ru/calendar/trainer/date/week", methods={"GET","POST"}, name="user_schedule_date_week")
     */
    public function viewSchleduleWeek(Request $request)
    {
        $form = json_decode($request->getContent());

        $userId = $form->user_id;
        $dateFrom = new \DateTime($form->date);

        /** @var Teachers $trainer */
        $trainer = $this->getDoctrine()->getRepository(Teachers::class)
            ->findOneBy(['userid' =>  $userId]);

        $schedule = $this->scheduleService->createWeek($userId, $dateFrom, $trainer->getIsLessonCost());

        return $this->json(['schedule' => $schedule, 'isLesson' => $trainer->getIsLessonCost()]);
    }

    /**
     * Schledule /ru/schledule/*
     *
     * @Route("/ru/schledule/create", name="crate_schledule_date_week")
     */
    public function createTeacherSchledule()
    {
        $entityManager = $this->getDoctrine()->getManager();

        $teachers = $this->getDoctrine()
            ->getRepository(User::class)
            ->findBy([
               'istrainer' => 1,
            ]);

        $dates = [
            (new \DateTime())->modify('-7 day'),
            (new \DateTime())->modify('-6 day'),
            (new \DateTime())->modify('-5 day'),
            (new \DateTime())->modify('-4 day'),
            (new \DateTime())->modify('-2 day'),
            (new \DateTime())->modify('-2 day'),
            (new \DateTime())->modify('-1 day'),
            new \DateTime(),
            (new \DateTime())->modify('+1 day'),
            (new \DateTime())->modify('+2 day'),
            (new \DateTime())->modify('+3 day'),
            (new \DateTime())->modify('+4 day'),
            (new \DateTime())->modify('+5 day'),
            (new \DateTime())->modify('+6 day'),
            (new \DateTime())->modify('+7 day'),
            (new \DateTime())->modify('+8 day'),
            (new \DateTime())->modify('+9 day'),
            (new \DateTime())->modify('+10 day'),
            (new \DateTime())->modify('+11 day'),
            (new \DateTime())->modify('+12 day'),
            (new \DateTime())->modify('+13 day'),
            (new \DateTime())->modify('+14 day'),
            (new \DateTime())->modify('+15 day'),
            (new \DateTime())->modify('+16 day'),
            (new \DateTime())->modify('+17 day'),
            (new \DateTime())->modify('+18 day'),
            (new \DateTime())->modify('+19 day'),
            (new \DateTime())->modify('+20 day'),
            (new \DateTime())->modify('+21 day'),
            (new \DateTime())->modify('+22 day'),
            (new \DateTime())->modify('+23 day'),
            (new \DateTime())->modify('+24 day'),
            (new \DateTime())->modify('+25 day'),
            (new \DateTime())->modify('+26 day'),
            (new \DateTime())->modify('+27 day'),
            (new \DateTime())->modify('+28 day'),
        ];
        /** @var Teachers $teacher */
        foreach ($teachers as $teacher)
        {
            /** @var \DateTime $date */
            foreach ($dates as $date)
            {
                $scheledule = $this->getDoctrine()
                    ->getRepository(Schledule::class)
                    ->findBy([
                        'trainer_id' => $teacher->getId(),
                        'date' => $date,
                    ]);
                if(!$scheledule)
                {
                    $newSchledule = new Schledule();
                    $newSchledule->setTrainerId($teacher->getId());
                    $newSchledule->setDate($date);
                    $newSchledule->setTime1011(0);
                    $newSchledule->setTime1112(0);
                    $newSchledule->setTime1213(0);
                    $newSchledule->setTime1314(0);
                    $newSchledule->setTime1415(0);
                    $newSchledule->setTime1516(0);
                    $newSchledule->setTime1617(0);
                    $newSchledule->setTime1718(0);

                    $entityManager->persist($newSchledule);
                    $entityManager->flush();
                }
            }
        }

        return $this->json([
           'status' => 200,
        ]);
    }

}

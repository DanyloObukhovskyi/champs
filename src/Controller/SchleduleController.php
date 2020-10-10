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
     * @Route("/ru/calendar/trainer/date/week/", methods={"GET","POST"}, name="user_schedule_date_week")
     */
    public function viewSchleduleWeek(Request $request)
    {
        $form = json_decode($request->getContent());

        $userId = $form->user_id;
        $dateFrom = new \DateTime($form->date);

        $isStudent = (int)$this->getUser()->getId() !== (int)$userId;

        $schedule = $this->scheduleService
            ->createWeek($userId, $dateFrom, $isStudent);

        return $this->json($schedule);
    }
}

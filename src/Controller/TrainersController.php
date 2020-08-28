<?php

namespace App\Controller;

use App\Entity\Lessons;
use App\Entity\Teachers;
use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class TrainersController extends AbstractController
{
    /**
      * Matches /ru/trainers/*
      *
      * @Route("/ru/trainers/{game}", name="trainers_index")
      */
    public function index($game)
    {
        $id = 0;
        if(isset($_GET['id']))
        {
            $id = $_GET['id'];
        }
        return $this->render('templates/trainers.html.twig', [
            'router' => 'marketplace',
            'game' => $game,
            'id' => $id
        ]);
    }

    /**
      * @Route("/ru/lessons/{id}", name="lessons_index")
      */
    public function lessons($id)
    {
        $entityManager = $this->getDoctrine()->getManager();
        /** @var User $user */
        $user = $entityManager->getRepository(User::class)->find($id);
        /** @var Teachers $trainer */
        $trainer  = $entityManager->getRepository(Teachers::class)->findOneBy([
            'userid' => $user
        ]);
        return $this->render('templates/lessons.html.twig', [
          'router' => 'marketplace',
          'styles' => [
            'lessons.css',
          ],
          'id' => $id,
            'nickname' => $user->getNickname(),
            'cost' => $trainer->getComissionCost()
        ]);
    }

    /**
      * @Route("/ru/order/{id}", name="lessons_order_index")
      */
    public function lessons_order($id)
    {
        $entityManager = $this->getDoctrine()->getManager();
        /** @var Lessons $lesson */
        $lesson = $entityManager->getRepository(Lessons::class)->find($id);
        $trainer = $lesson->getTrainerId();

        return $this->render('templates/lessons/lessons.order.html.twig', [
          'router' => 'marketplace',
          'styles' => [
            'lessons.css',
          ],
          'nickname' => $trainer->getNickname(),
          'id' => $id
        ]);
    }

    /**
     * @Route("/ru/trainer/info/by-lesson/{id}", name="trainer_info_by_lesson_id")
     */
    public function getTrainerInfoByLessonId($id)
    {
        $entityManager = $this->getDoctrine()->getManager();
        /** @var Lessons $lesson */
        $lesson = $entityManager->getRepository(Lessons::class)->find($id);


        $trainer = $lesson->getTrainerId();

        return $this->json([
            'trainer' => $lesson->getTrainerId(),
            'trainerLessonsCount' => $this->getDoctrine()
                ->getRepository(Lessons::class)
                ->findCountByTrainerId($trainer->getId()),
            'lessonsTogetheCount' => $this->getDoctrine()
                ->getRepository(Lessons::class)
                ->findCountByTrainerAndStudent($trainer->getId(), $lesson->getStudentId()->getId()),
            'cost' => $lesson->getCost()
        ]);
    }

}

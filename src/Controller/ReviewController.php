<?php

namespace App\Controller;

use App\Entity\Lessons;
use App\Entity\Review;
use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class ReviewController extends AbstractController
{
    /**
     * @Route("/review", name="review")
     */
    public function index()
    {
        return $this->render('review/index.html.twig', [
            'controller_name' => 'ReviewController',
        ]);
    }

    /**
     * @Route("/ru/lesson/review/", methods={"POST"}, name="set_lesson_review")
     */
    public function setLessonReview(Request $request)
    {
        $entityManager = $this->getDoctrine()->getManager();

        $student = $this->getDoctrine()
            ->getRepository(User::class)
            ->find(intval($request->request->get('student_id')));
        $trainer = $this->getDoctrine()
            ->getRepository(User::class)
            ->find(intval($request->request->get('trainer_id')));
        $lesson = $this->getDoctrine()
            ->getRepository(Lessons::class)
            ->find(intval($request->request->get('lesson_id')));
        /** @var Review $review */
        $review = new Review();
        $review->setLesson($lesson);
        $review->setStudent($student);
        $review->setTrainer($trainer);
        $review->setRate($request->request->get('rate'));
        $review->setTactics($request->request->get('tactics'));
        $review->setScatter($request->request->get('scatter'));
        $review->setAim($request->request->get('aim'));
        $review->setMentor($request->request->get('mentor'));
        $review->setDuel($request->request->get('duel'));
        $review->setComment($request->request->get('comment'));


        $entityManager->persist($review);
        $entityManager->flush();

        return $this->json([
            'status' => 200,
        ]);
    }

    /**
     * Characteristic /ru/review/*
     *
     * @Route("/ru/rate/by-user/{id}", name="get_user_rate")
     */
    public function getUserRate($id)
    {
        /** @var Review $reviews */
        $reviews = $this->getDoctrine()
            ->getRepository(Review::class)
            ->findRateByTrainerId($id);

        $sum = 0;
        $count = 0;
        $keys = [
            '1' => 0,
            '2' => 0,
            '3' => 0,
            '4' => 0,
            '5' => 0,
        ];
        foreach ($reviews['entity'] as $review)
        {
            $sum += $review['rate'];
            $keys[$review['rate']]++;
            $count++;
        }

        $result = 0;
        if($sum > 0)
        {
            $result = round($sum / $count, 2);
        }


        return $this->json($result);
    }
}

<?php

namespace App\Controller;

use App\Entity\Lessons;
use App\Entity\Review;
use App\Entity\User;
use App\Service\LessonService;
use App\Service\ReviewService;
use App\Traits\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/{_locale}", requirements={"locale": "ru"})
 */
class ReviewController extends AbstractController
{
    /**
     * @var LessonService
     */
    public $lessonService;

    /**
     * @var ReviewService
     */
    public $reviewService;

    /**
     * @var EntityManagerInterface
     */
    public $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;

        $this->lessonService = new LessonService($entityManager);
        $this->reviewService = new ReviewService($entityManager);
    }

    /**
     * @Route("/lesson/review/{lessonId}", methods={"POST"}, name="set_lesson_review")
     */
    public function setLessonReview(Request $request, $lessonId)
    {
        $entityManager = $this->getDoctrine()->getManager();

        $student = $this->getUser();
        $trainer = $this->getDoctrine()
            ->getRepository(User::class)
            ->find(intval($request->request->get('trainer_id')));

        /** @var Review $review */
        $review = new Review();
        $review->setStudent($student);
        $review->setTrainer($trainer);
        $review->setRate($request->request->get('rate'));
        $review->setLesson($lessonId);
        $review->setTactics($request->request->get('tactics') ?? false);
        $review->setDuel($request->request->get('duel') ?? false);
        $review->setScatter($request->request->get('scatter') ?? false);
        $review->setAim($request->request->get('aim') ?? false);
        $review->setMentor($request->request->get('mentor') ?? false);

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
     * @Route("/rate/by-user/{id}", name="get_user_rate")
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
        foreach ($reviews['entity'] as $review) {
            $sum += $review['rate'];
            $keys[$review['rate']]++;
            $count++;
        }

        $result = 0;
        if ($sum > 0) {
            $result = round($sum / $count, 2);
        }


        return $this->json($result);
    }

    /**
     * @Route("/trainer/reviews/{trainerId}", methods={"POST"}, name="get_user_rate")
     */
    public function getTrainerReviews($trainerId)
    {
        $reviews = $this->getDoctrine()
            ->getRepository(Review::class)
            ->findRateByTrainerId($trainerId);

        $reviewsData = $this->reviewService->reviewsDecorator($reviews);

        return $this->json($reviewsData);
    }

    /**
     * @Route("/review/lesson/{lessonId}", name="review.lesson.post")
     */
    public function lessonReview(Request $request, $lessonId)
    {
        $lesson = $this->lessonService->find($lessonId);

        $rating = $request->get('rating');
        $review = $request->get('review');

        if (isset($lesson) and isset($rating) and isset($review)) {
            $reviewEntity = $this->reviewService->findByLesson($lesson);

            if (empty($reviewEntity)) {
                $this->reviewService->create($lesson, $rating, $review);
            }
        }
        return $this->redirectToRoute('main');
    }

    /**
     * @Route("/check/permission/to/review")
     */
    public function checkPermissionToReview(Request $request)
    {
        $permission = false;
        $request = json_decode($request->getContent(), false);

        $trainer = $this->entityManager
            ->getRepository(User::class)
            ->find($request->trainerId);

        if (!empty($this->getUser())) {
            $lesson = $this->entityManager
                ->getRepository(Lessons::class)
                ->findOneBy([
                    'trainer' => $trainer,
                    'student' => $this->getUser()
                ]);

            if (isset($lesson)) {
                $permission = true;
            }
        }
        return $this->json($permission);
    }

    /**
     * @Route("/check/review/{lessonId}")
     */
    public function checkReviewExist($lessonId)
    {
        $lesson = $this->lessonService->find($lessonId);

        $reviews = $this->getDoctrine()
            ->getRepository(Review::class)
            ->findRateByTrainerId($trainerId);

        $reviewsData = $this->reviewService->reviewsDecorator($reviews);

        return $this->json($reviewsData);

    }
}

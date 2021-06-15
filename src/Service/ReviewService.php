<?php


namespace App\Service;


use App\Entity\Lessons;
use App\Entity\Review;
use App\Repository\ReviewRepository;
use App\Service\News\NewsService;

/**
 * Class ReviewService
 * @package App\Service
 */
class ReviewService extends EntityService
{
    protected $entity = Review::class;

    /**
     * @var ReviewRepository
     */
    protected $repository;

    /**
     * @param Lessons $lesson
     * @param $rating
     * @param $review
     * @param bool $tactics
     * @param bool $scatter
     * @param bool $aim
     * @param bool $mentor
     * @param bool $duel
     * @return mixed
     */
    public function create(
        Lessons $lesson,
        $rating,
        $review,
        $tactics = false,
        $scatter = false,
        $aim = false,
        $mentor = false,
        $duel = false)
    {
        /** @var Review $reviewEntity */
        $reviewEntity = new $this->entity;
        $reviewEntity->setLesson($lesson);
        $reviewEntity->setTrainer($lesson->getTrainer());
        $reviewEntity->setStudent($lesson->getStudent());
        $reviewEntity->setComment($review);

        $reviewEntity->setTactics($tactics);
        $reviewEntity->setScatter($scatter);
        $reviewEntity->setAim($aim);
        $reviewEntity->setMentor($mentor);
        $reviewEntity->setDuel($duel);

        $reviewEntity->setRate($rating);

        return $this->save($reviewEntity);
    }

    /**
     * @param $lesson
     * @return Review|null
     */
    public function findByLesson($lesson)
    {
        return $this->repository->findOneBy([
            'lesson' => $lesson
        ]);
    }

    /**
     * @param $reviews
     * @return array
     */
    public function reviewsDecorator($reviews)
    {
        $sum = 0;
        $count = 0;

        $rating = [];
        for ($i = 1; $i <= 10; $i++) {
            $rating[$i] = 0;
        }

        $reviewsParse = [];

        foreach ($reviews as $review) {
            /** @var Review $review */
            $sum += $review['rate'];
            $rating[$review['rate']]++;
            $count++;

            $newReview = $review;

            $reviewCreatedAt = $review['createdAt']->format('d F H:m');
            $newReview['dateRu'] = NewsService::replaceMonth($reviewCreatedAt);

            $reviewsParse[] = $newReview;
        }

        $result = 0;
        if ($sum > 0) {
            $result = round($sum / $count, 2);
        }

        return [
            'reviews' => $reviewsParse,
            'reviewCount' => $count,
            'ratingTotal' => $result,
            'rating' => $rating
        ];
    }

    public function reviewsDecoratorForOne($reviews)
    {
        $sum = 0;
        $count = 0;

        $rating = [];
        for ($i = 1; $i <= 10; $i++) {
            $rating[$i] = 0;
        }

        $reviewsParse = [];
        foreach ($reviews as $review) {
            /** @var Review $review */
            $sum += $review->getRate();
            $rating[$review->getRate()]++;
            $count++;

            $newReview = [
                'id' => $review->getId(),
                'text' => $review->getComment(),
                'rate' => $review->getRate(),
                'date' => $review->getCreatedAt()->format('Y.m.d H:i:s')
            ];

            //$reviewCreatedAt = $review->getCreatedAt()->format('d F H:m');
            //$newReview['dateRu'] = NewsService::replaceMonth($reviewCreatedAt);

            $reviewsParse = $newReview;
        }
        $result = 0;
        if ($sum > 0) {
            $result = round($sum / $count, 2);
        }

        return [
            'reviews' => $reviewsParse,
            'reviewCount' => $count,
            'ratingTotal' => $result,
            'rating' => $rating
        ];
    }
}
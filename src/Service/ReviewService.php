<?php


namespace App\Service;


use App\Entity\Lessons;
use App\Entity\Review;
use App\Repository\ReviewRepository;

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
}
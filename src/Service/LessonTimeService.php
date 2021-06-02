<?php


namespace App\Service;


use App\Entity\Lessons;
use App\Entity\LessonTime;

class LessonTimeService extends EntityService
{
    protected $entity = LessonTime::class;

    protected $repository;

    /**
     * @param Lessons $lesson
     * @return array
     */
    public function getTimesByLesson(Lessons $lesson)
    {
        $lessonTimes = $this->repository->findBy([
            'lesson' => $lesson
        ]);

        $schedules = [];
        /** @var LessonTime $lessonTime */
        foreach ($lessonTimes as $lessonTime) {
            $schedules[] = $lessonTime->getTrainerTime();
        }
        return $schedules;
    }
}
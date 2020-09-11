<?php


namespace App\Service;


use App\Entity\Lessons;

class LessonService extends EntityService
{
    protected $entity = Lessons::class;

    protected $repository;

    /**
     * @param $teacher
     * @param $datetime
     * @return mixed
     */
    public function getByTeacherAndDate($teacher, $datetime)
    {
        return $this->repository->getByTeacherAndDate($teacher, $datetime);
    }
}
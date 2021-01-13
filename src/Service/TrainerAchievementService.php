<?php


namespace App\Service;


use App\Entity\Teachers;
use App\Entity\TrainerAchievement;

/**
 * Class TrainerAchievementService
 * @package App\Service
 */
class TrainerAchievementService extends EntityService
{
    protected $entity = TrainerAchievement::class;

    protected $repository;

    /**
     * @param Teachers $teacher
     * @param object $data
     * @return mixed
     */
    public function create(Teachers $teacher, object $data)
    {
        /** @var TrainerAchievement $achievement */
        $achievement = new $this->entity;
        $achievement->setTrainer($teacher);
        $achievement->setAchievement($data->achievement);
        $achievement->setShow($data->show);
        $achievement->setTournament($data->tournament);

        return $this->save($achievement);
    }
}
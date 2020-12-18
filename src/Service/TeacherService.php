<?php


namespace App\Service;


use App\Entity\Teachers;
use App\Entity\TrainerLessonPrice;

class TeacherService extends EntityService
{
    protected $entity = Teachers::class;

    protected $repository;

    /**
     * @param $id
     * @return mixed
     */
    public function findByUserId($id)
    {
        return $this->repository->findByUserId($id);
    }

    /**
     * @param Teachers $teacher
     * @return array
     */
    public function decorator(Teachers $teacher)
    {
        $availableCosts = [];

        /** @var TrainerLessonPrice $cost */
        foreach ($teacher->getCosts() as $cost){
            if($cost->getIsActive()){
                $availableCosts[] = $cost;
            }
        }
        return [
            'id' => $teacher->getId(),
            'method' => $teacher->getMethod(),
            'timeZone' => $teacher->getTimeZone(),
            'twitch' => $teacher->getTwitch(),
            'awards' => $teacher->getAwards(),
            'about' => $teacher->getAbout(),
            'globalElite' => $teacher->getGlobalElite(),
            'costs' => $availableCosts
        ];
    }
}
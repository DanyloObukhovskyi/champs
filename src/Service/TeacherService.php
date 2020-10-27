<?php


namespace App\Service;


use App\Entity\Teachers;

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
}
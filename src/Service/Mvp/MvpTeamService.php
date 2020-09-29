<?php


namespace App\Service\Mvp;


use App\Entity\MvpTeam;
use App\Entity\User;
use App\Service\EntityService;

class MvpTeamService extends EntityService
{
    protected $entity = MvpTeam::class;

    protected $repository;

    public function getByTag($tag)
    {
        return $this->repository->findOneBy(['tag' => $tag]);
    }

    public function create(User $user, $data)
    {
        /** @var MvpTeam $mvpTeam */
        $mvpTeam = new $this->entity;

        $mvpTeam->setCreator($user);
        $mvpTeam->setCapacity($data->capacity);
        $mvpTeam->setName($data->name);
        $mvpTeam->setTag($data->tag);

        $this->save($mvpTeam);
    }
}
<?php
/**
 * Product: champs.
 * Date: 24/06/2020
 */

namespace App\Service;


use App\Entity\Team;
use App\Repository\TeamRepository;

class TeamService extends EntityService
{
    protected $entity = Team::class;

    /** @var TeamRepository */
    protected $repository;

    public function create($values)
    {
        ini_set('max_execution_time', 0);

        //TODO: Создание команды
        $team = $this->repository->getByName($values['name']);
        if (isset($team))
        {
            $this->entityManager->persist($team);
            return $team;
        }

        $team = new $this->entity;
        $team->setName($values['name'])->setRegion($values['region']);

        $imageLogo = DownloadFile::getImage($values['logo']);
        if (!empty($imageLogo))
        {
            $team->setLogo($imageLogo);
        }

        $this->entityManager->persist($team);

        $this->entityManager->flush();

        return $team;
    }

    public function getByName($name)
    {
        $team = $this->repository->getByName($name);
        if (isset($team))
        {
            $this->entityManager->persist($team);
            return $team;
        }
        return null;
    }
}
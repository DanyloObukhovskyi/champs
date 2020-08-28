<?php
/**
 * Product: champs.
 * Date: 24/06/2020
 */

namespace App\Service;


use App\Entity\Person;
use App\Entity\Player;
use App\Entity\Team;
use App\Repository\PlayerRepository;

class PlayerService extends EntityService
{
    protected $entity = Player::class;

    /** @var PlayerRepository */
    protected $repository;

    public function create(Person $person, Team $team)
    {
        $player = $this->repository->getByPersonId($person->getId());
        if (isset($player))
        {
            $player->setTeam($team);
            $this->entityManager->persist($player);
            return $player;
        }

        /** @var Player $player */
        $player = new $this->entity;
        $player->setPerson($person)->setTeam($team);
//        $player->setName($values['name'])->setLogo($values['logo'])->setRegion($values['region']);
        $this->entityManager->persist($player);
//
        $this->entityManager->flush();

        return $player;
    }

    public function getByTeamAndNick($teamId, $nick)
    {
        try
        {
            $player = $this->repository->getByTeamAndNick($teamId, $nick);
        }
        catch (\Exception $e)
        {
            LoggerService::add($e->getMessage(), LoggerService::TYPE_INFO);
        }

        if (isset($player))
        {
            $this->entityManager->persist($player);
            return $player;
        }

        return false;
    }
}
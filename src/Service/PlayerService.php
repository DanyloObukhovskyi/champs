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

    /**
     * @param Person $person
     * @param Team $team
     * @return Player|null
     * @throws \Doctrine\ORM\NonUniqueResultException
     * @throws \Doctrine\ORM\ORMException
     * @throws \Doctrine\ORM\OptimisticLockException
     */
    public function create(Person $person, Team $team)
    {
        $player = $this->repository->getByPersonId($person->getId());
        if (isset($player)) {
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

    /**
     * @param $teamId
     * @param $nick
     * @return Player|bool|null
     * @throws \Doctrine\ORM\ORMException
     */
    public function getByTeamAndNick($teamId, $nick)
    {
        try {
            $player = $this->repository->getByTeamAndNick($teamId, $nick);
        } catch (\Exception $e) {
            LoggerService::add($e->getMessage(), LoggerService::TYPE_INFO);
        }

        if (isset($player)) {
            $this->entityManager->persist($player);
            return $player;
        }

        return false;
    }

    /**
     * @param $teamId
     * @return Player|bool|null
     * @throws \Doctrine\ORM\ORMException
     */
    public function getByTeam($teamId)
    {
        return $this->repository->getByTeam($teamId);
    }
}
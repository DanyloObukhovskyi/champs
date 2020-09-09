<?php


namespace App\Service;


use App\Entity\EventGroup;
use App\Repository\EventGroupRepository;

class EventGroupPlayService extends EntityService
{
    protected $entity = EventGroup::class;

    /** @var EventGroupRepository */
    protected $repository;

    public function create($event, $team, $groupName, $fields)
    {
        $eventGroup = $this->repository->findByGroupAndTeamAndEvent($groupName, $team, $event);

        if (empty($eventGroup))
        {
            /** @var EventGroup $eventGroup */
            $eventGroup = new $this->entity;
            $eventGroup->setTeam($team);
            $eventGroup->setGroupName($groupName);
            $eventGroup->setEvent($event);
        }
        $eventGroup->setM($fields['M'] ?? null);
        $eventGroup->setW($fields['W'] ?? null);
        $eventGroup->setT($fields['T'] ?? null);
        $eventGroup->setL($fields['L'] ?? null);
        $eventGroup->setRd($fields['RD'] ?? null);
        $eventGroup->setP($fields['P'] ?? null);

        $this->entityManager->persist($eventGroup);
        $this->entityManager->flush();

        return $eventGroup;
    }
}
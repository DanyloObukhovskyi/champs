<?php


namespace App\Service\Event;


use App\Entity\EventGroup;
use App\Repository\EventGroupRepository;
use App\Service\EntityService;

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

        return $this->save($eventGroup);
    }

    public function groupsDecorator($eventGroups)
    {
        $groups = [];

        /** @var EventGroup $eventGroup */
        foreach ($eventGroups as $eventGroup)
        {
            $groups[$eventGroup->getGroupName()][] = [
                'team' => $eventGroup->getTeam(),
                'm' => $eventGroup->getM(),
                'w' => $eventGroup->getW(),
                't' => $eventGroup->getT(),
                'l' => $eventGroup->getL(),
                'rd' => $eventGroup->getRd(),
                'p' => $eventGroup->getP()
            ];
        }
        return $groups;
    }
}
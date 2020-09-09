<?php


namespace App\Service;


use App\Entity\EventMapPool;

class EventMapPoolService extends EntityService
{
    protected $entity = EventMapPool::class;

    protected $repository;

    public function create($event, $map)
    {
        $eventMapPool = $this->repository->findByEventAndMap($event, $map);

        if (empty($eventMapPool))
        {
            /** @var EventMapPool $eventMapPool */
            $eventMapPool = new $this->entity;
            $eventMapPool->setEvent($event);
            $eventMapPool->setMap($map);

            $this->entityManager->persist($eventMapPool);
            $this->entityManager->flush();
        }

        return $eventMapPool;
    }
}
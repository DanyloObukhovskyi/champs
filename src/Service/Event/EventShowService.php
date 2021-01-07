<?php


namespace App\Service\Event;


use App\Entity\Event;
use App\Entity\EventShow;
use App\Service\EntityService;

class EventShowService extends EntityService
{
    protected $entity = EventShow::class;

    protected $repository;

    public function createOrUpdate(Event $event, $createdAt)
    {
        /** @var EventShow $showEvent */
        $showEvent = $this->repository->findByEvent($event);

        if (empty($showEvent)) {
            $showEvent = new $this->entity;

            $showEvent->setEvent($event);
        }
        $showEvent->setCreatedAt($createdAt);

        $this->entityManager->persist($showEvent);
        $this->entityManager->flush();

        return $showEvent;
    }
}
<?php


namespace App\Service;


use App\Entity\RelatedEvent;

class RelatedEventService extends EntityService
{
    protected $entity = RelatedEvent::class;

    protected $repository;

    public function create($event, $relatedEvent)
    {
        $related = $this->repository->findByEventAndRelated($event, $relatedEvent);

        if (empty($related))
        {
            /** @var RelatedEvent $related */
            $related = new $this->entity;
            $related->setEvent($event);
            $related->setRelated($relatedEvent);
        }

        $this->entityManager->persist($related);
        $this->entityManager->flush();

        return $related;
    }
}
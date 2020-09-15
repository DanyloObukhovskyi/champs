<?php


namespace App\Service\Event;


use App\Entity\RelatedEvent;
use App\Service\EntityService;

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

        return  $this->save($related);
    }
}
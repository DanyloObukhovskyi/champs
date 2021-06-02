<?php


namespace App\Service\Event;


use App\Entity\Event;
use App\Entity\EventShow;
use App\Entity\EventStream;
use App\Service\EntityService;

class EventStreamService extends EntityService
{
    protected $entity = EventStream::class;

    protected $repository;

    public function decorate(EventStream $stream)
    {
        return [
            'eventId' => $stream->getEvent()->getId(),
            'stream' => $stream->getStream(),
            'lang' => $stream->getFlagIcon()->getOrigName(),
            'icon' => $stream->getFlagIcon()->getName()
        ];
    }
}
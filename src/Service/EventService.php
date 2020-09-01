<?php
/**
 * Product: champs.
 * Date: 24/06/2020
 */

namespace App\Service;


use DateTime;
use App\Entity\Event;
use App\Repository\EventRepository;

class EventService extends EntityService
{
    protected $entity = Event::class;

    /** @var EventRepository */
    protected $repository;

    /**
     * @param $values
     * @param DateTime|null $parseDate
     * @return Event
     * @throws \Doctrine\ORM\ORMException
     * @throws \Doctrine\ORM\OptimisticLockException
     */
    public function create($values, DateTime $parseDate = null): Event
    {
        if (empty($values['name']))
        {
            $values['name'] = '';
        }
        $values['started_at'] = $values['started_at']->format("Y-m-d");

        /** @var Event $event */
        $event = $this->getByNameAndStartDate($values['name'], $values['started_at']);
        if (empty($event))
        {
            $event = new $this->entity;
        }
        if (empty($values['ended_at'])){
            $values['ended_at'] =  $values['started_at'];
        }
        if (is_string($values['ended_at'])){
            $values['ended_at'] = new \DateTime($values['ended_at']);
        }

        /** @var Event $event */
        $event
            ->setPrize($values['prize'])
            ->setCommandCount($values['teams'])
            ->setLocation($values['location'])
            ->setName($values['name'])
            ->setStartedAt(new \DateTime($values['started_at']))
            ->setCreatedAt($parseDate)
            ->setEndedAt($values['ended_at']);

        if (!empty($values['image']))
        {
            $image = DownloadFile::getImage($values['image']);
            if (isset($image))
            {
                $event->setImage($image);
            }
        }

        $this->entityManager->persist($event);

        $this->entityManager->flush();

        return $event;
    }

    /**
     * @param $name
     * @param $startAt
     * @return mixed|null
     * @throws \Doctrine\ORM\NonUniqueResultException
     * @throws \Doctrine\ORM\ORMException
     */
    public function getByNameAndStartDate($name, $startAt)
    {
        $event = $this->repository->getByNameAndStartDate($name, $startAt);
        if (isset($event))
        {
            $this->entityManager->persist($event);
            return $event;
        }

        return null;
    }

    /**
     * @param $name
     * @param $date
     * @return Event|null
     * @throws \Doctrine\ORM\NonUniqueResultException
     * @throws \Doctrine\ORM\ORMException
     */
    public function getByNameAndBetweenDate($name, $date)
    {
        $event = $this->repository->getByNameAndBetweenDate($name, $date);
        if (isset($event))
        {
            $this->entityManager->persist($event);
            return $event;
        }

        return null;
    }

    public function eventsDecorator(array $events)
    {
        $eventItems = [];
        foreach ($events as $event)
        {
            /** @var Event $event */
            $eventItems[] = [
                "name" => $event->getName(),
                "startedAt" => $event->getStartedAt(),
                "endedAt" => $event->getEndedAt(),
                "image" => $event->getImage(),
            ];
        }
        return $eventItems;
    }
}
<?php

namespace App\Entity;

use App\Repository\EventTeamAttendingRepository;
use Doctrine\ORM\Mapping as ORM;
use JsonSerializable;

/**
 * @ORM\Entity(repositoryClass=EventTeamAttendingRepository::class)
 */
class EventTeamAttending implements JsonSerializable
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=Team::class)
     */
    private $team;

    /**
     * @ORM\ManyToOne(targetEntity=Event::class, cascade={"persist", "remove"})
     */
    private $event;

    /**
     * @ORM\Column(type="string", nullable=true)
     */
    private $number;

    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return mixed
     */
    public function getTeam()
    {
        return $this->team;
    }

    /**
     * @param mixed $team
     */
    public function setTeam($team): void
    {
        $this->team = $team;
    }

    /**
     * @return mixed
     */
    public function getEvent()
    {
        return $this->event;
    }

    /**
     * @param mixed $event
     */
    public function setEvent($event): void
    {
        $this->event = $event;
    }

    /**
     * @return mixed
     */
    public function getNumber()
    {
        return $this->number;
    }

    /**
     * @param mixed $number
     */
    public function setNumber($number): void
    {
        $this->number = $number;
    }

    public function jsonSerialize()
    {

        return [
            'id' => $this->getId(),
            'team' => $this->getTeam(),
            'eventId' => $this->getEvent()->getId(),
            'number' => $this->getNumber(),
        ];
    }
}

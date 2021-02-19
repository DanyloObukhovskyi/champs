<?php

namespace App\Entity;

use App\Repository\EventMapPoolRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=EventMapPoolRepository::class)
 */
class EventMapPool implements \JsonSerializable
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=Event::class)
     */
    private $event;

    /**
     * @ORM\ManyToOne(targetEntity=Map::class)
     */
    private $map;

    public function getId(): ?int
    {
        return $this->id;
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
    public function getMap()
    {
        return $this->map;
    }

    /**
     * @param mixed $map
     */
    public function setMap($map): void
    {
        $this->map = $map;
    }

    /**
     * @return array|mixed
     */
    public function jsonSerialize()
    {

        return [
            "id" => $this->getId(),
            "event" => $this->getEvent(),
            "map" => $this->getMap()
        ];
    }
}

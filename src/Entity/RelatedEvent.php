<?php

namespace App\Entity;

use App\Repository\RelatedEventRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=RelatedEventRepository::class)
 */
class RelatedEvent
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
     * @ORM\ManyToOne(targetEntity=Event::class)
     */
    private $related;

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
    public function getRelated()
    {
        return $this->related;
    }

    /**
     * @param mixed $related
     */
    public function setRelated($related): void
    {
        $this->related = $related;
    }
}

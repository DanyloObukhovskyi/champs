<?php

namespace App\Entity;

use App\Repository\EventStreamRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=EventStreamRepository::class)
 */
class EventStream
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=Event::class, inversedBy="streams")
     */
    private $event;

    /**
     * @ORM\ManyToOne(targetEntity=FlagIcon::class)
     */
    private $flagIcon;

    /**
     * @ORM\Column (type="string")
     */
    private $stream;

    /**
     * @return int|null
     */
    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return Event|null
     */
    public function getEvent(): ?Event
    {
        return $this->event;
    }

    /**
     * @param Event|null $event
     * @return $this
     */
    public function setEvent(?Event $event): self
    {
        $this->event = $event;

        return $this;
    }

    /**
     * @return FlagIcon|null
     */
    public function getFlagIcon(): ?FlagIcon
    {
        return $this->flagIcon;
    }

    /**
     * @param FlagIcon|null $flagIcon
     * @return $this
     */
    public function setFlagIcon(?FlagIcon $flagIcon): self
    {
        $this->flagIcon = $flagIcon;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getStream()
    {
        return $this->stream;
    }

    /**
     * @param mixed $stream
     */
    public function setStream($stream): void
    {
        $this->stream = $stream;
    }
}

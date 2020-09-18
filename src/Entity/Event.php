<?php

namespace App\Entity;

use App\Repository\EventRepository;
use Carbon\Carbon;
use DateTime;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=EventRepository::class)
 */
class Event
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\Column(type="date", nullable=true)
     */
    private $started_at;

    /**
     * @ORM\Column(type="date", nullable=true)
     */
    private $ended_at;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $image;

    /**
     * @ORM\Column(type="string", length=255, nullable=true, name="image_header")
     */
    private $imageHeader;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $prize;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $Location;

    /**
     * @ORM\Column(type="string", nullable=true)
     */
    private $CommandCount;

    /**
     * @ORM\Column(type="datetime", name="created_at", nullable=true)
     */
    private $createdAt;

    /**
     * @ORM\Column(type="string", nullable=true)
     */
    private $url;

    /**
     * @ORM\ManyToOne(targetEntity=FlagIcon::class)
     */
    private $flagIcon;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getStartedAt(): ?\DateTimeInterface
    {
        return $this->started_at;
    }

    public function setStartedAt( $started_at): self
    {
        $this->started_at = $started_at;

        return $this;
    }

    public function getEndedAt(): ?\DateTimeInterface
    {
        return $this->ended_at;
    }

    public function setEndedAt( $ended_at): self
    {
        $this->ended_at = $ended_at;

        return $this;
    }

    public function getImage(): ?string
    {
        return $this->image;
    }

    public function setImage(?string $image): self
    {
        $this->image = $image;

        return $this;
    }

    public function getPrize(): ?string
    {
        return $this->prize;
    }

    public function setPrize(?string $prize): self
    {
        $this->prize = $prize;

        return $this;
    }

    public function getLocation(): ?string
    {
        return $this->Location;
    }

    public function setLocation(?string $Location): self
    {
        $this->Location = $Location;

        return $this;
    }

    public function getCommandCount(): ?int
    {
        return $this->CommandCount;
    }

    public function setCommandCount( $CommandCount): self
    {
        $this->CommandCount = $CommandCount;

        return $this;
    }

    public function getCreatedAt(): Carbon
    {
        return new Carbon($this->createdAt);
    }

    public function setCreatedAt($date): self
    {
        if (isset($date)){
            $date = new Carbon($date);
        }
        $this->createdAt = $date;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getImageHeader()
    {
        return $this->imageHeader;
    }

    /**
     * @param mixed $imageHeader
     */
    public function setImageHeader($imageHeader): void
    {
        $this->imageHeader = $imageHeader;
    }

    /**
     * @return mixed
     */
    public function getUrl()
    {
        return $this->url;
    }

    /**
     * @param mixed $url
     */
    public function setUrl($url): void
    {
        $this->url = $url;
    }

    /**
     * @return mixed
     */
    public function getFlagIcon()
    {
        return $this->flagIcon;
    }

    /**
     * @param mixed $flagIcon
     */
    public function setFlagIcon($flagIcon): void
    {
        $this->flagIcon = $flagIcon;
    }
}

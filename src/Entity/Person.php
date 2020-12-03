<?php

namespace App\Entity;

use App\Repository\PersonRepository;
use Carbon\Carbon;
use Doctrine\ORM\Mapping as ORM;
use JsonSerializable;

/**
 * @ORM\Entity(repositoryClass=PersonRepository::class)
 */
class Person implements JsonSerializable
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $photo;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $nick;

    /**
     * @ORM\OneToOne(targetEntity=Player::class, mappedBy="person", cascade={"persist", "remove"})
     */
    private $player;

    /**
     * @ORM\Column(type="boolean", name="is_week_player", nullable=true)
     */
    private $isWeekPlayer;

    /**
     * @ORM\Column(type="string", nullable=true)
     */
    private $rating;

    /**
     * @ORM\Column(type="datetime", nullable=true, name="parse_photo_date")
     */
    private $parsePhotoDate;

    /**
     * @ORM\Column(type="integer", nullable=true, name="flag_icon_id")
     */
    private $flagIconId;

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

    public function setName(?string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getPhoto(): ?string
    {
        return $this->photo;
    }

    public function setPhoto(?string $photo): self
    {
        $this->photo = $photo;

        return $this;
    }

    public function getNick(): ?string
    {
        return $this->nick;
    }

    public function setNick(string $nick): self
    {
        $this->nick = $nick;

        return $this;
    }

    public function getPlayer(): ?Player
    {
        return $this->player;
    }

    public function setPlayer(Player $player): self
    {
        $this->player = $player;

        // set the owning side of the relation if necessary
        if ($player->getPerson() !== $this) {
            $player->setPerson($this);
        }

        return $this;
    }

    /**
     * @return mixed
     */
    public function getIsWeekPlayer()
    {
        return $this->isWeekPlayer;
    }

    /**
     * @param mixed $isWeekPlayer
     */
    public function setIsWeekPlayer($isWeekPlayer): void
    {
        $this->isWeekPlayer = $isWeekPlayer;
    }

    /**
     * @return mixed
     */
    public function getRating()
    {
        return $this->rating;
    }

    /**
     * @param mixed $rating
     */
    public function setRating($rating): void
    {
        $this->rating = $rating;
    }

    /**
     * @throws \Exception
     */
    public function getParsePhotoDate()
    {
        return $this->parsePhotoDate;
    }

    /**
     * @param mixed $parsePhotoDate
     */
    public function setParsePhotoDate($parsePhotoDate): void
    {
        $this->parsePhotoDate = $parsePhotoDate;
    }

    /**
     * @return mixed
     */
    public function getFlagIconId()
    {
        return $this->flagIconId;
    }

    /**
     * @param mixed $flagIconId
     */
    public function setFlagIconId($flagIconId): void
    {
        $this->flagIconId = $flagIconId;
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

    public function jsonSerialize()
    {
       return [
           'name' => $this->getName(),
           'photo' => $this->getPhoto(),
           'nick' => $this->getNick()
       ];
    }
}

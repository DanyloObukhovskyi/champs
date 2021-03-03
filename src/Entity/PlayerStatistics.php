<?php

namespace App\Entity;

use App\Repository\PlayerStatisticsRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=PlayerStatisticsRepository::class)
 */
class PlayerStatistics
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
    private $adr;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $kast;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $rating;

    /**
     * @ORM\ManyToOne(targetEntity=Match::class, cascade={"persist", "remove"})
     * @ORM\JoinColumn(nullable=false)
     */
    private $game_match;

    /**
     * @ORM\ManyToOne(targetEntity=Player::class, cascade={"persist", "remove"})
     * @ORM\JoinColumn(nullable=false)
     */
    private $player;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $mapId;

    /**
     * @ORM\ManyToOne(targetEntity=Map::class, cascade={"persist", "remove"})
     */
    private $map;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $kd;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $type;

    /**
     * @ORM\Column(type="string", length=255, nullable=true, name="plus_minus")
     */
    private $plusMinus;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getAdr(): ?string
    {
        return $this->adr;
    }

    public function setAdr(string $adr): self
    {
        $this->adr = $adr;

        return $this;
    }

    public function getKast(): ?string
    {
        return $this->kast;
    }

    public function setKast(string $kast): self
    {
        $this->kast = $kast;

        return $this;
    }

    public function getRating(): ?string
    {
        return $this->rating;
    }

    public function setRating(string $rating): self
    {
        $this->rating = $rating;

        return $this;
    }

    public function getPlayer(): ?Player
    {
        return $this->player;
    }

    public function setPlayer(Player $player): self
    {
        $this->player = $player;

        return $this;
    }

    public function getMatch(): ?Match
    {
        return $this->game_match;
    }

    public function setMatch(?Match $game_match): self
    {
        $this->game_match = $game_match;

        return $this;
    }

    public function getMap(): ?Map
    {
        return $this->map;
    }

    public function setMap(?Map $map): self
    {
        $this->map = $map;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getMapId()
    {
        return $this->mapId;
    }

    /**
     * @param mixed $mapId
     */
    public function setMapId($mapId): void
    {
        $this->mapId = $mapId;
    }

    /**
     * @return mixed
     */
    public function getKd()
    {
        return $this->kd;
    }

    /**
     * @param mixed $kd
     */
    public function setKd($kd): void
    {
        $this->kd = $kd;
    }

    /**
     * @return mixed
     */
    public function getType()
    {
        return $this->type;
    }

    /**
     * @param mixed $type
     */
    public function setType($type): void
    {
        $this->type = $type;
    }

    /**
     * @return mixed
     */
    public function getPlusMinus()
    {
        return $this->plusMinus;
    }

    /**
     * @param mixed $plusMinus
     */
    public function setPlusMinus($plusMinus): void
    {
        $this->plusMinus = $plusMinus;
    }
}

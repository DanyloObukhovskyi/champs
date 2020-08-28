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
    private $side;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $kill_value;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $death_value;

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
     * @ORM\ManyToOne(targetEntity=Match::class)
     * @ORM\JoinColumn(nullable=false)
     */
    private $game_match;

    /**
     * @ORM\ManyToOne(targetEntity=Player::class)
     * @ORM\JoinColumn(nullable=false)
     */
    private $player;

    /**
     * @ORM\ManyToOne(targetEntity=Map::class)
     */
    private $map;


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getSide(): ?string
    {
        return $this->side;
    }

    public function setSide(string $side): self
    {
        $this->side = $side;

        return $this;
    }

    public function getKillValue(): ?string
    {
        return $this->kill_value;
    }

    public function setKillValue(string $kill_value): self
    {
        $this->kill_value = $kill_value;

        return $this;
    }

    public function getDeathValue(): ?string
    {
        return $this->death_value;
    }

    public function setDeathValue(string $death_value): self
    {
        $this->death_value = $death_value;

        return $this;
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
}

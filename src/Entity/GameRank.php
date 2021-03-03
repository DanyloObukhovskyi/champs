<?php

namespace App\Entity;

use App\Repository\GameRankRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=GameRankRepository::class)
 */
class GameRank
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=Game::class, cascade={"persist", "remove"})
     */
    private $game;

    /**
     * @ORM\Column(type="string")
     */
    private $rang;

    /**
     * @ORM\Column(type="string", nullable=true)
     */
    private $pointsFrom;

    /**
     * @ORM\Column(type="string", nullable=true)
     */
    private $pointsTo;

    /**
     * @ORM\Column(type="string")
     */
    private $icon;

    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return mixed
     */
    public function getGame()
    {
        return $this->game;
    }

    /**
     * @param mixed $game
     */
    public function setGame($game): void
    {
        $this->game = $game;
    }

    /**
     * @return mixed
     */
    public function getRank()
    {
        return $this->rang;
    }

    /**
     * @param mixed $rank
     */
    public function setRank($rank): void
    {
        $this->rank = $rank;
    }

    /**
     * @return mixed
     */
    public function getIcon()
    {
        return $this->icon;
    }

    /**
     * @param mixed $icon
     */
    public function setIcon($icon): void
    {
        $this->icon = $icon;
    }

    /**
     * @return mixed
     */
    public function getPointsFrom()
    {
        return $this->pointsFrom;
    }

    /**
     * @param mixed $pointsFrom
     */
    public function setPointsFrom($pointsFrom): void
    {
        $this->pointsFrom = $pointsFrom;
    }

    /**
     * @return mixed
     */
    public function getPointsTo()
    {
        return $this->pointsTo;
    }

    /**
     * @param mixed $pointsTo
     */
    public function setPointsTo($pointsTo): void
    {
        $this->pointsTo = $pointsTo;
    }
}

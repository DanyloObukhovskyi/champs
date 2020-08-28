<?php

namespace App\Entity;

use App\Repository\MatchPickAndBanRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=MatchPickAndBanRepository::class)
 */
class MatchPickAndBan
{
    public const
        OPERATION_TYPE_REMOVED = 1,
        OPERATION_TYPE_PICKED = 2,
        OPERATION_TYPE_LEFT = 3;

    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=Match::class, inversedBy="matchPickAndBans")
     * @ORM\JoinColumn(nullable=false)
     */
    private $game;

    /**
     * @ORM\ManyToOne(targetEntity=Team::class, cascade={"persist", "remove"})
     * @ORM\JoinColumn(nullable=true)
     */
    private $team;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $map;

    /**
     * @ORM\Column(type="smallint")
     */
    private $operation_type;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getGame(): ?Match
    {
        return $this->game;
    }

    public function setGame(?Match $game): self
    {
        $this->game = $game;

        return $this;
    }

    public function getTeam(): ?Team
    {
        return $this->team;
    }

    public function setTeam(?Team $team): self
    {
        $this->team = $team;

        return $this;
    }

    public function getMap(): ?string
    {
        return $this->map;
    }

    public function setMap(string $map): self
    {
        $this->map = $map;

        return $this;
    }

    public function getOperationType(): ?int
    {
        return $this->operation_type;
    }

    public function setOperationType(int $operation_type): self
    {
        $this->operation_type = $operation_type;

        return $this;
    }
}

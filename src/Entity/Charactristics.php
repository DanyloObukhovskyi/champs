<?php

namespace App\Entity;

use App\Repository\CharactristicsRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=CharactristicsRepository::class)
 */
class Charactristics
{
    public const CS_ROLES = [
        'Капитан',
        'Entry Fragger',
        'Support',
        'Снайпер',
        'Lurker'
    ];

    public const LOL_ROLES = [
        'ADC',
        'MID',
        'TOP',
        'Jungle',
        'Support'
    ];

    public const DOTA_ROLES = [
        'Carry',
        'Midlaner',
        'Hardlaner',
        'Semi-support',
        'Full-support'
    ];

    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="charactristics")
     * @ORM\JoinColumn(nullable=false)
     */
    private $user;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $game;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $hours;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $role;

    /**
     * @ORM\Column(type="json", nullable=true)
     */
    private $skills = [];

    /**
     * @ORM\Column(type="json", nullable=true)
     */
    private $goals = [];

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $cost;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }

    public function getGame(): ?string
    {
        return $this->game;
    }

    public function setGame(?string $game): self
    {
        $this->game = $game;

        return $this;
    }

    public function getHours(): ?int
    {
        return $this->hours;
    }

    public function setHours(?int $hours): self
    {
        $this->hours = $hours;

        return $this;
    }

    public function getRole(): ?string
    {
        return $this->role;
    }

    public function setRole(?string $role): self
    {
        $this->role = $role;

        return $this;
    }

    public function getSkills(): ?array
    {
        return $this->skills;
    }

    public function setSkills(?array $skills): self
    {
        $this->skills = $skills;

        return $this;
    }

    public function getGoals(): ?array
    {
        return $this->goals;
    }

    public function setGoals(?array $goals): self
    {
        $this->goals = $goals;

        return $this;
    }

    public function getCost(): ?int
    {
        return $this->cost;
    }

    public function setCost(?int $cost): self
    {
        $this->cost = $cost;

        return $this;
    }
}

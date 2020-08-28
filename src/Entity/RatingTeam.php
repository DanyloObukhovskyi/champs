<?php

namespace App\Entity;

use App\Repository\RatingTeamRepository;
use Carbon\Carbon;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=RatingTeamRepository::class)
 */
class RatingTeam
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="integer", name="team_id")
     */
    private $teamId;

    /**
     * @ORM\OneToOne(targetEntity=Team::class)
     */
    private $team;

    /**
     * @ORM\Column(type="datetime", name="created_at")
     */
    private $createdAt;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTeamId(): ?int
    {
        return $this->teamId;
    }

    public function setTeamId(int $team_id): self
    {
        $this->teamId = $team_id;

        return $this;
    }

    public function getCreatedAt(): ?Carbon
    {
        return Carbon::new($this->createdAt);
    }

    public function setCreatedAt($createdAt): self
    {

        $this->createdAt = $createdAt;

        return $this;
    }

    public function getTeam()
    {
        return $this->team;
    }

    public function setTeam($team): self
    {
        $this->team = $team;

        return $this;
    }
}

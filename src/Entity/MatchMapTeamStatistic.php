<?php

namespace App\Entity;

use App\Repository\MatchMapTeamStatisticRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=MatchMapTeamStatisticRepository::class)
 */
class MatchMapTeamStatistic
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="integer")
     */
    private $match_id;

    /**
     * @ORM\ManyToOne(targetEntity=Match::class)
     */
    private $match;

    /**
     * @ORM\Column(type="integer")
     */
    private $team_id;

    /**
     * @ORM\ManyToOne(targetEntity=Team::class)
     */
    private $team;

    /**
     * @ORM\Column(type="integer")
     */
    private $map_id;

    /**
     * @ORM\ManyToOne(targetEntity=Map::class)
     */
    private $map;
    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $win_rate;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getMatchId(): ?int
    {
        return $this->match_id;
    }

    public function setMatchId(int $match_id): self
    {
        $this->match_id = $match_id;

        return $this;
    }

    public function getTeamId(): ?int
    {
        return $this->team_id;
    }

    public function setTeamId(int $team_id): self
    {
        $this->team_id = $team_id;

        return $this;
    }

    public function getMapId(): ?int
    {
        return $this->map_id;
    }

    public function setMapId(int $map_id): self
    {
        $this->map_id = $map_id;

        return $this;
    }

    public function getWinRate(): ?string
    {
        return $this->win_rate;
    }

    public function setWinRate(?string $win_rate): self
    {
        $this->win_rate = $win_rate;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getMatch()
    {
        return $this->match;
    }

    /**
     * @param mixed $match
     */
    public function setMatch($match): void
    {
        $this->match = $match;
    }

    /**
     * @return mixed
     */
    public function getTeam()
    {
        return $this->team;
    }

    /**
     * @param mixed $team
     */
    public function setTeam($team): void
    {
        $this->team = $team;
    }

    /**
     * @return mixed
     */
    public function getMap()
    {
        return $this->map;
    }

    /**
     * @param mixed $map
     */
    public function setMap($map): void
    {
        $this->map = $map;
    }
}

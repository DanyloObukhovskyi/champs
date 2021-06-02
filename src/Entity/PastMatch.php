<?php

namespace App\Entity;

use App\Repository\PastMatchRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=PastMatchRepository::class)
 */
class PastMatch
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
     * @ORM\ManyToOne(targetEntity=Match::class, cascade={"persist", "remove"})
     */
    private $match;

    /**
     * @ORM\Column(type="integer")
     */
    private $team_id;

    /**
     * @ORM\ManyToOne(targetEntity=Team::class, cascade={"persist", "remove"})
     */
    private $team;

    /**
     * @ORM\Column(type="string")
     */
    private $score;

    /**
     * @ORM\Column(type="string")
     */
    private $team_two;

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
    public function getTeamId()
    {
        return $this->team_id;
    }

    /**
     * @param mixed $team_id
     */
    public function setTeamId($team_id): void
    {
        $this->team_id = $team_id;
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
    public function getScore()
    {
        return $this->score;
    }

    /**
     * @param mixed $score
     */
    public function setScore($score): void
    {
        $this->score = $score;
    }

    /**
     * @return mixed
     */
    public function getTeamTwo()
    {
        return $this->team_two;
    }

    /**
     * @param mixed $team_two
     */
    public function setTeamTwo($team_two): void
    {
        $this->team_two = $team_two;
    }
}

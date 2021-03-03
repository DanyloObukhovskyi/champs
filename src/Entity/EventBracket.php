<?php

namespace App\Entity;

use App\Repository\EventBracketRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=EventBracketRepository::class)
 */
class EventBracket
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $score1;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $score2;

    /**
     * @ORM\ManyToOne(targetEntity=Event::class, cascade={"persist", "remove"})
     */
    private $event;

    /**
     * @ORM\ManyToOne(targetEntity=Match::class, cascade={"persist", "remove"})
     */
    private $match;

    /**
     * @ORM\ManyToOne(targetEntity=Team::class, cascade={"persist", "remove"})
     */
    private $team1;

    /**
     * @ORM\ManyToOne(targetEntity=Team::class, cascade={"persist", "remove"})
     */
    private $team2;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $type;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $name;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getScore1(): ?string
    {
        return $this->score1;
    }

    public function setScore1($score1): self
    {
        $this->score1 = $score1;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getScore2()
    {
        return $this->score2;
    }

    /**
     * @param mixed $score2
     */
    public function setScore2($score2): void
    {
        $this->score2 = $score2;
    }

    /**
     * @return mixed
     */
    public function getEvent()
    {
        return $this->event;
    }

    /**
     * @param mixed $event
     */
    public function setEvent($event): void
    {
        $this->event = $event;
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
    public function getTeam1()
    {
        return $this->team1;
    }

    /**
     * @param mixed $team1
     */
    public function setTeam1($team1): void
    {
        $this->team1 = $team1;
    }

    /**
     * @return mixed
     */
    public function getTeam2()
    {
        return $this->team2;
    }

    /**
     * @param mixed $team2
     */
    public function setTeam2($team2): void
    {
        $this->team2 = $team2;
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
    public function getName()
    {
        return $this->name;
    }

    /**
     * @param mixed $name
     */
    public function setName($name): void
    {
        $this->name = $name;
    }
}

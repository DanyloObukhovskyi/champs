<?php

namespace App\Entity;

use App\Repository\ResultRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ResultRepository", repositoryClass=ResultRepository::class)
 */
class Result
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="integer", name="match_id")
     */
    private $matchId;

    /**
     * @ORM\Column(type="datetime", name="created_at")
     */
    private $createdAt;

    /**
     * @ORM\ManyToOne(targetEntity=Match::class)
     */
    private $match;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getMatchId(): ?int
    {
        return $this->matchId;
    }

    /**
     * @return mixed
     */
    public function getMatch()
    {
        return $this->match;
    }

    public function setMatch($match)
    {
        $this->match = $match;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getCreatedAt()
    {
        return $this->createdAt;
    }

    public function setCreatedAt($createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }
}

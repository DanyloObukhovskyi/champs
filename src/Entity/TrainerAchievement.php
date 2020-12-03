<?php

namespace App\Entity;

use App\Repository\TrainerAchievementRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=TrainerAchievementRepository::class)
 */
class TrainerAchievement
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="text")
     */
    private $tournament;

    /**
     * @ORM\Column(type="text")
     */
    private $achievement;

    /**
     * @ORM\Column(type="boolean")
     */
    private $show;

    /**
     * @ORM\ManyToOne(targetEntity=Teachers::class)
     */
    private $trainer;

    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return mixed
     */
    public function getShow()
    {
        return $this->show;
    }

    /**
     * @param mixed $show
     */
    public function setShow($show): void
    {
        $this->show = $show;
    }

    /**
     * @return mixed
     */
    public function getTrainer()
    {
        return $this->trainer;
    }

    /**
     * @param mixed $trainer
     */
    public function setTrainer($trainer): void
    {
        $this->trainer = $trainer;
    }

    /**
     * @return mixed
     */
    public function getTournament()
    {
        return $this->tournament;
    }

    /**
     * @param mixed $tournament
     */
    public function setTournament($tournament): void
    {
        $this->tournament = $tournament;
    }

    /**
     * @return mixed
     */
    public function getAchievement()
    {
        return $this->achievement;
    }

    /**
     * @param mixed $achievement
     */
    public function setAchievement($achievement): void
    {
        $this->achievement = $achievement;
    }
}

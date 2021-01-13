<?php

namespace App\Entity;

use App\Repository\TrainerAchievementRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=TrainerAchievementRepository::class)
 */
class TrainerAchievement implements \JsonSerializable
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
    private $isShow;

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
        return $this->isShow;
    }

    /**
     * @param mixed $show
     */
    public function setShow($show): void
    {
        $this->isShow = $show;
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

    /**
     * @return array
     */
    public function jsonSerialize()
    {
        return [
            'tournament' => $this->getTournament(),
            'achievement' => $this->getAchievement(),
            'show' => $this->getShow()
        ];
    }
}

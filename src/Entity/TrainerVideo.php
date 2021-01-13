<?php

namespace App\Entity;

use App\Repository\TrainerVideoRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=TrainerVideoRepository::class)
 */
class TrainerVideo implements \JsonSerializable
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=Teachers::class)
     */
    private $trainer;

    /**
     * @ORM\Column(type="string")
     */
    private $videoUrl;

    public function getId(): ?int
    {
        return $this->id;
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
    public function getVideoUrl()
    {
        return $this->videoUrl;
    }

    /**
     * @param mixed $videoUrl
     */
    public function setVideoUrl($videoUrl): void
    {
        $this->videoUrl = $videoUrl;
    }

    /**
     * @return array
     */
    public function jsonSerialize()
    {
        return [
            'videoUrl' => $this->getVideoUrl()
        ];
    }
}

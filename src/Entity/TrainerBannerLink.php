<?php

namespace App\Entity;

use App\Repository\TrainerBannerLinkRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=TrainerBannerLinkRepository::class)
 */
class TrainerBannerLink
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=TrainerBanner::class, cascade={"persist", "remove"})
     */
    private $trainerBanner;

    /**
     * @ORM\Column(type="string")
     */
    private $type;

    /**
     * @ORM\Column(type="string")
     */
    private $link;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $chanel_name;

    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return mixed
     */
    public function getTrainerBanner()
    {
        return $this->trainerBanner;
    }

    /**
     * @param mixed $trainerBanner
     */
    public function setTrainerBanner($trainerBanner): void
    {
        $this->trainerBanner = $trainerBanner;
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
    public function getLink()
    {
        return $this->link;
    }

    /**
     * @param mixed $link
     */
    public function setLink($link): void
    {
        $this->link = $link;
    }

    /**
     * @return mixed
     */
    public function getChanelName()
    {
        return $this->chanel_name;
    }

    public function setChanelName($chanel_name): void
    {
        $this->chanel_name = $chanel_name;
    }
}

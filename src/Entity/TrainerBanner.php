<?php

namespace App\Entity;

use App\Repository\TrainerBannerRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=TrainerBannerRepository::class)
 */
class TrainerBanner
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=Game::class, cascade={"persist", "remove"})
     */
    private $game;

    /**
     * @ORM\Column(type="string")
     */
    private $title;

    /**
     * @ORM\Column(type="text")
     */
    private $text;

    /**
     * @ORM\Column(type="string")
     */
    private $img;

    /**
     * @ORM\OneToMany(targetEntity=TrainerBannerLink::class, mappedBy="trainerBanner")
     */
    private $links;

    /**
     * @ORM\OneToMany(targetEntity=TrainerBannerLink::class, mappedBy="trainerBanner")
     */
    private $chanel_name;

    public function __construct()
    {
        $this->links = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return mixed
     */
    public function getTitle()
    {
        return $this->title;
    }

    /**
     * @param mixed $title
     */
    public function setTitle($title): void
    {
        $this->title = $title;
    }

    /**
     * @return mixed
     */
    public function getText()
    {
        return $this->text;
    }

    /**
     * @param mixed $text
     */
    public function setText($text): void
    {
        $this->text = $text;
    }

    /**
     * @return mixed
     */
    public function getImg()
    {
        return $this->img;
    }

    /**
     * @param mixed $img
     */
    public function setImg($img): void
    {
        $this->img = $img;
    }

    /**
     * @return ArrayCollection
     */
    public function getLinks()
    {
        return $this->links;
    }

    /**
     * @param ArrayCollection $links
     */
    public function setLinks(ArrayCollection $links): void
    {
        $this->links = $links;
    }

    public function getChanelName()
    {
        return $this->chanel_name;
    }

    /**
     * @param ArrayCollection $chanel_name
     */
    public function setChanelName(ArrayCollection $chanel_name): void
    {
        $this->chanel_name = $chanel_name;
    }

    /**
     * @return mixed
     */
    public function getGame()
    {
        return $this->game;
    }

    /**
     * @param mixed $game
     */
    public function setGame($game): void
    {
        $this->game = $game;
    }
}

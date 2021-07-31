<?php

namespace App\Entity;

use App\Repository\BlogsRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=BlogsRepository::class)
 */
class Blogs
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $title;

    /**
     * @ORM\Column(type="text")
     */
    private $text;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $logo;

    /**
     * @ORM\Column(type="datetime")
     */
    private $date;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="blogs")
     * @ORM\JoinColumn(nullable=false)
     */
    private $user_id;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $views;

    /**
     * @ORM\ManyToOne(targetEntity=Game::class, inversedBy="blogs")
     * @ORM\JoinColumn(nullable=false)
     */
    private $game_id;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $is_top;

    /**
     * @ORM\ManyToOne(targetEntity=BlogTypes::class, inversedBy="blogs")
     * @ORM\JoinColumn(nullable=false)
     */
    private $type_id;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getText(): ?string
    {
        return $this->text;
    }

    public function setText(string $text): self
    {
        $this->text = $text;

        return $this;
    }

    public function getLogo(): ?string
    {
        return $this->logo;
    }

    public function setLogo(string $logo): self
    {
        $this->logo = $logo;

        return $this;
    }

    public function getDate(): ?\DateTimeInterface
    {
        return $this->date;
    }

    public function setDate(\DateTimeInterface $date): self
    {
        $this->date = $date;

        return $this;
    }

    public function getUserId(): ?user
    {
        return $this->user_id;
    }

    public function setUserId(?user $user_id): self
    {
        $this->user_id = $user_id;

        return $this;
    }

    public function getViews(): ?int
    {
        return $this->views;
    }

    public function setViews(?int $views): self
    {
        $this->views = $views;

        return $this;
    }

    public function getGameId(): ?game
    {
        return $this->game_id;
    }

    public function setGameId(?game $game_id): self
    {
        $this->game_id = $game_id;

        return $this;
    }

    public function getIsTop(): ?bool
    {
        return $this->is_top;
    }

    public function setIsTop(?bool $is_top): self
    {
        $this->is_top = $is_top;

        return $this;
    }

    public function getTypeId(): ?BlogTypes
    {
        return $this->type_id;
    }

    public function setTypeId(?BlogTypes $type_id): self
    {
        $this->type_id = $type_id;

        return $this;
    }
}

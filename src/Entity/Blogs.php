<?php

namespace App\Entity;

use App\Repository\BlogsRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=BlogsRepository::class)
 */
class Blogs
{
    const ACTIVE = 1;
    const EDIT = 2;
    const BLOCK  = 3;
    const MODARATE = 4;
    const Preview = 5;

    public const TYPES = [
        self::ACTIVE => 'Принят',
        self::EDIT => 'Черновик',
        self::BLOCK => 'Отказано',
        self::MODARATE => 'На проверке',
        self::Preview => 'Черновик'
    ];

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
     * @ORM\Column(type="integer", nullable=true)
     */
    private $views;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $is_top;

    /**
     * @ORM\Column(type="integer")
     */
    private $status;

    /**
     * @ORM\OneToMany(targetEntity=BlogTags::class, mappedBy="blog")
     */
    private $tags;

    /**
     * @ORM\ManyToOne(targetEntity=Game::class, inversedBy="blogs")
     * @ORM\JoinColumn(nullable=false)
     */
    private $game;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="blogs")
     * @ORM\JoinColumn(nullable=false)
     */
    private $user;

    /**
     * @ORM\OneToMany(targetEntity=BlogComment::class, mappedBy="blog", orphanRemoval=true)
     */
    private $blogComments;

    /**
     * @ORM\OneToMany(targetEntity=BlogLikes::class, mappedBy="blog", orphanRemoval=true)
     */
    private $blogLikes;

    public function __construct()
    {
        $this->tags = new ArrayCollection();
        $this->blogComments = new ArrayCollection();
        $this->blogLikes = new ArrayCollection();
    }

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

    public function getViews(): ?int
    {
        return $this->views;
    }

    public function setViews(?int $views): self
    {
        $this->views = $views;

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

    public function getStatus(): ?int
    {
        return $this->status;
    }

    public function setStatus(int $status): self
    {
        $this->status = $status;

        return $this;
    }

    /**
     * @return Collection|BlogTags[]
     */
    public function getTags(): Collection
    {
        return $this->tags;
    }

    public function addTag(BlogTags $tag): self
    {
        if (!$this->tags->contains($tag)) {
            $this->tags[] = $tag;
            $tag->setBlog($this);
        }

        return $this;
    }

    public function removeTag(BlogTags $tag): self
    {
        if ($this->tags->removeElement($tag)) {
            // set the owning side to null (unless already changed)
            if ($tag->getBlog() === $this) {
                $tag->setBlog(null);
            }
        }

        return $this;
    }

    public function getGame(): ?game
    {
        return $this->game;
    }

    public function setGame(?game $game): self
    {
        $this->game = $game;

        return $this;
    }

    public function getUser(): ?user
    {
        return $this->user;
    }

    public function setUser(?user $user): self
    {
        $this->user = $user;

        return $this;
    }

    /**
     * @return Collection|BlogComment[]
     */
    public function getBlogComments(): Collection
    {
        return $this->blogComments;
    }

    public function addBlogComment(BlogComment $blogComment): self
    {
        if (!$this->blogComments->contains($blogComment)) {
            $this->blogComments[] = $blogComment;
            $blogComment->setBlog($this);
        }

        return $this;
    }

    public function removeBlogComment(BlogComment $blogComment): self
    {
        if ($this->blogComments->removeElement($blogComment)) {
            // set the owning side to null (unless already changed)
            if ($blogComment->getBlog() === $this) {
                $blogComment->setBlog(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|BlogLikes[]
     */
    public function getBlogLikes(): Collection
    {
        return $this->blogLikes;
    }

    public function addBlogLike(BlogLikes $blogLike): self
    {
        if (!$this->blogLikes->contains($blogLike)) {
            $this->blogLikes[] = $blogLike;
            $blogLike->setBlog($this);
        }

        return $this;
    }

    public function removeBlogLike(BlogLikes $blogLike): self
    {
        if ($this->blogLikes->removeElement($blogLike)) {
            // set the owning side to null (unless already changed)
            if ($blogLike->getBlog() === $this) {
                $blogLike->setBlog(null);
            }
        }

        return $this;
    }
}

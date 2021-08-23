<?php

namespace App\Entity;

use App\Repository\BlogLikesRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=BlogLikesRepository::class)
 */
class BlogLikes
{
    public const LIKE = 'like';

    public const DISLIKE = 'dislike';

    public const TYPES = [
        self::LIKE,
        self::DISLIKE
    ];

    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=blogs::class, inversedBy="blogLikes")
     * @ORM\JoinColumn(nullable=false)
     */
    private $blog;

    /**
     * @ORM\ManyToOne(targetEntity=user::class, inversedBy="blogLikes")
     * @ORM\JoinColumn(nullable=false)
     */
    private $user;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $type;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getBlog(): ?blogs
    {
        return $this->blog;
    }

    public function setBlog(?blogs $blog): self
    {
        $this->blog = $blog;

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

    public function getType(): ?string
    {
        return $this->type;
    }

    public function setType(?string $type): self
    {
        $this->type = $type;

        return $this;
    }
}

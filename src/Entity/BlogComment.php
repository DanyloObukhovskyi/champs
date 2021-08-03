<?php

namespace App\Entity;

use App\Repository\BlogCommentRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=BlogCommentRepository::class)
 */
class BlogComment
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=blogs::class, inversedBy="blogComments")
     * @ORM\JoinColumn(nullable=false)
     */
    private $blog;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $comment;

    /**
     * @ORM\ManyToOne(targetEntity=user::class, inversedBy="blogComments")
     * @ORM\JoinColumn(nullable=false)
     */
    private $user;

    /**
     * @ORM\OneToOne(targetEntity=blogComment::class, cascade={"persist", "remove"})
     */
    private $parent;

    /**
     * @ORM\OneToOne(targetEntity=BlogCommentLikes::class, mappedBy="comment", cascade={"persist", "remove"})
     */
    private $blogCommentLikes;

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

    public function getComment(): ?string
    {
        return $this->comment;
    }

    public function setComment(?string $comment): self
    {
        $this->comment = $comment;

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

    public function getParent(): ?blogComment
    {
        return $this->parent;
    }

    public function setParent(?blogComment $parent): self
    {
        $this->parent = $parent;

        return $this;
    }

    public function getBlogCommentLikes(): ?BlogCommentLikes
    {
        return $this->blogCommentLikes;
    }

    public function setBlogCommentLikes(BlogCommentLikes $blogCommentLikes): self
    {
        // set the owning side of the relation if necessary
        if ($blogCommentLikes->getComment() !== $this) {
            $blogCommentLikes->setComment($this);
        }

        $this->blogCommentLikes = $blogCommentLikes;

        return $this;
    }
}

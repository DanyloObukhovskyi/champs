<?php

namespace App\Entity;

use App\Repository\BlogCommentRepository;
use App\Service\Blog\BlogService;
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
     * @ORM\OneToMany(targetEntity=blogComment::class, mappedBy="parent")
     */
    private $children;

    /**
     * @ORM\Column(type="datetime")
     */
    private $createdAt;


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

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeInterface $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getChildren()
    {
        return $this->children;
    }

    /**
     * @return array|mixed
     */
    public function jsonSerialize()
    {
        return [
            'id' => $this->getId(),
            'blogId' => $this->getNews()->getId(),
            'user' => [
                'nickname' => $this->getUser()->getNickname(),
                'surname' => $this->getUser()->getFamily(),
                'name' => $this->getUser()->getName(),
                'photo' => $this->getUser()->getPhoto(),
            ],
            'comment' => $this->getComment(),
            'createdAt' => BlogService::replaceMonth($this->getCreatedAt()->format('d F H:i')),
            'children' => $this->getChildren()
        ];
    }
}

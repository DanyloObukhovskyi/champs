<?php

namespace App\Entity;

use App\Repository\NewsCommentRepository;
use App\Service\News\NewsService;
use Doctrine\ORM\Mapping as ORM;
use JsonSerializable;

/**
 * @ORM\Entity(repositoryClass=NewsCommentRepository::class)
 */
class NewsComment implements JsonSerializable
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=NewsComment::class, cascade={"persist", "remove"})
     */
    private $parent;

    /**
     * @ORM\ManyToOne(targetEntity=News::class, cascade={"persist", "remove"})
     */
    private $news;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, cascade={"persist", "remove"})
     */
    private $user;

    /**
     * @ORM\Column(type="text")
     */
    private $comment;

    /**
     * @ORM\Column(type="datetime")
     */
    private $createdAt;

    /**
     * @ORM\OneToMany(targetEntity=NewsComment::class, mappedBy="parent")
     */
    private $children;

    /**
     * @ORM\OneToMany(targetEntity=NewsCommentLike::class, mappedBy="comment")
     */
    private $likes;

    /**
     * NewsComment constructor.
     * @throws \Exception
     */
    public function __construct()
    {
        $this->createdAt = new \DateTime();
    }

    /**
     * @return int|null
     */
    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return mixed
     */
    public function getNews()
    {
        return $this->news;
    }

    /**
     * @param mixed $news
     */
    public function setNews($news): void
    {
        $this->news = $news;
    }

    /**
     * @return mixed
     */
    public function getComment()
    {
        return $this->comment;
    }

    /**
     * @param mixed $comment
     */
    public function setComment($comment): void
    {
        $this->comment = $comment;
    }

    /**
     * @return mixed
     */
    public function getCreatedAt()
    {
        return $this->createdAt;
    }

    /**
     * @param mixed $createdAt
     */
    public function setCreatedAt($createdAt): void
    {
        $this->createdAt = $createdAt;
    }

    /**
     * @return mixed
     */
    public function getUser()
    {
        return $this->user;
    }

    /**
     * @param mixed $user
     */
    public function setUser($user): void
    {
        $this->user = $user;
    }

    /**
     * @return mixed
     */
    public function getParent()
    {
        return $this->parent;
    }

    /**
     * @param mixed $parent
     */
    public function setParent($parent): void
    {
        $this->parent = $parent;
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
            'newsId' => $this->getNews()->getId(),
            'user' => [
                'nickname' => $this->getUser()->getNickname(),
                'surname' => $this->getUser()->getFamily(),
                'name' => $this->getUser()->getName(),
                'photo' => $this->getUser()->getPhoto(),
            ],
            'comment' => $this->getComment(),
            'createdAt' => NewsService::replaceMonth($this->getCreatedAt()->format('d F H:i')),
            'children' => $this->getChildren()
        ];
    }

    /**
     * @return mixed
     */
    public function getLikes()
    {
        return $this->likes;
    }
}

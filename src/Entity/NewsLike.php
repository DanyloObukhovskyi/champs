<?php

namespace App\Entity;

use App\Repository\NewsLikeRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=NewsLikeRepository::class)
 */
class NewsLike
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
     * @ORM\ManyToOne(targetEntity=News::class)
     */
    private $news;

    /**
     * @ORM\ManyToOne(targetEntity=User::class)
     */
    private $user;

    /**
     * @ORM\Column(type="string")
     */
    private $type;

    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return mixed
     */
    public function getType()
    {
        return $this->type;
    }

    /**
     * @return mixed
     */
    public function setType($type)
    {
        $this->type = $type;
    }

    public function setLike(): void
    {
        $this->type = self::LIKE;
    }

    public function setDislike(): void
    {
        $this->type = self::DISLIKE;
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
}

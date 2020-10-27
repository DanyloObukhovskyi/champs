<?php

namespace App\Entity;

use App\Repository\NewsTagRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\NewsTagRepository", repositoryClass=NewsTagRepository::class)
 */
class NewsTag
{
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
     * @ORM\Column(type="integer", type="string")
     */
    private $title;

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

    public function getColor()
    {
        $code = dechex(crc32($this->title));
        $code = substr($code, 0, 6);

        return $code;
    }
}

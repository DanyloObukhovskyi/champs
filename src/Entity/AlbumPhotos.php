<?php

namespace App\Entity;

use App\Repository\AlbumPhotosRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=AlbumPhotosRepository::class)
 */
class AlbumPhotos
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=Albums::class, inversedBy="path")
     */
    private $Album;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $path;

    /**
     * @return int|null
     */
    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return Albums|null
     */
    public function getAlbum(): ?Albums
    {
        return $this->Album;
    }

    /**
     * @param Albums|null $Album
     * @return $this
     */
    public function setAlbum(?Albums $Album): self
    {
        $this->Album = $Album;

        return $this;
    }

    /**
     * @return string|null
     */
    public function getPath(): ?string
    {
        return $this->path;
    }

    /**
     * @param string $path
     * @return $this
     */
    public function setPath(string $path): self
    {
        $this->path = $path;

        return $this;
    }
}

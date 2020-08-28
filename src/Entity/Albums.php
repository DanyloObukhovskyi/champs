<?php

namespace App\Entity;

use App\Repository\AlbumsRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=AlbumsRepository::class)
 */
class Albums
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\OneToMany(targetEntity=AlbumPhotos::class, mappedBy="Album")
     */
    private $photos;

    /**
     * Albums constructor.
     */
    public function __construct()
    {
        $this->photos = new ArrayCollection();
    }

    /**
     * @return int|null
     */
    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return string|null
     */
    public function getName(): ?string
    {
        return $this->name;
    }

    /**
     * @param string $name
     * @return $this
     */
    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    /**
     * @return Collection|AlbumPhotos[]
     */
    public function getPhotos(): Collection
    {
        return $this->photos;
    }

    /**
     * @param AlbumPhotos $photos
     * @return $this
     */
    public function addPhotos(AlbumPhotos $photos): self
    {
        if (!$this->photos->contains($photos)) {
            $this->photos[] = $photos;
            $photos->setAlbum($this);
        }

        return $this;
    }

    /**
     * @param AlbumPhotos $photos
     * @return $this
     */
    public function removePhotos(AlbumPhotos $photos): self
    {
        if ($this->photos->contains($photos)) {
            $this->photos->removeElement($photos);
            // set the owning side to null (unless already changed)
            if ($photos->getAlbum() === $this) {
                $photos->setAlbum(null);
            }
        }

        return $this;
    }
}

<?php

namespace App\Entity;

use App\Repository\AttrTypesRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=AttrTypesRepository::class)
 */
class AttrTypes
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
     * @ORM\OneToMany(targetEntity=BlogTypeAttr::class, mappedBy="attr_id")
     */
    private $blogTypeAttrs;

    public function __construct()
    {
        $this->blogTypeAttrs = new ArrayCollection();
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

    /**
     * @return Collection|BlogTypeAttr[]
     */
    public function getBlogTypeAttrs(): Collection
    {
        return $this->blogTypeAttrs;
    }

    public function addBlogTypeAttr(BlogTypeAttr $blogTypeAttr): self
    {
        if (!$this->blogTypeAttrs->contains($blogTypeAttr)) {
            $this->blogTypeAttrs[] = $blogTypeAttr;
            $blogTypeAttr->setAttrId($this);
        }

        return $this;
    }

    public function removeBlogTypeAttr(BlogTypeAttr $blogTypeAttr): self
    {
        if ($this->blogTypeAttrs->removeElement($blogTypeAttr)) {
            // set the owning side to null (unless already changed)
            if ($blogTypeAttr->getAttrId() === $this) {
                $blogTypeAttr->setAttrId(null);
            }
        }

        return $this;
    }
}

<?php

namespace App\Entity;

use App\Repository\SeoPagesMetaRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=SeoPagesMetaRepository::class)
 */
class SeoPagesMeta
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
    private $meta_tag;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $value;

    /**
     * @ORM\ManyToOne(targetEntity=SeoPages::class, inversedBy="meta")
     * @ORM\JoinColumn(nullable=false)
     */
    private $page;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getMetaTag(): ?string
    {
        return $this->meta_tag;
    }

    public function setMetaTag(string $meta_tag): self
    {
        $this->meta_tag = $meta_tag;

        return $this;
    }

    public function getValue(): ?string
    {
        return $this->value;
    }

    public function setValue(string $value): self
    {
        $this->value = $value;

        return $this;
    }

    public function getPageId(): ?SeoPages
    {
        return $this->page;
    }

    public function setPageId(?SeoPages $page): self
    {
        $this->page = $page;

        return $this;
    }
}

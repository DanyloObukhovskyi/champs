<?php

namespace App\Entity;

use App\Repository\BlogTypeAttrRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=BlogTypeAttrRepository::class)
 */
class BlogTypeAttr
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=BlogTypes::class, inversedBy="blogTypeAttr")
     * @ORM\JoinColumn(nullable=false)
     */
    private $blog_type_id;

    /**
     * @ORM\Column(type="integer")
     */
    private $value;

    /**
     * @ORM\ManyToOne(targetEntity=AttrTypes::class, inversedBy="blogTypeAttrs")
     * @ORM\JoinColumn(nullable=false)
     */
    private $attr_id;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getBlogTypeId(): ?BlogTypes
    {
        return $this->blog_type_id;
    }

    public function setBlogTypeId(?BlogTypes $blog_type_id): self
    {
        $this->blog_type_id = $blog_type_id;

        return $this;
    }

    public function getValue(): ?int
    {
        return $this->value;
    }

    public function setValue(int $value): self
    {
        $this->value = $value;

        return $this;
    }

    public function getAttrId(): ?AttrTypes
    {
        return $this->attr_id;
    }

    public function setAttrId(?AttrTypes $attr_id): self
    {
        $this->attr_id = $attr_id;

        return $this;
    }
}

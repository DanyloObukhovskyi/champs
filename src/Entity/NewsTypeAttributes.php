<?php

namespace App\Entity;

use App\Repository\NewsTypeAttributesRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=NewsTypeAttributesRepository::class)
 */
class NewsTypeAttributes
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="integer")
     */
    private $news_type_id;

    /**
     * @ORM\Column(type="integer")
     */
    private $attribute_id;

    /**
     * @ORM\Column(type="integer")
     */
    private $value;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNewsTypeId(): ?int
    {
        return $this->news_type_id;
    }

    public function setNewsTypeId(int $news_type_id): self
    {
        $this->news_type_id = $news_type_id;

        return $this;
    }

    public function getAttributeId(): ?int
    {
        return $this->attribute_id;
    }

    public function setAttributeId(int $attribute_id): self
    {
        $this->attribute_id = $attribute_id;

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
}

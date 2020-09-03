<?php

namespace App\Entity;

use App\Repository\FlagIconRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=FlagIconRepository::class)
 */
class FlagIcon
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
     * @ORM\Column(type="string", length=255, name="orig_name")
     */
    private $origName;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $extension;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getOrigName()
    {
        return $this->origName;
    }

    /**
     * @param mixed $origName
     */
    public function setOrigName($origName): void
    {
        $this->origName = $origName;
    }

    /**
     * @return mixed
     */
    public function getExtension()
    {
        return $this->extension;
    }

    /**
     * @param mixed $extension
     */
    public function setExtension($extension): void
    {
        $this->extension = $extension;
    }
}

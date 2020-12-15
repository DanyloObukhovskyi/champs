<?php

namespace App\Entity;

use App\Repository\GameRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=GameRepository::class)
 */
class Game
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string")
     */
    private $name;

    /**
     * @ORM\Column(type="string")
     */
    private $code;

    /**
     * @ORM\Column(type="string")
     */
    private $logo;

    /**
     * @ORM\Column(type="string")
     */
    private $sidebarIcon;

    /**
     * @ORM\Column(type="string")
     */
    private $newsIcon;

    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return mixed
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * @param mixed $name
     */
    public function setName($name): void
    {
        $this->name = $name;
    }

    /**
     * @return mixed
     */
    public function getCode()
    {
        return $this->code;
    }

    /**
     * @param mixed $code
     */
    public function setCode($code): void
    {
        $this->code = $code;
    }

    /**
     * @return mixed
     */
    public function getLogo()
    {
        return $this->logo;
    }

    /**
     * @param mixed $logo
     */
    public function setLogo($logo): void
    {
        $this->logo = $logo;
    }

    /**
     * @return mixed
     */
    public function getSidebarIcon()
    {
        return $this->sidebarIcon;
    }

    /**
     * @param mixed $sidebarIcon
     */
    public function setSidebarIcon($sidebarIcon): void
    {
        $this->sidebarIcon = $sidebarIcon;
    }

    /**
     * @return mixed
     */
    public function getNewsIcon()
    {
        return $this->newsIcon;
    }

    /**
     * @param mixed $newsIcon
     */
    public function setNewsIcon($newsIcon): void
    {
        $this->newsIcon = $newsIcon;
    }
}

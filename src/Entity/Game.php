<?php

namespace App\Entity;

use App\Repository\GameRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=GameRepository::class)
 */
class Game implements \JsonSerializable
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

    /**
     * @ORM\Column(type="string", nullable=true)
     */
    private $eventIcon;

    /**
     * @ORM\Column(type="boolean", options={"default": false})
     */
    private $active;

    /**
     * @ORM\Column(type="boolean", options={"default": false})
     */
    private $isDeleted;

    /**
     * @ORM\Column(type="boolean")
     */
    private $is_marketplace;

    /**
     * @ORM\Column(type="boolean")
     */
    private $show_rank;

    /**
     * @ORM\OneToMany(targetEntity=Blogs::class, mappedBy="game_id")
     */
    private $blogs;

    public function __construct()
    {
        $this->blogs = new ArrayCollection();
    }

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

    /**
     * @return array|mixed
     */
    public function jsonSerialize()
    {
        return [
            'id' => $this->getId(),
            'name' => $this->getName(),
            'code' => $this->getCode(),
            'logo' => $this->getLogo(),
            'newsIcon' => $this->getNewsIcon(),
            'sidebarIcon' => $this->getSidebarIcon(),
            'eventIcon' => $this->getEventIcon(),
            'active' => $this->getActive()
        ];
    }

    /**
     * @return mixed
     */
    public function getActive()
    {
        return $this->active;
    }

    /**
     * @param mixed $active
     */
    public function setActive($active): void
    {
        $this->active = $active;
    }

    /**
     * @return mixed
     */
    public function getIsDeleted()
    {
        return $this->isDeleted;
    }

    /**
     * @param mixed $isDeleted
     */
    public function setIsDeleted($isDeleted): void
    {
        $this->isDeleted = $isDeleted;
    }

    public function getIsMarketplace(): ?bool
    {
        return $this->is_marketplace;
    }

    public function setIsMarketplace(bool $is_marketplace): self
    {
        $this->is_marketplace = $is_marketplace;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getEventIcon()
    {
        return $this->eventIcon;
    }

    /**
     * @param mixed $eventIcon
     */
    public function setEventIcon($eventIcon): void
    {
        $this->eventIcon = $eventIcon;
    }

    public function getShowRank(): ?bool
    {
        return $this->show_rank;
    }

    public function setShowRank(bool $show_rank): self
    {
        $this->show_rank = $show_rank;

        return $this;
    }

    /**
     * @return Collection|Blogs[]
     */
    public function getBlogs(): Collection
    {
        return $this->blogs;
    }

    public function addBlog(Blogs $blog): self
    {
        if (!$this->blogs->contains($blog)) {
            $this->blogs[] = $blog;
            $blog->setGameId($this);
        }

        return $this;
    }

    public function removeBlog(Blogs $blog): self
    {
        if ($this->blogs->removeElement($blog)) {
            // set the owning side to null (unless already changed)
            if ($blog->getGameId() === $this) {
                $blog->setGameId(null);
            }
        }

        return $this;
    }
}

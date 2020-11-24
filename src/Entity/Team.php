<?php

namespace App\Entity;

use App\Repository\TeamRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=TeamRepository::class)
 */
class Team implements \JsonSerializable
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $logo;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $region;

    /**
     * @ORM\Column(type="integer", nullable=true, name="flag_icon_id")
     */
    private $flagIconId;

    /**
     * @ORM\ManyToOne(targetEntity=FlagIcon::class)
     */
    private $flagIcon;
    /**
     * @ORM\OneToMany(targetEntity=Player::class, mappedBy="team")
     */
    private $players;

    /**
     * @ORM\Column(type="datetime", nullable=true, name="parse_logo_date")
     */
    private $parseLogoDate;

    /**
     * @ORM\Column(type="datetime", nullable=true, name="parse_date")
     */
    private $parseDate;

    public function __construct()
    {
        $this->players = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getLogo(): ?string
    {
        return $this->logo;
    }

    public function setLogo(string $logo): self
    {
        $this->logo = $logo;

        return $this;
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

    public function getRegion(): ?string
    {
        return $this->region;
    }

    public function setRegion(?string $region): self
    {
        $this->region = $region;

        return $this;
    }

    /**
     * @return Collection|Player[]
     */
    public function getPlayers(): Collection
    {
        return $this->players;
    }

    public function addPlayer(Player $player): self
    {
        if (!$this->players->contains($player)) {
            $this->players[] = $player;
            $player->setTeam($this);
        }

        return $this;
    }

    public function removePlayer(Player $player): self
    {
        if ($this->players->contains($player)) {
            $this->players->removeElement($player);
            // set the owning side to null (unless already changed)
            if ($player->getTeam() === $this) {
                $player->setTeam(null);
            }
        }

        return $this;
    }

    /**
     * @return mixed
     */
    public function getFlagIconId()
    {
        return $this->flagIconId;
    }

    /**
     * @param mixed $flagIconId
     */
    public function setFlagIconId($flagIconId): void
    {
        $this->flagIconId = $flagIconId;
    }

    /**
     * @return mixed
     */
    public function getFlagIcon()
    {
        return $this->flagIcon;
    }

    /**
     * @param mixed $flagIcon
     */
    public function setFlagIcon($flagIcon): void
    {
        $this->flagIcon = $flagIcon;
    }

    /**
     * @return mixed
     */
    public function getParseLogoDate()
    {
        return $this->parseLogoDate;
    }

    /**
     * @param mixed $parseLogoDate
     */
    public function setParseLogoDate($parseLogoDate): void
    {
        $this->parseLogoDate = $parseLogoDate;
    }

    /**
     * @return mixed
     */
    public function getParseDate()
    {
        return $this->parseDate;
    }

    /**
     * @param mixed $parseDate
     */
    public function setParseDate($parseDate): void
    {
        $this->parseDate = $parseDate;
    }

    public function jsonSerialize()
    {
        return [
            'id' => $this->getId(),
            'logo' => $this->getLogo(),
            'name' => $this->getName(),
            'flag' => $this->getFlagIcon(),
            'region' => $this->getRegion(),
        ];
    }
}

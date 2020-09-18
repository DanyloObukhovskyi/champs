<?php

namespace App\Entity;

use App\Repository\TeachersRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=TeachersRepository::class)
 */
class Teachers
{
    private const SERVICE_COMMISION = 0, //percents
                SERVICE_COST_MULTIPLIER = 1;
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="integer", nullable=false, unique=true)
     */
    private $userid;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $videolink;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $cost;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $about;

    /**
     * @ORM\Column(type="string", length=500, nullable=true)
     */
    private $shorttitle;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $method;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $twitch;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $streamType;

    private $comissionCost;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUserId(): int
    {
        return $this->userid;
    }

    public function setUser(int $userid): self
    {
        $this->userid = $userid;

        return $this;
    }

    public function getVideoLink(): ?string
    {
        return $this->videolink;
    }

    public function setVideoLink(?string $videolink): self
    {
        $this->videolink = $videolink;

        return $this;
    }

    public function getCost(): ?int
    {
        $percentageMarkup = $_ENV['PERCENTAGE_MARKUP_LESSON'];

        $cost = $this->cost;

        if (isset($percentageMarkup))
        {
            $cost = ($this->cost / 100)  * ($percentageMarkup + 100);
        }
        return $cost;
    }

    public function setCost(?int $cost): self
    {
        $this->cost = $cost;

        return $this;
    }

    public function getAbout(): ?string
    {
        return $this->about;
    }

    public function setAbout(?string $about): self
    {
        $this->about = $about;

        return $this;
    }

    public function getShorttitle(): ?string
    {
        return $this->shorttitle;
    }

    public function setShorttitle(?string $shorttitle): self
    {
        $this->shorttitle = $shorttitle;

        return $this;
    }

    public function getMethod(): ?string
    {
        return $this->method;
    }

    public function setMethod(?string $method): self
    {
        $this->method = $method;

        return $this;
    }

    public function getTwitch(): ?string
    {
        return $this->twitch;
    }

    public function setTwitch(?string $twitch): self
    {
        $this->twitch = $twitch;

        return $this;
    }

    public function getStreamType(): ?int
    {
        return $this->streamType;
    }

    public function setStreamType(?int $streamType): self
    {
        $this->streamType = $streamType;

        return $this;
    }

    public function getComissionCost()
    {
        return ($this->getCost()) * self::SERVICE_COST_MULTIPLIER;
    }
}

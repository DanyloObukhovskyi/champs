<?php

namespace App\Entity;

use App\Repository\StreamRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\StreamRepository", repositoryClass=StreamRepository::class)
 */
class Stream
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=Match::class, inversedBy="streams")
     * @ORM\JoinColumn(nullable=false)
     */
    private $game_match;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $url;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $language;

    /**
     * @return int|null
     */
    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return Match|null
     */
    public function getMatch(): ?Match
    {
        return $this->game_match;
    }

    /**
     * @param Match|null $game_match
     * @return $this
     */
    public function setMatch(?Match $game_match): self
    {
        $this->game_match = $game_match;

        return $this;
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
     * @return string|null
     */
    public function getUrl(): ?string
    {
        $this->url = str_replace('www.hltv.org', $_ENV['SITE_DOMAIN'] ?? $_SERVER['SERVER_NAME'], $this->url);

        return $this->url;
    }

    /**
     * @param string $url
     * @return $this
     */
    public function setUrl(string $url): self
    {
        $this->url = $url;

        return $this;
    }

    /**
     * @return string|null
     */
    public function getLanguage(): ?string
    {
        return $this->language;
    }

    /**
     * @param string|null $language
     * @return $this
     */
    public function setLanguage(?string $language): self
    {
        $this->language = $language;

        return $this;
    }

    /**
     * @return string
     */
    public function getType()
    {
        $type = 'youtube';
        if (strripos($this->getUrl(), 'youtube') === false)
        {
            $type = 'twich';
        }
        return $type;
    }
}

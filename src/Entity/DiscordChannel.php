<?php

namespace App\Entity;

use App\Repository\DiscordChannelRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=DiscordChannelRepository::class)
 */
class DiscordChannel
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
    private $discord_id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $channel_name;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $invite_link;

    /**
     * @ORM\Column(type="integer")
     */
    private $user_id;

    /**
     * @ORM\Column(type="integer")
     */
    private $trainer_id;

    /**
     * @ORM\Column(type="integer")
     */
    private $lesson_id;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDiscordId(): ?int
    {
        return $this->discord_id;
    }

    public function setDiscordId(int $discord_id): self
    {
        $this->discord_id = $discord_id;

        return $this;
    }

    public function getChannelName(): ?string
    {
        return $this->channel_name;
    }

    public function setChannelName(string $channel_name): self
    {
        $this->channel_name = $channel_name;

        return $this;
    }

    public function getInviteLink(): ?string
    {
        return $this->invite_link;
    }

    public function setInviteLink(string $invite_link): self
    {
        $this->invite_link = $invite_link;

        return $this;
    }

    public function getUserId(): ?int
    {
        return $this->user_id;
    }

    public function setUserId(int $user_id): self
    {
        $this->user_id = $user_id;

        return $this;
    }

    public function getTrainerId(): ?int
    {
        return $this->trainer_id;
    }

    public function setTrainerId(int $trainer_id): self
    {
        $this->trainer_id = $trainer_id;

        return $this;
    }

    public function getLessonId(): ?int
    {
        return $this->lesson_id;
    }

    public function setLessonId(int $lesson_id): self
    {
        $this->lesson_id = $lesson_id;

        return $this;
    }
}

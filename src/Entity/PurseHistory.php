<?php

namespace App\Entity;

use App\Repository\PurseHistoryRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=PurseHistoryRepository::class)
 */
class PurseHistory implements \JsonSerializable
{
    const SUCCESS_STATUS = 'success';

    const CANCELED_STATUS = 'canceled';

    const PENDING_STATUS = 'pending';

    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="purseHistories")
     * @ORM\JoinColumn(nullable=false)
     */
    private $user;

    /**
     * @ORM\Column(type="datetime")
     */
    private $datetime;

    /**
     * @ORM\Column(type="integer")
     */
    private $amount;

    /**
     * @ORM\Column(type="string", options={"default": "pending"})
     */
    private $status;

    /**
     * @return int|null
     */
    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return User|null
     */
    public function getUser(): ?User
    {
        return $this->user;
    }

    /**
     * @param User|null $user
     * @return $this
     */
    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }

    /**
     * @return \DateTimeInterface|null
     */
    public function getDatetime(): ?\DateTimeInterface
    {
        return $this->datetime;
    }

    /**
     * @param \DateTimeInterface $datetime
     * @return $this
     */
    public function setDatetime(\DateTimeInterface $datetime): self
    {
        $this->datetime = $datetime;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getAmount()
    {
        return $this->amount;
    }

    /**
     * @param mixed $amount
     * @return PurseHistory
     */
    public function setAmount(int $amount): self
    {
        $this->amount = $amount;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getStatus()
    {
        return $this->status;
    }

    /**
     * @param $status
     * @return $this
     */
    public function setStatus($status): self
    {
        $this->status = $status;

        return $this;
    }

    public function jsonSerialize()
    {
        return [
            'amount' => $this->getAmount(),
            'status' => $this->getStatus(),
            'date' => $this->getDatetime()->format('d-m-Y H:i:s'),
        ];
    }
}

<?php

namespace App\Entity;

use App\Repository\PaymentRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=PaymentRepository::class)
 * @ORM\HasLifecycleCallbacks()
 */
class Payment
{
    public const
        STATUS_NEW = 0,
        STATUS_OK = 1,
        STATUS_FAIL = 2;

    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $yandex_kassa_id;

    /**
     * @ORM\OneToOne(targetEntity=Lessons::class, cascade={"persist", "remove"})
     * @ORM\JoinColumn(nullable=false)
     */
    private $lesson;

    /**
     * @ORM\Column(type="json")
     */
    private $yandex_data = [];

    /**
     * @ORM\Column(type="integer")
     */
    private $payment_status;

    /**
     * @ORM\Column(type="datetime")
     */
    private $created_at;

    /**
     * @ORM\Column(type="datetime")
     */
    private $updated_at;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getYandexKassaId(): ?string
    {
        return $this->yandex_kassa_id;
    }

    public function setYandexKassaId(string $yandex_kassa_id): self
    {
        $this->yandex_kassa_id = $yandex_kassa_id;

        return $this;
    }

    public function getLesson(): ?Lessons
    {
        return $this->lesson;
    }

    public function setLesson(Lessons $lesson): self
    {
        $this->lesson = $lesson;

        return $this;
    }

    public function getYandexData(): ?array
    {
        return $this->yandex_data;
    }

    public function setYandexData(array $yandex_data): self
    {
        $this->yandex_data = $yandex_data;

        return $this;
    }

    public function getPaymentStatus(): ?int
    {
        return $this->payment_status;
    }

    public function setPaymentStatus(int $payment_status): self
    {
        $this->payment_status = $payment_status;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->created_at;
    }

    public function setCreatedAt(\DateTimeInterface $created_at): self
    {
        $this->created_at = $created_at;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeInterface
    {
        return $this->updated_at;
    }

    public function setUpdatedAt(\DateTimeInterface $updated_at): self
    {
        $this->updated_at = $updated_at;

        return $this;
    }

    /**
     * @ORM\PrePersist
     */
    public function setCreatedAtValue()
    {
        $this->created_at = new \DateTime();
    }

    /**
     * @ORM\PreUpdate,
     * @ORM\PrePersist
     */
    public function setUpdatedAtValue(): self
    {
        $this->updated_at = new \DateTime();

        return $this;
    }
}

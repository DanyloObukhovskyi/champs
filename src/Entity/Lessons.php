<?php

namespace App\Entity;

use App\Repository\LessonsRepository;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\Persistence\Event\LifecycleEventArgs;

/**
 * @ORM\Entity(repositoryClass=LessonsRepository::class)
 */
class Lessons
{
    public const STATUS_NEW = 0;

    public const STATUS_ENDED = 1;

    public const LESSON_HOURS = 3;

    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\User", inversedBy="id", cascade={"persist", "remove"})
     */
    private $student;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\User", inversedBy="id", cascade={"persist", "remove"})
     */
    private $trainer;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $dateTimeFrom;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $dateTimeTo;

    /**
     * @ORM\Column(type="integer")
     */
    private $cost;

    /**
     * @ORM\Column(type="smallint")
     */
    private $status;

    /**
     * @ORM\Column(type="boolean")
     */
    private $student_status;

    /**
     * @ORM\Column(type="boolean")
     */
    private $trainer_status;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $isCanceled;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $isNotice;

    /**
     * @ORM\OneToOne(targetEntity=Review::class, mappedBy="lesson", cascade={"persist", "remove"})
     */
    private $review;

    /**
     * @ORM\Column(type="string", nullable=true, options={"default" : "individual"})
     */
    private $type;

    /**
     * @ORM\Column(type="string", nullable=true)
     */
    private $trainerNotice;

    /**
     * @ORM\OneToOne(targetEntity=Payment::class, mappedBy="lesson", cascade={"persist", "remove"})
     */
    private $payment;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $trenerPrice;

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
    public function getStudent(): ?User
    {
        return $this->student;
    }

    /**
     * @param User $student_id
     * @return $this
     */
    public function setStudent(User $student_id): self
    {
        $this->student = $student_id;

        return $this;
    }

    /**
     * @return User|null
     */
    public function getTrainer(): ?User
    {
        return $this->trainer;
    }

    /**
     * @param User $trainer
     * @return $this
     */
    public function setTrainer(User $trainer): self
    {
        $this->trainer = $trainer;

        return $this;
    }

    /**
     * @return int|null
     */
    public function getCost(): ?int
    {
        return $this->cost;
    }

    /**
     * @param int $cost
     * @return $this
     */
    public function setCost(int $cost): self
    {
        $this->cost = $cost;

        return $this;
    }

    /**
     * @return int|null
     */
    public function getStatus(): ?int
    {
        return $this->status;
    }

    /**
     * @param int $status
     * @return $this
     */
    public function setStatus(int $status): self
    {
        $this->status = $status;

        return $this;
    }

    /**
     * @return bool|null
     */
    public function getStudentStatus(): ?bool
    {
        return $this->student_status;
    }

    /**
     * @param bool $student_status
     * @return $this
     */
    public function setStudentStatus(bool $student_status): self
    {
        $this->student_status = $student_status;

        return $this;
    }

    /**
     * @return bool|null
     */
    public function getTrainerStatus(): ?bool
    {
        return $this->trainer_status;
    }

    /**
     * @param bool $trainer_status
     * @return $this
     */
    public function setTrainerStatus(bool $trainer_status): self
    {
        $this->trainer_status = $trainer_status;

        return $this;
    }

    /**
     * @return Review|null
     */
    public function getReview(): ?Review
    {
        return $this->review;
    }

    /**
     * @param Review $review
     * @return $this
     */
    public function setReview(Review $review): self
    {
        $this->review = $review;

        // set the owning side of the relation if necessary
        if ($review->getLesson() !== $this) {
            $review->setLesson($this);
        }

        return $this;
    }

    /**
     * @return mixed
     */
    public function getDateTimeTo()
    {
        return $this->dateTimeTo;
    }

    /**
     * @param $dateTimeTo
     * @return $this
     */
    public function setDateTimeTo($dateTimeTo)
    {
        $this->dateTimeTo = $dateTimeTo;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getDateTimeFrom()
    {
        return $this->dateTimeFrom;
    }

    /**
     * @param mixed $dateTimeFrom
     */
    public function setDateTimeFrom($dateTimeFrom): void
    {
        $this->dateTimeFrom = $dateTimeFrom;
    }

    /**
     * @return mixed
     */
    public function getIsCanceled()
    {
        return $this->isCanceled;
    }

    /**
     * @param mixed $isCanceled
     */
    public function setIsCanceled($isCanceled): void
    {
        $this->isCanceled = $isCanceled;
    }

    /**
     * @return mixed
     */
    public function getIsNotice()
    {
        return $this->isNotice;
    }

    /**
     * @param mixed $isNotice
     */
    public function setIsNotice($isNotice): void
    {
        $this->isNotice = $isNotice;
    }

    /**
     * @return mixed
     */
    public function getType()
    {
        return $this->type;
    }

    /**
     * @param mixed $type
     */
    public function setType($type): void
    {
        $this->type = $type;
    }

    /**
     * @return mixed
     */
    public function getTrainerNotice()
    {
        return $this->trainerNotice;
    }

    /**
     * @param mixed $trainerNotice
     */
    public function setTrainerNotice($trainerNotice): void
    {
        $this->trainerNotice = $trainerNotice;
    }

    /**
     * @return mixed
     */
    public function getPayment()
    {
        return $this->payment;
    }

    /**
     * @param mixed $payment
     */
    public function setPayment($payment): void
    {
        $this->payment = $payment;
    }

    public function getTrenerPrice(): ?int
    {
        return $this->trenerPrice;
    }

    public function setTrenerPrice(?int $trenerPrice): self
    {
        $this->trenerPrice = $trenerPrice;

        return $this;
    }
}

<?php

namespace App\Entity;

use App\Repository\LessonsRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=LessonsRepository::class)
 */
class Lessons
{
    const
        STATUS_NEW = 0,
        STATUS_ENDED = 1;

    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\User", inversedBy="id")
     */
    private $student_id;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\User", inversedBy="id")
     */
    private $trainer_id;

    /**
     * @ORM\Column(type="datetime")
     */
    private $datetime;

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
     * @ORM\OneToOne(targetEntity=Review::class, mappedBy="lesson", cascade={"persist", "remove"})
     */
    private $review;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getStudentId(): ?User
    {
        return $this->student_id;
    }

    public function setStudentId(User $student_id): self
    {
        $this->student_id = $student_id;

        return $this;
    }

    public function getTrainerId(): ?User
    {
        return $this->trainer_id;
    }

    public function setTrainerId(User $trainer_id): self
    {
        $this->trainer_id = $trainer_id;

        return $this;
    }

    public function getDatetime(): ?\DateTimeInterface
    {
        return $this->datetime;
    }

    public function setDatetime(\DateTimeInterface $datetime): self
    {
        $this->datetime = $datetime;

        return $this;
    }

    public function getCost(): ?int
    {
        return $this->cost;
    }

    public function setCost(int $cost): self
    {
        $this->cost = $cost;

        return $this;
    }

    public function getStatus(): ?int
    {
        return $this->status;
    }

    public function setStatus(int $status): self
    {
        $this->status = $status;

        return $this;
    }

    public function getStudentStatus(): ?bool
    {
        return $this->student_status;
    }

    public function setStudentStatus(bool $student_status): self
    {
        $this->student_status = $student_status;

        return $this;
    }

    public function getTrainerStatus(): ?bool
    {
        return $this->trainer_status;
    }

    public function setTrainerStatus(bool $trainer_status): self
    {
        $this->trainer_status = $trainer_status;

        return $this;
    }

    public function getReview(): ?Review
    {
        return $this->review;
    }

    public function setReview(Review $review): self
    {
        $this->review = $review;

        // set the owning side of the relation if necessary
        if ($review->getLesson() !== $this) {
            $review->setLesson($this);
        }

        return $this;
    }
}

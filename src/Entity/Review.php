<?php

namespace App\Entity;

use App\Repository\ReviewRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ReviewRepository::class)
 */
class Review
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\OneToOne(targetEntity=Lessons::class, inversedBy="review", cascade={"persist", "remove"})
     * @ORM\JoinColumn(nullable=true)
     */
    private $lesson;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="reviews", cascade={"persist", "remove"})
     * @ORM\JoinColumn(nullable=false)
     */
    private $student;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="trainerReviews", cascade={"persist", "remove"})
     * @ORM\JoinColumn(nullable=false)
     */
    private $trainer;

    /**
     * @ORM\Column(type="smallint")
     */
    private $rate;

    /**
     * @ORM\Column(type="boolean", options={"default" : false})
     */
    private $tactics;

    /**
     * @ORM\Column(type="boolean", options={"default" : false})
     */
    private $scatter;

    /**
     * @ORM\Column(type="boolean", options={"default" : false})
     */
    private $aim;

    /**
     * @ORM\Column(type="boolean", options={"default" : false})
     */
    private $mentor;

    /**
     * @ORM\Column(type="boolean", options={"default" : false})
     */
    private $duel;

    /**
     * @ORM\Column(type="text")
     */
    private $comment;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $createdAt;

    /**
     * Review constructor.
     * @throws \Exception
     */
    public function __construct()
    {
        $this->createdAt = new \DateTime();
    }

    public function getId(): ?int
    {
        return $this->id;
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

    public function getStudent(): ?User
    {
        return $this->student;
    }

    public function setStudent(?User $student): self
    {
        $this->student = $student;

        return $this;
    }

    public function getTrainer(): ?User
    {
        return $this->trainer;
    }

    public function setTrainer(?User $trainer): self
    {
        $this->trainer = $trainer;

        return $this;
    }

    public function getRate(): ?int
    {
        return $this->rate;
    }

    public function setRate(int $rate): self
    {
        $this->rate = $rate;

        return $this;
    }

    public function getTactics(): ?bool
    {
        return $this->tactics;
    }

    public function setTactics(bool $tactics): self
    {
        $this->tactics = $tactics;

        return $this;
    }

    public function getScatter(): ?bool
    {
        return $this->scatter;
    }

    public function setScatter(bool $scatter): self
    {
        $this->scatter = $scatter;

        return $this;
    }

    public function getAim(): ?bool
    {
        return $this->aim;
    }

    public function setAim(bool $aim): self
    {
        $this->aim = $aim;

        return $this;
    }

    public function getMentor(): ?bool
    {
        return $this->mentor;
    }

    public function setMentor(bool $mentor): self
    {
        $this->mentor = $mentor;

        return $this;
    }

    public function getDuel(): ?bool
    {
        return $this->duel;
    }

    public function setDuel(bool $duel): self
    {
        $this->duel = $duel;

        return $this;
    }

    public function getComment(): ?string
    {
        return $this->comment;
    }

    public function setComment(string $comment): self
    {
        $this->comment = $comment;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getCreatedAt()
    {
        return $this->createdAt;
    }
}

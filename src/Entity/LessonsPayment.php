<?php

namespace App\Entity;

use App\Repository\LessonsPaymentRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=LessonsPaymentRepository::class)
 */
class LessonsPayment
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=Payment::class)
     */
    private $payment;

    /**
     * @ORM\ManyToOne(targetEntity=Lessons::class)
     */
    private $lesson;

    public function getId(): ?int
    {
        return $this->id;
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

    /**
     * @return mixed
     */
    public function getLesson()
    {
        return $this->lesson;
    }

    /**
     * @param mixed $lesson
     */
    public function setLesson($lesson): void
    {
        $this->lesson = $lesson;
    }
}

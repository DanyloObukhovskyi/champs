<?php

namespace App\Entity;

use App\Repository\LessonTimeRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=LessonTimeRepository::class)
 */
class LessonTime
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=Lessons::class)
     */
    private $lesson;

    /**
     * @ORM\ManyToOne(targetEntity=Schedule::class)
     */
    private $trainerTime;

    public function getId(): ?int
    {
        return $this->id;
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

    /**
     * @return mixed
     */
    public function getTrainerTime()
    {
        return $this->trainerTime;
    }

    /**
     * @param mixed $trainerTime
     */
    public function setTrainerTime($trainerTime): void
    {
        $this->trainerTime = $trainerTime;
    }
}

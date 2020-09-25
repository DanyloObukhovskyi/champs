<?php

namespace App\Entity;

use App\Repository\SchleduleRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=SchleduleRepository::class)
 */
class Schledule
{
    const
        TIME_STATUS_BLOCK = 0,
        TIME_STATUS_OPEN = 1,
        TIME_STATUS_RESERVED =10;
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="integer")
     */
    private $trainer_id;

    /**
     * @ORM\Column(type="date")
     */
    private $date;

    /**
     * @ORM\Column(type="smallint")
     */
    private $time10_11;

    /**
     * @ORM\Column(type="smallint")
     */
    private $time11_12;

    /**
     * @ORM\Column(type="smallint")
     */
    private $time12_13;

    /**
     * @ORM\Column(type="smallint")
     */
    private $time13_14;

    /**
     * @ORM\Column(type="smallint")
     */
    private $time14_15;

    /**
     * @ORM\Column(type="smallint")
     */
    private $time15_16;

    /**
     * @ORM\Column(type="smallint")
     */
    private $time16_17;

    /**
     * @ORM\Column(type="smallint")
     */
    private $time17_18;

    public function getId(): ?int
    {
        return $this->id;
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

    public function getDate(): ?\DateTimeInterface
    {
        return $this->date;
    }

    public function setDate($date): self
    {
        $this->date = $date;

        return $this;
    }

    public function getTime1011(): ?int
    {
        return $this->time10_11;
    }

    public function setTime1011(int $time10_11): self
    {
        $this->time10_11 = $time10_11;

        return $this;
    }

    public function getTime1112(): ?int
    {
        return $this->time11_12;
    }

    public function setTime1112(int $time11_12): self
    {
        $this->time11_12 = $time11_12;

        return $this;
    }

    public function getTime1213(): ?int
    {
        return $this->time12_13;
    }

    public function setTime1213(int $time12_13): self
    {
        $this->time12_13 = $time12_13;

        return $this;
    }

    public function getTime1314(): ?int
    {
        return $this->time13_14;
    }

    public function setTime1314(int $time13_14): self
    {
        $this->time13_14 = $time13_14;

        return $this;
    }

    public function getTime1415(): ?int
    {
        return $this->time14_15;
    }

    public function setTime1415(int $time14_15): self
    {
        $this->time14_15 = $time14_15;

        return $this;
    }

    public function getTime1516(): ?int
    {
        return $this->time15_16;
    }

    public function setTime1516(int $time15_16): self
    {
        $this->time15_16 = $time15_16;

        return $this;
    }

    public function getTime1617(): ?int
    {
        return $this->time16_17;
    }

    public function setTime1617(int $time16_17): self
    {
        $this->time16_17 = $time16_17;

        return $this;
    }

    public function getTime1718(): ?int
    {
        return $this->time17_18;
    }

    public function setTime1718(int $time17_18): self
    {
        $this->time17_18 = $time17_18;

        return $this;
    }
}

<?php

namespace App\Entity;

use App\Repository\EventGroupRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=EventGroupRepository::class)
 */
class EventGroup
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * Матчей
     *
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $m;

    /**
     * Выиграно матчей
     *
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $w;

    /**
     * Матчи ничья
     *
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $t;

    /**
     * Проигранные матчи
     *
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $l;

    /**
     * Разница раундов
     *
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $rd;

    /**
     * Очки
     *
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $p;

    /**
     * @ORM\ManyToOne(targetEntity=Event::class)
     */
    private $event;

    /**
     * @ORM\ManyToOne(targetEntity=Team::class)
     */
    private $team;

    /**
     * @ORM\Column(type="string", length=255, nullable=true, name="group_name")
     */
    private $groupName;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getM(): ?string
    {
        return $this->m;
    }

    public function setM(?string $m): self
    {
        $this->m = $m;

        return $this;
    }

    public function getW(): ?string
    {
        return $this->w;
    }

    public function setW(?string $w): self
    {
        $this->w = $w;

        return $this;
    }

    public function getT(): ?string
    {
        return $this->t;
    }

    public function setT(?string $t): self
    {
        $this->t = $t;

        return $this;
    }

    public function getL(): ?string
    {
        return $this->l;
    }

    public function setL(?string $l): self
    {
        $this->l = $l;

        return $this;
    }

    public function getRd(): ?string
    {
        return $this->rd;
    }

    public function setRd(?string $rd): self
    {
        $this->rd = $rd;

        return $this;
    }

    public function getP(): ?string
    {
        return $this->p;
    }

    public function setP(?string $p): self
    {
        $this->p = $p;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getEvent()
    {
        return $this->event;
    }

    /**
     * @param mixed $event
     */
    public function setEvent($event): void
    {
        $this->event = $event;
    }

    /**
     * @return mixed
     */
    public function getTeam()
    {
        return $this->team;
    }

    /**
     * @param mixed $team
     */
    public function setTeam($team): void
    {
        $this->team = $team;
    }

    /**
     * @return mixed
     */
    public function getGroupName()
    {
        return $this->groupName;
    }

    /**
     * @param mixed $group
     */
    public function setGroupName($group): void
    {
        $this->groupName = $group;
    }
}

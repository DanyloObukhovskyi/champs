<?php

namespace App\Entity;

use App\Repository\RatingPersonRepository;
use Carbon\Carbon;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\RatingPersonRepository", repositoryClass=RatingPersonRepository::class)
 */
class RatingPerson
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="integer", name="person_id")
     */
    private $personId;

    /**
     * @ORM\Column(type="datetime", name="created_at")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="string", name="rating")
     */
    private $rating;

    /**
     * @ORM\OneToOne(targetEntity=Person::class)
     */
    private $person;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPersonId(): ?int
    {
        return $this->personId;
    }

    public function setPersonId(int $personId): self
    {
        $this->personId = $personId;

        return $this;
    }

    public function getCreatedAt(): ?Carbon
    {
        return new Carbon($this->createdAt);
    }

    public function setCreatedAt($createdAt): self
    {

        $this->createdAt = $createdAt;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getRating()
    {
        return $this->rating;
    }

    /**
     * @param mixed $rating
     */
    public function setRating($rating): self
    {
        $this->rating = $rating;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getPerson()
    {
        return $this->person;
    }

    /**
     * @param mixed $person
     */
    public function setPerson($person): self
    {
        $this->person = $person;

        return $this;
    }
}

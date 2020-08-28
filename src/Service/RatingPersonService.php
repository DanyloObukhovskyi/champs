<?php


namespace App\Service;


use App\Entity\RatingPerson;
use App\Repository\RatingPersonRepository;

class RatingPersonService extends EntityService
{
    public const MATCHES_COUNT = 10;

    protected $entity = RatingPerson::class;

    /** @var RatingPersonRepository */
    protected $repository;

    public function update($ratingPerson, $rating, $createdAt)
    {
        $ratingPerson->setRating($rating)
            ->setCreatedAt($createdAt);

        $this->entityManager->persist($ratingPerson);
        $this->entityManager->flush();
    }

    public function create($person, $rating, $createdAt)
    {
        $ratingPerson = new $this->entity;
        $ratingPerson->setPerson($person)
            ->setRating($rating)
            ->setCreatedAt($createdAt);

        $this->entityManager->persist($ratingPerson);
        $this->entityManager->flush();
    }
}
<?php


namespace App\Service;


use App\Entity\RatingTeam;
use App\Repository\RatingTeamRepository;

class RatingTeamService extends EntityService
{
    protected $entity = RatingTeam::class;

    /** @var RatingTeamRepository */
    protected $repository;

    public function update($ratingTeam, $createdAt)
    {
        $ratingTeam->setCreatedAt($createdAt);

        $this->entityManager->persist($ratingTeam);
        $this->entityManager->flush();
    }

    public function create($team, $createdAt)
    {
        $ratingTeam = new $this->entity;
        $ratingTeam->setTeam($team)
            ->setCreatedAt($createdAt);

        $this->entityManager->persist($ratingTeam);
        $this->entityManager->flush();
    }
}
<?php


namespace App\Service;


use App\Entity\PastMatch;

class PastMatchService extends EntityService
{
    protected $entity = PastMatch::class;

    protected $repository;

    public function create($match, $pastMatch, $matchTeam)
    {
        $past =  $this->repository->findMatch($match, $pastMatch, $matchTeam);

        if (empty($past)){
            $past = new $this->entity;
            $past->setMatch($match);
            $past->setTeamTwo($pastMatch['team_two']);
            $past->setScore($pastMatch['score']);
            $past->setTeam($matchTeam);

            $this->entityManager->persist($past);
            $this->entityManager->flush();
        }
        return $past;
    }
}
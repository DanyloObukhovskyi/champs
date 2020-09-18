<?php


namespace App\Service;


use App\Entity\Match;
use App\Entity\PastMatch;
use App\Entity\Team;

class PastMatchService extends EntityService
{
    protected $entity = PastMatch::class;

    protected $repository;

    /**
     * @param Match $match
     * @param array $pastMatch
     * @param Team $matchTeam
     * @return mixed
     * @throws \Doctrine\ORM\ORMException
     * @throws \Doctrine\ORM\OptimisticLockException
     */
    public function create(Match $match, array $pastMatch, Team $matchTeam)
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
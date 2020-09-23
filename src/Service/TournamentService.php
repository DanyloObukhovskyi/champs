<?php


namespace App\Service;


use App\Entity\Tournament;

class TournamentService extends EntityService
{
    protected $entity = Tournament::class;

    protected $repository;

    public function getAll()
    {
        $tournamentsEntities = $this->repository->getAll();

        $tournaments = [];
        foreach ($tournamentsEntities as $tournamentEntity)
        {
            $tournaments[] = $this->tournamentDecorator($tournamentEntity);
        }
        return $tournaments;
    }

    /**
     * @param Tournament $tournament
     * @return array
     */
    public function tournamentDecorator(Tournament $tournament)
    {
        return [
            'id' => $tournament->getId(),
            'name' => $tournament->getName(),
            'logo' => $tournament->getLogo(),
            'image' => $tournament->getImage(),
            'date' => $tournament->getDate()->format('d m Y • H:i'),
            'mode' => $tournament->getMode(),
            'access' => (bool)$tournament->getAccess(),
            'prize' => $tournament->getPrizeDescription()
        ];
    }

    public function find($id)
    {
        return $this->repository->find($id);
    }
}
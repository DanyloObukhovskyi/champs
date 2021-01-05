<?php


namespace App\Service\Game;


use App\Entity\Game;
use App\Entity\GameRank;
use App\Repository\GameRankRepository;
use App\Service\EntityService;

class GameRankService extends EntityService
{
    protected $entity = GameRank::class;

    /**
     * @var GameRankRepository
     */
    protected $repository;

    /**
     * @param Game $game
     * @return GameRank[]
     */
    public function getAllByGame(Game $game)
    {
        return $this->repository->findBy([
           'game' =>  $game
        ]);
    }
}
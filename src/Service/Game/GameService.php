<?php


namespace App\Service\Game;


use App\Entity\Game;
use App\Repository\GameRepository;
use App\Service\EntityService;

/**
 * Class GameService
 * @package App\Service\Game
 */
class GameService extends EntityService
{
    protected $entity = Game::class;

    /**
     * @var GameRepository
     */
    protected $repository;

    /**
     * @return Game[]
     */
    public function getAll()
    {
        return $this->repository->findBy([
            'isDeleted' => false
        ]);
    }
}
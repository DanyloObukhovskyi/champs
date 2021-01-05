<?php

namespace App\Controller;

use App\Entity\Game;
use App\Service\Game\GameRankService;
use App\Service\Game\GameService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/{_locale}", requirements={"locale": "ru"})
 */
class RanksController extends AbstractController
{
    /**
     * @var EntityManagerInterface
     */
    public $entityManager;

    /**
     * @var GameService
     */
    public $gameService;

    /**
     * @var GameRankService
     */
    public $gameRankService;

    /**
     * RanksController constructor.
     * @param EntityManagerInterface $entityManager
     */
    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;

        $this->gameService = new GameService($entityManager);
        $this->gameRankService = new GameRankService($entityManager);
    }

    /**
     * @Route("/ajax/ranks/all", name="purse")
     */
    public function getAllGameRanks()
    {
        /** @var Game[] $games */
        $games = $this->gameService->getAll();

        $ranks = [];
        foreach ($games as $game) {
            $ranks[$game->getCode()] = $this->gameRankService->getAllByGame($game);
        }
        return $this->json($ranks);
    }
}

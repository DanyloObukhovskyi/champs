<?php

namespace App\Controller;

use App\Entity\Game;
use App\Entity\MarketplaceBanner;
use App\Service\Game\GameService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/{_locale}", requirements={"locale": "ru"})
 */
class GameController extends AbstractController
{
    /**
     * @var EntityManagerInterface
     */
    public $entityManager;

    /**
     * @var GameService
     */
    public $gameService;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;

        $this->gameService = new GameService($entityManager);
    }

    /**
     * @Route("/games", name="games")
     */
    public function games()
    {
        $games = $this->gameService->getAll();

        return $this->json($games);
    }

    /**
     * @Route("/games/banners", name="games_banners")
     */
    public function gamesBanners()
    {
        $banners = $this->entityManager
            ->getRepository(MarketplaceBanner::class)
            ->getBannersGameDistinct();

        return $this->json($banners);
    }
}

<?php

namespace App\Controller;

use App\Entity\Game;
use App\Entity\MarketplaceBanner;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/{_locale}", requirements={"locale": "ru"})
 */
class GameController extends AbstractController
{
    public $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    /**
     * @Route("/games", name="games")
     */
    public function games()
    {
        $games = $this->entityManager
            ->getRepository(Game::class)
            ->findAll();

        return $this->json($games);
    }

    /**
     * @Route("/games/banners", name="games_banners")
     */
    public function gamesBanners()
    {
        $banners = $this->entityManager
            ->getRepository(MarketplaceBanner::class)
            ->findAll();

        return $this->json($banners);
    }
}

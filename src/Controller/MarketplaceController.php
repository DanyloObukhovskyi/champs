<?php

namespace App\Controller;

use App\Service\UserService;
use App\Traits\EntityManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class MarketplaceController extends AbstractController
{
    use EntityManager;

    public $userService;

    public function __construct()
    {
        $this->userService = new UserService($this->getEntityManager());
    }

    /**
      * @Route("/ru/marketplace", name="marketplace_index")
      */
    public function index(Request $request)
    {
        $trainerId = $request->get('trainerId', null);

        return $this->render('templates/marketplace.html.twig', [
            'router' => 'marketplace',
            'filters' => UserService::FILTERS,
            'games' => UserService::GAMES,
            'trainerId' => $trainerId
        ]);
    }

    /**
     * @Route("/ru/marketplace/trainer/{userId}", name="marketplace.trainer")
     */
    public function getTrainerData($userId)
    {
        $trainer = $this->userService->find($userId);
        $trainer = $this->userService->decorator($trainer);

        return $this->json($trainer);
    }
}

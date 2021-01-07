<?php

namespace App\Controller;

use App\Entity\TrainerLessonPrice;
use App\Service\UserService;
use App\Traits\EntityManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/{_locale}", requirements={"locale": "ru"})
 */
class MarketplaceController extends AbstractController
{
    use EntityManager;

    public $userService;

    public function __construct()
    {
        $this->userService = new UserService($this->getEntityManager());
    }

    /**
     * @Route("/marketplace", name="marketplace_index")
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
     * @Route("/ajax/marketplace/trainer/{userId}")
     */
    public function getTrainerData($userId)
    {
        $trainer = $this->userService->find($userId);
        $trainer = $this->userService->decorator($trainer, true);

        return $this->json($trainer);
    }

    /**
     * @Route("/marketplace/trainer/{userId}")
     */
    public function trainerPage(Request $request, $userId)
    {
        $trainer = $this->userService->find($userId);

        return $this->render('templates/marketplace.trainer.html.twig', [
            'trainer' => $trainer,
            'router' => 'marketplace',
            'type' => $request->get('type') ?? TrainerLessonPrice::INDIVIDUAL_TYPE
        ]);
    }
}

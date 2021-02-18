<?php

namespace App\Controller;

use App\Entity\TrainerLessonPrice;
use App\Service\Seo\SeoService;
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

    public $seoService;

    public function __construct()
    {
        $this->userService = new UserService($this->getEntityManager());

        $this->seoService = new SeoService($this->getEntityManager());
    }

    /**
     * @Route("/marketplace", name="marketplace_index")
     */
    public function index(Request $request)
    {
        $trainerId = $request->get('trainerId', null);

        $seoSettings = $this->seoService->getSeo('marketplace_index');

        return $this->render('templates/marketplace.html.twig', [
            'heading' => $seoSettings['heading'],
            'title' => $seoSettings['title'],
            'description' => $seoSettings['description'],
            'keywords' => $seoSettings['keywords'],
            'meta_tags' => $seoSettings['meta'],
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
     * @Route("/marketplace/trainer/{userId}/{slug}")
     */
    public function trainerPage(Request $request, $userId, $slug)
    {
        $trainer = $this->userService->find($userId);

        return $this->render('templates/marketplace.trainer.html.twig', [
            'trainer' => $trainer,
            'router' => 'marketplace',
            'type' => $request->get('type') ?? null
        ]);
    }
}

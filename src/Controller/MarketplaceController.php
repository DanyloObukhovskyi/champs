<?php

namespace App\Controller;

use App\Entity\Setting;
use App\Entity\TrainerLessonPrice;
use App\Service\Seo\SeoService;
use App\Service\Payment\PaymentService;
use App\Service\Setting\SettingService;
use App\Service\UserService;
use App\Traits\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/{_locale}", requirements={"locale": "ru"})
 */
class MarketplaceController extends AbstractController
{
    /**
     * @var EntityManagerInterface
     */
    public $entityManager;

    /**
     * @var UserService
     */
    public $userService;

    /**
     * @var SeoService
     */
    public $seoService;

    /**
     * @var SettingService
     */
    public $settingService;

    /**
     * MarketplaceController constructor.
     * @param EntityManagerInterface $entityManager
     */
    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;

        $this->seoService = new SeoService($entityManager);
        $this->userService = new UserService($entityManager);
        $this->settingService = new SettingService($entityManager);
    }

    /**
     * @Route("/marketplace", name="marketplace_index")
     */
    public function index(Request $request)
    {
        $trainerId = $request->get('trainerId', null);

        $seoSettings = $this->seoService->getSeo('marketplace_index');

        return $this->render('templates/marketplace.html.twig', [
            'heading_type' => $seoSettings['heading_type'],
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

        /** @var Setting $paymentSetting */
        $paymentSetting = $this->settingService->get('paymentType');

        if (empty($paymentSetting)) {
            $paymentType = PaymentService::DEFAULT_PAYMENT;
        } else {
            $paymentType = $paymentSetting->getValue();
        }

        return $this->render('templates/marketplace.trainer.html.twig', [
            'trainer' => $trainer,
            'router' => 'marketplace',
            'type' => $request->get('type') ?? null,
            'paymentType' => $paymentType
        ]);
    }
}

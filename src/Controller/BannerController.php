<?php

namespace App\Controller;

use App\Entity\User;
use App\Service\Banner\TrainerBannerService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/{_locale}", requirements={"locale": "ru"})
 */
class BannerController extends AbstractController
{

    public $entityManager;

    public $trainerBannerService;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
        $this->trainerBannerService = new TrainerBannerService($entityManager);
    }

    /**
     * @Route("/ajax/setting/trainer/banner/{trainerId}", name="setting_trainer_banner")
     */
    public function trainerPageBanner($trainerId): Response
    {
        $banner = [];

        /** @var User $trainer */
        $trainer = $this->entityManager
            ->getRepository(User::class)
            ->find($trainerId);
        if (isset($trainer) and !empty($trainer->getGame())) {
            $bannerEntity = $this->trainerBannerService
                ->getOneByGame($trainer->getGame());

            if (isset($bannerEntity)) {
                $banner = $this->trainerBannerService->decorate($bannerEntity);
            }
        }
        return $this->json($banner);
    }
}

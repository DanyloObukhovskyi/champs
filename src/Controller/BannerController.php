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

    /**
     * @var EntityManagerInterface
     */
    public $entityManager;

    /**
     * @var TrainerBannerService
     */
    public $trainerBannerService;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
        $this->trainerBannerService = new TrainerBannerService($entityManager);
    }

    /**
     * @Route("/ajax/setting/trainer/banner/{trainerId}", name="marketplace_trainer_banner")
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

    /**
     * @Route("/ajax/setting/user/banner", name="cabinet_user_banner")
     */
    public function userCabinetBanner(): Response
    {
        $banner = [];

        /** @var User $user */
        $user = $this->getUser();

        if (isset($user) and !empty($user->getGame())) {
            $bannerEntity = $this->trainerBannerService
                ->getOneByGame($user->getGame());

            if (isset($bannerEntity)) {
                $banner = $this->trainerBannerService->decorate($bannerEntity);
            }
        }
        return $this->json($banner);
    }
}

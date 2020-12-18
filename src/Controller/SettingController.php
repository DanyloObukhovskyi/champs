<?php

namespace App\Controller;

use App\Service\Setting\SettingService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/{_locale}", requirements={"locale": "ru"})
 */
class SettingController extends AbstractController
{
    /**
     * @var SettingService
     */
    public $settingService;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->settingService = new SettingService($entityManager);
    }

    /**
     * @Route("/ajax/settings/training/description", name="setting_training_description")
     */
    public function trainingDescription(): Response
    {
        $descriptions = [];

        foreach (SettingService::TRAINING_DESCRIPTION as $type => $fields){
            $title = $this->settingService->get($fields['title']);
            $text = $this->settingService->get($fields['text']);

            $descriptions[$type] = [
                'title' => isset($title) ? $title->getValue(): null,
                'text' =>  isset($text) ? $text->getValue(): null,
            ];
        }
        return $this->json($descriptions);
    }

    /**
     * @Route("/ajax/setting/trainer/banner", name="setting_trainer_banner")
     */
    public function trainerPageBanner()
    {
        $banner = [];
        foreach (SettingService::TRAINER_BANNER_LINKS as $link => $key)
        {
            $banner['links'][$link] = $this->settingService->get($key);
        }
        $banner['title'] = $this->settingService->get(SettingService::TRAINER_BANNER['title']);
        $banner['text'] = $this->settingService->get(SettingService::TRAINER_BANNER['text']);
        $banner['image'] = $this->settingService->get(SettingService::TRAINER_BANNER['image']);

        return $this->json($banner);
    }
}

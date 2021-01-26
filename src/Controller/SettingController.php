<?php

namespace App\Controller;

use App\Entity\User;
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

    public $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
        $this->settingService = new SettingService($entityManager);
    }

    /**
     * @Route("/ajax/settings/training/description", name="setting_training_description")
     */
    public function trainingDescription(): Response
    {
        $descriptions = [];

        foreach (SettingService::TRAINING_DESCRIPTION as $type => $fields) {
            $title = $this->settingService->get($fields['title']);
            $text = $this->settingService->get($fields['text']);

            $descriptions[$type] = [
                'title' => isset($title) ? $title->getValue() : null,
                'text' => isset($text) ? $text->getValue() : null,
            ];
        }
        return $this->json($descriptions);
    }
}

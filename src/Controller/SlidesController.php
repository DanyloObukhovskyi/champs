<?php

namespace App\Controller;

use App\Entity\Slide;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/{_locale}", requirements={"locale": "ru"})
 */
class SlidesController extends AbstractController
{

    public $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    /**
     * @Route("/get/slides")
     */
    public function general(): Response
    {
        $slides = $this->entityManager
            ->getRepository(Slide::class)
            ->findBy([
                'type' => Slide::GENERAL_TYPE
            ]);

        return $this->json($slides);
    }

    /**
     * @Route("/get/home/slides")
     */
    public function home(): Response
    {
        $slides = $this->entityManager
            ->getRepository(Slide::class)
            ->findBy([
                'type' => Slide::HOME_TYPE
            ]);

        return $this->json($slides);
    }
}

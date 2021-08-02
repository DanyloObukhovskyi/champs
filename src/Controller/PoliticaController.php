<?php

namespace App\Controller;

use App\Service\Seo\SeoService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/{_locale}", requirements={"locale": "ru"})
 */
class PoliticaController extends AbstractController
{
    /**
     * @var EntityManagerInterface
     */
    public $entityManager;

    /**
     * @var SeoService
     */
    public $seoService;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
        $this->seoService = new SeoService($entityManager);
    }

    /**
     * @Route("/politika_konfedinczialnosti", name="politica_index")
     */
    public function index()
    {
        $seoSettings = $this->seoService->getSeo('politica_index');

        return $this->render('templates/politica.html.twig', [
            'heading_type' => $seoSettings['heading_type'],
            'heading' => $seoSettings['heading'],
            'title' => $seoSettings['title'],
            'description' => strip_tags($seoSettings['description']),
            'keywords' => $seoSettings['keywords'],
            'meta_tags' => $seoSettings['meta'],
            'router' => 'politica'
        ]);
    }
}

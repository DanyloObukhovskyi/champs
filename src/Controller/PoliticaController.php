<?php

namespace App\Controller;

use App\Service\Seo\SeoService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class PoliticaController extends AbstractController
{

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;

        $this->seoService = new SeoService($entityManager);
    }

    /**
     * @Route("/ru/politica", name="politica_index")
     */
    public function index()
    {
        $seoSettings = $this->seoService->getSeo('politica_index');

        return $this->render('templates/politica.html.twig', [
            'heading_type' => $seoSettings['heading_type'],
            'title' => $seoSettings['title'],
            'description' => $seoSettings['description'],
            'keywords' => $seoSettings['keywords'],
            'meta_tags' => $seoSettings['meta'],
            'router' => 'politica']);
    }

}

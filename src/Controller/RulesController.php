<?php

namespace App\Controller;

use App\Service\Seo\SeoService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class RulesController extends AbstractController
{

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;

        $this->seoService = new SeoService($entityManager);
    }

    /**
     * @Route("/ru/terms-of-use", name="terms_of_use_index")
     */
    public function index()
    {
        $seoSettings = $this->seoService->getSeo('terms_of_use_index');

        return $this->render('templates/rules.html.twig', [
            'heading' => $seoSettings['heading'],
            'title' => $seoSettings['title'],
            'description' => $seoSettings['description'],
            'keywords' => $seoSettings['keywords'],
            'meta_tags' => $seoSettings['meta'],
            'router' => 'rules']);
    }
}

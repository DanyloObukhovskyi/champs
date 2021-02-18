<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Service\Seo\SeoService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;

class AboutController extends AbstractController
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
     * @Route("/ru/about", name="about_index")
     */
    public function index()
    {
        $seoSettings = $this->seoService->getSeo('about_index');

        return $this->render('templates/about.html.twig', [
            'heading' => $seoSettings['heading'],
            'title' => $seoSettings['title'],
            'description' => $seoSettings['description'],
            'keywords' => $seoSettings['keywords'],
            'meta_tags' => $seoSettings['meta'],
            'router' => 'about']);
    }

}

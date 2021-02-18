<?php

namespace App\Controller;

use App\Service\Seo\SeoService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class OfferController extends AbstractController
{
    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;

        $this->seoService = new SeoService($entityManager);
    }

    /**
     * @Route("/ru/offer", name="offer_index")
     */
    public function index()
    {
        $seoSettings = $this->seoService->getSeo('offer_index');

        return $this->render('templates/offer.html.twig', [
            'title' => $seoSettings['title'],
            'description' => $seoSettings['description'],
            'keywords' => $seoSettings['keywords'],
            'meta_tags' => $seoSettings['meta'],
            'router' => 'offer']);
    }
}

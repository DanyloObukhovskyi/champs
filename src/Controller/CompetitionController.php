<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Service\Seo\SeoService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;

/**
 * @Route("/{_locale}", requirements={"locale": "ru"})
 */
class CompetitionController extends AbstractController
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
     * @Route("/polozhenie_o_konkurse", name="competition_index")
     */
    public function index()
    {
        $seoSettings = $this->seoService->getSeo('competition_index');

        return $this->render('templates/competition.html.twig', [
            'heading_type' => $seoSettings['heading_type'],
            'heading' => $seoSettings['heading'],
            'title' => $seoSettings['title'],
            'description' => $seoSettings['description'],
            'keywords' => $seoSettings['keywords'],
            'meta_tags' => $seoSettings['meta'],
            'router' => 'competition']);
    }

}

<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class TermsController extends AbstractController
{
    /**
     * @Route("/ru/terms", name="terms_index")
     */
    public function index()
    {
        return $this->render('templates/terms.html.twig', ['router' => 'terms']);
    }
}

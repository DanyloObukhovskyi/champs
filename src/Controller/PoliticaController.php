<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class PoliticaController extends AbstractController
{
    /**
     * @Route("/ru/politica", name="politica_index")
     */
    public function index()
    {
        return $this->render('templates/politica.html.twig', ['router' => 'politica']);
    }

}

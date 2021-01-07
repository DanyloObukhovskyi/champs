<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class CompetitionController extends AbstractController
{
    /**
     * @Route("/ru/competition", name="competition_index")
     */
    public function index()
    {
        return $this->render('templates/competition.html.twig', ['router' => 'competition']);
    }

}

<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class AboutController extends AbstractController
{
    /**
     * @Route("/ru/about", name="about_index")
     */
    public function index()
    {
        return $this->render('templates/about.html.twig', ['router' => 'about']);
    }

}

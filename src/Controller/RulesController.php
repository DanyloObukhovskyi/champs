<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class RulesController extends AbstractController
{
    /**
      * @Route("/ru/terms-of-use", name="terms_of_use_index")
      */
    public function index()
    {
        return $this->render('templates/rules.html.twig', ['router' => 'rules']);
    }
}

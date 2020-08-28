<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class LearningController extends AbstractController
{
    /**
      * @Route("/ru/learning", name="learning_index")
      */
    public function index()
    {
        return $this->render('templates/learning.html.twig', ['router' => 'learning']);
    }

}

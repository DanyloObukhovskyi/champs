<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class OfferController extends AbstractController
{
    /**
      * @Route("/ru/offer", name="offer_index")
      */
    public function index()
    {
        return $this->render('templates/offer.html.twig', ['router' => 'offer']);
    }
}

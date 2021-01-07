<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class ContactController extends AbstractController
{
    /**
     * @Route("/ru/contact", name="contact_index")
     */
    public function index()
    {
        return $this->render('templates/contact.html.twig', ['router' => 'contact']);
    }

}

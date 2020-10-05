<?php

namespace App\Controller;

use App\Service\UserService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class MarketplaceController extends AbstractController
{
    /**
      * @Route("/ru/marketplace", name="marketplace_index")
      */
    public function index(Request $request)
    {
        $trainerId = $request->get('trainerId', null);

        return $this->render('templates/marketplace.html.twig', [
            'router' => 'marketplace',
            'filters' => UserService::FILTERS,
            'games' => UserService::GAMES,
            'trainerId' => $trainerId
        ]);
    }

}

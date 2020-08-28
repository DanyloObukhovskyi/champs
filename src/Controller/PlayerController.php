<?php

namespace App\Controller;

use App\Entity\Player;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class PlayerController extends AbstractController
{
    /**
     * @Route("/player", name="player")
     */
    public function index()
    {
        return $this->render('player/index.html.twig', [
            'controller_name' => 'PlayerController',
        ]);
    }

    /**
     * @Route("/ru/player/create/{form}", methods={"GET","POST"}, name="create_player")
     */
    public function createPlayer($form)
    {
        $team = json_decode($form);
        $entityManager = $this->getDoctrine()->getManager();

        $model = new Player();
        $model->setTeamId($team->name);
        $model->setPersonId($team->logo);
        $model->setStartedAt(new \DateTime());

        // tell Doctrine you want to (eventually) save the Product (no queries yet)
        $entityManager->persist($model);

        // actually executes the queries (i.e. the INSERT query)
        $entityManager->flush();

        return $this->json($model);
    }

}

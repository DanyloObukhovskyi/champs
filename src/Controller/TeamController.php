<?php

namespace App\Controller;

use App\Entity\Team;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class TeamController extends AbstractController
{
    /**
     * @Route("/team", name="team")
     */
    public function index()
    {
        return $this->render('team/index.html.twig', [
            'controller_name' => 'TeamController',
        ]);
    }

    /**
     * @Route("/ru/team/create/{form}", methods={"GET","POST"}, name="create_team")
     */
    public function createTeam($form)
    {
        $team = json_decode($form);
        $entityManager = $this->getDoctrine()->getManager();

        $model = new Team();
        $model->setName($team->name);
        $model->setLogo($team->logo);

        // tell Doctrine you want to (eventually) save the Product (no queries yet)
        $entityManager->persist($model);

        // actually executes the queries (i.e. the INSERT query)
        $entityManager->flush();

        return $this->json($model);
    }


}

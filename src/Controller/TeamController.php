<?php

namespace App\Controller;

use App\Entity\Team;
use App\Service\TeamService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class TeamController extends AbstractController
{
    public $entityManager;

    public $teamService;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
        $this->teamService = new TeamService($entityManager);
    }

    /**
     * @Route("/ru/ajax/search/teams")
     */
    public function findTeams(Request $request)
    {
        $teams = $this->teamService->findByName($request->getContent());

        $teamsArray = [];
        foreach ($teams as $team){
            $teamsArray[] = $this->teamService->teamDecorator($team);
        }
        return $this->json($teamsArray);
    }
}

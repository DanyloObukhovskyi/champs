<?php

namespace App\Controller;

use App\Service\TournamentService;
use App\Traits\AuthUser;
use App\Traits\EntityManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class MVPController extends AbstractController
{
    use EntityManager;
    use AuthUser;

    protected $tournamentService;

    public function __construct()
    {
        $this->tournamentService = new TournamentService($this->getEntityManager());
    }

    /**
     * @Route("/ru/mvp", name="mvp.index")
     */
    public function index()
    {
        $tournaments = $this->tournamentService->getAll();

        return $this->render('templates/mvp/list.html.twig', [
            'router' => 'mvp',
            'tournaments' => $tournaments
        ]);
    }

    /**
     * @Route("/ru/mvp/tournament/{id}", name="mvp.tournament")
     */
    public function tournament($id)
    {
        $tournamentEntity = $this->tournamentService->find($id);
        $tournament = $this->tournamentService->tournamentDecorator($tournamentEntity);

        return $this->render('templates/mvp/view.html.twig', [
            'router' => 'mvp.tournament',
            'tournament' => $tournament
        ]);
    }

    /**
     * @Route("/ru/user/tournaments/teams", name="mvp.cabinet.tournaments.teams")
     */
    public function tournamentTeams()
    {
        $user = $this->authUser();
        if (empty($user))
        {
            return $this->redirectToRoute('main');
        }

        return $this->render('templates/cabinet/tournament/teams.html.twig', [
            'router' => 'tournamentTeams',
            'styles' => [
                'cabinet/cabinet.css'
                ]
        ]);
    }
}

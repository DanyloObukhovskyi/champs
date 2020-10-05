<?php

namespace App\Controller;

use App\Entity\MvpTeam;
use App\Entity\User;
use App\Request\Mvp\CreateTeamRequestValidator;
use App\Service\Mvp\MvpTeamService;
use App\Service\TournamentService;
use App\Traits\AuthUser;
use App\Traits\EntityManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class MVPController extends AbstractController
{
    use EntityManager;
    use AuthUser;

    protected $tournamentService;

    protected $mvpTeamService;

    public function __construct()
    {
        $this->tournamentService = new TournamentService($this->getEntityManager());
        $this->mvpTeamService = new MvpTeamService($this->getEntityManager());
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
     * @Route("/ru/user/mvp/", name="mvp.cabinet.tournaments")
     */
    public function tournamentTeams()
    {
        $user = $this->authUser();
        if (empty($user))
        {
            return $this->redirectToRoute('main');
        }

        return $this->render('templates/cabinet/user/mvp.html.twig', [
            'router' => 'tournamentTeams',
            'styles' => [
                'cabinet/cabinet.css'
                ]
        ]);
    }

    /**
     * @Route("/ru/user/mvp/create/team", name="mvp.cabinet.create.team")
     */
    public function createUserTeam(Request $request)
    {
        $requestValidator = new CreateTeamRequestValidator($request);
        $data = json_decode($request->getContent(), false);

        $user = $this->getUser();

        if ($requestValidator->getContent())
        $mvpTeam = $this->mvpTeamService->create($user, $data);
        $team = $this->mvpTeamService->decorator($mvpTeam);

        return $this->json([
            'message' => 'Команда успешно создана!',
            'team' => $team
        ]);
    }
}

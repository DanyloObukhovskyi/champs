<?php

namespace App\Controller;

use App\Entity\Invite;
use App\Entity\MvpTeam;
use App\Entity\User;
use App\Request\Mvp\CreateTeamRequestValidator;
use App\Service\Mvp\InviteService;
use App\Service\Mvp\MvpTeamService;
use App\Service\TournamentService;
use App\Traits\EntityManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class MVPController extends AbstractController
{
    public const INVITE_METHOD_GET = 'get';

    public const INVITE_METHOD_RELOAD = 'reload';

    use EntityManager;

    /**
     * @var TournamentService
     */
    protected $tournamentService;

    /**
     * @var MvpTeamService
     */
    protected $mvpTeamService;

    protected $inviteService;

    public function __construct()
    {
        $this->tournamentService = new TournamentService($this->getEntityManager());
        $this->mvpTeamService = new MvpTeamService($this->getEntityManager());
        $this->inviteService = new InviteService($this->getEntityManager());
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
        $user = $this->getUser();
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

        if (!empty($requestValidator->errorMessages()))
        {
            return $this->json($requestValidator->errorMessages(), 422);
        }
        $mvpTeam = $this->mvpTeamService->create($user, $data);
        $team = $this->mvpTeamService->decorator($mvpTeam);

        return $this->json([
            'message' => 'Команда успешно создана!',
            'team' => $team
        ]);
    }

    /**
     * @Route("/ru/user/mvp/get/teams", name="mvp.cabinet.get.teams")
     */
    public function getTeams()
    {
        /** @var User|null $user */
        $user = $this->getUser();

        $teams = [];

        if (isset($user)){
            $teams = $this->mvpTeamService->findByUser($user);
            $teams = $this->mvpTeamService->teamsDecorator($teams);
        }

        return $this->json($teams);
    }

    /**
     * @Route("/ru/user/mvp/team/{teamId}", name="mvp.cabinet.team.page")
     */
    public function teamPage($teamId)
    {
        return $this->render('templates/cabinet/user/mvp/team.html.twig', [
            'router' => 'userTeam',
            'teamId' => $teamId,
            'styles' => [
                'cabinet/cabinet.css'
            ]
        ]);
    }

    /**
     * @Route("/ru/get/user/mvp/team/{teamId}", name="mvp.cabinet.get.team")
     */
    public function getTeam($teamId)
    {
        /** @var MvpTeam $team */
        $team = $this->mvpTeamService->getRepository()->find($teamId);
        $team = $this->mvpTeamService->decorator($team);

        return $this->json($team);
    }

    /**
     * @Route("/ru/delete/user/mvp/team/{teamId}", name="mvp.cabinet.delete.team")
     */
    public function deleteTeam($teamId)
    {
        /** @var MvpTeam $team */
        $team = $this->mvpTeamService->getRepository()->find($teamId);
        $result = $this->mvpTeamService->delete($team);

        return $this->json($result);
    }

    /**
     * @Route("/ru/mvp/team/{method}/invite/{teamId}", name="mvp.cabinet.get.invite")
     */
    public function getInviteTocken($method, $teamId)
    {
        $user = $this->getUser();
        $mvpTeam = $this->mvpTeamService->getRepository()->find($teamId);

        /** @var Invite $invite */
        if ($method === self::INVITE_METHOD_RELOAD) {
            $invite = $this->inviteService->reloadInvite($user, $mvpTeam);
        } else {
            $invite = $this->inviteService->create($user, $mvpTeam);
        }

        return $this->json($invite->getToken());
    }

    /**
     * @Route("/ru/mvp/invite/{teamId}/{token}", name="mvp.cabinet.delete.team")
     */
    public function invite($teamId, $token)
    {
        $user = $this->getUser();
        $mvpTeam = $this->mvpTeamService->getRepository()->find($teamId);

        if (isset($mvpTeam)){
            $invite = $this->inviteService->getByTeamAndToken($mvpTeam, $token);

            if (empty($invite))
            {
                $this->addFlash('error', 'Время инвайта истекло!');

                return $this->redirectToRoute('main');
            }
        }
        return $this->render('templates/cabinet/invite/mvp.team.html.twig', [
            'user' => $user,
            'teamId' => $teamId,
            'router' => 'invite'
        ]);
    }
}

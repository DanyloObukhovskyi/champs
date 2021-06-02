<?php


namespace App\Service\Mvp;


use App\Entity\Invite;
use App\Entity\MvpTeam;
use App\Entity\User;
use App\Repository\InviteRepository;
use App\Service\EntityService;
use Carbon\Carbon;

/**
 * Class InviteService
 * @package App\Service\Mvp
 */
class InviteService extends EntityService
{
    protected $entity = Invite::class;

    /**
     * @var InviteRepository
     */
    protected $repository;

    /**
     * @param User $user
     * @param MvpTeam $team
     * @return mixed
     * @throws \Exception
     */
    public function create(User $user, MvpTeam $team)
    {
        /** @var Invite|null $invite */
        $invite = $this->repository->findOneBy([
            'user' => $user,
            'team' => $team
        ]);

        if (empty($invite))
        {
            $invite = new $this->entity;
            $invite->setUser($user);
            $invite->setTeam($team);
            $invite->generateToken();
            $this->reloadAvailable($invite);
        }
        return $this->save($invite);
    }

    /**
     * @param User $user
     * @param MvpTeam $team
     * @return mixed
     * @throws \Exception
     */
    public function reloadInvite(User $user, MvpTeam $team)
    {
        /** @var Invite|null $invite */
        $invite = $this->repository->findOneBy([
            'user' => $user,
            'team' => $team
        ]);
        if (empty($invite))
        {
            $invite = new $this->entity;
            $invite->setUser($user);
            $invite->setTeam($team);
        }
        $invite->generateToken();
        $this->reloadAvailable($invite);

        return $this->save($invite);
    }

    /**
     * @param Invite $invite
     * @throws \Exception
     */
    public function reloadAvailable(Invite $invite): void
    {
        $dateNow = new Carbon();
        $dateNow->addDays(2);

        $invite->setAvailableAt($dateNow->toDateTime());
    }

    /**
     * @return InviteRepository
     */
    public function getRepository(): InviteRepository
    {
        return $this->repository;
    }

    /**
     * @param MvpTeam $team
     * @param string $token
     * @return mixed
     */
    public function getByTeamAndToken(MvpTeam $team, string $token)
    {
        return $this->repository->findByTeamAndToken($team, $token);
    }
}
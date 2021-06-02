<?php


namespace App\Service\Mvp;


use App\Entity\MvpTeam;
use App\Entity\User;
use App\Repository\MvpTeamRepository;
use App\Service\EntityService;
use App\Service\ImageService;
use Doctrine\ORM\EntityManagerInterface;

/**
 * Class MvpTeamService
 * @package App\Service\Mvp
 */
class MvpTeamService extends EntityService
{
    protected $entity = MvpTeam::class;

    /**
     * @var MvpTeamRepository
     */
    protected $repository;

    /**
     * MvpTeamService constructor.
     * @param EntityManagerInterface $entityManager
     */
    public function __construct(EntityManagerInterface $entityManager)
    {
        parent::__construct($entityManager);
    }

    /**
     * @param $tag
     * @return mixed
     */
    public function getByTag($tag)
    {
        return $this->repository->findOneBy(['tag' => $tag]);
    }

    /**
     * @param User $user
     * @param $data
     * @return mixed
     */
    public function create(User $user, $data)
    {
        /** @var MvpTeam $mvpTeam */
        $mvpTeam = new $this->entity;

        $mvpTeam->setCreator($user);
        $mvpTeam->setCapacity($data->capacity);
        $mvpTeam->setName($data->name);
        $mvpTeam->setTag($data->tag);

        $mvpTeam->addMember($user);

        return $this->save($mvpTeam);
    }

    /**
     * @param MvpTeam $team
     * @return array
     */
    public function decorator(MvpTeam $team)
    {
        /** @var User $creator */
        $creator = $team->getCreator();

        $members = $this->membersDecorator($team->getMembers());

        return [
            'id' => $team->getId(),
            'name' => $team->getName(),
            'tag' => $team->getTag(),
            'capacity' => $team->getCapacity(),
            'creator' => [
                'name' => $creator->getName(),
                'id' => $creator->getId()
            ],
            'members' => $members
        ];
    }

    /**
     * @param User $user
     * @return mixed
     */
    public function findByUser(User $user)
    {
        return $this->repository->findBy([
            'creator' => $user
        ]);
    }

    /**
     * @param array $teams
     * @return array
     */
    public function teamsDecorator(array $teams)
    {
        $decoratedTeams = [];

        /** @var MvpTeam $team */
        foreach ($teams as $team){
            $decoratedTeams[] = $this->decorator($team);
        }
        return $decoratedTeams;
    }

    /**
     * @param User[] $members
     * @return array
     */
    public function membersDecorator($members)
    {
        $decoratedMembers = [];

        /** @var User $member */
        foreach ($members as $member)
        {
            $decoratedMembers[] = [
                'nickname' => $member->getNickname(),
                'name' => $member->getName(),
                'id' => $member->getId(),
                'image' => $member->getPhoto(),
                'steam' => $member->getSteamId()
            ];
        }
        return $decoratedMembers;
    }

    /**
     * @return MvpTeamRepository
     */
    public function getRepository(): MvpTeamRepository
    {
        return $this->repository;
    }

    /**
     * @param MvpTeam $team
     * @param User $member
     * @return mixed
     */
    public function addTeamMember(MvpTeam $team, User $member)
    {
        $team->addMember($member);

        return $this->save($team);
    }

    /**
     * @param MvpTeam $team
     * @param User $member
     * @return mixed
     */
    public function removeMember(MvpTeam $team, User $member)
    {
        $team->removeMember($member);

        return $this->save($team);
    }
}
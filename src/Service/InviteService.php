<?php


namespace App\Service;


use App\Entity\Invite;
use App\Entity\InvitePrize;
use App\Entity\User;
use App\Repository\InviteRepository;
use Doctrine\ORM\EntityManagerInterface;

class InviteService extends EntityService
{
    public const INVITE_ROUTE = 'main';

    public $entity = Invite::class;

    /**
     * @var InviteRepository
     */
    public $repository;

    /**
     * @var
     */
    public $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        parent::__construct($entityManager);

        $this->entityManager = $entityManager;
    }

    public function getCabinetInvite(User $user)
    {
        $invite = $this->repository->getCabinetInvite($user);

        if (empty($invite)) {
            $date = new \DateTime();
            $date->modify('+1 month');

            $invitePrize = $this->entityManager
                ->getRepository(InvitePrize::class)
                ->findOneBy(['type' => InvitePrize::SILVER_COIN]);

            $invite = new Invite();
            $invite->setUser($user);
            $invite->setAvailableAt($date);
            $invite->setType(Invite::LOGIN_TYPE);
            $invite->setPrize($invitePrize);
            $invite->generateToken();

            $this->save($invite);
        }

        return $invite;
    }

    /**
     * @param $token
     * @return mixed
     */
    public function generateInviteLink($token)
    {
        global $kernel;

        $url = $kernel->getContainer()
            ->get('router')
            ->generate(self::INVITE_ROUTE);

        return $url . "?token=$token";
    }

    public function findByToken(string $token)
    {
        return $this->repository->findByToken($token);
    }
}
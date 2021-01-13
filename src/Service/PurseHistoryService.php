<?php


namespace App\Service;


use App\Entity\PurseHistory;
use App\Entity\User;
use App\Repository\PurseHistoryRepository;
use Doctrine\ORM\EntityManagerInterface;

/**
 * Class PurseHistoryService
 * @package App\Service
 */
class PurseHistoryService extends EntityService
{
    public $entity = PurseHistory::class;

    /**
     * @var PurseHistoryRepository
     */
    public $repository;

    /**
     * @var EntityManagerInterface
     */
    public $entityManager;

    /**
     * PurseHistoryService constructor.
     * @param EntityManagerInterface $entityManager
     */
    public function __construct(EntityManagerInterface $entityManager)
    {
        parent::__construct($entityManager);
    }

    /**
     * @param User $user
     * @return PurseHistory[]
     */
    public function findByUser(User $user)
    {
        return $this->repository->findBy([
            'user' => $user
        ]);
    }
}
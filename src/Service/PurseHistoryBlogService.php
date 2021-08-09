<?php


namespace App\Service;


use App\Entity\PurseHistory;
use App\Entity\PurseHistoryBlog;
use App\Entity\User;
use App\Repository\PurseHistoryBlogRepository;
use Doctrine\ORM\EntityManagerInterface;

/**
 * Class PurseHistoryBlogService
 * @package App\Service
 */
class PurseHistoryBlogService extends EntityService
{
    public $entity = PurseHistoryBlog::class;

    /**
     * @var PurseHistoryBlogRepository
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
        ], [
            'datetime' => 'desc'
        ]);
    }
}
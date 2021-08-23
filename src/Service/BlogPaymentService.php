<?php


namespace App\Service;


use App\Entity\BlogPayment;
use App\Entity\User;
use App\Repository\BlogPaymentRepository;
use Doctrine\ORM\EntityManagerInterface;


class BlogPaymentService extends EntityService
{
    protected $entity = BlogPayment::class;

    /**
     * @var BlogPaymentRepository
     */
    protected $repository;

    public function __construct(EntityManagerInterface $entityManager)
    {
        parent::__construct($entityManager);
    }

    /**
     * @param User $user
     * @return BlogPayments[]
     */
    public function getByUser(User $user)
    {
        return $this->repository->findBy([
            'user' => $user
        ]);
    }

    /**
     * @param User $trainer
     * @param \DateTime $dateTime
     * @return int|mixed|string
     */
    public function getByUserAndPaymentDateFrom(User $trainer, \DateTime $dateTime)
    {
        return $this->repository->getByUserAndPaymentDateFrom($trainer, $dateTime);
    }

    /**
     * @param User $user
     * @param \DateTime $dateFrom
     * @param \DateTime $dateTo
     * @return mixed
     */
    public function getByUserAndPeriod(User $user, \DateTime $dateFrom, \DateTime $dateTo)
    {
        return $this->repository->getByUserAndPeriod($user, $dateFrom, $dateTo);
    }
}
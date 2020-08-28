<?php


namespace App\Service;


use App\Entity\Result;
use App\Repository\ResultRepository;
use Carbon\Carbon;

class ResultService extends EntityService
{
    public const MATCHES_COUNT = 10;

    protected $entity = Result::class;

    /** @var ResultRepository */
    protected $repository;

    /**
     * @param $match
     * @param $date
     * @return mixed
     * @throws \Doctrine\ORM\ORMException
     * @throws \Doctrine\ORM\OptimisticLockException
     */
    public function create($match, $date)
    {
        $result = new $this->entity;

        $result->setMatch($match)
            ->setCreatedAt(new \DateTime($date));

        $this->entityManager->persist($result);
        $this->entityManager->flush();

        return $result;
    }

    /**
     * @return int
     */
    public function getMaxCount(): int
    {
        return self::MATCHES_COUNT;
    }
}
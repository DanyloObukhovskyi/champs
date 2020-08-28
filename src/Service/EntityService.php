<?php
/**
 * Product: champs.
 * Date: 30/06/2020
 */

namespace App\Service;


use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;

abstract class EntityService
{
    /** @var ServiceEntityRepository */
    protected $repository;

    /** @var EntityManager */
    protected $entityManager;

    /** @var  */
    protected $entity;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
        $this->repository = $this->entityManager->getRepository($this->entity);
    }

    public function save($entity)
    {
        $this->entityManager->persist($entity);

        $this->entityManager->flush();

        return $entity;
    }

    public function delete($entity)
    {
        $this->entityManager->remove($entity);
        $this->entityManager->flush();
    }

}
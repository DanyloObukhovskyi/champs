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
        $this->checkIsOpenEntityManager();

        $this->entityManager->persist($entity);
        $this->entityManager->flush();

        return $entity;
    }

    public function delete($entity)
    {
        $this->entityManager->remove($entity);
        $this->entityManager->flush();
    }

    public function checkIsOpenEntityManager()
    {
        if (!$this->entityManager->isOpen()) {
            $this->entityManager = $this->entityManager->create(
                $this->entityManager->getConnection(),
                $this->entityManager->getConfiguration()
            );
        }
    }

    public function getUser()
    {
        global $kernel;

        return $kernel->getContainer()
            ->get('security.token_storage')
            ->getToken()
            ->getUser();

        if (!$kernel->getContainer()->has('security.token_storage')) {
            return null;
        }

        if (null === $token = $kernel->getContainer()->get('security.token_storage')->getToken()) {
            return null;
        }

        if (!\is_object($user = $token->getUser())) {
            return null;
        }
        return $user;
    }
}
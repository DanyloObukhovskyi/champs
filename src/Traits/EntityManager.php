<?php


namespace App\Traits;

/**
 * Trait EntityManager
 * @package App\Traits
 */
trait EntityManager
{
    /**
     * @return \Doctrine\ORM\EntityManager
     */
    public function getEntityManager(): \Doctrine\ORM\EntityManager
    {
        global $kernel;

        return $kernel->getContainer()->get('doctrine')->getManager();
    }
}
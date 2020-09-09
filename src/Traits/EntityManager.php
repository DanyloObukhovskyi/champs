<?php


namespace App\Traits;

/**
 * Trait EntityManager
 * @package App\Traits
 */
trait EntityManager
{
    /**
     * @return mixed
     */
    public function getEntityManager()
    {
        global $kernel;

        return $kernel->getContainer()->get('doctrine')->getManager();
    }
}
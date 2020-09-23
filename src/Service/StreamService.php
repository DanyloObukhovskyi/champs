<?php
/**
 * Product: champs.
 * Date: 24/06/2020
 */

namespace App\Service;


use App\Entity\Match;
use App\Entity\Stream;
use App\Repository\StreamRepository;

class StreamService extends EntityService
{
    protected $entity = Stream::class;

    /** @var StreamRepository */
    protected $repository;

    /**
     * @param Match $match
     * @param array $values
     * @return Stream
     * @throws \Doctrine\ORM\ORMException
     * @throws \Doctrine\ORM\OptimisticLockException
     */
    public function create(Match $match, array $values)
    {
        /** @var Stream $stream */
        $stream = $this->getByName($match->getId(), $values['name']);
        if ($stream)
        {
            $this->entityManager->persist($stream);
            return $stream;
        }

        /** @var Stream $stream */
        $stream = new $this->entity;
        $stream->setName($values['name'])
            ->setUrl($values['url'])
            ->setMatch($match);

        if (!empty($values['language']))
        {
            $stream->setLanguage($values['language']);
        }

        $this->entityManager->persist($stream);

        $this->entityManager->flush();

        return $stream;
    }

    /**
     * @param $matchId
     * @param $name
     * @return Stream|bool|null
     * @throws \Doctrine\ORM\NonUniqueResultException
     * @throws \Doctrine\ORM\ORMException
     */
    public function getByName($matchId, $name)
    {
        $stream = $this->repository->getByName($matchId, $name);
        if (isset($stream))
        {
            $this->entityManager->persist($stream);
            return $stream;
        }

        return false;
    }
}
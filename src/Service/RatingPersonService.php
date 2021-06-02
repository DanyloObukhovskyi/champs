<?php


namespace App\Service;


use App\Entity\Person;
use App\Entity\RatingPerson;
use App\Entity\Team;
use App\Repository\RatingPersonRepository;

class RatingPersonService extends EntityService
{
    public const MATCHES_COUNT = 10;

    protected $entity = RatingPerson::class;

    /** @var RatingPersonRepository */
    protected $repository;

    /** @var ImageService */
    protected $imageService;

    /**
     * @var PersonService
     */
    protected $personService;

    /**
     * RatingPersonService constructor.
     * @param $entityManager
     */
    public function __construct($entityManager)
    {
        parent::__construct($entityManager);

        $this->imageService = new ImageService();
        $this->personService = new PersonService($entityManager);
    }

    /**
     * @param $ratingPerson
     * @param $rating
     * @param $createdAt
     * @throws \Doctrine\ORM\ORMException
     * @throws \Doctrine\ORM\OptimisticLockException
     */
    public function update($ratingPerson, $rating, $createdAt)
    {
        $ratingPerson->setRating($rating)
            ->setCreatedAt($createdAt);

        $this->entityManager->persist($ratingPerson);
        $this->entityManager->flush();
    }

    /**
     * @param $person
     * @param $rating
     * @param $createdAt
     * @throws \Doctrine\ORM\ORMException
     * @throws \Doctrine\ORM\OptimisticLockException
     */
    public function create($person, $rating, $createdAt)
    {
        $ratingPerson = new $this->entity;
        $ratingPerson->setPerson($person)
            ->setRating($rating)
            ->setCreatedAt($createdAt);

        $this->entityManager->persist($ratingPerson);
        $this->entityManager->flush();
    }

    /**
     * @param $ratingPlayers
     * @return array
     */
    public function retingPlayersDecorator($ratingPlayers)
    {
        $players = [];

        foreach ($ratingPlayers as $ratingPlayer) {
            $players[] = $this->retingPlayerDecorator($ratingPlayer);
        }
        return $players;
    }

    /**
     * @param RatingPerson $ratingPerson
     * @return array
     */
    public function retingPlayerDecorator(RatingPerson $ratingPerson)
    {
        /** @var Person $person */
        $person = $ratingPerson->getPerson();

        return $this->personService->personDecorate($person);
    }
}
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

    public function __construct($entityManager)
    {
        parent::__construct($entityManager);

        $this->imageService = new ImageService();
    }

    public function update($ratingPerson, $rating, $createdAt)
    {
        $ratingPerson->setRating($rating)
            ->setCreatedAt($createdAt);

        $this->entityManager->persist($ratingPerson);
        $this->entityManager->flush();
    }

    public function create($person, $rating, $createdAt)
    {
        $ratingPerson = new $this->entity;
        $ratingPerson->setPerson($person)
            ->setRating($rating)
            ->setCreatedAt($createdAt);

        $this->entityManager->persist($ratingPerson);
        $this->entityManager->flush();
    }

    public function retingPlayersDecorator($ratingPlayers)
    {
        $players = [];

        foreach ($ratingPlayers as $ratingPlayer){
            $players[] = $this->retingPlayerDecorator($ratingPlayer);
        }
        return $players;
    }

    public function retingPlayerDecorator(RatingPerson $ratingPerson)
    {
        /** @var Person $person */
        $person = $ratingPerson->getPerson();
        $this->imageService->setImage($person->getPhoto());
        $image = $this->imageService->getImagePath();

        $flag = $person->getFlagIcon();
        $flagID = $person->getFlagIconId();

        if (isset($flag)){
            $flag = $flag->getName();
        }
        $this->imageService->setImage($flag);
        $flag = $this->imageService->getImagePath();

        $player = [
            'user_id' => $person->getId (),
        	'person_id' => $ratingPerson->getId(),
            'rating' => $ratingPerson->getRating(),
            'nickname' => $person->getNick(),
            'fullname' => $person->getName(),
            'image' => $image,
            'flag' => $flag,
            'flag_id' => $flagID
        ];


        if (!empty($person->getPlayer())){
            /** @var Team $team */
            $team = $person->getPlayer()->getTeam();
            $this->imageService->setImage($team->getLogo());
            $logo = $this->imageService->getImagePath();

            $player['team'] = [
                'title' => $team->getName(),
                'image' =>$logo,
                'id' => $team->getId()
            ];
        }
        return $player;
    }
}
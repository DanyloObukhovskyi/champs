<?php


namespace App\Service;


use App\Entity\RatingTeam;
use App\Entity\Team;
use App\Repository\RatingTeamRepository;

class RatingTeamService extends EntityService
{
    protected $entity = RatingTeam::class;

    /** @var RatingTeamRepository */
    protected $repository;

    protected $imageService;

    /**
     * RatingTeamService constructor.
     * @param $entityManager
     */
    public function __construct($entityManager)
    {
        parent::__construct($entityManager);

        $this->imageService = new ImageService();
    }

    /**
     * @param $ratingTeam
     * @param $createdAt
     * @param $rating
     * @throws \Doctrine\ORM\ORMException
     * @throws \Doctrine\ORM\OptimisticLockException
     */
    public function update($ratingTeam, $createdAt, $rating)
    {
        $ratingTeam->setCreatedAt($createdAt);
        $ratingTeam->setRating($rating);

        $this->entityManager->persist($ratingTeam);
        $this->entityManager->flush();
    }

    /**
     * @param $team
     * @param $createdAt
     * @param $rating
     * @throws \Doctrine\ORM\ORMException
     * @throws \Doctrine\ORM\OptimisticLockException
     */
    public function create($team, $createdAt, $rating)
    {
        $ratingTeam = new $this->entity;
        $ratingTeam->setTeam($team)
            ->setRating($rating)
            ->setCreatedAt($createdAt);

        $this->entityManager->persist($ratingTeam);
        $this->entityManager->flush();
    }

    /**
     * @param $ratingTeams
     * @return array
     */
    public function retingTeamsDecorator($ratingTeams)
    {
        $teams = [];
        /** @var RatingTeam $ratingTeam */
        foreach ($ratingTeams as $ratingTeam){

            /** @var Team $team */
            $team = $ratingTeam->getTeam();
            $this->imageService->setImage($team->getLogo());
            $teams[] = [
                "id" =>$ratingTeam->getId (),
                'team_id' => $team->getId(),
                'title' => $team->getName(),
                'image' => $this->imageService->getImagePath(),
                'rating' => $ratingTeam->getRating(),
            ];
        }
        return $teams;
    }
}
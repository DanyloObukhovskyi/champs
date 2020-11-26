<?php


namespace App\Service\Match;


use App\Entity\Match;
use App\Entity\PastMatch;
use App\Entity\Team;
use App\Service\EntityService;
use App\Service\ImageService;
use App\Service\TeamService;
use Doctrine\ORM\EntityManagerInterface;

class PastMatchService extends EntityService
{
    protected $entity = PastMatch::class;

    protected $repository;

    protected $teamService;

    protected $imageService;

    public function __construct(EntityManagerInterface $entityManager)
    {
        parent::__construct($entityManager);

        $this->teamService = new TeamService($entityManager);
        $this->imageService = new ImageService();
    }

    /**
     * @param Match $match
     * @param array $pastMatch
     * @param Team $matchTeam
     * @return mixed
     * @throws \Doctrine\ORM\ORMException
     * @throws \Doctrine\ORM\OptimisticLockException
     */
    public function create(Match $match, array $pastMatch, Team $matchTeam)
    {
        $past =  $this->repository->findMatch($match, $pastMatch, $matchTeam);

        if (empty($past)){
            $past = new $this->entity;
            $past->setMatch($match);
            $past->setTeamTwo($pastMatch['team_two']);
            $past->setScore($pastMatch['score']);
            $past->setTeam($matchTeam);

            $this->entityManager->persist($past);
            $this->entityManager->flush();
        }
        return $past;
    }

    /**
     * @param PastMatch $pastMatch
     * @return array
     * @throws \Doctrine\ORM\NonUniqueResultException
     * @throws \Doctrine\ORM\ORMException
     */
    public function decorate(PastMatch $pastMatch): array
    {
        $match = [];
        /** @var Team $teamOpponent */
        $teamOpponent = $this->teamService->getByName($pastMatch->getTeamTwo());

        $match['opponent']['name'] = $pastMatch->getTeamTwo();
        $match['score'] = $pastMatch->getScore();

        if (isset($teamOpponent)){
            $this->imageService->setImage($teamOpponent->getLogo());
            $match['opponent']['logo'] = $this->imageService->getImagePath();
        } else {
            $match['opponent']['logo'] = ImageService::DEFAULT;
        }
        return $match;
    }

    /**
     * @param array $pastMatches
     * @return array
     * @throws \Doctrine\ORM\NonUniqueResultException
     * @throws \Doctrine\ORM\ORMException
     */
    public function decorateAll(array $pastMatches)
    {
        $matches = [];

        foreach ($pastMatches as $pastMatch)
        {
            $matches[] = $this->decorate($pastMatch);
        }
        return $matches;
    }

    /**
     * @param Match $match
     * @param Team $team
     * @return mixed
     */
    public function getByMatchAndTeam(Match $match, Team $team)
    {
        return $this->repository->findByMatchAndTeam($match, $team);
    }
}
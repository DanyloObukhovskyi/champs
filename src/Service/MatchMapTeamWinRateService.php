<?php


namespace App\Service;


use App\Entity\Map;
use App\Entity\Match;
use App\Entity\MatchMapTeamStatistic;
use App\Entity\Team;
use App\Repository\MatchMapTeamStatisticRepository;

class MatchMapTeamWinRateService extends EntityService
{
    protected $entity = MatchMapTeamStatistic::class;

    /** @var MatchMapTeamStatisticRepository */
    protected $repository;

    /**
     * @param Team $team
     * @param Match $match
     * @param Map $map
     * @param $winRate
     * @throws \Doctrine\ORM\NonUniqueResultException
     * @throws \Doctrine\ORM\ORMException
     * @throws \Doctrine\ORM\OptimisticLockException
     */
    public function create(Team $team, Match $match, Map $map, $winRate)
    {
        $matchMapTeamStatistic = $this->repository->findByMatchTeamAndMap($match, $team, $map);

        if (empty($matchMapTeamStatistic))
        {
            $matchMapTeamStatistic = new $this->entity;
            $matchMapTeamStatistic->setTeam($team);
            $matchMapTeamStatistic->setMatch($match);
            $matchMapTeamStatistic->setMap($map);
        }
        $matchMapTeamStatistic->setWinRate($winRate);

        $this->entityManager->persist($matchMapTeamStatistic);
        $this->entityManager->flush();
    }
}
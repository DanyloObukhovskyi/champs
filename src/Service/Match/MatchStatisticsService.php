<?php
/**
 * Product: champs.
 * Date: 24/06/2020
 */

namespace App\Service\Match;


use App\Entity\Map;
use App\Entity\Match;
use App\Entity\MatchStatistics;
use App\Repository\MatchStatisticsRepository;
use App\Service\EntityService;
use App\Service\NeedMigrationService;


class MatchStatisticsService extends EntityService
{
    protected $entity = MatchStatistics::class;

    /** @var MatchStatisticsRepository */
    protected $repository;

    /**
     * @param Match $match
     * @param Map $map
     * @param $values
     * @return MatchStatistics|bool|null
     * @throws \Doctrine\ORM\ORMException
     * @throws \Doctrine\ORM\OptimisticLockException
     */
    public function create(Match $match, Map $map, $values)
    {
        $isNew = false;
        $matchStatistics = $this->getByMatchAndMap($match->getId(), $map->getId());
        if (!$matchStatistics) {
            /** @var MatchStatistics $matchStatistics */
            $matchStatistics = new $this->entity;
            $matchStatistics->setMatch($match)
                ->setMap($map);

            $isNew = true;
        }

        $score1 = false;
        $score2 = false;
        foreach ($values as $stat) {
            $score = intval($stat['score']);
            if ($score === '-') {
                $score = 0;
            }

            if ($score1 === false) {
                $score1 = $score;
            } elseif ($score1 !== false && $score2 === false) {
                $score2 = $score;
            }
        }

        $needMigration = false;
        if ($score1 != $matchStatistics->getScore1()) {
            $needMigration = true;
        }

        if ($score2 != $matchStatistics->getScore2()) {
            $needMigration = true;
        }

        if ($needMigration && !$isNew) {
            NeedMigrationService::setNeedMigration($matchStatistics);
        }

        $matchStatistics->setScore1($score1)
            ->setScore2($score2);

        $this->entityManager->persist($matchStatistics);

        $this->entityManager->flush();

        return $matchStatistics;
    }

    /**
     * @param $matchId
     * @param $mapId
     * @return MatchStatistics|bool|null
     * @throws \Doctrine\ORM\NonUniqueResultException
     * @throws \Doctrine\ORM\ORMException
     */
    public function getByMatchAndMap($matchId, $mapId)
    {
        $matchStatistics = $this->repository->getByMatchAndMap($matchId, $mapId);
        if (isset($matchStatistics)) {
            $this->entityManager->persist($matchStatistics);
            return $matchStatistics;
        }

        return false;
    }
}
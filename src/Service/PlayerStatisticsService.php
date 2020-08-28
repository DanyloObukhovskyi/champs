<?php
/**
 * Product: champs.
 * Date: 24/06/2020
 */

namespace App\Service;


use App\Entity\Map;
use App\Entity\Match;
use App\Entity\Player;
use App\Entity\PlayerStatistics;
use App\Repository\PlayerStatisticsRepository;

class PlayerStatisticsService extends EntityService
{
    protected $entity = PlayerStatistics::class;

    /** @var PlayerStatisticsRepository */
    protected $repository;

    public function create(Player $player, Match $match, Map $map, array $values)
    {
        $playerStatistics = $this->repository->getByMatchAndPlayer($match->getId(), $player->getId());

        $isNew = false;
        if (isset($playerStatistics))
        {
            $this->entityManager->persist($playerStatistics);
        }
        else
        {
            /** @var PlayerStatistics $playerStatistics */
            $playerStatistics = new $this->entity;
            $playerStatistics->setMap($map)
                ->setMatch($match)
                ->setPlayer($player);

            $isNew = true;
        }

        $needMigration = false;

        if (!empty($values['kills']) && $values['kills'] != $playerStatistics->getKillValue())
        {
            $playerStatistics->setKillValue($values['kills']);
            $needMigration = true;
        }

        if (!empty($values['death']) && $values['death'] != $playerStatistics->getDeathValue())
        {
            $playerStatistics->setDeathValue($values['death']);
            $needMigration = true;
        }

        if (!empty($values['adr']) && $values['adr'] != $playerStatistics->getAdr())
        {
            $playerStatistics->setAdr($values['adr']);
            $needMigration = true;
        }

        if (!empty($values['kast']) && $values['kast'] != $playerStatistics->getKast())
        {
            $playerStatistics->setKast($values['kast']);
            $needMigration = true;
        }

        if (!empty($values['rating']) && $values['rating'] != $playerStatistics->getRating())
        {
            $playerStatistics->setRating($values['rating']);
            $needMigration = true;
        }

        if ($needMigration && !$isNew)
        {
            NeedMigrationService::setNeedMigration($playerStatistics);
        }

        $this->entityManager->persist($playerStatistics);

        $this->entityManager->flush();

        return $playerStatistics;
    }
}
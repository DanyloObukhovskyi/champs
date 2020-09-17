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

    public function create(Player $player, Match $match, $map, array $values, $type)
    {
        if (isset($map))
        {
            $playerStatistics = $this->repository->getByMatchAndPlayerAndTypeAndMap(
                $match->getId(),
                $player->getId(),
                $type,
                $map->getId()
            );
        } else {
            $playerStatistics = $this->repository->getByMatchAndPlayerAndType(
                $match->getId(),
                $player->getId(),
                $type
            );
        }
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

        }
        if (!empty($values['kd']) && $values['kd'] != $playerStatistics->getKd())
        {
            $playerStatistics->setKd($values['kd']);
        }

        if (!empty($values['plusMinus']) && $values['plusMinus'] != $playerStatistics->getPlusMinus())
        {
            $playerStatistics->setPlusMinus($values['plusMinus']);
        }

        if (!empty($values['adr']) && $values['adr'] != $playerStatistics->getAdr())
        {
            $playerStatistics->setAdr($values['adr']);
        }

        if (!empty($values['kast']) && $values['kast'] != $playerStatistics->getKast())
        {
            $playerStatistics->setKast($values['kast']);
        }

        if (!empty($values['rating']) && $values['rating'] != $playerStatistics->getRating())
        {
            $playerStatistics->setRating($values['rating']);
        }

        if (!empty($type) && $type != $playerStatistics->getType())
        {
            $playerStatistics->setType($type);
        }

        $this->entityManager->persist($playerStatistics);
        $this->entityManager->flush();

        return $playerStatistics;
    }

    public function statisticsDecorator($statisticsList)
    {
        $stat = [];
        /** @var PlayerStatistics $statistic */
        foreach ($statisticsList as $statistic)
        {
            if ($statistic->getMap() === null){
                $map = 'Все карты';
            } else {
                $map = $statistic->getMap()->getName();
            }
            $stat[$map][$statistic->getType()][] = [
	            'stat_id' => $statistic->getId(),
	            'player_id' => $statistic->getPlayer()->getPerson()->getId(),
                'player' => $statistic->getPlayer()->getPerson()->getNick(),
                'kd' => $statistic->getKd(),
                'adr' => $statistic->getAdr(),
                'kast' => $statistic->getKast(),
                'rating' => $statistic->getRating(),
                'plusMinus' => $statistic->getPlusMinus()
            ];
        }
        return $stat;
    }
}
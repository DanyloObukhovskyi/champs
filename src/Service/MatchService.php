<?php
/**
 * Product: champs.
 * Date: 24/06/2020
 */

namespace App\Service;


use App\Entity\Event;
use App\Entity\Match;
use App\Repository\MatchRepository;

class MatchService extends EntityService
{
    protected $entity = Match::class;

    /** @var MatchRepository */
    protected $repository;

    public function create($values, $teams, Event $event = null)
    {
        $match = $this->repository->findByUrl($values['url']);
        if (empty($match)){
            $match = $this->repository->findByStartAtAndTeams($values['start_at'], $teams);
        }

        if (!$match)
        {
           /** @var Match $match */
           $match = new $this->entity;

           $match->setCode($values['code'])
               ->setUrl($values['url'])
               ->setStartAt($values['start_at']);
        }
        if (isset($values['headToHead'])){
            $match->setTeam1WinRate($values['headToHead'][0] ?? null);
            $match->setTeam2WinRate($values['headToHead'][1] ?? null);
        }

        if (!empty($teams)) {
            $match->setTeam1($teams[0]);
            if (isset($teams[1])){
                $match->setTeam2($teams[1]);
            }
        }

        if ($event)
        {
           $match->setEvent($event);
        }

        if (!empty($values['is_detail_info']))
        {
           $match->setDetailInfo($values['is_detail_info']);
        }

        if (!empty($values['is_live']))
        {
           $match->setLive($values['is_live']);
        }

        $this->entityManager->persist($match);

        $this->entityManager->flush();

        return $match;
    }

    public function updateStatistic(Match $match, $values)
    {
        $isChanged = false;
        if (isset($values['score1']))
        {
            $match->setScore1($values['score1']);
            $isChanged = true;
        }
        if (isset($values['score2']))
        {
            $match->setScore2($values['score2']);
            $isChanged = true;
        }

        if ($isChanged)
        {
            $this->entityManager->persist($match);
            $this->entityManager->flush();
        }
    }

    public function getByCode($code)
    {
        $match = $this->repository->getByCode($code);
        if (isset($match))
        {
            $this->entityManager->persist($match);
            return $match;
        }

        return false;
    }

    public function getByData($team1, $team2, $url)
    {
        $match = $this->repository->getByData($team1, $team2, $url);

        return $match;
    }

    public function getLiveMatches()
    {
        return $this->repository->findLiveForParse();
    }

    public function getNotFullMatches()
    {
        return $this->repository->getNotFullMatches();
    }

    public function getMatchesWhereEmptyTeams()
    {
        return $this->repository->getMatchesWhereEmptyTeams();
    }

    public function isExist(string $url)
    {
        return $this->repository->findByUrl($url);
    }

    public function updateTeams($values, $teams)
    {
        return $this->create($values, $teams);
    }

    public function findByUrl($url)
    {
        return $this->repository->findByUrl($url);
    }
}
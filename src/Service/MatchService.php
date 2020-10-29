<?php
/**
 * Product: champs.
 * Date: 24/06/2020
 */

namespace App\Service;


use App\Entity\Event;
use App\Entity\Match;
use App\Entity\MatchStatistics;
use App\Entity\Stream;
use App\Entity\Team;
use App\Repository\MatchRepository;

/**
 * Class MatchService
 * @package App\Service
 */
class MatchService extends EntityService
{
    protected $entity = Match::class;

    /**
     * @var MatchRepository
     */
    protected $repository;

    /**
     * @var ImageService
     */
    protected $imageService;

    /**
     * MatchService constructor.
     * @param $entityManager
     */
    public function __construct($entityManager)
    {
        parent::__construct($entityManager);

        $this->imageService = new ImageService();
    }

    /**
     * @param $values
     * @param $teams
     * @param Event|null $event
     * @return Match|mixed
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function create($values, $teams, Event $event = null)
    {
        /** @var Match $match */
        $match = $this->repository->findByUrl($values['url']);
        if (empty($match)){
            $match = $this->repository->findByStartAtAndTeams($values['start_at'], $teams);
        }

        if (empty($match))
        {
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

        if (!empty($values['statistics']['live']))
        {
           $match->setLive($values['statistics']['live']);
        }

        $this->save($match);

        return $match;
    }

    /**
     * @param Match $match
     * @param $values
     * @return mixed
     */
    public function updateStatistic(Match $match, $values)
    {
        if (isset($values['score1']))
        {
            $match->setScore1($values['score1']);
        }
        if (isset($values['score2']))
        {
            $match->setScore2($values['score2']);
        }

        return $this->save($match);
    }

    /**
     * @param $code
     * @return Match|bool|null
     * @throws \Doctrine\ORM\NonUniqueResultException
     * @throws \Doctrine\ORM\ORMException
     */
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

    /**
     * @param $team1
     * @param $team2
     * @param $url
     * @return mixed
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function getByData($team1, $team2, $url)
    {
        $match = $this->repository->getByData($team1, $team2, $url);

        return $match;
    }

    /**
     * @return Match[]|array
     */
    public function getLiveMatches()
    {
        return $this->repository->findLiveForParse();
    }

    /**
     * @return Match[]|array
     */
    public function getNotFullMatches()
    {
        return $this->repository->getNotFullMatches();
    }

    /**
     * @return array
     */
    public function getMatchesWhereEmptyTeams()
    {
        return $this->repository->getMatchesWhereEmptyTeams();
    }

    /**
     * @param string $url
     * @return Match|null
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function isExist(string $url)
    {
        return $this->repository->findByUrl($url);
    }

    /**
     * @param $values
     * @param $teams
     * @return Match|mixed
     */
    public function updateTeams($values, $teams)
    {
        return $this->create($values, $teams);
    }

    /**
     * @param $url
     * @return Match|null
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function findByUrl($url)
    {
        return $this->repository->findByUrl($url);
    }

    /**
     * @param array $matches
     * @return array
     */
    public function matchesDecorator(array $matches)
    {
        $items = [];

        foreach ($matches as $match)
        {
            $startDay = date("md", $match->getStartAt()->getTimestamp());

            if (!array_key_exists($startDay, $items))
            {
                $items[$startDay] = [
                    "date" => date("d F", $match->getStartAt()->getTimestamp()),
                    "items" => [],
                ];
            }
            $items[$startDay]["items"][] = $this->matchDecorator($match);
        }
        ksort($items);
        
        return $items;
    }

    /**
     * @param Match $match
     * @return array
     */
    public function matchDecorator(Match $match)
    {
        if (!empty($match->getEvent()) and !empty($match->getEvent()->getImage())){
            $this->imageService->setImage($match->getEvent() === null ? null : $match->getEvent()->getImage());
        } else {
            $this->imageService->setImage($match->getEvent() === null ? null : $match->getEvent()->getImageHeader());
        }

        $matchFields = [
            "match_id" => $match->getId(),
            "startAt"  =>  $match->getStartAt(),
            "time"     => date("H:i", $match->getStartAt()->getTimestamp()),
            "title"    => "",
            "logo"     => "",
            "teamA"    => null,
            "teamB"    => null,
            "event"    => [
                "name"      => $match->getEvent() === null ? null : $match->getEvent()->getName(),
                "startedAt" => $match->getEvent() === null ? null : $match->getEvent()->getStartedAt(),
                "endedAt"   => $match->getEvent() === null ? null : $match->getEvent()->getEndedAt(),
                "image"     => $this->imageService->getImagePath()
            ],
            "streams"  => $this->getMatchStrams($match)
        ];
        $matchFields['statistics'] = $this->getMatchStatistics($match);

        $team1 = $match->getTeam1();
        if(isset($team1)){
            $matchFields['teamA'] = $this->getMatchTeam(
                $match->getTeam1(),
                $match->getScore1()
            );
        }
        if(!empty($match->getTeam2())){
            $matchFields['teamB'] = $this->getMatchTeam(
                $match->getTeam2(),
                $match->getScore2()
            );
        }
        return $matchFields;
    }

    /**
     * @param Match $match
     * @return array
     */
    public function getMatchStatistics(Match $match): array
    {
        $result = [];

        /** @var MatchStatistics[] $matchStatistics */
        $matchStatistics = $match->getMatchStatistics();

        foreach ($matchStatistics as $matchStatistic){
            $result[] = [
                'mapShortCode' => $matchStatistic->getMap()->getShortCode(),
                'score1' => $matchStatistic->getScore1(),
                'score2' => $matchStatistic->getScore2(),
            ];
        }
        return $result;
    }

    /**
     * @param Match $match
     * @return array
     */
    public function getMatchStrams(Match $match): array
    {
        $streams = [];

        /** @var Stream $stream */
        foreach ($match->getStreams() as $stream){
            $streams[] = [
                'name' => $stream->getName(),
                'url'  => $stream->getUrl(),
                'lang' => $stream->getLanguage(),
                'type' => $stream->getType()
            ];
        }
        return $streams;
    }

    /**
     * @param Team $team
     * @param $score
     * @return array
     */
    public function getMatchTeam(Team $team, $score): array
    {
        $flag = empty($team->getFlagIcon()) ? null: $team->getFlagIcon()->getName();

        $this->imageService->setImage($flag);
        $flag = $this->imageService->getImagePath();

        $this->imageService->setImage($team->getLogo());

        return [
            "title" => str_replace("'", "", $team->getName()),
            "logo"  => $this->imageService->getImagePath(),
            "score" => $score,
            "flag"  => $flag
        ];
    }
}
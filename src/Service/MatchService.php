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
    public const MOHTHS = [
        'January' => 'Января',
        'February' => 'Февраля',
        'March' => 'Марта',
        'April' => 'Апреля',
        'May' => 'Мая',
        'June' => 'Июня',
        'Jule' => 'Июля',
        'August' => 'Августа',
        'September' => 'Сентября',
        'October' => 'Октября',
        'November' => 'Ноября',
        'December' => 'Декабря'
    ];

    protected $entity = Match::class;

    /**
     * @var MatchRepository
     */
    protected $repository;

    /**
     * @var ImageService
     */
    protected $imageService;

    public function __construct($entityManager)
    {
        parent::__construct($entityManager);

        $this->imageService = new ImageService();
    }

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

        $this->save($match);
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
            $startDay = date("mdY", $match->getStartAt()->getTimestamp());

            if (!array_key_exists($startDay, $items))
            {
                $date = date("d F", $match->getStartAt()->getTimestamp());

                foreach (self::MOHTHS as $month => $lang)
                {
                    $date = str_replace($month, $lang, $date);
                }
                $items[$startDay] = [
                    "date" => $date,
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
            "startAt" =>  $match->getStartAt(),
            "time" => date("H:i", $match->getStartAt()->getTimestamp()),
            "title" => "",
            "logo" => "",
            "teamA" => null,
            "teamB" => null,
            "event" => [
                "name" => $match->getEvent() === null ? null : $match->getEvent()->getName(),
                "startedAt" => $match->getEvent() === null ? null : $match->getEvent()->getStartedAt(),
                "endedAt" => $match->getEvent() === null ? null : $match->getEvent()->getEndedAt(),
                "image" => $this->imageService->getImagePath()
            ],
        ];
        $team1 = $match->getTeam1();
        if(isset($team1)){
            $flag = empty($match->getTeam1()->getFlagIcon()) ? null: $match->getTeam1()->getFlagIcon()->getName();

            $this->imageService->setImage($flag);
            $flag = $this->imageService->getImagePath();

            $this->imageService->setImage($match->getTeam1()->getLogo());
            $matchFields['teamA'] = [
                "title" => str_replace("'", "", $match->getTeam1()->getName()),
                "logo" => $this->imageService->getImagePath(),
                "score" => $match->getScore1(),
                "flag" => $flag
            ];
        }
        $team2 = $match->getTeam2();
        if(isset($team2)){
            $flag = empty($match->getTeam2()->getFlagIcon()) ? null: $match->getTeam2()->getFlagIcon()->getName();

            $this->imageService->setImage($flag);
            $flag = $this->imageService->getImagePath();

            $this->imageService->setImage($match->getTeam2()->getLogo());
            $matchFields['teamB'] = [
                "title" => str_replace("'", "", $match->getTeam2()->getName()),
                "logo" => $this->imageService->getImagePath(),
                "score" => $match->getScore2(),
                "flag" => $flag
            ];
        }
        return $matchFields;
    }
}
<?php
/**
 * Product: champs.
 * Date: 24/06/2020
 */

namespace App\Service\Match;


use App\Entity\Event;
use App\Entity\Match;
use App\Entity\MatchStatistics;
use App\Entity\Stream;
use App\Entity\Team;
use App\Repository\MatchRepository;
use App\Service\EntityService;
use App\Service\ImageService;
use App\Service\News\NewsService;
use App\Service\TeamService;
use Ausi\SlugGenerator\SlugGenerator;
use Symfony\Component\HttpFoundation\Request;

/**
 * Class MatchService
 * @package App\Service
 */
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

    public const FUTURE_MATCHES = 'future';

    public const LIVE_MATCHES = 'live';

    public const PAST_MATCHES = 'past';

    public const MATCH_TYPES = [
        self::FUTURE_MATCHES,
        self::LIVE_MATCHES,
        self::PAST_MATCHES,
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

    /**
     * @var TeamService
     */
    protected $teamService;

    /**
     * MatchService constructor.
     * @param $entityManager
     */
    public function __construct($entityManager)
    {
        parent::__construct($entityManager);

        $this->imageService = new ImageService();
        $this->teamService = new TeamService($entityManager);
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

        if (!empty($values['is_live']))
        {
           $match->setLive($values['is_live']);
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
     * @param $type
     * @return array
     */
    public function matchesDecorator(array $matches, $type = 'live')
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
                    "date"  => $date,
                    "items" => [],
                ];
            }
            $items[$startDay]["items"][] = $this->matchDecorator($match, $type);
        }
        ksort($items);
        $items = array_reverse($items);

        return $items;
    }

    /**
     * @param Match $match
     * @param $type
     * @param string $locale
     * @return array
     */
    public function matchDecorator(Match $match, $type = 'live')
    {
        if (!empty($match->getEvent()) and !empty($match->getEvent()->getImage())){
            $this->imageService->setImage($match->getEvent() === null ? null : $match->getEvent()->getImage());
        } else {
            $this->imageService->setImage($match->getEvent() === null ? null : $match->getEvent()->getImageHeader());
        }
        $dayStart = $match->getStartAt()->format('d F');

        $matchFields = [
            "match_id" => $match->getId(),
            "startAt"  =>  $match->getStartAt(),
            "time"     => date("H:i", $match->getStartAt()->getTimestamp()),
            "title"    => "",
            "logo"     => "",
            "teamA"    => null,
            "teamB"    => null,
            "startedAtRu" => NewsService::replaceMonth($dayStart),
            "event"    => [
                "name"      => $match->getEvent() === null ? null : $match->getEvent()->getName(),
                "startedAt" => $match->getEvent() === null ? null : $match->getEvent()->getStartedAt(),
                "endedAt"   => $match->getEvent() === null ? null : $match->getEvent()->getEndedAt(),
                "image"     => $this->imageService->getImagePath(),
                'game'      => $match->getEvent() !== null ? (!empty($match->getEvent()->getGame()) ? $match->getEvent()->getGame()->jsonSerialize() : null) : null
            ],
            "streams" => $this->getMatchStreams($match),
            "isLive" => $match->getLive() ? true : false,
            'type' => $type,
            'streamTime' => $match->getStartAt()->getTimestamp() <= (new \DateTime())->getTimestamp(),
            "slug" => $match->getSlug()
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
        $matchFields['pickAndBans'] = $this->getMatchPickAndBans($match);
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
    public function getMatchStreams(Match $match): array
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

    /**
     * @param $id
     * @return Match|null
     */
    public function find($id)
    {
        return $this->repository->find($id);
    }

    /**
     * @param Match $match
     * @return array
     */
    public function getMatchPickAndBans(Match $match): array
    {
        $matchPickAndBans = [];

        /** @var MatchPickAndBan $matchPickAndBan */
        foreach ($match->getMatchPickAndBans() as $matchPickAndBan)
        {
            $team = $matchPickAndBan->getTeam();

            if (isset($team)){
                $this->imageService->setImage($team->getLogo());

                $matchPickAndBans[] = [
                    'team' => [
                        'logo' => $this->imageService->getImagePath(),
                        'name' => $team->getName()
                    ],
                    'operation' => $matchPickAndBan->getOperationType(),
                    'map' => $matchPickAndBan->getMap()
                ];
            }
        }
        return $matchPickAndBans;
    }

    /**
     * @param Match $match
     * @param $translator
     * @return string
     */
    public function translateMatchDate(Match $match, $translator): string
    {
        $matchDate = $match->getStartAt()->format('d');
        $matchMonth = $translator->trans($match->getStartAt()->format('F'));
        $matchYear = $match->getStartAt()->format('Y');

        return "$matchDate $matchMonth $matchYear";
    }

    /**
     * @param Request $filters
     * @param $type
     * @param int $page
     * @param bool $isCount
     * @return array|mixed
     * @throws \Exception
     */
    public function getMatchesByType($filters, $type, $page = 0)
    {
        $filters = (object)[
            'dateFrom' => $this->parseDate($filters->dateFrom),
            'dateTo' =>  $this->parseDate($filters->dateTo),
            'teamA' => $this->teamService->find($filters->teamA->id ?? null),
            'teamB' => $this->teamService->find($filters->teamB->id ?? null),
        ];
        return $this->repository->getMatchesByType(
            $filters,
            $type,
            $page - 1 ?? null,
            $_ENV['MATCHES_PAGINATION'] ?? null
        );
    }

    /**
     * @param $filters
     * @param $type
     * @return int|mixed
     * @throws \Doctrine\ORM\NoResultException
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function getMatchesCountByType($filters, $type)
    {
        $filters = (object)[
            'dateFrom' => self::parseDate($filters->dateFrom),
            'dateTo' =>  self::parseDate($filters->dateTo),
            'teamA' => $this->teamService->find($filters->teamA->id ?? null),
            'teamB' => $this->teamService->find($filters->teamB->id ?? null),
        ];

        $result = 0;

        if (in_array($type, self::MATCH_TYPES, false))
        {
            $result = $this->repository->getMatchesQueryByType($filters, $type)
                ->select('count(m.id)')
                ->getQuery()
                ->getSingleScalarResult();
        }
        return $result;
    }

    /**
     * @param string $date
     * @return string
     */
    public static function parseDate($date = null): ?string
    {
        if (is_string($date) and !empty($date)){
            [$day, $month, $year] = explode('.', $date);
            $day = trim($day);
            $month = trim($month);
            $year = trim($year);

            $parseDate = "$day-$month-$year";
        }
        return $parseDate ?? null;
    }

    /**
     * @param Event $event
     * @return Match[]
     */
    public function findByEvent(Event $event)
    {
        return $this->repository->findBy(['event' => $event]);
    }

    /**
     * @param Match $match
     * @return mixed
     */
    public function getMeetingMatches(Match $match)
    {
        return $this->repository->getMeetingMatches(
            $match->getTeam1(),
            $match->getTeam2(),
            $match->getStartAt()
        );
    }

    public function getAllMatches()
    {
        return $this->repository->getMatchesForSiteMap();
    }
}
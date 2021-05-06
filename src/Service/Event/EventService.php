<?php
/**
 * Product: champs.
 * Date: 24/06/2020
 */

namespace App\Service\Event;


use App\Message\Match;
use App\Service\DownloadFile;
use App\Service\EntityService;
use App\Service\FlagIconService;
use App\Service\ImageService;
use App\Service\MapService;
use App\Service\Match\MatchService;
use App\Service\News\NewsService;
use App\Service\TeamService;
use App\Traits\Dispatchable;
use Ausi\SlugGenerator\SlugGenerator;
use DateTime;
use App\Entity\Event;
use App\Repository\EventRepository;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use Symfony\Component\Translation\Translator;

class EventService extends EntityService
{
    use Dispatchable;

    public const FUTURE = 'future';

    public const LIVE = 'live';

    public const PAST = 'past';

    public const TYPES = [
        self::FUTURE,
        self::LIVE,
        self::PAST,
    ];

    protected $entity = Event::class;

    /** @var EventRepository */
    protected $repository;

    /** @var ImageService */
    protected $imageService;

    /** @var FlagIconService */
    protected $flagIconService;

    /** @var EventPrizeDistributionService */
    protected $eventPrizeDistributionService;

    /** @var EventGroupPlayService */
    protected $eventGroupPlayService;

    /** @var TeamService */
    protected $teamService;

    /** @var EventMapPoolService */
    protected $eventMapPoolService;

    /** @var RelatedEventService */
    protected $relatedEventService;

    /** @var MapService */
    protected $mapService;

    /** @var EventTeamAttendingService */
    protected $eventTeamAttendingService;

    /** @var EventBracketService */
    protected $eventBracketService;

    /** @var MatchService */
    protected $matchService;

    public function __construct(EntityManagerInterface $entityManager)
    {
        parent::__construct($entityManager);

        $this->imageService = new ImageService();
        $this->flagIconService = new FlagIconService($entityManager);

        $this->eventPrizeDistributionService = new EventPrizeDistributionService($entityManager);
        $this->eventGroupPlayService = new EventGroupPlayService($entityManager);

        $this->teamService = new TeamService($entityManager);
        $this->mapService = new MapService($entityManager);

        $this->eventMapPoolService = new EventMapPoolService($entityManager);
        $this->relatedEventService = new RelatedEventService($entityManager);

        $this->eventTeamAttendingService = new EventTeamAttendingService($entityManager);
        $this->eventBracketService = new EventBracketService($entityManager);

        $this->matchService = new MatchService($entityManager);
    }

    /**
     * @param $values
     * @param DateTime|null $parseDate
     * @return Event
     * @throws \Doctrine\ORM\NonUniqueResultException
     * @throws \Doctrine\ORM\ORMException
     * @throws \Doctrine\ORM\OptimisticLockException
     */
    public function create($values, DateTime $parseDate = null)
    {
        $event = $this->createBaseEvent($values, $parseDate);

        $brackets = $values['brackets'] ?? [];
        $this->createBrackets($event, $brackets);

        $prizeDistributions = $values['prizeDistributions'] ?? null;
        $this->setPrizeDistributions($event, $prizeDistributions);

        $groupPlay = $values['groupPLay'] ?? null;
        $this->setGroupPLay($event, $groupPlay);

        $mapPool = $values['mapsPool'] ?? null;
        $this->setMapPool($event, $mapPool);

        $relatedEvents = $values['relatedEvents'] ?? null;
        $this->setRelatedEvents($event, $relatedEvents);

        $teamsAttending = $values['teamsAttending'] ?? [];
        $this->createEventTeamsAttending($event, $teamsAttending);

        return $event;
    }

    /**
     * @param $name
     * @param $startAt
     * @return mixed|null
     * @throws \Doctrine\ORM\NonUniqueResultException
     * @throws \Doctrine\ORM\ORMException
     */
    public function getByNameAndStartDate($name, $startAt)
    {
        $event = $this->repository->getByNameAndStartDate($name, $startAt);
        if (isset($event)) {
            $this->entityManager->persist($event);
            return $event;
        }

        return null;
    }

    /**
     * @param $name
     * @param $date
     * @return Event|null
     * @throws \Doctrine\ORM\NonUniqueResultException
     * @throws \Doctrine\ORM\ORMException
     */
    public function getByNameAndBetweenDate($name, $date)
    {
        $event = $this->repository->getByNameAndBetweenDate($name, $date);
        if (isset($event)) {
            $this->entityManager->persist($event);
            return $event;
        }

        return null;
    }

    /**
     * @param array $events
     * @return array
     */
    public function eventsDecorator(array $events): array
    {
        $eventItems = [];

        /** @var Event $event */
        foreach ($events as $event) {
            $eventItems[] = $this->decorator($event);
        }
        return $eventItems;
    }

    /**
     * @param Event $event
     * @return array
     */
    public function decorator(Event $event)
    {
        $generator = new SlugGenerator;

        $dayStart = $event->getStartedAt()->format('d F');
        $dayEnd = !empty($event->getEndedAt()) ? $event->getEndedAt()->format('d F') : null;
        $year =  $event->getStartedAt()->format('Y') < date('Y') ? $event->getStartedAt()->format('Y').' г' : '';
        $this->imageService->setImage($event->getImage());

        return [
            "id" => $event->getId(),
            "name" => $event->getName(),
            "startedAt" => $event->getStartedAt(),
            "endedAt" => $event->getEndedAt(),
            "year" => $year,
            "image" => $event->getImage(),
            'imageHeader' => $event->getImageHeader(),
            'logoWithPath' => $this->imageService->getImagePath(),
            'startedAtRu' => NewsService::replaceMonth($dayStart),
            'endedAtRu' => NewsService::replaceMonth($dayEnd),
            'views' => $event->getViews(),
            'slug' => $generator->generate($event->getName()),
            'type' => $event->getStatus() !== 'pro' ? 'все' : 'pro',
            'location' => $event->getLocation(),
            'game' => !empty($event->getGame()) ? $event->getGame()->jsonSerialize() : null
        ];
    }

    /**
     * @param $values
     * @param null $parseDate
     * @return Event
     * @throws \Doctrine\ORM\NonUniqueResultException
     * @throws \Doctrine\ORM\ORMException
     * @throws \Doctrine\ORM\OptimisticLockException
     */
    public function createBaseEvent($values, $parseDate = null)
    {
        /** @var Event $event */
        $event = $this->getByUrl($values['url']);

        if (empty($event)) {
            $event = new $this->entity;
            $event->setUrl($values['url'] ?? null);
            $event->setViews(0);
        }
        if (!empty($values['started_at'])) {
            $startedAt = $values['started_at']->format("Y-m-d");

            $event->setStartedAt(new \DateTime($startedAt));
        }
        if (empty($values['ended_at'])) {
            $values['ended_at'] = $values['started_at'] ?? null;
        }
        if (is_string($values['ended_at'])) {
            $values['ended_at'] = new \DateTime($values['ended_at']);
        }

        /** @var Event $event */
        $event->setPrize($values['prize'] ?? null);
        $event->setCommandCount($values['teams'] ?? null);
        $event->setLocation($values['location'] ?? null);
        $event->setName($values['name'] ?? '');
        $event->setEndedAt($values['ended_at'] ?? null);
        $event->setCreatedAt($parseDate);

        $event = $this->setImageLogo($event, $values);
        if (!empty($values['imageHeader'])) {
            try {
                $image = DownloadFile::getImage($values['imageHeader']);
            } catch (Exception $e) {
                //
            }
            if (isset($image)) {
                $event->setImageHeader($image);
            }
        }
        if (isset($values['flag'])) {
            $flag = $this->flagIconService->getFlagByOrigName($values['flag']['name']);
            if (empty($flag)) {
                $flag = $this->flagIconService->createOrUpdate($values['flag']);
            }
            $event->setFlagIcon($flag);
        }
        $event->setStatus(Event::STATUS_PRO);

        $this->save($event);

        return $event;
    }

    /**
     * @param $event
     * @param $prizeDistributions
     */
    public function setPrizeDistributions($event, $prizeDistributions)
    {
        if (isset($prizeDistributions)) {
            foreach ($prizeDistributions as $prizeDistribution) {
                $this->eventPrizeDistributionService->create($prizeDistribution, $event);
            }
        }
    }

    /**
     * @param $event
     * @param $groupPlay
     */
    public function setGroupPLay($event, $groupPlay)
    {
        if (isset($groupPlay)) {
            foreach ($groupPlay as $groupName => $teams) {
                foreach ($teams as $teamName => $teamFields) {
                    $team = $this->teamService->getByName($teamName);
                    if (isset($team)) {
                        $this->eventGroupPlayService->create($event, $team, $groupName, $teamFields);
                    }
                }
            }
        }
    }

    /**
     * @param $event
     * @param $mapPool
     */
    public function setMapPool($event, $mapPool)
    {
        if (isset($mapPool)) {
            foreach ($mapPool as $mapName) {
                $map = $this->mapService->getByName($mapName);

                if (isset($map)) {
                    $this->eventMapPoolService->create($event, $map);
                }
            }
        }
    }

    /**
     * @param $event
     * @param $relatedEvents
     * @throws \Doctrine\ORM\NonUniqueResultException
     * @throws \Doctrine\ORM\ORMException
     * @throws \Doctrine\ORM\OptimisticLockException
     */
    public function setRelatedEvents($event, $relatedEvents)
    {
        if (isset($relatedEvents)) {
            foreach ($relatedEvents as $relatedEvent) {
                $relatedEventEntity = $this->createBaseEvent($relatedEvent);

                if (isset($relatedEventEntity)) {
                    $this->relatedEventService->create($event, $relatedEventEntity);
                }
            }
        }
    }

    /**
     * @return Event[]
     */
    public function getLastWeekEvents()
    {
        return $this->repository->getLastWeekEvents();
    }

    /**
     * @return Event[]
     */
    public function getFeatureEvents()
    {
        return $this->repository->getFeatureEvents();
    }

    /**
     * @param $event
     * @param $teamsAttending
     * @throws \Doctrine\ORM\NonUniqueResultException
     * @throws \Doctrine\ORM\ORMException
     */
    public function createEventTeamsAttending($event, $teamsAttending)
    {
        foreach ($teamsAttending as $teamAttending) {
            $team = $this->teamService->getByName($teamAttending['teamName']);

            if (empty($team)) {
                continue;
            }
            $this->eventTeamAttendingService->create($event, $team, $teamAttending['number']);
        }
    }

    /**
     * @param $url
     * @return mixed
     */
    public function getByUrl($url)
    {
        return $this->repository->getByUrl($url);
    }

    /**
     * @param $name
     * @return mixed
     */
    public function getByName($name)
    {
        return $this->repository->getByName($name);
    }

    /**
     * @return Event[]
     */
    public function getOldEvents()
    {
        return $this->repository->getOldEvents();
    }

    /**
     * @param $event
     * @param $image
     * @return mixed
     */
    public function setEventImage($event, $image)
    {
        if (!empty($image)) {
            $image = DownloadFile::getImage($image);
            if (isset($image)) {
                $event->setImage($image);
            }
        }
        return $this->save($event);
    }

    /**
     * @param $event
     * @param $values
     * @return mixed
     */
    public function setImageLogo($event, $values)
    {
        if (!empty($values['image'])) {
            $image = DownloadFile::getImage($values['image']);
            if (isset($image)) {
                $event->setImage($image);
            }
        } else {
            /** @var Event $prevent */
            $prevent = $this->getByName($values['name'] ?? null);
            if (isset($prevent)) {
                $event->setImage($prevent->getImage());
            }
        }
        return $event;
    }

    /**
     * @param $event
     * @param $brackets
     * @throws \Doctrine\ORM\NonUniqueResultException
     * @throws \Doctrine\ORM\ORMException
     */
    public function createBrackets($event, $brackets)
    {
        $brackets = $brackets['rounds'] ?? [];

        foreach ($brackets as $type => $bracket) {
            foreach ($bracket as $name => $matches) {

                foreach ($matches as $match) {
                    if (isset($match['team1']['name'])) {
                        $team1 = $this->teamService->getByName($match['team1']['name']);
                    }
                    if (isset($match['team2']['name'])) {
                        $team2 = $this->teamService->getByName($match['team2']['name']);
                    }
                    if (isset($match['matchUrl'])) {
                        $matchEntity = $this->matchService->findByUrl($match['matchUrl']);

                        if (empty($matchEntity)) {
                            $this->dispatch(new Match(['url' => $match['matchUrl']]));
                        }
                    }

                    if (isset($team1) or isset($team2)){
                        $this->eventBracketService->create(
                            $match,
                            $event,
                            $team1 ?? null,
                            $team2 ?? null,
                            $matchEntity ?? null,
                            $type,
                            $name
                        );
                    }
                }
            }
        }
    }

    /**
     * @param $filters
     * @param $type
     * @param $page
     * @return array|mixed
     * @throws Exception
     */
    public function getEventsByType($filters, $type, $page)
    {
        $filters = (object)[
            'dateFrom' => MatchService::parseDate($filters->dateFrom ?? null),
            'dateTo' => MatchService::parseDate($filters->dateTo ?? null),
            'teamA' => $this->teamService->find($filters->teamA->id ?? null),
            'teamB' => $this->teamService->find($filters->teamB->id ?? null),
            'online' => intVal($filters->online) ?? null,
            'tournamentType' => $filters->tournamentType ?? null,
            'name' => $filters->name ?? null,
            'prize' => $filters->prize ?? null,
            'game' => $filters->game ?? null,
            'country' => !empty($filters->country) ? $filters->country->nameEn ?? '' : '',
            'city' => !empty($filters->city) ? $filters->city->nameEn ?? '' : ''
        ];

        return $this->repository->getEventsByType(
            $filters,
            $type,
            $page - 1 ?? null,
            $_ENV['EVENTS_PAGINATION'] ?? null
        );
    }

    /**
     * @param $filters
     * @param $type
     * @return int|mixed
     * @throws \Doctrine\ORM\NoResultException
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function getEventsCountByType($filters, $type)
    {
        $filters = (object)[
            'dateFrom' => MatchService::parseDate($filters->dateFrom ?? null),
            'dateTo' => MatchService::parseDate($filters->dateTo ?? null),
            'teamA' => $this->teamService->find($filters->teamA->id ?? null),
            'teamB' => $this->teamService->find($filters->teamB->id ?? null),
            'name' => $filters->name ?? null,
            'online' => $filters->online ?? null,
            'tournamentType' => $filters->tournamentType ?? null,
            'prize' => $filters->prize ?? null,
            'game' => $filters->game ?? null,
            'country' => !empty($filters->country) ? $filters->country->nameEn ?? '' : '',
            'city' => !empty($filters->city) ? $filters->city->nameEn ?? '' : ''
        ];

        $result = 0;

        if (in_array($type, self::TYPES, false)) {
            $result = $this->repository->getEventsQueryByType($filters, $type)
                ->select('count(e.id)')
                ->getQuery()
                ->getSingleScalarResult();
        }
        return $result;
    }

    /**
     * @param Event $event
     * @return mixed
     */
    public function addEventView(Event $event)
    {
        $event->setViews($event->getViews() + 1);

        return $this->save($event);
    }
}
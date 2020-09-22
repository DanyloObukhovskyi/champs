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
use App\Service\MatchService;
use App\Service\TeamService;
use App\Traits\Dispatchable;
use DateTime;
use App\Entity\Event;
use App\Repository\EventRepository;
use Doctrine\ORM\EntityManagerInterface;
use Exception;

class EventService extends EntityService
{
    use Dispatchable;

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
        if (isset($event))
        {
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
        if (isset($event))
        {
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

        foreach ($events as $event)
        {
            /** @var Event $event */
            $eventItems[] = [
                "id" => $event->getId(),
                "name" => $event->getName(),
                "startedAt" => $event->getStartedAt(),
                "endedAt" => $event->getEndedAt(),
                "image" => $event->getImage(),
                'imageHeader' => $event->getImageHeader()
            ];
        }
        return $eventItems;
    }

    /**
     * @param $events
     * @return array
     */
    public function futureEventsDecorator($events): array
    {
        $futureEventItems = [];
        foreach ($events as $event)
        {

            /** @var Event $event */
            if (!array_key_exists(date("F Y", $event->getStartedAt()->getTimestamp()), $futureEventItems))
            {
                $futureEventItems[date("F Y",$event->getStartedAt()->getTimestamp())] = [
                    "date" => date("F Y", $event->getStartedAt()->getTimestamp()),
                    "items" => [],
                ];
            }
            $image = $event->getImage();
            $this->imageService->setImage($image);

            $image = isset($image) ? $this->imageService->getImagePath(): null;

            $headerImage = $event->getImageHeader();
            $this->imageService->setImage($headerImage);

            $headerImage = $this->imageService->getImagePath();

            $futureEventItems[date("F Y", $event->getStartedAt()->getTimestamp())]["items"][] = [
                "id" => $event->getId(),
                "name" => $event->getName(),
                "startedAt" => $event->getStartedAt(),
                "endedAt" => $event->getEndedAt(),
                "image" => $image,
                "imageHeader" => $headerImage,
                "teams" => $event->getCommandCount(),
                "location" => $event->getLocation(),
                "prize" => $event->getPrize()
            ];
        }
        return $futureEventItems;
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

        if (empty($event))
        {
            $event = new $this->entity;
            $event->setUrl($values['url'] ?? null);
        }
        if (!empty($values['started_at']))
        {
            $startedAt = $values['started_at']->format("Y-m-d");

            $event->setStartedAt(new \DateTime($startedAt));
        }
        if (empty($values['ended_at'])){
            $values['ended_at'] =  $values['started_at'] ?? null;
        }
        if (is_string($values['ended_at'])){
            $values['ended_at'] = new \DateTime($values['ended_at']);
        }

        /** @var Event $event */
        $event->setPrize($values['prize']);
        $event->setCommandCount($values['teams']);
        $event->setLocation($values['location']);
        $event->setName($values['name']);
        $event->setEndedAt($values['ended_at']);
        $event->setCreatedAt($parseDate);

        $event = $this->setImageLogo($event, $values);
        if (!empty($values['imageHeader']))
        {
            try {
                $image = DownloadFile::getImage($values['imageHeader']);
            }catch (Exception $e){
                //
            }
            if (isset($image))
            {
                $event->setImageHeader($image);
            }
        }
        if (isset($values['flag']))
        {
            $flag = $this->flagIconService->getFlagByOrigName($values['flag']['name']);
            if (empty($flag)){
                $flag = $this->flagIconService->createOrUpdate($values['flag']);
            }
            $event->setFlagIcon($flag);
        }
        $this->save($event);

        return $event;
    }

    /**
     * @param $event
     * @param $prizeDistributions
     */
    public function setPrizeDistributions($event, $prizeDistributions)
    {
        if (isset($prizeDistributions))
        {
            foreach ($prizeDistributions as $prizeDistribution)
            {
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
        if (isset($groupPlay)){
            foreach ($groupPlay as $groupName => $teams)
            {
                foreach ($teams as $teamName => $teamFields)
                {
                    $team = $this->teamService->getByName($teamName);
                    if (isset($team))
                    {
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
        if (isset($mapPool))
        {
            foreach ($mapPool as $mapName){
                $map = $this->mapService->getByName($mapName);

                if (isset($map)){
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
        if (isset($relatedEvents))
        {
            foreach ($relatedEvents as $relatedEvent)
            {
                $relatedEventEntity = $this->createBaseEvent($relatedEvent);

                if (isset($relatedEventEntity))
                {
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

    public function createEventTeamsAttending($event, $teamsAttending)
    {
        foreach ($teamsAttending as $teamAttending)
        {
            $team = $this->teamService->getByName($teamAttending['teamName']);

            if (empty($team))
            {
                continue;
            }
            $this->eventTeamAttendingService->create($event, $team, $teamAttending['number']);
        }
    }

    public function getByUrl($url)
    {
        return $this->repository->getByUrl($url);
    }

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

    public function setEventImage($event, $image)
    {
        if (!empty($image))
        {
            $image = DownloadFile::getImage($image);
            if (isset($image))
            {
                $event->setImage($image);
            }
        }
        return $this->save($event);
    }

    public function setImageLogo($event, $values)
    {
        if (!empty($values['image']))
        {
            $image = DownloadFile::getImage($values['image']);
            if (isset($image))
            {
                $event->setImage($image);
            }
        } else {
            /** @var Event $prevent */
            $prevent = $this->getByName($values['name']);
            if (isset($prevent))
            {
                $event->setImage($prevent->getImage());
            }
        }
        return $event;
    }

    public function createBrackets($event, $brackets)
    {
        $brackets = $brackets['rounds'] ?? [];

        foreach ($brackets as $type => $bracket)
        {
            foreach ($bracket as $name => $matches){

                foreach ($matches as $match) {
                    if (isset($match['team1']['name']))
                    {
                        $team1 = $this->teamService->getByName($match['team1']['name']);
                    }
                    if (isset($match['team2']['name']))
                    {
                        $team2 = $this->teamService->getByName($match['team2']['name']);
                    }
                    if (isset($match['matchUrl'])){
                        $matchEntity = $this->matchService->findByUrl($match['matchUrl']);

                        if (empty($matchEntity)) {
                            $this->dispatch(new Match(['url' => $match['matchUrl']]));
                        }
                    }

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
<?php
/**
 * Product: champs.
 * Date: 24/06/2020
 */

namespace App\Service;


use DateTime;
use App\Entity\Event;
use App\Repository\EventRepository;
use Doctrine\ORM\EntityManagerInterface;
use Exception;

class EventService extends EntityService
{
    protected $entity = Event::class;

    /** @var EventRepository */
    protected $repository;

    protected $imageService;

    protected $flagIconService;

    protected $eventPrizeDistributionService;

    protected $eventGroupPlayService;

    protected $teamService;

    protected $eventMapPoolService;

    protected $relatedEventService;

    /** @var MapService */
    protected $mapService;

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
    }

    /**
     * @param $values
     * @param DateTime|null $parseDate
     * @return Event
     * @throws \Doctrine\ORM\ORMException
     * @throws \Doctrine\ORM\OptimisticLockException
     */
    public function create($values, DateTime $parseDate = null): Event
    {
        $event = $this->createBaseEvent($values, $parseDate);

        $prizeDistributions = $values['prizeDistributions'] ?? null;
        $this->setPrizeDistributions($event, $prizeDistributions);

        $groupPlay = $values['groupPLay'] ?? null;
        $this->setGroupPLay($event, $groupPlay);

        $mapPool = $values['mapsPool'] ?? null;
        $this->setMapPool($event, $mapPool);

        $relatedEvents = $values['relatedEvents'] ?? null;
        $this->setRelatedEvents($event, $relatedEvents);

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

    public function eventsDecorator(array $events)
    {
        $eventItems = [];

        foreach ($events as $event)
        {
            /** @var Event $event */
            $eventItems[] = [
                "name" => $event->getName(),
                "startedAt" => $event->getStartedAt(),
                "endedAt" => $event->getEndedAt(),
                "image" => $event->getImage(),
                'imageHeader' => $event->getImageHeader()
            ];
        }
        return $eventItems;
    }

    public function futureEventsDecorator($events)
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

            $headerImage = $this->imageService->getPhotoPath();

            $futureEventItems[date("F Y", $event->getStartedAt()->getTimestamp())]["items"][] = [
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

    public function createBaseEvent($values, $parseDate = null)
    {
        $startedAt = $values['started_at']->format("Y-m-d");

        /** @var Event $event */
        $event = $this->getByNameAndStartDate($values['name'] ?? '', $startedAt);
        if (empty($event))
        {
            $event = new $this->entity;
        }
        if (empty($values['ended_at'])){
            $values['ended_at'] =  $values['started_at'];
        }
        if (is_string($values['ended_at'])){
            $values['ended_at'] = new \DateTime($values['ended_at']);
        }

        /** @var Event $event */
        $event->setPrize($values['prize']);
        $event->setCommandCount($values['teams']);
        $event->setLocation($values['location']);
        $event->setName($values['name']);
        $event->setStartedAt(new \DateTime($startedAt));
        $event->setEndedAt($values['ended_at']);
        $event->setCreatedAt($parseDate);
        $event->setUrl($values['url'] ?? null);

        if (!empty($values['image']))
        {
            $image = DownloadFile::getImage($values['image']);
            if (isset($image))
            {
                $event->setImage($image);
            }
        }
        if (!empty($values['imageHeader']))
        {
            try {
                $image = DownloadFile::getImage($values['imageHeader']);
            }catch (Exception $e){
                LoggerService::error("event download header image error: $e");
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

        $this->entityManager->persist($event);
        $this->entityManager->flush();

        return $event;
    }

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

    public function getLastWeekEvents()
    {
        return $this->repository->getLastWeekEvents();
    }

    public function getFeatureEvents()
    {
        return $this->repository->getFeatureEvents();
    }
}
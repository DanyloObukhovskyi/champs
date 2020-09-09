<?php


namespace App\Service;


use App\Entity\EventPrizeDistribution;
use Doctrine\ORM\EntityManagerInterface;

class EventPrizeDistributionService extends EntityService
{
    protected $entity = EventPrizeDistribution::class;

    protected $repository;

    protected $teamService;

    public function __construct(EntityManagerInterface $entityManager)
    {
        parent::__construct($entityManager);

        $this->teamService = new TeamService($entityManager);
    }

    public function create($values, $event)
    {
        if (empty($values['teamName']))
        {
            $team = null;
        } else {
            $team = $this->teamService->getByName($values['teamName']);
        }

        /** @var EventPrizeDistribution $eventPrizeDistribution */
        $eventPrizeDistribution = $this->repository->findByTeamAndEvent($values['position'], $event, $team);

        if (empty($eventPrizeDistribution))
        {
            $eventPrizeDistribution = new $this->entity;
        }
        $eventPrizeDistribution->setEvent($event);
        $eventPrizeDistribution->setTeam($team);
        $eventPrizeDistribution->setPosition($values['position'] ?? null);
        $eventPrizeDistribution->setPrize($values['prize'] ?? null);

        $this->entityManager->persist($eventPrizeDistribution);
        $this->entityManager->flush();

        return $eventPrizeDistribution;

    }
}
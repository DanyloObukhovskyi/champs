<?php


namespace App\Service\Event;


use App\Entity\EventPrizeDistribution;
use App\Service\EntityService;
use App\Service\TeamService;
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

        return $this->save($eventPrizeDistribution);
    }

    public function prizeDecorator($prizeDistributions)
    {
        $prizes = [];

        /** @var EventPrizeDistribution $prizeDistribution */
        foreach ($prizeDistributions as $prizeDistribution)
        {
            $prize = [];
            $prize['position'] = $prizeDistribution->getPosition();
            $prize['prize'] = $prizeDistribution->getPrize();

            $team = $prizeDistribution->getTeam();
            if (!empty($team)){
                $prize['team'] = $this->teamService->teamDecorator($team);
            }

            $prizes[] = $prize;
        }
        return $prizes;
    }
}
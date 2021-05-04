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

    /** @var TeamService */
    protected $teamService;

    /**
     * EventPrizeDistributionService constructor.
     * @param EntityManagerInterface $entityManager
     */
    public function __construct(EntityManagerInterface $entityManager)
    {
        parent::__construct($entityManager);

        $this->teamService = new TeamService($entityManager);
    }

    /**
     * @param $values
     * @param $event
     * @return mixed
     * @throws \Doctrine\ORM\NonUniqueResultException
     * @throws \Doctrine\ORM\ORMException
     */
    public function create($values, $event)
    {
        if (empty($values['teamName'])) {
            $team = null;
        } else {
            $team = $this->teamService->getByName($values['teamName']);
        }

        /** @var EventPrizeDistribution $eventPrizeDistribution */
        $eventPrizeDistribution = $this->repository->findByTeamAndEvent($values['position'], $event, $team);

        if (empty($eventPrizeDistribution)) {
            $eventPrizeDistribution = new $this->entity;
        }
        $eventPrizeDistribution->setEvent($event);
        $eventPrizeDistribution->setTeam($team);
        $eventPrizeDistribution->setPosition($values['position'] ?? null);
        $eventPrizeDistribution->setPrize(!empty($values) ?  $values['prize'] : null);

        return $this->save($eventPrizeDistribution);
    }

    /**
     * @param $prizeDistributions
     * @return array
     */
    public function prizeDecorator($prizeDistributions)
    {
        $prizes = [];

        /** @var EventPrizeDistribution $prizeDistribution */
        foreach ($prizeDistributions as $prizeDistribution) {
            $prize = [];
            $prize['position'] = $prizeDistribution->getPosition();
            $prize['prize'] = $prizeDistribution->getPrize();
            $prize['team'] = !empty($prizeDistribution->getTeam()) ?  $prizeDistribution->getTeam()->jsonSerialize(): null;

            $prizes[$prize['position']] = $prize;
        }
        return $prizes;
    }
}
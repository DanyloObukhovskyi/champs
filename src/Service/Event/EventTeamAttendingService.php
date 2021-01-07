<?php


namespace App\Service\Event;


use App\Entity\Event;
use App\Entity\EventTeamAttending;
use App\Entity\Team;
use App\Repository\EventTeamAttendingRepository;
use App\Service\EntityService;
use App\Service\ImageService;
use Doctrine\ORM\EntityManagerInterface;

class EventTeamAttendingService extends EntityService
{
    protected $entity = EventTeamAttending::class;

    /** @var EventTeamAttendingRepository */
    protected $repository;

    /** @var ImageService */
    protected $imageService;

    public function __construct(EntityManagerInterface $entityManager)
    {
        parent::__construct($entityManager);

        $this->imageService = new ImageService($entityManager);
    }

    public function create(Event $event, Team $team, $number)
    {
        $eventTeamAttending = $this->repository->findByEventAndTeam($event, $team);
        if (empty($eventTeamAttending)) {
            /** @var EventTeamAttending $eventTeamAttending */
            $eventTeamAttending = new $this->entity;
            $eventTeamAttending->setTeam($team);
            $eventTeamAttending->setEvent($event);
        }
        $eventTeamAttending->setNumber($number);

        return $this->save($eventTeamAttending);
    }

    public function teamsDecorator($teamsAttending)
    {
        $teams = [];

        /** @var EventTeamAttending $teamAttending */
        foreach ($teamsAttending as $teamAttending) {
            /** @var Team $team */
            $team = $teamAttending->getTeam();

            $this->imageService->setImage($team->getLogo());

            $teams[] = [
                'name' => $team->getName(),
                'logo' => $this->imageService->getImagePath(),
                'number' => $teamAttending->getNumber()
            ];
        }
        return $teams;
    }
}
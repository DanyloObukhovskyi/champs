<?php
/**
 * Product: champs.
 * Date: 24/06/2020
 */

namespace App\Service;


use App\Entity\Player;
use App\Entity\Team;
use App\Repository\TeamRepository;
use Carbon\Carbon;
use Doctrine\ORM\EntityManagerInterface;
use Exception;

class TeamService extends EntityService
{
    protected $entity = Team::class;

    /** @var TeamRepository */
    protected $repository;

    /** @var FlagIconService */
    protected $flagIconService;

    /** @var PersonService */
    protected $personService;

    /** @var PlayerService */
    protected $playerService;

    /** @var ImageService */
    protected $imageService;

    /**
     * TeamService constructor.
     * @param EntityManagerInterface $entityManager
     */
    public function __construct(EntityManagerInterface $entityManager)
    {
        parent::__construct($entityManager);

        $this->flagIconService = new FlagIconService($entityManager);
        $this->personService = new PersonService($entityManager);
        $this->playerService = new PlayerService($entityManager);
        $this->imageService = new ImageService($entityManager);
    }

    /**
     * @param $values
     * @return Team|null
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function create($values)
    {
        ini_set('max_execution_time', 0);

        if ($values){
            $team = $this->repository->getByName($values['name']);
            if (empty($team))
            {
                $team = new $this->entity;
            }

            $team->setName($values['name'])
                ->setRegion($values['region']);

            $this->setTeamLogo($values['logo'], $team);

            if (isset($values['regionIconName']))
            {
                $flagIcon = $this->flagIconService->getFlagByOrigName($values['regionIconName']);

                if (isset($flagIcon)){
                    $team->setFlagIcon($flagIcon);
                }
            }
            $team->setParseDate(new \DateTime());
            $this->save($team);

            return $team;
        }
        return null;
    }

    /**
     * @param $name
     * @return Team|null
     * @throws \Doctrine\ORM\NonUniqueResultException
     * @throws \Doctrine\ORM\ORMException
     */
    public function getByName($name)
    {
        $team = $this->repository->getByName($name);
        if (isset($team))
        {
            $this->entityManager->persist($team);
            return $team;
        }
        return null;
    }

    /**
     * @param $photo
     * @param Team $team
     * @throws Exception
     */
    public function setTeamLogo($photo, Team $team)
    {
        if (!empty($photo))
        {
            $parseDate = new Carbon($team->getParseLogoDate());
            if ($parseDate->addWeek(1) >= Carbon::now() or $team->getLogo() === null){
                try {
                    $imagePhoto = DownloadFile::getImage($photo);
                    if (!empty($imagePhoto))
                    {
                        $team->setLogo($imagePhoto);
                        $team->setParseLogoDate(Carbon::now());
                    }
                }catch (\Exception $e){
                    LoggerService::add("Download image error: $e");
                }
            }
        }
    }

    /**
     * @param $teams
     * @return array|null
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function createTeams($teams)
    {
        $result = [];
        foreach ($teams as $team)
        {
            $teamEntity = $this->create($team);

            if (!isset($teamEntity))
            {
                return [];
            }
            foreach ($team['players'] as $playerValues)
            {
                $personEntity = $this->personService->create($playerValues);

                if (!isset($personEntity))
                {
                    continue;
                }
                /** @var Player|null $playerEntity */
                $playerEntity = $this->playerService->create($personEntity, $teamEntity);
                if (!isset($playerEntity))
                {
                    continue;
                }
            }

            $result[] = $teamEntity;
        }

        return !empty($result) ? $result : null;
    }

    /**
     * @param Team $team
     * @return array
     */
    public function teamDecorator(Team $team): array
    {
        $this->imageService->setImage($team->getLogo());

        $playersEntities = $this->playerService->getByTeam($team->getId());

        $players = [];
        /** @var Player $playerEntity */
        foreach ($playersEntities as $playerEntity){
            $players[] = $playerEntity->getPerson();
        }
        return [
            'id'      => $team->getId(),
            'name'    => $team->getName(),
            'logo'    => $this->imageService->getImagePath(),
            'players' => $players
        ];
    }

    /**
     * @param array $teams
     * @return array
     */
    public function teamsDecorator($teams): array
    {
        $teamsDecorate = [];

        foreach ($teams as $team){
            $teamsDecorate[] = $this->teamDecorator($team);
        }

        return $teamsDecorate;
    }

    /**
     * @param $name
     * @return mixed
     */
    public function findByName($name)
    {
        return $this->repository->findByName($name);
    }

    /**
     * @param $id
     * @return Team|null
     */
    public function find($id)
    {
        if (isset($id)){
            $team = $this->repository->find($id);
        } else {
            $team = null;
        }
        return $team;
    }
}
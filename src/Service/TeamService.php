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

    protected $personService;

    protected $playerService;

    public function __construct(EntityManagerInterface $entityManager)
    {
        parent::__construct($entityManager);

        $this->flagIconService = new FlagIconService($entityManager);
        $this->personService = new PersonService($entityManager);
        $this->playerService = new PlayerService($entityManager);
    }

    public function create($values)
    {
        ini_set('max_execution_time', 0);

        $team = $this->repository->getByName($values['name']);
        if (empty($team))
        {
            $team = new $this->entity;
        }
        $team->setName($values['name'])->setRegion($values['region']);

        $this->setTeamLogo($values['logo'], $team);

        if (isset($values['regionIconName']))
        {
            $flagIcon = $this->flagIconService->getFlagByOrigName($values['regionIconName']);

            if (isset($flagIcon)){
                $team->setFlagIcon($flagIcon);
            }
        }

        $this->entityManager->persist($team);
        $this->entityManager->flush();

        return $team;
    }

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

    public function createTeams($teams)
    {
        $result = [];
        foreach ($teams as $team)
        {
            LoggerService::add("parserMatchesCommand 283");
            $teamEntity = $this->create($team);

            if (!isset($teamEntity))
            {
                LoggerService::error("team entity {$team['name']} didnt created");
                return [];
            }
            LoggerService::add("parserMatchesCommand 290");
            foreach ($team['players'] as $playerValues)
            {
                LoggerService::add("parserMatchesCommand 293");
                $personEntity = $this->personService->create($playerValues);
                LoggerService::add("parserMatchesCommand 295");
                if (!isset($personEntity))
                {
                    LoggerService::error("person entity {$playerValues['nick']} didn't created");
                    continue;
                }
                LoggerService::add("parserMatchesCommand 299");
                /** @var Player|null $playerEntity */
                $playerEntity = $this->playerService->create($personEntity, $teamEntity);
                if (!isset($playerEntity))
                {
                    LoggerService::error("player entity {$playerValues['nick']} didn't created");
                    continue;
                }
            }

            $result[] = $teamEntity;
        }

        return !empty($result) ? $result : null;
    }
}
<?php
/**
 * Product: champs.
 * Date: 24/06/2020
 */

namespace App\Service;


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

    public function __construct(EntityManagerInterface $entityManager)
    {
        parent::__construct($entityManager);

        $this->flagIconService = new FlagIconService($entityManager);
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
}
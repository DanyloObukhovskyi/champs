<?php

namespace App\Command;

use App\Entity\Person;
use App\Entity\RatingPerson;
use App\Entity\RatingTeam;
use App\Service\PersonService;
use App\Service\PlayerService;
use App\Service\RatingPersonService;
use App\Service\RatingTeamService;
use App\Service\TeamService;
use App\Service\WeaponRatingService;
use Carbon\Carbon;
use DateTime;
use App\Service\HLTVService;
use App\Service\LoggerService;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

/**
 * Class ParserRatingsCommand
 * @package App\Command
 */
class ParserRatingsCommand extends Command
{
    protected static $defaultName = 'parser:ratings';

    /** @var DateTime */
    protected $parseDate;

    /** @var PersonService */
    protected $personService;

    /** @var RatingPersonService */
    protected $ratingPersonService;

    /** @var RatingTeamService */
    protected $ratingTeamService;

    /** @var TeamService */
    protected $teamService;

    /** @var PlayerService */
    protected $playerService;

    /** @var WeaponRatingService */
    protected $weaponRatingService;

    protected $entityManager;

    protected function configure()
    {
        $this
            ->setDescription('Add a short description for your command')
            ->addArgument('arg1', InputArgument::OPTIONAL, 'Argument description')
            ->addOption('option1', null, InputOption::VALUE_NONE, 'Option description');
    }

    /**
     * @param InputInterface $input
     * @param OutputInterface $output
     * @return int
     * @throws \DiDom\Exceptions\InvalidSelectorException
     */
    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $this->parseDate = Carbon::now();
        $this->entityManager = $this->getEntityManager();

        new LoggerService(new SymfonyStyle($input, $output));

        $this->personService = new PersonService($this->entityManager);
        $this->ratingPersonService = new RatingPersonService($this->entityManager);
        $this->teamService = new TeamService($this->entityManager);
        $this->playerService = new PlayerService($this->entityManager);
        $this->ratingTeamService = new RatingTeamService($this->entityManager);
        $this->weaponRatingService = new WeaponRatingService($this->entityManager);

        $this->updatePlayersRating();
        $this->updateTeamsRating();
        $this->updateWeekPlayer();
        $this->updateWeaponsRating();

        return 0;
    }

    /**
     * @throws \DiDom\Exceptions\InvalidSelectorException
     */
    protected function updatePlayersRating(): void
    {
        $playerRatings = HLTVService::getPlayersRating();

        foreach ($playerRatings as $playerRating) {

            $personParse = HLTVService::getPerson($playerRating);
            if (isset($personParse)) {
                /** @var Person $person */

                $team = null;
                if (isset($personParse['currentTeam'])) {
                    $team = HLTVService::getTeam($personParse['currentTeam']);

                    if ($team) {
                        $team = $this->createTeam($team);
                    }
                }
                $person = $this->personService->create($personParse);
                if (isset($person) and isset($team)) {
                    $this->playerService->create($person, $team);
                }
                $ratingPerson = $this->entityManager->getRepository(RatingPerson::class)->findByPersonId($person->getId());

                if (isset($person) and isset($team)) {
                    $this->playerService->create($person, $team);
                }
                if (empty($ratingPerson)) {
                    $this->ratingPersonService->create(
                        $person,
                        $playerRating['rating'],
                        $this->parseDate
                    );
                } else {
                    $this->ratingPersonService->update(
                        $ratingPerson,
                        $playerRating['rating'],
                        $this->parseDate
                    );
                }
            }
        }
    }

    /**
     * @throws \DiDom\Exceptions\InvalidSelectorException
     */
    protected function updateTeamsRating(): void
    {
        $teamsRatings = HLTVService::getTeamsRating();

        foreach ($teamsRatings as $teamsRating) {
            $team = HLTVService::getTeamRatingInfo($teamsRating);
            if (empty($team)) {
                LoggerService::info("team empty {$team['name']}");
                continue;
            }
            $teamEntity = $this->createTeam($team);
            if (empty($teamEntity)) {
                LoggerService::info("teamEntity empty {$team['name']}");
                continue;
            }
            $ratingTeam = $this->entityManager->getRepository(RatingTeam::class)->findByTeamId($teamEntity->getId());

            if (empty($ratingTeam)) {
                $this->ratingTeamService->create(
                    $teamEntity,
                    $this->parseDate,
                    $teamsRating['rating']
                );
            } else {
                $this->ratingTeamService->update(
                    $ratingTeam,
                    $this->parseDate,
                    $teamsRating['rating']
                );
            }
        }
    }

    public function createTeam($team)
    {
        $teamEntity = $this->teamService->create($team);

        if (empty($teamEntity)) {
            LoggerService::error("team entity {$team['name']} didnt created");
            return null;
        }
        foreach ($team['players'] as $playerValues) {
            $personEntity = $this->personService->create($playerValues);

            if (!isset($personEntity)) {
                LoggerService::error("person entity {$playerValues['nick']} didn't created");
                continue;
            }

            /** @var Player|null $playerEntity */
            $playerEntity = $this->playerService->create($personEntity, $teamEntity);
            if (!isset($playerEntity)) {
                LoggerService::error("player entity {$playerValues['nick']} didn't created");
                continue;
            }
        }
        return $teamEntity;
    }

    /**
     * @throws \DiDom\Exceptions\InvalidSelectorException
     */
    protected function updateWeekPlayer(): void
    {
        $weekPlayer = HLTVService::getWeekPlayer();
        $person = $this->entityManager->getRepository(Person::class)->getByNick($weekPlayer['nick']);

        if (isset($person)) {
            $this->personService->updateWeekPlayer($person, $weekPlayer['data']);
        }
    }

    /**
     * @return mixed
     */
    protected function getEntityManager()
    {
        return $this->getApplication()
            ->getKernel()
            ->getContainer()
            ->get('doctrine')
            ->getManager();
    }

    /**
     * @throws \DiDom\Exceptions\InvalidSelectorException
     */
    protected function updateWeaponsRating(): void
    {
        $weapons = HLTVService::getRatingWeapons();

        foreach ($weapons as $weapon) {
            $this->weaponRatingService->update($weapon);
        }
    }
}

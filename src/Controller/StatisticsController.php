<?php

namespace App\Controller;

use Doctrine\ORM\EntityManagerInterface;
use App\Entity\{
    Person,
    RatingTeam,
    RatingPerson,
    WeaponRating
};
use App\Service\{PersonService, RatingTeamService, RatingPersonService, WeaponRatingService};
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class StatisticsController extends AbstractController
{
    /**
     * @var EntityManagerInterface
     */
    public $entityManager;

    /**
     * @var RatingTeamService
     */
    public $ratingPersonService;

    /**
     * @var RatingTeamService
     */
    public $ratingTeamService;

    /**
     * @var WeaponRatingService
     */
    public $weaponService;

    /**
     * @var PersonService
     */
    public $personService;

    /**
     * StatisticsController constructor.
     * @param EntityManagerInterface $entityManager
     */
    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;

        $this->ratingPersonService = new RatingPersonService($entityManager);
        $this->ratingTeamService = new RatingTeamService($entityManager);

        $this->weaponService = new WeaponRatingService($entityManager);
        $this->personService = new PersonService($entityManager);
    }

    /**
      * @Route("/ru/statistics", name="statistics_index")
      */
    public function index()
    {
        // RATING PLAYERS
        $ratingPlayers = $this->entityManager->getRepository(RatingPerson::class)->getRatingPersons();
        $ratingPlayers = $this->ratingPersonService->retingPlayersDecorator($ratingPlayers);

        // RATING COMMANDS
        $ratingCommands = $this->entityManager->getRepository(RatingTeam::class)->getRatingTeams();
        $ratingCommands = $this->ratingTeamService->retingTeamsDecorator($ratingCommands);

        // BEST PLAYER WEEK
        /** @var Person $playerWeek */
        $playerWeek = $this->entityManager->getRepository(Person::class)->getWeekPlayer();

        // WEAPONS STATISTICS
        $weaponModel = $this->entityManager->getRepository(WeaponRating::class)->findAll();
        $weapons = $this->weaponService->ratingWeaponsDecorator($weaponModel);

        $allFlags = $this->entityManager->getRepository(Person::class)->getAllFlags();

        return $this->render('templates/statistics.html.twig', [
          'router' => 'statistics',
          'ratingPlayers' => $ratingPlayers,
          'ratingCommands' => $ratingCommands,
          'playerWeek' => $playerWeek,
          'weapons' => $weapons,
          'all_flags' => $allFlags
        ]);
    }

    /**
     * @Route("/ru/main/rating/players")
     */
    public function getMainTopPlayers()
    {
        // RATING PLAYERS
        $ratingPlayers = $this->entityManager->getRepository(RatingPerson::class)->getRatingPersons();
        $ratingPlayers = $this->ratingPersonService->retingPlayersDecorator($ratingPlayers);

        return $this->json($ratingPlayers);
    }

    /**
     * @Route("/ru/week/player")
     */
    public function getWeekPlayer()
    {
        /** @var Person $playerWeek */
        $playerWeek = $this->entityManager
            ->getRepository(Person::class)
            ->getWeekPlayer();

        $playerWeek = $this->personService->personDecorate($playerWeek);

        return $this->json($playerWeek);
    }

    /**
     * @Route("/ru/main/rating/teams")
     */
    public function getMainTopTeams()
    {
        $ratingCommands = $this->entityManager
            ->getRepository(RatingTeam::class)
            ->getRatingTeams();
        $ratingCommands = $this->ratingTeamService->retingTeamsDecorator($ratingCommands);

        return $this->json($ratingCommands);
    }
}

<?php

namespace App\Controller;

use App\Entity\{
    Person,
    RatingTeam,
    RatingPerson,
    WeaponRating
};
use App\Service\{
    ImageService,
    RatingTeamService,
    RatingPersonService,
    WeaponRatingService
};
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class StatisticsController extends AbstractController
{
    /**
      * @Route("/ru/statistics", name="statistics_index")
      */
    public function index()
    {
        $entityManager = $this->getDoctrine()->getManager();
        $ratingPlayersService = new RatingPersonService($entityManager);
        $ratingTeamService = new RatingTeamService($entityManager);
        $weaponService = new WeaponRatingService($entityManager);
        $imageService = new ImageService();

        // RATING PLAYERS
        $ratingPlayers = $entityManager->getRepository(RatingPerson::class)->getRatingPersons();
        $ratingPlayers = $ratingPlayersService->retingPlayersDecorator($ratingPlayers);

        // RATING COMMANDS
        $ratingCommands = $entityManager->getRepository(RatingTeam::class)->getRatingTeams();
        $ratingCommands = $ratingTeamService->retingTeamsDecorator($ratingCommands);

        // BEST PLAYER WEEK
        /** @var Person $playerWeek */
        $playerWeek = $entityManager->getRepository(Person::class)->getWeekPlayer();

        // WEAPONS STATISTICS
        $weaponModel = $entityManager->getRepository(WeaponRating::class)->findAll();
        $weapons = $weaponService->ratingWeaponsDecorator($weaponModel);

        $allFlags = $entityManager->getRepository(Person::class)->getAllFlags();

        return $this->render('templates/statistics.html.twig', [
          'router' => 'statistics',
          'ratingPlayers' => $ratingPlayers,
          'ratingCommands' => $ratingCommands,
          'playerWeek' => $playerWeek,
          'weapons' => $weapons,
          'all_flags' => $allFlags
        ]);
    }
}

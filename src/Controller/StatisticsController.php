<?php

namespace App\Controller;

use Doctrine\ORM\EntityManagerInterface;
use App\Entity\{
    Person,
    RatingTeam,
    RatingPerson,
    WeaponRating
};
use App\Service\{PersonService, RatingTeamService, RatingPersonService, Seo\SeoService, WeaponRatingService};
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/{_locale}", requirements={"locale": "ru"})
 */
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

        $this->seoService = new SeoService($entityManager);
    }

    /**
     * @Route("/statistics", name="statistics_index")
     */
    public function index()
    {
        $seoSettings = $this->seoService->getSeo('statistics_index');

        return $this->render('templates/statistics.html.twig', [
            'title' => $seoSettings['title'],
            'description' => $seoSettings['description'],
            'keywords' => $seoSettings['keywords'],
            'meta_tags' => $seoSettings['meta'],
            'router' => 'statistics',]);
    }

    /**
     * @Route("/main/rating/players")
     */
    public function getMainTopPlayers()
    {
        // RATING PLAYERS
        $ratingPlayers = $this->entityManager->getRepository(RatingPerson::class)->getRatingPersons();
        $ratingPlayers = $this->ratingPersonService->retingPlayersDecorator($ratingPlayers);

        return $this->json($ratingPlayers);
    }

    /**
     * @Route("/week/player")
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
     * @Route("/main/rating/teams")
     */
    public function getMainTopTeams()
    {
        $ratingCommands = $this->entityManager
            ->getRepository(RatingTeam::class)
            ->getRatingTeams();
        $ratingCommands = $this->ratingTeamService->retingTeamsDecorator($ratingCommands);

        return $this->json($ratingCommands);
    }

    /**
     * @Route("/statistics/weapons")
     */

    public function getWeapons()
    {
        $weaponsEntities = $this->entityManager
            ->getRepository(WeaponRating::class)
            ->findAll();

        $weapons = $this->weaponService
            ->ratingWeaponsDecorator($weaponsEntities);

        return $this->json($weapons);
    }
}

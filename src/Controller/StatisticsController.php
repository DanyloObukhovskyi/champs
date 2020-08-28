<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class StatisticsController extends AbstractController
{
    /**
      * @Route("/ru/statistics", name="statistics_index")
      */
    public function index()
    {
        // RATING PLAYERS
        $ratingPlayers = [
          [
            'nickname' => 's1mple',
            'fullname' => 'Александр Костылев',
            'image' => '/images/temp/Player1.png',
            'team' => [
              'title' => 'Natus Vincere',
              'image' => '/images/temp/Rectangle5.png'
            ],
            'event' => [
              'title' => 'Home Sweet Home Cup',
              'date' => 1596104684,
            ]
          ],
          [
            'nickname' => 's1mple',
            'fullname' => 'Александр Костылев',
            'image' => '/images/temp/Player1.png',
            'team' => [
              'title' => 'Natus Vincere',
              'image' => '/images/temp/Rectangle5.png'
            ],
            'event' => [
              'title' => 'Home Sweet Home Cup',
              'date' => 1596104684,
            ]
          ]
        ];

        // RATING COMMANDS
        $ratingCommands = [
          [
            'title' => 'Natus Vincere',
            'image' => '/images/temp/Rectangle5.png',
            'teams' => ['/images/temp/Rectangle2.png', '/images/temp/Rectangle4.png'],
          ],
          [
            'title' => 'Natus Vincere',
            'image' => '/images/temp/Rectangle5.png',
            'teams' => ['/images/temp/Rectangle2.png', '/images/temp/Rectangle4.png'],
          ]
        ];

        // BEST PLAYER WEEK
        $playerWeek = [
          [
            'nickname' => 's1mple',
            'fullname' => 'Александр Костылев',
            'image' => '/images/temp/Player1Big.png',
            'rate' => '0.59',
            'skill' => 'Лучшие убийства с AWP',
            'rating' => '1.16',
            'killRound' => '0.75',
            'percentLife' => '0.67',
            'effect' => '70.2%',
            'damage' => '85.0',
          ]
        ];

        // WEAPONS STATISTICS
        $weapons = [
          'awp' => 9,
          'm4a1' => 20,
          'ak47' => 30,
          'cz75a' => 8,
          'deagles' => 12,
          'famas' => 3,
          'p250' => 7,
          'ump45' => 14
        ];

        return $this->render('templates/statistics.html.twig', [
          'router' => 'statistics',
          'ratingPlayers' => $ratingPlayers,
          'ratingCommands' => $ratingCommands,
          'playerWeek' => $playerWeek,
          'weapons' => $weapons,
        ]);
    }
}

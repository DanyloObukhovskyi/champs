<?php

namespace App\Controller;

use App\Entity\Charactristics;
use App\Entity\Review;
use App\Entity\Teachers;
use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class RecomendationsController extends AbstractController
{
    /**
     * @Route("/recomendations", name="recomendations")
     */
    public function index()
    {
        return $this->render('recomendations/index.html.twig', [
            'controller_name' => 'RecomendationsController',
        ]);
    }

    /**
     * Characteristic /ru/recomendations/*
     *
     * @Route("/ru/recomendations/for-user/{id}", name="get_user_characteristic_info")
     */
    public function getUserCharacteristic($id)
    {
        $entityManager = $this->getDoctrine()->getManager();

        /** @var Charactristics $characteristics */
        $characteristics = $this->getDoctrine()
            ->getRepository(Charactristics::class)
            ->findBy([
                'user' => $id,
            ], [
                'id' => 'DESC',
            ], 1, 0);

        $filter = [];
        foreach ($characteristics as $characteristic) {
            /** @var Charactristics $characteristic */
            $filter['game'] = $characteristic->getGame();
            $filter['role'] = $characteristic->getRole();
            $filter['skills'] = $characteristic->getSkills();
            $filter['goals'] = $characteristic->getGoals();
            $filter['cost'] = $characteristic->getCost();
            if ($filter['cost'] == 0) {
                $filter['cost'] = 10000;
            }
        }
        $features = [];

//        return $this->json($filter['skills']);
//     ["Тактика", "Раскидка", "Игра по роли", "AIM"]

        $features['aim'] = in_array("AIM", $filter['skills']);
        $features['tactics'] = in_array("Тактика", $filter['skills']);
        $features['scatter'] = in_array("Раскидка", $filter['skills']);
        $features['mentor'] = in_array("Игра по роли", $filter['skills']);
        $features['duel'] = false;

//        return $this->json($filter['skills']);
//        return $this->json($features);

        $reviews = $this->getDoctrine()
            ->getRepository(Review::class)
            ->findForRecommendations($features);

        $trainers = [];
        switch ($filter['game']) {
            case "Counter Strike: GO":
                $filter['game'] = 'cs';
                break;
            case "DOTA":
                $filter['game'] = 'dota';
                break;
            case "League of Legends":
                $filter['game'] = 'lol';
                break;
            default:
                $filter['game'] = 'game-not-found';
                break;
        }

        foreach ($reviews as $review) {
            /** @var Review $review */
            $teacher = $review->getTrainer();

            if ($teacher->getGame() == $filter['game']) {
                $trainers[] = $teacher;
            }
        }
        $response = [];

        foreach ($trainers as $user) {
            /** @var Teachers $trainer */
            $trainer = $entityManager->getRepository(Teachers::class)
                ->findOneBy([
                    /** @var User $user */
                    'userid' => $user->getId(),
                ]);
            if (($filter['cost'] == 0) || ($filter['cost'] >= $trainer->getCost()) && !in_array($user->getId(), array_column($response, 'id'))) {
                $response[] = [
                    'id' => $user->getId(),
                    'email' => $user->getEmail(),
                    'istrainer' => $user->getIsTrainer(),
                    'nickname' => $user->getNickname(),
                    'photo' => $user->getPhoto(),
                    'name' => $user->getName(),
                    'game' => $user->getGame(),
                    'rank' => $user->getRang(),
                    'family' => $user->getFamily(),
                    'discord' => $user->getDiscord(),
                    'purse' => $user->getPurse(),
                    'trainer' => $trainer,
                ];
            }
        }

        return $this->json($response);
    }
}

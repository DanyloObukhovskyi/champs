<?php

namespace App\Controller;

use App\Entity\PurseHistory;
use App\Entity\Review;
use App\Entity\Teachers;
use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class TrainerController extends AbstractController
{
    /**
      * @Route("/ru/trainer/timelist", name="trainer_index")
      */
    public function index()
    {
      if (!$this->getUser()->getistrainer()) {
        return $this->redirectToRoute('main');
      } else {
        return $this->render('templates/cabinet/trainer/timelist.html.twig',
          [
            'router' => 'cabinet',
            'styles' => [
              'cabinet/cabinet.css',
              'cabinet/trainer/timelist.css'
            ],
          ]
        );
      }
    }

    /**
      * @Route("/ru/trainer/timetable", name="timetable_index")
      */
    public function timetable()
    {
      if (!$this->getUser()->getistrainer()) {
        return $this->redirectToRoute('main');
      } else {
        return $this->render('templates/cabinet/trainer/timetable.html.twig',
          [
            'router' => 'cabinet',
            'styles' => [
              'cabinet/cabinet.css',
              'cabinet/trainer/timetable.css'
            ]
          ]
        );
      }
    }

    /**
      * @Route("/ru/trainer/purse", name="purse_index")
      */
    public function purse()
    {
        /** @var User $user */
        $user = $this->get('security.token_storage')->getToken()->getUser();


      if (!$this->getUser()->getistrainer()) {
        return $this->redirectToRoute('main');
      } else {
          $history = $this->getDoctrine()
              ->getRepository(PurseHistory::class)
              ->findBy([
                  'user' => $user->getId()
              ]);
          foreach ($history as $value)
          {
              /** @var PurseHistory $value */
              $value->setOperation($value->getWorkPay());
          }

        return $this->render('templates/cabinet/trainer/purse.html.twig',
          [
            'router' => 'cabinet',
            'styles' => [
              'cabinet/cabinet.css',
              'cabinet/trainer/purse.css'
            ],
            'nickname' => $user->getNickname(),
              'photo' => $user->getPhoto(),
              'lastmonth' => $this->getDoctrine()
                  ->getRepository(PurseHistory::class)
                  ->sumByLastMonth($user->getId()),
              'prelastmonth' => $this->getDoctrine()
                  ->getRepository(PurseHistory::class)
                  ->sumByPreLastMonth($user->getId()),
              'history' => $history

          ]
        );
      }
    }

    /**
      * @Route("/ru/trainer/settings", name="trainer_settings_index")
      */
    public function trainer_settings()
    {
      if (!$this->getUser()->getistrainer()) {
        return $this->redirectToRoute('main');
      } else {
        return $this->render('templates/cabinet/trainer/settings.html.twig',
          [
            'router' => 'cabinet',
            'styles' => [
              'cabinet/cabinet.css',
              'cabinet/trainer/settings.css'
            ],
          ]
        );
      }
    }


    /**
     * Trainer /ru/trainer/*
     *
     * @Route("/ru/trainer/info/{id}", name="get_trainer_info")
     */
    public function getTrainerInfo($id)
    {
        $user = $this->getDoctrine()
            ->getRepository(Teachers::class)
            ->find($id);

        if (!$user) {
            throw $this->createNotFoundException(
                'No trainer found for id '.$id
            );
        }

        return $this->json($user);
    }

    /**
     * @Route("/ru/trainer/set-info/{form}", name="set_trainer_info")
     */
    public function setUserInfo($form)
    {
        $newInfo = json_decode($form);
        $entityManager = $this->getDoctrine()->getManager();
        $user = $entityManager->getRepository(Teachers::class)->find($newInfo->id);

        if (!$user) {
            throw $this->createNotFoundException(
                'No trainer found for id ' . $newInfo->id
            );
        }

        $user->setVideoLink($newInfo->videolink);
        $user->setGame($newInfo->game);
        $user->setCost($newInfo->cost);
        $user->setAbout($newInfo->about);
        $entityManager->flush();

        return $this->json($user);
    }

    /**
     * @Route("/ru/trainers/slider/{game}", name="get_trainer_info_slider_games")
     */
    public function setTrainerSliderInfo($game)
    {
        if($game == 'all')
        {
            $game = ['cs', 'lol', 'dota'];
        }
        $entityManager = $this->getDoctrine()->getManager();
        $users = $entityManager->getRepository(User::class)->findBy([
            'istrainer' => 1,
            'game' => $game
        ]);

        if (!$users) {

                return $this->json([]);
        }
        $response = [];

        foreach ($users as $user)
        {
            $trainer = $entityManager->getRepository(Teachers::class)
                ->findOneBy([
                    'userid' => $user->getId(),
                ]);
            if(!$trainer)
            {
                $trainer = new Teachers();
                $trainer->setUser($user->getId());
                $trainer->setVideoLink("");
                $trainer->setCost(0);
                $trainer->setAbout("");
                $trainer->setShorttitle("");
                $trainer->setMethod("");

                $entityManager->persist($trainer);
                $entityManager->flush();
            }

            $user->setTrainer($trainer);

            $reviews = $this->getDoctrine()
                ->getRepository(Review::class)
                ->findRateByTrainerId($user->getId());

            $sum = 0;
            $count = 0;
            $keys = [
                '1' => 0,
                '2' => 0,
                '3' => 0,
                '4' => 0,
                '5' => 0,
            ];


            foreach ($reviews['entity'] as $review)
            {
//                return $this->json($review);
                /** @var Review $review */
                $sum += $review['rate'];
                $keys[$review['rate']]++;
                $count++;
            }

            $result = 0;
            if($sum > 0)
            {
                $result = round($sum / $count, 2);
            }

            $trainer->setCost($trainer->getCost());

            $response[] = [
                'id' => $user->getId(),
                'email' => $user->getEmail(),
                'istrainer' => $user->getIsTrainer(),
                'nickname' => $user->getNickname(),
                'photo' => $user->getPhoto(),
                'name' => $user->getName(),
                'game' => $user->getGame(),
                'rank' => $user->getRank(),
                'family' => $user->getFamily(),
                'discord' => $user->getDiscord(),
                'purse' => $user->getPurse(),
                'trainer' => $trainer,
                'ratingTotal' => $result,
                'rating' => $keys,
                'reviewCount' => $count,
                'reviews' => $reviews['entity']
            ];
        }

        return $this->json($response);
    }

}

<?php

namespace App\Controller;

use Doctrine\ORM\EntityManagerInterface;
use Symfony\Contracts\Translation\TranslatorInterface;
use Symfony\Component\PropertyAccess\PropertyAccess;
use Symfony\Component\Validator\Constraints as Assert;
use App\Entity\PurseHistory;
use App\Entity\Teachers;
use App\Entity\User;
use App\Service\UserService;
use App\Traits\EntityManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Validator\Validator\ValidatorInterface;

/**
 * @Route("/{_locale}", requirements={"locale": "ru"})
 */
class TrainerController extends AbstractController
{
    /**
     * @var UserService
     */
    public $userService;

    public $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
        $this->userService = new UserService($entityManager);
    }

    /**
     * @Route("/trainer/timelist", name="trainer_index")
     */
    public function index()
    {
        if (empty($this->getUser()) or !$this->getUser()->getistrainer()) {
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
     * @Route("/trainer/timetable", name="timetable_index")
     */
    public function timetable()
    {
        if (empty($this->getUser()) or !$this->getUser()->getistrainer()) {
            return $this->redirectToRoute('main');
        } else {
            /** @var Teachers $trainer */
            $trainer = $this->getDoctrine()->getRepository(Teachers::class)
                ->findOneBy(['userid' => $this->getUser()->getId()]);

            return $this->render('templates/cabinet/trainer/timetable.html.twig',
                [
                    'router' => 'cabinet',
                    'trainer' => $trainer,
                    'styles' => [
                        'cabinet/cabinet.css',
                        'cabinet/trainer/timetable.css'
                    ]
                ]
            );
        }
    }

    /**
     * @Route("/trainer/purse", name="purse_index")
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
            foreach ($history as $value) {
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
     * @Route("/trainer/settings", name="trainer_settings_index")
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
                        'cabinet/trainer/settings.css',
                        'multiselect.css'
                    ],
                ]
            );
        }
    }


    /**
     * Trainer /ru/trainer/*
     *
     * @Route("/trainer/info/{id}", name="get_trainer_info")
     */
    public function getTrainerInfo($id)
    {
        $user = $this->getDoctrine()
            ->getRepository(Teachers::class)
            ->find($id);

        if (!$user) {
            throw $this->createNotFoundException(
                'No trainer found for id ' . $id
            );
        }

        return $this->json($user);
    }

    /**
     * @Route("/trainer/set-info/{form}", name="set_trainer_info")
     */
    public function setUserInfo($form)
    {
        $newInfo = json_decode($form);
        $user = $this->entityManager
            ->getRepository(Teachers::class)
            ->find($newInfo->id);

        if (!$user) {
            throw $this->createNotFoundException(
                'No trainer found for id ' . $newInfo->id
            );
        }
        $user->setVideoLink($newInfo->videolink);
        $user->setGame($newInfo->game);
        $user->setCost($newInfo->cost);
        $user->setAbout($newInfo->about);

        $this->entityManager->flush();

        return $this->json($user);
    }

    /**
     * @Route("/ajax/trainers/{game}/{page}", name="get_trainer_info_slider_games")
     */
    public function setTrainerSliderInfo(Request $request, $game, $page)
    {
        $filters = json_decode($request->getContent(), true);
        $offset = ($page - 1) * $_ENV['TRAINERS_ON_PAGE'];

        $users = $this->userService->getTrainers($filters, $game, $offset);
        $trainersCount = $this->userService->getTrainersCount($filters, $game);
        $trainers = $this->userService->teachersDecorator($users);

        return $this->json([
            'trainers' => $trainers,
            'count' => $trainersCount,
            'limit' => $_ENV['TRAINERS_ON_PAGE']
        ]);
    }

    /**
     * @Route("/trainer/paypall/{method}/{userId}", methods={"POST"}, name="trainer_paypall")
     */
    public function trainerPayPall(Request $request, ValidatorInterface $validator, $method, $userId)
    {
        $request = json_decode($request->getContent(), true);

        /** @var Teachers $trainer */
        $trainer = $this->getDoctrine()->getRepository(Teachers::class)->findOneBy([
            'userid' => $userId
        ]);

        $payPal = null;

        if (isset($trainer)){
            if ($method === 'set'){
                $constraints = new Assert\Collection([
                    'payPal' => [new Assert\Email()],
                ]);
                $violations = $validator->validate($request, $constraints);

                $data = [];

                if ($violations->count() === 0)
                {
                    $data['message'] = [
                        'type' => 'success',
                        'text' => 'Paypal был успешно сохранен'
                    ];

                    $trainer->setPayPal($request['payPal'] ?? null);

                    $this->getEntityManager()->persist($trainer);
                    $this->getEntityManager()->flush($trainer);
                } else {
                    $data['message'] = [
                        'type' => 'error',
                        'text' => 'Paypal был указан в неверном формате'
                    ];
                }
            }
            $payPal = $trainer->getPayPal();
        }
        $data['paypal'] = $payPal;

        return $this->json($data);
    }
}

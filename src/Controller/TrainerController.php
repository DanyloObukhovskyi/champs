<?php

namespace App\Controller;

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

class TrainerController extends AbstractController
{
    use EntityManager;

    /**
     * @var UserService
     */
    public $userService;

    public function __construct()
    {
        $this->userService = new UserService($this->getEntityManager());
    }

    /**
     * @Route("/ru/trainer/timelist", name="trainer_index")
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
     * @Route("/ru/trainer/timetable", name="timetable_index")
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
     * @Route("/ru/trainer/info/{id}", name="get_trainer_info")
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
    public function setTrainerSliderInfo(Request $request, $game)
    {
        $paginate = $_ENV['TRAINERS_ON_PAGE'] ?? 5;

        if ($game == 'all') {
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

        $filters = json_decode($request->getContent(), true);
        $response = $this->userService->teachersDecorator($users, $filters);
        $response = array_chunk($response, $paginate);

        return $this->json($response);
    }

    /**
     * @Route("/ru/trainer/paypall/{method}/{userId}", methods={"POST"}, name="trainer_paypall")
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

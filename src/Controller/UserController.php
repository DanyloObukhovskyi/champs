<?php

namespace App\Controller;

use App\Entity\Teachers;
use App\Entity\TrainerVideo;
use App\Entity\User;
use App\Service\TrainerVideoService;
use App\Traits\EntityManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Core\Exception\BadCredentialsException;
use Symfony\Component\Security\Core\User\PasswordUpgraderInterface;

class UserController extends AbstractController
{
    use EntityManager;

    private const ACTION_ADD = 'add';

    private const ACTION_DELETE = 'delete';

    private $passwordEncoder;

    private $trainerVideoService;

    public function __construct(UserPasswordEncoderInterface $passwordEncoder)
    {
        $this->passwordEncoder = $passwordEncoder;
        $this->trainerVideoService = new TrainerVideoService($this->getEntityManager());
    }

    /**
     * @Route("/ru/user/timelist", name="timelist_index")
     */
    public function index()
    {
      if ($this->getUser()->getistrainer()) {
        return $this->redirectToRoute('main');
      } else {
        return $this->render('templates/cabinet/user/timelist.html.twig',
            [
                'router' => 'cabinet',
                'styles' => [
                    'cabinet/cabinet.css',
                    'cabinet/user/timelist.css'
                ]
            ]
        );
      }
    }

    /**
     * @Route("/ru/user/specifications", name="specifications_index")
     */
    public function specifications()
    {
      if ($this->getUser()->getistrainer()) {
        return $this->redirectToRoute('trainer_index');
      } else {
        return $this->render('templates/cabinet/user/specifications.html.twig',
            [
                'router' => 'cabinet',
                'styles' => [
                    'cabinet/cabinet.css',
                    'cabinet/user/specifications.css'
                ]
            ]
        );
      }
    }

    /**
     * @Route("/ru/user/history", name="history_index")
     */
    public function history()
    {
      if ($this->getUser()->getistrainer()) {
        return $this->redirectToRoute('main');
      } else {
        $data = [
            [
                'date' => 'Сегодня, 25 июня',
                'items' => [
                    [
                        'time' => '13:00-14:00',
                        'image' => '/images/temp/Rectangle506.png',
                        'name' => 'Rafaeeela',
                        'rating' => 3,
                        'price' => 3000,
                        'closed' => true,
                    ],
                    [
                        'time' => '13:00-14:00',
                        'image' => '/images/temp/Rectangle506.png',
                        'name' => 'Rafaeeela',
                        'rating' => 3,
                        'price' => 3000,
                        'closed' => true,
                    ]
                ]
            ]
        ];

        return $this->render('templates/cabinet/user/history.html.twig',
            [
                'router' => 'cabinet',
                'styles' => [
                    'cabinet/cabinet.css',
                    'cabinet/user/history.css'
                ],
                'data' => $data,
            ]
        );
      }
    }

    /**
     * @Route("/ru/user/settings", name="settings_index")
     */
    public function settings()
    {
        if ($this->getUser()->getistrainer()) {
          return $this->redirectToRoute('main');
        } else {
          return $this->render('templates/cabinet/user/settings.html.twig',
              [
                  'router' => 'cabinet',
                  'styles' => [
                      'cabinet/cabinet.css',
                      'cabinet/user/settings.css'
                  ]
              ]
          );
        }
    }

    /**
     * User /ru/user/*
     *
     * @Route("/ru/user/info/{id}", name="get_user_info")
     */
    public function getUserInfo($id)
    {
        /** @var User $user */
        $user = $this->getDoctrine()
            ->getRepository(User::class)
            ->findOneBy([
                'id' => $id
            ]);

        if (!$user) {
            throw $this->createNotFoundException(
                'No user found for id '.$id
            );
        }

        $result = [
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
        ];

        if($user->getIsTrainer())
        {
            $trainer = $this->getDoctrine()
                ->getRepository(Teachers::class)
                ->findByUserId(intval($id));

            if(!$trainer)
            {
                $entityManager = $this->getDoctrine()->getManager();
                /** @var Teachers $trainer */
                $trainer = new Teachers();
                $trainer->setVideoLink('');
                $trainer->setUser($user->getId());
                $trainer->setCost(0);
                $trainer->setAbout('');
                $trainer->setShorttitle('');
                $trainer->setMethod('');
                $trainer->setStreamType(0);
                $trainer->setTwitch('');


                $entityManager->persist($trainer);
                $entityManager->flush();
            }

//            $trainer->setUser(null);
            $user->setTrainer($trainer);

            $userTrainer = $user->getTrainer();
            $result['trainer'] = $trainer;
//                [
//                'videolink' => $user->getVideoLink(),
//                'cost' => $trainer->getCost(),
//                'about' => $trainer->getAbout(),
//                'shorttitle' => $trainer->getShorttitle(),
//                'method' => $trainer->getMethod(),
//                'streamtype' => $trainer->getStreamType(),
//                'twitch' => $trainer->getTwitch(),
//            ];
        }

        return $this->json($result);
    }

    /**
     * @Route("/ru/user/set-info/", methods={"POST"}, name="set_user_info")
     */
    public function setUserInfo(Request $request)
    {
//        /** @var User $client */
//        $client = $this->get('security.token_storage')->getToken()->getUser();
//
//
//        if($client->getId() != $userId)
//        {
//            $this->json("U have not access to update this user");
//        }
////        $newInfo = json_decode($form);

        // retrieves POST variables respectively\
        $userId = $request->request->get('id');
        $entityManager = $this->getDoctrine()->getManager();
        /** @var User $user */
        $user = $entityManager->getRepository(User::class)->find($userId);

        if (!$user) {
            return $this->json([
                'status' => 404
            ]);
        }

        $user->setName($request->request->get('name'));
        $user->setEmail($request->request->get('email'));
        $user->setNickname($request->request->get('nickname'));
//        $user->setPhoto($newInfo->photo);
        $user->setFamily($request->request->get('family'));
        $user->setGame($request->request->get('game'));
        $user->setRank($request->request->get('rank'));
        $user->setDiscord($request->request->get('discord'));
//
        if($request->request->get('photo') && ($request->request->get('photo') != ''))
        {
            if ($user->getPhoto() !== null)
            {
                if(($user->getPhoto() == $user->getId() . "-" . $user->getName() . $user->getNickname() . ".jpg" )||
                ($user->getPhoto() == $user->getId() . "-" . $user->getName() . $user->getNickname() . ".png" )||
                ($user->getPhoto() == $user->getId() . "-" . $user->getName() . $user->getNickname() . ".jpeg" ))
                {
                    unlink("images/temp/matches/" . $user->getPhoto());
                }

            }
            // split the string on commas
            // $data[ 0 ] == "data:image/png;base64"
            // $data[ 1 ] == <actual base64 string>
//            $data = explode( ',', $request->request->get('photo') );
//            switch ($data[0])
//            {
//                case "data:image/png;base64":
//                    $phototype = "png";
//                    break;
//                case "data:image/jpeg;base64":
//                    $phototype = "jpeg";
//                    break;
//                case "data:image/jpg;base64":
//                    $phototype = "jpg";
//                    break;
//                default:
//                    $phototype = "jpeg";
//                    break;
//            }
////            $phototype = $request->request->get('phototype');
//            $filename = $user->getId() . "-" . $user->getName() . $user->getNickname() . "." . $phototype;
//            $output = $data[1];
//            $output_file_name = "\images\\temp\matches\\" . $filename;
//            $ifp = fopen( $output_file_name, 'wb');// stream_get_contents(fopen( $output_file_name, 'wb'));//open( $output_file, 'wb' );
//
//            $image = base64_decode($output);
//            fwrite( $ifp, $image );
//            fclose( $ifp );

            $data = $request->request->get('photo');

            if (preg_match('/^data:image\/(\w+);base64,/', $data, $type)) {
                $data = substr($data, strpos($data, ',') + 1);
                $type = strtolower($type[1]); // jpg, png, gif

                if (!in_array($type, [ 'jpg', 'jpeg', 'png' ])) {
                    throw new \Exception('invalid image type');
                }

                $data = base64_decode($data);

                if ($data === false) {
                    throw new \Exception('base64_decode failed');
                }
            } else {
                throw new \Exception('did not match data URI with image data');
            }

            $filename = $user->getId() . "-" . $user->getName() . $user->getNickname() . "." . $type;
            file_put_contents("images/temp/matches/{$filename}", $data);

            $user->setPhoto( $filename);
        }


        if($user->getIsTrainer())
        {
            $trainer = $entityManager->getRepository(Teachers::class)
                ->findOneBy([
                    'userid' => $userId
                    ]);
            if(!$trainer)
            {
                $trainer = new Teachers();
                $trainer->setUser($user->getId());
            }

            $trainer->setVideoLink($request->request->get('videolink'));
            $trainer->setCost($request->request->get('cost'));
            $trainer->setAbout($request->request->get('about'));
            $trainer->setShorttitle($request->request->get('shorttitle'));
            $trainer->setMethod($request->request->get('method'));
            $trainer->setStreamType($request->request->get('streamtype'));
            $trainer->setTwitch($request->request->get('channellink'));

            $entityManager->persist($trainer);
            $entityManager->flush();
        }
        $password = $request->request->get('password');

        if ($password == $request->request->get('password_repeat'))
        {
            if($password != '')
            {
                $user->setPassword($this->passwordEncoder->encodePassword($user, $password));
            }
        }

        $entityManager->persist($user);
        $entityManager->flush();

        return $this->json([
            'status' => 200,
            'photo' => $user->getPhoto()
        ]);

//        return $this->json($user);
    }

    /**
     * User /ru/user/*
     *
     * @Route("/ru/user/info/by-mail/{mail}", name="get_user_info_by_mail")
     */
    public function getUserInfoByMail($mail)
    {
        $user = $this->getDoctrine()
            ->getRepository(User::class)
            ->findOneBy([
                'email' => $mail
            ]);

        if (!$user) {
            throw $this->createNotFoundException(
                'No user found for mail ' . $mail
            );
        }

        return $this->json($user);
    }

    /**
     * @Route("/ru/{action}/user/video/{id}", methods={"POST"}, name="add_trainer_video")
     */
    public function addVideo(Request $request, $action, $id)
    {
        $request = json_decode($request->getContent());
        $trainer = $this->getDoctrine()->getRepository(User::class)->find($id);

        $videos = $trainer->getVideosUrls();
        if ($action === self::ACTION_ADD and isset($trainer) and count($videos) < 10){
            $this->trainerVideoService->create($trainer, $request->video);
        }
        if ($action === self::ACTION_DELETE and isset($trainer)){
            $this->trainerVideoService->deleteVideo($trainer, $request->video);
        }
        $trainerVideos = $this->trainerVideoService->getByTrainer($trainer);

        $videos = [];
        /** @var TrainerVideo $trainerVideo */
        foreach ($trainerVideos as $trainerVideo)
        {
            $videos[] = $trainerVideo->getVideoUrl();
        }

        return $this->json($videos);
    }
}

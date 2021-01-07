<?php

namespace App\Controller;

use App\Entity\Charactristics;
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

    private const ACTION_ALL = 'all';

    /**
     * @var UserPasswordEncoderInterface
     */
    private $passwordEncoder;

    /**
     * @var TrainerVideoService
     */
    private $trainerVideoService;

    public function __construct(UserPasswordEncoderInterface $passwordEncoder)
    {
        $this->passwordEncoder = $passwordEncoder;
        $this->trainerVideoService = new TrainerVideoService($this->getEntityManager());
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
        $videos = $this->trainerVideoService->getByTrainer($trainer);

        if ($action === self::ACTION_ADD and isset($trainer) and count($videos) < TrainerVideoService::MAX_COUNT) {
            $isYouTube = $this->trainerVideoService->isYouTubeVideo($request->video);

            if ($isYouTube) {
                $this->trainerVideoService->create($trainer, $request->video);
            } else {
                return $this->json([
                    'video' => 'Ссылка на видео должны быть с Youtube! В формате https://www.youtube.com/qwda2fg'
                ], 422);
            }
        }
        if ($action === self::ACTION_DELETE and isset($trainer)) {
            $this->trainerVideoService->deleteVideo($trainer, $request->video);
        }
        $trainerVideos = $this->trainerVideoService->getByTrainer($trainer);

        $videos = [];
        /** @var TrainerVideo $trainerVideo */
        foreach ($trainerVideos as $trainerVideo) {
            $videos[] = $trainerVideo->getVideoUrl();
        }
        return $this->json($videos);
    }

    /**
     * @Route("/ru/get/auth", name="get.auth.user")
     */
    public function getAuthUser()
    {
        /** @var User $user */
        $user = $this->getUser();

        if (isset($user)) {
            $user = [
                'id' => $user->getId(),
                'name' => $user->getName(),
                'steam' => $user->getSteamId(),
                'nickname' => $user->getNickname(),
                'photo' => $user->getPhoto()
            ];
        }

        return $this->json($user);
    }

    /**
     * @Route("/ru/user/check/email")
     */
    public function checkIsEmailValid(Request $request)
    {
        $email = $request->get('email');

        $user = $this->getEntityManager()->getRepository(User::class)->findOneBy([
            'email' => $email
        ]);
        return isset($user) ?
            $this->json('Этот эмейл уже занят!', 422) :
            $this->json('ok');
    }
}

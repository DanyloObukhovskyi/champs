<?php

namespace App\Controller;

use App\Entity\Charactristics;
use App\Entity\ConfirmCode;
use App\Entity\Teachers;
use App\Entity\TrainerVideo;
use App\Entity\User;
use App\Service\ConfirmCodeService;
use App\Service\TrainerVideoService;
use App\Service\UserService;
use App\Traits\EntityManager;
use App\Message\ConfirmCodeMail;
use Doctrine\ORM\EntityManagerInterface;
use Swift_Mailer;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Core\Exception\BadCredentialsException;
use Symfony\Component\Security\Core\User\PasswordUpgraderInterface;

/**
 * @Route("/{_locale}", requirements={"locale": "ru"})
 */
class UserController extends AbstractController
{
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

    /**
     * @var ConfirmCodeService
     */
    private $confirmCodeService;

    /**
     * @var UserService
     */
    private $userService;

    /**
     * @var EntityManagerInterface
     */
    private $entityManager;

    public function __construct(UserPasswordEncoderInterface $passwordEncoder, EntityManagerInterface $entityManager)
    {
        $this->passwordEncoder = $passwordEncoder;

        $this->entityManager = $entityManager;
        $this->trainerVideoService = new TrainerVideoService($entityManager);

        $this->userService = new UserService($entityManager);
        $this->confirmCodeService = new ConfirmCodeService($entityManager);
    }

    /**
     * User /ru/user/*
     *
     * @Route("/user/info/by-mail/{mail}", name="get_user_info_by_mail")
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
     * @Route("/{action}/user/video/{id}", methods={"POST"}, name="add_trainer_video")
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
     * @Route("/get/auth", name="get.auth.user")
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
     * @Route("/generate/confirm/code")
     */
    public function generateEmailConfirmCode(Request $request, Swift_Mailer $mailer)
    {
        $email = $request->get('email');
        $confirmCode = $this->confirmCodeService->create($email);

        $this->dispatchMessage(new ConfirmCodeMail($confirmCode, $mailer));

        return $this->json('ok');
    }

    /**
     * @Route("/check/confirm/code")
     */
    public function checkConfirmCode(Request $request)
    {
        $user = $request->get('user');
        /** @var ConfirmCode $confirmCode */
        $confirmCode = $this->confirmCodeService->getCode($user['email'] ?? '');

        if (isset($confirmCode)) {
            if ((string)$confirmCode->getCode() === (string)$user['code']) {
                return $this->json('Код подтвержден!');
            }
        }
        return $this->json('Код не совпадает!', 422);
    }

    /**
     * @Route("/ajax/user/set/nickname")
     */
    public function setNickName(Request $request)
    {
        $request = json_decode($request->getContent(), false);

        /** @var User|null $user */
        $user = $this->entityManager->getRepository(User::class)->findOneBy([
            'email' => $request->email
        ]);

        if (!empty($request->nickname) and isset($user)) {

            $user->setNickname($request->nickname);

            $this->entityManager->persist($user);
            $this->entityManager->flush();

            return $this->json('ok');
        }
        return $this->json('Никнейм не может быть пустым!', 422);
    }

    /**
     * @Route("/check/email")n
     */
    public function checkIsEmailValid(Request $request)
    {
        $email = $request->get('email');

        $user = $this->entityManager->getRepository(User::class)->findOneBy([
            'email' => $email
        ]);
        return isset($user) ?
            $this->json('Этот эмейл уже занят!', 422) :
            $this->json('ok');
    }

    /**
     * @Route("/auth/user/full", name="user_cabinet_ajax_full")
     */
    public function authUserFull()
    {
        /** @var User $user */
        $user = $this->getUser();

        if (isset($user)) {
            $userData = $this->userService->getUserData($user);
        }
        return $this->json(isset($user) ? $userData : null);
    }
}

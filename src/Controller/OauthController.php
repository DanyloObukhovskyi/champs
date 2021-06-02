<?php

namespace App\Controller;

use App\Entity\User;
use App\Service\Auth\DiscordAuthService;
use App\Service\Auth\FaceBookAuthService;
use App\Service\Auth\GoogleAuthService;
use App\Service\Auth\TwichAuthService;
use App\Service\Auth\VkAuthService;
use App\Service\UserService;
use App\Traits\EntityManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Authentication\Token\UsernamePasswordToken;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

/**
 * Class OauthController
 * @package App\Controller
 */
class OauthController extends AbstractController
{
    use EntityManager;

    /**
     * @var UserPasswordEncoderInterface
     */
    private $passwordEncoder;

    /**
     * @var DiscordAuthService
     */
    public $discordAuthService;

    /**
     * @var FaceBookAuthService
     */
    public $faceBookAuthService;

    /**
     * @var GoogleAuthService
     */
    public $googleAuthService;

    /**
     * @var TwichAuthService
     */
    public $twichAuthService;

    /**
     * @var VkAuthService
     */
    public $vkAuthService;

    /**
     * @var UserService
     */
    public $userService;

    /**
     * OauthController constructor.
     * @param UserPasswordEncoderInterface $passwordEncoder
     */
    public function __construct(UserPasswordEncoderInterface $passwordEncoder)
    {
        $this->passwordEncoder = $passwordEncoder;

        $this->discordAuthService = new DiscordAuthService();
        $this->faceBookAuthService = new FaceBookAuthService();
        $this->googleAuthService = new GoogleAuthService();
        $this->twichAuthService = new TwichAuthService();
        $this->vkAuthService = new VkAuthService();

        $this->userService = new UserService($this->getEntityManager());
    }

    /**
     * @param User $user
     */
    public function loginUser(User $user)
    {
        $token = new UsernamePasswordToken($user, null, 'main', $user->getRoles());

        $this->container->get('security.token_storage')->setToken($token);
        $this->container->get('session')->set('_security_main', serialize($token));
    }

    /**
     * @Route("/ru/oauth/steam", name="oauth_steam")
     */
    public function steam(Request $request, AuthenticationUtils $authenticationUtils)
    {
        if (!empty($request->get('state')) and $request->get('state') == 'steam') {
            // Вытаскиваем id юзера
            preg_match(
                "/^https:\/\/steamcommunity\.com\/openid\/id\/(7[0-9]{15,25}+)$/",
                $request->get('openid_identity'),
                $key
            );

            if (count($key) > 0) {
                $steamId = $key[1];

                /** @var User $user */
                $user = $this->getDoctrine()->getRepository(User::class)->findOneBy([
                    'steam_id' => $steamId
                ]);

                if (empty($user)) {
                    $user = $this->userService->createUserFromSteamData($steamId, $this->passwordEncoder);
                }
                $this->loginUser($user);
            }
        }

        return $this->redirectToRoute('main_redirect');
    }

    /**
     * @Route("/ru/auth/discord/", name="discord.auth")
     */
    public function loginWithDiscord()
    {
        return $this->redirect($this->discordAuthService->getAuthorizeUrl());
    }

    /**
     * @Route("/ru/auth/discord/hook", name="discord.auth.hook")
     */
    public function discordLoginHook(Request $request, AuthenticationUtils $authenticationUtils)
    {
        $discordUser = $this->discordAuthService->getUserByToken($request->get('code'));

        if (isset($discordUser)) {
            /** @var User $user */
            $user = $this->getDoctrine()->getManager()->getRepository(User::class)
                ->findOneBy(['discordId' => $discordUser->id]);

            if (empty($user)) {
                $entityManager = $this->getDoctrine()->getManager();
                $user = $entityManager->getRepository(User::class)->findOneBy([
                    'email' => $discordUser->email
                ]);
                if (empty($user)) {
                    $user = $this->userService->createUserFromDiscord($discordUser, $this->passwordEncoder);
                } else {
                    $user->setDiscordId($discordUser->id);
                    $entityManager->flush();
                }
            }
            $this->loginUser($user);
        }
        return $this->redirectToRoute('main_redirect');
    }

    /**
     * @Route("/ru/auth/facebook/", name="faceBook.auth")
     */
    public function loginWithFaceBook()
    {
        return $this->redirect($this->faceBookAuthService->authLink());
    }

    /**
     * @Route("/ru/auth/facebook/hook", name="facebook.auth.hook")
     */
    public function facebookLoginHook(Request $request, AuthenticationUtils $authenticationUtils)
    {
        $faceBookAccount = $this->faceBookAuthService->getAccountInfo($request->get('code'));

        if (isset($faceBookAccount)) {
            /** @var User $user */
            $user = $this->getDoctrine()
                ->getManager()
                ->getRepository(User::class)
                ->findOneBy(['faceBookId' => $faceBookAccount->id]);

            if (empty($user)) {
                $user = $this->getDoctrine()
                    ->getManager()
                    ->getRepository(User::class)
                    ->findOneBy(['email' => $faceBookAccount->email]);

                if (empty($user)) {
                    $user = $this->userService->createUserFromFaceBookData($faceBookAccount, $this->passwordEncoder);
                }
            }
            $this->userService->setFacebookId($user, $faceBookAccount->id);
            $this->loginUser($user);
        }
        return $this->redirectToRoute('main_redirect');
    }

    /**
     * @Route("/ru/auth/google/", name="google.auth")
     */
    public function loginWithGoogle()
    {
        $redirectUrl = $this->googleAuthService->authLink();

        return $this->redirect($redirectUrl);
    }

    /**
     * @Route("/ru/auth/google/hook", name="google.auth.hook")
     */
    public function googleLoginHook(Request $request, AuthenticationUtils $authenticationUtils)
    {
        $googleAccount = $this->googleAuthService->getAccountInfo($request->get('code'));

        if (isset($googleAccount)) {
            /** @var User $user */
            $user = $this->getDoctrine()
                ->getManager()
                ->getRepository(User::class)
                ->findOneBy(['googleId' => $googleAccount->id]);

            if (empty($user)) {
                $user = $this->getDoctrine()
                    ->getManager()
                    ->getRepository(User::class)
                    ->findOneBy(['email' => $googleAccount->email]);

                if (empty($user)) {
                    $user = $this->userService->createUserFromGoogleData($googleAccount, $this->passwordEncoder);
                }
            }
            $this->userService->setGoogleId($user, $googleAccount->id);
            $this->loginUser($user);
        }
        return $this->redirectToRoute('main_redirect');
    }

    /**
     * @Route("/ru/auth/twich/", name="twich.auth")
     */
    public function loginWithTwich()
    {
        $redirectUrl = $this->twichAuthService->authLink();

        return $this->redirect($redirectUrl);
    }

    /**
     * @Route("/ru/auth/twich/hook", name="twich.hooks")
     */
    public function twichLoginHook(Request $request, AuthenticationUtils $authenticationUtils)
    {

        $twichAccount = $this->twichAuthService->getAccountInfo($request->get('code'));
        if (isset($twichAccount)) {
            $user = $this->getDoctrine()
                ->getManager()
                ->getRepository(User::class)
                ->findOneBy(['twichId' => $twichAccount->sub]);

            if (empty($user)) {
                $twichUser = $this->twichAuthService->getAccountAttr($twichAccount->token);
                $entityManager = $this->getDoctrine()->getManager();
                $user = $entityManager->getRepository(User::class)->findOneBy([
                    'email' => $twichUser->email
                ]);
                if (empty($user)) {
                    $user = $this->userService->createUserFromTwichData($twichAccount, $twichUser, $this->passwordEncoder);
                } else {
                    $user->setTwichId($twichAccount->sub);
                    $entityManager->flush();
                }
            }
            $this->loginUser($user);
        }
        return $this->redirectToRoute('main_redirect');
    }

    /**
     * @Route("/ru/auth/vk/", name="vk.auth")
     */
    public function loginWithVk()
    {
        $redirectUrl = $this->vkAuthService->authLink();

        return $this->redirect($redirectUrl);
    }

    /**
     * @Route("/ru/auth/vk/hook", name="twich.auth.hook")
     */
    public function vkLoginHook(Request $request, AuthenticationUtils $authenticationUtils)
    {
        $vkAccount = $this->vkAuthService->getAccountInfo($request->get('code'));

        if (isset($vkAccount)) {
            $user = $this->getDoctrine()
                ->getManager()
                ->getRepository(User::class)
                ->findOneBy(['vkId' => $vkAccount->id]);

            if (empty($user)) {
                $user = $this->userService->createUserFromVkData($vkAccount, $this->passwordEncoder);
            }
            $this->loginUser($user);
        }
        return $this->redirectToRoute('main_redirect');
    }
}

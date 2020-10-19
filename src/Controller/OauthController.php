<?php

namespace App\Controller;

use App\Entity\User;
use App\Service\Auth\DiscordAuthService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Authentication\Token\UsernamePasswordToken;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class OauthController extends AbstractController
{
    /**
     * @var UserPasswordEncoderInterface
     */
    private $passwordEncoder;

    /**
     * @var DiscordAuthService
     */
    public $discordAuthService;

    public function __construct(UserPasswordEncoderInterface $passwordEncoder)
    {
        $this->passwordEncoder = $passwordEncoder;
        $this->discordAuthService = new DiscordAuthService();
    }

    /**
     * @Route("/ru/oauth/steam", name="oauth_steam")
     */
    public function steam(AuthenticationUtils $authenticationUtils)
    {
        if (isset($_GET["state"]) and @$_GET["state"] == "steam")
        {
            preg_match("/^https:\/\/steamcommunity\.com\/openid\/id\/(7[0-9]{15,25}+)$/", $_GET["openid_identity"], $key); // Вытаскиваем id юзера

            if(count($key) > 0)
            {
                $steam_id = $key[1];

                /** @var User $user */
                $user = $this->getDoctrine()->getRepository(User::class)->findOneBy([
                    'steam_id' => $steam_id
                ]);

                if(!$user)
                {
                    $user = new User();

                    $user->setEmail('steam-email-' . $steam_id . '@champs.pro');
                    $user->setSteamId($steam_id);
                    $user->setPassword($this->passwordEncoder->encodePassword($user, sha1($steam_id)));

                    $user->setRoles(['ROLE_USER']);

                    $user->setIsTrainer(0);
                    $user->setPurse(0);

                    $em = $this->getDoctrine()->getManager();
                    $em->persist($user);
                    $em->flush();
                }


                $user = //Handle getting or creating the user entity likely with a posted form
                $token = new UsernamePasswordToken($user, null, 'main', $user->getRoles());
                $this->container->get('security.token_storage')->setToken($token);
                $this->container->get('session')->set('_security_main', serialize($token));
            }
        }

        return $this->redirectToRoute('main');
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

        if (isset($discordUser)){
            $user = $this->getDoctrine()->getManager()->getRepository(User::class)
                ->findOneBy(['discordId' => $discordUser->id]);

            if (empty($user)){
                $user = new User();
                $user->setDiscordId($discordUser->id);
                $user->setRoles(['ROLE_USER']);

                $user->setIsTrainer(false);
                $user->setPurse(false);

                $user->setNickname($discordUser->username);
                $user->setPassword($this->passwordEncoder->encodePassword($user, sha1($discordUser->id)));

                $this->getDoctrine()->getManager()->persist($user);
                $this->getDoctrine()->getManager()->flush();
            }
            $token = new UsernamePasswordToken($user, null, 'main', $user->getRoles());

            $this->container->get('security.token_storage')->setToken($token);
            $this->container->get('session')->set('_security_main', serialize($token));
        }
        return $this->redirectToRoute('main');
    }
}

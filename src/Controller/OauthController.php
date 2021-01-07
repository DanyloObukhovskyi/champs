<?php

namespace App\Controller;

use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Authentication\AuthenticationProviderManager;
use Symfony\Component\Security\Core\Authentication\Token\UsernamePasswordToken;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class OauthController extends AbstractController
{
    /**
     * @var UserPasswordEncoderInterface
     */
    private $passwordEncoder;

    public function __construct(UserPasswordEncoderInterface $passwordEncoder)
    {
        $this->passwordEncoder = $passwordEncoder;
    }

    /**
     * @Route("/ru/oauth/steam", name="oauth_steam")
     */
    public function steam(AuthenticationUtils $authenticationUtils)
    {
        if (isset($_GET["state"]) and @$_GET["state"] == "steam") {
            preg_match("/^https:\/\/steamcommunity\.com\/openid\/id\/(7[0-9]{15,25}+)$/", $_GET["openid_identity"], $key); // Вытаскиваем id юзера

            if (count($key) > 0) {
                $steam_id = $key[1];

                /** @var User $user */
                $user = $this->getDoctrine()->getRepository(User::class)->findOneBy([
                    'steam_id' => $steam_id
                ]);

                if (!$user) {
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

        return $this->redirect('/ru/');
    }
}

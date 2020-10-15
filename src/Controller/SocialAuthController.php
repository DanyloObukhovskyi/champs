<?php

namespace App\Controller;

use App\Service\Auth\DiscordAuthService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class SocialAuthController extends AbstractController
{
    /**
     * @var DiscordAuthService
     */
    public $discordAuthService;

    public function __construct()
    {
        $this->discordAuthService = new DiscordAuthService();
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
    public function discordLoginHook(Request $request)
    {
        dd($request->get('code'));
    }
}

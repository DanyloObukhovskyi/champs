<?php


namespace App\Service\Auth;


class DiscordAuthService
{
    public $authorizeURL = 'https://discordapp.com/api/oauth2/authorize';

    public $tokenURL = 'https://discord.com/api/oauth2/token';

    public $apiURLBase = 'https://discord.com/api/users/@me';

    public function getAuthorizeUrl()
    {
        $params = array(
            'client_id' => $_ENV['DISCORD_OAUTH2_CLIENT_ID'],
            'redirect_uri' => $_ENV['DISCORD_REDIRECT_URL'],
            'response_type' => 'code',
            'scope' => 'identify guilds'
        );
        $params = http_build_query($params);


        return $this->authorizeURL . '?' . $params;
    }

    public function getUserByToken($token)
}
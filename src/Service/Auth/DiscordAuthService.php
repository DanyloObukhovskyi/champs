<?php


namespace App\Service\Auth;


use Symfony\Component\HttpClient\CurlHttpClient;

class DiscordAuthService
{
    public $authorizeURL = 'https://discordapp.com/api/oauth2/authorize';

    public $tokenURL = 'https://discord.com/api/oauth2/token';

    public $apiURLBase = 'https://discord.com/api/users/@me';

    public function getAuthorizeUrl()
    {
        $params = array(
            'client_id' => $_ENV['DISCORD_CLIENT_ID'],
            'response_type' => 'code',
            'scope' => 'identify guilds email',
            'prompt' => 'consent'
        );
        $params = http_build_query($params);


        return $this->authorizeURL . '?' . $params;
    }

    public function getUserByToken($token)
    {
        $headers[] = 'Accept: application/json';

        $options = [
            "grant_type" => "authorization_code",
            'client_id' => $_ENV['DISCORD_CLIENT_ID'],
            'client_secret' => $_ENV['DISCORD_CLIENT_SECRET'],
            'code' => $token
        ];
        $token = $this->apiRequest($this->tokenURL, $options);

        if (isset($token->access_token))
        {
            return $this->apiRequest($this->apiURLBase, null, $token->access_token);
        }
        return null;
    }

    public function apiRequest($url, $options = null, $accessToken = null, $headers = [])
    {
        $headers[] = 'Accept: application/json';

        $ch = curl_init($url);

        curl_setopt($ch, CURLOPT_IPRESOLVE, CURL_IPRESOLVE_V4);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);

        if(isset($options)){
            curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($options));
        }
        if(isset($accessToken)){
            $headers[] = 'Authorization: Bearer ' . $accessToken;
        }
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

        return json_decode(curl_exec($ch), false);
    }
}
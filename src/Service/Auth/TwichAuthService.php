<?php


namespace App\Service\Auth;


class TwichAuthService
{
    public $baseUrl = 'https://api.twitch.tv/kraken/oauth2/authorize';

    public $accessTokenUrl = 'https://api.twitch.tv/kraken/oauth2/token';

    public $userUrl = 'https://id.twitch.tv/oauth2/userinfo';

    /**
     * @return string
     */
    public function authLink(): string
    {
        $params = array(
            'response_type' => 'code',
            'client_id' => $_ENV['TWICH_OAUTH2_CLIENT_ID'],
            'redirect_uri' => $_ENV['TWICH_REDIRECT_URL'],
            'state' => $_ENV['TWICH_OAUTH2_CLIENT_SECRET']
        );
        return  $this->baseUrl . '?' . urldecode(http_build_query($params));
    }

    /**
     * @param $code
     * @return mixed|null
     */
    public function getAccountInfo($code)
    {
        $token = $this->getToken($code);

        if (isset($token->access_token))
        {
            return $this->getUser($token->access_token);
        }
        return null;
    }

    /**
     * @param $code
     * @return mixed
     */
    public function getToken($code)
    {
        $parameterValues = array(
            'client_id' => $_ENV['TWICH_OAUTH2_CLIENT_ID'],
            'redirect_uri' => $_ENV['TWICH_REDIRECT_URL'],
            'client_secret' =>  $_ENV['TWICH_OAUTH2_CLIENT_SECRET'],
            'grant_type' => 'authorization_code',
            'code' => $code
        );
        $params = http_build_query($parameterValues, '', '&');
        $curl = curl_init();

        curl_setopt_array($curl, array(
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_URL => $this->accessTokenUrl,
            CURLOPT_POST => 1,
            CURLOPT_POSTFIELDS => $params
        ));
        return json_decode(curl_exec($curl), false);
    }

    /**
     * @param $accessToken
     * @return mixed
     */
    public function getUser($accessToken)
    {
        $headers[] = 'Accept: application/json';
        $headers[] = 'Client-ID: ' . $_ENV['TWICH_OAUTH2_CLIENT_ID'];
        $headers[] = 'Authorization: Bearer ' . $accessToken;

        $curl = curl_init($this->userUrl);

        curl_setopt($curl, CURLOPT_IPRESOLVE, CURL_IPRESOLVE_V4);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, TRUE);
        curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);

        return json_decode(curl_exec($curl), false);
    }
}
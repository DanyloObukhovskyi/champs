<?php


namespace App\Service\Auth;


use Google_Client;
use Google_Service_Oauth2;

/**
 * Class GoogleAuthService
 * @package App\Service\Auth
 */
class GoogleAuthService
{
    public $authClient;

    /**
     * GoogleAuthService constructor.
     */
    public function __construct()
    {
        $this->authClient = new Google_Client();

        $this->authClient->setClientId($_ENV['GOOGLE_OAUTH2_CLIENT_ID']);
        $this->authClient->setClientSecret($_ENV['GOOGLE_OAUTH2_CLIENT_SECRET']);
        $this->authClient->setRedirectUri($_ENV['GOOGLE_REDIRECT_URL']);
        $this->authClient->addScope("email");
        $this->authClient->addScope("profile");
    }

    /**
     * @return string
     */
    public function authLink()
    {
        return $this->authClient->createAuthUrl();
    }

    /**
     * @param $code
     * @return \Google_Service_Oauth2_Userinfo|null
     */
    public function getAccountInfo($code)
    {
        $token = $this->authClient->fetchAccessTokenWithAuthCode($code);
        if (isset($token['access_token'])){

            $this->authClient->setAccessToken($token['access_token']);

            // get profile info
            $googleOauth = new Google_Service_Oauth2($this->authClient);
            return $googleOauth->userinfo->get();
        }
        return null;
    }
}
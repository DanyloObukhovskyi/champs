<?php


namespace App\Service\Auth;


use VK\OAuth\VKOAuth;
use VK\OAuth\{VKOAuthDisplay, VKOAuthResponseType};
use VK\OAuth\Scopes\VKOAuthUserScope;
use VK\Client\VKApiClient;

/**
 * Class VkAuthService
 * @package App\Service\Auth
 */
class VkAuthService
{
    /**
     * @var VKOAuth
     */
    public $oauth;

    /**
     * @var VKApiClient
     */
    public $api;

    /**
     * @var string
     */
    public $clientId;

    /**
     * @var string
     */
    public $clientSecret;

    /**
     * @var string
     */
    public $redirect;

    /**
     * VkAuthService constructor.
     */
    public function __construct()
    {
        $this->oauth = new VKOAuth();
        $this->api =  new VKApiClient();

        $this->clientId = $_ENV['VK_OAUTH2_CLIENT_ID'];
        $this->clientSecret = $_ENV['VK_OAUTH2_CLIENT_SECRET'];
        $this->redirect = $_ENV['VK_REDIRECT_URL'];
    }

    /**
     * @return string
     */
    public function authLink(): string
    {
        $responseType = VKOAuthResponseType::CODE;
        $display = VKOAuthDisplay::PAGE;
        $scopes = [VKOAuthUserScope::WALL, VKOAuthUserScope::GROUPS];

        return $this->oauth->getAuthorizeUrl(
            $responseType,
            $this->clientId,
            $this->redirect,
            $display,
            $scopes,
            'secret_state_code'
        );
    }

    /**
     * @param $code
     * @param array $fields
     * @return object|null
     */
    public function getAccountInfo($code, $fields = ['photo', 'email']): ?object
    {
        try {
            $response = $this->oauth->getAccessToken(
                $this->clientId,
                $this->clientSecret,
                $this->redirect,
                $code
            );
            ['access_token' => $accessToken, 'user_id' => $userId] = $response;

            [$user] = $this->api->users()->get($accessToken, [
                'user_ids'  => [$userId],
                'fields'    => $fields
            ]);

            return (object) $user;

        } catch (\Exception $e){
            return null;
        }
    }
}
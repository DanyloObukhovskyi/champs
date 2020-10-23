<?php


namespace App\Service\Auth;


use Symfony\Component\HttpClient\CurlHttpClient;

class FaceBookAuthService
{
    public $baseUrl = 'https://www.facebook.com/dialog/oauth';

    public $accessTokenUrl = 'https://graph.facebook.com/oauth/access_token';

    public $userUrl = 'https://graph.facebook.com/me';

    public function authLink()
    {
        $params = array(
            'client_id'     => $_ENV['FACEBOOK_OAUTH2_CLIENT_ID'],
            'redirect_uri'  => $_ENV['FACEBOOK_REDIRECT_URL'],
            'scope'         => 'email',
            'response_type' => 'code',
            'state'         => '123'
        );
        return  $this->baseUrl . '?' . urldecode(http_build_query($params));
    }

    public function getAccountInfo($code)
    {
        $params = array(
            'client_id'     => $_ENV['FACEBOOK_OAUTH2_CLIENT_ID'],
            'client_secret' => $_ENV['FACEBOOK_OAUTH2_CLIENT_SECRET'],
            'redirect_uri'  => $_ENV['FACEBOOK_REDIRECT_URL'],
            'code'          => $code
        );
        // Получение access_token
        $client = new CurlHttpClient();
        $data = $client->request('GET', $this->accessTokenUrl . '?' . urldecode(http_build_query($params)));
        $data = $data->getContent();
        $data = json_decode($data, false);

        if (!empty($data->access_token)) {
            $params = array(
                'access_token' => $data->access_token,
                'fields'       => 'id,email,first_name,last_name,picture'
            );
            // Получение данных пользователя
            $info = $client->request('GET', $this->userUrl . '?' . urldecode(http_build_query($params)));
            $info = $info->getContent();
            $info = json_decode($info, false);

            return $info;
        }
        return null;
    }
}
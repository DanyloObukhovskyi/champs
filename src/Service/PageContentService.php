<?php
/**
 * Product: champs.
 * Date: 24/06/2020
 */

namespace App\Service;

use Exception;
use Symfony\Component\HttpClient\CurlHttpClient;
use Symfony\Component\HttpClient\HttpClient;

class PageContentService
{
    public static function getPageContent($url, $count = 1)
    {
        sleep(1);
        $response = static::getContent($url);
        if (is_array($response) && isset($response['error']))
        {
            if($response['status'] == 503 && $count < 2)
            {
                usleep(1500000);
                return static::getPageContent($url, ++$count);
            }
            if($response['status'] == 429 && $count < 2)
            {
                LoggerService::error('BLock by to many Request');
                sleep(10);
                return static::getPageContent($url, ++$count);
            }

            throw new Exception($response['message']);
        }
        return $response->getContent();
    }

    /**
     * @param $url
     * @return array|\Symfony\Contracts\HttpClient\ResponseInterface
     * @throws \Symfony\Contracts\HttpClient\Exception\TransportExceptionInterface
     */
    private static function getContent($url)
    {
        global $kernel;

        $options = [];
        if ($_ENV['ENABLE_PROXY'] === 'true') {
            $proxySettings = $kernel->getContainer()->getParameter('proxy');

            $key = array_rand($proxySettings, 1);
            $proxy = $proxySettings[$key];

            $options['proxy'] = "{$proxy['user']}:{$proxy['password']}@{$proxy['host']}:{$proxy['port']}";
        }

        $message = null;
        try {
            $client = new CurlHttpClient($options);
            $response = $client->request('GET', $url);

            $statusCode = $response->getStatusCode();

        } catch (Exception $exception) {
            $message = $exception->getMessage();
            $statusCode = 404;
        }

        if ($statusCode != 200)
        {
            return ['status' => $statusCode, 'error' => true, 'message' => $message];
        }

        return $response;
    }

}

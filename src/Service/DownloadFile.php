<?php
/**
 * Product: champs.
 * Date: 30/06/2020
 */

namespace App\Service;


use Symfony\Component\HttpClient\HttpClient;

class DownloadFile
{

    /**
     * @return array
     */
    public static function getImageExtList(): array
    {
        return [
            'png' => 'png',
            'jpeg' => 'jpg',
            'jpg' => 'jpg',
            'svg+xml' => 'svg'
        ];
    }

    /**
     * @param string $url
     */
    public static function getImage($url)
    {
        ini_set('max_execution_time', 0);
        global $kernel;

        $ext = static::getFileExt($url);

        $fileResponse = static::getContent($url);
        if (!$fileResponse) {
            return null;
        }

        if (!static::isFileImage($fileResponse['type'])) {
            LoggerService::error("{$url} is not image");
            return null;
        }

        if (!$ext) {
            $ext = static::getExtByContentType($fileResponse['type']);
        }

        if (empty($ext)) {
            LoggerService::error("{$url} wrong extension");
            return null;
        }

        $filename = $fileResponse['name'] . '.' . $ext;
        $uploadDir = $kernel->getProjectDir() . '/public/uploads/images';

        $result = static::saveFile($uploadDir . '/' . $filename, $filename, $fileResponse['content']);
        return $result ? $filename : null;
    }


    /**
     * @param $url
     * @return bool|false|string
     */
    protected static function getFileExt($url)
    {
        $result = false;

        $parseUrl = parse_url($url);

        $extPos = strrpos($parseUrl['path'], '.');
        if ($extPos !== false) {
            $result = substr($parseUrl['path'], $extPos + 1);
        }

        return $result;
    }


    /**
     * @param $url
     * @return array|bool
     * @throws \Symfony\Contracts\HttpClient\Exception\ClientExceptionInterface
     * @throws \Symfony\Contracts\HttpClient\Exception\RedirectionExceptionInterface
     * @throws \Symfony\Contracts\HttpClient\Exception\ServerExceptionInterface
     * @throws \Symfony\Contracts\HttpClient\Exception\TransportExceptionInterface
     */
    protected static function getContent($url)
    {
        $client = HttpClient::create();
        $response = $client->request('GET', $url);

        $statusCode = $response->getStatusCode();

        if (!in_array($statusCode, [200, 301, 302])) {
            LoggerService::warning("{$url} wrong status {$statusCode}");
            return false;
        }

        return [
            'name' => md5(sha1($response->getContent())),
            'content' => $response->getContent(),
            'type' => $response->getHeaders()['content-type'][0]
        ];
    }

    /**
     * @param $type
     * @return bool
     */
    protected static function isFileImage($type): bool
    {
        return (strpos($type, 'image/') !== false);
    }

    /**
     * @param $type
     * @return bool|mixed
     */
    protected static function getExtByContentType($type)
    {
        $extList = static::getImageExtList();

        foreach ($extList as $imageExt => $extValue) {
            if (strpos($type, $imageExt)) {
                return $extValue;
            }
        }

        return false;
    }

    /**
     * @param $filePath
     * @param $filename
     * @param $content
     * @return bool
     */
    protected static function saveFile($filePath, $filename, $content): bool
    {
        if (file_exists($filePath)) {
            return $filename;
        }

        $fp = fopen($filePath, 'wb+');
        if (!$fp) {
            LoggerService::error("Cant create file " . $filename);
            return false;
        }

        fwrite($fp, $content);
        fclose($fp);

        return $filename;
    }
}
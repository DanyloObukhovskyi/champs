<?php


namespace App\Service;

use Symfony\Component\HttpClient\CurlHttpClient;

/**
 * Class YouTubeService
 * @package App\Service
 */
class YouTubeService
{
    private const URL = 'https://www.googleapis.com/youtube/v3/search';
    /**
     * @var string
     */
    public $apiKey;

    /**
     * @var string
     */
    public $chanelId;

    /**
     * YouTubeService constructor.
     * @param null $chanelId
     */
    public function __construct($chanelId = null)
    {
        $this->apiKey = $_ENV['YOUTUBE_API_V3_KEY'];
        if (empty($chanelId)) {
            $chanelId = $_ENV['DEFAULT_YOUTUBE_CHANEL'];
        }
        $this->chanelId = $chanelId;
    }

    /**
     * @param int $count
     * @return string
     * @throws \Symfony\Contracts\HttpClient\Exception\ClientExceptionInterface
     * @throws \Symfony\Contracts\HttpClient\Exception\RedirectionExceptionInterface
     * @throws \Symfony\Contracts\HttpClient\Exception\ServerExceptionInterface
     * @throws \Symfony\Contracts\HttpClient\Exception\TransportExceptionInterface
     */
    public function getVideoList(?int $count = null)
    {
        $options = [
            'key' => $this->apiKey,
            'channelId' => $this->chanelId,
            'part' => 'snippet,id',
            'order' => 'date',
            'type' => 'video',
        ];

        if (isset($count)) {
            $options['maxResults'] = $count;
        }
        $client = new CurlHttpClient();

        $response = $client->request(
            'GET',
            self::URL . '?' . http_build_query($options)
        );
        $content = json_decode($response->getContent(), false);

        return $this->parseVideos($content);
    }

    /**
     * @param $content
     * @return array
     * @throws \Exception
     */
    public function parseVideos(object $content)
    {
        $videos = [];

        if (isset($content->items)) {
            foreach ($content->items as $video) {
                if (isset($video->id->videoId)) {
                    $date = new \DateTime($video->snippet->publishTime);

                    $videos[] = [
                        'title' => $video->snippet->title,
                        'videoId' => $video->id->videoId,
                        'date' => $date,
                    ];
                }
            }
        }
        return $videos;
    }
}
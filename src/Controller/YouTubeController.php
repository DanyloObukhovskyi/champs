<?php

namespace App\Controller;

use App\Service\YouTubeService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/{_locale}", requirements={"locale": "ru"})
 */
class YouTubeController extends AbstractController
{
    public $youTubeService;

    public function __construct()
    {
        $this->youTubeService = new YouTubeService();
    }

    /**
     * @Route("/ajax/youtube/videos/{offset}", name="you_tube_videos")
     */
    public function getVideos($offset)
    {
        $videosCount = $offset + (int)$_ENV['YOUTUBE_CABINET_VIDEOS_PAGINATION'];

        $videos = $this->youTubeService->getVideoList($videosCount);
        $videos = array_slice($videos, $offset);

        return $this->json($videos);
    }
}

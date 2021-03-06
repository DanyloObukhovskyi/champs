<?php


namespace App\Service;


use App\Entity\Teachers;
use App\Entity\TrainerVideo;
use App\Entity\User;
use App\Repository\TrainerVideoRepository;

class TrainerVideoService extends EntityService
{
    public const YOUTUBE_TYPES = [
        'youtube',
        'youtu',
        'youtu.be',
    ];

    public const MAX_COUNT = 10;


    protected $entity = TrainerVideo::class;

    /**
     * @var TrainerVideoRepository
     */
    protected $repository;

    /**
     * @param Teachers $trainer
     * @param $video
     */
    public function create(Teachers $trainer, $video)
    {
        /** @var TrainerVideo $trainerVideo */
        $trainerVideo = new $this->entity;
        $trainerVideo->setTrainer($trainer);
        $trainerVideo->setVideoUrl($video);

        $this->save($trainerVideo);
    }

    /**
     * @param Teachers $trainer
     * @param $video
     */
    public function deleteVideo(Teachers $trainer, $video)
    {
        $trainerVideo = $this->repository->getByTrainerAndVideo($trainer, $video);

        if (isset($trainerVideo)) {
            $this->delete($trainerVideo);
        }
    }

    /**
     * @param Teachers $trainer
     * @return mixed
     */
    public function getByTrainer(Teachers $trainer)
    {
        return $this->repository->getByTrainer($trainer);
    }

    /**
     * @param $videos
     * @return array
     */
    public function decorator($videos)
    {
        $videosUrls = [];

        /** @var TrainerVideo $video */
        foreach ($videos as $video) {
            $videoId = explode('/', $video->getVideoUrl());
            $videoId = end($videoId);

            $videoId = str_replace('watch?v=', '', $videoId);
            $videosUrls[] = [
                'videoId' => $videoId,
                'videoUrl' => $video->getVideoUrl()
            ];
        }
        return $videosUrls;
    }

    /**
     * @param $video
     * @return bool
     */
    public function isYouTubeVideo($video)
    {
        foreach (self::YOUTUBE_TYPES as $type) {
            if (strpos($video, $type) !== false) {
                return true;
            }
        }
        return false;
    }
}
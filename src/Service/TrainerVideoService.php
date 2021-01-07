<?php


namespace App\Service;


use App\Entity\TrainerVideo;
use App\Entity\User;

class TrainerVideoService extends EntityService
{
    public const YOUTUBE_TYPES = [
        'youtube',
        'youtu',
        'youtu.be',
    ];

    public const MAX_COUNT = 10;


    protected $entity = TrainerVideo::class;

    protected $repository;

    /**
     * @param User $trainer
     * @param $video
     */
    public function create(User $trainer, $video)
    {
        /** @var TrainerVideo $trainerVideo */
        $trainerVideo = new $this->entity;
        $trainerVideo->setTrainer($trainer);
        $trainerVideo->setVideoUrl($video);

        $this->save($trainerVideo);
    }

    /**
     * @param User $trainer
     * @param $video
     */
    public function deleteVideo(User $trainer, $video)
    {
        $trainerVideo = $this->repository->getByTrainerAndVideo($trainer, $video);
        if (isset($trainerVideo)) {
            $this->delete($trainerVideo);
        }
    }

    /**
     * @param User $trainer
     * @return mixed
     */
    public function getByTrainer(User $trainer)
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
            $video = explode('/', $video->getVideoUrl());
            $video = end($video);

            $video = str_replace('watch?v=', '', $video);
            $videosUrls[] = $video;
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
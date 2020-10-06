<?php


namespace App\Service;


use App\Entity\TrainerVideo;
use App\Entity\User;

class TrainerVideoService extends EntityService
{
    protected const YOUTUBE_TYPES = [

    ];

    protected $entity = TrainerVideo::class;

    protected $repository;

    public function create(User $trainer, $video)
    {
        /** @var TrainerVideo $trainerVideo */
        $trainerVideo = new $this->entity;
        $trainerVideo->setTrainer($trainer);
        $trainerVideo->setVideoUrl($video);

        $this->save($trainerVideo);
    }

    public function deleteVideo(User $trainer, $video)
    {
        $trainerVideo = $this->repository->getByTrainerAndVideo($trainer, $video);
        if (isset($trainerVideo))
        {
            $this->delete($trainerVideo);
        }
    }

    public function getByTrainer(User $trainer)
    {
        return $this->repository->getByTrainer($trainer);
    }

    public function decorator($videos)
    {
        $videosUrls = [];

        /** @var TrainerVideo $video */
        foreach ($videos as $video)
        {
            $video = explode('/', $video->getVideoUrl());
            $video = end($video);
            
            $video = str_replace('watch?v=', '', $video);
            $videosUrls[] = $video;
        }
        return $videosUrls;
    }
}
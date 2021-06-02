<?php


namespace App\Service\Banner;


use App\Entity\Game;
use App\Entity\TrainerBanner;
use App\Entity\TrainerBannerLink;
use App\Repository\TrainerBannerRepository;
use App\Service\EntityService;

class TrainerBannerService extends EntityService
{
    protected $entity = TrainerBanner::class;

    /**
     * @var TrainerBannerRepository
     */
    protected $repository;

    /**
     * @param Game $game
     * @return TrainerBanner|null
     */
    public function getOneByGame(Game $game)
    {
        return $this->repository->findOneBy([
            'game' => $game
        ]);
    }


    /**
     * @param TrainerBanner $banner
     */
    public function decorate(TrainerBanner $banner)
    {
        $bannerLinks = [];
        $bannerChanels = [];
        /** @var TrainerBannerLink $link */
        foreach ($banner->getLinks() as $link) {
            $bannerLinks[$link->getType()] = $link->getLink();
        }
        /** @var TrainerBannerLink $chanelName */
        foreach ($banner->getChanelName() as $chanelName) {
            $bannerChanels[$chanelName->getType()] = $chanelName->getChanelName();
        }
        return [
            'img' => $banner->getImg(),
            'text' => $banner->getText(),
            'title' => $banner->getTitle(),
            'links' => $bannerLinks,
            'chanelNames' => $bannerChanels
        ];
    }
}
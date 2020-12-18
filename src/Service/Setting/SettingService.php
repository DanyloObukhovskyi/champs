<?php


namespace App\Service\Setting;


use App\Entity\Setting;
use App\Repository\SettingRepository;
use App\Service\EntityService;

class SettingService extends EntityService
{
    public const SOCIAL = [
        'vk',
        'discord',
        'youtube',
        'telegram',
        'zen',
        'twitch',
        'instagram',
    ];

    public const TRAINING_DESCRIPTION = [
        'individual' => [
            'title' => 'trainingIndividualTitle',
            'text' => 'trainingIndividualText',
        ],
        'group' => [
            'title' => 'trainingGroupTitle',
            'text' => 'trainingGroupText',
        ],
        'analytic' => [
            'title' => 'trainingAnalyticsTitle',
            'text' => 'trainingAnalyticsText',
        ],
    ];

    public const TRAINER_BANNER = [
        'title' => 'marketplaceBannerTitle',
        'text' => 'marketplaceBannerText',
        'image' => 'marketplaceBanner'
    ];

    public const TRAINER_BANNER_LINKS = [
        'vk' => 'marketplaceBannerVk',
        'youtube' => 'marketplaceBannerYoutube',
        'telegram' => 'marketplaceBannerTelegram',
        'twitch' => 'marketplaceBannerTwitch'
    ];

    protected $entity = Setting::class;

    /**
     * @var SettingRepository
     */
    protected $repository;

    /**
     * @param $key
     * @return mixed
     */
    public function get($key)
    {
        return $this->repository->getByKey($key);
    }

    /**
     * @return mixed
     */
    public function getSocial()
    {
        $social = $this->repository->getByKeys(self::SOCIAL);

        $socialParse = [];

        /** @var Setting $set */
        foreach ($social as $set)
        {
            $socialParse[$set->getKey()] = [
                'link' => $set->getValue(),
                'title' => $set->getTitle()
            ];
        }

        return $socialParse;
    }
}
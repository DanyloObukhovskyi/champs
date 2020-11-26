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
        'twich',
        'instagram',
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
<?php


namespace App\Service\Setting;


use App\Entity\Setting;
use App\Service\EntityService;

class SettingService extends EntityService
{
    protected $entity = Setting::class;

    protected $repository;

    public function get($key)
    {
        return $this->repository->getByKey($key);
    }
}
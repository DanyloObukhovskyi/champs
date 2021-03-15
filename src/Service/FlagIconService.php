<?php


namespace App\Service;


use App\Entity\FlagIcon;

class FlagIconService extends EntityService
{
    protected $entity = FlagIcon::class;

    protected $repository;

    public function createOrUpdate(array $flag)
    {
        /** @var FlagIcon $flagIcon */
        $flagIcon = $this->repository->getFlagByOrigName($flag['name']);
        $image = DownloadFile::getImage(HLTVService::urlDecorator($flag['url']));

        if (empty($flagIcon)) {
            if (isset($image)) {
                $flagIcon = new $this->entity;
                $flagIcon->setOrigName($flag['name']);
                $flagIcon->setExtension($flag['extension']);
                $flagIcon->setName($image);
            }
        } else {
            if (isset($image)) {
                $flagIcon->setOrigName($flag['name']);
                $flagIcon->setExtension($flag['extension']);
                $flagIcon->setName($image);
            }
        }
        return $this->save($flagIcon);
    }

    public function getFlagByOrigName(string $name)
    {
        return $this->repository->getFlagByOrigName($name);
    }
}
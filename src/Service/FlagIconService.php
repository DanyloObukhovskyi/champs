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

        if (empty($flagIcon)){
            $image = DownloadFile::getImage(HLTVService::urlDecorator($flag['url']));

            if (isset($image))
            {
                $flagIcon = new $this->entity;
                $flagIcon->setOrigName($flag['name']);
                $flagIcon->setExtension($flag['extension']);
                $flagIcon->setName($image);

                $flagIcon = $this->save($flagIcon);
            }
        }
        return $flagIcon;
    }

    public function getFlagByOrigName(string $name)
    {
        return $this->repository->getFlagByOrigName($name);
    }
}
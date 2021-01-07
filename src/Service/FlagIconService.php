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

        if (empty($flagIcon)) {
            $flagIcon = new $this->entity;
            $flagIcon->setOrigName($flag['name']);
            $flagIcon->setExtension($flag['extension']);

            $image = DownloadFile::getImage($flag['url']);
            if (isset($image)) {
                $flagIcon->setName($image);

                $this->entityManager->persist($flagIcon);
                $this->entityManager->flush();
            }
        }
        return $flagIcon;
    }

    public function getFlagByOrigName(string $name)
    {
        return $this->repository->getFlagByOrigName($name);
    }
}
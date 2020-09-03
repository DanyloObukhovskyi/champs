<?php
/**
 * Product: champs.
 * Date: 24/06/2020
 */

namespace App\Service;


use App\Entity\Map;

class MapService extends EntityService
{
    protected $entity = Map::class;

    public function create($name)
    {
        $code = $this->makeCode($name);
        /** @var Map $map */
        $map = $this->getByCode($code);
        if (empty($map))
        {
            /** @var Map $map */
            $map = new $this->entity;
            $map->setName($name)
                ->setCode($code);
        }

        $this->entityManager->persist($map);
        $this->entityManager->flush();

        return $map;
    }

    public function makeCode($value)
    {
        $value = str_replace(' ', '-', trim($value));
        return strtolower(preg_replace('/[^A-Za-z0-9\-]/', '', $value));
    }

    public function getByName($code)
    {
        $match = $this->repository->getByName($code);
        if (isset($match))
        {
            $this->entityManager->persist($match);
            return $match;
        }

        return false;
    }

    public function getByCode($code)
    {
        $match = $this->repository->getByCode($code);
        if (isset($match))
        {
            $this->entityManager->persist($match);
            return $match;
        }

        return false;
    }

    public function updateImage(Map $map, $image)
    {
        if (isset($image) and empty($map->getImage())){
            $image = DownloadFile::getImage($image);

            if (isset($image))
            {
                $map->setImage($image);
            }
        }

        $this->entityManager->persist($map);
        $this->entityManager->flush();

        return $map;
    }
}
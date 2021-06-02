<?php


namespace App\Service\Event;


use App\Entity\EventMapPool;
use App\Entity\Map;
use App\Service\EntityService;
use App\Service\ImageService;
use Doctrine\ORM\EntityManagerInterface;

class EventMapPoolService extends EntityService
{
    protected $entity = EventMapPool::class;

    protected $repository;

    /** @var ImageService */
    protected $imageService;

    public function __construct(EntityManagerInterface $entityManager)
    {
        parent::__construct($entityManager);

        $this->imageService = new ImageService();
    }

    public function create($event, $map)
    {
        $eventMapPool = $this->repository->findByEventAndMap($event, $map);

        if (empty($eventMapPool)) {
            /** @var EventMapPool $eventMapPool */
            $eventMapPool = new $this->entity;
            $eventMapPool->setEvent($event);
            $eventMapPool->setMap($map);

            $this->save($eventMapPool);
        }

        return $eventMapPool;
    }

    public function mapsDecorator($eventMapsPool)
    {
        $maps = [];

        /** @var EventMapPool $eventMapPool */
        foreach ($eventMapsPool as $eventMapPool) {
            /** @var Map $map */
            $map = $eventMapPool->getMap();
            $this->imageService->setImage($map->getImage());

            $maps[] = [
                'image' => $this->imageService->getImagePath(),
                'name' => $map->getName()
            ];
        }
        return $maps;
    }
}
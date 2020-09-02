<?php

namespace App\Repository;

use App\Entity\Event;
use App\Entity\EventShow;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method EventShow|null find($id, $lockMode = null, $lockVersion = null)
 * @method EventShow|null findOneBy(array $criteria, array $orderBy = null)
 * @method EventShow[]    findAll()
 * @method EventShow[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class EventShowRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, EventShow::class);
    }


    public function getCurrent()
    {
        /** @var EventShow $events */
        $event = $this->createQueryBuilder('e')
            ->orderBy('e.id', 'DESC')
            ->where('e.createdAt is not null')
            ->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult();

        if (isset($event)){
            $createdAt = $event->getCreatedAt();

            /** @var EventShow[] $events */
            $events = $this->createQueryBuilder('e')
                ->where("e.createdAt = '$createdAt'")
                ->orderBy('e.id', 'ASC')
                ->getQuery()
                ->getResult();

            return $events;
        }
        return [];
    }

    public function findByEvent(Event $event): ?EventShow
    {
        return $this->createQueryBuilder('e')
            ->andWhere('e.event_id = :event')
            ->setParameter('event', $event->getId())
            ->getQuery()
            ->getOneOrNullResult();
    }
}

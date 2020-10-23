<?php

namespace App\Repository;

use App\Entity\News;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method News|null find($id, $lockMode = null, $lockVersion = null)
 * @method News|null findOneBy(array $criteria, array $orderBy = null)
 * @method News[]    findAll()
 * @method News[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class NewsRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, News::class);
    }

    /**
     * @param int $type
     * @param \Datetime $dateFrom
     * @param \Datetime $dateTo
     * @param string $search
     * @return mixed
     * @throws \Exception
     */
    public function findBySearchForm(int $type, \Datetime $dateFrom, \Datetime $dateTo, string $search)
    {
        $qb = $this->createQueryBuilder("e");

        $from = new \DateTime($dateFrom->format("Y-m-d")." 00:00:00");
        $to   = new \DateTime($dateTo->format("Y-m-d")." 23:59:59");

        $qb
            ->andWhere('e.created_at BETWEEN :from AND :to')
            ->setParameter('from', $from )
            ->setParameter('to', $to);
        if($type != News::NEWS_TYPE_ALL){
            $qb
                ->andWhere('e.type = :val')
                ->setParameter('val', $type);
        }

        if($search != '')
        {
            $qb
                ->andWhere('e.title LIKE :search')
                ->setParameter('search', '%'.$search.'%');
        }

        return $qb->getQuery()->getResult();
    }

    /**
     * @param $tag
     * @param $limit
     * @param $offset
     * @return mixed
     */
    public function getByTag(string $tag, int $limit, int $offset)
    {
        return $this->createQueryBuilder("n")
            ->innerJoin('n.newsTags', 'nt')
            ->orderBy('n.id', 'DESC')
            ->where('nt.title like :tagTitle')
            ->setParameter('tagTitle', "%$tag%")
            ->setFirstResult($offset)
            ->setMaxResults($limit)
            ->getQuery()
            ->getResult();
    }

    /**
     * @param $limit
     * @return mixed
     */
    public function getHotNews(int $limit)
    {
        return $this->createQueryBuilder("n")
            ->orderBy('n.views', 'DESC')
            ->setMaxResults($limit)
            ->getQuery()
            ->getResult();
    }
}

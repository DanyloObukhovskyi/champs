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
     * @param string|null $search
     * @param array $tags
     * @param array $titles
     * @param array $texts
     * @param string|null $dateFrom
     * @param string|null $dateTo
     * @param int $limit
     * @param int $offset
     * @param string $orderField
     * @param string $orderType
     * @return mixed
     * @throws \Exception
     */
    public function getByFilters(
        ?string $search = null,
        array $tags = [],
        array $titles = [],
        array $texts = [],
        string $dateFrom = null,
        string $dateTo = null,
        int $limit,
        int $offset,
        string $orderField = 'id',
        string $orderType = 'DESC'
    )
    {
        $query = $this->createQueryBuilder("n")
            ->orderBy("n.$orderField", $orderType);

        if (!empty($tags)) {
            $query->innerJoin('n.newsTags', 'nt')
                ->andwhere('nt.title IN(:tags)')
                ->setParameter('tags', $tags);
        }
//        else {
//            $query->leftJoin('n.newsTags', 'nt');
//        }
        if (!empty($search)) {
            $query->andWhere('n.title like :search')
                ->orWhere('n.text like :search')
                ->orWhere('n.title like :search')
                ->setParameter('search', "%$search%");
        }
        if(!empty($titles)){
            foreach ($titles as $title) {
                $query->andwhere('n.title like :title')
                    ->setParameter('title', "%$title%");
            }
        }
        if(!empty($texts)){
            foreach ($texts as $text) {
                $query->andwhere('n.text like :text')
                    ->setParameter('text', "%$text%");
            }
        }
        if (!empty($dateFrom)) {
            $from = new \DateTime("$dateFrom 00:00:00");
            $query->andWhere('n.created_at >= :dateFrom')
                ->setParameter('dateFrom', $from);
        }
        if (!empty($dateTo)) {
            $to = new \DateTime("$dateTo 23:59:59");
            $query->andWhere('n.created_at <= :dateTo')
                ->setParameter('dateTo', $to);
        }
        return $query->setFirstResult($offset)
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

    /**
     * @param $game
     * @return mixed
     */
    public function getByGame($game)
    {
        return $this->createQueryBuilder("n")
            ->orderBy('n.created_at', 'DESC')
            ->andWhere('n.game = :game')
            ->setParameter('game', $game)
            ->setMaxResults(6)
            ->getQuery()
            ->getResult();
    }

    public function getTopNews()
    {
        return $this->createQueryBuilder("n")
            ->orderBy('n.date', 'DESC')
            ->andWhere('n.isTop = 1')
            ->setMaxResults(5)
            ->getQuery()
            ->getResult();
    }
}

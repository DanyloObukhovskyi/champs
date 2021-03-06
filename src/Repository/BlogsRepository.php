<?php

namespace App\Repository;

use App\Entity\Blogs;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Blogs|null find($id, $lockMode = null, $lockVersion = null)
 * @method Blogs|null findOneBy(array $criteria, array $orderBy = null)
 * @method Blogs[]    findAll()
 * @method Blogs[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class BlogsRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Blogs::class);
    }

    // /**
    //  * @return Blogs[] Returns an array of Blogs objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('b')
            ->andWhere('b.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('b.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Blogs
    {
        return $this->createQueryBuilder('b')
            ->andWhere('b.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */

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
     * @param mixed $form
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
        string $orderField = 'date',
        string $orderType = 'DESC',
        array $form = null
    )
    {
        $query = $this->createQueryBuilder("n")
            ->orderBy("n.$orderField", $orderType);

        if (!empty($tags)) {
            $query->leftJoin('n.tags', 'nt');
            $query->andwhere('nt.title IN(:tags)')
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
        if(empty($dateFrom)){
            $dateFrom = date('Y-m-d', strtotime('- 1 year'));
        }
        if(empty($dateTo)){
            $dateTo = date('Y-m-d');
        }
        if (!empty($dateFrom) && !empty($dateTo)) {
            $from = new \DateTime("$dateFrom 00:00:00");
            $to = new \DateTime("$dateTo 23:59:59");
            $query->andWhere('n.date BETWEEN :dateFrom AND :dateTo')
                ->setParameter('dateFrom', $from)
                ->setParameter('dateTo', $to);
        } else {
            if (!empty($dateFrom)) {
                $from = new \DateTime("$dateFrom 00:00:00");
                $query->andWhere('n.date >= :dateFrom')
                    ->setParameter('dateFrom', $from);
            }
            if (!empty($dateTo)) {
                $to = new \DateTime("$dateTo 23:59:59");
                $query->andWhere('n.date <= :dateTo')
                    ->setParameter('dateTo', $to);
            }
        }
        if (!empty($dateFrom)) {
            $from = new \DateTime("$dateFrom 00:00:00");
            $query->andWhere('n.date >= :dateFrom')
                ->setParameter('dateFrom', $from);
        }
        if (!empty($dateTo)) {
            $to = new \DateTime("$dateTo 23:59:59");
            $query->andWhere('n.date <= :dateTo')
                ->setParameter('dateTo', $to);
        }

        if(!empty($form)){
            if(isset($form['is_main'])){
                if($form['is_main'] === true){
                    $query->andWhere('n.isTop = 0');
                }
            }
        }

        if($limit !== 0){
            return $query->setFirstResult($offset)
                ->setMaxResults($limit)
                ->getQuery()
                ->getResult();
        } else {
            return $query->getQuery()
                ->getResult();
        }
    }
}

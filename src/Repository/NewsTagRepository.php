<?php

namespace App\Repository;

use App\Entity\NewsTag;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method NewsTag|null find($id, $lockMode = null, $lockVersion = null)
 * @method NewsTag|null findOneBy(array $criteria, array $orderBy = null)
 * @method NewsTag[]    findAll()
 * @method NewsTag[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class NewsTagRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, NewsTag::class);
    }

    public function uniqueAll()
    {
        return $this->createQueryBuilder('n')
            ->select('n.title')
            ->distinct()
            ->getQuery()
            ->getResult();
    }

    public function getCountByTitle(string $title)
    {
        return $this->createQueryBuilder('n')
            ->select('count(n.id)')
            ->where('n.title = :title')
            ->setParameter('title', $title)
            ->getQuery()
            ->getSingleScalarResult();
    }

    public function popularTags()
    {
        $allTags = $this->uniqueAll();

        $tags = [];
        foreach ($allTags as $tag)
        {
            $tags[(integer)$this->getCountByTitle($tag['title'])][] = $tag['title'];
        }
        ksort($tags);
        $tags = array_reverse($tags);

        $result = [];
        foreach ($tags as $tagsTitles) {
            foreach ($tagsTitles as $tagTitle) {
                if (count($result) < 5){
                    $result[] = $tagTitle;
                }
            }
        }
        dd($result);
    }

    // /**
    //  * @return NewsTag[] Returns an array of NewsTag objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('n')
            ->andWhere('n.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('n.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?NewsTag
    {
        return $this->createQueryBuilder('n')
            ->andWhere('n.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}

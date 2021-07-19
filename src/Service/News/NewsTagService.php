<?php


namespace App\Service\News;


use App\Entity\NewsTag;
use App\Service\EntityService;

class NewsTagService extends EntityService
{
    protected $entity = NewsTag::class;

    protected $repository;

    public function popularTags(int $offset)
    {
        $allTags = $this->repository->uniqueAll();

        $tags = [];
        foreach ($allTags as $tag) {
            $tagsCount = (integer)$this->repository->getCountByTitle($tag['title']);

            $tags[$tagsCount][] = $tag['title'];
        }
        ksort($tags);
        $tags = array_reverse($tags);

        $result = [];
        foreach ($tags as $tagsTitles) {
            foreach ($tagsTitles as $tagTitle) {
                if (count($result) < $offset) {
                    $result[] = $tagTitle;
                }
            }
        }
        return $result;
    }

    public function popularNextTags(int $startFrom, int $offset)
    {
        $allTags = $this->repository->uniqueAll();

        $tags = [];

        foreach ($allTags as $tag) {
            $tagsCount = (integer)$this->repository->getCountByTitle($tag['title']);


            $tags[$tagsCount][] = $tag['title'];
        }
        $allTagsCount = $this->repository->getCountAll();
        ksort($tags);
        $tags = array_reverse($tags);

        $resultData = [];
        foreach ($tags as $tagsTitles) {
            foreach ($tagsTitles as $tagTitle) {
                $resultData[] = $tagTitle;
            }
        }
        $data = array_slice($resultData, $startFrom, $offset);
        $result = ['count' => count($allTags), 'data' => $data];
        return $result;
    }
}
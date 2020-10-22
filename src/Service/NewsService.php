<?php


namespace App\Service;


use App\Entity\News;
use App\Entity\NewsTag;

class NewsService extends EntityService
{
    protected $entity = News::class;

    protected $repository;

    public function decorator(News $news)
    {
        $tagsEntities = $news->getTags();
        $tags = [];

        /** @var NewsTag $tagsEntity */
        foreach ($tagsEntities as $tagsEntity)
        {
            $tags[] = [
                'title' => $tagsEntity->getTitle(),
                'color' => $tagsEntity->getColor(),
            ];
        }
        return [
            'id' => $news->getId(),
            'title' => $news->getTitle(),
            'text' => $news->getText(),
            'created_at' => $news->getCreatedAt(),
            'logo' => $news->getLogo(),
            'date' => $news->getDate(),
            'url' => $news->getUrl(),
            'type' => $news->getType(),
            'tags' => $tags
        ];
    }

    /**
     * @return mixed
     */
    public function getRepository()
    {
        return $this->repository;
    }
}
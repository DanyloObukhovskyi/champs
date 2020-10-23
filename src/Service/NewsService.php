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

    /**
     * @param $tag
     * @param $limit
     * @param $offset
     * @return mixed
     */
    public function getByTag($tag, $limit, $offset)
    {
        return $this->repository->getByTag($tag, $limit, $offset);
    }

    /**
     * @param News $news
     * @return mixed
     */
    public function incrementingViews(News $news)
    {
        $news->setViews((int)$news->getViews() + 1);

        return $this->save($news);
    }

    /**
     * @return mixed
     */
    public function getHotNews()
    {
        return $this->repository->getHotNews(10);
    }
}
<?php


namespace App\Service\News;


use App\Entity\News;
use App\Entity\NewsTag;
use App\Service\EntityService;

class NewsService extends EntityService
{
    protected $entity = News::class;

    protected $repository;

    /**
     * @param News $news
     * @return array
     */
    public function decorator(News $news): array
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
            'id'         => $news->getId(),
            'title'      => $news->getTitle(),
            'text'       => $news->getText(),
            'created_at' => $news->getCreatedAt(),
            'logo'       => $news->getLogo(),
            'date'       => $news->getDate(),
            'url'        => $news->getUrl(),
            'type'       => $news->getType(),
            'tags'       => $tags,
            'game'       => $news->getGame()
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
     * @param $request
     * @param $limit
     * @param $offset
     * @return mixed
     */
    public function getByFilters($request,  $limit, $offset)
    {
        $tagsNames = [];

        foreach ($request->tags as $tag){
            $tagsNames[] = $tag->title;
        }

        return $this->repository->getByFilters(
            $tagsNames,
            $request->words,
            $this->parseDate($request->dateFrom),
            $this->parseDate($request->dateTo),
            $limit,
            $offset
        );
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

    /**
     * @param string $date
     * @return string
     */
    public function parseDate(?string $date = null): ?string
    {
        $parseDate= null;

        if (is_string($date) and !empty($date)){
            [$day, $month, $year] = explode('.', $date);
            $day = trim($day);
            $month = trim($month);
            $year = trim($year);

            $parseDate = "$day-$month-$year";
        }
        return $parseDate;
    }

    /**
     * @param $date
     * @return mixed
     */
    public function replaceMonth($date)
    {
        str_replace("January", "Января", $date);
        str_replace("February", "Февраля", $date);
        str_replace("March", "Марта", $date);
        str_replace("April", "Апреля", $date);
        str_replace("May", "Мая", $date);
        str_replace("June", "Июня", $date);
        str_replace("Jule", "Июля", $date);
        str_replace("August", "Августа", $date);
        str_replace("September", "Сентября", $date);
        str_replace("October", "Октября", $date);
        str_replace("November", "Ноября", $date);
        str_replace("December", "Декабря", $date);

        return $date;
    }
}
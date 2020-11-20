<?php


namespace App\Service\News;


use App\Entity\News;
use App\Entity\NewsTag;
use App\Service\EntityService;
use Doctrine\ORM\EntityManagerInterface;

class NewsService extends EntityService
{
    protected $entity = News::class;

    protected $repository;

    protected $newsCommentService;

    public function __construct(EntityManagerInterface $entityManager)
    {
        parent::__construct($entityManager);

        $this->newsCommentService = new NewsCommentService($entityManager);
    }

    /**
     * @param News $news
     * @return array
     */
    public function decorator(News $news): array
    {
        $tags = [];

        /** @var NewsTag $tagsEntity */
        foreach ($news->getTags() as $tagsEntity)
        {
            $tags[] = [
                'title' => $tagsEntity->getTitle(),
            ];
        }
        return [
            'id'         => $news->getId(),
            'title'      => $news->getTitle(),
            'text'       => $news->getText(),
            'created_at' => $news->getCreatedAt(),
            'logo'       => $news->getLogo(),
            'date'       => $news->getDate()->format('m-d H:i'),
            'url'        => $news->getUrl(),
            'type'       => $news->getType(),
            'tags'       => $tags,
            'game'       => $news->getGame(),
            'date_ru'    => self::replaceMonth($news->getDate()->format('d F H:i')),
            'views'      => $news->getViews() ?? 0,
            'comments'   => $this->newsCommentService->decorateComments($news->getComments())
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
    public function getByFilters($request, $limit, $offset)
    {
        return $this->repository->getByFilters(
            $request->tags,
            $request->titles,
            $request->texts,
            $this->parseDate($request->dateFrom ?? null),
            $this->parseDate($request->dateTo ?? null),
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
     * @param object $filters
     * @param int $limit
     * @param int $offset
     * @return mixed
     */
    public function getHotNews($filters = null, int $limit = 10, int $offset = 0)
    {
        return $this->repository->getByFilters(
            $filters->tags ?? [],
            $filters->titles ?? [],
            $filters->texts ?? [],
            $this->parseDate($filters->dateFrom),
            $this->parseDate($filters->dateTo),
            $limit,
            $offset,
            'views'
        );
    }

    /**
     * @param string $date
     * @return string
     */
    public function parseDate($date = null): ?string
    {
        if (is_string($date) and !empty($date)){
            [$day, $month, $year] = explode('.', $date);
            $day = trim($day);
            $month = trim($month);
            $year = trim($year);

            $parseDate = "$day-$month-$year";
        }
        return $parseDate ?? null;
    }

    /**
     * @param $date
     * @return mixed
     */
    public static function replaceMonth($date)
    {
        $date = str_replace("January", "Января", $date);
        $date = str_replace("February", "Февраля", $date);
        $date = str_replace("March", "Марта", $date);
        $date = str_replace("April", "Апреля", $date);
        $date = str_replace("May", "Мая", $date);
        $date = str_replace("June", "Июня", $date);
        $date = str_replace("July", "Июля", $date);
        $date = str_replace("August", "Августа", $date);
        $date = str_replace("September", "Сентября", $date);
        $date = str_replace("October", "Октября", $date);
        $date = str_replace("November", "Ноября", $date);
        $date = str_replace("December", "Декабря", $date);

        return $date;
    }

    /**
     * @return mixed
     */
    public function getMainNews()
    {
        return $this->repository->findBy([], ['date' => 'DESC'], 6, 0);
    }

    public function getByGame($game)
    {
        return $this->repository->getByGame($game);
    }
}
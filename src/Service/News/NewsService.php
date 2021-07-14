<?php


namespace App\Service\News;


use App\Entity\News;
use App\Entity\NewsBookmark;
use App\Entity\NewsLike;
use App\Entity\NewsTag;
use App\Entity\NewsType;
use App\Repository\NewsRepository;
use App\Service\EntityService;
use Ausi\SlugGenerator\SlugGenerator;
use Doctrine\ORM\EntityManagerInterface;

class NewsService extends EntityService
{
    protected $entity = News::class;

    /**
     * @var NewsRepository
     */
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

        $user = $this->getUser();

        /** @var NewsTag $tagsEntity */
        foreach ($news->getTags() as $tagsEntity) {
            $tags[] = [
                'title' => $tagsEntity->getTitle(),
            ];
        }
        $bookmark = false;

        if (isset($user)) {
            $newsBookmark = $this->entityManager->getRepository(NewsBookmark::class)
                ->findOneBy([
                    'user' => $user,
                    'news' => $news
                ]);
            $bookmark = isset($newsBookmark);
        }
        $newsTypeId = $news->getType();
        $type = [];
        if(!empty($newsTypeId)){
            $type = $this->entityManager
                ->getRepository(NewsType::class)
                ->findOneBy(['id' => $newsTypeId]);
        }

        if (empty($news->getUrl())) {
            $generator = new SlugGenerator;

            $news->setUrl($generator->generate($news->getTitle()));
        }

        return [
            'id' => $news->getId(),
            'title' => $news->getTitle(),
            'text' => $news->getText(),
            'created_at' => $news->getCreatedAt(),
            'logo' => $news->getLogo(),
            'date' => $news->getDate()->format('m-d H:i'),
            'url' => $news->getUrl(),
            'type' => $type,
            'tags' => $tags,
            'game' => !empty($news->getGame()) ? $news->getGame() : null,
            'date_ru' => $news->getDate()->format('Y') === date('Y') ? self::replaceMonth($news->getDate()->format('d F H:i')) :  self::replaceMonth($news->getDate()->format('d F Y')),
            'date_ru_msk' => $news->getDate()->format('Y') === date('Y') ? self::replaceMonth($news->getDate()->format('d F H:i')) . ' мск' :  self::replaceMonth($news->getDate()->format('d F Y')),
            'date_ru_with_year' => $news->getDate()->format('Y') === date('Y') ? $news->getDate()->format('d m H_i') : $news->getDate()->format('d m Y'),
            'date_ru_with_year_for_url' => $news->getDate()->format('Y') === date('Y') ? $news->getDate()->format('d m') : $news->getDate()->format('d m Y'),
            'views' => $news->getViews() ?? 0,
            'commentsCount' => count($news->getComments()),
            'bookmark' => $bookmark
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
     * @param $formats
     * @return mixed
     */
    public function getByFilters($request, $limit, $offset, $formats)
    {
        return $this->repository->getByFilters(
            $request->search ?? null,
            $request->tags,
            $formats,
            $request->titles,
            $request->texts,
            $this->parseDate($request->dateFrom ?? null),
            $this->parseDate($request->dateTo ?? null),
            $limit,
            $offset,
            'date',
            'DESC',
            (array)$request
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
            $request->search ?? null,
            $filters->tags ?? [],
            $filters->formats ?? [],
            $filters->titles ?? [],
            $filters->texts ?? [],
            $this->parseDate($filters->dateFrom ?? null),
            $this->parseDate($filters->dateTo ?? null),
            $limit,
            $offset,
            'id',
            'DESC'
        );
    }

    /**
     * @param string $date
     * @return string
     */
    public function parseDate($date = null): ?string
    {
        if (is_string($date) and !empty($date)) {
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

    /**
     * @param $game
     * @return mixed
     */
    public function getByGame($game)
    {
        return $this->repository->getByGame($game);
    }

    /**
     * @param Mews $news
     * @param $type
     * @return mixed
     */
    public function getLikesCount(News $news)
    {
        return $this->entityManager->getRepository(NewsLike::class)->getCount($news);
    }

    public function getTopNews()
    {
        return $this->repository->getTopNews();
    }

    /**
     * @param NewsType $newsType
     * @return array
     */
    public function decoratorForNewsTypes(NewsType $newsType): array
    {
        return [
            'id' => $newsType->getId(),
            'title' => $newsType->getTitle()
        ];
    }

    /**
     * @param News $news
     * @return array
     */
    public function decoratorForHotNews(News $news): array
    {
        $tags = [];

        /** @var NewsTag $tagsEntity */
        foreach ($news->getTags() as $tagsEntity) {
            $tags[] = [
                'title' => $tagsEntity->getTitle(),
            ];
        }

        $newsTypeId = $news->getType();
        $type = [];
        if(!empty($newsTypeId)){
            $type = $this->entityManager
                ->getRepository(NewsType::class)
                ->findOneBy(['id' => $newsTypeId]);
        }

        if (empty($news->getUrl())) {
            $generator = new SlugGenerator;

            $news->setUrl($generator->generate($news->getTitle()));
        }

        return [
            'id' => $news->getId(),
            'title' => $news->getTitle(),
            'date' => $news->getDate()->format('m-d H:i'),
            'url' => $news->getUrl(),
            'type' => $type,
            'tags' => $tags,
            'game' => !empty($news->getGame()) ? $news->getGame() : null,
            'date_ru' => $news->getDate()->format('Y') === date('Y') ? self::replaceMonth($news->getDate()->format('d F H:i')) :  self::replaceMonth($news->getDate()->format('d F Y')),
            'date_ru_msk' => $news->getDate()->format('Y') === date('Y') ? self::replaceMonth($news->getDate()->format('d F H:i')) . ' мск' :  self::replaceMonth($news->getDate()->format('d F Y')),
            'date_ru_with_year' => $news->getDate()->format('Y') === date('Y') ? $news->getDate()->format('d m H_i') : $news->getDate()->format('d m Y'),
            'date_ru_with_year_for_url' => $news->getDate()->format('Y') === date('Y') ? $news->getDate()->format('d m') : $news->getDate()->format('d m Y'),
            'views' => $news->getViews() ?? 0,
            'commentsCount' => count($news->getComments())
        ];
    }

    /**
     * @param News $news
     * @return array
     */
    public function decoratorForMainNews(News $news): array
    {
        $tags = [];

        /** @var NewsTag $tagsEntity */
        foreach ($news->getTags() as $tagsEntity) {
            $tags[] = [
                'title' => $tagsEntity->getTitle(),
            ];
        }

        $newsTypeId = $news->getType();
        $type = [];
        if(!empty($newsTypeId)){
            $type = $this->entityManager
                ->getRepository(NewsType::class)
                ->findOneBy(['id' => $newsTypeId]);
        }

        if (empty($news->getUrl())) {
            $generator = new SlugGenerator;

            $news->setUrl($generator->generate($news->getTitle()));
        }

        return [
            'id' => $news->getId(),
            'title' => $news->getTitle(),
            'text' => mb_strimwidth($news->getText(), 0, 900, "..."),
            'logo' => $news->getLogo(),
            'date' => $news->getDate()->format('m-d H:i'),
            'url' => $news->getUrl(),
            'type' => $type,
            'tags' => $tags,
            'game' => !empty($news->getGame()) ? $news->getGame() : null,
            'date_ru' => $news->getDate()->format('Y') === date('Y') ? self::replaceMonth($news->getDate()->format('d F H:i')) :  self::replaceMonth($news->getDate()->format('d F Y')),
            'date_ru_msk' => $news->getDate()->format('Y') === date('Y') ? self::replaceMonth($news->getDate()->format('d F H:i')) . ' мск' :  self::replaceMonth($news->getDate()->format('d F Y')),
            'date_ru_with_year' => $news->getDate()->format('Y') === date('Y') ? $news->getDate()->format('d m H_i') : $news->getDate()->format('d m Y'),
            'date_ru_with_year_for_url' => $news->getDate()->format('Y') === date('Y') ? $news->getDate()->format('d m') : $news->getDate()->format('d m Y'),
            'views' => $news->getViews() ?? 0,
            'commentsCount' => count($news->getComments())
        ];
    }

    /**
     * @param News $news
     * @return array
     */
    public function decoratorForAllNews(News $news): array
    {
        $tags = [];

        /** @var NewsTag $tagsEntity */
        foreach ($news->getTags() as $tagsEntity) {
            $tags[] = [
                'title' => $tagsEntity->getTitle(),
            ];
        }

        $newsTypeId = $news->getType();
        $type = [];
        if(!empty($newsTypeId)){
            $type = $this->entityManager
                ->getRepository(NewsType::class)
                ->findOneBy(['id' => $newsTypeId]);
        }

        if (empty($news->getUrl())) {
            $generator = new SlugGenerator;

            $news->setUrl($generator->generate($news->getTitle()));
        }

        return [
            'id' => $news->getId(),
            'title' => $news->getTitle(),
            'text' => mb_strimwidth($news->getText(), 0, 900, "..."),
            'logo' => $news->getLogo(),
            'date' => $news->getDate()->format('m-d H:i'),
            'url' => $news->getUrl(),
            'type' => $type,
            'tags' => $tags,
            'game' => !empty($news->getGame()) ? $news->getGame() : null,
            'date_ru' => $news->getDate()->format('Y') === date('Y') ? self::replaceMonth($news->getDate()->format('d F H:i')) :  self::replaceMonth($news->getDate()->format('d F Y')),
            'date_ru_msk' => $news->getDate()->format('Y') === date('Y') ? self::replaceMonth($news->getDate()->format('d F H:i')) . ' мск' :  self::replaceMonth($news->getDate()->format('d F Y')),
            'date_ru_with_year' => $news->getDate()->format('Y') === date('Y') ? $news->getDate()->format('d m H_i') : $news->getDate()->format('d m Y'),
            'date_ru_with_year_for_url' => $news->getDate()->format('Y') === date('Y') ? $news->getDate()->format('d m') : $news->getDate()->format('d m Y'),
            'views' => $news->getViews() ?? 0,
            'commentsCount' => count($news->getComments())
        ];
    }

    /**
     * @param News $news
     * @return array
     */
    public function decoratorForJsonNews(News $news): array
    {
        $tags = [];

        /** @var NewsTag $tagsEntity */
        foreach ($news->getTags() as $tagsEntity) {
            $tags[] = [
                'title' => $tagsEntity->getTitle(),
            ];
        }

        $newsTypeId = $news->getType();
        $type = [];
        if(!empty($newsTypeId)){
            $type = $this->entityManager
                ->getRepository(NewsType::class)
                ->findOneBy(['id' => $newsTypeId]);
        }

        if (empty($news->getUrl())) {
            $generator = new SlugGenerator;

            $news->setUrl($generator->generate($news->getTitle()));
        }

        return [
            'id' => $news->getId(),
            'title' => $news->getTitle(),
            'text' => '',
            'logo' => $news->getLogo(),
            'date' => $news->getDate()->format('m-d H:i'),
            'url' => $news->getUrl(),
            'type' => $type,
            'tags' => $tags,
            'game' => !empty($news->getGame()) ? $news->getGame() : null,
            'date_ru' => $news->getDate()->format('Y') === date('Y') ? self::replaceMonth($news->getDate()->format('d F H:i')) :  self::replaceMonth($news->getDate()->format('d F Y')),
            'date_ru_msk' => $news->getDate()->format('Y') === date('Y') ? self::replaceMonth($news->getDate()->format('d F H:i')) . ' мск' :  self::replaceMonth($news->getDate()->format('d F Y')),
            'date_ru_with_year' => $news->getDate()->format('Y') === date('Y') ? $news->getDate()->format('d m H_i') : $news->getDate()->format('d m Y'),
            'date_ru_with_year_for_url' => $news->getDate()->format('Y') === date('Y') ? $news->getDate()->format('d m') : $news->getDate()->format('d m Y'),
            'views' => $news->getViews() ?? 0,
            'commentsCount' => count($news->getComments())
        ];
    }

}
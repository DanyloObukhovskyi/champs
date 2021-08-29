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

    /**
    * @param News $news
    * @return array
    */
    public function decoratorForRssNews(News $news, $url): array
    {
        $tags = [];

        /** @var NewsTag $tagsEntity */
        foreach ($news->getTags() as $tagsEntity) {
            $tags[] = [
                'title' => $tagsEntity->getTitle(),
            ];
        }

        $newsTypeId = $news->getType();
        $type = '';
        if(!empty($newsTypeId)){
            /** @var NewsType $type */
            $type = $this->entityManager
                ->getRepository(NewsType::class)
                ->findOneBy(['id' => $newsTypeId]);
            $type = $type->getTitle();
        }
        if (empty($news->getUrl())) {
            $generator = new SlugGenerator;

            $news->setUrl($generator->generate($news->getTitle()));
        }

        $game = !empty($news->getGame()) ? $news->getGame() : null;
        $date = $news->getDate()->format('Y') === date('Y') ? $news->getDate()->format('d m') : $news->getDate()->format('d m Y');
        $slug = $this->getSlug($type, $game, $news->getTitle(), $date, $news->getUrl());

        $content = '<header><h1>'. $news->getTitle() .'</h1><figure><img src="'. $url .'/images/temp/news/'. $news->getLogo() .'"></figure></header>';
        return [
            'title' => $news->getTitle(),
            'description' => mb_strimwidth(htmlspecialchars(trim(strip_tags($news->getText()))), 0, 900, "..."),
            'link' => $url . '/ru/novosti/'. $news->getId() .'/'. $slug,
            'category' => $type,
            'author' => 'editor@champs.pro (Champs.pro)',
            'pubDate' => $news->getDate()->format('D, d M Y H:i:s'). ' GMT',
            'content' => mb_strimwidth($content.$news->getText(), 0, 9000, "...")
        ];
    }

    public function getSlug($type, $game, $title, $date, $slug)
    {
        $newsUrl = '';

        try {
            $newsType = $this->sanitize($type);
            $game = !empty($game) ? $this->sanitize($game) : null;
            $title =  $this->sanitize($title);
            $date = $this->sanitize($date);
            if(empty($newsType) || empty($game) || empty($title) || empty($date)){
                $newsUrl = $slug;
            } else {
                $newsUrl = $newsType.'/'.$game.'/'.$title.'-'.$date;
            }
        } catch (\Exception $e){
            $title =  $this->sanitize($title);
            $newsUrl = $title;
        }

        return $newsUrl;
    }

    public function utf8_uri_encode( $utf8_string, $length = 0 ) {
        $unicode = '';
        $values = array();
        $num_octets = 1;
        $unicode_length = 0;

        $string_length = strlen( $utf8_string );
        for ($i = 0; $i < $string_length; $i++ ) {

            $value = ord( $utf8_string[ $i ] );

            if ( $value < 128 ) {
                if ( $length && ( $unicode_length >= $length ) )
                    break;
                $unicode .= chr($value);
                $unicode_length++;
            } else {
                if ( count( $values ) == 0 ) $num_octets = ( $value < 224 ) ? 2 : 3;

                $values[] = $value;

                if ( $length && ( $unicode_length + ($num_octets * 3) ) > $length )
                    break;
                if ( count( $values ) == $num_octets ) {
                    if ($num_octets == 3) {
                        $unicode .= '%' . dechex($values[0]) . '%' . dechex($values[1]) . '%' . dechex($values[2]);
                        $unicode_length += 9;
                    } else {
                        $unicode .= '%' . dechex($values[0]) . '%' . dechex($values[1]);
                        $unicode_length += 6;
                    }

                    $values = array();
                    $num_octets = 1;
                }
            }
        }

        return $unicode;
    }


    public function seems_utf8($str) {
        $length = strlen($str);
        for ($i=0; $i < $length; $i++) {
            $c = ord($str[$i]);
            if ($c < 0x80) $n = 0; # 0bbbbbbb
            elseif (($c & 0xE0) == 0xC0) $n=1; # 110bbbbb
            elseif (($c & 0xF0) == 0xE0) $n=2; # 1110bbbb
            elseif (($c & 0xF8) == 0xF0) $n=3; # 11110bbb
            elseif (($c & 0xFC) == 0xF8) $n=4; # 111110bb
            elseif (($c & 0xFE) == 0xFC) $n=5; # 1111110b
            else return false; # Does not match any model
            for ($j=0; $j<$n; $j++) { # n bytes matching 10bbbbbb follow ?
                if ((++$i == $length) || ((ord($str[$i]) & 0xC0) != 0x80))
                    return false;
            }
        }
        return true;
    }


    public function sanitize($title) {
        $title = transliterator_transliterate('Any-Latin; Latin-ASCII; [\u0100-\u7fff] remove', $title);
        $title = strip_tags($title);
        // Preserve escaped octets.
        $title = preg_replace('|%([a-fA-F0-9][a-fA-F0-9])|', '---$1---', $title);
        // Remove percent signs that are not part of an octet.
        $title = str_replace('%', '', $title);
        // Restore octets.
        $title = preg_replace('|---([a-fA-F0-9][a-fA-F0-9])---|', '%$1', $title);

        if ($this->seems_utf8($title)) {
            if (function_exists('mb_strtolower')) {
                $title = mb_strtolower($title, 'UTF-8');
            }
            $title = $this->utf8_uri_encode($title, 200);
        }

        $title = strtolower($title);
        $title = preg_replace('/&.+?;/', '', $title); // kill entities
        $title = str_replace('.', '-', $title);
        $title = preg_replace('/[^%a-z0-9 _-]/', '', $title);
        $title = preg_replace('/\s+/', '-', $title);
        $title = preg_replace('|-+|', '-', $title);
        $title = trim($title, '-');

        return $title;
    }
}
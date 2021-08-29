<?php


namespace App\Service\Blog;


use App\Entity\BlogLikes;
use App\Entity\Blogs;
use App\Entity\BlogTags;
use App\Entity\BlogTypes;
use App\Entity\BlogTypeAttr;
use App\Repository\BlogsRepository;
use App\Service\EntityService;
use Ausi\SlugGenerator\SlugGenerator;
use Doctrine\ORM\EntityManagerInterface;

class BlogService extends EntityService
{
    protected $entity = Blogs::class;

    /**
     * @var BlogsRepository
     */
    protected $repository;


    public function __construct(EntityManagerInterface $entityManager)
    {
        parent::__construct($entityManager);
    }

    /**
     * @param Blogs $blogs
     * @return array
     */
    public function decorator(Blogs $blogs): array
    {
        $tags = [];

        $user = $this->getUser();

        $bookmark = false;

        $blogTypeId = $blogs->getType();
        $type = [];

        if(!empty($blogTypeId)){
            $type = $this->entityManager
                ->getRepository(BlogTypes::class)
                ->findOneBy(['id' => $blogTypeId]);
        }

        $generator = new SlugGenerator;

        $blogs->setUrl($generator->generate($blogs->getTitle()));

        return [
            'id' => $blogs->getId(),
            'title' => $blogs->getTitle(),
            'text' => $blogs->getText(),
            'created_at' => $blogs->getCreatedAt(),
            'logo' => $blogs->getLogo(),
            'date' => $blogs->getDate()->format('m-d H:i'),
            'url' => $blogs->getUrl(),
            'type' => $type,
            'tags' => $tags,
            'game' => !empty($blogs->getGame()) ? $blogs->getGame() : null,
            'date_ru' => $blogs->getDate()->format('Y') === date('Y') ? self::replaceMonth($blogs->getDate()->format('d F H:i')) :  self::replaceMonth($blogs->getDate()->format('d F Y')),
            'date_ru_msk' => $blogs->getDate()->format('Y') === date('Y') ? self::replaceMonth($blogs->getDate()->format('d F H:i')) . ' мск' :  self::replaceMonth($blogs
                ->getDate()->format('d F Y')),
            'date_ru_with_year' => $blogs->getDate()->format('Y') === date('Y') ? $blogs->getDate()->format('d m H_i') : $blogs->getDate()->format('d m Y'),
            'date_ru_with_year_for_url' => $blogs->getDate()->format('Y') === date('Y') ? $blogs->getDate()->format('d m') : $blogs->getDate()->format('d m Y'),
            'views' => $blogs->getViews() ?? 0,
            'commentsCount' => count($blogs->getComments()),
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
    public function getByFilters($request, $limit, $offset)
    {
        return $this->repository->getByFilters(
            $request->search ?? null,
            $request->tags,
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


//    /**
//     * @param News $news
//     * @return mixed
//     */
//    public function incrementingViews(Blogs $blogs)
//    {
//        $blogs->setViews((int)$blogs->getViews() + 1);
//
//        return $this->save($blogs);
//    }

    /**
     * @param object $filters
     * @param int $limit
     * @param int $offset
     * @return mixed
     */
    public function getHotBlogs($filters = null, int $limit = 10, int $offset = 0)
    {
        return $this->repository->getByFilters(
            $request->search ?? null,
            $filters->tags ?? [],
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
    public function getMainBlogs()
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

    public function getTopBlogs()
    {
        return $this->repository->getTopBlogs();
    }

    /**
     * @param BlogTypes $blogType
     * @return array
     */
    public function decoratorForBlogsTypes(BlogTypes $blogType): array
    {
        return [
            'id' => $blogType->getId(),
            'title' => $blogType->getTitle()
        ];
    }

    /**
     * @param Blogs $blogs
     * @return array
     */
    public function decoratorForHotBlogs(Blogs $blogs): array
    {
        $tags = [];

//        /** @var NewsTag $tagsEntity */
//        foreach ($blogs->getTags() as $tagsEntity) {
//            $tags[] = [
//                'title' => $tagsEntity->getTitle(),
//            ];
//        }

        $blogsTypeId = $blogs->getType();
        $type = [];
        if(!empty($blogsTypeId)){
            $type = $this->entityManager
                ->getRepository(BlogTypes::class)
                ->findOneBy(['id' => $blogsTypeId]);
        }

        return [
            'id' => $blogs->getId(),
            'title' => $blogs->getTitle(),
            'date' => $blogs->getDate()->format('m-d H:i'),
            'url' => $blogs->getUrl(),
            'type' => $type,
            'tags' => $tags,
            'game' => !empty($blogs->getGame()) ? $blogs->getGame() : null,
            'date_ru' => $blogs->getDate()->format('Y') === date('Y') ? self::replaceMonth($blogs->getDate()->format('d F H:i')) :  self::replaceMonth($blogs->getDate()->format('d F Y')),
            'date_ru_msk' => $blogs->getDate()->format('Y') === date('Y') ? self::replaceMonth($blogs->getDate()->format('d F H:i')) . ' мск' :  self::replaceMonth($blogs->getDate()->format('d F Y')),
            'date_ru_with_year' => $blogs->getDate()->format('Y') === date('Y') ? $blogs->getDate()->format('d m H_i') : $blogs->getDate()->format('d m Y'),
            'date_ru_with_year_for_url' => $blogs->getDate()->format('Y') === date('Y') ? $blogs->getDate()->format('d m') : $blogs->getDate()->format('d m Y'),
            'views' => $blogs->getViews() ?? 0,
            'commentsCount' => count($blogs->getComments())
        ];
    }

    /**
     * @param Blogs $blog
     * @return array
     */
    public function decoratorForAllBlogs(Blogs $blog): array
    {
        $tags = [];

        /** @var BlogTags $tagsEntity */
        foreach ($blog->getTags() as $tagsEntity) {
            $tags[] = [
                'title' => $tagsEntity->getTitle(),
            ];
        }

        return [
            'id' => $blog->getId(),
            'title' => $blog->getTitle(),
            'logo' => $blog->getLogo(),
            'date' => $blog->getDate()->format('m-d H:i'),
            'tags' => $tags,
            'status' => $blog->getStatus(),
            'status_name' => Blogs::TYPES[$blog->getStatus()],
            'text' => $blog->getText(),
            'gameBlog' => !empty($blog->getGame()) ? $blog->getGame() : null,
            'game' => !empty($blog->getGame()) ? $blog->getGame()->getName() : null,
            'date_ru' => $blog->getDate()->format('Y') === date('Y') ? self::replaceMonth($blog->getDate()->format('d F H:i')) :  self::replaceMonth($blog->getDate()->format('d F Y')),
            'date_ru_msk' => $blog->getDate()->format('Y') === date('Y') ? self::replaceMonth($blog->getDate()->format('d F H:i')) . ' мск' :  self::replaceMonth($blog->getDate()->format('d F Y')),
            'date_ru_with_year' => $blog->getDate()->format('Y') === date('Y') ? $blog->getDate()->format('d m H_i') : $blog->getDate()->format('d m Y'),
            'date_ru_with_year_for_url' => $blog->getDate()->format('Y') === date('Y') ? $blog->getDate()->format('d m') : $blog->getDate()->format('d m Y'),
            'views' => $blog->getViews() ?? 0,
            'username' => $blog->getUser()->getNickname(),
            'user_logo' => $blog->getUser()->getPhoto(),
            'commentsCount' => count($blog->getBlogComments()),
            'code' => !empty($blog->getGame()) ? $blog->getGame()->getCode() : null
        ];
    }

    /**
     * @param Blogs $blogs
     * @return array
     */
    public function decoratorForJsonBlogs(Blogs $blogs): array
    {
        $tags = [];

//        /** @var NewsTag $tagsEntity */
//        foreach ($blogs->getTags() as $tagsEntity) {
//            $tags[] = [
//                'title' => $tagsEntity->getTitle(),
//            ];
//        }

        $blogsTypeId = $blogs->getType();
        $type = [];
        if(!empty($blogsTypeId)){
            $type = $this->entityManager
                ->getRepository(BlogTypes::class)
                ->findOneBy(['id' => $blogsTypeId]);
        }

        return [
            'id' => $blogs->getId(),
            'title' => $blogs->getTitle(),
            'date' => $blogs->getDate()->format('m-d H:i'),
            'url' => $blogs->getUrl(),
            'type' => $type,
            'tags' => $tags,
            'status' => $blogs->getStatus(),
            'game' => !empty($blogs->getGame()) ? $blogs->getGame() : null,
            'date_ru' => $blogs->getDate()->format('Y') === date('Y') ? self::replaceMonth($blogs->getDate()->format('d F H:i')) :  self::replaceMonth($blogs->getDate()->format('d F Y')),
            'date_ru_msk' => $blogs->getDate()->format('Y') === date('Y') ? self::replaceMonth($blogs->getDate()->format('d F H:i')) . ' мск' :  self::replaceMonth($blogs->getDate()->format('d F Y')),
            'date_ru_with_year' => $blogs->getDate()->format('Y') === date('Y') ? $blogs->getDate()->format('d m H_i') : $blogs->getDate()->format('d m Y'),
            'date_ru_with_year_for_url' => $blogs->getDate()->format('Y') === date('Y') ? $blogs->getDate()->format('d m') : $blogs->getDate()->format('d m Y'),
            'views' => $blogs->getViews() ?? 0,
            'commentsCount' => count($blogs->getComments())
        ];
    }

    /**
     * @param Blogs $blog
     * @return mixed
     */
    public function incrementingViews(Blogs $blog)
    {
        $blog->setViews((int)$blog->getViews() + 1);

        return $this->save($blog);
    }

    /**
     * @param Blogs $blog
     * @param $type
     * @return mixed
     */
    public function getLikesCount(Blogs $blog)
    {
        return $this->entityManager->getRepository(BlogLikes::class)->getCount($blog);
    }

    /**
     * @param Blogs $blogs
     * @return array
     */
    public function decoratorForRssNews(Blogs $blogs, $url): array
    {
        $tags = [];

        /** @var BlogTags $tagsEntity */
        foreach ($blogs->getTags() as $tagsEntity) {
            $tags[] = [
                'title' => $tagsEntity->getTitle(),
            ];
        }

        if (empty($url)) {
            $generator = new SlugGenerator;

            $url = $generator->generate($blogs->getTitle());
        }

        $game = !empty($blogs->getGame()) ? $blogs->getGame() : null;
        $date = $blogs->getDate()->format('Y') === date('Y') ? $blogs->getDate()->format('d m') : $blogs->getDate()->format('d m Y');
        $slug = $this->getSlug($game, $blogs->getTitle(), $date, '');

        $content = '<header><h1>'. $blogs->getTitle() .'</h1><figure><img src="'. $url .'/uploads/blogs/'. $blogs->getLogo() .'"></figure></header>';
        return [
            'title' => $blogs->getTitle(),
            'description' => mb_strimwidth(htmlspecialchars(trim(strip_tags($blogs->getText()))), 0, 900, "..."),
            'link' => $url . '/ru/blogs/'. $blogs->getId() .'/'. $slug,
            'category' => 'blog',
            'author' => ''. $blogs->getUser()->getEmail() .' ('. $blogs->getUser()->getNickname() .')',
            'pubDate' => $blogs->getDate()->format('D, d M Y H:i:s'). ' GMT',
            'content' => mb_strimwidth(htmlspecialchars($content.$blogs->getText()), 0, 900, "...")
        ];
    }

    public function getSlug($game, $title, $date, $slug)
    {
        $newsUrl = '';

        try {
            $game = !empty($game) ? $this->sanitize($game) : null;
            $title =  $this->sanitize($title);
            $date = $this->sanitize($date);
            if(empty($game) || empty($title) || empty($date)){
                $newsUrl = $slug;
            } else {
                $newsUrl = $game.'/'.$title.'-'.$date;
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
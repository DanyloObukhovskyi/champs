<?php


namespace App\Service\News;


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
            'text' => $blog->getText(),
            'game' => !empty($blog->getGame()) ? $blog->getGame()->getName() : null,
            'date_ru' => $blog->getDate()->format('Y') === date('Y') ? self::replaceMonth($blog->getDate()->format('d F H:i')) :  self::replaceMonth($blog->getDate()->format('d F Y')),
            'date_ru_msk' => $blog->getDate()->format('Y') === date('Y') ? self::replaceMonth($blog->getDate()->format('d F H:i')) . ' мск' :  self::replaceMonth($blog->getDate()->format('d F Y')),
            'date_ru_with_year' => $blog->getDate()->format('Y') === date('Y') ? $blog->getDate()->format('d m H_i') : $blog->getDate()->format('d m Y'),
            'date_ru_with_year_for_url' => $blog->getDate()->format('Y') === date('Y') ? $blog->getDate()->format('d m') : $blog->getDate()->format('d m Y'),
            'views' => $blog->getViews() ?? 0,
            'username' => $blog->getUser()->getName() . ' ' . $blog->getUser()->getFamily(),
            'user_logo' => $blog->getUser()->getPhoto()
//            'commentsCount' => count($blogs->getComments())
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
            'game' => !empty($blogs->getGame()) ? $blogs->getGame() : null,
            'date_ru' => $blogs->getDate()->format('Y') === date('Y') ? self::replaceMonth($blogs->getDate()->format('d F H:i')) :  self::replaceMonth($blogs->getDate()->format('d F Y')),
            'date_ru_msk' => $blogs->getDate()->format('Y') === date('Y') ? self::replaceMonth($blogs->getDate()->format('d F H:i')) . ' мск' :  self::replaceMonth($blogs->getDate()->format('d F Y')),
            'date_ru_with_year' => $blogs->getDate()->format('Y') === date('Y') ? $blogs->getDate()->format('d m H_i') : $blogs->getDate()->format('d m Y'),
            'date_ru_with_year_for_url' => $blogs->getDate()->format('Y') === date('Y') ? $blogs->getDate()->format('d m') : $blogs->getDate()->format('d m Y'),
            'views' => $blogs->getViews() ?? 0,
            'commentsCount' => count($blogs->getComments())
        ];
    }

}
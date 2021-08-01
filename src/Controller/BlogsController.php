<?php

namespace App\Controller;

use App\Entity\Blogs;
use App\Entity\BlogTypes;
use App\Entity\User;
use App\Service\Seo\SeoService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use App\Service\News\BlogService;

/**
 * @Route("/{_locale}", requirements={"locale": "ru"})
 */
class BlogsController extends AbstractController
{

    /**
     * @var EntityManagerInterface
     */
    public $entityManager;

    /**
     * @var SeoService
     */
    public $seoService;

    /**
     * @var BlogService
     */
    public $blogService;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;

        $this->blogService = new blogService($entityManager);

        $this->seoService = new SeoService($entityManager);
    }

    /**
     * @Route("/blogs", name="blogs")
     */
    public function index(Request $request): Response
    {
        $seoSettings = $this->seoService->getSeo('contact_index');
        $link = $request->getSchemeAndHttpHost() . $request->getBasePath();

        return $this->render('templates/blogs/index.html.twig', [
            'heading_type' => $seoSettings['heading_type'],
            'heading' => $seoSettings['heading'],
            'title' => 'Блоги',
            'description' => $seoSettings['description'],
            'keywords' => $seoSettings['keywords'],
            'meta_tags' => $seoSettings['meta'],
            'link' => $link,
            'router' => 'blog']);
    }

    /**
     * @Route("/hot/blogs/{offset}")
     */
    public function getHotBlogs(Request $request, $offset = 0)
    {
        $filters = json_decode($request->getContent(), false);

        $newsCollect = $this->blogService->getHotBlogs($filters, 0, $offset);
        $hotNews = [];

        /** @var News $newsEntity */
        foreach ($newsCollect as $newsEntity) {
            $hotNews[] = $this->newsService->decoratorForHotBlogs($newsEntity);
        }
        return $this->json($hotNews);
    }

    /**
     * @Route("/ajax/blogs/{offset}", name="blogs.ajax", defaults={"offset" = 0})
     */
    public function getBlogs(Request $request, $offset = 0)
    {
        $request = json_decode($request->getContent(), false);

        $formats = [];
        if (!empty($request->formats)) {
            $allFormats = $this->entityManager
                ->getRepository(BlogTypes::class)
                ->findBy(['title' => $request->formats]);
            if (!empty($allFormats)) {
                foreach ($allFormats as $format) {
                    $formats[] = $format->getId();
                }
            }
        }

        $blogEntities = $this->blogService->getByFilters($request, 10, $offset, $formats);

        $blogs = [];
        foreach ($blogEntities as $blogEntity) {
            $blogs[] = $this->blogService->decoratorForAllBlogs($blogEntity);
        }
        return $this->json($blogs);
    }

    /**
     * @Route("/blogs/user", name="blog_user")
     */
    public function getBlogByUser(Request $request)
    {
        /** @var User $user */
        $user = $this->getUser();
        $data = json_decode($request->getContent(), false);

        if (!$user->getIsTrainer()) {
            $blogs = $this->getDoctrine()
                ->getRepository(Blogs::class)
                ->findByStudentId($user->getId());
        } else {
            $blogs = $this->getDoctrine()
                ->getRepository(Blogs::class)
                ->findByTrainerId($user->getId());
        }
//        $parseLessons = $this->decorateLessons($lessons, $user, $data->timezone, $translator);

        return $this->json('');
    }

    /**
     * @Route("/createBlog", name="createBlog")
     */
    public function createBlog(Request $request): Response
    {
        $seoSettings = $this->seoService->getSeo('contact_index');
        $link = $request->getSchemeAndHttpHost() . $request->getBasePath();

        return $this->render('templates/blogs/create.html.twig', [
            'heading_type' => $seoSettings['heading_type'],
            'heading' => $seoSettings['heading'],
            'title' => 'Создать блог',
            'description' => $seoSettings['description'],
            'keywords' => $seoSettings['keywords'],
            'meta_tags' => $seoSettings['meta'],
            'link' => $link,
            'router' => 'blog']);
    }
}

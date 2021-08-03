<?php

namespace App\Controller;

use App\Entity\Blogs;
use App\Entity\BlogTags;
use App\Entity\BlogTypes;
use App\Entity\Game;
use App\Entity\User;
use App\Service\Seo\SeoService;
use Carbon\Carbon;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use App\Service\News\BlogService;
use Symfony\Component\Validator\Constraints\Image;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Contracts\Translation\TranslatorInterface;

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

    public function __construct(
        EntityManagerInterface $entityManager,
        TranslatorInterface $translator,
        ValidatorInterface $validator
    )
    {
        $this->entityManager = $entityManager;

        $this->blogService = new blogService($entityManager);

        $this->seoService = new SeoService($entityManager);

        $this->translator = $translator;
        $this->validator = $validator;
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
//        dd($filters);
//        $newsCollect = $this->blogService->getHotBlogs($filters, 0, $offset);
//        $hotNews = [];
//
//        /** @var News $newsEntity */
//        foreach ($newsCollect as $newsEntity) {
//            $hotNews[] = $this->newsService->decoratorForHotBlogs($newsEntity);
//        }
//        return $this->json($hotNews);
        return $this->json('');
    }

    /**
     * @Route("/ajax/blogs/{offset}", name="blogs.ajax", defaults={"offset" = 0})
     */
    public function getBlogs(Request $request, $offset = 0)
    {
        $request = json_decode($request->getContent(), false);

        $blogEntities = $this->blogService->getByFilters($request, 10, $offset);

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
     * @Route("/blog/{id}/{format}/{game}/{title}", name="blogs_view_single")
     */
    public function view($id, $format, $game, $title, Request $request)
    {
        /** @var Blogs $blog */
        $blog = $this->entityManager
            ->getRepository(Blogs::class)
            ->find($id);

        if (!$blog) {
            return $this->redirectToRoute('blogs');
        }

        $this->blogService->incrementingViews($blog);

        $description = strip_tags($blog->getText());

        $link = $request->getSchemeAndHttpHost().$request->getBasePath();

        return $this->render('templates/blogs/blogs.view.html.twig', [
            'date' => $blog->getDate()->format('Y-m-d H:i:s'),
            'link' => $link,
            'description' => $description,
            'blogsId' => $id,
            'blog' => $blog,
            'router' => 'news',
        ]);
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

    /**
     * @Route("/ajax/create/blog", name="createBlogFromAjax")
     */
    public function createBlogFromAjax(Request $request): Response
    {
        /** @var User $user */
        $user = $this->getUser();

        $data = (object)$request->request->all();

        $createdBlog = [];

        if(!empty($data)){
            $file = $request->files->get('image');
            $tags = explode(',', $data->tags);

            if (!empty($file)) {
                $result = $this->validationAndUploadImage($file, $user);

                if (!empty($result['error'])) {
                    $errors['avatar'] = $result['error'];
                } else {
                    $data->image = $result['filename'];
                }
            }

            /** @var Game $gameEntity */
            $gameEntity = $this->entityManager
                ->getRepository(Game::class)
                ->findOneBy([
                    'code' => $data->game
                ]);

            $blog = new Blogs();
            $blog->setGame($gameEntity);
            $blog->setUser($user);
            $blog->setStatus($data->status);
            $blog->setText($data->text);
            $blog->setTitle($data->title);
            $blog->setLogo($data->image);
            $blog->setDate(Carbon::now());
            $em = $this->getDoctrine()->getManager();
            $em->persist($blog);
            $em->flush();

            if(!empty($tags) && !empty($blog->getId())){
                foreach($tags as $key => $tag){
                    $newTag = new BlogTags();
                    $newTag->setBlog($blog);
                    $newTag->setTitle($tag);

                    $em = $this->getDoctrine()->getManager();
                    $em->persist($newTag);
                    $em->flush();
                }
            }

            $createdBlog = $this->blogService->decoratorForAllBlogs($blog);
        }

        return $this->json(['blog' => $createdBlog]);
    }

    /**
     * @param $validator
     * @param $file
     * @param $user
     * @return array
     */
    public function validationAndUploadImage($file, $user): array
    {
        global $kernel;

        $violations = $this->validator->validate(
            $file,
            new Image([])
        );
        $error = null;
        $filename = null;

        $path = $kernel->getProjectDir() . $this->getParameter('upload-blog-image');

        if ($violations->count() > 0) {
            $violation = $violations[0];
            $error = $violation->getMessage();
        } else {
            $filename = md5(uniqid('', true)) . '.' . $file->guessExtension();
            $file->move($path, $filename);
        }
        return [
            'filename' => $filename,
            'error' => $error
        ];
    }
}

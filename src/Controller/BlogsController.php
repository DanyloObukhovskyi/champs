<?php

namespace App\Controller;

use App\Entity\BlogCommentLikes;
use App\Entity\BlogLikes;
use App\Entity\Blogs;
use App\Entity\BlogTags;
use App\Entity\Game;
use App\Entity\User;
use App\Message\SendBlogToModarator;
use App\Service\Blog\BlogsCommentLikeService;
use App\Service\Blog\BlogsCommentService;
use App\Service\Blog\BlogsLikeService;
use App\Service\Blog\BlogsTagService;
use Swift_Mailer;
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

    /**
     * @var BlogsCommentLikeService
     */
    public $blogCommentLikeService;

    /**
     * @var BlogsCommentService
     */
    public $blogCommentService;

    /**
     * @var BlogsLikeService
     */
    public $blogLikeService;

    /**
     * @var BlogsTagService
     */
    public $blogTagService;

    public function __construct(
        EntityManagerInterface $entityManager,
        TranslatorInterface $translator,
        ValidatorInterface $validator
    )
    {
        $this->entityManager = $entityManager;

        $this->blogService = new BlogService($entityManager);

        $this->seoService = new SeoService($entityManager);

        $this->blogCommentLikeService = new BlogsCommentLikeService($entityManager);

        $this->blogCommentService = new BlogsCommentService($entityManager);

        $this->blogLikeService = new blogsLikeService($entityManager);

        $this->blogTagService = new blogsTagService($entityManager);

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

        $blogsCollect = $this->blogService->getHotBlogs($filters, 0, $offset);
        $hotBlogs = [];

        /** @var Blogs $blogEntity */
        foreach ($blogsCollect as $blogEntity) {
            $hotBlogs[] = $this->blogService->decoratorForAllBlogs($blogEntity);
        }
        return $this->json($hotBlogs);
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
     * @Route("/blog/{id}/{slug}", name="blogs_view_single")
     */
    public function view($id, $slug, Request $request)
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
            'blogs' => $blog,
            'router' => 'news',
        ]);
    }

    /**
     * @Route("/createBlog", name="createBlog")
     */
    public function createBlog(Request $request): Response
    {
        if ($this->getUser() === null) {
            return $this->redirectToRoute('main');
        }
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
    public function createBlogFromAjax(Request $request, Swift_Mailer $mailer): Response
    {
        /** @var User $user */
        $user = $this->getUser();

        $data = (object)$request->request->all();

        $createdBlog = [];

        if(!empty($data)){
            $file = $request->files->get('image');
            $tags = $data->tags;
            if (strpos($tags, '#Блоги') === false && strpos($tags, '#чблоги') === false) {
                $tags .= '#Блоги';
            }
            $tags = explode(',', $tags);

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
            if($createdBlog['status'] === Blogs::MODARATE){
                $this->dispatchMessage(new SendBlogToModarator($mailer));
            }
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

    /**
     * @Route("/ajax/blogs/single/{id}")
     */
    public function getBlogsAjax($id)
    {
        $user = $this->getUser();

        /** @var Blogs $blog */
        $blogsEntity = $this->entityManager
            ->getRepository(Blogs::class)
            ->find($id);

        $blog = $this->blogService->decoratorForAllBlogs($blogsEntity);

        $likes = $this->blogLikeService->getLikes($blogsEntity, 3);
        $likes = $this->blogLikeService->decorateAll($likes);

        $userLike = null;

        if (isset($user)) {
            $like = $this->blogLikeService->userLike($blogsEntity, $this->getUser());
            if (isset($like)) {
                $userLike = $this->blogLikeService->decorator($like);
            }
        }
        $likesCount = $this->blogLikeService->getLikesCount($blogsEntity);


        $blogsComments = $this->blogCommentService->getRepository()->findBy([
            'blog' => $blogsEntity,
            'parent' => null
        ]);

        $comments = $this->blogCommentService->recurciveComments(
            $blogsComments,
            $_ENV['MAX_COMMENTS_ANSWERS'],
            $this->getUser()
        );

        return $this->json([
            'blogs' => $blog,
            'likes' => $likes,
            'userLike' => $userLike,
            'likesCount' => $likesCount,
            'comments' => $comments
        ]);
    }

    /**
     * @Route("/blogs/add/comment")
     */
    public function addComment(Request $request)
    {
        $request = json_decode($request->getContent(), false);
        $blog = $this->blogService->getRepository()->find($request->id);

        $parentComment = null;

        if (isset($request->commentId)) {
            $parentComment = $this->blogCommentService->getRepository()
                ->find($request->commentId);
        }

        if (!empty($this->getUser()) and isset($blog)) {
            $this->blogCommentService->create(
                $this->getUser(),
                $blog,
                $parentComment,
                $request->comment
            );

            return $this->json('ok');
        }
        return $this->json('unauthorized', 401);
    }

    /**
     * @Route("/blogs/{blogId}/comments")
     */
    public function getComments(int $blogId)
    {
        /** @var Blogs $blog */
        $blog = $this->blogService
            ->getRepository()
            ->find($blogId);

        $blogsComments = $this->blogCommentService->getRepository()->findBy([
            'blog' => $blog,
            'parent' => null
        ]);
        $blogsComments = $this->blogCommentService->recurciveComments($blogsComments);

        return $this->json([
            'comments' => $blogsComments,
            'commentsCount' => count($blogsComments)
        ]);
    }

    /**
     * @Route("/like/blogs/comment/{commentId}")
     */
    public function setLikeComment(Request $request, $commentId)
    {
        $request = json_decode($request->getContent(), false);

        $blogsComment = $this->blogCommentService
            ->getRepository()
            ->find($commentId);

        $blogsCommentLike = null;
        if (isset($blogsComment) and !empty($this->getUser())) {
            $blogsCommentLike = $this->entityManager->getRepository(BlogCommentLikes::class)
                ->findOneBy([
                    'comment' => $blogsComment,
                    'user' => $this->getUser()
                ]);

            if (empty($blogsCommentLike)) {
                $blogsCommentLike = new NewsCommentLike();
                $blogsCommentLike->setUser($this->getUser());
                $blogsCommentLike->setComment($blogsComment);
            }
            $blogsCommentLike->setType($request->type);

            $this->entityManager->persist($blogsCommentLike);
            $this->entityManager->flush();
        }
        $likesCount = $this->blogCommentLikeService->getLikesCount($blogsComment);

        $userLike = null;

        if (!empty($this->getUser())) {
            $like = $this->blogCommentLikeService->userLike($blogsComment, $this->getUser());
            if (isset($like)) {
                $userLike = $this->blogCommentLikeService->decorator($like);
            }
        }
        return $this->json([
            'likesCount' => $likesCount,
            'userLike' => $userLike
        ]);
    }

    /**
     * @Route("/like/blogs/{blogId}")
     */
    public function setLike(Request $request, $blogId)
    {
        $request = json_decode($request->getContent(), false);

        /** @var Blogs $blog */
        $blog = $this->blogService
            ->getRepository()
            ->find($blogId);

        $user = $this->getUser();

        if (isset($request->type) and isset($user)
            and in_array($request->type, BlogLikes::TYPES, true)) {

            $userLike = $this->entityManager->getRepository(BlogLikes::class)
                ->findOneBy([
                    'user' => $user,
                    'blog' => $blog
                ]);

            if (empty($userLike)) {
                $userLike = new BlogLikes();
                $userLike->setUser($user);
                $userLike->setBlog($blog);
            }
            $userLike->setType($request->type);

            $this->entityManager->persist($userLike);
            $this->entityManager->flush();
        }
        $likesCount = $this->blogService->getLikesCount($blog);

        $userLike = null;

        if (isset($user)) {
            $like = $this->blogLikeService->userLike($blog, $this->getUser());
            if (isset($like)) {
                $userLike = $this->blogLikeService->decorator($like);
            }
        }
        return $this->json([
            'likesCount' => $likesCount,
            'userLike' => $userLike
        ]);
    }


    /**
     * @Route("/blogs/user", name="blogs.user", defaults={"offset" = 0})
     */
    public function getBlogsByUser(Request $request, $offset = 0)
    {
        $request = json_decode($request->getContent(), false);

        $user = $this->getUser();

        $blogEntities = $this->blogService->getRepository()->findBy(['user' => $user->getId()]);

        $blogs = [];
        foreach ($blogEntities as $blogEntity) {
            $blogs[] = $this->blogService->decoratorForAllBlogs($blogEntity);
        }
        return $this->json($blogs);
    }

    /**
     * @Route("/blogs/comments/user", name="blogs.user", defaults={"offset" = 0})
     */
    public function getBlogCommentsByUser(Request $request, $offset = 0)
    {
        $request = json_decode($request->getContent(), false);

        $user = $this->getUser();

        $blogEntities = $this->blogService->getRepository()->findBy(['user' => $user->getId()]);

        $blogs = [];
        foreach ($blogEntities as $blogEntity) {
            $blogs[] = $this->blogService->decoratorForAllBlogs($blogEntity);
        }
        return $this->json($blogs);
    }
}

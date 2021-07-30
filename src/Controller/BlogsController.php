<?php

namespace App\Controller;

use App\Entity\Blogs;
use App\Service\Seo\SeoService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use App\Entity\User;

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

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;

        $this->seoService = new SeoService($entityManager);
    }

    /**
     * @Route("/blogs", name="blogs")
     */
    public function index(Request $request): Response
    {
        $seoSettings = $this->seoService->getSeo('contact_index');
        $link = $request->getSchemeAndHttpHost().$request->getBasePath();

        return $this->render('templates/blogs/index.html.twig', [
            'heading_type' => $seoSettings['heading_type'],
            'heading' => $seoSettings['heading'],
            'title' => $seoSettings['title'],
            'description' => $seoSettings['description'],
            'keywords' => $seoSettings['keywords'],
            'meta_tags' => $seoSettings['meta'],
            'link' => $link,
            'router' => 'blog']);
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
}

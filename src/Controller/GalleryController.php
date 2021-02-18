<?php

namespace App\Controller;

use App\Entity\AlbumPhotos;
use App\Entity\Albums;
use App\Entity\Stream;
use App\Service\Seo\SeoService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Match;
use App\Repository\MatchRepository;

class GalleryController extends AbstractController
{

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;

        $this->seoService = new SeoService($entityManager);
    }

    /**
     * @Route("/ru/gallery", name="gallery")
     */
    public function index()
    {
        $manager = $this->getDoctrine()->getManager();

        $albums = $manager->getRepository(Albums::class)->findAll();

        $items = [];
        $currDate = null;

        foreach ($albums as $album) {
            /** @var Albums $album */
            $photos = $album->getPhotos();
            $items[] = [
                'id' => $album->getId(),
                'name' => $album->getName(),
                'image' => "/images/album/" . $photos[0]->getPath(),
//                'photos' => $photos,
            ];
        }

        return $this->render('templates/gallery.html.twig', [
            'controller_name' => 'GalleryController',
            'router' => 'gallery',
            'albums' => $items
        ]);
    }

    /**
     * Matches /ru/gallery/*
     *
     * @Route("/ru/gallery/{id}", name="gallery_view")
     */
    public function gallery_view($id)
    {
        $manager = $this->getDoctrine()->getManager();

        $album = $manager->getRepository(Albums::class)->find($id);
        $photos = $album->getPhotos();

        $items = [];
        $currDate = null;

        foreach ($photos as $photo) {
            /** @var AlbumPhotos $photo */
            $items[] = [
                'id' => $photo->getId(),
                'path' => $photo->getPath(),
            ];
        }

        return $this->render('templates/gallery.photo.view.html.twig', [
            'controller_name' => 'GalleryController',
            'router' => 'gallery',
            'photos' => $items,
            'title' => $album->getName()
        ]);
    }

    /**
     * @Route("/ru/live/{id}", name="live")
     */
    public function live($id)
    {
        $entityManager = $this->getDoctrine()->getManager();
        $match = $entityManager->getRepository(Match::class)->findOneBy([
            'id' => $id,
        ]);

        $streams = $match->getStreams();
//        $streamItems = [];
        $url = null;
        foreach ($streams as $stream) {
            /** @var Stream $stream */
            $url = $stream->getUrl();
//            $streamItems[$stream->getLanguage()] =  $stream->getUrl();
        }
        return $this->render('templates/live.html.twig', [
            'router' => 'gallery',
            'match' => $match,
            'styles' => [
                'live.css',
            ],
            'url' => $url
        ]);
    }
}

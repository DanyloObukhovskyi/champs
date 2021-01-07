<?php

namespace App\Controller;

use App\Entity\Charactristics;
use App\Entity\PurseHistory;
use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class PurseController extends AbstractController
{
    /**
     * @Route("/purse", name="purse")
     */
    public function index()
    {
        return $this->render('purse/index.html.twig', [
            'controller_name' => 'PurseController',
        ]);
    }

    /**
     * Characteristic /ru/purse/*
     *
     * @Route("/ru/purse/history/by-user/{id}", name="get_user_purse_history")
     */
    public function getUserPurseHistory($id)
    {
        /** @var User $user */
        $user = $this->getDoctrine()
            ->getRepository(User::class)
            ->find($id);

        return $this->json($user->getPurseHistories());
    }

    /**
     * @Route("/ru/purse/history/create/", methods={""}, name="create_user_purse_history_info")
     */
    public function createUserPurseHistory(Request $request)
    {
        exit();
        $userId = $request->request->get('user_id');
        $entityManager = $this->getDoctrine()->getManager();

        /** @var User $user */
        $user = $this->getDoctrine()
            ->getRepository(User::class)
            ->find(intval($userId));
        /** @var PurseHistory $purse */
        $purse = new PurseHistory();
        $purse->setUser($user);
        $purse->setOperation($request->request->get('operation'));
        $purse->setDatetime($request->request->get('datetime'));

        $entityManager->persist($purse);
        $entityManager->flush();

        $user->setPurse($user->getPurse() + $purse->getOperation());

        $entityManager->persist($user);
        $entityManager->flush();

        return $this->json([
            'status' => 200,
        ]);
    }
}


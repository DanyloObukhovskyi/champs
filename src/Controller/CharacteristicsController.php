<?php

namespace App\Controller;

use App\Entity\Charactristics;
use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class CharacteristicsController extends AbstractController
{
    /**
     * @Route("/characteristics", name="characteristics")
     */
    public function index()
    {
        return $this->render('characteristics/index.html.twig', [
            'controller_name' => 'CharacteristicsController',
        ]);
    }


    /**
     * Characteristic /ru/characteristics/*
     *
     * @Route("/ru/characteristics/by-user/{id}", name="get_user_characteristics_info")
     */
    public function getUserCharacteristic($id)
    {
        /** @var Charactristics $characteristics */
        $characteristics = $this->getDoctrine()
            ->getRepository(Charactristics::class)
            ->findBy([
                'user' => $id,
            ], [
                'id' => 'DESC',
            ], 1, 0);

        $result = [];
        foreach ($characteristics as $characteristic)
        {
            /** @var Charactristics $characteristic */
            $result['hours'] = $characteristic->getHours();
            $result['game'] = $characteristic->getGame();
            $result['role'] = $characteristic->getRole();
            $result['skills'] = $characteristic->getSkills();
            $result['goals'] = $characteristic->getGoals();
            switch ($characteristic->getCost())
            {
                case "500":
                    $result['cost'] = "< 500";
                    break;
                case "1500":
                    $result['cost'] = "500-1500";
                    break;
                case "2000":
                    $result['cost'] = "2000";
                    break;
                case "0":
                    $result['cost'] = "Не имеет значения";
                    break;
            }
//            $result['cost'] = $characteristic->getCost();
        }

        return $this->json($result);
    }

    /**
     * @Route("/ru/user/set-characteristic/", methods={"POST"}, name="set_user_characteristic_info")
     */
    public function setUserCharacteristic(Request $request)
    {
        $userId        = $request->request->get('user_id');
        $entityManager = $this->getDoctrine()->getManager();

        $user = $this->getDoctrine()
            ->getRepository(User::class)
            ->find(intval($userId));
        /** @var Charactristics $characteristic */
        $characteristic = new Charactristics();
        $characteristic->setUser($user);
        $characteristic->setGame($request->request->get('game'));
        $characteristic->setHours(intval(($request->request->get('hours'))));
        $characteristic->setRole($request->request->get('role'));
        $characteristic->setSkills(explode(",", $request->request->get('skills')));
        $characteristic->setGoals(explode(",", $request->request->get('goals')));

        switch ($request->request->get('cost'))
        {
            case "< 500":
                $characteristic->setCost(500);
                break;
            case "500-1500":
                $characteristic->setCost(1500);
                break;
            case "2000":
                $characteristic->setCost(2000);
                break;
            case "Не имеет значения":
                $characteristic->setCost(0);
                break;
            default:
                $characteristic->setCost(0);
                break;
        }

        $entityManager->persist($characteristic);
        $entityManager->flush();

        return $this->json([
            'status' => 200,
        ]);
    }
}

<?php

namespace App\Controller;

use App\Entity\Person;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class PersonController extends AbstractController
{
    /**
     * @Route("/person", name="person")
     */
    public function index()
    {
        return $this->render('person/index.html.twig', [
            'controller_name' => 'PersonController',
        ]);
    }

    /**
     * @Route("/ru/person/create/{form}", methods={"GET","POST"}, name="create_person")
     */
    public function createPerson($form)
    {
        $person = json_decode($form);
        $entityManager = $this->getDoctrine()->getManager();

        $model = new Person();
        $model->setName($person->name);
        $model->setPhoto($person->photo);
        $model->setNick($person->nick);

        // tell Doctrine you want to (eventually) save the Product (no queries yet)
        $entityManager->persist($model);

        // actually executes the queries (i.e. the INSERT query)
        $entityManager->flush();

        return $this->json($model);
    }
}

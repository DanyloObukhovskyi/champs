<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\UserType;
use App\Service\Mailer\SwiftMailer;
use Swift_Mailer;
use Swift_SmtpTransport;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class RegistrationController extends AbstractController
{
    private $passwordEncoder;

    private $mailer;

    public function __construct(UserPasswordEncoderInterface $passwordEncoder, SwiftMailer $mailer)
    {
        $this->passwordEncoder = $passwordEncoder;
        $this->mailer = $mailer;
    }

    /**
     * @Route("/ru/registration", name="user_registration")
     */
    public function index(Request $request)
    {
        $user = new User();

        $form = $this->createForm(UserType::class, $user,
            ['action' => $this->generateUrl('user_registration')]);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            // Encode the new users password
            $user->setPassword($this->passwordEncoder->encodePassword($user, $user->getPassword()));

            // Set their role
            $user->setRoles(['ROLE_USER']);

            $user->setIsTrainer(0);
            $user->setPurse(0);

            // Save
            $em = $this->getDoctrine()->getManager();
            $em->persist($user);
            $em->flush();

//            $message = (new Swift_Message('Welcome'))
//                ->setFrom('mailer@champs.pro')
//                ->setTo($user->getEmail())
//                ->setBody(
//                    "Поздравляем! Вы успешно зарегистрировались на сайте champs.pro",
//                    'text/html'
//                )
//            ;
//            $this->mailer->send($message);
            return $this->json([
                'router' => 'main',
                'route' => 'app_login',
                'status' => 200,
            ]);
        }
        return $this->json([
            'error' => "Form not valid",
            'router' => 'main'
        ]);

//        /**
//         *  рендер старой формы
//         */
//        return $this->render('registration/index.html.twig', [
//            'form' => $form->createView(),
//            'router' => 'news'
//        ]);
    }

    /**
     * @Route("/ru/mail-test", name="user_test_mailer")
     */
    public function mail()
    {
        $message = (new \Swift_Message('Hello Email'))
            ->setFrom('mailer@champs.pro')
            ->setTo('hawkprimo1997@mail.ru')
            ->setBody(
                'Поздравляем! Вы успешно зарегистрировались на сайте champs.pro',
                'text/html'
            );

        return new Response($this->mailer->send($message));
    }

}
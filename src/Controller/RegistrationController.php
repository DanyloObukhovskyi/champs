<?php

namespace App\Controller;

use App\Entity\Balance;
use App\Entity\Invite;
use App\Entity\InvitePrize;
use App\Entity\User;
use App\Form\UserType;
use App\Service\InviteService;
use App\Service\Mailer\SwiftMailer;
use App\Service\UserService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\WebpackEncoreBundle\Tests\Asset\PreLoadAssetsEventListenerTest;

class RegistrationController extends AbstractController
{
    /**
     * @var UserPasswordEncoderInterface
     */
    private $passwordEncoder;

    /**
     * @var SwiftMailer
     */
    private $mailer;

    /**
     * @var EntityManagerInterface
     */
    private $entityManager;

    /**
     * @var InviteService
     */
    private $inviteService;

    /**
     * @var UserService
     */
    private $userService;

    public function __construct(UserPasswordEncoderInterface $passwordEncoder, SwiftMailer $mailer, EntityManagerInterface $entityManager)
    {
        $this->passwordEncoder = $passwordEncoder;
        $this->mailer = $mailer;
        $this->entityManager = $entityManager;

        $this->inviteService = new InviteService($entityManager);
        $this->userService = new UserService($entityManager);

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

        if (!empty($request->get('inviteToken'))) {
            /** @var Invite $invite */
            $invite = $this->inviteService->findByToken($request->get('inviteToken'));

            if (isset($invite)) {
                $user = $invite->getUser();
                /** @var InvitePrize $prize */
                $prize = $invite->getPrize();

                /** @var Balance $userBalance */
                $userBalance = $this->entityManager->getRepository(Balance::class)
                    ->findOneBy([
                        'user' => $user,
                        'type' => $prize->getType()
                    ]);
                if (isset($userBalance)) {
                    $userBalance->setBalance((int)$userBalance->getBalance() + (int)$prize->getPrize());
                } else {
                    $userBalance = new Balance();
                    $userBalance->setUser($user);
                    $userBalance->setType($prize->getType());
                    $userBalance->setBalance((int)$prize->getPrize());
                }
                $this->entityManager->persist($userBalance);
                $this->entityManager->flush();
            }
        }

        if ($form->isSubmitted() && $form->isValid()) {
            $userEntity = new User();
            // Encode the new users password
            $userEntity->setPassword($this->passwordEncoder->encodePassword($userEntity, $form->getData()->getPassword()));
            $userEntity->setEmail($form->getData()->getEmail());
            // Set their role
            $userEntity->setRoles(['ROLE_USER']);
            $userEntity->setIsTrainer(0);

            $userEntity->setPurse(0);
            $userEntity->setTimezone(User::DEFAULT_TIMEZONE);

            $this->entityManager->persist($userEntity);
            $this->entityManager->flush();

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
                '??????????????????????! ???? ?????????????? ???????????????????????????????????? ???? ?????????? champs.pro',
                'text/html'
            );

        return new Response($this->mailer->send($message));
    }

}
<?php

namespace App\Controller;

use App\Entity\Lessons;
use App\Entity\Payment;
use App\Entity\Teachers;
use App\Message\PaymentLessonMail;
use App\Service\Interkassa\InterkassaService;
use App\Service\LessonService;
use App\Service\Payment\PaymentService;
use App\Service\Payment\YandexKassa\YandexKassaPaymentService;
use Carbon\Carbon;
use Doctrine\ORM\EntityManagerInterface;
use Psr\Log\LoggerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use YandexCheckout\Model\ConfirmationType;
use Swift_Mailer;

/**
 * @Route("/{_locale}/interkassa", requirements={"locale": "ru"})
 */
class InterkassaController extends AbstractController
{
    /**
     * @var EntityManagerInterface
     */
    public $entityManager;

    /**
     * @var InterkassaService
     */
    public $interKassaService;

    /**
     * @var LessonService
     */
    public $lessonService;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;

        $this->interKassaService = new InterkassaService();
        $this->lessonService =  new LessonService($entityManager);
    }

    /**
     * @Route ("/create/payment")
     */
    public function createPayment(Request $request)
    {
        $request = json_decode($request->getContent(), false);

        $lessonIds = $request->lessonIds;

        /** @var Lessons[] $lessons */
        $lessons = $this->entityManager
            ->getRepository(Lessons::class)
            ->findByIds($lessonIds);


        $cost = 0;
        foreach ($lessons as $lesson) {
            $cost += (int)$this->lessonService->getCostWithOutPercentage($lesson);
        }
        $payment = $this->interKassaService->createPayment($lessons, $cost);

        return $this->json([
            'url' => $payment->getFormAction(),
            'params' => $payment->getFormValues()
        ]);
    }

    /**
     * @Route ("/webhook")
     */
    public function webhook(Request $request, Swift_Mailer $mailer)
    {

        /** @var Payment $payment */
        $payment = $this->entityManager
            ->getRepository(Payment::class)
            ->findOneBy([
                'inter_kassa_id' => $request->request->get('ik_pm_no')
            ]);

        if (isset($payment)) {
            if ($request->request->get('ik_inv_st') === InterkassaService::STATE_SUCCESS)
            {
                $payment->setPaymentStatus(Payment::STATUS_OK);

            } elseif ($request->request->get('ik_inv_st') === InterkassaService::STATE_CANCELED)
            {
                $payment->setPaymentStatus(Payment::STATUS_FAIL);
            }
            $payment->setInterkassaData($request->request->all());

            $this->entityManager->persist($payment);
            $this->entityManager->flush();

            $this->dispatchMessage(new PaymentLessonMail($mailer, $payment->getLesson()));
        }

        return $this->render('templates/payment/payment.send.html.twig',[
            'lesson' => ['price' => $payment->getLesson()->getCost()],
            'payment' => [ 'id' => $payment->getId()],
            'student' => $payment->getLesson()->getStudent()->getNickname(),
            'trainer' => $payment->getLesson()->getTrainer()->getNickname()
        ]);
    }

    /**
     * @Route ("/testWebhook")
     */
    public function testWebhook(Request $request, Swift_Mailer $mailer)
    {
        /** @var Payment $payment */
        $payment = $this->entityManager
            ->getRepository(Payment::class)
            ->findOneBy([
                'inter_kassa_id' => '9729804c760bb5fe6cfc8f8a892daf75'
            ]);

        if (isset($payment)) {
                $payment->setPaymentStatus(Payment::STATUS_OK);

            $this->entityManager->persist($payment);
            $this->entityManager->flush();

            $this->dispatchMessage(new PaymentLessonMail($mailer, $payment->getLesson()));
        }

        return $this->render('templates/payment/payment.send.html.twig',[
            'lesson' => ['price' => $payment->getLesson()->getCost()],
            'payment' => [ 'id' => $payment->getId()],
            'student' => $payment->getLesson()->getStudent()->getNickname(),
            'trainer' => $payment->getLesson()->getTrainer()->getNickname()
        ]);
    }
}

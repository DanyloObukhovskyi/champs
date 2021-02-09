<?php

namespace App\Controller;

use App\Entity\Lessons;
use App\Entity\Payment;
use App\Entity\Schledule;
use App\Entity\Teachers;
use App\Entity\User;
use App\Repository\LessonsRepository;
use App\Service\Payment\YandexKassa\YandexKassaPaymentService;
use Psr\Log\LoggerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use YandexCheckout\Model\ConfirmationType;
use YandexCheckout\Model\Notification\NotificationSucceeded;
use YandexCheckout\Model\Notification\NotificationWaitingForCapture;
use YandexCheckout\Model\NotificationEventType;

class PaymentController extends AbstractController
{
    /**
     * @var LoggerInterface
     */
    private $logger;

    public function __construct(LoggerInterface $logger)
    {
        $this->logger = $logger;
    }

    /**
     * @Route("/ru/payment/succeed", name="payment_succeed")
     */
    public function succeed()
    {
        exit();
    }

    /**
     * @Route("/ru/payment/pay/lesson/", name="payment_pay")
     */
    public function index(Request $request)
    {
        $lessonIds = $request->get('lessonIds', []);
        $lessonIds = json_decode($lessonIds);

        /** @var Lessons[] $lessons */
        $lessons = $this->getDoctrine()
            ->getRepository(Lessons::class)
            ->findByIds($lessonIds);

        $entityManager = $this->getDoctrine()->getManager();

        $paymentService = new YandexKassaPaymentService($entityManager);

        $cost = 0;
        foreach ($lessons as $lesson) {
            $cost += (int)$lesson->getCostWithPercentage();
        }
        $payment = $paymentService->createPayment($lessons, $cost, $_ENV['YANDEX_KASSA_RETURN_URL']);

        if ($payment && $payment->getConfirmation()->getType() === ConfirmationType::REDIRECT) {
            return $this->redirect($payment->getConfirmation()->getConfirmationUrl());
        }

        //TODO Редирект на ошибку
    }


    /**
     * @Route("/ru/payment/result/{id}", name="payment_page")
     */
    public function paymentPage($id)
    {
        $user = $this->getUser();

        if (empty($user)) {
            return $this->redirectToRoute('main');
        }
        /** @var Payment $lesson */
        $paymentLesson = $this->getDoctrine()
            ->getRepository(Payment::class)
            ->findByLessonId($id);

        $message = 'Ваша покупка успешно отменена!';
        $messageClass = 'text-danger';

        $isPayed = false;

        if (isset($paymentLesson) and $paymentLesson->getPaymentStatus() !== 0) {
            $message = 'Спасибо за покупку!';
            $messageClass = 'text-success';

            $isPayed = true;
        }

        return $this->render('templates/message.view.html.twig', [
            'router' => 'payed',
            'isPayed' => $isPayed,
            'message' => $message,
            'messageClass' => $messageClass
        ]);
    }

    /**
     * @Route("/ru/payment/webhook", name="payment_webhook")
     */
    public function webhook()
    {
        $source = file_get_contents('php://input');
        $requestBody = json_decode($source, true);
        $this->logger->info(json_encode($requestBody));

        try {
            if ($requestBody['event'] === NotificationEventType::PAYMENT_SUCCEEDED) {
                $notification = new NotificationSucceeded($requestBody);

                (new YandexKassaPaymentService($this->getDoctrine()->getManager()))->markSuccess($notification->getObject()->getId());
            }
        } catch (\Exception $e) {
            if ($requestBody['event'] === NotificationEventType::PAYMENT_CANCELED) {
                $notification = new NotificationSucceeded($requestBody);

                (new YandexKassaPaymentService($this->getDoctrine()->getManager()))->onCancel($notification->getObject()->getId());
            }
        }
    }
}

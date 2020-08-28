<?php

namespace App\Controller;

use App\Entity\Lessons;
use App\Entity\Teachers;
use App\Repository\LessonsRepository;
use App\Service\Payment\YandexKassa\YandexKassaPaymentService;
use Psr\Log\LoggerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
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
        dump($this->logger);
        exit();
    }

    /**
     * @Route("/ru/payment/pay/lesson-{lesson_id}", name="payment_pay")
     */
    public function index(int $lesson_id)
    {
        /** @var Lessons $lesson */
        $lesson = $this->getDoctrine()->getRepository(Lessons::class)->find($lesson_id);

        $paymentService = new YandexKassaPaymentService($this->getDoctrine()->getManager());

        $payment = $paymentService->createPayment($lesson, $lesson->getCost(), $_ENV['YANDEX_KASSA_RETURN_URL']);

        if($payment && $payment->getConfirmation()->getType() === ConfirmationType::REDIRECT)
        {
            return $this->redirect($payment->getConfirmation()->getConfirmationUrl());
        }

        //TODO Редирект на ошибку
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
            if ($requestBody['event'] === NotificationEventType::PAYMENT_SUCCEEDED)
            {
                $notification = new NotificationSucceeded($requestBody);

                (new YandexKassaPaymentService($this->getDoctrine()->getManager()))->markSuccess($notification->getObject()->getId());
            }
        } catch (\Exception $e) {
            if ($requestBody['event'] === NotificationEventType::PAYMENT_CANCELED)
            {
                $notification = new NotificationSucceeded($requestBody);

                (new YandexKassaPaymentService($this->getDoctrine()->getManager()))->onCancel($notification->getObject()->getId());
            }
        }
    }
}

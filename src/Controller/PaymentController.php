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
        dump($this->logger);
        exit();
    }

    /**
     * @Route("/ru/payment/pay/lesson-{lesson_id}", name="payment_pay")
     */
    public function index( int $lesson_id)
    {
        /** @var Lessons $lesson */
        $lesson = $this->getDoctrine()->getRepository(Lessons::class)->find($lesson_id);

        $paymentService = new YandexKassaPaymentService($this->getDoctrine()->getManager());

        $payment = $paymentService->createPayment($lesson, $lesson->getCost(), $_ENV['YANDEX_KASSA_RETURN_URL'] . $lesson_id);

        if($payment && $payment->getConfirmation()->getType() === ConfirmationType::REDIRECT)
        {
            return $this->redirect($payment->getConfirmation()->getConfirmationUrl());
        }

        //TODO Редирект на ошибку
    }


    /**
     * @Route("/ru/payment/result/{id}", name="payment_page")
     */
    public function paymentPage($id)
    {
        /** @var Payment $lesson */
        $paymentLesson = $this->getDoctrine()->getRepository(Payment::class)->findByLessonId($id);
        $message = 'Ваша покупка успешно отменена!';
        $messageClass = 'text-danger';

        if (isset($paymentLesson) and $paymentLesson->getPaymentStatus() !== 0)
        {
            $message = 'Спасибо за покупку!';
            $messageClass = 'text-success';
        }

        return $this->render('templates/message.view.html.twig', [
            'router' => 'payed',
            'message' => $message,
            'messageClass' => $messageClass
        ]);
    }

    /**
     * @Route("/ru/payment/webhook", name="payment_webhook")
     */
    public function webhook(Request $request)
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

        $this->checkIsPayedSuccess($requestBody);
    }

    public function checkIsPayedSuccess($requestBody)
    {
        if ($requestBody === null)
        {
            /** @var User $authUser */
            $authUser = $this->get('security.token_storage')
                ->getToken()
                ->getUser();

            $studentLessons = $this->getDoctrine()
                ->getRepository(Lessons::class)
                ->findByStudentId($authUser->getId());

            $studentLessonsIds = [];

            foreach ($studentLessons as $lesson)
            {
                $studentLessonsIds[] = $lesson->getId();
            }
            /** @var Payment $notPayedPayment */
            $notPayedPayments = $this->getDoctrine()->getRepository(Payment::class)
                ->findNotPayedByLessonsIds($studentLessonsIds);

            foreach ($notPayedPayments as $notPayedPayment)
            {
                $lesson = $notPayedPayment->getLesson();

                if (isset($lesson))
                {
                    $hour = $lesson->getDatetime()->format('H');
                    $trainerId = $lesson->getTrainerId()->getId();

                    $schledule = $this->getDoctrine()->getRepository(Schledule::class)
                        ->findByUserAndDate($trainerId, $lesson->getDatetime());

                    if (!empty($schledule))
                    {
                        $schledule = $schledule[0];

                        switch ((int)$hour)
                        {
                            case 10:
                                $schledule->setTime1011(1);
                                break;
                            case 11:
                                $schledule->setTime1112(1);
                                break;
                            case 12:
                                $schledule->setTime1213(1);
                                break;
                            case 13:
                                $schledule->setTime1314(1);
                                break;
                            case 14:
                                $schledule->setTime1415(1);
                                break;
                            case 15:
                                $schledule->setTime1516(1);
                                break;
                            case 16:
                                $schledule->setTime1617(1);
                                break;
                            case 17:
                                $schledule->setTime1718(1);
                                break;
                            default:
                                return new Response("404");
                        }
                        $entityManager = $this->getDoctrine()->getManager();

                        $entityManager->persist($schledule);
                        $entityManager->flush();
                    }
                }
            }
        }
    }
}

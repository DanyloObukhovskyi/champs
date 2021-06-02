<?php


namespace App\Service\Payment\YandexKassa;


use App\Entity\Lessons;
use App\Entity\LessonsPayment;
use App\Entity\Payment;
use App\Entity\Team;
use App\Repository\LessonsRepository;
use App\Service\EntityService;
use Doctrine\ORM\EntityManagerInterface;
use YandexCheckout\Client;
use YandexCheckout\Common\Exceptions\ApiException;
use YandexCheckout\Common\Exceptions\BadApiRequestException;
use YandexCheckout\Common\Exceptions\ForbiddenException;
use YandexCheckout\Common\Exceptions\InternalServerError;
use YandexCheckout\Common\Exceptions\NotFoundException;
use YandexCheckout\Common\Exceptions\ResponseProcessingException;
use YandexCheckout\Common\Exceptions\TooManyRequestsException;
use YandexCheckout\Common\Exceptions\UnauthorizedException;
use YandexCheckout\Request\Payments\CreatePaymentResponse;
use YandexCheckout\Request\Payments\PaymentResponse;

class YandexKassaPaymentService extends EntityService
{
    /**
     * @var string
     */
    private $secret;
    /**
     * @var string
     */
    private $merchant_id;
    /**
     * @var string
     */
    private $return_url;

    protected $entity = Payment::class;

    public function __construct($entityManager)
    {
        $this->merchant_id = $_ENV['YANDEX_KASSA_ID'];
        $this->secret = $_ENV['YANDEX_KASSA_SECRET'];
        $this->return_url = $_ENV['YANDEX_KASSA_RETURN_URL'];

        parent::__construct($entityManager);
    }

    public function createPayment($lessons, float $amount, string $redirect, string $description = 'Оплата за урок'): ?CreatePaymentResponse
    {
        $client = new Client();
        $client->setAuth($this->merchant_id, $this->secret);

        try {
            $lessonsId = $lessons[0]->getId();

            $payment = $client->createPayment(
                [
                    'amount' => [
                        'value' => $amount,
                        'currency' => 'RUB',
                    ],
                    'confirmation' => [
                        'type' => 'redirect',
                        'return_url' => $redirect,
                    ],
                    'capture' => true,
                    'description' => $description,
                ],
                uniqid('', true)
            );

            if ($payment and !empty($lessons)) {
                $payment_e = new Payment();
                $payment_e->setPaymentStatus(Payment::STATUS_NEW);
                $payment_e->setYandexData(json_decode(json_encode($payment), true));
                $payment_e->setLesson($lessons[0]);
                $payment_e->setYandexKassaId($payment->getId());

                $this->save($payment_e);

                $this->createPaymentLessons($payment_e, $lessons);
            }

            return $payment;
        } catch (\Exception $e) {
            return null;
        }
    }

    public function markSuccess(string $yandex_kassa_id): bool
    {
        /**
         * @var Payment $payment
         */
        $payment = $this->entityManager->getRepository(Payment::class)->findOneBy([
            'yandex_kassa_id' => $yandex_kassa_id
        ]);

        if (!$payment) {
            return false;
        }

        $payment->setPaymentStatus(Payment::STATUS_OK);

        try {
            $this->save($payment);
        } catch (\Exception $e) {
            return false;
        }

        return true;
    }


    public function onCancel(string $yandex_kassa_id): bool
    {
        /**
         * @var Payment $payment
         */
        $payment = $this->entityManager->getRepository(Payment::class)->findOneBy([
            'yandex_kassa_id' => $yandex_kassa_id
        ]);

        if (!$payment) {
            return false;
        }

        try {
            $this->delete($payment);
        } catch (\Exception $e) {
            return false;
        }

        return true;
    }

    public function createPaymentLessons($payment, $lessons)
    {
        foreach ($lessons as $lesson) {
            $paymentLesson = new LessonsPayment();
            $paymentLesson->setLesson($lesson);
            $paymentLesson->setPayment($payment);

            $this->save($paymentLesson);
        }
    }
}
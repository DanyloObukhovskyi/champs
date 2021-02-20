<?php

namespace App\Controller;

use App\Entity\Lessons;
use App\Entity\Payment;
use App\Service\Interkassa\InterkassaService;
use App\Service\Payment\PaymentService;
use App\Service\Payment\YandexKassa\YandexKassaPaymentService;
use Doctrine\ORM\EntityManagerInterface;
use Psr\Log\LoggerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use YandexCheckout\Model\ConfirmationType;

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

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;

        $this->interKassaService = new InterkassaService();
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
            $cost += (int)$lesson->getCostWithPercentage();
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
    public function webhook(Request $request)
    {
        dump($request->request->all());

        /** @var Payment $payment */
        $payment = $this->entityManager
            ->getRepository(Payment::class)
            ->findOneBy([
                'inter_kassa_id' => $request->request->get('ik_pm_no')
            ]);

        dump($payment);
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
        }

        return $this->json('ok');
    }
}

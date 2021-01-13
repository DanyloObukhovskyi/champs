<?php

namespace App\Controller;

use App\Entity\Teachers;
use App\Entity\TrainerLessonPrice;
use App\Entity\User;
use App\Service\LessonService;
use App\Service\WalletService;
use Carbon\Carbon;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\Translation\TranslatorInterface;
use Symfony\Component\HttpFoundation\Request;

/**
 * @Route("/{_locale}", requirements={"locale": "ru"})
 */
class WalletController extends AbstractController
{
    /**
     * @var WalletService
     */
    public $walletService;

    /**
     * @var LessonService
     */
    public $lessonService;

    /**
     * @var EntityManagerInterface
     */
    public $entityManager;

    /**
     * @var TranslatorInterface
     */
    public $translator;

    public function __construct(EntityManagerInterface $entityManager, TranslatorInterface $translator)
    {
        $this->entityManager = $entityManager;
        $this->translator = $translator;

        $this->walletService = new WalletService();
        $this->lessonService = new LessonService($entityManager);
    }

    /**
     * @Route("/trainer/wallet", name="wallet")
     */
    public function index(TranslatorInterface $translator): Response
    {
        /** @var User $user */
        $user = $this->getUser();

        $earned = [];
        $purseHistory = $this->walletService
            ->getPurseHistory($user);

        $confirmedPayments = $this->walletService->getPaymentsByDate($user);
        $balance = $this->walletService->getBalance($user);
        $available = $this->walletService->getAvailableToPurse($user);

        $currentMonth = $translator->trans('earned.per this month');
        $prevMonth = $translator->trans('earned.per previous month');

        $date = Carbon::now();
        $date->setDay(1);

        $datePrev = Carbon::now()->subMonth();
        $datePrev->setDay(1);

        $earned[$currentMonth] = $this->lessonService->getTrainerEarnedLessonsByMonth($user, $date);
        $earned[$prevMonth] = $this->lessonService->getTrainerEarnedLessonsByMonth($user, $datePrev);

        /** @var Teachers $trainer */
        $trainer = $this->entityManager->getRepository(Teachers::class)->findOneBy([
            'userid' => $user->getId()
        ]);

        $prices = $trainer->getCosts();

        return $this->json([
            'earned' => $earned,
            'balance' => $balance,
            'available' => $available,
            'transactionHistory' => $purseHistory,
            'studentsHistory' => [],
            'lessonPrices' => $this->decorateTrainerPrices($prices),
            'wallet' => $trainer->getPayPal(),
            'isLessonCost' => $trainer->getIsLessonCost()
        ]);
    }

    /**
     * @param $prices
     * @return array
     */
    public function decorateTrainerPrices($prices): array
    {
        $decoratePrices = [];

        foreach (TrainerLessonPrice::PRICES as $price) {
            $decoratePrices[$price] = [
                'type' => $price,
                'cost' =>  0,
                'show' =>  false,
                'title' =>  $this->translator->trans('trainings.'.$price)
            ];
        }
        /** @var TrainerLessonPrice $price */
        foreach ($prices as $price) {
            $decoratePrices[$price->getLessonType()] = [
                'type' => $price->getLessonType(),
                'cost' =>  $price->getPriceWithoutPercentage(),
                'show' =>  $price->getIsActive(),
                'title' =>  $this->translator->trans('trainings.'.$price->getLessonType())
            ];
        }
        rsort($decoratePrices);

        return $decoratePrices;
    }

    /**
     * @Route("/trainer/wallet/update/price",  name="wallet_update_price")
     */
    public function updateTrainerPrice(Request $request)
    {
        $data = json_decode($request->getContent(), false);

        /** @var User $user */
        $user = $this->getUser();
        /** @var Teachers $trainer */
        $trainer = $this->entityManager->getRepository(Teachers::class)
            ->findOneBy([
                'userid' => $user->getId()
            ]);

        if (isset($trainer) and isset($data->lessonPrices)) {
            foreach ($data->lessonPrices as $price) {
                /** @var TrainerLessonPrice $trainerPrice */
                foreach ($trainer->getCosts() as $trainerPrice) {
                    if ($price->type === $trainerPrice->getLessonType()) {
                        $trainerPrice->setPrice($price->cost);
                        $trainerPrice->setIsActive($price->show);

                        $this->entityManager->persist($trainerPrice);
                    }
                }
            }

            $trainer->setIsLessonCost($data->isLessonCost);
            $this->entityManager->persist($trainer);
        }
        $this->entityManager->flush();

        return $this->json([
            'isLessonCost' =>  $trainer->getIsLessonCost(),
            'lessonPrices' => $this->decorateTrainerPrices($trainer->getCosts())
        ]);
    }
}

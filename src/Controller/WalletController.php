<?php

namespace App\Controller;

use App\Entity\PurseHistory;
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
use Symfony\Component\Validator\Constraints\Email;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Contracts\Translation\TranslatorInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Validator\Constraints as Assert;

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

    /**
     * @var ValidatorInterface
     */
    public $validator;

    public function __construct(EntityManagerInterface $entityManager, TranslatorInterface $translator, ValidatorInterface $validator)
    {
        $this->entityManager = $entityManager;
        $this->translator = $translator;
        $this->validator = $validator;

        $this->walletService = new WalletService();
        $this->lessonService = new LessonService($entityManager);
    }

    /**
     * @Route("/trainer/wallet", name="wallet")
     */
    public function index(Request $request, TranslatorInterface $translator): Response
    {
        /** @var User $user */
        $user = $this->getUser();

        $data = json_decode($request->getContent(), false);

        $earned = [];
        $purseHistoryEntities = $this->walletService
            ->getPurseHistory($user);


        $purseHistory = [];
        foreach ($purseHistoryEntities as $historyEntity) {
            if($historyEntity->getStatus() !== 'cancel' && $historyEntity->getAmount() !== 0){
                $purseHistory[] = $historyEntity->jsonSerialize();
            }
        }
        $confirmedPayments = $this->walletService->getStudentsPaymentHistory($data->timezone, $user, $translator);
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

        $prices = !empty($trainer) ? $trainer->getCosts() : null;

        return $this->json([
            'earned' => $earned,
            'balance' => $balance,
            'available' => $available,
            'transactionHistory' => $purseHistory,
            'studentsHistory' => $confirmedPayments,
            'lessonPrices' => !empty($prices) ? $this->decorateTrainerPrices($prices) : 0,
            'wallet' => !empty($trainer) ? $trainer->getPayPal() : 0,
            'isLessonCost' => !empty($trainer) ? $trainer->getIsLessonCost() : 0
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
                'title' => $this->translator->trans('trainings.titles.'.$price),
                'description' => $this->translator->trans('trainings.description.'.$price),
            ];
        }
        /** @var TrainerLessonPrice $price */
        foreach ($prices as $price) {
            $decoratePrices[$price->getLessonType()] = [
                'type' => $price->getLessonType(),
                'cost' =>  $price->getPrice(),
                'show' =>  $price->getIsActive(),
                'title' =>  $this->translator->trans('trainings.titles.'.$price->getLessonType()),
                'description' => $this->translator->trans('trainings.description.'.$price->getLessonType()),
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

    /**
     * @Route ("/trainer/wallet/update/paypal")
     */
    public function updateTrainerPayPal(Request $request)
    {
        $data = json_decode($request->getContent(), false);
        $user = $this->getUser();


        /** @var User $user */
        if (isset($data->payPal) and isset($user)) {
            $violations = $this->validator->validate(
                $data->payPal,
                new Email([])
            );
            if ($violations->count() > 0) {
                $message = $this->translator->trans('Paypal was specified in the wrong format');

                return $this->json($message, 422);
            }
            /** @var Teachers $trainer */
            $trainer = $this->entityManager
                ->getRepository(Teachers::class)
                ->findOneBy([
                   'userid' => $user->getId()
                ]);
            if (isset($trainer)) {
                $trainer->setPayPal($data->payPal);

                $this->entityManager->persist($trainer);
                $this->entityManager->flush();
            }
        }
        return $this->json('ok');
    }

    /**
     * @Route("/trainer/wallet/checkout")
     */
    public function walletCheckout(Request $request, TranslatorInterface $translator)
    {
        /** @var User $user */
        $user = $this->getUser();
        if (isset($user)) {
            $available = $this->walletService->getAvailableToPurse($user);

            $purse = new PurseHistory();
            $purse->setUser($user);
            $purse->setStatus(PurseHistory::PENDING_STATUS);
            $purse->setAmount($available);
            $purse->setDatetime(new \DateTime());

            $this->entityManager->persist($purse);
            $this->entityManager->flush();
        }

        return $this->index($request, $translator);
    }
}

<?php


namespace App\Service\Payment;


use App\Entity\LessonsPayment;
use App\Entity\LessonTime;
use App\Entity\Payment;
use App\Service\EntityService;

class PaymentService  extends EntityService
{
    protected $entity = Payment::class;

    protected $repository;

    public function getPaymentWithinThirtyMinutes()
    {
        return $this->repository->getPaymentWithinThirtyMinutes();
    }

    public function getPaymentLessonsShedules(Payment $payment)
    {
        $paymentLessons = $this->entityManager->getRepository(LessonsPayment::class)->findBy([
           'payment' => $payment
        ]);

        $schedules = [];
        /** @var LessonsPayment $paymentLesson */
        foreach ($paymentLessons as $paymentLesson)
        {
            $lessonTimes = $this->entityManager->getRepository(LessonTime::class)->findBy([
                    'lesson' => $paymentLesson->getLesson()
            ]);
            /** @var LessonTime $lessonTime */
            foreach ($lessonTimes as $lessonTime)
            {
                $schedules[] = $lessonTime->getTrainerTime();
            }
        }

        return $schedules;
    }

    public function getByTeacherAndDate($teacher, $datetime)
    {
        return $this->repository->getByTeacherAndDate($teacher, $datetime);
    }
}
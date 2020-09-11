<?php


namespace App\Service\Payment;


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

    public function getByTeacherAndDate($teacher, $datetime)
    {
        return $this->repository->getByTeacherAndDate($teacher, $datetime);
    }
}
<?php


namespace App\MessageHandler;


use App\Message\PaymentLessonMail;
use Symfony\Component\Messenger\Handler\MessageHandlerInterface;

/**
 * Class PaymentLessonMailHandler
 * @package App\MessageHandler
 */
class PaymentLessonMailHandler implements MessageHandlerInterface
{
    use LessonMailHandler;

    public $template = 'templates/mails/booked.lesson.html.twig';

    public $subject = 'Бронирование времени champs.pro';

    /**
     * @param PaymentLessonMail $paymentLesson
     */
    public function __invoke(PaymentLessonMail $paymentLesson)
    {
        $lesson = $paymentLesson->getLesson();

        //Send user mail
        $paymentLesson->getMailer()->send($this->makeEmail($lesson));
        //Send trainer mail
        $paymentLesson->getMailer()->send($this->makeEmail($lesson, true));
    }
}
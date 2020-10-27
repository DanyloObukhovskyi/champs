<?php


namespace App\MessageHandler;


use App\Message\EndLessonMail;
use Symfony\Component\Messenger\Handler\MessageHandlerInterface;

class EndLessonMailHandler implements MessageHandlerInterface
{
    use LessonMailHandler;

    public $template = 'templates/mails/finish.lesson.html.twig';

    public $subject = 'Окончание времени занятия champs.pro';

    public function __invoke(EndLessonMail $endLessonMail)
    {
        $lesson = $endLessonMail->getLesson();

        //Send user mail
        $endLessonMail->getMailer()->send($this->makeEmail($lesson));
        //Send trainer mail
        if (!$endLessonMail->isOnlyStudent())
        {
            $endLessonMail->getMailer()->send($this->makeEmail($lesson, true));
        }
    }
}
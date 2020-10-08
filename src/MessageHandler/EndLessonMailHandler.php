<?php


namespace App\MessageHandler;


use App\Message\EndLessonMail;
use Symfony\Component\Messenger\Handler\MessageHandlerInterface;

class EndLessonMailHandler implements MessageHandlerInterface
{
    use LessonMailHandler;

    protected $template = 'templates/mails/finish.lesson.html.twig';

    public function __invoke(EndLessonMail $endLessonMail)
    {

    }
}
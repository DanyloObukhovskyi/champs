<?php


namespace App\Message;


use App\Entity\Lessons;
use Swift_Mailer;

/**
 * Class LessonMail
 * @package App\Message
 */
class LessonMail
{
    /**
     * @var Swift_Mailer
     */
    protected $mailer;

    /**
     * @var Lessons
     */
    protected $lesson;

    /**
     * LessonMail constructor.
     * @param Swift_Mailer $mailer
     * @param Lessons $lesson
     */
    public function __construct(Swift_Mailer $mailer, Lessons $lesson)
    {
        $this->mailer = $mailer;
        $this->lesson = $lesson;
    }

    /**
     * @return mixed
     */
    public function getMailer()
    {
        return $this->mailer;
    }

    /**
     * @return mixed
     */
    public function getLesson()
    {
        return $this->lesson;
    }
}
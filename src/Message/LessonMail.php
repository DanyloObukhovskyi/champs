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

    protected $onlyStudent;

    /**
     * LessonMail constructor.
     * @param Swift_Mailer $mailer
     * @param Lessons $lesson
     * @param $onlyStudent
     */
    public function __construct(Swift_Mailer $mailer, Lessons $lesson, $onlyStudent = false)
    {
        $this->mailer = $mailer;
        $this->lesson = $lesson;
        $this->onlyStudent = $onlyStudent;
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

    /**
     * @return bool
     */
    public function isOnlyStudent(): bool
    {
        return $this->onlyStudent;
    }
}
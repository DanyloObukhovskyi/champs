<?php


namespace App\Message;

use Swift_Mailer;

/**
 * Class LessonMail
 * @package App\Message
 */
class BlogMail
{
    /**
     * @var Swift_Mailer
     */
    protected $mailer;

    /**
     * LessonMail constructor.
     * @param Swift_Mailer $mailer
     */
    public function __construct(Swift_Mailer $mailer)
    {
        $this->mailer = $mailer;
    }

    /**
     * @return mixed
     */
    public function getMailer()
    {
        return $this->mailer;
    }

}
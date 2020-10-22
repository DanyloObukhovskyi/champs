<?php


namespace App\Message;


use App\Entity\ConfirmCode;
use Swift_Mailer;

/**
 * Class ConfirmCodeMail
 * @package App\Message
 */
class ConfirmCodeMail
{
    /**
     * @var ConfirmCode
     */
    protected $confirmCode;

    /**
     * @var Swift_Mailer
     */
    protected $mailer;

    /**
     * ConfirmCodeMail constructor.
     * @param ConfirmCode $confirmCode
     * @param $mailer
     */
    public function __construct(ConfirmCode $confirmCode, Swift_Mailer $mailer)
    {
        $this->confirmCode = $confirmCode;
        $this->mailer = $mailer;
    }

    /**
     * @return ConfirmCode
     */
    public function getConfirmCode(): ConfirmCode
    {
        return $this->confirmCode;
    }

    /**
     * @return Swift_Mailer
     */
    public function getMailer(): Swift_Mailer
    {
        return $this->mailer;
    }
}
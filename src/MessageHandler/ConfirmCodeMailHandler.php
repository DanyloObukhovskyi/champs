<?php


namespace App\MessageHandler;


use App\Message\ConfirmCodeMail;
use App\Traits\RenderView;
use Swift_Message;
use Symfony\Component\Messenger\Handler\MessageHandlerInterface;

/**
 * Class ConfirmCodeMailHandler
 * @package App\MessageHandler
 */
class ConfirmCodeMailHandler  implements MessageHandlerInterface
{
    use RenderView;

    /**
     * @var string
     */
    public $template = 'templates/mails/confirm.code.html.twig';

    /**
     * @var string
     */
    public $subject = 'Код подтверждения почты Champs.pro';

    /**
     * @param $subject
     * @return Swift_Message
     */
    public function makeMessage($subject): Swift_Message
    {
        return (new Swift_Message($subject))
            ->setFrom($_ENV['MAILER_FROM'] ?? 'champs@mail.com');
    }

    /**
     * @param ConfirmCodeMail $confirmCodeMail
     * @return mixed
     */
    public function __invoke(ConfirmCodeMail $confirmCodeMail)
    {
        $params['code'] = $confirmCodeMail->getConfirmCode()->getCode();
        $html = $this->renderView($this->template, $params);

        $mail =  $this->makeMessage($this->subject)
            ->setTo($confirmCodeMail->getConfirmCode()->getEmail())
            ->setBody($html, 'text/html');

        return $confirmCodeMail->getMailer()->send($mail);
    }
}
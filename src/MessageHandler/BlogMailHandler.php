<?php


namespace App\MessageHandler;


use App\Message\BlogMail;
use App\Traits\RenderView;
use Symfony\Component\Messenger\Handler\MessageHandlerInterface;
use Swift_Message;

class BlogMailHandler implements MessageHandlerInterface
{

    use RenderView;

    public $template = 'templates/mails/send.editor.html.twig';

    public $subject = 'Новый блог на champs.pro';

    public function __invoke(BlogMail $blogMail)
    {
        $blogMail->getMailer()->send($this->makeEditorEmail());
    }

    /**
     * @return Swift_Message
     */
    public function makeEditorEmail()
    {

        $params = [

        ];

        $html = $this->renderView($this->template, $params);

        return $this->makeMessage($this->subject)
            ->setTo('niksgreek@gmail.com')
            ->setBody($html, 'text/html');
    }

    /**
     * @param $subject
     * @return Swift_Message
     */
    public function makeMessage($subject): Swift_Message
    {
        return (new Swift_Message($subject))
            ->setFrom($_ENV['MAILER_FROM'] ?? 'champs@mail.com');
    }
}
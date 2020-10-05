<?php


namespace App\Traits;

use Swift_Message;


trait Mail
{
    public function makeMail()
    {
        return (new Swift_Message())
            ->setFrom($_ENV['MAILER_FROM'] ?? 'champs@mail.com');
    }
}
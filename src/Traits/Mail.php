<?php


namespace App\Traits;

use Symfony\Bridge\Twig\Mime\TemplatedEmail;


trait Mail
{
    public function makeMail()
    {
        return (new TemplatedEmail())
            ->from($_ENV['MAILER_FROM'] ?? 'champs@mail.com');
    }
}
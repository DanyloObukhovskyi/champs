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

    /**
     * @param $mailer
     * @param $user
     * @param $bookedTime
     * @param $trainerTeacher
     * @param bool $isTrainer
     * @return mixed
     */
    public function sendPayedMail($mailer, $user, $bookedTime, $trainerTeacher, $isTrainer = false)
    {
        $params = [
            'user' => $user,
            'bookedTime' => $bookedTime,
            'trainer' => $trainerTeacher,
            'isTrainer' => $isTrainer,
        ];

        $html = $this->renderView('templates/mails/booked.lesson.html.twig', $params);

        $trainerMail = $this->makeMail()
            ->setTo($user->getEmail())
            ->setBody($html, 'text/html');

        return $mailer->send($trainerMail);
    }
}
<?php


namespace App\Traits;

use App\Entity\Lessons;
use App\Entity\Teachers;
use App\Entity\User;
use App\Service\UserService;
use Swift_Message;


trait Mail
{
    public function makeMail()
    {
        return (new Swift_Message())
            ->setFrom($_ENV['MAILER_FROM'] ?? 'champs@mail.com');
    }

    public function getTrainerGame($trainer)
    {
        $choseGame = $trainer->getGame();

        foreach (UserService::GAMES as $game)
        {
            if ($game['name'] === $trainer->getGame())
            {
                $choseGame = $game['title'];
            }
        }
        return $choseGame;
    }

    public function sendTeacherFinishLesson($mailer, $lesson, $user, $trainer, $isTrainer = false)
    {
        $params = [
            'user' => $user,
            'game' => $this->getTrainerGame($trainer),
            'trainer' => $trainer,
            'lesson' => $lesson,
            'isTrainer' => $isTrainer,
        ];
        $email = $isTrainer ? $trainer->getEmail(): $user->getEmail();

        $html = $this->renderView('templates/mails/finish.lesson.html.twig', $params);

        $trainerMail = $this->makeMail()
            ->setTo($email)
            ->setBody($html, 'text/html');

        return $mailer->send($trainerMail);
    }

    public function makePaymentMail($mailer, Lessons $lesson, $user, $trainer, $isTrainer = false)
    {
        $lessonDuration = $lesson->getDateTimeTo()->diffInHours($lesson->getDateTimeFrom());

        $params = [
            'user' => $user,
            'trainer' => $trainer,
            'lesson' => $lesson,
            'game' => $this->getTrainerGame($trainer),
            'isTrainer' => $isTrainer,
            'lessonDuration' => $lessonDuration
        ];
        $html = $this->renderView('templates/mails/booked.lesson.html.twig', $params);

        if ($isTrainer){
            $email = $trainer->getEmail();
        } else {
            $email = $user->getEmail();
        }
        $trainerMail = $this->makeMail()
            ->setTo($email)
            ->setBody($html, 'text/html');

        return $trainerMail;
    }

    public function sendStudentTeacherCancelMail()
    {

    }
}
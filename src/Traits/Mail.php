<?php


namespace App\Traits;

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

    /**
     * @param $mailer
     * @param $lesson
     * @param $user
     * @param $trainer
     * @return mixed
     */
    public function sendPayedMail($mailer, $lesson, $user, $trainer, $isTrainer = false)
    {
        $choseGame = $trainer->getGame();

        foreach (UserService::GAMES as $game)
        {
            if ($game['name'] === $trainer->getGame())
            {
                $choseGame = $game['title'];
            }
        }
        $params = [
            'user' => $user,
            'trainer' => $trainer,
            'lesson' => $lesson,
            'game' => $choseGame,
            'isTrainer' => $isTrainer
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

        return $mailer->send($trainerMail);
    }

    public function sendTeacherFinishLesson($mailer, $lesson, $user, $trainer)
    {
        $params = [
            'user' => $user,
            'trainer' => $trainer,
            'lesson' => $lesson,
        ];

        $html = $this->renderView('templates/mails/finish.lesson.html.twig', $params);

        $trainerMail = $this->makeMail()
            ->setTo($user->getEmail())
            ->setBody($html, 'text/html');

        return $mailer->send($trainerMail);
    }
}
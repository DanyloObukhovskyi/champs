<?php


namespace App\MessageHandler;


use App\Entity\Lessons;
use App\Service\UserService;
use App\Traits\RenderView;
use Swift_Message;

trait LessonMailHandler
{
    use RenderView;

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
     * @param $trainer
     * @return mixed
     */
    public function getTrainerGame($trainer)
    {
        $choseGame = $trainer->getGame();

        foreach (UserService::GAMES as $game) {
            if ($game['name'] === $trainer->getGame()) {
                $choseGame = $game['title'];
            }
        }
        return $choseGame;
    }

    /**
     * @param $subject
     * @param Lessons $lesson
     * @param bool $isTrainer
     * @return Swift_Message
     */
    public function makeEmail(Lessons $lesson, $isTrainer = false)
    {
        $lessonDuration = $lesson->getDateTimeTo()->diffInHours($lesson->getDateTimeFrom());

        $params = [
            'user' => $lesson->getStudent(),
            'trainer' => $lesson->getTrainer(),
            'lesson' => $lesson,
            'game' => $this->getTrainerGame($lesson->getTrainer()),
            'isTrainer' => $isTrainer,
            'lessonDuration' => $lessonDuration
        ];
        $html = $this->renderView($this->template, $params);

        if ($isTrainer) {
            $email = $lesson->getTrainer()->getEmail();
        } else {
            $email = $lesson->getStudent()->getEmail();
        }

        return $this->makeMessage($this->subject)
            ->setTo($email)
            ->setBody($html, 'text/html');
    }
}

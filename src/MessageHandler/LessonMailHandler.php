<?php


namespace App\MessageHandler;


use App\Entity\Lessons;
use App\Service\UserService;
use App\Traits\RenderView;
use Carbon\Carbon;
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
        $lessonDuration = (new Carbon($lesson->getDateTimeTo()->format('Y-m-d H:i:s')))
            ->diffInHours((new Carbon($lesson->getDateTimeFrom()->format('Y-m-d H:i:s'))));

        $params = [
            'user' => $lesson->getStudent(),
            'trainer' => $lesson->getTrainer(),
            'lesson' => $lesson,
            'game' => $lesson->getTrainer()->getGame(),
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

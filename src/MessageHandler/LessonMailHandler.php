<?php


namespace App\MessageHandler;


use App\Entity\Lessons;
use App\Entity\Teachers;
use App\Service\TimeZoneService;
use App\Service\UserService;
use App\Traits\RenderView;
use Carbon\Carbon;
use Swift_Message;

trait LessonMailHandler
{
    /**
     * @var TimeZoneService
     */
    public $timezoneService;

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
     * @param Lessons $lesson
     * @return Swift_Message
     */
    public function makeStudentEmail(Lessons $lesson)
    {
        $this->timezoneService = new TimeZoneService();
        
        [$gmt, $gmtNumeric, $timeZone] = $this->timezoneService->getGmtTimezoneString(
            $lesson->getTrainer()->getTimeZone() ?? Teachers::DEFAULT_TIMEZONE
        );

        if ($gmtNumeric < 0) {
            $trainerTimezone = -(int)gmdate("g", $gmtNumeric);
        } else {
            $trainerTimezone = (int)gmdate("g", $gmtNumeric);
        }

        if ($lesson->getStudent()->getTimezone() !== null) {
            [$gmt, $gmtNumeric, $timeZone] = $this->timezoneService->getGmtTimezoneString(
                $lesson->getStudent()->getTimeZone()
            );
            if ($gmtNumeric < 0) {
                $userTimezone = -(int)gmdate("g", $gmtNumeric);
            } else {
                $userTimezone = (int)gmdate("g", $gmtNumeric);
            }
        }

        if ($trainerTimezone < 0 and $userTimezone < 0) {
            $timeOffset = $trainerTimezone + abs($userTimezone);
        } elseif($trainerTimezone < 0 or $userTimezone < 0) {
            $timeOffset = $trainerTimezone + $userTimezone;
        } else {
            $timeOffset = $trainerTimezone - $userTimezone;
        }

        $carbon = (new Carbon($lesson->getDateTimeTo()->format('Y-m-d H:i:s')))
            ->diffInHours((new Carbon($lesson->getDateTimeFrom()->format('Y-m-d H:i:s'))));

        if($timeOffset < 0){
            $carbon->setHour($timeOffset);
        } else {
            $carbon->setHour(0 - $timeOffset);
        }

        $lessonDuration = $carbon;

        $params = [
            'user' => $lesson->getStudent(),
            'trainer' => $lesson->getTrainer(),
            'lesson' => $lesson,
            'game' => $lesson->getTrainer()->getGame(),
            'isTrainer' => false,
            'lessonDuration' => $lessonDuration
        ];
        $html = $this->renderView($this->template, $params);

        $email = $lesson->getStudent()->getEmail();

        return $this->makeMessage($this->subject)
            ->setTo($email)
            ->setBody($html, 'text/html');
    }

    /**
     * @param Lessons $lesson
     * @return Swift_Message
     */
    public function makeTeacherEmail(Lessons $lesson)
    {
        $lessonDuration = (new Carbon($lesson->getDateTimeTo()->format('Y-m-d H:i:s')))
            ->diffInHours((new Carbon($lesson->getDateTimeFrom()->format('Y-m-d H:i:s'))));

        $params = [
            'user' => $lesson->getStudent(),
            'trainer' => $lesson->getTrainer(),
            'lesson' => $lesson,
            'game' => $lesson->getTrainer()->getGame(),
            'isTrainer' => true,
            'lessonDuration' => $lessonDuration
        ];
        $html = $this->renderView($this->template, $params);

        $email = $lesson->getTrainer()->getEmail();

        return $this->makeMessage($this->subject)
            ->setTo($email)
            ->setBody($html, 'text/html');
    }
}

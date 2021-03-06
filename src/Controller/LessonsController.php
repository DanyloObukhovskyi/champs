<?php

namespace App\Controller;

use App\Entity\Bot;
use App\Entity\DiscordChannel;
use App\Entity\Lessons;
use App\Entity\Payment;
use App\Entity\PurseHistory;
use App\Entity\Review;
use App\Entity\Schedule;
use App\Entity\Teachers;
use App\Entity\User;
use App\Message\EndLessonMail;
use App\Message\PaymentLessonMail;
use App\Service\LessonService;
use App\Service\LessonTimeService;
use App\Service\ScheduleService;
use App\Service\TimeZoneService;
use Carbon\Carbon;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Swift_Mailer;
use Symfony\Contracts\Translation\TranslatorInterface;
use Symfony\Contracts\HttpClient\HttpClientInterface;
use Symfony\Component\Mime\Part\DataPart;
use Symfony\Component\Mime\Part\Multipart\FormDataPart;

/**
 * @Route("/{_locale}", requirements={"locale": "ru"})
 */
class LessonsController extends AbstractController
{
    /**
     * @var LessonService
     */
    public $lessonService;

    /**
     * @var ScheduleService
     */
    public $scheduleService;

    /**
     * @var LessonTimeService
     */
    public $lessonTimeService;

    /**
     * @var TimeZoneService
     */
    public $timezoneService;

    private $client;

    private $discord_channel;

    /**
     * LessonsController constructor.
     */
    public function __construct(EntityManagerInterface $entityManager, HttpClientInterface $client)
    {
        $this->lessonService = new LessonService($entityManager);
        $this->scheduleService = new ScheduleService($entityManager);

        $this->lessonTimeService = new LessonTimeService($entityManager);
        $this->timezoneService = new TimeZoneService();

        $this->client = $client;
    }

    /**
     * Lessons /ru/lessons/*
     *
     * @Route("/lessons/set-status-ended/{form}", name="student_trainer_lesson_end")
     */
    public function setLessonEnd($form, Swift_Mailer $mailer)
    {
        $form = json_decode($form, false);

        $lesson_id = $form->lesson_id;
        $entityManager = $this->getDoctrine()->getManager();
        /** @var Lessons $lesson */
        $lesson = $entityManager->getRepository(Lessons::class)->find($lesson_id);

        if (!$lesson) {
            throw $this->createNotFoundException(
                'No lesson found for id ' . $lesson_id
            );
        }

        $userId = (int)$form->user_id;

        if (($lesson->getTrainer()->getId() === $userId) || ($lesson->getStudent()->getId() === $userId)) {
            if ($form->istrainer === true) {
                $this->dispatchMessage(new EndLessonMail($mailer, $lesson, true));

                $lesson->setTrainerStatus(Lessons::STATUS_ENDED);

            } else {
                $lesson->setStudentStatus(Lessons::STATUS_ENDED);
            }

            if (($lesson->getTrainerStatus()) && ($lesson->getStudentStatus())) {
                $lesson->setStatus(Lessons::STATUS_ENDED);
                /** @var User $user */
                $user = $this->getDoctrine()
                    ->getRepository(User::class)
                    ->find(intval($userId));

                /** @var PurseHistory $purse */
                $purse = new PurseHistory();
                $purse->setUser($user);
                $purse->setOperation($lesson->getCost() / 2);
                $purse->setDatetime($lesson->getDateTimeFrom());

                $user->setPurse($user->getPurse() + $purse->getOperation());

                $entityManager->persist($purse, $user, $lesson);

            }
        } else {
            return new JsonResponse('?? ?????? ?????? ???????? ???? ???????????????? ????????????????????');
        }

        $entityManager->persist($lesson);
        $entityManager->flush();

        return $this->json($this->lessonService->lessonDecorator($lesson));
    }

    /**
     * Lessons /ru/lessons/*
     *
     * @Route("/lessons/create/", methods={"GET","POST"}, name="create_student_trainer_lesson")
     */
    public function createNewLesson(Request $request)
    {
        $entityManager = $this->getDoctrine()->getManager();
        $data = json_decode($request->getContent(), false);

        /** @var User $authUser */
        $authUser = $this->getUser();

        /** @var User $trainer */
        $trainer = $entityManager->getRepository(User::class)->find($data->trainer_id);

        /** @var Teachers $trainerEntity */
        $trainerEntity = $entityManager->getRepository(Teachers::class)->findOneBy([
            'userid' => $trainer->getId()
        ]);

//        if ($trainerEntity->getIsLessonCost() and count($data->lessons) % Lessons::LESSON_HOURS === 0) {
//            return $this->json(['message' => '???????????????? ????????????!'], 422);
//        }

        [$gmt, $gmtNumeric, $timeZone] = $this->timezoneService->getGmtTimezoneString(
            $trainer->getTimeZone() ?? Teachers::DEFAULT_TIMEZONE
        );
        if ($gmtNumeric < 0) {
            $trainerTimezone = -(int)gmdate("g", $gmtNumeric);
        } else {
            $trainerTimezone = (int)gmdate("g", $gmtNumeric);
        }
        if ($authUser->getTimezone() !== null) {
            [$gmt, $gmtNumeric, $timeZone] = $this->timezoneService->getGmtTimezoneString(
                $authUser->getTimeZone()
            );
            if ($gmtNumeric < 0) {
                $userTimezone = -(int)gmdate("g", $gmtNumeric);
            } else {
                $userTimezone = (int)gmdate("g", $gmtNumeric);
            }
        } else {
            $userTimezone = (int)$data->timezone;
        }
        $timeOffset = 0;
        if ($trainerTimezone < 0 and $userTimezone < 0) {
            $timeOffset = $trainerTimezone + abs($userTimezone);
        } elseif($trainerTimezone < 0 or $userTimezone < 0) {
            $timeOffset = $trainerTimezone + $userTimezone;
        } else {
            $timeOffset = $trainerTimezone - $userTimezone;
        }

        $lessons = [];
        foreach ($data->lessons as $lesson) {
            $carbon = Carbon::createFromFormat('d.m.Y', $lesson->date);

            if($timeOffset < 0){
                $carbon->setHour($timeOffset);
            } else {
                $carbon->setHour(0 - $timeOffset);
            }
            $carbon->setHour($carbon->hour + $lesson->time);

            $lessons[] = [
                'date' => $carbon->format('d.m.Y'),
                'time' => $carbon->hour
            ];
        }
        /** @var User $user */
        $user = $this->getUser();

        $lessons = $this->lessonService
            ->decorationLessonsForPayed($lessons);

        [$lessonIds] = $this->lessonService
            ->createLessons(
                $lessons,
                $trainer,
                $user,
                $data->type
            );
        
        return $this->json(['ids' => $lessonIds]);
    }

    /**
     * Lessons /ru/lessons/finished/*
     *
     * @Route("/lesson/finished", methods={"GET","POST"}, name="finished.user.lessons")
     */
    public function getFinishedUserLessons(Request $request)
    {
        $userId = $request->get('student_id', null);
        $trainerId = $request->get('trainer_id', null);

        $lessons = $this->lessonService->getEndedLessonsByTrainerAndUser($trainerId, $userId);

        foreach ($lessons as $lesson) {
            $student = $this->getDoctrine()->getRepository(User::class)->find($userId);
            $trainer = $this->getDoctrine()->getRepository(User::class)->find($trainerId);

            /** @var Review $lessonReview */
            $lessonReview = $this->getDoctrine()
                ->getRepository(Review::class)
                ->findByLessonAndTrainerAndStudent($lesson, $trainer, $student);

            if (empty($lessonReview)) {
                return $this->json($lesson->getId());
            }
        }
        return $this->json(null);
    }

    /**
     * Lessons /ru/lessons/cancel/*
     *
     * @Route("/lesson/cancel/{lessonId}", methods={"GET","POST"}, name="lesson.cancel")
     */
    public function cancelLesson($lessonId)
    {
        $trainer = $this->getUser();
        $lesson = $this->lessonService->find($lessonId);

        if (isset($lesson)) {
            if (empty($trainer)) {
                return $this->render('templates/login.html.twig', [
                    'router' => 'login'
                ]);
            }
            if ($trainer->getId() === $lesson->getTrainer()->getId()) {
                $lesson = $this->lessonService->setCanceled($lesson);
                $lessonTimes = $this->lessonTimeService->getTimesByLesson($lesson);

                /** @var Schedule $time */
                foreach ($lessonTimes as $time) {
                    $this->scheduleService->setScheduleStatus($time, Schedule::TIME_STATUS_BLOCK);
                }
                $this->addFlash('notice', '???????? ?????? ??????????????!');
            }
        }
        return $this->redirectToRoute('timetable_index');
    }

    /**
     * @Route("/cabinet/lessons", name="user_cabinet_lessons")
     */
    public function getLessons(Request $request, TranslatorInterface $translator)
    {
        /** @var User $user */
        $user = $this->getUser();
        $data = json_decode($request->getContent(), false);

        if (!$user->getIsTrainer()) {
            $lessons = $this->getDoctrine()
                ->getRepository(Lessons::class)
                ->findByStudentId($user->getId());
        } else {
            $lessons = $this->getDoctrine()
                ->getRepository(Lessons::class)
                ->findByTrainerId($user->getId());
        }
        $parseLessons = $this->decorateLessons($lessons, $user, $data->timezone, $translator);

        return $this->json($parseLessons);
    }

    /**
     * @param $lessons
     * @param $user
     * @param $timezone
     * @param $translator
     * @return array
     * @throws \Doctrine\ORM\NoResultException
     * @throws \Doctrine\ORM\NonUniqueResultException
     * @throws \Doctrine\ORM\ORMException
     * @throws \Doctrine\ORM\OptimisticLockException
     */
    public function decorateLessons($lessons, $user, $timezone, $translator)
    {
        $parseLessons = [];
        /** @var Lessons $lesson */
        foreach ($lessons as $lesson) {
            $payment = $lesson->getPayment();
            if(!empty($payment) && $payment->getPaymentStatus() === Payment::STATUS_OK){
                $dateFrom = $lesson->getDateTimeFrom()->format('Y.m.d H');
                $timeOffset = 0;

                if ($lesson->getDateTimeFrom() > new \DateTime()) {
                    $type = 'future';
                } else {
                    $type = 'past';
                }
                $timeOffset = 0;
                $trainer = $lesson->getTrainer();


                if (!$user->getIsTrainer() && $trainer->getTimeZone() !== $user->getTimeZone()) {
                    if (!empty($user->getTimezone())) {
                        $userTimezone = $user->getTimeZone();
                    } else {
                        $userTimezone = User::DEFAULT_TIMEZONE;
                    }
                    $dateFrom = $this->parseDateToUserRightTimezone($dateFrom, $userTimezone);
                } else {
                    $dateFrom = $this->parseDateToUserTimezone($dateFrom, $timeOffset);
                }

                $dateRu = $this->dateTranslate($dateFrom, $translator);

                $parseLessons[$type][$dateRu][] = $this->lessonService->decorateLesson($lesson, $user, $timezone, $translator);
            }

        }
        return $parseLessons;
    }

    /**
     * @param $date
     * @param $timeOffset
     * @return string
     */
    public function parseDateToUserTimezone($date, $timeOffset)
    {
        $dateFrom = Carbon::createFromFormat('Y.m.d H', $date);
        $dateFrom->setHour($dateFrom->hour + $timeOffset);

        return $dateFrom;
    }

    /**
     * @Route("/cabinet/get/first-lessons/and/earned", name="cabinet_get_first_lessons_and_earned")
     */
    public function getFirstLessonsAndEarned(TranslatorInterface $translator)
    {
        /** @var User $user */
        $user = $this->getUser();

        $lessons = [];
        $earned = [];

        $currentMonth = $translator->trans('earned.per this month');
        $prevMonth = $translator->trans('earned.per previous month');

        $earned[$currentMonth] = 0;
        $earned[$prevMonth] = 0;

        if (isset($user) and $user->getIsTrainer()) {
            $lessonsEntities = $this->lessonService->getFutureByTeacher($user, 3);
            $lessons = $this->decorateLessons($lessonsEntities, $user, null, $translator);

            $date = Carbon::now();
            $date->setDay(1);

            $datePrev = Carbon::now()->setDay(1)->modify('- 1 month');

            $earned[$currentMonth] = $this->lessonService->getTrainerEarnedLessonsByMonth($user, $date);
            $earned[$prevMonth] = $this->lessonService->getTrainerEarnedLessonsByMonth($user, $datePrev);
        }

        return $this->json(
            compact(
                'lessons',
                'earned'
            )
        );
    }

    /**
     * @param $date
     * @param $translator
     * @return string
     */
    public function dateTranslate($date, $translator)
    {
        $dateString = $translator->trans($date->format('l'));
        $dateString .= ', ';
        $dateString .= $date->format('d ');
        $dateString .= $translator->trans($date->format('F'));

        return $dateString;
    }

    /**
     * @Route("/cabinet/lessons/getRoom/{lessonId}", name="discord_channel")
     */
    public function getRoomForLesson($lessonId, Request $request)
    {
        $entityManager = $this->getDoctrine()->getManager();
        $data = json_decode($request->getContent(), false);

        /** @var DiscordChannel $discord */
        $discord = $this->getDoctrine()
            ->getRepository(DiscordChannel::class)
            ->findOneBy([
                'lesson_id' => $lessonId
            ]);

        if(!empty($discord) && !empty($discord->getInviteLink())){
            return $this->json($discord->getInviteLink());
        } else {
            /** @var Lessons $lesson */
            $lesson = $this->getDoctrine()
                ->getRepository(Lessons::class)
                ->find($lessonId);

            $student = $lesson->getStudent();
            $trainer = $lesson->getTrainer();

            $bots = $this->getDoctrine()
                ->getRepository(Bot::class)
                ->findAll();

            /** @var Bot $bot */
            foreach ($bots as $bot){
                if($bot->getStatus() == 2){
                    /** @var Lessons $lastLesson */
                    $lastLesson = $this->getDoctrine()
                        ->getRepository(Lessons::class)
                        ->findBy(['bot' => $bot->getId()], ['id' => 'DESC'], 1);

                    if(!empty($lastLesson)){
                        /** @var DiscordChannel $lastDiscordChannelBot */
                        $lastDiscordChannelBot = $this->getDoctrine()
                            ->getRepository(DiscordChannel::class)
                            ->findBy(['lesson_id' => $lastLesson[0]->getId()], ['id' => 'DESC'], 1);

                        if(!empty($lastDiscordChannelBot)){
                            $discordChannelInfo = $this->client->request('GET', 'http://172.104.237.6:8000/api/training/'.$lastDiscordChannelBot[0]->getDiscordId());
                            $decodedChannelPayload = $discordChannelInfo->toArray();
                            if($decodedChannelPayload['status'] === 'finished'){
                                $channel_name = $student->getNickname() . '#'.$lessonId;
                                $lessonTime = Carbon::now()->format('Y-m-d H:i:s');

                                $formFields = [
                                    'bot_token' => $bot->getToken(),
                                    'training_start_dt' => $lessonTime,
                                    'trainer_id' => $trainer->getDiscordId(),
                                    'channel_name' => $channel_name
                                ];

                                $formData = new FormDataPart($formFields);

                                $headers = $formData->getPreparedHeaders()->toArray();
                                $headers['Accept'] = 'application/json';
                                $discordRequest = $this->client->request('POST', 'http://172.104.237.6:8000/api/bot/', [
                                    'headers' => $headers,
                                    'body' => $formData->bodyToString()
                                ]);

                                $decodedPayload = $discordRequest->toArray();

                                $this->getActiveDiscordChannel($decodedPayload);

                                if($this->discord_channel['status'] !== 'new'){
                                    $lesson->setBot($bot);
                                    $entityManager->persist($lesson);
                                    $entityManager->flush();

                                    /** @var DiscordChannel $discord */
                                    $discord = new DiscordChannel();
                                    $discord->setUserId($student->getId());
                                    $discord->setDiscordId($decodedPayload['pk']);
                                    $discord->setTrainerId($trainer->getId());
                                    $discord->setLessonId($lesson->getId());
                                    $discord->setChannelName($channel_name);
                                    $discord->setInviteLink($this->discord_channel['invite_link']);
                                    $entityManager->persist($discord);
                                    $entityManager->flush();

                                    return $this->json($discord->getInviteLink());
                                }
                                break;
                            }
                        }
                    }
                } else {
                    $channel_name = $student->getNickname() . '#'.$lessonId;
                    $lessonTime = Carbon::now()->format('Y-m-d H:i:s');

                    $formFields = [
                        'bot_token' => $bot->getToken(),
                        'training_start_dt' => $lessonTime,
                        'trainer_id' => $trainer->getDiscordId(),
                        'channel_name' => $channel_name
                    ];

                    $formData = new FormDataPart($formFields);

                    $headers = $formData->getPreparedHeaders()->toArray();
                    $headers['Accept'] = 'application/json';
                    $discordRequest = $this->client->request('POST', 'http://172.104.237.6:8000/api/bot/', [
                        'headers' => $headers,
                        'body' => $formData->bodyToString()
                    ]);

                    $decodedPayload = $discordRequest->toArray();

                    $this->getActiveDiscordChannel($decodedPayload);

                    if($this->discord_channel['status'] !== 'new'){
                        $lesson->setBot($bot);
                        $entityManager->persist($lesson);
                        $entityManager->flush();

                        /** @var DiscordChannel $discord */
                        $discord = new DiscordChannel();
                        $discord->setUserId($student->getId());
                        $discord->setDiscordId($decodedPayload['pk']);
                        $discord->setTrainerId($trainer->getId());
                        $discord->setLessonId($lesson->getId());
                        $discord->setChannelName($channel_name);
                        $discord->setInviteLink($this->discord_channel['invite_link']);
                        $entityManager->persist($discord);
                        $entityManager->flush();

                        $bot->setStatus(2);
                        $entityManager->persist($bot);
                        $entityManager->flush();

                        return $this->json($discord->getInviteLink());
                    }
                    break;
                }
            }
        }
        return $this->json('???? ???????????????????? ?????????????? ?????????? , ???????????????????? ??????????');
    }

    public function getActiveDiscordChannel($decodedPayload)
    {
        $discordChannelInfo = $this->client->request('GET', 'http://172.104.237.6:8000/api/training/'.$decodedPayload['pk']);
        $decodedChannelPayload = $discordChannelInfo->toArray();
        if($decodedChannelPayload['status'] !== 'new' && !empty($decodedChannelPayload['invite_link'])){
            $this->discord_channel = $decodedChannelPayload;
            return true;
        } else {
            $this->getActiveDiscordChannel($decodedPayload);
        }
    }

    /**
     * @param $date
     * @param $timeOffset
     * @return string
     */
    public function parseDateToUserRightTimezone($date, $timeZone)
    {
        $dateFrom = Carbon::createFromFormat('Y.m.d H', $date);
        $dateFrom->setTimezone($timeZone);

        return $dateFrom;
    }
}

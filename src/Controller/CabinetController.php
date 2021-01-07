<?php

namespace App\Controller;

use App\Entity\GameRank;
use App\Entity\Lessons;
use App\Entity\Schedule;
use App\Entity\Teachers;
use App\Entity\User;
use App\Service\Game\GameRankService;
use App\Service\LessonService;
use App\Service\ScheduleService;
use App\Service\TeacherService;
use App\Service\TimeZoneService;
use App\Service\UserService;
use App\Service\YouTubeService;
use Carbon\Carbon;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Validator\Constraints\Email;
use Symfony\Component\Validator\Constraints\Image;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Contracts\Translation\TranslatorInterface;

/**
 * @Route("/{_locale}", requirements={"locale": "ru"})
 */
class CabinetController extends AbstractController
{
    /**
     * @var EntityManagerInterface
     */
    public $entityManager;

    /**
     * @var UserService
     */
    public $userService;

    /**
     * @var LessonService
     */
    public $lessonService;

    /**
     * @var TeacherService
     */
    public $teacherService;

    /**
     * @var TimeZoneService
     */
    public $timezoneService;

    /**
     * @var UserPasswordEncoderInterface
     */
    public $passwordEncoder;

    /**
     * @var YouTubeService
     */
    public $youTubeService;

    /**
     * @var GameRankService
     */
    public $gameRankService;

    /**
     * @var ScheduleService
     */
    public $scheduleService;

    public function __construct(EntityManagerInterface $entityManager, UserPasswordEncoderInterface $passwordEncoder)
    {
        $this->entityManager = $entityManager;
        $this->passwordEncoder = $passwordEncoder;

        $this->timezoneService = new TimeZoneService();
        $this->youTubeService = new YouTubeService();

        $this->userService = new UserService($entityManager);
        $this->lessonService = new LessonService($entityManager);

        $this->teacherService = new TeacherService($entityManager);
        $this->gameRankService = new GameRankService($entityManager);

        $this->scheduleService = new ScheduleService($entityManager);
    }


    /**
     * @Route("/{type}/cabinet/{page}", name="user_cabinet", defaults={"page"=null})
     */
    public function page($type)
    {
        if ($this->getUser() === null) {
            return $this->redirectToRoute('main');
        }
        return $this->render('templates/user.cabinet.html.twig', [
            'router' => 'cabinet',
            'type' => $type,
        ]);
    }

    /**
     * @Route("/auth/user/full", name="user_cabinet_ajax_full")
     */
    public function authUserFull()
    {
        /** @var User $user */
        $user = $this->getUser();

        return $this->json($this->getUserData($user));
    }

    public function getUserData(User $user)
    {
        $userLvl = 0;

        if (!empty($user->getGame())) {
            $gameRank = $this->gameRankService->getByGameAndPoints(
                $user->getGame(),
                $user->getRang()
            );
            /** @var GameRank $gameRank */
            if (isset($gameRank)) {
                $userLvl = $gameRank->getRank();
            }
        }

        return [
            'id' => $user->getId(),
            'email' => $user->getEmail(),
            'nickname' => $user->getNickname(),
            'photo' => $user->getPhoto(),
            'name' => $user->getName(),
            'game' => $user->getGame(),
            'rank' => $user->getRang(),
            'family' => $user->getFamily(),
            'discord' => $user->getDiscord(),
            'purse' => $user->getPurse(),
            'timezone' => $user->getTimezone(),
            'isTrainer' => $user->getIsTrainer(),
            'level' => $userLvl
        ];
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
            $dateFrom = $lesson->getDateTimeFrom()->format('Y.m.d H');
            $timeOffset = 0;

            if ($lesson->getDateTimeFrom() > new \DateTime()) {
                $type = 'future';
            } else {
                $type = 'past';
            }
            $dateFrom = $this->parseDateToUserTimezone($dateFrom, $timeOffset);

            $dateRu = $this->dateTranslate($dateFrom, $translator);

            $parseLessons[$type][$dateRu][] = $this->decorateLesson($lesson, $user, $timezone, $translator);
        }
        return $parseLessons;
    }

    /**
     * @param Lessons $lesson
     * @param $user
     * @param $timezone
     * @param $translator
     * @return array
     * @throws \Doctrine\ORM\NoResultException
     * @throws \Doctrine\ORM\NonUniqueResultException
     * @throws \Doctrine\ORM\ORMException
     * @throws \Doctrine\ORM\OptimisticLockException
     */
    public function decorateLesson(Lessons $lesson, $user, $timezone = null, $translator)
    {
        $trainer = $this->teacherService->findByUserId($lesson->getTrainer()->getId());

        $dateFrom = $lesson->getDateTimeFrom()->format('Y.m.d H');
        if (empty($lesson->getDateTimeTo())) {
            $dateTo = $lesson->getDateTimeFrom()->modify('+1 hour')->format('Y.m.d H');
        } else {
            $dateTo = $lesson->getDateTimeTo()->format('Y.m.d H');
        }

        $timeOffset = 0;

        if (!$user->getIsTrainer()) {
            [$gmt, $gmtNumeric, $timeZone] = $this->timezoneService->getGmtTimezoneString(
                $trainer->getTimeZone() ?? Teachers::DEFAULT_TIMEZONE
            );
            if ($gmtNumeric < 0) {
                $trainerTimezone = -(int)gmdate("g", $gmtNumeric);
            } else {
                $trainerTimezone = (int)gmdate("g", $gmtNumeric);
            }
            $timeOffset = $trainerTimezone - (int)$timezone;
        }
        $dateFrom = $this->parseDateToUserTimezone($dateFrom, $timeOffset);
        $dateTo = $this->parseDateToUserTimezone($dateTo, $timeOffset);

        $trainingTogetherCount = $this->lessonService->getTrainingTogetherCount($lesson);
        $decorateTrainer = $this->userService->decorator($lesson->getTrainer());

        $month = $translator->trans($dateFrom->format('F'));

        return [
            'id' => $lesson->getId(),
            'type' => $lesson->getType(),
            'cost' => $lesson->getCost(),
            'month' => $month,
            'type' => $lesson->getType(),
            'trainerNotice' => $lesson->getTrainerNotice(),
            'typeRu' => $translator->trans('trainings.' . $lesson->getType()),
            'dateFrom' => $dateFrom->format('Y.m.d H:i:s'),
            'dateTo' => $dateTo->format('Y.m.d H:i:s'),
            'trainerStatus' => $lesson->getTrainerStatus(),
            'studentStatus' => $lesson->getStudentStatus(),
            'trainingTogetherCount' => $trainingTogetherCount,
            'trainer' => $decorateTrainer,
            'student' => [
                'id' => $lesson->getStudent()->getId(),
                'nickname' => $lesson->getStudent()->getNickname(),
                'photo' => $lesson->getStudent()->getPhoto(),
            ]
        ];
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
     * @Route("/ajax/cabinet/get/timezones", name="user_cabinet_timezones")
     */
    public function getTimezones()
    {
        $timezones = $this->timezoneService->getTimeZonesList();

        return $this->json($timezones);
    }

    /**
     * @Route("/ajax/cabinet/update/user", name="user_cabinet_update")
     */
    public function updateUserData(Request $request, ValidatorInterface $validator, TranslatorInterface $translator)
    {
        $data = (object)$request->request->all();

        /** @var User|null $user */
        $user = $this->getUser();
        $file = $request->files->get('avatar');
        $errors = [];

        $avatarError = null;

        if (!empty($data->email)) {
            $error = $this->validationEmail($validator, $translator, $data->email, $user);
            if (isset($error)) {
                $errors['email'] = $error;
            }
        }
        if (!empty($file)) {
            $result = $this->validationAndUploadAvatar($validator, $file, $user);

            if (!empty($result['error'])) {
                $errors['avatar'] = $result['error'];
            } else {
                $data->avatar = $result['filename'];
            }
        }
        if (!empty($data->password)) {
            $this->updateUserPassword($user, $data->password);
        }
        if (empty($errors)) {
            $user = $this->userService->updateUser($user, $data);
        } else {
            return $this->json($errors, 422);
        }
        return $this->json($this->getUserData($user));
    }

    /**
     * @param $validator
     * @param $translator
     * @param $email
     * @param null $user
     * @return |null
     */
    public function validationEmail($validator, $translator, $email, $user = null)
    {
        $error = null;

        if (empty($user)) {
            $user = $this->getUser();
        }
        $violations = $validator->validate(
            $email,
            new Email([])
        );
        if ($violations->count() > 0) {
            $violation = $violations[0];

            $error = $violation->getMessage();
        } else {
            $findUser = $this->userService->findByEmail($email, $user->getId());

            if (isset($findUser)) {
                $error = $translator->trans('This email is already taken');
            }
        }
        return $error;
    }

    /**
     * @param $validator
     * @param $file
     * @param $user
     * @return array
     */
    public function validationAndUploadAvatar($validator, $file, $user): array
    {
        global $kernel;

        $violations = $validator->validate(
            $file,
            new Image([])
        );
        $error = null;
        $filename = null;

        $path = $kernel->getProjectDir() . $this->getParameter('upload-avatar');

        if ($violations->count() > 0) {
            $violation = $violations[0];
            $error = $violation->getMessage();
        } else {
            $filename = md5(uniqid('', true)) . '.' . $file->guessExtension();
            $file->move($path, $filename);

            $filesystem = new Filesystem();
            $filesystem->remove($path . $user->getPhoto());
        }
        return [
            'filename' => $filename,
            'error' => $error
        ];
    }

    /**
     * @param User $user
     * @param $password
     */
    public function updateUserPassword(User $user, $password): void
    {
        $user->setPassword($this->passwordEncoder->encodePassword($user, $password));

        $this->entityManager->persist($user);
        $this->entityManager->flush();
    }

    /**
     * @Route("/ajax/cabinet/get/videos", name="cabinet_videos")
     */
    public function getVideos(TranslatorInterface $translator)
    {
        try {
            $videos = $this->youTubeService->getVideoList(10);
        } catch (\Exception $e) {
            $videos = [];
        }
        $parseVideos = [];

        foreach ($videos as $video) {
            $month = $translator->trans($video['date']->format('F'));
            $date = $video['date']->format('d ') . $month . $video['date']->format(' Y');

            $video['date'] = $date;
            $parseVideos[] = $video;
        }
        return $this->json($parseVideos);
    }

    /**
     * @Route("/ajax/cabinet/set/trainer/notice/{lessonId}", name="cabinet_set_trainer_notice")
     */
    public function setTrainerLessonNotice(Request $request, TranslatorInterface $translator, $lessonId)
    {
        $lesson = $this->lessonService->find($lessonId);
        $data = json_decode($request->getContent(), false);

        $user = $this->getUser();

        if (isset($lesson) and isset($data->notice)) {
            $lesson->setTrainerNotice($data->notice);

            $this->entityManager->persist($lesson);
            $this->entityManager->flush();
        }
        $parseLesson = $this->decorateLesson($lesson, $user, null, $translator);

        return $this->json($parseLesson);
    }

    /**
     * @Route("/ajax/cabinet/set/lesson/status/{lessonId}", name="cabinet_set_lesson_status")
     */
    public function setLessonStatus(TranslatorInterface $translator, $lessonId)
    {
        /** @var User $user */
        $user = $this->getUser();
        $lesson = $this->lessonService->find($lessonId);

        if ($user->getIsTrainer()) {
            $lesson->setTrainerStatus(true);
        } else {
            $lesson->setStudentStatus(true);
        }
        $this->entityManager->persist($lesson);
        $this->entityManager->flush();

        $parseLesson = $this->decorateLesson($lesson, $user, null, $translator);

        return $this->json($parseLesson);
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

            $datePrev = Carbon::now()->subMonth();
            $datePrev->setDay(1);

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
     * Schedule /calendar/*
     *
     * @Route("/cabinet/calendar/set/trainer/date/day", methods={"POST"})
     */
    public function toggleTrainerScheduleDay(Request $request)
    {
        $form = json_decode($request->getContent(), false);
        /** @var User $user */
        $user = $this->getUser();

        $schedules = [];
        if (isset($form->date) and isset($form->time) and isset($user)) {
            $date = new \DateTime($form->date);

            /** @var Schedule $schedule
             */
            $schedule = $this->scheduleService->getByTrainerDateAndTime(
                $user,
                $date,
                $form->time->from
            );
            if (isset($schedule)) {
                if ($schedule->getStatus() !== Schedule::TIME_STATUS_RESERVED) {
                    if ($schedule->getStatus() === Schedule::TIME_STATUS_BLOCK) {
                        $schedule->setStatus(Schedule::TIME_STATUS_OPEN);
                    } else {
                        $schedule->setStatus(Schedule::TIME_STATUS_BLOCK);
                    }

                }
            } else {
                $schedule = new Schedule();
                $schedule->setTrainer($user);
                $schedule->setDate($date);
                $schedule->setTime($form->time->from);
                $schedule->setStatus(Schedule::TIME_STATUS_OPEN);
            }
            $this->entityManager->persist($schedule);
            $this->entityManager->flush();

            $schedules = $this->getTrainerScheduleDay($user, $date);
        }
        return $this->json($schedules);
    }

    /**
     * @Route("/cabinet/calendar/trainer/date/day", methods={"POST"})
     */
    public function viewCabinetScheduleDay(Request $request)
    {
        $form = json_decode($request->getContent(), false);
        /** @var User $user */
        $user = $this->getUser();
        $date = new \DateTime($form->date);

        return $this->json($this->getTrainerScheduleDay($user, $date));
    }

    /**
     * @param User $trainer
     * @param $date
     * @return array
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function getTrainerScheduleDay(User $trainer, $date)
    {
        $user = $this->getUser();

        $schedule = [];
        if (isset($user)) {
            $schedule = $this->scheduleService->createDay($trainer->getId(), $date);
        }
        return $schedule;
    }
}

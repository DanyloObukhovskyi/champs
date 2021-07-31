<?php

namespace App\Controller;

use App\Entity\GameRank;
use App\Entity\Lessons;
use App\Entity\Schedule;
use App\Entity\Setting;
use App\Entity\Teachers;
use App\Entity\User;
use App\Service\Game\GameRankService;
use App\Service\LessonService;
use App\Service\ScheduleService;
use App\Service\Setting\SettingService;
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

    /**
     * @var TranslatorInterface
     */
    public $translator;

    /**
     * @var ValidatorInterface
     */
    public $validator;

    /**
     * @var SettingService ]
     */
    public $settingService;

    public const CABINET_TYPE_TRAINER = 'trainer';

    public const CABINET_TYPE_USER = 'user';

    public function __construct(
        EntityManagerInterface $entityManager,
        UserPasswordEncoderInterface $passwordEncoder,
        TranslatorInterface $translator,
        ValidatorInterface $validator
    )
    {
        $this->entityManager = $entityManager;
        $this->passwordEncoder = $passwordEncoder;

        $this->translator = $translator;
        $this->validator = $validator;

        $this->timezoneService = new TimeZoneService();
        $this->youTubeService = new YouTubeService();

        $this->userService = new UserService($entityManager);
        $this->lessonService = new LessonService($entityManager);

        $this->teacherService = new TeacherService($entityManager);
        $this->gameRankService = new GameRankService($entityManager);

        $this->scheduleService = new ScheduleService($entityManager);
        $this->settingService = new SettingService($entityManager);
    }


    /**
     * @Route("/{type}/cabinet/{page}", name="user_cabinet", defaults={"page"=null})
     */
    public function page(Request $request, $type)
    {
        if ($this->getUser() === null) {
            return $this->redirectToRoute('main');
        }
        if ($type === self::CABINET_TYPE_TRAINER) {
            /** @var User $user */
            $user = $this->getUser();
            if (!$user->getIsTrainer()) {
                return $this->redirectToRoute('user_cabinet', ['type' => 'user']);
            }
        }
        return $this->render('templates/user.cabinet.html.twig', [
            'router' => 'cabinet',
            'type' => $type,
        ]);
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
    public function updateUserData(Request $request, ValidatorInterface $validator)
    {
        $data = (object)$request->request->all();

        /** @var User|null $user */
        $user = $this->getUser();
        $file = $request->files->get('avatar');
        $errors = [];

        $avatarError = null;

        if (!empty($data->email)) {
            $error = $this->validationEmail($data->email, $user);
            if (isset($error)) {
                $errors['email'] = $error;
            }
        }
        if (!empty($file)) {
            $result = $this->validationAndUploadAvatar($file, $user);

            if (!empty($result['error'])) {
                $errors['avatar'] = $result['error'];
            } else {
                $data->avatar = $result['filename'];
            }
        }
        if (!empty($data->password)) {
            if ($user->getIsTrainer()) {
                if (isset($data->passwordOld)) {
                    $result = $this->passwordEncoder->isPasswordValid($user, $data->passwordOld);

                    if (!$result) {
                        $errors['password'] = $this->translator->trans('The password was entered incorrectly');
                    } else {
                        $error = $this->updateUserPassword($user, $data->password);
                        if (isset($error)) {
                            $errors['password'] = $error;
                        }
                    }
                }
            } else {
                $error = $this->updateUserPassword($user, $data->password);
                if (isset($error)) {
                    $errors['password'] = $error;
                }
            }
        }
        if (isset($data->trainer)) {
            /** @var Teachers|null $trainer */
            $trainer = $this->teacherService->findByUserId($user->getId());

            if (isset($trainer)) {
                $this->teacherService->updateTrainer($trainer, (object)$data->trainer);
            }
        }
        if (empty($errors)) {
            $user = $this->userService->updateUser($user, $data);
        } else {
            return $this->json($errors, 422);
        }
        return $this->json($this->userService->getUserData($user));
    }

    /**
     * @param $email
     * @param null $user
     * @return |null
     */
    public function validationEmail($email, $user = null)
    {
        $error = null;

        if (empty($user)) {
            $user = $this->getUser();
        }
        $violations = $this->validator->validate(
            $email,
            new Email([])
        );
        if ($violations->count() > 0) {
            $violation = $violations[0];

            $error = $violation->getMessage();
        } else {
            $findUser = $this->userService->findByEmail($email, $user->getId());

            if (isset($findUser)) {
                $error = $this->translator->trans('This email is already taken');
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
    public function validationAndUploadAvatar($file, $user): array
    {
        global $kernel;

        $violations = $this->validator->validate(
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
        }
        return [
            'filename' => $filename,
            'error' => $error
        ];
    }

    /**
     * @param User $user
     * @param $password
     * @return string|null
     */
    public function updateUserPassword(User $user, $password): ?string
    {
        $error = null;
        if (strlen($password) >= 5) {
            $user->setPassword($this->passwordEncoder->encodePassword($user, $password));

            $this->entityManager->persist($user);
            $this->entityManager->flush();
        } else {
            $error = $this->translator->trans('Password cannot be shorter than 5 characters');
        }
        return $error;
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
        $parseLesson = $this->lessonService->decorateLesson($lesson, $user, null, $translator);

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

        $parseLesson = $this->lessonService->decorateLesson($lesson, $user, null, $translator);

        return $this->json($parseLesson);
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
     * @Route("/cabinet/calendar/trainer/date/week", methods={"POST"})
     */
    public function viewCabinetScheduleWeek(Request $request)
    {
        $form = json_decode($request->getContent(), false);
        /** @var User $user */
        $user = $this->getUser();
        $dateCarbon = Carbon::createFromFormat('d.m.Y', $form->date);

        $date = $dateCarbon->startOfWeek();

        $week = [];
        for ($i = 0; $i < 7; $i++) {
            $dateTime = new \DateTime($date->format('d.m.Y'));

            $week[] = $this->getTrainerScheduleDay($user, $dateTime);
            $date = $date->addDays(1);
        }
        return $this->json($week);
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
            $schedule = $this->scheduleService->createDay(
                $trainer->getId(),
                $date,
                0,
                false
            );
        }
        return $schedule;
    }

    /**
     * @Route("/cabinet/vk/invite/link")
     */
    public function getVkInviteLink()
    {

        /** @var Setting|null $setting */
        $setting = $this->settingService->get('inviteVkLink');

        $vkLink = null;
        if (isset($setting)) {
            $vkLink = $setting->getValue();
        }
        return $this->json($vkLink);
    }
}

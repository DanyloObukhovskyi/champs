<?php

namespace App\Controller;

use App\Entity\Lessons;
use App\Entity\Teachers;
use App\Entity\User;
use App\Service\LessonService;
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

    public function __construct(EntityManagerInterface $entityManager, UserPasswordEncoderInterface $passwordEncoder)
    {
        $this->entityManager = $entityManager;
        $this->passwordEncoder = $passwordEncoder;

        $this->timezoneService = new TimeZoneService();
        $this->youTubeService = new YouTubeService();

        $this->userService = new UserService($entityManager);
        $this->lessonService = new LessonService($entityManager);
        $this->teacherService = new TeacherService($entityManager);
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
            'isTrainer' => $user->getIsTrainer()
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
        $parseLessons['future'] = [];
        $parseLessons['past'] = [];

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

            $parseLessons[$type][$dateRu][] = $this->decorateLesson($lesson, $user, $data->timezone, $translator);
        }
        return $this->json($parseLessons);
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
        $dateTo = $lesson->getDateTimeTo()->format('Y.m.d H');

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
        $violations = $validator->validate(
            $file,
            new Image([])
        );
        $error = null;
        $filename = null;
        if ($violations->count() > 0) {
            $violation = $violations[0];
            $error = $violation->getMessage();
        } else {
            $filename = md5(uniqid('', true)) . '.' . $file->guessExtension();
            $file->move($this->getParameter('upload-avatar'), $filename);

            $filesystem = new Filesystem();
            $filesystem->remove($this->getParameter('upload-avatar') . $user->getPhoto());
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

        if (isset($lesson) and isset($data->notice)){
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
}

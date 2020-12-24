<?php

namespace App\Controller;

use App\Entity\Lessons;
use App\Entity\Teachers;
use App\Entity\User;
use App\Service\LessonService;
use App\Service\News\NewsService;
use App\Service\TeacherService;
use App\Service\TimeZoneService;
use App\Service\UserService;
use Carbon\Carbon;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
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

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;

        $this->timezoneService = new TimeZoneService();

        $this->userService = new UserService($entityManager);
        $this->lessonService = new LessonService($entityManager);
        $this->teacherService = new TeacherService($entityManager);
    }


    /**
     * @Route("/{type}/cabinet/{page}", name="user_cabinet", defaults={"page"=null})
     */
    public function page($type)
    {
        if ($this->getUser() === null){
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

        $parseUser = [
            'id' => $user->getId(),
            'email' => $user->getEmail(),
            'nickname' => $user->getNickname(),
            'photo' => $user->getPhoto(),
            'name' => $user->getName(),
            'game' => $user->getGame(),
            'rank' => $user->getRank(),
            'family' => $user->getFamily(),
            'discord' => $user->getDiscord(),
            'purse' => $user->getPurse(),
        ];
        return $this->json($parseUser);
    }

    /**
     * @Route("/cabinet/lessons", name="user_cabinet_lessons")
     */
    public function getLessons(Request $request, TranslatorInterface $translator)
    {
        /** @var User $user */
        $user = $this->getUser();
        $data = json_decode($request->getContent(), false);

        if (!$user->getIsTrainer()){
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
            $trainer = $this->teacherService->findByUserId($lesson->getTrainer()->getId());

            $dateFrom = $lesson->getDateTimeFrom()->format('Y.m.d H');
            $dateTo = $lesson->getDateTimeTo()->format('Y.m.d H');

            $timeOffset = 0;

            if (!$user->getIsTrainer()){
                [$gmt, $gmtNumeric, $timeZone] = $this->timezoneService->getGmtTimezoneString(
                    $trainer->getTimeZone() ?? Teachers::DEFAULT_TIMEZONE
                );
                if ($gmtNumeric < 0){
                    $trainerTimezone = -(int)gmdate("g", $gmtNumeric);
                } else {
                    $trainerTimezone = (int)gmdate("g", $gmtNumeric);
                }
                $timeOffset = $trainerTimezone - (int)$data->timezone;
            }

            if ($lesson->getDateTimeFrom() > new \DateTime()) {
                $type = 'future';
            } else {
                $type = 'past';
            }
            $dateFrom = $this->parseDateToUserTimezone($dateFrom, $timeOffset);
            $dateTo = $this->parseDateToUserTimezone($dateTo, $timeOffset);

            $dateRu = $this->dateTranslate($dateFrom, $translator);

            $parseLessons[$type][$dateRu][] = [
                'id' => $lesson->getId(),
                'type' => $lesson->getType(),
                'const' => $lesson->getCost(),
                'dateFrom' => $dateFrom->format('Y.m.d H:i:s'),
                'dateTo' => $dateTo->format('Y.m.d H:i:s'),
                'trainerStatus' => $lesson->getTrainerStatus(),
                'studentStatus' => $lesson->getStudentStatus(),
                'trainer' => [
                    'id' => $lesson->getTrainer()->getId(),
                    'nickname' => $lesson->getTrainer()->getNickname(),
                    'photo' => $lesson->getTrainer()->getPhoto(),
                ],
                'student' => [
                    'id' => $lesson->getStudent()->getId(),
                    'nickname' => $lesson->getStudent()->getNickname(),
                    'photo' => $lesson->getStudent()->getPhoto(),
                ]
            ];
        }
        return $this->json($parseLessons);
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
}

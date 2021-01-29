<?php


namespace App\Service;


use App\Entity\Award;
use App\Entity\Balance;
use App\Entity\City;
use App\Entity\Country;
use App\Entity\Game;
use App\Entity\GameRank;
use App\Entity\Invite;
use App\Entity\Review;
use App\Entity\Teachers;
use App\Entity\TrainerAchievement;
use App\Entity\User;
use App\Repository\UserRepository;
use App\Service\Game\GameRankService;
use App\Service\News\NewsService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\File\UploadedFile;

class UserService extends EntityService
{
    public const FILTERS = [
        'studyCostFrom' => [
            'label' => 'Стоимость обучения от',
            'value' => null
        ],
        'studyCostTo' => [
            'label' => 'Стоимость обучения до',
            'value' => null
        ]
    ];

    public const GAMES = [
        [
            'name' => 'cs',
            'title' => 'CS:GO',
        ],
        [
            'name' => 'dota',
            'title' => 'DOTA 2',
        ],
        [
            'name' => 'lol',
            'title' => 'LOL',
        ],
    ];

    protected $entity = User::class;

    /**
     * @var TrainerVideoService
     */
    protected $trainerVideosService;

    /**
     * @var TimeZoneService
     */
    protected $timeZoneService;

    /**
     * @var UserRepository
     */
    protected $repository;

    /**
     * @var ReviewService
     */
    protected $reviewsService;

    /**
     * @var TeacherService
     */
    protected $teacherService;

    /**
     * @var GameRankService
     */
    protected $gameRankService;

    /**
     * @var InviteService
     */
    protected $inviteService;

    public function __construct(EntityManagerInterface $entityManager)
    {
        parent::__construct($entityManager);

        $this->trainerVideosService = new TrainerVideoService($entityManager);
        $this->reviewsService = new ReviewService($entityManager);

        $this->teacherService = new TeacherService($entityManager);
        $this->gameRankService = new GameRankService($entityManager);

        $this->inviteService = new InviteService($entityManager);
        $this->timeZoneService = new TimeZoneService();
    }

    /**
     * @param $users
     * @param $filters
     * @return array
     * @throws \Doctrine\ORM\ORMException
     * @throws \Doctrine\ORM\OptimisticLockException
     */
    public function teachersDecorator($users)
    {
        $response = [];

        foreach ($users as $user) {
            $teacher = $this->decorator($user);

            if (isset($teacher)) {
                $response[] = $teacher;
            }
        }
        return $response;
    }

    /**
     * @param User $user
     * @param bool $isFull
     * @return array
     * @throws \Doctrine\ORM\ORMException
     * @throws \Doctrine\ORM\OptimisticLockException
     */
    public function decorator(User $user, $isFull = false)
    {
        /** @var Teachers $trainer */
        $trainer = $this->entityManager->getRepository(Teachers::class)
            ->findOneBy([
                'userid' => $user->getId(),
            ]);

        if (!$trainer) {
            $trainer = new Teachers();
            $trainer->setUser($user->getId());
            $trainer->setMethod("");

            $this->save($trainer);
        }

        $user->setTrainer($trainer);

        $videos = $this->trainerVideosService->getByTrainer($user);
        $videos = $this->trainerVideosService->decorator($videos);

        $trainerGame = $user->getGame();

        if (!empty($user->getTimeZone())) {
            [$gmt, $gmtNumeric, $timeZone] = $this->timeZoneService
                ->getGmtTimezoneString($user->getTimeZone());
        } else {
            [$gmt, $gmtNumeric, $timeZone] = $this->timeZoneService
                ->getGmtTimezoneString(Teachers::DEFAULT_TIMEZONE);
        }
        $timeZone = "$timeZone ($gmt)";


        if ($isFull) {
            $achievementsCriteria = [
                'trainer' => $user->getTrainer(),
            ];
        } else {
            $achievementsCriteria = [
                'trainer' => $user->getTrainer(),
                'isShow' => true
            ];
        }
        $achievements = $this->entityManager
            ->getRepository(TrainerAchievement::class)
            ->findBy($achievementsCriteria);

        $achievementsArray = [];

        /** @var TrainerAchievement $achievement */
        foreach ($achievements as $achievement) {
            $achievementsArray[] = [
                'tournament' => $achievement->getTournament(),
                'achievement' => $achievement->getAchievement()
            ];
        }

        $rank = (int)$user->getRang();

        if (is_int((int)$rank)) {
            $gameRank = $this->entityManager
                ->getRepository(GameRank::class)
                ->getByPoints($user->getGame(), $rank);
        } else {
            $gameRank = null;
        }
        $awards = [];
        $awardsEntities = $user->getTrainer()->getAwards();
        /** @var Award $award */
        foreach ($awardsEntities as $award) {
            $awards[] = [
                'icon' => $award->getIcon(),
                'text' => $award->getText()
            ];
        }

        $reviews = $this->entityManager
            ->getRepository(Review::class)
            ->findRateByTrainerId($user->getId());

        [
            'reviews' => $reviewsParse,
            'ratingTotal' => $ratingTotal,
            'rating' => $rating,
            'reviewCount' => $count,
        ] = $this->reviewsService->reviewsDecorator($reviews);

        return [
            'id' => $user->getId(),
            'email' => $user->getEmail(),
            'istrainer' => $user->getIsTrainer(),
            'nickname' => $user->getNickname(),
            'photo' => $user->getPhoto(),
            'name' => $user->getName(),
            'game' => $trainerGame,
            'rank' => $user->getRang(),
            'family' => $user->getFamily(),
            'discord' => $user->getDiscord(),
            'purse' => $user->getPurse(),
            'trainer' => $this->teacherService->decorator($trainer),
            'ratingTotal' => $ratingTotal,
            'rating' => $rating,
            'reviewCount' => $count,
            'reviews' => $reviewsParse,
            'videos' => $videos,
            'timeZone' => $timeZone,
            'achievements' => $achievementsArray,
            'rankIcon' => isset($gameRank) ? $gameRank->getIcon() : null,
            'awards' => $awards
        ];
    }

    /**
     * @param $userId
     * @return object|null
     */
    public function find($userId)
    {
        return $this->repository->find($userId);
    }

    /**
     * @param $filters
     * @param $game
     * @param $offset
     * @return mixed
     */
    public function getTrainers($filters, $game, $offset)
    {
        $teachers = $this->entityManager
            ->getRepository(Teachers::class)
            ->getTrainers($filters, $game, $offset);

        $users = [];

        /** @var Teachers $teacher */
        foreach ($teachers as $teacher) {
            $users[] = $this->repository->find($teacher->getUserId());
        }
        return $users;
    }

    /**
     * @param User $user
     * @param object $data
     * @return mixed
     */
    public function updateUser(User $user, object $data)
    {
        if (isset($data->name)) {
            $user->setName($data->name);
        }
        if (isset($data->nickname)) {
            $user->setNickname($data->nickname);
        }
        if (isset($data->family)) {
            $user->setFamily($data->family);
        }
        if (isset($data->email)) {
            $user->setEmail($data->email);
        }
        if (isset($data->rank)) {
            $user->setRang($data->rank);
        }
        if (!empty($data->game)) {
            /** @var Game|NULL $gameEntity */
            $gameEntity = $this->entityManager->getRepository(Game::class)
                ->findOneBy(['code' => $data->game]);

            if (isset($gameEntity)) {
                $user->setGame($gameEntity);
            }
        }
        if (isset($data->timezone)) {
            $user->setTimezone($data->timezone);
        }
        if (isset($data->avatar)) {
            $user->setPhoto($data->avatar);
        }
        if (isset($data->discord)) {
            $user->setDiscord($data->discord);
        }
        if (isset($data->gender)) {
            $user->setGender($data->gender);
        }
        if (isset($data->bdate)) {
            try {
                $date = new \DateTime($data->bdate);

                $user->setBday($date);
            } catch (\Exception $e) {

            }
        }
        if (isset($data->countryId)) {
            $country = $this->entityManager
                ->getRepository(Country::class)
                ->find($data->countryId);

            if (isset($country)) {
                $user->setCountry($country);
            }
        }
        if (isset($data->cityId)) {
            $city = $this->entityManager
                ->getRepository(City::class)
                ->find($data->cityId);

            if (isset($city)) {
                $user->setCity($city);
            }
        }
        if (isset($data->additionallyGame)) {
            /** @var Game|NULL $gameEntity */
            $gameEntity = $this->entityManager->getRepository(Game::class)
                ->findOneBy(['code' => $data->additionallyGame]);

            $user->setAdditionallyGame($gameEntity);
        }
        if (isset($data->additionallyRank)) {
            $user->setAdditionallyRank($data->additionallyRank);
        }
        return $this->save($user);
    }

    /**
     * @param string $email
     * @param int $userId
     * @return mixed
     */
    public function findByEmail(string $email, int $userId)
    {
        return $this->repository->findByEmail($email, $userId);
    }

    /**
     * @param User $user
     * @return string
     */
    public function getInviteLink(User $user)
    {
        $invite = $this->inviteService->getCabinetInvite($user);

        return $_ENV['SITE_URL'] . $this->inviteService->generateInviteLink($invite->getToken());
    }

    /**
     * @param User $user
     * @return array
     */
    public function getUserData(User $user)
    {
        $userLvl = null;

        if (!empty($user->getGame())) {
            $gameRank = $this->gameRankService->getByGameAndPoints(
                $user->getGame(),
                $user->getRang()
            );
            /** @var GameRank $gameRank */
            if (isset($gameRank)) {
                $userLvl = $gameRank;
            }
        }

        $balance = [];
        $balanceEntities = $this->entityManager->getRepository(Balance::class)
            ->findBy(['user' => $user]);

        /** @var Balance $balanceEntity */
        foreach ($balanceEntities as $balanceEntity) {
            $balance[$balanceEntity->getType()] = $balanceEntity->getBalance();
        }

        [$gmt] = $this->timeZoneService
            ->getGmtTimezoneString(
                $user->getTimezone() ?? User::DEFAULT_TIMEZONE
            );

        $bdate = null;

        if (!empty($user->getBday())) {
            $bdate = $user->getBday()->format('d.m.Y');
        }
        $data = [
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
            'gmt' => $gmt,
            'level' => $userLvl,
            'invite' => $this->getInviteLink($user),
            'balance' => $balance,
            'additionallyGame' => $user->getAdditionallyGame(),
            'additionallyRank' => $user->getAdditionallyRank(),
            'city' => $user->getCity(),
            'country' => $user->getCountry(),
            'gender' => $user->getGender(),
            'bdate' => $bdate
        ];

        if ($user->getIsTrainer()) {
            /** @var Teachers|NULL $teacher */
            $teacher = $this->teacherService->findByUserId($user->getId());

            if (isset($teacher)) {
                $data['trainer'] = $this->teacherService->decorator($teacher);
            }
        }
        return $data;
    }
}
<?php


namespace App\Service;


use App\Entity\Award;
use App\Entity\GameRank;
use App\Entity\Review;
use App\Entity\Teachers;
use App\Entity\TrainerAchievement;
use App\Entity\User;
use App\Repository\UserRepository;
use App\Service\News\NewsService;
use Doctrine\ORM\EntityManagerInterface;

class UserService  extends EntityService
{
    public const USER_PHOTO_PATH = '/images/temp/matches';

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
            'name' =>  'cs',
            'title' =>  'CS:GO',
        ],
        [
            'name' =>  'dota',
            'title' =>  'DOTA 2',
        ],
        [
            'name' =>  'lol',
            'title' =>  'LOL',
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

    public function __construct(EntityManagerInterface $entityManager)
    {
        parent::__construct($entityManager);

        $this->trainerVideosService = new TrainerVideoService($entityManager);
        $this->reviewsService = new ReviewService($entityManager);
        $this->teacherService = new TeacherService($entityManager);

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

        foreach ($users as $user)
        {
           $teacher = $this->decorator($user);

           if (isset($teacher))
           {
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

        if(!$trainer)
        {
            $trainer = new Teachers();
            $trainer->setUser($user->getId());
            $trainer->setVideoLink("");
            $trainer->setCost(0);
            $trainer->setAbout("");
            $trainer->setShorttitle("");
            $trainer->setMethod("");

            $this->entityManager->persist($trainer);
            $this->entityManager->flush();
        }

        $user->setTrainer($trainer);

        $videos = $this->trainerVideosService->getByTrainer($user);
        $videos = $this->trainerVideosService->decorator($videos);

        $trainerGame = null;
        foreach ( self::GAMES as $game){
            if ($game['name'] === $user->getGame()){
                $trainerGame = $game;
            }
        }

        $timezone = $trainer->getTimeZone();
        if (!empty($timezone)){
            [$gmt, $gmtNumeric, $timeZone] = $this->timeZoneService
                ->getGmtTimezoneString($trainer->getTimeZone());
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
                'show' => true
            ];
        }
        $achievements = $this->entityManager
            ->getRepository(TrainerAchievement::class)
            ->findBy($achievementsCriteria);

        $achievementsArray = [];

        /** @var TrainerAchievement $achievement */
        foreach ($achievements as $achievement){
            $achievementsArray[] = [
                'tournament' => $achievement->getTournament(),
                'achievement' => $achievement->getAchievement()
            ];
        }

        $rank = (int)$user->getRank();

        if (is_int((int)$rank)){
            $gameRank = $this->entityManager
                ->getRepository(GameRank::class)
                ->getByPoints($user->getGame(), $rank);
        } else {
            $gameRank = null;
        }
        $awards = [];
        $awardsEntities = $user->getTrainer()->getAwards();
        /** @var Award $award */
        foreach ($awardsEntities as $award)
        {
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
            'rank' => $user->getRank(),
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
            'rankIcon' => isset($gameRank) ? $gameRank->getIcon(): null,
            'awards' => $awards
        ];
    }

    /**
     * @param $userId
     * @return object|null
     */
    public function find($userId): ?User
    {
        return $this->repository->find($userId);
    }

    /**
     * @param $discordData
     * @return object|null
     */
    public function createUserFromDiscord($discordData, $passwordEncoder): ?User
    {
        $user = new User();
        $user->setDiscordId($discordData->id);
        $user->setRoles(['ROLE_USER']);

        $user->setIsTrainer(false);
        $user->setPurse(false);

        $user->setNickname($discordData->username);
        $user->setPassword($passwordEncoder->encodePassword($user, sha1($discordData->id)));

        return $this->save($user);
    }

    /**
     * @param $faceBookData
     * @return mixed
     * @throws \Symfony\Contracts\HttpClient\Exception\ClientExceptionInterface
     * @throws \Symfony\Contracts\HttpClient\Exception\RedirectionExceptionInterface
     * @throws \Symfony\Contracts\HttpClient\Exception\ServerExceptionInterface
     * @throws \Symfony\Contracts\HttpClient\Exception\TransportExceptionInterface
     */
    public function createUserFromFaceBookData($faceBookData, $passwordEncoder): ?User
    {
        $user = new User();
        $user->setFaceBookId($faceBookData->id);
        $user->setRoles(['ROLE_USER']);

        $user->setEmail($faceBookData->email);
        $user->setIsTrainer(false);
        $user->setPurse(false);

        $user->setName($faceBookData->first_name);
        $user->setFamily($faceBookData->last_name);
        $user->setPassword($passwordEncoder->encodePassword($user, sha1($faceBookData->id)));

        try {
            $image = DownloadFile::getImage($faceBookData->picture->data->url, self::USER_PHOTO_PATH);

            if (isset($image)){
                $user->setPhoto($image);
            }
        } catch (\Exception $e){

        }
        return $this->save($user);
    }

    /**
     * @param User $user
     * @param $faceBookId
     * @return User|null
     */
    public function setFacebookId(User $user, $faceBookId): ?User
    {
        $user->setFaceBookId($faceBookId);

        return $this->save($user);
    }

    /**
     * @param $googleData
     * @param $passwordEncoder
     * @return User|null
     * @throws \Symfony\Contracts\HttpClient\Exception\ClientExceptionInterface
     * @throws \Symfony\Contracts\HttpClient\Exception\RedirectionExceptionInterface
     * @throws \Symfony\Contracts\HttpClient\Exception\ServerExceptionInterface
     * @throws \Symfony\Contracts\HttpClient\Exception\TransportExceptionInterface
     */
    public function createUserFromGoogleData($googleData, $passwordEncoder): ?User
    {
        $user = new User();
        $user->setGoogleId($googleData->id);
        $user->setRoles(['ROLE_USER']);

        $user->setEmail($googleData->email);
        $user->setIsTrainer(false);
        $user->setPurse(false);

        $user->setName($googleData->givenName);
        $user->setFamily($googleData->familyName);
        $user->setPassword($passwordEncoder->encodePassword($user, sha1($googleData->id)));

        $photo = $this->downloadUserPhoto($googleData->picture);
        $user->setPhoto($photo);

        return $this->save($user);
    }

    /**
     * @param User $user
     * @param $googleId
     * @return User|null
     */
    public function setGoogleId(User $user, $googleId): ?User
    {
        $user->setGoogleId($googleId);

        return $this->save($user);
    }

    /**
     * @param $twichData
     * @param $passwordEncoder
     * @return User|null
     */
    public function createUserFromTwichData($twichData, $passwordEncoder): ?User
    {
        $user = new User();
        $user->setRoles(['ROLE_USER']);

        $user->setIsTrainer(false);
        $user->setPurse(false);

        $user->setTwichId($twichData->sub);
        $user->setPassword($passwordEncoder->encodePassword($user, sha1($twichData->sub)));

        return $this->save($user);
    }

    /**
     * @param $steamId
     * @param $passwordEncoder
     * @return User|null
     */
    public function createUserFromSteamData($steamId, $passwordEncoder): ?User
    {
        $user = new User();
        $user->setEmail('steam-email-' . $steamId . '@champs.pro');

        $user->setSteamId($steamId);
        $user->setPassword($passwordEncoder->encodePassword($user, sha1($steamId)));

        $user->setRoles(['ROLE_USER']);

        $user->setIsTrainer(false);
        $user->setPurse(false);

        return $this->save($user);
    }

    /**
     * @param object $vkData
     * @param $passwordEncoder
     * @return User|null
     * @throws \Symfony\Contracts\HttpClient\Exception\ClientExceptionInterface
     * @throws \Symfony\Contracts\HttpClient\Exception\RedirectionExceptionInterface
     * @throws \Symfony\Contracts\HttpClient\Exception\ServerExceptionInterface
     * @throws \Symfony\Contracts\HttpClient\Exception\TransportExceptionInterface
     */
    public function createUserFromVkData(object $vkData, $passwordEncoder): ?User
    {
        $user = new User();
        $user->setRoles(['ROLE_USER']);

        $user->setIsTrainer(false);
        $user->setPurse(false);

        $user->setVkId($vkData->id);
        $user->setName($vkData->first_name);
        $user->setFamily($vkData->last_name);

        $photo = $this->downloadUserPhoto($vkData->photo);
        $user->setPhoto($photo);

        $user->setPassword($passwordEncoder->encodePassword($user, sha1($vkData->id)));

        return $this->save($user);
    }

    /**
     * @param $photoUrl
     * @return string|null
     * @throws \Symfony\Contracts\HttpClient\Exception\ClientExceptionInterface
     * @throws \Symfony\Contracts\HttpClient\Exception\RedirectionExceptionInterface
     * @throws \Symfony\Contracts\HttpClient\Exception\ServerExceptionInterface
     * @throws \Symfony\Contracts\HttpClient\Exception\TransportExceptionInterface
     */
    public function downloadUserPhoto($photoUrl): ?string
    {
        try {
            return DownloadFile::getImage($photoUrl, self::USER_PHOTO_PATH);
        } catch (\Exception $e) {

            return null;
        }
    }

    /**
     * @param $filters
     * @param $game
     * @param $offset
     * @return mixed
     */
    public function getTrainers($filters, $game, $offset)
    {
        $teachers =  $this->entityManager
            ->getRepository(Teachers::class)
            ->getTrainers($filters, $game, $offset);

        $users = [];

        /** @var Teachers $teacher */
        foreach ($teachers as $teacher){
            $users[] = $this->repository->find($teacher->getUserId());
        }
        return $users;
    }
}
<?php


namespace App\Service;


use App\Entity\Review;
use App\Entity\Teachers;
use App\Entity\User;
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
            'logo' =>  '/images/cs.png'
        ],
        [
            'name' =>  'dota',
            'title' =>  'DOTA 2',
            'logo' =>  '/images/dota.png'
        ],
        [
            'name' =>  'lol',
            'title' =>  'LOL',
            'logo' =>  '/images/lol.jpg'
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

    public function __construct(EntityManagerInterface $entityManager)
    {
        parent::__construct($entityManager);

        $this->trainerVideosService = new TrainerVideoService($entityManager);
        $this->timeZoneService = new TimeZoneService();
    }

    /**
     * @param $users
     * @param $filters
     * @return array
     * @throws \Doctrine\ORM\ORMException
     * @throws \Doctrine\ORM\OptimisticLockException
     */
    public function teachersDecorator($users, $filters)
    {
        $response = [];

        foreach ($users as $user)
        {
           $teacher = $this->decorator($user, $filters);

           if (isset($teacher))
           {
               $response[] = $teacher;
           }
        }
        return $response;
    }

    /**
     * @param $user
     * @param null $filters
     * @return array|null
     * @throws \Doctrine\ORM\ORMException
     * @throws \Doctrine\ORM\OptimisticLockException
     */
    public function decorator($user, $filters = null)
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

        $reviews = $this->entityManager
            ->getRepository(Review::class)
            ->findRateByTrainerId($user->getId());

        $sum = 0;
        $count = 0;

        $keys = [];
        for ($i = 1; $i <= 10; $i++){
            $keys[$i] = 0;
        }
        foreach ($reviews['entity'] as $review)
        {
            /** @var Review $review */
            $sum += $review['rate'];
            $keys[$review['rate']]++;
            $count++;
        }

        $result = 0;
        if($sum > 0)
        {
            $result = round($sum / $count, 2);
        }

        if (isset($filters))
        {
            if (!empty($filters['studyCostFrom']['value']))
            {
                if ((int)$filters['studyCostFrom']['value'] > $trainer->getCost())
                {
                    return null;
                }
            }
            if (!empty($filters['studyCostTo']['value']))
            {
                if ((int)$filters['studyCostTo']['value'] < $trainer->getCost())
                {
                    return null;
                }
            }
        }
        $videos = $this->trainerVideosService->getByTrainer($user);
        $videos = $this->trainerVideosService->decorator($videos);

        $trainerGame = null;
        foreach ( self::GAMES as $game){
            if ($game['name'] === $user->getGame()){
                $trainerGame = $game;
            }
        }
        if (!empty($trainer->getTimeZone())){
            [$gmt, $gmtNumeric, $timeZone] = $this->timeZoneService
                ->getGmtTimezoneString($trainer->getTimeZone());
        } else {
            [$gmt, $gmtNumeric, $timeZone] = $this->timeZoneService
                ->getGmtTimezoneString(Teachers::DEFAULT_TIMEZONE);
        }
        $timeZone = "$timeZone ($gmt)";

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
            'trainer' => $trainer,
            'ratingTotal' => $result,
            'rating' => $keys,
            'reviewCount' => $count,
            'reviews' => $reviews['entity'],
            'videos' => $videos,
            'timeZone' => $timeZone
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
}
<?php


namespace App\Service;


use App\Entity\Award;
use App\Entity\GameRank;
use App\Entity\Review;
use App\Entity\Teachers;
use App\Entity\TrainerAchievement;
use App\Entity\User;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;

class UserService  extends EntityService
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
     * @param $user
     * @return array
     * @throws \Doctrine\ORM\ORMException
     * @throws \Doctrine\ORM\OptimisticLockException
     */
    public function decorator(User $user)
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

        $achievements = $this->entityManager->getRepository(TrainerAchievement::class)
            ->findBy([
                'trainer' => $user->getTrainer(),
                'show' => true
            ]);
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
        $teachers =  $this->entityManager
            ->getRepository(Teachers::class)
            ->getTrainers($filters, $game)
            ->getQuery()
            ->setFirstResult($offset)
            ->setMaxResults($_ENV['TRAINERS_ON_PAGE'])
            ->getResult();

        $users = [];

        /** @var Teachers $teacher */
        foreach ($teachers as $teacher){
            $users[] = $this->repository->find($teacher->getUserId());
        }
        return $users;
    }

    /**
     * @param $filters
     * @param $game
     * @return mixed
     */
    public function getTrainersCount($filters, $game)
    {
        return $this->entityManager
            ->getRepository(Teachers::class)
            ->getTrainers($filters, $game)
            ->select('count(t.id)')
            ->getQuery()
            ->getSingleScalarResult();
    }
}
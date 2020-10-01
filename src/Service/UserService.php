<?php


namespace App\Service;


use App\Entity\Review;
use App\Entity\Teachers;
use App\Entity\User;
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

            if (!empty($filters['studyCostFrom']['value']))
            {
                if ((int)$filters['studyCostFrom']['value'] > $trainer->getCost())
                {
                    continue;
                }
            }
            if (!empty($filters['studyCostTo']['value']))
            {
                if ((int)$filters['studyCostTo']['value'] < $trainer->getCost())
                {
                    continue;
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

            $response[] = [
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

        return $response;
    }
}
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

    protected $entity = User::class;

    protected $trainerVideosService;

    public function __construct(EntityManagerInterface $entityManager)
    {
        parent::__construct($entityManager);

        $this->trainerVideosService = new TrainerVideoService($entityManager);
    }

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
            $keys = [
                '1' => 0,
                '2' => 0,
                '3' => 0,
                '4' => 0,
                '5' => 0,
            ];

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

            $response[] = [
                'id' => $user->getId(),
                'email' => $user->getEmail(),
                'istrainer' => $user->getIsTrainer(),
                'nickname' => $user->getNickname(),
                'photo' => $user->getPhoto(),
                'name' => $user->getName(),
                'game' => $user->getGame(),
                'rank' => $user->getRank(),
                'family' => $user->getFamily(),
                'discord' => $user->getDiscord(),
                'purse' => $user->getPurse(),
                'trainer' => $trainer,
                'ratingTotal' => $result,
                'rating' => $keys,
                'reviewCount' => $count,
                'reviews' => $reviews['entity'],
                'videos' => $videos
            ];
        }

        return $response;
    }
}
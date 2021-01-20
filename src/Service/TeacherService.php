<?php


namespace App\Service;


use App\Entity\Teachers;
use App\Entity\TrainerAchievement;
use App\Entity\TrainerLessonPrice;
use App\Entity\TrainerVideo;
use App\Repository\TeachersRepository;
use Container1ORetry\getTrainerAchievementRepositoryService;
use Doctrine\ORM\EntityManagerInterface;

class TeacherService extends EntityService
{
    protected $entity = Teachers::class;

    /**
     * @var TeachersRepository
     */
    protected $repository;

    /**
     * @var TrainerAchievementService
     */
    protected $achievementService;

    /**
     * @var TrainerVideoService
     */
    protected $trainerVideoService;

    /**
     * @var TrainerVideoService
     */
    protected $trainerVideosService;

    public function __construct(EntityManagerInterface $entityManager)
    {
        parent::__construct($entityManager);

        $this->achievementService = new TrainerAchievementService($entityManager);
        $this->trainerVideoService = new TrainerVideoService($entityManager);
        $this->trainerVideosService = new TrainerVideoService($entityManager);
    }

    /**
     * @param $id
     * @return mixed
     */
    public function findByUserId($id)
    {
        return $this->repository->findByUserId($id);
    }

    /**
     * @param Teachers $teacher
     * @return array
     */
    public function decorator(Teachers $teacher)
    {
        $availableCosts = [];

        /** @var TrainerLessonPrice $cost */
        foreach ($teacher->getCosts() as $cost){
            if($cost->getIsActive()){
                $availableCosts[] = $cost->jsonSerialize();
            }
        }
        $achievements = $this->entityManager->getRepository(TrainerAchievement::class)
            ->findBy([
                'trainer' => $teacher
            ]);
        $achievementsArray = [];

        /** @var TrainerAchievement $achievement */
        foreach ($achievements as $achievement){
            $achievementsArray[] = [
                'tournament' => $achievement->getTournament(),
                'achievement' => $achievement->getAchievement()
            ];
        }

        $videos =  $this->entityManager->getRepository(TrainerVideo::class)
            ->findBy([
                'trainer' => $teacher
            ]);

        return [
            'id' => $teacher->getId(),
            'method' => $teacher->getMethod(),
            'timeZone' => $teacher->getTimeZone(),
            'twitch' => $teacher->getTwitch(),
            'awards' => $teacher->getAwards(),
            'globalElite' => $teacher->getGlobalElite(),
            'costs' => $availableCosts,
            'achievements' => $achievementsArray,
            'videos' =>  $this->trainerVideosService->decorator($videos)
        ];
    }

    /**
     * @param Teachers $teacher
     * @param object $data
     */
    public function updateTrainer(Teachers $teacher, object $data)
    {
        if (isset($data->method)) {
            $teacher->setMethod($data->method);
        }
        if (isset($data->achievements) and !empty($data->achievements)) {
            $achievements = json_decode($data->achievements, false);

            $achievementsEntities = $this->entityManager->getRepository(TrainerAchievement::class)
                ->findBy([
                    'trainer' => $teacher
                ]);

            foreach ($achievementsEntities as $achievement) {
                $this->delete($achievement);
            }
            foreach ($achievements as $achievement) {
                $this->achievementService->create($teacher, (object)$achievement);
            }
        }
        if (isset($data->videos) and !empty($data->videos)) {
            $videos = json_decode($data->videos, false);

            $videosEntities = $this->entityManager->getRepository(TrainerAchievement::class)
                ->findBy([
                    'trainer' => $teacher
                ]);

            foreach ($videosEntities as $video) {
                $this->delete($video);
            }
            foreach ($videos as $video) {
                $this->trainerVideoService->create($teacher, $video->videoUrl);
            }
        }
        return $this->save($teacher);
    }
}
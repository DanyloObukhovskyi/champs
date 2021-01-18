<?php
/**
 * Product: champs.
 * Date: 24/06/2020
 */

namespace App\Service;


use App\Entity\Person;
use App\Entity\RatingPerson;
use App\Entity\Team;
use App\Repository\PersonRepository;
use Carbon\Carbon;
use Doctrine\ORM\EntityManagerInterface;

/**
 * Class PersonService
 * @package App\Service
 */
class PersonService extends EntityService
{
    protected $entity = Person::class;

    /**
     * @var PersonRepository
     */
    protected $repository;

    /**
     * @var FlagIconService
     */
    protected $flagIconService;

    /**
     * @var ImageService
     */
    protected $imageService;

    /**
     * PersonService constructor.
     * @param EntityManagerInterface $entityManager
     */
    public function __construct(EntityManagerInterface $entityManager)
    {
        parent::__construct($entityManager);

        $this->flagIconService = new FlagIconService($entityManager);
        $this->imageService = new ImageService($entityManager);
    }

    /**
     * @param $values
     * @return Person|null
     * @throws \Doctrine\ORM\ORMException
     * @throws \Doctrine\ORM\OptimisticLockException
     */
    public function create($values)
    {
        $person = $this->repository->getByNick($values['nick']);

        if (empty($person)) {
            $person = new $this->entity;
        }
        if (isset($values['nick'])) {
            $person->setNick($values['nick']);
        }
        if (isset($values['realname'])) {
            $person->setName($values['realname']);
        }
        if (isset($values['regionIconName'])) {
            $flagIcon = $this->flagIconService->getFlagByOrigName($values['regionIconName']);

            if (isset($flagIcon)) {
                $person->setFlagIcon($flagIcon);
            }
        }
        if (!empty($values['photo'])) {
            $this->setPersonPhoto($values['photo'], $person);
        }

        $this->entityManager->persist($person);
        $this->entityManager->flush();

        return $person;
    }

    /**
     * @param Person $person
     * @param $rating
     * @return Person
     * @throws \Doctrine\ORM\NonUniqueResultException
     * @throws \Doctrine\ORM\ORMException
     * @throws \Doctrine\ORM\OptimisticLockException
     */
    public function updateWeekPlayer(Person $person, $rating)
    {
        $weekPlayer = $this->repository->getWeekPlayer();

        if (isset($weekPlayer)) {
            $weekPlayer->setIsWeekPlayer(false);
            $this->entityManager->persist($weekPlayer);
        }
        $person->setIsWeekPlayer(true);
        $person->setRating($rating);

        $this->entityManager->persist($person);
        $this->entityManager->flush();

        return $person;
    }

    /**
     * @param $photo
     * @param Person $person
     * @throws \Exception
     */
    public function setPersonPhoto($photo, Person $person)
    {
        global $kernel;

        if (!empty($photo) && strpos($photo, 'blankplayer.svg') === false) {
            $parseDate = new Carbon($person->getParsePhotoDate());

            $photoPath = $kernel->getProjectDir() . '/public/uploads/images/' . $person->getPhoto();

            if ($parseDate->addMonth(1) >= Carbon::now() or
                $person->getPhoto() === null or
                !file_exists($photoPath)) {
                try {
                    $imagePhoto = DownloadFile::getImage($photo);
                    if (!empty($imagePhoto)) {
                        $person->setPhoto($imagePhoto);
                        $person->setParsePhotoDate(Carbon::now());
                    }
                } catch (\Exception $e) {
                    LoggerService::error("Download image error: $e");
                }
            }
        }
    }

    /**
     * @param $nick
     * @return Person|null
     */
    public function getByNick($nick)
    {
        return $this->repository->getByNick($nick);
    }

    /**
     * @param Person $person
     * @param RatingPerson $ratingPerson
     * @return array
     */
    public function personDecorate(Person $person)
    {
        $ratingPerson = $this->entityManager->getRepository(RatingPerson::class)->findOneBy([
            'person' => $person
        ]);

        $flag = $person->getFlagIcon();
        $flagID = $person->getFlagIconId();

        if (isset($flag)) {
            $flag = $flag->getName();
        }
        $this->imageService->setImage($flag);
        $flag = $this->imageService->getImagePath();

        $player = [
            'user_id' => $person->getId(),
            'rating' => isset($ratingPerson) ? $ratingPerson->getRating() : $person->getRating(),
            'nickname' => $person->getNick(),
            'fullname' => $person->getName(),
            'image' => $person->getPhoto(),
            'flag' => $flag,
            'flag_id' => $flagID
        ];

        if (!empty($person->getPlayer())) {
            /** @var Team $team */
            $team = $person->getPlayer()->getTeam();
            $this->imageService->setImage($team->getLogo());
            $logo = $this->imageService->getImagePath();

            $player['team'] = [
                'title' => $team->getName(),
                'image' => $logo,
                'id' => $team->getId()
            ];
        }
        return $player;
    }

    public function getPersonsByTeam(Team $team)
    {
        return $this->repository->getPersonsByTeam($team);
    }
}
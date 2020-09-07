<?php
/**
 * Product: champs.
 * Date: 24/06/2020
 */

namespace App\Service;


use App\Entity\Person;
use App\Repository\PersonRepository;
use Carbon\Carbon;
use Doctrine\ORM\EntityManagerInterface;

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

    public function __construct(EntityManagerInterface $entityManager)
    {
        parent::__construct($entityManager);

        $this->flagIconService = new FlagIconService($entityManager);
    }

    public function create($values)
    {
        LoggerService::add("personService create");
        if (empty($values['realname']))
        {
            LoggerService::add("personService getByNick");
            /** @var Person $person */
            $person = $this->repository->getByNick($values['nick']);
        }
        else
        {
            LoggerService::add("personService getByNameAndNick");
            $person = $this->repository->getByNameAndNick($values['realname'], $values['nick']);
        }

        LoggerService::add("personService check empty");
        if (empty($person))
        {
            $person = new $this->entity;
        }
        if (isset($values['nick'])){
            $person->setNick($values['nick']);
        }
        if (isset($values['realname']))
        {
            $person->setName($values['realname']);
        }
        if (isset($values['regionIconName']))
        {
            LoggerService::add("personService setFlagIcon");
            $flagIcon = $this->flagIconService->getFlagByOrigName($values['regionIconName']);

            if (isset($flagIcon)){
                $person->setFlagIcon($flagIcon);
            }
        }
        LoggerService::add("personService setPersonPhoto");
        if (!empty($values['photo'])){
            $this->setPersonPhoto($values['photo'], $person);
        }

        $this->entityManager->persist($person);
        $this->entityManager->flush();

        LoggerService::add("personService save");
        return $person;
    }

    public function updateWeekPlayer(Person $person, $rating)
    {
        $weekPlayer = $this->repository->getWeekPlayer();

        if (isset($weekPlayer)){
            $weekPlayer->setIsWeekPlayer(false);
            $this->entityManager->persist($weekPlayer);
        }
        $person->setIsWeekPlayer(true);
        $person->setRating($rating);

        $this->entityManager->persist($person);
        $this->entityManager->flush();

        return $person;
    }

    public function setPersonPhoto($photo, Person $person)
    {
        global $kernel;

        if (!empty($photo) && strpos($photo, 'blankplayer.svg') === false)
        {
            $parseDate = new Carbon($person->getParsePhotoDate());

            $photoPath = $kernel->getProjectDir().'/public/uploads/images/'.$person->getPhoto();

            if ($parseDate->addMonth(1) >= Carbon::now() or
                $person->getPhoto() === null or
                !file_exists($photoPath)){
                try {
                    $imagePhoto = DownloadFile::getImage($photo);
                    if (!empty($imagePhoto))
                    {
                        $person->setPhoto($imagePhoto);
                        $person->setParsePhotoDate(Carbon::now());
                    }
                }catch (\Exception $e){
                    LoggerService::error("Download image error: $e");
                }
            }
        }
    }

    public function getByNick($nick)
    {
        return $this->repository->getByNick($nick);
    }
}
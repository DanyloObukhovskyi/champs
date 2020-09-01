<?php
/**
 * Product: champs.
 * Date: 24/06/2020
 */

namespace App\Service;


use App\Entity\Person;

class PersonService extends EntityService
{
    protected $entity = Person::class;

    protected $repository;

    public function create($values)
    {
        LoggerService::add("personService 18");
        if (empty($values['realname']))
        {
            LoggerService::add("personService 22");
            $person = $this->repository->getByNick($values['nick']);
        }
        else
        {
            LoggerService::add("personService 27");
            $person = $this->repository->getByNameAndNick($values['realname'], $values['nick']);
        }

        LoggerService::add("personService 28");
        if (isset($person))
        {
            $this->entityManager->persist($person);
            return $person;
        }

        /** @var Person $person */
        $person = new $this->entity;
        $person->setNick($values['nick']);

        if (!empty($values['photo']) && strpos($values['photo'], 'blankplayer.svg') === false)
        {
            try {
                $imagePhoto = DownloadFile::getImage($values['photo']);
                if (!empty($imagePhoto))
                {
                    $person->setPhoto($imagePhoto);
                }
            }catch (\Exception $e){
                LoggerService::add("Download image error: $e");
            }
        }

        if (!empty($values['realname']))
        {
            $person->setName($values['realname']);
        }

        $this->entityManager->persist($person);

        $this->entityManager->flush();
        LoggerService::add("personService 56");
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
}
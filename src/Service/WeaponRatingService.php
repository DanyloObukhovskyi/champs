<?php


namespace App\Service;


use App\Entity\WeaponRating;

class WeaponRatingService extends EntityService
{
    protected $entity = WeaponRating::class;

    protected $repository;

    /**
     * @param $weapon
     * @return mixed
     * @throws \Doctrine\ORM\ORMException
     * @throws \Doctrine\ORM\OptimisticLockException
     */
    public function create($weapon)
    {
        $weaponRating = new $this->entity;
        $weaponRating->setName($weapon['label']);
        $weaponRating->setRating($weapon['value']);
        $weaponRating->setCOlor($weapon['color'] ?? null);

        $this->entityManager->persist($weaponRating);
        $this->entityManager->flush();

        return $weaponRating;
    }

    /**
     * @param $weapon
     * @return mixed
     * @throws \Doctrine\ORM\ORMException
     * @throws \Doctrine\ORM\OptimisticLockException
     */
    public function update($weapon)
    {
        $weaponRating = $this->repository->findByName($weapon['label']);
        if (empty($weaponRating)) {
            return $this->create($weapon);
        }
        $weaponRating->setName($weapon['label']);
        $weaponRating->setRating($weapon['value']);
        $weaponRating->setCOlor($weapon['color'] ?? null);

        $this->entityManager->persist($weaponRating);
        $this->entityManager->flush();

        return $weaponRating;
    }

    /**
     * @param $weapons
     * @return array
     */
    public function ratingWeaponsDecorator($weapons)
    {
        $ratingWeapons = [];

        $weaponsRatingSum = 0;
        foreach ($weapons as $weapon) {
            $weaponsRatingSum += (int)$weapon->getRating();
        }
        foreach ($weapons as $weapon) {
            $ratingInPercentage = ((int)$weapon->getRating() / $weaponsRatingSum) * 100;
            $ratingInPercentage = round($ratingInPercentage, 1);

            $ratingWeapons[] = [
                'name' => $weapon->getName(),
                'y' => $ratingInPercentage,
            ];
        }
        return $ratingWeapons;
    }
}

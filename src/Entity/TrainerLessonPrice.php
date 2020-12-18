<?php

namespace App\Entity;

use App\Repository\TrainerLessonPriceRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=TrainerLessonPriceRepository::class)
 */
class TrainerLessonPrice implements \JsonSerializable
{
    public const INDIVIDUAL_TYPE = 'individual';

    public const GROUP_TYPE = 'group';

    public const ANALYTIC_TYPE = 'analytic';

    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=Teachers::class)
     */
    private $trainer;

    /**
    * @ORM\Column(type="string")
    */
    private $lessonType;

    /**
     * @ORM\Column(type="integer")
     */
    private $price;

    /**
     * @ORM\Column(type="boolean")
     */
    private $isActive;

    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return mixed
     */
    public function getTrainer()
    {
        return $this->trainer;
    }

    /**
     * @param mixed $trainer
     */
    public function setTrainer($trainer): void
    {
        $this->trainer = $trainer;
    }

    /**
     * @return mixed
     */
    public function getLessonType()
    {
        return $this->lessonType;
    }

    /**
     * @param mixed $lessonType
     */
    public function setLessonType($lessonType): void
    {
        $this->lessonType = $lessonType;
    }

    /**
     * @return mixed
     */
    public function getPrice(): ?int
    {
        $percentageMarkup = $_ENV['PERCENTAGE_MARKUP_LESSON'];

        $cost = $this->price;

        if (isset($percentageMarkup))
        {
            $cost = ($this->price / 100)  * ($percentageMarkup + 100);
        }
        return $cost;
    }

    /**
     * @return mixed
     */
    public function getPriceWithoutPercentage()
    {
        return $this->price;
    }

    /**
     * @param mixed $price
     */
    public function setPrice($price): void
    {
        $this->price = $price;
    }

    /**
     * @return mixed
     */
    public function getIsActive()
    {
        return $this->isActive;
    }

    /**
     * @param mixed $isActive
     */
    public function setIsActive($isActive): void
    {
        $this->isActive = $isActive;
    }

    public function jsonSerialize()
    {
        return [
            'lessonType' => $this->getLessonType(),
            'price' => $this->getPrice(),
            'priceWithoutPercentage' => $this->getPriceWithoutPercentage()
        ];
    }
}

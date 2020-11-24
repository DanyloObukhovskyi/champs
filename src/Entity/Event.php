<?php

namespace App\Entity;

use App\Repository\EventRepository;
use App\Service\News\NewsService;
use Carbon\Carbon;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\Entity(repositoryClass=EventRepository::class)
 */
class Event implements \JsonSerializable
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\Column(type="date", nullable=true)
     */
    private $startedAt;

    /**
     * @ORM\Column(type="date", nullable=true)
     */
    private $endedAt;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $image;

    /**
     * @ORM\Column(type="string", length=255, nullable=true, name="image_header")
     */
    private $imageHeader;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $prize;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $location;

    /**
     * @ORM\Column(type="string", nullable=true)
     */
    private $commandCount;

    /**
     * @ORM\Column(type="datetime", name="created_at", nullable=true)
     */
    private $createdAt;

    /**
     * @ORM\Column(type="string", nullable=true)
     */
    private $url;

    /**
     * @ORM\ManyToOne(targetEntity=FlagIcon::class)
     */
    private $flagIcon;

    /**
     * @ORM\Column(type="integer", options={"default" : 0})
     */
    private $views;

    /**
     * @ORM\OneToMany(targetEntity=EventTeamAttending::class, mappedBy="event")
     */
    private $teamsAttending;

    /**
     * @ORM\OneToMany(targetEntity=EventPrizeDistribution::class, mappedBy="event")
     */
    private $prizeDistribution;

    /**
     * @ORM\OneToMany(targetEntity=EventGroup::class, mappedBy="event")
     */
    private $groupPlays;

    /**
     * @ORM\OneToMany(targetEntity=EventMapPool::class, mappedBy="event")
     */
    private $mapPool;

    /**
     * @ORM\OneToMany(targetEntity=RelatedEvent::class, mappedBy="event")
     */
    private $relatedEvents;

    /**
     * @ORM\OneToMany(targetEntity=EventBracket::class, mappedBy="event")
     */
    private $tournamentBrackets;

    public function __construct()
    {
        $this->teamsAttending = new ArrayCollection();
        $this->prizeDistribution = new ArrayCollection();

        $this->groupPlays = new ArrayCollection();
        $this->mapPool = new ArrayCollection();

        $this->relatedEvents = new ArrayCollection();
        $this->tournamentBrackets = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getStartedAt(): ?\DateTimeInterface
    {
        return $this->startedAt;
    }

    public function setStartedAt( $startedAt): self
    {
        $this->startedAt = $startedAt;

        return $this;
    }

    public function getEndedAt(): ?\DateTimeInterface
    {
        return $this->endedAt;
    }

    public function setEndedAt( $endedAt): self
    {
        $this->endedAt = $endedAt;

        return $this;
    }

    public function getImage(): ?string
    {
        return $this->image;
    }

    public function setImage(?string $image): self
    {
        $this->image = $image;

        return $this;
    }

    public function getPrize(): ?string
    {
        return $this->prize;
    }

    public function setPrize(?string $prize): self
    {
        $this->prize = $prize;

        return $this;
    }

    public function getLocation(): ?string
    {
        return $this->location;
    }

    public function setLocation(?string $location): self
    {
        $this->location = $location;

        return $this;
    }

    public function getCommandCount(): ?int
    {
        return $this->commandCount;
    }

    public function setCommandCount($commandCount): self
    {
        $this->commandCount = $commandCount;

        return $this;
    }

    public function getCreatedAt(): Carbon
    {
        return new Carbon($this->createdAt);
    }

    public function setCreatedAt($date): self
    {
        if (isset($date)){
            $date = new Carbon($date);
        }
        $this->createdAt = $date;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getImageHeader()
    {
        return $this->imageHeader;
    }

    /**
     * @param mixed $imageHeader
     */
    public function setImageHeader($imageHeader): void
    {
        $this->imageHeader = $imageHeader;
    }

    /**
     * @return mixed
     */
    public function getUrl()
    {
        return $this->url;
    }

    /**
     * @param mixed $url
     */
    public function setUrl($url): void
    {
        $this->url = $url;
    }

    /**
     * @return mixed
     */
    public function getFlagIcon()
    {
        return $this->flagIcon;
    }

    /**
     * @param mixed $flagIcon
     */
    public function setFlagIcon($flagIcon): void
    {
        $this->flagIcon = $flagIcon;
    }

    /**
     * @return mixed
     */
    public function getViews()
    {
        return $this->views;
    }

    /**
     * @param mixed $views
     */
    public function setViews($views): void
    {
        $this->views = $views;
    }

    /**
     * @return mixed
     */
    public function getTeamsAttending()
    {
        return $this->teamsAttending;
    }

    /**
     * @return mixed
     */
    public function getPrizeDistribution()
    {
        return $this->prizeDistribution;
    }

    /**
     * @return mixed
     */
    public function getGroupPlays()
    {
        return $this->groupPlays;
    }

    /**
     * @return mixed
     */
    public function getMapPool()
    {
        return $this->mapPool;
    }

    /**
     * @return mixed
     */
    public function getRelatedEvents()
    {
        return $this->relatedEvents;
    }

    /**
     * @return mixed
     */
    public function getTournamentBrackets()
    {
        return $this->tournamentBrackets;
    }

    /**
     * @return array|mixed
     */
    public function jsonSerialize()
    {
        $dayStart = $this->getStartedAt()->format('d F');
        $dayEnd = !empty($this->getEndedAt()) ? $this->getEndedAt()->format('d F') : null;

       return [
           "id"            => $this->getId(),
           "name"          => $this->getName(),
           "startedAt"     => $this->getStartedAt(),
           "endedAt"       => $this->getEndedAt(),
           "image"         => $this->getImage(),
           'imageHeader'   => $this->getImageHeader(),
           'logo'          => $this->getImage(),
           'prize'         => $this->getPrize(),
           'startedAtRu'   => NewsService::replaceMonth($dayStart),
           'endedAtRu'     => NewsService::replaceMonth($dayEnd),
           'views'         => $this->getViews(),
           'commandsCount' => $this->getCommandCount(),
           'location'      => $this->getLocation(),
           'flag'          => $this->getFlagIcon(),
       ];
    }
}

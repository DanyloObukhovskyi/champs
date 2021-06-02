<?php

namespace App\Entity;

use App\Repository\EventRepository;
use App\Service\News\NewsService;
use Carbon\Carbon;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints\DateTime;


/**
 * @ORM\Entity(repositoryClass=EventRepository::class)
 */
class Event implements \JsonSerializable
{
    const STATUS_ALL = 'all';

    const STATUS_PRO = 'pro';

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
     * @ORM\ManyToOne(targetEntity=FlagIcon::class, cascade={"persist", "remove"})
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

    /**
     * @ORM\Column(type="string", options={"default" : "pro"})
     */
    private $status;

    /**
     * @ORM\ManyToOne(targetEntity=Game::class)
     */
    private $game;

    /**
     * @ORM\Column(type="boolean", nullable=true, options={"default" : false})
     */
    private $isOnline;

    /**
     * @ORM\OneToMany(targetEntity=EventStream::class, mappedBy="event")
     */
    private $streams;

    public function __construct()
    {
        $this->teamsAttending = new ArrayCollection();
        $this->prizeDistribution = new ArrayCollection();

        $this->groupPlays = new ArrayCollection();
        $this->mapPool = new ArrayCollection();

        $this->relatedEvents = new ArrayCollection();
        $this->tournamentBrackets = new ArrayCollection();
        $this->streams = new ArrayCollection();
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

    public function setStartedAt($startedAt): self
    {
        $this->startedAt = $startedAt;

        return $this;
    }

    public function getEndedAt(): ?\DateTimeInterface
    {
        return $this->endedAt;
    }

    public function setEndedAt($endedAt): self
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

    public function getCreatedAt()
    {
        return $this->createdAt;
    }

    public function setCreatedAt($date): self
    {
        if (isset($date)) {
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
            "id" => $this->getId(),
            "name" => $this->getName(),
            "startedAt" => $this->getStartedAt()->getTimestamp() * 1000,
            "endedAt" => $this->getEndedAt()->getTimestamp() * 1000,
            "image" => $this->getImage(),
            'imageHeader' => $this->getImageHeader(),
            'logo' => $this->getImage(),
            'prize' => $this->getPrize(),
            'startedAtRu' => NewsService::replaceMonth($dayStart),
            'endedAtRu' => NewsService::replaceMonth($dayEnd),
            'views' => $this->getViews(),
            'commandsCount' => $this->getCommandCount(),
            'location' => $this->getLocation(),
            'flag' => $this->getFlagIcon(),
            'game' => $this->getGame()
        ];
    }

    /**
     * @return mixed
     */
    public function getStatus()
    {
        return $this->status;
    }

    /**
     * @param mixed $status
     */
    public function setStatus($status): void
    {
        $this->status = $status;
    }

    /**
     * @return mixed
     */
    public function getGame()
    {
        return $this->game;
    }

    /**
     * @param mixed $game
     */
    public function setGame($game): void
    {
        $this->game = $game;
    }

    /**
     * @return mixed
     */
    public function getIsOnline()
    {
        return $this->isOnline;
    }

    /**
     * @param mixed $isOnline
     */
    public function setIsOnline($isOnline): void
    {
        $this->isOnline = $isOnline;
    }

    /**
     * @return Collection|EventStream[]
     */
    public function getStreams(): Collection
    {
        return $this->streams;
    }

    public function addStream(EventStream $stream): self
    {
        if (!$this->streams->contains($stream)) {
            $this->streams[] = $stream;
            $stream->setEvent($this);
        }

        return $this;
    }

    public function removeStream(EventStream $stream): self
    {
        if ($this->streams->removeElement($stream)) {
            // set the owning side to null (unless already changed)
            if ($stream->getEvent() === $this) {
                $stream->setEvent(null);
            }
        }

        return $this;
    }
}

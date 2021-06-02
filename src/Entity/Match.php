<?php

namespace App\Entity;

use App\Repository\MatchRepository;
use App\Service\News\NewsService;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=MatchRepository::class)
 * @ORM\Table(name="`match`")
 */
class Match implements \JsonSerializable
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="datetime")
     */
    private $start_at;


    /**
     * @ORM\Column(type="string", length=32)
     */
    private $code;

    /**
     * @ORM\ManyToOne(targetEntity=Team::class, cascade={"persist", "remove"})
     * @ORM\JoinColumn(nullable=false)
     */
    private $team1;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $team1_id;

    /**
     * @ORM\ManyToOne(targetEntity=Team::class, cascade={"persist", "remove"})
     * @ORM\JoinColumn(nullable=false)
     */
    private $team2;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $team2_id;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $url;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $score1;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $score2;

    /**
     * @ORM\Column(type="boolean")
     */
    private $detail_info = false;

    /**
     * @ORM\OneToMany(targetEntity=MatchStatistics::class, mappedBy="game_match")
     */
    private $matchStatistics;

    /**
     * @ORM\OneToMany(targetEntity=PlayerStatistics::class, mappedBy="game_match")
     */
    private $playerStatistics;

    /**
     * @ORM\Column(type="boolean")
     */
    private $live = false;

    /**
     * @ORM\OneToMany(targetEntity=Stream::class, mappedBy="game_match")
     */
    private $streams;

    /**
     * @ORM\ManyToOne(targetEntity=Event::class)
     */
    private $event;

    /**
     * @ORM\OneToMany(targetEntity=MatchPickAndBan::class, mappedBy="game", orphanRemoval=true)
     */
    private $matchPickAndBans;

    /**
     * @ORM\Column(type="string", nullable=true)
     */
    private $team1_win_rate;

    /**
     * @ORM\Column(type="string", nullable=true)
     */
    private $team2_win_rate;

    /**
     * @ORM\OneToMany(targetEntity=MatchComment::class, mappedBy="match")
     */
    private $comments;

    public function __construct()
    {
        $this->matchStatistics = new ArrayCollection();
        $this->streams = new ArrayCollection();
        $this->matchPickAndBans = new ArrayCollection();
        $this->comments = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getStartAt(): ?\DateTimeInterface
    {
        return $this->start_at;
    }

    public function setStartAt(\DateTimeInterface $start_at): self
    {
        $this->start_at = $start_at;

        return $this;
    }

    public function getCode(): ?string
    {
        return $this->code;
    }

    public function setCode(string $code): self
    {
        $this->code = $code;

        return $this;
    }

    public function getTeam1(): ?Team
    {
        return $this->team1;
    }

    public function setTeam1(?Team $team1): self
    {
        $this->team1 = $team1;

        return $this;
    }

    public function getTeam2(): ?Team
    {
        return $this->team2;
    }

    public function setTeam2(?Team $team2): self
    {
        $this->team2 = $team2;

        return $this;
    }

    public function getUrl(): ?string
    {
        return $this->url;
    }

    public function setUrl(?string $url): self
    {
        $this->url = $url;

        return $this;
    }

    public function getScore1(): ?int
    {
        return empty($this->score1) ? $this->getRealScore(1) : $this->score1;
    }

    private function getRealScore(int $team)
    {
        $score = 0;

        foreach ($this->matchStatistics as $match_statistic) {
            /** @var MatchStatistics $match_statistic */
            $method = "getScore{$team}";
            if ($match_statistic->$method() >= 16) {
                $score++;
            }
        }
        return $score;
    }

    public function setScore1(?int $score1): self
    {
        $this->score1 = $score1;

        return $this;
    }

    public function getScore2(): ?int
    {
        return empty($this->score2) ? $this->getRealScore(2) : $this->score2;
    }

    public function getGoing(): bool
    {
        return $this->getScore2() < 2 && $this->getScore1() < 2 && $this->getStartAt()->getTimestamp() < time();
    }

    public function setScore2(?int $score2): self
    {
        $this->score2 = $score2;

        return $this;
    }

    public function getDetailInfo(): ?bool
    {
        return $this->detail_info;
    }

    public function setDetailInfo(bool $detail_info): self
    {
        $this->detail_info = $detail_info;

        return $this;
    }

    /**
     * @return Collection|MatchStatistics[]
     */
    public function getMatchStatistics(): Collection
    {
        return $this->matchStatistics;
    }

    public function addMatchStatistic(MatchStatistics $matchStatistic): self
    {
        if (!$this->matchStatistics->contains($matchStatistic)) {
            $this->matchStatistics[] = $matchStatistic;
            $matchStatistic->setMatch($this);
        }

        return $this;
    }

    public function removeMatchStatistic(MatchStatistics $matchStatistic): self
    {
        if ($this->matchStatistics->contains($matchStatistic)) {
            $this->matchStatistics->removeElement($matchStatistic);
            // set the owning side to null (unless already changed)
            if ($matchStatistic->getMatch() === $this) {
                $matchStatistic->setMatch(null);
            }
        }

        return $this;
    }

    public function getLive(): ?bool
    {
        return $this->live;
    }

    public function setLive(bool $live): self
    {
        $this->live = $live;

        return $this;
    }

    /**
     * @return Collection|Stream[]
     */
    public function getStreams(): Collection
    {
        return $this->streams;
    }

    public function addStream(Stream $stream): self
    {
        if (!$this->streams->contains($stream)) {
            $this->streams[] = $stream;
            $stream->setMatch($this);
        }

        return $this;
    }

    public function removeStream(Stream $stream): self
    {
        if ($this->streams->contains($stream)) {
            $this->streams->removeElement($stream);
            // set the owning side to null (unless already changed)
            if ($stream->getMatch() === $this) {
                $stream->setMatch(null);
            }
        }

        return $this;
    }

    public function getPlayerStatistics(): Collection
    {
        return $this->playerStatistics;
    }

    public function getRounds(int $map_id)
    {
        $score = 0;

        foreach ($this->getMatchStatistics() as $match_statistic) {
            if ($map_id == $match_statistic->getMap()->getId()) {
                $score += $match_statistic->getScore1() + $match_statistic->getScore2();
            }
        }

        return $score == 0 ? 1 : $score;
    }

    public function getEvent(): ?Event
    {
        if (isset($this->event)) {
            try {
                $this->event->getName();

                return $this->event;
            } catch (\Exception $e) {
                return null;
            }
        }
        return $this->event;
    }

    public function setEvent(?Event $event): self
    {
        $this->event = $event;

        return $this;
    }

    /**
     * @return Collection|MatchPickAndBan[]
     */
    public function getMatchPickAndBans(): Collection
    {
        return $this->matchPickAndBans;
    }

    public function addMatchPickAndBan(MatchPickAndBan $matchPickAndBan): self
    {
        if (!$this->matchPickAndBans->contains($matchPickAndBan)) {
            $this->matchPickAndBans[] = $matchPickAndBan;
            $matchPickAndBan->setGame($this);
        }

        return $this;
    }

    public function removeMatchPickAndBan(MatchPickAndBan $matchPickAndBan): self
    {
        if ($this->matchPickAndBans->contains($matchPickAndBan)) {
            $this->matchPickAndBans->removeElement($matchPickAndBan);
            // set the owning side to null (unless already changed)
            if ($matchPickAndBan->getGame() === $this) {
                $matchPickAndBan->setGame(null);
            }
        }

        return $this;
    }

    /**
     * @return mixed
     */
    public function getTeam2Id()
    {
        return $this->team2_id;
    }

    /**
     * @param mixed $team2_id
     */
    public function setTeam2Id($team2_id): void
    {
        $this->team2_id = $team2_id;
    }

    /**
     * @return mixed
     */
    public function getTeam1WinRate()
    {
        return $this->team1_win_rate;
    }

    /**
     * @param mixed $team1_win_rate
     */
    public function setTeam1WinRate($team1_win_rate): void
    {
        $this->team1_win_rate = $team1_win_rate;
    }

    /**
     * @return mixed
     */
    public function getTeam2WinRate()
    {
        return $this->team2_win_rate;
    }

    /**
     * @param mixed $team2_win_rate
     */
    public function setTeam2WinRate($team2_win_rate): void
    {
        $this->team2_win_rate = $team2_win_rate;
    }

    /**
     * @return array|mixed
     */
    public function jsonSerialize()
    {
        return [
            "id" => $this->getId(),
            "startAt" => $this->getStartAt(),
            "startAtRu" => NewsService::replaceMonth($this->getStartAt()->format('d F Y')),
            "time" => date("H:i", $this->getStartAt()->getTimestamp()),
            "teamA" => !empty($this->getTeam1()) ? $this->getTeam1()->jsonSerialize() : null,
            "teamB" => !empty($this->getTeam2()) ? $this->getTeam2()->jsonSerialize() : null,
            "isLive" => $this->getLive() ? true : false,
        ];
    }

    /**
     * @return mixed
     */
    public function getComments()
    {
        return $this->comments;
    }

    public function getSlug()
    {
        $url = explode('/', $this->getUrl());

        return $url[count($url) - 1];
    }
}

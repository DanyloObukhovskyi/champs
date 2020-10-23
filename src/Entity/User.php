<?php

namespace App\Entity;

use App\Repository\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\UserInterface;

/**
 * @ORM\Entity(repositoryClass=UserRepository::class)
 */
class User implements UserInterface
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=180, unique=true, nullable=true)
     */
    private $email;

    /**
     * @ORM\Column(type="json")
     */
    private $roles = [];

    /**
     * @var string The hashed password
     * @ORM\Column(type="string")
     */
    private $password;

    /**
     * @ORM\Column(type="boolean")
     */
    private $istrainer;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $nickname;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $photo;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=25, nullable=true)
     */
    private $game;

    /**
     * @ORM\Column(type="string", length=20, nullable=true)
     */
    private $rank;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $family;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $steam_id;


    private $trainer = null;
    /**
     * @ORM\OneToMany(targetEntity=Charactristics::class, mappedBy="user")
     */
    private $charactristics;
    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $discord;
    /**
     * @ORM\OneToMany(targetEntity=Review::class, mappedBy="student")
     */
    private $reviews;
    /**
     * @ORM\OneToMany(targetEntity=Review::class, mappedBy="trainer")
     */
    private $trainerReviews;
    /**
     * @ORM\OneToMany(targetEntity=PurseHistory::class, mappedBy="user")
     */
    private $purseHistories;
    /**
     * @ORM\Column(type="integer")
     */
    private $purse;
    /**
<<<<<<< HEAD
     * @ORM\ManyToMany(targetEntity=MvpTeam::class)
     * @ORM\JoinTable(
     *  name="mvp_team_user",
     *  joinColumns={
     *      @ORM\JoinColumn(name="user_id", referencedColumnName="id")
     *  },
     *  inverseJoinColumns={
     *      @ORM\JoinColumn(name="mvp_team_id", referencedColumnName="id")
     *  }
     * )
     */
    private $mvpTeams;
    /**
     * @ORM\Column(type="string", nullable=true)
     */
    private $discordId;
    /**
     * @ORM\Column(type="string", nullable=true)
     */
    private $faceBookId;
    /**
     * @ORM\Column(type="string", nullable=true)
     */
    private $googleId;
    /**
     * @ORM\Column(type="string", nullable=true)
     */
    private $twichId;
    /**
     * @ORM\Column(type="string", nullable=true)
     */
    private $vkId;

    public function __construct()
    {
        $this->charactristics = new ArrayCollection();
        $this->reviews        = new ArrayCollection();
        $this->trainerReviews = new ArrayCollection();
        $this->purseHistories = new ArrayCollection();
        $this->mvpTeams       = new ArrayCollection();
    }

    /**
     * @return mixed
     */
    public function getSteamId()
    {
        return $this->steam_id;
    }

    /**
     * @param mixed $steam_id
     *
     * @return User
     */
    public function setSteamId($steam_id)
    {
        $this->steam_id = $steam_id;

        return $this;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUsername(): string
    {
        return (string)$this->email;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getPassword(): string
    {
        return (string)$this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getSalt()
    {
        // not needed when using the "bcrypt" algorithm in security.yaml
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }

    public function getIsTrainer(): ?bool
    {
        return $this->istrainer;
    }

    public function setIsTrainer(bool $istrainer): self
    {
        $this->istrainer = $istrainer;

        return $this;
    }

    public function getNickname(): ?string
    {
        return $this->nickname;
    }

    public function setNickname(?string $nickname): self
    {
        $this->nickname = $nickname;

        return $this;
    }

    public function getPhoto(): ?string
    {
        return $this->photo;
    }

    public function setPhoto(?string $photo): self
    {
        $this->photo = $photo;

        return $this;
    }

    public function getN(): ?string
    {
        return 'asdsa';
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(?string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getGame(): ?string
    {
        return $this->game;
    }

    public function setGame(?string $game): self
    {
        $this->game = $game;

        return $this;
    }

    public function getRank(): ?string
    {
        return $this->rank;
    }

    public function setRank(?string $rank): self
    {
        $this->rank = $rank;

        return $this;
    }

    public function getFamily(): ?string
    {
        return $this->family;
    }

    public function setFamily(?string $family): self
    {
        $this->family = $family;

        return $this;
    }

    public function getTrainer()
    {
        return $this->trainer;
    }

    public function setTrainer($trainer): self
    {
        $this->trainer = $trainer;

        return $this;
    }

    /**
     * @return Collection|Charactristics[]
     */
    public function getCharactristics(): Collection
    {
        return $this->charactristics;
    }

    public function addCharactristic(Charactristics $charactristic): self
    {
        if (!$this->charactristics->contains($charactristic))
        {
            $this->charactristics[] = $charactristic;
            $charactristic->setUser($this);
        }

        return $this;
    }

    public function removeCharactristic(Charactristics $charactristic): self
    {
        if ($this->charactristics->contains($charactristic))
        {
            $this->charactristics->removeElement($charactristic);
            // set the owning side to null (unless already changed)
            if ($charactristic->getUser() === $this)
            {
                $charactristic->setUser(null);
            }
        }

        return $this;
    }

    public function getDiscord(): ?string
    {
        return $this->discord;
    }

    public function setDiscord(?string $discord): self
    {
        $this->discord = $discord;

        return $this;
    }

    /**
     * @return Collection|Review[]
     */
    public function getReviews(): Collection
    {
        return $this->reviews;
    }

    public function addReview(Review $review): self
    {
        if (!$this->reviews->contains($review))
        {
            $this->reviews[] = $review;
            $review->setStudent($this);
        }

        return $this;
    }

    public function removeReview(Review $review): self
    {
        if ($this->reviews->contains($review))
        {
            $this->reviews->removeElement($review);
            // set the owning side to null (unless already changed)
            if ($review->getStudent() === $this)
            {
                $review->setStudent(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Review[]
     */
    public function getTrainerReviews(): Collection
    {
        return $this->trainerReviews;
    }

    public function addTrainerReview(Review $trainerReview): self
    {
        if (!$this->trainerReviews->contains($trainerReview))
        {
            $this->trainerReviews[] = $trainerReview;
            $trainerReview->setTrainer($this);
        }

        return $this;
    }

    public function removeTrainerReview(Review $trainerReview): self
    {
        if ($this->trainerReviews->contains($trainerReview))
        {
            $this->trainerReviews->removeElement($trainerReview);
            // set the owning side to null (unless already changed)
            if ($trainerReview->getTrainer() === $this)
            {
                $trainerReview->setTrainer(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|PurseHistory[]
     */
    public function getPurseHistories(): Collection
    {
        return $this->purseHistories;
    }

    public function addPurseHistory(PurseHistory $purseHistory): self
    {
        if (!$this->purseHistories->contains($purseHistory))
        {
            $this->purseHistories[] = $purseHistory;
            $purseHistory->setUser($this);
        }

        return $this;
    }

    public function removePurseHistory(PurseHistory $purseHistory): self
    {
        if ($this->purseHistories->contains($purseHistory))
        {
            $this->purseHistories->removeElement($purseHistory);
            // set the owning side to null (unless already changed)
            if ($purseHistory->getUser() === $this)
            {
                $purseHistory->setUser(null);
            }
        }

        return $this;
    }

    public function getPurse(): ?int
    {
        return $this->purse;
    }

    public function setPurse(int $purse): self
    {
        $this->purse = $purse;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getMvpTeams()
    {
        return $this->mvpTeams;
    }

    public function getDiscordId()
    {
        return $this->discordId;
    }

    /**
     * @param mixed $discordId
     */
    public function setDiscordId($discordId): void
    {
        $this->discordId = $discordId;
    }

    /**
     * @return mixed
     */
    public function getFaceBookId()
    {
        return $this->faceBookId;
    }

    /**
     * @param mixed $faceBookId
     */
    public function setFaceBookId($faceBookId): void
    {
        $this->faceBookId = $faceBookId;
    }

    /**
     * @return mixed
     */
    public function getGoogleId()
    {
        return $this->googleId;
    }

    /**
     * @param mixed $googleId
     */
    public function setGoogleId($googleId): void
    {
        $this->googleId = $googleId;
    }

    /**
     * @return mixed
     */
    public function getTwichId()
    {
        return $this->twichId;
    }

    /**
     * @param mixed $twichId
     */
    public function setTwichId($twichId): void
    {
        $this->twichId = $twichId;
    }

    /**
     * @return mixed
     */
    public function getVkId()
    {
        return $this->vkId;
    }

    /**
     * @param mixed $vkId
     */
    public function setVkId($vkId): void
    {
        $this->vkId = $vkId;
    }
}

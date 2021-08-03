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
    public const DEFAULT_TIMEZONE = 'Europe/Moscow';

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
     * @ORM\ManyToOne(targetEntity=Game::class)
     */
    private $game;

    /**
     * @ORM\Column(type="string", length=20, nullable=true)
     */
    private $rang;

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
     * @ORM\OneToMany(targetEntity=TrainerVideo::class, mappedBy="user")
     */
    private $videosUrls;
    /**
     * @ORM\Column(type="string")
     */
    private $vk;
    /**
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
    /**
     * @ORM\Column(type="string", options={"default" : "Europe/Moscow"})
     */
    private $timezone;
    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $gender;
    /**
     * @ORM\Column(type="date", length=255, nullable=true)
     */
    private $bday;
    /**
     * @ORM\ManyToOne(targetEntity=Game::class)
     */
    private $additionallyGame;
    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $additionallyRank;
    /**
     * @ORM\ManyToOne(targetEntity=Country::class)
     */
    private $country;
    /**
     * @ORM\ManyToOne(targetEntity=City::class)
     */
    private $city;

    /**
     * @ORM\OneToMany(targetEntity=Blogs::class, mappedBy="user", orphanRemoval=true)
     */
    private $blogs;

    /**
     * @ORM\OneToMany(targetEntity=BlogComment::class, mappedBy="user", orphanRemoval=true)
     */
    private $blogComments;

    /**
     * @ORM\OneToMany(targetEntity=BlogCommentLikes::class, mappedBy="user", orphanRemoval=true)
     */
    private $blogCommentLikes;

    /**
     * @ORM\OneToMany(targetEntity=BlogLikes::class, mappedBy="user", orphanRemoval=true)
     */
    private $blogLikes;


    public function __construct()
    {
        $this->charactristics = new ArrayCollection();
        $this->reviews = new ArrayCollection();
        $this->trainerReviews = new ArrayCollection();
        $this->purseHistories = new ArrayCollection();
        $this->videosUrls = new ArrayCollection();
        $this->mvpTeams = new ArrayCollection();
        $this->blogs = new ArrayCollection();
        $this->blogComments = new ArrayCollection();
        $this->blogCommentLikes = new ArrayCollection();
        $this->blogLikes = new ArrayCollection();
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

    public function setPhoto($photo = null): self
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

    public function getGame(): ?Game
    {
        return $this->game;
    }

    public function setGame(Game $game): self
    {
        $this->game = $game;

        return $this;
    }

    public function getRang(): ?string
    {
        return $this->rang;
    }

    public function setRang(?string $rang): self
    {
        $this->rang = $rang;

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
        if (!$this->charactristics->contains($charactristic)) {
            $this->charactristics[] = $charactristic;
            $charactristic->setUser($this);
        }

        return $this;
    }

    public function removeCharactristic(Charactristics $charactristic): self
    {
        if ($this->charactristics->contains($charactristic)) {
            $this->charactristics->removeElement($charactristic);
            // set the owning side to null (unless already changed)
            if ($charactristic->getUser() === $this) {
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
        if (!$this->reviews->contains($review)) {
            $this->reviews[] = $review;
            $review->setStudent($this);
        }

        return $this;
    }

    public function removeReview(Review $review): self
    {
        if ($this->reviews->contains($review)) {
            $this->reviews->removeElement($review);
            // set the owning side to null (unless already changed)
            if ($review->getStudent() === $this) {
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
        if (!$this->trainerReviews->contains($trainerReview)) {
            $this->trainerReviews[] = $trainerReview;
            $trainerReview->setTrainer($this);
        }

        return $this;
    }

    public function removeTrainerReview(Review $trainerReview): self
    {
        if ($this->trainerReviews->contains($trainerReview)) {
            $this->trainerReviews->removeElement($trainerReview);
            // set the owning side to null (unless already changed)
            if ($trainerReview->getTrainer() === $this) {
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
        if (!$this->purseHistories->contains($purseHistory)) {
            $this->purseHistories[] = $purseHistory;
            $purseHistory->setUser($this);
        }

        return $this;
    }

    public function removePurseHistory(PurseHistory $purseHistory): self
    {
        if ($this->purseHistories->contains($purseHistory)) {
            $this->purseHistories->removeElement($purseHistory);
            // set the owning side to null (unless already changed)
            if ($purseHistory->getUser() === $this) {
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
    public function getVideosUrls()
    {
        return $this->videosUrls;
    }

    /**
     * @param mixed $videosUrls
     */
    public function setVideosUrls($videosUrls): void
    {
        $this->videosUrls = $videosUrls;
    }

    /**
     * @return mixed
     */
    public function getVk()
    {
        return $this->vk;
    }

    /**
     * @param mixed $vk
     */
    public function setVk($vk): void
    {
        $this->vk = $vk;
    }

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

    /**
     * @return mixed
     */
    public function getTimezone()
    {
        return $this->timezone;
    }

    /**
     * @param mixed $timezone
     */
    public function setTimezone($timezone): void
    {
        $this->timezone = $timezone;
    }

    /**
     * @return mixed
     */
    public function getGender()
    {
        return $this->gender;
    }

    /**
     * @param mixed $gender
     */
    public function setGender($gender): void
    {
        $this->gender = $gender;
    }

    /**
     * @return mixed
     */
    public function getBday()
    {
        return $this->bday;
    }

    /**
     * @param mixed $bday
     */
    public function setBday($bday): void
    {
        $this->bday = $bday;
    }

    /**
     * @return mixed
     */
    public function getCountry()
    {
        return $this->country;
    }

    /**
     * @param mixed $country
     */
    public function setCountry($country): void
    {
        $this->country = $country;
    }

    /**
     * @return mixed
     */
    public function getCity()
    {
        return $this->city;
    }

    /**
     * @param mixed $city
     */
    public function setCity($city): void
    {
        $this->city = $city;
    }

    /**
     * @return mixed
     */
    public function getAdditionallyGame()
    {
        return $this->additionallyGame;
    }

    /**
     * @param mixed $additionallyGame
     */
    public function setAdditionallyGame($additionallyGame): void
    {
        $this->additionallyGame = $additionallyGame;
    }

    /**
     * @return mixed
     */
    public function getAdditionallyRank()
    {
        return $this->additionallyRank;
    }

    /**
     * @param mixed $additionallyRank
     */
    public function setAdditionallyRank($additionallyRank): void
    {
        $this->additionallyRank = $additionallyRank;
    }

    /**
     * @return bool
     */
    public function isGlobalElite(): bool
    {
        $result = false;
        /** @var Game $game */
        $game = $this->getGame();

        if (isset($game) and $game->getCode() === 'cs') {
            if ((int)$this->getRang() >= $_ENV['ELO_FOR_GLOBAL_ELITE']) {
                $result = true;
            }
        }
        return $result;
    }

    public function addBlog(Blogs $blog): self
    {
        if (!$this->blogs->contains($blog)) {
            $this->blogs[] = $blog;
            $blog->setUser($this);
        }

        return $this;
    }

    public function removeBlog(Blogs $blog): self
    {
        if ($this->blogs->removeElement($blog)) {
            // set the owning side to null (unless already changed)
            if ($blog->getUser() === $this) {
                $blog->setUser(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|BlogComment[]
     */
    public function getBlogComments(): Collection
    {
        return $this->blogComments;
    }

    public function addBlogComment(BlogComment $blogComment): self
    {
        if (!$this->blogComments->contains($blogComment)) {
            $this->blogComments[] = $blogComment;
            $blogComment->setUser($this);
        }

        return $this;
    }

    public function removeBlogComment(BlogComment $blogComment): self
    {
        if ($this->blogComments->removeElement($blogComment)) {
            // set the owning side to null (unless already changed)
            if ($blogComment->getUser() === $this) {
                $blogComment->setUser(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|BlogCommentLikes[]
     */
    public function getBlogCommentLikes(): Collection
    {
        return $this->blogCommentLikes;
    }

    public function addBlogCommentLike(BlogCommentLikes $blogCommentLike): self
    {
        if (!$this->blogCommentLikes->contains($blogCommentLike)) {
            $this->blogCommentLikes[] = $blogCommentLike;
            $blogCommentLike->setUser($this);
        }

        return $this;
    }

    public function removeBlogCommentLike(BlogCommentLikes $blogCommentLike): self
    {
        if ($this->blogCommentLikes->removeElement($blogCommentLike)) {
            // set the owning side to null (unless already changed)
            if ($blogCommentLike->getUser() === $this) {
                $blogCommentLike->setUser(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|BlogLikes[]
     */
    public function getBlogLikes(): Collection
    {
        return $this->blogLikes;
    }

    public function addBlogLike(BlogLikes $blogLike): self
    {
        if (!$this->blogLikes->contains($blogLike)) {
            $this->blogLikes[] = $blogLike;
            $blogLike->setUser($this);
        }

        return $this;
    }

    public function removeBlogLike(BlogLikes $blogLike): self
    {
        if ($this->blogLikes->removeElement($blogLike)) {
            // set the owning side to null (unless already changed)
            if ($blogLike->getUser() === $this) {
                $blogLike->setUser(null);
            }
        }

        return $this;
    }
}

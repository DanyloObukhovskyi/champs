<?php


namespace App\Service;


use App\Entity\Tournament;
use App\Repository\TournamentRepository;
use Doctrine\ORM\EntityManagerInterface;

class TournamentService extends EntityService
{
    protected $imagesPath = '/images/tournaments/';

    protected $entity = Tournament::class;

    protected $imageService;

    /**
     * @var TournamentRepository
     */
    protected $repository;

    public function __construct(EntityManagerInterface $entityManager)
    {
        parent::__construct($entityManager);

        $this->imageService = new ImageService();
    }

    /**
     * @return array
     */
    public function getAll()
    {
        $tournamentsEntities = $this->repository->getAll();

        $tournaments = [];
        foreach ($tournamentsEntities as $tournamentEntity)
        {
            $tournaments[] = $this->tournamentDecorator($tournamentEntity);
        }
        return $tournaments;
    }

    /**
     * @param string $game
     * @return array
     */
    public function getAllByGame(string $game)
    {
        $tournamentsEntities = $this->repository->findBy([
            'game' => $game
        ]);
        $tournaments = [];
        foreach ($tournamentsEntities as $tournamentEntity)
        {
            $tournaments[] = $this->tournamentDecorator($tournamentEntity);
        }
        return $tournaments;
    }

    /**
     * @param Tournament $tournament
     * @return array
     */
    public function tournamentDecorator(Tournament $tournament)
    {
        return [
            'id' => $tournament->getId(),
            'name' => $tournament->getName(),
            'logo' => $this->getImage($tournament->getLogo()),
            'image' => $this->getImage($tournament->getImage()),
            'date' => $tournament->getDate()->format('d m Y • H:i'),
            'mode' => $tournament->getMode(),
            'access' => (bool)$tournament->getAccess(),
            'prize' => $tournament->getPrizeDescription(),
            'number' => $this->getTournamentNumber($tournament)
        ];
    }

    /**
     * @param Tournament $tournament
     * @return mixed
     */
    public function getTournamentNumber(Tournament $tournament)
    {
        return $this->repository->getNumber($tournament);
    }

    /**
     * @param $id
     * @return Tournament|null
     */
    public function find($id)
    {
        return $this->repository->find($id);
    }

    public function getImage(string $image)
    {
        $imagePath = $this->imagesPath . $image;
        $this->imageService->setImage($imagePath, true);

        return $this->imageService->getImagePath();
    }
}
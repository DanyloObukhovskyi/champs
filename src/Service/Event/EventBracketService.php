<?php


namespace App\Service\Event;


use App\Entity\EventBracket;
use App\Entity\Team;
use App\Service\EntityService;
use App\Service\ImageService;

class EventBracketService extends EntityService
{
    protected $lower = 'lower';

    protected $upper = 'upper';

    protected $conditionFinal = 'consolidationFinal';

    protected $grandFinal = 'grandFinal';

    protected $consolidationFinal = 'consolidationFinal';

    protected $lowerDropdown1 = 'lowerDropdown1';

    protected $entity = EventBracket::class;

    protected $repository;

    /** @var ImageService */
    protected $imageService;

    /**
     * EventBracketService constructor.
     * @param $entityManager
     */
    public function __construct($entityManager)
    {
        parent::__construct($entityManager);

        $this->imageService = new ImageService();
    }

    /**
     * @param $bracket
     * @param $event
     * @param $team1
     * @param $team2
     * @param $match
     * @param $type
     * @param $name
     */
    public function create($bracket, $event, $team1, $team2, $match, $type, $name)
    {
        /** @var EventBracket $eventBracket */
        $eventBracket = $this->findByEventAndTypeAndNameAndTeams($event, $type, $name, $team1, $team2);

        if (empty($eventBracket))
        {
            $eventBracket = new $this->entity;
            $eventBracket->setEvent($event);
            $eventBracket->setTeam1($team1);
            $eventBracket->setTeam2($team2);
            $eventBracket->setType($type);
            $eventBracket->setName($name);
        }
        $eventBracket->setMatch($match);
        $eventBracket->setScore1($bracket['team1']['score'] ?? null);
        $eventBracket->setScore2($bracket['team2']['score'] ?? null);

        $this->save($eventBracket);
    }

    /**
     * @param $event
     * @param $type
     * @param $name
     * @param $team1
     * @param $team2
     * @return mixed
     */
    public function findByEventAndTypeAndNameAndTeams($event, $type, $name, $team1, $team2)
    {
        return $this->repository->findByEventAndTypeAndNameAndTeams($event, $type, $name, $team1, $team2);
    }

    /**
     * @param $brackets
     * @return array
     */
    public function eventBracketDecorator($brackets)
    {
        $sortedBrackets = [];

        /** @var EventBracket $bracket */
        foreach ($brackets as $bracket)
        {
            if (strpos($bracket->getType(), $this->lower) !== false or $this->conditionFinal === $bracket->getType()){
                $type = $this->lower;
            } elseif($this->grandFinal === $bracket->getType()) {
                $type = $this->grandFinal;
            } else {
                $type = $this->upper;
            }

            if (!empty($bracket->getTeam1()) and !empty($bracket->getTeam2()))
            {
                $sortedBrackets[$type][$bracket->getType()][$bracket->getName()][] =
                    [
                        'bracketType' => $bracket->getType(),
                        'team1' => $this->getTeam($bracket->getTeam1()),
                        'team2' => $this->getTeam($bracket->getTeam2()),
                        'score1' => $bracket->getScore1(),
                        'score2' => $bracket->getScore2(),
                    ];
            }
        }

        $brackets = [];
        foreach ($sortedBrackets as $type => $bracket) {
            $bracketsMatches = [];

            foreach ($bracket as $bracketType => $bracketMatches) {
                foreach ($bracketMatches as $matches){
                    $bracketsMatches[] = $matches;
                }
            }
            $brackets[$type] = $bracketsMatches;
        }

        $secondTeams = [];
        foreach ($brackets as $type => $matches)
        {
            $matches = $matches[0];

            foreach ($matches as $match)
            {
                $secondTeams[$type][] = [
                     $match['team1'], $match['team2']
                ];
            }
        }
        $secondBrackets = [];

        foreach ($brackets as $type => $matchesRounds) {
            foreach ($matchesRounds as $matches) {
                $scores = [];
                foreach ($matches as $match) {
                    if ($type === $this->lower
                        and ($match['bracketType'] === $this->lowerDropdown1 or $match['bracketType'] === $this->consolidationFinal))
                    {
                        $scores[] = [
                            (int)$match['score2'],  (int)$match['score1']
                        ];
                    } else {
                        $scores[] = [
                            (int)$match['score1'], (int)$match['score2']
                        ];
                    }

                }
                $secondBrackets[$type][] = $scores;

                if ($type === $this->grandFinal)
                {
                    $secondBrackets[$type][] = [];
                }
            }
        }

        return ['teams' => $secondTeams['upper'] ?? [], 'matches' => $secondBrackets];
    }

    /**
     * @param Team $team
     * @return array
     */
    public function getTeam(Team $team)
    {
        $teamLogo = $team->getLogo();
        $teamName = $team->getName();

        $this->imageService->setImage($teamLogo);
        $teamLogo = $this->imageService->getImagePath();

        return ['logo' => $teamLogo, 'name' => $teamName ];
    }
}
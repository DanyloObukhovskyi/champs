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

    protected $lowerFinal = 'lowerFinal';

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

        if ($type === $this->grandFinal or $type === $this->lowerFinal or $type === $this->conditionFinal) {
            $eventBracket = $this->repository->findByEventAndType($event, $type);
        }
        if (empty($eventBracket)) {
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
        foreach ($brackets as $bracket) {
            if (strpos($bracket->getType(), $this->lower) !== false or $this->conditionFinal === $bracket->getType()) {
                $type = $this->lower;
            } elseif ($this->grandFinal === $bracket->getType()) {
                $type = $this->grandFinal;
            } else {
                $type = $this->upper;
            }
            $showBracketName = false;
            if (empty($sortedBrackets[$type][$bracket->getType()])) {
                $showBracketName = true;
            }

            $match = !empty($bracket->getMatch()) ? $bracket->getMatch()->jsonSerialize() : null;
            $sortedBrackets[$type][$bracket->getType()][] =
                [
                    'id' => $bracket->getId(),
                    'bracketName' => $bracket->getName(),
                    'bracketType' => $bracket->getType(),
                    'type' => $type,
                    'match' => $match,
                    'player1' => [
                        'match' => !empty($bracket->getMatch()) ?  $bracket->getMatch()->jsonSerialize() : null,
                        'playerId' => !empty($bracket->getTeam1()) ? $bracket->getTeam1()->getId() : null,
                        'winner' => $bracket->getScore1() > $bracket->getScore2(),

                        'team' => !empty($bracket->getTeam1()) ? $bracket->getTeam1()->jsonSerialize() : null,
                        'score' => $bracket->getScore1(),
                    ],
                    'player2' => [
                        'match' => !empty($bracket->getMatch()) ?  $bracket->getMatch()->jsonSerialize() : null,
                        'playerId' => !empty($bracket->getTeam2()) ? $bracket->getTeam2()->getId() : null,
                        'winner' => $bracket->getScore2() > $bracket->getScore1(),

                        'team' => !empty($bracket->getTeam2()) ? $bracket->getTeam2()->jsonSerialize() : null,
                        'score' => $bracket->getScore2(),
                    ],
                    'showBracketName' => $showBracketName
                ];
        }
        $sortedBracketsStepTwo = [];
        foreach ($sortedBrackets as $type => $bracket) {
            $bracketsMatches = [];

            foreach ($bracket as $bracketType => $bracketMatches) {

                if ($bracketType === $this->grandFinal or
                    $bracketType === $this->conditionFinal or
                    $bracketType === $this->lowerFinal) {

                    $bracketsMatches[$bracketType][] = end($bracketMatches);
                } else {
                    $bracketsMatches[$bracketType] = $bracketMatches;
                }
            }
            $sortedBracketsStepTwo[$type] = $bracketsMatches;
        }
        $sortedBracketsStepThree = [];
        $grandFinal = null;

        if (isset($sortedBracketsStepTwo[$this->grandFinal])) {
            $grandFinal = $sortedBracketsStepTwo[$this->grandFinal][$this->grandFinal][0];

            $sortedBracketsStepThree[] = $grandFinal;
        }

        if (isset($sortedBracketsStepTwo[$this->upper])) {
            $upperBrackets = $this->sortedBrackets($sortedBracketsStepTwo[$this->upper], $grandFinal);

            $sortedBracketsStepThree = array_merge(
                $sortedBracketsStepThree,
                $upperBrackets
            );
        }

        if (isset($sortedBracketsStepTwo[$this->lower])) {
            $lowerBrackets = $this->sortedBrackets($sortedBracketsStepTwo[$this->lower], $grandFinal);

            $sortedBracketsStepThree = array_merge(
                $sortedBracketsStepThree,
                $lowerBrackets
            );
        }
        return $sortedBracketsStepThree;
    }

    public function sortedBrackets($brackets, $grandFinal)
    {
        $sortedBrackets = [];
        $upperTypes = array_keys($brackets);

        foreach ($brackets as $type => $matches) {
            if ($matches !== end($brackets)) {

                $next = array_search($type, $upperTypes, true);
                $nextMatches = $brackets[$upperTypes[$next + 1]];

                if (count($nextMatches) < count($matches)) {

                    $matchesChunk = array_chunk($matches, 2);
                    foreach ($nextMatches as $index => $match) {
                        $matchesChunk[$index][0]['next'] = $match['id'];
                        $matchesChunk[$index][1]['next'] = $match['id'];

                        $sortedBrackets[] = $matchesChunk[$index][0];
                        $sortedBrackets[] = $matchesChunk[$index][1];
                    }
                } elseif (count($nextMatches) === count($matches)) {
                    foreach ($nextMatches as $index => $match) {
                        $matches[$index]['next'] = $match['id'];

                        $sortedBrackets[] = $matches[$index];
                    }
                }
            } else {
                foreach ($matches as $match) {
                    if (isset($grandFinal)) {
                        $match['next'] = $grandFinal['id'];
                    }
                    $sortedBrackets[] = $match;
                }
            }
        }
        return $sortedBrackets;
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

        return ['logo' => $teamLogo, 'name' => $teamName];
    }
}
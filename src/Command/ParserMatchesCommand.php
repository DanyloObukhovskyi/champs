<?php

namespace App\Command;

use App\Entity\Match;
use App\Service\HLTVService;
use App\Service\LoggerService;
use App\Service\Match\MatchService;
use App\Traits\Dispatchable;
use App\Message\Match as MatchMessage;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

class ParserMatchesCommand extends Command
{
    use Dispatchable;

    protected static $defaultName = 'parser:matches';

    protected function configure()
    {
        $this
            ->setDescription('Add a short description for your command')
            ->addArgument('arg1', InputArgument::OPTIONAL, 'Argument description')
            ->addOption('option1', null, InputOption::VALUE_NONE, 'Option description');
    }

    /** @var MatchService */
    protected $matchService;

    /**
     * @param InputInterface $input
     * @param OutputInterface $output
     * @return int
     */
    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        ini_set('max_execution_time', 0);

        $entityManager = $this->getApplication()->getKernel()->getContainer()->get('doctrine')->getManager();
        new LoggerService(new SymfonyStyle($input, $output));

        $this->matchService = new MatchService($entityManager);

        $matches = $this->getAllMatches();

        foreach ($matches as $match) {
            $this->dispatch(new MatchMessage($match));
        }
        return Command::SUCCESS;
    }

    /**
     * @return array
     * @throws \DiDom\Exceptions\InvalidSelectorException
     */
    protected function getAllMatches()
    {
        //$matches = $this->matchService->getLiveMatches();

        $matchesUrls = [];

//        /** @var Match $match */
//        foreach ($matches as $match) {
//            $matchesUrls[$match->getUrl()] = [
//                'url' => $match->getUrl(),
//                'is_live' => true
//            ];
//        }
//
        $parserMatches = HLTVService::getMatches();

        foreach ($parserMatches as $match) {
            $matchesUrls[$match['url']] = $match;
        }
        $mainResultsMatches = HLTVService::getMainMatchesResults();

        foreach ($mainResultsMatches as $match) {
            $matchesUrls[$match['url']] = $match;
        }
        return $matchesUrls;
    }
}

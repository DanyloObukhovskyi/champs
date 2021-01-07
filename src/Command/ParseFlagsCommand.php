<?php

namespace App\Command;

use App\Service\FlagIconService;
use App\Service\HLTVService;
use App\Service\LoggerService;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

/**
 * Class ParseFlagsCommand
 * @package App\Command
 */
class ParseFlagsCommand extends Command
{
    protected static $defaultName = 'parser:flags';

    protected const PATH = 'https://static.hltv.org/images/bigflags/30x20/';

    protected function configure()
    {
        $this
            ->setDescription('Add a short description for your command')
            ->addArgument('arg1', InputArgument::OPTIONAL, 'Argument description')
            ->addOption('option1', null, InputOption::VALUE_NONE, 'Option description');
    }

    /**
     * @param InputInterface $input
     * @param OutputInterface $output
     * @return int
     */
    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        new LoggerService(new SymfonyStyle($input, $output));
        $entityManager = $this->getApplication()->getKernel()->getContainer()->get('doctrine')->getManager();
        $flagIconService = new FlagIconService($entityManager);


        LoggerService::info("hltv flags parse");
        $flags = $this->getFlags();
        foreach ($flags as $flag) {
            LoggerService::info("hltv flag create: {$flag['name']}");

            $flagIconService->createOrUpdate($flag);
        }

        return 0;
    }

    /**
     * @return array
     */
    protected function getFlags(): array
    {
        return HLTVService::parseFlags(self::PATH);
    }
}

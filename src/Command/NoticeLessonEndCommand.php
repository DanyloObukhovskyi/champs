<?php

namespace App\Command;

use App\Message\EndLessonMail;
use App\Service\LessonService;
use App\Traits\Dispatchable;
use App\Traits\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use Twig\Environment;

/**
 * Class NoticeLessonEndCommand
 * @package App\Command
 */
class NoticeLessonEndCommand extends Command
{
    use Dispatchable;
    use EntityManager;

    protected static $defaultName = 'notice:lesson_end';

    /**
     * @var LessonService
     */
    protected $lessonService;

    /**
     * @var EntityManagerInterface
     */
    protected $entityManager;

    /**
     * @var \Swift_Mailer
     */
    protected $mailer;

    /**
     * @var Environment
     */
    protected $twig;

    protected $logger;

    /**
     * NoticeLessonEndCommand constructor.
     * @param EntityManagerInterface $entityManager
     * @param \Swift_Mailer $mailer
     * @param Environment $twig
     */
    public function __construct(EntityManagerInterface $entityManager, \Swift_Mailer $mailer, Environment $twig)
    {
        parent::__construct();

        $this->entityManager = $entityManager;
        $this->mailer = $mailer;
        $this->twig = $twig;
    }

    protected function configure()
    {
        $this->lessonService = new LessonService($this->getEntityManager());

        $this->setDescription('Add a short description for your command')
            ->addArgument('arg1', InputArgument::OPTIONAL, 'Argument description')
            ->addOption('option1', null, InputOption::VALUE_NONE, 'Option description')
        ;
    }

    /**
     * @param InputInterface $input
     * @param OutputInterface $output
     * @return int
     */
    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $this->logger = new SymfonyStyle($input, $output);

        $this->logger->text('Start notice for end lesson');

        $notNoticedLessons = $this->lessonService->getNotNoticedLessons();
        $this->noticedLessons($notNoticedLessons);

        return Command::SUCCESS;
    }

    /**
     * @param $lessons
     */
    protected function noticedLessons($lessons)
    {
        foreach ($lessons as $lesson)
        {
            $this->lessonService->setNoticed($lesson);

            $this->logger->text('Dispatch end mail');

            $this->dispatch(new EndLessonMail($this->mailer, $lesson));
        }
    }
}

<?php

namespace App\Command;

use App\Entity\Lessons;
use App\Entity\LessonsPayment;
use App\Entity\Payment;
use App\Entity\Schedule;
use App\Service\LessonService;
use App\Service\LessonTimeService;
use App\Service\LoggerService;
use App\Service\Payment\PaymentService;
use App\Service\ScheduleService;
use App\Traits\EntityManager;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

class CheckLessonsPayedCommand extends Command
{
    use EntityManager;

    protected static $defaultName = 'payed:check_lesson';

    /** @var PaymentService */
    protected $paymentService;

    /** @var LessonService */
    protected $lessonService;

    /** @var ScheduleService */
    protected $scheduleService;

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

        $this->paymentService = new PaymentService($this->getEntityManager());
        $this->lessonService = new LessonService($this->getEntityManager());
        $this->scheduleService = new ScheduleService($this->getEntityManager());

        LoggerService::info("Get payments within thirty minutes left");
        $payments = $this->paymentService->getPaymentWithinThirtyMinutes();

        /** @var Payment $pay */
        foreach ($payments as $pay) {

            $paymentLessonsSchedules = $this->paymentService->getPaymentLessonsShedules($pay);

            if (empty($paymentLessonsSchedules)) {
                continue;
            }

            LoggerService::info("set schedule time");
            if ($pay->getPaymentStatus() === 1) {
                LoggerService::info("set confirm");

                $this->setSchedulesStatus($paymentLessonsSchedules, Schedule::TIME_STATUS_RESERVED);
            } else {
                LoggerService::info("set cancel");

                $this->setSchedulesStatus($paymentLessonsSchedules, Schedule::TIME_STATUS_OPEN);
            }
        }
        return 0;
    }

    public function setSchedulesStatus($schedules, $status)
    {
        foreach ($schedules as $schedule) {
            $this->scheduleService->setScheduleStatus($schedule, $status);
        }
    }
}

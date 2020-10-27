<?php

namespace App\Controller;

use App\Entity\Timezone;
use App\Service\TimeZoneService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use DateTimeZone;

class HelperController extends AbstractController
{
    /**
     * @var TimeZoneService
     */
    public $timeZoneService;

    /**
     * HelperController constructor.
     */
    public function __construct()
    {
        $this->timeZoneService = new TimeZoneService();
    }

    /**
     * @Route("/ru/helper/timezones", name="helper.timezones")
     */
    public function getTimzoneList()
    {
        return $this->json($this->timeZoneService->getTimeZonesList());
    }
}

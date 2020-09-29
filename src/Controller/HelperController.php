<?php

namespace App\Controller;

use App\Entity\Timezone;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use DateTimeZone;

class HelperController extends AbstractController
{
    /**
     * @Route("/ru/helper/timezones", name="helper.timezones")
     */
    public function getTimzoneList()
    {
        $timezones = DateTimeZone::listIdentifiers();

        $timezonesWithGMT = [];
        foreach ($timezones as $timezone)
        {
            $isMinus = false;
            $gmtNumeric = (new \DateTime('2010-12-21', new DateTimeZone($timezone)))->getOffset();

            if ($gmtNumeric < 0 ){
                $isMinus = true;
            }
            $gmt = gmdate("G:i", $gmtNumeric);
            $timezonesWithGMT[$gmtNumeric]['gmt'] = $isMinus ? "GMT -$gmt": "GMT +$gmt";
            $timezonesWithGMT[$gmtNumeric]['zones'][] = $timezone;
        }

        $minusGmt = [];
        $plusGmt = [];

        foreach ($timezonesWithGMT as $gmt => $zones)
        {
            if ($gmt < 0){
                $minusGmt[$gmt] = $zones;
            } else {
                $plusGmt[$gmt] = $zones;
            }
        }
        ksort($plusGmt);

        ksort($minusGmt);
        $minusGmt = array_reverse($minusGmt);

        $timezonesWithGMT = array_merge($minusGmt, $plusGmt);

        $timezones = [];
        foreach ($timezonesWithGMT as $zones)
        {
            $timezones[] = $zones;
        }

        return $this->json($timezones);
    }
}

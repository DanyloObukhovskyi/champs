<?php


namespace App\Service;


use DateTimeZone;

class TimeZoneService
{
    /**
     * @param $timezone
     * @return array
     * @throws \Exception
     */
    public function getGmtTimezoneString($timezone)
    {
        $isMinus = false;
        $gmtNumeric = (new \DateTime('2010-12-21', new DateTimeZone($timezone)))->getOffset();

        if ($gmtNumeric < 0 ){
            $isMinus = true;
        }
        $gmt = gmdate("G:i", $gmtNumeric);
        $gmt = $isMinus ? "GMT -$gmt": "GMT +$gmt";

        return [$gmt, $gmtNumeric, $timezone];
    }

    /**
     * @return array
     * @throws \Exception
     */
    public function getTimeZonesList()
    {
        $timezones = DateTimeZone::listIdentifiers();

        $timezonesWithGMT = [];
        foreach ($timezones as $timezone)
        {
            [$gmt, $gmtNumeric] = $this->getGmtTimezoneString($timezone);

            $timezonesWithGMT[$gmtNumeric]['gmt'] = $gmt;
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

        return $timezones;
    }


    public function getTimezoneOffsetFromString($timezoneString = null)
    {

    }
}
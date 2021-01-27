<?php


namespace App\Service;


use Carbon\Carbon;
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
        $date = Carbon::now()->setTimezone('UTC');
        $dateWithTimezone = Carbon::now()->setTimezone($timezone);
        $gmt = (int)$dateWithTimezone->hour - (int)$date->hour;

        $gmtString = "GMT $gmt";

        return [$gmtString, $gmt * 60 * 60, $timezone];
    }

    /**
     * @return array
     * @throws \Exception
     */
    public function getTimeZonesList()
    {
        $timezones = DateTimeZone::listIdentifiers();

        $timezonesWithGMT = [];
        foreach ($timezones as $timezone) {
            [$gmt, $gmtNumeric] = $this->getGmtTimezoneString($timezone);

            $timezonesWithGMT[$gmtNumeric]['gmt'] = $gmt;
            $timezonesWithGMT[$gmtNumeric]['zones'][] = $timezone;
        }

        $minusGmt = [];
        $plusGmt = [];

        foreach ($timezonesWithGMT as $gmt => $zones) {
            if ($gmt < 0) {
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
        foreach ($timezonesWithGMT as $zones) {
            $timezones[] = $zones;
        }

        return $timezones;
    }
}
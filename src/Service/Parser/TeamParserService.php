<?php


namespace App\Service\Parser;


use App\Service\HLTVService;
use App\Service\PageContentService;
use DiDom\Document;
use DiDom\Query;

class TeamParserService
{
    /**
     * @param $document
     * @return array|null
     */
    public function getMatchTeam($document)
    {
        $teamLogoRaw = $document->first('img.teamlogo');
        if (empty($teamLogoRaw))
        {
            return null;
        }

        $team = [
            'logo' => trim($teamLogoRaw->attr('src')),
            'players' => []
        ];

        $profileRaw = $document->first('.profile-team-info');
        if (empty($profileRaw))
        {
            return null;
        }

        $nameTeamRaw = $profileRaw->first('.profile-team-name');
        if (empty($nameTeamRaw))
        {
            return null;
        }

        $team['name'] = trim($nameTeamRaw->text());

        $regionTeamRaw = $profileRaw->first("//div[contains(concat(' ', normalize-space(@class), ' '), ' team-country ')]/img", Query::TYPE_XPATH);
        if (isset($regionTeamRaw))
        {
            $team['region'] = trim($regionTeamRaw->attr('title'));

            $flagIconPath = parse_url($regionTeamRaw->attr('src'), PHP_URL_PATH);
            $flagIcon = explode('/', $flagIconPath);
            $flagIcon = end($flagIcon);

            $team['regionIconName'] = explode('.', $flagIcon)[0];
        }

        $teamPersonsRaw = $document->find("//div[contains(concat(' ', normalize-space(@class), ' '), ' bodyshot-team ')]/a[contains(concat(' ', normalize-space(@class), ' '), ' col-custom ')]", Query::TYPE_XPATH);

        if (count($teamPersonsRaw) === 0)
        {
            return $team;
        }

        foreach ($teamPersonsRaw as $teamPersonRaw)
        {
            $playerUrl = $teamPersonRaw->attr('href');
            $playerUrl = HLTVService::urlDecorator($playerUrl);

            $player = [
                'nick' => trim($teamPersonRaw->attr('title')),
                'url' => $playerUrl
            ];

            $playerImageRaw = $teamPersonRaw->first("//img[contains(@class, 'bodyshot-team-img')]", Query::TYPE_XPATH);
            if (isset($playerImageRaw))
            {
                $player['photo'] = trim($playerImageRaw->attr('src'));
            }

            $team['players'][] = $player;
        }

        if (!empty($team['players']))
        {
            foreach ($team['players'] as &$player)
            {
                if (empty($player['url']))
                {
                    continue;
                }

                $personItem = $this->getPerson($player);
                if (!$personItem)
                {
                    continue;
                }
                $player = $player + $personItem;
            }
        }

        return $team;
    }

    /**
     * @param $player
     * @return null
     * @throws \DiDom\Exceptions\InvalidSelectorException
     */
    public function getPerson($player)
    {
        try {
            $content = PageContentService::getPageContent($player['url']);
        } catch (\Exception $e){

            $content = null;
        }

        if (empty($content) or ($content and is_array($content) && isset($content['error'])))
        {
            return null;
        }

        $document = new Document($content);

        $profileRaw = $document->find("//div[contains(@class, 'playerProfile')]", Query::TYPE_XPATH);

        if (count($profileRaw) == 0)
        {
            return null;
        }

        $profileRaw = $profileRaw[0];

        $profileNickRaw = $profileRaw->first("//h1[contains(@class, 'playerNickname')]", Query::TYPE_XPATH);
        if (isset($profileNickRaw))
        {
            $player['nick'] = trim($profileNickRaw->text());
        }

        $profileAgeRaw = $profileRaw->first("//div[contains(@class, 'playerAge')]/span[2]", Query::TYPE_XPATH);
        if (isset($profileAgeRaw))
        {
            $player['age'] = intval($profileAgeRaw->text());
        }

        $profileRealNameRaw = $profileRaw->first("//div[contains(@class, 'playerRealname')]", Query::TYPE_XPATH);
        if (isset($profileRealNameRaw))
        {
            $player['realname'] = trim($profileRealNameRaw->text());
        }

        $profileRegionRaw = $profileRaw->first("//div[contains(@class, 'playerRealname')]/img[contains(@class, 'flag')]", Query::TYPE_XPATH);
        if (isset($profileRegionRaw))
        {
            $player['region'] = trim($profileRegionRaw->attr('title'));

            $flagIconPath = parse_url($profileRegionRaw->attr('src'), PHP_URL_PATH);
            $flagIcon = explode('/', $flagIconPath);
            $flagIcon = end($flagIcon);

            $player['regionIconName'] = explode('.', $flagIcon)[0];
        }

        $profilePhotoRaw = $profileRaw->first("//img[contains(@class, 'bodyshot-img')]", Query::TYPE_XPATH);
        if (isset($profilePhotoRaw))
        {
            $player['photo'] = trim($profilePhotoRaw->attr('src'));
        }

        $profileTeamsRaw = $profileRaw->find("//table[contains(@class, 'team-breakdown')]/tbody/tr", Query::TYPE_XPATH);

        if (!empty($profileTeamsRaw))
        {
            $player['teams'] = [];
            foreach ($profileTeamsRaw as $profileTeamRaw)
            {

                $teamNameRaw = $profileTeamRaw->first("//td[contains(@class, 'team-name-cell')]//img[contains(@class, 'team-logo')]", Query::TYPE_XPATH);
                if (empty($teamNameRaw))
                {
                    continue;
                }
                $team = [
                    'name' => trim($teamNameRaw->attr('title')),
                    'logo' => trim($teamNameRaw->attr('src'))
                ];

                $timePeriodRaw = $profileTeamRaw->find("//td[contains(@class, 'time-period-cell')]", Query::TYPE_XPATH);
                if (count($timePeriodRaw) == 0)
                {
                    continue;
                }

                $timePeriodRaw = $timePeriodRaw[0];
                $timeStartRaw = $timePeriodRaw->find("span[1]", Query::TYPE_XPATH);
                if (count($timeStartRaw) == 0)
                {
                    continue;
                }

                $unixtime = trim($timeStartRaw[0]->attr('data-unix'));
                $dateTime = new \DateTime();
                if (strlen($unixtime) == 13)
                {
                    $unixtime = substr($unixtime, 0, -3);
                }
                $dateTime = $dateTime->setTimestamp($unixtime + 3600);

                $team['start_at'] = $dateTime;

                $timeEndRaw = $timePeriodRaw->find("span[2]", Query::TYPE_XPATH);
                if (count($timeEndRaw) > 0)
                {
                    $unixtime = trim($timeEndRaw[0]->attr('data-unix'));
                    $dateTime = new \DateTime();
                    if (strlen($unixtime) == 13)
                    {
                        $unixtime = substr($unixtime, 0, -3);
                    }
                    $dateTime = $dateTime->setTimestamp($unixtime);
                    $team['end_at'] = $dateTime;
                }

                $player['teams'][] = $team;
            }
        }
        //get current team
        $player['currentTeam'] = $this->getCurrentPlayerTeam($document);

        return $player;
    }

    /**
     * @param $document
     * @return array
     */
    public function getCurrentPlayerTeam($document)
    {
        $currentTeamBlock = $document->first('.playerTeam');
        if (isset($currentTeamBlock)){
            $currentTeamName = $currentTeamBlock->first('a');

            $teamUrl = $currentTeamName->attr('href');
            $teamUrl = HLTVService::urlDecorator($teamUrl);

            $teamName = trim($currentTeamName->text());

            $teamIcon = $currentTeamBlock->first('img');
            $teamIcon = isset($teamIcon) ? $teamIcon->attr('src'): null;
            $teamIcon = isset($teamIcon) ? HLTVService::urlDecorator($teamIcon): null;

            return [
                'name' => $teamName,
                'url' => $teamUrl,
                'logo' => $teamIcon
            ];
        }
    }
}
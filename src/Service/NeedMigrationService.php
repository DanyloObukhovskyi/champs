<?php
/**
 * Product: champs.
 * Date: 24/06/2020
 */

namespace App\Service;


use DiDom\Document;
use DiDom\Query;
use Psr\Log\LoggerInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

class NeedMigrationService
{
    public static function setNeedMigration($entity)
    {
        LoggerService::note(get_class($entity) . ' need migration');
    }
}
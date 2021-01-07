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

class LoggerService
{
    /** @var null| SymfonyStyle */
    private static $logger = null;

    const TYPE_INFO = 'info';
    const TYPE_WARNING = 'warning';
    const TYPE_ERROR = 'error';
    const TYPE_NOTE = 'note';

    public function __construct(SymfonyStyle $logger)
    {
        static::$logger = $logger;
    }

    public static function add($value, $type = false)
    {
        switch ($type) {
            case static::TYPE_ERROR:
                static::$logger->error($value);
                break;

            case static::TYPE_WARNING:
                static::$logger->warning($value);
                break;

            case static::TYPE_NOTE:
                static::$logger->note($value);
                break;

            case static::TYPE_INFO:
            default:
                static::$logger->comment($value);
        }
    }

    public static function info($value)
    {
        static::add($value, static::TYPE_INFO);
    }

    public static function note($value)
    {
        static::add($value, static::TYPE_NOTE);
    }

    public static function error($value)
    {
        static::add($value, static::TYPE_ERROR);
    }

    public static function warning($value)
    {
        static::add($value, static::TYPE_WARNING);
    }
}
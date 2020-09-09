<?php


namespace App\Traits;


use Symfony\Component\Messenger\Envelope;

/**
 * Add dispatch message method to any Class
 *
 * Trait Dispatchable
 * @package App\Traits
 */
trait Dispatchable
{
    /**
     * @param $message
     * @param array $params
     * @return mixed
     */
    public function dispatch($message, $params = [])
    {
        global $kernel;

        $container = $kernel->getContainer();

        if (!$container->has('messenger.default_bus')) {
            $message = class_exists(Envelope::class) ? 'You need to define the "messenger.default_bus" configuration option.' : 'Try running "composer require symfony/messenger".';
            throw new \LogicException('The message bus is not enabled in your application. '.$message);
        }

        return $container->get('messenger.default_bus')->dispatch($message, $params);
    }
}
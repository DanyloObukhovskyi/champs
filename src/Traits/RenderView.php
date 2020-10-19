<?php


namespace App\Traits;


trait RenderView
{
    /**
     * Returns a rendered view.
     */
    protected function renderView(string $view, array $parameters = []): string
    {
        global $kernel;

        $container = $kernel->getContainer();

        if (!$container->has('twig')) {
            throw new \LogicException('You can not use the "renderView" method if the Twig Bundle is not available. Try running "composer require symfony/twig-bundle".');
        }
        return $container->get('twig')->render($view, $parameters);
    }
}
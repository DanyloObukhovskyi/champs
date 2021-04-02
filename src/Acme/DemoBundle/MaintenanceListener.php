<?php
/**
 * Based on http://www.wenigersh.com/blog/post/maintenance-mode-for-symfony-2-applications
 *
 * Includes support of user permisson check (here: check if user has role ADMIN), so admins can still surf the site while in maintenance mode
 * Be aware that if you clear the cache (to start maintenance in prod environment) your sessions might be cleared as well, so people get logged out
 * The config.yml will move the sessions to /app/sessions/[environment]
 *
 * Also be aware that you need at least Symfony 2.6 for this permission check. For older versions the call is different
 * @see http://symfony.com/blog/new-in-symfony-2-6-security-component-improvements
 *
 * HTTP Response is a 503 Service Unavailable
 *
 * Don't forget to create the template that is called if you're in maintenance mode. See Comment in this file below
 */
namespace Acme\DemoBundle;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\DependencyInjection\ContainerInterface;

class MaintenanceListener
{
    private $container;

    public function __construct(ContainerInterface $container)
    {
        $this->container = $container;
    }

    public function onKernelRequest($event)
    {
        // get maintenance parameters
        $underMaintenanceUntil = $this->container->hasParameter('underMaintenanceUntil') ? $this->container->getParameter('underMaintenanceUntil') : false;
        $maintenance = $this->container->hasParameter('maintenance') ? $this->container->getParameter('maintenance') : null;

        $debug = in_array($this->container->get('kernel')->getEnvironment(), array('test'));

        if ($maintenance && !$debug && !$this->container->get('security.authorization_checker')->isGranted('ROLE_ADMIN')) {
            $engine = $this->container->get('templating');
            // be sure to create the template and link to it. Location doesn't matter (for me), /app/Resources/views/ might be your best bet
            $content = $engine->render('::maintenance.html.twig', array('underMaintenanceUntil' => $underMaintenanceUntil));
            $event->setResponse(new Response($content, 503));
            $event->stopPropagation();
        }

    }
}
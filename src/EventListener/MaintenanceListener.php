<?php

namespace App\EventListener;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpKernel\Event\RequestEvent;
use Twig\Environment;

class MaintenanceListener
{
    private $maintenance;

    private $twig;

    public function __construct($maintenance, Environment $twig)
    {
        $this->maintenance = $maintenance;
        $this->twig = $twig;
    }

    public function onKernelRequest(RequestEvent $event)
    {
        if (!file_exists($this->maintenance)) {
            return;
        }


        $event->setResponse(
          new Response($this->twig->render('maintenance/maintenance.html.twig'), 503)
        );
        $event->stopPropagation();


//        // get maintenance parameters
//        $underMaintenanceUntil = $this->container->hasParameter('underMaintenanceUntil') ? $this->container->getParameter('underMaintenanceUntil') : false;
//        $maintenance = $this->container->hasParameter('maintenance') ? $this->container->getParameter('maintenance') : null;
//
//        $debug = in_array($this->container->get('kernel')->getEnvironment(), array('test'));
//
//        if ($maintenance && !$debug && !$this->container->get('security.authorization_checker')->isGranted('ROLE_ADMIN')) {
//            $engine = $this->container->get('templating');
//            // be sure to create the template and link to it. Location doesn't matter (for me), /app/Resources/views/ might be your best bet
//            $content = $engine->render('::maintenance.html.twig', array('underMaintenanceUntil' => $underMaintenanceUntil));
//            $event->setResponse(new Response($content, 503));
//            $event->stopPropagation();
//        }

    }
}
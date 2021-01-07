<?php


namespace App\Service\Mailer;


class SwiftMailer
{
    private
    const
        SENDER_MAIL = "send@example.com";

    public function sendRegistrationMail($theme, $recipient, $name, \Swift_Mailer $mailer)
    {
        $message = (new \Swift_Message($theme))
            ->setFrom(self::SENDER_MAIL)
            ->setTo($recipient)
            ->setBody("Привет, $name! Вы успешно зарегистрировались на сайте champs.pro")
//                $this->renderView(
//                // templates/emails/registration.html.twig
//                    'mailer/welcome.html.twig',
//                    array('name' => $name)
//                ),
//                'text/html'
//            )
            /*
             * Если вы также хотите включить в сообщение версию обычного текста
            ->addPart(
                $this->renderView(
                    'emails/registration.txt.twig',
                    array('name' => $name)
                ),
                'text/plain'
            )
            */
        ;

        return $mailer->send($message);

//        return true; //$this->render(...);
    }

}
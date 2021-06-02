<?php

namespace App\Service\Interkassa;
use App\Entity\LessonsPayment;
use App\Entity\Payment;
use Doctrine\ORM\EntityManager;

/**
 * Interkassa API for PHP
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @license MIT-style license
 * @package Interkassa
 * @author Anton Suprun <kpobococ@gmail.com>
 * @author Odarchenko N.D. <odarchenko.n.d@gmail.com>
 * @author Bohdan Yurov <bogdan@yurov.me>
 * @author liberulo <odesskij1992@gmail.com>
 * @author Oleksii Mylotskyi <spalaxinco@gmail.com>
 * @version 1.0.0
 */

/**
 * InterkassaService base class
 *
 * This class is used to initialize the library and also contains several
 * constants.
 *
 * @license MIT-style license
 * @package Interkassa
 * @author Anton Suprun <kpobococ@gmail.com>
 * @version 1.0.0
 */
class InterkassaService
{
    /**#@+
     * URL method constant
     *
     * @see InterkassaPayment::setSuccessMethod()
     * @see InterkassaPayment::setFailMethod()
     * @see InterkassaPayment::setStatusMethod()
     */
    const METHOD_GET = 'GET';
    const METHOD_POST = 'POST';
    const METHOD_LINK = 'LINK';
    const METHOD_OFF = 'OFF';
    /**#@-*/

    /**#@+
     * State constant
     *
     * @see InterkassaStatus::getState()
     */
    const STATE_SUCCESS = 'success';
    const STATE_FAIL = 'fail';
    const STATE_CANCELED = 'canceled';
    /**#@-*/

    /**#@+
     * Fees payer constant
     *
     * @see InterkassaStatus::getFeesPayer()
     */
    const FEES_PAYER_SHOP = 0;
    const FEES_PAYER_BUYER = 1;
    const FEES_PAYER_EQUAL = 2;

    /**#@-*/

    /**#@+
     * Payment action constant
     *
     * @see InterkassaPayment::setAction()
     */
    const ACTION_PROCESS = 'process';
    const ACTION_PAYWAYS = 'payways';
    const ACTION_PAYWAY  = 'payway';

    /**#@-*/

    /**#@+
     * Payment interface constant
     */
    const INTERFACE_WEB = 'web';
    const INTERFACE_JSON = 'json';

    public function createPayment($lessons, $cost, $description = '')
    {
        // Create a shop
        $shop = InterkassaShop::factory(array(
            'id' => $_ENV['INTERKASSA_SHOP_ID'],
            'secret_key' => $_ENV['INTERKASSA_SECRET_KEY'],
        ));


        // Create a payment
        $paymentId = md5(uniqid('', true)); // Your payment id


        $interkassaPayment = $shop->createPayment(array(
            'id' => $paymentId,
            'amount' => $cost,
            'description' => $description
        ));

        if (!empty($lessons)) {
            $paymentEntity = new Payment();
            $paymentEntity->setPaymentStatus(Payment::STATUS_NEW);
            $paymentEntity->setLesson($lessons[0]);
            $paymentEntity->setInterKassaId($paymentId);

            $this->getEntityManager()->persist($paymentEntity);
            $this->getEntityManager()->flush();

            $this->createPaymentLessons($paymentEntity, $lessons);
        }

        return $interkassaPayment;
    }

    /**
     * @return EntityManager
     */
    public function getEntityManager(): ?object
    {
        global $kernel;

        return $kernel->getContainer()->get('doctrine.orm.entity_manager');
    }

    /**
     * @param $payment
     * @param $lessons
     * @throws \Doctrine\ORM\ORMException
     * @throws \Doctrine\ORM\OptimisticLockException
     */
    public function createPaymentLessons($payment, $lessons)
    {
        foreach ($lessons as $lesson) {
            $paymentLesson = new LessonsPayment();
            $paymentLesson->setLesson($lesson);
            $paymentLesson->setPayment($payment);

            $this->getEntityManager()->persist($paymentLesson);
        }
        $this->getEntityManager()->flush();
    }
}

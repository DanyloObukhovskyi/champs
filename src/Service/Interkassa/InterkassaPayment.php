<?php

namespace App\Service\Interkassa;
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
 * Interkassa payment class
 *
 * This class represents a payment. It can be used to acquire an array of all
 * the form field values with the correct field names (see
 * {@link InterkassaPayment::getFormValues() getFormValues() method}.
 *
 * @license MIT-style license
 * @package Interkassa
 * @author Anton Suprun <kpobococ@gmail.com>
 * @version 1.0.0
 */
class InterkassaPayment
{
    /**
     * Shop instance
     *
     * @var InterkassaShop
     */
    protected $_shop;

    /**
     * Payment id
     *
     * @var string
     */
    protected $_id;

    /**
     * Payment amount
     *
     * @var float
     */
    protected $_amount;

    /**
     * Payment description
     *
     * @var string
     */
    protected $_description;


    /**
     * Payment baggage field
     *
     * @var string
     */
    protected $_baggage = false;

    /**
     * Success url
     *
     * @var string
     */
    protected $_success_url = false;

    /**
     * Failure url
     *
     * @var string
     */
    protected $_fail_url = false;

    /**
     * Pending url
     *
     * @var string
     */
    protected $_pending_url = false;

    /**
     * Status url
     *
     * @var string
     */
    protected $_status_url = false;

    /**
     * Success url method
     *
     * @var string
     */
    protected $_success_method = InterkassaService::METHOD_POST;

    /**
     * Failure url method
     *
     * @var string
     */
    protected $_fail_method = InterkassaService::METHOD_POST;

    /**
     * Pending url method
     *
     * @var string
     */
    protected $_pending_method = InterkassaService::METHOD_POST;

    /**
     * Status url method
     *
     * @var string
     */
    protected $_status_method = InterkassaService::METHOD_POST;

    /**
     * Payment form action
     *
     * @var string
     */
    protected $_form_action = 'https://sci.interkassa.com/';

    /**
     * Users Locale
     * @var string
     */
    protected $_locale = false;

    /**
     * Users currency name
     * @var string
     */
    protected $_currency = false;

    /**
     * Initial payment action
     *
     * Allows to set initial payment state
     *
     * @var string
     */
    protected $_action = false;

    /**
     * SCI interface
     *
     * @var string
     */
    protected $_interface = false;

    /**
     * Force user payment method
     *
     * Requires {@link InterkassaPayment::$_action}
     * to be set to either {@link InterkassaService::ACTION_PROCESS}
     * or {@link InterkassaService::ACTION_PAYWAY}
     *
     * @var string
     */
    protected $_paywayVia = false;

    /**
     * Create payment instance
     *
     * @param InterkassaShop $shop
     * @param array $options
     * @return InterkassaPayment
     * @throws InterkassaException
     * @internal param \Interkassa_Shop $interkassa
     *
     * @see InterkassaPayment::__construct()
     *
     */
    public static function factory(InterkassaShop $shop, array $options)
    {
        return new InterkassaPayment($shop, $options);
    }

    /**
     * Constructor
     *
     * Accepted payment options are:
     * - id - payment id
     * - amount - payment amount
     * - description - payment description
     * - baggage - payment baggage field. Optional
     * - success_url - url to redirect the user in case of success. Optional
     * - fail_url - url to redirect the user in case of failure. Optional
     * - pending_url - url is used when redirecting client from SCI back to checkout page, if payment is in process. Optional
     * - status_url - url to send payment status. Optional
     * - success_method - method to use when redirecting to success_url. Optional
     * - pending_method - method to use when redirecting to pending_url. Optional
     * - fail_method - method to use when redirecting to fail_url. Optional
     * - status_method - method to use when sending payment status. Optional
     * - form_action - payment form action url. Optional
     * - action - initial payment action. Optional
     * - interface - SCI interface. Optional
     * - payway_via - force user payment method. Optional
     *
     * @param InterkassaShop $shop
     * @param array $options an array of payment options
     *
     * @throws InterkassaException if any required options are missing
     */
    public function __construct(InterkassaShop $shop, array $options)
    {
        $this->_shop = $shop;

        if (!isset($options['id'])) {
            throw new InterkassaException('Payment id is required');
        }

        if (!isset($options['amount'])) {
            throw new InterkassaException('Payment amount is required');
        }

        if (!isset($options['description'])) {
            throw new InterkassaException('Payment description is required');
        }

        $this->_id = (string)$options['id'];
        $this->_amount = (float)$options['amount'];
        $this->_description = (string)$options['description'];


        if (!empty($options['baggage'])) {
            $this->setBaggage($options['baggage']);
        }

        if (!empty($options['success_url'])) {
            $this->setSuccessUrl($options['success_url']);
        }

        if (!empty($options['success_method'])) {
            $this->setSuccessMethod($options['success_method']);
        }

        if (!empty($options['fail_url'])) {
            $this->setFailUrl($options['fail_url']);
        }

        if (!empty($options['fail_method'])) {
            $this->setFailMethod($options['fail_method']);
        }

        if (!empty($options['pending_url'])) {
            $this->setPendingUrl($options['pending_url']);
        }

        if (!empty($options['pending_method'])) {
            $this->setPendingMethod($options['pending_method']);
        }

        if (!empty($options['status_url'])) {
            $this->setStatusUrl($options['status_url']);
        }

        if (!empty($options['status_method'])) {
            $this->setStatusMethod($options['status_method']);
        }

        if (!empty($options['form_action'])) {
            $this->setFormAction($options['form_action']);
        }

        if (!empty($options['locale'])) {
            $this->setLocale($options['locale']);
        }

        if (!empty($options['currency'])) {
            $this->setCurrency($options['currency']);
        }

        if (!empty($options['action'])) {
            $this->setAction($options['action']);
        }

        if (!empty($options['interface'])) {
            $this->setInterface($options['interface']);
        }

        if (!empty($options['payway_via'])) {
            $this->setPaywayVia($options['payway_via']);
        }
    }

    /**
     * Get pending url
     *
     * @return string
     */
    public function getPendingUrl()
    {
        return $this->_pending_url;
    }

    /**
     * Set pending url
     *
     * @param string $pending_url
     *
     * @return InterkassaPayment self
     */
    public function setPendingUrl($url)
    {
        if (!empty($url)) {
            $this->_pending_url = (string)$url;
        }

        return $this;
    }

    /**
     * Get pending url method
     *
     * Returns {@link InterkassaService::METHOD_POST}, {@link InterkassaService::METHOD_GET}
     * or {@link InterkassaService::METHOD_LINK}
     *
     * @return string
     */
    public function getPendingMethod()
    {
        return $this->_pending_method;
    }

    /**
     * Set pending url method
     *
     * @param string $method
     *
     * @uses InterkassaService::METHOD_POST
     * @uses InterkassaService::METHOD_GET
     * @uses InterkassaService::METHOD_LINK
     *
     * @return InterkassaPayment self
     */
    public function setPendingMethod($method)
    {
        if (empty($method)) {
            return $this;
        }

        $methods = array(
            InterkassaService::METHOD_POST,
            InterkassaService::METHOD_GET,
            InterkassaService::METHOD_LINK
        );

        if (in_array($method, $methods)) {
            $this->_pending_method = $method;
        }

        return $this;
    }

    /**
     * Get forced user payment method
     *
     * @return string
     */
    public function getPaywayVia()
    {
        return $this->_paywayVia;
    }

    /**
     * Set forced user payment method
     *
     * Required {@link InterkassaPayment::$_action} to be set to either
     * {@link InterkassaService::ACTION_PROCESS} or {@link InterkassaService::ACTION_PAYWAY}
     *
     * @param string $payway
     *
     * @return InterkassaPayment self
     */
    public function setPaywayVia($payway)
    {
        if (empty($payway)) {
            return $this;
        }

        $this->_paywayVia = $payway;

        return $this;
    }

    /**
     * Get initial payment action
     *
     * @return string
     */
    public function getAction()
    {
        return $this->_action;
    }

    /**
     * Set initial payment action
     *
     * @param string $action
     *
     * @uses InterkassaService::ACTION_PROCESS
     * @uses InterkassaService::ACTION_PAYWAYS
     * @uses InterkassaService::ACTION_PAYWAY
     *
     * @return InterkassaPayment self
     */
    public function setAction($action)
    {
        if (empty($action)) {
            return $this;
        }

        $actions = array(
            InterkassaService::ACTION_PROCESS,
            InterkassaService::ACTION_PAYWAYS,
            InterkassaService::ACTION_PAYWAY
        );

        if (in_array($action, $actions)) {
            $this->_action = $action;
        }

        return $this;
    }

    /**
     * Get SCI interface
     *
     * @return string
     */
    public function getInterface()
    {
        return $this->_interface;
    }

    /**
     * Set SCI interface
     *
     * @uses InterkassaService::INTERFACE_WEB
     * @uses InterkassaService::INTERFACE_JSON
     *
     * @param string $interface
     *
     * @return InterkassaPayment self
     */
    public function setInterface($interface)
    {
        if (empty($interface)) {
            return $this;
        }

        $interfaces = array(
            InterkassaService::INTERFACE_WEB,
            InterkassaService::INTERFACE_JSON
        );

        if (in_array($interface, $interfaces)) {
            $this->_interface = $interface;
        }

        return $this;
    }

    /**
     * Get payment id
     *
     * @return string
     */
    public function getId()
    {
        return $this->_id;
    }

    /**
     * Get payment amount
     *
     * @return float
     */
    public function getAmount()
    {
        return $this->_amount;
    }

    /**
     * Get payment amount as string
     *
     * @param int $decimals number of decimal points
     *
     * @return string
     */
    public function getAmountAsString($decimals = 2)
    {
        return number_format($this->_amount, $decimals, '.', '');
    }

    /**
     * Get payment description
     *
     * @return string
     */
    public function getDescription()
    {
        return $this->_description;
    }

    /**
     * Get payment baggage field
     *
     * @return string
     */
    public function getBaggage()
    {
        return $this->_baggage;
    }

    /**
     * Set payment baggage field
     *
     * @param string $baggage
     *
     * @return InterkassaPayment self
     */
    public function setBaggage($baggage)
    {
        if (!empty($baggage)) {
            $this->_baggage = (string)$baggage;
        }

        return $this;
    }

    /**
     * Get success url
     *
     * @return string
     */
    public function getSuccessUrl()
    {
        return $this->_success_url;
    }

    /**
     * Set success url
     *
     * @param string $url
     *
     * @return InterkassaPayment self
     */
    public function setSuccessUrl($url)
    {
        if (!empty($url)) {
            $this->_success_url = (string)$url;
        }

        return $this;
    }

    /**
     * Get success url method
     *
     * Returns {@link InterkassaService::METHOD_POST}, {@link InterkassaService::METHOD_GET}
     * or {@link InterkassaService::METHOD_LINK}
     *
     * @return string
     */
    public function getSuccessMethod()
    {
        return $this->_success_method;
    }

    /**
     * Set success url method
     *
     * @param string $method
     *
     * @uses InterkassaService::METHOD_POST
     * @uses InterkassaService::METHOD_GET
     * @uses InterkassaService::METHOD_LINK
     *
     * @return InterkassaPayment self
     */
    public function setSuccessMethod($method)
    {
        if (empty($method)) {
            return $this;
        }

        $methods = array(
            InterkassaService::METHOD_POST,
            InterkassaService::METHOD_GET,
            InterkassaService::METHOD_LINK
        );

        if (in_array($method, $methods)) {
            $this->_success_method = $method;
        }

        return $this;
    }

    /**
     * Get failure url
     *
     * @return string
     */
    public function getFailUrl()
    {
        return $this->_fail_url;
    }

    /**
     * Set failure url
     *
     * @param string $url
     *
     * @return InterkassaPayment self
     */
    public function setFailUrl($url)
    {
        if (!empty($url)) {
            $this->_fail_url = (string)$url;
        }

        return $this;
    }

    /**
     * Get failure url method
     *
     * Returns {@link InterkassaService::METHOD_POST}, {@link InterkassaService::METHOD_GET}
     * or {@link InterkassaService::METHOD_LINK}
     *
     * @return string
     */
    public function getFailMethod()
    {
        return $this->_fail_method;
    }

    /**
     * Set failure url method
     *
     * @param string $method
     *
     * @uses InterkassaService::METHOD_POST
     * @uses InterkassaService::METHOD_GET
     * @uses InterkassaService::METHOD_LINK
     *
     * @return InterkassaPayment self
     */
    public function setFailMethod($method)
    {
        if (empty($method)) {
            return $this;
        }

        $methods = array(
            InterkassaService::METHOD_POST,
            InterkassaService::METHOD_GET,
            InterkassaService::METHOD_LINK
        );

        if (in_array($method, $methods)) {
            $this->_fail_method = $method;
        }

        return $this;
    }

    /**
     * Get status url
     *
     * @return string
     */
    public function getStatusUrl()
    {
        return $this->_status_url;
    }

    /**
     * Set status url
     *
     * @param string $url
     *
     * @return InterkassaPayment self
     */
    public function setStatusUrl($url)
    {
        if (!empty($url)) {
            $this->_status_url = (string)$url;
        }

        return $this;
    }

    /**
     * Get status url method
     *
     * Returns {@link InterkassaService::METHOD_POST}, {@link InterkassaService::METHOD_GET}
     * or {@link InterkassaService::METHOD_OFF}
     *
     * @return string
     */
    public function getStatusMethod()
    {
        return $this->_status_method;
    }

    /**
     * Set status url method
     *
     * @param string $method
     *
     * @uses InterkassaService::METHOD_POST
     * @uses InterkassaService::METHOD_GET
     * @uses InterkassaService::METHOD_OFF
     *
     * @return InterkassaPayment self
     */
    public function setStatusMethod($method)
    {
        if (empty($method))
            return $this;

        $methods = array(
            InterkassaService::METHOD_POST,
            InterkassaService::METHOD_GET,
            InterkassaService::METHOD_OFF
        );

        if (in_array($method, $methods)) {
            $this->_status_method = $method;
        }

        return $this;
    }

    /**
     * Get payment form field values
     *
     * Returns an associative array of the payment form field names as array
     * keys, and their respective values as array values
     *
     * @uses InterkassaPayment::getAmountAsString() to form payment amount value
     *
     * @return array
     */
    public function getFormValues()
    {
        $fields = array(
            'ik_co_id' => $this->getShop()->getId(),
            'ik_am'    => $this->getAmountAsString(),
            'ik_pm_no' => $this->getId(),
            'ik_desc'  => $this->getDescription()
        );

        $success_url = $this->getSuccessUrl();
        $fail_url    = $this->getFailUrl();
        $status_url  = $this->getStatusUrl();
        $pending_url = $this->getPendingUrl();
        $locale      = $this->getLocale();
        $curr        = $this->getCurrency();
        $action      = $this->getAction();
        $interface   = $this->getInterface();
        $payway      = $this->getPaywayVia();

        if ($locale) {
            $fields['ik_loc'] = $locale;
        }

        $fields['ik_x_baggage'] = (string)$this->getBaggage();

        if ($success_url) {
            $fields['ik_suc_u'] = (string)$success_url;
            $fields['ik_suc_m'] = (string)$this->getSuccessMethod();
        }

        if ($fail_url) {
            $fields['ik_fal_u'] = (string)$fail_url;
            $fields['ik_fal_m'] = (string)$this->getFailMethod();
        }

        if ($pending_url) {
            $fields['ik_pnd_u'] = (string)$pending_url;
            $fields['ik_pnd_m'] = (string)$this->getPendingMethod();
        }

        if ($status_url) {
            $fields['ik_ia_u'] = (string)$status_url;
            $fields['ik_ia_m'] = (string)$this->getStatusMethod();
        }

        if ($curr) {
            $fields['ik_cur'] = (string)$curr;
        }

        if ($action) {
            $fields['ik_act'] = (string)$action;
        }

        if ($interface) {
            $fields['ik_int'] = (string)$interface;
        }

        if ($payway) {
            $fields['ik_pw_via'] = (string)$payway;
        }

        return $fields;
    }

    /**
     * Get payment form action
     *
     * @return string
     */
    public function getFormAction()
    {
        return $this->_form_action;
    }

    /**
     * Set payment form action
     *
     * @param string $url
     *
     * @return InterkassaPayment self
     */
    public function setFormAction($url)
    {
        if ($url)
            $this->_form_action = (string)$url;

        return $this;
    }

    /**
     * Get shop instance for this payment
     *
     * @return InterkassaShop
     */
    public function getShop()
    {
        return $this->_shop;
    }

    /**
     * Set users interface locale
     * @param $locale
     * @return InterkassaPayment self
     */
    public function setLocale($locale)
    {
        $this->_locale = $locale;
        return $this;
    }

    /**
     * Get users interface locale
     * return string
     */
    public function getLocale()
    {
        return $this->_locale;
    }

    /**
     * ex. USD; EUR; UAH
     * @param $currency
     * @return InterkassaPayment self
     */
    public function setCurrency($currency)
    {
        $this->_currency = $currency;
        return $this;
    }

    /**
     * @return string
     */
    public function getCurrency()
    {
        return $this->_currency;
    }

    public function execute()
    {
        $url = $this->getFormAction();

        $form = "<form id='paymentForm' method='post' action=".$url.">";

        foreach ($this->getFormValues() as $key => $value) {
            $form .= "<input type='hidden' value='$value' name='$key' />";
        }
        $form .= "<input style='display: none;' type='submit' id='submitButton' /></form> ";
        $form .= "<script> document.getElementById('paymentForm').submit(); </script>";

        echo $form;
        die();
    }
}

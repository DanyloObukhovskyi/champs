<?php
	defined('BASEPATH') OR exit('No direct script access allowed');
	
	define('YANDEX_CHECKOUT_SDK_ROOT_PATH', dirname(__FILE__)."/../libraries/yandex");
	define('YANDEX_CHECKOUT_PSR_LOG_PATH', dirname(__FILE__).'/../libraries/yandex/../vendor/psr/log/Psr/Log');
	
	spl_autoload_register('yandexCheckoutLoadClass');
	
	function yandexCheckoutLoadClass($className)
	{
		if (strncmp('YandexCheckout', $className, 14) === 0) {
			$path   = YANDEX_CHECKOUT_SDK_ROOT_PATH;
			$length = 14;
		} elseif (strncmp('Psr\Log', $className, 7) === 0) {
			$path   = YANDEX_CHECKOUT_PSR_LOG_PATH;
			$length = 7;
		} else {
			return;
		}
		$path .= str_replace('\\', '/', substr($className, $length)) . '.php';
		if (file_exists($path)) {
			require $path;
		}
	}

	class Refund_c extends CI_Controller {
		
		private $UserID;
		private $user_capabilities;
		private $secret;
		private $merchant_id;
		
		public function __construct()
		{
			parent::__construct();
			if (!$this->ion_auth->logged_in()) {
				redirect('login/auth');
				die();
			}
			
			$this->UserID = $this->ion_auth->get_user_id();
			if ($this->UserID == 0) {
				redirect('login/auth');
				die();
			}
			$this->load->model('users_model');
			$this->user_capabilities = $this->config->item('user_capabilities');
			
			$this->merchant_id = 734242;
			$this->secret = "test_D8_fyWcUkbqn6XpSLLlfxJMYF0AjZV9B60AjuXLmeVs";
		}
		
		public function index($user_ID = 0)
		{
			if((int)$user_ID != $this->UserID )  {
				die();
			}
			if((int)$_POST['user_id'] != $this->UserID )  {
				die();
			}
			$current_u_can = $this->users_model->get_capabilities($this->UserID);
			if(isset($current_u_can[0]["roles"])) {
				$current_u_can = json_decode($current_u_can[0]["roles"]);
				$current_u_can = $current_u_can[0];
			} else {
				redirect($this->config->item(base_url('404_override')));
				die();
			}
			
			if($current_u_can[0] == "1") {
				yandexCheckoutLoadClass("YandexCheckout/Client");
				$client = new YandexCheckout\Client();
				$client->setAuth($this->merchant_id, $this->secret);
				$yandex_kassa_id = (isset($_POST['yandex_kassa_id'])) ? trim($_POST['yandex_kassa_id']) : '';
				$amount = (isset($_POST['amount'])) ? trim($_POST['amount']) : '';
				$currency = (isset($_POST['currency'])) ? trim($_POST['currency']) : '';
				$payment_id = (isset($_POST['payment_id'])) ? trim($_POST['payment_id']) : '';
				$idempotenceKey = uniqid('', true);
				if(!empty($yandex_kassa_id) && !empty($amount) && !empty($currency) && !empty($payment_id)) {
					$response = $client->createRefund(
						array(
							'payment_id' => $yandex_kassa_id,
							'amount' => array(
								'value' => $amount,
								'currency' => $currency,
							),
						),
						$idempotenceKey
					);
					
					
					if($response->code == 400) {
						$error = 400;
						$msg = json_decode ($response->body);
//						$this->load->model("selectData");
//						$check_payment = $this->selectData->checkRefund(68);
//						if(isset($check_payment[0])){
//							$check_payment = $check_payment[0];
//							$amount_data = floatval($check_payment["amount"]);
//							$amount = $amount_data + floatval($amount);
//						}
						echo $msg->description;
						die();
					} else {
						$this->update_refund($payment_id, $yandex_kassa_id, $amount, json_encode($response));
						echo 1;
						die();
					}
				}
				
			}
		}
		
		private function update_refund($payment_id="",$yandex_kassa_id="", $amount=0,  $data=array()) {
			$this->load->model("selectData");
			
//			$check_payment = $this->selectData->checkRefund($payment_id);
//			if(isset($check_payment[0])){
//				$check_payment = $check_payment[0];
//				$update = array();
//
//				$amount="1.00";
//				$amount_data = floatval($check_payment["amount"]);
//				$amount_data = $amount_data + floatval($amount);
//
//				$update['amount'] = $amount_data;
//				$update['updated_at'] = date("Y-m-d H:i:s");
//
//				$this->selectData->updateRefund($payment_id,$update);
//			} else {
			$check_payment = $this->selectData->checkRefund($payment_id);
			if(isset($check_payment[0])){
				$check_payment = $check_payment[0];
				$amount_data = floatval($check_payment["amount"]);
				$amount = $amount_data + floatval($amount);
			}
				$insert = array();
				$insert['payment_id'] = (int)$payment_id;
				$insert['yandex_kassa_id'] = $yandex_kassa_id;
				$insert['amount'] = $amount;
				$insert['yandex_data'] = $data;
				$insert['created_at'] = date("Y-m-d H:i:s");
				$insert['updated_at'] = date("Y-m-d H:i:s");
				
				$this->selectData->addRefund($insert);
//			}
		}
	}
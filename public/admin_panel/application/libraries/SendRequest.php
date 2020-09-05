<?php defined('BASEPATH') OR exit('No direct script access allowed');
	
	class SendRequest extends CI_Controller
	{
		
		public function __construct()
		{
			//$this->CI = get_instance();
			//$this->load->helper('url_helper');
		
		}
		
		public function PreapreRequest() {
		
		}
		
		public function SendGETRequest($site_url='')
		{
			if(empty($site_url)) {
				echo "Params error";
				return;
			}
			
			$site_url = $site_url;
			$ch = curl_init();
			curl_setopt($ch, CURLOPT_URL, $site_url);
			curl_setopt($ch, CURLOPT_POST, false);
			curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
			curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
			curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 10);
			curl_setopt($ch, CURLOPT_TIMEOUT, 15);
			$result = curl_exec($ch);
			curl_close($ch);
			
			if(!@json_decode($result))
			{
				return '';
			}
			else
			{
				$result = json_decode($result);
				return $result;
			}
		}
		
		private function SendPOSTRequest($site_url='', $data='')
		{
			if(empty($site_url) || empty($data)){
				echo "Params error";
				die();
			}
			
			$site_url = $site_url;
			$ch = curl_init();
			curl_setopt($ch, CURLOPT_URL, $site_url);
			curl_setopt($ch, CURLOPT_POST, true);
			curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
			curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
			curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
			curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 10);
			curl_setopt($ch, CURLOPT_TIMEOUT, 15);
			$result = curl_exec($ch);
			// $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
			// print_r($result);
			curl_close($ch);
			
			// die();
			if(!@unserialize($result))
			{
				return '';
			}
			else
			{
				$result = unserialize($result);
				return $result;
			}
		}
	}

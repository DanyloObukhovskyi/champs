<?php
	defined('BASEPATH') OR exit('No direct script access allowed');
	
	class Delete_c extends CI_Controller
	{
		private $UserID;
		private $user_capabilities;
		
		public function __construct ()
		{
			parent::__construct ();
			if (!$this->ion_auth->logged_in ()) {
				redirect ('login/auth');
				die();
			}
			
			$this->UserID = $this->ion_auth->get_user_id ();
			if ($this->UserID == 0) {
				redirect ('login/auth');
				die();
			}
			$this->load->model(array('delete_m', 'users_model'));
			$this->user_capabilities = $this->config->item('user_capabilities');
		}
		
		public function post($post_id=0, $admin_id=0) {
			if($this->UserID != (int)$admin_id) {
				redirect ($this->config->item('login_Ok'));
				die();
			}
			
			$current_u_can = $this->users_model->get_capabilities($admin_id);
			if(isset($current_u_can[0]["roles"])) {
				$current_u_can = json_decode($current_u_can[0]["roles"]);
				$current_u_can = $current_u_can[0];
			} else {
				redirect($_SERVER["HTTP_REFERER"]);
			}
			if($current_u_can[0] == "1" || $current_u_can[1] == "1") {
				$this->delete_m->delete_post($post_id);
				redirect($_SERVER["HTTP_REFERER"]);
				die();
			}
			
			redirect ($_SERVER["HTTP_REFERER"]);
			die();
		}
		
		public function match($match_id=0, $admin_id=0) {
			if($this->UserID != (int)$admin_id) {
				redirect ($this->config->item('login_Ok'));
				die();
			}
			$current_u_can = $this->users_model->get_capabilities($admin_id);
			if(isset($current_u_can[0]["roles"])) {
				$current_u_can = json_decode($current_u_can[0]["roles"]);
				$current_u_can = $current_u_can[0];
			} else {
				redirect($_SERVER["HTTP_REFERER"]);
				die();
			}
			
			if($current_u_can[0] == "1" || $current_u_can[2] == "1") {
				$this->delete_m->delete_match($match_id);
				redirect($_SERVER["HTTP_REFERER"]);
				die();
			}
		
			redirect ($_SERVER["HTTP_REFERER"]);
			die();
		}
		
		public function user($user_id=0, $admin_id=0) {
			if($this->UserID != (int)$admin_id) {
				redirect ($this->config->item('login_Ok'));
				die();
			}
			$current_u_can = $this->users_model->get_capabilities($admin_id);
			if(isset($current_u_can[0]["roles"])) {
				$current_u_can = json_decode($current_u_can[0]["roles"]);
				$current_u_can = $current_u_can[0];
			} else {
				redirect($_SERVER["HTTP_REFERER"]);
				die();
			}
			
			if($current_u_can[0] == "1") {
				$this->delete_m->delete_user($user_id);
				redirect(base_url("c-admin/users/page/1"));
				die();
			}
			
			redirect ($_SERVER["HTTP_REFERER"]);
			die();
		}
		
		public function trainer($trainer_id=0, $admin_id=0) {
			if($this->UserID != (int)$admin_id) {
				redirect ($this->config->item('login_Ok'));
				die();
			}
			$current_u_can = $this->users_model->get_capabilities($admin_id);
			if(isset($current_u_can[0]["roles"])) {
				$current_u_can = json_decode($current_u_can[0]["roles"]);
				$current_u_can = $current_u_can[0];
			} else {
				redirect($_SERVER["HTTP_REFERER"]);
				die();
			}
			
			if($current_u_can[0] == "1" || $current_u_can[3] == "1" ) {
                $this->delete_m->delete_trainer_lesson_price($trainer_id);
				$this->delete_m->delete_trainer($trainer_id);
				$this->delete_m->delete_trainer_as_teacher($trainer_id);

				redirect(base_url("c-admin/trainers/page/1"));
				die();
			}
			
			
			redirect ($_SERVER["HTTP_REFERER"]);
			die();
		}
		
		public function admin($user_id=0, $admin_id=0) {
			if($this->UserID != (int)$admin_id) {
				redirect ($this->config->item('login_Ok'));
				die();
			}
			$current_u_can = $this->users_model->get_capabilities($admin_id);
			if(isset($current_u_can[0]["roles"])) {
				$current_u_can = json_decode($current_u_can[0]["roles"]);
				$current_u_can = $current_u_can[0];
			} else {
				redirect($_SERVER["HTTP_REFERER"]);
				die();
			}

			if($current_u_can[0] == "1") {
				$this->delete_m->delete_admin($user_id);
				redirect(base_url("c-admin/admins/page/1"));
				die();
			}
		
			redirect ($_SERVER["HTTP_REFERER"]);
			die();
		}
		
		public function delete_payment($payment_id=0, $admin_id=0) {
			if($this->UserID != (int)$admin_id) {
				redirect ($this->config->item('login_Ok'));
				die();
			}
			$current_u_can = $this->users_model->get_capabilities($admin_id);
			if(isset($current_u_can[0]["roles"])) {
				$current_u_can = json_decode($current_u_can[0]["roles"]);
				$current_u_can = $current_u_can->role;
			} else {
				redirect($_SERVER["HTTP_REFERER"]);
				die();
			}
		
			if($current_u_can[0] == "1") {
				$this->delete_m->delete_payment($payment_id);
				redirect($_SERVER["HTTP_REFERER"]);
				die();
			}
			
			redirect ($_SERVER["HTTP_REFERER"]);
			die();
		}
	}
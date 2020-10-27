<?php
	defined('BASEPATH') OR exit('No direct script access allowed');
	
	class Auth extends CI_Controller {
		
		private $UserID;
		
		public function __construct() {
			parent::__construct();
			
			$this->load->model(array('SelectData', 'users_model'));
			$this->UserID = $this->ion_auth->get_user_id();
		}
		
		public function index() {
			if($this->UserID > 0) {
				redirect($this->config->item('admin_login'), 'refresh');
			}
			$data['UserID']  = $this->UserID;
//			$data['output'] = $this->load->view('auth/Auth', $data, true);
			$this->load->view('layout/auth', $data);

		}
		public function login() {
			if($this->UserID > 0) {
				$current_u_can = $this->users_model->get_capabilities($this->UserID);
				if(isset($current_u_can[0]["roles"])) {
					$current_u_can = json_decode($current_u_can[0]["roles"]);
					$current_u_can = $current_u_can[0];
				} else {
					$this->data['message'] = (validation_errors()) ? validation_errors() : $this->session->flashdata('message');
					
					$this->data['identity'] = array('name' => 'identity',
						'id' => 'identity',
						'type' => 'email',
						'placeholder' => 'Email',
					);
					$this->data['password'] = array('name' => 'password',
						'id' => 'password',
						'type' => 'password',
						'placeholder' => "Password",
					);
					
					$output = $this->load->view("auth/Auth", $this->data, true);
					$this->load->view('layout/auth', array(
							'output' => $output,
							'top_menu' => false)
					);
					return;
				}
				if($current_u_can[0] == "1") {
					redirect($this->config->item('admin_login'), 'refresh');
				} elseif($current_u_can[1] == "1") {
					redirect($this->config->item('0100'), 'refresh');
				} elseif($current_u_can[2] == "1") {
					redirect($this->config->item('0010'), 'refresh');
				} elseif($current_u_can[3] == "1") {
					redirect($this->config->item('0001'), 'refresh');
				}
			}
			$this->data['title'] = $this->lang->line('login_heading');
			$this->delOldMC();
			
			//validate form input
			$this->form_validation->set_rules('identity', str_replace(':', '', $this->lang->line('login_identity_label')), 'required');
			$this->form_validation->set_rules('password', str_replace(':', '', $this->lang->line('login_password_label')), 'required');
			
			if ($this->form_validation->run() == true) {
				// check to see if the user is logging in
				// check for "remember me"
				$remember = (bool) $this->input->post('remember');
				$remember = true;
				if ($this->ion_auth->login($this->input->post('identity'), $this->input->post('password'), $remember)) {
					//if the login is successful
					//redirect them back to the home page
					$this->session->set_flashdata('message', $this->ion_auth->messages());
					
					$current_u_can = $this->users_model->get_capabilities($this->ion_auth->get_user_id());
					if(isset($current_u_can[0]["roles"])) {
						$current_u_can = json_decode($current_u_can[0]["roles"]);
						$current_u_can = $current_u_can[0];
					}
					if($current_u_can[0] == "1") {
						redirect($this->config->item('admin_login'), 'refresh');
					} elseif($current_u_can[1] == "1") {
						redirect($this->config->item('0100'), 'refresh');
					} elseif($current_u_can[2] == "1") {
						redirect($this->config->item('0010'), 'refresh');
					} elseif($current_u_can[3] == "1") {
						redirect($this->config->item('0001'), 'refresh');
					}
					redirect($this->config->item('admin_login'), 'refresh');
					
					
				} else {
					// if the login was un-successful
					// redirect them back to the login page
					$this->session->set_flashdata('message', $this->ion_auth->errors());
					redirect($this->config->item('login_page'), 'refresh'); // use redirects instead of loading views for compatibility with MY_Controller libraries
				}
			} else {
				// the user is not logging in so display the login page
				// set the flash data error message if there is one
				$this->data['message'] = (validation_errors()) ? validation_errors() : $this->session->flashdata('message');
				
				$this->data['identity'] = array('name' => 'identity',
					'id' => 'identity',
					'type' => 'email',
					'placeholder' => 'Email',
				);
				$this->data['password'] = array('name' => 'password',
					'id' => 'password',
					'type' => 'password',
					'placeholder' => "Password",
				);
				
				$output = $this->load->view("auth/Auth", $this->data, true);
				$this->load->view('layout/auth', array(
						'output' => $output,
						'top_menu' => false)
				);
				
			}
		}
		
		private function delOldMC() {
			set_time_limit(0);
			ignore_user_abort(true);
			
			$days = 7;
			$daysInSeconds = $days * 86400;
			$curTime = time();
			
			$this->load->model(array('mc_sessions_model'));
			$delete = $this->mc_sessions_model->deleteOld($curTime, $daysInSeconds);
			
			return $delete;
		}
		
		public function logout() {
			$logout = $this->ion_auth->logout();

		//	$this->session->set_flashdata('message', $this->ion_auth->messages());
			redirect($this->config->item('login_page'), 'refresh');
		}
	
	}

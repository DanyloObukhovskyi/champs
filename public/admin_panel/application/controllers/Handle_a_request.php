<?php
	defined('BASEPATH') OR exit('No direct script access allowed');
	
	class Handle_a_request extends CI_Controller
	{
		private $UserID;
		
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
		}
		
		public function index() {
			if(isset($_POST['ajax_update'])){
				$identity = (isset($_POST["identity"])) ? trim($_POST["identity"]): '';
				$remember_code = (isset($_POST["remember_code"])) ? trim($_POST["remember_code"]): '';
				$request_name = (isset($_POST["request_name"])) ? trim($_POST["request_name"]): '';
				
				$identity = (string) $identity;
				$remember_code = (string) $remember_code;
				$request_name = (string) $request_name;
				
				if(!empty($identity) && !empty($remember_code) && !empty($request_name)) {
					$this->load->library('session');
					$control_user_identity = $this->session->userdata["identity"];
					$control_code = trim($_COOKIE["remember_code"]);
//					$control_session_id = $this->session-> __get("session_id");
					$identity = urldecode($identity);
					$remember_code = urldecode($remember_code);
					if($identity == $control_user_identity && $remember_code == $control_code) {
						$data = (isset($_POST["new_data"])) ? ($_POST["new_data"]): '';
						$data = (array)json_decode($data);
						$where = (isset($_POST["where"])) ? ($_POST["where"]): '';
						$request_type = (isset($_POST["request_type"])) ? trim($_POST["request_type"]): '';
						if(!empty($data) && !empty($request_type)) {
						
							if($request_type == "update" && !empty($where)) {
								$this->load->model("edit_fr_front");
								foreach($data as $key => &$value) {
									$value = htmlspecialchars($value);
								}
								$where_update = array($where[0]["key"] => $where[0]["value"]);
								$result = $this->edit_fr_front->update_data($data, $request_name, $where_update);
								echo json_encode(array($result));
								die();
							} elseif($request_type == "insert"){
								$this->load->model("edit_fr_front");
								foreach($data as $key => &$value) {
									$value = htmlspecialchars($value);
								}
								$result = $this->edit_fr_front->insert_data($data, $request_name);
								echo json_encode(array($result));
								die();
							} else {
								echo json_encode(array("wrong update request"));
								die();
							}
							
						} else {
							echo json_encode(array("wrong request or data"));
							die();
						}
					} else {
						echo json_encode(array("wrong credentials"));
						die();
					}
				} else {
					//handle error
					echo json_encode(array("identity"=>$identity, "remember_code"=>$remember_code, "request_name"=>$request_name));
					die();
				}
				
			}
		}
	}
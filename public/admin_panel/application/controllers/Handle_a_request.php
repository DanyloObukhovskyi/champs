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

		function check(){
			if(isset($_POST['ajax_check'])){
				$identity = (isset($_POST["identity"])) ? trim($_POST["identity"]): '';
				$remember_code = (isset($_POST["remember_code"])) ? trim($_POST["remember_code"]): '';

				$identity = (string)$identity;
				$remember_code = (string)$remember_code;

				if(!empty($identity) && !empty($remember_code)) {
					$this->load->library('session');
					$identity = urldecode($identity);
					$remember_code = urldecode($remember_code);
					$control_user_identity = $this->session->userdata["identity"];
					$control_code = trim($_COOKIE["remember_code"]);
					if($identity == $control_user_identity && $remember_code == $control_code) {
						echo json_encode(array("true_3215"));
						die();
					} else {
						echo json_encode(array("error"));
						die();
					}
				}
				echo json_encode(array("error"));
				die();
			}
			echo json_encode(array("error"));
			die();
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
						if(!isset($_POST["open_date"])) {
							$update_data = array ($data["field"] => $data["value"]);
						} else {
							$update_data = array ();
						}
						$where = (isset($_POST["where"])) ? ($_POST["where"]): '';
						$request_type = (isset($_POST["request_type"])) ? trim($_POST["request_type"]): '';
						if(!empty($data) && !empty($request_type)) {
							if($request_type == "update" && !empty($where)) {
								if(isset($_FILES["userfile"]["name"])){
									if(!empty($_FILES["userfile"]["name"])) {
										$where = json_decode($where);
										$this->upload($data,$request_name, array($where[0]->key => $where[0]->value));
										die();
									}
								}
								$this->load->model("edit_fr_front");
								foreach($data as $key => &$value) {
									$value = htmlspecialchars($value);
								}
								$where_update = array($where[0]["key"] => $where[0]["value"]);
								$result = $this->edit_fr_front->update_data($update_data, $request_name, $where_update);
								echo json_encode(array($result));
								die();
							} elseif($request_type == "insert"){
								if(isset($_POST["open_date"])) {
									if(trim($_POST["open_date"]) == true) {
										$this->setTrainerTime($data, $request_name);
										die();
									} else {
										echo json_encode(array("wrong update request"));
										die();
									}
								}
								$this->load->model("edit_fr_front");
								foreach($data as $key => &$value) {
									$value = htmlspecialchars($value);
								}
								$result = $this->edit_fr_front->insert_data($update_data, $request_name);
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
		
		private function setTrainerTime($data=array(), $table="") {
			if(!empty($data) && !empty($table)) {
				$this->load->model('trainers_model');
				$table_fields = array(
					10 =>"time10_11",
					11 =>"time11_12",
					12 =>"time12_13",
					13 =>"time13_14",
					14 =>"time14_15",
					15 =>"time15_16",
					16 =>"time16_17",
					17 =>"time17_18",
				);
				
				$user_id = (isset($data["user_id"])) ? (int)$data["user_id"] : 0;
				$date = date("Y-m-d", strtotime($data["date"]));
				$field = $table_fields[$data["time_from"]];
				$check_date = $this->trainers_model->check_trainer_time(array('trainer_id' => $user_id, 'date'=> $date));
				if(isset($check_date[0]["id"])) {
					//update
					$check_date = $check_date[0];
					$update_v = 0;
					
					if($check_date[$field] == 0) {
						$update_v = 1;
					}
					if($check_date[$field] == 1) {
						$update_v = 0;
					}
					if($check_date[$field] == 10) {
						echo json_encode(array("0"));
						die();
					}
					
					$this->trainers_model->update_trainer_time(array($field=>$update_v) ,array('trainer_id' => $user_id, 'date'=> $date));
					echo "true";
					die();
				}
				else {
					//insert
					$insert = array();
					foreach($table_fields as $key =>$value){
						if($value == $field) {
							$insert[$field] = 1;
						} else {
							$insert[$value] = 0;
						}
					}
					$insert['date'] = $date;
					$insert['trainer_id'] = $user_id;
					$id = $this->trainers_model->insert_trainer_time($insert);
					echo "true";
					die();
				}
			}
			echo json_encode(array("wrong request or data"));
			die();
		}
		
		private function upload($filed_name="",$request_name="", $where=array()) {
			$config['upload_path']          = PUBLICPATH.'/'.$this->config->item('upload_person-pic');
            if (!file_exists(PUBLICPATH.'/uploads')) {
                mkdir(PUBLICPATH.'/uploads', 0777);
            }
            if (!file_exists($config['upload_path'])) {
                mkdir($config['upload_path'], 0777);
            }
			$config['allowed_types']        = 'jpeg|jpg|png';
			$config['max_size']             = 2048;
			$config['max_width']            = 1920;
			$config['max_height']           = 1080;
			
			$this->load->library('upload', $config);
			
			$bytes = random_bytes(11);
			
			$ext = explode(".", $_FILES["userfile"]["name"] );
			$ext = array_pop($ext);
			$fileName = bin2hex($bytes).".".$ext;
			
			$_FILES["userfile"]["name"] = $fileName;
			if ( ! $this->upload->do_upload('userfile'))
			{
				$error = array('error' => $this->upload->display_errors());
				echo $error;
				die();
			}
			else
			{
				$dataU = array('upload_data' => $this->upload->data());
				$this->load->model("edit_fr_front");
				$toUnlick = explode("/", $filed_name["value"]);
				$toUnlick = (string)array_pop($toUnlick);
				$path =  PUBLICPATH.'/'.$this->config->item('upload_person-pic').$toUnlick;
                if (!file_exists(PUBLICPATH.'/uploads')) {
                    mkdir(PUBLICPATH.'/uploads', 0777);
                }
                if (!file_exists(PUBLICPATH.'/'.$this->config->item('upload_person-pic'))) {
                    mkdir(PUBLICPATH.'/'.$this->config->item('upload_person-pic'), 0777);
                }
				$error = 0;
				if (@!unlink($path)) {
					$error=1;
				}
				$result = $this->edit_fr_front->update_data(array($filed_name["field"] =>$dataU["upload_data"]["orig_name"]), $request_name, $where);
				echo json_encode(array($result));
				die();
			}
		}
	}
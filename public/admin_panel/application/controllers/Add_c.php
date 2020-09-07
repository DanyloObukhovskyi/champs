<?php
	defined('BASEPATH') OR exit('No direct script access allowed');
	
	class Add_c extends CI_Controller
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
			
			$this->UserID = $this->ion_auth->get_user_id();
			if ($this->UserID == 0) {
				redirect ('login/auth');
				die();
			}
			$this->load->model(array ('add_m', 'users_model'));
			$this->user_capabilities = $this->config->item('user_capabilities');
		}
		
		public function gallery($post_title="", $post_content="", $post_type=0, $post_url="", $article_img="") {
			$post_date = (isset($_POST["post_date"])) ? trim($_POST["post_date"]): '';
			if(!empty($post_title) && !empty($post_type) && !empty($post_url)) {
				$update_data = array();
				$update_data['title'] = $post_title;
				$update_data['url'] = urlencode(str_replace(" ","-",$post_url));
				$update_data['text'] = "";
			
				$imgs_ur = $this->config->item('display_article-pic');
				foreach ($article_img as $img) {
					$update_data['text'] .= "<img src='".$imgs_ur.$img."' style='width:250px; height:250px'>";
				}
				
				$update_data['logo'] = $article_img[0];
				$update_data['created_at'] = date("Y-m-d H:i:s");
				$update_data['updated_at'] = date("Y-m-d H:i:s");
				$update_data['date'] = (!empty($post_date))? $post_date : date("Y-m-d H:i:s");
				$update_data['type'] = $post_type;
				
				$created_id = $this->add_m->addNews($update_data);
				redirect (base_url('c-admin/post/edit/'.$created_id."/".$this->UserID));
				die();
			} else {
				redirect ($_SERVER["HTTP_REFERER"]);
				die();
			}
		}
		
		public function stream($post_title="", $post_content="", $post_type=0, $post_url="", $article_img="") {
			if(!empty($post_title) && !empty($post_content) && !empty($post_type) && !empty($post_url)) {
				$post_date = (isset($_POST["post_date"])) ? trim($_POST["post_date"]): '';
				$update_data = array();
				$update_data['title'] = $post_title;
				$update_data['url'] = urlencode(str_replace(" ","-",$post_url));
				$update_data['text'] = $post_content;
//				$update_data['text'] = '<iframe width="560" height="315" src="'.$post_content.'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
				$update_data['logo'] = $article_img;
				$update_data['created_at'] = date("Y-m-d H:i:s");
				$update_data['updated_at'] = date("Y-m-d H:i:s");
				$update_data['date'] = (!empty($post_date))? $post_date : date("Y-m-d H:i:s");
				$update_data['type'] = $post_type;
				
				$created_id = $this->add_m->addNews($update_data);
				redirect (base_url('c-admin/post/edit/'.$created_id."/".$this->UserID));
				die();
			} else {
				redirect ($_SERVER["HTTP_REFERER"]);
				die();
			}
		}
		
		public function video($post_title="", $post_content="", $post_type=0, $post_url="", $article_img="") {
			if(!empty($post_title) && !empty($post_content) && !empty($post_type) && !empty($post_url)) {
				$post_date = (isset($_POST["post_date"])) ? trim($_POST["post_date"]): '';
				$update_data = array();
				$update_data['title'] = $post_title;
				$update_data['url'] = urlencode(str_replace(" ","-",$post_url));
				$update_data['text'] = $post_content;
//				$update_data['text'] = '<iframe width="560" height="315" src="'.$post_content.'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
				$update_data['logo'] = $article_img;
				$update_data['created_at'] = date("Y-m-d H:i:s");
				$update_data['updated_at'] = date("Y-m-d H:i:s");
				$update_data['date'] = (!empty($post_date))? $post_date : date("Y-m-d H:i:s");
				$update_data['type'] = $post_type;
				
				$created_id = $this->add_m->addNews($update_data);
				redirect (base_url('c-admin/post/edit/'.$created_id."/".$this->UserID));
				die();
			} else {
				redirect ($_SERVER["HTTP_REFERER"]);
				die();
			}
		}
		
		public function post($user_id=0) {
			if(isset($_POST['add'])) {
				if(trim($_POST['add']) == true  && (int)$user_id == $this->UserID) {
				
					$post_title = (isset($_POST["post_title"])) ? trim($_POST["post_title"]): '';
					$post_content = (isset($_POST["post_content"])) ? trim($_POST["post_content"]): '';
					$post_type = (isset($_POST["post_type"])) ? trim($_POST["post_type"]): '';
					$post_url = (isset($_POST["post_url"])) ? trim($_POST["post_url"]): '';
					$post_date = (isset($_POST["post_date"])) ? trim($_POST["post_date"]): '';
					if($post_type == 9) {
						if(!empty($post_title) && !empty($post_type) && !empty($post_url)) {
							$article_img = array();
							if(isset($_FILES["userfile"])) {
								if(!empty($_FILES["userfile"]["name"])) {
									$count = count($_FILES['userfile']['name']);
									$files = $_FILES;
									$this->load->library ('upload');
									for ($i = 0; $i < $count; $i++){
										$config['upload_path'] = $this->config->item ('upload_article-pic');
										$config['allowed_types'] = 'jpeg|jpg|png';
										$config['max_size'] = 256831;
										$config['max_width'] = 5000;
										$config['max_height'] = 5000;
										$this->upload->initialize($config);
										
										$_FILES['userfile']['type']= $files['userfile']['type'][$i];
										$_FILES['userfile']['tmp_name']= $files['userfile']['tmp_name'][$i];
										$_FILES['userfile']['error']= $files['userfile']['error'][$i];
										$_FILES['userfile']['size']= $files['userfile']['size'][$i];
										
										$bytes = random_bytes (11);
										
										$ext = explode (".", $files["userfile"]["name"][$i]);
										$ext = array_pop ($ext);
										$fileName = bin2hex ($bytes).".".$ext;
										
										$_FILES['userfile']['name'] = $fileName;
										
										if (!$this->upload->do_upload()) {
											$error = array ('error' => $this->upload->display_errors ());
											redirect ($_SERVER["HTTP_REFERER"]);
											die();
										} else {
											$data = array ('upload_data' => $this->upload->data());
											$article_img[$i] = $data["upload_data"]["orig_name"];
										}
									}
								}
							}
							$this->gallery ($post_title, $post_content, $post_type, $post_url, $article_img);
							redirect ($_SERVER["HTTP_REFERER"]);
							die();
						}
					}
					if(!empty($post_title) && !empty($post_content) && !empty($post_type) && !empty($post_url)) {
						$article_img = "";
						if(isset($_FILES["userfile"])) {
							if(!empty($_FILES["userfile"]["name"])){
								$config['upload_path'] = $this->config->item ('upload_article-pic');
								$config['allowed_types'] = 'jpeg|jpg|png';
								$config['max_size'] = 5048;
								$config['max_width'] = 3000;
								$config['max_height'] = 3000;
							
								$this->load->library ('upload', $config);
							
								$bytes = random_bytes (11);
							
								$ext = explode (".", $_FILES["userfile"]["name"]);
								$ext = array_pop ($ext);
								$fileName = bin2hex ($bytes).".".$ext;
							
								$_FILES["userfile"]["name"] = $fileName;
								if (!$this->upload->do_upload ('userfile')) {
									$error = array ('error' => $this->upload->display_errors ());
									redirect ($_SERVER["HTTP_REFERER"]);
									die();
								} else {
									$data = array ('upload_data' => $this->upload->data ());
									$article_img = $data["upload_data"]["orig_name"];
								}
							}
						}
						
					
						if($post_type == 8) {
							$this->stream($post_title, $post_content, $post_type, $post_url, $article_img);
							redirect ($_SERVER["HTTP_REFERER"]);
							die();
						}
						if($post_type == 3) {
							$this->video($post_title, $post_content, $post_type, $post_url, $article_img);
							redirect ($_SERVER["HTTP_REFERER"]);
							die();
						}
						
						$update_data = array();
						$update_data['title'] = $post_title;
						$update_data['url'] = urlencode(str_replace(" ","-",$post_url));
						$update_data['text'] = $post_content;
						$update_data['logo'] = $article_img;
						$update_data['created_at'] = date("Y-m-d H:i:s");
						$update_data['updated_at'] = date("Y-m-d H:i:s");
						$update_data['date'] = (!empty($post_date))? $post_date : date("Y-m-d H:i:s");
						$update_data['type'] = $post_type;
						
						$created_id = $this->add_m->addNews($update_data);
						redirect (base_url('c-admin/post/edit/'.$created_id."/".$this->UserID));
						die();
					} else {
						redirect ($_SERVER["HTTP_REFERER"]);
						die();
					}
				} else {
					redirect ($_SERVER["HTTP_REFERER"]);
					die();
				}
			}
			if($this->UserID != (int)$user_id) {
				redirect ($this->config->item('login_Ok'));
				die();
			}
			
			$data['UserID']  = $this->UserID;
			$data['user']  = $this->ion_auth->user()->row();
			
			$data['output'] = $this->load->view('add/article', $data, true);
			$this->load->view('layout/add', $data);
		}
		
		public function user($user_id=0) {
			if(isset($_POST['add']) && (int)$user_id == $this->UserID) {
				if(trim($_POST['add']) == true) {
					$nickname = (isset($_POST["nickname"]) && !empty($_POST["nickname"])) ? trim($_POST["nickname"]) : '';
					$Email = (isset($_POST["Email"]) && !empty($_POST["Email"])) ? trim($_POST["Email"]) : '';
					
					$new_passw = (isset($_POST["new_password"]) && !empty($_POST["new_password"])) ? trim($_POST["new_password"]) : '';
					$new_passw_confirm = (isset($_POST["new_confirm"]) && !empty($_POST["new_confirm"])) ? trim($_POST["new_confirm"]) : '';
					
					$mask = "ROLE_USER";
					
					$user_capabilities = array($mask);
					
					$update_data = array();
					if(!empty($nickname)) {
						$update_data['nickname'] = $nickname;
					} else {
						redirect ($_SERVER["HTTP_REFERER"]);
						die();
					}
					if(!empty($Email)) {
						$update_data['email'] = $Email;
					} else {
						redirect ($_SERVER["HTTP_REFERER"]);
						die();
					}
					
					if($new_passw == $new_passw_confirm && !empty($new_passw)) {
						$this->load->model(array('Ion_auth_model'));
						$update_data['password'] = $this->Ion_auth_model->hash_password($new_passw, FALSE, FALSE);
					} else {
						redirect ($_SERVER["HTTP_REFERER"]);
						die();
					}
					
					$update_data['roles'] = json_encode($user_capabilities);
					$created_id = $this->add_m->addUser($update_data);
					
					if(isset($_FILES["userfile"])) {
						if(!empty($_FILES["userfile"]["name"])) {
							$config['upload_path']          = './assets/profile-pic/';
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
							}
							else
							{
								$data = array('upload_data' => $this->upload->data());
								$this->load->model("edit_m");
								$this->edit_m->change_user_img($created_id, $data["upload_data"]["orig_name"]);
							}
						} else {
							$this->load->model("edit_m");
							$this->edit_m->change_user_img($created_id, "prof-pic.svg");
						}
						
					} else {
						$this->load->model("edit_m");
						$this->edit_m->change_user_img($created_id, "prof-pic.svg");
					}
					
					redirect (base_url("c-admin/user/edit/$created_id/$this->UserID"));
					die();
				}
			} else {
				if($this->UserID != (int)$user_id) {
					redirect($_SERVER["HTTP_REFERER"]);
					die();
				}
				
				$data['UserID']  = $this->UserID;
				$data['user']  = $this->ion_auth->user()->row();
				
				$data['output'] = $this->load->view('add/user', $data, true);
				$this->load->view('layout/add', $data);
			}
		}
		
		public function trainer($user_id=0) {
			if($this->UserID != (int)$user_id) {
				redirect ($this->config->item('login_Ok'));
				die();
			}
			
			$data['UserID']  = $this->UserID;
			$data['user']  = $this->ion_auth->user()->row();
			
			$data['output'] = $this->load->view('add/trainer', $data, true);
			$this->load->view('layout/add', $data);
		}
		
		public function admin($user_id=0) {
			if(isset($_POST['add'])) {
				if(trim($_POST['add']) == true  && (int)$user_id == $this->UserID) {
					$nickname = (isset($_POST["nickname"]) && !empty($_POST["nickname"])) ? trim($_POST["nickname"]) : '';
					$Email = (isset($_POST["Email"]) && !empty($_POST["Email"])) ? trim($_POST["Email"]) : '';
					
					$new_passw = (isset($_POST["new_password"]) && !empty($_POST["new_password"])) ? trim($_POST["new_password"]) : '';
					$new_passw_confirm = (isset($_POST["new_confirm"]) && !empty($_POST["new_confirm"])) ? trim($_POST["new_confirm"]) : '';
					
					$mask = "0000";
					$mask[0] = (isset($_POST["main-admin"])) ? "1" : '0';
					$mask[1] = (isset($_POST["content-mn"])) ? "1" : '0';
					$mask[2] = (isset($_POST["statistics-mn"])) ? "1" : '0';
					$mask[3] = (isset($_POST["coach-mn"])) ? "1" : '0';
					
					if($mask == "0000") {
						redirect ($_SERVER["HTTP_REFERER"]);
						die();
					}
					
					$user_capabilities = array($mask);
					
					$update_data = array();
					
					if(!empty($nickname)) {
						$update_data['nickname'] = $nickname;
					} else {
						redirect ($_SERVER["HTTP_REFERER"]);
						die();
					}
					
					if(!empty($Email)) {
						$update_data['email'] = $Email;
					} else {
						redirect ($_SERVER["HTTP_REFERER"]);
						die();
					}
					
					if($new_passw == $new_passw_confirm && !empty($new_passw)) {
						$this->load->model(array('Ion_auth_model'));
						$update_data['password'] = $this->Ion_auth_model->hash_password($new_passw, FALSE, FALSE);
					} else {
						redirect($_SERVER["HTTP_REFERER"]);
						die();
					}
					$update_data['active'] = 1;
					$update_data['roles'] = json_encode($user_capabilities);
					$created_id = $this->add_m->addAdmin($update_data);
					
					$this->load->model("edit_m");
					$this->edit_m->change_user_img($created_id, "prof-pic.svg");
					
					redirect (base_url("c-admin/admin/edit/$created_id/$this->UserID"));
					die();
				} else {
					redirect ($_SERVER["HTTP_REFERER"]);
					die();
				}
			}
			
			if($this->UserID != (int)$user_id) {
				redirect ($_SERVER["HTTP_REFERER"]);
				die();
			}
			
			$data['UserID']  = $this->UserID;
			$data['user']  = $this->ion_auth->user()->row();
			
			$data['output'] = $this->load->view('add/admin', $data, true);
			$this->load->view('layout/add', $data);
		}
	}
<?php
	defined('BASEPATH') OR exit('No direct script access allowed');
	
	class Edit_c extends CI_Controller
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
			$this->load->model(array('users_model', 'edit_m','trainers_model', 'delete_m', 'add_m'));
		}
		
		public function gallery($post_title="", $post_content="", $post_type=0, $post_url="", $article_img="",$post_id=0) {
			if(!empty($post_title) && !empty($post_type) && !empty($post_url)) {
				$post_date = (isset($_POST["post_date"])) ? trim($_POST["post_date"]): '';
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
				
				$this->edit_m->update_news($post_id, $update_data);
				redirect (base_url('c-admin/post/edit/'.$post_id."/".$this->UserID));
				die();
			} else {
				redirect ($_SERVER["HTTP_REFERER"]);
				die();
			}
		}
		
		public function stream($post_title="", $post_content="", $post_type=0, $post_url="", $article_img="",$post_id=0) {
			if(!empty($post_title) && !empty($post_content) && !empty($post_type) && !empty($post_url)) {
				$post_date = (isset($_POST["post_date"])) ? trim($_POST["post_date"]): '';
				$update_data = array();
				$update_data['title'] = $post_title;
				$update_data['url'] = urlencode(str_replace(" ","-",$post_url));
				$update_data['text'] = $post_content;
				if(!empty($article_img)){
					$update_data['logo'] = $article_img;
				}
//				$update_data['text'] = '<iframe width="560" height="315" src="'.$post_content.'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
				$update_data['updated_at'] = date("Y-m-d H:i:s");
				$update_data['date'] = (!empty($post_date))? $post_date : date("Y-m-d H:i:s");
				$update_data['type'] = $post_type;
				
				$created_id = $this->edit_m->update_news($post_id,$update_data);
				redirect (base_url('c-admin/post/edit/'.$post_id."/".$this->UserID));
				die();
			} else {
				redirect ($_SERVER["HTTP_REFERER"]);
				die();
			}
		}
		
		public function video($post_title="", $post_content="", $post_type=0, $post_url="", $article_img="",$post_id=0) {
			if(!empty($post_title) && !empty($post_content) && !empty($post_type) && !empty($post_url)) {
				$post_date = (isset($_POST["post_date"])) ? trim($_POST["post_date"]): '';
				$update_data = array();
				$update_data['title'] = $post_title;
				$update_data['url'] = urlencode(str_replace(" ","-",$post_url));
				$update_data['text'] = $post_content;
//				$update_data['text'] = '<iframe width="560" height="315" src="'.$post_content.'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
				if(!empty($article_img)){
					$update_data['logo'] = $article_img;
				}
				$update_data['updated_at'] = date("Y-m-d H:i:s");
				$update_data['date'] = (!empty($post_date))? $post_date : date("Y-m-d H:i:s");
				$update_data['type'] = $post_type;
				
				$this->edit_m->update_news($post_id,$update_data);
				redirect (base_url('c-admin/post/edit/'.$post_id."/".$this->UserID));
				die();
			} else {
				redirect ($_SERVER["HTTP_REFERER"]);
				die();
			}
		}
		
		public function post($post_id=0, $user_id=0){
			$current_u_can = $this->users_model->get_capabilities($this->UserID);
			if(isset($current_u_can[0]["roles"])) {
				$current_u_can = json_decode($current_u_can[0]["roles"]);
				$current_u_can = $current_u_can[0];
			} else {
				redirect($this->config->item(base_url('404_override')));
				die();
			}
			if(isset($_POST['edit'])) {
				if(trim($_POST['edit']) == true  && (int)$user_id == $this->UserID) {
					
					$post_title = (isset($_POST["post_title"])) ? trim($_POST["post_title"]): '';
					$post_content = (isset($_POST["post_content"])) ? trim($_POST["post_content"]): '';
					$post_type = (isset($_POST["post_type"])) ? trim($_POST["post_type"]): '';
					$post_url = (isset($_POST["post_url"])) ? trim($_POST["post_url"]): '';
					$post_date = (isset($_POST["post_date"])) ? trim($_POST["post_date"]): '';
					
					if($post_type == 9) {
						if(!empty($post_title) && !empty($post_type) && !empty($post_url)) {
							if ($post_type == 9) {
								$article_img = array();
								if(isset($_FILES["userfile"])) {
									if(!empty($_FILES["userfile"]["name"])) {
										$count = count($_FILES['userfile']['name']);
										for ($i = 0; $i < $count; $i++){
											$config['upload_path'] = $this->config->item ('upload_article-pic');
											$config['allowed_types'] = 'jpeg|jpg|png';
											$config['max_size'] = 5048;
											$config['max_width'] = 3000;
											$config['max_height'] = 3000;
											
											$_FILES['file']['type'] = $_FILES['userfile']['type'][$i];
											$_FILES['file']['tmp_name'] = $_FILES['userfile']['tmp_name'][$i];
											$_FILES['file']['error'] = $_FILES['userfile']['error'][$i];
											$_FILES['file']['size'] = $_FILES['userfile']['size'][$i];
											
											$bytes = random_bytes (11);
											
											$ext = explode (".", $_FILES["userfile"]["name"][$i]);
											$ext = array_pop ($ext);
											$fileName = bin2hex ($bytes).".".$ext;
											
											$config['file_name'] = $fileName;
											$_FILES['file']['name'] = $fileName;
											
											$this->load->library ('upload', $config);
											
											if (!$this->upload->do_upload ('file')) {
												$error = array ('error' => $this->upload->display_errors ());
												redirect ($_SERVER["HTTP_REFERER"]);
												die();
											} else {
												$data = array ('upload_data' => $this->upload->data ());
												$article_img[$i] = $data["upload_data"]["orig_name"];
											}
										}
									}
								}
								
								
								$this->gallery ($post_title, $post_content, $post_type, $post_url, $article_img,$post_id);
								redirect ($_SERVER["HTTP_REFERER"]);
								die();
							}
						}
					}
					$update_data = array();
					if(!empty($post_title) && !empty($post_content) && !empty($post_type) && !empty($post_url)) {
						$article_img = "";
						if(isset($_FILES["userfile"])) {
							if(!empty($_FILES["userfile"]["name"])){
								$config['upload_path'] = $this->config->item ('upload_article-pic');
								$config['allowed_types'] = 'jpeg|jpg|png';
								$config['max_size'] = 2048;
								$config['max_width'] = 1920;
								$config['max_height'] = 1080;
							
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
									$update_data['logo'] = $article_img;
								}
							}
						}
	
						if($post_type == 8) {
							$this->stream($post_title, $post_content, $post_type, $post_url, $article_img, $post_id);
							redirect ($_SERVER["HTTP_REFERER"]);
							die();
						}
						if($post_type == 3) {
							$this->video($post_title, $post_content, $post_type, $post_url, $article_img,$post_id);
							redirect ($_SERVER["HTTP_REFERER"]);
							die();
						}
						
						$update_data['url'] = urlencode(str_replace(" ","-",$post_url));
						$update_data['title'] = $post_title;
						$update_data['text'] = $post_content;
						$update_data['updated_at'] = date("Y-m-d H:i:s");
						$update_data['date'] = (!empty($post_date))? $post_date : date("Y-m-d H:i:s");
						$update_data['type'] = $post_type;
						
						$this->edit_m->update_news($post_id, $update_data);
						redirect (base_url('c-admin/post/edit/'.$post_id."/".$this->UserID));
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
			
			$this->load->model(array('posts_model'));
			$where = array("id" => $post_id);
			$data['post_fields'] = $this->posts_model->get_all($where, $is_count = false, $sort = array(), $limit = array());
			if(isset($data['post_fields'][0])) {
				$data['post_fields'] = $data['post_fields'][0];
			} else {
				$data['post_fields'] = array();
				redirect ($_SERVER["HTTP_REFERER"]);
				die();
			}
			$data['current_u_can'] = $current_u_can;
			$data['imgs_url'] = $this->config->item('display_article-pic');
			$data['output'] = $this->load->view('edit/article', $data, true);
			$this->load->view('layout/edit', $data);
		}
		
		public function user($id=0, $user_id=0){
			$current_u_can = $this->users_model->get_capabilities($this->UserID);
			if(isset($current_u_can[0]["roles"])) {
				$current_u_can = json_decode($current_u_can[0]["roles"]);
				$current_u_can = $current_u_can[0];
			} else {
				redirect($this->config->item(base_url('404_override')));
				die();
			}
			if(isset($_POST['edit'])) {
				if(trim($_POST['edit']) == true && (int)$user_id == $this->UserID) {
					$nickname = (isset($_POST["nickname"]) && !empty($_POST["nickname"])) ? trim($_POST["nickname"]) : '';
					$Email = (isset($_POST["Email"]) && !empty($_POST["Email"])) ? trim($_POST["Email"]) : '';
					
					$new_passw = (isset($_POST["new_password"]) && !empty($_POST["new_password"])) ? trim($_POST["new_password"]) : '';
					$new_passw_confirm = (isset($_POST["new_confirm"]) && !empty($_POST["new_confirm"])) ? trim($_POST["new_confirm"]) : '';
					
					$add_trainer = (isset($_POST["add_trainer"]) && !empty($_POST["add_trainer"])) ? trim($_POST["add_trainer"]) : '';
					
					$mask = "ROLE_USER";
					
					$user_capabilities= array($mask);
					
					$update_data = array();
					$update_data['nickname'] = $nickname;
					
					if(!empty($Email)) {
						$update_data['email'] = $Email;
					}
					if(!empty($add_trainer)) {
						$update_data['istrainer'] = 1;
						$check_teacher = $this->trainers_model->check_teacher_data($id);
						if(!empty($check_teacher[0])) {
							$check_teacher = $check_teacher[0];
							if (!isset($check_teacher['userid'])) {
								$this->add_m->addTeacher(array("userid"=>$id));
							}
						} else {
							$this->add_m->addTeacher(array("userid"=>$id));
						}
					} else {
						$update_data['istrainer'] = 0;
					}
					
					if($new_passw == $new_passw_confirm && !empty($new_passw)) {
						$this->load->model(array('Ion_auth_model'));
//						$update_data['password'] = $this->Ion_auth_model->hash_password($new_passw, FALSE, FALSE);
						$update_data['password'] = $this->create_user_passw($new_passw);
					}
					
					$update_data['roles'] = json_encode($user_capabilities);
					$this->edit_m->updateUser($id, $update_data);
					if(!empty($add_trainer)) {
						redirect (base_url("c-admin/trainer/edit/$id/$user_id"));
						die();
					}
					
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
			
			$sort=array();
			$offset = 0;
			$where = array("id" =>$id );
			$data['user_info'] = $this->users_model->get_all($where, false, $sort, array($offset, 1), true, true);
			
			$roles = $data['user_info'][0]['roles'];
			$roles = json_decode($roles);
			$data['user_info'][0]['roles'] = $roles[0];
			$data['imgs_url'] = $this->config->item('display_profile-pic');
			$data['upload_url'] = $this->config->item('upload_profile-pic');
			$data['current_u_can'] = $current_u_can;
			$data['output'] = $this->load->view('edit/user', $data, true);
			$this->load->view('layout/edit', $data);
		}
		
		public function trainer($id=0, $user_id=0){
			$current_u_can = $this->users_model->get_capabilities($this->UserID);
			if(isset($current_u_can[0]["roles"])) {
				$current_u_can = json_decode($current_u_can[0]["roles"]);
				$current_u_can = $current_u_can[0];
			} else {
				redirect($this->config->item(base_url('404_override')));
				die();
			}
			if(isset($_POST['edit'])) {
				if(trim($_POST['edit']) == true  && (int)$user_id == $this->UserID) {
					$nickname = (isset($_POST["nickname"]) && !empty($_POST["nickname"])) ? trim($_POST["nickname"]) : '';
					$Email = (isset($_POST["Email"]) && !empty($_POST["Email"])) ? trim($_POST["Email"]) : '';
					
					$new_passw = (isset($_POST["new_password"]) && !empty($_POST["new_password"])) ? trim($_POST["new_password"]) : '';
					$new_passw_confirm = (isset($_POST["new_confirm"]) && !empty($_POST["new_confirm"])) ? trim($_POST["new_confirm"]) : '';
					
					$price =  (int)(isset($_POST["price"]) && !empty($_POST["price"])) ? trim($_POST["price"]) : '';
					$video_url =  (isset($_POST["video_url"]) && !empty($_POST["video_url"])) ? trim($_POST["video_url"]) : '';
					$about =  (isset($_POST["about"]) && !empty($_POST["about"])) ? trim($_POST["about"]) : '';
					$method =  (isset($_POST["method"]) && !empty($_POST["method"])) ? trim($_POST["method"]) : '';
					$game = (isset($_POST["game"]) && !empty($_POST["game"])) ? trim($_POST["game"]) : '';
					
					$twitch =  (isset($_POST["twitch"]) && !empty($_POST["twitch"])) ? trim($_POST["twitch"]) : '';
					$shorttitle =  (isset($_POST["shorttitle"]) && !empty($_POST["shorttitle"])) ? trim($_POST["shorttitle"]) : '';
					$stream_type =  (isset($_POST["stream_type"]) && !empty($_POST["stream_type"])) ? trim($_POST["stream_type"]) : '';
					
					$delete_trainer = (isset($_POST["delete_trainer"]) && !empty($_POST["delete_trainer"])) ? trim($_POST["delete_trainer"]) : '';
					
					if(!empty($nickname) && !empty($Email) && !empty($price) && !empty($about) && !empty($method)) {
						$mask = "ROLE_USER";
						$user_capabilities = array($mask);
						
						$update_data = array();
						
						$update_data['nickname'] = $nickname;
						$update_data['email'] = $Email;
						$update_data['game'] = $game;
						
						
						if($new_passw == $new_passw_confirm && !empty($new_passw)) {
//							$this->load->model(array('Ion_auth_model'));
							$update_data['password'] = $this->create_user_passw($new_passw);
						} else {
							if(!empty($new_passw)) {
								redirect ($_SERVER["HTTP_REFERER"]);
								die();
							}
						}
						
						if(!empty($delete_trainer)) {
							$update_data['istrainer'] = 0;
							$this->delete_m->delete_trainer_as_teacher($id);
						}
						
						$update_data['roles'] = json_encode($user_capabilities);
						$this->edit_m->updateUser($id, $update_data);
						if(empty($delete_trainer)) {
							$update_data = array ();
							$update_data['cost'] = $price;
							$update_data['about'] = $about;
							$update_data['videolink'] = $video_url;
							$update_data['method'] = $method;
							$update_data['twitch'] = $twitch;
							$update_data['shorttitle'] = $shorttitle;
							$update_data['stream_type'] = $stream_type;
							
							$this->edit_m->updateTeacher($id, $update_data);
						}
						
						if(isset($_FILES["userfile"])) {
							if(!empty($_FILES["userfile"]["name"])) {
								$config['upload_path']          =  $this->config->item('upload_trainers-pic');
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
									$this->edit_m->change_user_img($id, $data["upload_data"]["orig_name"]);
								}
							} 
							//else {
								//$this->load->model("edit_m");
								//$this->edit_m->change_user_img($id, "prof-pic.svg");
							//}
							
						} else {
							$this->load->model("edit_m");
							$this->edit_m->change_user_img($id, "prof-pic.svg");
						}
						
					} else {
						redirect($_SERVER["HTTP_REFERER"]);
						die();
					}
					if(!empty($delete_trainer)) {
						redirect (base_url("c-admin/trainers/page/1"));
						die();
					}
				}
			}
			if($this->UserID != (int)$user_id) {
				redirect ($this->config->item('login_Ok'));
				die();
			}
			
			$data['UserID'] = $this->UserID;
			$data['ProfileID'] = $id;
			$data['user']  = $this->ion_auth->user()->row();
			
			$sort=array();
			$offset = 0;
			$where = array("id" =>$id );
			$data['user_info'] = $this->trainers_model->get_all_trainers($where, false, $sort, array($offset, 1), true, true);
			if(empty($data["user_info"])){
				redirect ($_SERVER["HTTP_REFERER"]);
				die();
			}
			$roles = $data['user_info'][0]['roles'];
			$roles = json_decode($roles);
			$data['user_info'][0]['roles'] = $roles[0];
			$data['imgs_url'] = $this->config->item('display_trainers-pic');
			$data['upload_url'] = $this->config->item('upload_trainers-pic');
			$data['current_u_can'] = $current_u_can;
			$data['output'] = $this->load->view('edit/trainer', $data, true);
			$this->load->view('layout/edit', $data);
		}
		
		
		
		
		
		
		public function admin($id=0, $user_id=0){
			$current_u_can = $this->users_model->get_capabilities($this->UserID);
			if(isset($current_u_can[0]["roles"])) {
				$current_u_can = json_decode($current_u_can[0]["roles"]);
				$current_u_can = $current_u_can[0];
			} else {
				redirect($this->config->item(base_url('404_override')));
				die();
			}
			if(isset($_POST['edit'])) {
				if(trim($_POST['edit']) == true) {
					$nickname = (isset($_POST["nickname"]) && !empty($_POST["nickname"])) ? trim($_POST["nickname"]) : '';
					$Email = (isset($_POST["Email"]) && !empty($_POST["Email"])) ? trim($_POST["Email"]) : '';
					
					$new_passw = (isset($_POST["new_password"]) && !empty($_POST["new_password"])) ? trim($_POST["new_password"]) : '';
					$new_passw_confirm = (isset($_POST["new_confirm"]) && !empty($_POST["new_confirm"])) ? trim($_POST["new_confirm"]) : '';
					
					$mask = "0000";
					$mask[0] = (isset($_POST["main-admin"])) ? "1" : '0';
					$mask[1] = (isset($_POST["content-mn"])) ? "1" : '0';
					$mask[2] = (isset($_POST["statistics-mn"])) ? "1" : '0';
					$mask[3] = (isset($_POST["coach-mn"])) ? "1" : '0';
					
					$user_capabilities = array($mask);
					
					$update_data = array();
					$update_data['nickname'] = $nickname;
					
					if(!empty($Email)) {
						$update_data['email'] = $Email;
					}
					
					if($new_passw == $new_passw_confirm && !empty($new_passw)) {
						$this->load->model(array('Ion_auth_model'));
						$update_data['password'] = $this->Ion_auth_model->hash_password($new_passw, FALSE, FALSE);
					}
					
					$update_data['roles'] = json_encode($user_capabilities);
					$this->edit_m->updateAdmin($id, $update_data);
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
			
			$sort=array();
			$offset = 0;
			$where = array("id" =>$id );
			$data['user_info'] = $this->users_model->get_all_admins($where, false, $sort, array($offset, 1), true, true);
			
			$roles = $data['user_info'][0]['roles'];
			$roles = json_decode($roles);
			$data['user_info'][0]['roles'] = $roles[0];
			$data['current_u_can'] = $current_u_can;
			$data['output'] = $this->load->view('edit/admin', $data, true);
			$this->load->view('layout/edit', $data);
		}
		
		function create_user_passw($new_passw) {
			$password = $new_passw;
			$algo = PASSWORD_BCRYPT;
			$cost = $cost ?? 13;
			$opsLimit = $opsLimit ?? max(4, \defined('SODIUM_CRYPTO_PWHASH_OPSLIMIT_INTERACTIVE') ? SODIUM_CRYPTO_PWHASH_OPSLIMIT_INTERACTIVE : 4);
			$memLimit = $memLimit ?? max(64 * 1024 * 1024, \defined('SODIUM_CRYPTO_PWHASH_MEMLIMIT_INTERACTIVE') ? SODIUM_CRYPTO_PWHASH_MEMLIMIT_INTERACTIVE : 64 * 1024 * 1024);
			
			if (3 > $opsLimit) {
				throw new \InvalidArgumentException('$opsLimit must be 3 or greater.');
			}
			
			if (10 * 1024 > $memLimit) {
				throw new \InvalidArgumentException('$memLimit must be 10k or greater.');
			}
			
			if ($cost < 4 || 31 < $cost) {
				throw new \InvalidArgumentException('$cost must be in the range of 4-31.');
			}
			
			$algos = array(1 => PASSWORD_BCRYPT, '2y' => PASSWORD_BCRYPT);
			
			if (\defined('PASSWORD_ARGON2I')) {
				$this->algo = $algos[2] = $algos['argon2i'] = (string) PASSWORD_ARGON2I;
			}
			
			if (\defined('PASSWORD_ARGON2ID')) {
				$this->algo = $algos[3] = $algos['argon2id'] = (string) PASSWORD_ARGON2ID;
			}
			
			if (null !== $algo) {
				$this->algo = $algos[$algo] ?? $algo;
			}
			
			$this->options = array(
				'cost' => $cost,
				'time_cost' => $opsLimit,
				'memory_cost' => $memLimit >> 10,
				'threads' => 1,
			);
			$hash = password_hash($password, $this->algo, $this->options);
			return $hash;
		}
	}

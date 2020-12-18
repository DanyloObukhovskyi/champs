<?php
	defined('BASEPATH') OR exit('No direct script access allowed');
	
	class Home extends CI_Controller {
		
		private $UserID;
		private $post_per_page = 10;
		private $user_capabilities;
		
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
			$this->load->model(['users_model', 'setting_model']);
			$this->user_capabilities = $this->config->item('user_capabilities');
		}
		
		public function index($page = 0)
		{
			$current_u_can = $this->users_model->get_capabilities($this->UserID);
			if(isset($current_u_can[0]["roles"])) {
				$current_u_can = json_decode($current_u_can[0]["roles"]);
				$current_u_can = $current_u_can[0];
			} else {
				redirect($this->config->item(base_url('404_override')));
				die();
			}
			
			if($current_u_can[0] == "1" || $current_u_can[1] == "1") {
				$this->load->model('posts_model');
				$page = (int)$page;
				if ($page > 0) {
					$page = $page - 1;
				}
				
				$data['UserID']  = $this->UserID;
				$data['user']  = $this->ion_auth->user()->row();
				
				$data['field_search'] = array(
					'type' => 'text',
					'name' => 'search',
					'id' => 'search'
				);
				
				$search = $this->input->post('search');
				if ((int) $search > 0) {
					$where['search'] = (int) $search;
				}
				else {
					$where['search'] = $search;
				}
				
				$offset = $this->post_per_page * $page;
				$posts_count = $this->posts_model->get_all($where, true);;
				
				$config = $this->config->item('pagination');
				$config['base_url'] = site_url('c-admin/posts/page/');
				$config['total_rows'] = $posts_count;
				$config['per_page'] = $this->post_per_page;
				$config['use_page_numbers'] = true;
				$config['reuse_query_string'] = true;
				
				$this->pagination->initialize($config);
				$data['pagination'] = $this->pagination->rmo_create_links();
				
				
				$sort = $this->input->get('sort');
				if (empty($sort)) {
					$sort = array();
				}
				
				$data['sort_id'] = isset($sort['id']) ? $sort['id'] : '';
				$data['sort_title'] = isset($sort['title']) ? $sort['title'] : '';
				$data['sort_type'] = isset($sort['type']) ? $sort['type'] : '';
				//$sort = array_merge(array('id' => 'ASC'), $sort);
				
				$data['posts'] = $this->posts_model->get_all($where, false, $sort, array($offset, $this->post_per_page));

//			    $posts = array();
//			    $data['posts'] = $posts;
				
				//----------
				$data['current_u_can'] = $current_u_can;
				$data['output'] = $this->load->view('home/articles', $data, true);
				$this->load->view('layout/home', $data);
			} else {
				redirect(base_url('404_override'));
				die();
			}
		}
		
		public function matches($page = 0) {
			$current_u_can = $this->users_model->get_capabilities($this->UserID);
			if(isset($current_u_can[0]["roles"])) {
				$current_u_can = json_decode($current_u_can[0]["roles"]);
				$current_u_can = $current_u_can[0];
			} else {
				redirect($this->config->item(base_url('404_override')));
				die();
			}
			
			if($current_u_can[0] == "1" || $current_u_can[2] == "1") {
				$this->load->model('posts_model');
				$page = (int)$page;
				if ($page > 0) {
					$page = $page - 1;
				}
			
				$data['UserID']  = $this->UserID;
				$data['user']  = $this->ion_auth->user()->row();
			
				$data['field_search'] = array(
					'type' => 'text',
					'name' => 'search',
					'id' => 'search'
				);
				$search = $this->input->post('search');
				if ((int) $search > 0) {
					$where['search'] = (int) $search;
				}
				else {
					$where['search'] = $search;
				}
			
			
				$offset = $this->post_per_page * $page;
		    	$posts_count = $this->posts_model->select_matches($where, true);;
			
				$config = $this->config->item('pagination');
				$config['base_url'] = site_url('c-admin/posts/page/');
				$config['total_rows'] = $posts_count;
				$config['per_page'] = $this->post_per_page;
				$config['use_page_numbers'] = true;
				$config['reuse_query_string'] = true;
			
				$this->pagination->initialize($config);
				$data['pagination'] = $this->pagination->rmo_create_links();
			
			
				$sort = $this->input->get('sort');
				if (empty($sort)) {
					$sort = array();
				}
			
				$data['sort_id'] = isset($sort['start_at']) ? $sort['start_at'] : '';
				$data['team1_sid'] = isset($sort['team1_id']) ? $sort['team1_id'] : '';
				$data['team2_sid'] = isset($sort['team2_id']) ? $sort['team2_id'] : '';
//		    	$sort = array_merge(array('id' => 'ASC'), $sort);
				
				$data['statistics'] = $this->posts_model->select_matches($where, false, $sort, array($offset, $this->post_per_page));
				
				foreach($data['statistics'] as $key =>&$value) {
					$value['team1_data'] = $this->posts_model->get_team($value["team1_id"]);
					$value['team2_data'] = $this->posts_model->get_team($value["team2_id"]);
				}
				
				$data['imgs_url'] = $this->config->item('display_team-pic');
				
				$data['current_u_can'] = $current_u_can;
				$data['output'] = $this->load->view('home/matches', $data, true);
				$this->load->view('layout/home', $data);
			} else {
				redirect(base_url('404_override'));
				die();
			}
		}

		public function users($page = 0) {
			$current_u_can = $this->users_model->get_capabilities($this->UserID);
			if(isset($current_u_can[0]["roles"])) {
				$current_u_can = json_decode($current_u_can[0]["roles"]);
				$current_u_can = $current_u_can[0];
			} else {
				redirect($this->config->item(base_url('404_override')));
				die();
			}
			
			if($current_u_can[0] == "1") {
				$page = (int)$page;
				if ($page > 0) {
					$page = $page - 1;
				}
			
				$data['UserID']  = $this->UserID;
				$data['user']  = $this->ion_auth->user()->row();
			
				$data['field_search'] = array(
					'type' => 'text',
					'name' => 'search',
					'id' => 'search'
				);
			
				$search = $this->input->post('search');
				if ((int) $search > 0) {
					$where['search'] = (int) $search;
				}
				elseif($search != null) {
					$where['search'] = $search;
				} else {
					$where = array();
				}
			
				$where['0000'] = 'user_role';
			
				$offset = $this->post_per_page * $page;
				$posts_count = $this->users_model->get_all($where, true,array(),array(), false, true);
			
				$config = $this->config->item('pagination');
				$config['base_url'] = site_url('c-admin/posts/page/');
				$config['total_rows'] = $posts_count;
				$config['per_page'] = $this->post_per_page;
				$config['use_page_numbers'] = true;
				$config['reuse_query_string'] = true;
			
				$this->pagination->initialize($config);
				$data['pagination'] = $this->pagination->rmo_create_links();
			
			
				$sort = $this->input->get('sort');
				if (empty($sort)) {
					$sort = array();
				}
			
				$data['sort_id'] = isset($sort['id']) ? $sort['id'] : '';
				$data['sort_email'] = isset($sort['email']) ? $sort['email'] : '';
				$data['sort_type'] = isset($sort['roles']) ? $sort['roles'] : '';
//		    	$sort = array_merge(array('id' => 'ASC'), $sort);
				$data['users'] = $this->users_model->get_all($where, false, $sort, array($offset, $this->post_per_page), true, true);
			
				foreach($data['users'] as $key =>&$user_data) {
					$user_data['roles'] = json_decode($user_data['roles']);
					$user_data['roles'] = (isset($user_data->roles)) ? $user_data->roles : '';
				}
//			    $users = array();
//			    $data['users'] = $users;
			
				$data['imgs_url'] = $this->config->item('display_profile-pic');
				$data['current_u_can'] = $current_u_can;
				$data['output'] = $this->load->view('home/users', $data, true);
				$this->load->view('layout/home', $data);
			} else {
				redirect(base_url('404_override'));
				die();
			}
		}

		public function trainers($page = 0) {
			$current_u_can = $this->users_model->get_capabilities($this->UserID);
			if(isset($current_u_can[0]["roles"])) {
				$current_u_can = json_decode($current_u_can[0]["roles"]);
				$current_u_can = $current_u_can[0];
			} else {
				redirect($this->config->item(base_url('404_override')));
				die();
			}
			
			if($current_u_can[0] == "1" || $current_u_can[3] == "1") {
				$this->load->model('trainers_model');
				$page = (int)$page;
				if ($page > 0) {
					$page = $page - 1;
				}
			
				$data['UserID']  = $this->UserID;
				$data['user']  = $this->ion_auth->user()->row();
			
				$data['field_search'] = array(
					'type' => 'text',
					'name' => 'search',
					'id' => 'search'
				);
			
				$search = $this->input->post('search');
				if ((int) $search > 0) {
					$where['search'] = (int) $search;
				}
				elseif($search != null) {
					$where['search'] = $search;
				} else {
					$where = array();
				}
			
				$offset = $this->post_per_page * $page;
				$posts_count = $this->trainers_model->get_all_trainers($where, true);
			
				$config = $this->config->item('pagination');
				$config['base_url'] = site_url('c-admin/posts/page/');
				$config['total_rows'] = $posts_count;
				$config['per_page'] = $this->post_per_page;
				$config['use_page_numbers'] = true;
				$config['reuse_query_string'] = true;
			
				$this->pagination->initialize($config);
				$data['pagination'] = $this->pagination->rmo_create_links();
				
				$sort = $this->input->get('sort');
				if (empty($sort)) {
					$sort = array();
				}
			
				$data['sort_id'] = isset($sort['id']) ? $sort['id'] : '';
				$data['sort_email'] = isset($sort['email']) ? $sort['email'] : '';
				$data['sort_type'] = isset($sort['roles']) ? $sort['roles'] : '';
//			    $sort = array_merge(array('id' => 'ASC'), $sort);
				$data['users'] = $this->trainers_model->get_all_trainers($where, false, $sort, array($offset, $this->post_per_page), true);

			
				foreach($data['users'] as $key =>&$user_data) {
					$user_data['roles'] = json_decode($user_data['roles']);
					$user_data['roles'] = (isset($user_data->roles)) ? $user_data->roles : '';
				}
//			    $users = array();
//			    $data['users'] = $users;
				$data['current_u_can'] = $current_u_can;
				$data['imgs_url'] = $this->config->item('display_trainers-pic');
				$data['output'] = $this->load->view('home/trainers', $data, true);
				$this->load->view('layout/home', $data);
			} else {
				redirect(base_url('404_override'));
				die();
			}
		}
		
		public function payments($page = 0) {
			$current_u_can = $this->users_model->get_capabilities($this->UserID);
			if(isset($current_u_can[0]["roles"])) {
				$current_u_can = json_decode($current_u_can[0]["roles"]);
				$current_u_can = $current_u_can[0];
			} else {
				redirect($this->config->item(base_url('404_override')));
				die();
			}
			
			if($current_u_can[0] == "1") {
				$data['UserID']  = $this->UserID;
				$data['user']  = $this->ion_auth->user()->row();
				$this->load->model("selectData");
				
				$page = (int)$page;
				if ($page > 0) {
					$page = $page - 1;
				}
				
				$data['UserID']  = $this->UserID;
				$data['user']  = $this->ion_auth->user()->row();
				
				$data['field_search'] = array(
					'type' => 'text',
					'name' => 'search',
					'id' => 'search'
				);
				$search = $this->input->post('search');
				if ((int) $search > 0) {
					$where['search'] = (int) $search;
				}
				else {
					$where['search'] = $search;
				}
				
				
				$offset = $this->post_per_page * $page;
		    	$posts_count = $this->selectData->get_all_payments($where, true);
				
				$config = $this->config->item('pagination');
				$config['base_url'] = site_url('c-admin/posts/page/');
				$config['total_rows'] = $posts_count;
				$config['per_page'] = $this->post_per_page;
				$config['use_page_numbers'] = true;
				$config['reuse_query_string'] = true;
				
				$this->pagination->initialize($config);
				$data['pagination'] = $this->pagination->rmo_create_links();
				
				
				$sort = $this->input->get('sort');
				if (empty($sort)) {
					$sort = array();
				} else {
					$sort= array_flip($sort);
					foreach($sort as $key => &$value) {
						$value = str_replace("-",".",$value);
					}
					$sort = array_flip($sort);
				}
				
				$data['sort_id'] = isset($sort['payment.id']) ? $sort['payment.id'] : '';
				$data['sort_n'] = isset($sort['user.nickname']) ? $sort['user.nickname'] : '';
				$data['sort_c'] = isset($sort['payment.created_at']) ? $sort['payment.created_at'] : '';
				
				
				$data['payments'] = $this->selectData->get_all_payments($where, false, $sort, array($offset, $this->post_per_page), true);
				foreach($data['payments'] as $key =>&$value) {
					$value['refund'] = $this->selectData->checkRefund((int)$value["id"]);
					$value['student'] = $this->selectData->getStudent((int)$value["student_id"]);
				}
			
				$data['output'] = $this->load->view('home/payments', $data, true);
				$this->load->view('layout/home', $data);
			} else {
				redirect(base_url('404_override'));
				die();
			}
		}
		
		public function admins($page = 0) {
			$current_u_can = $this->users_model->get_capabilities($this->UserID);
			if(isset($current_u_can[0]["roles"])) {
				$current_u_can = json_decode($current_u_can[0]["roles"]);
				$current_u_can = $current_u_can[0];
			} else {
				redirect($this->config->item(base_url('404_override')));
				die();
			}
			
			if($current_u_can[0] == "1") {
				$page = (int)$page;
				if ($page > 0) {
					$page = $page - 1;
				}
			
				$data['UserID']  = $this->UserID;
				$data['user']  = $this->ion_auth->user()->row();
			
				$data['field_search'] = array(
					'type' => 'text',
					'name' => 'search',
					'id' => 'search'
				);
			
				$search = $this->input->post('search');
				if ((int) $search > 0) {
					$where['search'] = (int) $search;
				}
				elseif($search != null) {
					$where['search'] = $search;
				}
			
//				$where['0100'] = 'user_role';
				$where['0010'] = 'user_role';
				$where['1000'] = 'user_role';
				$where['0001'] = 'user_role';
			
				$offset = $this->post_per_page * $page;
				$posts_count = $this->users_model->get_all_admins($where, true);;
			
				$config = $this->config->item('pagination');
				$config['base_url'] = site_url('c-admin/posts/page/');
				$config['total_rows'] = $posts_count;
				$config['per_page'] = $this->post_per_page;
				$config['use_page_numbers'] = true;
				$config['reuse_query_string'] = true;
			
				$this->pagination->initialize($config);
				$data['pagination'] = $this->pagination->rmo_create_links();
			
			
				$sort = $this->input->get('sort');
				if (empty($sort)) {
					$sort = array();
				}
			
				$data['sort_id'] = isset($sort['id']) ? $sort['id'] : '';
				$data['sort_email'] = isset($sort['email']) ? $sort['email'] : '';
				$data['sort_type'] = isset($sort['roles']) ? $sort['roles'] : '';
				//$sort = array_merge(array('id' => 'ASC'), $sort);
				$data['users'] = $this->users_model->get_all_admins($where, false, $sort, array($offset, $this->post_per_page));
			
				foreach($data['users'] as $key =>&$user_data) {
					$user_data['roles'] = json_decode($user_data['roles']);
					$user_data['roles'] = (isset($user_data['roles'][0])) ? $user_data['roles'][0] : '';
				}
//			    $users = array();
//			    $data['users'] = $users;
			
				//----------
				$data['current_u_can'] = $current_u_can;
				$data['output'] = $this->load->view('home/admins', $data, true);
				$this->load->view('layout/home', $data);
			} else {
				redirect(base_url('404_override'));
				die();
			}
		}

		public function setting()
        {
            if (isset($_POST['setting'])){

                foreach ($_POST['setting'] as $key => $value){
                    $this->setting_model->set_by_key($key, $value);
                }
            }
            if (isset($_FILES['file'])){
                if(!empty($_FILES["file"]["name"])) {
                    $files = $_FILES;
                    $this->load->library ('upload');

                    $config['upload_path'] = $this->config->item('upload_banner-pic');
                    $config['allowed_types'] = 'jpeg|jpg|png';
                    $this->upload->initialize($config);

                    $bytes = random_bytes (11);

                    $ext = explode (".", $files["file"]["name"]);
                    $ext = array_pop ($ext);
                    $fileName = bin2hex ($bytes).".".$ext;

                    $_FILES['file']['name'] = $fileName;

                    if (!$this->upload->do_upload('file')) {
                        $error = array ('error' => $this->upload->display_errors ());

                        die(var_dump($error));
                        redirect ($_SERVER["HTTP_REFERER"]);
                        die();
                    } else {
                        $data = array ('upload_data' => $this->upload->data());
                        $this->setting_model->set_by_key('bannerImage', $fileName);
                    }
                }
            }

            if (isset($_FILES['marketplace_banner'])){
                if(!empty($_FILES["marketplace_banner"]["name"])) {
                    $files = $_FILES;
                    $this->load->library ('upload');

                    $config['upload_path'] = $this->config->item('upload_banner-pic');
                    $config['allowed_types'] = 'jpeg|jpg|png';
                    $this->upload->initialize($config);

                    $bytes = random_bytes (11);

                    $ext = explode (".", $files["marketplace_banner"]["name"]);
                    $ext = array_pop ($ext);
                    $fileName = bin2hex ($bytes).".".$ext;

                    $_FILES['marketplace_banner']['name'] = $fileName;

                    if (!$this->upload->do_upload('marketplace_banner')) {
                        $error = array ('error' => $this->upload->display_errors ());

                        die(var_dump($error));
                        redirect ($_SERVER["HTTP_REFERER"]);
                        die();
                    } else {
                        $data = array ('upload_data' => $this->upload->data());
                        $this->setting_model->set_by_key('marketplaceBanner', $fileName);
                    }
                }
            }

            $settings = $this->setting_model->get_all();

            $current_u_can = $this->users_model->get_capabilities($this->UserID);
            if(isset($current_u_can[0]["roles"])) {
                $current_u_can = json_decode($current_u_can[0]["roles"]);
                $current_u_can = $current_u_can[0];
            } else {
                redirect($this->config->item(base_url('404_override')));
                die();
            }
            $data['trainingDescription'] = [];

            foreach (Setting_model::TRAININGS_TYPES as $item)
            {
                $data['trainingDescriptions'][] = [
                    'title' => $this->setting_model->get_by_key($item['title'])[0] ?? null,
                    'description' => $this->setting_model->get_by_key($item['description'])[0] ?? null,
                ];
            }
            $data['social'] = $this->setting_model->get_social();
            $data['settings'] = $settings;

            $data['marketplaceBanner']['image'] = $this->setting_model->get_by_key('marketplaceBanner')[0] ?? null;
            $data['marketplaceBanner']['text'] = $this->setting_model->get_by_key('marketplaceBannerText')[0] ?? null;
            $data['marketplaceBanner']['title'] = $this->setting_model->get_by_key('marketplaceBannerTitle')[0] ?? null;
            $data['marketplaceBanner']['links'] = [];

            foreach (Setting_model::MARKETPLACE_BANNER_LINKS as $link){
                $bannerLink =  $this->setting_model->get_by_key($link)[0] ?? null;

                if (isset($bannerLink)){
                    $data['marketplaceBanner']['links'][] = $bannerLink;
                }
            }
            $data['images_path'] = $this->config->item('display_banner-pic');
            $data['current_u_can'] = $current_u_can;
            $data['output'] = $this->load->view('home/settings', $data, true);

            $this->load->view('layout/home', $data);
        }
	}

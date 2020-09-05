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
			$this->load->model('users_model');
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
				$posts_count = 3;
//		    	$posts_count = $this->posts_model->get_all($where, true);;
			
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
			
			
				$statistics = array();
				$statistics[0] = array('date'=>'26 June', 'time'=>1590364800, 'team1'=>'Renegades', 'team2'=>'Chiefs', 'team1_ico'=>'team-pic.png', 'team2_ico' =>'team-pic.png');
				$statistics[1] = array('date'=>'20 July', 'time'=>1590364800, 'team1'=>'Renegades', 'team2'=>'Chiefs', 'team1_ico'=>'team-pic.png', 'team2_ico' =>'team-pic.png');
				$statistics[2] = array('date'=>'20 June', 'time'=>1590364800, 'team1'=>'Renegades', 'team2'=>'Chiefs', 'team1_ico'=>'team-pic.png', 'team2_ico' =>'team-pic.png');
				$statistics[3] = array('date'=>'21 July', 'time'=>1590364800, 'team1'=>'Renegades', 'team2'=>'Chiefs', 'team1_ico'=>'team-pic.png', 'team2_ico' =>'team-pic.png');
				$data['statistics'] = $statistics;
			
			
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
				$posts_count = $this->users_model->get_all($where, true);;
			
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
				$data['users'] = $this->users_model->get_all($where, false, $sort, array($offset, $this->post_per_page));
			
				foreach($data['users'] as $key =>&$user_data) {
					$user_data['roles'] = json_decode($user_data['roles']);
					$user_data['roles'] = (isset($user_data['roles'][0])) ? $user_data['roles'][0] : '';
				}
//			    $users = array();
//			    $data['users'] = $users;
			
				//----------
				$data['output'] = $this->load->view('home/admins', $data, true);
				$this->load->view('layout/home', $data);
			} else {
				redirect(base_url('404_override'));
				die();
			}
		}
	}

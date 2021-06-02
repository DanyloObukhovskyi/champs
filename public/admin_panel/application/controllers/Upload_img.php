<?php
	defined('BASEPATH') OR exit('No direct script access allowed');
	
	class Upload_img extends CI_Controller
	{
		public function __construct ()
		{
			parent::__construct ();
		}
		
		public function index($user_id = 0) {
			$user_id = (int)$user_id;
			if($user_id > 0) {
				$config['upload_path'] = PUBLICPATH.'/'.$this->config->item('upload_profile-pic');
                if(!file_exists(PUBLICPATH.'/uploads')){
                    mkdir(PUBLICPATH.'/uploads', 0777);
                    if (!file_exists($config['upload_path'])) {
                        mkdir($config['upload_path'], 0777);
                    }
                } else {
                    if (!file_exists($config['upload_path'])) {
                        mkdir($config['upload_path'], 0777);
                    }
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
					$data = array('upload_data' => $this->upload->data());
					$this->load->model("edit_m");
					$this->edit_m->change_user_img($user_id, $data["upload_data"]["orig_name"]);
					echo "1";
					die();
				}
			} else {
				echo "error"; die();
			}
		}
		
		public function article($user_id = 0) {
			$user_id = (int)$user_id;
			if($user_id > 0) {
				$config['upload_path']          = PUBLICPATH.'/'.$this->config->item('upload_article-pic');
                if(!file_exists(PUBLICPATH.'/images')){
                    mkdir(PUBLICPATH.'/images', 0777);
                    if(!file_exists(PUBLICPATH.'/images/temp')) {
                        mkdir(PUBLICPATH.'/images/temp', 0777);
                    }
                    if (!file_exists($config['upload_path'])) {
                        mkdir($config['upload_path'], 0777);
                    }
                } else {
                    if(!file_exists(PUBLICPATH.'/images/temp')) {
                        mkdir(PUBLICPATH.'/images/temp', 0777);
                    }
                    if (!file_exists($config['upload_path'])) {
                        mkdir($config['upload_path'], 0777);
                    }
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
					die();
				}
			} else {
				echo "error"; die();
			}
		}
	}
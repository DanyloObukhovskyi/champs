<?php
	/**
	 * Created by PhpStorm.
	 * User: MaksymReznichenko
	 * Date: 20.08.20
	 * Time: 14:23
	 */
	
	class Add_m extends CI_Model {
		
		private $table = array("users" => "user", "posts" => "news", "trainers" => "user", "admins" => "admins", "payments" => "payments", "teacher"=>"teachers");
		
		public function __construct()
		{
			$this->load->database();
		}
		
		public function addUser($insert=array()) {
			if(!empty($insert)) {
				$this->db->insert($this->table['users'], $insert);
				return $this->db->insert_id();
			}
		}
		
		public function addTeacher($insert=array()) {
			if(!empty($insert)) {
				$this->db->insert($this->table['teacher'], $insert);
				return $this->db->insert_id();
			}
		}
		
		
		public function addAdmin($insert=array()) {
			if(!empty($insert)) {
				$this->db->insert($this->table['admins'], $insert);
				return $this->db->insert_id();
			}
		}
		
		public function addNews($insert=array()) {
			if(!empty($insert)) {
				$this->db->insert($this->table['posts'], $insert);
				return $this->db->insert_id();
			}
		}
	}
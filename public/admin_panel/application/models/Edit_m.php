<?php
	/**
	 * Created by PhpStorm.
	 * User: MaksymReznichenko
	 * Date: 20.08.20
	 * Time: 14:23
	 */
	
	class Edit_m extends CI_Model {
		
		private $table = array("users" => "user", "posts" => "news", "trainers" => "teachers", "admins" => "admins", "payments" => "payments");
		
		public function __construct()
		{
			$this->load->database();
		}
		
		public function updateAdmin($user_id = 0, $update = array()) {
			if($user_id > 0 && ! empty($update)) {
				$this->db->where('id', $user_id);
				$this->db->update($this->table['admins'], $update);

                return $this->db->insert_id();
			}
		}
		
		public function updateUser($user_id = 0, $update = array()) {
			if($user_id > 0 && ! empty($update)) {
				$this->db->where('id', $user_id);
				$this->db->update($this->table['users'], $update);

                return $this->db->insert_id();
			}
		}
		
		public function updateTeacher($user_id = 0, $update = array()) {
			if($user_id > 0 && ! empty($update)) {
				$this->db->where('userid', $user_id);
				$this->db->update($this->table['trainers'], $update);

                $this->db->where('userid', $user_id);
                $this->db->select(['id']);
                $this->db->from($this->table['trainers']);

                $result = $this->db->get();
                $result = $result->result_array();

                return $result[0]['id'] ?? null;
			}
		}
		
		public function change_user_img($user_id = 0, $img_name = "") {
			if($user_id > 0 && $img_name != "") {
				$this->db->where('id', $user_id);
				$this->db->update($this->table['users'], array('photo' => $img_name));
			}
		}

		public function update_news($post_id = 0, $update = array()) {
			if($post_id > 0 && !empty($update)) {
				$this->db->where('id', $post_id);
				$result = $this->db->update($this->table['posts'], $update);
				
			}
		}
	}
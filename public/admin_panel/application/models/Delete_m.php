<?php
	/**
	 * Created by PhpStorm.
	 * User: MaksymReznichenko
	 * Date: 20.08.20
	 * Time: 14:23
	 */
	
	class Delete_m extends CI_Model {
		
		private $table = array("users" => "user", "posts" => "news", "trainers" => "teachers", "admins" => "admins", "payments" => "payments");
		
		public function __construct()
		{
			$this->load->database();
		}
	
		public function delete_post($id=0) {
			$id = (int) $id;
			if ($id > 0) {
				$this->db->delete($this->table['posts'], array('id' => $id));
				return true;
			}
			
			return false;
		}
		
		function delete_match($id=0) {

		}
		
		function delete_user($id=0) {
			$id = (int) $id;
			if ($id > 0) {
				$this->db->delete($this->table['users'], array('id' => $id));
				return true;
			}
			
			return false;
		}
		
		function delete_trainer($id=0) {
			$id = (int) $id;
			if ($id > 0) {
				$data = array('istrainer'=>0);
				$this->db->where(array('id' => $id))->update($this->table['users'], $data);
				return true;
			}
			
			return false;
		}
		
		function delete_trainer_as_teacher($id=0) {
			$id = (int) $id;
			if ($id > 0) {
				$this->db->delete($this->table['trainers'], array('userid' => $id));
				return true;
			}
			
			return false;
		}
		
//		function delete_admin($id=0) {
//			$id = (int) $id;
//			if ($id > 0) {
//				$user = array("ROLE_USER");
//				$encoded = json_encode ($user);
//				$data = array('roles' => $encoded);
//				$this->db->where(array('id' => $id))->update($this->table['admins'], $data);
//				return true;
//			}
//
//			return false;
//		}
		function delete_admin($id=0) {
			$id = (int) $id;
			if ($id > 0) {
				$this->db->delete($this->table['admins'], array('id' => $id));
				return true;
			}
			
			return false;
		}
		
		function delete_payment($id=0) {
			$id = (int) $id;
			if ($id > 0) {
				$this->db->delete($this->table['payments'], array('id' => $id));
				return true;
			}
			
			return false;
		}
	}
<?php
	/**
	 * Created by PhpStorm.
	 * User: MaksymReznichenko
	 * Date: 20.08.20
	 * Time: 14:23
	 */
	
	class Edit_fr_front extends CI_Model {
		
		public function __construct()
		{
			$this->load->database();
		}
		
		public function check_data($where=array(), $table="") {
			$this->db->select('*');
			$this->db->from($table);
			$this->db->where($where);
			$result = $this->db->get();
			return $result->result_array();
		}
		
		public function update_data($update=array(), $table="", $where=array()) {
			if(!empty($table) && ! empty($update) && !empty($where)) {
				$this->db->where($where);
				$result = $this->db->update($table, $update);
				return $result;
			}
		}
		
		public function insert_data($insert=array(), $table="") {
			if(!empty($insert) && ! empty($update)){
				$this->db->insert($table, $insert);
				return $this->db->insert_id();
			}
		}
	}
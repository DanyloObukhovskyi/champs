<?php
	/**
	 * Created by PhpStorm.
	 * User: MaksymReznichenko
	 * Date: 20.08.20
	 * Time: 14:23
	 */
	
	class Trainers_model extends CI_Model {
		
		private $table = "user";
		
		public function __construct()
		{
			$this->load->database();
		}
		
		function get_all_trainers($where = array(), $is_count = false, $sort = array(), $limit = array())
		{
			
			$this->db->select('*');
			$this->db->from($this->table);
			
			if (!empty($where['id'])) {
				$this->db->where('id', $where['id']);
			}
			else {
				$ij = 1;
				$search_flag = false;
				foreach ($where AS $key => $val) {
					if ($key == 'id') {
						continue;
					}
					
					if ($key == 'search') {
						$search_flag = true;
						if (is_numeric($val)) {
							$this->db->like('id', $val);
						}
						else {
							$this->db->like('nickname', $val);
						}
					} else if($val == 'user_role') {
						if($search_flag == true) {
							continue;
						}
						$custom_sql = "JSON_EXTRACT(roles,'$.role') = '".$key."'";
						if($ij == 1) {
							$this->db->where($custom_sql);
						}
						else {
							$this->db->or_where($custom_sql);
						}
						$ij++;
					}
					else {
						$this->db->where($key, $val);
					}
				}

				if (!empty($sort)) {
					$sort_val = array();
					foreach ($sort AS $key => $val) {
						$sort_val[] = $key . ' ' . $val;
					}
					
					$sort = implode(', ', $sort_val);
					$this->db->order_by($sort);
				}
			}
			
			if (!empty($limit) && count($limit) == 2 && !$is_count) {
				$offset = (int)$limit[0];
				$per_page = (int)$limit[1];
				
				$this->db->limit($per_page, $offset);
			}
			$this->db->where('istrainer', 1);
			$result = $this->db->get();
//			echo "<pre>", print_r ($this->db->last_query());
			if ($is_count) {
				return $result->num_rows();
			}
			else {
				return $result->result_array();
			}
		}
	}
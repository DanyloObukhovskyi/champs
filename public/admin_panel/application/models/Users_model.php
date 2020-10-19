<?php
	/**
	 * Created by PhpStorm.
	 * User: MaksymReznichenko
	 * Date: 20.08.20
	 * Time: 14:23
	 */
	
	class Users_model extends CI_Model
	{
		private $table = "user";
		public function __construct ()
		{
			$this->load->database();
		}
		
		public function get_all($where = array(), $is_count = false, $sort = array(), $limit = array(), $nickname=false, $user=false)
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
							if($nickname == false) {
								$this->db->like('email', $val);
							}
							else {
								if($user) {
									$custom_sql = "JSON_EXTRACT(roles,'$[0]') = 'ROLE_USER'";
									$this->db->where($custom_sql);
								}
								$this->db->like('nickname', $val);
							}
						}
					} else if($val == 'user_role') {
						if($search_flag == true) {
							continue;
						}
//						$custom_sql = "JSON_EXTRACT(roles,'$.role') = '".$key."'";
						if($user) {
							$custom_sql = "JSON_EXTRACT(roles,'$[0]') = 'ROLE_USER'";
							$this->db->where($custom_sql);
						} else {
							$custom_sql = "JSON_EXTRACT(roles,'$[0]') != 'ROLE_USER'";
						}
						
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
				//SELECT * FROM `user` WHERE `roles`->"$[0]" = 'user'
				// sort
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
			
			$result = $this->db->get();
//			echo "<pre>", print_r ($this->db->last_query());
			if ($is_count) {
				return $result->num_rows();
			}
			else {
				return $result->result_array();
			}
		}
		
		
		public function get_all_admins($where = array(), $is_count = false, $sort = array(), $limit = array(), $nickname=false, $user=false)
		{
			
			$this->db->select('*');
			$this->db->from("admins");
			
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
							if($nickname == false) {
								$this->db->like('email', $val);
							}
							else {
								if($user) {
									$custom_sql = "JSON_EXTRACT(roles,'$[0]') = 'ROLE_USER'";
									$this->db->where($custom_sql);
								}
								$this->db->like('nickname', $val);
							}
						}
					} else if($val == 'user_role') {
						if($search_flag == true) {
							continue;
						}
//						$custom_sql = "JSON_EXTRACT(roles,'$.role') = '".$key."'";
						if($user) {
							$custom_sql = "JSON_EXTRACT(roles,'$[0]') = 'ROLE_USER'";
							$this->db->where($custom_sql);
						} else {
							$custom_sql = "JSON_EXTRACT(roles,'$[0]') != 'ROLE_USER'";
						}
						
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
				//SELECT * FROM `user` WHERE `roles`->"$[0]" = 'user'
				// sort
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
			
			$result = $this->db->get();
			if ($is_count) {
				return $result->num_rows();
			}
			else {
				return $result->result_array();
			}
		}

		public function get_capabilities($id=0) {
			if($id > 0) {
				$this->db->select('roles');
				$this->db->from("admins");
				$this->db->where('id', $id);
				$result = $this->db->get();
				return $result->result_array();
			}
			else {
				return false;
			}
		}

		public function get_by_nickname($nickname)
        {
            $this->db->select('email');
            $this->db->from("admins");
            $this->db->where('nickname', $nickname);
            $result = $this->db->get();
            return $result->result_array();
        }
	}
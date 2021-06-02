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
		
		function check_teacher_data($id = 0) {
			if($id > 0) {
				$this->db->select('*');
				$this->db->from("teachers");
				$this->db->where('userid', $id);
				$result = $this->db->get();
				return $result->result_array();
			}
		}
		
		function get_all_trainers($where = array(), $type = 'all', $is_count = false, $sort = array(), $limit = array())
		{
			$this->db->select('*');
			$this->db->from($this->table);
			$this->db->join('teachers', 'user.id = teachers.userid');

            if (!empty($where['id'])) {
                $this->db->where('user.id', $where['id']);
            }
			if ($type !== 'all') {
                $this->db->join('trainer_lesson_price', 'teachers.id = trainer_lesson_price.trainer_id');
                $this->db->where('trainer_lesson_price.lesson_type', (string)$type);
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
			$this->db->where('user.istrainer', 1);
			$result = $this->db->get();
//			echo "<pre>", print_r ($this->db->last_query());
			if ($is_count) {
				return $result->num_rows();
			}
			else {
				return $result->result_array();
			}
		}
		
		public function check_trainer_time($data=array()) {
			if(!empty($data)) {
				$this->db->select('*');
				$this->db->from("schledule");
				$this->db->where($data);
				$result = $this->db->get();
				return $result->result_array();
			}
		}
		
		public function update_trainer_time($update=array(), $where=array()) {
			if(!empty($update) && !empty($where)) {
				$this->db->where("trainer_id", $where["trainer_id"]);
				$this->db->where("date", $where["date"]);
				$this->db->update("schledule", $update);
			}
		}
		
		public function insert_trainer_time($insert=array()) {
			if(!empty($insert)) {
				$this->db->insert("schledule", $insert);
				return $this->db->insert_id();
			}
		}
	}
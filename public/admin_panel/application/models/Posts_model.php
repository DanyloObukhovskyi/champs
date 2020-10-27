<?php
	/**
	 * Created by PhpStorm.
	 * User: MaksymReznichenko
	 * Date: 20.08.20
	 * Time: 14:23
	 */
	
	class Posts_model extends CI_Model
	{
		private $table = "news";

		public $games = [
            'dota'     => 'Dota 2',
            'cs'       => 'CS:GO',
            'lol'      => 'LOL',
            'valorant' => 'Valorant'
        ];

		public function __construct ()
		{
			$this->load->database();
		}
		
		public function get_all($where = array(), $is_count = false, $sort = array(), $limit = array())
		{
			$this->db->select('*');
			$this->db->from($this->table);
			
			if (!empty($where['id'])) {
				$this->db->where('id', $where['id']);
			}
			else {
				foreach ($where AS $key => $val) {
					if ($key == 'id') {
						continue;
					}
					
					if ($key == 'search') {
						if (is_numeric($val)) {
							$this->db->like('id', $val);
						}
						else {
							$this->db->like('title', $val);
						}
					}
					else {
						$this->db->where($key, $val);
					}
				}
				
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
		
		public function select_matches($where = array(), $is_count = false, $sort = array(), $limit = array())
		{
			$this->db->select('*');
			$this->db->from('match');
		//	$this->db->join('team', 'match.team1_id = team.id');
			
			if (!empty($where['id'])) {
				$this->db->where('id', $where['id']);
			}
			else {
				foreach ($where AS $key => $val) {
					if ($key == 'id') {
						continue;
					}
					
					if ($key == 'search') {
						if (is_numeric($val)) {
							$this->db->like('id', $val);
						}
					}
					else {
						$this->db->where($key, $val);
					}
				}
				
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
		
		public function get_team($id=0) {
			if($id > 0) {
				$this->db->select('*');
				$this->db->from("team");
				$this->db->where('id', (int)$id);
				$result = $this->db->get();
				return $result->result_array();
			}
		}
    }
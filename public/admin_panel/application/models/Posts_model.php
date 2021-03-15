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
			$this->db->select('news.*, news_types.*');
			$this->db->from($this->table);
			$this->db->join('(SELECT id as news_type_id, title as type_title, img as type_img FROM news_type 
                                                 ) AS `news_types`', 'news_types.news_type_id = news.type', 'left');

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
							$this->db->like('news.id', $val);
						}
						else {
							$this->db->like('news.title', $val);
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

        public function deleteWithGameId($id)
        {
            $this->db->delete($this->table, array('game_id' => $id));
        }

        public function getNewsData($limit, $offset, $count, $query, $column, $order)
        {
            $this->db->select('news.*');

            $this->db->join('game', "game.id = {$this->table}.game_id", 'left');
            $this->db->where('is_deleted', 0);
            $this->db->or_where('is_deleted', null);

            if ($query != '') {
                $this->db->where("(id LIKE '%$query%'");
                $this->db->or_where("title LIKE '%$query%'");
                $this->db->or_where("date LIKE '%$query%'");
            }
            if ($column == 0) {
                $this->db->order_by("{$this->table}.id", $order);
            } elseif ($column == 1) {
                $this->db->order_by("{$this->table}.title", $order);
            } elseif ($column == 2) {
                $this->db->order_by("{$this->table}.type", $order);
            } elseif ($column == 3) {
                $this->db->order_by("{$this->table}.date", $order);
            }
            if ($count) {
                return count($this->get([]));
            }
            $types = $this->getData([], $limit, $offset);

            return $types;
        }

        public function getData($where, $limit, $offset) {
            $query = $this->db->get_where($this->table, $where, $limit, $offset);
            $data = array();
            if ($query !== FALSE && $query->num_rows() > 0) {
                $data = $query->result_array();
            }
            return $data;
        }

        public function get($where) {
            $query = $this->db->get_where($this->table, $where);
            $data = array();
            if ($query !== FALSE && $query->num_rows() > 0) {
                $data = $query->result_array();
            }
            return $data;
        }
    }
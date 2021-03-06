<?php
	/**
	 * Created by PhpStorm.
	 * User: MaksymReznichenko
	 * Date: 20.08.20
	 * Time: 14:23
	 */
	
	class Delete_m extends CI_Model {
		
		private $table = array(
		    "users" => "user",
            "posts" => "news",
            "trainers" => "teachers",
            "admins" => "admins",
            "payments" => "payments",
            "trainer_lesson_price" => "trainer_lesson_price",
            "trainer_achievement" => "trainer_achievement",
            'trainer_video' => "trainer_video"
        );
		
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

		public function delete_trainer_lesson_price($id)
        {
            $this->db->where(array('id' => $id));
            $this->db->from($this->table['users']);

            $user = $this->db->get();
            $user = $user->result_array()[0];

            $this->db->where(array('userid' => $user['id']));
            $this->db->from($this->table['trainers']);
            $trainer = $this->db->get();
            $trainer = $trainer->result_array()[0];

            $this->db->delete($this->table['trainer_lesson_price'], array('trainer_id' => $trainer['id']));
        }

        public function delete_trainer_achievements($id)
        {
            $this->db->where(array('id' => $id));
            $this->db->from($this->table['users']);

            $user = $this->db->get();
            $user = $user->result_array()[0];

            $this->db->where(array('userid' => $user['id']));
            $this->db->from($this->table['trainers']);
            $trainer = $this->db->get();
            $trainer = $trainer->result_array()[0];

            $this->db->delete($this->table['trainer_achievement'], array('trainer_id' => $trainer['id']));
        }
		
		function delete_match($id=0) {
			$id = (int) $id;
			if ($id > 0) {
				//DELETE FROM `match_pick_and_ban`
				//WHERE `game_id` = 1;
				//
				//DELETE FROM `match_statistics`
				//WHERE `game_match_id` = 1;
				//
				//DELETE FROM `player_statistics`
				//WHERE `game_match_id` = 1;
				//
				//DELETE FROM `stream`
				//WHERE `game_match_id` = 1;
				//
				//DELETE FROM `match`
				//WHERE `id` = 1;
				$this->db->delete('match_pick_and_ban', array('game_id' => $id));
				$this->db->delete('match_statistics', array('game_match_id' => $id));
				$this->db->delete('player_statistics', array('game_match_id' => $id));
				$this->db->delete('stream', array('game_match_id' => $id));
				$this->db->delete('match', array('id' => $id));
				
				return true;
			}
			
			return false;
		}
		
		function delete_user($id=0) {
			$id = (int) $id;
			if ($id > 0) {
				$this->db->delete('purse_history', array('user_id' => $id));
				$this->db->delete('charactristics', array('user_id' => $id));
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
		
		function delete_trainer_as_teacher($id = 0) {
			$id = (int) $id;
			if ($id > 0) {
			    $trainerId = $this->getOne(['userid' => $id], $this->table['trainers'])['id'];
                $this->db->delete($this->table['trainer_video'], array('trainer_id' => $trainerId));
                $this->db->delete($this->table['trainer_lesson_price'], array('trainer_id' => $trainerId));
                $this->db->delete($this->table['trainer_achievement'], array('trainer_id' => $trainerId));
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

        public function getOne($where, $table) {
            return $this->db->limit(1)->get_where($table, $where)->row_array();
        }
	}
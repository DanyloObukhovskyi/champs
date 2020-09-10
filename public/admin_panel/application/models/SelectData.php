<?php
	/**
	 * Created by PhpStorm.
	 * User: MaksymReznichenko
	 * Date: 20.08.20
	 * Time: 14:23
	 */
	
	class SelectData extends CI_Model {
		
		public function __construct()
		{
			$this->load->database();
		}
		
		public function get_all_payments($where = array(), $is_count = false, $sort = array(), $limit = array(), $nickname=false, $user=false)
		{
			
			$this->db->select('*');
			$this->db->from("payment");
			
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
//						else {
//							if($nickname == false) {
//								$this->db->like('email', $val);
//							}
//						}
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
			
			$result = $this->db->get();
			if ($is_count) {
				return $result->num_rows();
			}
			else {
				return $result->result_array();
			}
		}
		
		public function getTransactionData($userID = false)
		{
			if ($userID === false)
			{
				$query = $this->db->get('TransactionData');
				return $query->result_array();
			}
			
			$query = $this->db->get_where('TransactionData', array('userID' => $userID));
			return $query->row_array();
		}
		
		public function updateTable($userID=0, $rowID = 0)
		{
			if ($userID != false && $rowID !=false) {
				
				$data = array('status' => 1);
				
				$this->db->where('id', $rowID);
				$this->db->where('userID', $userID);
				$this->db->update('TransactionData', $data);
			}
			
		}
		
		public function addTransaction($data=array())
		{
			if(!empty($data)) {
				$insert = array(
					'userID' => $data['userID'],
					'amount'  => $data['amount'],
					'addrTo'  => $data['AddrTo'],
					'addrFrom'  => "",
					'status'  => 0,
					'coinName'  => $data['coinName'],
				);
				
				$this->db->insert('TransactionData', $insert);
			}
		}
	}
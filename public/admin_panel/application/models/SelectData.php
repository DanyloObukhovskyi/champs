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
		
//		public function doQuery()
//		{
//			$this->db->query("show tables");
//			die();
//		}
//
//		public function showTables()
//		{
//			$query = $this->db->query("show tables");
//			print_r($query->result());
//			die();
//		}
		
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
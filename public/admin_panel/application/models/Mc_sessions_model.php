<?php

class Mc_sessions_model extends CI_Model {
    private $mc_sessions_table = 'mc_sessions';

    function __construct() {
        // Call the Model constructor
        parent::__construct();
    }

    public function putProductInfo($data) {
        if (!empty($data)) {
            $this->db->insert($this->mc_sessions_table, $data);
            return $this->db->insert_id();
        }
        return false;
    }

    public function getProductInfo($id){
        $this->db->select("*");
        $this->db->from("$this->mc_sessions_table");
        $this->db->where(array('id' => $id));

        $res = $this->db->get();
        $data = $res->result_array();
        $res->free_result();
        if($data){
            return $data;
        }
    }

    public function deleteProductInfo($id){
        $id = (int)$id;
        if ($id) {
            $this->db->delete($this->mc_sessions_table, array('id' => $id));
            return true;
        }
        return false;
    }

    public function deleteOld($curTime, $daysInSeconds){
        $this->db->where('created_at <=', ($curTime-$daysInSeconds));
        $res = $this->db->delete($this->mc_sessions_table);
        return $res ? true : false;
    }
}


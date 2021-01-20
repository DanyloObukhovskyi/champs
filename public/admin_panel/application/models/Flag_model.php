<?php


class Flag_model extends CI_Model
{
    public $table = 'flag_icon';

    public function get_all()
    {
        $this->db->select('*');
        $this->db->from($this->table);

        $result = $this->db->get();

        return $result->result_array();
    }
}
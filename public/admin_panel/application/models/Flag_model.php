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

    public function get($where)
    {
        $query = $this->db->get_where($this->table, $where);
        $data = array();
        if ($query !== FALSE && $query->num_rows() > 0) {
            $data = $query->result_array();
        }
        return $data;
    }

    public function get_one($where)
    {
        return $this->get($where)[0] ?? null;
    }
}
<?php


class Setting_model extends CI_Model
{
    private $table = "setting";

    public function get_by_key($key)
    {
        $this->db->select('*');
        $this->db->from($this->table);

        $this->db->where('key', $key);
        $result = $this->db->get();

        return $result->result_array();
    }

    public function get_all()
    {
        $this->db->select('*');
        $this->db->from($this->table);

        $result = $this->db->get();

        return $result->result_array();
    }

    public function set_by_key($key, $value)
    {
        $this->db->where('key', $key);
        $this->db->update($this->table, ['value' => $value]);
    }
}
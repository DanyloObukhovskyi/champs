<?php


class Game_m extends CI_Model
{
    private $table = "game";

    public function create($data)
    {
        return $this->db->insert($this->table, $data);
    }

    public function get_all()
    {
        $this->db->select('*');
        $this->db->from($this->table);
        $this->db->where('is_deleted', 0);

        $result = $this->db->get();
        return $result->result_array();
    }

    public function get_paginate($is_count, $offset = 0, $length = null)
    {
        $this->db->select('*');
        $this->db->from($this->table);
        $this->db->where('is_deleted', 0);

        if (!$is_count) {
            $this->db->limit($offset, $length);
        }
        $result = $this->db->get();
        if ($is_count) {
            return $result->num_rows();
        }
        else {
            return $result->result_array();
        }
    }

    public function update($update)
    {
        $this->db->where('id', $update['id']);
        $this->db->update($this->table, $update);
    }

    public function delete($id)
    {
        $this->db->delete($this->table, array('id' => $id));
    }

    public function soft_delete($id)
    {
        $this->db->where('id', $id);
        $this->db->update($this->table, array(
            'is_deleted' => 1
        ));
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
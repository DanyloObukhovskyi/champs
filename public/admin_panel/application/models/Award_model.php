<?php


class Award_model extends CI_Model
{
    private $table = "award";

    private $trainers_awards_table = 'teachers_award';

    public function create($data)
    {
        return $this->db->insert($this->table, $data);
    }

    public function get_paginate($is_count, $offset = 0, $length = null)
    {
        $this->db->select('*');
        $this->db->from($this->table);

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

    public function get_all()
    {
        $this->db->select('*');
        $this->db->from($this->table);

        $result = $this->db->get();
        return $result->result_array();
    }

    public function update($update)
    {
        $this->db->where('id', $update['id']);
        $this->db->update($this->table, $update);
    }

    public function delete($id)
    {
        $this->db->delete($this->table, array('id' => $id));
        $this->db->delete($this->trainers_awards_table, array('award_id' => $id));
    }
}
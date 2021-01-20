<?php


class Event_model extends CI_Model
{
    private $table = "event";

    const STATUS_ALL = 'all';

    const STATUS_PRO = 'pro';

    const STATUSES = [
        self::STATUS_PRO => 'PRO',
        self::STATUS_ALL => 'ВСЕ'
    ];

    public function create($data)
    {
        $this->db->insert($this->table, $data);

        return $this->db->insert_id();
    }

    public function update($id, $update)
    {
        $this->db->where('id', $id);

        return $this->db->update($this->table, $update);
    }

    public function get_by_id($id)
    {
        $this->db->select('*');
        $this->db->from($this->table);
        $this->db->where('id', $id);

        $result = $this->db->get();

        return $result->result_array()[0] ?? null;
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
        } else {
            return $result->result_array();
        }
    }
}
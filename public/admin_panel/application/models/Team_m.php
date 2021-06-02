<?php


class Team_m extends CI_Model
{
    private $table = "team";

    public function create($data)
    {
        return $this->db->insert($this->table, $data);
    }

    public function get_all()
    {
        $this->db->select('*');
        $this->db->from($this->table);

        $result = $this->db->get();
        return $result->result_array();
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

    public function update($update)
    {
        $this->db->where('id', $update['id']);
        $this->db->update($this->table, $update);
    }

    public function delete($id)
    {
        $this->db->delete($this->table, array('id' => $id));
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

    public function get_one($id)
    {
        return $this->get(['id' => $id])[0] ?? null;
    }

    public function getTeamsData($limit, $offset, $count, $query, $column, $order)
    {
        $this->db->select('*');

        if ($query != '') {
            $this->db->where("(id LIKE '%$query%'");
            $this->db->or_where("name LIKE '%$query%'");
        }
        if ($column == 0) {
            $this->db->order_by("{$this->table}.id", $order);
        } elseif ($column == 2) {
            $this->db->order_by("{$this->table}.name", $order);
        }
        if ($count) {
            return count($this->get([]));
        }
        $list = $this->getData([], $limit, $offset);

        return $list;
    }

    public function getData($where, $limit, $offset) {
        $query = $this->db->get_where($this->table, $where, $limit, $offset);
        $data = array();
        if ($query !== FALSE && $query->num_rows() > 0) {
            $data = $query->result_array();
        }
        return $data;
    }

    public function getOne($where) {
        return $this->db->limit(1)->get_where($this->table, $where)->row_array();
    }
}
<?php
/**
 * Created by PhpStorm.
 * User: MaksymReznichenko
 * Date: 20.08.20
 * Time: 14:23
 */

class Blog_payment_model extends CI_Model
{
    private $table = "blog_payment";

    public function __construct ()
    {
        $this->load->database();
    }

    public function getBlogsData($limit, $offset, $count, $query, $column, $order)
    {
        $this->db->select('blogs.*');

        if ($query != '') {
            $this->db->where("(blogs.id LIKE '%$query%'");
            $this->db->or_where("blogs.title LIKE '%$query%'");
            $this->db->or_where("blogs.status LIKE '%$query%'");
            $this->db->or_where("blogs.date LIKE '%$query%')");
        }
        if ($column == 0) {
            $this->db->order_by("{$this->table}.id", $order);
        } elseif ($column == 1) {
            $this->db->order_by("{$this->table}.title", $order);
        } elseif ($column == 1) {
            $this->db->order_by("{$this->table}.status", $order);
        } elseif ($column == 3) {
            $this->db->order_by("{$this->table}.date", $order);
        }
        if ($count) {
            return count($this->get([]));
        }
        $types = $this->getData([], $limit, $offset);

        return $types;
    }

    public function getData($where, $limit, $offset) {
        $query = $this->db->get_where($this->table, $where, $limit, $offset);
        $data = array();
        if ($query !== FALSE && $query->num_rows() > 0) {
            $data = $query->result_array();
        }
        return $data;
    }

    public function get($where) {
        $query = $this->db->get_where($this->table, $where);
        $data = array();
        if ($query !== FALSE && $query->num_rows() > 0) {
            $data = $query->result_array();
        }
        return $data;
    }

    public function getTypes()
    {
        return self::TYPES;
    }

    public function getOne($where) {
        return $this->db->limit(1)->get_where($this->table, $where)->row_array();
    }

    public function update($id, $data)
    {
        if(!empty($id) && !empty($data)) {
            $this->db->where('id', $id);
            $this->db->update($this->table, $data);

            return true;
        }
    }

    public function create($data)
    {
        return $this->db->insert($this->table, $data);
    }
}
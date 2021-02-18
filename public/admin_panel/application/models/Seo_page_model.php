<?php
/**
 * Created by PhpStorm.
 * User: MaksymReznichenko
 * Date: 20.08.20
 * Time: 14:23
 */

class Seo_page_model extends CI_Model
{
    private $table = "seo_pages";

    public function __construct()
    {
        $this->load->database();
    }

    public function getPagesData($limit, $offset, $count, $query, $column, $order)
    {
        $this->db->select('*');
        if ($query != '') {
            $this->db->or_where("name LIKE '%$query%'");
            $this->db->or_where("title LIKE '%$query%'");
            $this->db->or_where("url LIKE '%$query%'");
            $this->db->or_where("keywords LIKE '%$query%'");
        }
        if ($column == 0) {
            $this->db->order_by('name', $order);
        } elseif ($column == 1) {
            $this->db->order_by('title', $order);
        } elseif ($column == 2) {
            $this->db->order_by('keywords', $order);
        } elseif ($column == 3) {
            $this->db->order_by('url', $order);
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

    public function create($title, $filename)
    {
        if(!empty($title)) {
            $this->db->insert($this->table, [
                'title' => $title,
                'img' => $filename
            ]);

            return $this->db->insert_id();
        }
    }

    public function delete($id)
    {
        if($id > 0) {
            $this->db->delete($this->table, ['id' => $id]);
            return true;
        }
        return false;
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
}
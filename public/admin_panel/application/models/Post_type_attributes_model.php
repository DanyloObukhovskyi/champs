<?php
/**
 * Created by PhpStorm.
 * User: MaksymReznichenko
 * Date: 20.08.20
 * Time: 14:23
 */

class Post_type_attributes_model extends CI_Model
{
    private $table = "news_type_attributes";

    public function __construct()
    {
        $this->load->database();
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

    public function create($id, $datas)
    {
        if($id > 0 && ! empty($datas)) {
            foreach($datas as $data){
                $this->db->insert($this->table, [
                    'news_type_id' => $id,
                    'attribute_id' => $data['key'],
                    'value' => $data['value']
                ]);
            }
            return true;
        }
    }

    public function delete($id)
    {
        if($id > 0) {
            $this->db->delete($this->table, ['news_type_id' => $id]);
            return true;
        }
        return false;
    }

    public function update($id, $datas)
    {
        if($id > 0 && ! empty($datas)) {
            foreach($datas as $data){
                $settingExist = $this->getOne([
                    'news_type_id' => $id,
                    'attribute_id' => $data['key']
                ]);
                if(!empty($settingExist)){
                    $this->db->where('id', $id);
                    $this->db->update($this->table, [
                        'value' => $data['value']
                    ]);
                } else {
                    $this->db->insert($this->table, [
                        'news_type_id' => $id,
                        'attribute_id' => $data['key'],
                        'value' => $data['value']
                    ]);
                }
            }
            return true;
        }
    }

    public function getOne($where) {
        return $this->db->limit(1)->get_where($this->table, $where)->row_array();
    }
}
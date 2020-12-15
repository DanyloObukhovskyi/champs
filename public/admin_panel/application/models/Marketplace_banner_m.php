<?php


class Marketplace_banner_m extends CI_Model
{
    private $table = 'marketplace_banner';

    private $game_table = 'game';

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
        }
        else {
            $results = [];
            $banners = $result->result_array();

            $this->db->select('*');
            $this->db->from($this->game_table);

            $games = $this->db->get()->result_array();

            foreach ($banners as $banner) {
                $result = $banner;

                foreach ($games as $item) {
                    if ($banner['game_id'] === $item['id']){
                        $result['game'] = $item;
                    }
                }
                $results[] = $result;
            }

            return $results;
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
}
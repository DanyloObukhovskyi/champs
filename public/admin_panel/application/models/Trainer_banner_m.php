<?php


class Trainer_banner_m extends CI_Model
{
    private $table = 'trainer_banner';

    private $links_table = 'trainer_banner_link';

    private $game_table = 'game';

    public $social_types = [
        'vk' => 'Вконтакте',
        'youtube' => 'YouTube',
        'telegram' => 'Телеграм',
        'twitch' => 'Twitch'
    ];

    public function create($data)
    {
        $this->db->insert($this->table, $data);

        return $this->db->insert_id();
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
        $this->db->select($this->table . '.*');
        $this->db->from($this->table);
        $this->db->join('game', "game.id = {$this->table}.game_id", 'left');
        $this->db->where('is_deleted', 0);

        if (!$is_count) {
            $this->db->limit($offset, $length);
        }
        $result = $this->db->get();

        if ($is_count) {
            return $result->num_rows();
        } else {
            $results = [];
            $banners = $result->result_array();

            $this->db->select('*');
            $this->db->from($this->game_table);
            $this->db->where('is_deleted', 0);

            $games = $this->db->get()->result_array();

            foreach ($banners as $banner) {
                $result = $banner;

                $this->db->select('*');
                $this->db->from($this->links_table);
                $this->db->where('trainer_banner_id', $banner['id']);

                $links = $this->db->get()->result_array();

                $result['links'] = $links;

                foreach ($games as $item) {
                    if ($banner['game_id'] === $item['id']) {
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

        return $update['id'];
    }

    public function delete($id)
    {
        $this->db->delete($this->table, array('id' => $id));
    }
}
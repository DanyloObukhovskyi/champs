<?php


class Game_rank extends CI_Model
{
    private $table = "game_rank";

    public function get_by_game($game, $is_count, $offset = 0, $length = null)
    {
        $this->db->select('*');
        $this->db->from($this->table);

        $this->db->where('game', $game);

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
}
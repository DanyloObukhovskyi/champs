<?php


class Game_rank extends CI_Model
{
    private $table = "game_rank";

    public function get_by_game($game, $is_count, $offset = 0, $length = null)
    {
        $this->db->select('*');
        $this->db->from($this->table);

        $this->db->where('game_id', $game);

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

    public function create($data)
    {
        return $this->db->insert($this->table, $data);
    }

    public function getOne($where) {
        return $this->db->limit(1)->order_by('id', 'DESC')->get_where($this->table, $where)->row_array();
    }
}
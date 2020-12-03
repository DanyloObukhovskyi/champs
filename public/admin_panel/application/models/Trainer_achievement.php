<?php


class Trainer_achievement extends CI_Model
{
    private $table = "trainer_achievement";

    public function __construct ()
    {
        $this->load->database();
    }

    public function get_by_trainer_id($trainer_id)
    {
        $this->db->select('*');
        $this->db->from($this->table);

        $this->db->where('trainer_id', $trainer_id);
        $result = $this->db->get();

        return $result->result_array();
    }

    public function delete_records($trainer_id)
    {
        $this->db->from($this->table);

        $this->db->where('trainer_id', $trainer_id);
        $achievements = $this->db->get()->result_array();

        foreach ($achievements as $achievement){
            $this->db->delete($this->table, array('id' => $achievement['id']));
        }
    }

    public function create($trainer_id, $achievement)
    {
        $this->db->insert($this->table, [
            'trainer_id' => $trainer_id,
            'tournament' => $achievement['event'],
            'show' => isset($achievement['show']) ? 1: 0,
            'achievement' => $achievement['achievement']
        ]);
    }
}
<?php


class Trainer_award_model extends CI_Model
{
    private $table = "teachers_award";

    public function get_by_trainer_id($trainer_id)
    {
        $this->db->select('*');
        $this->db->from($this->table);

        $this->db->where('teachers_id', $trainer_id);
        $result = $this->db->get();

        return $result->result_array();
    }

    public function delete_records($trainer_id)
    {
        $this->db->delete($this->table, array('teachers_id' => $trainer_id));
    }

    public function create($trainer_id, $award_id)
    {
        $this->db->insert($this->table, [
            'teachers_id' => $trainer_id,
            'award_id' => $award_id,
        ]);
    }
}
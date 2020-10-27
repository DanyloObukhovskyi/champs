<?php


class Trainer_video extends CI_Model
{
    private $table = "trainer_video";

    public function __construct ()
    {
        $this->load->database();
    }

    public function get_all_for_user($user_id)
    {
        $this->db->select('*');
        $this->db->from($this->table);

        $this->db->where('trainer_id', $user_id);
        $result = $this->db->get();

        return $result->result_array();
    }

    public function deleteRecords($user_id)
    {
        $this->db->select('*');
        $this->db->from($this->table);

        $this->db->where('trainer_id', $user_id);
        $this->db->delete();
    }

    public function create($trainer_id, $video_url)
    {
        $this->db->insert($this->table, ['trainer_id' => $trainer_id, 'video_url' => $video_url]);
    }
}
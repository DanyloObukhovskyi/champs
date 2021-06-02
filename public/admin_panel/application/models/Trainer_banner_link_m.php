<?php


class Trainer_banner_link_m extends CI_Model
{
    private $table = 'trainer_banner_link';

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

    public function update($update)
    {
        $this->db->where('trainer_banner_id', $update['trainer_banner_id']);
        $this->db->where('type', $update['type']);

        $this->db->update($this->table, $update);
    }

    public function update_or_create($data)
    {
        $this->db->select('*');
        $this->db->from($this->table);
        $this->db->where('trainer_banner_id', $data['trainer_banner_id']);
        $this->db->where('type', $data['type']);

        $result = $this->db
            ->get()
            ->result_array();

        if (empty($result) and empty($result[0])) {
            $this->create($data);
        } else {
            $this->update($data);
        }
    }

    public function delete_by_banner_id($banner_id)
    {
        $this->db->delete($this->table, array('trainer_banner_id' => $banner_id));
    }
}
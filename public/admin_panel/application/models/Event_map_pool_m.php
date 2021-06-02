<?php


class Event_map_pool_m extends CI_Model
{
    private $table = "event_map_pool";

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
        $this->db->where('id', $update['id']);
        $this->db->update($this->table, $update);
    }

    public function delete_by_event($event_id)
    {
        $this->db->delete($this->table, array('event_id' => $event_id));
    }

    public function get($where)
    {
        $query = $this->db->get_where($this->table, $where);
        $data = array();
        if ($query !== FALSE && $query->num_rows() > 0) {
            $data = $query->result_array();
        }
        return $data;
    }
}
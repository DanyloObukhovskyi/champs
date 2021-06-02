<?php


class Purse_history_m extends CI_Model
{
    private $table = "purse_history";

    public $statuses = [
        'success' => 'Выплачено',
        'cancel' => 'Отменено',
        'pending' => 'Ожидает выплаты'
    ];

    public function get($is_count, $length = 0, $offset = 1)
    {
        if ($is_count) {
            $this->db->select('*');
            $this->db->from($this->table);

            $result = $this->db->get();
            $result = $result->num_rows();
        } else {
            $result = [];
            $queryString = "SELECT * FROM $this->table LIMIT $length OFFSET $offset";
            $query = $this->db->query($queryString);
            $res = $query->result();

            foreach ($res as $history) {
                $userQueryString =  "SELECT * FROM user where id = {$history->user_id}";
                $history->user = $this->db->query($userQueryString)->result()[0];

                $date = new DateTime($history->datetime);

                $history->date = $date->format('Y-m-d');
                $history->time = $date->format('H:i');

                $result[] = $history;
            }
        }
        return $result;
    }

    public function update($update)
    {
        $this->db->where('id', $update['id']);
        $this->db->update($this->table, $update);
    }
}
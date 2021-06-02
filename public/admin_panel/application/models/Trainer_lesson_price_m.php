<?php


class Trainer_lesson_price_m extends CI_Model
{
    private $table = "trainer_lesson_price";

    public const INDIVIDUAL_TYPE = 'individual';

    public const GROUP_TYPE = 'group';

    public const ANALYTIC_TYPE = 'analytic';

    public const PRICE_TYPES = [
        self::INDIVIDUAL_TYPE => 'Индивидуальная тренировка',
        self::GROUP_TYPE      => 'Групповая тренировка',
        self::ANALYTIC_TYPE   => 'Анализ видео',
    ];

    public function get_by_trainer_id($trainer_id)
    {
        $this->db->select('*');
        $this->db->from($this->table);

        $this->db->where('trainer_id', $trainer_id);
        $result = $this->db->get();

        return $result->result_array();
    }

    public function delete_records($id)
    {
        $this->db->delete($this->table, array('id' => $id));
    }

    public function create_or_update($trainer_id, $lesson_type, $price, $is_active = false)
    {
        $table = $this->table;
        $queryString = "SELECT * FROM $table where trainer_id = '$trainer_id' and lesson_type = '$lesson_type'";
        $query = $this->db->query($queryString);
        $result = $query->result()[0] ?? null;

        if (!empty($result)) {
            $this->db->set('price', $price);
            $this->db->set('is_active', $is_active);

            $this->db->where('id', $result->id);
            $this->db->update($this->table);
        } else {
            $this->db->insert($this->table, [
                'trainer_id' => $trainer_id,
                'lesson_type' => $lesson_type,
                'price' => $price,
                'is_active' => $is_active,
            ]);
        }
    }
}
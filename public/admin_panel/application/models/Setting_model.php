<?php


class Setting_model extends CI_Model
{
    private $table = "setting";

    public const SOCIAL = [
        'vk',
        'discord',
        'youtube',
        'telegram',
        'zen',
        'twitch',
        'instagram',
    ];

    public const TERMS_PAGES = [
        'cookiePolicy',
        'privacyPolicy',
        'termsOfUse',
        'conditionsForOrderingWorkouts',
        'offerPolicy',
        'offerPolicyTrainer',
        'concursRegulation',
    ];

    public const TRAININGS_DESCRIPTION = [
        'trainingIndividualTitle',
        'trainingIndividualText',
        'trainingGroupTitle',
        'trainingGroupText',
        'trainingAnalyticsTitle',
        'trainingAnalyticsText'
    ];

    public const TRAINING_INDIVIDUAL = [
        'title' => 'trainingIndividualTitle',
        'description' => 'trainingIndividualText',
    ];

    public const TRAINING_GROUP = [
        'title' => 'trainingGroupTitle',
        'description' => 'trainingGroupText',
    ];

    public const TRAINING_ANALYTICS = [
        'title' => 'trainingAnalyticsTitle',
        'description' => 'trainingAnalyticsText',
    ];

    public const TRAININGS_TYPES = [
        'individual' => self::TRAINING_INDIVIDUAL,
        'group' => self::TRAINING_GROUP,
        'analytic' => self::TRAINING_ANALYTICS
    ];

    public const ADDRESS = 'contactAddress';

    public const ABOUT = 'about';

    public const VACANCIES = 'vacancies';

    public const PAYMENT_TYPE = 'paymentType';

    public const PAYMENT_TYPES = [
        'yandex' => 'Яндкс касса',
        'interkassa' => 'Interkassa'
    ];

    public function get_social()
    {
        $this->db->select('*');
        $this->db->from($this->table);

        $this->db->where_in('key', self::SOCIAL);
        $result = $this->db->get();

        return $result->result_array();
    }

    public function get_by_key($key)
    {
        $this->db->select('*');
        $this->db->from($this->table);

        $this->db->where('key', $key);
        $result = $this->db->get();

        return $result->result_array();
    }

    public function get_all()
    {
        $settingsIgnore = [
            self::ABOUT,
            self::VACANCIES,
            self::PAYMENT_TYPE,
            self::ADDRESS
        ];

        $this->db->select('*');
        $this->db->from($this->table);
        $this->db->where_not_in('key',
            array_merge(
                self::SOCIAL,
                self::TRAININGS_DESCRIPTION,
                self::TERMS_PAGES,
                $settingsIgnore
            )
        );
        $result = $this->db->get();

        return $result->result_array();
    }

    public function set_by_key($key, $value)
    {
        $this->db->where('key', $key);
        $this->db->update($this->table, ['value' => $value]);
    }

    public function get_terms()
    {
        $this->db->select('*');
        $this->db->from($this->table);
        $this->db->where_in('key',
            self::TERMS_PAGES
        );
        $result = $this->db->get();

        return $result->result_array();
    }

    public function getPagesData($limit, $offset, $count, $query, $column, $order)
    {
        $this->db->select('*');
        if ($query != '') {
            $this->db->or_where("key LIKE '%$query%'");
            $this->db->or_where("title LIKE '%$query%'");
        }
        if ($column == 0) {
            $this->db->order_by('key', $order);
        } elseif ($column == 1) {
            $this->db->order_by('title', $order);
        }

        $this->db->where('is_page', 1);

        if ($count) {
            return count($this->get([]));
        }
        $types = $this->getData([], $limit, $offset);

        return $types;
    }

    public function getData($where, $limit, $offset) {
        $query = $this->db->get_where($this->table, $where, $limit, $offset);
        $data = array();
        if ($query !== FALSE && $query->num_rows() > 0) {
            $data = $query->result_array();
        }
        return $data;
    }

    public function get($where) {
        $query = $this->db->get_where($this->table, $where);
        $data = array();
        if ($query !== FALSE && $query->num_rows() > 0) {
            $data = $query->result_array();
        }
        return $data;
    }

    public function create($title, $filename)
    {
        if(!empty($title)) {
            $this->db->insert($this->table, [
                'title' => $title,
                'img' => $filename
            ]);

            return $this->db->insert_id();
        }
    }

    public function delete($id)
    {
        if($id > 0) {
            $this->db->delete($this->table, ['id' => $id]);
            return true;
        }
        return false;
    }

    public function getOne($where) {
        return $this->db->limit(1)->get_where($this->table, $where)->row_array();
    }

    public function update($id, $data)
    {
        if(!empty($id) && !empty($data)) {
            $this->db->where('id', $id);
            $this->db->update($this->table, $data);

            return true;
        }
    }
}
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

    public const ABOUT = 'about';

    public const VACANCIES = 'vacancies';

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
        $this->db->select('*');
        $this->db->from($this->table);
        $this->db->where_not_in('key',
            array_merge(
                self::SOCIAL,
                self::TRAININGS_DESCRIPTION,
                self::TERMS_PAGES,
                [self::ABOUT],
                [self::VACANCIES]
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
}
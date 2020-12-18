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

    public const MARKETPLACE_BANNER = [
        'marketplaceBanner',
        'marketplaceBannerTitle',
        'marketplaceBannerText',
    ];

    public const MARKETPLACE_BANNER_LINKS = [
        'marketplaceBannerVk',
        'marketplaceBannerYoutube',
        'marketplaceBannerTelegram',
        'marketplaceBannerTwitch'
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
            self::MARKETPLACE_BANNER,
                self::TRAININGS_DESCRIPTION,
                self::MARKETPLACE_BANNER_LINKS
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
}
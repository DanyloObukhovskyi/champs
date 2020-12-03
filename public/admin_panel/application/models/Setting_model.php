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

    public const BANNER = [
        'bannerText',
        'bannerImage',
        'bannerUrl'
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
        $this->db->where_not_in('key',  array_merge(self::SOCIAL, self::BANNER));

        $result = $this->db->get();

        return $result->result_array();
    }

    public function set_by_key($key, $value)
    {
        $this->db->where('key', $key);
        $this->db->update($this->table, ['value' => $value]);
    }
}
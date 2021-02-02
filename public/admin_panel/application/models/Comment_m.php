<?php


class Comment_m extends CI_Model
{
    public const TYPES = [
        'matches' => self::MATCHES_COMMENT_TABLE,
        'news' => self::NEWS_COMMENT_TABLE,
        'reviews' => self::TRAINER_REVIEWS
    ];

    public const MATCHES_COMMENT_TABLE = 'match_comment';

    public const NEWS_COMMENT_TABLE = 'news_comment';

    public const TRAINER_REVIEWS = 'review';

    public function get_paginate($table, $is_count, $offset = 0, $length = null)
    {
        $this->db->select('*');
        $this->db->from($table);

        if (!$is_count) {
            $this->db->limit($offset, $length);
        }
        $result = $this->db->get();
        if ($is_count) {
            return $result->num_rows();
        }
        else {
            return $result->result_array();
        }
    }

    public function update($table, $update)
    {
        $this->db->where('id', $update['id']);
        $this->db->update($table, $update);
    }

    public function delete($table, $id)
    {
        $this->db->delete($table, array('id' => $id));
    }
}
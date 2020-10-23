<?php


class Post_tags_model extends CI_Model
{
    private $table = "news_tag";

    public function __construct ()
    {
        $this->load->database();
    }

    public function get_by_post_id($post_id)
    {
        $this->db->select('*');
        $this->db->from($this->table);
        $this->db->where('news_id', $post_id);

        $result = $this->db->get();

        return $result->result_array();
    }

    public function tags_to_string($tags)
    {
        $string = '';

        foreach ($tags as $num => $tag)
        {
            if ($num === 0){
                $string .= $tag['title'];
            } else {
                $string .= ','. $tag['title'];
            }
        }
        return $string;
    }

    public function delete_by_post_id($post_id)
    {
        $this->db->select('*');
        $this->db->from($this->table);
        $this->db->where('news_id', $post_id);

        return $this->db->delete();
    }

    public function create_tag($post_id, $title)
    {
        $this->db->insert($this->table, [
            'news_id' => $post_id,
            'title' => $title
        ]);
    }
}
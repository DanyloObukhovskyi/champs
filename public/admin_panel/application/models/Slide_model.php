<?php


class Slide_model extends CI_Model
{
    private $table = "slide";

    public const HOME_TYPE = 'home';

    public const HOME_CS_TYPE = 'homeCs';

    public const GENERAL_TYPE = 'general';

    public function get_all_slides()
    {
        $this->db->select('*');
        $this->db->from($this->table);

        return $this->db
            ->get()
            ->result_array();
    }

    public function delete_slide($id)
    {
        $this->db->select('*');
        $this->db->from($this->table);

        $this->db->where('id', $id);
        $this->db->delete();
    }

    public function create($url, $type, $text, $img, $parent_id = null)
    {
        if (empty($type)){
            $type = self::GENERAL_TYPE;
        }

        $this->db->insert($this->table, [
            'parent_id' => $parent_id,
            'url' => $url,
            'img' => $img,
            'text' => $text,
            'type' => $type
        ]);
    }

    public function update($id, $url, $text, $img, $parent_id = null)
    {
        $this->db->set('url', $url);
        $this->db->set('text', $text);

        if (isset($img)){
            $this->db->set('img', $img);
        }
        if (isset($parent_id)){
            $this->db->set('parent_id', $parent_id);
        }
        $this->db->where('id', $id);
        $this->db->update($this->table);
    }
}
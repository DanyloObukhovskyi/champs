<?php


class Event_model extends CI_Model
{
    private $table = [
        "events" => "event",
        "related_events" => "related_event",
        "event_groups" => "event_group",
        "events_show" => "event_show",
        "events_team_attending" => "event_team_attending",
        "events_prize_distribution" => "event_prize_distribution",
        "events_map_pool" => "event_map_pool",
        "events_bracket"  => "event_bracket",
        "matchs" => "match",
        "teams" => "team"
    ];

    const STATUS_ALL = 'all';

    const STATUS_PRO = 'pro';

    const STATUSES = [
        self::STATUS_PRO => 'PRO',
        self::STATUS_ALL => 'ВСЕ'
    ];

    public function create($data)
    {
        $this->db->insert($this->table['events'], $data);

        return $this->db->insert_id();
    }

    public function update($id, $update)
    {
        $this->db->where('id', $id);

        return $this->db->update($this->table['events'], $update);
    }

    public function get_by_id($id)
    {
        $this->db->select('*');
        $this->db->from($this->table['events']);
        $this->db->where('id', $id);

        $result = $this->db->get();

        return $result->result_array()[0] ?? null;
    }

    public function get_paginate($is_count, $offset = 0, $length = null)
    {
        $this->db->select('*');
        $this->db->from($this->table['events']);

        if (!$is_count) {
            $this->db->limit($offset, $length);
        }
        $result = $this->db->get();
        if ($is_count) {
            return $result->num_rows();
        } else {
            return $result->result_array();
        }
    }

    public function deleteWithGameId($id)
    {
        $this->db->delete($this->table['events'], array('game_id' => $id));
    }

    public function getEventData($limit, $offset, $count, $query, $column, $order)
    {
        $this->db->select('*');
        if ($query != '') {
            $this->db->where("(id LIKE '%$query%'");
            $this->db->or_where("name LIKE '%$query%'");
            $this->db->or_where("started_at LIKE '%$query%'");
            $this->db->or_where("ended_at LIKE '%$query%'");
            $this->db->or_where("prize LIKE '%$query%'");
            $this->db->or_where("location LIKE '%$query%'");
        }
        if ($column == 0) {
            $this->db->order_by('id', $order);
        } elseif ($column == 1) {
            $this->db->order_by('name', $order);
        } elseif ($column == 2) {
            $this->db->order_by('started_at', $order);
        } elseif ($column == 3) {
            $this->db->order_by('ended_at', $order);
        } elseif ($column == 4) {
            $this->db->order_by('prize', $order);
        } elseif ($column == 5) {
            $this->db->order_by('location', $order);
        }
        if ($count) {
            return count($this->get([]));
        }
        $types = $this->getData([], $limit, $offset);

        return $types;
    }

    public function getData($where, $limit, $offset) {
        $query = $this->db->get_where($this->table['events'], $where, $limit, $offset);
        $data = array();
        if ($query !== FALSE && $query->num_rows() > 0) {
            $data = $query->result_array();
        }
        return $data;
    }

    public function get($where) {
        $query = $this->db->get_where($this->table['events'], $where);
        $data = array();
        if ($query !== FALSE && $query->num_rows() > 0) {
            $data = $query->result_array();
        }
        return $data;
    }

    public function delete($id)
    {
        $this->db->delete($this->table['event_groups'], array('event_id' => $id));
        $this->db->delete($this->table['events_show'], array('event_id' => $id));
        $this->db->delete($this->table['related_events'], array('event_id' => $id));
        $this->db->delete($this->table['events_team_attending'], array('event_id' => $id));
        $this->db->delete($this->table['events_prize_distribution'], array('event_id' => $id));
        $this->db->delete($this->table['events_map_pool'], array('event_id' => $id));
        $this->db->delete($this->table['events_bracket'], array('event_id' => $id));
        $this->db->delete($this->table['matchs'], array('event_id' => $id));
        $this->db->delete($this->table['events'], array('id' => $id));
    }

    public function get_prize_distribution($event_id)
    {
        $this->db->select('*');
        $this->db->from($this->table['events_prize_distribution']);
        $this->db->where('event_id', $event_id);
        //$this->db->join('team', 'event_prize_distribution.team_id = team.id');

        $result = $this->db->get();
        $event_prize_distributions = $result->result_array();

        $data = [];
        foreach ($event_prize_distributions as $event_prize_distribution) {

            $this->db->select('*');
            $this->db->from($this->table['teams']);
            $this->db->where('id', $event_prize_distribution['team_id']);
            $result = $this->db->get();

            $team = $result->result_array()[0] ?? null;

            $event_prize_distribution['team'] = $team;
            $data[] = $event_prize_distribution;
        }
        return $data;
    }
}
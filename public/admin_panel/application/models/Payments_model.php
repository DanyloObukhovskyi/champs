<?php
class Payments_model extends CI_Model {

    private $table = "payment";

    public function __construct()
    {
        $this->load->database();
    }

    public function getPaymentsData($limit, $offset, $count, $query, $column, $order)
    {

        $this->db->select('payment.id, 
                           payment.created_at, 
                           user.nickname as student_nickname,
                           user.name as student_name,
                           user.id as user_id, 
                           trainer.nickname  as trainer_nickname,  
                           payment.yandex_kassa_id, 
                           lessons.student_id, 
                           payment.yandex_data, 
                           lessons.date_time_from, 
                           lessons.cost as total_price, 
                           refund.amount as refund_amount');
        $this->db->join("lessons", "payment.lesson_id = lessons.id");
        $this->db->join("user as trainer", "lessons.trainer_id = trainer.id" );
        $this->db->join("user", "lessons.student_id = user.id" );
        $this->db->join("refund", "payment.id = refund.payment_id", "left");

//        $this->db->last_query()
        $this->db->where("payment.payment_status", 1);
        if ($query != '') {
            $this->db->where("(user.nickname LIKE '%$query%'");
            $this->db->or_where("trainer.nickname LIKE '%$query%'");
            $this->db->or_where("payment.id LIKE '%$query%')");
        }


        if ($column == 0) {
            $this->db->order_by("payment.id", $order);
        } elseif ($column == 1) {
            $this->db->order_by("trainer.nickname", $order);
        } elseif ($column == 2) {
            $this->db->order_by("lessons.date_time_from", $order);
        } elseif ($column == 3) {
            $this->db->order_by("user.nickname", $order);
        }

        if ($count) {
            return count($this->get([]));
        }

        $payments = $this->getData([], $limit, $offset);

        return $payments;
    }

    public function getPaymentsData1($limit, $offset, $where = array(), $count = false)
    {

        $this->db->select('payment.id, user.nickname, payment.created_at, payment.yandex_kassa_id, lessons.student_id, payment.yandex_data, lessons.date_time_from');
        $this->db->from("payment");
        $this->db->join("lessons", "payment.lesson_id = lessons.id");
        $this->db->join("user", "lessons.trainer_id = user.id");

        if (!empty($where['id'])) {
            $this->db->where('id', $where['id']);
        }

        if ($count) {
            return count($this->get([]));
        }
        $payments = $this->getData([], $limit, $offset);

        return $payments;
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

    public function getNotRelatedPaymentsData($limit, $offset, $count, $query, $column, $order)
    {

        $this->db->select('payment.id, 
                           payment.created_at, 
                           user.nickname as student_nickname,
                           user.name as student_name,
                           user.id as user_id, 
                           trainer.nickname  as trainer_nickname,  
                           payment.yandex_kassa_id, 
                           lessons.student_id, 
                           payment.yandex_data, 
                           lessons.date_time_from, 
                           lessons.cost as total_price, 
                           refund.amount as refund_amount');
        $this->db->join("lessons", "payment.lesson_id = lessons.id");
        $this->db->join("user as trainer", "lessons.trainer_id = trainer.id" );
        $this->db->join("user", "lessons.student_id = user.id" );
        $this->db->join("refund", "payment.id = refund.payment_id", "left");

//        $this->db->last_query()

        if ($query != '') {
            $this->db->where("(user.nickname LIKE '%$query%'");
            $this->db->or_where("trainer.nickname LIKE '%$query%'");
            $this->db->or_where("payment.id LIKE '%$query%')");
        }

        $this->db->where("payment.payment_status == 2");
        $this->db->orWhere("payment.payment_status == 0 and payment.created_at <= date('". date('Y-m-d H:i:s', strtotime('- 20 minutes'))."')");


        if ($column == 0) {
            $this->db->order_by("payment.id", $order);
        } elseif ($column == 1) {
            $this->db->order_by("trainer.nickname", $order);
        } elseif ($column == 2) {
            $this->db->order_by("lessons.date_time_from", $order);
        } elseif ($column == 3) {
            $this->db->order_by("user.nickname", $order);
        }

        if ($count) {
            return count($this->get([]));
        }

        $payments = $this->getData([], $limit, $offset);

        return $payments;
    }
}
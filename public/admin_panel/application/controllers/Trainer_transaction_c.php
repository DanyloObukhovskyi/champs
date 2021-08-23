<?php

defined('BASEPATH') or exit('No direct script access allowed');

class Trainer_transaction_c extends CI_Controller
{
    private $post_per_page = 10;

    public function __construct()
    {
        parent::__construct();
        if (!$this->ion_auth->logged_in()) {
            redirect('login/auth');
            die();
        }

        $this->UserID = $this->ion_auth->get_user_id();
        if ($this->UserID == 0) {
            redirect('login/auth');
            die();
        }
        $this->load->model(array(
            'purse_history_m',
            'users_model',
            'purse_history_blog_m'
        ));
    }

    public function index()
    {
        $data = [];

        $data['roles'] = json_decode($this->users_model->get_capabilities($this->UserID)[0]['roles'])[0];
        $data['user'] = $this->ion_auth->user()->row();
        $data['output'] = $this->load->view('home/trainer_transaction', $data, true);
        return $this->load->view('layout/home', $data);
    }

    public function indexBlog()
    {
        $data = [];

        $data['roles'] = json_decode($this->users_model->get_capabilities($this->UserID)[0]['roles'])[0];
        $data['user'] = $this->ion_auth->user()->row();
        $data['output'] = $this->load->view('home/payment_for_blogs', $data, true);
        return $this->load->view('layout/home', $data);
    }

    public function ajax()
    {
        $data = [
            'transactions' => [],
            'transactions_count' => 0,
            'limit' => $this->post_per_page,
            'statuses' => $this->purse_history_m->statuses
        ];
        if(isset($_POST['page'])){

            $offset = $this->post_per_page * ((int)$_POST['page'] - 1);

            $data['transactions_count'] = $this->purse_history_m
                ->get(true);
            $data['transactions'] = $this->purse_history_m
                ->get(
                    false,
                    $this->post_per_page,
                    $offset
                );
        }
        echo json_encode($data);
    }

    public function ajaxBlog()
    {
        $data = [
            'transactions' => [],
            'transactions_count' => 0,
            'limit' => $this->post_per_page,
            'statuses' => $this->purse_history_blog_m->statuses
        ];
        if(isset($_POST['page'])){

            $offset = $this->post_per_page * ((int)$_POST['page'] - 1);

            $data['transactions_count'] = $this->purse_history_blog_m
                ->get(true);
            $data['transactions'] = $this->purse_history_blog_m
                ->get(
                    false,
                    $this->post_per_page,
                    $offset
                );
        }
        echo json_encode($data);
    }

    public function save()
    {
        if (isset($_POST['transactions'])) {
            $transactions = json_decode($_POST['transactions'], true);
            foreach ($transactions as $transaction) {
                unset($transaction['user'], $transaction['date'], $transaction['time']);

                $this->purse_history_m->update($transaction);
            }
        }
        echo 'ok';
    }

    public function saveBlog()
    {
        if (isset($_POST['transactions'])) {
            $transactions = json_decode($_POST['transactions'], true);
            foreach ($transactions as $transaction) {
                unset($transaction['user'], $transaction['date'], $transaction['time']);

                $this->purse_history_blog_m->update($transaction);
            }
        }
        echo 'ok';
    }
}
<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Referral_c extends CI_Controller
{
    private $per_page = 10;

    public function __construct ()
    {
        parent::__construct ();
        if (!$this->ion_auth->logged_in ()) {
            redirect ('login/auth');
            die();
        }

        $this->UserID = $this->ion_auth->get_user_id ();
        if ($this->UserID == 0) {
            redirect ('login/auth');
            die();
        }
        $this->load->model(array(
            'users_model',
            'referral_link_m',
            'game_m'
        ));
    }

    public function index()
    {
        $data = [];

        $data['games'] = $this->game_m->get_all();
        $data['output'] = $this->load->view('home/referral', $data, true);
        $this->load->view('layout/home', $data);
    }

    public function ajax()
    {
        $data = [
            'links' => [],
            'links_count' => 0,
            'limit' => $this->per_page
        ];
        if(isset($_POST['page'])){
            $offset = $this->per_page * ((int)$_POST['page'] - 1);

            $data['links_count'] = $this->referral_link_m
                ->get_paginate(true);

            $data['links'] = $this->referral_link_m
                ->get_paginate(
                    false,
                    $this->per_page,
                    $offset
                );
        }
        echo json_encode($data);
    }

    public function save()
    {
        $data = [];
        if (isset($_POST['id'])) {
            $data['id'] = $_POST['id'];
        }
        if (isset($_POST['title'])) {
            $data['title'] = $_POST['title'];
        }
        if (isset($_POST['link'])) {
            $data['link'] = $_POST['link'];
        }
        if (isset($_POST['game'])) {
            $data['game_id'] = $_POST['game'];
        }
        if (isset($_POST['type'])) {
            $data['type'] = $_POST['type'];
        }

        if (isset($_POST['id'])) {
            $this->referral_link_m->update($data);
        } else {
            $this->referral_link_m->create($data);
        }
    }


    public function delete($id)
    {
        $this->referral_link_m->delete($id);

        redirect('c-admin/referral');
        die();
    }
}
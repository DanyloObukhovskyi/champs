<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Game_c extends CI_Controller
{
    private $games_per_page = 10;

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
            'game_m',
            'posts_model',
            'referral_link_m',
            'marketplace_banner_m',
            'event_model'
        ));
    }

    public function index()
    {
        $data = [];
        $data['images_url'] = $this->config->item('main_url').$this->config->item('display_game-pic');
        $data['roles'] = json_decode($this->users_model->get_capabilities($this->UserID)[0]['roles'])[0];
        $data['user'] = $this->ion_auth->user()->row();

        $data['output'] = $this->load->view('home/games', $data, true);
        $this->load->view('layout/home', $data);
    }

    public function ajax()
    {
        $data = [
            'games' => [],
            'games_count' => 0,
            'limit' => $this->games_per_page
        ];
        if(isset($_POST['page'])){
            $offset = $this->games_per_page * ((int)$_POST['page'] - 1);

            $data['games_count'] = $this->game_m
                ->get_paginate(true);

            $data['games'] = $this->game_m
                ->get_paginate(
                    false,
                    $this->games_per_page,
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
        if (isset($_POST['name'])) {
            $data['name'] = $_POST['name'];
        }
        if (isset($_POST['code'])) {
            $data['code'] = $_POST['code'];
        }
        if (isset($_POST['is_marketplace'])) {
            if($_POST['is_marketplace'] === 'on'){
                $data['is_marketplace'] = 1;
            } else {
                $data['is_marketplace'] = 0;
            }
        } else {
            $data['is_marketplace'] = 0;
        }
        if (isset($_POST['show_rank'])) {
            if($_POST['show_rank'] === 'on'){
                $data['show_rank'] = 1;
            } else {
                $data['show_rank'] = 0;
            }
        } else {
            $data['show_rank'] = 0;
        }
        if (!empty($_FILES['logo']["name"])) {
            $data['logo'] = $this->uploadFile('logo');
        }
        if (!empty($_FILES['sidebar_icon']["name"])) {
            $data['sidebar_icon'] = $this->uploadFile('sidebar_icon');
        }
        if (!empty($_FILES['news_icon']["name"])) {
            $data['news_icon'] = $this->uploadFile('news_icon');
        }
        if (!empty($_FILES['event_icon']["name"])) {
            $data['event_icon'] = $this->uploadFile('event_icon');
        }
        if (isset($_POST['id'])) {
            $this->game_m->update($data);
        } else {
            $this->game_m->create($data);
        }
    }

    public function uploadFile($file)
    {
        $config['upload_path'] = PUBLICPATH.'/'.$this->config->item('upload_game-pic');
        if (!file_exists(PUBLICPATH.'/uploads')) {
            mkdir(PUBLICPATH.'/uploads', 0777);
        }
        if (!file_exists($config['upload_path'])) {
            mkdir($config['upload_path'], 0777);
        }
        $config['allowed_types'] = 'jpeg|jpg|png|svg';

        $this->load->library('upload', $config);
        $bytes = random_bytes(11);
        $ext = explode(".", $_FILES[$file]["name"]);
        $ext = array_pop($ext);
        $fileName = bin2hex($bytes) . "." . $ext;

        $_FILES[$file]["name"] = $fileName;

        $path = PUBLICPATH.'/'.$this->config->item('upload_game-pic') . $fileName;
        if (!file_exists(PUBLICPATH.'/uploads')) {
            mkdir(PUBLICPATH.'/uploads', 0777);
        }
        if (!file_exists(PUBLICPATH.$this->config->item('upload_game-pic'))) {
            mkdir(PUBLICPATH.$this->config->item('upload_game-pic'), 0777);
        }
        move_uploaded_file($_FILES[$file]['tmp_name'], $path);

        return $fileName;
    }

    public function delete($id)
    {
        $this->game_m->delete($id);

        redirect('c-admin/games');
        die();
    }
}
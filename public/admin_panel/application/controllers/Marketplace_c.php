<?php


class Marketplace_c extends CI_Controller
{
    private $banners_per_page = 10;

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
            'marketplace_banner_m',
            'game_m'
        ));
    }

    public function index()
    {
        $data = [];
        $data['images_url'] = $this->config->item('display_marketplace_banner-pic');

        $data['games'] = $this->game_m->get_all();
        $data['output'] = $this->load->view('home/marketplacebanners', $data, true);
        $this->load->view('layout/home', $data);
    }

    public function ajax()
    {
        $data = [
            'games' => [],
            'banners_count' => 0,
            'limit' => $this->banners_per_page
        ];
        if(isset($_POST['page'])){
            $offset = $this->banners_per_page * ((int)$_POST['page'] - 1);

            $data['banners_count'] = $this->marketplace_banner_m
                ->get_paginate(true);

            $data['banners'] = $this->marketplace_banner_m
                ->get_paginate(
                    false,
                    $this->banners_per_page,
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
        if (isset($_POST['text'])) {
            $data['text'] = $_POST['text'];
        }
        if (isset($_POST['game'])) {
            $data['game_id'] = $_POST['game'];
        }
        if (!empty($_FILES["img"]["name"])) {
            $config['upload_path'] = $this->config->item('upload_marketplace_banner-pic');
            $config['allowed_types'] = 'jpeg|jpg|png|svg';

            $this->load->library('upload', $config);
            $bytes = random_bytes(11);
            $ext = explode(".", $_FILES["img"]["name"]);
            $ext = array_pop($ext);
            $fileName = bin2hex($bytes) . "." . $ext;

            $_FILES["img"]["name"] = $fileName;

            if (!$this->upload->do_upload('img')) {
                $error = array('error' => $this->upload->display_errors());
            }
            if ($ext === 'svg') {
                $path = $this->config->item('upload_marketplace_banner-pic') . $fileName;
                move_uploaded_file($_FILES['img']['tmp_name'], $path);
            }

            $data['img'] = $fileName;

            if (isset($_POST['id'])) {
                $this->marketplace_banner_m->update($data);
            } else {
                $this->marketplace_banner_m->create($data);
            }
        }

        if (isset($_POST['id'])) {
            $this->marketplace_banner_m->update($data);
        }
    }

    public function delete($id)
    {
        $this->marketplace_banner_m->delete($id);

        redirect('c-admin/marketplace/banners');
        die();
    }
}
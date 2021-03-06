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
            'trainer_banner_m',
            'trainer_banner_link_m',
            'game_m'
        ));
    }

    public function marketplace_banners()
    {
        $data = [];
        $data['images_url'] = $this->config->item('main_url').$this->config->item('display_marketplace_banner-pic');

        $data['games'] = $this->game_m->get_all();
        $data['roles'] = json_decode($this->users_model->get_capabilities($this->UserID)[0]['roles'])[0];
        $data['user'] = $this->ion_auth->user()->row();
        $data['output'] = $this->load->view('home/marketplacebanners', $data, true);

        $this->load->view('layout/home', $data);
    }

    public function marketplace_banners_ajax()
    {
        $data = [
            'banners' => [],
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

    public function marketplace_banners_save()
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
            $config['upload_path'] = PUBLICPATH.'/'.$this->config->item('upload_marketplace_banner-pic');
            if (!file_exists(PUBLICPATH.'/uploads')) {
                mkdir(PUBLICPATH.'/uploads', 0777);
            }
            if (!file_exists($config['upload_path'])) {
                mkdir($config['upload_path'], 0777);
            }
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
                $path = PUBLICPATH.'/'.$this->config->item('upload_marketplace_banner-pic') . $fileName;
                if (!file_exists(PUBLICPATH.'/uploads')) {
                    mkdir(PUBLICPATH.'/uploads', 0777);
                }
                if (!file_exists(PUBLICPATH.'/'.$this->config->item('upload_marketplace_banner-pic'))) {
                    mkdir(PUBLICPATH.'/'.$this->config->item('upload_marketplace_banner-pic'), 0777);
                }
                move_uploaded_file($_FILES['img']['tmp_name'], $path);
            }

            $data['img'] = $fileName;
        }

        if (isset($_POST['id'])) {
            $this->marketplace_banner_m->update($data);
        } else {
            $this->marketplace_banner_m->create($data);
        }
    }

    public function marketplace_banners_delete($id)
    {
        $this->marketplace_banner_m->delete($id);

        redirect('c-admin/marketplace/banners');
        die();
    }

    public function trainers_banners()
    {
        $data = [];
        $data['images_url'] = $this->config->item('main_url').$this->config->item('display_marketplace_banner-pic');

        $data['games'] = $this->game_m->get_all();
        $data['roles'] = json_decode($this->users_model->get_capabilities($this->UserID)[0]['roles'])[0];
        $data['user'] = $this->ion_auth->user()->row();
        $data['output'] = $this->load->view('home/trainerbanners', $data, true);
        $this->load->view('layout/home', $data);
    }

    public function trainers_banners_ajax()
    {
        $data = [
            'games' => [],
            'banners_count' => 0,
            'limit' => $this->banners_per_page,
            'link_types' => $this->trainer_banner_m->social_types
        ];
        if(isset($_POST['page'])){
            $offset = $this->banners_per_page * ((int)$_POST['page'] - 1);

            $data['banners_count'] = $this->trainer_banner_m
                ->get_paginate(true);

            $data['banners'] = $this->trainer_banner_m
                ->get_paginate(
                    false,
                    $this->banners_per_page,
                    $offset
                );
        }
        echo json_encode($data);
    }

    public function trainers_banners_save()
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
            $config['upload_path'] = PUBLICPATH.'/'.$this->config->item('upload_marketplace_banner-pic');
            if (!file_exists(PUBLICPATH.'/uploads')) {
                mkdir(PUBLICPATH.'/uploads', 0777);
            }
            if (!file_exists($config['upload_path'])) {
                mkdir($config['upload_path'], 0777);
            }
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
                $path = PUBLICPATH.'/'.$this->config->item('upload_marketplace_banner-pic') . $fileName;
                if (!file_exists(PUBLICPATH.'/uploads')) {
                    mkdir(PUBLICPATH.'/uploads', 0777);
                }
                if (!file_exists(PUBLICPATH.'/'.$this->config->item('upload_marketplace_banner-pic'))) {
                    mkdir(PUBLICPATH.'/'.$this->config->item('upload_marketplace_banner-pic'), 0777);
                }
                move_uploaded_file($_FILES['img']['tmp_name'], $path);
            }

            $data['img'] = $fileName;
        }

        if (isset($_POST['id'])) {
            $bannerId = $_POST['id'];
        } else {
            $bannerId = $this->trainer_banner_m->create($data);
        }
        if (isset($_POST['links'])) {
            foreach ($this->trainer_banner_m->social_types as $type => $title){
                if (isset($_POST['links'][$type]) and !empty($_POST['links'][$type])) {
                    $bannerLink = [];
                    $bannerLink['trainer_banner_id'] = $bannerId;
                    $bannerLink['type'] = $type;
                    $bannerLink['link'] = $_POST['links'][$type];

                    $this->trainer_banner_link_m->update_or_create($bannerLink);
                }
            }
        }
        if (isset($_POST['chanel_name'])) {
            foreach ($this->trainer_banner_m->social_types as $type => $title){
                if (isset($_POST['chanel_name'][$type]) and !empty($_POST['chanel_name'][$type])) {
                    $bannerLink = [];
                    $bannerLink['trainer_banner_id'] = $bannerId;
                    $bannerLink['type'] = $type;
                    $bannerLink['chanel_name'] = $_POST['chanel_name'][$type];

                    $this->trainer_banner_link_m->update_or_create($bannerLink);
                }
            }
        }
        if (isset($_POST['id'])) {
            $this->trainer_banner_m->update($data);
        }
    }

    public function trainers_banners_delete($id)
    {
        $this->trainer_banner_link_m->delete_by_banner_id($id);
        $this->trainer_banner_m->delete($id);

        redirect('c-admin/trainers/banners');
        die();
    }
}
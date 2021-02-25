<?php


class Award_c extends CI_Controller
{
    private $award_per_page = 10;

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
            'users_model',
            'award_model'
        ));
    }

    public function index()
    {
        $data = [];
        $data['images_url'] = $this->config->item('main_url').$this->config->item('main_url').$this->config->item('display_trainers_awards-pic');
        $data['roles'] = json_decode($this->users_model->get_capabilities($this->UserID)[0]['roles'])[0];

        $data['output'] = $this->load->view('home/awards', $data, true);
        return $this->load->view('layout/home', $data);
    }

    public function ajax()
    {
        $data = [
            'awards' => [],
            'awards_count' => 0,
            'limit' => $this->award_per_page
        ];
        if(isset($_POST['page'])){
            $offset = $this->award_per_page * ((int)$_POST['page'] - 1);

            $data['awards_count'] = $this->award_model
                ->get_paginate(true);

            $data['awards'] = $this->award_model
                ->get_paginate(
                    false,
                    $this->award_per_page,
                    $offset
                );
        }
        echo json_encode($data);
    }

    public function save()
    {
        if (isset($_POST['text']) and isset($_FILES['icon'])){
            $data = [
                'text' => $_POST['text']
            ];
            if (isset($_POST['id'])){
                $data['id'] = $_POST['id'];
            }
            if (!empty($_FILES["icon"]["name"])) {
                $config['upload_path'] = PUBLICPATH.'/'.$this->config->item('upload_trainers_awards-pic');
                if (!file_exists(PUBLICPATH.'/uploads')) {
                    mkdir(PUBLICPATH.'/uploads', 0777);
                }
                if (!file_exists($config['upload_path'])) {
                    mkdir($config['upload_path'], 0777);
                }
                $config['allowed_types'] = 'jpeg|jpg|png|svg';
                $config['max_width'] = 44;
                $config['max_height'] = 50;

                $this->load->library('upload', $config);
                $bytes = random_bytes(11);
                $ext = explode(".", $_FILES["icon"]["name"]);
                $ext = array_pop($ext);
                $fileName = bin2hex($bytes) . "." . $ext;

                $_FILES["icon"]["name"] = $fileName;
                if (!$this->upload->do_upload('icon')) {
                    $error = array('error' => $this->upload->display_errors());
                }
                if ($ext === 'svg') {
                    $path = PUBLICPATH.'/'.$this->config->item('upload_trainers_awards-pic') . $fileName;
                    if (!file_exists(PUBLICPATH.'/uploads')) {
                        mkdir(PUBLICPATH.'/uploads', 0777);
                    }
                    if (!file_exists(PUBLICPATH.$this->config->item('upload_trainers_awards-pic'))) {
                        mkdir(PUBLICPATH.$this->config->item('upload_trainers_awards-pic'), 0777);
                    }
                    move_uploaded_file($_FILES['icon']['tmp_name'], $path);
                }

                $data['icon'] = $fileName;

                if (isset($_POST['id'])){
                    $this->award_model->update($data);
                } else {
                    $this->award_model->create($data);
                }
            }
        }
    }

    public function delete($id)
    {
        $this->award_model->delete($id);

        redirect('c-admin/awards');
        die();
    }
}
<?php
defined('BASEPATH') or exit('No direct script access allowed');


class Event_c extends CI_Controller
{
    private $per_page = 10;

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
            'event_model',
            'flag_model',
            'game_m'
        ));
    }

    public function index()
    {
        $data = [];
        $data['images_url'] = $this->config->item('display_event-pic');
        $data['roles'] = json_decode($this->users_model->get_capabilities($this->UserID)[0]['roles'])[0];

        $data['output'] = $this->load->view('home/events', $data, true);
        $this->load->view('layout/home', $data);
    }

    public function ajax()
    {
        $data = [
            'events' => [],
            'events_count' => 0,
            'limit' => $this->per_page
        ];
        if (isset($_POST['page'])) {
            $offset = $this->per_page * ((int)$_POST['page'] - 1);

            $data['events_count'] = $this->event_model
                ->get_paginate(true);

            $data['events'] = $this->event_model
                ->get_paginate(
                    false,
                    $this->per_page,
                    $offset
                );
        }
        echo json_encode($data);
    }

    public function edit($id=0)
    {
        $data = [];
        $event = $this->event_model->get_by_id($id);
        $data['images_url'] = $this->config->item('display_event-pic');
        $data['statuses'] = Event_model::STATUSES;
        $data['games'] = $this->game_m->get_all();

        if (isset($event)) {
            $data['event'] = $event;
        } else {
            redirect(base_url('c-admin/events/'));
        }
        if (isset($_POST['edit'])) {
            $upload_data = [];
            $upload_data['name'] = isset($_POST['name']) ? $_POST['name'] : '';
            $upload_data['prize'] = isset($_POST['prize']) ? $_POST['prize'] : '';
            $upload_data['location'] = isset($_POST['location']) ? $_POST['location'] : '';
            $upload_data['command_count'] = isset($_POST['command_count']) ? $_POST['command_count'] : null;
            $upload_data['url'] = isset($_POST['url']) ? $_POST['url'] : '';
            $upload_data['flag_icon_id'] = !empty($_POST['flag_icon_id']) ? $_POST['flag_icon_id'] : null;
            $upload_data['started_at'] = isset($_POST['started_at']) ? $_POST['started_at'] : null;
            $upload_data['ended_at'] = isset($_POST['ended_at']) ? $_POST['ended_at'] : null;
            $upload_data['status'] = isset($_POST['status']) ? $_POST['status'] : null;
            $upload_data['game_id'] = isset($_POST['game_id']) ? $_POST['game_id'] : null;
            $upload_data['is_online'] = isset($_POST['is_online']) ? (int)$_POST['is_online'] : 0;

            $upload_data['image'] = null;
            $upload_data['image_header'] = null;

            if (isset($upload_data['started_at'])) {
                $upload_data['started_at'] = (new DateTime($upload_data['started_at']))->format('Y-m-d');
            }
            if (isset($upload_data['ended_at'])) {
                $upload_data['ended_at'] = (new DateTime($upload_data['ended_at']))->format('Y-m-d');
            }
            if (!empty($_FILES["image"]["name"])) {
                $upload_data['image'] = $this->uploadImage('image');
            }
            if (!empty($_FILES["image_header"]["name"])) {
                $upload_data['image_header'] = $this->uploadImage('image_header');
            }
            $event_id = $this->event_model->update($id, $upload_data);

            redirect(base_url('c-admin/events/edit/'. $id));
        }

        $data['flags'] = $this->flag_model->get_all();
        $data['roles'] = json_decode($this->users_model->get_capabilities($this->UserID)[0]['roles'])[0];

        $data['output'] = $this->load->view('edit/event', $data, true);
        $this->load->view('layout/home', $data);
    }

    public function create()
    {
        $data[] = '';
        $data['images_url'] = $this->config->item('display_event-pic');

        $data['flags'] = $this->flag_model->get_all();
        $data['statuses'] = Event_model::STATUSES;
        $data['games'] = $this->game_m->get_all();

        if (isset($_POST['create'])) {
            $upload_data = [];
            $upload_data['name'] = isset($_POST['name']) ? $_POST['name'] : '';
            $upload_data['prize'] = isset($_POST['prize']) ? $_POST['prize'] : '';
            $upload_data['location'] = isset($_POST['location']) ? $_POST['location'] : '';
            $upload_data['command_count'] = isset($_POST['command_count']) ? $_POST['command_count'] : null;
            $upload_data['url'] = isset($_POST['url']) ? $_POST['url'] : '';
            $upload_data['flag_icon_id'] = !empty($_POST['flag_icon_id']) ? $_POST['flag_icon_id'] : null;
            $upload_data['started_at'] = isset($_POST['started_at']) ? $_POST['started_at'] : null;
            $upload_data['ended_at'] = isset($_POST['ended_at']) ? $_POST['ended_at'] : null;
            $upload_data['status'] = isset($_POST['status']) ? $_POST['status'] : null;
            $upload_data['game_id'] = isset($_POST['game_id']) ? $_POST['game_id'] : null;
            $upload_data['is_online'] = isset($_POST['is_online']) ? (int)$_POST['is_online'] : 0;

            $upload_data['image'] = null;
            $upload_data['image_header'] = null;

            $upload_data['views'] = 0;

            if (isset($upload_data['started_at'])) {
                $upload_data['started_at'] = (new DateTime($upload_data['started_at']))->format('Y-m-d');
            }
            if (isset($upload_data['ended_at'])) {
                $upload_data['ended_at'] = (new DateTime($upload_data['ended_at']))->format('Y-m-d');
            }
            if (!empty($_FILES["image"]["name"])) {
                $upload_data['image'] = $this->uploadImage('image');
            }
            if (!empty($_FILES["image_header"]["name"])) {
                $upload_data['image_header'] = $this->uploadImage('image_header');
            }
            $event_id = $this->event_model->create($upload_data);

            redirect(base_url('c-admin/events/edit/'. $event_id));
        }
        $data['roles'] = json_decode($this->users_model->get_capabilities($this->UserID)[0]['roles'])[0];

        $data['output'] = $this->load->view('add/event', $data, true);
        $this->load->view('layout/home', $data);
    }

    public function uploadImage($name)
    {
        $fileName = null;

        $files = $_FILES;
        $this->load->library('upload');

        $config['upload_path'] = $this->config->item('upload_event-pic');
        $config['allowed_types'] = 'jpeg|jpg|png';
        $config['max_size'] = 256831;
        $config['max_width'] = 5000;
        $config['max_height'] = 5000;
        $this->upload->initialize($config);

        $_FILES[$name]['type'] = $files[$name]['type'];
        $_FILES[$name]['tmp_name'] = $files[$name]['tmp_name'];
        $_FILES[$name]['error'] = $files[$name]['error'];
        $_FILES[$name]['size'] = $files[$name]['size'];

        $bytes = random_bytes(11);

        $ext = explode(".", $files[$name]["name"]);
        $ext = array_pop($ext);
        $fileName = bin2hex($bytes) . "." . $ext;

        $_FILES[$name]['name'] = $fileName;

        if (!$this->upload->do_upload($name)) {
            $error = array('error' => $this->upload->display_errors());

            redirect($_SERVER["HTTP_REFERER"]);
            die();
        }

        return $fileName;
    }
}
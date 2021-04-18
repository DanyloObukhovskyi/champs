<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Teams extends CI_Controller
{
    private $UserID;
    private $user_capabilities;

    public function __construct()
    {
        parent::__construct();
        if (!$this->ion_auth->logged_in()) {
            redirect('login/auth');
            die();
        }

        $this->UserID = $this->ion_auth->get_user_id();
        if ($this->UserID === 0) {
            redirect('login/auth');
            die();
        }
        $this->load->model([
            'add_m',
            'users_model',
            'edit_m',
            'trainers_model',
            'award_model',
            'game_m',
            'trainer_lesson_price_m',
            'trainer_video',
            'trainer_achievement',
            'trainer_award_model',
            'post_tags_model',
            'team_m',
            'post_type_model',
            'post_type_attributes_model',
            'flag_model'
        ]);
        $this->user_capabilities = $this->config->item('user_capabilities');
    }

    public function index()
    {
        $currentUCan = $this->users_model->get_capabilities($this->UserID);
        $currentUCan = json_decode($currentUCan[0]["roles"]);
        $currentUCan = $currentUCan[0];

        if ($currentUCan[0] == "1" || $currentUCan[1] == "1") {

            $data['UserID'] = $this->UserID;
            $data['user'] = $this->ion_auth->user()->row();
            $data['roles'] = json_decode($this->users_model->get_capabilities($this->UserID)[0]['roles'])[0];

            $config['base_url'] = site_url('c-admin/posts/page/');

            $data['roles'] = json_decode($this->users_model->get_capabilities($this->UserID)[0]['roles'])[0];

            $data['current_u_can'] = $currentUCan;

            $data['flags'] = $this->flag_model->get_all();
            $data['output'] = $this->load->view('home/teams', $data, true);
            $this->load->view('layout/home', $data);
        } else {
            redirect(base_url('404_override'));
            die();
        }
    }

    public function getTeams()
    {
        $draw   = intval($this->input->post("draw"));
        $start  = intval($this->input->post("start"));
        $length = intval($this->input->post("length"));
        $search = $this->input->post("search")["value"];
        $column = isset($this->input->post("order")[0]['column']) ? $this->input->post("order")[0]['column'] : -1;
        $order  = isset($this->input->post("order")[0]['dir']) ? $this->input->post("order")[0]['dir'] : -1;

        $totalDataCount = $this->team_m->getTeamsData($length, $start, true, $search, $column, $order);
        $totalData    = $this->team_m->getTeamsData($length, $start, false, $search, $column, $order);

        $data = [];

        if (!empty($totalData)) {
            foreach ($totalData as $team) {
                $data[] = [
                    $team['id'],
                    '<img class="pr-10" style="vertical-align: middle;height:30px;width:50px" src="'. $this->config->item('main_url').'/images/'. $team['logo'] . '"/>',
                    $team['name'],
                    '<a class="pointer" href="#" onclick="fetchTeam('.$team['id'].')"><button class="btn btn-dark-blue btn-small">Редактировать</button></a>
                    <div onclick="c_delete(\''.base_url("c-admin/team/delete/".$team['id']."/".$this->UserID).'\',\''.$team['name'].'\',\'Post\')" class="pointer txt-orange ml-15 fw-600" style="display: inline-block;">Удалить</div>'
                ];
            }
        }

        $output = [
            "draw"            => $draw,
            "recordsTotal"    => $totalDataCount,
            "recordsFiltered" => $totalDataCount,
            "data"            => $data,
        ];
        die(json_encode($output));
    }

    public function delete($postId = 0, $adminId = 0) {
        if($this->UserID != (int)$adminId) {
            redirect ($this->config->item('login_Ok'));
            die();
        }

        $current_u_can = $this->users_model->get_capabilities($adminId);
        if(isset($current_u_can[0]["roles"])) {
            $current_u_can = json_decode($current_u_can[0]["roles"]);
            $current_u_can = $current_u_can[0];
        } else {
            redirect($_SERVER["HTTP_REFERER"]);
        }
        if($current_u_can[0] == "1" || $current_u_can[1] == "1") {
            $this->team_m->delete($postId);
            redirect($_SERVER["HTTP_REFERER"]);
            die();
        }

        redirect ($_SERVER["HTTP_REFERER"]);
        die();
    }

    public function fetch()
    {
        $response = new stdClass();
        $response->status = false;
        $id = $this->input->post('id');
        if(!empty($id)){
            $team = $this->team_m->getOne(['id' => $id]);
            if(!empty($team)){
                $imgs_url = $this->config->item('main_url').'uploads/images/'.$team['logo'];
                $response->name = $team['name'];
                $response->logo = $imgs_url;
                $response->region = $team['region'];
                $response->flag_icon_id = $team['flag_icon_id'];
                $response->status = true;
            }
        }
        die(json_encode($response));
    }

    public function create()
    {
        $response = new stdClass();
        $response->status = false;
        $team = $this->input->post();
        $this->form_validation->set_data(array_merge($team));
        $this->form_validation->set_rules('name', 'Название команды', 'required|min_length[2]');
        if ($this->form_validation->run()) {
            if (!empty($team)) {
                $filename = '';
                if(!empty($_FILES)){
                    $image = $_FILES["itempic"];
                    if (is_uploaded_file($image["tmp_name"])) {
                        $imgs_url = PUBLICPATH.$this->config->item('upload_event-pic');

                        if (!file_exists($imgs_url)) {
                            mkdir($imgs_url, 0777);
                        }
                        move_uploaded_file($image["tmp_name"], $imgs_url . $image["name"]);
                        $filename = $image["name"];
                    }
                }
                $this->team_m->create([
                    'name' => $team['name'],
                    'logo' => $filename,
                    'region' => $team['region'],
                    'flag_icon_id' => $team['flag']
                ]);
                $id = $this->db->insert_id();
                if(!empty($id)){
                    $response->status = true;
                }
            }
        } else {
            $response->errors = validation_errors();
        }
        die(json_encode($response));
    }

    public function update()
    {
        $response = new stdClass();
        $response->status = false;
        $team = $this->input->post();
        $this->form_validation->set_data(array_merge($team));
        $this->form_validation->set_rules('name', 'Название команды', 'required|min_length[2]');
        if ($this->form_validation->run()) {
            $id = $this->input->post('id');
            if(!empty($id)){
                if (!empty($team)) {
                    if(!empty($_FILES)){
                        $image = $_FILES["itempic"];
                        if (is_uploaded_file($image["tmp_name"])) {
                            $imgs_url = PUBLICPATH.$this->config->item('upload_event-pic');
                            if (!file_exists($imgs_url)) {
                                mkdir($imgs_url, 0777);
                            }
                            move_uploaded_file($image["tmp_name"], $imgs_url . $image["name"]);
                            $filename = $image["name"];
                        }
                        $data = [
                            'id' => $id,
                            'name' => $team['name'],
                            'logo' => $filename,
                            'region' => $team['region'],
                            'flag_icon_id' => $team['flag']
                        ];
                    } else {
                        $data = [
                            'id' => $id,
                            'name' => $team['name'],
                            'region' => $team['region'],
                            'flag_icon_id' => $team['flag']
                        ];
                    }
                    $this->team_m->update($data);
                    if(!empty($id)){
                        $response->status = true;
                    }
                }
            }
        } else {
            $response->errors = validation_errors();
        }
        die(json_encode($response));
    }
}
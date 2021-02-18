<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Seo extends CI_Controller
{

    private $UserID;
    private $post_per_page = 10;
    private $user_capabilities;

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
        $this->load->model(['users_model', 'setting_model', 'seo_page_model', 'seo_page_meta_model']);
        $this->user_capabilities = $this->config->item('user_capabilities');
    }

    public function index()
    {
        $current_u_can = $this->users_model->get_capabilities($this->UserID);
        $current_u_can = json_decode($current_u_can[0]["roles"]);
        $current_u_can = $current_u_can[0];

        if ($current_u_can[0] == "1" || $current_u_can[1] == "1") {
            $data = [];
            $data['UserID'] = $this->UserID;
            $data['user'] = $this->ion_auth->user()->row();
            $data['roles'] = json_decode($this->users_model->get_capabilities($this->UserID)[0]['roles'])[0];
            $data['output'] = $this->load->view('home/seo', $data,true);

            $this->load->view('layout/home', $data);
        } else {
            redirect(base_url('404_override'));
            die();
        }
    }

    public function fetchPages()
    {
        $draw   = intval($this->input->post("draw"));
        $start  = intval($this->input->post("start"));
        $length = intval($this->input->post("length"));
        $search = $this->input->post("search")["value"];
        $column = isset($this->input->post("order")[0]['column']) ? $this->input->post("order")[0]['column'] : -1;
        $order  = isset($this->input->post("order")[0]['dir']) ? $this->input->post("order")[0]['dir'] : -1;

        $total_data_count = $this->seo_page_model->getPagesData($length, $start, true, $search, $column, $order);
        $total_data    = $this->seo_page_model->getPagesData($length, $start, false, $search, $column, $order);

        $data = [];

        if (!empty($total_data)) {
            foreach ($total_data as $page) {
                $data[] = [
                    '<h4>'.$page['name'].'</h4>',
                    '<h5>'.$page['title'].'</h5>',
                    $page['keywords'],
                    '<a href="'.$page['url'].'">Открыть Страницу</a>',
                    '<div class="row justify-content-center">
                        <button type="button" style="left:50%" class="btn btn-dark-blue btn-small" onclick="fetch('.$page['id'].')">Редактировать</button>
                        </div>'
                ];
            }
        }

        $output = [
            "draw"            => $draw,
            "recordsTotal"    => $total_data_count,
            "recordsFiltered" => $total_data_count,
            "data"            => $data,
        ];
        die(json_encode($output));
    }

    public function fetch()
    {
        $response = new stdClass();
        $response->status = false;
        $response->title = 'Champs.pro';
        $response->keywords = 'League of Legends, СS:GO, Dota, Игровые матчи, Игровые новости, События, Рейтинг команд, Рейтинг игроков, Игрок недели, Результаты матчей, Турниры';
        $response->description =  'Тренеры по League of Legends, СS:GO, Dota, матчи, игровые новости, события и мероприятия в игровой индустрии';
        $response->heading = '';
        $response->heading_type = '';
        $response->metas = [];
        $id = $this->input->post('id');
        if(!empty($id)){
            $page = $this->seo_page_model->getOne(['id' => $id]);
            if(!empty($page)){
                if(!empty($page['title'])){
                    $response->title = $page['title'];
                }
                if(!empty($page['keywords'])){
                    $response->keywords = $page['keywords'];
                }
                if(!empty($page['description'])){
                    $response->description = $page['description'];
                }
                if(!empty($page['heading'])){
                    $response->heading = $page['heading'];
                }
                if(!empty($page['heading_type'])){
                    $response->heading = $page['heading_type'];
                }
                $meta = $this->seo_page_meta_model->get([
                    'page_id' => $id
                ]);
                if(!empty($meta)){
                    $response->metas = $meta;
                }
                $response->status = true;
            }
        }
        die(json_encode($response));
    }

    public function edit()
    {
        $response = new stdClass();
        $response->status = false;
        $posts = $this->input->post();
        $this->form_validation->set_data(array_merge($posts));
        $this->form_validation->set_rules('title', 'Название  страницы', 'required|min_length[2]');
        if ($this->form_validation->run()) {
            $id = $this->input->post('id');
            if(!empty($id)){
                if (!empty($posts)) {
                    $data = [
                        'title' => trim($posts['title']),
                        'description' => trim($posts['description']),
                        'keywords' => trim($posts['keywords']),
                        'heading' => trim($posts['heading']),
                        'heading_type' => $posts['heading_type'],
                    ];
                    $this->seo_page_model->update($id, $data);
                    if(!empty($posts['metas'])){
                        $this->seo_page_meta_model->update($id, $posts['metas']);
                    }
                    $response->status = true;
                }
            }
        } else {
            $response->errors = validation_errors();
        }
        die(json_encode($response));
    }

}
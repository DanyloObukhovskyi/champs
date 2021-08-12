<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Home extends CI_Controller
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
        $this->load->model([
            'users_model',
            'setting_model',
            'trainer_lesson_price_m',
            'post_type_model',
            'post_type_attributes_model',
            'posts_model',
            'payments_model',
            'blog_model',
            'blog_payment_model'
        ]);
        $this->user_capabilities = $this->config->item('user_capabilities');
    }

    public function index($page = 0)
    {
        $current_u_can = $this->users_model->get_capabilities($this->UserID);
        $current_u_can = json_decode($current_u_can[0]["roles"]);
        $current_u_can = $current_u_can[0];

        if ($current_u_can[0] == "1" || $current_u_can[1] == "1") {
            $this->load->model('posts_model');
            $page = (int)$page;
            if ($page > 0) {
                $page = $page - 1;
            }

            $data['UserID'] = $this->UserID;
            $data['user'] = $this->ion_auth->user()->row();
            $data['roles'] = json_decode($this->users_model->get_capabilities($this->UserID)[0]['roles'])[0];

            $data['field_search'] = array(
                'type' => 'text',
                'name' => 'search',
                'id' => 'search'
            );

            $search = $this->input->post('search');
            if ((int)$search > 0) {
                $where['search'] = (int)$search;
            } else {
                $where['search'] = $search;
            }

            $offset = $this->post_per_page * $page;
            $posts_count = $this->posts_model->get_all($where, true);;

            $config = $this->config->item('pagination');
            $config['base_url'] = site_url('c-admin/posts/page/');
            $config['total_rows'] = $posts_count;
            $config['per_page'] = $this->post_per_page;
            $config['use_page_numbers'] = true;
            $config['reuse_query_string'] = true;

            $this->pagination->initialize($config);
            $data['pagination'] = $this->pagination->rmo_create_links();


            $sort = $this->input->get('sort');
            if (empty($sort)) {
                $sort = array();
            }

            $data['sort_id'] = isset($sort['id']) ? $sort['id'] : '';
            $data['sort_title'] = isset($sort['title']) ? $sort['title'] : '';
            $data['sort_type'] = isset($sort['type']) ? $sort['type'] : '';
            //$sort = array_merge(array('id' => 'ASC'), $sort);
            $data['roles'] = json_decode($this->users_model->get_capabilities($this->UserID)[0]['roles'])[0];
            $data['posts'] = $this->posts_model->get_all($where, false, $sort, array($offset, $this->post_per_page));

//			    $posts = array();
//			    $data['posts'] = $posts;
            //----------

            $data['current_u_can'] = $current_u_can;
            $data['output'] = $this->load->view('home/articles', $data, true);
            $this->load->view('layout/home', $data);
        } else {
            redirect(base_url('404_override'));
            die();
        }
    }

    public function matches($page = 0)
    {

        $current_u_can = $this->users_model->get_capabilities($this->UserID);
        if (isset($current_u_can[0]["roles"])) {
            $current_u_can = json_decode($current_u_can[0]["roles"]);
            $current_u_can = $current_u_can[0];
        } else {
            redirect($this->config->item(base_url('404_override')));
            die();
        }

        if ($current_u_can[0] == "1" || $current_u_can[2] == "1") {
            $this->load->model('posts_model');
            $page = (int)$page;
            if ($page > 0) {
                $page = $page - 1;
            }

            $data['UserID'] = $this->UserID;
            $data['user'] = $this->ion_auth->user()->row();
            $data['roles'] = json_decode($this->users_model->get_capabilities($this->UserID)[0]['roles'])[0];

            $data['field_search'] = array(
                'type' => 'text',
                'name' => 'search',
                'id' => 'search'
            );
            $search = $this->input->post('search');
            if ((int)$search > 0) {
                $where['search'] = (int)$search;
            } else {
                $where['search'] = $search;
            }


            $offset = $this->post_per_page * $page;
            $posts_count = $this->posts_model->select_matches($where, true);;

            $config = $this->config->item('pagination');
            $config['base_url'] = site_url('c-admin/posts/page/');
            $config['total_rows'] = $posts_count;
            $config['per_page'] = $this->post_per_page;
            $config['use_page_numbers'] = true;
            $config['reuse_query_string'] = true;

            $this->pagination->initialize($config);
            $data['pagination'] = $this->pagination->rmo_create_links();


            $sort = $this->input->get('sort');
            if (empty($sort)) {
                $sort = array();
            }

            $data['sort_id'] = isset($sort['start_at']) ? $sort['start_at'] : '';
            $data['team1_sid'] = isset($sort['team1_id']) ? $sort['team1_id'] : '';
            $data['team2_sid'] = isset($sort['team2_id']) ? $sort['team2_id'] : '';
//		    	$sort = array_merge(array('id' => 'ASC'), $sort);
            $data['roles'] = json_decode($this->users_model->get_capabilities($this->UserID)[0]['roles'])[0];

            $data['statistics'] = $this->posts_model->select_matches($where, false, $sort, array($offset, $this->post_per_page));

            foreach ($data['statistics'] as $key => &$value) {
                $value['team1_data'] = $this->posts_model->get_team($value["team1_id"]);
                $value['team2_data'] = $this->posts_model->get_team($value["team2_id"]);
            }

            $data['imgs_url'] = $this->config->item('main_url').$this->config->item('display_team-pic');

            $data['current_u_can'] = $current_u_can;
            $data['output'] = $this->load->view('home/matches', $data, true);
            $this->load->view('layout/home', $data);
        } else {
            redirect(base_url('404_override'));
            die();
        }
    }

    public function users($page = 0)
    {
        $current_u_can = $this->users_model->get_capabilities($this->UserID);
        if (isset($current_u_can[0]["roles"])) {
            $current_u_can = json_decode($current_u_can[0]["roles"]);
            $current_u_can = $current_u_can[0];
        } else {
            redirect($this->config->item(base_url('404_override')));
            die();
        }

        if ($current_u_can[0] == "1") {
            $page = (int)$page;
            if ($page > 0) {
                $page = $page - 1;
            }

            $data['UserID'] = $this->UserID;
            $data['user'] = $this->ion_auth->user()->row();

            $data['field_search'] = array(
                'type' => 'text',
                'name' => 'search',
                'id' => 'search'
            );

            $search = $this->input->post('search');
            if ((int)$search > 0) {
                $where['search'] = (int)$search;
            } elseif ($search != null) {
                $where['search'] = $search;
            } else {
                $where = array();
            }

            $where['0000'] = 'user_role';

            $offset = $this->post_per_page * $page;
            $posts_count = $this->users_model->get_all($where, true, array(), array(), false, true);

            $config = $this->config->item('pagination');
            $config['base_url'] = site_url('c-admin/posts/page/');
            $config['total_rows'] = $posts_count;
            $config['per_page'] = $this->post_per_page;
            $config['use_page_numbers'] = true;
            $config['reuse_query_string'] = true;

            $this->pagination->initialize($config);
            $data['pagination'] = $this->pagination->rmo_create_links();


            $sort = $this->input->get('sort');
            if (empty($sort)) {
                $sort = array();
            }

            $data['sort_id'] = isset($sort['id']) ? $sort['id'] : '';
            $data['sort_email'] = isset($sort['email']) ? $sort['email'] : '';
            $data['sort_type'] = isset($sort['roles']) ? $sort['roles'] : '';
//		    	$sort = array_merge(array('id' => 'ASC'), $sort);
            $data['users'] = $this->users_model->get_all($where, false, $sort, array($offset, $this->post_per_page), true, true);
            $data['roles'] = json_decode($this->users_model->get_capabilities($this->UserID)[0]['roles'])[0];

            foreach ($data['users'] as $key => &$user_data) {
                $user_data['roles'] = json_decode($user_data['roles']);
                $user_data['roles'] = (isset($user_data->roles)) ? $user_data->roles : '';
            }
//			    $users = array();
//			    $data['users'] = $users;

            $data['imgs_url'] = $this->config->item('main_url').$this->config->item('display_profile-pic');
            $data['current_u_can'] = $current_u_can;
            $data['output'] = $this->load->view('home/users', $data, true);
            $this->load->view('layout/home', $data);
        } else {
            redirect(base_url('404_override'));
            die();
        }
    }

    public function trainers($type = 'individual', $page = 0)
    {

        $trainingType = $type;
        $current_u_can = $this->users_model->get_capabilities($this->UserID);
        if (isset($current_u_can[0]["roles"])) {
            $current_u_can = json_decode($current_u_can[0]["roles"]);
            $current_u_can = $current_u_can[0];
        } else {
            redirect($this->config->item(base_url('404_override')));
            die();
        }

        if ($current_u_can[0] == "1" || $current_u_can[3] == "1") {
            $this->load->model('trainers_model');
            $page = (int)$page;
            if ($page > 0) {
                $page = $page - 1;
            }

            $data['UserID'] = $this->UserID;
            $data['user'] = $this->ion_auth->user()->row();

            $data['field_search'] = array(
                'type' => 'text',
                'name' => 'search',
                'id' => 'search'
            );

            $search = $this->input->post('search');
            if ((int)$search > 0) {
                $where['search'] = (int)$search;
            } elseif ($search != null) {
                $where['search'] = $search;
            } else {
                $where = array();
            }

            $offset = $this->post_per_page * $page;
            $posts_count = $this->trainers_model->get_all_trainers($where, $trainingType, true);

            $config = $this->config->item('pagination');
            $config['base_url'] = site_url('c-admin/posts/page/');
            $config['total_rows'] = $posts_count;
            $config['per_page'] = $this->post_per_page;
            $config['use_page_numbers'] = true;
            $config['reuse_query_string'] = true;

            $this->pagination->initialize($config);
            $data['pagination'] = $this->pagination->rmo_create_links();

            $sort = $this->input->get('sort');
            if (empty($sort)) {
                $sort = array();
            }

            $data['sort_id'] = isset($sort['id']) ? $sort['id'] : '';
            $data['sort_email'] = isset($sort['email']) ? $sort['email'] : '';
            $data['sort_type'] = isset($sort['roles']) ? $sort['roles'] : '';
//			    $sort = array_merge(array('id' => 'ASC'), $sort);
            $data['users'] = $this->trainers_model->get_all_trainers($where, $trainingType, false, $sort, array($offset, $this->post_per_page), true);
            $data['roles'] = json_decode($this->users_model->get_capabilities($this->UserID)[0]['roles'])[0];


            foreach ($data['users'] as $key => &$user_data) {
                $user_data['roles'] = json_decode($user_data['roles']);
                $user_data['roles'] = (isset($user_data->roles)) ? $user_data->roles : '';
            }
//			    $users = array();
//			    $data['users'] = $users;
            $data['current_u_can'] = $current_u_can;
            $data['imgs_url'] = $this->config->item('main_url').$this->config->item('display_trainers-pic');
            $data['prices'] = Trainer_lesson_price_m::PRICE_TYPES;
            $data['price_type'] = $type;

            $data['output'] = $this->load->view('home/trainers', $data, true);
            $this->load->view('layout/home', $data);
        } else {
            redirect(base_url('404_override'));
            die();
        }
    }

    public function payments($page = 0)
    {
        $current_u_can = $this->users_model->get_capabilities($this->UserID);
        $current_u_can = json_decode($current_u_can[0]["roles"]);
        $current_u_can = $current_u_can[0];

        $data['UserID'] = $this->UserID;
        $data['user'] = $this->ion_auth->user()->row();
        $this->load->model("selectData");

        $page = (int)$page;
        if ($page > 0) {
            $page = $page - 1;
        }

        $data['UserID'] = $this->UserID;
        $data['user'] = $this->ion_auth->user()->row();

        $data['field_search'] = array(
            'type' => 'text',
            'name' => 'search',
            'id' => 'search'
        );
        $search = $this->input->post('search');
        if ((int)$search > 0) {
            $where['search'] = (int)$search;
        } else {
            $where['search'] = $search;
        }
        $where['payment_status'] = 1;

        $offset = $this->post_per_page * $page;

        $config = $this->config->item('pagination');
        $config['base_url'] = site_url('c-admin/posts/page/');
        $config['use_page_numbers'] = true;
        $config['reuse_query_string'] = true;

        $this->pagination->initialize($config);
        $data['pagination'] = $this->pagination->rmo_create_links();

        $data['roles'] = json_decode($this->users_model->get_capabilities($this->UserID)[0]['roles'])[0];


        $data['output'] = $this->load->view('home/payments', $data, true);
        $this->load->view('layout/home', $data);
    }

    public function notRelatedPayments($page = 0)
    {
        $current_u_can = $this->users_model->get_capabilities($this->UserID);
        $current_u_can = json_decode($current_u_can[0]["roles"]);
        $current_u_can = $current_u_can[0];

        $data['UserID'] = $this->UserID;
        $data['user'] = $this->ion_auth->user()->row();
        $this->load->model("selectData");

        $page = (int)$page;
        if ($page > 0) {
            $page = $page - 1;
        }

        $data['UserID'] = $this->UserID;
        $data['user'] = $this->ion_auth->user()->row();

        $data['field_search'] = array(
            'type' => 'text',
            'name' => 'search',
            'id' => 'search'
        );
        $search = $this->input->post('search');
        if ((int)$search > 0) {
            $where['search'] = (int)$search;
        } else {
            $where['search'] = $search;
        }
        $where['payment_status'] = 1;

        $offset = $this->post_per_page * $page;

        $config = $this->config->item('pagination');
        $config['base_url'] = site_url('c-admin/posts/page/');
        $config['use_page_numbers'] = true;
        $config['reuse_query_string'] = true;

        $this->pagination->initialize($config);
        $data['pagination'] = $this->pagination->rmo_create_links();

        $data['roles'] = json_decode($this->users_model->get_capabilities($this->UserID)[0]['roles'])[0];


        $data['output'] = $this->load->view('home/not_related_payments', $data, true);
        $this->load->view('layout/home', $data);
    }

    public function admins($page = 0)
    {
        $current_u_can = $this->users_model->get_capabilities($this->UserID);
        if (isset($current_u_can[0]["roles"])) {
            $current_u_can = json_decode($current_u_can[0]["roles"]);
            $current_u_can = $current_u_can[0];
        } else {
            redirect($this->config->item(base_url('404_override')));
            die();
        }

        if ($current_u_can[0] == "1") {
            $page = (int)$page;
            if ($page > 0) {
                $page = $page - 1;
            }

            $data['UserID'] = $this->UserID;
            $data['user'] = $this->ion_auth->user()->row();

            $data['field_search'] = array(
                'type' => 'text',
                'name' => 'search',
                'id' => 'search'
            );

            $search = $this->input->post('search');
            if ((int)$search > 0) {
                $where['search'] = (int)$search;
            } elseif ($search != null) {
                $where['search'] = $search;
            }

//				$where['0100'] = 'user_role';
            $where['0010'] = 'user_role';
            $where['1000'] = 'user_role';
            $where['0001'] = 'user_role';

            $offset = $this->post_per_page * $page;
            $posts_count = $this->users_model->get_all_admins($where, true);;

            $config = $this->config->item('pagination');
            $config['base_url'] = site_url('c-admin/posts/page/');
            $config['total_rows'] = $posts_count;
            $config['per_page'] = $this->post_per_page;
            $config['use_page_numbers'] = true;
            $config['reuse_query_string'] = true;

            $this->pagination->initialize($config);
            $data['pagination'] = $this->pagination->rmo_create_links();


            $sort = $this->input->get('sort');
            if (empty($sort)) {
                $sort = array();
            }

            $data['sort_id'] = isset($sort['id']) ? $sort['id'] : '';
            $data['sort_email'] = isset($sort['email']) ? $sort['email'] : '';
            $data['sort_type'] = isset($sort['roles']) ? $sort['roles'] : '';
            //$sort = array_merge(array('id' => 'ASC'), $sort);
            $data['users'] = $this->users_model->get_all_admins($where, false, $sort, array($offset, $this->post_per_page));
            $data['roles'] = json_decode($this->users_model->get_capabilities($this->UserID)[0]['roles'])[0];

            foreach ($data['users'] as $key => &$user_data) {
                $user_data['roles'] = json_decode($user_data['roles']);
                $user_data['roles'] = (isset($user_data['roles'][0])) ? $user_data['roles'][0] : '';
            }
//			    $users = array();
//			    $data['users'] = $users;

            //----------
            $data['current_u_can'] = $current_u_can;
            $data['output'] = $this->load->view('home/admins', $data, true);
            $this->load->view('layout/home', $data);
        } else {
            redirect(base_url('404_override'));
            die();
        }
    }

    public function setting()
    {
        if (isset($_POST['setting'])) {

            foreach ($_POST['setting'] as $key => $value) {
                $this->setting_model->set_by_key($key, $value);
            }
        }
        if (isset($_FILES['file'])) {
            if (!empty($_FILES["file"]["name"])) {
                $files = $_FILES;
                $this->load->library('upload');

                $config['upload_path'] = PUBLICPATH.'/'.$this->config->item('upload_banner-pic');
                if (!file_exists(PUBLICPATH.'/uploads')) {
                    mkdir(PUBLICPATH.'/uploads', 0777);
                }
                if (!file_exists($config['upload_path'])) {
                    mkdir($config['upload_path'], 0777);
                }
                $config['allowed_types'] = 'jpeg|jpg|png';
                $this->upload->initialize($config);

                $bytes = random_bytes(11);

                $ext = explode(".", $files["file"]["name"]);
                $ext = array_pop($ext);
                $fileName = bin2hex($bytes) . "." . $ext;

                $_FILES['file']['name'] = $fileName;

                if (!$this->upload->do_upload('file')) {
                    $error = array('error' => $this->upload->display_errors());

                    die(var_dump($error));
                    redirect($_SERVER["HTTP_REFERER"]);
                    die();
                } else {
                    $data = array('upload_data' => $this->upload->data());
                    $this->setting_model->set_by_key('bannerImage', $fileName);
                }
            }
        }

        if (isset($_FILES['marketplace_banner'])) {
            if (!empty($_FILES["marketplace_banner"]["name"])) {
                $files = $_FILES;
                $this->load->library('upload');

                $config['upload_path'] = PUBLICPATH.'/'.$this->config->item('upload_banner-pic');
                if (!file_exists(PUBLICPATH.'/uploads')) {
                    mkdir(PUBLICPATH.'/uploads', 0777);
                }
                if (!file_exists($config['upload_path'])) {
                    mkdir($config['upload_path'], 0777);
                }
                $config['allowed_types'] = 'jpeg|jpg|png';
                $this->upload->initialize($config);

                $bytes = random_bytes(11);

                $ext = explode(".", $files["marketplace_banner"]["name"]);
                $ext = array_pop($ext);
                $fileName = bin2hex($bytes) . "." . $ext;

                $_FILES['marketplace_banner']['name'] = $fileName;

                if (!$this->upload->do_upload('marketplace_banner')) {
                    $error = array('error' => $this->upload->display_errors());

                    die(var_dump($error));
                    redirect($_SERVER["HTTP_REFERER"]);
                    die();
                } else {
                    $data = array('upload_data' => $this->upload->data());
                    $this->setting_model->set_by_key('marketplaceBanner', $fileName);
                }
            }
        }

        $settings = $this->setting_model->get_all();

        $current_u_can = $this->users_model->get_capabilities($this->UserID);
        if (isset($current_u_can[0]["roles"])) {
            $current_u_can = json_decode($current_u_can[0]["roles"]);
            $current_u_can = $current_u_can[0];
        } else {
            redirect($this->config->item(base_url('404_override')));
            die();
        }
        $data['trainingDescription'] = [];

        foreach (Setting_model::TRAININGS_TYPES as $item) {
            $data['trainingDescriptions'][] = [
                'title' => $this->setting_model->get_by_key($item['title'])[0] ?? null,
                'description' => $this->setting_model->get_by_key($item['description'])[0] ?? null,
            ];
        }
        $data['social'] = $this->setting_model->get_social();
        $data['about'] = $this->setting_model->get_by_key(Setting_model::ABOUT)[0] ?? null;
        $data['settings'] = $settings;
        $data['images_path'] = $this->config->item('main_url').$this->config->item('display_banner-pic');
        $data['current_u_can'] = $current_u_can;
        $data['terms'] = $this->setting_model->get_terms();
        $data['vacancies'] = $this->setting_model->get_by_key(Setting_model::VACANCIES)[0] ?? null;
        $data['paymentType'] = $this->setting_model->get_by_key(Setting_model::PAYMENT_TYPE)[0] ?? null;
        $data['paymentTypes'] = Setting_model::PAYMENT_TYPES;
        $data['roles'] = json_decode($this->users_model->get_capabilities($this->UserID)[0]['roles'])[0];
        $data['user'] = $this->ion_auth->user()->row();
        $data['address'] = $this->setting_model->get_by_key(Setting_model::ADDRESS)[0] ?? null;

        $data['output'] = $this->load->view('home/settings', $data, true);

        $this->load->view('layout/home', $data);
    }

    public function getPostTypes()
    {
        $draw   = intval($this->input->post("draw"));
        $start  = intval($this->input->post("start"));
        $length = intval($this->input->post("length"));
        $search = $this->input->post("search")["value"];
        $column = isset($this->input->post("order")[0]['column']) ? $this->input->post("order")[0]['column'] : -1;
        $order  = isset($this->input->post("order")[0]['dir']) ? $this->input->post("order")[0]['dir'] : -1;

        $total_data_count = $this->post_type_model->getNewsTypeData($length, $start, true, $search, $column, $order);
        $total_data    = $this->post_type_model->getNewsTypeData($length, $start, false, $search, $column, $order);

        $data = [];

        $imgs_url = base_url($this->config->item('display_news_type-pic'));
        if (!empty($total_data)) {
            foreach ($total_data as $type) {
                $data[] = [
                    '<img class="profile-pic-small" src="'.$imgs_url.$type['img'].'"/>',
                    $type['id'],
                    $type['title'],
                    '<button type="button" class="btn btn-dark-blue btn-small" onclick="fetchNewsType('.$type['id'].')">Редактировать</button>
                    <div class="pointer txt-orange ml-15 fw-600" style="display: inline-block;" onclick="deleteNewsType('.$type['id'].')">Удалить</div>'
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

    public function createPostTypes()
    {
        $response = new stdClass();
        $response->status = false;
        $posts = $this->input->post();
        $this->form_validation->set_data(array_merge($posts));
        $this->form_validation->set_rules('title', 'Название формата', 'required|min_length[2]');
        if ($this->form_validation->run()) {
            if (!empty($posts)) {
                $attributes = [];
                foreach ($posts as $key => $value) {
                    if($key == 'title'){
                        $filename = '';
                        if(!empty($_FILES)){
                            $image = $_FILES["itempic"];
                            if (is_uploaded_file($image["tmp_name"])) {
                                $imgs_url = FCPATH.$this->config->item('upload_news_type-pic');
                                if (!file_exists($imgs_url)) {
                                    mkdir($imgs_url, 0777);
                                }
                                move_uploaded_file($image["tmp_name"], $imgs_url . $image["name"]);
                                $filename = $image["name"];
                            }
                        }
                        $this->post_type_model->create($value, $filename);
                        $id = $this->db->insert_id();
                    } elseif($key == 'photo'){
                        $attributes[] = [
                            'key' => PHOTO,
                            'value' => intval(json_decode($value))
                        ];
                    } elseif($key == 'video'){
                        $attributes[] = [
                            'key' => VIDEO,
                            'value' => intval(json_decode($value))
                        ];
                    } elseif($key == 'photo_galery'){
                        $attributes[] = [
                            'key' => PHOTO_GALERY,
                            'value' => intval(json_decode($value))
                        ];
                    } elseif($key == 'tags'){
                        $attributes[] = [
                            'key' => TAGS,
                            'value' => intval(json_decode($value))
                        ];
                    } elseif($key == 'stream'){
                        $attributes[] = [
                            'key' => STREAM,
                            'value' => intval(json_decode($value))
                        ];
                    } elseif($key == 'text'){
                        $attributes[] = [
                            'key' => TEXT,
                            'value' => intval(json_decode($value))
                        ];
                    }
                }
                if(!empty($id)){
                    $this->post_type_attributes_model->create($id, $attributes);
                    $response->status = true;
                }
            }
        } else {
            $response->errors = validation_errors();
        }
        die(json_encode($response));
    }

    public function deletePostTypes()
    {
        $response = new stdClass();
        $response->status = false;
        $id = $this->input->post('id');
        if(!empty($id)){
            $response->status = $this->post_type_model->delete($id);
            $this->post_type_attributes_model->delete($id);
        }
        die(json_encode($response));
    }

    public function fetchPostTypes()
    {
        $response = new stdClass();
        $response->status = false;
        $id = $this->input->post('id');
        if(!empty($id)){
            $type = $this->post_type_model->getOne(['id' => $id]);
            if(!empty($type)){
                $type_attributes = $this->post_type_attributes_model->get(['news_type_id' => $id]);
                $imgs_url = base_url($this->config->item('display_news_type-pic')).$type['img'];
                $response->title = $type['title'];
                $response->img = $imgs_url;
                if(!empty($type_attributes)){
                    foreach($type_attributes as $attributes){
                        if($attributes['attribute_id'] == PHOTO){
                            $response->photo = boolval($attributes['value']);
                        } elseif($attributes['attribute_id'] == VIDEO){
                            $response->video = boolval($attributes['value']);
                        } elseif($attributes['attribute_id'] == PHOTO_GALERY){
                            $response->photo_galery = boolval($attributes['value']);
                        } elseif($attributes['attribute_id'] == TAGS){
                            $response->tags = boolval($attributes['value']);
                        } elseif($attributes['attribute_id'] == DATE){
                            $response->date = boolval($attributes['value']);
                        } elseif($attributes['attribute_id'] == STREAM){
                            $response->date = boolval($attributes['value']);
                        } elseif($attributes['attribute_id'] == TEXT){
                            $response->date = boolval($attributes['value']);
                        }
                    }
                }
                $response->status = true;
            }
        }
        die(json_encode($response));
    }

    public function updatePostTypes()
    {
        $response = new stdClass();
        $response->status = false;
        $posts = $this->input->post();
        $this->form_validation->set_data(array_merge($posts));
        $this->form_validation->set_rules('title', 'Название формата', 'required|min_length[2]');
        if ($this->form_validation->run()) {
            $id = $this->input->post('id');
            if(!empty($id)){
                if (!empty($posts)) {
                    $attributes = [];
                    foreach ($posts as $key => $value) {
                        if($key == 'title'){
                            if(!empty($_FILES)){
                                $image = $_FILES["itempic"];
                                if (is_uploaded_file($image["tmp_name"])) {
                                    $imgs_url = FCPATH.$this->config->item('upload_news_type-pic');
                                    if (!file_exists($imgs_url)) {
                                        mkdir($imgs_url, 0777);
                                    }
                                    move_uploaded_file($image["tmp_name"], $imgs_url . $image["name"]);
                                    $filename = $image["name"];
                                }
                                $data = [
                                    'title' => $value,
                                    'img'   => $filename
                                ];
                            } else {
                                $data = [
                                    'title' => $value
                                ];
                            }
                            $this->post_type_model->update($id, $data);
                        } elseif($key === 'photo'){
                            $attributes[] = [
                                'key' => PHOTO,
                                'value' => intval(json_decode($value))
                            ];
                        } elseif($key === 'video'){
                            $attributes[] = [
                                'key' => VIDEO,
                                'value' => intval(json_decode($value))
                            ];
                        } elseif($key === 'photo_galery'){
                            $attributes[] = [
                                'key' => PHOTO_GALERY,
                                'value' => intval(json_decode($value))
                            ];
                        } elseif($key === 'tags'){
                            $attributes[] = [
                                'key' => TAGS,
                                'value' => intval(json_decode($value))
                            ];
                        } elseif($key === 'stream'){
                            $attributes[] = [
                                'key' => STREAM,
                                'value' => intval(json_decode($value))
                            ];
                        } elseif($key === 'text'){
                            $attributes[] = [
                                'key' => TEXT,
                                'value' => intval(json_decode($value))
                            ];
                        }

                    }
                    if(!empty($id)){
                        $this->post_type_attributes_model->update($id, $attributes);
                        $response->status = true;
                    }
                }
            }
        } else {
            $response->errors = validation_errors();
        }
        die(json_encode($response));
    }

    public function fetchAttributes()
    {
        $response = new stdClass();
        $response->status = false;
        $id = $this->input->post('id');
        if(!empty($id)){
            $type = $this->post_type_model->getOne(['id' => $id]);
            if(!empty($type)){
                $type_attributes = $this->post_type_attributes_model->get(['news_type_id' => $id]);
                $imgs_url = base_url($this->config->item('display_news_type-pic')).$type['img'];
                $response->title = $type['title'];
                $response->img = $imgs_url;
                if(!empty($type_attributes)){
                    foreach($type_attributes as $attributes){
                        if($attributes['attribute_id'] == PHOTO){
                            $response->photo = boolval($attributes['value']);
                        } elseif($attributes['attribute_id'] == VIDEO){
                            $response->video = boolval($attributes['value']);
                        } elseif($attributes['attribute_id'] == PHOTO_GALERY){
                            $response->photo_galery = boolval($attributes['value']);
                        } elseif($attributes['attribute_id'] == TAGS){
                            $response->tags = boolval($attributes['value']);
                        } elseif($attributes['attribute_id'] == DATE){
                            $response->date = boolval($attributes['value']);
                        } elseif($attributes['attribute_id'] == STREAM){
                            $response->date = boolval($attributes['value']);
                        } elseif($attributes['attribute_id'] == TEXT){
                            $response->date = boolval($attributes['value']);
                        }
                    }
                }
                $response->status = true;
            }
        }
        die(json_encode($response));
    }

    public function getPosts()
    {
        $draw   = intval($this->input->post("draw"));
        $start  = intval($this->input->post("start"));
        $length = intval($this->input->post("length"));
        $search = $this->input->post("search")["value"];
        $column = isset($this->input->post("order")[0]['column']) ? $this->input->post("order")[0]['column'] : -1;
        $order  = isset($this->input->post("order")[0]['dir']) ? $this->input->post("order")[0]['dir'] : -1;

        $total_data_count = $this->posts_model->getNewsData($length, $start, true, $search, $column, $order);
        $total_data    = $this->posts_model->getNewsData($length, $start, false, $search, $column, $order);

        $data = [];

        if (!empty($total_data)) {
            foreach ($total_data as $post) {
                $postType = $this->post_type_model->getOne(['id' => $post['type']]) ?? [
                    'title' => '',
                    'img' => ''
                     ];
                $data[] = [
                    $post['id'],
                    $post['title'],
                    '<img class="pr-10" style="vertical-align: middle;" src="'.base_url("assets/img/news_type/".$postType['img']).'"/> '.$postType['title'].'',
                    $post['date'],
                    '<a class="pointer" href="'.base_url("c-admin/post/edit/".$post['id']."/".$this->UserID).'"><button class="btn btn-dark-blue btn-small">Редактировать</button></a>
                    <div onclick="c_delete(\''.base_url("c-admin/post/delete/".$post['id']."/".$this->UserID).'\',\''.$post['title'].'\',\'Post\')" class="pointer txt-orange ml-15 fw-600" style="display: inline-block;">Удалить</div>'
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

    public function getPayments() {
        $this->load->model("selectData");
        $draw   = intval($this->input->post("draw"));
        $start  = intval($this->input->post("start"));
        $length = intval($this->input->post("length"));
        $search = $this->input->post("search")["value"];
        $column = isset($this->input->post("order")[0]['column']) ? $this->input->post("order")[0]['column'] : -1;
        $order  = isset($this->input->post("order")[0]['dir']) ? $this->input->post("order")[0]['dir'] : -1;

        $total_data_count = $this->payments_model->getPaymentsData($length, $start, true, $search, $column, $order);
        $total_data    = $this->payments_model->getPaymentsData($length, $start, false, $search, $column, $order);

        $data = [];

        if (!empty($total_data)) {
            foreach ($total_data as $payment) {
                $data[] = [
                    $payment['id'], //0
                    $payment['trainer_nickname'], //1
                    $payment['created_at'], //2
                    $payment['date_time_from'], //3
                    '<a href="'.base_url("/c-admin/user/edit/".$payment["user_id"]."/".$this->UserID).'">'.(!empty($payment["student_nickname"]) ? $payment["student_nickname"] : $payment["student_name"] ?? 'Пользователь').'</a>',
                    $payment['total_price'], //5
                    !empty($payment['refund_amount']) ? $payment['refund_amount'] . ' RUB' : '0 RUB',//6
                    '<button class="btn btn-dark-blue btn-small" onclick="refund(
                                                                                 \''. 0 .'\',  
                                                                                 \''.$payment['yandex_kassa_id'].'\',
                                                                                 \''.$this->UserID.'\',
                                                                                 \''.'RUB'.'\',
                                                                                 \''.base_url("c-admin/refund/$this->UserID").'\',
                                                                                 \''.$payment['id'].'\')">Refund</button>'
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

    public function pages()
    {
        $current_u_can = $this->users_model->get_capabilities($this->UserID);
        $current_u_can = json_decode($current_u_can[0]["roles"]);
        $current_u_can = $current_u_can[0];

        if ($current_u_can[0] == "1" || $current_u_can[1] == "1") {
            $data = [];
            $data['UserID'] = $this->UserID;
            $data['user'] = $this->ion_auth->user()->row();
            $data['roles'] = json_decode($this->users_model->get_capabilities($this->UserID)[0]['roles'])[0];
            $data['output'] = $this->load->view('home/pages', $data, true);

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

        $total_data_count = $this->setting_model->getPagesData($length, $start, true, $search, $column, $order);
        $total_data    = $this->setting_model->getPagesData($length, $start, false, $search, $column, $order);

        $data = [];

        if (!empty($total_data)) {
            foreach ($total_data as $page) {
                $data[] = [
                    '<h4>'.$page['key'].'</h4>',
                    '<h5>'.$page['title'].'</h5>',
                    '<a href="'.$page['key'].'">Открыть Страницу</a>',
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

    public function fetchPage()
    {
        $response = new stdClass();
        $response->status = false;
        $id = $this->input->post('id');
        $response->title = '';
        $response->description = '';
        if(!empty($id)){
            $page = $this->setting_model->getOne(['id' => $id]);
            if(!empty($page)){
                if(!empty($page['title'])){
                    $response->title = $page['title'];
                }
                if(!empty($page['value'])){
                    $response->description = $page['value'];
                }
                $response->status = true;
            }
        }
        die(json_encode($response));
    }

    public function editPage()
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
                        'value' => trim($posts['description']),
                    ];
                    $this->setting_model->update($id, $data);
                    $response->status = true;
                }
            }
        } else {
            $response->errors = validation_errors();
        }
        die(json_encode($response));
    }

    public function blogs()
    {
        $current_u_can = $this->users_model->get_capabilities($this->UserID);
        $current_u_can = json_decode($current_u_can[0]["roles"]);
        $current_u_can = $current_u_can[0];

        if ($current_u_can[0] == "1" || $current_u_can[1] == "1") {
            $data = [];
            $data['UserID'] = $this->UserID;
            $data['user'] = $this->ion_auth->user()->row();
            $data['roles'] = json_decode($this->users_model->get_capabilities($this->UserID)[0]['roles'])[0];
            $data['output'] = $this->load->view('home/blogs', $data, true);

            $this->load->view('layout/home', $data);
        } else {
            redirect(base_url('404_override'));
            die();
        }
    }

    public function fetchBlogs()
    {
        $draw   = intval($this->input->post("draw"));
        $start  = intval($this->input->post("start"));
        $length = intval($this->input->post("length"));
        $search = $this->input->post("search")["value"];
        $column = isset($this->input->post("order")[0]['column']) ? $this->input->post("order")[0]['column'] : -1;
        $order  = isset($this->input->post("order")[0]['dir']) ? $this->input->post("order")[0]['dir'] : -1;

        $total_data_count = $this->blog_model->getBlogsData($length, $start, true, $search, $column, $order);
        $total_data    = $this->blog_model->getBlogsData($length, $start, false, $search, $column, $order);

        $data = [];

        $types = $this->blog_model->getTypes();

        if (!empty($total_data)) {
            foreach ($total_data as $blog) {

                $buttons =                     '<div class="row justify-content-center">
                        <button type="button" class="btn btn-dark-blue btn-small" aria-label="Left Align" onclick="getBlog('.$blog['id'].')">
                          <span class="glyphicon glyphicon-zoom-in" aria-hidden="true"></span>
                        </button>';
                if($blog['status'] == 4){
                    $buttons .= '<button type="button" class="btn btn-green btn-small" aria-label="Left Align" onclick="checkBlog('.$blog['id'].')">
                          <span class="glyphicon glyphicon glyphicon-ok" aria-hidden="true"></span>
                        </button>
                        <button type="button" class="btn btn-danger btn-small" aria-label="Left Align" onclick="disagree('.$blog['id'].')">
                          <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
                        </button>';
                }

                $data[] = [
                    '<h4>'.$blog['id'].'</h4>',
                    '<h5>'.$blog['title'].'</h5>',
                    $types[$blog['status']],
                    $blog['date'],
                    $buttons
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

    public function disagree($id)
    {
        $response = new stdClass();
        $response->status = false;
        if(!empty($id)){
            $data = [
                'status' => 3,
            ];
            $this->blog_model->update($id, $data);
            $response->status = true;
        }
        die(json_encode($response));
    }

    public function agree($id)
    {
        $response = new stdClass();
        $response->status = false;
        if(!empty($id)){
            $data = [
                'status' => 1,
            ];
            $this->blog_model->update($id, $data);
            $response->status = true;
        }
        die(json_encode($response));
    }

    public function fetchBlog()
    {
        $response = new stdClass();
        $response->status = false;
        $id = $this->input->post('id');
        $response->title = '';
        $response->description = '';
        $response->author = '';
        $response->image = '';

        if(!empty($id)){
            $blog = $this->blog_model->getOne(['id' => $id]);
            if(!empty($blog)){
                $user = $this->users_model->getOne(['id' => $blog['user_id']]);
                if(!empty($blog['title'])){
                    $response->title = $blog['title'];
                }
                if(!empty($blog['text'])){
                    $response->description = $blog['text'];
                }
                if(!empty($blog['logo'])){
                    $response->image = $this->config->item('main_url').'uploads/blogs/'.$blog['logo'];
                }
                if(!empty($user)){
                    $response->author = $user['name']. ' ' . $user['family'];
                }
                $response->status = true;
            }
        }
        die(json_encode($response));
    }

    public function agreeForMoney($id)
    {
        $response = new stdClass();
        $response->status = false;
        if(!empty($id)){
            $data = [
                'status' => 1,
            ];

            $amount = $this->input->post('amount');

            $blog = $this->blog_model->getOne(['id' => $id]);

            $date = new DateTime();
            $this->blog_payment_model->create([
                'blog_id' => $id,
                'user_id' => $blog['user_id'],
                'amount' => $amount,
                'datetime' => $date->format('Y-m-d H:i:s') . "\n"
            ]);

            $this->blog_model->update($id, $data);
            $response->status = true;
        }
        die(json_encode($response));
    }

    public function getNotRelatedPayments() {
        $this->load->model("selectData");
        $draw   = intval($this->input->post("draw"));
        $start  = intval($this->input->post("start"));
        $length = intval($this->input->post("length"));
        $search = $this->input->post("search")["value"];
        $column = isset($this->input->post("order")[0]['column']) ? $this->input->post("order")[0]['column'] : -1;
        $order  = isset($this->input->post("order")[0]['dir']) ? $this->input->post("order")[0]['dir'] : -1;

        $total_data_count = $this->payments_model->getNotRelatedPaymentsData($length, $start, true, $search, $column, $order);
        $total_data    = $this->payments_model->getNotRelatedPaymentsData($length, $start, false, $search, $column, $order);

        $data = [];

        if (!empty($total_data)) {
            foreach ($total_data as $payment) {
                $data[] = [
                    $payment['id'], //0
                    $payment['trainer_nickname'], //1
                    $payment['created_at'], //2
                    $payment['date_time_from'], //3
                    '<a href="'.base_url("/c-admin/user/edit/".$payment["user_id"]."/".$this->UserID).'">'.(!empty($payment["student_nickname"]) ? $payment["student_nickname"] : $payment["student_name"] ?? 'Пользователь').'</a>',
                    $payment['total_price'], //5
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
}

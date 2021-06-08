<?php


class Ranks_c extends CI_Controller
{
    private $post_per_page = 10;

    private const GAMES = [
        'dota' => 'DOTA 2',
        'cs' => 'CS:GO'
    ];

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
            'game_rank',
            'game_m',
            'users_model'
        ));
    }

    public function index()
    {
        $data = [];
        $data['images_url'] = $this->config->item('main_url') . $this->config->item('display_rank-pic');
        $data['games'] = $this->game_m->get([]);
        $data['roles'] = json_decode($this->users_model->get_capabilities($this->UserID)[0]['roles'])[0];
        $data['user'] = $this->ion_auth->user()->row();

        $data['output'] = $this->load->view('home/ranks', $data, true);
        return $this->load->view('layout/home', $data);
    }

    public function ajax()
    {
        $data = [
            'ranks' => [],
            'ranks_count' => 0,
            'limit' => $this->post_per_page
        ];
        if (isset($_POST['page']) and isset($_POST['game'])) {
            $offset = $this->post_per_page * ((int)$_POST['page'] - 1);

            $data['ranks_count'] = $this->game_rank
                ->get_by_game($_POST['game'], true);

            $data['ranks'] = $this->game_rank
                ->get_by_game(
                    $_POST['game'],
                    false,
                    $this->post_per_page,
                    $offset
                );
        }
        echo json_encode($data);
    }

    public function delete($id)
    {
        $this->game_rank->delete($id);

        redirect('c-admin/ranks');
    }

    public function add()
    {
        if (isset($_FILES['icon'])) {
            $this->load->library('upload');

            $config['upload_path'] = PUBLICPATH . '/' . $this->config->item('upload_rank-pic');
            if (!file_exists(PUBLICPATH . '/images')) {
                mkdir(PUBLICPATH . '/images', 0777);
                if (!file_exists(PUBLICPATH . '/images/temp')) {
                    mkdir(PUBLICPATH . '/images/temp', 0777);
                }
                if (!file_exists($config['upload_path'])) {
                    mkdir($config['upload_path'], 0777);
                }
            } else {
                if (!file_exists(PUBLICPATH . '/images/temp')) {
                    mkdir(PUBLICPATH . '/images/temp', 0777);
                }
                if (!file_exists($config['upload_path'])) {
                    mkdir($config['upload_path'], 0777);
                }
            }
            $config['allowed_types'] = 'jpeg|jpg|png';
            $config['max_size'] = 256831;
            $config['max_width'] = 5000;
            $config['max_height'] = 5000;
            $this->upload->initialize($config);

            $bytes = random_bytes(11);

            $ext = explode(".", $_FILES["icon"]["name"]);
            $ext = array_pop($ext);
            $fileName = bin2hex($bytes) . "." . $ext;

            $_FILES['icon']['name'] = $fileName;

            if (!$this->upload->do_upload('icon')) {
                $error = array('error' => $this->upload->display_errors());

                header("Status: 422 Data error");
                die();
            } else {
                $data = array('upload_data' => $this->upload->data());
                $rank_img = $data["upload_data"]["orig_name"];
            }
            $showRank = $this->game_m->getOne(['id' => $_POST['game_id']])['show_rank'];
            if(!$showRank){
                $this->game_rank->create([
                    'game_id' => $_POST['game_id'],
                    'points_from' => $_POST['from'] ?? 0,
                    'points_to' => $_POST['to'] ?? 0,
                    'rang' => $_POST['rank'] ?? 1,
                    'icon' => $fileName,
                ]);
            } else {
                $existRaw = $this->game_rank->getOne(['game_id' => $_POST['game_id']]);
                if($existRaw){
                    $this->game_rank->create([
                        'game_id' => $_POST['game_id'],
                        'points_from' => (int)$existRaw['points_from'] + 1,
                        'points_to' => (int)$existRaw['points_to'] + 1,
                        'rang' => $_POST['rank'] ?? 1,
                        'icon' => $fileName,
                    ]);
                } else {
                    $this->game_rank->create([
                        'game_id' => $_POST['game_id'],
                        'points_from' => $_POST['from'] ?? 1,
                        'points_to' => $_POST['to'] ?? 2,
                        'rang' => $_POST['rank'] ?? 1,
                        'icon' => $fileName,
                    ]);
                }
            }
        }
        echo json_encode('ok');
    }

    public function edit()
    {
        $fileName = null;

        if (isset($_FILES['icon'])) {
            $this->load->library('upload');

            $config['upload_path'] = PUBLICPATH . '/' . $this->config->item('upload_rank-pic');
            if (!file_exists(PUBLICPATH . '/images')) {
                mkdir(PUBLICPATH . '/images', 0777);
                if (!file_exists(PUBLICPATH . '/images/temp')) {
                    mkdir(PUBLICPATH . '/images/temp', 0777);
                }
                if (!file_exists($config['upload_path'])) {
                    mkdir($config['upload_path'], 0777);
                }
            } else {
                if (!file_exists(PUBLICPATH . '/images/temp')) {
                    mkdir(PUBLICPATH . '/images/temp', 0777);
                }
                if (!file_exists($config['upload_path'])) {
                    mkdir($config['upload_path'], 0777);
                }
            }
            $config['allowed_types'] = 'jpeg|jpg|png';
            $config['max_size'] = 256831;
            $config['max_width'] = 5000;
            $config['max_height'] = 5000;
            $this->upload->initialize($config);

            $bytes = random_bytes(11);

            $ext = explode(".", $_FILES["icon"]["name"]);
            $ext = array_pop($ext);
            $fileName = bin2hex($bytes) . "." . $ext;

            $_FILES['icon']['name'] = $fileName;

            if (!$this->upload->do_upload('icon')) {
                $error = array('error' => $this->upload->display_errors());

                header("Status: 422 Data error");
                die();
            } else {
                $data = array('upload_data' => $this->upload->data());
                $rank_img = $data["upload_data"]["orig_name"];
            }
        }

        $update_data = [];
        $update_data['id'] = $_POST['id'];
        $update_data['game_id'] = $_POST['game_id'];
        $showRank = $this->game_m->getOne(['id' => $_POST['game_id']])['show_rank'];
        if(!$showRank){
            $update_data['points_from'] = $_POST['from'];
            $update_data['points_to'] = $_POST['to'];
        }
        $update_data['rang'] = $_POST['rank'];

        if (isset($fileName)) {
            $update_data['icon'] = $fileName;
        }
        $this->game_rank->update($update_data);

        echo json_encode('ok');
    }
}
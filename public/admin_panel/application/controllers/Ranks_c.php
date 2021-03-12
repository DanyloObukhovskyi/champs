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
        $data['images_url'] = $this->config->item('main_url').$this->config->item('display_rank-pic');
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
        if(isset($_POST['page']) and isset($_POST['game'])){
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

    public function save()
    {
        if (isset($_POST['ranks'])){

            $ranks = json_decode($_POST['ranks'], true);

            foreach ($ranks as $rank){
                $this->game_rank->update($rank);
            }
        }
    }
}
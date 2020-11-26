<?php


class Footer_c extends CI_Controller
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
        $this->load->model('users_model');
        $this->user_capabilities = $this->config->item('user_capabilities');
    }

    public function index()
    {
        $data = [];

        $current_u_can = $this->users_model->get_capabilities($this->UserID);
        if(isset($current_u_can[0]["roles"])) {
            $current_u_can = json_decode($current_u_can[0]["roles"]);
            $current_u_can = $current_u_can[0];
        }
        $data['current_u_can'] = $current_u_can;

        $data['output'] = $this->load->view('home/footer', $data, true);
        $this->load->view('layout/home', $data);
    }
}
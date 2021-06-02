<?php


class Players_c extends CI_Controller
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
            'game_m',
            'person_m'
        ));
    }

    public function search()
    {
        $data = [];

        if (isset($_POST['search'])) {
            $data = $this->person_m->searchByNickOrName($_POST['search']);
        }
        echo json_encode($data);
    }
}
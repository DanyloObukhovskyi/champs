<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Slides_c extends CI_Controller
{

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
            'slide_model',
        ));
    }


    public function index()
    {
        $data = [];

        if (!empty($_POST)){
            $fileName = null;
            if(isset($_FILES["file"])) {
                if(!empty($_FILES["file"]["name"])) {
                    $files = $_FILES;
                    $this->load->library ('upload');

                    $config['upload_path'] = $this->config->item('upload_slide-pic');
                    $config['allowed_types'] = 'jpeg|jpg|png';
                    $this->upload->initialize($config);

                    $bytes = random_bytes (11);

                    $ext = explode (".", $files["file"]["name"]);
                    $ext = array_pop ($ext);
                    $fileName = bin2hex ($bytes).".".$ext;

                    $_FILES['file']['name'] = $fileName;

                    if (!$this->upload->do_upload('file')) {
                        $error = array ('error' => $this->upload->display_errors ());

                        redirect ($_SERVER["HTTP_REFERER"]);
                        die();
                    } else {
                        $data = array ('upload_data' => $this->upload->data());
                    }
                }
            }
            if (!empty($_POST['id']) and $_POST['id'] !== 0) {
                $this->slide_model->update(
                    $_POST['id'],
                    $_POST['url'],
                    $_POST['type'],
                    $_POST['text'],
                    $fileName
                );
            } else {
                $this->slide_model->create(
                    $_POST['url'],
                    $_POST['type'],
                    $_POST['text'],
                    $fileName
                );
            }
        }
        $data['image_path'] = $this->config->item('display_slide-pic');
        $data['slides'] = $this->slide_model->get_all_slides();
        $data['types'] = [
            Slide_model::HOME_TYPE => 'Главная',
            Slide_model::HOME_CS_TYPE => 'Главная CS:GO',
            Slide_model::GENERAL_TYPE => 'Общие',
        ];
        $data['roles'] = json_decode($this->users_model->get_capabilities($this->UserID)[0]['roles'])[0];

        $data['output'] = $this->load->view('home/slides', $data, true);
        $this->load->view('layout/home', $data);
    }

    public function delete($id)
    {
        $this->slide_model->delete_slide($id);

        redirect ($_SERVER["HTTP_REFERER"]);
    }
}
<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Add_c extends CI_Controller
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
        if ($this->UserID == 0) {
            redirect('login/auth');
            die();
        }
        $this->load->model(array(
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
            'game_m',
            'post_type_model',
            'post_type_attributes_model'
        ));
        $this->user_capabilities = $this->config->item('user_capabilities');
    }

    public function gallery($post_title = "", $post_content = "", $post_type = 0, $post_url = "", $article_img = "")
    {
        $post_date = (isset($_POST["post_date"])) ? trim($_POST["post_date"]) : '';
        if (!empty($post_title) && !empty($post_type) && !empty($post_url)) {
            $update_data = array();
            $update_data['title'] = $post_title;
            if(!empty($post_url)){
                $update_data['url'] = urlencode(str_replace(" ", "-", $post_url));
            }
            $update_data['text'] = "";

            $imgs_ur = $this->config->item('main_url').$this->config->item('display_article-pic');
            foreach ($article_img as $img) {
                $update_data['text'] .= "<img src='" . $imgs_ur . $img . "' style='width:250px; height:250px'>";
            }

            $update_data['logo'] = $article_img[0];
            $update_data['created_at'] = date("Y-m-d H:i:s");
            $update_data['updated_at'] = date("Y-m-d H:i:s");
            $update_data['date'] = (!empty($post_date)) ? $post_date : date("Y-m-d H:i:s");
            $update_data['type'] = $post_type;

            $created_id = $this->add_m->addNews($update_data);
            redirect(base_url('c-admin/post/edit/' . $created_id . "/" . $this->UserID));
            die();
        } else {
            redirect($_SERVER["HTTP_REFERER"]);
            die();
        }
    }

    public function stream($post_title = "", $post_content = "", $post_type = 0, $post_url = "", $article_img = "")
    {
        if (!empty($post_title) && !empty($post_content) && !empty($post_type)) {
            $post_date = (isset($_POST["post_date"])) ? trim($_POST["post_date"]) : '';
            $update_data = array();
            $update_data['title'] = $post_title;
            if(!empty($post_url)){
                $update_data['url'] = urlencode(str_replace(" ", "-", $post_url));
            }
            $update_data['text'] = $post_content;
//				$update_data['text'] = '<iframe width="560" height="315" src="'.$post_content.'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
            $update_data['logo'] = $article_img;
            $update_data['created_at'] = date("Y-m-d H:i:s");
            $update_data['updated_at'] = date("Y-m-d H:i:s");
            $update_data['date'] = (!empty($post_date)) ? $post_date : date("Y-m-d H:i:s");
            $update_data['type'] = $post_type;

            $created_id = $this->add_m->addNews($update_data);
            redirect(base_url('c-admin/post/edit/' . $created_id . "/" . $this->UserID));
            die();
        } else {
            redirect($_SERVER["HTTP_REFERER"]);
            die();
        }
    }

    public function video($post_title = "", $post_content = "", $post_type = 0, $post_url = "", $article_img = "")
    {
        if (!empty($post_title) && !empty($post_content) && !empty($post_type)) {
            $post_date = (isset($_POST["post_date"])) ? trim($_POST["post_date"]) : '';
            $update_data = array();
            $update_data['title'] = $post_title;
            if(!empty($post_url)){
                $update_data['url'] = urlencode(str_replace(" ", "-", $post_url));
            }
            $update_data['text'] = $post_content;
//				$update_data['text'] = '<iframe width="560" height="315" src="'.$post_content.'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
            $update_data['logo'] = $article_img;
            $update_data['created_at'] = date("Y-m-d H:i:s");
            $update_data['updated_at'] = date("Y-m-d H:i:s");
            $update_data['date'] = (!empty($post_date)) ? $post_date : date("Y-m-d H:i:s");
            $update_data['type'] = $post_type;

            $created_id = $this->add_m->addNews($update_data);
            redirect(base_url('c-admin/post/edit/' . $created_id . "/" . $this->UserID));
            die();
        } else {
            redirect($_SERVER["HTTP_REFERER"]);
            die();
        }
    }

    public function post($user_id = 0)
    {
        $current_u_can = $this->users_model->get_capabilities($this->UserID);
        if (isset($current_u_can[0]["roles"])) {
            $current_u_can = json_decode($current_u_can[0]["roles"]);
            $current_u_can = $current_u_can[0];
        } else {
            redirect($this->config->item(base_url('404_override')));
            die();
        }
        if (isset($_POST['add'])) {
            if (trim($_POST['add']) == true && (int)$user_id == $this->UserID) {

                $post_title = (isset($_POST["post_title"])) ? trim($_POST["post_title"]) : '';
                $post_content = (isset($_POST["post_content"])) ? trim($_POST["post_content"]) : '';
                $post_type = (isset($_POST["post_type"])) ? trim($_POST["post_type"]) : '';
                $post_url = (isset($_POST["post_url"])) ? trim($_POST["post_url"]) : '';
                $post_date = (isset($_POST["post_date"])) ? trim($_POST["post_date"]) : '';
                $post_is_top = (isset($_POST['is_top']));
                $post_tags = (!empty($_POST["tags"])) ? explode(',', trim($_POST["tags"])) : [];
                $post_game = (isset($_POST["game"])) ? trim($_POST["game"]) : '';
                $post_type_attribute = $this->post_type_attributes_model->getone([
                    'news_type_id' => $post_type,
                    'value'        => 1
                ]);
                if(!empty($post_type_attribute)) {
                    if ($post_type_attribute['attribute_id'] === PHOTO_GALERY) {
                        if (!empty($post_title) && !empty($post_type)) {
                            $article_img = array();
                            if (isset($_FILES["userfile"])) {
                                if (!empty($_FILES["userfile"]["name"])) {
                                    $count = count($_FILES['userfile']['name']);
                                    $files = $_FILES;
                                    $this->load->library('upload');
                                    for ($i = 0; $i < $count; $i++) {
                                        $config['upload_path'] = PUBLICPATH.'/'.$this->config->item('upload_article-pic');
                                        if(!file_exists(PUBLICPATH.'/images')){
                                            mkdir(PUBLICPATH.'/images', 0777);
                                            if(!file_exists(PUBLICPATH.'/images/temp')) {
                                                mkdir(PUBLICPATH.'/images/temp', 0777);
                                            }
                                            if (!file_exists($config['upload_path'])) {
                                                mkdir($config['upload_path'], 0777);
                                            }
                                        } else {
                                            if(!file_exists(PUBLICPATH.'/images/temp')) {
                                                mkdir(PUBLICPATH.'/images/temp', 0777);
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

                                        $_FILES['userfile']['type'] = $files['userfile']['type'][$i];
                                        $_FILES['userfile']['tmp_name'] = $files['userfile']['tmp_name'][$i];
                                        $_FILES['userfile']['error'] = $files['userfile']['error'][$i];
                                        $_FILES['userfile']['size'] = $files['userfile']['size'][$i];

                                        $bytes = random_bytes(11);

                                        $ext = explode(".", $files["userfile"]["name"][$i]);
                                        $ext = array_pop($ext);
                                        $fileName = bin2hex($bytes) . "." . $ext;

                                        $_FILES['userfile']['name'] = $fileName;

                                        if (!$this->upload->do_upload()) {
                                            $error = array('error' => $this->upload->display_errors());
                                            redirect($_SERVER["HTTP_REFERER"]);
                                            die();
                                        } else {
                                            $data = array('upload_data' => $this->upload->data());
                                            $article_img[$i] = $data["upload_data"]["orig_name"];
                                            $image_patch = $config['upload_path'];
                                            $this->compressImage($image_patch.'/'.$fileName, $image_patch);
                                        }
                                    }
                                }
                            }
                            $this->gallery($post_title, $post_content, $post_type, $post_url, $article_img);
                            $this->session->set_flashdata(
                                'message',
                                'Вы успешно создали статью. Вы можете отредактировать вашу статью'
                            );
                            redirect($_SERVER["HTTP_REFERER"]);
                            die();
                        }
                    }

                    if (!empty($post_title) && !empty($post_content) && !empty($post_type)) {
                        $article_img = "";
                        if (isset($_FILES["userfile"])) {
                            if (!empty($_FILES["userfile"]["name"])) {
                                $config['upload_path'] = PUBLICPATH.'/'.$this->config->item('upload_article-pic');
                                if (!file_exists(PUBLICPATH.'/images')) {
                                    mkdir(PUBLICPATH.'/images', 0777);
                                }
                                if (!file_exists(PUBLICPATH.'/images/temp')) {
                                    mkdir(PUBLICPATH.'/images/temp', 0777);
                                }
                                if (!file_exists($config['upload_path'])) {
                                    mkdir($config['upload_path'], 0777);
                                }
                                $config['allowed_types'] = 'jpeg|jpg|png';
                                $config['max_size'] = 5048;
                                $config['max_width'] = 3000;
                                $config['max_height'] = 3000;

                                $this->load->library('upload', $config);

                                $bytes = random_bytes(11);

                                $ext = explode(".", $_FILES["userfile"]["name"]);
                                $ext = array_pop($ext);
                                $fileName = bin2hex($bytes) . "." . $ext;

                                $_FILES["userfile"]["name"] = $fileName;
                                if (!$this->upload->do_upload('userfile')) {
                                    $error = array('error' => $this->upload->display_errors());
                                    redirect($_SERVER["HTTP_REFERER"]);
                                    die();
                                } else {
                                    $data = array('upload_data' => $this->upload->data());
                                    $article_img = $data["upload_data"]["orig_name"];
                                    $image_patch = PUBLICPATH.'/'.$this->config->item('upload_article-pic');
                                    $this->compressImage($image_patch.'/'.$fileName, $image_patch);
                                }
                            }
                        }

                        if (!empty($post_type_attribute)) {
                            if ($post_type_attribute['attribute_id'] === STREAM) {
                                $this->stream($post_title, $post_content, $post_type, $post_url, $article_img);
                                $this->session->set_flashdata(
                                    'message',
                                    'Вы успешно создали статью. Вы можете отредактировать вашу статью'
                                );
                                redirect($_SERVER["HTTP_REFERER"]);
                                die();
                            }
                            if ($post_type_attribute['attribute_id'] === VIDEO) {
                                $this->video($post_title, $post_content, $post_type, $post_url, $article_img);
                                $this->session->set_flashdata(
                                    'message',
                                    'Вы успешно создали статью. Вы можете отредактировать вашу статью'
                                );
                                redirect($_SERVER["HTTP_REFERER"]);
                                die();
                            }
                        }

                        $update_data = array();
                        $update_data['title'] = $post_title;
                        if(!empty($post_url)){
                            $update_data['url'] = urlencode(str_replace(" ", "-", $post_url));
                        }
                        $update_data['text'] = $post_content;
                        $update_data['logo'] = $article_img;
                        $update_data['created_at'] = date("Y-m-d H:i:s");
                        $update_data['updated_at'] = date("Y-m-d H:i:s");
                        $update_data['date'] = (!empty($post_date)) ? $post_date : date("Y-m-d H:i:s");
                        $update_data['type'] = $post_type;
                        $update_data['game_id'] = $post_game;
                        $update_data['is_top'] = $post_is_top;

                        $created_id = $this->add_m->addNews($update_data);

                        foreach ($post_tags as $tag) {
                            $this->post_tags_model->create_tag($created_id, $tag);
                        }
                        $this->session->set_flashdata(
                            'message',
                            'Вы успешно создали статью. Вы можете отредактировать вашу статью'
                        );
                        redirect(base_url('c-admin/post/edit/' . $created_id . "/" . $this->UserID));
                        die();
                    } else {
                        if(empty($post_title)){
                            $this->session->set_flashdata('error','Вы не заполнили заголовок');
                        }
                        if(empty($post_content)){
                            $this->session->set_flashdata('error','Вы не заполнили контент');
                        }
                        redirect($_SERVER["HTTP_REFERER"]);
                        die();
                    }
                }
            } else {
                redirect($_SERVER["HTTP_REFERER"]);
                die();
            }
        }
        if ($this->UserID != (int)$user_id) {
            redirect($this->config->item('login_Ok'));
            die();
        }

        $data['UserID'] = $this->UserID;
        $data['user'] = $this->ion_auth->user()->row();
        $data['current_u_can'] = $current_u_can;
        $data['games'] = $this->game_m->get_all();
        $data['roles'] = json_decode($this->users_model->get_capabilities($this->UserID)[0]['roles'])[0];
        $data['post_types'] = $this->post_type_model->get([]);

        $data['output'] = $this->load->view('add/article', $data, true);
        $this->load->view('layout/add', $data);
    }

    public function user($user_id = 0)
    {
        $current_u_can = $this->users_model->get_capabilities($this->UserID);
        if (isset($current_u_can[0]["roles"])) {
            $current_u_can = json_decode($current_u_can[0]["roles"]);
            $current_u_can = $current_u_can[0];
        } else {
            redirect($this->config->item(base_url('404_override')));
            die();
        }
        if (isset($_POST['add']) && (int)$user_id == $this->UserID) {
            if (trim($_POST['add']) == true) {
                $nickname = (isset($_POST["nickname"]) && !empty($_POST["nickname"])) ? trim($_POST["nickname"]) : '';
                $Email = (isset($_POST["Email"]) && !empty($_POST["Email"])) ? trim($_POST["Email"]) : '';

                $new_passw = (isset($_POST["new_password"]) && !empty($_POST["new_password"])) ? trim($_POST["new_password"]) : '';
                $new_passw_confirm = (isset($_POST["new_confirm"]) && !empty($_POST["new_confirm"])) ? trim($_POST["new_confirm"]) : '';

                $mask = "ROLE_USER";

                $user_capabilities = array($mask);

                $update_data = array();
                if (!empty($nickname)) {
                    $update_data['nickname'] = $nickname;
                } else {
                    redirect($_SERVER["HTTP_REFERER"]);
                    die();
                }
                if (!empty($Email)) {
                    $update_data['email'] = $Email;
                } else {
                    redirect($_SERVER["HTTP_REFERER"]);
                    die();
                }

                if ($new_passw == $new_passw_confirm && !empty($new_passw)) {
                    $this->load->model(array('Ion_auth_model'));
                    $update_data['password'] = $this->create_user_passw($new_passw);
                } else {
                    redirect($_SERVER["HTTP_REFERER"]);
                    die();
                }

                $update_data['roles'] = json_encode($user_capabilities);
                $created_id = $this->add_m->addUser($update_data);

                if (isset($_FILES["userfile"])) {
                    if (!empty($_FILES["userfile"]["name"])) {
                        $config['upload_path'] = PUBLICPATH.'/'.$this->config->item('upload_profile-pic');
                        if(!file_exists(PUBLICPATH.'/uploads')){
                            mkdir(PUBLICPATH.'/uploads', 0777);
                            if (!file_exists($config['upload_path'])) {
                                mkdir($config['upload_path'], 0777);
                            }
                        } else {
                            if (!file_exists($config['upload_path'])) {
                                mkdir($config['upload_path'], 0777);
                            }
                        }
                        $config['allowed_types'] = 'jpeg|jpg|png';
                        $config['max_size'] = 2048;
                        $config['max_width'] = 1920;
                        $config['max_height'] = 1080;

                        $this->load->library('upload', $config);

                        $bytes = random_bytes(11);

                        $ext = explode(".", $_FILES["userfile"]["name"]);
                        $ext = array_pop($ext);
                        $fileName = bin2hex($bytes) . "." . $ext;

                        $_FILES["userfile"]["name"] = $fileName;
                        if (!$this->upload->do_upload('userfile')) {
                            $error = array('error' => $this->upload->display_errors());
                        } else {
                            $data = array('upload_data' => $this->upload->data());
                            $this->load->model("edit_m");
                            $this->edit_m->change_user_img($created_id, $data["upload_data"]["orig_name"]);
                        }
                    } else {
                        $this->load->model("edit_m");
                        $this->edit_m->change_user_img($created_id, "prof-pic.svg");
                    }

                } else {
                    $this->load->model("edit_m");
                    $this->edit_m->change_user_img($created_id, "prof-pic.svg");
                }

                redirect(base_url("c-admin/user/edit/$created_id/$this->UserID"));
                die();
            }
        } else {
            if ($this->UserID != (int)$user_id) {
                redirect($_SERVER["HTTP_REFERER"]);
                die();
            }

            $data['UserID'] = $this->UserID;
            $data['user'] = $this->ion_auth->user()->row();
            $data['current_u_can'] = $current_u_can;
            $data['roles'] = json_decode($this->users_model->get_capabilities($this->UserID)[0]['roles'])[0];

            $data['output'] = $this->load->view('add/user', $data, true);
            $this->load->view('layout/add', $data);
        }
    }

    public function trainer($user_id = 0)
    {
        $current_u_can = $this->users_model->get_capabilities($this->UserID);
        if (isset($current_u_can[0]["roles"])) {
            $current_u_can = json_decode($current_u_can[0]["roles"]);
            $current_u_can = $current_u_can[0];
        } else {
            redirect($this->config->item(base_url('404_override')));
            die();
        }

        if (isset($_POST['add'])) {
            if (trim($_POST['add']) == true && (int)$user_id == $this->UserID) {
                $nickname = (isset($_POST["nickname"]) && !empty($_POST["nickname"])) ? trim($_POST["nickname"]) : '';
                $Email = (isset($_POST["Email"]) && !empty($_POST["Email"])) ? trim($_POST["Email"]) : '';
                $new_passw = (isset($_POST["new_password"]) && !empty($_POST["new_password"])) ? trim($_POST["new_password"]) : '';
                $new_passw_confirm = (isset($_POST["new_confirm"]) && !empty($_POST["new_confirm"])) ? trim($_POST["new_confirm"]) : '';
                $method = (isset($_POST["method"]) && !empty($_POST["method"])) ? trim($_POST["method"]) : '';
                $game = (isset($_POST["game"]) && !empty($_POST["game"])) ? trim($_POST["game"]) : '';
                $twitch = (isset($_POST["twitch"]) && !empty($_POST["twitch"])) ? trim($_POST["twitch"]) : '';
                $admin_percentage = (isset($_POST["admin_percentage"]) && !empty($_POST["admin_percentage"])) ? trim($_POST["admin_percentage"]) : '';
                $videos = (isset($_POST["videos"]) && !empty($_POST["videos"])) ? $_POST["videos"] : [];
                $rank = (isset($_POST["rank"]) && !empty($_POST["rank"])) ? trim($_POST["rank"]) : '';
                $achievements = (isset($_POST["achievements"]) && !empty($_POST["achievements"])) ? $_POST["achievements"] : [];
                $awards = (isset($_POST["awards"]) && !empty($_POST["awards"])) ? $_POST["awards"] : [];
                $trainings = (isset($_POST["training"]) && !empty($_POST["training"])) ? $_POST["training"] : [];
                $prices = (isset($_POST["price"]) && !empty($_POST["price"])) ? $_POST["price"] : [];

                if (!empty($nickname) && !empty($Email) && !empty($new_passw) && !empty($new_passw_confirm)) {

                    $mask = "ROLE_USER";
                    $user_capabilities = array($mask);

                    $update_data = array();

                    $update_data['nickname'] = $nickname;
                    $update_data['email'] = $Email;
                    $update_data['istrainer'] = 1;
                    if ($new_passw == $new_passw_confirm) {
                        $this->load->model(array('Ion_auth_model'));
                        $update_data['password'] = $this->create_user_passw($new_passw);
                    } else {
                        $this->session->set_flashdata(
                            'message',
                            'Ваши пароли не совпадают'
                        );
                        redirect($_SERVER["HTTP_REFERER"]);
                        die();
                    }

                    $update_data['roles'] = json_encode($user_capabilities);
                    $update_data['game_id'] = (int)$game;
                    $update_data['rang'] = $rank;

                    $where = array("email" => $Email);
                    $check_user = $this->users_model->get_all($where, false, array(), array(), true, true);
                    if (!empty($check_user[0])) {
                        $check_user = $check_user[0];
                        if (isset($check_user['email'])) {
                            $this->edit_m->updateUser($check_user['id'], $update_data);
                            $created_id = $check_user['id'];
                        }
                    } else {
                        $created_id = $this->add_m->addUser($update_data);
                    }

                    $update_data = array();
                    $update_data['method'] = $method;
                    $update_data['userid'] = $created_id;
                    $update_data['twitch'] = $twitch;
                    $update_data['admin_percentage'] = $admin_percentage;

                    $check_teacher = $this->trainers_model->check_teacher_data($created_id);
                    if (!empty($check_teacher[0])) {
                        $check_teacher = $check_teacher[0];

                        $teacher_id = $this->edit_m->updateTeacher($check_teacher['userid'], $update_data);
                    } else {
                        $teacher_id = $this->add_m->addTeacher($update_data);
                    }
                    $this->trainer_video->deleteRecords($created_id);
                    foreach ($videos as $video) {
                        $this->trainer_video->create($created_id, $video);
                    }
                    foreach (Trainer_lesson_price_m::PRICE_TYPES as $type => $title) {
                        $this->trainer_lesson_price_m->create_or_update(
                            $teacher_id,
                            $type,
                            $prices[$type] ?? 0,
                            isset($trainings[$type])
                        );
                    }

                    $this->trainer_achievement->delete_records($created_id);
                    foreach ($achievements as $achievement) {
                        $this->trainer_achievement->create($teacher_id, $achievement);
                    }
                    $this->trainer_award_model->delete_records($created_id);
                    foreach ($awards as $award) {
                        $this->trainer_award_model->create($created_id, $award);
                    }


                    if (isset($_FILES["userfile"])) {
                        if (!empty($_FILES["userfile"]["name"])) {
                            $config['upload_path'] = PUBLICPATH.'/'.$this->config->item('upload_trainers-pic');
                            if(!file_exists(PUBLICPATH.'/uploads')){
                                mkdir(PUBLICPATH.'/uploads', 0777);
                                if (!file_exists($config['upload_path'])) {
                                    mkdir($config['upload_path'], 0777);
                                }
                            } else {
                                if (!file_exists($config['upload_path'])) {
                                    mkdir($config['upload_path'], 0777);
                                }
                            }
                            $config['allowed_types'] = 'jpeg|jpg|png|svg';
                            $config['max_size'] = 5120;
                            $config['max_width'] = 1080;
                            $config['max_height'] = 1080;

                            $this->load->library('upload', $config);

                            $bytes = random_bytes(11);

                            $ext = explode(".", $_FILES["userfile"]["name"]);
                            $ext = array_pop($ext);
                            $fileName = bin2hex($bytes) . "." . $ext;

                            $_FILES["userfile"]["name"] = $fileName;
                            if (!$this->upload->do_upload('userfile')) {
                                $error = array('error' => $this->upload->display_errors());
                            } else {
                                $data = array('upload_data' => $this->upload->data());
                                $this->load->model("edit_m");
                                $this->edit_m->change_user_img($created_id, $data["upload_data"]["orig_name"]);
                            }
                            if ($ext === 'svg') {
                                $path = PUBLICPATH.'/'.$this->config->item('upload_trainers-pic') . $fileName;
                                if(!file_exists(PUBLICPATH.'/uploads')){
                                    mkdir(PUBLICPATH.'/uploads', 0777);
                                    if (!file_exists(PUBLICPATH.'/'.$this->config->item('upload_trainers-pic'))) {
                                        mkdir(PUBLICPATH.'/'.$this->config->item('upload_trainers-pic'), 0777);
                                    }
                                } else {
                                    if (!file_exists(PUBLICPATH.'/'.$this->config->item('upload_trainers-pic'))) {
                                        mkdir(PUBLICPATH.'/'.$this->config->item('upload_trainers-pic'), 0777);
                                    }
                                }
                                move_uploaded_file($_FILES['userfile']['tmp_name'], $path);
                                $data = array('upload_data' => $this->upload->data());
                                $this->load->model("edit_m");
                                $this->edit_m->change_user_img($id, $fileName);
                            }
                        } else {
                            $this->load->model("edit_m");
                            $this->edit_m->change_user_img($created_id, "prof-pic.svg");
                        }

                    } else {
                        $this->load->model("edit_m");
                        $this->edit_m->change_user_img($created_id, "prof-pic.svg");
                    }


                } else {
                    if(empty($nickname)){
                        $this->session->set_flashdata(
                            'message',
                            'Вы не добавили Никнейм'
                        );
                    }
                    if(empty($Email)){
                        $this->session->set_flashdata(
                            'message',
                            'Вы не добавили Емейл'
                        );
                    }
                    if(empty($new_passw)){
                        $this->session->set_flashdata(
                            'message',
                            'Вы не добавили пароль'
                        );
                    }
                    if(!empty($new_passw) && empty($new_passw_confirm)){
                        $this->session->set_flashdata(
                            'message',
                            'Вы не подтвердили пароль'
                        );
                    }
                    redirect($_SERVER["HTTP_REFERER"]);
                    die();
                }
            }
            $this->session->set_flashdata(
                'success',
                'Вы успешно создали запись тренера. Вы можете отредактировать ее сейчас.'
            );
            redirect(base_url("c-admin/trainer/edit/$created_id/$this->UserID"));
            die();
        }
        //-----
        //-----
        if ($this->UserID != (int)$user_id) {
            redirect($this->config->item('login_Ok'));
            die();
        }
        $data = [];

        $data['UserID'] = $this->UserID;
        $data['user'] = $this->ion_auth->user()->row();
        $data['current_u_can'] = $current_u_can;
        $data['imgs_url'] = PUBLICPATH.'/'.$this->config->item('upload_trainers-pic');
        if(!file_exists(PUBLICPATH.'/uploads')){
            mkdir(PUBLICPATH.'/uploads', 0777);
            if (!file_exists($data['imgs_url'])) {
                mkdir($data['imgs_url'], 0777);
            }
        } else {
            if (!file_exists($data['imgs_url'])) {
                mkdir($data['imgs_url'], 0777);
            }
        }
        $data['awards'] = $this->award_model->get_all();
        $data['trainer_awards'] = [];
        $data['games'] = $this->game_m->get_all();
        $data['prices_types'] = Trainer_lesson_price_m::PRICE_TYPES;
        $data['roles'] = json_decode($this->users_model->get_capabilities($this->UserID)[0]['roles'])[0];

        $data['output'] = $this->load->view('add/trainer', $data, true);

        $this->load->view('layout/add', $data);
    }

    public function admin($user_id = 0)
    {
        $current_u_can = $this->users_model->get_capabilities($this->UserID);
        if (isset($current_u_can[0]["roles"])) {
            $current_u_can = json_decode($current_u_can[0]["roles"]);
            $current_u_can = $current_u_can[0];
        } else {
            redirect($this->config->item(base_url('404_override')));
            die();
        }
        if (isset($_POST['add'])) {
            if (trim($_POST['add']) == true && (int)$user_id == $this->UserID) {
                $nickname = (isset($_POST["nickname"]) && !empty($_POST["nickname"])) ? trim($_POST["nickname"]) : '';
                $Email = (isset($_POST["Email"]) && !empty($_POST["Email"])) ? trim($_POST["Email"]) : '';

                $new_passw = (isset($_POST["new_password"]) && !empty($_POST["new_password"])) ? trim($_POST["new_password"]) : '';
                $new_passw_confirm = (isset($_POST["new_confirm"]) && !empty($_POST["new_confirm"])) ? trim($_POST["new_confirm"]) : '';

                $mask = "0000";
                $mask[0] = (isset($_POST["main-admin"])) ? "1" : '0';
                $mask[1] = (isset($_POST["content-mn"])) ? "1" : '0';
                $mask[2] = (isset($_POST["statistics-mn"])) ? "1" : '0';
                $mask[3] = (isset($_POST["coach-mn"])) ? "1" : '0';
                if ($mask == "0000") {
                    redirect($_SERVER["HTTP_REFERER"]);
                    die();
                }

                $user_capabilities = array($mask);

                if (!empty($Email)) {
                    $where = array("email" => $Email);
                    $check_user = $this->users_model->get_all_admins($where, false, array(), array(), true, true);
                    if (!empty($check_user[0])) {
                        $check_user = $check_user[0];
                        if (isset($check_user['email'])) {
                            $update_data = array();
                            if (!empty($nickname)) {
                                $update_data['nickname'] = $nickname;
                            }

                            if ($new_passw == $new_passw_confirm && !empty($new_passw)) {
                                $this->load->model(array('Ion_auth_model'));
                                $update_data['password'] = $this->Ion_auth_model->hash_password($new_passw, FALSE, FALSE);
                            }

                            $update_data['roles'] = json_encode($user_capabilities);
                            $this->edit_m->updateAdmin($check_user['id'], $update_data);

                            redirect(base_url("c-admin/admin/edit/" . $check_user['id'] . "/$this->UserID"));
                            die();
                        }
                    }
                }
                $update_data = array();

                if (!empty($nickname)) {
                    $update_data['nickname'] = $nickname;
                } else {
                    redirect($_SERVER["HTTP_REFERER"]);
                    die();
                }

                if (!empty($Email)) {
                    $update_data['email'] = $Email;
                } else {
                    redirect($_SERVER["HTTP_REFERER"]);
                    die();
                }

                if ($new_passw == $new_passw_confirm && !empty($new_passw)) {
                    $this->load->model(array('Ion_auth_model'));
                    $update_data['password'] = $this->Ion_auth_model->hash_password($new_passw, FALSE, FALSE);
                } else {
                    redirect($_SERVER["HTTP_REFERER"]);
                    die();
                }
                $update_data['active'] = 1;
                $update_data['roles'] = json_encode($user_capabilities);
                $created_id = $this->add_m->addAdmin($update_data);

                $this->load->model("edit_m");
                $this->edit_m->change_user_img($created_id, "prof-pic.svg");

                redirect(base_url("c-admin/admin/edit/$created_id/$this->UserID"));
                die();
            } else {
                redirect($_SERVER["HTTP_REFERER"]);
                die();
            }
        }

        if ($this->UserID != (int)$user_id) {
            redirect($_SERVER["HTTP_REFERER"]);
            die();
        }

        $data['UserID'] = $this->UserID;
        $data['user'] = $this->ion_auth->user()->row();
        $data['current_u_can'] = $current_u_can;
        $data['roles'] = json_decode($this->users_model->get_capabilities($this->UserID)[0]['roles'])[0];
        $data['output'] = $this->load->view('add/admin', $data, true);
        $this->load->view('layout/add', $data);
    }

    function create_user_passw($new_passw)
    {
        $password = $new_passw;
        $algo = PASSWORD_BCRYPT;
        $cost = $cost ?? 13;
        $opsLimit = $opsLimit ?? max(4, \defined('SODIUM_CRYPTO_PWHASH_OPSLIMIT_INTERACTIVE') ? SODIUM_CRYPTO_PWHASH_OPSLIMIT_INTERACTIVE : 4);
        $memLimit = $memLimit ?? max(64 * 1024 * 1024, \defined('SODIUM_CRYPTO_PWHASH_MEMLIMIT_INTERACTIVE') ? SODIUM_CRYPTO_PWHASH_MEMLIMIT_INTERACTIVE : 64 * 1024 * 1024);

        if (3 > $opsLimit) {
            throw new \InvalidArgumentException('$opsLimit must be 3 or greater.');
        }

        if (10 * 1024 > $memLimit) {
            throw new \InvalidArgumentException('$memLimit must be 10k or greater.');
        }

        if ($cost < 4 || 31 < $cost) {
            throw new \InvalidArgumentException('$cost must be in the range of 4-31.');
        }

        $algos = array(1 => PASSWORD_BCRYPT, '2y' => PASSWORD_BCRYPT);

        if (\defined('PASSWORD_ARGON2I')) {
            $this->algo = $algos[2] = $algos['argon2i'] = (string)PASSWORD_ARGON2I;
        }

        if (\defined('PASSWORD_ARGON2ID')) {
            $this->algo = $algos[3] = $algos['argon2id'] = (string)PASSWORD_ARGON2ID;
        }

        if (null !== $algo) {
            $this->algo = $algos[$algo] ?? $algo;
        }

        $this->options = array(
            'cost' => $cost,
            'time_cost' => $opsLimit,
            'memory_cost' => $memLimit >> 10,
            'threads' => 1,
        );
        $hash = password_hash($password, $this->algo, $this->options);
        return $hash;
    }

    public function compressImage($patch, $sourcePatch)
    {
        $config_manip = array(
            'image_library' => 'gd2',
            'source_image' => $patch,
            'new_image' => $sourcePatch,
            'maintain_ratio' => TRUE,
            'width' => 1000,
        );

        $this->load->library('image_lib', $config_manip);
        if (!$this->image_lib->resize()) {
            echo '<pre>';
            var_dump($this->image_lib->display_errors());
            die;
            echo $this->image_lib->display_errors();
        }

        $this->image_lib->clear();
    }
}
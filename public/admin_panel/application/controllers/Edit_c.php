<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Edit_c extends CI_Controller
{
    private $UserID;

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
            'edit_m',
            'trainers_model',
            'delete_m',
            'add_m',
            'post_tags_model',
            'posts_model',
            'trainer_video',
            'trainer_achievement',
            'award_model',
            'trainer_award_model',
            'trainer_lesson_price_m',
            'game_m',
            'post_type_model',
            'post_type_attributes_model'
        ));
    }

    public function gallery($post_title = "", $post_content = "", $post_type = 0, $post_url = "", $article_img = "", $post_game = "", $post_id = 0, $post_is_top = null)
    {
        if (!empty($post_title) && !empty($post_type)) {
            $post_date = (isset($_POST["post_date"])) ? trim($_POST["post_date"]) : '';
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
            $update_data['game_id'] = $post_game;
            $update_data['is_top'] = $post_is_top;

            $this->edit_m->update_news($post_id, $update_data);
            redirect(base_url('c-admin/post/edit/' . $post_id . "/" . $this->UserID));
            die();
        } else {
            redirect($_SERVER["HTTP_REFERER"]);
            die();
        }
    }

    public function stream($post_title = "", $post_content = "", $post_type = 0, $post_url = "", $article_img = "", $post_game = '', $post_id = 0, $post_is_top = null)
    {
        if (!empty($post_title) && !empty($post_content) && !empty($post_type)) {
            $post_date = (isset($_POST["post_date"])) ? trim($_POST["post_date"]) : '';
            $update_data = array();
            $update_data['title'] = $post_title;
            if(!empty($post_url)){
                $update_data['url'] = urlencode(str_replace(" ", "-", $post_url));
            }
            $update_data['text'] = $post_content;
            if (!empty($article_img)) {
                $update_data['logo'] = $article_img;
            }
//				$update_data['text'] = '<iframe width="560" height="315" src="'.$post_content.'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
            $update_data['updated_at'] = date("Y-m-d H:i:s");
            $update_data['date'] = (!empty($post_date)) ? $post_date : date("Y-m-d H:i:s");
            $update_data['type'] = $post_type;
            $update_data['game_id'] = $post_game;
            $update_data['is_top'] = $post_is_top;

            $created_id = $this->edit_m->update_news($post_id, $update_data);
            redirect(base_url('c-admin/post/edit/' . $post_id . "/" . $this->UserID));
            die();
        } else {
            redirect($_SERVER["HTTP_REFERER"]);
            die();
        }
    }

    public function video($post_title = "", $post_content = "", $post_type = 0, $post_url = "", $article_img = "", $post_game = "", $post_id = 0, $post_is_top = null)
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
            if (!empty($article_img)) {
                $update_data['logo'] = $article_img;
            }
            $update_data['updated_at'] = date("Y-m-d H:i:s");
            $update_data['date'] = (!empty($post_date)) ? $post_date : date("Y-m-d H:i:s");
            $update_data['type'] = $post_type;
            $update_data['game_id'] = $post_game;
            $update_data['is_top'] = $post_is_top;

            $this->edit_m->update_news($post_id, $update_data);
            redirect(base_url('c-admin/post/edit/' . $post_id . "/" . $this->UserID));
            die();
        } else {
            redirect($_SERVER["HTTP_REFERER"]);
            die();
        }
    }

    public function post($post_id = 0, $user_id = 0)
    {
        $current_u_can = $this->users_model->get_capabilities($this->UserID);
        if (isset($current_u_can[0]["roles"])) {
            $current_u_can = json_decode($current_u_can[0]["roles"]);
            $current_u_can = $current_u_can[0];
        } else {
            redirect($this->config->item(base_url('404_override')));
            die();
        }
        if (isset($_POST['edit'])) {
            if (trim($_POST['edit']) == true && (int)$user_id == $this->UserID) {
                $post_title = (isset($_POST["post_title"])) ? trim($_POST["post_title"]) : '';
                $post_content = (isset($_POST["post_content"])) ? trim($_POST["post_content"]) : '';
                $post_type = (isset($_POST["post_type"])) ? trim($_POST["post_type"]) : '';
                $post_url = (isset($_POST["post_url"])) ? trim($_POST["post_url"]) : '';
                $post_date = (isset($_POST["post_date"])) ? trim($_POST["post_date"]) : '';
                $post_tags = (!empty($_POST["tags"])) ? explode(',', trim($_POST["tags"])) : [];
                $post_game = (isset($_POST["game"])) ? trim($_POST["game"]) : '';
                $post_is_top = (isset($_POST["is_top"])) and trim($_POST["is_top"]) === 'on' ? 1  : 0;

                $this->post_tags_model->delete_by_post_id($post_id);

                foreach ($post_tags as $tag) {
                    $this->post_tags_model->create_tag($post_id, $tag);
                }
                $post_type_attribute = $this->post_type_attributes_model->getone([
                    'news_type_id' => $post_type,
                    'value'        => 1
                ]);
                if(!empty($post_type_attribute)) {
                    if ($post_type_attribute['attribute_id'] === PHOTO_GALERY) {
                        if (!empty($post_title) && !empty($post_type) && !empty($post_url)) {
                            $article_img = array();
                            if (isset($_FILES["userfile"])) {
                                if (!empty($_FILES["userfile"]["name"])) {
                                    $count = count($_FILES['userfile']['name']);
                                    $files = $_FILES;
                                    $this->load->library('upload');
                                    for ($i = 0; $i < $count; $i++) {
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


                            $this->gallery($post_title, $post_content, $post_type, $post_url, $article_img, $post_game, $post_id, $post_is_top);
                            $this->session->set_flashdata(
                                'message',
                                '???? ?????????????? ?????????????????????????????? ???????? ????????????.'
                            );
                            redirect($_SERVER["HTTP_REFERER"]);
                            die();
                        }
                    }
                }
                $update_data = array();
                $article_img = "";
                if (!empty($post_title) && !empty($post_content) && !empty($post_type)) {
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
                                redirect($_SERVER["HTTP_REFERER"]);
                                die();
                            } else {
                                $data = array('upload_data' => $this->upload->data());
                                $article_img = $data["upload_data"]["orig_name"];
                                $update_data['logo'] = $article_img;
                                $image_patch = $config['upload_path'];
                                $this->compressImage($image_patch.'/'.$fileName, $image_patch);
                            }
                        }
                    }
                    if(!empty($post_type_attribute)) {
                        if ($post_type_attribute['attribute_id'] === STREAM) {
                            $this->stream($post_title, $post_content, $post_type, $post_url, $article_img, $post_game, $post_id, $post_is_top);
                            $this->session->set_flashdata(
                                'message',
                                '???? ?????????????? ?????????????????????????????? ???????? ????????????.'
                            );
                            redirect($_SERVER["HTTP_REFERER"]);
                            die();
                        }
                        if ($post_type_attribute['attribute_id'] === VIDEO) {
                            $this->video($post_title, $post_content, $post_type, $post_url, $article_img, $post_game, $post_id, $post_is_top);
                            $this->session->set_flashdata(
                                'message',
                                '???? ?????????????? ?????????????????????????????? ???????? ????????????.'
                            );
                            redirect($_SERVER["HTTP_REFERER"]);
                            die();
                        }
                    }
                    if(!empty($post_url)){
                        $update_data['url'] = urlencode(str_replace(" ", "-", $post_url));
                    }
                    $update_data['title'] = $post_title;
                    $update_data['text'] = $post_content;
                    $update_data['updated_at'] = date("Y-m-d H:i:s");
                    $update_data['date'] = (!empty($post_date)) ? $post_date : date("Y-m-d H:i:s");
                    $update_data['type'] = $post_type;
                    $update_data['game_id'] = $post_game;
                    $update_data['is_top'] = $post_is_top;

                    $this->edit_m->update_news($post_id, $update_data);
                    $this->session->set_flashdata(
                        'message',
                        '???? ?????????????? ?????????????????????????????? ???????? ????????????.'
                    );
                    redirect(base_url('c-admin/post/edit/' . $post_id . "/" . $this->UserID));
                    die();
                } else {
                    if(empty($post_title)){
                        $this->session->set_flashdata('error','???? ???? ?????????????????? ??????????????????');
                    }
                    if(empty($post_content)){
                        $this->session->set_flashdata('error','???? ???? ?????????????????? ??????????????');
                    }
                    if(empty($post_url)){
                        $this->session->set_flashdata('error','???? ???? ?????????????????? url');
                    }
                    redirect($_SERVER["HTTP_REFERER"]);
                    die();
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
        $data['roles'] = json_decode($this->users_model->get_capabilities($this->UserID)[0]['roles'])[0];
        $data['post_types'] = $this->post_type_model->get([]);

        $tags = $this->post_tags_model->get_by_post_id($post_id);
        $data['tags'] = $this->post_tags_model->tags_to_string($tags);

        $this->load->model(array('posts_model'));
        $where = array("id" => $post_id);
        $data['post_fields'] = $this->posts_model->get_all(
            $where, $is_count = false, $sort = [], $limit = []
        );
        if (isset($data['post_fields'][0])) {
            $data['post_fields'] = $data['post_fields'][0];
        } else {
            $data['post_fields'] = array();
            redirect($_SERVER["HTTP_REFERER"]);
            die();
        }
        $data['games'] = $this->game_m->get_all();
        $data['current_u_can'] = $current_u_can;
        $data['imgs_url'] = $this->config->item('main_url').$this->config->item('display_article-pic');

        $data['output'] = $this->load->view('edit/article', $data, true);
        $this->load->view('layout/edit', $data);
    }

    public function user($id = 0, $user_id = 0)
    {
        $data['roles'] = json_decode($this->users_model->get_capabilities($this->UserID)[0]['roles'])[0];
        $current_u_can = $this->users_model->get_capabilities($this->UserID);
        if (isset($current_u_can[0]["roles"])) {
            $current_u_can = json_decode($current_u_can[0]["roles"]);
            $current_u_can = $current_u_can[0];
        } else {
            redirect($this->config->item(base_url('404_override')));
            die();
        }
        if (isset($_POST['edit'])) {
            if (trim($_POST['edit']) == true && (int)$user_id == $this->UserID) {
                $nickname = (isset($_POST["nickname"]) && !empty($_POST["nickname"])) ? trim($_POST["nickname"]) : '';
                $Email = (isset($_POST["Email"]) && !empty($_POST["Email"])) ? trim($_POST["Email"]) : '';

                $new_passw = (isset($_POST["new_password"]) && !empty($_POST["new_password"])) ? trim($_POST["new_password"]) : '';
                $new_passw_confirm = (isset($_POST["new_confirm"]) && !empty($_POST["new_confirm"])) ? trim($_POST["new_confirm"]) : '';

                $add_trainer = (isset($_POST["add_trainer"]) && !empty($_POST["add_trainer"])) ? trim($_POST["add_trainer"]) : '';

                $mask = "ROLE_USER";

                $user_capabilities = array($mask);

                $update_data = array();
                $update_data['nickname'] = $nickname;

                if (!empty($Email)) {
                    $update_data['email'] = $Email;
                }
                if (!empty($add_trainer)) {
                    $update_data['istrainer'] = 1;
                    $check_teacher = $this->trainers_model->check_teacher_data($id);
                    if (!empty($check_teacher[0])) {
                        $check_teacher = $check_teacher[0];
                        if (!isset($check_teacher['userid'])) {
                            $this->add_m->addTeacher(array("userid" => $id));
                        }
                    } else {
                        $this->add_m->addTeacher(array("userid" => $id));
                    }
                } else {
                    $update_data['istrainer'] = 0;
                }

                if ($new_passw == $new_passw_confirm && !empty($new_passw)) {
                    $this->load->model(array('Ion_auth_model'));
//						$update_data['password'] = $this->Ion_auth_model->hash_password($new_passw, FALSE, FALSE);
                    $update_data['password'] = $this->create_user_passw($new_passw);
                }

                $update_data['roles'] = json_encode($user_capabilities);
                $this->edit_m->updateUser($id, $update_data);
                if (!empty($add_trainer)) {
                    redirect(base_url("c-admin/trainer/edit/$id/$user_id"));
                    die();
                }

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

        $sort = array();
        $offset = 0;
        $where = array("id" => $id);
        $data['user_info'] = $this->users_model->get_all($where, false, $sort, array($offset, 1), true, true);

        $roles = $data['user_info'][0]['roles'];
        $roles = json_decode($roles);
        $data['user_info'][0]['roles'] = $roles[0];
        $data['imgs_url'] = $this->config->item('main_url').$this->config->item('display_profile-pic');
        $data['upload_url'] = PUBLICPATH.'/'.$this->config->item('upload_profile-pic');
        if(!file_exists(PUBLICPATH.'/uploads')){
            mkdir(PUBLICPATH.'/uploads', 0777);
            if (!file_exists($data['upload_url'])) {
                mkdir($data['upload_url'], 0777);
            }
        } else {
            if (!file_exists($data['upload_url'])) {
                mkdir($data['upload_url'], 0777);
            }
        }
        $data['current_u_can'] = $current_u_can;
        $data['output'] = $this->load->view('edit/user', $data, true);

        $this->load->view('layout/edit', $data);
    }

    public function trainer($id = 0, $user_id = 0)
    {
        $current_u_can = $this->users_model->get_capabilities($this->UserID);
        if (isset($current_u_can[0]["roles"])) {
            $current_u_can = json_decode($current_u_can[0]["roles"]);
            $current_u_can = $current_u_can[0];
        } else {
            redirect($this->config->item(base_url('404_override')));
            die();
        }
        $sort = array();
        $offset = 0;
        $where = array("id" => $id);
        $data['user_info'] = $this->trainers_model->get_all_trainers($where, 'all', false, $sort, array($offset, 1), true, true);
        if (isset($_POST['edit'])) {
            if (trim($_POST['edit']) == true && (int)$user_id == $this->UserID) {
                $nickname = (isset($_POST["nickname"]) && !empty($_POST["nickname"])) ? trim($_POST["nickname"]) : '';
                $Email = (isset($_POST["Email"]) && !empty($_POST["Email"])) ? trim($_POST["Email"]) : '';
                $new_passw = (isset($_POST["new_password"]) && !empty($_POST["new_password"])) ? trim($_POST["new_password"]) : '';

                $new_passw_confirm = (isset($_POST["new_confirm"]) && !empty($_POST["new_confirm"])) ? trim($_POST["new_confirm"]) : '';
                $method = (isset($_POST["method"]) && !empty($_POST["method"])) ? trim($_POST["method"]) : '';
                $game = (isset($_POST["game"]) && !empty($_POST["game"])) ? trim($_POST["game"]) : '';

                $twitch = (isset($_POST["twitch"]) && !empty($_POST["twitch"])) ? trim($_POST["twitch"]) : '';
                $admin_percentage = (isset($_POST["admin_percentage"]) && !empty($_POST["admin_percentage"])) ? trim($_POST["admin_percentage"]) : '';
                $discord = (isset($_POST["discord"]) && !empty($_POST["discord"])) ? trim($_POST["discord"]) : '';

                $delete_trainer = (isset($_POST["delete_trainer"]) && !empty($_POST["delete_trainer"])) ? trim($_POST["delete_trainer"]) : '';
                $videos = (isset($_POST["videos"]) && !empty($_POST["videos"])) ? $_POST["videos"] : [];
                $rank = (isset($_POST["rank"]) && !empty($_POST["rank"])) ? trim($_POST["rank"]) : '';

                $achievements = (isset($_POST["achievements"]) && !empty($_POST["achievements"])) ? $_POST["achievements"] : [];
                $awards = (isset($_POST["awards"]) && !empty($_POST["awards"])) ? $_POST["awards"] : [];
                
                $trainings = (isset($_POST["training"]) && !empty($_POST["training"])) ? $_POST["training"] : [];
                $prices = (isset($_POST["price"]) && !empty($_POST["price"])) ? $_POST["price"] : [];

                $this->trainer_video->deleteRecords($data['user_info'][0]['id']);
                foreach ($videos as $video) {
                    $this->trainer_video->create($data['user_info'][0]['id'], $video);
                }
                $this->trainer_award_model->delete_records($data['user_info'][0]['id']);
                foreach ($awards as $award) {
                    $this->trainer_award_model->create($data['user_info'][0]['id'], $award);
                }
                if (!empty($nickname) && !empty($Email)) {
                    $mask = "ROLE_USER";
                    $user_capabilities = array($mask);

                    $update_data = array();

                    $update_data['nickname'] = $nickname;
                    $update_data['email'] = $Email;
                    $update_data['game_id'] = (int)$game;


                    if ($new_passw == $new_passw_confirm && !empty($new_passw)) {
                        $this->load->model(array('Ion_auth_model'));
                        $update_data['password'] = $this->create_user_passw($new_passw);
                    } else {
                        if (!empty($new_passw)) {
                            $this->session->set_flashdata(
                                'message',
                                '???????? ???????????? ???? ??????????????????'
                            );
                            redirect($_SERVER["HTTP_REFERER"]);
                            die();
                        }
                    }

                    if (!empty($delete_trainer)) {
//                        $update_data['istrainer'] = 0;
                        $update_data_for_teacher['is_active'] = false;
                        $this->edit_m->updateTeacher($id, $update_data_for_teacher);
//                        $this->delete_m->delete_trainer_as_teacher($id);
                    } else {
                        $update_data_for_teacher['is_active'] = true;
                        $this->edit_m->updateTeacher($id, $update_data_for_teacher);
                    }
                    $update_data['discord'] = $discord;

                    $update_data['roles'] = json_encode($user_capabilities);
                    $update_data['rang'] = $rank;

                    $this->edit_m->updateUser($id, $update_data);
                    $this->session->set_flashdata(
                        'success',
                        '???? ?????????????? ?????????????????????????????? ???????????? ??????????????.'
                    );
                    if (empty($delete_trainer)) {
                        $update_data = array();
                        $update_data['method'] = $method;
                        $update_data['twitch'] = $twitch;
                        $update_data['admin_percentage'] = $admin_percentage;

                        $trainer_id = $this->edit_m->updateTeacher($id, $update_data);

                        foreach (Trainer_lesson_price_m::PRICE_TYPES as $type => $title){
                            $this->trainer_lesson_price_m->create_or_update(
                                $trainer_id,
                                $type,
                                $prices[$type] ?? 0,
                                isset($trainings[$type])
                            );
                        }

                        $this->trainer_achievement->delete_records($trainer_id);
                        foreach ($achievements as $achievement) {
                            $this->trainer_achievement->create($trainer_id, $achievement);
                        }
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
                                $this->edit_m->change_user_img($id, $data["upload_data"]["orig_name"]);
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
                        }
                    } else {
                        $this->load->model("edit_m");
                        $this->edit_m->change_user_img($id, "prof-pic.svg");
                    }
                } else {
                    if(empty($nickname)){
                        $this->session->set_flashdata(
                            'message',
                            '???? ???? ???????????????? ??????????????'
                        );
                    }
                    if(empty($Email)){
                        $this->session->set_flashdata(
                            'message',
                            '???? ???? ???????????????? ??????????'
                        );
                    }
                    if(empty($new_passw)){
                        $this->session->set_flashdata(
                            'message',
                            '???? ???? ???????????????? ????????????'
                        );
                    }
                    if(!empty($new_passw) && empty($new_passw_confirm)){
                        $this->session->set_flashdata(
                            'message',
                            '???? ???? ?????????????????????? ????????????'
                        );
                    }
                    redirect($_SERVER["HTTP_REFERER"]);
                    die();
                }
                if (!empty($delete_trainer)) {
                    redirect($_SERVER["HTTP_REFERER"]);
                    die();
                } else {
                    redirect($_SERVER["HTTP_REFERER"]);
                    die();
                }
            }
        }
        if ($this->UserID != (int)$user_id) {
            redirect($this->config->item('login_Ok'));
            die();
        }

        $data['UserID'] = $this->UserID;
        $data['ProfileID'] = $id;
        $data['user'] = $this->ion_auth->user()->row();

        if (empty($data["user_info"])) {
            redirect($_SERVER["HTTP_REFERER"]);
            die();
        }

        $trainer = $this->trainers_model->check_teacher_data($id);
        $trainer = $trainer[0] ?? null;

        $roles = $data['user_info'][0]['roles'];
        $roles = json_decode($roles);
        $data['user_info'][0]['roles'] = $roles[0];
        $data['videos'] = $this->trainer_video->get_all_for_user($data['user_info'][0]['id']);
        $data['achievements'] = $this->trainer_achievement->get_by_trainer_id($trainer['id']);
        $data['imgs_url'] = $this->config->item('main_url').$this->config->item('display_trainers-pic');
        $data['upload_url'] = PUBLICPATH.'/'.$this->config->item('upload_trainers-pic');
        if(!file_exists(PUBLICPATH.'/uploads')){
            mkdir(PUBLICPATH.'/uploads', 0777);
            if (!file_exists($data['upload_url'])) {
                mkdir($data['upload_url'], 0777);
            }
        } else {
            if (!file_exists($data['upload_url'])) {
                mkdir($data['upload_url'], 0777);
            }
        }
        $data['current_u_can'] = $current_u_can;
        $data['awards'] = $this->award_model->get_all();
        $data['trainer_awards'] = [];
        $data['games'] = $this->game_m->get_all();
        $data['prices_types'] = Trainer_lesson_price_m::PRICE_TYPES;
        $data['roles'] = json_decode($this->users_model->get_capabilities($this->UserID)[0]['roles'])[0];

        $trainer_prices = $this->trainer_lesson_price_m->get_by_trainer_id($trainer['id']);
        $data['trainer_prices'] = [];

        foreach (Trainer_lesson_price_m::PRICE_TYPES as $type => $title){
            $trainer_price = array_search($type, array_column($trainer_prices, 'lesson_type'), true);
            $data['trainer_prices'][$type] = $trainer_price !== false ? $trainer_prices[$trainer_price] ?? null: null;
        }
        $trainer_awards = $this->trainer_award_model->get_by_trainer_id($id);

        foreach ($trainer_awards as $award){
            $data['trainer_awards'][] = $award['award_id'];
        }
        $data['output'] = $this->load->view('edit/trainer', $data, true);
        $this->load->view('layout/edit', $data);
    }


    public function admin($id = 0, $user_id = 0)
    {
        $current_u_can = $this->users_model->get_capabilities($this->UserID);
        if (isset($current_u_can[0]["roles"])) {
            $current_u_can = json_decode($current_u_can[0]["roles"]);
            $current_u_can = $current_u_can[0];
        } else {
            redirect($this->config->item(base_url('404_override')));
            die();
        }
        if (isset($_POST['edit'])) {
            if (trim($_POST['edit']) == true) {
                $nickname = (isset($_POST["nickname"]) && !empty($_POST["nickname"])) ? trim($_POST["nickname"]) : '';
                $Email = (isset($_POST["Email"]) && !empty($_POST["Email"])) ? trim($_POST["Email"]) : '';

                $new_passw = (isset($_POST["new_password"]) && !empty($_POST["new_password"])) ? trim($_POST["new_password"]) : '';
                $new_passw_confirm = (isset($_POST["new_confirm"]) && !empty($_POST["new_confirm"])) ? trim($_POST["new_confirm"]) : '';

                $mask = "00000";
                $mask[0] = (isset($_POST["main-admin"])) ? "1" : '0';
                $mask[1] = (isset($_POST["content-mn"])) ? "1" : '0';
                $mask[2] = (isset($_POST["statistics-mn"])) ? "1" : '0';
                $mask[3] = (isset($_POST["coach-mn"])) ? "1" : '0';
                $mask[4] = (isset($_POST["seo-specialist"])) ? "1" : '0';

                $user_capabilities = array($mask);

                $update_data = array();
                $update_data['nickname'] = $nickname;

                if (!empty($Email)) {
                    $update_data['email'] = $Email;
                }

                if ($new_passw == $new_passw_confirm && !empty($new_passw)) {
                    $this->load->model(array('Ion_auth_model'));
                    $update_data['password'] = $this->Ion_auth_model->hash_password($new_passw, FALSE, FALSE);
                }

                $update_data['roles'] = json_encode($user_capabilities);
                $this->edit_m->updateAdmin($id, $update_data);
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

        $sort = array();
        $offset = 0;
        $where = array("id" => $id);
        $data['user_info'] = $this->users_model->get_all_admins($where, false, $sort, array($offset, 1), true, true);

        $roles = $data['user_info'][0]['roles'];
        $roles = json_decode($roles);
        $data['user_info'][0]['roles'] = $roles[0];
        $data['current_u_can'] = $current_u_can;
        $data['roles'] = json_decode($this->users_model->get_capabilities($this->UserID)[0]['roles'])[0];

        $data['output'] = $this->load->view('edit/admin', $data, true);
        $this->load->view('layout/edit', $data);
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
<?php


class Comments_c extends CI_Controller
{
    public $per_page = 10;

    public const TYPES = [
        'matches' => 'Матчи',
        'news' => 'Новости',
        'reviews' => 'Отзывы'
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
            'users_model',
            'comment_m'
        ));
    }

    public function index()
    {
        $data = [];

        $data['types'] = self::TYPES;
        $data['auth_id'] = $this->UserID;
        $data['roles'] = json_decode($this->users_model->get_capabilities($this->UserID)[0]['roles'])[0];

        $data['output'] = $this->load->view('home/comments', $data, true);
        return $this->load->view('layout/home', $data);
    }

    public function ajax()
    {
        $data = [
            'comments' => [],
            'comments_count' => 0,
            'limit' => $this->per_page
        ];

        if (isset($_POST['page'])) {
            $offset = $this->per_page * ((int)$_POST['page'] - 1);

            if (array_key_exists($_POST['type'], Comment_m::TYPES)) {
                $table = Comment_m::TYPES[$_POST['type']];

                $data['comments_count'] = $this->comment_m
                    ->get_paginate($table, true);

                $comments = $this->comment_m
                    ->get_paginate(
                        $table,
                        false,
                        $this->per_page,
                        $offset
                    );

                if ($_POST['type'] === 'reviews') {
                    foreach ($comments as $comment) {
                        $data['comments'][] = [
                            'id' => $comment['id'],
                            'user_id' => $comment['student_id'],
                            'comment' => $comment['comment'],
                            'created_at' => $comment['created_at']
                        ];
                    }
                } else {
                    $data['comments'] = $comments;
                }
            }
        }
        echo json_encode($data);
    }

    public function save()
    {
        if (!empty($_POST['comments']) and isset($_POST['type'])) {
            $comments = json_decode($_POST['comments'], true);

            if (array_key_exists($_POST['type'], Comment_m::TYPES)) {
                foreach ($comments as $comment) {

                    if ($_POST['type'] === 'reviews') {
                        $data = [
                            'id' => $comment['id'],
                            'comment' => $comment['comment']
                        ];

                        $this->comment_m->update(
                            Comment_m::TYPES[$_POST['type']],
                            $data
                        );
                    } else {
                        $this->comment_m->update(
                            Comment_m::TYPES[$_POST['type']],
                            $comment
                        );
                    }
                }
            }
        }
        echo 'ok';
    }

    public function delete($type, $id)
    {
        if (array_key_exists($type, Comment_m::TYPES)) {
            $this->comment_m->delete(Comment_m::TYPES[$type], $id);
        }
        redirect('c-admin/comments');
    }
}
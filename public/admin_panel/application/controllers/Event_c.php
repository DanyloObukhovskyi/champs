<?php
defined('BASEPATH') or exit('No direct script access allowed');


class Event_c extends CI_Controller
{
    private $per_page = 10;

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
            'event_model',
            'flag_model',
            'game_m',
            'map_m',
            'event_map_pool_m',
            'team_m',
            'event_prize_distribution_m',
            'event_team_attending_m',
            'player_m',
            'person_m',
            'player_statistics_m',
            'event_stream_m',
            'country_m'
        ));
    }

    public function index()
    {
        $data = [];
        $data['images_url'] = $this->config->item('main_url') . $this->config->item('display_event-pic');
        $data['roles'] = json_decode($this->users_model->get_capabilities($this->UserID)[0]['roles'])[0];
        $data['user'] = $this->ion_auth->user()->row();

        $data['output'] = $this->load->view('home/events', $data, true);
        $this->load->view('layout/home', $data);
    }

    public function ajax()
    {
        $draw = intval($this->input->post("draw"));
        $start = intval($this->input->post("start"));
        $length = intval($this->input->post("length"));
        $search = $this->input->post("search")["value"];
        $column = isset($this->input->post("order")[0]['column']) ? $this->input->post("order")[0]['column'] : -1;
        $order = isset($this->input->post("order")[0]['dir']) ? $this->input->post("order")[0]['dir'] : -1;

        $total_data_count = $this->event_model->getEventData($length, $start, true, $search, $column, $order);
        $total_data = $this->event_model->getEventData($length, $start, false, $search, $column, $order);

        $data = [];

        if (!empty($total_data)) {
            foreach ($total_data as $event) {
                $data[] = [
                    $event['id'],
                    $event['name'],
                    $event['started_at'],
                    $event['ended_at'],
                    $event['prize'],
                    $event['location'],
                    '<a href="' . base_url('c-admin/events/edit/' . $event['id']) . '"
                                      class="btn btn-dark-blue btn-small">
                                       Редактировать
                                   </a>
                    <a href="' . base_url('c-admin/events/delete/' . $event['id']) . '"
                                            class="pointer txt-orange ml-15 fw-600">
                                       Удалить
                                   </a>'
                ];
            }
        }

        $output = [
            "draw" => $draw,
            "recordsTotal" => $total_data_count,
            "recordsFiltered" => $total_data_count,
            "data" => $data,
        ];
        die(json_encode($output));
    }

    public function edit($id = 0)
    {
        $data = [];
        $event = $this->event_model->get_by_id($id);
        $data['images_url'] = $this->config->item('main_url') . $this->config->item('display_event-pic');
        $data['statuses'] = Event_model::STATUSES;
        $data['games'] = $this->game_m->get_all();
        $data['roles'] = json_decode($this->users_model->get_capabilities($this->UserID)[0]['roles'])[0];

        if (isset($event)) {
            $data['event'] = $event;
        } else {
            redirect(base_url('c-admin/events/'));
        }
        if (isset($_POST['edit'])) {
            $upload_data = [];
            $maps = !empty($_POST['maps']) ? $_POST['maps'] : [];
            $upload_data['name'] = isset($_POST['name']) ? $_POST['name'] : '';
            $upload_data['prize'] = isset($_POST['prize']) ? $_POST['prize'] : '';
            $upload_data['location'] = isset($_POST['location']) ? $_POST['location'] : '';
            $upload_data['command_count'] = isset($_POST['command_count']) ? $_POST['command_count'] : null;
            $upload_data['url'] = isset($_POST['url']) ? $_POST['url'] : '';
            $upload_data['flag_icon_id'] = !empty($_POST['flag_icon_id']) ? $_POST['flag_icon_id'] : null;
            $upload_data['started_at'] = isset($_POST['started_at']) ? $_POST['started_at'] : null;
            $upload_data['ended_at'] = isset($_POST['ended_at']) ? $_POST['ended_at'] : null;
            $upload_data['status'] = !empty($_POST['status']) ? $_POST['status'] : null;
            $upload_data['game_id'] = isset($_POST['game_id']) ? $_POST['game_id'] : null;
            $upload_data['is_online'] = isset($_POST['is_online']) ? (int)$_POST['is_online'] : 0;

            $upload_data['image'] = null;
            $upload_data['image_header'] = null;

            if (isset($upload_data['started_at'])) {
                $upload_data['started_at'] = (new DateTime($upload_data['started_at']))->format('Y-m-d');
            }
            if (isset($upload_data['ended_at'])) {
                $upload_data['ended_at'] = (new DateTime($upload_data['ended_at']))->format('Y-m-d');
            }
            if (!empty($_FILES["image"]["name"])) {
                $upload_data['image'] = $this->uploadImage('image');
            }
            if (!empty($_FILES["image_header"]["name"])) {
                $upload_data['image_header'] = $this->uploadImage('image_header');
            }
            if (!empty($maps)) {
                $this->event_map_pool_m->delete_by_event($id);

                foreach ($maps as $map) {
                    $this->event_map_pool_m->create(array(
                        'event_id' => $id,
                        'map_id' => $map
                    ));
                }
            }
            $event_id = $this->event_model->update($id, $upload_data);
            $this->session->set_flashdata('message', 'Вы успешно отредактировали событие');
            redirect(base_url('c-admin/events'));
        }

        $data['flags'] = $this->flag_model->get_all();
        $data['roles'] = json_decode($this->users_model->get_capabilities($this->UserID)[0]['roles'])[0];

        $data['maps'] = $this->map_m->get_all();
        $data['event_map_pool'] = [];
        $data['user'] = $this->ion_auth->user()->row();

        $event_map_pool = $this->event_map_pool_m->get(['event_id' => $id]);

        foreach ($event_map_pool as $event_map) {
            foreach ($data['maps'] as $map) {
                if ($map['id'] === $event_map['map_id']) {
                    $data['event_map_pool'][] = $map;
                }
            }
        }
        $data['teams'] = $this->team_m->get_all();

        $data['event_prize_distributions'] = $this->event_model->get_prize_distribution($id);

        $data['output'] = $this->load->view('edit/event', $data, true);
        $this->load->view('layout/home', $data);
    }

    public function create()
    {
        $data[] = '';
        $data['images_url'] = $this->config->item('main_url') . $this->config->item('display_event-pic');
        $data['roles'] = json_decode($this->users_model->get_capabilities($this->UserID)[0]['roles'])[0];

        $data['flags'] = $this->flag_model->get_all();
        $data['statuses'] = Event_model::STATUSES;
        $data['games'] = $this->game_m->get_all();

        if (isset($_POST['create'])) {
            $upload_data = [];

            $maps = !empty($_POST['maps']) ? $_POST['maps'] : [];
            $prize_distributions = !empty($_POST['prize_distributions']) ? $_POST['prize_distributions'] : [];
            $teams_attending = !empty($_POST['teams-attending']) ? $_POST['teams-attending'] : [];
            $streams = !empty($_POST['streams']) ? $_POST['streams'] : [];

            $upload_data['name'] = isset($_POST['name']) ? $_POST['name'] : '';
            $upload_data['prize'] = isset($_POST['prize']) ? $_POST['prize'] : '';
            $upload_data['location'] = isset($_POST['location']) ? $_POST['location'] : '';
            $upload_data['command_count'] = isset($_POST['command_count']) ? $_POST['command_count'] : null;
            $upload_data['url'] = isset($_POST['url']) ? $_POST['url'] : '';
            $upload_data['flag_icon_id'] = !empty($_POST['flag_icon_id']) ? $_POST['flag_icon_id'] : null;
            $upload_data['started_at'] = isset($_POST['started_at']) ? $_POST['started_at'] : null;
            $upload_data['ended_at'] = isset($_POST['ended_at']) ? $_POST['ended_at'] : null;
            $upload_data['status'] = !empty($_POST['status']) ? $_POST['status'] : null;
            $upload_data['game_id'] = isset($_POST['game_id']) ? $_POST['game_id'] : null;
            $upload_data['is_online'] = isset($_POST['is_online']) ? (int)$_POST['is_online'] : 0;

            $upload_data['image'] = null;
            $upload_data['image_header'] = null;

            $upload_data['views'] = 0;

            if (isset($upload_data['started_at'])) {
                $upload_data['started_at'] = (new DateTime($upload_data['started_at']))->format('Y-m-d');
            }
            if (isset($upload_data['ended_at'])) {
                $upload_data['ended_at'] = (new DateTime($upload_data['ended_at']))->format('Y-m-d');
            }
            if (!empty($_FILES["image"]["name"])) {
                $upload_data['image'] = $this->uploadImage('image');
            }
            if (!empty($_FILES["image_header"]["name"])) {
                $upload_data['image_header'] = $this->uploadImage('image_header');
            }
            $event_id = $this->event_model->create($upload_data);

            if (!empty($streams)) {
                foreach ($streams as $stream) {
                    $this->event_stream_m->create(array(
                        'event_id' => $event_id,
                        'flag_icon_id' => $stream['icon_id'],
                    ));
                }
            }
            if (!empty($maps)) {
                foreach ($maps as $map) {
                    $this->event_map_pool_m->create(array(
                        'event_id' => $event_id,
                        'map_id' => $map
                    ));
                }
            }
            if (!empty($prize_distributions)) {
                foreach ($prize_distributions as $prize_distribution) {
                    $this->event_prize_distribution_m->create(array(
                        'event_id' => $event_id,
                        'team_id' => $prize_distribution['team_id'] ?? null,
                        'prize' => $prize_distribution['prize'] ?? null,
                        'position' => $prize_distribution['position'] ?? null,
                    ));
                }
            }
            $this->event_team_attending_m->delete_by([
                'event_id' => $event_id,
            ]);
            foreach ($teams_attending as $team_attending) {
                $this->event_team_attending_m->create([
                    'event_id' => $event_id,
                    'team_id' => $team_attending['team_id'],
                    'number' => $team_attending['number']
                ]);

                foreach ($team_attending['players'] as $player) {
                    $playerItem = $this->player_m->get_one_by([
                        'team_id' => $team_attending['team_id'],
                        'person_id' => $player,
                    ]);

                    if (empty($playerItem)) {
                        $this->player_m->create([
                            'team_id' => $team_attending['team_id'],
                            'person_id' => $player,
                        ]);
                    }
                }
            }
            $this->session->set_flashdata('message', 'Вы успешно создали событие');
            redirect(base_url('c-admin/events'));
        }
        $data['roles'] = json_decode($this->users_model->get_capabilities($this->UserID)[0]['roles'])[0];
        $data['maps'] = $this->map_m->get_all();
        $data['teams'] = $this->team_m->get_all();
        $data['user'] = $this->ion_auth->user()->row();

        $data['output'] = $this->load->view('add/event', $data, true);
        $this->load->view('layout/home', $data);
    }

    public function uploadImage($name)
    {
        $fileName = null;

        $files = $_FILES;
        $this->load->library('upload');

        $config['upload_path'] = PUBLICPATH . '/' . $this->config->item('upload_event-pic');
        if (!file_exists(PUBLICPATH . '/uploads')) {
            mkdir(PUBLICPATH . '/images/temp', 0777);
        }
        if (!file_exists($config['upload_path'])) {
            mkdir($config['upload_path'], 0777);
        }
        $config['allowed_types'] = 'jpeg|jpg|png';
        $config['max_size'] = 256831;
        $config['max_width'] = 5000;
        $config['max_height'] = 5000;
        $this->upload->initialize($config);

        $_FILES[$name]['type'] = $files[$name]['type'];
        $_FILES[$name]['tmp_name'] = $files[$name]['tmp_name'];
        $_FILES[$name]['error'] = $files[$name]['error'];
        $_FILES[$name]['size'] = $files[$name]['size'];

        $bytes = random_bytes(11);

        $ext = explode(".", $files[$name]["name"]);
        $ext = array_pop($ext);
        $fileName = bin2hex($bytes) . "." . $ext;

        $_FILES[$name]['name'] = $fileName;

        if (!$this->upload->do_upload($name)) {
            $error = array('error' => $this->upload->display_errors());

            redirect($_SERVER["HTTP_REFERER"]);
            die();
        }

        return $fileName;
    }

    public function delete($id)
    {
        $this->event_model->delete($id);

        redirect('c-admin/events');
        die();
    }

    public function get_prize_distribution($id)
    {
        $prizeDistributions = $this->event_model->get_prize_distribution($id);
        $data = [];
        foreach ($prizeDistributions as $prizeDistribution) {
            $prizeDistribution['action'] = '
             <div class="action">
                 <button type="button"
                        onclick="app.$refs.prizeDistribution.delete(' . $prizeDistribution['id'] . ')"
                        class="btn btn-orange remove"
                        style="display: flex; align-items: center;">
                     <img width="25px"
                         src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQyNyA0MjcuMDAxMzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTIzMi4zOTg0MzggMTU0LjcwMzEyNWMtNS41MjM0MzggMC0xMCA0LjQ3NjU2My0xMCAxMHYxODljMCA1LjUxOTUzMSA0LjQ3NjU2MiAxMCAxMCAxMCA1LjUyMzQzNyAwIDEwLTQuNDgwNDY5IDEwLTEwdi0xODljMC01LjUyMzQzNy00LjQ3NjU2My0xMC0xMC0xMHptMCAwIiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtMTE0LjM5ODQzOCAxNTQuNzAzMTI1Yy01LjUyMzQzOCAwLTEwIDQuNDc2NTYzLTEwIDEwdjE4OWMwIDUuNTE5NTMxIDQuNDc2NTYyIDEwIDEwIDEwIDUuNTIzNDM3IDAgMTAtNC40ODA0NjkgMTAtMTB2LTE4OWMwLTUuNTIzNDM3LTQuNDc2NTYzLTEwLTEwLTEwem0wIDAiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0yOC4zOTg0MzggMTI3LjEyMTA5NHYyNDYuMzc4OTA2YzAgMTQuNTYyNSA1LjMzOTg0MyAyOC4yMzgyODEgMTQuNjY3OTY4IDM4LjA1MDc4MSA5LjI4NTE1NiA5LjgzOTg0NCAyMi4yMDcwMzIgMTUuNDI1NzgxIDM1LjczMDQ2OSAxNS40NDkyMTloMTg5LjIwMzEyNWMxMy41MjczNDQtLjAyMzQzOCAyNi40NDkyMTktNS42MDkzNzUgMzUuNzMwNDY5LTE1LjQ0OTIxOSA5LjMyODEyNS05LjgxMjUgMTQuNjY3OTY5LTIzLjQ4ODI4MSAxNC42Njc5NjktMzguMDUwNzgxdi0yNDYuMzc4OTA2YzE4LjU0Mjk2OC00LjkyMTg3NSAzMC41NTg1OTMtMjIuODM1OTM4IDI4LjA3ODEyNC00MS44NjMyODItMi40ODQzNzQtMTkuMDIzNDM3LTE4LjY5MTQwNi0zMy4yNTM5MDYtMzcuODc4OTA2LTMzLjI1NzgxMmgtNTEuMTk5MjE4di0xMi41Yy4wNTg1OTMtMTAuNTExNzE5LTQuMDk3NjU3LTIwLjYwNTQ2OS0xMS41MzkwNjMtMjguMDMxMjUtNy40NDE0MDYtNy40MjE4NzUtMTcuNTUwNzgxLTExLjU1NDY4NzUtMjguMDYyNS0xMS40Njg3NWgtODguNzk2ODc1Yy0xMC41MTE3MTktLjA4NTkzNzUtMjAuNjIxMDk0IDQuMDQ2ODc1LTI4LjA2MjUgMTEuNDY4NzUtNy40NDE0MDYgNy40MjU3ODEtMTEuNTk3NjU2IDE3LjUxOTUzMS0xMS41MzkwNjIgMjguMDMxMjV2MTIuNWgtNTEuMTk5MjE5Yy0xOS4xODc1LjAwMzkwNi0zNS4zOTQ1MzEgMTQuMjM0Mzc1LTM3Ljg3ODkwNyAzMy4yNTc4MTItMi40ODA0NjggMTkuMDI3MzQ0IDkuNTM1MTU3IDM2Ljk0MTQwNyAyOC4wNzgxMjYgNDEuODYzMjgyem0yMzkuNjAxNTYyIDI3OS44Nzg5MDZoLTE4OS4yMDMxMjVjLTE3LjA5NzY1NiAwLTMwLjM5ODQzNy0xNC42ODc1LTMwLjM5ODQzNy0zMy41di0yNDUuNWgyNTB2MjQ1LjVjMCAxOC44MTI1LTEzLjMwMDc4MiAzMy41LTMwLjM5ODQzOCAzMy41em0tMTU4LjYwMTU2Mi0zNjcuNWMtLjA2NjQwNy01LjIwNzAzMSAxLjk4MDQ2OC0xMC4yMTg3NSA1LjY3NTc4MS0xMy44OTQ1MzEgMy42OTE0MDYtMy42NzU3ODEgOC43MTQ4NDMtNS42OTUzMTMgMTMuOTI1NzgxLTUuNjA1NDY5aDg4Ljc5Njg3NWM1LjIxMDkzNy0uMDg5ODQ0IDEwLjIzNDM3NSAxLjkyOTY4OCAxMy45MjU3ODEgNS42MDU0NjkgMy42OTUzMTMgMy42NzE4NzUgNS43NDIxODggOC42ODc1IDUuNjc1NzgyIDEzLjg5NDUzMXYxMi41aC0xMjh6bS03MS4xOTkyMTkgMzIuNWgyNzAuMzk4NDM3YzkuOTQxNDA2IDAgMTggOC4wNTg1OTQgMTggMThzLTguMDU4NTk0IDE4LTE4IDE4aC0yNzAuMzk4NDM3Yy05Ljk0MTQwNyAwLTE4LTguMDU4NTk0LTE4LTE4czguMDU4NTkzLTE4IDE4LTE4em0wIDAiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0xNzMuMzk4NDM4IDE1NC43MDMxMjVjLTUuNTIzNDM4IDAtMTAgNC40NzY1NjMtMTAgMTB2MTg5YzAgNS41MTk1MzEgNC40NzY1NjIgMTAgMTAgMTAgNS41MjM0MzcgMCAxMC00LjQ4MDQ2OSAxMC0xMHYtMTg5YzAtNS41MjM0MzctNC40NzY1NjMtMTAtMTAtMTB6bTAgMCIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjwvZz48L3N2Zz4=">
                 </button>
             </div>
            ';

            $data[] = $prizeDistribution;
        }
        echo json_encode(['data' => $data]);
    }

    public function delete_prize_distribution($id)
    {
        $this->event_prize_distribution_m->delete($id);

        echo json_encode('ok');
    }

    public function add_prize_distribution($id)
    {
        $data = [
            'event_id' => $id,
            'team_id' => $_POST['team_id'],
            'prize' => $_POST['prize'],
            'position' => $_POST['position'],
        ];

        $this->event_prize_distribution_m->create($data);

        echo json_encode('ok');
    }

    public function get_teams_attending($id)
    {
        $teams = $this->event_team_attending_m->get([
            'event_id' => $id
        ]);

        $data = [];
        foreach ($teams as $team) {

            $team['players'] = [];
            $players = $this->player_m->get([
                'team_id' => $team['team_id'],
            ]);

            foreach ($players as $player) {
                $team['players'][] = $this->person_m->get_one($player['person_id']);
            }

            $team['team'] = $this->team_m->get_one($team['team_id']);

            $data[] = $team;
        }

        echo json_encode($data);
    }

    public function add_teams_attending($id)
    {
        $this->event_team_attending_m->create([
            'event_id' => $id,
            'team_id' => $_POST['team_id'] ?? null,
            'number' => $_POST['number'] ?? null
        ]);

        echo 'ok';
    }

    public function delete_teams_attending($id)
    {
        $res = $this->event_team_attending_m->delete_by([
            'id' => $_POST['id'],
        ]);

        echo 'ok';
    }

    public function add_player_to_team($id)
    {
        $res = $this->player_m->create([
            'person_id' => $_POST['person_id'],
            'team_id' => $_POST['team_id'],
        ]);

        echo 'ok';
    }

    public function delete_player_to_team($id)
    {
        $player = $this->player_m->get([
           'person_id' => $_POST['person_id'],
        ]);
        $player = $player[0] ?? null;

        if (isset($player)) {
            $this->player_statistics_m->delete_by([
                'player_id' => $player['id']
            ]);

            $this->player_m->delete_by([
                'person_id' => $_POST['person_id'],
                'team_id' => $_POST['team_id'],
            ]);
        }

        echo 'ok';
    }

    public function add_event_stream($id)
    {
        $this->event_stream_m->create([
            'event_id' => $id,
            'stream' => $_POST['stream'],
            'flag_icon_id' => $_POST['icon_id'],
        ]);

        echo json_encode('ok');
    }

    public function delete_event_stream($id)
    {
        $this->event_stream_m->delete($id);

        echo json_encode('ok');
    }

    public function get_event_streams($id)
    {
        $streams = $this->event_stream_m->get(['event_id' => $id]);

        $result = [];

        foreach ($streams as $stream) {
            $icon = $this->flag_model->get_one([
                'id' => $stream['flag_icon_id']
            ]);
            $stream['icon'] = $icon;

            $result[] = $stream;
        }

        echo json_encode($result);
    }
}
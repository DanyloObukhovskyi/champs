<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/datepicker/1.0.10/datepicker.min.css"
      integrity="sha512-YdYyWQf8AS4WSB0WWdc3FbQ3Ypdm0QCWD2k4hgfqbQbRCJBEgX0iAegkl2S1Evma5ImaVXLBeUkIlP6hQ1eYKQ=="
      crossorigin="anonymous"/>
<link rel="stylesheet" href="https://unpkg.com/vue-select@3.0.0/dist/vue-select.css">
<link rel="stylesheet" href="https://cdn.datatables.net/1.10.23/css/jquery.dataTables.min.css">
<style>
    #event-map-pool .add,
    #event-map-pool-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 60%;
    }

    #event-map-pool .add .btn,
    #event-map-pool-wrapper button {
        margin-left: 10px;
        margin-bottom: 6px;
    }

    .select2-container--default .select2-selection--single {
        height: 37px !important;
    }

    table thead tr th,
    table tbody tr td {
        text-align: center;
    }

    table tbody tr td .action {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    #event-prize-distribution-wrapper {
        width: 60%;
    }

    .v-select.vs--single.vs--searchable {
        min-width: 130px;
    }

    .vs__dropdown-toggle {
        min-height: 37px;
    }
</style>
<main class="flex create-new-website-page">
    <?php
    $errors = validation_errors('<li>', '</li>');
    if (!empty($errors)) { ?>
        <div class="alert callout" role="alert">
            <h5>Errors</h5>
            <ul>
                <?php print $errors; ?>
            </ul>
        </div>
    <?php } ?>
    <aside>
        <?php $activePath = 'events'; ?>
        <?php require_once APPPATH . 'views/sidebar.php' ?>
    </aside>
    <!--- ---->
    <?php

    $params = '';
    if (!empty($sort_fields)) {
        $params = array();
        foreach ($sort_fields as $key => $val) {
            $params[] = "sort[" . $key . "]=" . $val;
        }
        $params = implode('&', $params);
        $params = '?' . $params;
    }
    ?>
    <div class="main-content">
        <h1 class="main-title">Создать событие</h1>
        <div>
            <form id="app" class="editor-edit-form"
                  action="<?php print base_url('c-admin/events/edit/' . $event['id']); ?>"
                  method="post"
                  enctype="multipart/form-data">
                <input type="hidden" name="edit" value="">
                <label class="label" for="">Название</label>
                <div class="input mb-5">
                    <input required type="text"
                           class="fw-600 input2_txt"
                           value="<?php echo $event['name'] ?>"
                           name="name">
                </div>
                <label class="label" for="">Приз</label>
                <div class="input mb-5">
                    <input required type="text"
                           class="fw-600 input2_txt"
                           value="<?php echo $event['prize'] ?>"
                           name="prize">
                </div>
                <label class="label" for="">Локация</label>
                <div class="input mb-5">
                    <input required type="text"
                           class="fw-600 input2_txt"
                           value="<?php echo $event['location'] ?>"
                           name="location">
                </div>
                <label class="label" for="">Колличество команд</label>
                <div class="input mb-5">
                    <input required type="number"
                           class="fw-600 input2_txt"
                           value="<?php echo $event['command_count'] ?>"
                           name="command_count">
                </div>
                <label class="label" for="">URL</label>
                <div class="input mb-5">
                    <input required type="text"
                           class="fw-600 input2_txt"
                           value="<?php echo $event['url'] ?>"
                           name="url">
                </div>
                <label class="label" for="">Стрим</label>
                <div class="input mb-5">
                    <input required type="text"
                           class="fw-600 input2_txt"
                           value="<?php echo $event['stream'] ?>"
                           name="stream">
                </div>
                <label class="label" for="">Флаг</label>
                <select name="flag_icon_id" style="max-width: 200px; cursor: pointer; display: block;"
                        class="editor-edit-form-input mt-5 mb-10">
                    <option value="">По умолчанию</option>
                    <?php foreach ($flags as $flag): ?>
                        <?php if ($event['flag_icon_id'] === $flag['id']): ?>
                            <option selected value="<?php echo $flag['id'] ?>"><?php echo $flag['orig_name'] ?></option>
                        <?php else: ?>
                            <option value="<?php echo $flag['id'] ?>"><?php echo $flag['orig_name'] ?></option>
                        <?php endif; ?>
                    <?php endforeach; ?>
                </select>
                <div style="display: flex;">
                    <div style="margin-right: 10px">
                        <label class="label" for="">Дата начала</label>
                        <input class="editor-edit-form-input mt-5 mb-10 datepicker"
                               type="text"
                               name="started_at"
                               value="<?php echo $event['started_at'] ?>"
                               style="max-width: 200px; cursor: pointer; display: block;"
                               placeholder="select date">
                    </div>
                    <div>
                        <label class="label" for="">Дата окончания</label>
                        <input class="editor-edit-form-input mt-5 mb-10 datepicker"
                               type="text"
                               name="ended_at"
                               value="<?php echo $event['ended_at'] ?>"
                               style="max-width: 200px; cursor: pointer; display: block;"
                               placeholder="select date">
                    </div>
                </div>
                <div style="display: flex;">
                    <div style="margin-right: 10px">
                        <input class="mt-5 mb-10"
                               type="radio"
                               name="is_online"
                            <?php if ($event['is_online'] == 1): ?>
                                checked
                            <?php endif; ?>
                               value="1">
                        <label class="label" for="">Online</label>
                    </div>
                    <div>
                        <input class="mt-5 mb-10"
                               type="radio"
                               name="is_online"
                            <?php if ($event['is_online'] == 0): ?>
                                checked
                            <?php endif; ?>
                               value="0">
                        <label class="label" for="">LAN</label>
                    </div>
                </div>
                <label class="label" for="">Статус</label>
                <select name="status" style="max-width: 200px; cursor: pointer; display: block;"
                        class="editor-edit-form-input mt-5 mb-10">
                    <option value="">По умолчанию</option>
                    <?php foreach ($statuses as $key => $status): ?>
                        <?php if ($event['status'] === $key): ?>
                            <option selected value="<?php echo $key ?>"><?php echo $status ?></option>
                        <?php else: ?>
                            <option value="<?php echo $key ?>"><?php echo $status ?></option>
                        <?php endif; ?>
                    <?php endforeach; ?>
                </select>
                <label class="label" for="">Игра</label>
                <select required name="game_id" style="max-width: 200px; cursor: pointer; display: block;"
                        class="editor-edit-form-input mt-5 mb-10">
                    <option value="">По умолчанию</option>
                    <?php foreach ($games as $game): ?>
                        <?php if ($event['game_id'] === $game['id']): ?>
                            <option selected value="<?php echo $game['id'] ?>"><?php echo $game['name'] ?></option>
                        <?php else: ?>
                            <option value="<?php echo $game['id'] ?>"><?php echo $game['name'] ?></option>
                        <?php endif; ?>
                    <?php endforeach; ?>
                </select>
                <div>
                    <span>Загрузить лого(размеры:58x58)</span>
                    <div class="change-editor-edit-ban file-input" style="display: block;">
                        <div class="image_preview">
                            <img style="max-width: 100%;" src="<?php echo $images_url . $event['image'] ?>">
                        </div>
                        <div style="display: flex;">
                            <div class="changePass mt-15 change-img-edit" style="display: block;">
                                <div class="changePassBTN mt-5 change-img-btn-edit">
                                    <input class="change-img-edit-input file"
                                           type="file"
                                           accept="image/jpeg,image/png"
                                           name="image" style="opacity: 0">
                                    <div class="changePassBTN change-img-edit-btn"
                                         style="margin-top: -18px !important;">
                                        Загрузить лого
                                    </div>
                                    <img class="icos2" src="http://champs.admin/assets/icons/downloadfor-checkbox.svg">
                                </div>
                            </div>
                            <div class="change-img-edit-warning" id="uploaded_img_name">
                                Загрузите в формате .jpg или .png
                            </div>
                        </div>
                    </div>
                    <span>Загрузить шапку(размеры:1275x312)</span>
                    <div class="change-editor-edit-ban file-input" style="display: block; margin-top: 10px;">
                        <div class="image_preview">
                            <img style="max-width: 100%;" src="<?php echo $images_url . $event['image_header'] ?>">
                        </div>
                        <div style="display: flex;">
                            <div class="changePass mt-15 change-img-edit" style="display: block;">
                                <div class="changePassBTN mt-5 change-img-btn-edit">
                                    <input class="change-img-edit-input file"
                                           type="file"
                                           accept="image/jpeg,image/png"
                                           name="image_header" style="opacity: 0">
                                    <div class="changePassBTN change-img-edit-btn"
                                         style="margin-top: -18px !important;">
                                        Загрузить шапку
                                    </div>
                                    <img class="icos2" src="http://champs.admin/assets/icons/downloadfor-checkbox.svg">
                                </div>
                            </div>
                            <div class="change-img-edit-warning" id="uploaded_img_name">
                                Загрузите в формате .jpg или .png
                            </div>
                        </div>
                    </div>
                </div>
                <map-pool></map-pool>
                <prize-distribution ref="prizeDistribution"></prize-distribution>
                <button type="submit" class="main-post-button-edit main-post-button-edit-photo-gallery">Сохранить и
                    Загрузить
                </button>
            </form>
        </div>
    </div>
</main>
<script src="http://code.jquery.com/jquery-1.9.1.js"></script>
<script src="http://code.jquery.com/ui/1.11.0/jquery-ui.js"></script>
<script src="<?php echo base_url('assets/js/dropdown.js'); ?>"></script>
<script src="<?php echo base_url('assets/js/tinyMCE.js'); ?>" referrerpolicy="origin"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/datepicker/1.0.10/datepicker.min.js"
        integrity="sha512-RCgrAvvoLpP7KVgTkTctrUdv7C6t7Un3p1iaoPr1++3pybCyCsCZZN7QEHMZTcJTmcJ7jzexTO+eFpHk4OCFAg=="
        crossorigin="anonymous"></script>
<link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet"/>
<script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>
<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.23/css/jquery.dataTables.css">
<script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.10.23/js/jquery.dataTables.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.1/axios.min.js"
        integrity="sha512-bZS47S7sPOxkjU/4Bt0zrhEtWx0y0CRkhEp8IckzK+ltifIIE9EMIMTuT/mEzoIMewUINruDBIR/jJnbguonqQ=="
        crossorigin="anonymous"></script>
<script src="https://unpkg.com/vue-select@3.0.0"></script>

<script type="text/x-template" id="map-pool-template">
    <div id="event-map-pool">
        <label class="label" for="">Пул карт</label>
        <div id="event-map-pool-wrapper" style="display: block">
            <div style="display: flex; width: 100%; align-items: center;" v-for="map in eventMapPool">
                <input type="hidden" name="maps[]" :value="map.id">
                <span class="editor-edit-form-input mt-5 mb-10">
                                {{map.name}}
                            </span>
                <button type="button" @click="deleteMap(map)" class="btn btn-orange remove-video"
                        style="display: flex; align-items: center;">
                    <img width="25px"
                         src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQyNyA0MjcuMDAxMzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTIzMi4zOTg0MzggMTU0LjcwMzEyNWMtNS41MjM0MzggMC0xMCA0LjQ3NjU2My0xMCAxMHYxODljMCA1LjUxOTUzMSA0LjQ3NjU2MiAxMCAxMCAxMCA1LjUyMzQzNyAwIDEwLTQuNDgwNDY5IDEwLTEwdi0xODljMC01LjUyMzQzNy00LjQ3NjU2My0xMC0xMC0xMHptMCAwIiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtMTE0LjM5ODQzOCAxNTQuNzAzMTI1Yy01LjUyMzQzOCAwLTEwIDQuNDc2NTYzLTEwIDEwdjE4OWMwIDUuNTE5NTMxIDQuNDc2NTYyIDEwIDEwIDEwIDUuNTIzNDM3IDAgMTAtNC40ODA0NjkgMTAtMTB2LTE4OWMwLTUuNTIzNDM3LTQuNDc2NTYzLTEwLTEwLTEwem0wIDAiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0yOC4zOTg0MzggMTI3LjEyMTA5NHYyNDYuMzc4OTA2YzAgMTQuNTYyNSA1LjMzOTg0MyAyOC4yMzgyODEgMTQuNjY3OTY4IDM4LjA1MDc4MSA5LjI4NTE1NiA5LjgzOTg0NCAyMi4yMDcwMzIgMTUuNDI1NzgxIDM1LjczMDQ2OSAxNS40NDkyMTloMTg5LjIwMzEyNWMxMy41MjczNDQtLjAyMzQzOCAyNi40NDkyMTktNS42MDkzNzUgMzUuNzMwNDY5LTE1LjQ0OTIxOSA5LjMyODEyNS05LjgxMjUgMTQuNjY3OTY5LTIzLjQ4ODI4MSAxNC42Njc5NjktMzguMDUwNzgxdi0yNDYuMzc4OTA2YzE4LjU0Mjk2OC00LjkyMTg3NSAzMC41NTg1OTMtMjIuODM1OTM4IDI4LjA3ODEyNC00MS44NjMyODItMi40ODQzNzQtMTkuMDIzNDM3LTE4LjY5MTQwNi0zMy4yNTM5MDYtMzcuODc4OTA2LTMzLjI1NzgxMmgtNTEuMTk5MjE4di0xMi41Yy4wNTg1OTMtMTAuNTExNzE5LTQuMDk3NjU3LTIwLjYwNTQ2OS0xMS41MzkwNjMtMjguMDMxMjUtNy40NDE0MDYtNy40MjE4NzUtMTcuNTUwNzgxLTExLjU1NDY4NzUtMjguMDYyNS0xMS40Njg3NWgtODguNzk2ODc1Yy0xMC41MTE3MTktLjA4NTkzNzUtMjAuNjIxMDk0IDQuMDQ2ODc1LTI4LjA2MjUgMTEuNDY4NzUtNy40NDE0MDYgNy40MjU3ODEtMTEuNTk3NjU2IDE3LjUxOTUzMS0xMS41MzkwNjIgMjguMDMxMjV2MTIuNWgtNTEuMTk5MjE5Yy0xOS4xODc1LjAwMzkwNi0zNS4zOTQ1MzEgMTQuMjM0Mzc1LTM3Ljg3ODkwNyAzMy4yNTc4MTItMi40ODA0NjggMTkuMDI3MzQ0IDkuNTM1MTU3IDM2Ljk0MTQwNyAyOC4wNzgxMjYgNDEuODYzMjgyem0yMzkuNjAxNTYyIDI3OS44Nzg5MDZoLTE4OS4yMDMxMjVjLTE3LjA5NzY1NiAwLTMwLjM5ODQzNy0xNC42ODc1LTMwLjM5ODQzNy0zMy41di0yNDUuNWgyNTB2MjQ1LjVjMCAxOC44MTI1LTEzLjMwMDc4MiAzMy41LTMwLjM5ODQzOCAzMy41em0tMTU4LjYwMTU2Mi0zNjcuNWMtLjA2NjQwNy01LjIwNzAzMSAxLjk4MDQ2OC0xMC4yMTg3NSA1LjY3NTc4MS0xMy44OTQ1MzEgMy42OTE0MDYtMy42NzU3ODEgOC43MTQ4NDMtNS42OTUzMTMgMTMuOTI1NzgxLTUuNjA1NDY5aDg4Ljc5Njg3NWM1LjIxMDkzNy0uMDg5ODQ0IDEwLjIzNDM3NSAxLjkyOTY4OCAxMy45MjU3ODEgNS42MDU0NjkgMy42OTUzMTMgMy42NzE4NzUgNS43NDIxODggOC42ODc1IDUuNjc1NzgyIDEzLjg5NDUzMXYxMi41aC0xMjh6bS03MS4xOTkyMTkgMzIuNWgyNzAuMzk4NDM3YzkuOTQxNDA2IDAgMTggOC4wNTg1OTQgMTggMThzLTguMDU4NTk0IDE4LTE4IDE4aC0yNzAuMzk4NDM3Yy05Ljk0MTQwNyAwLTE4LTguMDU4NTk0LTE4LTE4czguMDU4NTkzLTE4IDE4LTE4em0wIDAiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0xNzMuMzk4NDM4IDE1NC43MDMxMjVjLTUuNTIzNDM4IDAtMTAgNC40NzY1NjMtMTAgMTB2MTg5YzAgNS41MTk1MzEgNC40NzY1NjIgMTAgMTAgMTAgNS41MjM0MzcgMCAxMC00LjQ4MDQ2OSAxMC0xMHYtMTg5YzAtNS41MjM0MzctNC40NzY1NjMtMTAtMTAtMTB6bTAgMCIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjwvZz48L3N2Zz4=">
                </button>
            </div>
        </div>
        <div class="add">
            <select v-model="selectedMap" id="map-poll-select" class="editor-edit-form-input mt-5 mb-10">
                <option v-for="map in maps" :value="map.id">
                    {{map.name}}
                </option>
            </select>
            <button id="map-poll-add" type="button" class="btn btn-orange" @click="addMap">
                Добавить
            </button>
        </div>
    </div>
</script>

<script type="text/x-template" id="prize-distribution-template">
    <div id="event-prize-distribution">
        <label class="label" for="">Призовые места</label>
        <div id="event-prize-distribution-wrapper" style="display: block">
            <table class="dataTable" id="prize-distribution-table">
                <thead>
                <tr>
                    <th>Команда</th>
                    <th>Позиция</th>
                    <th>Приз</th>
                    <th>Действия</th>
                </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
        <div class="add" style="display: flex; width: 60%; align-items: flex-end;">
            <div style="margin-right: 10px">
                <label class="label" for="">Место</label>
                <input class="editor-edit-form-input mt-5 mb-10"
                       id="prize-distribution-position"
                       type="text"
                       v-model="newRow.position"
                       style="max-width: 200px; cursor: pointer; display: block;">
            </div>
            <div style="margin-right: 10px">
                <label class="label" for="">Приз</label>
                <input class="editor-edit-form-input mt-5 mb-10"
                       id="prize-distribution-prize"
                       type="text"
                       v-model="newRow.prize"
                       style="max-width: 200px; cursor: pointer; display: block;">
            </div>
            <div style="margin-right: 10px">
                <label class="label" for="">Команда</label>
                <div style="height: 40px; margin-top: 4px; margin-bottom: 7px;">
                    <v-select :options="teams" v-model="newRow.team" label="name"></v-select>
                </div>
            </div>
            <button id="prize-distribution-add"
                    type="button"
                    class="btn btn-orange"
                    @click="add"
                    style="margin-bottom: 10px;">
                Добавить
            </button>
        </div>
    </div>
</script>
<script>
    Vue.component('v-select', VueSelect.VueSelect);

    const maps = JSON.parse(`<?php echo json_encode($maps)?>`);

    $(document).ready(function () {
        $('.datepicker').datepicker();
        $('.select-2').select2();
    });


    document.addEventListener("DOMContentLoaded", function () {
        const formsUpload = document.querySelectorAll('.file-input');

        formsUpload.forEach(elem => {
            const input = elem.querySelector('input.file');
            const image = elem.querySelector('.image_preview img');

            input.addEventListener('change', function () {
                if (input.files && input.files[0]) {
                    image.src = URL.createObjectURL(input.files[0]);
                }
            })
        })
    });

    const mapPool = Vue.component('map-pool', {
        template: `#map-pool-template`,
        data() {
            return {
                eventMapPool: JSON.parse(`<?php echo json_encode($event_map_pool);?>`),
                maps: JSON.parse(`<?php echo json_encode($maps);?>`),
                selectedMap: null
            }
        },
        methods: {
            deleteMap(map) {
                this.eventMapPool = this.eventMapPool.filter(m => m.id !== map.id)
            },
            addMap() {
                const findMap = this.eventMapPool.find(m => m.id === this.selectedMap)

                if (!findMap) {
                    const map = this.maps.find(m => m.id === this.selectedMap);

                    this.eventMapPool.push(map);
                }

            }
        },
    });

    const prizeDistribution = Vue.component('prize-distribution', {
        template: '#prize-distribution-template',
        data() {
            return {
                table: null,
                newRow: {
                    team: null,
                    prize: null,
                    position: null
                },
                teams: JSON.parse(`<?php echo json_encode($teams)?>`)
            }
        },
        methods: {
            delete(id) {
                axios.post('<?php echo base_url('c-admin/event/prize/distribution/ajax/delete/');?>' + id)
                    .then(() => {
                        this.table.ajax.reload();
                    })
            },
            add() {
                const data = new FormData();

                data.append('team_id', this.newRow.team.id ?? null);
                data.append('prize', this.newRow.prize)
                data.append('position', this.newRow.position)

                axios.post('<?php echo base_url('c-admin/event/prize/distribution/ajax/add/' . $event['id']);?>', data)
                    .then(data => {
                        this.table.ajax.reload();

                        this.newRow = {
                            team: null,
                            prize: null,
                            position: null
                        }
                    })
            }
        },
        mounted() {
            this.table = $('#prize-distribution-table').DataTable({
                ajax: '<?php echo base_url('c-admin/event/prize/distribution/ajax/' . $event['id']);?>',
                columns: [
                    {
                        data: function (row, type, set) {
                            if (row.team !== null) {
                                return row.team.name;
                            } else {
                                return null;
                            }
                        }
                    },
                    {
                        data: 'position'
                    },
                    {
                        data: 'prize'
                    },
                    {
                        data: 'action'
                    }
                ]
            });
        }
    })

    const app = new Vue({
        el: '#app',
        components: {
            'map-pool': mapPool,
            'prize-distribution': prizeDistribution
        },
        data: {},
        methods: {},
    })
</script>

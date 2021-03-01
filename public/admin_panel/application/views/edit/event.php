<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/datepicker/1.0.10/datepicker.min.css"
      integrity="sha512-YdYyWQf8AS4WSB0WWdc3FbQ3Ypdm0QCWD2k4hgfqbQbRCJBEgX0iAegkl2S1Evma5ImaVXLBeUkIlP6hQ1eYKQ=="
      crossorigin="anonymous"/>

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
            <form class="editor-edit-form"
                  action="<?php print base_url('c-admin/events/edit/' . $event['id']); ?>"
                  method="post"
                  enctype="multipart/form-data">
                <input type="hidden" name="edit" value="">
                <label class="label" for="">Название</label>
                <div class="input mb-5">
                    <input type="text"
                           class="fw-600 input2_txt"
                           value="<?php echo $event['name'] ?>"
                           name="name">
                </div>
                <label class="label" for="">Приз</label>
                <div class="input mb-5">
                    <input type="text"
                           class="fw-600 input2_txt"
                           value="<?php echo $event['prize'] ?>"
                           name="prize">
                </div>
                <label class="label" for="">Локация</label>
                <div class="input mb-5">
                    <input type="text"
                           class="fw-600 input2_txt"
                           value="<?php echo $event['location'] ?>"
                           name="location">
                </div>
                <label class="label" for="">Колличество команд</label>
                <div class="input mb-5">
                    <input type="number"
                           class="fw-600 input2_txt"
                           value="<?php echo $event['command_count'] ?>"
                           name="command_count">
                </div>
                <label class="label" for="">URL</label>
                <div class="input mb-5">
                    <input type="text"
                           class="fw-600 input2_txt"
                           value="<?php echo $event['url'] ?>"
                           name="url">
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
                                <?php if($event['is_online'] == 1):?>
                                   checked
                                <?php endif;?>
                               value="1">
                        <label class="label" for="">Online</label>
                    </div>
                    <div>
                        <input class="mt-5 mb-10"
                               type="radio"
                               name="is_online"
                                <?php if($event['is_online'] == 0):?>
                                    checked
                                <?php endif;?>
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
                <select name="game_id" style="max-width: 200px; cursor: pointer; display: block;"
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
                                        Загрузить шаппку
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
<script>
    $('.datepicker').datepicker();

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
</script>

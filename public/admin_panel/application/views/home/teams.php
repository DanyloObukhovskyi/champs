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
        <?php $activePath = 'teams'?>
        <?php require_once APPPATH.'views/sidebar.php'?>
    </aside>
    <?php

    $params = '';
    if (!empty($sort_fields)) {
        $params = array();
        foreach ($sort_fields AS $key => $val) {
            $params[] = "sort[" . $key . "]=" . $val;
        }
        $params = implode('&', $params);
        $params = '?' . $params;
    }
    ?>

    <div class="main-content">
        <h1 class="main-title">Команды</h1>
        <div class="relative">
            <table class="new-table" id="teamsTable">
                <thead>
                <tr>
                    <td class="width-5">Идентификатор</td>
                    <td class="width-5">Лого</td>
                    <td class="width-20">Имя</td>
                    <td class="width-10 pr-140 t-a-r">Опции</td>
                </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>

        <div class="flex" style="justify-content: space-between;">
            <a onclick="create()">
                <button class="btn btn-orange mt-15 mr-10" >Создать команду</button>
            </a>
        </div>

        <div class="modal fade" id="createTeam" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header" style="background: #333f52;color: white;" >
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <h3 class="modal-title  text-center" id="createAndEditLabel"></h3>
                    </div>
                    <input type="hidden" id="create" value="" />
                    <input type="hidden" id="id" value="" />
                    <div class="modal-body">
                        <div id="b1" class="main-post-editor-edit">
                            <form class="editor-edit-form" enctype="multipart/form-data">
                                <span class="editor-edit">Название команды</span>
                                <input class="editor-edit-form-input mt-15" type="text" name="team_name" id="team_name" placeholder="Название" value="">
                                <span class="editor-edit">Лого</span>
                                <br>
                                <img class="profile-pic-smallForNews" id="image" src="https://avatanplus.com/files/resources/mid/577e3ef8cdf33155c525fc0c.png"/>
                                <div class="change-editor-edit-ban">
                                    <div class="changePass mt-15 change-img-edit" style="display: block;">
                                        <div class="changePassBTN mt-5 change-img-btn-edit">
                                            <input class="change-img-edit-input" type="file" accept="image/svg" id="team_logo" name="team_logo" style="opacity: 0"/>
                                            <div class="changePassBTN change-img-edit-btn" style="margin-top: -18px !important;">Загрузить</div>
                                            <img class="icosNews" src="<?php print base_url("assets/icons/downloadfor-checkbox.svg"); ?>" />
                                        </div>
                                    </div>
                                    <div class="change-img-edit-warning" id="uploaded_img_name">
                                        Загрузите в любом формате
                                    </div>
                                </div>
                                <span class="editor-edit">Регион</span>
                                <input class="editor-edit-form-input mt-15" type="text" name="region" id="region" placeholder="Название" value="">
                                <span class="editor-edit">Флаг</span>
                                <select name="flag" id="flag" style="max-width: 200px; cursor: pointer; display: block;"
                                        class="editor-edit-form-input mt-5 mb-10">
                                    <option value="null">Не выбрано</option>
                                    <?php foreach ($flags as $flag): ?>
                                        <option value="<?php echo $flag['id'] ?>"><?php echo $flag['orig_name'] ?></option>
                                    <?php endforeach; ?>
                                </select>
                            </form>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="submit" class="btn mt-15 mr-10"  onclick="save()">Сохранить и Загрузить</button>
                        <button type="button" class="btn btn-orange mt-15 mr-10" data-dismiss="modal">Закрыть</button>
                    </div>
                </div>
            </div>
        </div>
</main>
<script src="<?php echo base_url('assets/js/table-expander.js'); ?>"></script>
<script src="<?php echo base_url('assets/js/common.js'); ?>"></script>
<script>
    $('#teamsTable').DataTable({
        "language": {
            "search":  'Поиск',
            "processing": 'Загрузка......',
            "sInfo": 'Показано _START_ по _END_ с _TOTAL_ записей',
            "infoEmpty": 'Показано с 0 по 0 из 0 записей',
            "lengthMenu": '_MENU_ Записей',
            "paginate": {
                "first":      "Первая",
                "last":       "Последняя",
                "next":       "Следующая",
                "previous":   "Предыдущая"
            },
            "zeroRecords": 'Пусто'
        },
        stateSave: true,
        "processing": true,
        "serverSide": true,
        "lengthChange": true,
        "ordering": true,
        "ajax": {
            url: '<?php echo base_url('/c-admin/teamsTable') ;?>',
            type: 'POST',
            data: {

            }
        },
        columns: [
            {searchable: true, orderable: true, visible: true},
            {searchable: true, orderable: true, visible: true},
            {searchable: true, orderable: true, visible: true},
            {searchable: true, orderable: false, visible: true}
        ],
    });

    function create(){
        $('#createAndEditLabel').text('Создание команды');
        $('#createTeam').modal('show')
        $('#team_name').val(null);
        $('#region').val(null);
        $('#flag').val(null);
        $('#image').attr('src','https://avatanplus.com/files/resources/mid/577e3ef8cdf33155c525fc0c.png')
        var $images = null;
        $('#create').val(1)
    }
    var $images;
    window.addEventListener('load', function() {
        document.querySelector('input[name="team_logo"]').addEventListener('change', function() {
            if (this.files && this.files[0]) {
                var img = document.querySelector('#image');
                img.src = URL.createObjectURL(this.files[0]);
                $images = this.files;
            }
        });
    });

    function save()
    {
        let create_or_update = $('#create').val();
        if(create_or_update == 1){
            let name =  $('#team_name').val();
            let region = $('#region').val();
            let flag = $('#flag').val();
            let formData = new FormData();
            if($.trim($images)) {
                let file_data = $images[0];
                formData.append('itempic', file_data);
            }
            formData.append('name', name);
            formData.append('region', region);
            formData.append('flag', flag);
            $.ajax({
                type:'POST',
                url:'<?php echo base_url('/c-admin/team/create') ;?>',
                data:formData,
                processData: false,
                contentType: false,
                dataType: "json",
                success:function(data){
                    if(data.status == false){
                        alert(data.errors);
                    } else {
                        alert('Команда была создана');
                        $('#team_name').val(null);
                        $('#region').val(null);
                        $('#flag').val(null);
                        $('#image').attr('src','https://avatanplus.com/files/resources/mid/577e3ef8cdf33155c525fc0c.png')
                        $('#createTeam').modal('hide');
                        $('#teamsTable').DataTable().draw();
                        var $images = null;
                    }
                },
                error:function(data){
                    $.each(data.responseJSON.errors, function (i, error) {
                        alert(error[0]);
                    });

                }
            });
        } else {
            let id = $('#id').val();
            let name =  $('#team_name').val();
            let region = $('#region').val();
            let flag = $('#flag').val();
            let formData = new FormData();
            if($.trim($images)) {
                let file_data = $images[0];
                formData.append('itempic', file_data);
            }
            formData.append('id', id);
            formData.append('name', name);
            formData.append('region', region);
            formData.append('flag', flag);
            $.ajax({
                type:'POST',
                url:'<?php echo base_url('/c-admin/team/update'); ?>',
                data:formData,
                processData: false,
                contentType: false,
                dataType: "json",
                success:function(data){
                    if(data.status == false){
                        alert(data.errors);
                    } else {
                        alert('Команда была отредактирована');
                        $('#id').val(null)
                        $('#team_name').val(null);
                        $('#region').val(null);
                        $('#flag').val(null);
                        $('#image').attr('src','https://avatanplus.com/files/resources/mid/577e3ef8cdf33155c525fc0c.png')
                        $('#createTeam').modal('hide');
                        $('#teamsTable').DataTable().draw();
                        var $images = null;
                    }
                },
                error:function(data){
                    $.each(data.responseJSON.errors, function (i, error) {
                        alert(error[0]);
                    });

                }
            });
        }
    }

    function fetchTeam(id)
    {
        var post = $.ajax({
            method: 'POST',
            data : {
                'id':id
            },
            url: '<?php  echo base_url("/c-admin/team/fetch") ;?>',
            success : function(result){
                result = JSON.parse(result);
                if(result.status == true){
                    $('#team_name').val(result.name);
                    $('#region').val(result.region);
                    $('#flag').val(result.flag_icon_id);
                    $('#image').attr('src', result.logo);
                    $('#createAndEditLabel').text('Редактирование команды');
                    $('#createTeam').modal('show')
                    $('#create').val(0)
                    $('#id').val(id)
                } else {
                    alert('Команда не найдена');
                }
            }
        });
    }
</script>
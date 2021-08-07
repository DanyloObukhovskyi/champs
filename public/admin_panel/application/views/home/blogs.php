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
        <?php $activePath = 'blogs'?>
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
        <h1 class="main-title">Блоги</h1>
        <div class="relative">
            <table class="new-table text-center" id="newsTable">
                <thead>
                <tr>
                    <td class="width-5 text-center">Идентификатор</td>
                    <td class="width-5 text-center">Заголовок Блога</td>
                    <td class="width-5 text-center">Статус Блога</td>
                    <td class="width-10 text-center">Дата публикации</td>
                    <td class="width-10 pr-140 t-a-r text-center">Опции</td>
                </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
    </div>

    <div class="modal fade" id="seoPageModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header" style="background: #333f52;color: white;" >
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h3 class="modal-title  text-center" id="editSeoLabel">Просмотр блога</h3>
                </div>
                <input type="hidden" id="id" value="" />
                <div class="modal-body">
                    <div class="main-post-editor-edit">
                        <form class="editor-edit-form" enctype="multipart/form-data">
                            <span class="editor-edit">Изображение</span>
                            <img id="image" src="" class="img-fluid mt-15" style="width: 100%;" alt="Responsive image">
                            <span class="editor-edit">Заголовок</span>
                            <input disabled class="editor-edit-form-input mt-15" type="text" id="title" placeholder="заголовок" value="">
                            <br>
                            <span class="editor-edit">Автор</span>
                            <input disabled class="editor-edit-form-input mt-15" type="text" id="author" placeholder="Автор" value="">
                            <br>
                            <span class="editor-edit">Блог</span>
                            <textarea disabled class="editor-edit-form-input mt-15" type="text" id="description" placeholder="description" value=""></textarea>
                            <br>
                        </form>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-orange mt-15 mr-10" data-dismiss="modal">Закрыть</button>
                </div>
            </div>
        </div>
    </div>

</main>
<script src="<?php echo base_url('assets/js/table-expander.js'); ?>"></script>
<script src="<?php echo base_url('assets/js/common.js'); ?>"></script>
<script src="<?php echo base_url('assets/js/tinyMCE.js'); ?>" referrerpolicy="origin"></script>
<script>
    tinymce.init({
        selector:'#description',
        plugins: 'code',
        toolbar: 'code | undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl',

        height: 600,
        readonly : 1
    });
    $(document).ready( function () {
        $('#newsTable').DataTable({
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
                url: '<?php echo base_url('/c-admin/fetchBlogs') ;?>',
                type: 'POST',
                data: {

                }
            },
            columns: [
                {searchable: true, orderable: true, visible: true},
                {searchable: true, orderable: true, visible: true},
                {searchable: true, orderable: true, visible: true},
                {searchable: true, orderable: true, visible: true},
                {searchable: true, orderable: false, visible: true}
            ],
        });
    } );

    function getBlog(id)
    {
        var post = $.ajax({
            method: 'POST',
            data : {
                'id':id
            },
            url: '<?php  echo base_url("/c-admin/home/fetch/blog") ;?>',
            success : function(result){
                result = JSON.parse(result);
                if(result.status == true){
                    $('#title').val(result.title);
                    $('#author').val(result.author);
                    $('#image').attr('src', result.image);
                    tinymce.get("description").setContent(result.description);
                    $('#id').val(id)
                    $('#seoPageModal').modal('show');
                } else {
                    alert('Блог не найден');
                }
            }
        });
    }

    function agree(id)
    {
        $.ajax({
            type:'POST',
            url:'<?php echo base_url('/home/agree/') ;?>' + + id,
            data:{

            },
            success:function(data){
                data = JSON.parse(data);
                if(data.status == false){
                    alert(data.errors);
                } else if(data.status == true) {
                    alert('Блог принят');
                    $('#seoPageModal').modal('hide');
                    $('#newsTable').DataTable().draw();
                }
            },
            error:function(data){
                $.each(data.responseJSON.errors, function (i, error) {
                    alert(error[0]);
                });

            }
        });
    }

    function disagree(id)
    {
        $.ajax({
            type:'POST',
            url:'<?php echo base_url('/home/disagree/') ;?>' + + id,
            data:{

            },
            success:function(data){
                data = JSON.parse(data);
                if(data.status == false){
                    alert(data.errors);
                } else if(data.status == true) {
                    alert('Блог отклонен');
                    $('#seoPageModal').modal('hide');
                    $('#newsTable').DataTable().draw();
                }
            },
            error:function(data){
                $.each(data.responseJSON.errors, function (i, error) {
                    alert(error[0]);
                });

            }
        });
    }


</script>

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
        <?php $activePath = 'posts'?>
        <?php require_once APPPATH.'views/sidebar.php'?>
	</aside>
<!--	<div class="main-content">-->
		<!--- ---->
		<!--- ---->
		<!--- ---->
		<!--- ---->
		<!--- ---->
		<!--- ---->
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
				<h1 class="main-title">Посты</h1>
				<div class="relative">
                    <table class="new-table" id="newsTable">
                        <thead>
                        <tr>
                            <td class="width-5">Id</td>
                            <td class="width-5">Имя поста</td>
                            <td class="width-20">Формат поста</td>
                            <td class="width-20">Дата публикации</td>
                            <td class="width-10 pr-140 t-a-r">Опции</td>
                        </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
				</div>
				
				<div class="flex" style="justify-content: space-between;">
					<a href="<?php echo site_url('c-admin/post/add/'.$UserID); ?>">
                        <button class="btn btn-orange mt-15 mr-10">Создать новость</button>
                    </a>
                    <a style="float:right" href="javascript:void(0)" >
                        <button class="btn btn-orange mt-15 mr-10" data-toggle="modal" data-target="#newsTypeModal">Форматы новостей</button>
                    </a>
				</div>

                <div class="modal fade" id="newsTypeModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header" style="background: #333f52;color: white;" >
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                <h3 class="modal-title  text-center" id="exampleModalLabel">Форматы новостей</h3>
                            </div>
                            <div class="modal-body">
                                <button type="button" class="btn btn-orange mt-15 mr-10" style="margin-bottom: 10px" onclick="create()">Создать формат</button>
                                <table class="new-table" id="newsTypeTable">
                                    <thead>
                                    <tr>
                                        <td class="width-5">Изображение</td>
                                        <td class="width-5">ID</td>
                                        <td class="width-20">Название формата</td>
                                        <td class="width-10 pr-140 t-a-r">Опции</td>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    </tbody>
                                </table>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-orange mt-15 mr-10" data-dismiss="modal">Закрыть</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="modal fade" id="newsTypeModalCreateAndEdit" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                        <span class="editor-edit">Название формата</span>
                                        <input class="editor-edit-form-input mt-15" type="text" name="post_type_title" id="post_type_title" placeholder="Название" value="">
                                        <span class="editor-edit">Изображение формата</span>
                                        <br>
                                        <img class="profile-pic-smallForNews" id="image" src="https://avatanplus.com/files/resources/mid/577e3ef8cdf33155c525fc0c.png"/>
                                        <div class="change-editor-edit-ban">
                                            <div class="changePass mt-15 change-img-edit" style="display: block;">
                                                <div class="changePassBTN mt-5 change-img-btn-edit">
                                                    <input class="change-img-edit-input" type="file" accept="image/svg" id="post_type_image" name="post_type_image" style="opacity: 0"/>
                                                    <div class="changePassBTN change-img-edit-btn" style="margin-top: -18px !important;">Загрузить</div>
                                                    <img class="icosNews" src="<?php print base_url("assets/icons/downloadfor-checkbox.svg"); ?>" />
                                                </div>
                                            </div>
                                            <div class="change-img-edit-warning" id="uploaded_img_name">
                                                Загрузите в формате .svg
                                            </div>
                                        </div>
                                        <span class="editor-edit mt-15">Возможности формата</span>
                                        <div class="checkbox_news_type mt-15 mr-10">
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="photo" >
                                                <label class="form-check-label" for="inlineRadio1">Изображение</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="video">
                                                <label class="form-check-label" for="inlineRadio2">Видео</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="stream">
                                                <label class="form-check-label" for="inlineRadio2">Прямая трансляция</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="photo_galary">
                                                <label class="form-check-label" for="inlineRadio3">Фотогаларея</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="tags" disabled>
                                                <label class="form-check-label" for="inlineRadio3">Теги</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="date" disabled>
                                                <label class="form-check-label" for="inlineRadio3">Дата</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="text" disabled>
                                                <label class="form-check-label" for="inlineRadio3">Текст</label>
                                            </div>
                                        </div>
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
		<!--- ---->
		<!--- ---->
		<!--- ---->
		<!--- ---->
		<!--- ---->
<!--	</div>-->
</main>
<script src="<?php echo base_url('assets/js/table-expander.js'); ?>"></script>
<script src="<?php echo base_url('assets/js/common.js'); ?>"></script>
<script>
    $(document).ready( function () {
        $('#newsTypeTable').DataTable({
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
                 url: '<?php echo base_url('/c-admin/post_type') ;?>',
                 type: 'POST',
                 data: {

                 }
             },
            columns: [
                {searchable: true, orderable: false, visible: true},
                {searchable: true, orderable: true, visible: true},
                {searchable: true, orderable: true, visible: true},
                {searchable: true, orderable: false, visible: true}
            ],
        });

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
                url: '<?php echo base_url('/c-admin/posts') ;?>',
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


    function create(){
        $('#createAndEditLabel').text('Создание формата');
        $('#newsTypeModalCreateAndEdit').modal('show')
        $('#post_type_title').val(null);
        $('#photo').prop('checked',false);
        $('#video').prop('checked',false);
        $('#date').prop('checked',false);
        $('#photo_galary').prop('checked',false);
        $('#tags').prop('checked',false);
        $('#stream').prop('stream',false);
        $('#text').prop('checked', false);
        $('#image').attr('src','https://avatanplus.com/files/resources/mid/577e3ef8cdf33155c525fc0c.png')
        var $images = null;
        $('#create').val(1)
    }
    var $images;
    window.addEventListener('load', function() {
        document.querySelector('input[name="post_type_image"]').addEventListener('change', function() {
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
            let title = $('#post_type_title').val();
            let photo = $('#photo').prop('checked');
            let video = $('#video').prop('checked');
            let date = $('#date').prop('checked');
            let photo_galery = $('#photo_galary').prop('checked');
            let tags = $('#tags').prop('checked');
            let stream = $('#stream').prop('checked');
            let text = $('#text').prop('checked');
            let formData = new FormData();
            if($.trim($images)) {
                let file_data = $images[0];
                formData.append('itempic', file_data);
            }
            formData.append('title', title);
            formData.append('photo', photo);
            formData.append('video', video);
            formData.append('date', date);
            formData.append('photo_galery', photo_galery);
            formData.append('tags', tags);
            formData.append('stream', stream);
            formData.append('text', text);
            $.ajax({
                type:'POST',
                url:'<?php echo base_url('/c-admin/post_type/create') ;?>',
                data:formData,
                processData: false,
                contentType: false,
                dataType: "json",
                success:function(data){
                    if(data.status == false){
                        alert(data.errors);
                    } else {
                        alert('Формат был добавлен');
                        $('#post_type_title').val(null);
                        $('#photo').prop('checked',false);
                        $('#video').prop('checked',false);
                        $('#date').prop('checked',false);
                        $('#photo_galary').prop('checked',false);
                        $('#tags').prop('checked',false);
                        $('#stream').prop('checked',false);
                        $('#text').prop('checked', false);
                        $('#image').attr('src','https://avatanplus.com/files/resources/mid/577e3ef8cdf33155c525fc0c.png')
                        $('#newsTypeModalCreateAndEdit').modal('hide');
                        $('#newsTypeTable').DataTable().draw();
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
            let title = $('#post_type_title').val();
            let photo = $('#photo').prop('checked');
            let video = $('#video').prop('checked');
            let date = $('#date').prop('checked');
            let photo_galery = $('#photo_galary').prop('checked');
            let tags = $('#tags').prop('checked');
            let stream = $('#stream').prop('checked');
            let text = $('#text').prop('checked');
            let formData = new FormData();
            if($.trim($images)) {
                let file_data = $images[0];
                formData.append('itempic', file_data);
            }
            formData.append('id', id);
            formData.append('title', title);
            formData.append('photo', photo);
            formData.append('video', video);
            formData.append('date', date);
            formData.append('photo_galery', photo_galery);
            formData.append('tags', tags);
            formData.append('stream', stream);
            formData.append('text', text);
            $.ajax({
                type:'POST',
                url:'<?php echo base_url('/c-admin/post_type/update'); ?>',
                data:formData,
                processData: false,
                contentType: false,
                dataType: "json",
                success:function(data){
                    if(data.status == false){
                        alert(data.errors);
                    } else {
                        alert('Формат был отредактирован');
                        $('#id').val(null)
                        $('#post_type_title').val(null);
                        $('#photo').prop('checked',false);
                        $('#video').prop('checked',false);
                        $('#date').prop('checked',false);
                        $('#photo_galary').prop('checked',false);
                        $('#tags').prop('checked',false);
                        $('#stream').prop('checked', false);
                        $('#text').prop('checked', false);
                        $('#image').attr('src','https://avatanplus.com/files/resources/mid/577e3ef8cdf33155c525fc0c.png')
                        $('#newsTypeModalCreateAndEdit').modal('hide');
                        $('#newsTypeTable').DataTable().draw();
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

    function deleteNewsType(id){
        var post = $.ajax({
            method: 'POST',
            data : {
                'id':id
            },
            url: '<?php echo base_url("/c-admin/post_type/delete") ;?>',
            success : function(result){
                result = JSON.parse(result);
                if(result.status == true){
                    alert('Формат был удален');
                    $('#newsTypeTable').DataTable().draw();
                }
            }
        });
    }

    function fetchNewsType(id)
    {
        var post = $.ajax({
            method: 'POST',
            data : {
                'id':id
            },
            url: '<?php  echo base_url("/c-admin/post_type/fetch") ;?>',
            success : function(result){
                result = JSON.parse(result);
                if(result.status == true){
                    $('#post_type_title').val(result.title);
                    $('#photo').prop('checked', result.photo);
                    $('#video').prop('checked', result.video);
                    $('#date').prop('checked', result.date);
                    $('#photo_galary').prop('checked', result.photo_galery);
                    $('#tags').prop('checked', result.tags);
                    $('#stream').prop('checked', result.stream)
                    $('#text').prop('checked', result.text);
                    $('#image').attr('src', result.img);
                    $('#createAndEditLabel').text('Редактирование формата');
                    $('#newsTypeModalCreateAndEdit').modal('show')
                    $('#create').val(0)
                    $('#id').val(id)
                } else {
                    alert('Формат не найден');
                }
            }
        });
    }

</script>

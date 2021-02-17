<script>
	var upload_url = "<?php print base_url("c-admin/upload_img/article/".$UserID); ?>";
	var current_type = 5;
</script>

<link href="<?php print base_url("assets/css/datepicker.css"); ?>" rel="stylesheet">
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
        <?php $activePath = 'posts';?>
        <?php require_once APPPATH.'views/sidebar.php'?>
	</aside>
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
		$Type = "Статья";

		$show1 = "dnn";
		$show2 = "dnn";
		$show3 = "dnn";
		$show4 = "dnn";
		$show5 = "dnn";
		$show6 = "dnn";
		$show7 = "dnn";
		$show8 = "dnn";
		$show9 = "dnn";

        $Type = 'Форматы';
		if(!empty($post_types)){
            foreach($post_types as $post_t){
                if($post_fields["type"] == $post_t['id']) {
                    $Type = $post_t['title'];
                }
            }
        }

	?>
	<div class="main-content">
		<h1 class="main-title">Редактировать новость</h1>
		<div class="main-describe">
			<!-- Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus odit impedit non, veritatis illum nisi at dolore nam illo numquam sequi iste quidem dolores ipsa eaque ducimus laborum. Est, tenetur? -->
		</div>
		<div class="col-item">
			<label class="label" for="">Выберите тип поста</label>
			<div class="dropdown mb-15 main-post-dropdown-edit">
				<div id="server_id" class="dropdown-value main-post-dropdown-edit"><?php print	$Type; ?></div>
				<div name="server_id" id="server_id2" class="dropdown-list">
                    <?php foreach($post_types as $post_t) :?>
                        <div onclick="fetchAttributes(<?php echo $post_t['id'] ;?>)" value="<?php echo $post_t['id'] ;?>" class="js-dropdown-item dropdown-list-item main-post-dropdown-item id_<?php echo $post_t['id'] ;?>"><?php echo $post_t['title'] ;?></div>
                    <?php endforeach; ?>
				</div>
			</div>
		</div>

		<div class="main-post-editor-edit z dnn">
			<form class="editor-edit-form" action="<?php print base_url("c-admin/post/edit/".$post_fields['id']."/".$UserID); ?>" method="post" enctype="multipart/form-data">
                <div class="editor-edit mt-10">Топ 5</div>
                <input class="mt-5 mb-10" type="checkbox" name="is_top" <?php print $post_fields['is_top'] ? 'checked': ''; ?>>
                <div></div>
                <span class="editor-edit">Заголовок поста</span>
                <input type="hidden" value="true" name="edit">
				<input type="hidden" value="" name="post_type" id="post_type">
                <input type="hidden" value="<?php echo $post_fields['type'];?>" id="id">
                <input class="editor-edit-form-input" type="text" name="post_title" placeholder="Заголовок" value="<?php print $post_fields['title']; ?>">
				<div class="editor-edit mt-10">URL поста</div>
				<input class="editor-edit-form-input mt-5 mb-10" type="text" name="post_url" placeholder="post url" onkeyup="this.value = this.value.replace(/[^a-z0-9\-]/g, '')"  value="<?php print $post_fields['url']; ?>">
				<input class="editor-edit-form-input mt-5 mb-10" type="text" name="post_date" id="datepicker" style="max-width: 200px; cursor: pointer; display: block;" placeholder="select date" value="<?php print $post_fields['date']; ?>">
                <div class="editor-edit mt-10">Теги</div>
                <input type="text"
                       id="tags"
                       class="editor-edit-form-input mt-5 mb-10"
                       data-role="tagsinput"
                       name="tags"
                       value="<?php echo $tags;?>"
                       style="max-width: 200px; cursor: pointer; display: block;"
                       placeholder="input tags">
                <div class="editor-edit mt-10">Игра</div>
                <select name="game"
                        style="max-width: 200px; cursor: pointer; display: block;"
                        class="editor-edit-form-input mt-5 mb-10">
                        <option value="">По умолчанию</option>
                        <?php foreach ($games as $game): ?>
                            <option value="<?php echo $game['id'];?>" <?php echo $post_fields['game_id'] === $game['id']? 'selected': ''; ?>>
                                <?php echo $game['name'];?>
                            </option>
                        <?php endforeach; ?>
                </select>

                <div class="change-editor-edit-ban" id="image">
					<div class="changePass mt-15 change-img-edit" style="display: block;">
						<div class="changePassBTN mt-5 change-img-btn-edit"><input class="change-img-edit-input" type="file" accept="image/jpeg,image/png" id="userfile_image" style="opacity: 0"/>
							<div class="changePassBTN change-img-edit-btn" style="margin-top: -18px !important;">Загрузить заставку</div>
							<img class="icos2" src="<?php print base_url("assets/icons/downloadfor-checkbox.svg"); ?>" />
						</div>
					</div>
					<div class="change-img-edit-warning" id="uploaded_img_name">
						Загрузите в формате .jpg или .png
					</div>
				</div>
				<textarea  id="text"><?php print $post_fields['text']; ?></textarea>

				<div class="wrapper-editor-preview-form" id="stream">
					<div class="wrapper-editor-preview-form-left">
						<div class="editor-title_post">Файл Видео</div>

						<div class="change-editor-edit-ban">
							<div class="changePass change-img-edit btn-editor-video" style="display: block;">
								<div class="changePassBTN mt-5 change-img-btn-edit"><input class="change-img-edit-input" type="file" id="userfile_stream" style="opacity: 0"/>
									<div class="changePassBTN change-img-edit-btn upload-img-nd-btn add-video-edit" style="margin-top: -20px !important;">Загрузить превью</div>
									<img class="icos3" src="<?php print base_url("assets/icons/downloadfor-checkbox.svg"); ?>" />
								</div>
							</div>
							<div class="change-img-edit-warning change-video-warning" id="uploaded_img_name">
							</div>
						</div>
						<div class="editor-title_post editor-title_post-mt">или загрузить ссылку на видео</div>
						<input class="editor_input_nd input-video-upload-editor" type="text" placeholder="http://"  value='<?php print $post_fields["text"]; ?>'>
					</div>
					<div class="wrapper-editor-preview-form-right">
						<div class="editor-preview-photo-block"><?php print "<img src='".$imgs_url.$post_fields['logo']."' style='width: 100%;height: 100%;' id='img_preview'>"; ?></div>
						<img class="icos4" src="<?php print base_url("assets/icons/search.svg"); ?>" /><span class="search-preview-right-block">preview</span>
						<div class="btn-play-editor-block"></div>
					</div>
				</div>


				<div class="wrapper-editor-preview-form" id="video">
					<div class="wrapper-editor-preview-form-left">
						<div class="editor-title_post">Файл Видео</div>

						<div class="change-editor-edit-ban">
							<div class="changePass change-img-edit btn-editor-video" style="display: block;">
								<div class="changePassBTN mt-5 change-img-btn-edit"><input class="change-img-edit-input" type="file"  id="userfile_video" style="opacity: 0"/>
									<div class="changePassBTN change-img-edit-btn upload-img-nd-btn add-video-edit" style="margin-top: -20px !important;">Загрузить превью</div>
									<img class="icos3" src="<?php print base_url("assets/icons/downloadfor-checkbox.svg"); ?>" />
								</div>
							</div>
							<div class="change-img-edit-warning change-video-warning" id="uploaded_img_name">
							</div>
						</div>
						<div class="editor-title_post editor-title_post-mt">или загрузить ссылку на видео</div>
						<input class="editor_input_nd input-video-upload-editor"  type="text" placeholder="http://" value='<?php print $post_fields["text"]; ?>'>
					</div>
					<div class="wrapper-editor-preview-form-right">
						<div class="editor-preview-photo-block"><?php print "<img src='".$imgs_url.$post_fields['logo']."' style='width: 100%;height: 100%;' id='img_preview1'>"; ?></div>
						<img class="icos4" src="<?php print base_url("assets/icons/search.svg"); ?>" /><span class="search-preview-right-block">preview</span>
						<div class="btn-play-editor-block"></div>
					</div>
				</div>

				<div class="wrapper-editor-preview-form" id="photo_galary">
					<div class="wrapper-editor-preview-form-left">
						<div class="editor-title_post">Фотогалерея</div>
						<div class="editor-title_descr">Рекомендуем загружать фотографии или картинки в формате 4:3 или 1:1 для лучшего отображения на страницу</div>
						<div class="change-editor-edit-ban">
							<div class="changePass change-img-edit btn-editor-video" style="display: block;">
								<div class="changePassBTN mt-5 change-img-btn-edit"><input class="change-img-edit-input" type="file" multiple id="userfile_galery" style="opacity: 0"/>
									<div class="changePassBTN change-img-edit-btn upload-img-nd-btn add-video-edit" style="margin-top: -20px !important;">Загрузить фото</div>
									<img class="icos3" src="<?php print base_url("assets/icons/downloadfor-checkbox.svg"); ?>" />
								</div>
							</div>
							<div class="change-img-edit-warning change-video-warning" id="uploaded_img_name">
							</div>
						</div>
						<?php
							$post_fields['text'] = str_replace("width:250px;", "width:110px; padding:10px;", $post_fields['text']);
						    $post_fields['text'] = str_replace("height:250px","height:90px", $post_fields['text']);
						?>
						<div class="photo-gallery-editor"><div id="imges_preview"><?php print $post_fields['text']; ?></div></div>
					</div>
                </div>
                    <button type="submit" class="main-post-button-edit main-post-button-edit-photo-gallery">Сохранить и Загрузить</button>
			</form>
		</div>
	</div>
</main>

<script src="<?php echo base_url('assets/js/dropdown.js'); ?>"></script>
<script src="<?php echo base_url('assets/js/tinyMCE.js'); ?>" referrerpolicy="origin"></script>
<script src="<?php echo base_url('assets/js/datepicker.js'); ?>" referrerpolicy="origin"></script>
<script>
	tinymce.init({selector:'textarea'});

	$( function() {
			$( "#datepicker" ).datetimepicker({
				format:'Y-m-d H:i:s',
				lang:'ru',
			});
        var id = $('#id').val();
        var post = $.ajax({
            method: 'POST',
            data : {
                'id':id
            },
            url: '<?php  echo base_url("/c-admin/post_type/fetchAttributes") ;?>',
            success : function(result){
                result = JSON.parse(result);
                if(result.status == true){
                    $('#post_type').val(id);
                    if(result.video){
                        current_type = 8
                        $('#image').hide();
                        $('#photo_galary').hide();
                        $('#stream').hide();
                        $('.tox-tinymce').hide();
                        $('#video').show();
                        $('#text_video').attr('name', 'post_content');
                        $('#text').attr('name', null);
                        $('#text_stream').attr('name', null);
                        $('#text_galery').attr('name', null);
                        $('#userfile_video').attr('name', 'userfile');
                        $('#userfile_stream').attr('name', null);
                        $('#userfile_image').attr('name', null);
                        $('#userfile_galery').attr('name', null);
                    } else if(result.stream){
                        current_type = 3
                        $('#stream').show();
                        $('#photo_galary').hide();
                        $('#video').hide();
                        $('#image').hide();
                        $('.tox-tinymce').hide();
                        $('#text_video').attr('name', null);
                        $('#text').attr('name', null);
                        $('#text_stream').attr('name', 'post_content');
                        $('#text_galery').attr('name', null);
                        $('#userfile_video').attr('name', null);
                        $('#userfile_stream').attr('name', 'userfile');
                        $('#userfile_image').attr('name', null);
                        $('#userfile_galery').attr('name', null);
                    } else if(result.photo_galery){
                        current_type = 9
                        $('#stream').hide();
                        $('#video').hide();
                        $('#image').hide();
                        $('#photo_galary').show();
                        $('.tox-tinymce').hide();
                        $('#text_video').attr('name', null);
                        $('#text').attr('name', null);
                        $('#text_stream').attr('name', null);
                        $('#text_galery').attr('name', 'post_content');
                        $('#userfile_video').attr('name', null);
                        $('#userfile_stream').attr('name', null);
                        $('#userfile_image').attr('name', null);
                        $('#userfile_galery').attr('name', 'userfile[]');
                    } else {
                        current_type = 1
                        $('#photo_galary').hide();
                        $('#stream').hide();
                        $('#video').hide();
                        $('#image').show();
                        $('.tox-tinymce').show();
                        $('#text_video').attr('name', null);
                        $('#text').attr('name', 'post_content');
                        $('#text_stream').attr('name', null);
                        $('#text_galery').attr('name', null);
                        $('#userfile_video').attr('name', null);
                        $('#userfile_stream').attr('name', null);
                        $('#userfile_image').attr('name', 'userfile');
                        $('#userfile_galery').attr('name', null);
                    }
                    $('.dnn').show();
                }
            }
        });
	} );
	window.addEventListener('load', function() {
		var inputs = document.querySelectorAll('input[type="file"]');
		inputs.forEach(function(item, i, arr) {
			item.addEventListener('change', function() {
				if (current_type == 3){
					if (this.files && this.files[0]) {
						var url = URL.createObjectURL(this.files[0]);
						if (this.files[0].type != "image/jpg" && this.files[0].type != "image/jpeg" && this.files[0].type != "image/png") {
							return;
						}
						$("#img_preview").attr("src", url);
					}
				} else if (current_type == 9){
					$("#imges_preview9").empty();
					if (this.files && this.files[0]) {
						var files = this.files.length-1;

						for(var i = 0; i <= files; i++) {
							var url = URL.createObjectURL(this.files[i]);
							if (this.files[i].type != "image/jpg" && this.files[i].type != "image/jpeg" && this.files[i].type != "image/png") {
								return;
							}
							var img = document.createElement('img');
							img.src = url;
							img.style.cssText = 'width:110px;height:90px;padding:10px';
							$("#imges_preview").append(img);
						};

					}

				} if(current_type == 8){
					var url = URL.createObjectURL(this.files[0]);
					$("#img_preview1").attr("src", url);
				} else {
					$("#uploaded_img_name").empty();
					if (this.files[0].type != "image/jpg" && this.files[0].type != "image/jpeg" && this.files[0].type != "image/png") {
						return;
					}
					$("#uploaded_img_name").append(this.files[0].name);
				}
			});
		});
	});

    function fetchAttributes(id)
    {
        var post = $.ajax({
            method: 'POST',
            data : {
                'id':id
            },
            url: '<?php  echo base_url("/c-admin/post_type/fetchAttributes") ; ?>',
            success : function(result){
                result = JSON.parse(result);
                if(result.status == true){
                    $('#post_type').val(id);
                    if(result.video){
                        current_type = 8
                        $('#image').hide();
                        $('#photo_galary').hide();
                        $('#stream').hide();
                        $('.tox-tinymce').hide();
                        $('#video').show();
                        $('#text_video').attr('name', 'post_content');
                        $('#text').attr('name', null);
                        $('#text_stream').attr('name', null);
                        $('#text_galery').attr('name', null);
                        $('#userfile_video').attr('name', 'userfile');
                        $('#userfile_stream').attr('name', null);
                        $('#userfile_image').attr('name', null);
                        $('#userfile_galery').attr('name', null);
                    } else if(result.stream){
                        current_type = 3
                        $('#stream').show();
                        $('#photo_galary').hide();
                        $('#video').hide();
                        $('#image').hide();
                        $('.tox-tinymce').hide();
                        $('#text_video').attr('name', null);
                        $('#text').attr('name', null);
                        $('#text_stream').attr('name', 'post_content');
                        $('#text_galery').attr('name', null);
                        $('#userfile_video').attr('name', null);
                        $('#userfile_stream').attr('name', 'userfile');
                        $('#userfile_image').attr('name', null);
                        $('#userfile_galery').attr('name', null);
                    } else if(result.photo_galery){
                        current_type = 9
                        $('#stream').hide();
                        $('#video').hide();
                        $('#image').hide();
                        $('#photo_galary').show();
                        $('.tox-tinymce').hide();
                        $('#text_video').attr('name', null);
                        $('#text').attr('name', null);
                        $('#text_stream').attr('name', null);
                        $('#text_galery').attr('name', 'post_content');
                        $('#userfile_video').attr('name', null);
                        $('#userfile_stream').attr('name', null);
                        $('#userfile_image').attr('name', null);
                        $('#userfile_galery').attr('name', 'userfile[]');
                    } else {
                        current_type = 1
                        $('#photo_galary').hide();
                        $('#stream').hide();
                        $('#video').hide();
                        $('#image').show();
                        $('.tox-tinymce').show();
                        $('#text_video').attr('name', null);
                        $('#text').attr('name', 'post_content');
                        $('#text_stream').attr('name', null);
                        $('#text_galery').attr('name', null);
                        $('#userfile_video').attr('name', null);
                        $('#userfile_stream').attr('name', null);
                        $('#userfile_image').attr('name', 'userfile');
                        $('#userfile_galery').attr('name', null);
                    }
                    $('.dnn').show();
                }
            }
        });
    }
</script>
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
		<ul>
			<li style="<?php print ($current_u_can[0] == 1 || $current_u_can[1]) ? '' : 'display:none'; ?>" class="active"><a href="<?php echo base_url('c-admin/posts/page/1'); ?>">Статьи</a></li>
			<li style="<?php print ($current_u_can[0] == 1 || $current_u_can[2]) ? '' : 'display:none'; ?>"><a href="<?php echo base_url("c-admin/matches/page/1"); ?>" >Статистика</a></li>
			<li style="<?php print ($current_u_can[0] == 1) ? '' : 'display:none'; ?>"><a href="<?php echo base_url('c-admin/users/page/1'); ?>"> Пользователи</a></li>
			<li style="<?php print ($current_u_can[0] == 1 || $current_u_can[3]) ? '' : 'display:none'; ?>"><a href="<?php echo base_url('c-admin/trainers/page/1'); ?>">Тренера</a></li>
			<li style="<?php print ($current_u_can[0] == 1) ? '' : 'display:none'; ?>"><a href="<?php echo base_url('c-admin/payments/page/1'); ?>">Оплаты</a></li>
			<li style="<?php print ($current_u_can[0] == 1) ? '' : 'display:none'; ?>"><a href="<?php echo base_url('c-admin/admins/page/1'); ?>">Администраторы</a></li>
            <li><a href="<?php echo base_url('c-admin/settings'); ?>">Настройки</a></li>
		</ul>
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
	?>
	<div class="main-content">
		<h1 class="main-title">Создать новость</h1>
		<div class="main-describe">
			<!-- Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus odit impedit non, veritatis illum nisi at dolore nam illo numquam sequi iste quidem dolores ipsa eaque ducimus laborum. Est, tenetur? -->
		</div>
		<div class="col-item">
			<label class="label" for="">Выберите тип поста</label>
			<div class="dropdown mb-15 main-post-dropdown-edit">
				<div id="server_id" class="dropdown-value main-post-dropdown-edit">Статья</div>
				<div name="server_id" id="server_id2" class="dropdown-list">
					<div value="1" class="js-dropdown-item dropdown-list-item main-post-dropdown-item id_1">Трансфер</div>
					<div value="2" class="js-dropdown-item dropdown-list-item main-post-dropdown-item id_2">Матч</div>
					<div value="3" class="js-dropdown-item dropdown-list-item main-post-dropdown-item id_3">Видео</div>
					<div value="4" class="js-dropdown-item dropdown-list-item main-post-dropdown-item id_4">Интервью</div>
					<div value="5" class="js-dropdown-item dropdown-list-item main-post-dropdown-item id_5">Статья</div>
					<div value="6" class="js-dropdown-item dropdown-list-item main-post-dropdown-item id_6">Обновления</div>
					<div value="7" class="js-dropdown-item dropdown-list-item main-post-dropdown-item id_7">Текст</div>
					<div value="8" class="js-dropdown-item dropdown-list-item main-post-dropdown-item id_8">Стрим</div>
					<div value="9" class="js-dropdown-item dropdown-list-item main-post-dropdown-item id_9">Фотогалерея</div>
				</div>
			</div>
		</div>
		<div id="b1" class="main-post-editor-edit z dnn">
			<span class="editor-edit">Заголовок поста</span>
			<form class="editor-edit-form" action="<?php print base_url("c-admin/post/add/".$UserID); ?>" method="post" enctype="multipart/form-data">
				<input type="hidden" value="true" name="add">
				<input type="hidden" value="1" name="post_type">
				<input class="editor-edit-form-input" type="text" name="post_title" placeholder="Заголовок">
				<div class="editor-edit mt-10">URL поста</div>
				<input class="editor-edit-form-input mt-5 mb-10 " type="text" name="post_url" placeholder="post url" onkeyup="this.value = this.value.replace(/[^a-z0-9\-]/g, '')">
				<input class="editor-edit-form-input mt-5 mb-10" type="date" name="post_date" id="datepicker1" style="max-width: 200px; cursor: pointer; display: block;" placeholder="select date">
				<div class="change-editor-edit-ban">
					<div class="changePass mt-15 change-img-edit" style="display: block;">
						<div class="changePassBTN mt-5 change-img-btn-edit"><input class="change-img-edit-input" type="file" accept="image/jpeg,image/png" name="userfile" style="opacity: 0"/>
							<div class="changePassBTN change-img-edit-btn" style="margin-top: -18px !important;">Загрузить заставку</div>
							<img class="icos2" src="<?php print base_url("assets/icons/downloadfor-checkbox.svg"); ?>" />
						</div>
					</div>
					<div class="change-img-edit-warning" id="uploaded_img_name1">
						Загрузите в формате .jpg или .png
					</div>
				</div>
				<textarea  name="post_content"></textarea>
				<button type="submit" class="main-post-button-edit">Сохранить и Загрузить</button>
			</form>
		</div>
		<div id="b2" class="main-post-editor-edit z dnn">
			<span class="editor-edit">Заголовок поста</span>
			
			<form class="editor-edit-form" action="<?php print base_url("c-admin/post/add/".$UserID); ?>" method="post" enctype="multipart/form-data">
				<input type="hidden" value="true" name="add">
				<input type="hidden" value="2" name="post_type">
				<input class="editor-edit-form-input" type="text" name="post_title" placeholder="Заголовок">
				<div class="editor-edit mt-10">URL поста</div>
				<input class="editor-edit-form-input mt-5 mb-10" type="text" name="post_url" placeholder="post url" onkeyup="this.value = this.value.replace(/[^a-z0-9\-]/g, '')">
				<input class="editor-edit-form-input mt-5 mb-10" type="text" name="post_date" id="datepicker2" style="max-width: 200px; cursor: pointer; display: block;" placeholder="select date">
				<div class="change-editor-edit-ban">
					<div class="changePass mt-15 change-img-edit" style="display: block;">
						<div class="changePassBTN mt-5 change-img-btn-edit"><input class="change-img-edit-input" type="file" accept="image/jpeg,image/png" name="userfile" style="opacity: 0"/>
							<div class="changePassBTN change-img-edit-btn" style="margin-top: -18px !important;">Загрузить заставку</div>
							<img class="icos2" src="<?php print base_url("assets/icons/downloadfor-checkbox.svg"); ?>" />
						</div>
					</div>
					<div class="change-img-edit-warning" id="uploaded_img_name2">
						Загрузите в формате .jpg или .png
					</div>
				</div>
				<textarea  name="post_content"></textarea>
				<button type="submit" class="main-post-button-edit">Сохранить и Загрузить</button>
			</form>
		</div>
		<div id="b3" class="z dnn">
			<span class="editor-title_post">Заголовок поста</span>
			<form class="editor-edit-form" action="<?php print base_url("c-admin/post/add/".$UserID); ?>" method="post" enctype="multipart/form-data">
				<input type="hidden" value="true" name="add">
				<input type="hidden" value="3" name="post_type">
				<input class="editor_input_nd input-video-upload-editor" type="text" name="post_title" placeholder="Имя поста">
				<div class="editor-title_post">URL поста</div>
				<input class="editor_input_nd input-video-upload-editor mt-5 mb-10" type="text" name="post_url" placeholder="post url" onkeyup="this.value = this.value.replace(/[^a-z0-9\-]/g, '')">
				<input class="editor-edit-form-input mt-5 mb-10" type="text" name="post_date" id="datepicker3" style="max-width: 200px; cursor: pointer; display: block;" placeholder="select date">
				<div class="wrapper-editor-preview-form">
					<div class="wrapper-editor-preview-form-left">
						<div class="editor-title_post">Файл Видео</div>
						<!-- <div class="editor-title_descr">Рекомендуем загружать фотографии или картинки в формате 4:3 или 1:1 для лучшего отображения на страницу</div> -->
						<div class="change-editor-edit-ban">
							<div class="changePass change-img-edit btn-editor-video" style="display: block;">
								<div class="changePassBTN mt-5 change-img-btn-edit"><input class="change-img-edit-input" type="file"  name="userfile" style="opacity: 0"/>
									<div class="changePassBTN change-img-edit-btn upload-img-nd-btn add-video-edit" style="margin-top: -20px !important;" >Загрузить превью</div>
									<img class="icos3" src="<?php print base_url("assets/icons/downloadfor-checkbox.svg"); ?>" />
								</div>
							</div>
							<div class="change-img-edit-warning change-video-warning" id="uploaded_img_name3">
								<!-- Нет файла .jpeg или .png -->
							
							</div>
						</div>
						<div class="editor-title_post editor-title_post-mt">или загрузить ссылку на видео</div>
						<input class="editor_input_nd input-video-upload-editor" type="text" placeholder="http://" name="post_content">
					</div>
					<div class="wrapper-editor-preview-form-right">
						<div class="editor-preview-photo-block">
							<div class="inner-editor-preview-form"><img src="" class="inner-div-editor-preview-form" id="img_preview" /></div>
						</div>
						<img class="icos4" src="<?php print base_url("assets/icons/search.svg"); ?>" /><span class="search-preview-right-block">preview</span>
						<div class="btn-play-editor-block"></div>
					</div>
				</div>
				<button type="submit" class="main-post-button-edit edit-btn-upload-video">Сохранить и Загрузить</button>
			</form>
		
		
		</div>
		<div id="b4" class="main-post-editor-edit z dnn">
			<span class="editor-edit">Заголовок поста</span>
			<form class="editor-edit-form" action="<?php print base_url("c-admin/post/add/".$UserID); ?>" method="post" enctype="multipart/form-data">
				<input type="hidden" value="true" name="add">
				<input type="hidden" value="4" name="post_type">
				<input class="editor-edit-form-input" type="text" name="post_title" placeholder="Заголовок">
				<div class="editor-edit mt-10">URL поста</div>
				<input class="editor-edit-form-input mt-5 mb-10" type="text" name="post_url" placeholder="post url" onkeyup="this.value = this.value.replace(/[^a-z0-9\-]/g, '')">
				<input class="editor-edit-form-input mt-5 mb-10" type="text" name="post_date" id="datepicker4" style="max-width: 200px; cursor: pointer; display: block;" placeholder="select date">
				<div class="change-editor-edit-ban">
					<div class="changePass mt-15 change-img-edit" style="display: block;">
						<div class="changePassBTN mt-5 change-img-btn-edit"><input class="change-img-edit-input" type="file" accept="image/jpeg,image/png" name="userfile" style="opacity: 0"/>
							<div class="changePassBTN change-img-edit-btn" style="margin-top: -18px !important;">Загрузить заставку</div>
							<img class="icos2" src="<?php print base_url("assets/icons/downloadfor-checkbox.svg"); ?>" />
						</div>
					</div>
					<div class="change-img-edit-warning" id="uploaded_img_name4">
						Загрузите в формате .jpg или .png
					</div>
				</div>
				<textarea  name="post_content"></textarea>
				<button type="submit" class="main-post-button-edit">Сохранить и Загрузить</button>
			</form>
		</div>
		<div id="b5" class="main-post-editor-edit z">
			<span class="editor-edit">Заголовок поста</span>
			
			
			<form class="editor-edit-form" action="<?php print base_url("c-admin/post/add/".$UserID); ?>" method="post" enctype="multipart/form-data">
				<input type="hidden" value="true" name="add">
				<input type="hidden" value="5" name="post_type">
				<input class="editor-edit-form-input" type="text" name="post_title" placeholder="Заголовок">
				<div class="editor-edit mt-10">URL поста</div>
				<input class="editor-edit-form-input mt-5 mb-10" type="text" name="post_url" placeholder="post url" onkeyup="this.value = this.value.replace(/[^a-z0-9\-]/g, '')">
				<input class="editor-edit-form-input mt-5 mb-10" type="text" name="post_date" id="datepicker5" style="max-width: 200px; cursor: pointer; display: block;" placeholder="select date">
				<div class="change-editor-edit-ban">
					<div class="changePass mt-15 change-img-edit" style="display: block;">
						<div class="changePassBTN mt-5 change-img-btn-edit"><input class="change-img-edit-input" type="file" accept="image/jpeg,image/png" name="userfile" style="opacity: 0"/>
							<div class="changePassBTN change-img-edit-btn" style="margin-top: -18px !important;">Загрузить заставку</div>
							<img class="icos2" src="<?php print base_url("assets/icons/downloadfor-checkbox.svg"); ?>" />
						</div>
					</div>
					<div class="change-img-edit-warning" id="uploaded_img_name5">
						Загрузите в формате .jpg или .png
					</div>
				</div>
				<textarea  name="post_content"></textarea>
				<button type="submit" class="main-post-button-edit">Сохранить и Загрузить</button>
			</form>
		
		
		</div>
		<div id="b6" class="main-post-editor-edit z dnn">
			<span class="editor-edit">Заголовок поста</span>
			<form class="editor-edit-form" action="<?php print base_url("c-admin/post/add/".$UserID); ?>" method="post" enctype="multipart/form-data">
				<input type="hidden" value="true" name="add">
				<input type="hidden" value="6" name="post_type">
				<input class="editor-edit-form-input" type="text" name="post_title" placeholder="Заголовок">
				<div class="editor-edit mt-10">URL поста</div>
				<input class="editor-edit-form-input mt-5 mb-10" type="text" name="post_url" placeholder="post url" onkeyup="this.value = this.value.replace(/[^a-z0-9\-]/g, '')">
				<input class="editor-edit-form-input mt-5 mb-10" type="text" name="post_date" id="datepicker6" style="max-width: 200px; cursor: pointer; display: block;" placeholder="select date">
				<div class="change-editor-edit-ban">
					<div class="changePass mt-15 change-img-edit" style="display: block;">
						<div class="changePassBTN mt-5 change-img-btn-edit"><input class="change-img-edit-input" type="file" accept="image/jpeg,image/png" name="userfile" style="opacity: 0"/>
							<div class="changePassBTN change-img-edit-btn" style="margin-top: -18px !important;">Загрузить заставку</div>
							<img class="icos2" src="<?php print base_url("assets/icons/downloadfor-checkbox.svg"); ?>" />
						</div>
					</div>
					<div class="change-img-edit-warning" id="uploaded_img_name6">
						Загрузите в формате .jpg или .png
					</div>
				</div>
				<textarea  name="post_content"></textarea>
				<button type="submit" class="main-post-button-edit">Сохранить и Загрузить</button>
			</form>
		</div>
		<div id="b7" class="main-post-editor-edit z dnn">
			<span class="editor-edit">Заголовок поста</span>
			<form class="editor-edit-form" action="<?php print base_url("c-admin/post/add/".$UserID); ?>" method="post" enctype="multipart/form-data">
				<input type="hidden" value="true" name="add">
				<input type="hidden" value="7" name="post_type">
				<input class="editor-edit-form-input" type="text" name="post_title" placeholder="Заголовок">
				<div class="editor-edit mt-10">URL поста</div>
				<input class="editor-edit-form-input mt-5 mb-10" type="text" name="post_url" placeholder="post url" onkeyup="this.value = this.value.replace(/[^a-z0-9\-]/g, '')">
				<input class="editor-edit-form-input mt-5 mb-10" type="text" name="post_date" id="datepicker7" style="max-width: 200px; cursor: pointer; display: block;" placeholder="select date">
				<div class="change-editor-edit-ban">
					<div class="changePass mt-15 change-img-edit" style="display: block;">
						<div class="changePassBTN mt-5 change-img-btn-edit"><input class="change-img-edit-input" type="file" accept="image/jpeg,image/png" name="userfile" style="opacity: 0"/>
							<div class="changePassBTN change-img-edit-btn" style="margin-top: -18px !important;">Загрузить заставку</div>
							<img class="icos2" src="<?php print base_url("assets/icons/downloadfor-checkbox.svg"); ?>" />
						</div>
					</div>
					<div class="change-img-edit-warning" id="uploaded_img_name7">
						Загрузите в формате .jpg или .png
					</div>
				</div>
				<textarea  name="post_content"></textarea>
				<button type="submit" class="main-post-button-edit">Сохранить и Загрузить</button>
			</form>
		</div>
		<div id="b8" class="z dnn">
			<span class="editor-title_post">Заголовок поста</span>
			<form class="editor-edit-form" action="<?php print base_url("c-admin/post/add/".$UserID); ?>" method="post" enctype="multipart/form-data">
				<input type="hidden" value="true" name="add">
				<input type="hidden" value="8" name="post_type">
				<input class="editor_input_nd input-video-upload-editor" type="text" placeholder="Имя поста" name="post_title">
				<div class="editor-title_post">URL поста</div>
				<input class="editor_input_nd input-video-upload-editor mt-5 mb-10" type="text" name="post_url" placeholder="post url" onkeyup="this.value = this.value.replace(/[^a-z0-9\-]/g, '')">
				<div class="wrapper-editor-preview-form">
					<div class="wrapper-editor-preview-form-left">
						<div class="editor-title_post">Файл Видео</div>
						<!-- <div class="editor-title_descr">Рекомендуем загружать фотографии или картинки в формате 4:3 или 1:1 для лучшего отображения на страницу</div> -->
						<input class="editor-edit-form-input mt-5 mb-10" type="text" name="post_date" id="datepicker8" style="max-width: 200px; cursor: pointer; display: block;" placeholder="select date">
						<div class="change-editor-edit-ban">
							<div class="changePass change-img-edit btn-editor-video" style="display: block;">
								<div class="changePassBTN mt-5 change-img-btn-edit"><input class="change-img-edit-input" type="file"name="userfile" style="opacity: 0"/>
									<div class="changePassBTN change-img-edit-btn upload-img-nd-btn add-video-edit" style="margin-top: -20px !important;">Загрузить превью</div>
									<img class="icos3" src="<?php print base_url("assets/icons/downloadfor-checkbox.svg"); ?>" />
								</div>
							</div>
							<div class="change-img-edit-warning change-video-warning" id="uploaded_img_name8">
							</div>
						</div>
						<div class="editor-title_post editor-title_post-mt">Ссылка на видео</div>
						<input class="editor_input_nd input-video-upload-editor" type="text" placeholder="http://" name="post_content">
					</div>
					<div class="wrapper-editor-preview-form-right">
						<div class="editor-preview-photo-block">
							<div class="inner-editor-preview-form"><img src="" class="inner-div-editor-preview-form" id="img_preview1" /></div>
						</div>
						<img class="icos4" src="<?php print base_url("assets/icons/search.svg"); ?>" /><span class="search-preview-right-block">preview</span>
						<div class="btn-play-editor-block"></div>
					</div>
				</div>
				<button type="submit" class="main-post-button-edit edit-btn-upload-video">Сохранить и Загрузить</button>
			</form>
		
		</div>
		<div id="b9" class="z dnn">
			<span class="editor-title_post">Заголовок поста</span>
			<form class="editor-edit-form" action="<?php print base_url("c-admin/post/add/".$UserID); ?>" method="post" enctype="multipart/form-data">
				<input type="hidden" value="true" name="add">
				<input type="hidden" value="9" name="post_type">
				<input class="editor_input_nd input-video-upload-editor" type="text" placeholder="Имя поста"  name="post_title">
				<div class="editor-title_post mt-10">URL поста</div>
				<input class="editor_input_nd input-video-upload-editor mt-5 mb-10" type="text" name="post_url" placeholder="post url" onkeyup="this.value = this.value.replace(/[^a-z0-9\-]/g, '')">
				<div class="wrapper-editor-preview-form">
					<div class="wrapper-editor-preview-form-left">
						<div class="editor-title_post">Фотогалерея</div>
						<div class="editor-title_descr">Рекомендуем загружать фотографии или картинки в формате 4:3 или 1:1 для лучшего отображения на страницу</div>
						<input class="editor-edit-form-input mt-5 mb-10" type="text" name="post_date" id="datepicker9" style="max-width: 200px; cursor: pointer; display: block;" placeholder="select date">
						<div class="change-editor-edit-ban">
							<div class="changePass change-img-edit btn-editor-video" style="display: block;">
								<div class="changePassBTN mt-5 change-img-btn-edit"><input class="change-img-edit-input" type="file" multiple name="userfile[]" style="opacity: 0"/>
									<div class="changePassBTN change-img-edit-btn upload-img-nd-btn add-video-edit" style="margin-top: -20px !important;">Загрузить фото</div>
									<img class="icos3" src="<?php print base_url("assets/icons/downloadfor-checkbox.svg"); ?>" />
								</div>
							</div>
							<div class="change-img-edit-warning change-video-warning" id="uploaded_img_name9">
							</div>
						</div>
						<div class="photo-gallery-editor" name="post_content"><div id="imges_preview"></div></div>
						<button type="submit" class="main-post-button-edit main-post-button-edit-photo-gallery">Сохранить и Загрузить</button>
					</div>
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
		for(var i = 1; i <= 9; i++){
			$( "#datepicker"+i ).datetimepicker({
				format:'Y-m-d H:i:s',
				lang:'ru',
			});
		}
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
					$("#uploaded_img_name"+current_type).empty();
					if (this.files[0].type != "image/jpg" && this.files[0].type != "image/jpeg" && this.files[0].type != "image/png") {
						return;
					}
					$("#uploaded_img_name"+current_type).append(this.files[0].name);
				}
			});
		});
		
	});

</script>

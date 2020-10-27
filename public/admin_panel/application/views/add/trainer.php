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
			<li style="<?php print ($current_u_can[0] == 1 || $current_u_can[1]) ? '' : 'display:none'; ?>"><a href="<?php echo base_url('c-admin/posts/page/1'); ?>">Статьи</a></li>
			<li style="<?php print ($current_u_can[0] == 1 || $current_u_can[2]) ? '' : 'display:none'; ?>"><a href="<?php echo base_url("c-admin/matches/page/1"); ?>" >Статистика</a></li>
			<li style="<?php print ($current_u_can[0] == 1) ? '' : 'display:none'; ?>"><a href="<?php echo base_url('c-admin/users/page/1'); ?>"> Пользователи</a></li>
			<li style="<?php print ($current_u_can[0] == 1 || $current_u_can[3]) ? '' : 'display:none'; ?>" class="active"><a href="<?php echo base_url('c-admin/trainers/page/1'); ?>">Тренера</a></li>
			<li style="<?php print ($current_u_can[0] == 1) ? '' : 'display:none'; ?>"><a href="<?php echo base_url('c-admin/payments/page/1'); ?>">Оплаты</a></li>
			<li style="<?php print ($current_u_can[0] == 1) ? '' : 'display:none'; ?>"><a href="<?php echo base_url('c-admin/admins/page/1'); ?>">Администраторы</a></li>
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
	<!--- ---->
	<div class="main-content">
        <?php if (isset($_SESSION['success_message'])): ?>
            <div class="alert alert-success" role="alert" style="">
                <?php echo $_SESSION['success_message']; ?>
            </div>
        <?php endif; ?>
		<h1 class="main-title">Создать профиль тренера</h1>
		
		
		<form action="<?php print base_url("c-admin/trainer/add/".$UserID); ?>" method="post" enctype="multipart/form-data">
			<input type="hidden" value="true" name="add">
			<div class="colx2 mt-10">
				<div class="col-item">
					<label class="label" for="">Никнейм</label>
					<div class="input mb-5" id="input">
						<input required type="text" class="fw-600 input2_txt" name="nickname" id="nickname" placeholder="Example: nickname3456789"  title="введите правильный никнейм">
					
					</div>
					<div class="mb-15">
						<img src="<?php print base_url("assets/icons/info.svg"); ?>" />
						<div class="info_txt">можно использовать email как никнейм</div>
					</div>
					
					<label class="label" for="">E-mail</label>
					<div class="input mb-5" id="input">
						<input required type="text" class="fw-600 input2_txt" name="Email" id="mail" placeholder="Example: example@example.com"  title="введите правильный E-mail" >
					
					</div>
					<div class="mb-15">
						<img src="<?php print base_url("assets/icons/info.svg"); ?>" />
						<div class="info_txt">Вводите правильный E-mail</div>
					</div>
				
				</div>
			</div>
			
			<!--- --->
			<!--- --->
			<!--- --->
			<div class="colx2" id="change-password-form">
				<div class="col-item">
					<label class="label" for="">Пароль</label>
					<div class="input mb-10">
						<input required type="password" name="new_password" id="new" placeholder="************" title="Invalid new password" pattern="^.{8}.*$" style="background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACIUlEQVQ4EX2TOYhTURSG87IMihDsjGghBhFBmHFDHLWwSqcikk4RRKJgk0KL7C8bMpWpZtIqNkEUl1ZCgs0wOo0SxiLMDApWlgOPrH7/5b2QkYwX7jvn/uc//zl3edZ4PPbNGvF4fC4ajR5VrNvt/mo0Gr1ZPOtfgWw2e9Lv9+chX7cs64CS4Oxg3o9GI7tUKv0Q5o1dAiTfCgQCLwnOkfQOu+oSLyJ2A783HA7vIPLGxX0TgVwud4HKn0nc7Pf7N6vV6oZHkkX8FPG3uMfgXC0Wi2vCg/poUKGGcagQI3k7k8mcp5slcGswGDwpl8tfwGJg3xB6Dvey8vz6oH4C3iXcFYjbwiDeo1KafafkC3NjK7iL5ESFGQEUF7Sg+ifZdDp9GnMF/KGmfBdT2HCwZ7TwtrBPC7rQaav6Iv48rqZwg+F+p8hOMBj0IbxfMdMBrW5pAVGV/ztINByENkU0t5BIJEKRSOQ3Aj+Z57iFs1R5NK3EQS6HQqF1zmQdzpFWq3W42WwOTAf1er1PF2USFlC+qxMvFAr3HcexWX+QX6lUvsKpkTyPSEXJkw6MQ4S38Ljdbi8rmM/nY+CvgNcQqdH6U/xrYK9t244jZv6ByUOSiDdIfgBZ12U6dHEHu9TpdIr8F0OP692CtzaW/a6y3y0Wx5kbFHvGuXzkgf0xhKnPzA4UTyaTB8Ph8AvcHi3fnsrZ7Wore02YViqVOrRXXPhfqP8j6MYlawoAAAAASUVORK5CYII=); background-attachment: scroll; background-size: 16px 18px; cursor: auto; background-position: 98% 50%; background-repeat: no-repeat no-repeat;">
					</div>
				</div>
				<div class="col-item" id="new_change">
					<label class="label" for="">Подтвердить пароль</label>
					<div class="input mb-10">
						<input required type="password" name="new_confirm" value="" id="new_confirm" placeholder="************" title="Invalid password confirm" pattern="^.{8}.*$" style="background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACIUlEQVQ4EX2TOYhTURSG87IMihDsjGghBhFBmHFDHLWwSqcikk4RRKJgk0KL7C8bMpWpZtIqNkEUl1ZCgs0wOo0SxiLMDApWlgOPrH7/5b2QkYwX7jvn/uc//zl3edZ4PPbNGvF4fC4ajR5VrNvt/mo0Gr1ZPOtfgWw2e9Lv9+chX7cs64CS4Oxg3o9GI7tUKv0Q5o1dAiTfCgQCLwnOkfQOu+oSLyJ2A783HA7vIPLGxX0TgVwud4HKn0nc7Pf7N6vV6oZHkkX8FPG3uMfgXC0Wi2vCg/poUKGGcagQI3k7k8mcp5slcGswGDwpl8tfwGJg3xB6Dvey8vz6oH4C3iXcFYjbwiDeo1KafafkC3NjK7iL5ESFGQEUF7Sg+ifZdDp9GnMF/KGmfBdT2HCwZ7TwtrBPC7rQaav6Iv48rqZwg+F+p8hOMBj0IbxfMdMBrW5pAVGV/ztINByENkU0t5BIJEKRSOQ3Aj+Z57iFs1R5NK3EQS6HQqF1zmQdzpFWq3W42WwOTAf1er1PF2USFlC+qxMvFAr3HcexWX+QX6lUvsKpkTyPSEXJkw6MQ4S38Ljdbi8rmM/nY+CvgNcQqdH6U/xrYK9t244jZv6ByUOSiDdIfgBZ12U6dHEHu9TpdIr8F0OP692CtzaW/a6y3y0Wx5kbFHvGuXzkgf0xhKnPzA4UTyaTB8Ph8AvcHi3fnsrZ7Wore02YViqVOrRXXPhfqP8j6MYlawoAAAAASUVORK5CYII=); background-attachment: scroll; background-size: 16px 18px; cursor: auto; background-position: 98% 50%; background-repeat: no-repeat no-repeat;">
					</div>
				</div>
			</div>
			<!--- --->
			<!--- --->
			<!--- --->
			<div class="colx2">
				<div class="col-item">
					<label class="label" for="">Price</label>
					<div class="input mb-5" id="input">
						<input required type="text" class="fw-600 input2_txt" name="price" id="price" placeholder="100руб./час"  title="введите правильный " onkeyup="this.value = this.value.replace(/[^0-9\.,]/g, '')">
					</div>
					<div class="mb-15">
						<img src="<?php print base_url("assets/icons/info.svg"); ?>" />
						<div class="info_txt">Формат поля - числовой</div>
					</div>
				</div>
				<div class="col-item">
					<label class="label" for="">Video URL</label>
					<div class="input mb-20" id="input">
						<input required type="text" class="fw-600 input2_txt" name="video_url" id="video_url" placeholder="https://"  title="введите правильный ">
					</div>
				</div>
				<div class="col-item">
					<label class="label" for="">Twitch URL</label>
					<div class="input mb-20" id="input">
						<input required type="text" class="fw-600 input2_txt" name="twitch" id="twitch" placeholder="https://"  title="введите правильный">
					</div>
					<label class="label" for="">Тип стрима</label>
					<div class="input mb-5" id="input">
						<input required type="text" class="fw-600 input2_txt" name="stream_type" id="stream_type" placeholder=""  title="введите правильный" onkeyup="this.value = this.value.replace(/[^0-9\.,]/g, '')">
					</div>
					<div class="mb-15">
						<img src="<?php print base_url("assets/icons/info.svg"); ?>" />
						<div class="info_txt">Формат поля - числовой</div>
					</div>
					<label class="label" for="">сколько текущий админ будет получать с ставки тренера в %</label>
					<div class="input mb-5" id="input">
						<input required type="text" class="fw-600 input2_txt" name="admin_percentage" id="admin_percentage" placeholder=""  title="введите правильный" onkeyup="this.value = this.value.replace(/[^0-9\.,]/g, '')">
					</div>
					<div class="mb-15">
						<img src="<?php print base_url("assets/icons/info.svg"); ?>" />
						<div class="info_txt">Формат поля - числовой</div>
					</div>
				</div>
				<div class="col-item">
					<label class="label" for="">Краткий заголовок</label>
					<div class="input mb-20" id="input">
						<input required type="text" class="fw-600 input2_txt" name="shorttitle" id="shorttitle" placeholder=""  title="введите правильный">
					</div>
					<label class="label" for="">Игра</label>
					<div class="input mb-5" id="input">
						<input required type="text" class="fw-600 input2_txt" name="game" id="game" placeholder="" title="введите правильный">
					</div>
				</div>
				<div class="col-item">
					<label class="label" for="">About</label>
					<div class=" mb-20" id="input" >
						<textarea  name="about"  style="width: 100%; resize:none;" rows="7" required></textarea>
					</div>
				</div>
				<div class="col-item">
					<label class="label" for="">Метод</label>
					<div class=" mb-20" id="input" >
						<textarea  name="method"  style="width: 100%; resize:none;" rows="7" required></textarea>
					</div>
				</div>
			</div>
			<!--- --->
			<!--- --->
			<!--- --->
			<div class="colx2">
				<div class="col-item">
					<div class="changePass mt-25" style="display: inline-block;">
						<div class="changePassBTN mt-5"><input type="file" name="userfile" style="opacity: 0"/>
							<div class="changePassBTN" style="margin-top: -17px !important;"> загрузить фото</div>
						</div>
					</div>
					<div class="uploadImgTxT" style="display: none;" id="upload_data">
						<div class="txt-orange uploadImgTxT ml-10" id="img_name"></div>
						<div class="txt-orange uploadImgTxT  ml-10 rmo_close"></div>
					</div>
				</div>
				
				<div class="col-item">
					<label class="label" style="font-size: 12px; margin-top: 30px;" for=""><img style="top: 3px;" class="search-img" src="<?php print base_url("assets/icons/search.svg"); ?>">Превью</label>
					<div class="mb-10 preview_img">
						<img class="img_preview" id="img_preview" src="">
					</div>
					<!--				<button class="btn btn-orange mt-15 mr-10 fw-400">Сохранить изображение</button>-->
				
				</div>
				<!--- --->
				<!--- --->
				<!--- --->
				<div class="flex">
					<button type="submit" class="btn btn-orange mt-15 mr-10 fw-400">Сохранить изменения</button>
				</div>
			</div>
		</form>
		<!--- --->
		<!--- --->
		<!--- --->
	</div>
</main>
<script>
	var userId = "<?php print $UserID; ?>";
	function changePass() {
		$("#changePass").css("display", "none");
		$("#new_change").css("display", "block");
	}
	var passBtn = document.querySelectorAll('#changePassBTN')[0];
	var changePassForm = document.querySelectorAll('#change-password-form')[0];
	
	changePassForm.querySelectorAll('input').forEach(item => {
		item.addEventListener('input', function (e) {
			
			e.stopPropagation();
			e.preventDefault();
			var control = this;
			if (validate(this) === false) {
				control.classList.add('has-error');
				control.focus();
				focusState = true;
			} else {
				if ($('#new_confirm').val().length >= 8) {
					if ($('#new').val() !== $('#new_confirm').val()) {
						control.classList.add('has-error');
					} else {
						control.classList.remove('has-error');
					}
				} else {
					control.classList.remove('has-error');
				}
			}
			
		}, false);
	});
	
	function validate(control) {
		let pattern = control.getAttribute('pattern');
		var reg = new RegExp(pattern);
		return pattern ? reg.test(control.value) : true;
	}
	
	window.addEventListener('load', function() {
		document.querySelector('input[type="file"]').addEventListener('change', function() {
			if (this.files && this.files[0]) {
				
				var url = URL.createObjectURL(this.files[0]);


				if (this.files[0].type != "image/jpg"
                    && this.files[0].type != "image/svg+xml"
                    && this.files[0].type != "image/jpeg"
                    && this.files[0].type != "image/png") {
					return;
				}
				
				$("#img_name").empty();
				$("#img_name").append(this.files[0].name);
				$("#upload_data").css("display", "inline-block");
				$("#img_preview").attr("src", url);
				
				
			}
		});
	});
</script>
<script src="<?php echo base_url('assets/js/common.js'); ?>"></script>
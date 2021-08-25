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
        <?php $activePath = 'admins';?>
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
	?>
	<!--- ---->
	<div class="main-content">
		<h1 class="main-title">Создать профиль админа</h1>
		
		
		<form action="<?php print base_url("c-admin/admin/add/".$UserID); ?>" method="post" enctype="multipart/form-data">
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
						<input required type="text" class="fw-600 input2_txt" name="Email" id="mail" placeholder="Example: example@example.com"  title="введите правильный никнейм">
					
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
						<input type="password" name="new_password" id="new" placeholder="************" title="Invalid new password" pattern="^.{8}.*$" style="background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACIUlEQVQ4EX2TOYhTURSG87IMihDsjGghBhFBmHFDHLWwSqcikk4RRKJgk0KL7C8bMpWpZtIqNkEUl1ZCgs0wOo0SxiLMDApWlgOPrH7/5b2QkYwX7jvn/uc//zl3edZ4PPbNGvF4fC4ajR5VrNvt/mo0Gr1ZPOtfgWw2e9Lv9+chX7cs64CS4Oxg3o9GI7tUKv0Q5o1dAiTfCgQCLwnOkfQOu+oSLyJ2A783HA7vIPLGxX0TgVwud4HKn0nc7Pf7N6vV6oZHkkX8FPG3uMfgXC0Wi2vCg/poUKGGcagQI3k7k8mcp5slcGswGDwpl8tfwGJg3xB6Dvey8vz6oH4C3iXcFYjbwiDeo1KafafkC3NjK7iL5ESFGQEUF7Sg+ifZdDp9GnMF/KGmfBdT2HCwZ7TwtrBPC7rQaav6Iv48rqZwg+F+p8hOMBj0IbxfMdMBrW5pAVGV/ztINByENkU0t5BIJEKRSOQ3Aj+Z57iFs1R5NK3EQS6HQqF1zmQdzpFWq3W42WwOTAf1er1PF2USFlC+qxMvFAr3HcexWX+QX6lUvsKpkTyPSEXJkw6MQ4S38Ljdbi8rmM/nY+CvgNcQqdH6U/xrYK9t244jZv6ByUOSiDdIfgBZ12U6dHEHu9TpdIr8F0OP692CtzaW/a6y3y0Wx5kbFHvGuXzkgf0xhKnPzA4UTyaTB8Ph8AvcHi3fnsrZ7Wore02YViqVOrRXXPhfqP8j6MYlawoAAAAASUVORK5CYII=); background-attachment: scroll; background-size: 16px 18px; cursor: auto; background-position: 98% 50%; background-repeat: no-repeat no-repeat;">
					</div>
				</div>
				<div class="col-item" id="new_change">
					<label class="label" for="">Подтвердить</label>
					<div class="input mb-10">
						<input type="password" name="new_confirm" value="" id="new_confirm" placeholder="************" title="Invalid password confirm" pattern="^.{8}.*$" style="background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACIUlEQVQ4EX2TOYhTURSG87IMihDsjGghBhFBmHFDHLWwSqcikk4RRKJgk0KL7C8bMpWpZtIqNkEUl1ZCgs0wOo0SxiLMDApWlgOPrH7/5b2QkYwX7jvn/uc//zl3edZ4PPbNGvF4fC4ajR5VrNvt/mo0Gr1ZPOtfgWw2e9Lv9+chX7cs64CS4Oxg3o9GI7tUKv0Q5o1dAiTfCgQCLwnOkfQOu+oSLyJ2A783HA7vIPLGxX0TgVwud4HKn0nc7Pf7N6vV6oZHkkX8FPG3uMfgXC0Wi2vCg/poUKGGcagQI3k7k8mcp5slcGswGDwpl8tfwGJg3xB6Dvey8vz6oH4C3iXcFYjbwiDeo1KafafkC3NjK7iL5ESFGQEUF7Sg+ifZdDp9GnMF/KGmfBdT2HCwZ7TwtrBPC7rQaav6Iv48rqZwg+F+p8hOMBj0IbxfMdMBrW5pAVGV/ztINByENkU0t5BIJEKRSOQ3Aj+Z57iFs1R5NK3EQS6HQqF1zmQdzpFWq3W42WwOTAf1er1PF2USFlC+qxMvFAr3HcexWX+QX6lUvsKpkTyPSEXJkw6MQ4S38Ljdbi8rmM/nY+CvgNcQqdH6U/xrYK9t244jZv6ByUOSiDdIfgBZ12U6dHEHu9TpdIr8F0OP692CtzaW/a6y3y0Wx5kbFHvGuXzkgf0xhKnPzA4UTyaTB8Ph8AvcHi3fnsrZ7Wore02YViqVOrRXXPhfqP8j6MYlawoAAAAASUVORK5CYII=); background-attachment: scroll; background-size: 16px 18px; cursor: auto; background-position: 98% 50%; background-repeat: no-repeat no-repeat;">
					</div>
				</div>
			</div>
			<!--- --->
			<!--- --->
			<!--- --->
			<div class="colx2 mt-30">
				<!--			<div class="col-item">-->
				<!--				<label class="label" for="">Роль администратора</label>-->
				<!--				-->
				<!--				-->
				<!--				<div class="dropdown mb-15">-->
				<!--					<div id="server_id" class="dropdown-value">Текущая роль</div>-->
				<!--					-->
				<!--					<div name="server_id" id="server_id2" class="dropdown-list">-->
				<!--						<div class="js-dropdown-item dropdown-list-item" value="main-admin">Главный администратор</div>-->
				<!--						<div class="js-dropdown-item dropdown-list-item" value="сontent-mn">Контент Менеджер</div>-->
				<!--						<div class="js-dropdown-item dropdown-list-item" value="statistics-mn">Ответственный за статистику</div>-->
				<!--						<div class="js-dropdown-item dropdown-list-item" value="coach-mn">Ответственный за обучение</div>-->
				<!--					</div>-->
				<!--				</div>-->
				<!--			</div>-->
				<div class="col-item">
					<div class="admin-notice">
                        <div style="display: block" class="ml-35 mt-15">
                            <input name="seo-specialist" value="1" type="checkbox" class="admin-checkbox" style="margin-top: 3px;" >
                            <div class="admin-notice-text">Сео специалист</div>
                            <div class="admin-notice-descr">Доступны все функции связанные с сео.</div>
                        </div>
						<div style="display: block; height: 50px;   vertical-align: top;" class="ml-35 mt-10">
							<input name="coach-mn" value="1" type="checkbox" class="admin-checkbox" style="margin-top: 13px;" >
							<div class="admin-notice-text" style=" margin-top: 10px;">Ответственный за обучение</div>
							<div class="admin-notice-descr mt-10">управление модулем обучения, проверки прохождения платежей, модерация информации по тренерам</div>
						</div>
						<div  style="display: block; height: 50px;" class="ml-35 mt-15">
							<input name="statistics-mn"  value="1" type="checkbox" class="admin-checkbox" style="margin-top: 3px;">
							<div class="admin-notice-text">Ответственный за статистику</div>
							<div class="admin-notice-descr">модерация и ручная загрузка статистики по матчам, играм, игрокам, командам</div>
						</div>
						<div style="display: block" class="ml-35 mt-15">
							<input name="content-mn" value="1" type="checkbox" class="admin-checkbox" style="margin-top: 3px;" >
							<div class="admin-notice-text">Контент-менеджер</div>
							<div class="admin-notice-descr">загрузка контента и новостей, фото, видео, текст</div>
						</div>
						<div style="display: block" class="ml-35 mt-15">
							<input name="main-admin" value="1" type="checkbox" class="admin-checkbox" style="margin-top: 3px;" >
							<div class="admin-notice-text">Главный администратор</div>
							<div class="admin-notice-descr">Доступны все функции и разделы админ-панели.</div>
						</div>
					</div>
				</div>
				<!--- --->
				<!--- --->
				<!--- --->
			
			</div>
			<div class="flex">
				<button class="btn btn-orange mt-15 mr-10 fw-400" type="submit">Сохранить изменения</button>
			</div>
		</form>
		<!--- --->
		<!--- --->
		<!--- --->
	</div>
</main>
<script>
	function changePass() {
		$("#changePass").css("display", "none");
		$("#new_change").css("display", "block");
	}
	var passBtn = document.querySelectorAll('#changePassBTN')[0];
	var changePassForm = document.querySelectorAll('#change-password-form')[0]
	
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
</script>

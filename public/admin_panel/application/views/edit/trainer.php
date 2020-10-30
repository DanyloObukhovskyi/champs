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
	<!--- ---->
	<div class="main-content">
        <?php if (isset($_SESSION['success_message'])): ?>
            <div class="alert alert-success" role="alert" style="">
                <?php echo $_SESSION['success_message']; ?>
            </div>
        <?php endif; ?>
		<h1 class="main-title">Редактировать профиль тренера- <?php print $user_info[0]['nickname']; ?></h1>
		
		
		<form action="<?php print base_url("c-admin/trainer/edit/".$user_info[0]['userid']."/".$UserID); ?>" method="post" enctype="multipart/form-data">
			<input type="hidden" value="true" name="edit">
			<div class="colx2 mt-10">
				<div class="col-item">
					<label class="label" for="">Никнейм</label>
					<div class="input mb-5" id="input">
						<input required type="text" class="fw-600 input2_txt" name="nickname" id="nickname" placeholder="Example: nickname3456789"  title="введите правильный никнейм" value="<?php print $user_info[0]['nickname']; ?>">
					
					</div>
					<div class="mb-15">
						<img src="<?php print base_url("assets/icons/info.svg"); ?>" />
						<div class="info_txt">можно использовать email как никнейм</div>
					</div>
					
					<label class="label" for="">E-mail</label>
					<div class="input mb-5" id="input">
						<input required type="text" class="fw-600 input2_txt" name="Email" id="mail" placeholder="Example: example@example.com"  title="введите правильный E-mail" value="<?php print $user_info[0]['email']; ?>">
					
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
				<div class="col-item">
					<div class="changePass mt-25" id="changePassBTN" onclick="changePass()">
						<div class="changePassBTN mt-5" >Изменить пароль</div>
					</div>
				</div>
				<div class="col-item" style="display: none" id="new_change">
					<label class="label" for="">Подтвердить</label>
					<div class="input mb-10">
						<input type="password" name="new_confirm" value="" id="new_confirm" placeholder="************" title="Invalid password confirm" pattern="^.{8}.*$" style="background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACIUlEQVQ4EX2TOYhTURSG87IMihDsjGghBhFBmHFDHLWwSqcikk4RRKJgk0KL7C8bMpWpZtIqNkEUl1ZCgs0wOo0SxiLMDApWlgOPrH7/5b2QkYwX7jvn/uc//zl3edZ4PPbNGvF4fC4ajR5VrNvt/mo0Gr1ZPOtfgWw2e9Lv9+chX7cs64CS4Oxg3o9GI7tUKv0Q5o1dAiTfCgQCLwnOkfQOu+oSLyJ2A783HA7vIPLGxX0TgVwud4HKn0nc7Pf7N6vV6oZHkkX8FPG3uMfgXC0Wi2vCg/poUKGGcagQI3k7k8mcp5slcGswGDwpl8tfwGJg3xB6Dvey8vz6oH4C3iXcFYjbwiDeo1KafafkC3NjK7iL5ESFGQEUF7Sg+ifZdDp9GnMF/KGmfBdT2HCwZ7TwtrBPC7rQaav6Iv48rqZwg+F+p8hOMBj0IbxfMdMBrW5pAVGV/ztINByENkU0t5BIJEKRSOQ3Aj+Z57iFs1R5NK3EQS6HQqF1zmQdzpFWq3W42WwOTAf1er1PF2USFlC+qxMvFAr3HcexWX+QX6lUvsKpkTyPSEXJkw6MQ4S38Ljdbi8rmM/nY+CvgNcQqdH6U/xrYK9t244jZv6ByUOSiDdIfgBZ12U6dHEHu9TpdIr8F0OP692CtzaW/a6y3y0Wx5kbFHvGuXzkgf0xhKnPzA4UTyaTB8Ph8AvcHi3fnsrZ7Wore02YViqVOrRXXPhfqP8j6MYlawoAAAAASUVORK5CYII=); background-attachment: scroll; background-size: 16px 18px; cursor: auto; background-position: 98% 50%; background-repeat: no-repeat no-repeat;">
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
						<input required type="text" class="fw-600 input2_txt" name="price" id="price" placeholder="100руб./час"  title="введите правильный E-mail" value="<?php print $user_info[0]['cost']; ?>" onkeyup="this.value = this.value.replace(/[^0-9\.,]/g, '')">
					</div>
					<div class="mb-15">
						<img src="<?php print base_url("assets/icons/info.svg"); ?>" />
						<div class="info_txt">Формат поля - числовой</div>
					</div>
                    <label class="label" for="">Дискорд</label>
                    <div class="input" id="input">
                        <input type="text" class="fw-600 input2_txt" name="discord" value="<?php print $user_info[0]['discord']; ?>" title="введите правильный">
                    </div>
				</div>
				<div class="col-item">
					<label class="label" for="">Video URLs</label>
                    <div id="videos" class="col-item" style="width: 100%">
                        <?php foreach ($videos as $key => $video): ?>
                            <div style="display: flex; justify-content: space-between;">
                                <div class="input mb-20" style="width: 100%;margin-right: 5px;">
                                    <input type="text"
                                           class="fw-600 input2_txt video_input"
                                           name="videos[<?php print $key;?>]"
                                           data-key="<?php print $key;?>"
                                           value="<?php print $video['video_url']; ?>">
                                </div>
                                <button type="button"
                                        onclick="removeVideo(this)"
                                        class="btn btn-orange remove-video"
                                        style="display: flex; align-items: center;">
                                    <img width="25px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQyNyA0MjcuMDAxMzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTIzMi4zOTg0MzggMTU0LjcwMzEyNWMtNS41MjM0MzggMC0xMCA0LjQ3NjU2My0xMCAxMHYxODljMCA1LjUxOTUzMSA0LjQ3NjU2MiAxMCAxMCAxMCA1LjUyMzQzNyAwIDEwLTQuNDgwNDY5IDEwLTEwdi0xODljMC01LjUyMzQzNy00LjQ3NjU2My0xMC0xMC0xMHptMCAwIiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtMTE0LjM5ODQzOCAxNTQuNzAzMTI1Yy01LjUyMzQzOCAwLTEwIDQuNDc2NTYzLTEwIDEwdjE4OWMwIDUuNTE5NTMxIDQuNDc2NTYyIDEwIDEwIDEwIDUuNTIzNDM3IDAgMTAtNC40ODA0NjkgMTAtMTB2LTE4OWMwLTUuNTIzNDM3LTQuNDc2NTYzLTEwLTEwLTEwem0wIDAiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0yOC4zOTg0MzggMTI3LjEyMTA5NHYyNDYuMzc4OTA2YzAgMTQuNTYyNSA1LjMzOTg0MyAyOC4yMzgyODEgMTQuNjY3OTY4IDM4LjA1MDc4MSA5LjI4NTE1NiA5LjgzOTg0NCAyMi4yMDcwMzIgMTUuNDI1NzgxIDM1LjczMDQ2OSAxNS40NDkyMTloMTg5LjIwMzEyNWMxMy41MjczNDQtLjAyMzQzOCAyNi40NDkyMTktNS42MDkzNzUgMzUuNzMwNDY5LTE1LjQ0OTIxOSA5LjMyODEyNS05LjgxMjUgMTQuNjY3OTY5LTIzLjQ4ODI4MSAxNC42Njc5NjktMzguMDUwNzgxdi0yNDYuMzc4OTA2YzE4LjU0Mjk2OC00LjkyMTg3NSAzMC41NTg1OTMtMjIuODM1OTM4IDI4LjA3ODEyNC00MS44NjMyODItMi40ODQzNzQtMTkuMDIzNDM3LTE4LjY5MTQwNi0zMy4yNTM5MDYtMzcuODc4OTA2LTMzLjI1NzgxMmgtNTEuMTk5MjE4di0xMi41Yy4wNTg1OTMtMTAuNTExNzE5LTQuMDk3NjU3LTIwLjYwNTQ2OS0xMS41MzkwNjMtMjguMDMxMjUtNy40NDE0MDYtNy40MjE4NzUtMTcuNTUwNzgxLTExLjU1NDY4NzUtMjguMDYyNS0xMS40Njg3NWgtODguNzk2ODc1Yy0xMC41MTE3MTktLjA4NTkzNzUtMjAuNjIxMDk0IDQuMDQ2ODc1LTI4LjA2MjUgMTEuNDY4NzUtNy40NDE0MDYgNy40MjU3ODEtMTEuNTk3NjU2IDE3LjUxOTUzMS0xMS41MzkwNjIgMjguMDMxMjV2MTIuNWgtNTEuMTk5MjE5Yy0xOS4xODc1LjAwMzkwNi0zNS4zOTQ1MzEgMTQuMjM0Mzc1LTM3Ljg3ODkwNyAzMy4yNTc4MTItMi40ODA0NjggMTkuMDI3MzQ0IDkuNTM1MTU3IDM2Ljk0MTQwNyAyOC4wNzgxMjYgNDEuODYzMjgyem0yMzkuNjAxNTYyIDI3OS44Nzg5MDZoLTE4OS4yMDMxMjVjLTE3LjA5NzY1NiAwLTMwLjM5ODQzNy0xNC42ODc1LTMwLjM5ODQzNy0zMy41di0yNDUuNWgyNTB2MjQ1LjVjMCAxOC44MTI1LTEzLjMwMDc4MiAzMy41LTMwLjM5ODQzOCAzMy41em0tMTU4LjYwMTU2Mi0zNjcuNWMtLjA2NjQwNy01LjIwNzAzMSAxLjk4MDQ2OC0xMC4yMTg3NSA1LjY3NTc4MS0xMy44OTQ1MzEgMy42OTE0MDYtMy42NzU3ODEgOC43MTQ4NDMtNS42OTUzMTMgMTMuOTI1NzgxLTUuNjA1NDY5aDg4Ljc5Njg3NWM1LjIxMDkzNy0uMDg5ODQ0IDEwLjIzNDM3NSAxLjkyOTY4OCAxMy45MjU3ODEgNS42MDU0NjkgMy42OTUzMTMgMy42NzE4NzUgNS43NDIxODggOC42ODc1IDUuNjc1NzgyIDEzLjg5NDUzMXYxMi41aC0xMjh6bS03MS4xOTkyMTkgMzIuNWgyNzAuMzk4NDM3YzkuOTQxNDA2IDAgMTggOC4wNTg1OTQgMTggMThzLTguMDU4NTk0IDE4LTE4IDE4aC0yNzAuMzk4NDM3Yy05Ljk0MTQwNyAwLTE4LTguMDU4NTk0LTE4LTE4czguMDU4NTkzLTE4IDE4LTE4em0wIDAiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0xNzMuMzk4NDM4IDE1NC43MDMxMjVjLTUuNTIzNDM4IDAtMTAgNC40NzY1NjMtMTAgMTB2MTg5YzAgNS41MTk1MzEgNC40NzY1NjIgMTAgMTAgMTAgNS41MjM0MzcgMCAxMC00LjQ4MDQ2OSAxMC0xMHYtMTg5YzAtNS41MjM0MzctNC40NzY1NjMtMTAtMTAtMTB6bTAgMCIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjwvZz48L3N2Zz4=" />
                                </button>
                            </div>
                        <?php endforeach; ?>
                    </div>
                    <div style="display: flex;justify-content: space-between;">
                        <div class="input mb-20" style="width: 100%;margin-right: 5px;">
                            <input type="text"
                                   class="fw-600 input2_txt new_video_link"
                                   id="add_video"
                                   placeholder="https://"
                                   title="введите правильный E-mail"
                                   value="">
                        </div>
                        <button type="button"
                                onclick="addVideo()"
                                class="btn btn-orange addVideo">
                            Добавить видео
                        </button>
                    </div>
				</div>
				<div class="col-item">
					<label class="label" for="">Twitch URL</label>
					<div class="input mb-20" id="input">
						<input required type="text" class="fw-600 input2_txt" name="twitch" id="twitch" placeholder="https://"  title="введите правильный" value="<?php print $user_info[0]['twitch']; ?>">
					</div>
					<label class="label" for="">Тип стрима</label>
					<div class="input mb-5" id="input">
						<input required type="text" class="fw-600 input2_txt" name="stream_type" id="stream_type" placeholder=""  value="<?php print $user_info[0]['stream_type']; ?>" title="введите правильный" onkeyup="this.value = this.value.replace(/[^0-9\.,]/g, '')">
					</div>
					<div class="mb-15">
						<img src="<?php print base_url("assets/icons/info.svg"); ?>" />
						<div class="info_txt">Формат поля - числовой</div>
					</div>
					<label class="label" for="">сколько текущий админ будет получать с ставки тренера в %</label>
					<div class="input mb-5" id="input">
						<input required type="text" class="fw-600 input2_txt" name="admin_percentage" id="admin_percentage " placeholder="" value="<?php print $user_info[0]['admin_percentage']; ?>" title="введите правильный" onkeyup="this.value = this.value.replace(/[^0-9\.,]/g, '')">
					</div>
					<div class="mb-15">
						<img src="<?php print base_url("assets/icons/info.svg"); ?>" />
						<div class="info_txt">Формат поля - числовой</div>
					</div>
				</div>
				<div class="col-item">
					<label class="label" for="">Краткий заголовок</label>
					<div class="input mb-20" id="input">
						<input required type="text" class="fw-600 input2_txt" name="shorttitle" id="shorttitle" placeholder=""  title="введите правильный" value="<?php print $user_info[0]['shorttitle']; ?>">
					</div>
					<label class="label" for="">Игра</label>
					<div class="input mb-20"" id="input">
						<input required type="text" class="fw-600 input2_txt" name="game" id="game" placeholder=""  value="<?php print $user_info[0]['game']; ?>" title="введите правильный">
					</div>
				</div>
				<div class="col-item">
					<label class="label" for="">About</label>
					<div class=" mb-20" id="input" >
						<textarea  name="about"  style="width: 100%; resize:none;" rows="7" required><?php print $user_info[0]['about']; ?></textarea>
					</div>
				
				</div>
				<div class="col-item">
					<label class="label" for="">Метод</label>
					<div class=" mb-20" id="input" >
						<textarea  style="width: 100%; resize:none;" rows="7" name="method" required><?php print $user_info[0]['method']; ?></textarea>
					</div>
				</div>
				<div class="col-item">
					<div class="admin-notice" style="height: 38px;">
						<div style="display: block; height: 50px;   vertical-align: top;" class="ml-35 mt-10">
							<input name="delete_trainer" value="1" type="checkbox" class="admin-checkbox" style="margin-top: 13px;" >
							<div class="admin-notice-text" style=" margin-top: 10px;">Убрать профиль из тренеров</div>
						</div>
					</div>
				</div>
			</div>
			<div class="colx2">
				<div class="col-item">
					<div class="changePass mt-25" style="display: inline-block;">
						<div class="changePassBTN mt-5">
                            <input type="file" name="userfile" style="opacity: 0"/>
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
						<img class="img_preview" id="img_preview" src="<?php print $imgs_url.$user_info[0]['photo']; ?>">
					</div>
				</div>
				<!--- --->
				<!--- --->
				<!--- --->
				<div class="flex">
					<button type="submit" class="btn btn-orange mt-15 mr-10 fw-400">Сохранить изменения</button>
					
					<a href="<?php print base_url("c-admin/trainer/delete/".$user_info[0]['userid']."/".$UserID); ?>" class="changePass mt-25" style="height: 36px;top: -9px; position: relative">
						<div class="changePassBTN" style="margin-top: 9px;  ">Удалить профиль</div>
					</a>
				</div>
			</div>
		</form>
		<!--- --->
		<!--- --->
		<!--- --->
	</div>
</main>
<script>
	var userId = "<?php print $ProfileID; ?>";
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
                    && this.files[0].type != "image/jpeg"
                    && this.files[0].type != "image/svg+xml"
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

    function removeVideo(context){
        $(context).parent().remove();
    }

    function addVideo(){
        let key = 0;

        $('.video_input').each(function () {
            key = +$(this).data('key') + 1
        })

        $( "#videos" ).append(`
        <div style="display: flex; justify-content: space-between;">
            <div class="input mb-20" style="width: 100%;margin-right: 5px;">
                <input type="text"
                       class="fw-600 input2_txt video_input"
                       name="videos[${key}]"
                       data-key="${key}"
                       title="введите правильный E-mail"
                       value="${$('#add_video').val()}">
            </div>
            <button type="button"
                    class="btn btn-orange remove-video"
                    onclick="removeVideo(this)"
                    style="display: flex; align-items: center;">
                <img width="25px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQyNyA0MjcuMDAxMzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTIzMi4zOTg0MzggMTU0LjcwMzEyNWMtNS41MjM0MzggMC0xMCA0LjQ3NjU2My0xMCAxMHYxODljMCA1LjUxOTUzMSA0LjQ3NjU2MiAxMCAxMCAxMCA1LjUyMzQzNyAwIDEwLTQuNDgwNDY5IDEwLTEwdi0xODljMC01LjUyMzQzNy00LjQ3NjU2My0xMC0xMC0xMHptMCAwIiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtMTE0LjM5ODQzOCAxNTQuNzAzMTI1Yy01LjUyMzQzOCAwLTEwIDQuNDc2NTYzLTEwIDEwdjE4OWMwIDUuNTE5NTMxIDQuNDc2NTYyIDEwIDEwIDEwIDUuNTIzNDM3IDAgMTAtNC40ODA0NjkgMTAtMTB2LTE4OWMwLTUuNTIzNDM3LTQuNDc2NTYzLTEwLTEwLTEwem0wIDAiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0yOC4zOTg0MzggMTI3LjEyMTA5NHYyNDYuMzc4OTA2YzAgMTQuNTYyNSA1LjMzOTg0MyAyOC4yMzgyODEgMTQuNjY3OTY4IDM4LjA1MDc4MSA5LjI4NTE1NiA5LjgzOTg0NCAyMi4yMDcwMzIgMTUuNDI1NzgxIDM1LjczMDQ2OSAxNS40NDkyMTloMTg5LjIwMzEyNWMxMy41MjczNDQtLjAyMzQzOCAyNi40NDkyMTktNS42MDkzNzUgMzUuNzMwNDY5LTE1LjQ0OTIxOSA5LjMyODEyNS05LjgxMjUgMTQuNjY3OTY5LTIzLjQ4ODI4MSAxNC42Njc5NjktMzguMDUwNzgxdi0yNDYuMzc4OTA2YzE4LjU0Mjk2OC00LjkyMTg3NSAzMC41NTg1OTMtMjIuODM1OTM4IDI4LjA3ODEyNC00MS44NjMyODItMi40ODQzNzQtMTkuMDIzNDM3LTE4LjY5MTQwNi0zMy4yNTM5MDYtMzcuODc4OTA2LTMzLjI1NzgxMmgtNTEuMTk5MjE4di0xMi41Yy4wNTg1OTMtMTAuNTExNzE5LTQuMDk3NjU3LTIwLjYwNTQ2OS0xMS41MzkwNjMtMjguMDMxMjUtNy40NDE0MDYtNy40MjE4NzUtMTcuNTUwNzgxLTExLjU1NDY4NzUtMjguMDYyNS0xMS40Njg3NWgtODguNzk2ODc1Yy0xMC41MTE3MTktLjA4NTkzNzUtMjAuNjIxMDk0IDQuMDQ2ODc1LTI4LjA2MjUgMTEuNDY4NzUtNy40NDE0MDYgNy40MjU3ODEtMTEuNTk3NjU2IDE3LjUxOTUzMS0xMS41MzkwNjIgMjguMDMxMjV2MTIuNWgtNTEuMTk5MjE5Yy0xOS4xODc1LjAwMzkwNi0zNS4zOTQ1MzEgMTQuMjM0Mzc1LTM3Ljg3ODkwNyAzMy4yNTc4MTItMi40ODA0NjggMTkuMDI3MzQ0IDkuNTM1MTU3IDM2Ljk0MTQwNyAyOC4wNzgxMjYgNDEuODYzMjgyem0yMzkuNjAxNTYyIDI3OS44Nzg5MDZoLTE4OS4yMDMxMjVjLTE3LjA5NzY1NiAwLTMwLjM5ODQzNy0xNC42ODc1LTMwLjM5ODQzNy0zMy41di0yNDUuNWgyNTB2MjQ1LjVjMCAxOC44MTI1LTEzLjMwMDc4MiAzMy41LTMwLjM5ODQzOCAzMy41em0tMTU4LjYwMTU2Mi0zNjcuNWMtLjA2NjQwNy01LjIwNzAzMSAxLjk4MDQ2OC0xMC4yMTg3NSA1LjY3NTc4MS0xMy44OTQ1MzEgMy42OTE0MDYtMy42NzU3ODEgOC43MTQ4NDMtNS42OTUzMTMgMTMuOTI1NzgxLTUuNjA1NDY5aDg4Ljc5Njg3NWM1LjIxMDkzNy0uMDg5ODQ0IDEwLjIzNDM3NSAxLjkyOTY4OCAxMy45MjU3ODEgNS42MDU0NjkgMy42OTUzMTMgMy42NzE4NzUgNS43NDIxODggOC42ODc1IDUuNjc1NzgyIDEzLjg5NDUzMXYxMi41aC0xMjh6bS03MS4xOTkyMTkgMzIuNWgyNzAuMzk4NDM3YzkuOTQxNDA2IDAgMTggOC4wNTg1OTQgMTggMThzLTguMDU4NTk0IDE4LTE4IDE4aC0yNzAuMzk4NDM3Yy05Ljk0MTQwNyAwLTE4LTguMDU4NTk0LTE4LTE4czguMDU4NTkzLTE4IDE4LTE4em0wIDAiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0xNzMuMzk4NDM4IDE1NC43MDMxMjVjLTUuNTIzNDM4IDAtMTAgNC40NzY1NjMtMTAgMTB2MTg5YzAgNS41MTk1MzEgNC40NzY1NjIgMTAgMTAgMTAgNS41MjM0MzcgMCAxMC00LjQ4MDQ2OSAxMC0xMHYtMTg5YzAtNS41MjM0MzctNC40NzY1NjMtMTAtMTAtMTB6bTAgMCIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjwvZz48L3N2Zz4=" />
            </button>
        </div>`);

        $('#add_video').val('')
    }
</script>
<script src="<?php echo base_url('assets/js/common.js'); ?>"></script>
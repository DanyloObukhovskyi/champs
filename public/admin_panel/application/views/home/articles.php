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
			<li class="active" style="<?php print ($current_u_can[0] == 1 || $current_u_can[1]) ? '' : 'display:none'; ?>"><a href="<?php echo base_url('c-admin/posts/page/1'); ?>">Статьи</a></li>
			<li style="<?php print ($current_u_can[0] == 1 || $current_u_can[2]) ? '' : 'display:none'; ?>"><a href="<?php echo base_url("c-admin/matches/page/1"); ?>" >Статистика</a></li>
			<li style="<?php print ($current_u_can[0] == 1) ? '' : 'display:none'; ?>"><a href="<?php echo base_url('c-admin/users/page/1'); ?>"> Пользователи</a></li>
			<li style="<?php print ($current_u_can[0] == 1 || $current_u_can[3]) ? '' : 'display:none'; ?>"><a href="<?php echo base_url('c-admin/trainers/page/1'); ?>">Тренеры</a></li>
			<li style="<?php print ($current_u_can[0] == 1) ? '' : 'display:none'; ?>"><a href="<?php echo base_url('c-admin/payments/page/1'); ?>">Оплаты</a></li>
			<li style="<?php print ($current_u_can[0] == 1) ? '' : 'display:none'; ?>"><a href="<?php echo base_url('c-admin/admins/page/1'); ?>">Администраторы</a></li>
            <li style="<?php print ($current_u_can[0] == 1) ? '' : 'display:none'; ?>"><a href="<?php echo base_url('c-admin/footer'); ?>">Футер</a></li>
		</ul>
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
				<div class="input search-input mb-15 width-60">
					<?php
						print form_open('' . $params, array("method" => "post", "class" => "form-horizontal", "id" => "posts-form"));
						print form_input($field_search, $this->input->post('search'), array('placeholder' => 'Search by ID or Post Name'));
						print form_close();
					?>
					<i class="input-icon icon icon-search"></i>
				</div>
				<div class="relative">
					<table class="new-table">
						<thead>
						<tr>
							<td class="width-5"><a href="<?php print base_url('c-admin?sort[id]=' . ($sort_id == 'asc' ? 'desc' : 'asc')); ?>"class="table-head-col"> ID</a></td>
							<td class="width-20"><a href="<?php print base_url('c-admin?sort[title]='.($sort_title == 'asc' ? 'desc' : 'asc')); ?>"class="table-head-col"> Имя поста</a></td>
							<td class="width-20"><a href="<?php print base_url('c-admin?sort[type]='.($sort_type == 'asc' ? 'desc' : 'asc')); ?>"class="table-head-col">Формат поста</a></td>
							<td class="width-10 pr-140 t-a-r">Опции</td>
							
						</tr>
						</thead>
						<tbody>
						<?php if (!empty($posts)) {
							$rmo_i = 1;
							foreach ($posts AS $key => $val) {
								$style_class = $rmo_i%2 ==0?'even': '';
								$Type = $val['type'];
								if($val['type'] == "1") {
									$Type = "Трансфер";
								}
								if($val['type'] == "2") {
									$Type = "Матч";
								}
								if($val['type'] == "3") {
									$Type = "Видео";
								}
								if($val['type'] == "4") {
									$Type = "Итервью";
								}
								if($val['type'] == "5") {
									$Type = "Статья";
								}
								if($val['type'] == "6") {
									$Type = "Обновление";
								}
								if($val['type'] == "7") {
									$Type = "Текст";
								}
								if($val['type'] == "8") {
									$Type = "Стрим";
								}
								if($val['type'] == "9") {
									$Type = "Галерея";
								}
								?>
								
								<tr>
									<td><?php echo $val['id']; ?></td>
									<td class="js-expand-table-item pointer" data-id="<?php echo $rmo_i; ?>"><?php print $val['title']; ?></td>
									<td class="js-expand-table-item pointer" data-id="<?php echo $rmo_i; ?>"><img class="pr-10" style="vertical-align: middle;" src="<?php print base_url('assets/icons/'.$val['type'].'.svg'); ?>"/><?php print $Type; ?></td>
									<td class="t-a-r pr-15"><a class="pointer" href="<?php print base_url("c-admin/post/edit/".$val['id']."/".$UserID); ?>"><button class="btn btn-dark-blue btn-small">Редактировать</button></a> <div onclick="c_delete(<?php print "'". base_url("c-admin/post/delete/".$val['id']."/".$UserID)."'"; ?>,<?php print "'".$val['title']."'";?>,'Post')" class="pointer txt-orange ml-15 fw-600" style="display: inline-block;">Удалить</div></td>
									
								</tr>
								<?php  $rmo_i++; }}
						else{ ?>
							<tr>
								<td>
									<?php  print '<h3 style="text-align:center">Empty</h3'; ?>
								</td>
							</tr>
						<?php    } ?>
						
						</tbody>
					</table>
					
					<?php if(isset($pagination[0][0])){?>
					<div class="pagination">
						<?php print ('<a href="'.site_url('c-admin/posts/page/').$pagination[0][0].'">')."  <div class='pagination__prev'></div></a>";?>
						
						<?php
							$next_page = 1;
							$ij = 1;
							$page_i=1; for($ij; $ij <= (int)$pagination[0][1]; $ij++){?>
							<?php
//							$active = ($pagination[1] == $page_i)? 'active':'';
							if($pagination[1] == $page_i){
								$active = 'active';
								if($page_i+1 <= $pagination[0][1]) {
									$next_page = $page_i + 1;
								} else {
									$next_page = $page_i;
								}
							} else {
								$active = '';
							}
							print ('<a href="'.site_url('c-admin/posts/page/').$page_i.'">')."<div class='pagination__item ".$active."'>$page_i</div></a>";?>
							<?php
							$page_i++; }?>
						<?php print ('<a href="'.site_url('c-admin/posts/page/').$next_page.'">')."  <div class='pagination__next'></div></a>";?>
					</div>
				</div>
				<?php }?>
				
				<div class="flex">
					<a href="<?php echo site_url('c-admin/post/add/'.$UserID); ?>">
						<button class="btn btn-orange mt-15 mr-10">Создать новость</button>
					</a>
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

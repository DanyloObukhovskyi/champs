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
			<li style="<?php print ($current_u_can[0] == 1 || $current_u_can[3]) ? '' : 'display:none'; ?>" class="active" ><a href="<?php echo base_url('c-admin/trainers/page/1'); ?>">Тренера</a></li>
			<li style="<?php print ($current_u_can[0] == 1) ? '' : 'display:none'; ?>"><a href="<?php echo base_url('c-admin/payments/page/1'); ?>">Оплаты</a></li>
			<li style="<?php print ($current_u_can[0] == 1) ? '' : 'display:none'; ?>"><a href="<?php echo base_url('c-admin/admins/page/1'); ?>">Администраторы</a></li>
            <li><a href="<?php echo base_url('c-admin/footer'); ?>">Футер</a></li>
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
		<h1 class="main-title">Тренера</h1>
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
					<td class="width-5"><a href="<?php print base_url('c-admin/trainers/page/1?sort[id]=' . ($sort_id == 'asc' ? 'desc' : 'asc')); ?>"class="table-head-col"> ID</a></td>
					<td class="width-5"><a href="<?php print base_url('c-admin/trainers/page/1?sort[email]='.($sort_email == 'asc' ? 'desc' : 'asc')); ?>"class="table-head-col"> Фото</a></td>
					<td class="width-20"><a href="<?php print base_url('c-admin/trainers/page/1?sort[roles]='.($sort_type == 'asc' ? 'desc' : 'asc')); ?>"class="table-head-col">Цена/час</a></td>
					<td class="width-25"><a href="<?php print base_url('c-admin/trainers/page/1?sort[roles]='.($sort_type == 'asc' ? 'desc' : 'asc')); ?>"class="table-head-col">Никнейм</a></td>
					<td class="width-15">Каледдарь</td>
					<td class="width-10 pr-140 t-a-r">Опции</td>
				
				</tr>
				</thead>
				<tbody>
				<?php if (!empty($users)) {
					$rmo_i = 1;
					foreach ($users AS $key => $val) {
						$style_class = $rmo_i%2 ==0?'even': '';
						?>
						
						<tr>
							<td><?php echo $val['id']; ?></td>
							<td class="js-expand-table-item pointer" data-id="<?php echo $rmo_i; ?>"><img class="profile-pic-small" src="<?php print $imgs_url.$val['photo']; ?>" /></td>
							<td class="js-expand-table-item pointer" data-id="<?php echo $rmo_i; ?>"><?php print $val['cost'].".руб/час" ?></td>
							<td class="js-expand-table-item pointer" data-id="<?php echo $rmo_i; ?>"><?php print $val['nickname']; ?></td>
							<td class="js-expand-table-item pointer" data-id="<?php echo $rmo_i; ?>"><a class="pointer" href="<?php print "/ru/marketplace?trainerId=".$val['userid']; ?>"><button class="btn btn-dark-blue btn-small">Календарь</button></a></td>
							<td class="t-a-r pr-15"><a class="pointer" href="<?php print base_url("c-admin/trainer/edit/".$val['userid']."/".$UserID); ?>"><button class="btn btn-dark-blue btn-small">Редактировать</button></a> <div onclick="c_delete(<?php print "'". base_url("c-admin/trainer/delete/".$val['userid']."/".$UserID)."'"; ?>,<?php print "'".$val['nickname']."'";?>,'Post')" class="pointer txt-orange ml-15 fw-600" style="display: inline-block;">Удалить</div></td>
						
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
				<?php print ('<a href="'.site_url('c-admin/trainers/page/').$pagination[0][0].'">')."  <div class='pagination__prev'></div></a>";?>
				
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
					print ('<a href="'.site_url('c-admin/trainers/page/').$page_i.'">')."<div class='pagination__item ".$active."'>$page_i</div></a>";?>
					<?php
					$page_i++; }?>
				<?php print ('<a href="'.site_url('c-admin/trainers/page/').$next_page.'">')."  <div class='pagination__next'></div></a>";?>
			</div>
		</div>
		<?php }?>
		
		<div class="flex">
			<a href="<?php echo site_url('c-admin/trainer/add/'.$UserID); ?>">
				<button class="btn btn-orange mt-15 mr-10">Добавить тренера</button>
			</a>
		</div>
	</div>
</main>
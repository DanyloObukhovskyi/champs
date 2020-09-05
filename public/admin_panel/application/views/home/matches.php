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
			<li><a href="<?php echo base_url('c-admin/posts/page/1'); ?>">Статьи</a></li>
			<li class="active"><a href="<?php echo base_url("c-admin/matches/page/1"); ?>" >Статистика</a></li>
			<li><a href="<?php echo base_url('c-admin/users/page/1'); ?>"> Пользователи</a></li>
			<li><a href="<?php echo base_url('c-admin/trainers/page/1'); ?>">Тренера</a></li>
			<li><a href="<?php echo base_url('c-admin/payments/page/1'); ?>">Оплаты</a></li>
			<li><a href="<?php echo base_url('c-admin/admins/page/1'); ?>">Администраторы</a></li>
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
		<h1 class="main-title">Матчи</h1>
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
					<td class="width-15"><a href="<?php print base_url('c-admin/users/page/1?sort[id]=' . ($sort_id == 'asc' ? 'desc' : 'asc')); ?>"class="table-head-col"> Дата</a></td>
					<td class="width-15"><a href="<?php print base_url('c-admin/users/page/1?sort[email]='.($sort_email == 'asc' ? 'desc' : 'asc')); ?>"class="table-head-col"> Время</a></td>
					<td class="width-25"><a href="<?php print base_url('c-admin/users/page/1?sort[roles]='.($sort_type == 'asc' ? 'desc' : 'asc')); ?>"class="table-head-col">Команда 1</a></td>
					<td class="width-25"><a href="<?php print base_url('c-admin/users/page/1?sort[roles]='.($sort_type == 'asc' ? 'desc' : 'asc')); ?>"class="table-head-col">Команда 2</a></td>
					<td class="width-20 pr-140 t-a-r">Опции</td>
				
				</tr>
				</thead>
				<tbody>
				<?php if (!empty($statistics)) {
					$rmo_i = 1;
					foreach ($statistics AS $key => $val) {
						$style_class = $rmo_i%2 ==0?'even': '';
						
						?>
						
						<tr>
							<td><?php echo $val['date']; ?></td>
							<td class="js-expand-table-item pointer" data-id="<?php echo $rmo_i; ?>"><?php print  date("d-m-Y", strtotime($val['time'])); ?></td>
							<td class="js-expand-table-item pointer" data-id="<?php echo $rmo_i; ?>"><img class="profile-pic-small" src="<?php print base_url("assets/team-img/".$val['team1_ico']); ?>" /><div class="pl-10" style="display: inline-block;"><?php print $val['team1']; ?></div></td>
							<td class="js-expand-table-item pointer" data-id="<?php echo $rmo_i; ?>"><img class="profile-pic-small" src="<?php print base_url("assets/team-img/".$val['team2_ico']); ?>" /><div class="pl-10" style="display: inline-block;"><?php print $val['team2']; ?></div></td>
							<td class="t-a-r pr-15"><button class="btn btn-dark-blue btn-small">Редактировать</button> <a class="pointer txt-orange ml-15 fw-600">Удалить</a></td>
						
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
				<?php print ('<a href="'.site_url('c-admin/admins/page/').$pagination[0][0].'">')."  <div class='pagination__prev'></div></a>";?>
				
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
					print ('<a href="'.site_url('c-admin/users/page/').$page_i.'">')."<div class='pagination__item ".$active."'>$page_i</div></a>";?>
					<?php
					$page_i++; }?>
				<?php print ('<a href="'.site_url('c-admin/users/page/').$next_page.'">')."  <div class='pagination__next'></div></a>";?>
			</div>
		</div>
		<?php }?>
		
		<div class="flex">
			<a href="<?php echo site_url('create/websites'); ?>">
				<button class="btn btn-orange mt-15 mr-10">Добавить матч</button>
			</a>
		</div>
		
	</div>
</main>
<script src="<?php echo base_url('assets/js/table-expander.js'); ?>"></script>
<script src="<?php echo base_url('assets/js/common.js'); ?>"></script>

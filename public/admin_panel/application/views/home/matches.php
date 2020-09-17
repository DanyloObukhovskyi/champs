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
			<li style="<?php print ($current_u_can[0] == 1 || $current_u_can[2]) ? '' : 'display:none'; ?>" class="active"><a href="<?php echo base_url("c-admin/matches/page/1"); ?>" >Статистика</a></li>
			<li style="<?php print ($current_u_can[0] == 1) ? '' : 'display:none'; ?>"><a href="<?php echo base_url('c-admin/users/page/1'); ?>"> Пользователи</a></li>
			<li style="<?php print ($current_u_can[0] == 1 || $current_u_can[3]) ? '' : 'display:none'; ?>"><a href="<?php echo base_url('c-admin/trainers/page/1'); ?>">Тренера</a></li>
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
					<td class="width-15"><a href="<?php print base_url('c-admin/matches/page/1?sort[start_at]=' . ($sort_id == 'asc' ? 'desc' : 'asc')); ?>"class="table-head-col"> Дата</a></td>
					<td class="width-15"><a href="<?php print base_url('c-admin/matches/page/1?sort[start_at]='.($sort_id == 'asc' ? 'desc' : 'asc')); ?>"class="table-head-col"> Время</a></td>
					<td class="width-25"><a href="<?php print base_url('c-admin/matches/page/1?sort[team1_id]='.($team1_sid == 'asc' ? 'desc' : 'asc')); ?>"class="table-head-col">Команда 1</a></td>
					<td class="width-25"><a href="<?php print base_url('c-admin/matches/page/1?sort[team2_id]='.($team2_sid == 'asc' ? 'desc' : 'asc')); ?>"class="table-head-col">Команда 2</a></td>
					<td class="width-20 pr-140 t-a-r">Опции</td>
				
				</tr>
				</thead>
				<tbody>
				<?php if (!empty($statistics)) {
					$rmo_i = 1;
					foreach ($statistics AS $key => $val) {
						$style_class = $rmo_i%2 ==0?'even': '';
						$team1 = array();
						$team2 = array();
						if(isset($val["team1_data"][0]["id"])) {
							$team1['logo'] = $val["team1_data"][0]["logo"];
							$team1['name'] = $val["team1_data"][0]["name"];
							
						}
						if(isset($val["team2_data"][0]["id"])) {
							$team2['logo'] = $val["team2_data"][0]["logo"];
							$team2['name'] = $val["team2_data"][0]["name"];
						}
						?>
						
						<tr>
							<td><?php echo date("Y-M", strtotime($val["start_at"])); ?></td>
							<td class="js-expand-table-item pointer" data-id="<?php echo $rmo_i; ?>"><?php print  date("H:i", strtotime($val["start_at"])); ?></td>
							<td class="js-expand-table-item pointer" data-id="<?php echo $rmo_i; ?>"><img class="profile-pic-small" src="<?php print isset($team1['logo']) ? $imgs_url.$team1['logo'] : ''; ?>" /><div class="pl-10" style="display: inline-block;"><?php print (isset($team1['name']))? $team1['name'] : ''; ?></div></td>
							<td class="js-expand-table-item pointer" data-id="<?php echo $rmo_i; ?>"><img class="profile-pic-small" src="<?php print isset($team2['logo']) ? $imgs_url.$team2['logo'] : ''; ?>" /><div class="pl-10" style="display: inline-block;"><?php print (isset($team2['name']))? $team2['name'] : ''; ?></div></td>
							<td class="t-a-r pr-15"><a href="http://champs2.loc/ru/results/<?php print $val['id']; ?>"><button class="btn btn-dark-blue btn-small">Редактировать</button></a> <div  onclick="c_delete(<?php print "'".  base_url("c-admin/match/delete/").$val['id']."/".$UserID."'"; ?>,<?php print "'".$val["start_at"]."'";?>,'Match')"  class="pointer txt-orange ml-15 fw-600" style="display: inline-block;">Удалить</div></td>
						
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
				<?php print ('<a href="'.site_url('c-admin/matches/page/').$pagination[0][0].'">')."  <div class='pagination__prev'></div></a>";?>
				
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
					print ('<a href="'.site_url('c-admin/matches/page/').$page_i.'">')."<div class='pagination__item ".$active."'>$page_i</div></a>";?>
					<?php
					$page_i++; }?>
				<?php print ('<a href="'.site_url('c-admin/matches/page/').$next_page.'">')."  <div class='pagination__next'></div></a>";?>
			</div>
		</div>
		<?php }?>
		
		
	</div>
</main>
<script src="<?php echo base_url('assets/js/table-expander.js'); ?>"></script>
<script src="<?php echo base_url('assets/js/common.js'); ?>"></script>

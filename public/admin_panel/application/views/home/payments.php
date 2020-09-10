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
			<li><a href="<?php echo base_url("c-admin/matches/page/1"); ?>" >Статистика</a></li>
			<li><a href="<?php echo base_url('c-admin/users/page/1'); ?>"> Пользователи</a></li>
			<li><a href="<?php echo base_url('c-admin/trainers/page/1'); ?>">Тренера</a></li>
			<li class="active"><a href="<?php echo base_url('c-admin/payments/page/1'); ?>">Оплаты</a></li>
			<li><a href="<?php echo base_url('c-admin/admins/page/1'); ?>">Администраторы</a></li>
		</ul>
	</aside>
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
	<!--- ---->
	
	<div class="main-content">
		<h1 class="main-title">Оплаты</h1>
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
					<td class="width-5"><a href="<?php print base_url('c-admin/users/page/1?sort[id]=' . ($sort_id == 'asc' ? 'desc' : 'asc')); ?>"class="table-head-col">ID</a></td>
					<td class="width-5"><a href="<?php print base_url('c-admin/users/page/1?sort[id]=' . ($sort_id == 'asc' ? 'desc' : 'asc')); ?>"class="table-head-col">lesson id</a></td>
					<td class="width-20"><a href="<?php print base_url('c-admin/users/page/1?sort[id]=' . ($sort_id == 'asc' ? 'desc' : 'asc')); ?>"class="table-head-col"> yandex kassa id</a></td>
					<td class="width-30"><a href="<?php print base_url('c-admin/users/page/1?sort[id]=' . ($sort_id == 'asc' ? 'desc' : 'asc')); ?>"class="table-head-col"> yandex data</a></td>
					<td class="width-10"><a href="<?php print base_url('c-admin/users/page/1?sort[email]='.($sort_email == 'asc' ? 'desc' : 'asc')); ?>"class="table-head-col">payment status</a></td>
					<td class="width-15"><a href="<?php print base_url('c-admin/users/page/1?sort[roles]='.($sort_type == 'asc' ? 'desc' : 'asc')); ?>"class="table-head-col">created at</a></td>
					<td class="width-15"><a href="<?php print base_url('c-admin/users/page/1?sort[roles]='.($sort_type == 'asc' ? 'desc' : 'asc')); ?>"class="table-head-col">updated at</a></td>
				</tr>
				</thead>
				<tbody>
				<?php if (!empty($payments)) {
					$rmo_i = 1;
					foreach ($payments AS $key => $val) {
						$style_class = $rmo_i%2 ==0?'even': '';
						
						?>
						
						<tr>
							<td data-id="<?php echo $rmo_i; ?>"><?php echo $val['id']; ?></td>
							<td data-id="<?php echo $rmo_i; ?>"> <?php echo $val['lesson_id']; ?></td>
							<td data-id="<?php echo $rmo_i; ?>"><?php echo $val['yandex_kassa_id']; ?></td>
							
							<td data-id="<?php echo $rmo_i; ?>">
								<?php
									$data = (array)json_decode($val['yandex_data']);
									foreach($data as $key2 => $value) {
//										print "<strong>".$key2."</strong> ";
										if(gettype($value) == "object") {
											$value2 = (array)$value;
											
											foreach($value2 as $key3 => $value3) {
												print "<strong>$key3 -- ".$value3."</strong></br>";
											}
										} else {
											if(gettype($value) == "array") {
												foreach($value as $key4 => $value4) {
													print "<strong> $key4" ." -- ". $value4."</strong></br>";
												}
											} else {
												print "<strong> $key2 "." -- ".$value."</strong></br>";
											}
										}
										
									}
								?>
							</td>
							
							<td data-id="<?php echo $rmo_i; ?>"><?php print $val['payment_status']; ?></td>
							<td data-id="<?php echo $rmo_i; ?>"><?php print $val['created_at']; ?></td>
							<td data-id="<?php echo $rmo_i; ?>"><div class="pl-10" style="display: inline-block;"><?php print $val['updated_at']; ?></div></td>
						
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

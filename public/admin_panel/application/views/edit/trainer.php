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
			<li class="active"><a href="<?php echo base_url('c-admin/trainers/page/1'); ?>">Тренера</a></li>
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
		<h1 class="main-title">Редактировать тренеара - </h1>
	</div>
</main>
<script src="<?php echo base_url('assets/js/table-expander.js'); ?>"></script>
<script src="<?php echo base_url('assets/js/common.js'); ?>"></script>
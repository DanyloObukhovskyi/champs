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
        <?php $activePath = 'payments';?>
        <?php require_once APPPATH.'views/sidebar.php'?>
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
					<td class="width-5"><a href="<?php print base_url('c-admin/payments/page/1?sort[payment-id]=' . ($sort_id == 'asc' ? 'desc' : 'asc')); ?>"class="table-head-col">ID</a></td>
					<td class="width-15"><a href="<?php print base_url('c-admin/payments/page/1?sort[user-nickname]=' . ($sort_n == 'asc' ? 'desc' : 'asc')); ?>"class="table-head-col">Тренер</a></td>
					<td class="width-15"><a href="<?php print base_url('c-admin/payments/page/1?sort[payment-created_at]=' . ($sort_c == 'asc' ? 'desc' : 'asc')); ?>"class="table-head-col">Дата оплаты</a></td>
					<td class="width-15" class="table-head-col">Время урока</td>
					<td class="width-15" class="table-head-col">Cтудент</td>
					<td class="width-10" class="table-head-col">Сумма</td>
					<td class="width-10" class="table-head-col">Сумма Refund</td>
					<td class="width-15" class="table-head-col">Refund</td>
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
							<td data-id="<?php echo $rmo_i; ?>"> <?php echo $val['nickname']; ?></td>
							<td data-id="<?php echo $rmo_i; ?>"><?php echo $val['created_at']; ?></td>
							<td data-id="<?php echo $rmo_i; ?>"><?php echo $val['date_time_from']; ?></td>
                            <td data-id="<?php echo $rmo_i; ?>"><a href="<?php echo  "/admin_panel/c-admin/user/edit/".$val["student"][0]['user_id'] . "/"; echo $UserID ;?>""><?php echo !empty($val["student"][0]["nickname"]) ? $val["student"][0]["nickname"] : $val["student"][0]["name"] ?? 'Пользователь' ; ?></a></td>
							
							<td data-id="<?php echo $rmo_i; ?>">
								<?php
									$payment_id = $val['yandex_kassa_id'];
									$amount = 0;
									$currency = "RUB";
                                    echo $val["totalPrice"].' '.$currency;
								?>
							</td>
							<td data-id="<?php echo $rmo_i; ?>">
								<?php
									if(isset($val["refund"][0]["id"])) {
										$data =  array_shift($val["refund"]);
										echo $data["amount"]." RUB";
									} else {
										echo "0 RUB";
									}
								?>
							</td>
							<td data-id="<?php echo $rmo_i; ?>"><button class="btn btn-dark-blue btn-small" onclick="refund(<?php print "'".$amount ."', '$payment_id', ".$UserID.", '".$currency."', '".base_url("c-admin/refund/$UserID")."', ".$val['id']; ?>)">Refund</button></td>
							
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
				<?php print ('<a href="'.site_url('c-admin/payments/page/').$pagination[0][0].'">')."  <div class='pagination__prev'></div></a>";?>
				
				<?php
					$next_page = 1;
					$ij = 1;
					$page_i=1; for($ij; $ij <= (int)$pagination[0][1]; $ij++){
					
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
					print ('<a href="'.site_url('c-admin/payments/page/').$page_i.'">')."<div class='pagination__item ".$active."'>$page_i</div></a>";?>
					<?php
					$page_i++; }?>
				<?php print ('<a href="'.site_url('c-admin/payments/page/').$next_page.'">')."  <div class='pagination__next'></div></a>";?>
			</div>
		</div>
		<?php }?>
		
	
	</div>
</main>
<div id="confirm_delete1" class="modal">
	<!-- Modal content -->
	<div class="confirm_modal-content">
		<a href=""><div class="close">×</div></a><br>
		<div id="modal_text">
			<div class="no_license"> Are You sure?</div><br><br>
			<div class="want_delete" id="confirm_text"></div>
			<div class="confirm_text">
				<div class="type_delete">Type amount to confirm Refund</div>
				<input type="text" id="confirmation_text" class="input_style" placeholder="Value">
				<input type="hidden" id="c_payment_id">
				<input type="hidden" id="yandex_kassa_id">
				<input type="hidden" id="c_user_id">
				<input type="hidden" id="c_currency">
				<input type="hidden" id="c_url">
			
				<div class="confrim_btn" onclick="confirm_refund()"><div class="confirm">REFUND</div></div>
				<a href=""><div class="delete_btn"><div class="confirm" style="color: #7f8fa4;">Cancel</div></div> </a>
			</div>
		</div>
	
	</div>
</div>
<script>
	function refund(amount=0, yandex_kassa_id="", user_id = 0, currency="", c_url="", c_payment_id=0){
		document.getElementById('confirmation_text').value = amount;
		document.getElementById('yandex_kassa_id').value = yandex_kassa_id;
		document.getElementById('c_payment_id').value = c_payment_id;
		document.getElementById('c_user_id').value = user_id;
		document.getElementById('c_currency').value = currency;
		document.getElementById('c_url').value = c_url;
	
		var modal_confirm = document.getElementById('confirm_delete1');
		modal_confirm.style.display = "block";
	}
	
	function confirm_refund(){
		let c_amount = document.getElementById('confirmation_text').value;
		let yandex_kassa_id = document.getElementById('yandex_kassa_id').value;
		let c_payment_id = document.getElementById('c_payment_id').value;
		let c_user_id = document.getElementById('c_user_id').value;
		let c_currency = document.getElementById('c_currency').value;
		let url = document.getElementById('c_url').value;
		
		if(url && url.length>1){
			var param = {
				yandex_kassa_id: yandex_kassa_id,
				payment_id: c_payment_id,
				amount: c_amount,
				user_id: c_user_id,
				currency: c_currency
			};
					
			$.post(url, param, function (data) {
				console.log(data);
				var modal_confirm = document.getElementById('confirm_delete');
				modal_confirm.style.display = "none";
				if(data == 1) {
					location.reload();
				} else {
					alert(data);
				}
				
			});
		}
		
	}
	
</script>
<script src="<?php echo base_url('assets/js/table-expander.js'); ?>"></script>
<script src="<?php echo base_url('assets/js/common.js'); ?>"></script>

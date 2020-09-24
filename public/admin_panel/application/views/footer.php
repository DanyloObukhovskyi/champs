<?php if(isset($user->email)) { ?>
	<?php
	$this->session->baner="true";
	?>
<?php } ?>
<div id="confirm_delete" class="modal">
	<!-- Modal content -->
	<div class="confirm_modal-content">
		<a href=""><div class="close">×</div></a><br>
		<div id="modal_text">
			<div class="no_license"> Вы уверенны?</div><br><br>
			<div class="want_delete" id="confirm_text"></div>
			<div class="confirm_text">
				<div class="type_delete">Напишите УДАЛИТЬ для подтверждения</div>
				<input type="text" id="confirmation_text22" class="input_style s2t2" placeholder="Value">
				<div class="confrim_btn" id="rmo_delete" style="width: 78px" onclick="confirm_delete()"><div class="confirm">УДАЛИТЬ</div></div>
				<a href=""><div class="delete_btn"><div class="confirm" style="color: #7f8fa4;">Отмена</div></div> </a>
			</div>
		</div>
	
	</div>
</div>

<script>
	function c_delete(value, item, subject){
		document.getElementById('confirmation_text22').setAttribute("link", value);
		var confirm_text = "Вы хотите удалить "+subject+" ("+item+")?";
		$("#confirm_text").append(confirm_text);
		var modal_confirm = document.getElementById('confirm_delete');
		modal_confirm.style.display = "block";
		
		button = document.getElementById("confirmation_text22");
		button.addEventListener("input", function(){
			
			if(document.getElementById('confirmation_text22').value == "УДАЛИТЬ"){
				$('.confrim_btn').css('background-color','#39b54a');
				$('.s2t2').css('border-color','#39b54a');
			}else{
				$('.confrim_btn').css('background-color','#516173');
				$('.s2t2').css('border-color','#dfe3e9');
			}
		});
	}
	
	function confirm_delete(){
		var check_text = document.getElementById('confirmation_text22').value;
		if(check_text == "УДАЛИТЬ"){
			var url = document.getElementById('confirmation_text22').getAttribute("link");
			if(url && url.length>1){
				
				if($('#delete_db')+bkid){
					var bkid = url.substr(url.lastIndexOf('/') + 1);
					var delete_db = 0;
					var delete_files = 0;
					if($('#delete_db'+bkid).prop('checked') == true){
						var delete_db = 1;
					}else{
						var delete_db = 0;
					}
					if($('#delete_files'+bkid).prop('checked') == true){
						var delete_files = 1;
					}else{
						var delete_files = 0;
					}
					var param = {
						delete_files: delete_files,
						delete_db: delete_db
					}
				}
				else{
					var param = '';
				}
				
				$.post(url, param, function (data) {
					location.reload();
				});
			}
		}
	}
</script>
<footer class="flex j-c-s-b a-i-c" style="background: #45484b;">
	<div class="copyright"> © Champs.pro, 2020</div>
	<div class="flex footer-center a-i-c">
		<div class="help-and-supp">Поддержка:</div>
		<img class="ml-10 mr-5" src="<?php print base_url('assets/img/Message.svg'); ?>" alt="">
		<a class="footer-link" href="mailto:support@serp.farm">support@champs.pro</a>
	</div>
	<div class="flex footer-socials">
		<a href='https://www.youtube.com/channel/UCpPswdeI84zw3eOdJXijN0A'> <img src="<?php print base_url(); ?>assets/icons/skype.svg" alt=""></a>
		<a href='https://twitter.com/FarmSerp'> <img src="<?php print base_url(); ?>assets/img/Twitter.svg" alt=""></a>
		<a href='https://www.facebook.com/SERP.farm/'><img src="<?php print base_url(); ?>assets/img/Facebook.svg" alt=""></a>
	</div>
</footer>
</html>
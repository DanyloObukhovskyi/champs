<?php if(isset($user->email)) { ?>
	<?php
	$this->session->baner="true";
//	require_once "/usr/share/nginx/html/serp.farm/sitemanager2/new_assets/js/popup.js.php";
//	require_once "/usr/share/nginx/html/serp.farm/sitemanager2/new_assets/js/confirm_delete.js.php";
	?>
<?php } ?>
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
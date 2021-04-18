<link rel="stylesheet" href="<?php print base_url('assets/intro/main.css'); ?>">
<link rel="stylesheet" href="<?php print base_url('assets/css/auth.css'); ?>">
<link href="https://fonts.googleapis.com/css?family=Montserrat:100,300,400, 500, 600,700" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400,500,600,700,900" rel="stylesheet">
<meta name="viewport" content="width=device-width, initial-scale=1.0">


<main style='min-height: calc(100% - 270px);  z-index:10;' >
	<div class="main-container" style='display: flex;flex-direction: column;align-items: center;'>
		<h1 class="main-container__title">Рады вас видеть!</h1>
		<?php echo form_open("auth/login", array('role' => 'login', 'class' => 'login-form'));?>
		<label class="label" for="">Электронная почта</label>
		<div class="input mb-10" id="input">
			<?php echo form_input($identity, $this->input->post['identity'] ?? null, array('class' => 'input-group-field'));?>
		</div>
		<label class="label" for="">Пароль</label>
		<div class="input mb-10" id="input">
			<?php echo form_input($password, '', array('class' => 'input-group-field'));?>
		</div>
		<?php echo form_submit('submit', 'Login', array('class' => 'btn btn-orange mt-10', 'style'=>'width: 335px; z-index:10;'));?>
		<div style='display: none;'>
			<div class="or_use">OR USE</div></br>
			<?php echo form_submit('submit', 'Facebook', array('class' => 'btn btn-green', 'style'=>'width: 150px; margin-right: 30px; background-color: #3c5a99;'));?>
			<?php echo form_submit('submit', 'Google', array('class' => 'btn btn-green', 'style'=>'width: 150px; background-color: #4285f4;'));?>
		</div>
		<?php echo form_close();?>
		
		<p class="fogot_passw"><a href="forgot_password" class='fogot_passw'>Забыли ваш пароль?</a></p>
	
	</div>
</main>
<div class='main_bg' style="display:none;">
	<div class='scr3'></div>
	<div class='scr2'></div>
	<div class='scr1'></div>
	<div class='table_img'></div>
	<div class='bg_img'></div>
</div>


<script>
	$("body").css("overflow", "hidden");
	/*START PLUGIN jParallax*/
	(function($) {
		$.fn.extend({
			jParallax: function(opt) {
				var defaults = { moveFactor: 5, targetContainer: 'main' },
					o = $.extend(defaults, opt);
				return this.each(function() {
					var background = $(this);
					$(o.targetContainer).on('mousemove', function(e){
						mouseX = e.pageX;
						mouseY = e.pageY;
						windowWidth = $(window).width();
						windowHeight = $(window).height();
						percentX = (0-((mouseX/windowWidth)*o.moveFactor) - (o.moveFactor/2)+o.moveFactor)/2;
						percentY = (0-((mouseY/windowHeight)*o.moveFactor) - (o.moveFactor/2)+o.moveFactor)/2;
						background[0].style.transform = "translate("+percentX+"%,"+percentY+"%)";
					});
				});
			}
		});
	}(jQuery));
	(function($) {
		$.fn.extend({
			jParallax_horizontal: function(opt) {
				var defaults = { moveFactor: 5, targetContainer: 'main' },
					o = $.extend(defaults, opt);
				return this.each(function() {
					var background = $(this);
					$(o.targetContainer).on('mousemove', function(e){
						mouseX = e.pageX;
						mouseY = e.pageY;
						windowWidth = $(window).width();
						windowHeight = $(window).height();
						percentX = (0-((mouseX/windowWidth)*o.moveFactor) - (o.moveFactor/2)+o.moveFactor)/2;
						// percentY = (0-((mouseY/windowHeight)*o.moveFactor) - (o.moveFactor/2)+o.moveFactor)/2;
						background[0].style.transform = "translate("+percentX+"%)";
					});
				});
			}
		});
	}(jQuery));
	/*END PLUGIN jParallax*/
	
	/*Invoke*/
	$('.table_img').jParallax_horizontal({ moveFactor: 5, targetContainer: 'body' });
	$('.scr1').jParallax({ moveFactor: 55, targetContainer: 'body' });
	$('.scr2').jParallax({ moveFactor: 37, targetContainer: 'body' });
	$('.scr3').jParallax({ moveFactor: 25, targetContainer: 'body' });
</script>
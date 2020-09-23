<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?><!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Welcome to Champs Admin Pannel</title>
	<?php
		$url =  base_url();
		$url =  str_replace("[::1]", "localhost", $url);
	?>
	<link rel="stylesheet" type="text/css" href="<?php echo $url.'assets/style.css'; ?>">
	<link href="https://fonts.googleapis.com/css?family=Montserrat:100,300,400, 500, 600,700" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400, 500, 600,700,900" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="<?php echo $url.'assets/popup.css'; ?>">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
<header class="a-i-c j-c-s-b" style="background: #35393e">
	<a href="<?php print site_url(); ?>" class="logo" style="margin-top: 0px"><img src="https://champs.pro/images/logo.svg" style="width: 200px; max-height: 50px; border-radius: 10px;"></a>
	<nav class="flex">
		<ul class="header-menu flex">
		
<!--			<li class="header-menu-item --><?php //if(isset($rmo_page_title2[0]) && $rmo_page_title2[0] == 'intro'){print 'active';}?><!--"><a href="--><?php //echo base_url('intro'); ?><!--">Intro</a></li>-->

			
			<li class="header-menu-item profile-link">
				<?php if(isset($user->email)) { ?>
					<li class="header-menu-item"<a href="<?php print site_url(); ?>" class="flex a-i-c" style="color:#ffffff"><?php print $user->email; ?></a></li>
				<?php } ?>
			</li>
			
			<li class="header-menu-item txt-orange fw-400">
				<?php if(isset($user->email)) { ?>
					<a href="<?php echo base_url('auth/logout'); ?>" class="txt-orange fw-400" style="cursor: pointer; padding-bottom: 23px;">Logout</a>
				<?php } else { ?>
					<li class="header-menu-item"<a href="<?php echo base_url('auth/login'); ?>" style="color:#f25500; cursor: pointer;";>Login</a></li>
				<?php } ?>
			</li>
		</ul>
	</nav>
</header>
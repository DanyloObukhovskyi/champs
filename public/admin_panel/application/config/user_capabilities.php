<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');
	
	$config['user_capabilities'] = array(
		"1000", //admin
		"0100", //content
		"0010", //stat
		"0001", //coach
//
//		"1100", //admin+content
//		"0110", //content+stat
//		"0101", //content+coach
//
//		"1010", //admin + stat
//		"0110", //content +stat
//		"0011", //stat + coach
//
//		"1001", //admin + coach
//		"0101", //content + stat
//		"0011", //stat + stat
//
	);
//	echo $config['user_capabilities'][0][0]; die();
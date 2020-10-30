<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/*
| -------------------------------------------------------------------------
| URI ROUTING
| -------------------------------------------------------------------------
| This file lets you re-map URI requests to specific controller functions.
|
| Typically there is a one-to-one relationship between a URL string
| and its corresponding controller class/method. The segments in a
| URL normally follow this pattern:
|
|	example.com/class/method/id/
|
| In some instances, however, you may want to remap this relationship
| so that a different class/function is called than the one
| corresponding to the URL.
|
| Please see the user guide for complete details:
|
|	https://codeigniter.com/user_guide/general/routing.html
|
| -------------------------------------------------------------------------
| RESERVED ROUTES
| -------------------------------------------------------------------------
|
| There are three reserved routes:
|
|	$route['default_controller'] = 'welcome';
|
| This route indicates which controller class should be loaded if the
| URI contains no data. In the above example, the "welcome" class
| would be loaded.
|
|	$route['404_override'] = 'errors/page_missing';
|
| This route will tell the Router which controller/method to use if those
| provided in the URL cannot be matched to a valid route.
|
|	$route['translate_uri_dashes'] = FALSE;
|
| This is not exactly a route, but allows you to automatically route
| controller and method names that contain dashes. '-' isn't a valid
| class or method name character, so it requires translation.
| When you set this option to TRUE, it will replace ALL dashes in the
| controller and method URI segments.
|
| Examples:	my-controller/index	-> my_controller/index
|		my-controller/my-method	-> my_controller/my_method
*/

//$route['default_controller'] = 'Home';
$route['ru/admin_panel/(:any)']= '$1';
$route['default_controller'] = 'Auth/login';
$route['login/auth'] = 'Auth/login';
$route['auth/logout'] = 'Auth/logout';
$route['ru/admin_panel'] = 'Auth/login';

$route['c-admin'] = 'home/index';
//posts' pages
$route['c-admin/posts/page/(:num)'] = 'home/index/$1';
$route['c-admin/post/edit/(:num)/(:num)'] = 'edit_c/post/$1/$2';
$route['c-admin/post/delete/(:num)/(:num)'] = 'delete_c/post/$1/$2';
$route['c-admin/post/add/(:num)'] = 'add_c/post/$1';

//matches' pages
$route['c-admin/matches/page/(:num)'] = 'home/matches/$1';

//users' pages
$route['c-admin/users/page/(:num)'] = 'home/users/$1';
$route['c-admin/user/edit/(:num)/(:num)'] = 'edit_c/user/$1/$2';
$route['c-admin/user/delete/(:num)/(:num)'] = 'delete_c/user/$1/$2';
$route['c-admin/user/add/(:num)'] = 'add_c/user/$1';

//trainers' pages
$route['c-admin/trainers/page/(:num)'] = 'home/trainers/$1';
$route['c-admin/trainer/edit/(:num)/(:num)'] = 'edit_c/trainer/$1/$2';
$route['c-admin/trainer/delete/(:num)/(:num)'] = 'delete_c/trainer/$1/$2';
$route['c-admin/trainer/add/(:num)'] = 'add_c/trainer/$1';

//payments' pages
$route['c-admin/payments/page/(:num)'] = 'home/payments/$1';

//admins' pages
$route['c-admin/admins/page/(:num)'] = 'home/admins/$1';
$route['c-admin/admin/edit/(:num)/(:num)'] = 'edit_c/admin/$1/$2';
$route['c-admin/admin/delete/(:num)/(:num)'] = 'delete_c/admin/$1/$2';
$route['c-admin/admin/add/(:num)'] = 'add_c/admin/$1';

$route['c-admin/upload_img/(:num)'] = 'upload_img/index/$1';
	
$route['c-admin/ajax/update'] = 'handle_a_request';	
$route['c-admin/ajax/check'] = 'handle_a_request/check';
$route['c-admin/refund/(:num)'] = 'refund_c/index/$1';

//setting
$route['c-admin/settings'] = 'home/setting';
$route['404_override'] = '';
$route['translate_uri_dashes'] = FALSE;

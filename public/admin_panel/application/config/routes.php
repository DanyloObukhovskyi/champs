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
$route['c-admin/posts'] = 'home/getPosts';
$route['c-admin/posts/page/(:num)'] = 'home/index/$1';
$route['c-admin/post/edit/(:num)/(:num)'] = 'edit_c/post/$1/$2';
$route['c-admin/post/delete/(:num)/(:num)'] = 'delete_c/post/$1/$2';
$route['c-admin/post/add/(:num)'] = 'add_c/post/$1';
$route['c-admin/post_type'] = 'home/getPostTypes';
$route['c-admin/post_type/create'] = 'home/createPostTypes';
$route['c-admin/post_type/delete'] = 'home/deletePostTypes';
$route['c-admin/post_type/fetch'] = 'home/fetchPostTypes';
$route['c-admin/post_type/update'] = 'home/updatePostTypes';
$route['c-admin/post_type/fetchAttributes'] = 'home/fetchAttributes';

//matches' pages
$route['c-admin/matches/page/(:num)'] = 'home/matches/$1';

//users' pages
$route['c-admin/users/page/(:num)'] = 'home/users/$1';
$route['c-admin/user/edit/(:num)/(:num)'] = 'edit_c/user/$1/$2';
$route['c-admin/user/delete/(:num)/(:num)'] = 'delete_c/user/$1/$2';
$route['c-admin/user/add/(:num)'] = 'add_c/user/$1';

//trainers' pages
$route['c-admin/trainers/(:any)/page/(:num)'] = 'home/trainers/$1/$2';
$route['c-admin/trainer/edit/(:num)/(:num)'] = 'edit_c/trainer/$1/$2';
$route['c-admin/trainer/delete/(:num)/(:num)'] = 'delete_c/trainer/$1/$2';
$route['c-admin/trainer/add/(:num)'] = 'add_c/trainer/$1';

//payments' pages
$route['c-admin/payments'] = 'home/getPayments';
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

//slides
$route['c-admin/slides'] = 'slides_c/index';
$route['c-admin/slides/delete/(:num)'] = 'slides_c/delete/$1';

//ranks
$route['c-admin/ranks'] = 'ranks_c/index';
$route['c-admin/ajax/ranks'] = 'ranks_c/ajax';
$route['c-admin/ajax/ranks/delete/(:num)'] = 'ranks_c/delete/$1';
$route['c-admin/ajax/ranks/add'] = 'ranks_c/add';
$route['c-admin/ajax/ranks/edit'] = 'ranks_c/edit';

//awards
$route['c-admin/awards'] = 'award_c/index';
$route['c-admin/ajax/awards'] = 'award_c/ajax';
$route['c-admin/ajax/award/save'] = 'award_c/save';
$route['c-admin/award/delete/(:num)'] = 'award_c/delete/$1';

//games
$route['c-admin/games'] = 'game_c/index';
$route['c-admin/ajax/games'] = 'game_c/ajax';
$route['c-admin/ajax/games/save'] = 'game_c/save';
$route['c-admin/game/delete/(:num)'] = 'game_c/delete/$1';

//marketplace banners
$route['c-admin/marketplace/banners'] = 'marketplace_c/index';
$route['c-admin/ajax/marketplace/banners'] = 'marketplace_c/ajax';
$route['c-admin/ajax/marketplace/banners/save'] = 'marketplace_c/save';
$route['c-admin/marketplace/banners/delete/(:num)'] = 'marketplace_c/delete/$1';

//marketplace banners
$route['c-admin/marketplace/banners'] = 'marketplace_c/marketplace_banners';
$route['c-admin/ajax/marketplace/banners'] = 'marketplace_c/marketplace_banners_ajax';
$route['c-admin/ajax/marketplace/banners/save'] = 'marketplace_c/marketplace_banners_save';
$route['c-admin/marketplace/banners/delete/(:num)'] = 'marketplace_c/marketplace_banners_delete/$1';

//trainers banners
$route['c-admin/trainers/banners'] = 'marketplace_c/trainers_banners';
$route['c-admin/ajax/trainers/banners'] = 'marketplace_c/trainers_banners_ajax';
$route['c-admin/ajax/trainers/banners/save'] = 'marketplace_c/trainers_banners_save';
$route['c-admin/trainers/banners/delete/(:num)'] = 'marketplace_c/trainers_banners_delete/$1';

//trainers transactions
$route['c-admin/trainers/transactions'] = 'trainer_transaction_c/index';
$route['c-admin/ajax/trainers/transactions'] = 'trainer_transaction_c/ajax';
$route['c-admin/ajax/trainers/transactions/save'] = 'trainer_transaction_c/save';

//blogs transactions
$route['c-admin/blogs/transactions'] = 'trainer_transaction_c/indexBlog';
$route['c-admin/ajax/blogs/transactions'] = 'trainer_transaction_c/ajaxBlog';
$route['c-admin/ajax/blogs/transactions/save'] = 'trainer_transaction_c/saveBlog';

//events
$route['c-admin/events'] = 'event_c/index';
$route['c-admin/ajax/events'] = 'event_c/ajax';
$route['c-admin/events/create'] = 'event_c/create';
$route['c-admin/events/edit/(:num)'] = 'event_c/edit/$1';
$route['c-admin/events/delete/(:num)'] = 'event_c/delete/$1';

//events prize distribution
$route['c-admin/event/prize/distribution/ajax/(:num)'] = 'event_c/get_prize_distribution/$1';
$route['c-admin/event/prize/distribution/ajax/delete/(:num)'] = 'event_c/delete_prize_distribution/$1';
$route['c-admin/event/prize/distribution/ajax/add/(:num)'] = 'event_c/add_prize_distribution/$1';

//events attending teams
$route['c-admin/event/ajax/attending/teams/(:num)'] = 'event_c/get_teams_attending/$1';
$route['c-admin/event/ajax/attending/teams/add/(:num)'] = 'event_c/add_teams_attending/$1';
$route['c-admin/event/ajax/attending/teams/delete/(:num)'] = 'event_c/delete_teams_attending/$1';
$route['c-admin/event/ajax/attending/teams/add/player/(:num)'] = 'event_c/add_player_to_team/$1';
$route['c-admin/event/ajax/attending/teams/delete/player/(:num)'] = 'event_c/delete_player_to_team/$1';

//events streams
$route['c-admin/event/ajax/add/stream/(:num)'] = 'event_c/add_event_stream/$1';
$route['c-admin/event/ajax/delete/stream/(:num)'] = 'event_c/delete_event_stream/$1';
$route['c-admin/event/ajax/get/stream/(:num)'] = 'event_c/get_event_streams/$1';


//referral
$route['c-admin/referral'] = 'referral_c/index';
$route['c-admin/ajax/referral'] = 'referral_c/ajax';
$route['c-admin/ajax/referral/save'] = 'referral_c/save';
$route['c-admin/referral/delete/(:num)'] = 'referral_c/delete/$1';

//comments
$route['c-admin/comments'] = 'comments_c/index';
$route['c-admin/ajax/comments'] = 'comments_c/ajax';
$route['c-admin/ajax/comments/save'] = 'comments_c/save';
$route['c-admin/comments/delete/(:any)/(:num)'] = 'comments_c/delete/$1/$2';

//seo
$route['c-admin/seo'] = 'seo/index';
$route['c-admin/seo/fetchPages'] = 'seo/fetchPages';
$route['c-admin/seo/fetch'] = 'seo/fetch';
$route['c-admin/seo/edit'] = 'seo/edit';

//players
$route['c-admin/players/ajax/search'] = 'players_c/search';

$route['c-admin/teams'] = 'teams/index';
$route['c-admin/teamsTable'] = 'teams/getTeams';
$route['c-admin/team/edit/(:num)/(:num)'] = 'teams/edit/$1/$2';
$route['c-admin/team/delete/(:num)/(:num)'] = 'teams/delete/$1/$2';
$route['c-admin/team/fetch'] = 'teams/fetch';
$route['c-admin/team/create'] = 'teams/create';
$route['c-admin/team/update'] = 'teams/update';

$route['c-admin/pages'] = 'home/pages';
$route['c-admin/home/fetchPages'] = 'home/fetchPages';
$route['c-admin/home/fetch/page'] = 'home/fetchPage';
$route['c-admin/home/edit/page'] = 'home/editPage';

$route['c-admin/blogs'] = 'home/blogs';
$route['c-admin/fetchBlogs'] = 'home/fetchBlogs';
$route['c-admin/home/fetch/blog'] = 'home/fetchBlog';
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./assets/css/app.css":
/*!****************************!*\
  !*** ./assets/css/app.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/app.css */ "./assets/css/app.css");
/* harmony import */ var _css_app_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_app_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_mvp_services_MvpService_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/mvp/services/MvpService.js */ "./assets/js/components/mvp/services/MvpService.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./assets/js/config.js");
/* harmony import */ var _components_mvp_cabinet_MvpPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/mvp/cabinet/MvpPage */ "./assets/js/components/mvp/cabinet/MvpPage.vue");
/* harmony import */ var _components_mvp_cabinet_MvpTeamPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/mvp/cabinet/MvpTeamPage */ "./assets/js/components/mvp/cabinet/MvpTeamPage.vue");
/* harmony import */ var _components_mvp_invite_MvpInviteTeamPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/mvp/invite/MvpInviteTeamPage */ "./assets/js/components/mvp/invite/MvpInviteTeamPage.vue");
/* harmony import */ var _components_LoginModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/LoginModal */ "./assets/js/components/LoginModal.vue");
/* harmony import */ var _components_mvp_tournaments_MvpMain__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/mvp/tournaments/MvpMain */ "./assets/js/components/mvp/tournaments/MvpMain.vue");
/* harmony import */ var _components_mvp_tournaments_MvpTournamentsList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/mvp/tournaments/MvpTournamentsList */ "./assets/js/components/mvp/tournaments/MvpTournamentsList.vue");
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you import will output into a single css file (app.css in this case)









window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
var token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
  window.axios._csrf_token = token.content;
} else {
  console.error('CSRF token not found');
} // Need jQuery? Install it with "yarn add jquery", then uncomment to import it.
// import $ from 'jquery';


Vue.component('mvp-main', _components_mvp_tournaments_MvpMain__WEBPACK_IMPORTED_MODULE_7__["default"]);
Vue.component('mvp-page', _components_mvp_cabinet_MvpPage__WEBPACK_IMPORTED_MODULE_3__["default"]);
Vue.component('mvp-team-page', _components_mvp_cabinet_MvpTeamPage__WEBPACK_IMPORTED_MODULE_4__["default"]);
Vue.component('mvp-invite-page', _components_mvp_invite_MvpInviteTeamPage__WEBPACK_IMPORTED_MODULE_5__["default"]);
Vue.component('mvp-tournaments-list', _components_mvp_tournaments_MvpTournamentsList__WEBPACK_IMPORTED_MODULE_8__["default"]);
Vue.component('login-form', _components_LoginModal__WEBPACK_IMPORTED_MODULE_6__["default"]);
new Vue({
  el: '#app',
  provide: {
    http: new _components_mvp_services_MvpService_js__WEBPACK_IMPORTED_MODULE_1__["default"](axios),
    axios: axios,
    config: _config__WEBPACK_IMPORTED_MODULE_2__["default"],
    header: header
  }
});
window.login = new Vue({
  el: '#login',
  provide: {
    axios: axios,
    config: _config__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: {
    show: false
  }
});

/***/ }),

/***/ "./assets/js/components/Load.vue":
/*!***************************************!*\
  !*** ./assets/js/components/Load.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Load_vue_vue_type_template_id_507cf4f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Load.vue?vue&type=template&id=507cf4f2&scoped=true& */ "./assets/js/components/Load.vue?vue&type=template&id=507cf4f2&scoped=true&");
/* harmony import */ var _Load_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Load.vue?vue&type=script&lang=js& */ "./assets/js/components/Load.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Load_vue_vue_type_style_index_0_id_507cf4f2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Load.vue?vue&type=style&index=0&id=507cf4f2&scoped=true&lang=css& */ "./assets/js/components/Load.vue?vue&type=style&index=0&id=507cf4f2&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Load_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Load_vue_vue_type_template_id_507cf4f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Load_vue_vue_type_template_id_507cf4f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "507cf4f2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/components/Load.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/components/Load.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./assets/js/components/Load.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Load_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Load.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Load.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Load_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/components/Load.vue?vue&type=style&index=0&id=507cf4f2&scoped=true&lang=css&":
/*!************************************************************************************************!*\
  !*** ./assets/js/components/Load.vue?vue&type=style&index=0&id=507cf4f2&scoped=true&lang=css& ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Load_vue_vue_type_style_index_0_id_507cf4f2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js??ref--1-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./Load.vue?vue&type=style&index=0&id=507cf4f2&scoped=true&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Load.vue?vue&type=style&index=0&id=507cf4f2&scoped=true&lang=css&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Load_vue_vue_type_style_index_0_id_507cf4f2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Load_vue_vue_type_style_index_0_id_507cf4f2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Load_vue_vue_type_style_index_0_id_507cf4f2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Load_vue_vue_type_style_index_0_id_507cf4f2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Load_vue_vue_type_style_index_0_id_507cf4f2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./assets/js/components/Load.vue?vue&type=template&id=507cf4f2&scoped=true&":
/*!**********************************************************************************!*\
  !*** ./assets/js/components/Load.vue?vue&type=template&id=507cf4f2&scoped=true& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Load_vue_vue_type_template_id_507cf4f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Load.vue?vue&type=template&id=507cf4f2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Load.vue?vue&type=template&id=507cf4f2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Load_vue_vue_type_template_id_507cf4f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Load_vue_vue_type_template_id_507cf4f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/components/LoginModal.vue":
/*!*********************************************!*\
  !*** ./assets/js/components/LoginModal.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LoginModal_vue_vue_type_template_id_369c4ba5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoginModal.vue?vue&type=template&id=369c4ba5& */ "./assets/js/components/LoginModal.vue?vue&type=template&id=369c4ba5&");
/* harmony import */ var _LoginModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoginModal.vue?vue&type=script&lang=js& */ "./assets/js/components/LoginModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LoginModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LoginModal_vue_vue_type_template_id_369c4ba5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LoginModal_vue_vue_type_template_id_369c4ba5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/components/LoginModal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/components/LoginModal.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./assets/js/components/LoginModal.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./LoginModal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/LoginModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/components/LoginModal.vue?vue&type=template&id=369c4ba5&":
/*!****************************************************************************!*\
  !*** ./assets/js/components/LoginModal.vue?vue&type=template&id=369c4ba5& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginModal_vue_vue_type_template_id_369c4ba5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./LoginModal.vue?vue&type=template&id=369c4ba5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/LoginModal.vue?vue&type=template&id=369c4ba5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginModal_vue_vue_type_template_id_369c4ba5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginModal_vue_vue_type_template_id_369c4ba5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/components/login/ConfirmCodeForm.vue":
/*!********************************************************!*\
  !*** ./assets/js/components/login/ConfirmCodeForm.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ConfirmCodeForm_vue_vue_type_template_id_6962b3ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConfirmCodeForm.vue?vue&type=template&id=6962b3ba&scoped=true& */ "./assets/js/components/login/ConfirmCodeForm.vue?vue&type=template&id=6962b3ba&scoped=true&");
/* harmony import */ var _ConfirmCodeForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConfirmCodeForm.vue?vue&type=script&lang=js& */ "./assets/js/components/login/ConfirmCodeForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ConfirmCodeForm_vue_vue_type_style_index_0_id_6962b3ba_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ConfirmCodeForm.vue?vue&type=style&index=0&id=6962b3ba&scoped=true&lang=css& */ "./assets/js/components/login/ConfirmCodeForm.vue?vue&type=style&index=0&id=6962b3ba&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ConfirmCodeForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ConfirmCodeForm_vue_vue_type_template_id_6962b3ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ConfirmCodeForm_vue_vue_type_template_id_6962b3ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6962b3ba",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/components/login/ConfirmCodeForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/components/login/ConfirmCodeForm.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./assets/js/components/login/ConfirmCodeForm.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfirmCodeForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ConfirmCodeForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/login/ConfirmCodeForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfirmCodeForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/components/login/ConfirmCodeForm.vue?vue&type=style&index=0&id=6962b3ba&scoped=true&lang=css&":
/*!*****************************************************************************************************************!*\
  !*** ./assets/js/components/login/ConfirmCodeForm.vue?vue&type=style&index=0&id=6962b3ba&scoped=true&lang=css& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfirmCodeForm_vue_vue_type_style_index_0_id_6962b3ba_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../../node_modules/css-loader/dist/cjs.js??ref--1-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./ConfirmCodeForm.vue?vue&type=style&index=0&id=6962b3ba&scoped=true&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./assets/js/components/login/ConfirmCodeForm.vue?vue&type=style&index=0&id=6962b3ba&scoped=true&lang=css&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfirmCodeForm_vue_vue_type_style_index_0_id_6962b3ba_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfirmCodeForm_vue_vue_type_style_index_0_id_6962b3ba_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfirmCodeForm_vue_vue_type_style_index_0_id_6962b3ba_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfirmCodeForm_vue_vue_type_style_index_0_id_6962b3ba_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfirmCodeForm_vue_vue_type_style_index_0_id_6962b3ba_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./assets/js/components/login/ConfirmCodeForm.vue?vue&type=template&id=6962b3ba&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./assets/js/components/login/ConfirmCodeForm.vue?vue&type=template&id=6962b3ba&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfirmCodeForm_vue_vue_type_template_id_6962b3ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ConfirmCodeForm.vue?vue&type=template&id=6962b3ba&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/login/ConfirmCodeForm.vue?vue&type=template&id=6962b3ba&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfirmCodeForm_vue_vue_type_template_id_6962b3ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfirmCodeForm_vue_vue_type_template_id_6962b3ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/components/login/CongratulationsForm.vue":
/*!************************************************************!*\
  !*** ./assets/js/components/login/CongratulationsForm.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CongratulationsForm_vue_vue_type_template_id_6799a2c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CongratulationsForm.vue?vue&type=template&id=6799a2c2&scoped=true& */ "./assets/js/components/login/CongratulationsForm.vue?vue&type=template&id=6799a2c2&scoped=true&");
/* harmony import */ var _CongratulationsForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CongratulationsForm.vue?vue&type=script&lang=js& */ "./assets/js/components/login/CongratulationsForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CongratulationsForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CongratulationsForm_vue_vue_type_template_id_6799a2c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CongratulationsForm_vue_vue_type_template_id_6799a2c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6799a2c2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/components/login/CongratulationsForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/components/login/CongratulationsForm.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./assets/js/components/login/CongratulationsForm.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CongratulationsForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CongratulationsForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/login/CongratulationsForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CongratulationsForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/components/login/CongratulationsForm.vue?vue&type=template&id=6799a2c2&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./assets/js/components/login/CongratulationsForm.vue?vue&type=template&id=6799a2c2&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CongratulationsForm_vue_vue_type_template_id_6799a2c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CongratulationsForm.vue?vue&type=template&id=6799a2c2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/login/CongratulationsForm.vue?vue&type=template&id=6799a2c2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CongratulationsForm_vue_vue_type_template_id_6799a2c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CongratulationsForm_vue_vue_type_template_id_6799a2c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/components/login/LoginForm.vue":
/*!**************************************************!*\
  !*** ./assets/js/components/login/LoginForm.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LoginForm_vue_vue_type_template_id_a796f1d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoginForm.vue?vue&type=template&id=a796f1d4& */ "./assets/js/components/login/LoginForm.vue?vue&type=template&id=a796f1d4&");
/* harmony import */ var _LoginForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoginForm.vue?vue&type=script&lang=js& */ "./assets/js/components/login/LoginForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LoginForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LoginForm_vue_vue_type_template_id_a796f1d4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LoginForm_vue_vue_type_template_id_a796f1d4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/components/login/LoginForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/components/login/LoginForm.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./assets/js/components/login/LoginForm.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./LoginForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/login/LoginForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/components/login/LoginForm.vue?vue&type=template&id=a796f1d4&":
/*!*********************************************************************************!*\
  !*** ./assets/js/components/login/LoginForm.vue?vue&type=template&id=a796f1d4& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginForm_vue_vue_type_template_id_a796f1d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./LoginForm.vue?vue&type=template&id=a796f1d4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/login/LoginForm.vue?vue&type=template&id=a796f1d4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginForm_vue_vue_type_template_id_a796f1d4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginForm_vue_vue_type_template_id_a796f1d4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/components/login/NicknameForm.vue":
/*!*****************************************************!*\
  !*** ./assets/js/components/login/NicknameForm.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NicknameForm_vue_vue_type_template_id_ebbf19ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NicknameForm.vue?vue&type=template&id=ebbf19ce&scoped=true& */ "./assets/js/components/login/NicknameForm.vue?vue&type=template&id=ebbf19ce&scoped=true&");
/* harmony import */ var _NicknameForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NicknameForm.vue?vue&type=script&lang=js& */ "./assets/js/components/login/NicknameForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NicknameForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NicknameForm_vue_vue_type_template_id_ebbf19ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NicknameForm_vue_vue_type_template_id_ebbf19ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "ebbf19ce",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/components/login/NicknameForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/components/login/NicknameForm.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./assets/js/components/login/NicknameForm.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NicknameForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./NicknameForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/login/NicknameForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NicknameForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/components/login/NicknameForm.vue?vue&type=template&id=ebbf19ce&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./assets/js/components/login/NicknameForm.vue?vue&type=template&id=ebbf19ce&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NicknameForm_vue_vue_type_template_id_ebbf19ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./NicknameForm.vue?vue&type=template&id=ebbf19ce&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/login/NicknameForm.vue?vue&type=template&id=ebbf19ce&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NicknameForm_vue_vue_type_template_id_ebbf19ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NicknameForm_vue_vue_type_template_id_ebbf19ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/components/login/RegistrationForm.vue":
/*!*********************************************************!*\
  !*** ./assets/js/components/login/RegistrationForm.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RegistrationForm_vue_vue_type_template_id_4d7d08e4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RegistrationForm.vue?vue&type=template&id=4d7d08e4& */ "./assets/js/components/login/RegistrationForm.vue?vue&type=template&id=4d7d08e4&");
/* harmony import */ var _RegistrationForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegistrationForm.vue?vue&type=script&lang=js& */ "./assets/js/components/login/RegistrationForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RegistrationForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RegistrationForm_vue_vue_type_template_id_4d7d08e4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RegistrationForm_vue_vue_type_template_id_4d7d08e4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/components/login/RegistrationForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/components/login/RegistrationForm.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./assets/js/components/login/RegistrationForm.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrationForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./RegistrationForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/login/RegistrationForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrationForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/components/login/RegistrationForm.vue?vue&type=template&id=4d7d08e4&":
/*!****************************************************************************************!*\
  !*** ./assets/js/components/login/RegistrationForm.vue?vue&type=template&id=4d7d08e4& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrationForm_vue_vue_type_template_id_4d7d08e4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./RegistrationForm.vue?vue&type=template&id=4d7d08e4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/login/RegistrationForm.vue?vue&type=template&id=4d7d08e4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrationForm_vue_vue_type_template_id_4d7d08e4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrationForm_vue_vue_type_template_id_4d7d08e4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/components/mvp/cabinet/MvpJoinedTeam.vue":
/*!************************************************************!*\
  !*** ./assets/js/components/mvp/cabinet/MvpJoinedTeam.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MvpJoinedTeam_vue_vue_type_template_id_36603b1d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MvpJoinedTeam.vue?vue&type=template&id=36603b1d&scoped=true& */ "./assets/js/components/mvp/cabinet/MvpJoinedTeam.vue?vue&type=template&id=36603b1d&scoped=true&");
/* harmony import */ var _MvpJoinedTeam_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MvpJoinedTeam.vue?vue&type=script&lang=js& */ "./assets/js/components/mvp/cabinet/MvpJoinedTeam.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MvpJoinedTeam_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MvpJoinedTeam_vue_vue_type_template_id_36603b1d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MvpJoinedTeam_vue_vue_type_template_id_36603b1d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "36603b1d",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/components/mvp/cabinet/MvpJoinedTeam.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/components/mvp/cabinet/MvpJoinedTeam.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./assets/js/components/mvp/cabinet/MvpJoinedTeam.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MvpJoinedTeam_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MvpJoinedTeam.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/mvp/cabinet/MvpJoinedTeam.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MvpJoinedTeam_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/components/mvp/cabinet/MvpJoinedTeam.vue?vue&type=template&id=36603b1d&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./assets/js/components/mvp/cabinet/MvpJoinedTeam.vue?vue&type=template&id=36603b1d&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MvpJoinedTeam_vue_vue_type_template_id_36603b1d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MvpJoinedTeam.vue?vue&type=template&id=36603b1d&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/mvp/cabinet/MvpJoinedTeam.vue?vue&type=template&id=36603b1d&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MvpJoinedTeam_vue_vue_type_template_id_36603b1d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MvpJoinedTeam_vue_vue_type_template_id_36603b1d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/components/mvp/cabinet/MvpJoinedTeams.vue":
/*!*************************************************************!*\
  !*** ./assets/js/components/mvp/cabinet/MvpJoinedTeams.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MvpJoinedTeams_vue_vue_type_template_id_cd5a6cb4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MvpJoinedTeams.vue?vue&type=template&id=cd5a6cb4&scoped=true& */ "./assets/js/components/mvp/cabinet/MvpJoinedTeams.vue?vue&type=template&id=cd5a6cb4&scoped=true&");
/* harmony import */ var _MvpJoinedTeams_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MvpJoinedTeams.vue?vue&type=script&lang=js& */ "./assets/js/components/mvp/cabinet/MvpJoinedTeams.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MvpJoinedTeams_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MvpJoinedTeams_vue_vue_type_template_id_cd5a6cb4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MvpJoinedTeams_vue_vue_type_template_id_cd5a6cb4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "cd5a6cb4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/components/mvp/cabinet/MvpJoinedTeams.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/components/mvp/cabinet/MvpJoinedTeams.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./assets/js/components/mvp/cabinet/MvpJoinedTeams.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MvpJoinedTeams_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MvpJoinedTeams.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/mvp/cabinet/MvpJoinedTeams.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MvpJoinedTeams_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/components/mvp/cabinet/MvpJoinedTeams.vue?vue&type=template&id=cd5a6cb4&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./assets/js/components/mvp/cabinet/MvpJoinedTeams.vue?vue&type=template&id=cd5a6cb4&scoped=true& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MvpJoinedTeams_vue_vue_type_template_id_cd5a6cb4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MvpJoinedTeams.vue?vue&type=template&id=cd5a6cb4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/mvp/cabinet/MvpJoinedTeams.vue?vue&type=template&id=cd5a6cb4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MvpJoinedTeams_vue_vue_type_template_id_cd5a6cb4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MvpJoinedTeams_vue_vue_type_template_id_cd5a6cb4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/components/mvp/cabinet/MvpPage.vue":
/*!******************************************************!*\
  !*** ./assets/js/components/mvp/cabinet/MvpPage.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MvpPage_vue_vue_type_template_id_07ae09b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MvpPage.vue?vue&type=template&id=07ae09b4&scoped=true& */ "./assets/js/components/mvp/cabinet/MvpPage.vue?vue&type=template&id=07ae09b4&scoped=true&");
/* harmony import */ var _MvpPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MvpPage.vue?vue&type=script&lang=js& */ "./assets/js/components/mvp/cabinet/MvpPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MvpPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MvpPage_vue_vue_type_template_id_07ae09b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MvpPage_vue_vue_type_template_id_07ae09b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "07ae09b4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/components/mvp/cabinet/MvpPage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/components/mvp/cabinet/MvpPage.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./assets/js/components/mvp/cabinet/MvpPage.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MvpPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MvpPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/mvp/cabinet/MvpPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MvpPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/components/mvp/cabinet/MvpPage.vue?vue&type=template&id=07ae09b4&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./assets/js/components/mvp/cabinet/MvpPage.vue?vue&type=template&id=07ae09b4&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MvpPage_vue_vue_type_template_id_07ae09b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MvpPage.vue?vue&type=template&id=07ae09b4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/mvp/cabinet/MvpPage.vue?vue&type=template&id=07ae09b4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MvpPage_vue_vue_type_template_id_07ae09b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MvpPage_vue_vue_type_template_id_07ae09b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/components/mvp/cabinet/MvpTeam.vue":
/*!******************************************************!*\
  !*** ./assets/js/components/mvp/cabinet/MvpTeam.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MvpTeam_vue_vue_type_template_id_657a43f4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MvpTeam.vue?vue&type=template&id=657a43f4& */ "./assets/js/components/mvp/cabinet/MvpTeam.vue?vue&type=template&id=657a43f4&");
/* harmony import */ var _MvpTeam_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MvpTeam.vue?vue&type=script&lang=js& */ "./assets/js/components/mvp/cabinet/MvpTeam.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MvpTeam_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MvpTeam_vue_vue_type_template_id_657a43f4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MvpTeam_vue_vue_type_template_id_657a43f4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/components/mvp/cabinet/MvpTeam.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/components/mvp/cabinet/MvpTeam.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./assets/js/components/mvp/cabinet/MvpTeam.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MvpTeam_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MvpTeam.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/mvp/cabinet/MvpTeam.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MvpTeam_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/components/mvp/cabinet/MvpTeam.vue?vue&type=template&id=657a43f4&":
/*!*************************************************************************************!*\
  !*** ./assets/js/components/mvp/cabinet/MvpTeam.vue?vue&type=template&id=657a43f4& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MvpTeam_vue_vue_type_template_id_657a43f4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MvpTeam.vue?vue&type=template&id=657a43f4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/mvp/cabinet/MvpTeam.vue?vue&type=template&id=657a43f4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MvpTeam_vue_vue_type_template_id_657a43f4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MvpTeam_vue_vue_type_template_id_657a43f4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/components/mvp/cabinet/MvpTeamMember.vue":
/*!************************************************************!*\
  !*** ./assets/js/components/mvp/cabinet/MvpTeamMember.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MvpTeamMember_vue_vue_type_template_id_204058ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MvpTeamMember.vue?vue&type=template&id=204058ae& */ "./assets/js/components/mvp/cabinet/MvpTeamMember.vue?vue&type=template&id=204058ae&");
/* harmony import */ var _MvpTeamMember_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MvpTeamMember.vue?vue&type=script&lang=js& */ "./assets/js/components/mvp/cabinet/MvpTeamMember.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MvpTeamMember_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MvpTeamMember_vue_vue_type_template_id_204058ae___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MvpTeamMember_vue_vue_type_template_id_204058ae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/components/mvp/cabinet/MvpTeamMember.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/components/mvp/cabinet/MvpTeamMember.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./assets/js/components/mvp/cabinet/MvpTeamMember.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MvpTeamMember_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MvpTeamMember.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/mvp/cabinet/MvpTeamMember.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MvpTeamMember_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/components/mvp/cabinet/MvpTeamMember.vue?vue&type=template&id=204058ae&":
/*!*******************************************************************************************!*\
  !*** ./assets/js/components/mvp/cabinet/MvpTeamMember.vue?vue&type=template&id=204058ae& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MvpTeamMember_vue_vue_type_template_id_204058ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MvpTeamMember.vue?vue&type=template&id=204058ae& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/mvp/cabinet/MvpTeamMember.vue?vue&type=template&id=204058ae&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MvpTeamMember_vue_vue_type_template_id_204058ae___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MvpTeamMember_vue_vue_type_template_id_204058ae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/components/mvp/cabinet/MvpTeamPage.vue":
/*!**********************************************************!*\
  !*** ./assets/js/components/mvp/cabinet/MvpTeamPage.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MvpTeamPage_vue_vue_type_template_id_33471d23___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MvpTeamPage.vue?vue&type=template&id=33471d23& */ "./assets/js/components/mvp/cabinet/MvpTeamPage.vue?vue&type=template&id=33471d23&");
/* harmony import */ var _MvpTeamPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MvpTeamPage.vue?vue&type=script&lang=js& */ "./assets/js/components/mvp/cabinet/MvpTeamPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MvpTeamPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MvpTeamPage_vue_vue_type_template_id_33471d23___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MvpTeamPage_vue_vue_type_template_id_33471d23___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/components/mvp/cabinet/MvpTeamPage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/components/mvp/cabinet/MvpTeamPage.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./assets/js/components/mvp/cabinet/MvpTeamPage.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MvpTeamPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MvpTeamPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/mvp/cabinet/MvpTeamPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MvpTeamPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/components/mvp/cabinet/MvpTeamPage.vue?vue&type=template&id=33471d23&":
/*!*****************************************************************************************!*\
  !*** ./assets/js/components/mvp/cabinet/MvpTeamPage.vue?vue&type=template&id=33471d23& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MvpTeamPage_vue_vue_type_template_id_33471d23___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MvpTeamPage.vue?vue&type=template&id=33471d23& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/mvp/cabinet/MvpTeamPage.vue?vue&type=template&id=33471d23&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MvpTeamPage_vue_vue_type_template_id_33471d23___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MvpTeamPage_vue_vue_type_template_id_33471d23___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/components/mvp/cabinet/MvpTeams.vue":
/*!*******************************************************!*\
  !*** ./assets/js/components/mvp/cabinet/MvpTeams.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MvpTeams_vue_vue_type_template_id_4d79dbaf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MvpTeams.vue?vue&type=template&id=4d79dbaf& */ "./assets/js/components/mvp/cabinet/MvpTeams.vue?vue&type=template&id=4d79dbaf&");
/* harmony import */ var _MvpTeams_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MvpTeams.vue?vue&type=script&lang=js& */ "./assets/js/components/mvp/cabinet/MvpTeams.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MvpTeams_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MvpTeams_vue_vue_type_template_id_4d79dbaf___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MvpTeams_vue_vue_type_template_id_4d79dbaf___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/components/mvp/cabinet/MvpTeams.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/components/mvp/cabinet/MvpTeams.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./assets/js/components/mvp/cabinet/MvpTeams.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MvpTeams_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MvpTeams.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/mvp/cabinet/MvpTeams.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MvpTeams_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/components/mvp/cabinet/MvpTeams.vue?vue&type=template&id=4d79dbaf&":
/*!**************************************************************************************!*\
  !*** ./assets/js/components/mvp/cabinet/MvpTeams.vue?vue&type=template&id=4d79dbaf& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MvpTeams_vue_vue_type_template_id_4d79dbaf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MvpTeams.vue?vue&type=template&id=4d79dbaf& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/mvp/cabinet/MvpTeams.vue?vue&type=template&id=4d79dbaf&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MvpTeams_vue_vue_type_template_id_4d79dbaf___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MvpTeams_vue_vue_type_template_id_4d79dbaf___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/components/mvp/invite/MvpInviteTeamPage.vue":
/*!***************************************************************!*\
  !*** ./assets/js/components/mvp/invite/MvpInviteTeamPage.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MvpInviteTeamPage_vue_vue_type_template_id_19c35502___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MvpInviteTeamPage.vue?vue&type=template&id=19c35502& */ "./assets/js/components/mvp/invite/MvpInviteTeamPage.vue?vue&type=template&id=19c35502&");
/* harmony import */ var _MvpInviteTeamPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MvpInviteTeamPage.vue?vue&type=script&lang=js& */ "./assets/js/components/mvp/invite/MvpInviteTeamPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MvpInviteTeamPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MvpInviteTeamPage_vue_vue_type_template_id_19c35502___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MvpInviteTeamPage_vue_vue_type_template_id_19c35502___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/components/mvp/invite/MvpInviteTeamPage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/components/mvp/invite/MvpInviteTeamPage.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./assets/js/components/mvp/invite/MvpInviteTeamPage.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MvpInviteTeamPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MvpInviteTeamPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/mvp/invite/MvpInviteTeamPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MvpInviteTeamPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/components/mvp/invite/MvpInviteTeamPage.vue?vue&type=template&id=19c35502&":
/*!**********************************************************************************************!*\
  !*** ./assets/js/components/mvp/invite/MvpInviteTeamPage.vue?vue&type=template&id=19c35502& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MvpInviteTeamPage_vue_vue_type_template_id_19c35502___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MvpInviteTeamPage.vue?vue&type=template&id=19c35502& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/mvp/invite/MvpInviteTeamPage.vue?vue&type=template&id=19c35502&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MvpInviteTeamPage_vue_vue_type_template_id_19c35502___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MvpInviteTeamPage_vue_vue_type_template_id_19c35502___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/components/mvp/services/MvpService.js":
/*!*********************************************************!*\
  !*** ./assets/js/components/mvp/services/MvpService.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Applications_MAMP_htdocs_champspro_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Applications_MAMP_htdocs_champspro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Applications_MAMP_htdocs_champspro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");








var MvpService = function MvpService(axios) {
  var _this = this;

  Object(_Applications_MAMP_htdocs_champspro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MvpService);

  Object(_Applications_MAMP_htdocs_champspro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(this, "baseUrl", "".concat(window.location.protocol, "//").concat(window.location.hostname, "/"));

  Object(_Applications_MAMP_htdocs_champspro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(this, "url", function (path) {
    return "".concat(_this.baseUrl, "ru/").concat(path);
  });

  Object(_Applications_MAMP_htdocs_champspro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(this, "createMvpTeam", /*#__PURE__*/function () {
    var _ref = Object(_Applications_MAMP_htdocs_champspro_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee(capacity, name, tag) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.axios.post(_this.url('user/mvp/create/team'), {
                capacity: capacity,
                name: name,
                tag: tag
              });

            case 2:
              return _context.abrupt("return", _context.sent);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }());

  Object(_Applications_MAMP_htdocs_champspro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(this, "getUserTeams", /*#__PURE__*/Object(_Applications_MAMP_htdocs_champspro_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _this.axios.post(_this.url('user/mvp/get/teams'));

          case 2:
            return _context2.abrupt("return", _context2.sent);

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));

  Object(_Applications_MAMP_htdocs_champspro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(this, "getTeamLink", function (id) {
    return _this.url("user/mvp/team/".concat(id));
  });

  Object(_Applications_MAMP_htdocs_champspro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(this, "getMvpLink", function () {
    return _this.url('user/mvp/');
  });

  Object(_Applications_MAMP_htdocs_champspro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(this, "getMvpTeam", /*#__PURE__*/function () {
    var _ref3 = Object(_Applications_MAMP_htdocs_champspro_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(id) {
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _this.axios.post(_this.url("get/user/mvp/team/".concat(id)));

            case 2:
              return _context3.abrupt("return", _context3.sent);

            case 3:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function (_x4) {
      return _ref3.apply(this, arguments);
    };
  }());

  Object(_Applications_MAMP_htdocs_champspro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(this, "deleteMvpTeam", /*#__PURE__*/function () {
    var _ref4 = Object(_Applications_MAMP_htdocs_champspro_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(id) {
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _this.axios.post(_this.url("delete/user/mvp/team/".concat(id)));

            case 2:
              return _context4.abrupt("return", _context4.sent);

            case 3:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function (_x5) {
      return _ref4.apply(this, arguments);
    };
  }());

  Object(_Applications_MAMP_htdocs_champspro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(this, "getTeamInviteToken", /*#__PURE__*/function () {
    var _ref5 = Object(_Applications_MAMP_htdocs_champspro_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(id) {
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _this.axios.post(_this.url("mvp/team/get/invite/".concat(id)));

            case 2:
              return _context5.abrupt("return", _context5.sent);

            case 3:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function (_x6) {
      return _ref5.apply(this, arguments);
    };
  }());

  Object(_Applications_MAMP_htdocs_champspro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(this, "reloadTeamInviteToken", /*#__PURE__*/function () {
    var _ref6 = Object(_Applications_MAMP_htdocs_champspro_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(id) {
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return _this.axios.post(_this.url("mvp/team/reload/invite/".concat(id)));

            case 2:
              return _context6.abrupt("return", _context6.sent);

            case 3:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    return function (_x7) {
      return _ref6.apply(this, arguments);
    };
  }());

  Object(_Applications_MAMP_htdocs_champspro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(this, "getInviteToTeamLink", function (id, token) {
    return _this.url("mvp/invite/".concat(id, "/").concat(token));
  });

  Object(_Applications_MAMP_htdocs_champspro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(this, "getAuthUser", /*#__PURE__*/Object(_Applications_MAMP_htdocs_champspro_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return _this.axios.post(_this.url('get/auth'));

          case 2:
            return _context7.abrupt("return", _context7.sent);

          case 3:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  })));

  Object(_Applications_MAMP_htdocs_champspro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(this, "joinMemberToTeam", /*#__PURE__*/function () {
    var _ref8 = Object(_Applications_MAMP_htdocs_champspro_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(id) {
      return regeneratorRuntime.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return _this.axios.post(_this.url("mvp/join/to/team/".concat(id)));

            case 2:
              return _context8.abrupt("return", _context8.sent);

            case 3:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    }));

    return function (_x8) {
      return _ref8.apply(this, arguments);
    };
  }());

  Object(_Applications_MAMP_htdocs_champspro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(this, "getUserJoinedTeams", /*#__PURE__*/Object(_Applications_MAMP_htdocs_champspro_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.next = 2;
            return _this.axios.post(_this.url("user/mvp/get/joined/teams/"));

          case 2:
            return _context9.abrupt("return", _context9.sent);

          case 3:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  })));

  Object(_Applications_MAMP_htdocs_champspro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(this, "userLeaveTeamLink", function (id) {
    return _this.url("user/mvp/leave/team/".concat(id));
  });

  Object(_Applications_MAMP_htdocs_champspro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(this, "getTournamentsByGame", /*#__PURE__*/function () {
    var _ref10 = Object(_Applications_MAMP_htdocs_champspro_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(game) {
      return regeneratorRuntime.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              _context10.next = 2;
              return _this.axios.post(_this.url("mvp/ajax/tournaments/".concat(game)));

            case 2:
              return _context10.abrupt("return", _context10.sent);

            case 3:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10);
    }));

    return function (_x9) {
      return _ref10.apply(this, arguments);
    };
  }());

  Object(_Applications_MAMP_htdocs_champspro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(this, "getProfileLink", function () {
    return _this.url("user/settings");
  });

  this.axios = axios;
};

/* harmony default export */ __webpack_exports__["default"] = (MvpService);

/***/ }),

/***/ "./assets/js/components/mvp/tournaments/MvpMain.vue":
/*!**********************************************************!*\
  !*** ./assets/js/components/mvp/tournaments/MvpMain.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MvpMain_vue_vue_type_template_id_0852dfbc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MvpMain.vue?vue&type=template&id=0852dfbc& */ "./assets/js/components/mvp/tournaments/MvpMain.vue?vue&type=template&id=0852dfbc&");
/* harmony import */ var _MvpMain_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MvpMain.vue?vue&type=script&lang=js& */ "./assets/js/components/mvp/tournaments/MvpMain.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MvpMain_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MvpMain_vue_vue_type_template_id_0852dfbc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MvpMain_vue_vue_type_template_id_0852dfbc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/components/mvp/tournaments/MvpMain.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/components/mvp/tournaments/MvpMain.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./assets/js/components/mvp/tournaments/MvpMain.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MvpMain_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MvpMain.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/mvp/tournaments/MvpMain.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MvpMain_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/components/mvp/tournaments/MvpMain.vue?vue&type=template&id=0852dfbc&":
/*!*****************************************************************************************!*\
  !*** ./assets/js/components/mvp/tournaments/MvpMain.vue?vue&type=template&id=0852dfbc& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MvpMain_vue_vue_type_template_id_0852dfbc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MvpMain.vue?vue&type=template&id=0852dfbc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/mvp/tournaments/MvpMain.vue?vue&type=template&id=0852dfbc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MvpMain_vue_vue_type_template_id_0852dfbc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MvpMain_vue_vue_type_template_id_0852dfbc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/components/mvp/tournaments/MvpTournamentsList.vue":
/*!*********************************************************************!*\
  !*** ./assets/js/components/mvp/tournaments/MvpTournamentsList.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MvpTournamentsList_vue_vue_type_template_id_18c1590f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MvpTournamentsList.vue?vue&type=template&id=18c1590f& */ "./assets/js/components/mvp/tournaments/MvpTournamentsList.vue?vue&type=template&id=18c1590f&");
/* harmony import */ var _MvpTournamentsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MvpTournamentsList.vue?vue&type=script&lang=js& */ "./assets/js/components/mvp/tournaments/MvpTournamentsList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MvpTournamentsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MvpTournamentsList_vue_vue_type_template_id_18c1590f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MvpTournamentsList_vue_vue_type_template_id_18c1590f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/components/mvp/tournaments/MvpTournamentsList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/components/mvp/tournaments/MvpTournamentsList.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./assets/js/components/mvp/tournaments/MvpTournamentsList.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MvpTournamentsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MvpTournamentsList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/mvp/tournaments/MvpTournamentsList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MvpTournamentsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/components/mvp/tournaments/MvpTournamentsList.vue?vue&type=template&id=18c1590f&":
/*!****************************************************************************************************!*\
  !*** ./assets/js/components/mvp/tournaments/MvpTournamentsList.vue?vue&type=template&id=18c1590f& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MvpTournamentsList_vue_vue_type_template_id_18c1590f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MvpTournamentsList.vue?vue&type=template&id=18c1590f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/mvp/tournaments/MvpTournamentsList.vue?vue&type=template&id=18c1590f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MvpTournamentsList_vue_vue_type_template_id_18c1590f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MvpTournamentsList_vue_vue_type_template_id_18c1590f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/config.js":
/*!*****************************!*\
  !*** ./assets/js/config.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  STEAM_LOGIN_LINK: 'https://steamcommunity.com/openid/login?openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.mode=checkid_setup&openid.return_to=https%3A%2F%2Fchamps.pro%2Fru%2Foauth%2Fsteam%3Fstate=steam&openid.realm=https%3A%2F%2Fchamps.pro%2Fru%2Foauth%2Fsteam&openid.ns.sreg=http%3A%2F%2Fopenid.net%2Fextensions%2Fsreg%2F1.1&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select'
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Load.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/Load.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Load"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/LoginModal.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/LoginModal.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_NicknameForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/NicknameForm */ "./assets/js/components/login/NicknameForm.vue");
/* harmony import */ var _login_ConfirmCodeForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/ConfirmCodeForm */ "./assets/js/components/login/ConfirmCodeForm.vue");
/* harmony import */ var _login_RegistrationForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/RegistrationForm */ "./assets/js/components/login/RegistrationForm.vue");
/* harmony import */ var _login_LoginForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/LoginForm */ "./assets/js/components/login/LoginForm.vue");
/* harmony import */ var _login_CongratulationsForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/CongratulationsForm */ "./assets/js/components/login/CongratulationsForm.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  name: "LoginModal",
  inject: ['axios', 'config'],
  props: {
    show: Boolean,
    redirect: {
      "default": null
    },
    showFirst: {
      "default": 'login'
    }
  },
  data: function data() {
    return {
      console: console,
      error: false,
      step: 'registration',
      email: null,
      password: null,
      check: false,
      confirmCode: null,
      codeConfirmed: false,
      errorMessage: null,
      successMessage: null
    };
  },
  components: {
    'nick-name': _login_NicknameForm__WEBPACK_IMPORTED_MODULE_0__["default"],
    'confirm-code': _login_ConfirmCodeForm__WEBPACK_IMPORTED_MODULE_1__["default"],
    'registration': _login_RegistrationForm__WEBPACK_IMPORTED_MODULE_2__["default"],
    'login': _login_LoginForm__WEBPACK_IMPORTED_MODULE_3__["default"],
    'congratulation': _login_CongratulationsForm__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  watch: {
    show: function show() {
      this.step = this.showFirst;
    },
    step: function step(newStep) {
      if (newStep === 'finish') {
        this.authLogin();
      }
    }
  },
  methods: {
    setStep: function setStep(step) {
      this.step = step;
    },
    authLogin: function authLogin() {
      var _this = this;

      console.log('123');
      var formData = new FormData();
      formData.append('email', this.email);
      formData.append('password', this.password);
      formData.append('_csrf_token', this.axios._csrf_token);
      this.axios.post('/ru/login', formData).then(function (res) {
        if (res.data.error) {
          _this.error = true;
        } else {
          if (_this.redirect !== null) {
            window.location.assign(_this.redirect);
          } else {
            window.location.reload();
          }
        }
      });
    },
    registration: function registration() {
      var _this2 = this;

      var formData = new FormData();
      formData.append('user[email]', this.email);
      formData.append('user[password][first]', this.password);
      formData.append('user[password][second]', this.password);
      formData.append('_csrf_token', this.axios._csrf_token);
      this.axios.post('/ru/registration', formData).then(function (res) {
        if (res.data.error) {
          _this2.error = true;
        }
      })["catch"](function () {
        _this2.error = true;
      });
    },
    close: function close() {
      this.$parent.show = false;
      this.show = false;
    },
    checkStep: function checkStep(step) {
      return this.show && this.step === step;
    },
    sendConfirmCode: function sendConfirmCode() {
      var formData = new FormData();
      formData.append('email', this.email);
      this.axios.post('/ru/generate/confirm/code', formData);
    }
  },
  mounted: function mounted() {
    console.log(this.content);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/login/ConfirmCodeForm.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/login/ConfirmCodeForm.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_0__);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ConfirmCodeForm",
  inject: ['axios', 'config'],
  props: ['email'],
  data: function data() {
    return {
      codeConfirmed: false,
      confirmCode: null,
      errorMessage: null,
      successMessage: null,
      timer: 0
    };
  },
  computed: {
    timerMessage: function timerMessage() {
      var message = '';

      if (this.timer > 0) {
        message = "\u0447\u0435\u0440\u0435\u0437 <strong>".concat(this.timer, "</strong> \u0441\u0435\u043A");
      }

      return message;
    }
  },
  methods: {
    sendRegistrationConfirm: function sendRegistrationConfirm() {
      var _this = this;

      this.errorMessage = null;
      this.successMessage = null;
      var formData = new FormData();
      formData.append('user[code]', this.confirmCode);
      formData.append('user[email]', this.email);
      this.axios.post('/ru/check/confirm/code', formData).then(function (_ref) {
        var data = _ref.data;
        _this.successMessage = data;
        _this.codeConfirmed = true;

        _this.$emit('registration');

        _this.$emit('setStep', 'nickname');
      })["catch"](function (_ref2) {
        var response = _ref2.response;
        _this.errorMessage = response.data;
        _this.codeConfirmed = false;
      });
    },
    showNickname: function showNickname() {
      if (this.codeConfirmed) {
        this.$emit('setStep', 'nickname');
      }
    },
    close: function close() {
      this.$emit('close');
    },
    resendConfirmCode: function resendConfirmCode() {
      if (this.timer === 0) {
        this.timer = 30;
        this.runTimer();
        this.$emit('sendConfirmCode');
      }
    },
    runTimer: function runTimer() {
      var self = this;

      if (self.timer > 0) {
        setTimeout(function () {
          self.timer -= 1;
          self.runTimer();
        }, 1000);
      }
    }
  },
  mounted: function mounted() {
    $('[data-toggle="tooltip"]').tooltip();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/login/CongratulationsForm.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/login/CongratulationsForm.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "CongratulationsForm"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/login/LoginForm.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/login/LoginForm.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "LoginForm",
  inject: ['config'],
  props: ['error'],
  computed: {
    steamLoginLink: function steamLoginLink() {
      return this.config.STEAM_LOGIN_LINK;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/login/NicknameForm.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/login/NicknameForm.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "NicknameForm",
  inject: ['axios', 'config'],
  props: ['email'],
  data: function data() {
    return {
      nickname: null,
      errorMessage: null
    };
  },
  methods: {
    setNickname: function setNickname() {
      var _this = this;

      var data = {
        email: this.email,
        nickname: this.nickname
      };
      this.axios.post('/ru/ajax/user/set/nickname', data).then(function (_ref) {
        var data = _ref.data;

        _this.$emit('setStep', 'congratulation');
      })["catch"](function (_ref2) {
        var response = _ref2.response;
        _this.errorMessage = response.data;
      });
    },
    close: function close() {
      this.$emit('close');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/login/RegistrationForm.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/login/RegistrationForm.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  inject: ['axios', 'config'],
  name: "RegistrationForm",
  props: ['password', 'email', 'check'],
  data: function data() {
    return {
      errorMessage: null
    };
  },
  computed: {
    steamLoginLink: function steamLoginLink() {
      return this.config.STEAM_LOGIN_LINK;
    },
    emailForm: function emailForm() {
      var formData = new FormData();
      formData.append('email', this.email);
      return formData;
    }
  },
  methods: {
    generateConfirmCode: function generateConfirmCode() {
      if (this.check) {
        this.$emit('sendConfirmCode');
        this.$emit('setStep', 'confirmCode');
      }
    },
    checkIsEmailValid: function checkIsEmailValid() {
      var _this = this;

      this.axios.post('/ru/user/check/email', this.emailForm).then(function (_ref) {
        var data = _ref.data;

        _this.generateConfirmCode();
      })["catch"](function (_ref2) {
        var response = _ref2.response;
        _this.errorMessage = response.data;
      });
    },
    close: function close() {
      this.$emit('close');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/mvp/cabinet/MvpJoinedTeam.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/mvp/cabinet/MvpJoinedTeam.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "MvpJoinedTeam",
  props: ['team'],
  inject: ['http']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/mvp/cabinet/MvpJoinedTeams.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/mvp/cabinet/MvpJoinedTeams.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MvpJoinedTeam__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MvpJoinedTeam */ "./assets/js/components/mvp/cabinet/MvpJoinedTeam.vue");
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "MvpJoinedTeams",
  inject: ['http'],
  components: {
    'mvp-joined-team': _MvpJoinedTeam__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      teams: []
    };
  },
  methods: {
    getJoinedTeams: function getJoinedTeams() {
      var _this = this;

      this.http.getUserJoinedTeams().then(function (_ref) {
        var data = _ref.data;
        _this.teams = data;
      });
    }
  },
  mounted: function mounted() {
    this.getJoinedTeams();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/mvp/cabinet/MvpPage.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/mvp/cabinet/MvpPage.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MvpTeams__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MvpTeams */ "./assets/js/components/mvp/cabinet/MvpTeams.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "MvpPage",
  components: {
    MvpTeams: _MvpTeams__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      active: 'commands'
    };
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/mvp/cabinet/MvpTeam.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/mvp/cabinet/MvpTeam.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_1__);




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "MvpTeam",
  inject: ['http'],
  props: ['teams', 'title', 'description', 'type', 'capacity'],
  computed: {
    team: function team() {
      var _this = this;

      return this.teams.find(function (team) {
        return Number(team.capacity) === Number(_this.capacity);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/mvp/cabinet/MvpTeamMember.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/mvp/cabinet/MvpTeamMember.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "MvpTeamMember",
  props: ['member', 'isCaptain'],
  methods: {
    getSteamLink: function getSteamLink(steamId) {
      return "https://steamcommunity.com/profiles/".concat(steamId);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/mvp/cabinet/MvpTeamPage.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/mvp/cabinet/MvpTeamPage.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MvpTeamMember__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MvpTeamMember */ "./assets/js/components/mvp/cabinet/MvpTeamMember.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "MvpTeamPage",
  inject: ['http'],
  props: ['teamId'],
  components: {
    'mvp-team-member': _MvpTeamMember__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      team: {},
      inviteToken: null,
      user: null
    };
  },
  computed: {
    isCreator: function isCreator() {
      return this.user !== null && this.user.id === this.team.creator.id;
    }
  },
  methods: {
    getTeam: function getTeam() {
      var _this = this;

      this.http.getMvpTeam(this.teamId).then(function (_ref) {
        var data = _ref.data;
        _this.team = data;
      });
    },
    checkMemberIsCaptain: function checkMemberIsCaptain(member) {
      return member.id === this.team.creator.id;
    },
    getSteamLink: function getSteamLink(steamId) {
      return "https://steamcommunity.com/profiles/".concat(steamId);
    },
    showAddModal: function showAddModal() {
      var _this2 = this;

      this.http.getTeamInviteToken(this.teamId).then(function (_ref2) {
        var data = _ref2.data;

        _this2.showInviteModal(data);
      });
    },
    showInviteModal: function showInviteModal(token) {
      var _this3 = this;

      var inviteLink = this.http.getInviteToTeamLink(this.teamId, token);
      sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
        title: 'Добавить участников',
        text: 'Отправь эту ссылку игрокам, которых хочешь пригласить в команду',
        html: "<textarea class=\"swal2-textarea\" placeholder=\"\" style=\"display: flex;\">".concat(inviteLink, "</textarea>"),
        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonText: 'Обновить',
        cancelButtonText: 'Закрыть',
        preConfirm: function preConfirm() {
          _this3.http.reloadTeamInviteToken(_this3.teamId).then(function (_ref3) {
            var data = _ref3.data;

            _this3.showInviteModal(data);
          });
        }
      });
    },
    deleteTeam: function deleteTeam() {
      var _this4 = this;

      this.http.deleteMvpTeam(this.teamId).then(function () {
        window.location = _this4.http.getMvpLink();
      });
    },
    getUser: function getUser() {
      var _this5 = this;

      this.http.getAuthUser().then(function (_ref4) {
        var data = _ref4.data;
        _this5.user = data;
      });
    }
  },
  mounted: function mounted() {
    this.getTeam();
    this.getUser();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/mvp/cabinet/MvpTeams.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/mvp/cabinet/MvpTeams.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MvpTeam__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MvpTeam */ "./assets/js/components/mvp/cabinet/MvpTeam.vue");
/* harmony import */ var _MvpJoinedTeams__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MvpJoinedTeams */ "./assets/js/components/mvp/cabinet/MvpJoinedTeams.vue");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "MvpTeams",
  components: {
    'mvp-team': _MvpTeam__WEBPACK_IMPORTED_MODULE_1__["default"],
    'mvp-joined-teams': _MvpJoinedTeams__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  inject: ['http'],
  data: function data() {
    return {
      teams: [],
      command: {
        capacity: null,
        name: null,
        tag: null
      },
      messages: {
        success: null,
        error: {}
      }
    };
  },
  methods: {
    createTeam: function createTeam() {
      var _this = this;

      var _this$command = this.command,
          capacity = _this$command.capacity,
          name = _this$command.name,
          tag = _this$command.tag;
      this.messages.success = null;
      this.messages.error = {};
      this.http.createMvpTeam(capacity, name, tag).then(function (_ref) {
        var data = _ref.data;
        _this.messages.success = data.message;

        _this.teams.push(data.team);
      })["catch"](function (_ref2) {
        var response = _ref2.response;
        _this.messages.error = response.data;
      });
    },
    getUserTeams: function getUserTeams() {
      var _this2 = this;

      this.http.getUserTeams().then(function (_ref3) {
        var data = _ref3.data;
        _this2.teams = data;
      });
    },
    setCapacity: function setCapacity(capacity) {
      this.command.capacity = capacity;
    }
  },
  mounted: function mounted() {
    this.getUserTeams();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/mvp/invite/MvpInviteTeamPage.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/mvp/invite/MvpInviteTeamPage.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _cabinet_MvpTeamMember__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cabinet/MvpTeamMember */ "./assets/js/components/mvp/cabinet/MvpTeamMember.vue");
/* harmony import */ var _LoginModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../LoginModal */ "./assets/js/components/LoginModal.vue");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "MvpInviteTeamPage",
  inject: ['http', 'config'],
  props: ['teamId', 'isAuthorize'],
  components: {
    'mvp-team-member': _cabinet_MvpTeamMember__WEBPACK_IMPORTED_MODULE_1__["default"],
    'login-modal': _LoginModal__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      team: {
        name: null
      },
      authUser: null
    };
  },
  computed: {
    isFreePlace: function isFreePlace() {
      if (this.team.hasOwnProperty('members')) {
        return this.team.members.length < this.team.capacity;
      }

      return false;
    }
  },
  methods: {
    getTeam: function getTeam() {
      var _this = this;

      this.http.getMvpTeam(this.teamId).then(function (_ref) {
        var data = _ref.data;
        _this.team = data;
      });
    },
    checkMemberIsCaptain: function checkMemberIsCaptain(member) {
      return member.id === this.team.creator.id;
    },
    joinTeam: function joinTeam() {
      var _this2 = this;

      this.http.getAuthUser().then(function (_ref2) {
        var data = _ref2.data;
        _this2.authUser = data;

        var needSteam = _this2.checkNeedSteamForJoin();

        if (!needSteam) {
          _this2.http.joinMemberToTeam(_this2.teamId).then(function () {
            _this2.getTeam();
          })["catch"](function (_ref3) {
            var response = _ref3.response;

            _this2.errorPopup(response.data);
          });
        }
      });
    },
    errorPopup: function errorPopup(error) {
      sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
        icon: 'error',
        title: 'Упс...',
        text: error
      });
    },
    checkNeedSteamForJoin: function checkNeedSteamForJoin() {
      var html = "\n                        \u0414\u043B\u044F \u0442\u043E\u0433\u043E \u0447\u0442\u043E \u0431\u044B \u0443\u0447\u0430\u0432\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u0432 \u0442\u0443\u0440\u043D\u0438\u0440\u0435, \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u043F\u0440\u0438\u0432\u044F\u0437\u0430\u0442\u044C \u0430\u043A\u0430\u0443\u043D\u0442\n                        <a href=\"".concat(this.config.STEAM_LOGIN_LINK, "\">Steam</a>\n                        <div class=\"pt-2\">\n                            <a href=\"").concat(this.config.STEAM_LOGIN_LINK, "\">\n                                <img src=\"/images/login_steam.svg\"/>\n                            </a>\n                        </div>");

      if (this.authUser !== null) {
        if (this.authUser.steam === null || this.authUser.steam === '' || this.authUser.steam === undefined) {
          sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            icon: 'error',
            title: 'Упс...',
            html: html,
            showConfirmButton: false,
            showCloseButton: true
          });
        } else {
          return false;
        }
      }

      return true;
    }
  },
  mounted: function mounted() {
    this.getTeam();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/mvp/tournaments/MvpMain.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/mvp/tournaments/MvpMain.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "MvpMain",
  props: ['loginRedirect', 'isAuthorize'],
  data: function data() {
    return {
      show: false
    };
  },
  methods: {
    showLoginModal: function showLoginModal() {
      if (this.isAuthorize) {
        window.location = this.loginRedirect;
      } else {
        login.show = true;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/mvp/tournaments/MvpTournamentsList.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/mvp/tournaments/MvpTournamentsList.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Load */ "./assets/js/components/Load.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "MvpTournamentsList",
  inject: ['http', 'header'],
  components: {
    'load': _Load__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      tournaments: [],
      games: {
        'CS:GO': 'cs',
        'DOTA': 'dota',
        'Valorant': 'valorant'
      },
      load: false
    };
  },
  watch: {
    game: function game() {
      this.getTournamentsByGame();
    }
  },
  computed: {
    game: function game() {
      return this.header.game;
    }
  },
  methods: {
    getTournamentsByGame: function getTournamentsByGame() {
      var _this = this;

      this.load = true;
      this.http.getTournamentsByGame(this.games[this.header.game]).then(function (_ref) {
        var data = _ref.data;
        _this.tournaments = data;
        _this.load = false;
      });
    }
  },
  created: function created() {
    this.getTournamentsByGame();
  }
});

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Load.vue?vue&type=style&index=0&id=507cf4f2&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--1-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/Load.vue?vue&type=style&index=0&id=507cf4f2&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./assets/js/components/login/ConfirmCodeForm.vue?vue&type=style&index=0&id=6962b3ba&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--1-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/login/ConfirmCodeForm.vue?vue&type=style&index=0&id=6962b3ba&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Load.vue?vue&type=template&id=507cf4f2&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/Load.vue?vue&type=template&id=507cf4f2&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "loadingio-spinner-gear-mtphwgoy79e" }, [
      _c("div", { staticClass: "ldio-rwuvarvnp1s" }, [
        _c("div", [
          _c("div"),
          _c("div"),
          _c("div"),
          _c("div"),
          _c("div"),
          _c("div")
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/LoginModal.vue?vue&type=template&id=369c4ba5&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/LoginModal.vue?vue&type=template&id=369c4ba5& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "slides" },
    [
      _c(
        "login",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.checkStep("login"),
              expression: "checkStep('login')"
            }
          ],
          attrs: { error: _vm.error, email: _vm.email, password: _vm.password },
          on: {
            setStep: _vm.setStep,
            authLogin: _vm.authLogin,
            close: _vm.close,
            inputEmail: function(value) {
              _vm.email = value
            },
            inputPassword: function(value) {
              _vm.password = value
            }
          }
        },
        [_vm._t("default")],
        2
      ),
      _vm._v(" "),
      _c(
        "registration",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.checkStep("registration"),
              expression: "checkStep('registration')"
            }
          ],
          attrs: { email: _vm.email, password: _vm.password, check: _vm.check },
          on: {
            setStep: _vm.setStep,
            close: _vm.close,
            inputEmail: function(value) {
              _vm.email = value
            },
            inputPassword: function(value) {
              _vm.password = value
            },
            input: function(value) {
              _vm.check = value
            },
            sendConfirmCode: _vm.sendConfirmCode
          }
        },
        [_vm._t("default")],
        2
      ),
      _vm._v(" "),
      _c("confirm-code", {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.checkStep("confirmCode"),
            expression: "checkStep('confirmCode')"
          }
        ],
        attrs: { codeConfirmed: _vm.codeConfirmed, email: _vm.email },
        on: {
          setStep: _vm.setStep,
          close: _vm.close,
          registration: _vm.registration,
          sendConfirmCode: _vm.sendConfirmCode
        }
      }),
      _vm._v(" "),
      _c("nick-name", {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.checkStep("nickname"),
            expression: "checkStep('nickname')"
          }
        ],
        attrs: { email: _vm.email },
        on: { setStep: _vm.setStep, close: _vm.close }
      }),
      _vm._v(" "),
      _c("congratulation", {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.checkStep("congratulation"),
            expression: "checkStep('congratulation')"
          }
        ],
        on: { setStep: _vm.setStep, close: _vm.close }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/login/ConfirmCodeForm.vue?vue&type=template&id=6962b3ba&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/login/ConfirmCodeForm.vue?vue&type=template&id=6962b3ba&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "slide-fades" } }, [
    _c("div", { staticClass: "login_form" }, [
      _c("div", { staticClass: "login_block" }, [
        _c("div", { staticClass: "logotype" }, [
          _c("img", {
            staticClass: "logotype",
            attrs: { src: "/images/Champs_logotype.svg" }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "login_title" }, [
          _vm._v("\n                Подтверждение почты\n            ")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "login_input d-flex" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.confirmCode,
                expression: "confirmCode"
              }
            ],
            attrs: { type: "text", required: "" },
            domProps: { value: _vm.confirmCode },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.confirmCode = $event.target.value
              }
            }
          }),
          _vm._v(" "),
          _c("span", [_vm._v("Код подтверждения")]),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "question pt-2",
              attrs: {
                type: "button",
                "data-toggle": "tooltip",
                "data-placement": "right",
                title:
                  "Не пришел код? Проверьте папку Спам или попытайтесь отправить еще раз."
              }
            },
            [_c("i", { staticClass: "fas fa-question" })]
          )
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "send", on: { click: _vm.sendRegistrationConfirm } },
          [_vm._v("\n                Отправить\n            ")]
        ),
        _vm._v(" "),
        _vm.successMessage == null
          ? _c("div", {
              staticClass: "send resend",
              class: { disabled: _vm.timer > 0 },
              domProps: {
                innerHTML: _vm._s("Отправить код повторно " + _vm.timerMessage)
              },
              on: { click: _vm.resendConfirmCode }
            })
          : _vm._e(),
        _vm._v(" "),
        _vm.errorMessage !== null
          ? _c("div", { staticClass: "error" }, [
              _vm._v(
                "\n                " +
                  _vm._s(_vm.errorMessage) +
                  "\n            "
              )
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.successMessage !== null
          ? _c("div", { staticClass: "error text-success" }, [
              _vm._v(
                "\n                " +
                  _vm._s(_vm.successMessage) +
                  "\n            "
              )
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("div", { staticClass: "links d-flex" }, [
          _c(
            "div",
            {
              staticClass: "mt-1",
              on: {
                click: function($event) {
                  return _vm.$emit("setStep", "registration")
                }
              }
            },
            [_c("span", [_vm._v("Back")])]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "mt-1", on: { click: _vm.showNickname } }, [
            _c("span", { class: { disabled: !_vm.codeConfirmed } }, [
              _vm._v("Next")
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "closed" }, [
          _c(
            "svg",
            {
              attrs: {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "none"
              },
              on: { click: _vm.close }
            },
            [
              _c("path", {
                attrs: {
                  d:
                    "M8.88392 8.00004L15.8169 1.06698C16.061 0.822882 16.061 0.427133 15.8169 0.18307C15.5728 -0.0609922 15.1771 -0.0610234 14.933 0.18307L7.99998 7.11613L1.06697 0.18307C0.82288 -0.0610234 0.427132 -0.0610234 0.18307 0.18307C-0.060992 0.427164 -0.0610233 0.822914 0.18307 1.06698L7.11608 8L0.18307 14.9331C-0.0610233 15.1772 -0.0610233 15.5729 0.18307 15.817C0.305101 15.939 0.465069 16 0.625037 16C0.785005 16 0.944943 15.939 1.067 15.817L7.99998 8.88394L14.933 15.817C15.055 15.939 15.215 16 15.375 16C15.5349 16 15.6949 15.939 15.8169 15.817C16.061 15.5729 16.061 15.1771 15.8169 14.9331L8.88392 8.00004Z",
                  fill: "#86888A"
                }
              })
            ]
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/login/CongratulationsForm.vue?vue&type=template&id=6799a2c2&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/login/CongratulationsForm.vue?vue&type=template&id=6799a2c2&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "slide-fades" } }, [
    _c("div", { staticClass: "login_form" }, [
      _c("div", { staticClass: "login_block" }, [
        _c("div", { staticClass: "logotype" }, [
          _c("img", {
            staticClass: "logotype",
            attrs: { src: "/images/Champs_logotype.svg" }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "login_title" }, [
          _vm._v(
            "\n                Поздравляем с успешной регестрацией!\n            "
          )
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "send",
            on: {
              click: function($event) {
                return _vm.$emit("setStep", "finish")
              }
            }
          },
          [_vm._v("\n                Играть\n            ")]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "closed",
            on: {
              click: function($event) {
                return _vm.$emit("close")
              }
            }
          },
          [
            _c(
              "svg",
              {
                attrs: {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "16",
                  height: "16",
                  viewBox: "0 0 16 16",
                  fill: "none"
                }
              },
              [
                _c("path", {
                  attrs: {
                    d:
                      "M8.88392 8.00004L15.8169 1.06698C16.061 0.822882 16.061 0.427133 15.8169 0.18307C15.5728 -0.0609922 15.1771 -0.0610234 14.933 0.18307L7.99998 7.11613L1.06697 0.18307C0.82288 -0.0610234 0.427132 -0.0610234 0.18307 0.18307C-0.060992 0.427164 -0.0610233 0.822914 0.18307 1.06698L7.11608 8L0.18307 14.9331C-0.0610233 15.1772 -0.0610233 15.5729 0.18307 15.817C0.305101 15.939 0.465069 16 0.625037 16C0.785005 16 0.944943 15.939 1.067 15.817L7.99998 8.88394L14.933 15.817C15.055 15.939 15.215 16 15.375 16C15.5349 16 15.6949 15.939 15.8169 15.817C16.061 15.5729 16.061 15.1771 15.8169 14.9331L8.88392 8.00004Z",
                    fill: "#86888A"
                  }
                })
              ]
            )
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/login/LoginForm.vue?vue&type=template&id=a796f1d4&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/login/LoginForm.vue?vue&type=template&id=a796f1d4& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "slide-fades" } }, [
    _c("div", { staticClass: "login_form" }, [
      _c("div", { staticClass: "login_block" }, [
        _c("div", { staticClass: "logotype" }, [
          _c("img", {
            staticClass: "logotype",
            attrs: { src: "/images/Champs_logotype.svg" }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "login_title" }, [
          _vm._v("\n                Вход в личный кабинет\n            ")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "login_input" }, [
          _c("input", {
            attrs: { type: "email" },
            on: {
              input: function($event) {
                return _vm.$emit("inputEmail", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _c("span", [_vm._v("Адрес электронной почты")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "login_input" }, [
          _c("input", {
            attrs: { type: "password" },
            on: {
              input: function($event) {
                return _vm.$emit("inputPassword", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _c("span", [_vm._v("Пароль")])
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "send",
            on: {
              click: function($event) {
                return _vm.$emit("authLogin")
              }
            }
          },
          [_vm._v("\n                Войти\n            ")]
        ),
        _vm._v(" "),
        _vm.error
          ? _c("div", { staticClass: "error" }, [
              _vm._v(
                "\n                Неправильный логин или пароль\n            "
              )
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("div", { staticClass: "subtext" }, [
          _vm._v("Или войдите с помощью")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "alternate" }, [_vm._t("default")], 2),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "links",
            on: {
              click: function($event) {
                return _vm.$emit("setStep", "registration")
              }
            }
          },
          [_c("div", [_c("span", [_vm._v("Регистрация")])])]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "closed",
            on: {
              click: function($event) {
                return _vm.$emit("close")
              }
            }
          },
          [
            _c(
              "svg",
              {
                attrs: {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "16",
                  height: "16",
                  viewBox: "0 0 16 16",
                  fill: "none"
                }
              },
              [
                _c("path", {
                  attrs: {
                    d:
                      "M8.88392 8.00004L15.8169 1.06698C16.061 0.822882 16.061 0.427133 15.8169 0.18307C15.5728 -0.0609922 15.1771 -0.0610234 14.933 0.18307L7.99998 7.11613L1.06697 0.18307C0.82288 -0.0610234 0.427132 -0.0610234 0.18307 0.18307C-0.060992 0.427164 -0.0610233 0.822914 0.18307 1.06698L7.11608 8L0.18307 14.9331C-0.0610233 15.1772 -0.0610233 15.5729 0.18307 15.817C0.305101 15.939 0.465069 16 0.625037 16C0.785005 16 0.944943 15.939 1.067 15.817L7.99998 8.88394L14.933 15.817C15.055 15.939 15.215 16 15.375 16C15.5349 16 15.6949 15.939 15.8169 15.817C16.061 15.5729 16.061 15.1771 15.8169 14.9331L8.88392 8.00004Z",
                    fill: "#86888A"
                  }
                })
              ]
            )
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/login/NicknameForm.vue?vue&type=template&id=ebbf19ce&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/login/NicknameForm.vue?vue&type=template&id=ebbf19ce&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "slide-fades" } }, [
    _c("div", { staticClass: "login_form" }, [
      _c("div", { staticClass: "login_block" }, [
        _c("div", { staticClass: "logotype" }, [
          _c("img", {
            staticClass: "logotype",
            attrs: { src: "/images/Champs_logotype.svg" }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "login_title" }, [
          _vm._v("\n                Введите свой никнейм\n            ")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "login_input" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.nickname,
                expression: "nickname"
              }
            ],
            attrs: { type: "text", name: "email", required: "" },
            domProps: { value: _vm.nickname },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.nickname = $event.target.value
              }
            }
          }),
          _vm._v(" "),
          _c("span", [_vm._v("Логин (Nickname)")])
        ]),
        _vm._v(" "),
        _vm.errorMessage !== null
          ? _c("div", { staticClass: "error" }, [
              _vm._v(
                "\n                " +
                  _vm._s(_vm.errorMessage) +
                  "\n            "
              )
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("div", { staticClass: "send", on: { click: _vm.setNickname } }, [
          _vm._v("\n                Завершить регестрацию\n            ")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "closed", on: { click: _vm.close } }, [
          _c(
            "svg",
            {
              attrs: {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "none"
              }
            },
            [
              _c("path", {
                attrs: {
                  d:
                    "M8.88392 8.00004L15.8169 1.06698C16.061 0.822882 16.061 0.427133 15.8169 0.18307C15.5728 -0.0609922 15.1771 -0.0610234 14.933 0.18307L7.99998 7.11613L1.06697 0.18307C0.82288 -0.0610234 0.427132 -0.0610234 0.18307 0.18307C-0.060992 0.427164 -0.0610233 0.822914 0.18307 1.06698L7.11608 8L0.18307 14.9331C-0.0610233 15.1772 -0.0610233 15.5729 0.18307 15.817C0.305101 15.939 0.465069 16 0.625037 16C0.785005 16 0.944943 15.939 1.067 15.817L7.99998 8.88394L14.933 15.817C15.055 15.939 15.215 16 15.375 16C15.5349 16 15.6949 15.939 15.8169 15.817C16.061 15.5729 16.061 15.1771 15.8169 14.9331L8.88392 8.00004Z",
                  fill: "#86888A"
                }
              })
            ]
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/login/RegistrationForm.vue?vue&type=template&id=4d7d08e4&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/login/RegistrationForm.vue?vue&type=template&id=4d7d08e4& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "slide-fades" } }, [
    _c("div", { staticClass: "login_form" }, [
      _c("div", { staticClass: "login_req" }, [
        _c("div", { staticClass: "login_block" }, [
          _c("div", { staticClass: "logotype" }, [
            _c("img", {
              staticClass: "logotype",
              attrs: { src: "/images/Champs_logotype.svg" }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "login_title" }, [
            _vm._v("\n                    Регистрация\n                ")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "login_input" }, [
            _c("input", {
              attrs: { type: "text" },
              domProps: { value: _vm.email },
              on: {
                input: function($event) {
                  return _vm.$emit("inputEmail", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _c("span", [_vm._v("Адрес электронной почты")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "login_input" }, [
            _c("input", {
              attrs: { type: "password" },
              domProps: { value: _vm.password },
              on: {
                input: function($event) {
                  return _vm.$emit("inputPassword", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _c("span", [_vm._v("Пароль")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "login_check" }, [
            _c("label", [
              _c("input", {
                attrs: { type: "checkbox" },
                domProps: { checked: _vm.check },
                on: {
                  change: function($event) {
                    return _vm.$emit("input", $event.target.value)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("span", [
              _c(
                "a",
                { attrs: { href: "/ru/terms-of-use", target: "_blank" } },
                [
                  _vm._v(
                    "Ознакомлен с правилами использования сервиса «Champs»"
                  )
                ]
              )
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "send",
              style: { opacity: _vm.$parent.check ? "1" : ".5" },
              on: { click: _vm.checkIsEmailValid }
            },
            [
              _vm._v(
                "\n                    Зарегистрироваться\n                "
              )
            ]
          ),
          _vm._v(" "),
          _vm.errorMessage !== null
            ? _c("div", { staticClass: "error" }, [
                _vm._v(
                  "\n                    " +
                    _vm._s(_vm.errorMessage) +
                    "\n                "
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("div", { staticClass: "subtext" }, [
            _vm._v("Или войдите с помощью")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "alternate" }, [_vm._t("default")], 2),
          _vm._v(" "),
          _c("div", { staticClass: "links" }, [
            _c("div", [
              _c(
                "span",
                {
                  on: {
                    click: function($event) {
                      return _vm.$emit("setStep", "login")
                    }
                  }
                },
                [_vm._v("Вход в личный кабинет")]
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "closed", on: { click: _vm.close } }, [
            _c(
              "svg",
              {
                attrs: {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "16",
                  height: "16",
                  viewBox: "0 0 16 16",
                  fill: "none"
                }
              },
              [
                _c("path", {
                  attrs: {
                    d:
                      "M8.88392 8.00004L15.8169 1.06698C16.061 0.822882 16.061 0.427133 15.8169 0.18307C15.5728 -0.0609922 15.1771 -0.0610234 14.933 0.18307L7.99998 7.11613L1.06697 0.18307C0.82288 -0.0610234 0.427132 -0.0610234 0.18307 0.18307C-0.060992 0.427164 -0.0610233 0.822914 0.18307 1.06698L7.11608 8L0.18307 14.9331C-0.0610233 15.1772 -0.0610233 15.5729 0.18307 15.817C0.305101 15.939 0.465069 16 0.625037 16C0.785005 16 0.944943 15.939 1.067 15.817L7.99998 8.88394L14.933 15.817C15.055 15.939 15.215 16 15.375 16C15.5349 16 15.6949 15.939 15.8169 15.817C16.061 15.5729 16.061 15.1771 15.8169 14.9331L8.88392 8.00004Z",
                    fill: "#86888A"
                  }
                })
              ]
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "login_req_block" }, [
          _c("div", { staticClass: "item" }, [
            _c("div"),
            _vm._v(" "),
            _c("div", [
              _vm._v(
                "Тренеруйтесь вместе с лучшими игроками в ваших любимых играх"
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "item" }, [
            _c("div"),
            _vm._v(" "),
            _c("div", [_vm._v("Последние новости и события")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "item" }, [
            _c("div"),
            _vm._v(" "),
            _c("div", [_vm._v("Великолепное сообщество")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "item" }, [
            _c("div"),
            _vm._v(" "),
            _c("div", [_vm._v("Трансляции и результаты матчей")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "item" }, [
            _c("div"),
            _vm._v(" "),
            _c("div", [_vm._v("Аналитика от профессионалов")])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/mvp/cabinet/MvpJoinedTeam.vue?vue&type=template&id=36603b1d&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/mvp/cabinet/MvpJoinedTeam.vue?vue&type=template&id=36603b1d&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "grid" }, [
    _c("a", { staticClass: "grid-row" }, [
      _c("div", { staticClass: "data" }, [
        _c("div", { staticClass: "title" }, [
          _c("span", [
            _vm._v(
              "\n                    " +
                _vm._s(_vm.team.name) +
                "\n                "
            )
          ])
        ]),
        _vm._v(" "),
        _vm._m(0)
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "data" }, [
        _c("div", { staticClass: "title" }, [
          _c("span", [
            _vm._v(
              "\n                    " +
                _vm._s(_vm.team.tag) +
                "\n                "
            )
          ])
        ]),
        _vm._v(" "),
        _vm._m(1)
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "data" }, [
        _c("div", { staticClass: "title" }, [
          _c("span", [
            _vm._v(
              "\n                    " +
                _vm._s(_vm.team.members.length) +
                "\n                "
            )
          ])
        ]),
        _vm._v(" "),
        _vm._m(2)
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "data pt-2" }, [
        _c(
          "a",
          {
            staticClass: "btn-orange text-light p-2 pointer",
            attrs: { href: _vm.http.getTeamLink(_vm.team.id) }
          },
          [_vm._v("\n                Посмотреть\n            ")]
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "bottom" }, [
      _c("div", { staticClass: "date" }, [_c("span", [_vm._v("Название")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "bottom" }, [
      _c("div", { staticClass: "date" }, [_c("span", [_vm._v("Тег")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "bottom" }, [
      _c("div", { staticClass: "date" }, [_c("span", [_vm._v("Учасников")])])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/mvp/cabinet/MvpJoinedTeams.vue?vue&type=template&id=cd5a6cb4&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/mvp/cabinet/MvpJoinedTeams.vue?vue&type=template&id=cd5a6cb4&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "events_view" }, [
    _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "component upcoming_events" },
          _vm._l(_vm.teams, function(team, key) {
            return _c("mvp-joined-team", { key: key, attrs: { team: team } })
          }),
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/mvp/cabinet/MvpPage.vue?vue&type=template&id=07ae09b4&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/mvp/cabinet/MvpPage.vue?vue&type=template&id=07ae09b4&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("div", { staticClass: "header mt-3" }, [
        _c("div", { staticClass: "lft" }, [
          _c(
            "a",
            {
              class: { active: _vm.active === "commands" },
              on: {
                click: function($event) {
                  _vm.active = "commands"
                }
              }
            },
            [_vm._v("КОМАНДЫ")]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              class: { active: _vm.active === "tournaments" },
              on: {
                click: function($event) {
                  _vm.active = "tournaments"
                }
              }
            },
            [_vm._v("ТУРНИРЫ")]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              class: { active: _vm.active === "matches" },
              on: {
                click: function($event) {
                  _vm.active = "matches"
                }
              }
            },
            [_vm._v("МАТЧИ")]
          )
        ])
      ]),
      _vm._v(" "),
      _c("MvpTeams")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/mvp/cabinet/MvpTeam.vue?vue&type=template&id=657a43f4&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/mvp/cabinet/MvpTeam.vue?vue&type=template&id=657a43f4& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "card w-50 mr-2 border-radius-0" }, [
    _vm.team === undefined
      ? _c("div", { staticClass: "card-body" }, [
          _c(
            "h5",
            { staticClass: "card-title d-flex justify-content-between" },
            [
              _vm._v("\n            " + _vm._s(_vm.title) + "\n            "),
              _c(
                "span",
                { staticClass: "badge badge-warning border-radius-0" },
                [_vm._v(_vm._s(_vm.type))]
              )
            ]
          ),
          _vm._v(" "),
          _c("p", { staticClass: "card-text" }, [
            _vm._v("\n            " + _vm._s(_vm.description) + "\n        ")
          ]),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "btn-orange text-light p-2 pointer",
              attrs: {
                "data-toggle": "modal",
                "data-target": "#makeComandModal"
              },
              on: {
                click: function($event) {
                  return _vm.$emit("setCapacity", _vm.capacity)
                }
              }
            },
            [
              _vm._v(
                "\n            Создать команду " +
                  _vm._s(_vm.type) +
                  "\n        "
              )
            ]
          )
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.team !== undefined
      ? _c("div", { staticClass: "card-body" }, [
          _c(
            "h5",
            { staticClass: "card-title d-flex justify-content-between" },
            [
              _vm._v(
                "\n            " + _vm._s(_vm.team.name) + "\n            "
              ),
              _c(
                "span",
                { staticClass: "badge badge-warning border-radius-0" },
                [
                  _vm._v(
                    "\n                " + _vm._s(_vm.type) + "\n            "
                  )
                ]
              )
            ]
          ),
          _vm._v(" "),
          _c("p", { staticClass: "card-text" }, [
            _vm._v(" " + _vm._s(_vm.team.members.length) + " учасников")
          ]),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "btn-orange text-light p-2 pointer",
              attrs: { href: _vm.http.getTeamLink(_vm.team.id) }
            },
            [_vm._v("\n            Посмотреть\n        ")]
          )
        ])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/mvp/cabinet/MvpTeamMember.vue?vue&type=template&id=204058ae&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/mvp/cabinet/MvpTeamMember.vue?vue&type=template&id=204058ae& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "grid" }, [
    _c("a", { staticClass: "grid-row" }, [
      _c("div", { staticClass: "logo" }, [
        _vm.member.image !== null
          ? _c("img")
          : _c("img", { attrs: { src: "/images/noLogo.png" } })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "data" }, [
        _c("div", { staticClass: "title" }, [
          _c("span", [
            _vm._v(
              "\n                    " +
                _vm._s(_vm.member.nickname) +
                "\n                "
            )
          ])
        ]),
        _vm._v(" "),
        _vm._m(0)
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "data" }, [
        _c("div", { staticClass: "title" }, [
          _vm.isCaptain
            ? _c("span", [
                _vm._v("\n                    Капитан\n                ")
              ])
            : _c("span", [
                _vm._v("\n                    Игрок\n                ")
              ])
        ]),
        _vm._v(" "),
        _vm._m(1)
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "data" }, [
        _c("div", { staticClass: "title" }, [
          _c("span", [
            _c("a", { attrs: { href: _vm.getSteamLink(_vm.member.steam) } }, [
              _c("img", {
                attrs: { width: "20px", src: "/images/login_steam.svg" }
              })
            ])
          ])
        ]),
        _vm._v(" "),
        _vm._m(2)
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "bottom" }, [
      _c("div", { staticClass: "date" }, [_c("span", [_vm._v("Ник")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "bottom" }, [
      _c("div", { staticClass: "date" }, [_c("span", [_vm._v("Роль")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "bottom" }, [
      _c("div", { staticClass: "date" }, [_c("span", [_vm._v("Стим")])])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/mvp/cabinet/MvpTeamPage.vue?vue&type=template&id=33471d23&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/mvp/cabinet/MvpTeamPage.vue?vue&type=template&id=33471d23& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "header mt-3 d-block" }, [
      _c("div", { staticClass: "lft" }, [
        _c("a", { attrs: { href: _vm.http.getMvpLink() } }, [_vm._v("Назад")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "events_view", attrs: { id: "teamMembers" } }, [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              {
                staticClass: "component upcoming_events",
                attrs: { id: "upcoming_events" }
              },
              [
                _vm._m(0),
                _vm._v(" "),
                _vm._l(_vm.team.members, function(member, key) {
                  return _vm.team.hasOwnProperty("members")
                    ? _c("mvp-team-member", {
                        key: key,
                        attrs: {
                          member: member,
                          "is-captain": _vm.checkMemberIsCaptain(member)
                        }
                      })
                    : _vm._e()
                })
              ],
              2
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row mt-2" }, [
            _vm.isCreator
              ? _c("div", { staticClass: "lft" }, [
                  _c("a", { on: { click: _vm.deleteTeam } }, [
                    _vm._v(
                      "\n                            Удалить команду\n                        "
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass: "btn-orange text-light pointer",
                      on: { click: _vm.showAddModal }
                    },
                    [
                      _c("i", { staticClass: "fas fa-plus" }),
                      _vm._v("  Добавить учасников\n                        ")
                    ]
                  )
                ])
              : _c("div", { staticClass: "lft" }, [
                  _c(
                    "a",
                    {
                      staticClass: "btn-orange text-light pointer",
                      attrs: { href: _vm.http.userLeaveTeamLink(_vm.teamId) }
                    },
                    [
                      _vm._v(
                        "\n                            Покинуть команду\n                        "
                      )
                    ]
                  )
                ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "header" }, [
      _c("div", { staticClass: "round" }, [
        _c("div", [
          _c("img", { attrs: { src: "/images/lamp.svg", alt: "lamp" } })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "title" }, [
        _vm._v(
          "\n                                Участники\n                            "
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/mvp/cabinet/MvpTeams.vue?vue&type=template&id=4d79dbaf&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/mvp/cabinet/MvpTeams.vue?vue&type=template&id=4d79dbaf& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "cont" }, [
    _c("div", { staticClass: "container commands p-0 mt-3" }, [
      _c(
        "div",
        { staticClass: "w-75 d-flex" },
        [
          _c("mvp-team", {
            attrs: {
              title: "Настроен играть серьезно?",
              description:
                "Создай свою команду для туриков 5v5 и врывайся в киберспорт",
              type: "5x5",
              capacity: "5",
              teams: _vm.teams
            },
            on: { setCapacity: _vm.setCapacity }
          }),
          _vm._v(" "),
          _c("mvp-team", {
            attrs: {
              title: "Напарники",
              description:
                "Нет постоянной команды? Позови друга и выносите соперников вместе",
              type: "2x2",
              capacity: "2",
              teams: _vm.teams
            },
            on: { setCapacity: _vm.setCapacity }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "modal fade",
          attrs: {
            id: "makeComandModal",
            tabindex: "-1",
            "aria-labelledby": "exampleModalLabel",
            "aria-hidden": "true"
          }
        },
        [
          _c("div", { staticClass: "modal-dialog" }, [
            _c("div", { staticClass: "modal-content border-radius-0" }, [
              _vm._m(0),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _vm._m(1),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v("Название команды")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.command.name,
                        expression: "command.name"
                      }
                    ],
                    staticClass: "form-control border-radius-0",
                    attrs: { type: "text" },
                    domProps: { value: _vm.command.name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.command, "name", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  !_vm.messages.error.hasOwnProperty("name")
                    ? _c("small", { staticClass: "form-text text-muted" }, [
                        _vm._v(
                          "\n                                Можно латинские буквы и цифры\n                            "
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.messages.error.hasOwnProperty("name")
                    ? _c("small", { staticClass: "form-text text-danger" }, [
                        _vm._v(
                          "\n                                " +
                            _vm._s(_vm.messages.error.name[0]) +
                            "\n                            "
                        )
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v("Тег команды")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.command.tag,
                        expression: "command.tag"
                      }
                    ],
                    staticClass: "form-control border-radius-0 w-50",
                    attrs: { type: "text" },
                    domProps: { value: _vm.command.tag },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.command, "tag", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  !_vm.messages.error.hasOwnProperty("tag")
                    ? _c("small", { staticClass: "form-text text-muted" }, [
                        _vm._v(
                          "\n                                Максимум 6 символов\n                            "
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.messages.error.hasOwnProperty("tag")
                    ? _c("small", { staticClass: "form-text text-danger" }, [
                        _vm._v(
                          "\n                                " +
                            _vm._s(_vm.messages.error.tag[0]) +
                            "\n                            "
                        )
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "text" }, [
                  _vm.messages.success !== null
                    ? _c("p", { staticClass: "text-success" }, [
                        _vm._v(
                          "\n                                " +
                            _vm._s(_vm.messages.success) +
                            "\n                            "
                        )
                      ])
                    : _vm._e()
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "modal-footer justify-content-center" },
                [
                  _c(
                    "a",
                    {
                      staticClass:
                        "btn-orange text-light p-2 text-center pointer w-100",
                      on: { click: _vm.createTeam }
                    },
                    [_vm._v("Создать команду")]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass:
                        "btn-grey pointer text-center text-light border-radius-0 p-2 w-75",
                      attrs: { "data-dismiss": "modal", "aria-label": "Close" }
                    },
                    [_vm._v("Отменить")]
                  )
                ]
              )
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "123" }, [_c("mvp-joined-teams")], 1)
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "h5",
        { staticClass: "modal-title", attrs: { id: "exampleModalLabel" } },
        [_vm._v("Создать команду")]
      ),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "close",
          attrs: { "data-dismiss": "modal", "aria-label": "Close" }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text" }, [
      _c("p", [
        _vm._v(
          "\n                                Придумай название (сможешь поменять потом)\n                            "
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/mvp/invite/MvpInviteTeamPage.vue?vue&type=template&id=19c35502&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/mvp/invite/MvpInviteTeamPage.vue?vue&type=template&id=19c35502& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "events_view", attrs: { id: "teamMembers" } },
    [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            {
              staticClass: "component upcoming_events",
              attrs: { id: "upcoming_events" }
            },
            [
              _c("div", { staticClass: "header" }, [
                _vm._m(0),
                _vm._v(" "),
                _c("div", { staticClass: "title" }, [
                  _vm._v(
                    "\n                        " +
                      _vm._s(_vm.team.name) +
                      "\n                    "
                  )
                ])
              ]),
              _vm._v(" "),
              _vm._l(_vm.team.members, function(member, key) {
                return _vm.team.hasOwnProperty("members")
                  ? _c("mvp-team-member", {
                      key: key,
                      attrs: {
                        member: member,
                        "is-captain": _vm.checkMemberIsCaptain(member)
                      }
                    })
                  : _vm._e()
              })
            ],
            2
          )
        ]),
        _vm._v(" "),
        _vm.isAuthorize && _vm.isFreePlace
          ? _c("div", { staticClass: "row mt-3" }, [
              _c("div", { staticClass: "lft" }, [
                _c(
                  "a",
                  {
                    staticClass: "btn-orange text-light pointer",
                    on: { click: _vm.joinTeam }
                  },
                  [
                    _c("i", { staticClass: "fas fa-plus" }),
                    _vm._v("  Присоеденится\n                ")
                  ]
                )
              ])
            ])
          : _vm._e()
      ]),
      _vm._v(" "),
      _c("login-modal", { attrs: { show: !_vm.isAuthorize } })
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "round" }, [
      _c("div", [
        _c("img", { attrs: { src: "/images/lamp.svg", alt: "lamp" } })
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/mvp/tournaments/MvpMain.vue?vue&type=template&id=0852dfbc&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/mvp/tournaments/MvpMain.vue?vue&type=template&id=0852dfbc& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container p-0 m-0" }, [
    _c("div", { staticClass: "container window-height-80 p-0 m-0" }, [
      _c(
        "div",
        {
          staticClass:
            "row d-flex justify-content-center align-items-center w-100 h-100"
        },
        [
          _c(
            "div",
            { staticClass: "d-flex justify-content-center flex-column" },
            [
              _c("div", { staticClass: "d-flex justify-content-center mb-3" }, [
                _c(
                  "a",
                  {
                    staticClass:
                      "btn-orange text-light p-3 pl-5 pr-5 font-size-23 pointer",
                    on: { click: _vm.showLoginModal }
                  },
                  [_vm._v("Join the Game")]
                )
              ]),
              _vm._v(" "),
              _vm._m(0),
              _vm._v(" "),
              _vm._m(1)
            ]
          )
        ]
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass:
          "row d-flex justify-content-center align-items-center w-100 h-100"
      },
      [
        _c(
          "a",
          {
            staticClass: "btn-orange text-light p-2 pl-3 pr-3 pointer",
            on: { click: _vm.showLoginModal }
          },
          [_vm._v("Join the Game")]
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "w-100 d-flex justify-content-center" }, [
      _c("strong", { staticClass: "text-light font-size-23" }, [
        _vm._v("What we offer")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "w-100 d-flex justify-content-center" }, [
      _c("p", { staticClass: "text-light w-50 font-size-18" }, [
        _vm._v(
          "\n                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n                        Ad consequuntur culpa cupiditate deleniti dicta dignissimos,\n                        distinctio dolor dolores hic ipsa itaque laudantium molestias,\n                        mollitia nostrum, perferendis provident quos sapiente vero!\n                    "
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/mvp/tournaments/MvpTournamentsList.vue?vue&type=template&id=18c1590f&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/mvp/tournaments/MvpTournamentsList.vue?vue&type=template&id=18c1590f& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        {
          staticClass: "component upcoming_events",
          attrs: { id: "upcoming_events" }
        },
        [
          _c("div", { staticClass: "header" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "title" }, [
              _vm._v(
                "\n                    Турниры " +
                  _vm._s(_vm.game) +
                  "\n                "
              )
            ])
          ]),
          _vm._v(" "),
          _vm.load
            ? _c(
                "div",
                {
                  staticClass:
                    "load w-100 h-100 d-flex justify-content-center align-items-center"
                },
                [_c("load")],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm._l(_vm.tournaments, function(tournament) {
            return !_vm.load
              ? _c("div", { staticClass: "grid" }, [
                  _c(
                    "a",
                    {
                      staticClass: "grid-row",
                      attrs: { href: "/ru/mvp/tournament/" + tournament.id }
                    },
                    [
                      _c("div", { staticClass: "logo" }, [
                        _c("img", { attrs: { src: tournament.logo } })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "data" }, [
                        _c("div", { staticClass: "title" }, [
                          _c("span", [
                            _vm._v(
                              _vm._s(tournament.name) +
                                " #" +
                                _vm._s(tournament.number)
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _vm._m(1, true)
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "data" }, [
                        _c("div", { staticClass: "title" }, [
                          _c("span", [_vm._v(_vm._s(tournament.date))])
                        ]),
                        _vm._v(" "),
                        _vm._m(2, true)
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "data" }, [
                        _c("div", { staticClass: "title" }, [
                          _c("span", [_vm._v(_vm._s(tournament.mode))])
                        ]),
                        _vm._v(" "),
                        _vm._m(3, true)
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "data" }, [
                        _c("div", { staticClass: "title" }, [
                          tournament.access
                            ? _c("i", { staticClass: "fas fa-lock-open" })
                            : _c("i", { staticClass: "fas fa-lock" })
                        ]),
                        _vm._v(" "),
                        _vm._m(4, true)
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "data" }, [
                        _c("div", { staticClass: "title" }, [
                          _c("span", [_vm._v(_vm._s(tournament.prize))])
                        ]),
                        _vm._v(" "),
                        _vm._m(5, true)
                      ])
                    ]
                  )
                ])
              : _vm._e()
          })
        ],
        2
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "round" }, [
      _c("div", [
        _c("img", { attrs: { src: "/images/lamp.svg", alt: "lamp" } })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "bottom" }, [
      _c("div", { staticClass: "date" }, [_c("span", [_vm._v("Название")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "bottom" }, [
      _c("div", { staticClass: "date" }, [_c("span", [_vm._v("Дата")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "bottom" }, [
      _c("div", { staticClass: "date" }, [_c("span", [_vm._v("Режим")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "bottom" }, [
      _c("div", { staticClass: "date" }, [_c("span", [_vm._v("Доступ")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "bottom" }, [
      _c("div", { staticClass: "date" }, [_c("span", [_vm._v("Приз")])])
    ])
  }
]
render._withStripped = true



/***/ })

},[["./assets/js/app.js","runtime","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Mb2FkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Mb2FkLnZ1ZT9hYTljIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0xvYWQudnVlPzdkOTUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvTG9hZC52dWU/MDg1MCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Mb2dpbk1vZGFsLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Mb2dpbk1vZGFsLnZ1ZT8xYTc1Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0xvZ2luTW9kYWwudnVlPzkwNTUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4vQ29uZmlybUNvZGVGb3JtLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9sb2dpbi9Db25maXJtQ29kZUZvcm0udnVlPzIxN2QiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4vQ29uZmlybUNvZGVGb3JtLnZ1ZT9hNTI2Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xvZ2luL0NvbmZpcm1Db2RlRm9ybS52dWU/NWJlMSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9sb2dpbi9Db25ncmF0dWxhdGlvbnNGb3JtLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9sb2dpbi9Db25ncmF0dWxhdGlvbnNGb3JtLnZ1ZT8wN2NiIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xvZ2luL0NvbmdyYXR1bGF0aW9uc0Zvcm0udnVlPzY0NDAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4vTG9naW5Gb3JtLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9sb2dpbi9Mb2dpbkZvcm0udnVlP2Y0NDkiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4vTG9naW5Gb3JtLnZ1ZT9lYTMyIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xvZ2luL05pY2tuYW1lRm9ybS52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4vTmlja25hbWVGb3JtLnZ1ZT9kMWQ1Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xvZ2luL05pY2tuYW1lRm9ybS52dWU/OGUzMCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9sb2dpbi9SZWdpc3RyYXRpb25Gb3JtLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9sb2dpbi9SZWdpc3RyYXRpb25Gb3JtLnZ1ZT9mYTZiIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xvZ2luL1JlZ2lzdHJhdGlvbkZvcm0udnVlPzEyYzkiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL2NhYmluZXQvTXZwSm9pbmVkVGVhbS52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL2NhYmluZXQvTXZwSm9pbmVkVGVhbS52dWU/ZGE4NCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tdnAvY2FiaW5ldC9NdnBKb2luZWRUZWFtLnZ1ZT80ZGJmIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL212cC9jYWJpbmV0L012cEpvaW5lZFRlYW1zLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tdnAvY2FiaW5ldC9NdnBKb2luZWRUZWFtcy52dWU/ZTY1NiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tdnAvY2FiaW5ldC9NdnBKb2luZWRUZWFtcy52dWU/NzJkMCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tdnAvY2FiaW5ldC9NdnBQYWdlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tdnAvY2FiaW5ldC9NdnBQYWdlLnZ1ZT80MTg3Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL212cC9jYWJpbmV0L012cFBhZ2UudnVlP2E1MDMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL2NhYmluZXQvTXZwVGVhbS52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL2NhYmluZXQvTXZwVGVhbS52dWU/ZTZhZCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tdnAvY2FiaW5ldC9NdnBUZWFtLnZ1ZT85MDk3Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL212cC9jYWJpbmV0L012cFRlYW1NZW1iZXIudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL212cC9jYWJpbmV0L012cFRlYW1NZW1iZXIudnVlPzM5MmYiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL2NhYmluZXQvTXZwVGVhbU1lbWJlci52dWU/NzRkYSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tdnAvY2FiaW5ldC9NdnBUZWFtUGFnZS52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL2NhYmluZXQvTXZwVGVhbVBhZ2UudnVlPzUwMWYiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL2NhYmluZXQvTXZwVGVhbVBhZ2UudnVlPzc0YzEiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL2NhYmluZXQvTXZwVGVhbXMudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL212cC9jYWJpbmV0L012cFRlYW1zLnZ1ZT83MjBjIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL212cC9jYWJpbmV0L012cFRlYW1zLnZ1ZT9lZmQwIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL212cC9pbnZpdGUvTXZwSW52aXRlVGVhbVBhZ2UudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL212cC9pbnZpdGUvTXZwSW52aXRlVGVhbVBhZ2UudnVlPzNmMjIiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL2ludml0ZS9NdnBJbnZpdGVUZWFtUGFnZS52dWU/Y2M1NSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tdnAvc2VydmljZXMvTXZwU2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tdnAvdG91cm5hbWVudHMvTXZwTWFpbi52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL3RvdXJuYW1lbnRzL012cE1haW4udnVlP2QwNzIiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL3RvdXJuYW1lbnRzL012cE1haW4udnVlP2IxYzAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL3RvdXJuYW1lbnRzL012cFRvdXJuYW1lbnRzTGlzdC52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL3RvdXJuYW1lbnRzL012cFRvdXJuYW1lbnRzTGlzdC52dWU/M2Y0MSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tdnAvdG91cm5hbWVudHMvTXZwVG91cm5hbWVudHNMaXN0LnZ1ZT82NTI5Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy9qcy9jb21wb25lbnRzL0xvYWQudnVlIiwid2VicGFjazovLy9hc3NldHMvanMvY29tcG9uZW50cy9Mb2dpbk1vZGFsLnZ1ZSIsIndlYnBhY2s6Ly8vYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4vQ29uZmlybUNvZGVGb3JtLnZ1ZSIsIndlYnBhY2s6Ly8vYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4vQ29uZ3JhdHVsYXRpb25zRm9ybS52dWUiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xvZ2luL0xvZ2luRm9ybS52dWUiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xvZ2luL05pY2tuYW1lRm9ybS52dWUiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xvZ2luL1JlZ2lzdHJhdGlvbkZvcm0udnVlIiwid2VicGFjazovLy9hc3NldHMvanMvY29tcG9uZW50cy9tdnAvY2FiaW5ldC9NdnBKb2luZWRUZWFtLnZ1ZSIsIndlYnBhY2s6Ly8vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL2NhYmluZXQvTXZwSm9pbmVkVGVhbXMudnVlIiwid2VicGFjazovLy9hc3NldHMvanMvY29tcG9uZW50cy9tdnAvY2FiaW5ldC9NdnBQYWdlLnZ1ZSIsIndlYnBhY2s6Ly8vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL2NhYmluZXQvTXZwVGVhbS52dWUiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy9qcy9jb21wb25lbnRzL212cC9jYWJpbmV0L012cFRlYW1NZW1iZXIudnVlIiwid2VicGFjazovLy9hc3NldHMvanMvY29tcG9uZW50cy9tdnAvY2FiaW5ldC9NdnBUZWFtUGFnZS52dWUiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy9qcy9jb21wb25lbnRzL212cC9jYWJpbmV0L012cFRlYW1zLnZ1ZSIsIndlYnBhY2s6Ly8vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL2ludml0ZS9NdnBJbnZpdGVUZWFtUGFnZS52dWUiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy9qcy9jb21wb25lbnRzL212cC90b3VybmFtZW50cy9NdnBNYWluLnZ1ZSIsIndlYnBhY2s6Ly8vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL3RvdXJuYW1lbnRzL012cFRvdXJuYW1lbnRzTGlzdC52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvTG9hZC52dWU/MzNiYSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9sb2dpbi9Db25maXJtQ29kZUZvcm0udnVlP2MyYTkiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvTG9hZC52dWU/ZTAxNyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Mb2dpbk1vZGFsLnZ1ZT82ZWIwIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xvZ2luL0NvbmZpcm1Db2RlRm9ybS52dWU/MjlmOCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9sb2dpbi9Db25ncmF0dWxhdGlvbnNGb3JtLnZ1ZT8wNmYxIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xvZ2luL0xvZ2luRm9ybS52dWU/Nzk4MyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9sb2dpbi9OaWNrbmFtZUZvcm0udnVlPzg2YmYiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4vUmVnaXN0cmF0aW9uRm9ybS52dWU/NTlmZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tdnAvY2FiaW5ldC9NdnBKb2luZWRUZWFtLnZ1ZT9kNWIzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL212cC9jYWJpbmV0L012cEpvaW5lZFRlYW1zLnZ1ZT85MTI4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL212cC9jYWJpbmV0L012cFBhZ2UudnVlP2RiMGEiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL2NhYmluZXQvTXZwVGVhbS52dWU/YzNkYiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tdnAvY2FiaW5ldC9NdnBUZWFtTWVtYmVyLnZ1ZT82MzdjIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL212cC9jYWJpbmV0L012cFRlYW1QYWdlLnZ1ZT83NTVjIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL212cC9jYWJpbmV0L012cFRlYW1zLnZ1ZT81NDJhIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL212cC9pbnZpdGUvTXZwSW52aXRlVGVhbVBhZ2UudnVlPzU5YTciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL3RvdXJuYW1lbnRzL012cE1haW4udnVlP2ZhM2MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL3RvdXJuYW1lbnRzL012cFRvdXJuYW1lbnRzTGlzdC52dWU/ZmY5OCJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJheGlvcyIsInJlcXVpcmUiLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJjb21tb24iLCJ0b2tlbiIsImRvY3VtZW50IiwiaGVhZCIsInF1ZXJ5U2VsZWN0b3IiLCJfY3NyZl90b2tlbiIsImNvbnRlbnQiLCJjb25zb2xlIiwiZXJyb3IiLCJWdWUiLCJjb21wb25lbnQiLCJNdnBNYWluIiwiTXZwUGFnZSIsIk12cFRlYW1QYWdlIiwiTXZwSW52aXRlVGVhbVBhZ2UiLCJNdnBUb3VybmFtZW50c0xpc3QiLCJMb2dpbk1vZGFsIiwiZWwiLCJwcm92aWRlIiwiaHR0cCIsIk12cFNlcnZpY2UiLCJjb25maWciLCJoZWFkZXIiLCJsb2dpbiIsImRhdGEiLCJzaG93IiwibG9jYXRpb24iLCJwcm90b2NvbCIsImhvc3RuYW1lIiwicGF0aCIsImJhc2VVcmwiLCJjYXBh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LHNCQUFzQjtBQUN2RCxtQ0FBbUMsdUJBQXVCO0FBQzFEO0FBQ0EsdUNBQXVDLGtDQUFrQztBQUN6RSx1Q0FBdUMsNkJBQTZCO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsc0JBQXNCO0FBQ3ZELG1DQUFtQyx1QkFBdUI7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsdUJBQXVCO0FBQzdDO0FBQ0EsbUJBQW1CLFNBQVMsdUNBQXVDLEVBQUU7QUFDckU7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQix3QkFBd0I7QUFDOUMsaUJBQWlCLHNCQUFzQjtBQUN2QztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQix3QkFBd0I7QUFDOUMsaUJBQWlCLHNCQUFzQjtBQUN2QztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQix3QkFBd0I7QUFDOUMsaUJBQWlCLHNCQUFzQjtBQUN2QztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQix3QkFBd0I7QUFDOUMsaUJBQWlCLHNCQUFzQjtBQUN2QztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQix3QkFBd0I7QUFDOUMsaUJBQWlCLHNCQUFzQjtBQUN2QztBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cblxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxuaW1wb3J0ICcuLi9jc3MvYXBwLmNzcyc7XG5pbXBvcnQgTXZwU2VydmljZSBmcm9tIFwiLi9jb21wb25lbnRzL212cC9zZXJ2aWNlcy9NdnBTZXJ2aWNlLmpzXCI7XG5pbXBvcnQgY29uZmlnIGZyb20gXCIuL2NvbmZpZ1wiO1xuaW1wb3J0IE12cFBhZ2UgZnJvbSBcIi4vY29tcG9uZW50cy9tdnAvY2FiaW5ldC9NdnBQYWdlXCI7XG5pbXBvcnQgTXZwVGVhbVBhZ2UgZnJvbSBcIi4vY29tcG9uZW50cy9tdnAvY2FiaW5ldC9NdnBUZWFtUGFnZVwiO1xuaW1wb3J0IE12cEludml0ZVRlYW1QYWdlIGZyb20gXCIuL2NvbXBvbmVudHMvbXZwL2ludml0ZS9NdnBJbnZpdGVUZWFtUGFnZVwiO1xuaW1wb3J0IExvZ2luTW9kYWwgZnJvbSBcIi4vY29tcG9uZW50cy9Mb2dpbk1vZGFsXCI7XG5pbXBvcnQgTXZwTWFpbiBmcm9tIFwiLi9jb21wb25lbnRzL212cC90b3VybmFtZW50cy9NdnBNYWluXCI7XG5pbXBvcnQgTXZwVG91cm5hbWVudHNMaXN0IGZyb20gXCIuL2NvbXBvbmVudHMvbXZwL3RvdXJuYW1lbnRzL012cFRvdXJuYW1lbnRzTGlzdFwiO1xuXG53aW5kb3cuYXhpb3MgPSByZXF1aXJlKCdheGlvcycpO1xud2luZG93LmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydYLVJlcXVlc3RlZC1XaXRoJ10gPSAnWE1MSHR0cFJlcXVlc3QnO1xuXG5sZXQgdG9rZW4gPSBkb2N1bWVudC5oZWFkLnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1cImNzcmYtdG9rZW5cIl0nKTtcblxuaWYgKHRva2VuKSB7XG4gICAgd2luZG93LmF4aW9zLl9jc3JmX3Rva2VuID0gdG9rZW4uY29udGVudDtcbn0gZWxzZSB7XG4gICAgY29uc29sZS5lcnJvcignQ1NSRiB0b2tlbiBub3QgZm91bmQnKTtcbn1cblxuLy8gTmVlZCBqUXVlcnk/IEluc3RhbGwgaXQgd2l0aCBcInlhcm4gYWRkIGpxdWVyeVwiLCB0aGVuIHVuY29tbWVudCB0byBpbXBvcnQgaXQuXG4vLyBpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5WdWUuY29tcG9uZW50KCdtdnAtbWFpbicsIE12cE1haW4pXG5WdWUuY29tcG9uZW50KCdtdnAtcGFnZScsIE12cFBhZ2UpXG5WdWUuY29tcG9uZW50KCdtdnAtdGVhbS1wYWdlJywgTXZwVGVhbVBhZ2UpXG5WdWUuY29tcG9uZW50KCdtdnAtaW52aXRlLXBhZ2UnLCBNdnBJbnZpdGVUZWFtUGFnZSlcblZ1ZS5jb21wb25lbnQoJ212cC10b3VybmFtZW50cy1saXN0JywgTXZwVG91cm5hbWVudHNMaXN0KVxuVnVlLmNvbXBvbmVudCgnbG9naW4tZm9ybScsIExvZ2luTW9kYWwpXG5cbm5ldyBWdWUoe1xuICAgIGVsOiAnI2FwcCcsXG4gICAgcHJvdmlkZToge1xuICAgICAgICBodHRwOiBuZXcgTXZwU2VydmljZShheGlvcyksXG4gICAgICAgIGF4aW9zLFxuICAgICAgICBjb25maWcsXG4gICAgICAgIGhlYWRlclxuICAgIH1cbn0pXG5cbndpbmRvdy5sb2dpbiA9IG5ldyBWdWUoe1xuICAgIGVsOiAnI2xvZ2luJyxcbiAgICBwcm92aWRlOiB7XG4gICAgICAgIGF4aW9zLFxuICAgICAgICBjb25maWdcbiAgICB9LFxuICAgIGRhdGE6IHtcbiAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgfVxufSkiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0xvYWQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUwN2NmNGYyJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0xvYWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Mb2FkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9Mb2FkLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTUwN2NmNGYyJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI1MDdjZjRmMlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvY2hhbXBzcHJvL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzUwN2NmNGYyJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzUwN2NmNGYyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzUwN2NmNGYyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Mb2FkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01MDdjZjRmMiZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc1MDdjZjRmMicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2pzL2NvbXBvbmVudHMvTG9hZC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xvYWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xvYWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS1vbmVPZi0xLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTG9hZC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01MDdjZjRmMiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS1vbmVPZi0xLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTG9hZC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01MDdjZjRmMiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2FkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01MDdjZjRmMiZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTG9naW5Nb2RhbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzY5YzRiYTUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTG9naW5Nb2RhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0xvZ2luTW9kYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvQXBwbGljYXRpb25zL01BTVAvaHRkb2NzL2NoYW1wc3Byby9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCczNjljNGJhNScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCczNjljNGJhNScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCczNjljNGJhNScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTG9naW5Nb2RhbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzY5YzRiYTUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMzY5YzRiYTUnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy9qcy9jb21wb25lbnRzL0xvZ2luTW9kYWwudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2dpbk1vZGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2dpbk1vZGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2dpbk1vZGFsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNjljNGJhNSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQ29uZmlybUNvZGVGb3JtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02OTYyYjNiYSZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Db25maXJtQ29kZUZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Db25maXJtQ29kZUZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0NvbmZpcm1Db2RlRm9ybS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02OTYyYjNiYSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNjk2MmIzYmFcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvQXBwbGljYXRpb25zL01BTVAvaHRkb2NzL2NoYW1wc3Byby9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2OTYyYjNiYScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2OTYyYjNiYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2OTYyYjNiYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQ29uZmlybUNvZGVGb3JtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02OTYyYjNiYSZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2OTYyYjNiYScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4vQ29uZmlybUNvZGVGb3JtLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ29uZmlybUNvZGVGb3JtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Db25maXJtQ29kZUZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ29uZmlybUNvZGVGb3JtLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTY5NjJiM2JhJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Db25maXJtQ29kZUZvcm0udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9Njk2MmIzYmEmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ29uZmlybUNvZGVGb3JtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02OTYyYjNiYSZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQ29uZ3JhdHVsYXRpb25zRm9ybS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Njc5OWEyYzImc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQ29uZ3JhdHVsYXRpb25zRm9ybS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0NvbmdyYXR1bGF0aW9uc0Zvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI2Nzk5YTJjMlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvY2hhbXBzcHJvL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzY3OTlhMmMyJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzY3OTlhMmMyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzY3OTlhMmMyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Db25ncmF0dWxhdGlvbnNGb3JtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02Nzk5YTJjMiZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2Nzk5YTJjMicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4vQ29uZ3JhdHVsYXRpb25zRm9ybS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NvbmdyYXR1bGF0aW9uc0Zvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NvbmdyYXR1bGF0aW9uc0Zvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NvbmdyYXR1bGF0aW9uc0Zvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY3OTlhMmMyJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Mb2dpbkZvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWE3OTZmMWQ0JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0xvZ2luRm9ybS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0xvZ2luRm9ybS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvY2hhbXBzcHJvL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2E3OTZmMWQ0JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2E3OTZmMWQ0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2E3OTZmMWQ0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Mb2dpbkZvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWE3OTZmMWQ0JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2E3OTZmMWQ0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvanMvY29tcG9uZW50cy9sb2dpbi9Mb2dpbkZvcm0udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2dpbkZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xvZ2luRm9ybS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTG9naW5Gb3JtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hNzk2ZjFkNCZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTmlja25hbWVGb3JtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lYmJmMTljZSZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9OaWNrbmFtZUZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9OaWNrbmFtZUZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJlYmJmMTljZVwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvY2hhbXBzcHJvL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2ViYmYxOWNlJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2ViYmYxOWNlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2ViYmYxOWNlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9OaWNrbmFtZUZvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWViYmYxOWNlJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2ViYmYxOWNlJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvanMvY29tcG9uZW50cy9sb2dpbi9OaWNrbmFtZUZvcm0udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9OaWNrbmFtZUZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL05pY2tuYW1lRm9ybS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTmlja25hbWVGb3JtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lYmJmMTljZSZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vUmVnaXN0cmF0aW9uRm9ybS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGQ3ZDA4ZTQmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUmVnaXN0cmF0aW9uRm9ybS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1JlZ2lzdHJhdGlvbkZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvQXBwbGljYXRpb25zL01BTVAvaHRkb2NzL2NoYW1wc3Byby9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc0ZDdkMDhlNCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc0ZDdkMDhlNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc0ZDdkMDhlNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vUmVnaXN0cmF0aW9uRm9ybS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGQ3ZDA4ZTQmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNGQ3ZDA4ZTQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy9qcy9jb21wb25lbnRzL2xvZ2luL1JlZ2lzdHJhdGlvbkZvcm0udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9SZWdpc3RyYXRpb25Gb3JtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9SZWdpc3RyYXRpb25Gb3JtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9SZWdpc3RyYXRpb25Gb3JtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00ZDdkMDhlNCZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTXZwSm9pbmVkVGVhbS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzY2MDNiMWQmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTXZwSm9pbmVkVGVhbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL012cEpvaW5lZFRlYW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIzNjYwM2IxZFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvY2hhbXBzcHJvL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzM2NjAzYjFkJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzM2NjAzYjFkJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzM2NjAzYjFkJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9NdnBKb2luZWRUZWFtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNjYwM2IxZCZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCczNjYwM2IxZCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL2NhYmluZXQvTXZwSm9pbmVkVGVhbS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL012cEpvaW5lZFRlYW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL012cEpvaW5lZFRlYW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL012cEpvaW5lZFRlYW0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM2NjAzYjFkJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9NdnBKb2luZWRUZWFtcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Y2Q1YTZjYjQmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTXZwSm9pbmVkVGVhbXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9NdnBKb2luZWRUZWFtcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImNkNWE2Y2I0XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL0FwcGxpY2F0aW9ucy9NQU1QL2h0ZG9jcy9jaGFtcHNwcm8vbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnY2Q1YTZjYjQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnY2Q1YTZjYjQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnY2Q1YTZjYjQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL012cEpvaW5lZFRlYW1zLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jZDVhNmNiNCZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdjZDVhNmNiNCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL2NhYmluZXQvTXZwSm9pbmVkVGVhbXMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NdnBKb2luZWRUZWFtcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTXZwSm9pbmVkVGVhbXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL012cEpvaW5lZFRlYW1zLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jZDVhNmNiNCZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTXZwUGFnZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDdhZTA5YjQmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTXZwUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL012cFBhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIwN2FlMDliNFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvY2hhbXBzcHJvL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzA3YWUwOWI0JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzA3YWUwOWI0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzA3YWUwOWI0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9NdnBQYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wN2FlMDliNCZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcwN2FlMDliNCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL2NhYmluZXQvTXZwUGFnZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL012cFBhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL012cFBhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL012cFBhZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA3YWUwOWI0JnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9NdnBUZWFtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NTdhNDNmNCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9NdnBUZWFtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vTXZwVGVhbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvY2hhbXBzcHJvL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzY1N2E0M2Y0JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzY1N2E0M2Y0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzY1N2E0M2Y0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9NdnBUZWFtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NTdhNDNmNCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2NTdhNDNmNCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL2NhYmluZXQvTXZwVGVhbS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL012cFRlYW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL012cFRlYW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL012cFRlYW0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY1N2E0M2Y0JlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9NdnBUZWFtTWVtYmVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yMDQwNThhZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9NdnBUZWFtTWVtYmVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vTXZwVGVhbU1lbWJlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvY2hhbXBzcHJvL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzIwNDA1OGFlJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzIwNDA1OGFlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzIwNDA1OGFlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9NdnBUZWFtTWVtYmVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yMDQwNThhZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcyMDQwNThhZScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL2NhYmluZXQvTXZwVGVhbU1lbWJlci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL012cFRlYW1NZW1iZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL012cFRlYW1NZW1iZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL012cFRlYW1NZW1iZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTIwNDA1OGFlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9NdnBUZWFtUGFnZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzM0NzFkMjMmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTXZwVGVhbVBhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9NdnBUZWFtUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvY2hhbXBzcHJvL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzMzNDcxZDIzJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzMzNDcxZDIzJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzMzNDcxZDIzJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9NdnBUZWFtUGFnZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzM0NzFkMjMmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMzM0NzFkMjMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy9qcy9jb21wb25lbnRzL212cC9jYWJpbmV0L012cFRlYW1QYWdlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTXZwVGVhbVBhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL012cFRlYW1QYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NdnBUZWFtUGFnZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzM0NzFkMjMmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL012cFRlYW1zLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00ZDc5ZGJhZiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9NdnBUZWFtcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL012cFRlYW1zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL0FwcGxpY2F0aW9ucy9NQU1QL2h0ZG9jcy9jaGFtcHNwcm8vbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNGQ3OWRiYWYnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNGQ3OWRiYWYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNGQ3OWRiYWYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL012cFRlYW1zLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00ZDc5ZGJhZiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0ZDc5ZGJhZicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL2NhYmluZXQvTXZwVGVhbXMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NdnBUZWFtcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTXZwVGVhbXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL012cFRlYW1zLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00ZDc5ZGJhZiZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTXZwSW52aXRlVGVhbVBhZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE5YzM1NTAyJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL012cEludml0ZVRlYW1QYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vTXZwSW52aXRlVGVhbVBhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvQXBwbGljYXRpb25zL01BTVAvaHRkb2NzL2NoYW1wc3Byby9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcxOWMzNTUwMicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcxOWMzNTUwMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcxOWMzNTUwMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTXZwSW52aXRlVGVhbVBhZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE5YzM1NTAyJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzE5YzM1NTAyJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvanMvY29tcG9uZW50cy9tdnAvaW52aXRlL012cEludml0ZVRlYW1QYWdlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTXZwSW52aXRlVGVhbVBhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL012cEludml0ZVRlYW1QYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NdnBJbnZpdGVUZWFtUGFnZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTljMzU1MDImXCIiLCJjbGFzcyBNdnBTZXJ2aWNlIHtcblxuICAgIGJhc2VVcmwgPSBgJHt3aW5kb3cubG9jYXRpb24ucHJvdG9jb2x9Ly8ke3dpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZX0vYDtcblxuICAgIGNvbnN0cnVjdG9yKGF4aW9zKSB7XG4gICAgICAgIHRoaXMuYXhpb3MgPSBheGlvc1xuICAgIH1cblxuICAgIHVybCA9IHBhdGggPT4ge1xuICAgICAgICByZXR1cm4gYCR7dGhpcy5iYXNlVXJsfXJ1LyR7cGF0aH1gO1xuICAgIH1cblxuICAgIGNyZWF0ZU12cFRlYW0gPSBhc3luYyAoY2FwYWNpdHksIG5hbWUsIHRhZykgPT4ge1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5heGlvcy5wb3N0KHRoaXMudXJsKCd1c2VyL212cC9jcmVhdGUvdGVhbScpLCB7XG4gICAgICAgICAgICBjYXBhY2l0eSwgbmFtZSwgdGFnXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZ2V0VXNlclRlYW1zID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5heGlvcy5wb3N0KHRoaXMudXJsKCd1c2VyL212cC9nZXQvdGVhbXMnKSlcbiAgICB9XG5cbiAgICBnZXRUZWFtTGluayA9IChpZCkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy51cmwoYHVzZXIvbXZwL3RlYW0vJHtpZH1gKVxuICAgIH1cblxuICAgIGdldE12cExpbmsgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnVybCgndXNlci9tdnAvJylcbiAgICB9XG5cbiAgICBnZXRNdnBUZWFtID0gYXN5bmMgaWQgPT4ge1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5heGlvcy5wb3N0KHRoaXMudXJsKGBnZXQvdXNlci9tdnAvdGVhbS8ke2lkfWApKVxuICAgIH1cblxuICAgIGRlbGV0ZU12cFRlYW0gPSBhc3luYyBpZCA9PiB7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmF4aW9zLnBvc3QodGhpcy51cmwoYGRlbGV0ZS91c2VyL212cC90ZWFtLyR7aWR9YCkpXG4gICAgfVxuXG4gICAgZ2V0VGVhbUludml0ZVRva2VuID0gYXN5bmMgaWQgPT4ge1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5heGlvcy5wb3N0KHRoaXMudXJsKGBtdnAvdGVhbS9nZXQvaW52aXRlLyR7aWR9YCkpXG4gICAgfVxuXG4gICAgcmVsb2FkVGVhbUludml0ZVRva2VuID0gYXN5bmMgaWQgPT4ge1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5heGlvcy5wb3N0KHRoaXMudXJsKGBtdnAvdGVhbS9yZWxvYWQvaW52aXRlLyR7aWR9YCkpXG4gICAgfVxuXG4gICAgZ2V0SW52aXRlVG9UZWFtTGluayA9IChpZCwgdG9rZW4pID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXJsKGBtdnAvaW52aXRlLyR7aWR9LyR7dG9rZW59YClcbiAgICB9XG5cbiAgICBnZXRBdXRoVXNlciA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuYXhpb3MucG9zdCh0aGlzLnVybCgnZ2V0L2F1dGgnKSlcbiAgICB9XG5cbiAgICBqb2luTWVtYmVyVG9UZWFtID0gYXN5bmMgaWQgPT4ge1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5heGlvcy5wb3N0KHRoaXMudXJsKGBtdnAvam9pbi90by90ZWFtLyR7aWR9YCkpXG4gICAgfVxuXG4gICAgZ2V0VXNlckpvaW5lZFRlYW1zID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5heGlvcy5wb3N0KHRoaXMudXJsKGB1c2VyL212cC9nZXQvam9pbmVkL3RlYW1zL2ApKVxuICAgIH1cblxuICAgIHVzZXJMZWF2ZVRlYW1MaW5rID0gaWQgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy51cmwoYHVzZXIvbXZwL2xlYXZlL3RlYW0vJHtpZH1gKVxuICAgIH1cblxuICAgIGdldFRvdXJuYW1lbnRzQnlHYW1lID0gYXN5bmMgZ2FtZSA9PiB7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmF4aW9zLnBvc3QodGhpcy51cmwoYG12cC9hamF4L3RvdXJuYW1lbnRzLyR7Z2FtZX1gKSlcbiAgICB9XG5cbiAgICBnZXRQcm9maWxlTGluayA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXJsKGB1c2VyL3NldHRpbmdzYClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE12cFNlcnZpY2U7IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9NdnBNYWluLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wODUyZGZiYyZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9NdnBNYWluLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vTXZwTWFpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvY2hhbXBzcHJvL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzA4NTJkZmJjJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzA4NTJkZmJjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzA4NTJkZmJjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9NdnBNYWluLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wODUyZGZiYyZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcwODUyZGZiYycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL3RvdXJuYW1lbnRzL012cE1haW4udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NdnBNYWluLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NdnBNYWluLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NdnBNYWluLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wODUyZGZiYyZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTXZwVG91cm5hbWVudHNMaXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xOGMxNTkwZiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9NdnBUb3VybmFtZW50c0xpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9NdnBUb3VybmFtZW50c0xpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvQXBwbGljYXRpb25zL01BTVAvaHRkb2NzL2NoYW1wc3Byby9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcxOGMxNTkwZicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcxOGMxNTkwZicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcxOGMxNTkwZicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTXZwVG91cm5hbWVudHNMaXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xOGMxNTkwZiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcxOGMxNTkwZicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL3RvdXJuYW1lbnRzL012cFRvdXJuYW1lbnRzTGlzdC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL012cFRvdXJuYW1lbnRzTGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTXZwVG91cm5hbWVudHNMaXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NdnBUb3VybmFtZW50c0xpc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE4YzE1OTBmJlwiIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIFNURUFNX0xPR0lOX0xJTks6ICdodHRwczovL3N0ZWFtY29tbXVuaXR5LmNvbS9vcGVuaWQvbG9naW4/b3BlbmlkLm5zPWh0dHAlM0ElMkYlMkZzcGVjcy5vcGVuaWQubmV0JTJGYXV0aCUyRjIuMCZvcGVuaWQubW9kZT1jaGVja2lkX3NldHVwJm9wZW5pZC5yZXR1cm5fdG89aHR0cHMlM0ElMkYlMkZjaGFtcHMucHJvJTJGcnUlMkZvYXV0aCUyRnN0ZWFtJTNGc3RhdGU9c3RlYW0mb3BlbmlkLnJlYWxtPWh0dHBzJTNBJTJGJTJGY2hhbXBzLnBybyUyRnJ1JTJGb2F1dGglMkZzdGVhbSZvcGVuaWQubnMuc3JlZz1odHRwJTNBJTJGJTJGb3BlbmlkLm5ldCUyRmV4dGVuc2lvbnMlMkZzcmVnJTJGMS4xJm9wZW5pZC5jbGFpbWVkX2lkPWh0dHAlM0ElMkYlMkZzcGVjcy5vcGVuaWQubmV0JTJGYXV0aCUyRjIuMCUyRmlkZW50aWZpZXJfc2VsZWN0Jm9wZW5pZC5pZGVudGl0eT1odHRwJTNBJTJGJTJGc3BlY3Mub3BlbmlkLm5ldCUyRmF1dGglMkYyLjAlMkZpZGVudGlmaWVyX3NlbGVjdCcsXG59IiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJsb2FkaW5naW8tc3Bpbm5lci1nZWFyLW10cGh3Z295NzllXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJsZGlvLXJ3dXZhcnZucDFzXCI+XG4gICAgICAgICAgICA8ZGl2PjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiBcIkxvYWRcIlxuICAgIH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuICAgIEBrZXlmcmFtZXMgbGRpby1yd3V2YXJ2bnAxcyB7XG4gICAgICAgIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZykgfVxuICAgICAgICA1MCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgyMi41ZGVnKSB9XG4gICAgICAgIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgfVxuICAgIH1cbiAgICAubGRpby1yd3V2YXJ2bnAxcyA+IGRpdiB7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDEwMHB4IDEwMHB4O1xuICAgICAgICBhbmltYXRpb246IGxkaW8tcnd1dmFydm5wMXMgMC4ycyBpbmZpbml0ZSBsaW5lYXI7XG4gICAgfVxuICAgIC5sZGlvLXJ3dXZhcnZucDFzID4gZGl2IGRpdiB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDIycHg7XG4gICAgICAgIGhlaWdodDogMTUycHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZjg1MDA7XG4gICAgICAgIGxlZnQ6IDEwMHB4O1xuICAgICAgICB0b3A6IDEwMHB4O1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuICAgIH1cbiAgICAubGRpby1yd3V2YXJ2bnAxcyA+IGRpdiBkaXY6bnRoLWNoaWxkKDEpIHtcbiAgICAgICAgd2lkdGg6IDEyMHB4O1xuICAgICAgICBoZWlnaHQ6IDEyMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgfVxuICAgIC5sZGlvLXJ3dXZhcnZucDFzID4gZGl2IGRpdjpudGgtY2hpbGQoNikge1xuICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgfS5sZGlvLXJ3dXZhcnZucDFzID4gZGl2IGRpdjpudGgtY2hpbGQoMykge1xuICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKSByb3RhdGUoNDVkZWcpXG4gICAgIH0ubGRpby1yd3V2YXJ2bnAxcyA+IGRpdiBkaXY6bnRoLWNoaWxkKDQpIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpIHJvdGF0ZSg5MGRlZylcbiAgICAgIH0ubGRpby1yd3V2YXJ2bnAxcyA+IGRpdiBkaXY6bnRoLWNoaWxkKDUpIHtcbiAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKSByb3RhdGUoMTM1ZGVnKVxuICAgICAgIH1cbiAgICAubG9hZGluZ2lvLXNwaW5uZXItZ2Vhci1tdHBod2dveTc5ZSB7XG4gICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIH1cbiAgICAubGRpby1yd3V2YXJ2bnAxcyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApIHNjYWxlKDEpO1xuICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMDsgLyogc2VlIG5vdGUgYWJvdmUgKi9cbiAgICB9XG4gICAgLmxkaW8tcnd1dmFydm5wMXMgZGl2IHsgYm94LXNpemluZzogY29udGVudC1ib3g7IH1cbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJzbGlkZXNcIj5cbiAgICAgICAgPGxvZ2luXG4gICAgICAgICAgICAgICAgdi1zaG93PVwiY2hlY2tTdGVwKCdsb2dpbicpXCJcbiAgICAgICAgICAgICAgICBAc2V0U3RlcD1cInNldFN0ZXBcIlxuICAgICAgICAgICAgICAgIEBhdXRoTG9naW49XCJhdXRoTG9naW5cIlxuICAgICAgICAgICAgICAgIEBjbG9zZT1cImNsb3NlXCJcbiAgICAgICAgICAgICAgICBAaW5wdXRFbWFpbD1cIih2YWx1ZSkgPT4ge2VtYWlsID0gdmFsdWU7fVwiXG4gICAgICAgICAgICAgICAgQGlucHV0UGFzc3dvcmQ9XCIodmFsdWUpID0+IHtwYXNzd29yZCA9IHZhbHVlO31cIlxuICAgICAgICAgICAgICAgIDplcnJvcj1cImVycm9yXCJcbiAgICAgICAgICAgICAgICA6ZW1haWw9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgOnBhc3N3b3JkPVwicGFzc3dvcmRcIj5cbiAgICAgICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgICAgPC9sb2dpbj5cbiAgICAgICAgPHJlZ2lzdHJhdGlvblxuICAgICAgICAgICAgICAgIHYtc2hvdz1cImNoZWNrU3RlcCgncmVnaXN0cmF0aW9uJylcIlxuICAgICAgICAgICAgICAgIEBzZXRTdGVwPVwic2V0U3RlcFwiXG4gICAgICAgICAgICAgICAgQGNsb3NlPVwiY2xvc2VcIlxuICAgICAgICAgICAgICAgIEBpbnB1dEVtYWlsPVwiKHZhbHVlKSA9PiB7ZW1haWwgPSB2YWx1ZX1cIlxuICAgICAgICAgICAgICAgIEBpbnB1dFBhc3N3b3JkPVwiKHZhbHVlKSA9PiB7cGFzc3dvcmQgPSB2YWx1ZX1cIlxuICAgICAgICAgICAgICAgIEBpbnB1dD1cIih2YWx1ZSkgPT4ge2NoZWNrID0gdmFsdWV9XCJcbiAgICAgICAgICAgICAgICBAc2VuZENvbmZpcm1Db2RlPVwic2VuZENvbmZpcm1Db2RlXCJcbiAgICAgICAgICAgICAgICA6ZW1haWw9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgOnBhc3N3b3JkPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIDpjaGVjaz1cImNoZWNrXCI+XG4gICAgICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICAgIDwvcmVnaXN0cmF0aW9uPlxuICAgICAgICA8Y29uZmlybS1jb2RlXG4gICAgICAgICAgICAgICAgdi1zaG93PVwiY2hlY2tTdGVwKCdjb25maXJtQ29kZScpXCJcbiAgICAgICAgICAgICAgICBAc2V0U3RlcD1cInNldFN0ZXBcIlxuICAgICAgICAgICAgICAgIEBjbG9zZT1cImNsb3NlXCJcbiAgICAgICAgICAgICAgICBAcmVnaXN0cmF0aW9uPVwicmVnaXN0cmF0aW9uXCJcbiAgICAgICAgICAgICAgICBAc2VuZENvbmZpcm1Db2RlPVwic2VuZENvbmZpcm1Db2RlXCJcbiAgICAgICAgICAgICAgICA6Y29kZUNvbmZpcm1lZD1cImNvZGVDb25maXJtZWRcIlxuICAgICAgICAgICAgICAgIDplbWFpbD1cImVtYWlsXCI+XG4gICAgICAgIDwvY29uZmlybS1jb2RlPlxuICAgICAgICA8bmljay1uYW1lXG4gICAgICAgICAgICAgICAgdi1zaG93PVwiY2hlY2tTdGVwKCduaWNrbmFtZScpXCJcbiAgICAgICAgICAgICAgICBAc2V0U3RlcD1cInNldFN0ZXBcIlxuICAgICAgICAgICAgICAgIEBjbG9zZT1cImNsb3NlXCJcbiAgICAgICAgICAgICAgICA6ZW1haWw9XCJlbWFpbFwiPlxuICAgICAgICA8L25pY2stbmFtZT5cbiAgICAgICAgPGNvbmdyYXR1bGF0aW9uXG4gICAgICAgICAgICAgICAgdi1zaG93PVwiY2hlY2tTdGVwKCdjb25ncmF0dWxhdGlvbicpXCJcbiAgICAgICAgICAgICAgICBAc2V0U3RlcD1cInNldFN0ZXBcIlxuICAgICAgICAgICAgICAgIEBjbG9zZT1cImNsb3NlXCI+XG4gICAgICAgIDwvY29uZ3JhdHVsYXRpb24+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBOaWNrbmFtZUZvcm0gZnJvbSBcIi4vbG9naW4vTmlja25hbWVGb3JtXCI7XG4gICAgaW1wb3J0IENvbmZpcm1Db2RlRm9ybSBmcm9tIFwiLi9sb2dpbi9Db25maXJtQ29kZUZvcm1cIjtcbiAgICBpbXBvcnQgUmVnaXN0cmF0aW9uRm9ybSBmcm9tIFwiLi9sb2dpbi9SZWdpc3RyYXRpb25Gb3JtXCI7XG4gICAgaW1wb3J0IExvZ2luRm9ybSBmcm9tIFwiLi9sb2dpbi9Mb2dpbkZvcm1cIjtcbiAgICBpbXBvcnQgQ29uZ3JhdHVsYXRpb25zRm9ybSBmcm9tIFwiLi9sb2dpbi9Db25ncmF0dWxhdGlvbnNGb3JtXCI7XG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6IFwiTG9naW5Nb2RhbFwiLFxuICAgICAgICBpbmplY3Q6IFtcbiAgICAgICAgICAgICdheGlvcycsXG4gICAgICAgICAgICAnY29uZmlnJ1xuICAgICAgICBdLFxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgc2hvdzogQm9vbGVhbixcbiAgICAgICAgICAgIHJlZGlyZWN0OiB7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDogbnVsbFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNob3dGaXJzdDoge1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICdsb2dpbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGEoKXtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY29uc29sZTogY29uc29sZSxcbiAgICAgICAgICAgICAgICBlcnJvcjogZmFsc2UsXG4gICAgICAgICAgICAgICAgc3RlcDogJ3JlZ2lzdHJhdGlvbicsXG4gICAgICAgICAgICAgICAgZW1haWw6IG51bGwsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IG51bGwsXG4gICAgICAgICAgICAgICAgY2hlY2s6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNvbmZpcm1Db2RlOiBudWxsLFxuICAgICAgICAgICAgICAgIGNvZGVDb25maXJtZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogbnVsbCxcbiAgICAgICAgICAgICAgICBzdWNjZXNzTWVzc2FnZTogbnVsbCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29tcG9uZW50czoge1xuICAgICAgICAgICAgJ25pY2stbmFtZSc6IE5pY2tuYW1lRm9ybSxcbiAgICAgICAgICAgICdjb25maXJtLWNvZGUnOiBDb25maXJtQ29kZUZvcm0sXG4gICAgICAgICAgICAncmVnaXN0cmF0aW9uJzogUmVnaXN0cmF0aW9uRm9ybSxcbiAgICAgICAgICAgICdsb2dpbic6IExvZ2luRm9ybSxcbiAgICAgICAgICAgICdjb25ncmF0dWxhdGlvbic6IENvbmdyYXR1bGF0aW9uc0Zvcm1cbiAgICAgICAgfSxcbiAgICAgICAgd2F0Y2g6IHtcbiAgICAgICAgICAgIHNob3coKXtcbiAgICAgICAgICAgICAgICB0aGlzLnN0ZXAgPSB0aGlzLnNob3dGaXJzdDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdGVwKG5ld1N0ZXApe1xuICAgICAgICAgICAgICAgIGlmIChuZXdTdGVwID09PSAnZmluaXNoJyl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0aExvZ2luKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBzZXRTdGVwKHN0ZXApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0ZXAgPSBzdGVwO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGF1dGhMb2dpbigpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcxMjMnKVxuICAgICAgICAgICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuXG4gICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdlbWFpbCcsIHRoaXMuZW1haWwpO1xuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgncGFzc3dvcmQnLCB0aGlzLnBhc3N3b3JkKTtcbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ19jc3JmX3Rva2VuJywgdGhpcy5heGlvcy5fY3NyZl90b2tlbik7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmF4aW9zLnBvc3QoJy9ydS9sb2dpbicsIGZvcm1EYXRhKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmRhdGEuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucmVkaXJlY3QgIT09IG51bGwpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uYXNzaWduKHRoaXMucmVkaXJlY3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVnaXN0cmF0aW9uKCl7XG4gICAgICAgICAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcblxuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgndXNlcltlbWFpbF0nLCB0aGlzLmVtYWlsKTtcbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3VzZXJbcGFzc3dvcmRdW2ZpcnN0XScsIHRoaXMucGFzc3dvcmQpO1xuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgndXNlcltwYXNzd29yZF1bc2Vjb25kXScsIHRoaXMucGFzc3dvcmQpO1xuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnX2NzcmZfdG9rZW4nLCB0aGlzLmF4aW9zLl9jc3JmX3Rva2VuKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuYXhpb3MucG9zdCgnL3J1L3JlZ2lzdHJhdGlvbicsIGZvcm1EYXRhKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmRhdGEuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNsb3NlKCl7XG4gICAgICAgICAgICAgICAgdGhpcy4kcGFyZW50LnNob3cgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3cgPSBmYWxzZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaGVja1N0ZXAoc3RlcCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2hvdyAmJiB0aGlzLnN0ZXAgPT09IHN0ZXA7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2VuZENvbmZpcm1Db2RlKCl7XG4gICAgICAgICAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2VtYWlsJywgdGhpcy5lbWFpbCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmF4aW9zLnBvc3QoJy9ydS9nZW5lcmF0ZS9jb25maXJtL2NvZGUnLCBmb3JtRGF0YSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY29udGVudClcbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cbiAgICA8dHJhbnNpdGlvbiBuYW1lPVwic2xpZGUtZmFkZXNcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImxvZ2luX2Zvcm1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbl9ibG9ja1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2dvdHlwZVwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvQ2hhbXBzX2xvZ290eXBlLnN2Z1wiIGNsYXNzPVwibG9nb3R5cGVcIi8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvZ2luX3RpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgINCf0L7QtNGC0LLQtdGA0LbQtNC10L3QuNC1INC/0L7Rh9GC0YtcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW5faW5wdXQgZC1mbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHJlcXVpcmVkIHYtbW9kZWw9XCJjb25maXJtQ29kZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+0JrQvtC0INC/0L7QtNGC0LLQtdGA0LbQtNC10L3QuNGPPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicXVlc3Rpb24gcHQtMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXBsYWNlbWVudD1cInJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cItCd0LUg0L/RgNC40YjQtdC7INC60L7QtD8g0J/RgNC+0LLQtdGA0YzRgtC1INC/0LDQv9C60YMg0KHQv9Cw0Lwg0LjQu9C4INC/0L7Qv9GL0YLQsNC50YLQtdGB0Ywg0L7RgtC/0YDQsNCy0LjRgtGMINC10YnQtSDRgNCw0LcuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtcXVlc3Rpb25cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZW5kXCIgQGNsaWNrPVwic2VuZFJlZ2lzdHJhdGlvbkNvbmZpcm1cIj5cbiAgICAgICAgICAgICAgICAgICAg0J7RgtC/0YDQsNCy0LjRgtGMXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlbmQgcmVzZW5kXCJcbiAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJzdWNjZXNzTWVzc2FnZSA9PSBudWxsXCJcbiAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cInJlc2VuZENvbmZpcm1Db2RlXCJcbiAgICAgICAgICAgICAgICAgICAgIHYtaHRtbD1cIifQntGC0L/RgNCw0LLQuNGC0Ywg0LrQvtC0INC/0L7QstGC0L7RgNC90L4gJyArIHRpbWVyTWVzc2FnZVwiXG4gICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ZGlzYWJsZWQ6IHRpbWVyID4gMH1cIj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXJyb3JcIiB2LWlmPVwiZXJyb3JNZXNzYWdlICE9PSBudWxsXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7IGVycm9yTWVzc2FnZSB9fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlcnJvciB0ZXh0LXN1Y2Nlc3NcIiB2LWlmPVwic3VjY2Vzc01lc3NhZ2UgIT09IG51bGxcIj5cbiAgICAgICAgICAgICAgICAgICAge3sgc3VjY2Vzc01lc3NhZ2UgfX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlua3MgZC1mbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtdC0xXCIgQGNsaWNrPVwiJGVtaXQoJ3NldFN0ZXAnLCAncmVnaXN0cmF0aW9uJylcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkJhY2s8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXQtMVwiICBAY2xpY2s9XCJzaG93Tmlja25hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIDpjbGFzcz1cIntkaXNhYmxlZDogIWNvZGVDb25maXJtZWR9XCI+TmV4dDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNsb3NlZFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3ZnIEBjbGljaz1cImNsb3NlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgdmlld0JveD1cIjAgMCAxNiAxNlwiIGZpbGw9XCJub25lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTguODgzOTIgOC4wMDAwNEwxNS44MTY5IDEuMDY2OThDMTYuMDYxIDAuODIyODgyIDE2LjA2MSAwLjQyNzEzMyAxNS44MTY5IDAuMTgzMDdDMTUuNTcyOCAtMC4wNjA5OTIyIDE1LjE3NzEgLTAuMDYxMDIzNCAxNC45MzMgMC4xODMwN0w3Ljk5OTk4IDcuMTE2MTNMMS4wNjY5NyAwLjE4MzA3QzAuODIyODggLTAuMDYxMDIzNCAwLjQyNzEzMiAtMC4wNjEwMjM0IDAuMTgzMDcgMC4xODMwN0MtMC4wNjA5OTIgMC40MjcxNjQgLTAuMDYxMDIzMyAwLjgyMjkxNCAwLjE4MzA3IDEuMDY2OThMNy4xMTYwOCA4TDAuMTgzMDcgMTQuOTMzMUMtMC4wNjEwMjMzIDE1LjE3NzIgLTAuMDYxMDIzMyAxNS41NzI5IDAuMTgzMDcgMTUuODE3QzAuMzA1MTAxIDE1LjkzOSAwLjQ2NTA2OSAxNiAwLjYyNTAzNyAxNkMwLjc4NTAwNSAxNiAwLjk0NDk0MyAxNS45MzkgMS4wNjcgMTUuODE3TDcuOTk5OTggOC44ODM5NEwxNC45MzMgMTUuODE3QzE1LjA1NSAxNS45MzkgMTUuMjE1IDE2IDE1LjM3NSAxNkMxNS41MzQ5IDE2IDE1LjY5NDkgMTUuOTM5IDE1LjgxNjkgMTUuODE3QzE2LjA2MSAxNS41NzI5IDE2LjA2MSAxNS4xNzcxIDE1LjgxNjkgMTQuOTMzMUw4Ljg4MzkyIDguMDAwMDRaXCIgZmlsbD1cIiM4Njg4OEFcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvdHJhbnNpdGlvbj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiBcIkNvbmZpcm1Db2RlRm9ybVwiLFxuICAgICAgICBpbmplY3Q6IFtcbiAgICAgICAgICAgICdheGlvcycsXG4gICAgICAgICAgICAnY29uZmlnJ1xuICAgICAgICBdLFxuICAgICAgICBwcm9wczogW1xuICAgICAgICAgICAgJ2VtYWlsJyxcbiAgICAgICAgXSxcbiAgICAgICAgZGF0YSgpe1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjb2RlQ29uZmlybWVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBjb25maXJtQ29kZTogbnVsbCxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IG51bGwsXG4gICAgICAgICAgICAgICAgc3VjY2Vzc01lc3NhZ2U6IG51bGwsXG4gICAgICAgICAgICAgICAgdGltZXI6IDAsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICB0aW1lck1lc3NhZ2UoKSB7XG4gICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSAnJztcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRpbWVyID4gMCl7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBg0YfQtdGA0LXQtyA8c3Ryb25nPiR7dGhpcy50aW1lcn08L3N0cm9uZz4g0YHQtdC6YDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgc2VuZFJlZ2lzdHJhdGlvbkNvbmZpcm0oKXtcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWNjZXNzTWVzc2FnZSA9IG51bGw7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuXG4gICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCd1c2VyW2NvZGVdJywgdGhpcy5jb25maXJtQ29kZSk7XG4gICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCd1c2VyW2VtYWlsXScsIHRoaXMuZW1haWwpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5heGlvcy5wb3N0KCcvcnUvY2hlY2svY29uZmlybS9jb2RlJywgZm9ybURhdGEpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCh7ZGF0YX0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3VjY2Vzc01lc3NhZ2UgPSBkYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb2RlQ29uZmlybWVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgncmVnaXN0cmF0aW9uJylcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3NldFN0ZXAnLCAnbmlja25hbWUnKVxuICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoe3Jlc3BvbnNlfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb2RlQ29uZmlybWVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hvd05pY2tuYW1lKCl7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY29kZUNvbmZpcm1lZCl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3NldFN0ZXAnLCAnbmlja25hbWUnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbG9zZSgpe1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2Nsb3NlJylcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZXNlbmRDb25maXJtQ29kZSgpe1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRpbWVyID09PSAwKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lciA9IDMwO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJ1blRpbWVyKClcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdzZW5kQ29uZmlybUNvZGUnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBydW5UaW1lcigpe1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgICAgICAgICAgaWYgKHNlbGYudGltZXIgPiAwKXtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnRpbWVyIC09IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnJ1blRpbWVyKClcbiAgICAgICAgICAgICAgICAgICAgfSwgMTAwMClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICAkKCdbZGF0YS10b2dnbGU9XCJ0b29sdGlwXCJdJykudG9vbHRpcCgpXG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbiAgICAucXVlc3Rpb257XG4gICAgICAgIG9wYWNpdHk6IC41O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXI6IDAgc29saWQ7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgfVxuICAgIC5xdWVzdGlvbjpob3ZlcntcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgLmxvZ2luX2Zvcm0gLmxvZ2luX2Jsb2NrIC5yZXNlbmR7XG4gICAgICAgIG1hcmdpbi10b3A6IDAuNXZ3O1xuICAgICAgICBtYXJnaW4tdG9wOiAwLjV2dztcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDAuNXZ3IDA7XG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgICBib3JkZXI6IDAuMDR2dyBzb2xpZCAjQ0ZEQ0YzO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICAgICAgICBmb250LXNpemU6IDAuN3Z3O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wNXZ3O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgfVxuICAgIC5sb2dpbl9mb3JtIC5sb2dpbl9ibG9jayAucmVzZW5kLmRpc2FibGVke1xuICAgICAgICBvcGFjaXR5OiAuNTtcbiAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICB9XG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cbiAgICA8dHJhbnNpdGlvbiBuYW1lPVwic2xpZGUtZmFkZXNcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImxvZ2luX2Zvcm1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbl9ibG9ja1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2dvdHlwZVwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvQ2hhbXBzX2xvZ290eXBlLnN2Z1wiIGNsYXNzPVwibG9nb3R5cGVcIi8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvZ2luX3RpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgINCf0L7Qt9C00YDQsNCy0LvRj9C10Lwg0YEg0YPRgdC/0LXRiNC90L7QuSDRgNC10LPQtdGB0YLRgNCw0YbQuNC10LkhXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlbmRcIiBAY2xpY2s9XCIkZW1pdCgnc2V0U3RlcCcsICdmaW5pc2gnKVwiPlxuICAgICAgICAgICAgICAgICAgICDQmNCz0YDQsNGC0YxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2xvc2VkXCIgIEBjbGljaz1cIiRlbWl0KCdjbG9zZScpXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiBmaWxsPVwibm9uZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk04Ljg4MzkyIDguMDAwMDRMMTUuODE2OSAxLjA2Njk4QzE2LjA2MSAwLjgyMjg4MiAxNi4wNjEgMC40MjcxMzMgMTUuODE2OSAwLjE4MzA3QzE1LjU3MjggLTAuMDYwOTkyMiAxNS4xNzcxIC0wLjA2MTAyMzQgMTQuOTMzIDAuMTgzMDdMNy45OTk5OCA3LjExNjEzTDEuMDY2OTcgMC4xODMwN0MwLjgyMjg4IC0wLjA2MTAyMzQgMC40MjcxMzIgLTAuMDYxMDIzNCAwLjE4MzA3IDAuMTgzMDdDLTAuMDYwOTkyIDAuNDI3MTY0IC0wLjA2MTAyMzMgMC44MjI5MTQgMC4xODMwNyAxLjA2Njk4TDcuMTE2MDggOEwwLjE4MzA3IDE0LjkzMzFDLTAuMDYxMDIzMyAxNS4xNzcyIC0wLjA2MTAyMzMgMTUuNTcyOSAwLjE4MzA3IDE1LjgxN0MwLjMwNTEwMSAxNS45MzkgMC40NjUwNjkgMTYgMC42MjUwMzcgMTZDMC43ODUwMDUgMTYgMC45NDQ5NDMgMTUuOTM5IDEuMDY3IDE1LjgxN0w3Ljk5OTk4IDguODgzOTRMMTQuOTMzIDE1LjgxN0MxNS4wNTUgMTUuOTM5IDE1LjIxNSAxNiAxNS4zNzUgMTZDMTUuNTM0OSAxNiAxNS42OTQ5IDE1LjkzOSAxNS44MTY5IDE1LjgxN0MxNi4wNjEgMTUuNTcyOSAxNi4wNjEgMTUuMTc3MSAxNS44MTY5IDE0LjkzMzFMOC44ODM5MiA4LjAwMDA0WlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiIzg2ODg4QVwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC90cmFuc2l0aW9uPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6IFwiQ29uZ3JhdHVsYXRpb25zRm9ybVwiLFxuXG4gICAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG5cbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxuICAgIDx0cmFuc2l0aW9uIG5hbWU9XCJzbGlkZS1mYWRlc1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW5fZm9ybVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvZ2luX2Jsb2NrXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvZ290eXBlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9DaGFtcHNfbG9nb3R5cGUuc3ZnXCIgY2xhc3M9XCJsb2dvdHlwZVwiLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW5fdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAg0JLRhdC+0LQg0LIg0LvQuNGH0L3Ri9C5INC60LDQsdC40L3QtdGCXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvZ2luX2lucHV0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBAaW5wdXQ9XCIkZW1pdCgnaW5wdXRFbWFpbCcsICRldmVudC50YXJnZXQudmFsdWUpXCIvPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj7QkNC00YDQtdGBINGN0LvQtdC60YLRgNC+0L3QvdC+0Lkg0L/QvtGH0YLRizwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW5faW5wdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIEBpbnB1dD1cIiRlbWl0KCdpbnB1dFBhc3N3b3JkJywgJGV2ZW50LnRhcmdldC52YWx1ZSlcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPtCf0LDRgNC+0LvRjDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VuZFwiIEBjbGljaz1cIiRlbWl0KCdhdXRoTG9naW4nKVwiPlxuICAgICAgICAgICAgICAgICAgICDQktC+0LnRgtC4XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVycm9yXCIgdi1pZj1cImVycm9yXCI+XG4gICAgICAgICAgICAgICAgICAgINCd0LXQv9GA0LDQstC40LvRjNC90YvQuSDQu9C+0LPQuNC9INC40LvQuCDQv9Cw0YDQvtC70YxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3VidGV4dFwiPtCY0LvQuCDQstC+0LnQtNC40YLQtSDRgSDQv9C+0LzQvtGJ0YzRjjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbHRlcm5hdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaW5rc1wiIEBjbGljaz1cIiRlbWl0KCdzZXRTdGVwJywgJ3JlZ2lzdHJhdGlvbicpXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7QoNC10LPQuNGB0YLRgNCw0YbQuNGPPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2xvc2VkXCIgQGNsaWNrPVwiJGVtaXQoJ2Nsb3NlJylcIj5cbiAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgdmlld0JveD1cIjAgMCAxNiAxNlwiIGZpbGw9XCJub25lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTguODgzOTIgOC4wMDAwNEwxNS44MTY5IDEuMDY2OThDMTYuMDYxIDAuODIyODgyIDE2LjA2MSAwLjQyNzEzMyAxNS44MTY5IDAuMTgzMDdDMTUuNTcyOCAtMC4wNjA5OTIyIDE1LjE3NzEgLTAuMDYxMDIzNCAxNC45MzMgMC4xODMwN0w3Ljk5OTk4IDcuMTE2MTNMMS4wNjY5NyAwLjE4MzA3QzAuODIyODggLTAuMDYxMDIzNCAwLjQyNzEzMiAtMC4wNjEwMjM0IDAuMTgzMDcgMC4xODMwN0MtMC4wNjA5OTIgMC40MjcxNjQgLTAuMDYxMDIzMyAwLjgyMjkxNCAwLjE4MzA3IDEuMDY2OThMNy4xMTYwOCA4TDAuMTgzMDcgMTQuOTMzMUMtMC4wNjEwMjMzIDE1LjE3NzIgLTAuMDYxMDIzMyAxNS41NzI5IDAuMTgzMDcgMTUuODE3QzAuMzA1MTAxIDE1LjkzOSAwLjQ2NTA2OSAxNiAwLjYyNTAzNyAxNkMwLjc4NTAwNSAxNiAwLjk0NDk0MyAxNS45MzkgMS4wNjcgMTUuODE3TDcuOTk5OTggOC44ODM5NEwxNC45MzMgMTUuODE3QzE1LjA1NSAxNS45MzkgMTUuMjE1IDE2IDE1LjM3NSAxNkMxNS41MzQ5IDE2IDE1LjY5NDkgMTUuOTM5IDE1LjgxNjkgMTUuODE3QzE2LjA2MSAxNS41NzI5IDE2LjA2MSAxNS4xNzcxIDE1LjgxNjkgMTQuOTMzMUw4Ljg4MzkyIDguMDAwMDRaXCIgZmlsbD1cIiM4Njg4OEFcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvdHJhbnNpdGlvbj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiBcIkxvZ2luRm9ybVwiLFxuICAgICAgICBpbmplY3Q6IFtcbiAgICAgICAgICAgICdjb25maWcnXG4gICAgICAgIF0sXG4gICAgICAgIHByb3BzOiBbXG4gICAgICAgICAgICAnZXJyb3InXG4gICAgICAgIF0sXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICBzdGVhbUxvZ2luTGluaygpe1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5TVEVBTV9MT0dJTl9MSU5LO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH1cbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cbiAgICA8dHJhbnNpdGlvbiBuYW1lPVwic2xpZGUtZmFkZXNcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImxvZ2luX2Zvcm1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbl9ibG9ja1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2dvdHlwZVwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvQ2hhbXBzX2xvZ290eXBlLnN2Z1wiIGNsYXNzPVwibG9nb3R5cGVcIi8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvZ2luX3RpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgINCS0LLQtdC00LjRgtC1INGB0LLQvtC5INC90LjQutC90LXQudC8XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvZ2luX2lucHV0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJlbWFpbFwiIHJlcXVpcmVkIHYtbW9kZWw9XCJuaWNrbmFtZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+0JvQvtCz0LjQvSAoTmlja25hbWUpPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlcnJvclwiIHYtaWY9XCJlcnJvck1lc3NhZ2UgIT09IG51bGxcIj5cbiAgICAgICAgICAgICAgICAgICAge3sgZXJyb3JNZXNzYWdlIH19XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlbmRcIiBAY2xpY2s9XCJzZXROaWNrbmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICDQl9Cw0LLQtdGA0YjQuNGC0Ywg0YDQtdCz0LXRgdGC0YDQsNGG0LjRjlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbG9zZWRcIiBAY2xpY2s9XCJjbG9zZVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgZmlsbD1cIm5vbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNOC44ODM5MiA4LjAwMDA0TDE1LjgxNjkgMS4wNjY5OEMxNi4wNjEgMC44MjI4ODIgMTYuMDYxIDAuNDI3MTMzIDE1LjgxNjkgMC4xODMwN0MxNS41NzI4IC0wLjA2MDk5MjIgMTUuMTc3MSAtMC4wNjEwMjM0IDE0LjkzMyAwLjE4MzA3TDcuOTk5OTggNy4xMTYxM0wxLjA2Njk3IDAuMTgzMDdDMC44MjI4OCAtMC4wNjEwMjM0IDAuNDI3MTMyIC0wLjA2MTAyMzQgMC4xODMwNyAwLjE4MzA3Qy0wLjA2MDk5MiAwLjQyNzE2NCAtMC4wNjEwMjMzIDAuODIyOTE0IDAuMTgzMDcgMS4wNjY5OEw3LjExNjA4IDhMMC4xODMwNyAxNC45MzMxQy0wLjA2MTAyMzMgMTUuMTc3MiAtMC4wNjEwMjMzIDE1LjU3MjkgMC4xODMwNyAxNS44MTdDMC4zMDUxMDEgMTUuOTM5IDAuNDY1MDY5IDE2IDAuNjI1MDM3IDE2QzAuNzg1MDA1IDE2IDAuOTQ0OTQzIDE1LjkzOSAxLjA2NyAxNS44MTdMNy45OTk5OCA4Ljg4Mzk0TDE0LjkzMyAxNS44MTdDMTUuMDU1IDE1LjkzOSAxNS4yMTUgMTYgMTUuMzc1IDE2QzE1LjUzNDkgMTYgMTUuNjk0OSAxNS45MzkgMTUuODE2OSAxNS44MTdDMTYuMDYxIDE1LjU3MjkgMTYuMDYxIDE1LjE3NzEgMTUuODE2OSAxNC45MzMxTDguODgzOTIgOC4wMDAwNFpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiM4Njg4OEFcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvdHJhbnNpdGlvbj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiBcIk5pY2tuYW1lRm9ybVwiLFxuICAgICAgICBpbmplY3Q6IFtcbiAgICAgICAgICAgICdheGlvcycsXG4gICAgICAgICAgICAnY29uZmlnJ1xuICAgICAgICBdLFxuICAgICAgICBwcm9wczogW1xuICAgICAgICAgICAgJ2VtYWlsJyxcbiAgICAgICAgXSxcbiAgICAgICAgZGF0YSgpe1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBuaWNrbmFtZTogbnVsbCxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IG51bGwsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIHNldE5pY2tuYW1lKCl7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6IHRoaXMuZW1haWwsXG4gICAgICAgICAgICAgICAgICAgIG5pY2tuYW1lOiB0aGlzLm5pY2tuYW1lXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuYXhpb3MucG9zdCgnL3J1L2FqYXgvdXNlci9zZXQvbmlja25hbWUnLCBkYXRhKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigoe2RhdGF9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdzZXRTdGVwJywgJ2NvbmdyYXR1bGF0aW9uJylcbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKHtyZXNwb25zZX0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gcmVzcG9uc2UuZGF0YVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNsb3NlKCl7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xvc2UnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG5cbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxuICAgIDx0cmFuc2l0aW9uIG5hbWU9XCJzbGlkZS1mYWRlc1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW5fZm9ybVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvZ2luX3JlcVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbl9ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9nb3R5cGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9DaGFtcHNfbG9nb3R5cGUuc3ZnXCIgY2xhc3M9XCJsb2dvdHlwZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbl90aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAg0KDQtdCz0LjRgdGC0YDQsNGG0LjRj1xuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvZ2luX2lucHV0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOnZhbHVlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBpbnB1dD1cIiRlbWl0KCdpbnB1dEVtYWlsJywgJGV2ZW50LnRhcmdldC52YWx1ZSlcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7QkNC00YDQtdGBINGN0LvQtdC60YLRgNC+0L3QvdC+0Lkg0L/QvtGH0YLRizwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbl9pbnB1dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6dmFsdWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGlucHV0PVwiJGVtaXQoJ2lucHV0UGFzc3dvcmQnLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPtCf0LDRgNC+0LvRjDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbl9jaGVja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2hlY2tlZD1cImNoZWNrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNoYW5nZT1cIiRlbWl0KCdpbnB1dCcsICRldmVudC50YXJnZXQudmFsdWUpXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvcnUvdGVybXMtb2YtdXNlXCIgdGFyZ2V0PVwiX2JsYW5rXCI+0J7Qt9C90LDQutC+0LzQu9C10L0g0YEg0L/RgNCw0LLQuNC70LDQvNC4INC40YHQv9C+0LvRjNC30L7QstCw0L3QuNGPINGB0LXRgNCy0LjRgdCwIMKrQ2hhbXBzwrs8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VuZFwiIEBjbGljaz1cImNoZWNrSXNFbWFpbFZhbGlkXCIgOnN0eWxlPVwie29wYWNpdHk6ICRwYXJlbnQuY2hlY2sgPyAnMSc6ICcuNSd9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICDQl9Cw0YDQtdCz0LjRgdGC0YDQuNGA0L7QstCw0YLRjNGB0Y9cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlcnJvclwiIHYtaWY9XCJlcnJvck1lc3NhZ2UgIT09IG51bGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7IGVycm9yTWVzc2FnZSB9fVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN1YnRleHRcIj7QmNC70Lgg0LLQvtC50LTQuNGC0LUg0YEg0L/QvtC80L7RidGM0Y48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFsdGVybmF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpbmtzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIEBjbGljaz1cIiRlbWl0KCdzZXRTdGVwJywgJ2xvZ2luJylcIj7QktGF0L7QtCDQsiDQu9C40YfQvdGL0Lkg0LrQsNCx0LjQvdC10YI8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbG9zZWRcIiBAY2xpY2s9XCJjbG9zZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgdmlld0JveD1cIjAgMCAxNiAxNlwiIGZpbGw9XCJub25lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk04Ljg4MzkyIDguMDAwMDRMMTUuODE2OSAxLjA2Njk4QzE2LjA2MSAwLjgyMjg4MiAxNi4wNjEgMC40MjcxMzMgMTUuODE2OSAwLjE4MzA3QzE1LjU3MjggLTAuMDYwOTkyMiAxNS4xNzcxIC0wLjA2MTAyMzQgMTQuOTMzIDAuMTgzMDdMNy45OTk5OCA3LjExNjEzTDEuMDY2OTcgMC4xODMwN0MwLjgyMjg4IC0wLjA2MTAyMzQgMC40MjcxMzIgLTAuMDYxMDIzNCAwLjE4MzA3IDAuMTgzMDdDLTAuMDYwOTkyIDAuNDI3MTY0IC0wLjA2MTAyMzMgMC44MjI5MTQgMC4xODMwNyAxLjA2Njk4TDcuMTE2MDggOEwwLjE4MzA3IDE0LjkzMzFDLTAuMDYxMDIzMyAxNS4xNzcyIC0wLjA2MTAyMzMgMTUuNTcyOSAwLjE4MzA3IDE1LjgxN0MwLjMwNTEwMSAxNS45MzkgMC40NjUwNjkgMTYgMC42MjUwMzcgMTZDMC43ODUwMDUgMTYgMC45NDQ5NDMgMTUuOTM5IDEuMDY3IDE1LjgxN0w3Ljk5OTk4IDguODgzOTRMMTQuOTMzIDE1LjgxN0MxNS4wNTUgMTUuOTM5IDE1LjIxNSAxNiAxNS4zNzUgMTZDMTUuNTM0OSAxNiAxNS42OTQ5IDE1LjkzOSAxNS44MTY5IDE1LjgxN0MxNi4wNjEgMTUuNTcyOSAxNi4wNjEgMTUuMTc3MSAxNS44MTY5IDE0LjkzMzFMOC44ODM5MiA4LjAwMDA0WlwiIGZpbGw9XCIjODY4ODhBXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbl9yZXFfYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PtCi0YDQtdC90LXRgNGD0LnRgtC10YHRjCDQstC80LXRgdGC0LUg0YEg0LvRg9GH0YjQuNC80Lgg0LjQs9GA0L7QutCw0LzQuCDQsiDQstCw0YjQuNGFINC70Y7QsdC40LzRi9GFINC40LPRgNCw0YU8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj7Qn9C+0YHQu9C10LTQvdC40LUg0L3QvtCy0L7RgdGC0Lgg0Lgg0YHQvtCx0YvRgtC40Y88L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj7QktC10LvQuNC60L7Qu9C10L/QvdC+0LUg0YHQvtC+0LHRidC10YHRgtCy0L48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj7QotGA0LDQvdGB0LvRj9GG0LjQuCDQuCDRgNC10LfRg9C70YzRgtCw0YLRiyDQvNCw0YLRh9C10Lk8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj7QkNC90LDQu9C40YLQuNC60LAg0L7RgiDQv9GA0L7RhNC10YHRgdC40L7QvdCw0LvQvtCyPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvdHJhbnNpdGlvbj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBpbmplY3Q6IFtcbiAgICAgICAgICAgICdheGlvcycsXG4gICAgICAgICAgICAnY29uZmlnJ1xuICAgICAgICBdLFxuICAgICAgICBuYW1lOiBcIlJlZ2lzdHJhdGlvbkZvcm1cIixcbiAgICAgICAgcHJvcHM6IFtcbiAgICAgICAgICAgICdwYXNzd29yZCcsXG4gICAgICAgICAgICAnZW1haWwnLFxuICAgICAgICAgICAgJ2NoZWNrJ1xuICAgICAgICBdLFxuICAgICAgICBkYXRhKCl7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgc3RlYW1Mb2dpbkxpbmsoKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb25maWcuU1RFQU1fTE9HSU5fTElOSztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbWFpbEZvcm0oKXtcbiAgICAgICAgICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZW1haWwnLCB0aGlzLmVtYWlsKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBmb3JtRGF0YTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgZ2VuZXJhdGVDb25maXJtQ29kZSgpe1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3NlbmRDb25maXJtQ29kZScpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3NldFN0ZXAnLCAnY29uZmlybUNvZGUnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaGVja0lzRW1haWxWYWxpZCgpe1xuICAgICAgICAgICAgICAgIHRoaXMuYXhpb3MucG9zdCgnL3J1L3VzZXIvY2hlY2svZW1haWwnLCB0aGlzLmVtYWlsRm9ybSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHtkYXRhfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZUNvbmZpcm1Db2RlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKCh7cmVzcG9uc2V9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2xvc2UoKXtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdjbG9zZScpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfVxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJncmlkXCI+XG4gICAgICAgIDxhIGNsYXNzPVwiZ3JpZC1yb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRhXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAge3sgdGVhbS5uYW1lIH19XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm90dG9tXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7QndCw0LfQstCw0L3QuNC1PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGFcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICB7eyB0ZWFtLnRhZyB9fVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvdHRvbVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+0KLQtdCzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGFcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICB7eyB0ZWFtLm1lbWJlcnMubGVuZ3RoIH19XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm90dG9tXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7Qo9GH0LDRgdC90LjQutC+0LI8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0YSBwdC0yXCI+XG4gICAgICAgICAgICAgICAgPGEgOmhyZWY9XCJodHRwLmdldFRlYW1MaW5rKHRlYW0uaWQpXCIgY2xhc3M9XCJidG4tb3JhbmdlIHRleHQtbGlnaHQgcC0yIHBvaW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAg0J/QvtGB0LzQvtGC0YDQtdGC0YxcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9hPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6IFwiTXZwSm9pbmVkVGVhbVwiLFxuICAgICAgICBwcm9wczogWyd0ZWFtJ10sXG4gICAgICAgIGluamVjdDogW1xuICAgICAgICAgICAgJ2h0dHAnXG4gICAgICAgIF1cbiAgICB9XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cblxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImV2ZW50c192aWV3XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tcG9uZW50IHVwY29taW5nX2V2ZW50c1wiPlxuICAgICAgICAgICAgICAgICAgICA8bXZwLWpvaW5lZC10ZWFtIDp0ZWFtPVwidGVhbVwiIDprZXk9XCJrZXlcIiB2LWZvcj1cIih0ZWFtLCBrZXkpIGluIHRlYW1zXCIvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgTXZwSm9pbmVkVGVhbSBmcm9tIFwiLi9NdnBKb2luZWRUZWFtXCI7XG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6IFwiTXZwSm9pbmVkVGVhbXNcIixcbiAgICAgICAgaW5qZWN0OiBbXG4gICAgICAgICAgICAnaHR0cCdcbiAgICAgICAgXSxcbiAgICAgICAgY29tcG9uZW50czoge1xuICAgICAgICAgICAgJ212cC1qb2luZWQtdGVhbSc6IE12cEpvaW5lZFRlYW1cbiAgICAgICAgfSxcbiAgICAgICAgZGF0YSgpe1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0ZWFtczogW11cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgZ2V0Sm9pbmVkVGVhbXMoKXtcbiAgICAgICAgICAgICAgICB0aGlzLmh0dHAuZ2V0VXNlckpvaW5lZFRlYW1zKClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHtkYXRhfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50ZWFtcyA9IGRhdGFcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0Sm9pbmVkVGVhbXMoKVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG5cbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXIgbXQtM1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxmdFwiPlxuICAgICAgICAgICAgICAgIDxhIDpjbGFzcz1cInthY3RpdmU6IGFjdGl2ZSA9PT0gJ2NvbW1hbmRzJ31cIiBAY2xpY2s9XCIgYWN0aXZlID0gJ2NvbW1hbmRzJ1wiPtCa0J7QnNCQ0J3QlNCrPC9hPlxuICAgICAgICAgICAgICAgIDxhIDpjbGFzcz1cInthY3RpdmU6IGFjdGl2ZSA9PT0gJ3RvdXJuYW1lbnRzJ31cIiBAY2xpY2s9XCIgYWN0aXZlID0gJ3RvdXJuYW1lbnRzJ1wiPtCi0KPQoNCd0JjQoNCrPC9hPlxuICAgICAgICAgICAgICAgIDxhIDpjbGFzcz1cInthY3RpdmU6IGFjdGl2ZSA9PT0gJ21hdGNoZXMnfVwiIEBjbGljaz1cIiBhY3RpdmUgPSAnbWF0Y2hlcydcIj7QnNCQ0KLQp9CYPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgIDxNdnBUZWFtcz48L012cFRlYW1zPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgTXZwVGVhbXMgZnJvbSBcIi4vTXZwVGVhbXNcIjtcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbmFtZTogXCJNdnBQYWdlXCIsXG4gICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICAgIE12cFRlYW1zXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGEoKXtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgYWN0aXZlOiAnY29tbWFuZHMnLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG5cbiAgICAgICAgfSxcbiAgICB9XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cblxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImNhcmQgdy01MCBtci0yIGJvcmRlci1yYWRpdXMtMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCIgdi1pZj1cInRlYW0gPT09IHVuZGVmaW5lZFwiPlxuICAgICAgICAgICAgPGg1IGNsYXNzPVwiY2FyZC10aXRsZSBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICB7eyB0aXRsZSB9fVxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2UgYmFkZ2Utd2FybmluZyBib3JkZXItcmFkaXVzLTBcIj57eyB0eXBlIH19PC9zcGFuPlxuICAgICAgICAgICAgPC9oNT5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZC10ZXh0XCI+XG4gICAgICAgICAgICAgICAge3sgZGVzY3JpcHRpb24gfX1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxhIGNsYXNzPVwiYnRuLW9yYW5nZSB0ZXh0LWxpZ2h0IHAtMiBwb2ludGVyXCJcbiAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwibW9kYWxcIlxuICAgICAgICAgICAgICAgQGNsaWNrPVwiJGVtaXQoJ3NldENhcGFjaXR5JywgY2FwYWNpdHkpXCJcbiAgICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI21ha2VDb21hbmRNb2RhbFwiPlxuICAgICAgICAgICAgICAgINCh0L7Qt9C00LDRgtGMINC60L7QvNCw0L3QtNGDIHt7IHR5cGUgfX1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIiB2LWlmPVwidGVhbSAhPT0gdW5kZWZpbmVkXCI+XG4gICAgICAgICAgICA8aDUgY2xhc3M9XCJjYXJkLXRpdGxlIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgIHt7IHRlYW0ubmFtZSB9fVxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2UgYmFkZ2Utd2FybmluZyBib3JkZXItcmFkaXVzLTBcIj5cbiAgICAgICAgICAgICAgICAgICAge3sgdHlwZSB9fVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtdGV4dFwiPiB7eyB0ZWFtLm1lbWJlcnMubGVuZ3RoIH19INGD0YfQsNGB0L3QuNC60L7QsjwvcD5cbiAgICAgICAgICAgIDxhIGNsYXNzPVwiYnRuLW9yYW5nZSB0ZXh0LWxpZ2h0IHAtMiBwb2ludGVyXCIgOmhyZWY9XCJodHRwLmdldFRlYW1MaW5rKHRlYW0uaWQpXCI+XG4gICAgICAgICAgICAgICAg0J/QvtGB0LzQvtGC0YDQtdGC0YxcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiBcIk12cFRlYW1cIixcbiAgICAgICAgaW5qZWN0OiBbXG4gICAgICAgICAgICAnaHR0cCdcbiAgICAgICAgXSxcbiAgICAgICAgcHJvcHM6IFtcbiAgICAgICAgICAgICd0ZWFtcycsXG4gICAgICAgICAgICAndGl0bGUnLFxuICAgICAgICAgICAgJ2Rlc2NyaXB0aW9uJyxcbiAgICAgICAgICAgICd0eXBlJyxcbiAgICAgICAgICAgICdjYXBhY2l0eSdcbiAgICAgICAgXSxcbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIHRlYW0oKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50ZWFtcy5maW5kKHRlYW0gPT4gTnVtYmVyKHRlYW0uY2FwYWNpdHkpID09PSBOdW1iZXIodGhpcy5jYXBhY2l0eSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJncmlkXCI+XG4gICAgICAgIDxhIGNsYXNzPVwiZ3JpZC1yb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2dvXCI+XG4gICAgICAgICAgICAgICAgPGltZyB2LWlmPVwibWVtYmVyLmltYWdlICE9PSBudWxsXCIvPlxuICAgICAgICAgICAgICAgIDxpbWcgdi1lbHNlIHNyYz1cIi9pbWFnZXMvbm9Mb2dvLnBuZ1wiLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGFcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICB7eyBtZW1iZXIubmlja25hbWUgfX1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3R0b21cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPtCd0LjQujwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRhXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtaWY9XCJpc0NhcHRhaW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgINCa0LDQv9C40YLQsNC9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1lbHNlPlxuICAgICAgICAgICAgICAgICAgICAgICAg0JjQs9GA0L7QulxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvdHRvbVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+0KDQvtC70Yw8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0YVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIDpocmVmPVwiZ2V0U3RlYW1MaW5rKG1lbWJlci5zdGVhbSlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHdpZHRoPVwiMjBweFwiIHNyYz1cIi9pbWFnZXMvbG9naW5fc3RlYW0uc3ZnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm90dG9tXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7QodGC0LjQvDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9hPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6IFwiTXZwVGVhbU1lbWJlclwiLFxuICAgICAgICBwcm9wczogW1xuICAgICAgICAgICAgJ21lbWJlcicsXG4gICAgICAgICAgICAnaXNDYXB0YWluJ1xuICAgICAgICBdLFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBnZXRTdGVhbUxpbms6IChzdGVhbUlkKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGBodHRwczovL3N0ZWFtY29tbXVuaXR5LmNvbS9wcm9maWxlcy8ke3N0ZWFtSWR9YFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXIgbXQtMyBkLWJsb2NrXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGZ0XCI+XG4gICAgICAgICAgICAgICAgPGEgOmhyZWY9XCJodHRwLmdldE12cExpbmsoKVwiPtCd0LDQt9Cw0LQ8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJldmVudHNfdmlld1wiIGlkPVwidGVhbU1lbWJlcnNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21wb25lbnQgdXBjb21pbmdfZXZlbnRzXCIgaWQ9XCJ1cGNvbWluZ19ldmVudHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3VuZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48aW1nIHNyYz1cIi9pbWFnZXMvbGFtcC5zdmdcIiBhbHQ9XCJsYW1wXCIgLz48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0KPRh9Cw0YHRgtC90LjQutC4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtdnAtdGVhbS1tZW1iZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJ0ZWFtLmhhc093blByb3BlcnR5KCdtZW1iZXJzJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1mb3I9XCIobWVtYmVyLCBrZXkpIGluIHRlYW0ubWVtYmVyc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bWVtYmVyPVwibWVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XCJrZXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmlzLWNhcHRhaW49XCJjaGVja01lbWJlcklzQ2FwdGFpbihtZW1iZXIpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tdnAtdGVhbS1tZW1iZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgbXQtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxmdFwiIHYtaWY9XCJpc0NyZWF0b3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBAY2xpY2s9XCJkZWxldGVUZWFtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCj0LTQsNC70LjRgtGMINC60L7QvNCw0L3QtNGDXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYnRuLW9yYW5nZSB0ZXh0LWxpZ2h0IHBvaW50ZXJcIiBAY2xpY2s9XCJzaG93QWRkTW9kYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtcGx1c1wiPjwvaT4mbmJzcDsmbmJzcDvQlNC+0LHQsNCy0LjRgtGMINGD0YfQsNGB0L3QuNC60L7QslxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxmdFwiIHYtZWxzZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImJ0bi1vcmFuZ2UgdGV4dC1saWdodCBwb2ludGVyXCIgOmhyZWY9XCJodHRwLnVzZXJMZWF2ZVRlYW1MaW5rKHRlYW1JZClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0J/QvtC60LjQvdGD0YLRjCDQutC+0LzQsNC90LTRg1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInXG4gICAgaW1wb3J0IE12cFRlYW1NZW1iZXIgZnJvbSBcIi4vTXZwVGVhbU1lbWJlclwiO1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiBcIk12cFRlYW1QYWdlXCIsXG4gICAgICAgIGluamVjdDogW1xuICAgICAgICAgICAgJ2h0dHAnXG4gICAgICAgIF0sXG4gICAgICAgIHByb3BzOiBbXG4gICAgICAgICAgICAndGVhbUlkJ1xuICAgICAgICBdLFxuICAgICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICAgICAnbXZwLXRlYW0tbWVtYmVyJzogTXZwVGVhbU1lbWJlcixcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YSgpe1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0ZWFtOiB7fSxcbiAgICAgICAgICAgICAgICBpbnZpdGVUb2tlbjogbnVsbCxcbiAgICAgICAgICAgICAgICB1c2VyOiBudWxsLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgaXNDcmVhdG9yKCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudXNlciAhPT0gbnVsbCAmJiB0aGlzLnVzZXIuaWQgPT09IHRoaXMudGVhbS5jcmVhdG9yLmlkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBnZXRUZWFtKCl7XG4gICAgICAgICAgICAgICAgdGhpcy5odHRwLmdldE12cFRlYW0odGhpcy50ZWFtSWQpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCh7ZGF0YX0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGVhbSA9IGRhdGE7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2hlY2tNZW1iZXJJc0NhcHRhaW4obWVtYmVyKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWVtYmVyLmlkID09PSB0aGlzLnRlYW0uY3JlYXRvci5pZFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdldFN0ZWFtTGluayhzdGVhbUlkKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gYGh0dHBzOi8vc3RlYW1jb21tdW5pdHkuY29tL3Byb2ZpbGVzLyR7c3RlYW1JZH1gXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hvd0FkZE1vZGFsKCl7XG4gICAgICAgICAgICAgICAgdGhpcy5odHRwLmdldFRlYW1JbnZpdGVUb2tlbih0aGlzLnRlYW1JZClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHtkYXRhfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93SW52aXRlTW9kYWwoZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaG93SW52aXRlTW9kYWwodG9rZW4pe1xuICAgICAgICAgICAgICAgIGNvbnN0IGludml0ZUxpbmsgPSB0aGlzLmh0dHAuZ2V0SW52aXRlVG9UZWFtTGluayh0aGlzLnRlYW1JZCwgdG9rZW4pXG5cbiAgICAgICAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ9CU0L7QsdCw0LLQuNGC0Ywg0YPRh9Cw0YHRgtC90LjQutC+0LInLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAn0J7RgtC/0YDQsNCy0Ywg0Y3RgtGDINGB0YHRi9C70LrRgyDQuNCz0YDQvtC60LDQvCwg0LrQvtGC0L7RgNGL0YUg0YXQvtGH0LXRiNGMINC/0YDQuNCz0LvQsNGB0LjRgtGMINCyINC60L7QvNCw0L3QtNGDJyxcbiAgICAgICAgICAgICAgICAgICAgaHRtbDogYDx0ZXh0YXJlYSBjbGFzcz1cInN3YWwyLXRleHRhcmVhXCIgcGxhY2Vob2xkZXI9XCJcIiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7XCI+JHtpbnZpdGVMaW5rfTwvdGV4dGFyZWE+YCxcbiAgICAgICAgICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgc2hvd0NvbmZpcm1CdXR0b246IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAn0J7QsdC90L7QstC40YLRjCcsXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6ICfQl9Cw0LrRgNGL0YLRjCcsXG4gICAgICAgICAgICAgICAgICAgIHByZUNvbmZpcm06ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaHR0cC5yZWxvYWRUZWFtSW52aXRlVG9rZW4odGhpcy50ZWFtSWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHtkYXRhfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dJbnZpdGVNb2RhbChkYXRhKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlbGV0ZVRlYW0oKXtcbiAgICAgICAgICAgICAgICB0aGlzLmh0dHAuZGVsZXRlTXZwVGVhbSh0aGlzLnRlYW1JZClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gdGhpcy5odHRwLmdldE12cExpbmsoKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdldFVzZXIoKXtcbiAgICAgICAgICAgICAgICB0aGlzLmh0dHAuZ2V0QXV0aFVzZXIoKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigoe2RhdGF9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXIgPSBkYXRhXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICAgdGhpcy5nZXRUZWFtKCk7XG4gICAgICAgICAgICB0aGlzLmdldFVzZXIoKTtcbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiY29udFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIGNvbW1hbmRzIHAtMCBtdC0zXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy03NSBkLWZsZXhcIj5cbiAgICAgICAgICAgICAgICA8bXZwLXRlYW1cbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCLQndCw0YHRgtGA0L7QtdC9INC40LPRgNCw0YLRjCDRgdC10YDRjNC10LfQvdC+P1wiXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwi0KHQvtC30LTQsNC5INGB0LLQvtGOINC60L7QvNCw0L3QtNGDINC00LvRjyDRgtGD0YDQuNC60L7QsiA1djUg0Lgg0LLRgNGL0LLQsNC50YHRjyDQsiDQutC40LHQtdGA0YHQv9C+0YDRglwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCI1eDVcIlxuICAgICAgICAgICAgICAgICAgICBjYXBhY2l0eT1cIjVcIlxuICAgICAgICAgICAgICAgICAgICBAc2V0Q2FwYWNpdHk9XCJzZXRDYXBhY2l0eVwiXG4gICAgICAgICAgICAgICAgICAgIDp0ZWFtcz1cInRlYW1zXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxtdnAtdGVhbVxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cItCd0LDQv9Cw0YDQvdC40LrQuFwiXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwi0J3QtdGCINC/0L7RgdGC0L7Rj9C90L3QvtC5INC60L7QvNCw0L3QtNGLPyDQn9C+0LfQvtCy0Lgg0LTRgNGD0LPQsCDQuCDQstGL0L3QvtGB0LjRgtC1INGB0L7Qv9C10YDQvdC40LrQvtCyINCy0LzQtdGB0YLQtVwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCIyeDJcIlxuICAgICAgICAgICAgICAgICAgICBjYXBhY2l0eT1cIjJcIlxuICAgICAgICAgICAgICAgICAgICBAc2V0Q2FwYWNpdHk9XCJzZXRDYXBhY2l0eVwiXG4gICAgICAgICAgICAgICAgICAgIDp0ZWFtcz1cInRlYW1zXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwgZmFkZVwiIGlkPVwibWFrZUNvbWFuZE1vZGFsXCIgdGFiaW5kZXg9XCItMVwiIGFyaWEtbGFiZWxsZWRieT1cImV4YW1wbGVNb2RhbExhYmVsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudCBib3JkZXItcmFkaXVzLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJtb2RhbC10aXRsZVwiIGlkPVwiZXhhbXBsZU1vZGFsTGFiZWxcIj7QodC+0LfQtNCw0YLRjCDQutC+0LzQsNC90LTRgzwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0J/RgNC40LTRg9C80LDQuSDQvdCw0LfQstCw0L3QuNC1ICjRgdC80L7QttC10YjRjCDQv9C+0LzQtdC90Y/RgtGMINC/0L7RgtC+0LwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+0J3QsNC30LLQsNC90LjQtSDQutC+0LzQsNC90LTRizwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2LW1vZGVsPVwiY29tbWFuZC5uYW1lXCIgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbCBib3JkZXItcmFkaXVzLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwiZm9ybS10ZXh0IHRleHQtbXV0ZWRcIiB2LWlmPVwiIW1lc3NhZ2VzLmVycm9yLmhhc093blByb3BlcnR5KCduYW1lJylcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCc0L7QttC90L4g0LvQsNGC0LjQvdGB0LrQuNC1INCx0YPQutCy0Ysg0Lgg0YbQuNGE0YDRi1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcIiB2LWlmPVwibWVzc2FnZXMuZXJyb3IuaGFzT3duUHJvcGVydHkoJ25hbWUnKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgbWVzc2FnZXMuZXJyb3IubmFtZVswXSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD7QotC10LMg0LrQvtC80LDQvdC00Ys8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdi1tb2RlbD1cImNvbW1hbmQudGFnXCIgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbCBib3JkZXItcmFkaXVzLTAgdy01MFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJmb3JtLXRleHQgdGV4dC1tdXRlZFwiIHYtaWY9XCIhbWVzc2FnZXMuZXJyb3IuaGFzT3duUHJvcGVydHkoJ3RhZycpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQnNCw0LrRgdC40LzRg9C8IDYg0YHQuNC80LLQvtC70L7QslxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcIiB2LWlmPVwibWVzc2FnZXMuZXJyb3IuaGFzT3duUHJvcGVydHkoJ3RhZycpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBtZXNzYWdlcy5lcnJvci50YWdbMF0gfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHQtc3VjY2Vzc1wiIHYtaWY9XCJtZXNzYWdlcy5zdWNjZXNzICE9PSBudWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBtZXNzYWdlcy5zdWNjZXNzIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgQGNsaWNrPVwiY3JlYXRlVGVhbVwiIGNsYXNzPVwiYnRuLW9yYW5nZSB0ZXh0LWxpZ2h0IHAtMiB0ZXh0LWNlbnRlciBwb2ludGVyIHctMTAwXCIgPtCh0L7Qt9C00LDRgtGMINC60L7QvNCw0L3QtNGDPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCIgY2xhc3M9XCJidG4tZ3JleSBwb2ludGVyIHRleHQtY2VudGVyIHRleHQtbGlnaHQgYm9yZGVyLXJhZGl1cy0wIHAtMiB3LTc1XCI+0J7RgtC80LXQvdC40YLRjDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIjEyM1wiPlxuICAgICAgICAgICAgICAgIDxtdnAtam9pbmVkLXRlYW1zLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IE12cFRlYW0gZnJvbSBcIi4vTXZwVGVhbVwiO1xuICAgIGltcG9ydCBNdnBKb2luZWRUZWFtcyBmcm9tIFwiLi9NdnBKb2luZWRUZWFtc1wiO1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiBcIk12cFRlYW1zXCIsXG4gICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICAgICdtdnAtdGVhbSc6IE12cFRlYW0sXG4gICAgICAgICAgICAnbXZwLWpvaW5lZC10ZWFtcyc6IE12cEpvaW5lZFRlYW1zXG4gICAgICAgIH0sXG4gICAgICAgIGluamVjdDogWydodHRwJ10sXG4gICAgICAgIGRhdGEoKXtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdGVhbXM6IFtdLFxuICAgICAgICAgICAgICAgIGNvbW1hbmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgY2FwYWNpdHk6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIHRhZzogbnVsbFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbWVzc2FnZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IHt9LFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgY3JlYXRlVGVhbSgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7Y2FwYWNpdHksIG5hbWUsIHRhZ30gPSB0aGlzLmNvbW1hbmQ7XG5cbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VzLnN1Y2Nlc3MgPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZXMuZXJyb3IgPSB7fTtcblxuICAgICAgICAgICAgICAgIHRoaXMuaHR0cC5jcmVhdGVNdnBUZWFtKGNhcGFjaXR5LCBuYW1lLCB0YWcpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCh7ZGF0YX0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZXMuc3VjY2VzcyA9IGRhdGEubWVzc2FnZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGVhbXMucHVzaChkYXRhLnRlYW0pO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKHtyZXNwb25zZX0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZXMuZXJyb3IgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdldFVzZXJUZWFtcygpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmh0dHAuZ2V0VXNlclRlYW1zKClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHtkYXRhfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50ZWFtcyA9IGRhdGE7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0Q2FwYWNpdHkoY2FwYWNpdHkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQuY2FwYWNpdHkgPSBjYXBhY2l0eTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0VXNlclRlYW1zKClcbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiZXZlbnRzX3ZpZXdcIiBpZD1cInRlYW1NZW1iZXJzXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tcG9uZW50IHVwY29taW5nX2V2ZW50c1wiIGlkPVwidXBjb21pbmdfZXZlbnRzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3VuZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGltZyBzcmM9XCIvaW1hZ2VzL2xhbXAuc3ZnXCIgYWx0PVwibGFtcFwiIC8+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHRlYW0ubmFtZSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8bXZwLXRlYW0tbWVtYmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cInRlYW0uaGFzT3duUHJvcGVydHkoJ21lbWJlcnMnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1mb3I9XCIobWVtYmVyLCBrZXkpIGluIHRlYW0ubWVtYmVyc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOm1lbWJlcj1cIm1lbWJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmtleT1cImtleVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmlzLWNhcHRhaW49XCJjaGVja01lbWJlcklzQ2FwdGFpbihtZW1iZXIpXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvbXZwLXRlYW0tbWVtYmVyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IG10LTNcIiB2LWlmPVwiaXNBdXRob3JpemUgJiYgaXNGcmVlUGxhY2VcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGZ0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYnRuLW9yYW5nZSB0ZXh0LWxpZ2h0IHBvaW50ZXJcIiBAY2xpY2s9XCJqb2luVGVhbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtcGx1c1wiPjwvaT4mbmJzcDsmbmJzcDvQn9GA0LjRgdC+0LXQtNC10L3QuNGC0YHRj1xuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxsb2dpbi1tb2RhbCA6c2hvdz1cIiFpc0F1dGhvcml6ZVwiLz5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IE12cFRlYW1NZW1iZXIgZnJvbSBcIi4uL2NhYmluZXQvTXZwVGVhbU1lbWJlclwiO1xuICAgIGltcG9ydCBMb2dpbk1vZGFsIGZyb20gXCIuLi8uLi9Mb2dpbk1vZGFsXCI7XG4gICAgaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInXG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6IFwiTXZwSW52aXRlVGVhbVBhZ2VcIixcbiAgICAgICAgaW5qZWN0OiBbXG4gICAgICAgICAgICAnaHR0cCcsXG4gICAgICAgICAgICAnY29uZmlnJ1xuICAgICAgICBdLFxuICAgICAgICBwcm9wczogW1xuICAgICAgICAgICAgJ3RlYW1JZCcsXG4gICAgICAgICAgICAnaXNBdXRob3JpemUnXG4gICAgICAgIF0sXG4gICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICAgICdtdnAtdGVhbS1tZW1iZXInOiBNdnBUZWFtTWVtYmVyLFxuICAgICAgICAgICAgJ2xvZ2luLW1vZGFsJzogTG9naW5Nb2RhbFxuICAgICAgICB9LFxuICAgICAgICBkYXRhKCl7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHRlYW06IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogbnVsbFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYXV0aFVzZXI6IG51bGwsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICBpc0ZyZWVQbGFjZSgpe1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRlYW0uaGFzT3duUHJvcGVydHkoJ21lbWJlcnMnKSl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRlYW0ubWVtYmVycy5sZW5ndGggPCB0aGlzLnRlYW0uY2FwYWNpdHk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgZ2V0VGVhbSgpe1xuICAgICAgICAgICAgICAgIHRoaXMuaHR0cC5nZXRNdnBUZWFtKHRoaXMudGVhbUlkKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigoe2RhdGF9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRlYW0gPSBkYXRhXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2hlY2tNZW1iZXJJc0NhcHRhaW4obWVtYmVyKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWVtYmVyLmlkID09PSB0aGlzLnRlYW0uY3JlYXRvci5pZFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGpvaW5UZWFtKCl7XG4gICAgICAgICAgICAgICAgdGhpcy5odHRwLmdldEF1dGhVc2VyKClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHtkYXRhfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hdXRoVXNlciA9IGRhdGE7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5lZWRTdGVhbSA9IHRoaXMuY2hlY2tOZWVkU3RlYW1Gb3JKb2luKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbmVlZFN0ZWFtKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmh0dHAuam9pbk1lbWJlclRvVGVhbSh0aGlzLnRlYW1JZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRUZWFtKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKHtyZXNwb25zZX0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JQb3B1cChyZXNwb25zZS5kYXRhKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yUG9wdXAoZXJyb3Ipe1xuICAgICAgICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn0KPQv9GBLi4uJyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogZXJyb3IsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaGVja05lZWRTdGVhbUZvckpvaW4oKXtcbiAgICAgICAgICAgICAgICBjb25zdCBodG1sID0gYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgINCU0LvRjyDRgtC+0LPQviDRh9GC0L4g0LHRiyDRg9GH0LDQstGB0YLQstC+0LLQsNGC0Ywg0LIg0YLRg9GA0L3QuNGA0LUsINC90LXQvtCx0YXQvtC00LjQvNC+INC/0YDQuNCy0Y/Qt9Cw0YLRjCDQsNC60LDRg9C90YJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiJHt0aGlzLmNvbmZpZy5TVEVBTV9MT0dJTl9MSU5LfVwiPlN0ZWFtPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwdC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIke3RoaXMuY29uZmlnLlNURUFNX0xPR0lOX0xJTkt9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvbG9naW5fc3RlYW0uc3ZnXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+YDtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmF1dGhVc2VyICE9PSBudWxsICl7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmF1dGhVc2VyLnN0ZWFtID09PSBudWxsIHx8IHRoaXMuYXV0aFVzZXIuc3RlYW0gPT09ICcnIHx8IHRoaXMuYXV0aFVzZXIuc3RlYW0gPT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfQo9C/0YEuLi4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dDbG9zZUJ1dHRvbjogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0VGVhbSgpXG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBwLTAgbS0wXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgd2luZG93LWhlaWdodC04MCBwLTAgbS0wXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciB3LTEwMCBoLTEwMFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBmbGV4LWNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgbWItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJidG4tb3JhbmdlIHRleHQtbGlnaHQgcC0zIHBsLTUgcHItNSBmb250LXNpemUtMjMgcG9pbnRlclwiIEBjbGljaz1cInNob3dMb2dpbk1vZGFsXCI+Sm9pbiB0aGUgR2FtZTwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTEwMCBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzcz1cInRleHQtbGlnaHQgZm9udC1zaXplLTIzXCI+V2hhdCB3ZSBvZmZlcjwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctMTAwIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHQtbGlnaHQgdy01MCBmb250LXNpemUtMThcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZCBjb25zZXF1dW50dXIgY3VscGEgY3VwaWRpdGF0ZSBkZWxlbml0aSBkaWN0YSBkaWduaXNzaW1vcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXN0aW5jdGlvIGRvbG9yIGRvbG9yZXMgaGljIGlwc2EgaXRhcXVlIGxhdWRhbnRpdW0gbW9sZXN0aWFzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vbGxpdGlhIG5vc3RydW0sIHBlcmZlcmVuZGlzIHByb3ZpZGVudCBxdW9zIHNhcGllbnRlIHZlcm8hXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciB3LTEwMCBoLTEwMFwiPlxuICAgICAgICAgICAgPGEgY2xhc3M9XCJidG4tb3JhbmdlIHRleHQtbGlnaHQgcC0yIHBsLTMgcHItMyBwb2ludGVyXCIgQGNsaWNrPVwic2hvd0xvZ2luTW9kYWxcIj5Kb2luIHRoZSBHYW1lPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiBcIk12cE1haW5cIixcbiAgICAgICAgcHJvcHM6IFtcbiAgICAgICAgICAgICdsb2dpblJlZGlyZWN0JyxcbiAgICAgICAgICAgICdpc0F1dGhvcml6ZSdcbiAgICAgICAgXSxcbiAgICAgICAgZGF0YSgpe1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBzaG93TG9naW5Nb2RhbCgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0F1dGhvcml6ZSl7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IHRoaXMubG9naW5SZWRpcmVjdFxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZ2luLnNob3cgPSB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH1cbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21wb25lbnQgdXBjb21pbmdfZXZlbnRzXCIgaWQ9XCJ1cGNvbWluZ19ldmVudHNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3VuZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48aW1nIHNyYz1cIi9pbWFnZXMvbGFtcC5zdmdcIiBhbHQ9XCJsYW1wXCIgLz48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAg0KLRg9GA0L3QuNGA0Ysge3tnYW1lfX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWQgdy0xMDAgaC0xMDAgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyXCIgdi1pZj1cImxvYWRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxvYWQvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncmlkXCIgdi1mb3I9XCJ0b3VybmFtZW50IGluIHRvdXJuYW1lbnRzXCIgdi1pZj1cIiFsb2FkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIDpocmVmPVwiJy9ydS9tdnAvdG91cm5hbWVudC8nICsgdG91cm5hbWVudC5pZFwiIGNsYXNzPVwiZ3JpZC1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2dvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyA6c3JjPVwidG91cm5hbWVudC5sb2dvXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3t0b3VybmFtZW50Lm5hbWV9fSAje3t0b3VybmFtZW50Lm51bWJlcn19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3R0b21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPtCd0LDQt9Cy0LDQvdC40LU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57e3RvdXJuYW1lbnQuZGF0ZX19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3R0b21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPtCU0LDRgtCwPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3t0b3VybmFtZW50Lm1vZGV9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm90dG9tXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7QoNC10LbQuNC8PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtbG9jay1vcGVuXCIgdi1pZj1cInRvdXJuYW1lbnQuYWNjZXNzXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1sb2NrXCIgdi1lbHNlPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm90dG9tXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7QlNC+0YHRgtGD0L88L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57e3RvdXJuYW1lbnQucHJpemV9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm90dG9tXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7Qn9GA0LjQtzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgTG9hZCBmcm9tIFwiLi4vLi4vTG9hZFwiO1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiBcIk12cFRvdXJuYW1lbnRzTGlzdFwiLFxuICAgICAgICBpbmplY3Q6IFtcbiAgICAgICAgICAgICdodHRwJyxcbiAgICAgICAgICAgICdoZWFkZXInXG4gICAgICAgIF0sXG4gICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICAgICdsb2FkJzogTG9hZFxuICAgICAgICB9LFxuICAgICAgICBkYXRhKCl7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHRvdXJuYW1lbnRzOiBbXSxcbiAgICAgICAgICAgICAgICBnYW1lczoge1xuICAgICAgICAgICAgICAgICAgICAnQ1M6R08nOiAnY3MnLFxuICAgICAgICAgICAgICAgICAgICAnRE9UQSc6ICdkb3RhJyxcbiAgICAgICAgICAgICAgICAgICAgJ1ZhbG9yYW50JzogJ3ZhbG9yYW50J1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbG9hZDogZmFsc2UsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHdhdGNoOiB7XG4gICAgICAgICAgICBnYW1lKCl7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRUb3VybmFtZW50c0J5R2FtZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgZ2FtZSgpe1xuICAgICAgICAgICAgICAgIHJldHVybiAgdGhpcy5oZWFkZXIuZ2FtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgZ2V0VG91cm5hbWVudHNCeUdhbWUoKXtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5odHRwLmdldFRvdXJuYW1lbnRzQnlHYW1lKHRoaXMuZ2FtZXNbdGhpcy5oZWFkZXIuZ2FtZV0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCh7ZGF0YX0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG91cm5hbWVudHMgPSBkYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgICAgICB0aGlzLmdldFRvdXJuYW1lbnRzQnlHYW1lKCk7XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF92bS5fbSgwKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2FkaW5naW8tc3Bpbm5lci1nZWFyLW10cGh3Z295NzllXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsZGlvLXJ3dXZhcnZucDFzXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIilcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJzbGlkZXNcIiB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImxvZ2luXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmNoZWNrU3RlcChcImxvZ2luXCIpLFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImNoZWNrU3RlcCgnbG9naW4nKVwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBhdHRyczogeyBlcnJvcjogX3ZtLmVycm9yLCBlbWFpbDogX3ZtLmVtYWlsLCBwYXNzd29yZDogX3ZtLnBhc3N3b3JkIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIHNldFN0ZXA6IF92bS5zZXRTdGVwLFxuICAgICAgICAgICAgYXV0aExvZ2luOiBfdm0uYXV0aExvZ2luLFxuICAgICAgICAgICAgY2xvc2U6IF92bS5jbG9zZSxcbiAgICAgICAgICAgIGlucHV0RW1haWw6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICAgIF92bS5lbWFpbCA9IHZhbHVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaW5wdXRQYXNzd29yZDogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICAgX3ZtLnBhc3N3b3JkID0gdmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtfdm0uX3QoXCJkZWZhdWx0XCIpXSxcbiAgICAgICAgMlxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJyZWdpc3RyYXRpb25cIixcbiAgICAgICAge1xuICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uY2hlY2tTdGVwKFwicmVnaXN0cmF0aW9uXCIpLFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImNoZWNrU3RlcCgncmVnaXN0cmF0aW9uJylcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgYXR0cnM6IHsgZW1haWw6IF92bS5lbWFpbCwgcGFzc3dvcmQ6IF92bS5wYXNzd29yZCwgY2hlY2s6IF92bS5jaGVjayB9LFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBzZXRTdGVwOiBfdm0uc2V0U3RlcCxcbiAgICAgICAgICAgIGNsb3NlOiBfdm0uY2xvc2UsXG4gICAgICAgICAgICBpbnB1dEVtYWlsOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgICBfdm0uZW1haWwgPSB2YWx1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlucHV0UGFzc3dvcmQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICAgIF92bS5wYXNzd29yZCA9IHZhbHVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICAgIF92bS5jaGVjayA9IHZhbHVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2VuZENvbmZpcm1Db2RlOiBfdm0uc2VuZENvbmZpcm1Db2RlXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbX3ZtLl90KFwiZGVmYXVsdFwiKV0sXG4gICAgICAgIDJcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJjb25maXJtLWNvZGVcIiwge1xuICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgdmFsdWU6IF92bS5jaGVja1N0ZXAoXCJjb25maXJtQ29kZVwiKSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwiY2hlY2tTdGVwKCdjb25maXJtQ29kZScpXCJcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIGF0dHJzOiB7IGNvZGVDb25maXJtZWQ6IF92bS5jb2RlQ29uZmlybWVkLCBlbWFpbDogX3ZtLmVtYWlsIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgc2V0U3RlcDogX3ZtLnNldFN0ZXAsXG4gICAgICAgICAgY2xvc2U6IF92bS5jbG9zZSxcbiAgICAgICAgICByZWdpc3RyYXRpb246IF92bS5yZWdpc3RyYXRpb24sXG4gICAgICAgICAgc2VuZENvbmZpcm1Db2RlOiBfdm0uc2VuZENvbmZpcm1Db2RlXG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwibmljay1uYW1lXCIsIHtcbiAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgIHZhbHVlOiBfdm0uY2hlY2tTdGVwKFwibmlja25hbWVcIiksXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcImNoZWNrU3RlcCgnbmlja25hbWUnKVwiXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBhdHRyczogeyBlbWFpbDogX3ZtLmVtYWlsIH0sXG4gICAgICAgIG9uOiB7IHNldFN0ZXA6IF92bS5zZXRTdGVwLCBjbG9zZTogX3ZtLmNsb3NlIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiY29uZ3JhdHVsYXRpb25cIiwge1xuICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgdmFsdWU6IF92bS5jaGVja1N0ZXAoXCJjb25ncmF0dWxhdGlvblwiKSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwiY2hlY2tTdGVwKCdjb25ncmF0dWxhdGlvbicpXCJcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIG9uOiB7IHNldFN0ZXA6IF92bS5zZXRTdGVwLCBjbG9zZTogX3ZtLmNsb3NlIH1cbiAgICAgIH0pXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwidHJhbnNpdGlvblwiLCB7IGF0dHJzOiB7IG5hbWU6IFwic2xpZGUtZmFkZXNcIiB9IH0sIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvZ2luX2Zvcm1cIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvZ2luX2Jsb2NrXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvZ290eXBlXCIgfSwgW1xuICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxvZ290eXBlXCIsXG4gICAgICAgICAgICBhdHRyczogeyBzcmM6IFwiL2ltYWdlcy9DaGFtcHNfbG9nb3R5cGUuc3ZnXCIgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvZ2luX3RpdGxlXCIgfSwgW1xuICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICDQn9C+0LTRgtCy0LXRgNC20LTQtdC90LjQtSDQv9C+0YfRgtGLXFxuICAgICAgICAgICAgXCIpXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvZ2luX2lucHV0IGQtZmxleFwiIH0sIFtcbiAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmNvbmZpcm1Db2RlLFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiY29uZmlybUNvZGVcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIHJlcXVpcmVkOiBcIlwiIH0sXG4gICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmNvbmZpcm1Db2RlIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX3ZtLmNvbmZpcm1Db2RlID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcItCa0L7QtCDQv9C+0LTRgtCy0LXRgNC20LTQtdC90LjRj1wiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJxdWVzdGlvbiBwdC0yXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICBcImRhdGEtdG9nZ2xlXCI6IFwidG9vbHRpcFwiLFxuICAgICAgICAgICAgICAgIFwiZGF0YS1wbGFjZW1lbnRcIjogXCJyaWdodFwiLFxuICAgICAgICAgICAgICAgIHRpdGxlOlxuICAgICAgICAgICAgICAgICAgXCLQndC1INC/0YDQuNGI0LXQuyDQutC+0LQ/INCf0YDQvtCy0LXRgNGM0YLQtSDQv9Cw0L/QutGDINCh0L/QsNC8INC40LvQuCDQv9C+0L/Ri9GC0LDQudGC0LXRgdGMINC+0YLQv9GA0LDQstC40YLRjCDQtdGJ0LUg0YDQsNC3LlwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLXF1ZXN0aW9uXCIgfSldXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInNlbmRcIiwgb246IHsgY2xpY2s6IF92bS5zZW5kUmVnaXN0cmF0aW9uQ29uZmlybSB9IH0sXG4gICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICDQntGC0L/RgNCw0LLQuNGC0YxcXG4gICAgICAgICAgICBcIildXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF92bS5zdWNjZXNzTWVzc2FnZSA9PSBudWxsXG4gICAgICAgICAgPyBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNlbmQgcmVzZW5kXCIsXG4gICAgICAgICAgICAgIGNsYXNzOiB7IGRpc2FibGVkOiBfdm0udGltZXIgPiAwIH0sXG4gICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgaW5uZXJIVE1MOiBfdm0uX3MoXCLQntGC0L/RgNCw0LLQuNGC0Ywg0LrQvtC0INC/0L7QstGC0L7RgNC90L4gXCIgKyBfdm0udGltZXJNZXNzYWdlKVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLnJlc2VuZENvbmZpcm1Db2RlIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX3ZtLmVycm9yTWVzc2FnZSAhPT0gbnVsbFxuICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlcnJvclwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZXJyb3JNZXNzYWdlKSArXG4gICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX3ZtLnN1Y2Nlc3NNZXNzYWdlICE9PSBudWxsXG4gICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVycm9yIHRleHQtc3VjY2Vzc1wiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uc3VjY2Vzc01lc3NhZ2UpICtcbiAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxpbmtzIGQtZmxleFwiIH0sIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm10LTFcIixcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRlbWl0KFwic2V0U3RlcFwiLCBcInJlZ2lzdHJhdGlvblwiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfYyhcInNwYW5cIiwgW192bS5fdihcIkJhY2tcIildKV1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtdC0xXCIsIG9uOiB7IGNsaWNrOiBfdm0uc2hvd05pY2tuYW1lIH0gfSwgW1xuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgY2xhc3M6IHsgZGlzYWJsZWQ6ICFfdm0uY29kZUNvbmZpcm1lZCB9IH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFwiTmV4dFwiKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjbG9zZWRcIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInN2Z1wiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTZcIixcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTZcIixcbiAgICAgICAgICAgICAgICB2aWV3Qm94OiBcIjAgMCAxNiAxNlwiLFxuICAgICAgICAgICAgICAgIGZpbGw6IFwibm9uZVwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uY2xvc2UgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJwYXRoXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgZDpcbiAgICAgICAgICAgICAgICAgICAgXCJNOC44ODM5MiA4LjAwMDA0TDE1LjgxNjkgMS4wNjY5OEMxNi4wNjEgMC44MjI4ODIgMTYuMDYxIDAuNDI3MTMzIDE1LjgxNjkgMC4xODMwN0MxNS41NzI4IC0wLjA2MDk5MjIgMTUuMTc3MSAtMC4wNjEwMjM0IDE0LjkzMyAwLjE4MzA3TDcuOTk5OTggNy4xMTYxM0wxLjA2Njk3IDAuMTgzMDdDMC44MjI4OCAtMC4wNjEwMjM0IDAuNDI3MTMyIC0wLjA2MTAyMzQgMC4xODMwNyAwLjE4MzA3Qy0wLjA2MDk5MiAwLjQyNzE2NCAtMC4wNjEwMjMzIDAuODIyOTE0IDAuMTgzMDcgMS4wNjY5OEw3LjExNjA4IDhMMC4xODMwNyAxNC45MzMxQy0wLjA2MTAyMzMgMTUuMTc3MiAtMC4wNjEwMjMzIDE1LjU3MjkgMC4xODMwNyAxNS44MTdDMC4zMDUxMDEgMTUuOTM5IDAuNDY1MDY5IDE2IDAuNjI1MDM3IDE2QzAuNzg1MDA1IDE2IDAuOTQ0OTQzIDE1LjkzOSAxLjA2NyAxNS44MTdMNy45OTk5OCA4Ljg4Mzk0TDE0LjkzMyAxNS44MTdDMTUuMDU1IDE1LjkzOSAxNS4yMTUgMTYgMTUuMzc1IDE2QzE1LjUzNDkgMTYgMTUuNjk0OSAxNS45MzkgMTUuODE2OSAxNS44MTdDMTYuMDYxIDE1LjU3MjkgMTYuMDYxIDE1LjE3NzEgMTUuODE2OSAxNC45MzMxTDguODgzOTIgOC4wMDAwNFpcIixcbiAgICAgICAgICAgICAgICAgIGZpbGw6IFwiIzg2ODg4QVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwidHJhbnNpdGlvblwiLCB7IGF0dHJzOiB7IG5hbWU6IFwic2xpZGUtZmFkZXNcIiB9IH0sIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvZ2luX2Zvcm1cIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvZ2luX2Jsb2NrXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvZ290eXBlXCIgfSwgW1xuICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxvZ290eXBlXCIsXG4gICAgICAgICAgICBhdHRyczogeyBzcmM6IFwiL2ltYWdlcy9DaGFtcHNfbG9nb3R5cGUuc3ZnXCIgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvZ2luX3RpdGxlXCIgfSwgW1xuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgINCf0L7Qt9C00YDQsNCy0LvRj9C10Lwg0YEg0YPRgdC/0LXRiNC90L7QuSDRgNC10LPQtdGB0YLRgNCw0YbQuNC10LkhXFxuICAgICAgICAgICAgXCJcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNlbmRcIixcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRlbWl0KFwic2V0U3RlcFwiLCBcImZpbmlzaFwiKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgINCY0LPRgNCw0YLRjFxcbiAgICAgICAgICAgIFwiKV1cbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjbG9zZWRcIixcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRlbWl0KFwiY2xvc2VcIilcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwic3ZnXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjE2XCIsXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTZcIixcbiAgICAgICAgICAgICAgICAgIHZpZXdCb3g6IFwiMCAwIDE2IDE2XCIsXG4gICAgICAgICAgICAgICAgICBmaWxsOiBcIm5vbmVcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwicGF0aFwiLCB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBkOlxuICAgICAgICAgICAgICAgICAgICAgIFwiTTguODgzOTIgOC4wMDAwNEwxNS44MTY5IDEuMDY2OThDMTYuMDYxIDAuODIyODgyIDE2LjA2MSAwLjQyNzEzMyAxNS44MTY5IDAuMTgzMDdDMTUuNTcyOCAtMC4wNjA5OTIyIDE1LjE3NzEgLTAuMDYxMDIzNCAxNC45MzMgMC4xODMwN0w3Ljk5OTk4IDcuMTE2MTNMMS4wNjY5NyAwLjE4MzA3QzAuODIyODggLTAuMDYxMDIzNCAwLjQyNzEzMiAtMC4wNjEwMjM0IDAuMTgzMDcgMC4xODMwN0MtMC4wNjA5OTIgMC40MjcxNjQgLTAuMDYxMDIzMyAwLjgyMjkxNCAwLjE4MzA3IDEuMDY2OThMNy4xMTYwOCA4TDAuMTgzMDcgMTQuOTMzMUMtMC4wNjEwMjMzIDE1LjE3NzIgLTAuMDYxMDIzMyAxNS41NzI5IDAuMTgzMDcgMTUuODE3QzAuMzA1MTAxIDE1LjkzOSAwLjQ2NTA2OSAxNiAwLjYyNTAzNyAxNkMwLjc4NTAwNSAxNiAwLjk0NDk0MyAxNS45MzkgMS4wNjcgMTUuODE3TDcuOTk5OTggOC44ODM5NEwxNC45MzMgMTUuODE3QzE1LjA1NSAxNS45MzkgMTUuMjE1IDE2IDE1LjM3NSAxNkMxNS41MzQ5IDE2IDE1LjY5NDkgMTUuOTM5IDE1LjgxNjkgMTUuODE3QzE2LjA2MSAxNS41NzI5IDE2LjA2MSAxNS4xNzcxIDE1LjgxNjkgMTQuOTMzMUw4Ljg4MzkyIDguMDAwMDRaXCIsXG4gICAgICAgICAgICAgICAgICAgIGZpbGw6IFwiIzg2ODg4QVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF1cbiAgICAgICAgKVxuICAgICAgXSlcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJ0cmFuc2l0aW9uXCIsIHsgYXR0cnM6IHsgbmFtZTogXCJzbGlkZS1mYWRlc1wiIH0gfSwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9naW5fZm9ybVwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9naW5fYmxvY2tcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9nb3R5cGVcIiB9LCBbXG4gICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibG9nb3R5cGVcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogXCIvaW1hZ2VzL0NoYW1wc19sb2dvdHlwZS5zdmdcIiB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9naW5fdGl0bGVcIiB9LCBbXG4gICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgINCS0YXQvtC0INCyINC70LjRh9C90YvQuSDQutCw0LHQuNC90LXRglxcbiAgICAgICAgICAgIFwiKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2dpbl9pbnB1dFwiIH0sIFtcbiAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiZW1haWxcIiB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJGVtaXQoXCJpbnB1dEVtYWlsXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi0JDQtNGA0LXRgSDRjdC70LXQutGC0YDQvtC90L3QvtC5INC/0L7Rh9GC0YtcIildKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2dpbl9pbnB1dFwiIH0sIFtcbiAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwicGFzc3dvcmRcIiB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJGVtaXQoXCJpbnB1dFBhc3N3b3JkXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi0J/QsNGA0L7Qu9GMXCIpXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic2VuZFwiLFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJGVtaXQoXCJhdXRoTG9naW5cIilcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICDQktC+0LnRgtC4XFxuICAgICAgICAgICAgXCIpXVxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfdm0uZXJyb3JcbiAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZXJyb3JcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICDQndC10L/RgNCw0LLQuNC70YzQvdGL0Lkg0LvQvtCz0LjQvSDQuNC70Lgg0L/QsNGA0L7Qu9GMXFxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInN1YnRleHRcIiB9LCBbXG4gICAgICAgICAgX3ZtLl92KFwi0JjQu9C4INCy0L7QudC00LjRgtC1INGBINC/0L7QvNC+0YnRjNGOXCIpXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImFsdGVybmF0ZVwiIH0sIFtfdm0uX3QoXCJkZWZhdWx0XCIpXSwgMiksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGlua3NcIixcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRlbWl0KFwic2V0U3RlcFwiLCBcInJlZ2lzdHJhdGlvblwiKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX2MoXCJkaXZcIiwgW19jKFwic3BhblwiLCBbX3ZtLl92KFwi0KDQtdCz0LjRgdGC0YDQsNGG0LjRj1wiKV0pXSldXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2xvc2VkXCIsXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kZW1pdChcImNsb3NlXCIpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInN2Z1wiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gICAgICAgICAgICAgICAgICB3aWR0aDogXCIxNlwiLFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjE2XCIsXG4gICAgICAgICAgICAgICAgICB2aWV3Qm94OiBcIjAgMCAxNiAxNlwiLFxuICAgICAgICAgICAgICAgICAgZmlsbDogXCJub25lXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcInBhdGhcIiwge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgZDpcbiAgICAgICAgICAgICAgICAgICAgICBcIk04Ljg4MzkyIDguMDAwMDRMMTUuODE2OSAxLjA2Njk4QzE2LjA2MSAwLjgyMjg4MiAxNi4wNjEgMC40MjcxMzMgMTUuODE2OSAwLjE4MzA3QzE1LjU3MjggLTAuMDYwOTkyMiAxNS4xNzcxIC0wLjA2MTAyMzQgMTQuOTMzIDAuMTgzMDdMNy45OTk5OCA3LjExNjEzTDEuMDY2OTcgMC4xODMwN0MwLjgyMjg4IC0wLjA2MTAyMzQgMC40MjcxMzIgLTAuMDYxMDIzNCAwLjE4MzA3IDAuMTgzMDdDLTAuMDYwOTkyIDAuNDI3MTY0IC0wLjA2MTAyMzMgMC44MjI5MTQgMC4xODMwNyAxLjA2Njk4TDcuMTE2MDggOEwwLjE4MzA3IDE0LjkzMzFDLTAuMDYxMDIzMyAxNS4xNzcyIC0wLjA2MTAyMzMgMTUuNTcyOSAwLjE4MzA3IDE1LjgxN0MwLjMwNTEwMSAxNS45MzkgMC40NjUwNjkgMTYgMC42MjUwMzcgMTZDMC43ODUwMDUgMTYgMC45NDQ5NDMgMTUuOTM5IDEuMDY3IDE1LjgxN0w3Ljk5OTk4IDguODgzOTRMMTQuOTMzIDE1LjgxN0MxNS4wNTUgMTUuOTM5IDE1LjIxNSAxNiAxNS4zNzUgMTZDMTUuNTM0OSAxNiAxNS42OTQ5IDE1LjkzOSAxNS44MTY5IDE1LjgxN0MxNi4wNjEgMTUuNTcyOSAxNi4wNjEgMTUuMTc3MSAxNS44MTY5IDE0LjkzMzFMOC44ODM5MiA4LjAwMDA0WlwiLFxuICAgICAgICAgICAgICAgICAgICBmaWxsOiBcIiM4Njg4OEFcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwidHJhbnNpdGlvblwiLCB7IGF0dHJzOiB7IG5hbWU6IFwic2xpZGUtZmFkZXNcIiB9IH0sIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvZ2luX2Zvcm1cIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvZ2luX2Jsb2NrXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvZ290eXBlXCIgfSwgW1xuICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxvZ290eXBlXCIsXG4gICAgICAgICAgICBhdHRyczogeyBzcmM6IFwiL2ltYWdlcy9DaGFtcHNfbG9nb3R5cGUuc3ZnXCIgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvZ2luX3RpdGxlXCIgfSwgW1xuICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICDQktCy0LXQtNC40YLQtSDRgdCy0L7QuSDQvdC40LrQvdC10LnQvFxcbiAgICAgICAgICAgIFwiKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2dpbl9pbnB1dFwiIH0sIFtcbiAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLm5pY2tuYW1lLFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwibmlja25hbWVcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIG5hbWU6IFwiZW1haWxcIiwgcmVxdWlyZWQ6IFwiXCIgfSxcbiAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ubmlja25hbWUgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfdm0ubmlja25hbWUgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi0JvQvtCz0LjQvSAoTmlja25hbWUpXCIpXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF92bS5lcnJvck1lc3NhZ2UgIT09IG51bGxcbiAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZXJyb3JcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmVycm9yTWVzc2FnZSkgK1xuICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic2VuZFwiLCBvbjogeyBjbGljazogX3ZtLnNldE5pY2tuYW1lIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICDQl9Cw0LLQtdGA0YjQuNGC0Ywg0YDQtdCz0LXRgdGC0YDQsNGG0LjRjlxcbiAgICAgICAgICAgIFwiKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjbG9zZWRcIiwgb246IHsgY2xpY2s6IF92bS5jbG9zZSB9IH0sIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwic3ZnXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxNlwiLFxuICAgICAgICAgICAgICAgIGhlaWdodDogXCIxNlwiLFxuICAgICAgICAgICAgICAgIHZpZXdCb3g6IFwiMCAwIDE2IDE2XCIsXG4gICAgICAgICAgICAgICAgZmlsbDogXCJub25lXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJwYXRoXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgZDpcbiAgICAgICAgICAgICAgICAgICAgXCJNOC44ODM5MiA4LjAwMDA0TDE1LjgxNjkgMS4wNjY5OEMxNi4wNjEgMC44MjI4ODIgMTYuMDYxIDAuNDI3MTMzIDE1LjgxNjkgMC4xODMwN0MxNS41NzI4IC0wLjA2MDk5MjIgMTUuMTc3MSAtMC4wNjEwMjM0IDE0LjkzMyAwLjE4MzA3TDcuOTk5OTggNy4xMTYxM0wxLjA2Njk3IDAuMTgzMDdDMC44MjI4OCAtMC4wNjEwMjM0IDAuNDI3MTMyIC0wLjA2MTAyMzQgMC4xODMwNyAwLjE4MzA3Qy0wLjA2MDk5MiAwLjQyNzE2NCAtMC4wNjEwMjMzIDAuODIyOTE0IDAuMTgzMDcgMS4wNjY5OEw3LjExNjA4IDhMMC4xODMwNyAxNC45MzMxQy0wLjA2MTAyMzMgMTUuMTc3MiAtMC4wNjEwMjMzIDE1LjU3MjkgMC4xODMwNyAxNS44MTdDMC4zMDUxMDEgMTUuOTM5IDAuNDY1MDY5IDE2IDAuNjI1MDM3IDE2QzAuNzg1MDA1IDE2IDAuOTQ0OTQzIDE1LjkzOSAxLjA2NyAxNS44MTdMNy45OTk5OCA4Ljg4Mzk0TDE0LjkzMyAxNS44MTdDMTUuMDU1IDE1LjkzOSAxNS4yMTUgMTYgMTUuMzc1IDE2QzE1LjUzNDkgMTYgMTUuNjk0OSAxNS45MzkgMTUuODE2OSAxNS44MTdDMTYuMDYxIDE1LjU3MjkgMTYuMDYxIDE1LjE3NzEgMTUuODE2OSAxNC45MzMxTDguODgzOTIgOC4wMDAwNFpcIixcbiAgICAgICAgICAgICAgICAgIGZpbGw6IFwiIzg2ODg4QVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwidHJhbnNpdGlvblwiLCB7IGF0dHJzOiB7IG5hbWU6IFwic2xpZGUtZmFkZXNcIiB9IH0sIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvZ2luX2Zvcm1cIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvZ2luX3JlcVwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2dpbl9ibG9ja1wiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvZ290eXBlXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsb2dvdHlwZVwiLFxuICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IFwiL2ltYWdlcy9DaGFtcHNfbG9nb3R5cGUuc3ZnXCIgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9naW5fdGl0bGVcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgINCg0LXQs9C40YHRgtGA0LDRhtC40Y9cXG4gICAgICAgICAgICAgICAgXCIpXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvZ2luX2lucHV0XCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiIH0sXG4gICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZW1haWwgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRlbWl0KFwiaW5wdXRFbWFpbFwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLQkNC00YDQtdGBINGN0LvQtdC60YLRgNC+0L3QvdC+0Lkg0L/QvtGH0YLRi1wiKV0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvZ2luX2lucHV0XCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwicGFzc3dvcmRcIiB9LFxuICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnBhc3N3b3JkIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kZW1pdChcImlucHV0UGFzc3dvcmRcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi0J/QsNGA0L7Qu9GMXCIpXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9naW5fY2hlY2tcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtcbiAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJjaGVja2JveFwiIH0sXG4gICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgY2hlY2tlZDogX3ZtLmNoZWNrIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJGVtaXQoXCJpbnB1dFwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgaHJlZjogXCIvcnUvdGVybXMtb2YtdXNlXCIsIHRhcmdldDogXCJfYmxhbmtcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICBcItCe0LfQvdCw0LrQvtC80LvQtdC9INGBINC/0YDQsNCy0LjQu9Cw0LzQuCDQuNGB0L/QvtC70YzQt9C+0LLQsNC90LjRjyDRgdC10YDQstC40YHQsCDCq0NoYW1wc8K7XCJcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNlbmRcIixcbiAgICAgICAgICAgICAgc3R5bGU6IHsgb3BhY2l0eTogX3ZtLiRwYXJlbnQuY2hlY2sgPyBcIjFcIiA6IFwiLjVcIiB9LFxuICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmNoZWNrSXNFbWFpbFZhbGlkIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAg0JfQsNGA0LXQs9C40YHRgtGA0LjRgNC+0LLQsNGC0YzRgdGPXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLmVycm9yTWVzc2FnZSAhPT0gbnVsbFxuICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVycm9yXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZXJyb3JNZXNzYWdlKSArXG4gICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic3VidGV4dFwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcItCY0LvQuCDQstC+0LnQtNC40YLQtSDRgSDQv9C+0LzQvtGJ0YzRjlwiKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJhbHRlcm5hdGVcIiB9LCBbX3ZtLl90KFwiZGVmYXVsdFwiKV0sIDIpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsaW5rc1wiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJGVtaXQoXCJzZXRTdGVwXCIsIFwibG9naW5cIilcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcItCS0YXQvtC0INCyINC70LjRh9C90YvQuSDQutCw0LHQuNC90LXRglwiKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2xvc2VkXCIsIG9uOiB7IGNsaWNrOiBfdm0uY2xvc2UgfSB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJzdmdcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTZcIixcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxNlwiLFxuICAgICAgICAgICAgICAgICAgdmlld0JveDogXCIwIDAgMTYgMTZcIixcbiAgICAgICAgICAgICAgICAgIGZpbGw6IFwibm9uZVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJwYXRoXCIsIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGQ6XG4gICAgICAgICAgICAgICAgICAgICAgXCJNOC44ODM5MiA4LjAwMDA0TDE1LjgxNjkgMS4wNjY5OEMxNi4wNjEgMC44MjI4ODIgMTYuMDYxIDAuNDI3MTMzIDE1LjgxNjkgMC4xODMwN0MxNS41NzI4IC0wLjA2MDk5MjIgMTUuMTc3MSAtMC4wNjEwMjM0IDE0LjkzMyAwLjE4MzA3TDcuOTk5OTggNy4xMTYxM0wxLjA2Njk3IDAuMTgzMDdDMC44MjI4OCAtMC4wNjEwMjM0IDAuNDI3MTMyIC0wLjA2MTAyMzQgMC4xODMwNyAwLjE4MzA3Qy0wLjA2MDk5MiAwLjQyNzE2NCAtMC4wNjEwMjMzIDAuODIyOTE0IDAuMTgzMDcgMS4wNjY5OEw3LjExNjA4IDhMMC4xODMwNyAxNC45MzMxQy0wLjA2MTAyMzMgMTUuMTc3MiAtMC4wNjEwMjMzIDE1LjU3MjkgMC4xODMwNyAxNS44MTdDMC4zMDUxMDEgMTUuOTM5IDAuNDY1MDY5IDE2IDAuNjI1MDM3IDE2QzAuNzg1MDA1IDE2IDAuOTQ0OTQzIDE1LjkzOSAxLjA2NyAxNS44MTdMNy45OTk5OCA4Ljg4Mzk0TDE0LjkzMyAxNS44MTdDMTUuMDU1IDE1LjkzOSAxNS4yMTUgMTYgMTUuMzc1IDE2QzE1LjUzNDkgMTYgMTUuNjk0OSAxNS45MzkgMTUuODE2OSAxNS44MTdDMTYuMDYxIDE1LjU3MjkgMTYuMDYxIDE1LjE3NzEgMTUuODE2OSAxNC45MzMxTDguODgzOTIgOC4wMDAwNFpcIixcbiAgICAgICAgICAgICAgICAgICAgZmlsbDogXCIjODY4ODhBXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9naW5fcmVxX2Jsb2NrXCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaXRlbVwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIpLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIFwi0KLRgNC10L3QtdGA0YPQudGC0LXRgdGMINCy0LzQtdGB0YLQtSDRgSDQu9GD0YfRiNC40LzQuCDQuNCz0YDQvtC60LDQvNC4INCyINCy0LDRiNC40YUg0LvRjtCx0LjQvNGL0YUg0LjQs9GA0LDRhVwiXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIml0ZW1cIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCBbX3ZtLl92KFwi0J/QvtGB0LvQtdC00L3QuNC1INC90L7QstC+0YHRgtC4INC4INGB0L7QsdGL0YLQuNGPXCIpXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaXRlbVwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIpLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtfdm0uX3YoXCLQktC10LvQuNC60L7Qu9C10L/QvdC+0LUg0YHQvtC+0LHRidC10YHRgtCy0L5cIildKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpdGVtXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgW192bS5fdihcItCi0YDQsNC90YHQu9GP0YbQuNC4INC4INGA0LXQt9GD0LvRjNGC0LDRgtGLINC80LDRgtGH0LXQuVwiKV0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIml0ZW1cIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCBbX3ZtLl92KFwi0JDQvdCw0LvQuNGC0LjQutCwINC+0YIg0L/RgNC+0YTQtdGB0YHQuNC+0L3QsNC70L7QslwiKV0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZ3JpZFwiIH0sIFtcbiAgICBfYyhcImFcIiwgeyBzdGF0aWNDbGFzczogXCJncmlkLXJvd1wiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZGF0YVwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0aXRsZVwiIH0sIFtcbiAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgIF92bS5fcyhfdm0udGVhbS5uYW1lKSArXG4gICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX3ZtLl9tKDApXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImRhdGFcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGl0bGVcIiB9LCBbXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnRlYW0udGFnKSArXG4gICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX3ZtLl9tKDEpXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImRhdGFcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGl0bGVcIiB9LCBbXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnRlYW0ubWVtYmVycy5sZW5ndGgpICtcbiAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfdm0uX20oMilcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZGF0YSBwdC0yXCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImFcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4tb3JhbmdlIHRleHQtbGlnaHQgcC0yIHBvaW50ZXJcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IF92bS5odHRwLmdldFRlYW1MaW5rKF92bS50ZWFtLmlkKSB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgINCf0L7RgdC80L7RgtGA0LXRgtGMXFxuICAgICAgICAgICAgXCIpXVxuICAgICAgICApXG4gICAgICBdKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJvdHRvbVwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZGF0ZVwiIH0sIFtfYyhcInNwYW5cIiwgW192bS5fdihcItCd0LDQt9Cy0LDQvdC40LVcIildKV0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJib3R0b21cIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImRhdGVcIiB9LCBbX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLQotC10LNcIildKV0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJib3R0b21cIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImRhdGVcIiB9LCBbX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLQo9GH0LDRgdC90LjQutC+0LJcIildKV0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZXZlbnRzX3ZpZXdcIiB9LCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXJcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbXBvbmVudCB1cGNvbWluZ19ldmVudHNcIiB9LFxuICAgICAgICAgIF92bS5fbChfdm0udGVhbXMsIGZ1bmN0aW9uKHRlYW0sIGtleSkge1xuICAgICAgICAgICAgcmV0dXJuIF9jKFwibXZwLWpvaW5lZC10ZWFtXCIsIHsga2V5OiBrZXksIGF0dHJzOiB7IHRlYW06IHRlYW0gfSB9KVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgXSlcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImhlYWRlciBtdC0zXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxmdFwiIH0sIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjbGFzczogeyBhY3RpdmU6IF92bS5hY3RpdmUgPT09IFwiY29tbWFuZHNcIiB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIF92bS5hY3RpdmUgPSBcImNvbW1hbmRzXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwi0JrQntCc0JDQndCU0KtcIildXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNsYXNzOiB7IGFjdGl2ZTogX3ZtLmFjdGl2ZSA9PT0gXCJ0b3VybmFtZW50c1wiIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgX3ZtLmFjdGl2ZSA9IFwidG91cm5hbWVudHNcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCLQotCj0KDQndCY0KDQq1wiKV1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY2xhc3M6IHsgYWN0aXZlOiBfdm0uYWN0aXZlID09PSBcIm1hdGNoZXNcIiB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIF92bS5hY3RpdmUgPSBcIm1hdGNoZXNcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCLQnNCQ0KLQp9CYXCIpXVxuICAgICAgICAgIClcbiAgICAgICAgXSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiTXZwVGVhbXNcIilcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkIHctNTAgbXItMiBib3JkZXItcmFkaXVzLTBcIiB9LCBbXG4gICAgX3ZtLnRlYW0gPT09IHVuZGVmaW5lZFxuICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtYm9keVwiIH0sIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiaDVcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC10aXRsZSBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgICBcIiArIF92bS5fcyhfdm0udGl0bGUpICsgXCJcXG4gICAgICAgICAgICBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYmFkZ2UgYmFkZ2Utd2FybmluZyBib3JkZXItcmFkaXVzLTBcIiB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS50eXBlKSldXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC10ZXh0XCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLmRlc2NyaXB0aW9uKSArIFwiXFxuICAgICAgICBcIilcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0bi1vcmFuZ2UgdGV4dC1saWdodCBwLTIgcG9pbnRlclwiLFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIFwiZGF0YS10b2dnbGVcIjogXCJtb2RhbFwiLFxuICAgICAgICAgICAgICAgIFwiZGF0YS10YXJnZXRcIjogXCIjbWFrZUNvbWFuZE1vZGFsXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRlbWl0KFwic2V0Q2FwYWNpdHlcIiwgX3ZtLmNhcGFjaXR5KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAg0KHQvtC30LTQsNGC0Ywg0LrQvtC80LDQvdC00YMgXCIgK1xuICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS50eXBlKSArXG4gICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgICAgICAgXSlcbiAgICAgIDogX3ZtLl9lKCksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfdm0udGVhbSAhPT0gdW5kZWZpbmVkXG4gICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1ib2R5XCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJoNVwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjYXJkLXRpdGxlIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS50ZWFtLm5hbWUpICsgXCJcXG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJhZGdlIGJhZGdlLXdhcm5pbmcgYm9yZGVyLXJhZGl1cy0wXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS50eXBlKSArIFwiXFxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC10ZXh0XCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiIFwiICsgX3ZtLl9zKF92bS50ZWFtLm1lbWJlcnMubGVuZ3RoKSArIFwiINGD0YfQsNGB0L3QuNC60L7QslwiKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuLW9yYW5nZSB0ZXh0LWxpZ2h0IHAtMiBwb2ludGVyXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IF92bS5odHRwLmdldFRlYW1MaW5rKF92bS50ZWFtLmlkKSB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgICAgINCf0L7RgdC80L7RgtGA0LXRgtGMXFxuICAgICAgICBcIildXG4gICAgICAgICAgKVxuICAgICAgICBdKVxuICAgICAgOiBfdm0uX2UoKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJncmlkXCIgfSwgW1xuICAgIF9jKFwiYVwiLCB7IHN0YXRpY0NsYXNzOiBcImdyaWQtcm93XCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2dvXCIgfSwgW1xuICAgICAgICBfdm0ubWVtYmVyLmltYWdlICE9PSBudWxsXG4gICAgICAgICAgPyBfYyhcImltZ1wiKVxuICAgICAgICAgIDogX2MoXCJpbWdcIiwgeyBhdHRyczogeyBzcmM6IFwiL2ltYWdlcy9ub0xvZ28ucG5nXCIgfSB9KVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkYXRhXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRpdGxlXCIgfSwgW1xuICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5tZW1iZXIubmlja25hbWUpICtcbiAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfdm0uX20oMClcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZGF0YVwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0aXRsZVwiIH0sIFtcbiAgICAgICAgICBfdm0uaXNDYXB0YWluXG4gICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICDQmtCw0L/QuNGC0LDQvVxcbiAgICAgICAgICAgICAgICBcIilcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIDogX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgINCY0LPRgNC+0LpcXG4gICAgICAgICAgICAgICAgXCIpXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfdm0uX20oMSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZGF0YVwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0aXRsZVwiIH0sIFtcbiAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgaHJlZjogX3ZtLmdldFN0ZWFtTGluayhfdm0ubWVtYmVyLnN0ZWFtKSB9IH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHdpZHRoOiBcIjIwcHhcIiwgc3JjOiBcIi9pbWFnZXMvbG9naW5fc3RlYW0uc3ZnXCIgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX3ZtLl9tKDIpXG4gICAgICBdKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJvdHRvbVwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZGF0ZVwiIH0sIFtfYyhcInNwYW5cIiwgW192bS5fdihcItCd0LjQulwiKV0pXSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJvdHRvbVwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZGF0ZVwiIH0sIFtfYyhcInNwYW5cIiwgW192bS5fdihcItCg0L7Qu9GMXCIpXSldKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYm90dG9tXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkYXRlXCIgfSwgW19jKFwic3BhblwiLCBbX3ZtLl92KFwi0KHRgtC40LxcIildKV0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImhlYWRlciBtdC0zIGQtYmxvY2tcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxmdFwiIH0sIFtcbiAgICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgaHJlZjogX3ZtLmh0dHAuZ2V0TXZwTGluaygpIH0gfSwgW192bS5fdihcItCd0LDQt9Cw0LRcIildKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJldmVudHNfdmlld1wiLCBhdHRyczogeyBpZDogXCJ0ZWFtTWVtYmVyc1wiIH0gfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lclwiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY29tcG9uZW50IHVwY29taW5nX2V2ZW50c1wiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcInVwY29taW5nX2V2ZW50c1wiIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF92bS5fbChfdm0udGVhbS5tZW1iZXJzLCBmdW5jdGlvbihtZW1iZXIsIGtleSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS50ZWFtLmhhc093blByb3BlcnR5KFwibWVtYmVyc1wiKVxuICAgICAgICAgICAgICAgICAgICA/IF9jKFwibXZwLXRlYW0tbWVtYmVyXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWVtYmVyOiBtZW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiaXMtY2FwdGFpblwiOiBfdm0uY2hlY2tNZW1iZXJJc0NhcHRhaW4obWVtYmVyKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAyXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvdyBtdC0yXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLmlzQ3JlYXRvclxuICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGZ0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJhXCIsIHsgb246IHsgY2xpY2s6IF92bS5kZWxldGVUZWFtIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg0KPQtNCw0LvQuNGC0Ywg0LrQvtC80LDQvdC00YNcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4tb3JhbmdlIHRleHQtbGlnaHQgcG9pbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uc2hvd0FkZE1vZGFsIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS1wbHVzXCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiwqDCoNCU0L7QsdCw0LLQuNGC0Ywg0YPRh9Cw0YHQvdC40LrQvtCyXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICA6IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGZ0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuLW9yYW5nZSB0ZXh0LWxpZ2h0IHBvaW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBfdm0uaHR0cC51c2VyTGVhdmVUZWFtTGluayhfdm0udGVhbUlkKSB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDQn9C+0LrQuNC90YPRgtGMINC60L7QvNCw0L3QtNGDXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImhlYWRlclwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm91bmRcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICBfYyhcImltZ1wiLCB7IGF0dHJzOiB7IHNyYzogXCIvaW1hZ2VzL2xhbXAuc3ZnXCIsIGFsdDogXCJsYW1wXCIgfSB9KVxuICAgICAgICBdKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0aXRsZVwiIH0sIFtcbiAgICAgICAgX3ZtLl92KFxuICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQo9GH0LDRgdGC0L3QuNC60LhcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgKVxuICAgICAgXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250XCIgfSwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyIGNvbW1hbmRzIHAtMCBtdC0zXCIgfSwgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidy03NSBkLWZsZXhcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJtdnAtdGVhbVwiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICB0aXRsZTogXCLQndCw0YHRgtGA0L7QtdC9INC40LPRgNCw0YLRjCDRgdC10YDRjNC10LfQvdC+P1wiLFxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgICAgICBcItCh0L7Qt9C00LDQuSDRgdCy0L7RjiDQutC+0LzQsNC90LTRgyDQtNC70Y8g0YLRg9GA0LjQutC+0LIgNXY1INC4INCy0YDRi9Cy0LDQudGB0Y8g0LIg0LrQuNCx0LXRgNGB0L/QvtGA0YJcIixcbiAgICAgICAgICAgICAgdHlwZTogXCI1eDVcIixcbiAgICAgICAgICAgICAgY2FwYWNpdHk6IFwiNVwiLFxuICAgICAgICAgICAgICB0ZWFtczogX3ZtLnRlYW1zXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb246IHsgc2V0Q2FwYWNpdHk6IF92bS5zZXRDYXBhY2l0eSB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcIm12cC10ZWFtXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIHRpdGxlOiBcItCd0LDQv9Cw0YDQvdC40LrQuFwiLFxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgICAgICBcItCd0LXRgiDQv9C+0YHRgtC+0Y/QvdC90L7QuSDQutC+0LzQsNC90LTRiz8g0J/QvtC30L7QstC4INC00YDRg9Cz0LAg0Lgg0LLRi9C90L7RgdC40YLQtSDRgdC+0L/QtdGA0L3QuNC60L7QsiDQstC80LXRgdGC0LVcIixcbiAgICAgICAgICAgICAgdHlwZTogXCIyeDJcIixcbiAgICAgICAgICAgICAgY2FwYWNpdHk6IFwiMlwiLFxuICAgICAgICAgICAgICB0ZWFtczogX3ZtLnRlYW1zXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb246IHsgc2V0Q2FwYWNpdHk6IF92bS5zZXRDYXBhY2l0eSB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1vZGFsIGZhZGVcIixcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgaWQ6IFwibWFrZUNvbWFuZE1vZGFsXCIsXG4gICAgICAgICAgICB0YWJpbmRleDogXCItMVwiLFxuICAgICAgICAgICAgXCJhcmlhLWxhYmVsbGVkYnlcIjogXCJleGFtcGxlTW9kYWxMYWJlbFwiLFxuICAgICAgICAgICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtZGlhbG9nXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtb2RhbC1jb250ZW50IGJvcmRlci1yYWRpdXMtMFwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLWJvZHlcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl9tKDEpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwi0J3QsNC30LLQsNC90LjQtSDQutC+0LzQsNC90LTRi1wiKV0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmNvbW1hbmQubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiY29tbWFuZC5uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbCBib3JkZXItcmFkaXVzLTBcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5jb21tYW5kLm5hbWUgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uY29tbWFuZCwgXCJuYW1lXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAhX3ZtLm1lc3NhZ2VzLmVycm9yLmhhc093blByb3BlcnR5KFwibmFtZVwiKVxuICAgICAgICAgICAgICAgICAgICA/IF9jKFwic21hbGxcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLXRleHQgdGV4dC1tdXRlZFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCc0L7QttC90L4g0LvQsNGC0LjQvdGB0LrQuNC1INCx0YPQutCy0Ysg0Lgg0YbQuNGE0YDRi1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLm1lc3NhZ2VzLmVycm9yLmhhc093blByb3BlcnR5KFwibmFtZVwiKVxuICAgICAgICAgICAgICAgICAgICA/IF9jKFwic21hbGxcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5tZXNzYWdlcy5lcnJvci5uYW1lWzBdKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCLQotC10LMg0LrQvtC80LDQvdC00YtcIildKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5jb21tYW5kLnRhZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiY29tbWFuZC50YWdcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sIGJvcmRlci1yYWRpdXMtMCB3LTUwXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uY29tbWFuZC50YWcgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uY29tbWFuZCwgXCJ0YWdcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICFfdm0ubWVzc2FnZXMuZXJyb3IuaGFzT3duUHJvcGVydHkoXCJ0YWdcIilcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNtYWxsXCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS10ZXh0IHRleHQtbXV0ZWRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQnNCw0LrRgdC40LzRg9C8IDYg0YHQuNC80LLQvtC70L7QslxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLm1lc3NhZ2VzLmVycm9yLmhhc093blByb3BlcnR5KFwidGFnXCIpXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJzbWFsbFwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLm1lc3NhZ2VzLmVycm9yLnRhZ1swXSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLm1lc3NhZ2VzLnN1Y2Nlc3MgIT09IG51bGxcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXN1Y2Nlc3NcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5tZXNzYWdlcy5zdWNjZXNzKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtb2RhbC1mb290ZXIganVzdGlmeS1jb250ZW50LWNlbnRlclwiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICBcImJ0bi1vcmFuZ2UgdGV4dC1saWdodCBwLTIgdGV4dC1jZW50ZXIgcG9pbnRlciB3LTEwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uY3JlYXRlVGVhbSB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLQodC+0LfQtNCw0YLRjCDQutC+0LzQsNC90LTRg1wiKV1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICBcImJ0bi1ncmV5IHBvaW50ZXIgdGV4dC1jZW50ZXIgdGV4dC1saWdodCBib3JkZXItcmFkaXVzLTAgcC0yIHctNzVcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcImRhdGEtZGlzbWlzc1wiOiBcIm1vZGFsXCIsIFwiYXJpYS1sYWJlbFwiOiBcIkNsb3NlXCIgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi0J7RgtC80LXQvdC40YLRjFwiKV1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIjEyM1wiIH0sIFtfYyhcIm12cC1qb2luZWQtdGVhbXNcIildLCAxKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLWhlYWRlclwiIH0sIFtcbiAgICAgIF9jKFxuICAgICAgICBcImg1XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtdGl0bGVcIiwgYXR0cnM6IHsgaWQ6IFwiZXhhbXBsZU1vZGFsTGFiZWxcIiB9IH0sXG4gICAgICAgIFtfdm0uX3YoXCLQodC+0LfQtNCw0YLRjCDQutC+0LzQsNC90LTRg1wiKV1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiYVwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2xvc2VcIixcbiAgICAgICAgICBhdHRyczogeyBcImRhdGEtZGlzbWlzc1wiOiBcIm1vZGFsXCIsIFwiYXJpYS1sYWJlbFwiOiBcIkNsb3NlXCIgfVxuICAgICAgICB9LFxuICAgICAgICBbX2MoXCJzcGFuXCIsIHsgYXR0cnM6IHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiB9IH0sIFtfdm0uX3YoXCLDl1wiKV0pXVxuICAgICAgKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dFwiIH0sIFtcbiAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgIF92bS5fdihcbiAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0J/RgNC40LTRg9C80LDQuSDQvdCw0LfQstCw0L3QuNC1ICjRgdC80L7QttC10YjRjCDQv9C+0LzQtdC90Y/RgtGMINC/0L7RgtC+0LwpXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJldmVudHNfdmlld1wiLCBhdHRyczogeyBpZDogXCJ0ZWFtTWVtYmVyc1wiIH0gfSxcbiAgICBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lclwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjb21wb25lbnQgdXBjb21pbmdfZXZlbnRzXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcInVwY29taW5nX2V2ZW50c1wiIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaGVhZGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0udGVhbS5uYW1lKSArXG4gICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5fbChfdm0udGVhbS5tZW1iZXJzLCBmdW5jdGlvbihtZW1iZXIsIGtleSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdm0udGVhbS5oYXNPd25Qcm9wZXJ0eShcIm1lbWJlcnNcIilcbiAgICAgICAgICAgICAgICAgID8gX2MoXCJtdnAtdGVhbS1tZW1iZXJcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZW1iZXI6IG1lbWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaXMtY2FwdGFpblwiOiBfdm0uY2hlY2tNZW1iZXJJc0NhcHRhaW4obWVtYmVyKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAyXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX3ZtLmlzQXV0aG9yaXplICYmIF92bS5pc0ZyZWVQbGFjZVxuICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3cgbXQtM1wiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsZnRcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuLW9yYW5nZSB0ZXh0LWxpZ2h0IHBvaW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5qb2luVGVhbSB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtcGx1c1wiIH0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLCoMKg0J/RgNC40YHQvtC10LTQtdC90LjRgtGB0Y9cXG4gICAgICAgICAgICAgICAgXCIpXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImxvZ2luLW1vZGFsXCIsIHsgYXR0cnM6IHsgc2hvdzogIV92bS5pc0F1dGhvcml6ZSB9IH0pXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm91bmRcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgIF9jKFwiaW1nXCIsIHsgYXR0cnM6IHsgc3JjOiBcIi9pbWFnZXMvbGFtcC5zdmdcIiwgYWx0OiBcImxhbXBcIiB9IH0pXG4gICAgICBdKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lciBwLTAgbS0wXCIgfSwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyIHdpbmRvdy1oZWlnaHQtODAgcC0wIG0tMFwiIH0sIFtcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICBcInJvdyBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgdy0xMDAgaC0xMDBcIlxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBmbGV4LWNvbHVtblwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgbWItM1wiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICBcImJ0bi1vcmFuZ2UgdGV4dC1saWdodCBwLTMgcGwtNSBwci01IGZvbnQtc2l6ZS0yMyBwb2ludGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uc2hvd0xvZ2luTW9kYWwgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJKb2luIHRoZSBHYW1lXCIpXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLl9tKDEpXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKVxuICAgICAgICBdXG4gICAgICApXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7XG4gICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgIFwicm93IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciB3LTEwMCBoLTEwMFwiXG4gICAgICB9LFxuICAgICAgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImFcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4tb3JhbmdlIHRleHQtbGlnaHQgcC0yIHBsLTMgcHItMyBwb2ludGVyXCIsXG4gICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLnNob3dMb2dpbk1vZGFsIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3YoXCJKb2luIHRoZSBHYW1lXCIpXVxuICAgICAgICApXG4gICAgICBdXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3LTEwMCBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiIH0sIFtcbiAgICAgIF9jKFwic3Ryb25nXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1saWdodCBmb250LXNpemUtMjNcIiB9LCBbXG4gICAgICAgIF92bS5fdihcIldoYXQgd2Ugb2ZmZXJcIilcbiAgICAgIF0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3LTEwMCBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiIH0sIFtcbiAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtbGlnaHQgdy01MCBmb250LXNpemUtMThcIiB9LCBbXG4gICAgICAgIF92bS5fdihcbiAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LlxcbiAgICAgICAgICAgICAgICAgICAgICAgIEFkIGNvbnNlcXV1bnR1ciBjdWxwYSBjdXBpZGl0YXRlIGRlbGVuaXRpIGRpY3RhIGRpZ25pc3NpbW9zLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3RpbmN0aW8gZG9sb3IgZG9sb3JlcyBoaWMgaXBzYSBpdGFxdWUgbGF1ZGFudGl1bSBtb2xlc3RpYXMsXFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9sbGl0aWEgbm9zdHJ1bSwgcGVyZmVyZW5kaXMgcHJvdmlkZW50IHF1b3Mgc2FwaWVudGUgdmVybyFcXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyXCIgfSwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJjb21wb25lbnQgdXBjb21pbmdfZXZlbnRzXCIsXG4gICAgICAgICAgYXR0cnM6IHsgaWQ6IFwidXBjb21pbmdfZXZlbnRzXCIgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJoZWFkZXJcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0aXRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICDQotGD0YDQvdC40YDRiyBcIiArXG4gICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmdhbWUpICtcbiAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0ubG9hZFxuICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICBcImxvYWQgdy0xMDAgaC0xMDAgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfYyhcImxvYWRcIildLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS5fbChfdm0udG91cm5hbWVudHMsIGZ1bmN0aW9uKHRvdXJuYW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiAhX3ZtLmxvYWRcbiAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImdyaWRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJncmlkLXJvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiL3J1L212cC90b3VybmFtZW50L1wiICsgdG91cm5hbWVudC5pZCB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvZ29cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7IGF0dHJzOiB7IHNyYzogdG91cm5hbWVudC5sb2dvIH0gfSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZGF0YVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKHRvdXJuYW1lbnQubmFtZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiAjXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3ModG91cm5hbWVudC5udW1iZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9tKDEsIHRydWUpXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImRhdGFcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3ModG91cm5hbWVudC5kYXRlKSldKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9tKDIsIHRydWUpXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImRhdGFcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3ModG91cm5hbWVudC5tb2RlKSldKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9tKDMsIHRydWUpXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImRhdGFcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0b3VybmFtZW50LmFjY2Vzc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLWxvY2stb3BlblwiIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtbG9ja1wiIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX20oNCwgdHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZGF0YVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyh0b3VybmFtZW50LnByaXplKSldKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9tKDUsIHRydWUpXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAyXG4gICAgICApXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm91bmRcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgIF9jKFwiaW1nXCIsIHsgYXR0cnM6IHsgc3JjOiBcIi9pbWFnZXMvbGFtcC5zdmdcIiwgYWx0OiBcImxhbXBcIiB9IH0pXG4gICAgICBdKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYm90dG9tXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkYXRlXCIgfSwgW19jKFwic3BhblwiLCBbX3ZtLl92KFwi0J3QsNC30LLQsNC90LjQtVwiKV0pXSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJvdHRvbVwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZGF0ZVwiIH0sIFtfYyhcInNwYW5cIiwgW192bS5fdihcItCU0LDRgtCwXCIpXSldKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYm90dG9tXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkYXRlXCIgfSwgW19jKFwic3BhblwiLCBbX3ZtLl92KFwi0KDQtdC20LjQvFwiKV0pXSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJvdHRvbVwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZGF0ZVwiIH0sIFtfYyhcInNwYW5cIiwgW192bS5fdihcItCU0L7RgdGC0YPQv1wiKV0pXSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJvdHRvbVwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZGF0ZVwiIH0sIFtfYyhcInNwYW5cIiwgW192bS5fdihcItCf0YDQuNC3XCIpXSldKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sInNvdXJjZVJvb3QiOiIifQ==
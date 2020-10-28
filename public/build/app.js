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
//
//
//
//
//
//
//
//
//
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
//
//
//
//
//
//
//
//
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
        _c("div", { staticClass: "alternate" }, [
          _c(
            "a",
            {
              attrs: {
                href:
                  "https://steamcommunity.com/openid/login?openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.mode=checkid_setup&openid.return_to=https%3A%2F%2Fchamps.pro%2Fru%2Foauth%2Fsteam%3Fstate=steam&openid.realm=https%3A%2F%2Fchamps.pro%2Fru%2Foauth%2Fsteam&openid.ns.sreg=http%3A%2F%2Fopenid.net%2Fextensions%2Fsreg%2F1.1&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select"
              }
            },
            [_c("img", { attrs: { src: "/images/login_steam.svg" } })]
          ),
          _vm._v(" "),
          _c("a", { attrs: { href: "/ru/auth/discord/" } }, [
            _c("img", { attrs: { src: "/images/login_discord.svg" } })
          ]),
          _vm._v(" "),
          _c("a", { attrs: { href: "/ru/auth/facebook/" } }, [
            _c("img", { attrs: { src: "/images/facebook.png" } })
          ]),
          _vm._v(" "),
          _c("a", { attrs: { href: "/ru/auth/google/" } }, [
            _c("img", { attrs: { src: "/images/google.png" } })
          ]),
          _vm._v(" "),
          _c("a", { attrs: { href: "/ru/auth/twich/" } }, [
            _c("img", { attrs: { src: "/images/twich.png" } })
          ]),
          _vm._v(" "),
          _c("a", { attrs: { href: "/ru/auth/vk/" } }, [
            _c("img", { attrs: { src: "/images/vk.svg" } })
          ])
        ]),
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
          _c("div", { staticClass: "alternate" }, [
            _c(
              "a",
              {
                attrs: {
                  href:
                    "https://steamcommunity.com/openid/login?openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.mode=checkid_setup&openid.return_to=https%3A%2F%2Fchamps.pro%2Fru%2Foauth%2Fsteam%3Fstate=steam&openid.realm=https%3A%2F%2Fchamps.pro%2Fru%2Foauth%2Fsteam&openid.ns.sreg=http%3A%2F%2Fopenid.net%2Fextensions%2Fsreg%2F1.1&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select"
                }
              },
              [_c("img", { attrs: { src: "/images/login_steam.svg" } })]
            ),
            _vm._v(" "),
            _c("a", { attrs: { href: "/ru/auth/discord/" } }, [
              _c("img", { attrs: { src: "/images/login_discord.svg" } })
            ]),
            _vm._v(" "),
            _c("a", { attrs: { href: "/ru/auth/facebook/" } }, [
              _c("img", { attrs: { src: "/images/facebook.png" } })
            ]),
            _vm._v(" "),
            _c("a", { attrs: { href: "/ru/auth/google/" } }, [
              _c("img", { attrs: { src: "/images/google.png" } })
            ]),
            _vm._v(" "),
            _c("a", { attrs: { href: "/ru/auth/twich/" } }, [
              _c("img", { attrs: { src: "/images/twich.png" } })
            ]),
            _vm._v(" "),
            _c("a", { attrs: { href: "/ru/auth/vk/" } }, [
              _c("img", { attrs: { src: "/images/vk.svg" } })
            ])
          ]),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Mb2FkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Mb2FkLnZ1ZT9hYTljIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0xvYWQudnVlPzdkOTUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvTG9hZC52dWU/MDg1MCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Mb2dpbk1vZGFsLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Mb2dpbk1vZGFsLnZ1ZT8xYTc1Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0xvZ2luTW9kYWwudnVlPzkwNTUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4vQ29uZmlybUNvZGVGb3JtLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9sb2dpbi9Db25maXJtQ29kZUZvcm0udnVlPzIxN2QiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4vQ29uZmlybUNvZGVGb3JtLnZ1ZT9hNTI2Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xvZ2luL0NvbmZpcm1Db2RlRm9ybS52dWU/NWJlMSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9sb2dpbi9Db25ncmF0dWxhdGlvbnNGb3JtLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9sb2dpbi9Db25ncmF0dWxhdGlvbnNGb3JtLnZ1ZT8wN2NiIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xvZ2luL0NvbmdyYXR1bGF0aW9uc0Zvcm0udnVlPzY0NDAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4vTG9naW5Gb3JtLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9sb2dpbi9Mb2dpbkZvcm0udnVlP2Y0NDkiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4vTG9naW5Gb3JtLnZ1ZT9lYTMyIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xvZ2luL05pY2tuYW1lRm9ybS52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4vTmlja25hbWVGb3JtLnZ1ZT9kMWQ1Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xvZ2luL05pY2tuYW1lRm9ybS52dWU/OGUzMCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9sb2dpbi9SZWdpc3RyYXRpb25Gb3JtLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9sb2dpbi9SZWdpc3RyYXRpb25Gb3JtLnZ1ZT9mYTZiIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xvZ2luL1JlZ2lzdHJhdGlvbkZvcm0udnVlPzEyYzkiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL2NhYmluZXQvTXZwSm9pbmVkVGVhbS52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL2NhYmluZXQvTXZwSm9pbmVkVGVhbS52dWU/ZGE4NCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tdnAvY2FiaW5ldC9NdnBKb2luZWRUZWFtLnZ1ZT80ZGJmIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL212cC9jYWJpbmV0L012cEpvaW5lZFRlYW1zLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tdnAvY2FiaW5ldC9NdnBKb2luZWRUZWFtcy52dWU/ZTY1NiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tdnAvY2FiaW5ldC9NdnBKb2luZWRUZWFtcy52dWU/NzJkMCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tdnAvY2FiaW5ldC9NdnBQYWdlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tdnAvY2FiaW5ldC9NdnBQYWdlLnZ1ZT80MTg3Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL212cC9jYWJpbmV0L012cFBhZ2UudnVlP2E1MDMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL2NhYmluZXQvTXZwVGVhbS52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL2NhYmluZXQvTXZwVGVhbS52dWU/ZTZhZCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tdnAvY2FiaW5ldC9NdnBUZWFtLnZ1ZT85MDk3Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL212cC9jYWJpbmV0L012cFRlYW1NZW1iZXIudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL212cC9jYWJpbmV0L012cFRlYW1NZW1iZXIudnVlPzM5MmYiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL2NhYmluZXQvTXZwVGVhbU1lbWJlci52dWU/NzRkYSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tdnAvY2FiaW5ldC9NdnBUZWFtUGFnZS52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL2NhYmluZXQvTXZwVGVhbVBhZ2UudnVlPzUwMWYiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL2NhYmluZXQvTXZwVGVhbVBhZ2UudnVlPzc0YzEiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL2NhYmluZXQvTXZwVGVhbXMudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL212cC9jYWJpbmV0L012cFRlYW1zLnZ1ZT83MjBjIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL212cC9jYWJpbmV0L012cFRlYW1zLnZ1ZT9lZmQwIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL212cC9pbnZpdGUvTXZwSW52aXRlVGVhbVBhZ2UudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL212cC9pbnZpdGUvTXZwSW52aXRlVGVhbVBhZ2UudnVlPzNmMjIiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL2ludml0ZS9NdnBJbnZpdGVUZWFtUGFnZS52dWU/Y2M1NSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tdnAvc2VydmljZXMvTXZwU2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tdnAvdG91cm5hbWVudHMvTXZwTWFpbi52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL3RvdXJuYW1lbnRzL012cE1haW4udnVlP2QwNzIiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL3RvdXJuYW1lbnRzL012cE1haW4udnVlP2IxYzAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL3RvdXJuYW1lbnRzL012cFRvdXJuYW1lbnRzTGlzdC52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL3RvdXJuYW1lbnRzL012cFRvdXJuYW1lbnRzTGlzdC52dWU/M2Y0MSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tdnAvdG91cm5hbWVudHMvTXZwVG91cm5hbWVudHNMaXN0LnZ1ZT82NTI5Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy9qcy9jb21wb25lbnRzL0xvYWQudnVlIiwid2VicGFjazovLy9hc3NldHMvanMvY29tcG9uZW50cy9Mb2dpbk1vZGFsLnZ1ZSIsIndlYnBhY2s6Ly8vYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4vQ29uZmlybUNvZGVGb3JtLnZ1ZSIsIndlYnBhY2s6Ly8vYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4vQ29uZ3JhdHVsYXRpb25zRm9ybS52dWUiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xvZ2luL0xvZ2luRm9ybS52dWUiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xvZ2luL05pY2tuYW1lRm9ybS52dWUiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xvZ2luL1JlZ2lzdHJhdGlvbkZvcm0udnVlIiwid2VicGFjazovLy9hc3NldHMvanMvY29tcG9uZW50cy9tdnAvY2FiaW5ldC9NdnBKb2luZWRUZWFtLnZ1ZSIsIndlYnBhY2s6Ly8vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL2NhYmluZXQvTXZwSm9pbmVkVGVhbXMudnVlIiwid2VicGFjazovLy9hc3NldHMvanMvY29tcG9uZW50cy9tdnAvY2FiaW5ldC9NdnBQYWdlLnZ1ZSIsIndlYnBhY2s6Ly8vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL2NhYmluZXQvTXZwVGVhbS52dWUiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy9qcy9jb21wb25lbnRzL212cC9jYWJpbmV0L012cFRlYW1NZW1iZXIudnVlIiwid2VicGFjazovLy9hc3NldHMvanMvY29tcG9uZW50cy9tdnAvY2FiaW5ldC9NdnBUZWFtUGFnZS52dWUiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy9qcy9jb21wb25lbnRzL212cC9jYWJpbmV0L012cFRlYW1zLnZ1ZSIsIndlYnBhY2s6Ly8vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL2ludml0ZS9NdnBJbnZpdGVUZWFtUGFnZS52dWUiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy9qcy9jb21wb25lbnRzL212cC90b3VybmFtZW50cy9NdnBNYWluLnZ1ZSIsIndlYnBhY2s6Ly8vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL3RvdXJuYW1lbnRzL012cFRvdXJuYW1lbnRzTGlzdC52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvTG9hZC52dWU/MzNiYSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9sb2dpbi9Db25maXJtQ29kZUZvcm0udnVlP2MyYTkiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvTG9hZC52dWU/ZTAxNyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Mb2dpbk1vZGFsLnZ1ZT82ZWIwIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xvZ2luL0NvbmZpcm1Db2RlRm9ybS52dWU/MjlmOCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9sb2dpbi9Db25ncmF0dWxhdGlvbnNGb3JtLnZ1ZT8wNmYxIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xvZ2luL0xvZ2luRm9ybS52dWU/Nzk4MyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9sb2dpbi9OaWNrbmFtZUZvcm0udnVlPzg2YmYiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4vUmVnaXN0cmF0aW9uRm9ybS52dWU/NTlmZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tdnAvY2FiaW5ldC9NdnBKb2luZWRUZWFtLnZ1ZT9kNWIzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL212cC9jYWJpbmV0L012cEpvaW5lZFRlYW1zLnZ1ZT85MTI4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL212cC9jYWJpbmV0L012cFBhZ2UudnVlP2RiMGEiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL2NhYmluZXQvTXZwVGVhbS52dWU/YzNkYiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tdnAvY2FiaW5ldC9NdnBUZWFtTWVtYmVyLnZ1ZT82MzdjIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL212cC9jYWJpbmV0L012cFRlYW1QYWdlLnZ1ZT83NTVjIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL212cC9jYWJpbmV0L012cFRlYW1zLnZ1ZT81NDJhIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL212cC9pbnZpdGUvTXZwSW52aXRlVGVhbVBhZ2UudnVlPzU5YTciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL3RvdXJuYW1lbnRzL012cE1haW4udnVlP2ZhM2MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL3RvdXJuYW1lbnRzL012cFRvdXJuYW1lbnRzTGlzdC52dWU/ZmY5OCJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJheGlvcyIsInJlcXVpcmUiLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJjb21tb24iLCJ0b2tlbiIsImRvY3VtZW50IiwiaGVhZCIsInF1ZXJ5U2VsZWN0b3IiLCJfY3NyZl90b2tlbiIsImNvbnRlbnQiLCJjb25zb2xlIiwiZXJyb3IiLCJWdWUiLCJjb21wb25lbnQiLCJNdnBNYWluIiwiTXZwUGFnZSIsIk12cFRlYW1QYWdlIiwiTXZwSW52aXRlVGVhbVBhZ2UiLCJNdnBUb3VybmFtZW50c0xpc3QiLCJMb2dpbk1vZGFsIiwiZWwiLCJwcm92aWRlIiwiaHR0cCIsIk12cFNlcnZpY2UiLCJjb25maWciLCJoZWFkZXIiLCJsb2dpbiIsImRhdGEiLCJzaG93IiwibG9jYXRpb24iLCJwcm90b2NvbCIsImhvc3RuYW1lIiwicGF0aCIsImJhc2VVcmwiLCJjYXBh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aUNBQWlDLHNCQUFzQjtBQUN2RCxtQ0FBbUMsdUJBQXVCO0FBQzFEO0FBQ0EsdUNBQXVDLGtDQUFrQztBQUN6RSx1Q0FBdUMsNkJBQTZCO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsc0JBQXNCO0FBQ3ZELG1DQUFtQyx1QkFBdUI7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsdUJBQXVCO0FBQzdDO0FBQ0EsbUJBQW1CLFNBQVMsdUNBQXVDLEVBQUU7QUFDckU7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQix3QkFBd0I7QUFDOUMsaUJBQWlCLHNCQUFzQjtBQUN2QztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQix3QkFBd0I7QUFDOUMsaUJBQWlCLHNCQUFzQjtBQUN2QztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQix3QkFBd0I7QUFDOUMsaUJBQWlCLHNCQUFzQjtBQUN2QztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQix3QkFBd0I7QUFDOUMsaUJBQWlCLHNCQUFzQjtBQUN2QztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQix3QkFBd0I7QUFDOUMsaUJBQWlCLHNCQUFzQjtBQUN2QztBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cblxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxuaW1wb3J0ICcuLi9jc3MvYXBwLmNzcyc7XG5pbXBvcnQgTXZwU2VydmljZSBmcm9tIFwiLi9jb21wb25lbnRzL212cC9zZXJ2aWNlcy9NdnBTZXJ2aWNlLmpzXCI7XG5pbXBvcnQgY29uZmlnIGZyb20gXCIuL2NvbmZpZ1wiO1xuaW1wb3J0IE12cFBhZ2UgZnJvbSBcIi4vY29tcG9uZW50cy9tdnAvY2FiaW5ldC9NdnBQYWdlXCI7XG5pbXBvcnQgTXZwVGVhbVBhZ2UgZnJvbSBcIi4vY29tcG9uZW50cy9tdnAvY2FiaW5ldC9NdnBUZWFtUGFnZVwiO1xuaW1wb3J0IE12cEludml0ZVRlYW1QYWdlIGZyb20gXCIuL2NvbXBvbmVudHMvbXZwL2ludml0ZS9NdnBJbnZpdGVUZWFtUGFnZVwiO1xuaW1wb3J0IExvZ2luTW9kYWwgZnJvbSBcIi4vY29tcG9uZW50cy9Mb2dpbk1vZGFsXCI7XG5pbXBvcnQgTXZwTWFpbiBmcm9tIFwiLi9jb21wb25lbnRzL212cC90b3VybmFtZW50cy9NdnBNYWluXCI7XG5pbXBvcnQgTXZwVG91cm5hbWVudHNMaXN0IGZyb20gXCIuL2NvbXBvbmVudHMvbXZwL3RvdXJuYW1lbnRzL012cFRvdXJuYW1lbnRzTGlzdFwiO1xuXG53aW5kb3cuYXhpb3MgPSByZXF1aXJlKCdheGlvcycpO1xud2luZG93LmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydYLVJlcXVlc3RlZC1XaXRoJ10gPSAnWE1MSHR0cFJlcXVlc3QnO1xuXG5sZXQgdG9rZW4gPSBkb2N1bWVudC5oZWFkLnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1cImNzcmYtdG9rZW5cIl0nKTtcblxuaWYgKHRva2VuKSB7XG4gICAgd2luZG93LmF4aW9zLl9jc3JmX3Rva2VuID0gdG9rZW4uY29udGVudDtcbn0gZWxzZSB7XG4gICAgY29uc29sZS5lcnJvcignQ1NSRiB0b2tlbiBub3QgZm91bmQnKTtcbn1cblxuLy8gTmVlZCBqUXVlcnk/IEluc3RhbGwgaXQgd2l0aCBcInlhcm4gYWRkIGpxdWVyeVwiLCB0aGVuIHVuY29tbWVudCB0byBpbXBvcnQgaXQuXG4vLyBpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5WdWUuY29tcG9uZW50KCdtdnAtbWFpbicsIE12cE1haW4pXG5WdWUuY29tcG9uZW50KCdtdnAtcGFnZScsIE12cFBhZ2UpXG5WdWUuY29tcG9uZW50KCdtdnAtdGVhbS1wYWdlJywgTXZwVGVhbVBhZ2UpXG5WdWUuY29tcG9uZW50KCdtdnAtaW52aXRlLXBhZ2UnLCBNdnBJbnZpdGVUZWFtUGFnZSlcblZ1ZS5jb21wb25lbnQoJ212cC10b3VybmFtZW50cy1saXN0JywgTXZwVG91cm5hbWVudHNMaXN0KVxuVnVlLmNvbXBvbmVudCgnbG9naW4tZm9ybScsIExvZ2luTW9kYWwpXG5cbm5ldyBWdWUoe1xuICAgIGVsOiAnI2FwcCcsXG4gICAgcHJvdmlkZToge1xuICAgICAgICBodHRwOiBuZXcgTXZwU2VydmljZShheGlvcyksXG4gICAgICAgIGF4aW9zLFxuICAgICAgICBjb25maWcsXG4gICAgICAgIGhlYWRlclxuICAgIH1cbn0pXG5cbndpbmRvdy5sb2dpbiA9IG5ldyBWdWUoe1xuICAgIGVsOiAnI2xvZ2luJyxcbiAgICBwcm92aWRlOiB7XG4gICAgICAgIGF4aW9zLFxuICAgICAgICBjb25maWdcbiAgICB9LFxuICAgIGRhdGE6IHtcbiAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgfVxufSkiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0xvYWQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUwN2NmNGYyJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0xvYWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Mb2FkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9Mb2FkLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTUwN2NmNGYyJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI1MDdjZjRmMlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvY2hhbXBzcHJvL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzUwN2NmNGYyJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzUwN2NmNGYyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzUwN2NmNGYyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Mb2FkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01MDdjZjRmMiZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc1MDdjZjRmMicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2pzL2NvbXBvbmVudHMvTG9hZC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xvYWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xvYWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS1vbmVPZi0xLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTG9hZC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01MDdjZjRmMiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS1vbmVPZi0xLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTG9hZC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01MDdjZjRmMiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2FkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01MDdjZjRmMiZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTG9naW5Nb2RhbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzY5YzRiYTUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTG9naW5Nb2RhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0xvZ2luTW9kYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvQXBwbGljYXRpb25zL01BTVAvaHRkb2NzL2NoYW1wc3Byby9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCczNjljNGJhNScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCczNjljNGJhNScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCczNjljNGJhNScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTG9naW5Nb2RhbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzY5YzRiYTUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMzY5YzRiYTUnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy9qcy9jb21wb25lbnRzL0xvZ2luTW9kYWwudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2dpbk1vZGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2dpbk1vZGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2dpbk1vZGFsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNjljNGJhNSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQ29uZmlybUNvZGVGb3JtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02OTYyYjNiYSZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Db25maXJtQ29kZUZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Db25maXJtQ29kZUZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0NvbmZpcm1Db2RlRm9ybS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02OTYyYjNiYSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNjk2MmIzYmFcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvQXBwbGljYXRpb25zL01BTVAvaHRkb2NzL2NoYW1wc3Byby9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2OTYyYjNiYScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2OTYyYjNiYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2OTYyYjNiYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQ29uZmlybUNvZGVGb3JtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02OTYyYjNiYSZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2OTYyYjNiYScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4vQ29uZmlybUNvZGVGb3JtLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ29uZmlybUNvZGVGb3JtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Db25maXJtQ29kZUZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ29uZmlybUNvZGVGb3JtLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTY5NjJiM2JhJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Db25maXJtQ29kZUZvcm0udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9Njk2MmIzYmEmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ29uZmlybUNvZGVGb3JtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02OTYyYjNiYSZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQ29uZ3JhdHVsYXRpb25zRm9ybS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Njc5OWEyYzImc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQ29uZ3JhdHVsYXRpb25zRm9ybS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0NvbmdyYXR1bGF0aW9uc0Zvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI2Nzk5YTJjMlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvY2hhbXBzcHJvL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzY3OTlhMmMyJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzY3OTlhMmMyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzY3OTlhMmMyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Db25ncmF0dWxhdGlvbnNGb3JtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02Nzk5YTJjMiZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2Nzk5YTJjMicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4vQ29uZ3JhdHVsYXRpb25zRm9ybS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NvbmdyYXR1bGF0aW9uc0Zvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NvbmdyYXR1bGF0aW9uc0Zvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NvbmdyYXR1bGF0aW9uc0Zvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY3OTlhMmMyJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Mb2dpbkZvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWE3OTZmMWQ0JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0xvZ2luRm9ybS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0xvZ2luRm9ybS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvY2hhbXBzcHJvL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2E3OTZmMWQ0JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2E3OTZmMWQ0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2E3OTZmMWQ0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Mb2dpbkZvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWE3OTZmMWQ0JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2E3OTZmMWQ0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvanMvY29tcG9uZW50cy9sb2dpbi9Mb2dpbkZvcm0udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2dpbkZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xvZ2luRm9ybS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTG9naW5Gb3JtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hNzk2ZjFkNCZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTmlja25hbWVGb3JtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lYmJmMTljZSZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9OaWNrbmFtZUZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9OaWNrbmFtZUZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJlYmJmMTljZVwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvY2hhbXBzcHJvL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2ViYmYxOWNlJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2ViYmYxOWNlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2ViYmYxOWNlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9OaWNrbmFtZUZvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWViYmYxOWNlJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2ViYmYxOWNlJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvanMvY29tcG9uZW50cy9sb2dpbi9OaWNrbmFtZUZvcm0udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9OaWNrbmFtZUZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL05pY2tuYW1lRm9ybS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTmlja25hbWVGb3JtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lYmJmMTljZSZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vUmVnaXN0cmF0aW9uRm9ybS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGQ3ZDA4ZTQmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUmVnaXN0cmF0aW9uRm9ybS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1JlZ2lzdHJhdGlvbkZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvQXBwbGljYXRpb25zL01BTVAvaHRkb2NzL2NoYW1wc3Byby9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc0ZDdkMDhlNCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc0ZDdkMDhlNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc0ZDdkMDhlNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vUmVnaXN0cmF0aW9uRm9ybS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGQ3ZDA4ZTQmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNGQ3ZDA4ZTQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy9qcy9jb21wb25lbnRzL2xvZ2luL1JlZ2lzdHJhdGlvbkZvcm0udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9SZWdpc3RyYXRpb25Gb3JtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9SZWdpc3RyYXRpb25Gb3JtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9SZWdpc3RyYXRpb25Gb3JtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00ZDdkMDhlNCZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTXZwSm9pbmVkVGVhbS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzY2MDNiMWQmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTXZwSm9pbmVkVGVhbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL012cEpvaW5lZFRlYW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIzNjYwM2IxZFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvY2hhbXBzcHJvL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzM2NjAzYjFkJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzM2NjAzYjFkJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzM2NjAzYjFkJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9NdnBKb2luZWRUZWFtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNjYwM2IxZCZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCczNjYwM2IxZCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL2NhYmluZXQvTXZwSm9pbmVkVGVhbS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL012cEpvaW5lZFRlYW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL012cEpvaW5lZFRlYW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL012cEpvaW5lZFRlYW0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM2NjAzYjFkJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9NdnBKb2luZWRUZWFtcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Y2Q1YTZjYjQmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTXZwSm9pbmVkVGVhbXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9NdnBKb2luZWRUZWFtcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImNkNWE2Y2I0XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL0FwcGxpY2F0aW9ucy9NQU1QL2h0ZG9jcy9jaGFtcHNwcm8vbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnY2Q1YTZjYjQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnY2Q1YTZjYjQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnY2Q1YTZjYjQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL012cEpvaW5lZFRlYW1zLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jZDVhNmNiNCZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdjZDVhNmNiNCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL2NhYmluZXQvTXZwSm9pbmVkVGVhbXMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NdnBKb2luZWRUZWFtcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTXZwSm9pbmVkVGVhbXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL012cEpvaW5lZFRlYW1zLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jZDVhNmNiNCZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTXZwUGFnZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDdhZTA5YjQmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTXZwUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL012cFBhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIwN2FlMDliNFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvY2hhbXBzcHJvL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzA3YWUwOWI0JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzA3YWUwOWI0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzA3YWUwOWI0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9NdnBQYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wN2FlMDliNCZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcwN2FlMDliNCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL2NhYmluZXQvTXZwUGFnZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL012cFBhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL012cFBhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL012cFBhZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA3YWUwOWI0JnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9NdnBUZWFtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NTdhNDNmNCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9NdnBUZWFtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vTXZwVGVhbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvY2hhbXBzcHJvL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzY1N2E0M2Y0JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzY1N2E0M2Y0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzY1N2E0M2Y0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9NdnBUZWFtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NTdhNDNmNCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2NTdhNDNmNCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL2NhYmluZXQvTXZwVGVhbS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL012cFRlYW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL012cFRlYW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL012cFRlYW0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY1N2E0M2Y0JlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9NdnBUZWFtTWVtYmVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yMDQwNThhZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9NdnBUZWFtTWVtYmVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vTXZwVGVhbU1lbWJlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvY2hhbXBzcHJvL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzIwNDA1OGFlJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzIwNDA1OGFlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzIwNDA1OGFlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9NdnBUZWFtTWVtYmVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yMDQwNThhZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcyMDQwNThhZScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL2NhYmluZXQvTXZwVGVhbU1lbWJlci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL012cFRlYW1NZW1iZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL012cFRlYW1NZW1iZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL012cFRlYW1NZW1iZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTIwNDA1OGFlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9NdnBUZWFtUGFnZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzM0NzFkMjMmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTXZwVGVhbVBhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9NdnBUZWFtUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvY2hhbXBzcHJvL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzMzNDcxZDIzJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzMzNDcxZDIzJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzMzNDcxZDIzJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9NdnBUZWFtUGFnZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzM0NzFkMjMmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMzM0NzFkMjMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy9qcy9jb21wb25lbnRzL212cC9jYWJpbmV0L012cFRlYW1QYWdlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTXZwVGVhbVBhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL012cFRlYW1QYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NdnBUZWFtUGFnZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzM0NzFkMjMmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL012cFRlYW1zLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00ZDc5ZGJhZiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9NdnBUZWFtcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL012cFRlYW1zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL0FwcGxpY2F0aW9ucy9NQU1QL2h0ZG9jcy9jaGFtcHNwcm8vbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNGQ3OWRiYWYnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNGQ3OWRiYWYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNGQ3OWRiYWYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL012cFRlYW1zLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00ZDc5ZGJhZiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0ZDc5ZGJhZicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL2NhYmluZXQvTXZwVGVhbXMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NdnBUZWFtcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTXZwVGVhbXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL012cFRlYW1zLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00ZDc5ZGJhZiZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTXZwSW52aXRlVGVhbVBhZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE5YzM1NTAyJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL012cEludml0ZVRlYW1QYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vTXZwSW52aXRlVGVhbVBhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvQXBwbGljYXRpb25zL01BTVAvaHRkb2NzL2NoYW1wc3Byby9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcxOWMzNTUwMicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcxOWMzNTUwMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcxOWMzNTUwMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTXZwSW52aXRlVGVhbVBhZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE5YzM1NTAyJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzE5YzM1NTAyJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvanMvY29tcG9uZW50cy9tdnAvaW52aXRlL012cEludml0ZVRlYW1QYWdlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTXZwSW52aXRlVGVhbVBhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL012cEludml0ZVRlYW1QYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NdnBJbnZpdGVUZWFtUGFnZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTljMzU1MDImXCIiLCJjbGFzcyBNdnBTZXJ2aWNlIHtcblxuICAgIGJhc2VVcmwgPSBgJHt3aW5kb3cubG9jYXRpb24ucHJvdG9jb2x9Ly8ke3dpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZX0vYDtcblxuICAgIGNvbnN0cnVjdG9yKGF4aW9zKSB7XG4gICAgICAgIHRoaXMuYXhpb3MgPSBheGlvc1xuICAgIH1cblxuICAgIHVybCA9IHBhdGggPT4ge1xuICAgICAgICByZXR1cm4gYCR7dGhpcy5iYXNlVXJsfXJ1LyR7cGF0aH1gO1xuICAgIH1cblxuICAgIGNyZWF0ZU12cFRlYW0gPSBhc3luYyAoY2FwYWNpdHksIG5hbWUsIHRhZykgPT4ge1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5heGlvcy5wb3N0KHRoaXMudXJsKCd1c2VyL212cC9jcmVhdGUvdGVhbScpLCB7XG4gICAgICAgICAgICBjYXBhY2l0eSwgbmFtZSwgdGFnXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZ2V0VXNlclRlYW1zID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5heGlvcy5wb3N0KHRoaXMudXJsKCd1c2VyL212cC9nZXQvdGVhbXMnKSlcbiAgICB9XG5cbiAgICBnZXRUZWFtTGluayA9IChpZCkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy51cmwoYHVzZXIvbXZwL3RlYW0vJHtpZH1gKVxuICAgIH1cblxuICAgIGdldE12cExpbmsgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnVybCgndXNlci9tdnAvJylcbiAgICB9XG5cbiAgICBnZXRNdnBUZWFtID0gYXN5bmMgaWQgPT4ge1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5heGlvcy5wb3N0KHRoaXMudXJsKGBnZXQvdXNlci9tdnAvdGVhbS8ke2lkfWApKVxuICAgIH1cblxuICAgIGRlbGV0ZU12cFRlYW0gPSBhc3luYyBpZCA9PiB7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmF4aW9zLnBvc3QodGhpcy51cmwoYGRlbGV0ZS91c2VyL212cC90ZWFtLyR7aWR9YCkpXG4gICAgfVxuXG4gICAgZ2V0VGVhbUludml0ZVRva2VuID0gYXN5bmMgaWQgPT4ge1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5heGlvcy5wb3N0KHRoaXMudXJsKGBtdnAvdGVhbS9nZXQvaW52aXRlLyR7aWR9YCkpXG4gICAgfVxuXG4gICAgcmVsb2FkVGVhbUludml0ZVRva2VuID0gYXN5bmMgaWQgPT4ge1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5heGlvcy5wb3N0KHRoaXMudXJsKGBtdnAvdGVhbS9yZWxvYWQvaW52aXRlLyR7aWR9YCkpXG4gICAgfVxuXG4gICAgZ2V0SW52aXRlVG9UZWFtTGluayA9IChpZCwgdG9rZW4pID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXJsKGBtdnAvaW52aXRlLyR7aWR9LyR7dG9rZW59YClcbiAgICB9XG5cbiAgICBnZXRBdXRoVXNlciA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuYXhpb3MucG9zdCh0aGlzLnVybCgnZ2V0L2F1dGgnKSlcbiAgICB9XG5cbiAgICBqb2luTWVtYmVyVG9UZWFtID0gYXN5bmMgaWQgPT4ge1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5heGlvcy5wb3N0KHRoaXMudXJsKGBtdnAvam9pbi90by90ZWFtLyR7aWR9YCkpXG4gICAgfVxuXG4gICAgZ2V0VXNlckpvaW5lZFRlYW1zID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5heGlvcy5wb3N0KHRoaXMudXJsKGB1c2VyL212cC9nZXQvam9pbmVkL3RlYW1zL2ApKVxuICAgIH1cblxuICAgIHVzZXJMZWF2ZVRlYW1MaW5rID0gaWQgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy51cmwoYHVzZXIvbXZwL2xlYXZlL3RlYW0vJHtpZH1gKVxuICAgIH1cblxuICAgIGdldFRvdXJuYW1lbnRzQnlHYW1lID0gYXN5bmMgZ2FtZSA9PiB7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmF4aW9zLnBvc3QodGhpcy51cmwoYG12cC9hamF4L3RvdXJuYW1lbnRzLyR7Z2FtZX1gKSlcbiAgICB9XG5cbiAgICBnZXRQcm9maWxlTGluayA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXJsKGB1c2VyL3NldHRpbmdzYClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE12cFNlcnZpY2U7IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9NdnBNYWluLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wODUyZGZiYyZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9NdnBNYWluLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vTXZwTWFpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvY2hhbXBzcHJvL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzA4NTJkZmJjJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzA4NTJkZmJjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzA4NTJkZmJjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9NdnBNYWluLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wODUyZGZiYyZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcwODUyZGZiYycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL3RvdXJuYW1lbnRzL012cE1haW4udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NdnBNYWluLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NdnBNYWluLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NdnBNYWluLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wODUyZGZiYyZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTXZwVG91cm5hbWVudHNMaXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xOGMxNTkwZiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9NdnBUb3VybmFtZW50c0xpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9NdnBUb3VybmFtZW50c0xpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvQXBwbGljYXRpb25zL01BTVAvaHRkb2NzL2NoYW1wc3Byby9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcxOGMxNTkwZicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcxOGMxNTkwZicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcxOGMxNTkwZicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTXZwVG91cm5hbWVudHNMaXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xOGMxNTkwZiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcxOGMxNTkwZicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL3RvdXJuYW1lbnRzL012cFRvdXJuYW1lbnRzTGlzdC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL012cFRvdXJuYW1lbnRzTGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTXZwVG91cm5hbWVudHNMaXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NdnBUb3VybmFtZW50c0xpc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE4YzE1OTBmJlwiIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIFNURUFNX0xPR0lOX0xJTks6ICdodHRwczovL3N0ZWFtY29tbXVuaXR5LmNvbS9vcGVuaWQvbG9naW4/b3BlbmlkLm5zPWh0dHAlM0ElMkYlMkZzcGVjcy5vcGVuaWQubmV0JTJGYXV0aCUyRjIuMCZvcGVuaWQubW9kZT1jaGVja2lkX3NldHVwJm9wZW5pZC5yZXR1cm5fdG89aHR0cHMlM0ElMkYlMkZjaGFtcHMucHJvJTJGcnUlMkZvYXV0aCUyRnN0ZWFtJTNGc3RhdGU9c3RlYW0mb3BlbmlkLnJlYWxtPWh0dHBzJTNBJTJGJTJGY2hhbXBzLnBybyUyRnJ1JTJGb2F1dGglMkZzdGVhbSZvcGVuaWQubnMuc3JlZz1odHRwJTNBJTJGJTJGb3BlbmlkLm5ldCUyRmV4dGVuc2lvbnMlMkZzcmVnJTJGMS4xJm9wZW5pZC5jbGFpbWVkX2lkPWh0dHAlM0ElMkYlMkZzcGVjcy5vcGVuaWQubmV0JTJGYXV0aCUyRjIuMCUyRmlkZW50aWZpZXJfc2VsZWN0Jm9wZW5pZC5pZGVudGl0eT1odHRwJTNBJTJGJTJGc3BlY3Mub3BlbmlkLm5ldCUyRmF1dGglMkYyLjAlMkZpZGVudGlmaWVyX3NlbGVjdCcsXG59IiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJsb2FkaW5naW8tc3Bpbm5lci1nZWFyLW10cGh3Z295NzllXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJsZGlvLXJ3dXZhcnZucDFzXCI+XG4gICAgICAgICAgICA8ZGl2PjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiBcIkxvYWRcIlxuICAgIH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuICAgIEBrZXlmcmFtZXMgbGRpby1yd3V2YXJ2bnAxcyB7XG4gICAgICAgIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZykgfVxuICAgICAgICA1MCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgyMi41ZGVnKSB9XG4gICAgICAgIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgfVxuICAgIH1cbiAgICAubGRpby1yd3V2YXJ2bnAxcyA+IGRpdiB7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDEwMHB4IDEwMHB4O1xuICAgICAgICBhbmltYXRpb246IGxkaW8tcnd1dmFydm5wMXMgMC4ycyBpbmZpbml0ZSBsaW5lYXI7XG4gICAgfVxuICAgIC5sZGlvLXJ3dXZhcnZucDFzID4gZGl2IGRpdiB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDIycHg7XG4gICAgICAgIGhlaWdodDogMTUycHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZjg1MDA7XG4gICAgICAgIGxlZnQ6IDEwMHB4O1xuICAgICAgICB0b3A6IDEwMHB4O1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuICAgIH1cbiAgICAubGRpby1yd3V2YXJ2bnAxcyA+IGRpdiBkaXY6bnRoLWNoaWxkKDEpIHtcbiAgICAgICAgd2lkdGg6IDEyMHB4O1xuICAgICAgICBoZWlnaHQ6IDEyMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgfVxuICAgIC5sZGlvLXJ3dXZhcnZucDFzID4gZGl2IGRpdjpudGgtY2hpbGQoNikge1xuICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgfS5sZGlvLXJ3dXZhcnZucDFzID4gZGl2IGRpdjpudGgtY2hpbGQoMykge1xuICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKSByb3RhdGUoNDVkZWcpXG4gICAgIH0ubGRpby1yd3V2YXJ2bnAxcyA+IGRpdiBkaXY6bnRoLWNoaWxkKDQpIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpIHJvdGF0ZSg5MGRlZylcbiAgICAgIH0ubGRpby1yd3V2YXJ2bnAxcyA+IGRpdiBkaXY6bnRoLWNoaWxkKDUpIHtcbiAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKSByb3RhdGUoMTM1ZGVnKVxuICAgICAgIH1cbiAgICAubG9hZGluZ2lvLXNwaW5uZXItZ2Vhci1tdHBod2dveTc5ZSB7XG4gICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIH1cbiAgICAubGRpby1yd3V2YXJ2bnAxcyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApIHNjYWxlKDEpO1xuICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMDsgLyogc2VlIG5vdGUgYWJvdmUgKi9cbiAgICB9XG4gICAgLmxkaW8tcnd1dmFydm5wMXMgZGl2IHsgYm94LXNpemluZzogY29udGVudC1ib3g7IH1cbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJzbGlkZXNcIj5cbiAgICAgICAgPGxvZ2luXG4gICAgICAgICAgICAgICAgdi1zaG93PVwiY2hlY2tTdGVwKCdsb2dpbicpXCJcbiAgICAgICAgICAgICAgICBAc2V0U3RlcD1cInNldFN0ZXBcIlxuICAgICAgICAgICAgICAgIEBhdXRoTG9naW49XCJhdXRoTG9naW5cIlxuICAgICAgICAgICAgICAgIEBjbG9zZT1cImNsb3NlXCJcbiAgICAgICAgICAgICAgICBAaW5wdXRFbWFpbD1cIih2YWx1ZSkgPT4ge2VtYWlsID0gdmFsdWU7fVwiXG4gICAgICAgICAgICAgICAgQGlucHV0UGFzc3dvcmQ9XCIodmFsdWUpID0+IHtwYXNzd29yZCA9IHZhbHVlO31cIlxuICAgICAgICAgICAgICAgIDplcnJvcj1cImVycm9yXCJcbiAgICAgICAgICAgICAgICA6ZW1haWw9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgOnBhc3N3b3JkPVwicGFzc3dvcmRcIj5cbiAgICAgICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgICAgPC9sb2dpbj5cbiAgICAgICAgPHJlZ2lzdHJhdGlvblxuICAgICAgICAgICAgICAgIHYtc2hvdz1cImNoZWNrU3RlcCgncmVnaXN0cmF0aW9uJylcIlxuICAgICAgICAgICAgICAgIEBzZXRTdGVwPVwic2V0U3RlcFwiXG4gICAgICAgICAgICAgICAgQGNsb3NlPVwiY2xvc2VcIlxuICAgICAgICAgICAgICAgIEBpbnB1dEVtYWlsPVwiKHZhbHVlKSA9PiB7ZW1haWwgPSB2YWx1ZX1cIlxuICAgICAgICAgICAgICAgIEBpbnB1dFBhc3N3b3JkPVwiKHZhbHVlKSA9PiB7cGFzc3dvcmQgPSB2YWx1ZX1cIlxuICAgICAgICAgICAgICAgIEBpbnB1dD1cIih2YWx1ZSkgPT4ge2NoZWNrID0gdmFsdWV9XCJcbiAgICAgICAgICAgICAgICBAc2VuZENvbmZpcm1Db2RlPVwic2VuZENvbmZpcm1Db2RlXCJcbiAgICAgICAgICAgICAgICA6ZW1haWw9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgOnBhc3N3b3JkPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIDpjaGVjaz1cImNoZWNrXCI+XG4gICAgICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICAgIDwvcmVnaXN0cmF0aW9uPlxuICAgICAgICA8Y29uZmlybS1jb2RlXG4gICAgICAgICAgICAgICAgdi1zaG93PVwiY2hlY2tTdGVwKCdjb25maXJtQ29kZScpXCJcbiAgICAgICAgICAgICAgICBAc2V0U3RlcD1cInNldFN0ZXBcIlxuICAgICAgICAgICAgICAgIEBjbG9zZT1cImNsb3NlXCJcbiAgICAgICAgICAgICAgICBAcmVnaXN0cmF0aW9uPVwicmVnaXN0cmF0aW9uXCJcbiAgICAgICAgICAgICAgICBAc2VuZENvbmZpcm1Db2RlPVwic2VuZENvbmZpcm1Db2RlXCJcbiAgICAgICAgICAgICAgICA6Y29kZUNvbmZpcm1lZD1cImNvZGVDb25maXJtZWRcIlxuICAgICAgICAgICAgICAgIDplbWFpbD1cImVtYWlsXCI+XG4gICAgICAgIDwvY29uZmlybS1jb2RlPlxuICAgICAgICA8bmljay1uYW1lXG4gICAgICAgICAgICAgICAgdi1zaG93PVwiY2hlY2tTdGVwKCduaWNrbmFtZScpXCJcbiAgICAgICAgICAgICAgICBAc2V0U3RlcD1cInNldFN0ZXBcIlxuICAgICAgICAgICAgICAgIEBjbG9zZT1cImNsb3NlXCJcbiAgICAgICAgICAgICAgICA6ZW1haWw9XCJlbWFpbFwiPlxuICAgICAgICA8L25pY2stbmFtZT5cbiAgICAgICAgPGNvbmdyYXR1bGF0aW9uXG4gICAgICAgICAgICAgICAgdi1zaG93PVwiY2hlY2tTdGVwKCdjb25ncmF0dWxhdGlvbicpXCJcbiAgICAgICAgICAgICAgICBAc2V0U3RlcD1cInNldFN0ZXBcIlxuICAgICAgICAgICAgICAgIEBjbG9zZT1cImNsb3NlXCI+XG4gICAgICAgIDwvY29uZ3JhdHVsYXRpb24+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBOaWNrbmFtZUZvcm0gZnJvbSBcIi4vbG9naW4vTmlja25hbWVGb3JtXCI7XG4gICAgaW1wb3J0IENvbmZpcm1Db2RlRm9ybSBmcm9tIFwiLi9sb2dpbi9Db25maXJtQ29kZUZvcm1cIjtcbiAgICBpbXBvcnQgUmVnaXN0cmF0aW9uRm9ybSBmcm9tIFwiLi9sb2dpbi9SZWdpc3RyYXRpb25Gb3JtXCI7XG4gICAgaW1wb3J0IExvZ2luRm9ybSBmcm9tIFwiLi9sb2dpbi9Mb2dpbkZvcm1cIjtcbiAgICBpbXBvcnQgQ29uZ3JhdHVsYXRpb25zRm9ybSBmcm9tIFwiLi9sb2dpbi9Db25ncmF0dWxhdGlvbnNGb3JtXCI7XG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6IFwiTG9naW5Nb2RhbFwiLFxuICAgICAgICBpbmplY3Q6IFtcbiAgICAgICAgICAgICdheGlvcycsXG4gICAgICAgICAgICAnY29uZmlnJ1xuICAgICAgICBdLFxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgc2hvdzogQm9vbGVhbixcbiAgICAgICAgICAgIHJlZGlyZWN0OiB7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDogbnVsbFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNob3dGaXJzdDoge1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICdsb2dpbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGEoKXtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY29uc29sZTogY29uc29sZSxcbiAgICAgICAgICAgICAgICBlcnJvcjogZmFsc2UsXG4gICAgICAgICAgICAgICAgc3RlcDogJ3JlZ2lzdHJhdGlvbicsXG4gICAgICAgICAgICAgICAgZW1haWw6IG51bGwsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IG51bGwsXG4gICAgICAgICAgICAgICAgY2hlY2s6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNvbmZpcm1Db2RlOiBudWxsLFxuICAgICAgICAgICAgICAgIGNvZGVDb25maXJtZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogbnVsbCxcbiAgICAgICAgICAgICAgICBzdWNjZXNzTWVzc2FnZTogbnVsbCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29tcG9uZW50czoge1xuICAgICAgICAgICAgJ25pY2stbmFtZSc6IE5pY2tuYW1lRm9ybSxcbiAgICAgICAgICAgICdjb25maXJtLWNvZGUnOiBDb25maXJtQ29kZUZvcm0sXG4gICAgICAgICAgICAncmVnaXN0cmF0aW9uJzogUmVnaXN0cmF0aW9uRm9ybSxcbiAgICAgICAgICAgICdsb2dpbic6IExvZ2luRm9ybSxcbiAgICAgICAgICAgICdjb25ncmF0dWxhdGlvbic6IENvbmdyYXR1bGF0aW9uc0Zvcm1cbiAgICAgICAgfSxcbiAgICAgICAgd2F0Y2g6IHtcbiAgICAgICAgICAgIHNob3coKXtcbiAgICAgICAgICAgICAgICB0aGlzLnN0ZXAgPSB0aGlzLnNob3dGaXJzdDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdGVwKG5ld1N0ZXApe1xuICAgICAgICAgICAgICAgIGlmIChuZXdTdGVwID09PSAnZmluaXNoJyl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0aExvZ2luKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBzZXRTdGVwKHN0ZXApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0ZXAgPSBzdGVwO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGF1dGhMb2dpbigpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcxMjMnKVxuICAgICAgICAgICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuXG4gICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdlbWFpbCcsIHRoaXMuZW1haWwpO1xuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgncGFzc3dvcmQnLCB0aGlzLnBhc3N3b3JkKTtcbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ19jc3JmX3Rva2VuJywgdGhpcy5heGlvcy5fY3NyZl90b2tlbik7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmF4aW9zLnBvc3QoJy9ydS9sb2dpbicsIGZvcm1EYXRhKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmRhdGEuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucmVkaXJlY3QgIT09IG51bGwpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uYXNzaWduKHRoaXMucmVkaXJlY3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVnaXN0cmF0aW9uKCl7XG4gICAgICAgICAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcblxuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgndXNlcltlbWFpbF0nLCB0aGlzLmVtYWlsKTtcbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3VzZXJbcGFzc3dvcmRdW2ZpcnN0XScsIHRoaXMucGFzc3dvcmQpO1xuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgndXNlcltwYXNzd29yZF1bc2Vjb25kXScsIHRoaXMucGFzc3dvcmQpO1xuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnX2NzcmZfdG9rZW4nLCB0aGlzLmF4aW9zLl9jc3JmX3Rva2VuKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuYXhpb3MucG9zdCgnL3J1L3JlZ2lzdHJhdGlvbicsIGZvcm1EYXRhKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmRhdGEuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNsb3NlKCl7XG4gICAgICAgICAgICAgICAgdGhpcy4kcGFyZW50LnNob3cgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3cgPSBmYWxzZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaGVja1N0ZXAoc3RlcCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2hvdyAmJiB0aGlzLnN0ZXAgPT09IHN0ZXA7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2VuZENvbmZpcm1Db2RlKCl7XG4gICAgICAgICAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2VtYWlsJywgdGhpcy5lbWFpbCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmF4aW9zLnBvc3QoJy9ydS9nZW5lcmF0ZS9jb25maXJtL2NvZGUnLCBmb3JtRGF0YSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY29udGVudClcbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cbiAgICA8dHJhbnNpdGlvbiBuYW1lPVwic2xpZGUtZmFkZXNcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImxvZ2luX2Zvcm1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbl9ibG9ja1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2dvdHlwZVwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvQ2hhbXBzX2xvZ290eXBlLnN2Z1wiIGNsYXNzPVwibG9nb3R5cGVcIi8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvZ2luX3RpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgINCf0L7QtNGC0LLQtdGA0LbQtNC10L3QuNC1INC/0L7Rh9GC0YtcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW5faW5wdXQgZC1mbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHJlcXVpcmVkIHYtbW9kZWw9XCJjb25maXJtQ29kZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+0JrQvtC0INC/0L7QtNGC0LLQtdGA0LbQtNC10L3QuNGPPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicXVlc3Rpb24gcHQtMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXBsYWNlbWVudD1cInJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cItCd0LUg0L/RgNC40YjQtdC7INC60L7QtD8g0J/RgNC+0LLQtdGA0YzRgtC1INC/0LDQv9C60YMg0KHQv9Cw0Lwg0LjQu9C4INC/0L7Qv9GL0YLQsNC50YLQtdGB0Ywg0L7RgtC/0YDQsNCy0LjRgtGMINC10YnQtSDRgNCw0LcuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtcXVlc3Rpb25cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZW5kXCIgQGNsaWNrPVwic2VuZFJlZ2lzdHJhdGlvbkNvbmZpcm1cIj5cbiAgICAgICAgICAgICAgICAgICAg0J7RgtC/0YDQsNCy0LjRgtGMXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlbmQgcmVzZW5kXCJcbiAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJzdWNjZXNzTWVzc2FnZSA9PSBudWxsXCJcbiAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cInJlc2VuZENvbmZpcm1Db2RlXCJcbiAgICAgICAgICAgICAgICAgICAgIHYtaHRtbD1cIifQntGC0L/RgNCw0LLQuNGC0Ywg0LrQvtC0INC/0L7QstGC0L7RgNC90L4gJyArIHRpbWVyTWVzc2FnZVwiXG4gICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ZGlzYWJsZWQ6IHRpbWVyID4gMH1cIj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXJyb3JcIiB2LWlmPVwiZXJyb3JNZXNzYWdlICE9PSBudWxsXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7IGVycm9yTWVzc2FnZSB9fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlcnJvciB0ZXh0LXN1Y2Nlc3NcIiB2LWlmPVwic3VjY2Vzc01lc3NhZ2UgIT09IG51bGxcIj5cbiAgICAgICAgICAgICAgICAgICAge3sgc3VjY2Vzc01lc3NhZ2UgfX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlua3MgZC1mbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtdC0xXCIgQGNsaWNrPVwiJGVtaXQoJ3NldFN0ZXAnLCAncmVnaXN0cmF0aW9uJylcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkJhY2s8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXQtMVwiICBAY2xpY2s9XCJzaG93Tmlja25hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIDpjbGFzcz1cIntkaXNhYmxlZDogIWNvZGVDb25maXJtZWR9XCI+TmV4dDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNsb3NlZFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3ZnIEBjbGljaz1cImNsb3NlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgdmlld0JveD1cIjAgMCAxNiAxNlwiIGZpbGw9XCJub25lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTguODgzOTIgOC4wMDAwNEwxNS44MTY5IDEuMDY2OThDMTYuMDYxIDAuODIyODgyIDE2LjA2MSAwLjQyNzEzMyAxNS44MTY5IDAuMTgzMDdDMTUuNTcyOCAtMC4wNjA5OTIyIDE1LjE3NzEgLTAuMDYxMDIzNCAxNC45MzMgMC4xODMwN0w3Ljk5OTk4IDcuMTE2MTNMMS4wNjY5NyAwLjE4MzA3QzAuODIyODggLTAuMDYxMDIzNCAwLjQyNzEzMiAtMC4wNjEwMjM0IDAuMTgzMDcgMC4xODMwN0MtMC4wNjA5OTIgMC40MjcxNjQgLTAuMDYxMDIzMyAwLjgyMjkxNCAwLjE4MzA3IDEuMDY2OThMNy4xMTYwOCA4TDAuMTgzMDcgMTQuOTMzMUMtMC4wNjEwMjMzIDE1LjE3NzIgLTAuMDYxMDIzMyAxNS41NzI5IDAuMTgzMDcgMTUuODE3QzAuMzA1MTAxIDE1LjkzOSAwLjQ2NTA2OSAxNiAwLjYyNTAzNyAxNkMwLjc4NTAwNSAxNiAwLjk0NDk0MyAxNS45MzkgMS4wNjcgMTUuODE3TDcuOTk5OTggOC44ODM5NEwxNC45MzMgMTUuODE3QzE1LjA1NSAxNS45MzkgMTUuMjE1IDE2IDE1LjM3NSAxNkMxNS41MzQ5IDE2IDE1LjY5NDkgMTUuOTM5IDE1LjgxNjkgMTUuODE3QzE2LjA2MSAxNS41NzI5IDE2LjA2MSAxNS4xNzcxIDE1LjgxNjkgMTQuOTMzMUw4Ljg4MzkyIDguMDAwMDRaXCIgZmlsbD1cIiM4Njg4OEFcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvdHJhbnNpdGlvbj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiBcIkNvbmZpcm1Db2RlRm9ybVwiLFxuICAgICAgICBpbmplY3Q6IFtcbiAgICAgICAgICAgICdheGlvcycsXG4gICAgICAgICAgICAnY29uZmlnJ1xuICAgICAgICBdLFxuICAgICAgICBwcm9wczogW1xuICAgICAgICAgICAgJ2VtYWlsJyxcbiAgICAgICAgXSxcbiAgICAgICAgZGF0YSgpe1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjb2RlQ29uZmlybWVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBjb25maXJtQ29kZTogbnVsbCxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IG51bGwsXG4gICAgICAgICAgICAgICAgc3VjY2Vzc01lc3NhZ2U6IG51bGwsXG4gICAgICAgICAgICAgICAgdGltZXI6IDAsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICB0aW1lck1lc3NhZ2UoKSB7XG4gICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSAnJztcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRpbWVyID4gMCl7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBg0YfQtdGA0LXQtyA8c3Ryb25nPiR7dGhpcy50aW1lcn08L3N0cm9uZz4g0YHQtdC6YDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgc2VuZFJlZ2lzdHJhdGlvbkNvbmZpcm0oKXtcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWNjZXNzTWVzc2FnZSA9IG51bGw7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuXG4gICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCd1c2VyW2NvZGVdJywgdGhpcy5jb25maXJtQ29kZSk7XG4gICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCd1c2VyW2VtYWlsXScsIHRoaXMuZW1haWwpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5heGlvcy5wb3N0KCcvcnUvY2hlY2svY29uZmlybS9jb2RlJywgZm9ybURhdGEpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCh7ZGF0YX0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3VjY2Vzc01lc3NhZ2UgPSBkYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb2RlQ29uZmlybWVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgncmVnaXN0cmF0aW9uJylcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3NldFN0ZXAnLCAnbmlja25hbWUnKVxuICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoe3Jlc3BvbnNlfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb2RlQ29uZmlybWVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hvd05pY2tuYW1lKCl7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY29kZUNvbmZpcm1lZCl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3NldFN0ZXAnLCAnbmlja25hbWUnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbG9zZSgpe1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2Nsb3NlJylcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZXNlbmRDb25maXJtQ29kZSgpe1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRpbWVyID09PSAwKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lciA9IDMwO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJ1blRpbWVyKClcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdzZW5kQ29uZmlybUNvZGUnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBydW5UaW1lcigpe1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgICAgICAgICAgaWYgKHNlbGYudGltZXIgPiAwKXtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnRpbWVyIC09IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnJ1blRpbWVyKClcbiAgICAgICAgICAgICAgICAgICAgfSwgMTAwMClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICAkKCdbZGF0YS10b2dnbGU9XCJ0b29sdGlwXCJdJykudG9vbHRpcCgpXG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbiAgICAucXVlc3Rpb257XG4gICAgICAgIG9wYWNpdHk6IC41O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXI6IDAgc29saWQ7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgfVxuICAgIC5xdWVzdGlvbjpob3ZlcntcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgLmxvZ2luX2Zvcm0gLmxvZ2luX2Jsb2NrIC5yZXNlbmR7XG4gICAgICAgIG1hcmdpbi10b3A6IDAuNXZ3O1xuICAgICAgICBtYXJnaW4tdG9wOiAwLjV2dztcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDAuNXZ3IDA7XG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgICBib3JkZXI6IDAuMDR2dyBzb2xpZCAjQ0ZEQ0YzO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICAgICAgICBmb250LXNpemU6IDAuN3Z3O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wNXZ3O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgfVxuICAgIC5sb2dpbl9mb3JtIC5sb2dpbl9ibG9jayAucmVzZW5kLmRpc2FibGVke1xuICAgICAgICBvcGFjaXR5OiAuNTtcbiAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICB9XG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cbiAgICA8dHJhbnNpdGlvbiBuYW1lPVwic2xpZGUtZmFkZXNcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImxvZ2luX2Zvcm1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbl9ibG9ja1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2dvdHlwZVwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvQ2hhbXBzX2xvZ290eXBlLnN2Z1wiIGNsYXNzPVwibG9nb3R5cGVcIi8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvZ2luX3RpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgINCf0L7Qt9C00YDQsNCy0LvRj9C10Lwg0YEg0YPRgdC/0LXRiNC90L7QuSDRgNC10LPQtdGB0YLRgNCw0YbQuNC10LkhXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlbmRcIiBAY2xpY2s9XCIkZW1pdCgnc2V0U3RlcCcsICdmaW5pc2gnKVwiPlxuICAgICAgICAgICAgICAgICAgICDQmNCz0YDQsNGC0YxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2xvc2VkXCIgIEBjbGljaz1cIiRlbWl0KCdjbG9zZScpXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiBmaWxsPVwibm9uZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk04Ljg4MzkyIDguMDAwMDRMMTUuODE2OSAxLjA2Njk4QzE2LjA2MSAwLjgyMjg4MiAxNi4wNjEgMC40MjcxMzMgMTUuODE2OSAwLjE4MzA3QzE1LjU3MjggLTAuMDYwOTkyMiAxNS4xNzcxIC0wLjA2MTAyMzQgMTQuOTMzIDAuMTgzMDdMNy45OTk5OCA3LjExNjEzTDEuMDY2OTcgMC4xODMwN0MwLjgyMjg4IC0wLjA2MTAyMzQgMC40MjcxMzIgLTAuMDYxMDIzNCAwLjE4MzA3IDAuMTgzMDdDLTAuMDYwOTkyIDAuNDI3MTY0IC0wLjA2MTAyMzMgMC44MjI5MTQgMC4xODMwNyAxLjA2Njk4TDcuMTE2MDggOEwwLjE4MzA3IDE0LjkzMzFDLTAuMDYxMDIzMyAxNS4xNzcyIC0wLjA2MTAyMzMgMTUuNTcyOSAwLjE4MzA3IDE1LjgxN0MwLjMwNTEwMSAxNS45MzkgMC40NjUwNjkgMTYgMC42MjUwMzcgMTZDMC43ODUwMDUgMTYgMC45NDQ5NDMgMTUuOTM5IDEuMDY3IDE1LjgxN0w3Ljk5OTk4IDguODgzOTRMMTQuOTMzIDE1LjgxN0MxNS4wNTUgMTUuOTM5IDE1LjIxNSAxNiAxNS4zNzUgMTZDMTUuNTM0OSAxNiAxNS42OTQ5IDE1LjkzOSAxNS44MTY5IDE1LjgxN0MxNi4wNjEgMTUuNTcyOSAxNi4wNjEgMTUuMTc3MSAxNS44MTY5IDE0LjkzMzFMOC44ODM5MiA4LjAwMDA0WlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiIzg2ODg4QVwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC90cmFuc2l0aW9uPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6IFwiQ29uZ3JhdHVsYXRpb25zRm9ybVwiLFxuXG4gICAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG5cbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxuICAgIDx0cmFuc2l0aW9uIG5hbWU9XCJzbGlkZS1mYWRlc1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW5fZm9ybVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvZ2luX2Jsb2NrXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvZ290eXBlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9DaGFtcHNfbG9nb3R5cGUuc3ZnXCIgY2xhc3M9XCJsb2dvdHlwZVwiLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW5fdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAg0JLRhdC+0LQg0LIg0LvQuNGH0L3Ri9C5INC60LDQsdC40L3QtdGCXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvZ2luX2lucHV0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBAaW5wdXQ9XCIkZW1pdCgnaW5wdXRFbWFpbCcsICRldmVudC50YXJnZXQudmFsdWUpXCIvPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj7QkNC00YDQtdGBINGN0LvQtdC60YLRgNC+0L3QvdC+0Lkg0L/QvtGH0YLRizwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW5faW5wdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIEBpbnB1dD1cIiRlbWl0KCdpbnB1dFBhc3N3b3JkJywgJGV2ZW50LnRhcmdldC52YWx1ZSlcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPtCf0LDRgNC+0LvRjDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VuZFwiIEBjbGljaz1cIiRlbWl0KCdhdXRoTG9naW4nKVwiPlxuICAgICAgICAgICAgICAgICAgICDQktC+0LnRgtC4XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVycm9yXCIgdi1pZj1cImVycm9yXCI+XG4gICAgICAgICAgICAgICAgICAgINCd0LXQv9GA0LDQstC40LvRjNC90YvQuSDQu9C+0LPQuNC9INC40LvQuCDQv9Cw0YDQvtC70YxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3VidGV4dFwiPtCY0LvQuCDQstC+0LnQtNC40YLQtSDRgSDQv9C+0LzQvtGJ0YzRjjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbHRlcm5hdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vc3RlYW1jb21tdW5pdHkuY29tL29wZW5pZC9sb2dpbj9vcGVuaWQubnM9aHR0cCUzQSUyRiUyRnNwZWNzLm9wZW5pZC5uZXQlMkZhdXRoJTJGMi4wJmFtcDtvcGVuaWQubW9kZT1jaGVja2lkX3NldHVwJmFtcDtvcGVuaWQucmV0dXJuX3RvPWh0dHBzJTNBJTJGJTJGY2hhbXBzLnBybyUyRnJ1JTJGb2F1dGglMkZzdGVhbSUzRnN0YXRlPXN0ZWFtJmFtcDtvcGVuaWQucmVhbG09aHR0cHMlM0ElMkYlMkZjaGFtcHMucHJvJTJGcnUlMkZvYXV0aCUyRnN0ZWFtJmFtcDtvcGVuaWQubnMuc3JlZz1odHRwJTNBJTJGJTJGb3BlbmlkLm5ldCUyRmV4dGVuc2lvbnMlMkZzcmVnJTJGMS4xJmFtcDtvcGVuaWQuY2xhaW1lZF9pZD1odHRwJTNBJTJGJTJGc3BlY3Mub3BlbmlkLm5ldCUyRmF1dGglMkYyLjAlMkZpZGVudGlmaWVyX3NlbGVjdCZhbXA7b3BlbmlkLmlkZW50aXR5PWh0dHAlM0ElMkYlMkZzcGVjcy5vcGVuaWQubmV0JTJGYXV0aCUyRjIuMCUyRmlkZW50aWZpZXJfc2VsZWN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvbG9naW5fc3RlYW0uc3ZnXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9ydS9hdXRoL2Rpc2NvcmQvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvbG9naW5fZGlzY29yZC5zdmdcIj5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL3J1L2F1dGgvZmFjZWJvb2svXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvZmFjZWJvb2sucG5nXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9ydS9hdXRoL2dvb2dsZS9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9nb29nbGUucG5nXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9ydS9hdXRoL3R3aWNoL1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3R3aWNoLnBuZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvcnUvYXV0aC92ay9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy92ay5zdmdcIj5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaW5rc1wiIEBjbGljaz1cIiRlbWl0KCdzZXRTdGVwJywgJ3JlZ2lzdHJhdGlvbicpXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7QoNC10LPQuNGB0YLRgNCw0YbQuNGPPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2xvc2VkXCIgQGNsaWNrPVwiJGVtaXQoJ2Nsb3NlJylcIj5cbiAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgdmlld0JveD1cIjAgMCAxNiAxNlwiIGZpbGw9XCJub25lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTguODgzOTIgOC4wMDAwNEwxNS44MTY5IDEuMDY2OThDMTYuMDYxIDAuODIyODgyIDE2LjA2MSAwLjQyNzEzMyAxNS44MTY5IDAuMTgzMDdDMTUuNTcyOCAtMC4wNjA5OTIyIDE1LjE3NzEgLTAuMDYxMDIzNCAxNC45MzMgMC4xODMwN0w3Ljk5OTk4IDcuMTE2MTNMMS4wNjY5NyAwLjE4MzA3QzAuODIyODggLTAuMDYxMDIzNCAwLjQyNzEzMiAtMC4wNjEwMjM0IDAuMTgzMDcgMC4xODMwN0MtMC4wNjA5OTIgMC40MjcxNjQgLTAuMDYxMDIzMyAwLjgyMjkxNCAwLjE4MzA3IDEuMDY2OThMNy4xMTYwOCA4TDAuMTgzMDcgMTQuOTMzMUMtMC4wNjEwMjMzIDE1LjE3NzIgLTAuMDYxMDIzMyAxNS41NzI5IDAuMTgzMDcgMTUuODE3QzAuMzA1MTAxIDE1LjkzOSAwLjQ2NTA2OSAxNiAwLjYyNTAzNyAxNkMwLjc4NTAwNSAxNiAwLjk0NDk0MyAxNS45MzkgMS4wNjcgMTUuODE3TDcuOTk5OTggOC44ODM5NEwxNC45MzMgMTUuODE3QzE1LjA1NSAxNS45MzkgMTUuMjE1IDE2IDE1LjM3NSAxNkMxNS41MzQ5IDE2IDE1LjY5NDkgMTUuOTM5IDE1LjgxNjkgMTUuODE3QzE2LjA2MSAxNS41NzI5IDE2LjA2MSAxNS4xNzcxIDE1LjgxNjkgMTQuOTMzMUw4Ljg4MzkyIDguMDAwMDRaXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjODY4ODhBXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L3RyYW5zaXRpb24+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbmFtZTogXCJMb2dpbkZvcm1cIixcbiAgICAgICAgaW5qZWN0OiBbXG4gICAgICAgICAgICAnY29uZmlnJ1xuICAgICAgICBdLFxuICAgICAgICBwcm9wczogW1xuICAgICAgICAgICAgJ2Vycm9yJ1xuICAgICAgICBdLFxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgc3RlYW1Mb2dpbkxpbmsoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLlNURUFNX0xPR0lOX0xJTks7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfVxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxuICAgIDx0cmFuc2l0aW9uIG5hbWU9XCJzbGlkZS1mYWRlc1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW5fZm9ybVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvZ2luX2Jsb2NrXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvZ290eXBlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9DaGFtcHNfbG9nb3R5cGUuc3ZnXCIgY2xhc3M9XCJsb2dvdHlwZVwiLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW5fdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAg0JLQstC10LTQuNGC0LUg0YHQstC+0Lkg0L3QuNC60L3QtdC50LxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW5faW5wdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImVtYWlsXCIgcmVxdWlyZWQgdi1tb2RlbD1cIm5pY2tuYW1lXCIvPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj7Qm9C+0LPQuNC9IChOaWNrbmFtZSk8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVycm9yXCIgdi1pZj1cImVycm9yTWVzc2FnZSAhPT0gbnVsbFwiPlxuICAgICAgICAgICAgICAgICAgICB7eyBlcnJvck1lc3NhZ2UgfX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VuZFwiIEBjbGljaz1cInNldE5pY2tuYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgINCX0LDQstC10YDRiNC40YLRjCDRgNC10LPQtdGB0YLRgNCw0YbQuNGOXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNsb3NlZFwiIEBjbGljaz1cImNsb3NlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiBmaWxsPVwibm9uZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk04Ljg4MzkyIDguMDAwMDRMMTUuODE2OSAxLjA2Njk4QzE2LjA2MSAwLjgyMjg4MiAxNi4wNjEgMC40MjcxMzMgMTUuODE2OSAwLjE4MzA3QzE1LjU3MjggLTAuMDYwOTkyMiAxNS4xNzcxIC0wLjA2MTAyMzQgMTQuOTMzIDAuMTgzMDdMNy45OTk5OCA3LjExNjEzTDEuMDY2OTcgMC4xODMwN0MwLjgyMjg4IC0wLjA2MTAyMzQgMC40MjcxMzIgLTAuMDYxMDIzNCAwLjE4MzA3IDAuMTgzMDdDLTAuMDYwOTkyIDAuNDI3MTY0IC0wLjA2MTAyMzMgMC44MjI5MTQgMC4xODMwNyAxLjA2Njk4TDcuMTE2MDggOEwwLjE4MzA3IDE0LjkzMzFDLTAuMDYxMDIzMyAxNS4xNzcyIC0wLjA2MTAyMzMgMTUuNTcyOSAwLjE4MzA3IDE1LjgxN0MwLjMwNTEwMSAxNS45MzkgMC40NjUwNjkgMTYgMC42MjUwMzcgMTZDMC43ODUwMDUgMTYgMC45NDQ5NDMgMTUuOTM5IDEuMDY3IDE1LjgxN0w3Ljk5OTk4IDguODgzOTRMMTQuOTMzIDE1LjgxN0MxNS4wNTUgMTUuOTM5IDE1LjIxNSAxNiAxNS4zNzUgMTZDMTUuNTM0OSAxNiAxNS42OTQ5IDE1LjkzOSAxNS44MTY5IDE1LjgxN0MxNi4wNjEgMTUuNTcyOSAxNi4wNjEgMTUuMTc3MSAxNS44MTY5IDE0LjkzMzFMOC44ODM5MiA4LjAwMDA0WlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiIzg2ODg4QVwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC90cmFuc2l0aW9uPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6IFwiTmlja25hbWVGb3JtXCIsXG4gICAgICAgIGluamVjdDogW1xuICAgICAgICAgICAgJ2F4aW9zJyxcbiAgICAgICAgICAgICdjb25maWcnXG4gICAgICAgIF0sXG4gICAgICAgIHByb3BzOiBbXG4gICAgICAgICAgICAnZW1haWwnLFxuICAgICAgICBdLFxuICAgICAgICBkYXRhKCl7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG5pY2tuYW1lOiBudWxsLFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogbnVsbCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgc2V0Tmlja25hbWUoKXtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICBlbWFpbDogdGhpcy5lbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgbmlja25hbWU6IHRoaXMubmlja25hbWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5heGlvcy5wb3N0KCcvcnUvYWpheC91c2VyL3NldC9uaWNrbmFtZScsIGRhdGEpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCh7ZGF0YX0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3NldFN0ZXAnLCAnY29uZ3JhdHVsYXRpb24nKVxuICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoe3Jlc3BvbnNlfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSByZXNwb25zZS5kYXRhXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2xvc2UoKXtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdjbG9zZScpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cblxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XG4gICAgPHRyYW5zaXRpb24gbmFtZT1cInNsaWRlLWZhZGVzXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbl9mb3JtXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW5fcmVxXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvZ2luX2Jsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2dvdHlwZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL0NoYW1wc19sb2dvdHlwZS5zdmdcIiBjbGFzcz1cImxvZ290eXBlXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvZ2luX3RpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICDQoNC10LPQuNGB0YLRgNCw0YbQuNGPXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW5faW5wdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6dmFsdWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGlucHV0PVwiJGVtaXQoJ2lucHV0RW1haWwnLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPtCQ0LTRgNC10YEg0Y3Qu9C10LrRgtGA0L7QvdC90L7QuSDQv9C+0YfRgtGLPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvZ2luX2lucHV0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDp2YWx1ZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAaW5wdXQ9XCIkZW1pdCgnaW5wdXRQYXNzd29yZCcsICRldmVudC50YXJnZXQudmFsdWUpXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+0J/QsNGA0L7Qu9GMPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvZ2luX2NoZWNrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjaGVja2VkPVwiY2hlY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2hhbmdlPVwiJGVtaXQoJ2lucHV0JywgJGV2ZW50LnRhcmdldC52YWx1ZSlcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9ydS90ZXJtcy1vZi11c2VcIiB0YXJnZXQ9XCJfYmxhbmtcIj7QntC30L3QsNC60L7QvNC70LXQvSDRgSDQv9GA0LDQstC40LvQsNC80Lgg0LjRgdC/0L7Qu9GM0LfQvtCy0LDQvdC40Y8g0YHQtdGA0LLQuNGB0LAgwqtDaGFtcHPCuzwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZW5kXCIgQGNsaWNrPVwiY2hlY2tJc0VtYWlsVmFsaWRcIiA6c3R5bGU9XCJ7b3BhY2l0eTogJHBhcmVudC5jaGVjayA/ICcxJzogJy41J31cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgINCX0LDRgNC10LPQuNGB0YLRgNC40YDQvtCy0LDRgtGM0YHRj1xuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVycm9yXCIgdi1pZj1cImVycm9yTWVzc2FnZSAhPT0gbnVsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3sgZXJyb3JNZXNzYWdlIH19XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3VidGV4dFwiPtCY0LvQuCDQstC+0LnQtNC40YLQtSDRgSDQv9C+0LzQvtGJ0YzRjjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWx0ZXJuYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9zdGVhbWNvbW11bml0eS5jb20vb3BlbmlkL2xvZ2luP29wZW5pZC5ucz1odHRwJTNBJTJGJTJGc3BlY3Mub3BlbmlkLm5ldCUyRmF1dGglMkYyLjAmYW1wO29wZW5pZC5tb2RlPWNoZWNraWRfc2V0dXAmYW1wO29wZW5pZC5yZXR1cm5fdG89aHR0cHMlM0ElMkYlMkZjaGFtcHMucHJvJTJGcnUlMkZvYXV0aCUyRnN0ZWFtJTNGc3RhdGU9c3RlYW0mYW1wO29wZW5pZC5yZWFsbT1odHRwcyUzQSUyRiUyRmNoYW1wcy5wcm8lMkZydSUyRm9hdXRoJTJGc3RlYW0mYW1wO29wZW5pZC5ucy5zcmVnPWh0dHAlM0ElMkYlMkZvcGVuaWQubmV0JTJGZXh0ZW5zaW9ucyUyRnNyZWclMkYxLjEmYW1wO29wZW5pZC5jbGFpbWVkX2lkPWh0dHAlM0ElMkYlMkZzcGVjcy5vcGVuaWQubmV0JTJGYXV0aCUyRjIuMCUyRmlkZW50aWZpZXJfc2VsZWN0JmFtcDtvcGVuaWQuaWRlbnRpdHk9aHR0cCUzQSUyRiUyRnNwZWNzLm9wZW5pZC5uZXQlMkZhdXRoJTJGMi4wJTJGaWRlbnRpZmllcl9zZWxlY3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvbG9naW5fc3RlYW0uc3ZnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL3J1L2F1dGgvZGlzY29yZC9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvbG9naW5fZGlzY29yZC5zdmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvcnUvYXV0aC9mYWNlYm9vay9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvZmFjZWJvb2sucG5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL3J1L2F1dGgvZ29vZ2xlL1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9nb29nbGUucG5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL3J1L2F1dGgvdHdpY2gvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3R3aWNoLnBuZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9ydS9hdXRoL3ZrL1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy92ay5zdmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaW5rc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBAY2xpY2s9XCIkZW1pdCgnc2V0U3RlcCcsICdsb2dpbicpXCI+0JLRhdC+0LQg0LIg0LvQuNGH0L3Ri9C5INC60LDQsdC40L3QtdGCPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2xvc2VkXCIgQGNsaWNrPVwiY2xvc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiBmaWxsPVwibm9uZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNOC44ODM5MiA4LjAwMDA0TDE1LjgxNjkgMS4wNjY5OEMxNi4wNjEgMC44MjI4ODIgMTYuMDYxIDAuNDI3MTMzIDE1LjgxNjkgMC4xODMwN0MxNS41NzI4IC0wLjA2MDk5MjIgMTUuMTc3MSAtMC4wNjEwMjM0IDE0LjkzMyAwLjE4MzA3TDcuOTk5OTggNy4xMTYxM0wxLjA2Njk3IDAuMTgzMDdDMC44MjI4OCAtMC4wNjEwMjM0IDAuNDI3MTMyIC0wLjA2MTAyMzQgMC4xODMwNyAwLjE4MzA3Qy0wLjA2MDk5MiAwLjQyNzE2NCAtMC4wNjEwMjMzIDAuODIyOTE0IDAuMTgzMDcgMS4wNjY5OEw3LjExNjA4IDhMMC4xODMwNyAxNC45MzMxQy0wLjA2MTAyMzMgMTUuMTc3MiAtMC4wNjEwMjMzIDE1LjU3MjkgMC4xODMwNyAxNS44MTdDMC4zMDUxMDEgMTUuOTM5IDAuNDY1MDY5IDE2IDAuNjI1MDM3IDE2QzAuNzg1MDA1IDE2IDAuOTQ0OTQzIDE1LjkzOSAxLjA2NyAxNS44MTdMNy45OTk5OCA4Ljg4Mzk0TDE0LjkzMyAxNS44MTdDMTUuMDU1IDE1LjkzOSAxNS4yMTUgMTYgMTUuMzc1IDE2QzE1LjUzNDkgMTYgMTUuNjk0OSAxNS45MzkgMTUuODE2OSAxNS44MTdDMTYuMDYxIDE1LjU3MjkgMTYuMDYxIDE1LjE3NzEgMTUuODE2OSAxNC45MzMxTDguODgzOTIgOC4wMDAwNFpcIiBmaWxsPVwiIzg2ODg4QVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW5fcmVxX2Jsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj7QotGA0LXQvdC10YDRg9C50YLQtdGB0Ywg0LLQvNC10YHRgtC1INGBINC70YPRh9GI0LjQvNC4INC40LPRgNC+0LrQsNC80Lgg0LIg0LLQsNGI0LjRhSDQu9GO0LHQuNC80YvRhSDQuNCz0YDQsNGFPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+0J/QvtGB0LvQtdC00L3QuNC1INC90L7QstC+0YHRgtC4INC4INGB0L7QsdGL0YLQuNGPPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+0JLQtdC70LjQutC+0LvQtdC/0L3QvtC1INGB0L7QvtCx0YnQtdGB0YLQstC+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+0KLRgNCw0L3RgdC70Y/RhtC40Lgg0Lgg0YDQtdC30YPQu9GM0YLQsNGC0Ysg0LzQsNGC0YfQtdC5PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+0JDQvdCw0LvQuNGC0LjQutCwINC+0YIg0L/RgNC+0YTQtdGB0YHQuNC+0L3QsNC70L7QsjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L3RyYW5zaXRpb24+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgaW5qZWN0OiBbXG4gICAgICAgICAgICAnYXhpb3MnLFxuICAgICAgICAgICAgJ2NvbmZpZydcbiAgICAgICAgXSxcbiAgICAgICAgbmFtZTogXCJSZWdpc3RyYXRpb25Gb3JtXCIsXG4gICAgICAgIHByb3BzOiBbXG4gICAgICAgICAgICAncGFzc3dvcmQnLFxuICAgICAgICAgICAgJ2VtYWlsJyxcbiAgICAgICAgICAgICdjaGVjaydcbiAgICAgICAgXSxcbiAgICAgICAgZGF0YSgpe1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIHN0ZWFtTG9naW5MaW5rKCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLlNURUFNX0xPR0lOX0xJTks7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW1haWxGb3JtKCl7XG4gICAgICAgICAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2VtYWlsJywgdGhpcy5lbWFpbCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZm9ybURhdGE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGdlbmVyYXRlQ29uZmlybUNvZGUoKXtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGVjaykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdzZW5kQ29uZmlybUNvZGUnKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdzZXRTdGVwJywgJ2NvbmZpcm1Db2RlJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2hlY2tJc0VtYWlsVmFsaWQoKXtcbiAgICAgICAgICAgICAgICB0aGlzLmF4aW9zLnBvc3QoJy9ydS91c2VyL2NoZWNrL2VtYWlsJywgdGhpcy5lbWFpbEZvcm0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCh7ZGF0YX0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVDb25maXJtQ29kZSgpO1xuICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoe3Jlc3BvbnNlfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNsb3NlKCl7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xvc2UnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH1cbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiZ3JpZFwiPlxuICAgICAgICA8YSBjbGFzcz1cImdyaWQtcm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0YVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7IHRlYW0ubmFtZSB9fVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvdHRvbVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+0J3QsNC30LLQsNC90LjQtTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRhXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAge3sgdGVhbS50YWcgfX1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3R0b21cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPtCi0LXQszwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRhXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAge3sgdGVhbS5tZW1iZXJzLmxlbmd0aCB9fVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvdHRvbVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+0KPRh9Cw0YHQvdC40LrQvtCyPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGEgcHQtMlwiPlxuICAgICAgICAgICAgICAgIDxhIDpocmVmPVwiaHR0cC5nZXRUZWFtTGluayh0ZWFtLmlkKVwiIGNsYXNzPVwiYnRuLW9yYW5nZSB0ZXh0LWxpZ2h0IHAtMiBwb2ludGVyXCI+XG4gICAgICAgICAgICAgICAgICAgINCf0L7RgdC80L7RgtGA0LXRgtGMXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvYT5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiBcIk12cEpvaW5lZFRlYW1cIixcbiAgICAgICAgcHJvcHM6IFsndGVhbSddLFxuICAgICAgICBpbmplY3Q6IFtcbiAgICAgICAgICAgICdodHRwJ1xuICAgICAgICBdXG4gICAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG5cbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJldmVudHNfdmlld1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbXBvbmVudCB1cGNvbWluZ19ldmVudHNcIj5cbiAgICAgICAgICAgICAgICAgICAgPG12cC1qb2luZWQtdGVhbSA6dGVhbT1cInRlYW1cIiA6a2V5PVwia2V5XCIgdi1mb3I9XCIodGVhbSwga2V5KSBpbiB0ZWFtc1wiLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IE12cEpvaW5lZFRlYW0gZnJvbSBcIi4vTXZwSm9pbmVkVGVhbVwiO1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiBcIk12cEpvaW5lZFRlYW1zXCIsXG4gICAgICAgIGluamVjdDogW1xuICAgICAgICAgICAgJ2h0dHAnXG4gICAgICAgIF0sXG4gICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICAgICdtdnAtam9pbmVkLXRlYW0nOiBNdnBKb2luZWRUZWFtXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGEoKXtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdGVhbXM6IFtdXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGdldEpvaW5lZFRlYW1zKCl7XG4gICAgICAgICAgICAgICAgdGhpcy5odHRwLmdldFVzZXJKb2luZWRUZWFtcygpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCh7ZGF0YX0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGVhbXMgPSBkYXRhXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICB0aGlzLmdldEpvaW5lZFRlYW1zKClcbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyIG10LTNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZnRcIj5cbiAgICAgICAgICAgICAgICA8YSA6Y2xhc3M9XCJ7YWN0aXZlOiBhY3RpdmUgPT09ICdjb21tYW5kcyd9XCIgQGNsaWNrPVwiIGFjdGl2ZSA9ICdjb21tYW5kcydcIj7QmtCe0JzQkNCd0JTQqzwvYT5cbiAgICAgICAgICAgICAgICA8YSA6Y2xhc3M9XCJ7YWN0aXZlOiBhY3RpdmUgPT09ICd0b3VybmFtZW50cyd9XCIgQGNsaWNrPVwiIGFjdGl2ZSA9ICd0b3VybmFtZW50cydcIj7QotCj0KDQndCY0KDQqzwvYT5cbiAgICAgICAgICAgICAgICA8YSA6Y2xhc3M9XCJ7YWN0aXZlOiBhY3RpdmUgPT09ICdtYXRjaGVzJ31cIiBAY2xpY2s9XCIgYWN0aXZlID0gJ21hdGNoZXMnXCI+0JzQkNCi0KfQmDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICA8TXZwVGVhbXM+PC9NdnBUZWFtcz5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IE12cFRlYW1zIGZyb20gXCIuL012cFRlYW1zXCI7XG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6IFwiTXZwUGFnZVwiLFxuICAgICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICAgICBNdnBUZWFtc1xuICAgICAgICB9LFxuICAgICAgICBkYXRhKCl7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGFjdGl2ZTogJ2NvbW1hbmRzJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuXG4gICAgICAgIH0sXG4gICAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG5cbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJjYXJkIHctNTAgbXItMiBib3JkZXItcmFkaXVzLTBcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiIHYtaWY9XCJ0ZWFtID09PSB1bmRlZmluZWRcIj5cbiAgICAgICAgICAgIDxoNSBjbGFzcz1cImNhcmQtdGl0bGUgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAge3sgdGl0bGUgfX1cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlIGJhZGdlLXdhcm5pbmcgYm9yZGVyLXJhZGl1cy0wXCI+e3sgdHlwZSB9fTwvc3Bhbj5cbiAgICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtdGV4dFwiPlxuICAgICAgICAgICAgICAgIHt7IGRlc2NyaXB0aW9uIH19XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8YSBjbGFzcz1cImJ0bi1vcmFuZ2UgdGV4dC1saWdodCBwLTIgcG9pbnRlclwiXG4gICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cIm1vZGFsXCJcbiAgICAgICAgICAgICAgIEBjbGljaz1cIiRlbWl0KCdzZXRDYXBhY2l0eScsIGNhcGFjaXR5KVwiXG4gICAgICAgICAgICAgICBkYXRhLXRhcmdldD1cIiNtYWtlQ29tYW5kTW9kYWxcIj5cbiAgICAgICAgICAgICAgICDQodC+0LfQtNCw0YLRjCDQutC+0LzQsNC90LTRgyB7eyB0eXBlIH19XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCIgdi1pZj1cInRlYW0gIT09IHVuZGVmaW5lZFwiPlxuICAgICAgICAgICAgPGg1IGNsYXNzPVwiY2FyZC10aXRsZSBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICB7eyB0ZWFtLm5hbWUgfX1cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlIGJhZGdlLXdhcm5pbmcgYm9yZGVyLXJhZGl1cy0wXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7IHR5cGUgfX1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2g1PlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkLXRleHRcIj4ge3sgdGVhbS5tZW1iZXJzLmxlbmd0aCB9fSDRg9GH0LDRgdC90LjQutC+0LI8L3A+XG4gICAgICAgICAgICA8YSBjbGFzcz1cImJ0bi1vcmFuZ2UgdGV4dC1saWdodCBwLTIgcG9pbnRlclwiIDpocmVmPVwiaHR0cC5nZXRUZWFtTGluayh0ZWFtLmlkKVwiPlxuICAgICAgICAgICAgICAgINCf0L7RgdC80L7RgtGA0LXRgtGMXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbmFtZTogXCJNdnBUZWFtXCIsXG4gICAgICAgIGluamVjdDogW1xuICAgICAgICAgICAgJ2h0dHAnXG4gICAgICAgIF0sXG4gICAgICAgIHByb3BzOiBbXG4gICAgICAgICAgICAndGVhbXMnLFxuICAgICAgICAgICAgJ3RpdGxlJyxcbiAgICAgICAgICAgICdkZXNjcmlwdGlvbicsXG4gICAgICAgICAgICAndHlwZScsXG4gICAgICAgICAgICAnY2FwYWNpdHknXG4gICAgICAgIF0sXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICB0ZWFtKCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudGVhbXMuZmluZCh0ZWFtID0+IE51bWJlcih0ZWFtLmNhcGFjaXR5KSA9PT0gTnVtYmVyKHRoaXMuY2FwYWNpdHkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiZ3JpZFwiPlxuICAgICAgICA8YSBjbGFzcz1cImdyaWQtcm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9nb1wiPlxuICAgICAgICAgICAgICAgIDxpbWcgdi1pZj1cIm1lbWJlci5pbWFnZSAhPT0gbnVsbFwiLz5cbiAgICAgICAgICAgICAgICA8aW1nIHYtZWxzZSBzcmM9XCIvaW1hZ2VzL25vTG9nby5wbmdcIi8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRhXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAge3sgbWVtYmVyLm5pY2tuYW1lIH19XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm90dG9tXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7QndC40Lo8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0YVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWlmPVwiaXNDYXB0YWluXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICDQmtCw0L/QuNGC0LDQvVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtZWxzZT5cbiAgICAgICAgICAgICAgICAgICAgICAgINCY0LPRgNC+0LpcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3R0b21cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPtCg0L7Qu9GMPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGFcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSA6aHJlZj1cImdldFN0ZWFtTGluayhtZW1iZXIuc3RlYW0pXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyB3aWR0aD1cIjIwcHhcIiBzcmM9XCIvaW1hZ2VzL2xvZ2luX3N0ZWFtLnN2Z1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvdHRvbVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+0KHRgtC40Lw8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvYT5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiBcIk12cFRlYW1NZW1iZXJcIixcbiAgICAgICAgcHJvcHM6IFtcbiAgICAgICAgICAgICdtZW1iZXInLFxuICAgICAgICAgICAgJ2lzQ2FwdGFpbidcbiAgICAgICAgXSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgZ2V0U3RlYW1MaW5rOiAoc3RlYW1JZCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBgaHR0cHM6Ly9zdGVhbWNvbW11bml0eS5jb20vcHJvZmlsZXMvJHtzdGVhbUlkfWBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyIG10LTMgZC1ibG9ja1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxmdFwiPlxuICAgICAgICAgICAgICAgIDxhIDpocmVmPVwiaHR0cC5nZXRNdnBMaW5rKClcIj7QndCw0LfQsNC0PC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXZlbnRzX3ZpZXdcIiBpZD1cInRlYW1NZW1iZXJzXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tcG9uZW50IHVwY29taW5nX2V2ZW50c1wiIGlkPVwidXBjb21pbmdfZXZlbnRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm91bmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGltZyBzcmM9XCIvaW1hZ2VzL2xhbXAuc3ZnXCIgYWx0PVwibGFtcFwiIC8+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCj0YfQsNGB0YLQvdC40LrQuFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bXZwLXRlYW0tbWVtYmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwidGVhbS5oYXNPd25Qcm9wZXJ0eSgnbWVtYmVycycpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtZm9yPVwiKG1lbWJlciwga2V5KSBpbiB0ZWFtLm1lbWJlcnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm1lbWJlcj1cIm1lbWJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6a2V5PVwia2V5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDppcy1jYXB0YWluPVwiY2hlY2tNZW1iZXJJc0NhcHRhaW4obWVtYmVyKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbXZwLXRlYW0tbWVtYmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IG10LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZnRcIiB2LWlmPVwiaXNDcmVhdG9yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgQGNsaWNrPVwiZGVsZXRlVGVhbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQo9C00LDQu9C40YLRjCDQutC+0LzQsNC90LTRg1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImJ0bi1vcmFuZ2UgdGV4dC1saWdodCBwb2ludGVyXCIgQGNsaWNrPVwic2hvd0FkZE1vZGFsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXBsdXNcIj48L2k+Jm5ic3A7Jm5ic3A70JTQvtCx0LDQstC40YLRjCDRg9GH0LDRgdC90LjQutC+0LJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZnRcIiB2LWVsc2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJidG4tb3JhbmdlIHRleHQtbGlnaHQgcG9pbnRlclwiIDpocmVmPVwiaHR0cC51c2VyTGVhdmVUZWFtTGluayh0ZWFtSWQpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCf0L7QutC40L3Rg9GC0Ywg0LrQvtC80LDQvdC00YNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBTd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJ1xuICAgIGltcG9ydCBNdnBUZWFtTWVtYmVyIGZyb20gXCIuL012cFRlYW1NZW1iZXJcIjtcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbmFtZTogXCJNdnBUZWFtUGFnZVwiLFxuICAgICAgICBpbmplY3Q6IFtcbiAgICAgICAgICAgICdodHRwJ1xuICAgICAgICBdLFxuICAgICAgICBwcm9wczogW1xuICAgICAgICAgICAgJ3RlYW1JZCdcbiAgICAgICAgXSxcbiAgICAgICAgY29tcG9uZW50czoge1xuICAgICAgICAgICAgJ212cC10ZWFtLW1lbWJlcic6IE12cFRlYW1NZW1iZXIsXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGEoKXtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdGVhbToge30sXG4gICAgICAgICAgICAgICAgaW52aXRlVG9rZW46IG51bGwsXG4gICAgICAgICAgICAgICAgdXNlcjogbnVsbCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIGlzQ3JlYXRvcigpe1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnVzZXIgIT09IG51bGwgJiYgdGhpcy51c2VyLmlkID09PSB0aGlzLnRlYW0uY3JlYXRvci5pZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgZ2V0VGVhbSgpe1xuICAgICAgICAgICAgICAgIHRoaXMuaHR0cC5nZXRNdnBUZWFtKHRoaXMudGVhbUlkKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigoe2RhdGF9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRlYW0gPSBkYXRhO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNoZWNrTWVtYmVySXNDYXB0YWluKG1lbWJlcil7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1lbWJlci5pZCA9PT0gdGhpcy50ZWFtLmNyZWF0b3IuaWRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXRTdGVhbUxpbmsoc3RlYW1JZCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGBodHRwczovL3N0ZWFtY29tbXVuaXR5LmNvbS9wcm9maWxlcy8ke3N0ZWFtSWR9YFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNob3dBZGRNb2RhbCgpe1xuICAgICAgICAgICAgICAgIHRoaXMuaHR0cC5nZXRUZWFtSW52aXRlVG9rZW4odGhpcy50ZWFtSWQpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCh7ZGF0YX0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0ludml0ZU1vZGFsKGRhdGEpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hvd0ludml0ZU1vZGFsKHRva2VuKXtcbiAgICAgICAgICAgICAgICBjb25zdCBpbnZpdGVMaW5rID0gdGhpcy5odHRwLmdldEludml0ZVRvVGVhbUxpbmsodGhpcy50ZWFtSWQsIHRva2VuKVxuXG4gICAgICAgICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfQlNC+0LHQsNCy0LjRgtGMINGD0YfQsNGB0YLQvdC40LrQvtCyJyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ9Ce0YLQv9GA0LDQstGMINGN0YLRgyDRgdGB0YvQu9C60YMg0LjQs9GA0L7QutCw0LwsINC60L7RgtC+0YDRi9GFINGF0L7Rh9C10YjRjCDQv9GA0LjQs9C70LDRgdC40YLRjCDQsiDQutC+0LzQsNC90LTRgycsXG4gICAgICAgICAgICAgICAgICAgIGh0bWw6IGA8dGV4dGFyZWEgY2xhc3M9XCJzd2FsMi10ZXh0YXJlYVwiIHBsYWNlaG9sZGVyPVwiXCIgc3R5bGU9XCJkaXNwbGF5OiBmbGV4O1wiPiR7aW52aXRlTGlua308L3RleHRhcmVhPmAsXG4gICAgICAgICAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHNob3dDb25maXJtQnV0dG9uOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ9Ce0LHQvdC+0LLQuNGC0YwnLFxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiAn0JfQsNC60YDRi9GC0YwnLFxuICAgICAgICAgICAgICAgICAgICBwcmVDb25maXJtOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmh0dHAucmVsb2FkVGVhbUludml0ZVRva2VuKHRoaXMudGVhbUlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCh7ZGF0YX0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93SW52aXRlTW9kYWwoZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWxldGVUZWFtKCl7XG4gICAgICAgICAgICAgICAgdGhpcy5odHRwLmRlbGV0ZU12cFRlYW0odGhpcy50ZWFtSWQpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IHRoaXMuaHR0cC5nZXRNdnBMaW5rKClcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXRVc2VyKCl7XG4gICAgICAgICAgICAgICAgdGhpcy5odHRwLmdldEF1dGhVc2VyKClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHtkYXRhfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VyID0gZGF0YVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0VGVhbSgpO1xuICAgICAgICAgICAgdGhpcy5nZXRVc2VyKCk7XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBjb21tYW5kcyBwLTAgbXQtM1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctNzUgZC1mbGV4XCI+XG4gICAgICAgICAgICAgICAgPG12cC10ZWFtXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwi0J3QsNGB0YLRgNC+0LXQvSDQuNCz0YDQsNGC0Ywg0YHQtdGA0YzQtdC30L3Qvj9cIlxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cItCh0L7Qt9C00LDQuSDRgdCy0L7RjiDQutC+0LzQsNC90LTRgyDQtNC70Y8g0YLRg9GA0LjQutC+0LIgNXY1INC4INCy0YDRi9Cy0LDQudGB0Y8g0LIg0LrQuNCx0LXRgNGB0L/QvtGA0YJcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiNXg1XCJcbiAgICAgICAgICAgICAgICAgICAgY2FwYWNpdHk9XCI1XCJcbiAgICAgICAgICAgICAgICAgICAgQHNldENhcGFjaXR5PVwic2V0Q2FwYWNpdHlcIlxuICAgICAgICAgICAgICAgICAgICA6dGVhbXM9XCJ0ZWFtc1wiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8bXZwLXRlYW1cbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCLQndCw0L/QsNGA0L3QuNC60LhcIlxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cItCd0LXRgiDQv9C+0YHRgtC+0Y/QvdC90L7QuSDQutC+0LzQsNC90LTRiz8g0J/QvtC30L7QstC4INC00YDRg9Cz0LAg0Lgg0LLRi9C90L7RgdC40YLQtSDRgdC+0L/QtdGA0L3QuNC60L7QsiDQstC80LXRgdGC0LVcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiMngyXCJcbiAgICAgICAgICAgICAgICAgICAgY2FwYWNpdHk9XCIyXCJcbiAgICAgICAgICAgICAgICAgICAgQHNldENhcGFjaXR5PVwic2V0Q2FwYWNpdHlcIlxuICAgICAgICAgICAgICAgICAgICA6dGVhbXM9XCJ0ZWFtc1wiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsIGZhZGVcIiBpZD1cIm1ha2VDb21hbmRNb2RhbFwiIHRhYmluZGV4PVwiLTFcIiBhcmlhLWxhYmVsbGVkYnk9XCJleGFtcGxlTW9kYWxMYWJlbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnQgYm9yZGVyLXJhZGl1cy0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwibW9kYWwtdGl0bGVcIiBpZD1cImV4YW1wbGVNb2RhbExhYmVsXCI+0KHQvtC30LTQsNGC0Ywg0LrQvtC80LDQvdC00YM8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCf0YDQuNC00YPQvNCw0Lkg0L3QsNC30LLQsNC90LjQtSAo0YHQvNC+0LbQtdGI0Ywg0L/QvtC80LXQvdGP0YLRjCDQv9C+0YLQvtC8KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPtCd0LDQt9Cy0LDQvdC40LUg0LrQvtC80LDQvdC00Ys8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdi1tb2RlbD1cImNvbW1hbmQubmFtZVwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wgYm9yZGVyLXJhZGl1cy0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cImZvcm0tdGV4dCB0ZXh0LW11dGVkXCIgdi1pZj1cIiFtZXNzYWdlcy5lcnJvci5oYXNPd25Qcm9wZXJ0eSgnbmFtZScpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQnNC+0LbQvdC+INC70LDRgtC40L3RgdC60LjQtSDQsdGD0LrQstGLINC4INGG0LjRhNGA0YtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXCIgdi1pZj1cIm1lc3NhZ2VzLmVycm9yLmhhc093blByb3BlcnR5KCduYW1lJylcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IG1lc3NhZ2VzLmVycm9yLm5hbWVbMF0gfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+0KLQtdCzINC60L7QvNCw0L3QtNGLPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHYtbW9kZWw9XCJjb21tYW5kLnRhZ1wiIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wgYm9yZGVyLXJhZGl1cy0wIHctNTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwiZm9ybS10ZXh0IHRleHQtbXV0ZWRcIiB2LWlmPVwiIW1lc3NhZ2VzLmVycm9yLmhhc093blByb3BlcnR5KCd0YWcnKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0JzQsNC60YHQuNC80YPQvCA2INGB0LjQvNCy0L7Qu9C+0LJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXCIgdi1pZj1cIm1lc3NhZ2VzLmVycm9yLmhhc093blByb3BlcnR5KCd0YWcnKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgbWVzc2FnZXMuZXJyb3IudGFnWzBdIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LXN1Y2Nlc3NcIiB2LWlmPVwibWVzc2FnZXMuc3VjY2VzcyAhPT0gbnVsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgbWVzc2FnZXMuc3VjY2VzcyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1mb290ZXIganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIEBjbGljaz1cImNyZWF0ZVRlYW1cIiBjbGFzcz1cImJ0bi1vcmFuZ2UgdGV4dC1saWdodCBwLTIgdGV4dC1jZW50ZXIgcG9pbnRlciB3LTEwMFwiID7QodC+0LfQtNCw0YLRjCDQutC+0LzQsNC90LTRgzwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiIGNsYXNzPVwiYnRuLWdyZXkgcG9pbnRlciB0ZXh0LWNlbnRlciB0ZXh0LWxpZ2h0IGJvcmRlci1yYWRpdXMtMCBwLTIgdy03NVwiPtCe0YLQvNC10L3QuNGC0Yw8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCIxMjNcIj5cbiAgICAgICAgICAgICAgICA8bXZwLWpvaW5lZC10ZWFtcy8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBNdnBUZWFtIGZyb20gXCIuL012cFRlYW1cIjtcbiAgICBpbXBvcnQgTXZwSm9pbmVkVGVhbXMgZnJvbSBcIi4vTXZwSm9pbmVkVGVhbXNcIjtcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbmFtZTogXCJNdnBUZWFtc1wiLFxuICAgICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICAgICAnbXZwLXRlYW0nOiBNdnBUZWFtLFxuICAgICAgICAgICAgJ212cC1qb2luZWQtdGVhbXMnOiBNdnBKb2luZWRUZWFtc1xuICAgICAgICB9LFxuICAgICAgICBpbmplY3Q6IFsnaHR0cCddLFxuICAgICAgICBkYXRhKCl7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHRlYW1zOiBbXSxcbiAgICAgICAgICAgICAgICBjb21tYW5kOiB7XG4gICAgICAgICAgICAgICAgICAgIGNhcGFjaXR5OiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICB0YWc6IG51bGxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1lc3NhZ2VzOiB7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiB7fSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGNyZWF0ZVRlYW0oKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qge2NhcGFjaXR5LCBuYW1lLCB0YWd9ID0gdGhpcy5jb21tYW5kO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlcy5zdWNjZXNzID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VzLmVycm9yID0ge307XG5cbiAgICAgICAgICAgICAgICB0aGlzLmh0dHAuY3JlYXRlTXZwVGVhbShjYXBhY2l0eSwgbmFtZSwgdGFnKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigoe2RhdGF9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VzLnN1Y2Nlc3MgPSBkYXRhLm1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRlYW1zLnB1c2goZGF0YS50ZWFtKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCh7cmVzcG9uc2V9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VzLmVycm9yID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXRVc2VyVGVhbXMoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5odHRwLmdldFVzZXJUZWFtcygpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCh7ZGF0YX0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGVhbXMgPSBkYXRhO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldENhcGFjaXR5KGNhcGFjaXR5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLmNhcGFjaXR5ID0gY2FwYWNpdHk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICB0aGlzLmdldFVzZXJUZWFtcygpXG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImV2ZW50c192aWV3XCIgaWQ9XCJ0ZWFtTWVtYmVyc1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbXBvbmVudCB1cGNvbWluZ19ldmVudHNcIiBpZD1cInVwY29taW5nX2V2ZW50c1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm91bmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxpbWcgc3JjPVwiL2ltYWdlcy9sYW1wLnN2Z1wiIGFsdD1cImxhbXBcIiAvPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyB0ZWFtLm5hbWUgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPG12cC10ZWFtLW1lbWJlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJ0ZWFtLmhhc093blByb3BlcnR5KCdtZW1iZXJzJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtZm9yPVwiKG1lbWJlciwga2V5KSBpbiB0ZWFtLm1lbWJlcnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDptZW1iZXI9XCJtZW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XCJrZXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDppcy1jYXB0YWluPVwiY2hlY2tNZW1iZXJJc0NhcHRhaW4obWVtYmVyKVwiPlxuICAgICAgICAgICAgICAgICAgICA8L212cC10ZWFtLW1lbWJlcj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBtdC0zXCIgdi1pZj1cImlzQXV0aG9yaXplICYmIGlzRnJlZVBsYWNlXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxmdFwiPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImJ0bi1vcmFuZ2UgdGV4dC1saWdodCBwb2ludGVyXCIgQGNsaWNrPVwiam9pblRlYW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXBsdXNcIj48L2k+Jm5ic3A7Jm5ic3A70J/RgNC40YHQvtC10LTQtdC90LjRgtGB0Y9cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8bG9naW4tbW9kYWwgOnNob3c9XCIhaXNBdXRob3JpemVcIi8+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBNdnBUZWFtTWVtYmVyIGZyb20gXCIuLi9jYWJpbmV0L012cFRlYW1NZW1iZXJcIjtcbiAgICBpbXBvcnQgTG9naW5Nb2RhbCBmcm9tIFwiLi4vLi4vTG9naW5Nb2RhbFwiO1xuICAgIGltcG9ydCBTd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJ1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiBcIk12cEludml0ZVRlYW1QYWdlXCIsXG4gICAgICAgIGluamVjdDogW1xuICAgICAgICAgICAgJ2h0dHAnLFxuICAgICAgICAgICAgJ2NvbmZpZydcbiAgICAgICAgXSxcbiAgICAgICAgcHJvcHM6IFtcbiAgICAgICAgICAgICd0ZWFtSWQnLFxuICAgICAgICAgICAgJ2lzQXV0aG9yaXplJ1xuICAgICAgICBdLFxuICAgICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICAgICAnbXZwLXRlYW0tbWVtYmVyJzogTXZwVGVhbU1lbWJlcixcbiAgICAgICAgICAgICdsb2dpbi1tb2RhbCc6IExvZ2luTW9kYWxcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YSgpe1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0ZWFtOiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IG51bGxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGF1dGhVc2VyOiBudWxsLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgaXNGcmVlUGxhY2UoKXtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50ZWFtLmhhc093blByb3BlcnR5KCdtZW1iZXJzJykpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50ZWFtLm1lbWJlcnMubGVuZ3RoIDwgdGhpcy50ZWFtLmNhcGFjaXR5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGdldFRlYW0oKXtcbiAgICAgICAgICAgICAgICB0aGlzLmh0dHAuZ2V0TXZwVGVhbSh0aGlzLnRlYW1JZClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHtkYXRhfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50ZWFtID0gZGF0YVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNoZWNrTWVtYmVySXNDYXB0YWluKG1lbWJlcil7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1lbWJlci5pZCA9PT0gdGhpcy50ZWFtLmNyZWF0b3IuaWRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBqb2luVGVhbSgpe1xuICAgICAgICAgICAgICAgIHRoaXMuaHR0cC5nZXRBdXRoVXNlcigpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCh7ZGF0YX0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0aFVzZXIgPSBkYXRhO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZWVkU3RlYW0gPSB0aGlzLmNoZWNrTmVlZFN0ZWFtRm9ySm9pbigpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW5lZWRTdGVhbSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5odHRwLmpvaW5NZW1iZXJUb1RlYW0odGhpcy50ZWFtSWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0VGVhbSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKCh7cmVzcG9uc2V9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yUG9wdXAocmVzcG9uc2UuZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvclBvcHVwKGVycm9yKXtcbiAgICAgICAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ9Cj0L/RgS4uLicsXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IGVycm9yLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2hlY2tOZWVkU3RlYW1Gb3JKb2luKCl7XG4gICAgICAgICAgICAgICAgY29uc3QgaHRtbCA9IGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDQlNC70Y8g0YLQvtCz0L4g0YfRgtC+INCx0Ysg0YPRh9Cw0LLRgdGC0LLQvtCy0LDRgtGMINCyINGC0YPRgNC90LjRgNC1LCDQvdC10L7QsdGF0L7QtNC40LzQviDQv9GA0LjQstGP0LfQsNGC0Ywg0LDQutCw0YPQvdGCXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiR7dGhpcy5jb25maWcuU1RFQU1fTE9HSU5fTElOS31cIj5TdGVhbTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHQtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiJHt0aGlzLmNvbmZpZy5TVEVBTV9MT0dJTl9MSU5LfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2xvZ2luX3N0ZWFtLnN2Z1wiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmA7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hdXRoVXNlciAhPT0gbnVsbCApe1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hdXRoVXNlci5zdGVhbSA9PT0gbnVsbCB8fCB0aGlzLmF1dGhVc2VyLnN0ZWFtID09PSAnJyB8fCB0aGlzLmF1dGhVc2VyLnN0ZWFtID09PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn0KPQv9GBLi4uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93Q2xvc2VCdXR0b246IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICB0aGlzLmdldFRlYW0oKVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgcC0wIG0tMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIHdpbmRvdy1oZWlnaHQtODAgcC0wIG0tMFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgdy0xMDAgaC0xMDBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgZmxleC1jb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYnRuLW9yYW5nZSB0ZXh0LWxpZ2h0IHAtMyBwbC01IHByLTUgZm9udC1zaXplLTIzIHBvaW50ZXJcIiBAY2xpY2s9XCJzaG93TG9naW5Nb2RhbFwiPkpvaW4gdGhlIEdhbWU8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy0xMDAgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3M9XCJ0ZXh0LWxpZ2h0IGZvbnQtc2l6ZS0yM1wiPldoYXQgd2Ugb2ZmZXI8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTEwMCBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LWxpZ2h0IHctNTAgZm9udC1zaXplLTE4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQWQgY29uc2VxdXVudHVyIGN1bHBhIGN1cGlkaXRhdGUgZGVsZW5pdGkgZGljdGEgZGlnbmlzc2ltb3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzdGluY3RpbyBkb2xvciBkb2xvcmVzIGhpYyBpcHNhIGl0YXF1ZSBsYXVkYW50aXVtIG1vbGVzdGlhcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2xsaXRpYSBub3N0cnVtLCBwZXJmZXJlbmRpcyBwcm92aWRlbnQgcXVvcyBzYXBpZW50ZSB2ZXJvIVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgdy0xMDAgaC0xMDBcIj5cbiAgICAgICAgICAgIDxhIGNsYXNzPVwiYnRuLW9yYW5nZSB0ZXh0LWxpZ2h0IHAtMiBwbC0zIHByLTMgcG9pbnRlclwiIEBjbGljaz1cInNob3dMb2dpbk1vZGFsXCI+Sm9pbiB0aGUgR2FtZTwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbmFtZTogXCJNdnBNYWluXCIsXG4gICAgICAgIHByb3BzOiBbXG4gICAgICAgICAgICAnbG9naW5SZWRpcmVjdCcsXG4gICAgICAgICAgICAnaXNBdXRob3JpemUnXG4gICAgICAgIF0sXG4gICAgICAgIGRhdGEoKXtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgc2hvd0xvZ2luTW9kYWwoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNBdXRob3JpemUpe1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSB0aGlzLmxvZ2luUmVkaXJlY3RcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsb2dpbi5zaG93ID0gdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9XG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tcG9uZW50IHVwY29taW5nX2V2ZW50c1wiIGlkPVwidXBjb21pbmdfZXZlbnRzXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm91bmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGltZyBzcmM9XCIvaW1hZ2VzL2xhbXAuc3ZnXCIgYWx0PVwibGFtcFwiIC8+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgINCi0YPRgNC90LjRgNGLIHt7Z2FtZX19XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkIHctMTAwIGgtMTAwIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlclwiIHYtaWY9XCJsb2FkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsb2FkLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZFwiIHYtZm9yPVwidG91cm5hbWVudCBpbiB0b3VybmFtZW50c1wiIHYtaWY9XCIhbG9hZFwiPlxuICAgICAgICAgICAgICAgICAgICA8YSA6aHJlZj1cIicvcnUvbXZwL3RvdXJuYW1lbnQvJyArIHRvdXJuYW1lbnQuaWRcIiBjbGFzcz1cImdyaWQtcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9nb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgOnNyYz1cInRvdXJuYW1lbnQubG9nb1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7dG91cm5hbWVudC5uYW1lfX0gI3t7dG91cm5hbWVudC5udW1iZXJ9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm90dG9tXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7QndCw0LfQstCw0L3QuNC1PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3t0b3VybmFtZW50LmRhdGV9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm90dG9tXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7QlNCw0YLQsDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7dG91cm5hbWVudC5tb2RlfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvdHRvbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+0KDQtdC20LjQvDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWxvY2stb3BlblwiIHYtaWY9XCJ0b3VybmFtZW50LmFjY2Vzc1wiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtbG9ja1wiIHYtZWxzZT48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvdHRvbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+0JTQvtGB0YLRg9C/PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3t0b3VybmFtZW50LnByaXplfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvdHRvbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+0J/RgNC40Lc8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IExvYWQgZnJvbSBcIi4uLy4uL0xvYWRcIjtcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbmFtZTogXCJNdnBUb3VybmFtZW50c0xpc3RcIixcbiAgICAgICAgaW5qZWN0OiBbXG4gICAgICAgICAgICAnaHR0cCcsXG4gICAgICAgICAgICAnaGVhZGVyJ1xuICAgICAgICBdLFxuICAgICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICAgICAnbG9hZCc6IExvYWRcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YSgpe1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0b3VybmFtZW50czogW10sXG4gICAgICAgICAgICAgICAgZ2FtZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ0NTOkdPJzogJ2NzJyxcbiAgICAgICAgICAgICAgICAgICAgJ0RPVEEnOiAnZG90YScsXG4gICAgICAgICAgICAgICAgICAgICdWYWxvcmFudCc6ICd2YWxvcmFudCdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGxvYWQ6IGZhbHNlLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB3YXRjaDoge1xuICAgICAgICAgICAgZ2FtZSgpe1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0VG91cm5hbWVudHNCeUdhbWUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIGdhbWUoKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gIHRoaXMuaGVhZGVyLmdhbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGdldFRvdXJuYW1lbnRzQnlHYW1lKCl7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIHRoaXMuaHR0cC5nZXRUb3VybmFtZW50c0J5R2FtZSh0aGlzLmdhbWVzW3RoaXMuaGVhZGVyLmdhbWVdKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigoe2RhdGF9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvdXJuYW1lbnRzID0gZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjcmVhdGVkKCkge1xuICAgICAgICAgICAgdGhpcy5nZXRUb3VybmFtZW50c0J5R2FtZSgpO1xuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfdm0uX20oMClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9hZGluZ2lvLXNwaW5uZXItZ2Vhci1tdHBod2dveTc5ZVwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGRpby1yd3V2YXJ2bnAxc1wiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIpXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwic2xpZGVzXCIgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJsb2dpblwiLFxuICAgICAgICB7XG4gICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5jaGVja1N0ZXAoXCJsb2dpblwiKSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJjaGVja1N0ZXAoJ2xvZ2luJylcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgYXR0cnM6IHsgZXJyb3I6IF92bS5lcnJvciwgZW1haWw6IF92bS5lbWFpbCwgcGFzc3dvcmQ6IF92bS5wYXNzd29yZCB9LFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBzZXRTdGVwOiBfdm0uc2V0U3RlcCxcbiAgICAgICAgICAgIGF1dGhMb2dpbjogX3ZtLmF1dGhMb2dpbixcbiAgICAgICAgICAgIGNsb3NlOiBfdm0uY2xvc2UsXG4gICAgICAgICAgICBpbnB1dEVtYWlsOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgICBfdm0uZW1haWwgPSB2YWx1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlucHV0UGFzc3dvcmQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICAgIF92bS5wYXNzd29yZCA9IHZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbX3ZtLl90KFwiZGVmYXVsdFwiKV0sXG4gICAgICAgIDJcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwicmVnaXN0cmF0aW9uXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmNoZWNrU3RlcChcInJlZ2lzdHJhdGlvblwiKSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJjaGVja1N0ZXAoJ3JlZ2lzdHJhdGlvbicpXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIGF0dHJzOiB7IGVtYWlsOiBfdm0uZW1haWwsIHBhc3N3b3JkOiBfdm0ucGFzc3dvcmQsIGNoZWNrOiBfdm0uY2hlY2sgfSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgc2V0U3RlcDogX3ZtLnNldFN0ZXAsXG4gICAgICAgICAgICBjbG9zZTogX3ZtLmNsb3NlLFxuICAgICAgICAgICAgaW5wdXRFbWFpbDogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICAgX3ZtLmVtYWlsID0gdmFsdWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbnB1dFBhc3N3b3JkOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgICBfdm0ucGFzc3dvcmQgPSB2YWx1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgICBfdm0uY2hlY2sgPSB2YWx1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlbmRDb25maXJtQ29kZTogX3ZtLnNlbmRDb25maXJtQ29kZVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW192bS5fdChcImRlZmF1bHRcIildLFxuICAgICAgICAyXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiY29uZmlybS1jb2RlXCIsIHtcbiAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgIHZhbHVlOiBfdm0uY2hlY2tTdGVwKFwiY29uZmlybUNvZGVcIiksXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcImNoZWNrU3RlcCgnY29uZmlybUNvZGUnKVwiXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBhdHRyczogeyBjb2RlQ29uZmlybWVkOiBfdm0uY29kZUNvbmZpcm1lZCwgZW1haWw6IF92bS5lbWFpbCB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIHNldFN0ZXA6IF92bS5zZXRTdGVwLFxuICAgICAgICAgIGNsb3NlOiBfdm0uY2xvc2UsXG4gICAgICAgICAgcmVnaXN0cmF0aW9uOiBfdm0ucmVnaXN0cmF0aW9uLFxuICAgICAgICAgIHNlbmRDb25maXJtQ29kZTogX3ZtLnNlbmRDb25maXJtQ29kZVxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcIm5pY2stbmFtZVwiLCB7XG4gICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICB2YWx1ZTogX3ZtLmNoZWNrU3RlcChcIm5pY2tuYW1lXCIpLFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJjaGVja1N0ZXAoJ25pY2tuYW1lJylcIlxuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgYXR0cnM6IHsgZW1haWw6IF92bS5lbWFpbCB9LFxuICAgICAgICBvbjogeyBzZXRTdGVwOiBfdm0uc2V0U3RlcCwgY2xvc2U6IF92bS5jbG9zZSB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImNvbmdyYXR1bGF0aW9uXCIsIHtcbiAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgIHZhbHVlOiBfdm0uY2hlY2tTdGVwKFwiY29uZ3JhdHVsYXRpb25cIiksXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcImNoZWNrU3RlcCgnY29uZ3JhdHVsYXRpb24nKVwiXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBvbjogeyBzZXRTdGVwOiBfdm0uc2V0U3RlcCwgY2xvc2U6IF92bS5jbG9zZSB9XG4gICAgICB9KVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcInRyYW5zaXRpb25cIiwgeyBhdHRyczogeyBuYW1lOiBcInNsaWRlLWZhZGVzXCIgfSB9LCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2dpbl9mb3JtXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2dpbl9ibG9ja1wiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2dvdHlwZVwiIH0sIFtcbiAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsb2dvdHlwZVwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBcIi9pbWFnZXMvQ2hhbXBzX2xvZ290eXBlLnN2Z1wiIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2dpbl90aXRsZVwiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAg0J/QvtC00YLQstC10YDQttC00LXQvdC40LUg0L/QvtGH0YLRi1xcbiAgICAgICAgICAgIFwiKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2dpbl9pbnB1dCBkLWZsZXhcIiB9LCBbXG4gICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5jb25maXJtQ29kZSxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImNvbmZpcm1Db2RlXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiLCByZXF1aXJlZDogXCJcIiB9LFxuICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5jb25maXJtQ29kZSB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF92bS5jb25maXJtQ29kZSA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLQmtC+0LQg0L/QvtC00YLQstC10YDQttC00LXQvdC40Y9cIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicXVlc3Rpb24gcHQtMlwiLFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgXCJkYXRhLXRvZ2dsZVwiOiBcInRvb2x0aXBcIixcbiAgICAgICAgICAgICAgICBcImRhdGEtcGxhY2VtZW50XCI6IFwicmlnaHRcIixcbiAgICAgICAgICAgICAgICB0aXRsZTpcbiAgICAgICAgICAgICAgICAgIFwi0J3QtSDQv9GA0LjRiNC10Lsg0LrQvtC0PyDQn9GA0L7QstC10YDRjNGC0LUg0L/QsNC/0LrRgyDQodC/0LDQvCDQuNC70Lgg0L/QvtC/0YvRgtCw0LnRgtC10YHRjCDQvtGC0L/RgNCw0LLQuNGC0Ywg0LXRidC1INGA0LDQty5cIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW19jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS1xdWVzdGlvblwiIH0pXVxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJzZW5kXCIsIG9uOiB7IGNsaWNrOiBfdm0uc2VuZFJlZ2lzdHJhdGlvbkNvbmZpcm0gfSB9LFxuICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAg0J7RgtC/0YDQsNCy0LjRgtGMXFxuICAgICAgICAgICAgXCIpXVxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfdm0uc3VjY2Vzc01lc3NhZ2UgPT0gbnVsbFxuICAgICAgICAgID8gX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzZW5kIHJlc2VuZFwiLFxuICAgICAgICAgICAgICBjbGFzczogeyBkaXNhYmxlZDogX3ZtLnRpbWVyID4gMCB9LFxuICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgIGlubmVySFRNTDogX3ZtLl9zKFwi0J7RgtC/0YDQsNCy0LjRgtGMINC60L7QtCDQv9C+0LLRgtC+0YDQvdC+IFwiICsgX3ZtLnRpbWVyTWVzc2FnZSlcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5yZXNlbmRDb25maXJtQ29kZSB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF92bS5lcnJvck1lc3NhZ2UgIT09IG51bGxcbiAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZXJyb3JcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmVycm9yTWVzc2FnZSkgK1xuICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF92bS5zdWNjZXNzTWVzc2FnZSAhPT0gbnVsbFxuICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlcnJvciB0ZXh0LXN1Y2Nlc3NcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnN1Y2Nlc3NNZXNzYWdlKSArXG4gICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsaW5rcyBkLWZsZXhcIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtdC0xXCIsXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kZW1pdChcInNldFN0ZXBcIiwgXCJyZWdpc3RyYXRpb25cIilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJCYWNrXCIpXSldXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibXQtMVwiLCBvbjogeyBjbGljazogX3ZtLnNob3dOaWNrbmFtZSB9IH0sIFtcbiAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IGNsYXNzOiB7IGRpc2FibGVkOiAhX3ZtLmNvZGVDb25maXJtZWQgfSB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcIk5leHRcIilcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2xvc2VkXCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJzdmdcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjE2XCIsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjE2XCIsXG4gICAgICAgICAgICAgICAgdmlld0JveDogXCIwIDAgMTYgMTZcIixcbiAgICAgICAgICAgICAgICBmaWxsOiBcIm5vbmVcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmNsb3NlIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwicGF0aFwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIGQ6XG4gICAgICAgICAgICAgICAgICAgIFwiTTguODgzOTIgOC4wMDAwNEwxNS44MTY5IDEuMDY2OThDMTYuMDYxIDAuODIyODgyIDE2LjA2MSAwLjQyNzEzMyAxNS44MTY5IDAuMTgzMDdDMTUuNTcyOCAtMC4wNjA5OTIyIDE1LjE3NzEgLTAuMDYxMDIzNCAxNC45MzMgMC4xODMwN0w3Ljk5OTk4IDcuMTE2MTNMMS4wNjY5NyAwLjE4MzA3QzAuODIyODggLTAuMDYxMDIzNCAwLjQyNzEzMiAtMC4wNjEwMjM0IDAuMTgzMDcgMC4xODMwN0MtMC4wNjA5OTIgMC40MjcxNjQgLTAuMDYxMDIzMyAwLjgyMjkxNCAwLjE4MzA3IDEuMDY2OThMNy4xMTYwOCA4TDAuMTgzMDcgMTQuOTMzMUMtMC4wNjEwMjMzIDE1LjE3NzIgLTAuMDYxMDIzMyAxNS41NzI5IDAuMTgzMDcgMTUuODE3QzAuMzA1MTAxIDE1LjkzOSAwLjQ2NTA2OSAxNiAwLjYyNTAzNyAxNkMwLjc4NTAwNSAxNiAwLjk0NDk0MyAxNS45MzkgMS4wNjcgMTUuODE3TDcuOTk5OTggOC44ODM5NEwxNC45MzMgMTUuODE3QzE1LjA1NSAxNS45MzkgMTUuMjE1IDE2IDE1LjM3NSAxNkMxNS41MzQ5IDE2IDE1LjY5NDkgMTUuOTM5IDE1LjgxNjkgMTUuODE3QzE2LjA2MSAxNS41NzI5IDE2LjA2MSAxNS4xNzcxIDE1LjgxNjkgMTQuOTMzMUw4Ljg4MzkyIDguMDAwMDRaXCIsXG4gICAgICAgICAgICAgICAgICBmaWxsOiBcIiM4Njg4OEFcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcInRyYW5zaXRpb25cIiwgeyBhdHRyczogeyBuYW1lOiBcInNsaWRlLWZhZGVzXCIgfSB9LCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2dpbl9mb3JtXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2dpbl9ibG9ja1wiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2dvdHlwZVwiIH0sIFtcbiAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsb2dvdHlwZVwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBcIi9pbWFnZXMvQ2hhbXBzX2xvZ290eXBlLnN2Z1wiIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2dpbl90aXRsZVwiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICDQn9C+0LfQtNGA0LDQstC70Y/QtdC8INGBINGD0YHQv9C10YjQvdC+0Lkg0YDQtdCz0LXRgdGC0YDQsNGG0LjQtdC5IVxcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzZW5kXCIsXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kZW1pdChcInNldFN0ZXBcIiwgXCJmaW5pc2hcIilcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICDQmNCz0YDQsNGC0YxcXG4gICAgICAgICAgICBcIildXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2xvc2VkXCIsXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kZW1pdChcImNsb3NlXCIpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInN2Z1wiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gICAgICAgICAgICAgICAgICB3aWR0aDogXCIxNlwiLFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjE2XCIsXG4gICAgICAgICAgICAgICAgICB2aWV3Qm94OiBcIjAgMCAxNiAxNlwiLFxuICAgICAgICAgICAgICAgICAgZmlsbDogXCJub25lXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcInBhdGhcIiwge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgZDpcbiAgICAgICAgICAgICAgICAgICAgICBcIk04Ljg4MzkyIDguMDAwMDRMMTUuODE2OSAxLjA2Njk4QzE2LjA2MSAwLjgyMjg4MiAxNi4wNjEgMC40MjcxMzMgMTUuODE2OSAwLjE4MzA3QzE1LjU3MjggLTAuMDYwOTkyMiAxNS4xNzcxIC0wLjA2MTAyMzQgMTQuOTMzIDAuMTgzMDdMNy45OTk5OCA3LjExNjEzTDEuMDY2OTcgMC4xODMwN0MwLjgyMjg4IC0wLjA2MTAyMzQgMC40MjcxMzIgLTAuMDYxMDIzNCAwLjE4MzA3IDAuMTgzMDdDLTAuMDYwOTkyIDAuNDI3MTY0IC0wLjA2MTAyMzMgMC44MjI5MTQgMC4xODMwNyAxLjA2Njk4TDcuMTE2MDggOEwwLjE4MzA3IDE0LjkzMzFDLTAuMDYxMDIzMyAxNS4xNzcyIC0wLjA2MTAyMzMgMTUuNTcyOSAwLjE4MzA3IDE1LjgxN0MwLjMwNTEwMSAxNS45MzkgMC40NjUwNjkgMTYgMC42MjUwMzcgMTZDMC43ODUwMDUgMTYgMC45NDQ5NDMgMTUuOTM5IDEuMDY3IDE1LjgxN0w3Ljk5OTk4IDguODgzOTRMMTQuOTMzIDE1LjgxN0MxNS4wNTUgMTUuOTM5IDE1LjIxNSAxNiAxNS4zNzUgMTZDMTUuNTM0OSAxNiAxNS42OTQ5IDE1LjkzOSAxNS44MTY5IDE1LjgxN0MxNi4wNjEgMTUuNTcyOSAxNi4wNjEgMTUuMTc3MSAxNS44MTY5IDE0LjkzMzFMOC44ODM5MiA4LjAwMDA0WlwiLFxuICAgICAgICAgICAgICAgICAgICBmaWxsOiBcIiM4Njg4OEFcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwidHJhbnNpdGlvblwiLCB7IGF0dHJzOiB7IG5hbWU6IFwic2xpZGUtZmFkZXNcIiB9IH0sIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvZ2luX2Zvcm1cIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvZ2luX2Jsb2NrXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvZ290eXBlXCIgfSwgW1xuICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxvZ290eXBlXCIsXG4gICAgICAgICAgICBhdHRyczogeyBzcmM6IFwiL2ltYWdlcy9DaGFtcHNfbG9nb3R5cGUuc3ZnXCIgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvZ2luX3RpdGxlXCIgfSwgW1xuICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICDQktGF0L7QtCDQsiDQu9C40YfQvdGL0Lkg0LrQsNCx0LjQvdC10YJcXG4gICAgICAgICAgICBcIilcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9naW5faW5wdXRcIiB9LCBbXG4gICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImVtYWlsXCIgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRlbWl0KFwiaW5wdXRFbWFpbFwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcItCQ0LTRgNC10YEg0Y3Qu9C10LrRgtGA0L7QvdC90L7QuSDQv9C+0YfRgtGLXCIpXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9naW5faW5wdXRcIiB9LCBbXG4gICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInBhc3N3b3JkXCIgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRlbWl0KFwiaW5wdXRQYXNzd29yZFwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcItCf0LDRgNC+0LvRjFwiKV0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNlbmRcIixcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRlbWl0KFwiYXV0aExvZ2luXCIpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAg0JLQvtC50YLQuFxcbiAgICAgICAgICAgIFwiKV1cbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX3ZtLmVycm9yXG4gICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVycm9yXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAg0J3QtdC/0YDQsNCy0LjQu9GM0L3Ri9C5INC70L7Qs9C40L0g0LjQu9C4INC/0LDRgNC+0LvRjFxcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzdWJ0ZXh0XCIgfSwgW1xuICAgICAgICAgIF92bS5fdihcItCY0LvQuCDQstC+0LnQtNC40YLQtSDRgSDQv9C+0LzQvtGJ0YzRjlwiKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJhbHRlcm5hdGVcIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBocmVmOlxuICAgICAgICAgICAgICAgICAgXCJodHRwczovL3N0ZWFtY29tbXVuaXR5LmNvbS9vcGVuaWQvbG9naW4/b3BlbmlkLm5zPWh0dHAlM0ElMkYlMkZzcGVjcy5vcGVuaWQubmV0JTJGYXV0aCUyRjIuMCZvcGVuaWQubW9kZT1jaGVja2lkX3NldHVwJm9wZW5pZC5yZXR1cm5fdG89aHR0cHMlM0ElMkYlMkZjaGFtcHMucHJvJTJGcnUlMkZvYXV0aCUyRnN0ZWFtJTNGc3RhdGU9c3RlYW0mb3BlbmlkLnJlYWxtPWh0dHBzJTNBJTJGJTJGY2hhbXBzLnBybyUyRnJ1JTJGb2F1dGglMkZzdGVhbSZvcGVuaWQubnMuc3JlZz1odHRwJTNBJTJGJTJGb3BlbmlkLm5ldCUyRmV4dGVuc2lvbnMlMkZzcmVnJTJGMS4xJm9wZW5pZC5jbGFpbWVkX2lkPWh0dHAlM0ElMkYlMkZzcGVjcy5vcGVuaWQubmV0JTJGYXV0aCUyRjIuMCUyRmlkZW50aWZpZXJfc2VsZWN0Jm9wZW5pZC5pZGVudGl0eT1odHRwJTNBJTJGJTJGc3BlY3Mub3BlbmlkLm5ldCUyRmF1dGglMkYyLjAlMkZpZGVudGlmaWVyX3NlbGVjdFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX2MoXCJpbWdcIiwgeyBhdHRyczogeyBzcmM6IFwiL2ltYWdlcy9sb2dpbl9zdGVhbS5zdmdcIiB9IH0pXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBocmVmOiBcIi9ydS9hdXRoL2Rpc2NvcmQvXCIgfSB9LCBbXG4gICAgICAgICAgICBfYyhcImltZ1wiLCB7IGF0dHJzOiB7IHNyYzogXCIvaW1hZ2VzL2xvZ2luX2Rpc2NvcmQuc3ZnXCIgfSB9KVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgaHJlZjogXCIvcnUvYXV0aC9mYWNlYm9vay9cIiB9IH0sIFtcbiAgICAgICAgICAgIF9jKFwiaW1nXCIsIHsgYXR0cnM6IHsgc3JjOiBcIi9pbWFnZXMvZmFjZWJvb2sucG5nXCIgfSB9KVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgaHJlZjogXCIvcnUvYXV0aC9nb29nbGUvXCIgfSB9LCBbXG4gICAgICAgICAgICBfYyhcImltZ1wiLCB7IGF0dHJzOiB7IHNyYzogXCIvaW1hZ2VzL2dvb2dsZS5wbmdcIiB9IH0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBocmVmOiBcIi9ydS9hdXRoL3R3aWNoL1wiIH0gfSwgW1xuICAgICAgICAgICAgX2MoXCJpbWdcIiwgeyBhdHRyczogeyBzcmM6IFwiL2ltYWdlcy90d2ljaC5wbmdcIiB9IH0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBocmVmOiBcIi9ydS9hdXRoL3ZrL1wiIH0gfSwgW1xuICAgICAgICAgICAgX2MoXCJpbWdcIiwgeyBhdHRyczogeyBzcmM6IFwiL2ltYWdlcy92ay5zdmdcIiB9IH0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGlua3NcIixcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRlbWl0KFwic2V0U3RlcFwiLCBcInJlZ2lzdHJhdGlvblwiKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX2MoXCJkaXZcIiwgW19jKFwic3BhblwiLCBbX3ZtLl92KFwi0KDQtdCz0LjRgdGC0YDQsNGG0LjRj1wiKV0pXSldXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2xvc2VkXCIsXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kZW1pdChcImNsb3NlXCIpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInN2Z1wiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gICAgICAgICAgICAgICAgICB3aWR0aDogXCIxNlwiLFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjE2XCIsXG4gICAgICAgICAgICAgICAgICB2aWV3Qm94OiBcIjAgMCAxNiAxNlwiLFxuICAgICAgICAgICAgICAgICAgZmlsbDogXCJub25lXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcInBhdGhcIiwge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgZDpcbiAgICAgICAgICAgICAgICAgICAgICBcIk04Ljg4MzkyIDguMDAwMDRMMTUuODE2OSAxLjA2Njk4QzE2LjA2MSAwLjgyMjg4MiAxNi4wNjEgMC40MjcxMzMgMTUuODE2OSAwLjE4MzA3QzE1LjU3MjggLTAuMDYwOTkyMiAxNS4xNzcxIC0wLjA2MTAyMzQgMTQuOTMzIDAuMTgzMDdMNy45OTk5OCA3LjExNjEzTDEuMDY2OTcgMC4xODMwN0MwLjgyMjg4IC0wLjA2MTAyMzQgMC40MjcxMzIgLTAuMDYxMDIzNCAwLjE4MzA3IDAuMTgzMDdDLTAuMDYwOTkyIDAuNDI3MTY0IC0wLjA2MTAyMzMgMC44MjI5MTQgMC4xODMwNyAxLjA2Njk4TDcuMTE2MDggOEwwLjE4MzA3IDE0LjkzMzFDLTAuMDYxMDIzMyAxNS4xNzcyIC0wLjA2MTAyMzMgMTUuNTcyOSAwLjE4MzA3IDE1LjgxN0MwLjMwNTEwMSAxNS45MzkgMC40NjUwNjkgMTYgMC42MjUwMzcgMTZDMC43ODUwMDUgMTYgMC45NDQ5NDMgMTUuOTM5IDEuMDY3IDE1LjgxN0w3Ljk5OTk4IDguODgzOTRMMTQuOTMzIDE1LjgxN0MxNS4wNTUgMTUuOTM5IDE1LjIxNSAxNiAxNS4zNzUgMTZDMTUuNTM0OSAxNiAxNS42OTQ5IDE1LjkzOSAxNS44MTY5IDE1LjgxN0MxNi4wNjEgMTUuNTcyOSAxNi4wNjEgMTUuMTc3MSAxNS44MTY5IDE0LjkzMzFMOC44ODM5MiA4LjAwMDA0WlwiLFxuICAgICAgICAgICAgICAgICAgICBmaWxsOiBcIiM4Njg4OEFcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwidHJhbnNpdGlvblwiLCB7IGF0dHJzOiB7IG5hbWU6IFwic2xpZGUtZmFkZXNcIiB9IH0sIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvZ2luX2Zvcm1cIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvZ2luX2Jsb2NrXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvZ290eXBlXCIgfSwgW1xuICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxvZ290eXBlXCIsXG4gICAgICAgICAgICBhdHRyczogeyBzcmM6IFwiL2ltYWdlcy9DaGFtcHNfbG9nb3R5cGUuc3ZnXCIgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvZ2luX3RpdGxlXCIgfSwgW1xuICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICDQktCy0LXQtNC40YLQtSDRgdCy0L7QuSDQvdC40LrQvdC10LnQvFxcbiAgICAgICAgICAgIFwiKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2dpbl9pbnB1dFwiIH0sIFtcbiAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLm5pY2tuYW1lLFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwibmlja25hbWVcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIG5hbWU6IFwiZW1haWxcIiwgcmVxdWlyZWQ6IFwiXCIgfSxcbiAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ubmlja25hbWUgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfdm0ubmlja25hbWUgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi0JvQvtCz0LjQvSAoTmlja25hbWUpXCIpXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF92bS5lcnJvck1lc3NhZ2UgIT09IG51bGxcbiAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZXJyb3JcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmVycm9yTWVzc2FnZSkgK1xuICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic2VuZFwiLCBvbjogeyBjbGljazogX3ZtLnNldE5pY2tuYW1lIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICDQl9Cw0LLQtdGA0YjQuNGC0Ywg0YDQtdCz0LXRgdGC0YDQsNGG0LjRjlxcbiAgICAgICAgICAgIFwiKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjbG9zZWRcIiwgb246IHsgY2xpY2s6IF92bS5jbG9zZSB9IH0sIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwic3ZnXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxNlwiLFxuICAgICAgICAgICAgICAgIGhlaWdodDogXCIxNlwiLFxuICAgICAgICAgICAgICAgIHZpZXdCb3g6IFwiMCAwIDE2IDE2XCIsXG4gICAgICAgICAgICAgICAgZmlsbDogXCJub25lXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJwYXRoXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgZDpcbiAgICAgICAgICAgICAgICAgICAgXCJNOC44ODM5MiA4LjAwMDA0TDE1LjgxNjkgMS4wNjY5OEMxNi4wNjEgMC44MjI4ODIgMTYuMDYxIDAuNDI3MTMzIDE1LjgxNjkgMC4xODMwN0MxNS41NzI4IC0wLjA2MDk5MjIgMTUuMTc3MSAtMC4wNjEwMjM0IDE0LjkzMyAwLjE4MzA3TDcuOTk5OTggNy4xMTYxM0wxLjA2Njk3IDAuMTgzMDdDMC44MjI4OCAtMC4wNjEwMjM0IDAuNDI3MTMyIC0wLjA2MTAyMzQgMC4xODMwNyAwLjE4MzA3Qy0wLjA2MDk5MiAwLjQyNzE2NCAtMC4wNjEwMjMzIDAuODIyOTE0IDAuMTgzMDcgMS4wNjY5OEw3LjExNjA4IDhMMC4xODMwNyAxNC45MzMxQy0wLjA2MTAyMzMgMTUuMTc3MiAtMC4wNjEwMjMzIDE1LjU3MjkgMC4xODMwNyAxNS44MTdDMC4zMDUxMDEgMTUuOTM5IDAuNDY1MDY5IDE2IDAuNjI1MDM3IDE2QzAuNzg1MDA1IDE2IDAuOTQ0OTQzIDE1LjkzOSAxLjA2NyAxNS44MTdMNy45OTk5OCA4Ljg4Mzk0TDE0LjkzMyAxNS44MTdDMTUuMDU1IDE1LjkzOSAxNS4yMTUgMTYgMTUuMzc1IDE2QzE1LjUzNDkgMTYgMTUuNjk0OSAxNS45MzkgMTUuODE2OSAxNS44MTdDMTYuMDYxIDE1LjU3MjkgMTYuMDYxIDE1LjE3NzEgMTUuODE2OSAxNC45MzMxTDguODgzOTIgOC4wMDAwNFpcIixcbiAgICAgICAgICAgICAgICAgIGZpbGw6IFwiIzg2ODg4QVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwidHJhbnNpdGlvblwiLCB7IGF0dHJzOiB7IG5hbWU6IFwic2xpZGUtZmFkZXNcIiB9IH0sIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvZ2luX2Zvcm1cIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvZ2luX3JlcVwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2dpbl9ibG9ja1wiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvZ290eXBlXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsb2dvdHlwZVwiLFxuICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IFwiL2ltYWdlcy9DaGFtcHNfbG9nb3R5cGUuc3ZnXCIgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9naW5fdGl0bGVcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgINCg0LXQs9C40YHRgtGA0LDRhtC40Y9cXG4gICAgICAgICAgICAgICAgXCIpXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvZ2luX2lucHV0XCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiIH0sXG4gICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZW1haWwgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRlbWl0KFwiaW5wdXRFbWFpbFwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLQkNC00YDQtdGBINGN0LvQtdC60YLRgNC+0L3QvdC+0Lkg0L/QvtGH0YLRi1wiKV0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvZ2luX2lucHV0XCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwicGFzc3dvcmRcIiB9LFxuICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnBhc3N3b3JkIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kZW1pdChcImlucHV0UGFzc3dvcmRcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi0J/QsNGA0L7Qu9GMXCIpXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9naW5fY2hlY2tcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtcbiAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJjaGVja2JveFwiIH0sXG4gICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgY2hlY2tlZDogX3ZtLmNoZWNrIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJGVtaXQoXCJpbnB1dFwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgaHJlZjogXCIvcnUvdGVybXMtb2YtdXNlXCIsIHRhcmdldDogXCJfYmxhbmtcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICBcItCe0LfQvdCw0LrQvtC80LvQtdC9INGBINC/0YDQsNCy0LjQu9Cw0LzQuCDQuNGB0L/QvtC70YzQt9C+0LLQsNC90LjRjyDRgdC10YDQstC40YHQsCDCq0NoYW1wc8K7XCJcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNlbmRcIixcbiAgICAgICAgICAgICAgc3R5bGU6IHsgb3BhY2l0eTogX3ZtLiRwYXJlbnQuY2hlY2sgPyBcIjFcIiA6IFwiLjVcIiB9LFxuICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmNoZWNrSXNFbWFpbFZhbGlkIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAg0JfQsNGA0LXQs9C40YHRgtGA0LjRgNC+0LLQsNGC0YzRgdGPXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLmVycm9yTWVzc2FnZSAhPT0gbnVsbFxuICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVycm9yXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZXJyb3JNZXNzYWdlKSArXG4gICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic3VidGV4dFwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcItCY0LvQuCDQstC+0LnQtNC40YLQtSDRgSDQv9C+0LzQvtGJ0YzRjlwiKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJhbHRlcm5hdGVcIiB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgaHJlZjpcbiAgICAgICAgICAgICAgICAgICAgXCJodHRwczovL3N0ZWFtY29tbXVuaXR5LmNvbS9vcGVuaWQvbG9naW4/b3BlbmlkLm5zPWh0dHAlM0ElMkYlMkZzcGVjcy5vcGVuaWQubmV0JTJGYXV0aCUyRjIuMCZvcGVuaWQubW9kZT1jaGVja2lkX3NldHVwJm9wZW5pZC5yZXR1cm5fdG89aHR0cHMlM0ElMkYlMkZjaGFtcHMucHJvJTJGcnUlMkZvYXV0aCUyRnN0ZWFtJTNGc3RhdGU9c3RlYW0mb3BlbmlkLnJlYWxtPWh0dHBzJTNBJTJGJTJGY2hhbXBzLnBybyUyRnJ1JTJGb2F1dGglMkZzdGVhbSZvcGVuaWQubnMuc3JlZz1odHRwJTNBJTJGJTJGb3BlbmlkLm5ldCUyRmV4dGVuc2lvbnMlMkZzcmVnJTJGMS4xJm9wZW5pZC5jbGFpbWVkX2lkPWh0dHAlM0ElMkYlMkZzcGVjcy5vcGVuaWQubmV0JTJGYXV0aCUyRjIuMCUyRmlkZW50aWZpZXJfc2VsZWN0Jm9wZW5pZC5pZGVudGl0eT1odHRwJTNBJTJGJTJGc3BlY3Mub3BlbmlkLm5ldCUyRmF1dGglMkYyLjAlMkZpZGVudGlmaWVyX3NlbGVjdFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX2MoXCJpbWdcIiwgeyBhdHRyczogeyBzcmM6IFwiL2ltYWdlcy9sb2dpbl9zdGVhbS5zdmdcIiB9IH0pXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBocmVmOiBcIi9ydS9hdXRoL2Rpc2NvcmQvXCIgfSB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHsgYXR0cnM6IHsgc3JjOiBcIi9pbWFnZXMvbG9naW5fZGlzY29yZC5zdmdcIiB9IH0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBocmVmOiBcIi9ydS9hdXRoL2ZhY2Vib29rL1wiIH0gfSwgW1xuICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7IGF0dHJzOiB7IHNyYzogXCIvaW1hZ2VzL2ZhY2Vib29rLnBuZ1wiIH0gfSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IGhyZWY6IFwiL3J1L2F1dGgvZ29vZ2xlL1wiIH0gfSwgW1xuICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7IGF0dHJzOiB7IHNyYzogXCIvaW1hZ2VzL2dvb2dsZS5wbmdcIiB9IH0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBocmVmOiBcIi9ydS9hdXRoL3R3aWNoL1wiIH0gfSwgW1xuICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7IGF0dHJzOiB7IHNyYzogXCIvaW1hZ2VzL3R3aWNoLnBuZ1wiIH0gfSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IGhyZWY6IFwiL3J1L2F1dGgvdmsvXCIgfSB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHsgYXR0cnM6IHsgc3JjOiBcIi9pbWFnZXMvdmsuc3ZnXCIgfSB9KVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGlua3NcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRlbWl0KFwic2V0U3RlcFwiLCBcImxvZ2luXCIpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLQktGF0L7QtCDQsiDQu9C40YfQvdGL0Lkg0LrQsNCx0LjQvdC10YJcIildXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNsb3NlZFwiLCBvbjogeyBjbGljazogX3ZtLmNsb3NlIH0gfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwic3ZnXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjE2XCIsXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTZcIixcbiAgICAgICAgICAgICAgICAgIHZpZXdCb3g6IFwiMCAwIDE2IDE2XCIsXG4gICAgICAgICAgICAgICAgICBmaWxsOiBcIm5vbmVcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwicGF0aFwiLCB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBkOlxuICAgICAgICAgICAgICAgICAgICAgIFwiTTguODgzOTIgOC4wMDAwNEwxNS44MTY5IDEuMDY2OThDMTYuMDYxIDAuODIyODgyIDE2LjA2MSAwLjQyNzEzMyAxNS44MTY5IDAuMTgzMDdDMTUuNTcyOCAtMC4wNjA5OTIyIDE1LjE3NzEgLTAuMDYxMDIzNCAxNC45MzMgMC4xODMwN0w3Ljk5OTk4IDcuMTE2MTNMMS4wNjY5NyAwLjE4MzA3QzAuODIyODggLTAuMDYxMDIzNCAwLjQyNzEzMiAtMC4wNjEwMjM0IDAuMTgzMDcgMC4xODMwN0MtMC4wNjA5OTIgMC40MjcxNjQgLTAuMDYxMDIzMyAwLjgyMjkxNCAwLjE4MzA3IDEuMDY2OThMNy4xMTYwOCA4TDAuMTgzMDcgMTQuOTMzMUMtMC4wNjEwMjMzIDE1LjE3NzIgLTAuMDYxMDIzMyAxNS41NzI5IDAuMTgzMDcgMTUuODE3QzAuMzA1MTAxIDE1LjkzOSAwLjQ2NTA2OSAxNiAwLjYyNTAzNyAxNkMwLjc4NTAwNSAxNiAwLjk0NDk0MyAxNS45MzkgMS4wNjcgMTUuODE3TDcuOTk5OTggOC44ODM5NEwxNC45MzMgMTUuODE3QzE1LjA1NSAxNS45MzkgMTUuMjE1IDE2IDE1LjM3NSAxNkMxNS41MzQ5IDE2IDE1LjY5NDkgMTUuOTM5IDE1LjgxNjkgMTUuODE3QzE2LjA2MSAxNS41NzI5IDE2LjA2MSAxNS4xNzcxIDE1LjgxNjkgMTQuOTMzMUw4Ljg4MzkyIDguMDAwMDRaXCIsXG4gICAgICAgICAgICAgICAgICAgIGZpbGw6IFwiIzg2ODg4QVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvZ2luX3JlcV9ibG9ja1wiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIml0ZW1cIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcItCi0YDQtdC90LXRgNGD0LnRgtC10YHRjCDQstC80LXRgdGC0LUg0YEg0LvRg9GH0YjQuNC80Lgg0LjQs9GA0L7QutCw0LzQuCDQsiDQstCw0YjQuNGFINC70Y7QsdC40LzRi9GFINC40LPRgNCw0YVcIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpdGVtXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgW192bS5fdihcItCf0L7RgdC70LXQtNC90LjQtSDQvdC+0LLQvtGB0YLQuCDQuCDRgdC+0LHRi9GC0LjRj1wiKV0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIml0ZW1cIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCBbX3ZtLl92KFwi0JLQtdC70LjQutC+0LvQtdC/0L3QvtC1INGB0L7QvtCx0YnQtdGB0YLQstC+XCIpXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaXRlbVwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIpLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtfdm0uX3YoXCLQotGA0LDQvdGB0LvRj9GG0LjQuCDQuCDRgNC10LfRg9C70YzRgtCw0YLRiyDQvNCw0YLRh9C10LlcIildKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpdGVtXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgW192bS5fdihcItCQ0L3QsNC70LjRgtC40LrQsCDQvtGCINC/0YDQvtGE0LXRgdGB0LjQvtC90LDQu9C+0LJcIildKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImdyaWRcIiB9LCBbXG4gICAgX2MoXCJhXCIsIHsgc3RhdGljQ2xhc3M6IFwiZ3JpZC1yb3dcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImRhdGFcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGl0bGVcIiB9LCBbXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnRlYW0ubmFtZSkgK1xuICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF92bS5fbSgwKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkYXRhXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRpdGxlXCIgfSwgW1xuICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgX3ZtLl9zKF92bS50ZWFtLnRhZykgK1xuICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF92bS5fbSgxKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkYXRhXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRpdGxlXCIgfSwgW1xuICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgX3ZtLl9zKF92bS50ZWFtLm1lbWJlcnMubGVuZ3RoKSArXG4gICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX3ZtLl9tKDIpXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImRhdGEgcHQtMlwiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJhXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuLW9yYW5nZSB0ZXh0LWxpZ2h0IHAtMiBwb2ludGVyXCIsXG4gICAgICAgICAgICBhdHRyczogeyBocmVmOiBfdm0uaHR0cC5nZXRUZWFtTGluayhfdm0udGVhbS5pZCkgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICDQn9C+0YHQvNC+0YLRgNC10YLRjFxcbiAgICAgICAgICAgIFwiKV1cbiAgICAgICAgKVxuICAgICAgXSlcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJib3R0b21cIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImRhdGVcIiB9LCBbX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLQndCw0LfQstCw0L3QuNC1XCIpXSldKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYm90dG9tXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkYXRlXCIgfSwgW19jKFwic3BhblwiLCBbX3ZtLl92KFwi0KLQtdCzXCIpXSldKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYm90dG9tXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkYXRlXCIgfSwgW19jKFwic3BhblwiLCBbX3ZtLl92KFwi0KPRh9Cw0YHQvdC40LrQvtCyXCIpXSldKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImV2ZW50c192aWV3XCIgfSwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb21wb25lbnQgdXBjb21pbmdfZXZlbnRzXCIgfSxcbiAgICAgICAgICBfdm0uX2woX3ZtLnRlYW1zLCBmdW5jdGlvbih0ZWFtLCBrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBfYyhcIm12cC1qb2luZWQtdGVhbVwiLCB7IGtleToga2V5LCBhdHRyczogeyB0ZWFtOiB0ZWFtIH0gfSlcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAxXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJoZWFkZXIgbXQtM1wiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsZnRcIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY2xhc3M6IHsgYWN0aXZlOiBfdm0uYWN0aXZlID09PSBcImNvbW1hbmRzXCIgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uYWN0aXZlID0gXCJjb21tYW5kc1wiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihcItCa0J7QnNCQ0J3QlNCrXCIpXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjbGFzczogeyBhY3RpdmU6IF92bS5hY3RpdmUgPT09IFwidG91cm5hbWVudHNcIiB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIF92bS5hY3RpdmUgPSBcInRvdXJuYW1lbnRzXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwi0KLQo9Cg0J3QmNCg0KtcIildXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNsYXNzOiB7IGFjdGl2ZTogX3ZtLmFjdGl2ZSA9PT0gXCJtYXRjaGVzXCIgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uYWN0aXZlID0gXCJtYXRjaGVzXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwi0JzQkNCi0KfQmFwiKV1cbiAgICAgICAgICApXG4gICAgICAgIF0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcIk12cFRlYW1zXCIpXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZCB3LTUwIG1yLTIgYm9yZGVyLXJhZGl1cy0wXCIgfSwgW1xuICAgIF92bS50ZWFtID09PSB1bmRlZmluZWRcbiAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLWJvZHlcIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImg1XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNhcmQtdGl0bGUgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLnRpdGxlKSArIFwiXFxuICAgICAgICAgICAgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJhZGdlIGJhZGdlLXdhcm5pbmcgYm9yZGVyLXJhZGl1cy0wXCIgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0udHlwZSkpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtdGV4dFwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5kZXNjcmlwdGlvbikgKyBcIlxcbiAgICAgICAgXCIpXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4tb3JhbmdlIHRleHQtbGlnaHQgcC0yIHBvaW50ZXJcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBcImRhdGEtdG9nZ2xlXCI6IFwibW9kYWxcIixcbiAgICAgICAgICAgICAgICBcImRhdGEtdGFyZ2V0XCI6IFwiI21ha2VDb21hbmRNb2RhbFwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kZW1pdChcInNldENhcGFjaXR5XCIsIF92bS5jYXBhY2l0eSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgINCh0L7Qt9C00LDRgtGMINC60L7QvNCw0L3QtNGDIFwiICtcbiAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0udHlwZSkgK1xuICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgIFwiXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApXG4gICAgICAgIF0pXG4gICAgICA6IF92bS5fZSgpLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX3ZtLnRlYW0gIT09IHVuZGVmaW5lZFxuICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtYm9keVwiIH0sIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiaDVcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC10aXRsZSBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBcIiArIF92bS5fcyhfdm0udGVhbS5uYW1lKSArIFwiXFxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJiYWRnZSBiYWRnZS13YXJuaW5nIGJvcmRlci1yYWRpdXMtMFwiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0udHlwZSkgKyBcIlxcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtdGV4dFwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiArIF92bS5fcyhfdm0udGVhbS5tZW1iZXJzLmxlbmd0aCkgKyBcIiDRg9GH0LDRgdC90LjQutC+0LJcIilcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0bi1vcmFuZ2UgdGV4dC1saWdodCBwLTIgcG9pbnRlclwiLFxuICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBfdm0uaHR0cC5nZXRUZWFtTGluayhfdm0udGVhbS5pZCkgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICDQn9C+0YHQvNC+0YLRgNC10YLRjFxcbiAgICAgICAgXCIpXVxuICAgICAgICAgIClcbiAgICAgICAgXSlcbiAgICAgIDogX3ZtLl9lKClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZ3JpZFwiIH0sIFtcbiAgICBfYyhcImFcIiwgeyBzdGF0aWNDbGFzczogXCJncmlkLXJvd1wiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9nb1wiIH0sIFtcbiAgICAgICAgX3ZtLm1lbWJlci5pbWFnZSAhPT0gbnVsbFxuICAgICAgICAgID8gX2MoXCJpbWdcIilcbiAgICAgICAgICA6IF9jKFwiaW1nXCIsIHsgYXR0cnM6IHsgc3JjOiBcIi9pbWFnZXMvbm9Mb2dvLnBuZ1wiIH0gfSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZGF0YVwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0aXRsZVwiIH0sIFtcbiAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ubWVtYmVyLm5pY2tuYW1lKSArXG4gICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX3ZtLl9tKDApXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImRhdGFcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGl0bGVcIiB9LCBbXG4gICAgICAgICAgX3ZtLmlzQ2FwdGFpblxuICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAg0JrQsNC/0LjRgtCw0L1cXG4gICAgICAgICAgICAgICAgXCIpXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICA6IF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICDQmNCz0YDQvtC6XFxuICAgICAgICAgICAgICAgIFwiKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX3ZtLl9tKDEpXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImRhdGFcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGl0bGVcIiB9LCBbXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IGhyZWY6IF92bS5nZXRTdGVhbUxpbmsoX3ZtLm1lbWJlci5zdGVhbSkgfSB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczogeyB3aWR0aDogXCIyMHB4XCIsIHNyYzogXCIvaW1hZ2VzL2xvZ2luX3N0ZWFtLnN2Z1wiIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF92bS5fbSgyKVxuICAgICAgXSlcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJib3R0b21cIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImRhdGVcIiB9LCBbX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLQndC40LpcIildKV0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJib3R0b21cIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImRhdGVcIiB9LCBbX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLQoNC+0LvRjFwiKV0pXSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJvdHRvbVwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZGF0ZVwiIH0sIFtfYyhcInNwYW5cIiwgW192bS5fdihcItCh0YLQuNC8XCIpXSldKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJoZWFkZXIgbXQtMyBkLWJsb2NrXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsZnRcIiB9LCBbXG4gICAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IGhyZWY6IF92bS5odHRwLmdldE12cExpbmsoKSB9IH0sIFtfdm0uX3YoXCLQndCw0LfQsNC0XCIpXSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZXZlbnRzX3ZpZXdcIiwgYXR0cnM6IHsgaWQ6IFwidGVhbU1lbWJlcnNcIiB9IH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXJcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbXBvbmVudCB1cGNvbWluZ19ldmVudHNcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJ1cGNvbWluZ19ldmVudHNcIiB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnRlYW0ubWVtYmVycywgZnVuY3Rpb24obWVtYmVyLCBrZXkpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0udGVhbS5oYXNPd25Qcm9wZXJ0eShcIm1lbWJlcnNcIilcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcIm12cC10ZWFtLW1lbWJlclwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1lbWJlcjogbWVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImlzLWNhcHRhaW5cIjogX3ZtLmNoZWNrTWVtYmVySXNDYXB0YWluKG1lbWJlcilcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3cgbXQtMlwiIH0sIFtcbiAgICAgICAgICAgIF92bS5pc0NyZWF0b3JcbiAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxmdFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiYVwiLCB7IG9uOiB7IGNsaWNrOiBfdm0uZGVsZXRlVGVhbSB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgINCj0LTQsNC70LjRgtGMINC60L7QvNCw0L3QtNGDXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuLW9yYW5nZSB0ZXh0LWxpZ2h0IHBvaW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLnNob3dBZGRNb2RhbCB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtcGx1c1wiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIsKgwqDQlNC+0LHQsNCy0LjRgtGMINGD0YfQsNGB0L3QuNC60L7QslxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgOiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxmdFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0bi1vcmFuZ2UgdGV4dC1saWdodCBwb2ludGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogX3ZtLmh0dHAudXNlckxlYXZlVGVhbUxpbmsoX3ZtLnRlYW1JZCkgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg0J/QvtC60LjQvdGD0YLRjCDQutC+0LzQsNC90LTRg1xcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJoZWFkZXJcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvdW5kXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgX2MoXCJpbWdcIiwgeyBhdHRyczogeyBzcmM6IFwiL2ltYWdlcy9sYW1wLnN2Z1wiLCBhbHQ6IFwibGFtcFwiIH0gfSlcbiAgICAgICAgXSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGl0bGVcIiB9LCBbXG4gICAgICAgIF92bS5fdihcbiAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0KPRh9Cw0YHRgtC90LjQutC4XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udFwiIH0sIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lciBjb21tYW5kcyBwLTAgbXQtM1wiIH0sIFtcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInctNzUgZC1mbGV4XCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwibXZwLXRlYW1cIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgdGl0bGU6IFwi0J3QsNGB0YLRgNC+0LXQvSDQuNCz0YDQsNGC0Ywg0YHQtdGA0YzQtdC30L3Qvj9cIixcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICAgICAgXCLQodC+0LfQtNCw0Lkg0YHQstC+0Y4g0LrQvtC80LDQvdC00YMg0LTQu9GPINGC0YPRgNC40LrQvtCyIDV2NSDQuCDQstGA0YvQstCw0LnRgdGPINCyINC60LjQsdC10YDRgdC/0L7RgNGCXCIsXG4gICAgICAgICAgICAgIHR5cGU6IFwiNXg1XCIsXG4gICAgICAgICAgICAgIGNhcGFjaXR5OiBcIjVcIixcbiAgICAgICAgICAgICAgdGVhbXM6IF92bS50ZWFtc1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uOiB7IHNldENhcGFjaXR5OiBfdm0uc2V0Q2FwYWNpdHkgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJtdnAtdGVhbVwiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICB0aXRsZTogXCLQndCw0L/QsNGA0L3QuNC60LhcIixcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICAgICAgXCLQndC10YIg0L/QvtGB0YLQvtGP0L3QvdC+0Lkg0LrQvtC80LDQvdC00Ys/INCf0L7Qt9C+0LLQuCDQtNGA0YPQs9CwINC4INCy0YvQvdC+0YHQuNGC0LUg0YHQvtC/0LXRgNC90LjQutC+0LIg0LLQvNC10YHRgtC1XCIsXG4gICAgICAgICAgICAgIHR5cGU6IFwiMngyXCIsXG4gICAgICAgICAgICAgIGNhcGFjaXR5OiBcIjJcIixcbiAgICAgICAgICAgICAgdGVhbXM6IF92bS50ZWFtc1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uOiB7IHNldENhcGFjaXR5OiBfdm0uc2V0Q2FwYWNpdHkgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJtb2RhbCBmYWRlXCIsXG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIGlkOiBcIm1ha2VDb21hbmRNb2RhbFwiLFxuICAgICAgICAgICAgdGFiaW5kZXg6IFwiLTFcIixcbiAgICAgICAgICAgIFwiYXJpYS1sYWJlbGxlZGJ5XCI6IFwiZXhhbXBsZU1vZGFsTGFiZWxcIixcbiAgICAgICAgICAgIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLWRpYWxvZ1wiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtY29udGVudCBib3JkZXItcmFkaXVzLTBcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtb2RhbC1ib2R5XCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fbSgxKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihcItCd0LDQt9Cy0LDQvdC40LUg0LrQvtC80LDQvdC00YtcIildKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5jb21tYW5kLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImNvbW1hbmQubmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2wgYm9yZGVyLXJhZGl1cy0wXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uY29tbWFuZC5uYW1lIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmNvbW1hbmQsIFwibmFtZVwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgIV92bS5tZXNzYWdlcy5lcnJvci5oYXNPd25Qcm9wZXJ0eShcIm5hbWVcIilcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNtYWxsXCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS10ZXh0IHRleHQtbXV0ZWRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQnNC+0LbQvdC+INC70LDRgtC40L3RgdC60LjQtSDQsdGD0LrQstGLINC4INGG0LjRhNGA0YtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5tZXNzYWdlcy5lcnJvci5oYXNPd25Qcm9wZXJ0eShcIm5hbWVcIilcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNtYWxsXCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ubWVzc2FnZXMuZXJyb3IubmFtZVswXSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwi0KLQtdCzINC60L7QvNCw0L3QtNGLXCIpXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uY29tbWFuZC50YWcsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImNvbW1hbmQudGFnXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbCBib3JkZXItcmFkaXVzLTAgdy01MFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmNvbW1hbmQudGFnIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmNvbW1hbmQsIFwidGFnXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAhX3ZtLm1lc3NhZ2VzLmVycm9yLmhhc093blByb3BlcnR5KFwidGFnXCIpXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJzbWFsbFwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tdGV4dCB0ZXh0LW11dGVkXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0JzQsNC60YHQuNC80YPQvCA2INGB0LjQvNCy0L7Qu9C+0LJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5tZXNzYWdlcy5lcnJvci5oYXNPd25Qcm9wZXJ0eShcInRhZ1wiKVxuICAgICAgICAgICAgICAgICAgICA/IF9jKFwic21hbGxcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5tZXNzYWdlcy5lcnJvci50YWdbMF0pICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5tZXNzYWdlcy5zdWNjZXNzICE9PSBudWxsXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1zdWNjZXNzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ubWVzc2FnZXMuc3VjY2VzcykgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtZm9vdGVyIGp1c3RpZnktY29udGVudC1jZW50ZXJcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJidG4tb3JhbmdlIHRleHQtbGlnaHQgcC0yIHRleHQtY2VudGVyIHBvaW50ZXIgdy0xMDBcIixcbiAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmNyZWF0ZVRlYW0gfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi0KHQvtC30LTQsNGC0Ywg0LrQvtC80LDQvdC00YNcIildXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJidG4tZ3JleSBwb2ludGVyIHRleHQtY2VudGVyIHRleHQtbGlnaHQgYm9yZGVyLXJhZGl1cy0wIHAtMiB3LTc1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJkYXRhLWRpc21pc3NcIjogXCJtb2RhbFwiLCBcImFyaWEtbGFiZWxcIjogXCJDbG9zZVwiIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcItCe0YLQvNC10L3QuNGC0YxcIildXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCIxMjNcIiB9LCBbX2MoXCJtdnAtam9pbmVkLXRlYW1zXCIpXSwgMSlcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtb2RhbC1oZWFkZXJcIiB9LCBbXG4gICAgICBfYyhcbiAgICAgICAgXCJoNVwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLXRpdGxlXCIsIGF0dHJzOiB7IGlkOiBcImV4YW1wbGVNb2RhbExhYmVsXCIgfSB9LFxuICAgICAgICBbX3ZtLl92KFwi0KHQvtC30LTQsNGC0Ywg0LrQvtC80LDQvdC00YNcIildXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImFcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNsb3NlXCIsXG4gICAgICAgICAgYXR0cnM6IHsgXCJkYXRhLWRpc21pc3NcIjogXCJtb2RhbFwiLCBcImFyaWEtbGFiZWxcIjogXCJDbG9zZVwiIH1cbiAgICAgICAgfSxcbiAgICAgICAgW19jKFwic3BhblwiLCB7IGF0dHJzOiB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfSB9LCBbX3ZtLl92KFwiw5dcIildKV1cbiAgICAgIClcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHRcIiB9LCBbXG4gICAgICBfYyhcInBcIiwgW1xuICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCf0YDQuNC00YPQvNCw0Lkg0L3QsNC30LLQsNC90LjQtSAo0YHQvNC+0LbQtdGI0Ywg0L/QvtC80LXQvdGP0YLRjCDQv9C+0YLQvtC8KVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICApXG4gICAgICBdKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiZXZlbnRzX3ZpZXdcIiwgYXR0cnM6IHsgaWQ6IFwidGVhbU1lbWJlcnNcIiB9IH0sXG4gICAgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXJcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY29tcG9uZW50IHVwY29taW5nX2V2ZW50c1wiLFxuICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJ1cGNvbWluZ19ldmVudHNcIiB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImhlYWRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnRlYW0ubmFtZSkgK1xuICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0uX2woX3ZtLnRlYW0ubWVtYmVycywgZnVuY3Rpb24obWVtYmVyLCBrZXkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnRlYW0uaGFzT3duUHJvcGVydHkoXCJtZW1iZXJzXCIpXG4gICAgICAgICAgICAgICAgICA/IF9jKFwibXZwLXRlYW0tbWVtYmVyXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVtYmVyOiBtZW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImlzLWNhcHRhaW5cIjogX3ZtLmNoZWNrTWVtYmVySXNDYXB0YWluKG1lbWJlcilcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMlxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF92bS5pc0F1dGhvcml6ZSAmJiBfdm0uaXNGcmVlUGxhY2VcbiAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93IG10LTNcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGZ0XCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0bi1vcmFuZ2UgdGV4dC1saWdodCBwb2ludGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uam9pblRlYW0gfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLXBsdXNcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiwqDCoNCf0YDQuNGB0L7QtdC00LXQvdC40YLRgdGPXFxuICAgICAgICAgICAgICAgIFwiKVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJsb2dpbi1tb2RhbFwiLCB7IGF0dHJzOiB7IHNob3c6ICFfdm0uaXNBdXRob3JpemUgfSB9KVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvdW5kXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICBfYyhcImltZ1wiLCB7IGF0dHJzOiB7IHNyYzogXCIvaW1hZ2VzL2xhbXAuc3ZnXCIsIGFsdDogXCJsYW1wXCIgfSB9KVxuICAgICAgXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXIgcC0wIG0tMFwiIH0sIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lciB3aW5kb3ctaGVpZ2h0LTgwIHAtMCBtLTBcIiB9LCBbXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgXCJyb3cgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIHctMTAwIGgtMTAwXCJcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgZmxleC1jb2x1bW5cIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG1iLTNcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgXCJidG4tb3JhbmdlIHRleHQtbGlnaHQgcC0zIHBsLTUgcHItNSBmb250LXNpemUtMjMgcG9pbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLnNob3dMb2dpbk1vZGFsIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiSm9pbiB0aGUgR2FtZVwiKV1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5fbSgxKVxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgICAgICAgXVxuICAgICAgKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAge1xuICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICBcInJvdyBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgdy0xMDAgaC0xMDBcIlxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJhXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuLW9yYW5nZSB0ZXh0LWxpZ2h0IHAtMiBwbC0zIHByLTMgcG9pbnRlclwiLFxuICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5zaG93TG9naW5Nb2RhbCB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX3ZtLl92KFwiSm9pbiB0aGUgR2FtZVwiKV1cbiAgICAgICAgKVxuICAgICAgXVxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidy0xMDAgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIiB9LCBbXG4gICAgICBfYyhcInN0cm9uZ1wiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtbGlnaHQgZm9udC1zaXplLTIzXCIgfSwgW1xuICAgICAgICBfdm0uX3YoXCJXaGF0IHdlIG9mZmVyXCIpXG4gICAgICBdKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidy0xMDAgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIiB9LCBbXG4gICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWxpZ2h0IHctNTAgZm9udC1zaXplLTE4XCIgfSwgW1xuICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC5cXG4gICAgICAgICAgICAgICAgICAgICAgICBBZCBjb25zZXF1dW50dXIgY3VscGEgY3VwaWRpdGF0ZSBkZWxlbml0aSBkaWN0YSBkaWduaXNzaW1vcyxcXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXN0aW5jdGlvIGRvbG9yIGRvbG9yZXMgaGljIGlwc2EgaXRhcXVlIGxhdWRhbnRpdW0gbW9sZXN0aWFzLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vbGxpdGlhIG5vc3RydW0sIHBlcmZlcmVuZGlzIHByb3ZpZGVudCBxdW9zIHNhcGllbnRlIHZlcm8hXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICApXG4gICAgICBdKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lclwiIH0sIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY29tcG9uZW50IHVwY29taW5nX2V2ZW50c1wiLFxuICAgICAgICAgIGF0dHJzOiB7IGlkOiBcInVwY29taW5nX2V2ZW50c1wiIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaGVhZGVyXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAg0KLRg9GA0L3QuNGA0YsgXCIgK1xuICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5nYW1lKSArXG4gICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLmxvYWRcbiAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgXCJsb2FkIHctMTAwIGgtMTAwIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlclwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX2MoXCJsb2FkXCIpXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uX2woX3ZtLnRvdXJuYW1lbnRzLCBmdW5jdGlvbih0b3VybmFtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gIV92bS5sb2FkXG4gICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJncmlkXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZ3JpZC1yb3dcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBcIi9ydS9tdnAvdG91cm5hbWVudC9cIiArIHRvdXJuYW1lbnQuaWQgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2dvXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwgeyBhdHRyczogeyBzcmM6IHRvdXJuYW1lbnQubG9nbyB9IH0pXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImRhdGFcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyh0b3VybmFtZW50Lm5hbWUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgI1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKHRvdXJuYW1lbnQubnVtYmVyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbSgxLCB0cnVlKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkYXRhXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0aXRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKHRvdXJuYW1lbnQuZGF0ZSkpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbSgyLCB0cnVlKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkYXRhXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0aXRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKHRvdXJuYW1lbnQubW9kZSkpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbSgzLCB0cnVlKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkYXRhXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0aXRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG91cm5hbWVudC5hY2Nlc3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS1sb2NrLW9wZW5cIiB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLWxvY2tcIiB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9tKDQsIHRydWUpXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImRhdGFcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3ModG91cm5hbWVudC5wcml6ZSkpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbSg1LCB0cnVlKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMlxuICAgICAgKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvdW5kXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICBfYyhcImltZ1wiLCB7IGF0dHJzOiB7IHNyYzogXCIvaW1hZ2VzL2xhbXAuc3ZnXCIsIGFsdDogXCJsYW1wXCIgfSB9KVxuICAgICAgXSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJvdHRvbVwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZGF0ZVwiIH0sIFtfYyhcInNwYW5cIiwgW192bS5fdihcItCd0LDQt9Cy0LDQvdC40LVcIildKV0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJib3R0b21cIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImRhdGVcIiB9LCBbX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLQlNCw0YLQsFwiKV0pXSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJvdHRvbVwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZGF0ZVwiIH0sIFtfYyhcInNwYW5cIiwgW192bS5fdihcItCg0LXQttC40LxcIildKV0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJib3R0b21cIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImRhdGVcIiB9LCBbX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLQlNC+0YHRgtGD0L9cIildKV0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJib3R0b21cIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImRhdGVcIiB9LCBbX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLQn9GA0LjQt1wiKV0pXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJzb3VyY2VSb290IjoiIn0=
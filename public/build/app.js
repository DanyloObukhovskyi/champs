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
      this.axios.post('/ru/user/set/nickname', data).then(function (_ref) {
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
          attrs: { error: _vm.error, email: _vm.email, check: _vm.password },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Mb2FkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Mb2FkLnZ1ZT9hYTljIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0xvYWQudnVlPzdkOTUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvTG9hZC52dWU/MDg1MCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Mb2dpbk1vZGFsLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Mb2dpbk1vZGFsLnZ1ZT8xYTc1Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0xvZ2luTW9kYWwudnVlPzkwNTUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4vQ29uZmlybUNvZGVGb3JtLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9sb2dpbi9Db25maXJtQ29kZUZvcm0udnVlPzIxN2QiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4vQ29uZmlybUNvZGVGb3JtLnZ1ZT9hNTI2Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xvZ2luL0NvbmZpcm1Db2RlRm9ybS52dWU/NWJlMSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9sb2dpbi9Db25ncmF0dWxhdGlvbnNGb3JtLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9sb2dpbi9Db25ncmF0dWxhdGlvbnNGb3JtLnZ1ZT8wN2NiIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xvZ2luL0NvbmdyYXR1bGF0aW9uc0Zvcm0udnVlPzY0NDAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4vTG9naW5Gb3JtLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9sb2dpbi9Mb2dpbkZvcm0udnVlP2Y0NDkiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4vTG9naW5Gb3JtLnZ1ZT9lYTMyIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xvZ2luL05pY2tuYW1lRm9ybS52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4vTmlja25hbWVGb3JtLnZ1ZT9kMWQ1Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xvZ2luL05pY2tuYW1lRm9ybS52dWU/OGUzMCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9sb2dpbi9SZWdpc3RyYXRpb25Gb3JtLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9sb2dpbi9SZWdpc3RyYXRpb25Gb3JtLnZ1ZT9mYTZiIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xvZ2luL1JlZ2lzdHJhdGlvbkZvcm0udnVlPzEyYzkiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL2NhYmluZXQvTXZwSm9pbmVkVGVhbS52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL2NhYmluZXQvTXZwSm9pbmVkVGVhbS52dWU/ZGE4NCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tdnAvY2FiaW5ldC9NdnBKb2luZWRUZWFtLnZ1ZT80ZGJmIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL212cC9jYWJpbmV0L012cEpvaW5lZFRlYW1zLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tdnAvY2FiaW5ldC9NdnBKb2luZWRUZWFtcy52dWU/ZTY1NiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tdnAvY2FiaW5ldC9NdnBKb2luZWRUZWFtcy52dWU/NzJkMCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tdnAvY2FiaW5ldC9NdnBQYWdlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tdnAvY2FiaW5ldC9NdnBQYWdlLnZ1ZT80MTg3Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL212cC9jYWJpbmV0L012cFBhZ2UudnVlP2E1MDMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL2NhYmluZXQvTXZwVGVhbS52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL2NhYmluZXQvTXZwVGVhbS52dWU/ZTZhZCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tdnAvY2FiaW5ldC9NdnBUZWFtLnZ1ZT85MDk3Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL212cC9jYWJpbmV0L012cFRlYW1NZW1iZXIudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL212cC9jYWJpbmV0L012cFRlYW1NZW1iZXIudnVlPzM5MmYiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL2NhYmluZXQvTXZwVGVhbU1lbWJlci52dWU/NzRkYSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tdnAvY2FiaW5ldC9NdnBUZWFtUGFnZS52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL2NhYmluZXQvTXZwVGVhbVBhZ2UudnVlPzUwMWYiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL2NhYmluZXQvTXZwVGVhbVBhZ2UudnVlPzc0YzEiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL2NhYmluZXQvTXZwVGVhbXMudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL212cC9jYWJpbmV0L012cFRlYW1zLnZ1ZT83MjBjIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL212cC9jYWJpbmV0L012cFRlYW1zLnZ1ZT9lZmQwIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL212cC9pbnZpdGUvTXZwSW52aXRlVGVhbVBhZ2UudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL212cC9pbnZpdGUvTXZwSW52aXRlVGVhbVBhZ2UudnVlPzNmMjIiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL2ludml0ZS9NdnBJbnZpdGVUZWFtUGFnZS52dWU/Y2M1NSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tdnAvc2VydmljZXMvTXZwU2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tdnAvdG91cm5hbWVudHMvTXZwTWFpbi52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL3RvdXJuYW1lbnRzL012cE1haW4udnVlP2QwNzIiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL3RvdXJuYW1lbnRzL012cE1haW4udnVlP2IxYzAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL3RvdXJuYW1lbnRzL012cFRvdXJuYW1lbnRzTGlzdC52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL3RvdXJuYW1lbnRzL012cFRvdXJuYW1lbnRzTGlzdC52dWU/M2Y0MSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tdnAvdG91cm5hbWVudHMvTXZwVG91cm5hbWVudHNMaXN0LnZ1ZT82NTI5Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy9qcy9jb21wb25lbnRzL0xvYWQudnVlIiwid2VicGFjazovLy9hc3NldHMvanMvY29tcG9uZW50cy9Mb2dpbk1vZGFsLnZ1ZSIsIndlYnBhY2s6Ly8vYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4vQ29uZmlybUNvZGVGb3JtLnZ1ZSIsIndlYnBhY2s6Ly8vYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4vQ29uZ3JhdHVsYXRpb25zRm9ybS52dWUiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xvZ2luL0xvZ2luRm9ybS52dWUiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xvZ2luL05pY2tuYW1lRm9ybS52dWUiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xvZ2luL1JlZ2lzdHJhdGlvbkZvcm0udnVlIiwid2VicGFjazovLy9hc3NldHMvanMvY29tcG9uZW50cy9tdnAvY2FiaW5ldC9NdnBKb2luZWRUZWFtLnZ1ZSIsIndlYnBhY2s6Ly8vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL2NhYmluZXQvTXZwSm9pbmVkVGVhbXMudnVlIiwid2VicGFjazovLy9hc3NldHMvanMvY29tcG9uZW50cy9tdnAvY2FiaW5ldC9NdnBQYWdlLnZ1ZSIsIndlYnBhY2s6Ly8vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL2NhYmluZXQvTXZwVGVhbS52dWUiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy9qcy9jb21wb25lbnRzL212cC9jYWJpbmV0L012cFRlYW1NZW1iZXIudnVlIiwid2VicGFjazovLy9hc3NldHMvanMvY29tcG9uZW50cy9tdnAvY2FiaW5ldC9NdnBUZWFtUGFnZS52dWUiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy9qcy9jb21wb25lbnRzL212cC9jYWJpbmV0L012cFRlYW1zLnZ1ZSIsIndlYnBhY2s6Ly8vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL2ludml0ZS9NdnBJbnZpdGVUZWFtUGFnZS52dWUiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy9qcy9jb21wb25lbnRzL212cC90b3VybmFtZW50cy9NdnBNYWluLnZ1ZSIsIndlYnBhY2s6Ly8vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL3RvdXJuYW1lbnRzL012cFRvdXJuYW1lbnRzTGlzdC52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvTG9hZC52dWU/MzNiYSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9sb2dpbi9Db25maXJtQ29kZUZvcm0udnVlP2MyYTkiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvTG9hZC52dWU/ZTAxNyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Mb2dpbk1vZGFsLnZ1ZT82ZWIwIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xvZ2luL0NvbmZpcm1Db2RlRm9ybS52dWU/MjlmOCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9sb2dpbi9Db25ncmF0dWxhdGlvbnNGb3JtLnZ1ZT8wNmYxIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xvZ2luL0xvZ2luRm9ybS52dWU/Nzk4MyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9sb2dpbi9OaWNrbmFtZUZvcm0udnVlPzg2YmYiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4vUmVnaXN0cmF0aW9uRm9ybS52dWU/NTlmZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tdnAvY2FiaW5ldC9NdnBKb2luZWRUZWFtLnZ1ZT9kNWIzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL212cC9jYWJpbmV0L012cEpvaW5lZFRlYW1zLnZ1ZT85MTI4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL212cC9jYWJpbmV0L012cFBhZ2UudnVlP2RiMGEiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL2NhYmluZXQvTXZwVGVhbS52dWU/YzNkYiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tdnAvY2FiaW5ldC9NdnBUZWFtTWVtYmVyLnZ1ZT82MzdjIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL212cC9jYWJpbmV0L012cFRlYW1QYWdlLnZ1ZT83NTVjIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL212cC9jYWJpbmV0L012cFRlYW1zLnZ1ZT81NDJhIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL212cC9pbnZpdGUvTXZwSW52aXRlVGVhbVBhZ2UudnVlPzU5YTciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL3RvdXJuYW1lbnRzL012cE1haW4udnVlP2ZhM2MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL3RvdXJuYW1lbnRzL012cFRvdXJuYW1lbnRzTGlzdC52dWU/ZmY5OCJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJheGlvcyIsInJlcXVpcmUiLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJjb21tb24iLCJ0b2tlbiIsImRvY3VtZW50IiwiaGVhZCIsInF1ZXJ5U2VsZWN0b3IiLCJfY3NyZl90b2tlbiIsImNvbnRlbnQiLCJjb25zb2xlIiwiZXJyb3IiLCJWdWUiLCJjb21wb25lbnQiLCJNdnBNYWluIiwiTXZwUGFnZSIsIk12cFRlYW1QYWdlIiwiTXZwSW52aXRlVGVhbVBhZ2UiLCJNdnBUb3VybmFtZW50c0xpc3QiLCJMb2dpbk1vZGFsIiwiZWwiLCJwcm92aWRlIiwiaHR0cCIsIk12cFNlcnZpY2UiLCJjb25maWciLCJoZWFkZXIiLCJsb2dpbiIsImRhdGEiLCJzaG93IiwibG9jYXRpb24iLCJwcm90b2NvbCIsImhvc3RuYW1lIiwicGF0aCIsImJhc2VVcmwiLCJjYXBh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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsc0JBQXNCO0FBQ3ZELG1DQUFtQyx1QkFBdUI7QUFDMUQ7QUFDQSx1Q0FBdUMsa0NBQWtDO0FBQ3pFLHVDQUF1Qyw2QkFBNkI7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxzQkFBc0I7QUFDdkQsbUNBQW1DLHVCQUF1QjtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQix1QkFBdUI7QUFDN0M7QUFDQSxtQkFBbUIsU0FBUyx1Q0FBdUMsRUFBRTtBQUNyRTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHdCQUF3QjtBQUM5QyxpQkFBaUIsc0JBQXNCO0FBQ3ZDO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHdCQUF3QjtBQUM5QyxpQkFBaUIsc0JBQXNCO0FBQ3ZDO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHdCQUF3QjtBQUM5QyxpQkFBaUIsc0JBQXNCO0FBQ3ZDO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHdCQUF3QjtBQUM5QyxpQkFBaUIsc0JBQXNCO0FBQ3ZDO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHdCQUF3QjtBQUM5QyxpQkFBaUIsc0JBQXNCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5pbXBvcnQgJy4uL2Nzcy9hcHAuY3NzJztcbmltcG9ydCBNdnBTZXJ2aWNlIGZyb20gXCIuL2NvbXBvbmVudHMvbXZwL3NlcnZpY2VzL012cFNlcnZpY2UuanNcIjtcbmltcG9ydCBjb25maWcgZnJvbSBcIi4vY29uZmlnXCI7XG5pbXBvcnQgTXZwUGFnZSBmcm9tIFwiLi9jb21wb25lbnRzL212cC9jYWJpbmV0L012cFBhZ2VcIjtcbmltcG9ydCBNdnBUZWFtUGFnZSBmcm9tIFwiLi9jb21wb25lbnRzL212cC9jYWJpbmV0L012cFRlYW1QYWdlXCI7XG5pbXBvcnQgTXZwSW52aXRlVGVhbVBhZ2UgZnJvbSBcIi4vY29tcG9uZW50cy9tdnAvaW52aXRlL012cEludml0ZVRlYW1QYWdlXCI7XG5pbXBvcnQgTG9naW5Nb2RhbCBmcm9tIFwiLi9jb21wb25lbnRzL0xvZ2luTW9kYWxcIjtcbmltcG9ydCBNdnBNYWluIGZyb20gXCIuL2NvbXBvbmVudHMvbXZwL3RvdXJuYW1lbnRzL012cE1haW5cIjtcbmltcG9ydCBNdnBUb3VybmFtZW50c0xpc3QgZnJvbSBcIi4vY29tcG9uZW50cy9tdnAvdG91cm5hbWVudHMvTXZwVG91cm5hbWVudHNMaXN0XCI7XG5cbndpbmRvdy5heGlvcyA9IHJlcXVpcmUoJ2F4aW9zJyk7XG53aW5kb3cuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ1gtUmVxdWVzdGVkLVdpdGgnXSA9ICdYTUxIdHRwUmVxdWVzdCc7XG5cbmxldCB0b2tlbiA9IGRvY3VtZW50LmhlYWQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwiY3NyZi10b2tlblwiXScpO1xuXG5pZiAodG9rZW4pIHtcbiAgICB3aW5kb3cuYXhpb3MuX2NzcmZfdG9rZW4gPSB0b2tlbi5jb250ZW50O1xufSBlbHNlIHtcbiAgICBjb25zb2xlLmVycm9yKCdDU1JGIHRva2VuIG5vdCBmb3VuZCcpO1xufVxuXG4vLyBOZWVkIGpRdWVyeT8gSW5zdGFsbCBpdCB3aXRoIFwieWFybiBhZGQganF1ZXJ5XCIsIHRoZW4gdW5jb21tZW50IHRvIGltcG9ydCBpdC5cbi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cblZ1ZS5jb21wb25lbnQoJ212cC1tYWluJywgTXZwTWFpbilcblZ1ZS5jb21wb25lbnQoJ212cC1wYWdlJywgTXZwUGFnZSlcblZ1ZS5jb21wb25lbnQoJ212cC10ZWFtLXBhZ2UnLCBNdnBUZWFtUGFnZSlcblZ1ZS5jb21wb25lbnQoJ212cC1pbnZpdGUtcGFnZScsIE12cEludml0ZVRlYW1QYWdlKVxuVnVlLmNvbXBvbmVudCgnbXZwLXRvdXJuYW1lbnRzLWxpc3QnLCBNdnBUb3VybmFtZW50c0xpc3QpXG5WdWUuY29tcG9uZW50KCdsb2dpbi1mb3JtJywgTG9naW5Nb2RhbClcblxubmV3IFZ1ZSh7XG4gICAgZWw6ICcjYXBwJyxcbiAgICBwcm92aWRlOiB7XG4gICAgICAgIGh0dHA6IG5ldyBNdnBTZXJ2aWNlKGF4aW9zKSxcbiAgICAgICAgYXhpb3MsXG4gICAgICAgIGNvbmZpZyxcbiAgICAgICAgaGVhZGVyXG4gICAgfVxufSlcblxud2luZG93LmxvZ2luID0gbmV3IFZ1ZSh7XG4gICAgZWw6ICcjbG9naW4nLFxuICAgIHByb3ZpZGU6IHtcbiAgICAgICAgYXhpb3MsXG4gICAgICAgIGNvbmZpZ1xuICAgIH0sXG4gICAgZGF0YToge1xuICAgICAgICBzaG93OiBmYWxzZSxcbiAgICB9XG59KSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTG9hZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTA3Y2Y0ZjImc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTG9hZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0xvYWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0xvYWQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NTA3Y2Y0ZjImc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjUwN2NmNGYyXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL0FwcGxpY2F0aW9ucy9NQU1QL2h0ZG9jcy9jaGFtcHNwcm8vbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNTA3Y2Y0ZjInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNTA3Y2Y0ZjInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNTA3Y2Y0ZjInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0xvYWQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUwN2NmNGYyJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzUwN2NmNGYyJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvanMvY29tcG9uZW50cy9Mb2FkLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTG9hZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTG9hZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLW9uZU9mLTEtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2FkLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTUwN2NmNGYyJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLW9uZU9mLTEtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2FkLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTUwN2NmNGYyJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xvYWQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUwN2NmNGYyJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Mb2dpbk1vZGFsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNjljNGJhNSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Mb2dpbk1vZGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vTG9naW5Nb2RhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvY2hhbXBzcHJvL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzM2OWM0YmE1JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzM2OWM0YmE1JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzM2OWM0YmE1JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Mb2dpbk1vZGFsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNjljNGJhNSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCczNjljNGJhNScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2pzL2NvbXBvbmVudHMvTG9naW5Nb2RhbC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xvZ2luTW9kYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xvZ2luTW9kYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xvZ2luTW9kYWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM2OWM0YmE1JlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Db25maXJtQ29kZUZvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY5NjJiM2JhJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0NvbmZpcm1Db2RlRm9ybS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0NvbmZpcm1Db2RlRm9ybS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vQ29uZmlybUNvZGVGb3JtLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTY5NjJiM2JhJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI2OTYyYjNiYVwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvY2hhbXBzcHJvL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzY5NjJiM2JhJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzY5NjJiM2JhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzY5NjJiM2JhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Db25maXJtQ29kZUZvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY5NjJiM2JhJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzY5NjJiM2JhJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvanMvY29tcG9uZW50cy9sb2dpbi9Db25maXJtQ29kZUZvcm0udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Db25maXJtQ29kZUZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NvbmZpcm1Db2RlRm9ybS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Db25maXJtQ29kZUZvcm0udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9Njk2MmIzYmEmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NvbmZpcm1Db2RlRm9ybS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02OTYyYjNiYSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Db25maXJtQ29kZUZvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY5NjJiM2JhJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Db25ncmF0dWxhdGlvbnNGb3JtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02Nzk5YTJjMiZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Db25ncmF0dWxhdGlvbnNGb3JtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQ29uZ3JhdHVsYXRpb25zRm9ybS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjY3OTlhMmMyXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL0FwcGxpY2F0aW9ucy9NQU1QL2h0ZG9jcy9jaGFtcHNwcm8vbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNjc5OWEyYzInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNjc5OWEyYzInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNjc5OWEyYzInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0NvbmdyYXR1bGF0aW9uc0Zvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY3OTlhMmMyJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzY3OTlhMmMyJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvanMvY29tcG9uZW50cy9sb2dpbi9Db25ncmF0dWxhdGlvbnNGb3JtLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ29uZ3JhdHVsYXRpb25zRm9ybS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ29uZ3JhdHVsYXRpb25zRm9ybS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ29uZ3JhdHVsYXRpb25zRm9ybS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Njc5OWEyYzImc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0xvZ2luRm9ybS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YTc5NmYxZDQmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTG9naW5Gb3JtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vTG9naW5Gb3JtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL0FwcGxpY2F0aW9ucy9NQU1QL2h0ZG9jcy9jaGFtcHNwcm8vbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnYTc5NmYxZDQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnYTc5NmYxZDQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnYTc5NmYxZDQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0xvZ2luRm9ybS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YTc5NmYxZDQmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignYTc5NmYxZDQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy9qcy9jb21wb25lbnRzL2xvZ2luL0xvZ2luRm9ybS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xvZ2luRm9ybS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTG9naW5Gb3JtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2dpbkZvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWE3OTZmMWQ0JlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9OaWNrbmFtZUZvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWViYmYxOWNlJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL05pY2tuYW1lRm9ybS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL05pY2tuYW1lRm9ybS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImViYmYxOWNlXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL0FwcGxpY2F0aW9ucy9NQU1QL2h0ZG9jcy9jaGFtcHNwcm8vbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnZWJiZjE5Y2UnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnZWJiZjE5Y2UnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnZWJiZjE5Y2UnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL05pY2tuYW1lRm9ybS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZWJiZjE5Y2Umc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignZWJiZjE5Y2UnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy9qcy9jb21wb25lbnRzL2xvZ2luL05pY2tuYW1lRm9ybS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL05pY2tuYW1lRm9ybS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTmlja25hbWVGb3JtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9OaWNrbmFtZUZvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWViYmYxOWNlJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9SZWdpc3RyYXRpb25Gb3JtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00ZDdkMDhlNCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9SZWdpc3RyYXRpb25Gb3JtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vUmVnaXN0cmF0aW9uRm9ybS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvY2hhbXBzcHJvL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzRkN2QwOGU0JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzRkN2QwOGU0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzRkN2QwOGU0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9SZWdpc3RyYXRpb25Gb3JtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00ZDdkMDhlNCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0ZDdkMDhlNCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4vUmVnaXN0cmF0aW9uRm9ybS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1JlZ2lzdHJhdGlvbkZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1JlZ2lzdHJhdGlvbkZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1JlZ2lzdHJhdGlvbkZvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRkN2QwOGU0JlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9NdnBKb2luZWRUZWFtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNjYwM2IxZCZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9NdnBKb2luZWRUZWFtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vTXZwSm9pbmVkVGVhbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjM2NjAzYjFkXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL0FwcGxpY2F0aW9ucy9NQU1QL2h0ZG9jcy9jaGFtcHNwcm8vbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMzY2MDNiMWQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMzY2MDNiMWQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMzY2MDNiMWQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL012cEpvaW5lZFRlYW0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM2NjAzYjFkJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzM2NjAzYjFkJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvanMvY29tcG9uZW50cy9tdnAvY2FiaW5ldC9NdnBKb2luZWRUZWFtLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTXZwSm9pbmVkVGVhbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTXZwSm9pbmVkVGVhbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTXZwSm9pbmVkVGVhbS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzY2MDNiMWQmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL012cEpvaW5lZFRlYW1zLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jZDVhNmNiNCZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9NdnBKb2luZWRUZWFtcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL012cEpvaW5lZFRlYW1zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiY2Q1YTZjYjRcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvQXBwbGljYXRpb25zL01BTVAvaHRkb2NzL2NoYW1wc3Byby9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdjZDVhNmNiNCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdjZDVhNmNiNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdjZDVhNmNiNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTXZwSm9pbmVkVGVhbXMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWNkNWE2Y2I0JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2NkNWE2Y2I0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvanMvY29tcG9uZW50cy9tdnAvY2FiaW5ldC9NdnBKb2luZWRUZWFtcy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL012cEpvaW5lZFRlYW1zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NdnBKb2luZWRUZWFtcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTXZwSm9pbmVkVGVhbXMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWNkNWE2Y2I0JnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9NdnBQYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wN2FlMDliNCZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9NdnBQYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vTXZwUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjA3YWUwOWI0XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL0FwcGxpY2F0aW9ucy9NQU1QL2h0ZG9jcy9jaGFtcHNwcm8vbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMDdhZTA5YjQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMDdhZTA5YjQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMDdhZTA5YjQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL012cFBhZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA3YWUwOWI0JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzA3YWUwOWI0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvanMvY29tcG9uZW50cy9tdnAvY2FiaW5ldC9NdnBQYWdlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTXZwUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTXZwUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTXZwUGFnZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDdhZTA5YjQmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL012cFRlYW0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY1N2E0M2Y0JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL012cFRlYW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9NdnBUZWFtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL0FwcGxpY2F0aW9ucy9NQU1QL2h0ZG9jcy9jaGFtcHNwcm8vbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNjU3YTQzZjQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNjU3YTQzZjQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNjU3YTQzZjQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL012cFRlYW0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY1N2E0M2Y0JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzY1N2E0M2Y0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvanMvY29tcG9uZW50cy9tdnAvY2FiaW5ldC9NdnBUZWFtLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTXZwVGVhbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTXZwVGVhbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTXZwVGVhbS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjU3YTQzZjQmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL012cFRlYW1NZW1iZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTIwNDA1OGFlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL012cFRlYW1NZW1iZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9NdnBUZWFtTWVtYmVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL0FwcGxpY2F0aW9ucy9NQU1QL2h0ZG9jcy9jaGFtcHNwcm8vbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMjA0MDU4YWUnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMjA0MDU4YWUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMjA0MDU4YWUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL012cFRlYW1NZW1iZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTIwNDA1OGFlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzIwNDA1OGFlJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvanMvY29tcG9uZW50cy9tdnAvY2FiaW5ldC9NdnBUZWFtTWVtYmVyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTXZwVGVhbU1lbWJlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTXZwVGVhbU1lbWJlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTXZwVGVhbU1lbWJlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjA0MDU4YWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL012cFRlYW1QYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zMzQ3MWQyMyZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9NdnBUZWFtUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL012cFRlYW1QYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL0FwcGxpY2F0aW9ucy9NQU1QL2h0ZG9jcy9jaGFtcHNwcm8vbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMzM0NzFkMjMnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMzM0NzFkMjMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMzM0NzFkMjMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL012cFRlYW1QYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zMzQ3MWQyMyZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCczMzQ3MWQyMycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL2NhYmluZXQvTXZwVGVhbVBhZ2UudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NdnBUZWFtUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTXZwVGVhbVBhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL012cFRlYW1QYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zMzQ3MWQyMyZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTXZwVGVhbXMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRkNzlkYmFmJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL012cFRlYW1zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vTXZwVGVhbXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvQXBwbGljYXRpb25zL01BTVAvaHRkb2NzL2NoYW1wc3Byby9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc0ZDc5ZGJhZicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc0ZDc5ZGJhZicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc0ZDc5ZGJhZicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTXZwVGVhbXMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRkNzlkYmFmJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzRkNzlkYmFmJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvanMvY29tcG9uZW50cy9tdnAvY2FiaW5ldC9NdnBUZWFtcy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL012cFRlYW1zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NdnBUZWFtcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTXZwVGVhbXMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRkNzlkYmFmJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9NdnBJbnZpdGVUZWFtUGFnZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTljMzU1MDImXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTXZwSW52aXRlVGVhbVBhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9NdnBJbnZpdGVUZWFtUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvY2hhbXBzcHJvL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzE5YzM1NTAyJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzE5YzM1NTAyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzE5YzM1NTAyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9NdnBJbnZpdGVUZWFtUGFnZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTljMzU1MDImXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMTljMzU1MDInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy9qcy9jb21wb25lbnRzL212cC9pbnZpdGUvTXZwSW52aXRlVGVhbVBhZ2UudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NdnBJbnZpdGVUZWFtUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTXZwSW52aXRlVGVhbVBhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL012cEludml0ZVRlYW1QYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xOWMzNTUwMiZcIiIsImNsYXNzIE12cFNlcnZpY2Uge1xuXG4gICAgYmFzZVVybCA9IGAke3dpbmRvdy5sb2NhdGlvbi5wcm90b2NvbH0vLyR7d2luZG93LmxvY2F0aW9uLmhvc3RuYW1lfS9gO1xuXG4gICAgY29uc3RydWN0b3IoYXhpb3MpIHtcbiAgICAgICAgdGhpcy5heGlvcyA9IGF4aW9zXG4gICAgfVxuXG4gICAgdXJsID0gcGF0aCA9PiB7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLmJhc2VVcmx9cnUvJHtwYXRofWA7XG4gICAgfVxuXG4gICAgY3JlYXRlTXZwVGVhbSA9IGFzeW5jIChjYXBhY2l0eSwgbmFtZSwgdGFnKSA9PiB7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmF4aW9zLnBvc3QodGhpcy51cmwoJ3VzZXIvbXZwL2NyZWF0ZS90ZWFtJyksIHtcbiAgICAgICAgICAgIGNhcGFjaXR5LCBuYW1lLCB0YWdcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBnZXRVc2VyVGVhbXMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmF4aW9zLnBvc3QodGhpcy51cmwoJ3VzZXIvbXZwL2dldC90ZWFtcycpKVxuICAgIH1cblxuICAgIGdldFRlYW1MaW5rID0gKGlkKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnVybChgdXNlci9tdnAvdGVhbS8ke2lkfWApXG4gICAgfVxuXG4gICAgZ2V0TXZwTGluayA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXJsKCd1c2VyL212cC8nKVxuICAgIH1cblxuICAgIGdldE12cFRlYW0gPSBhc3luYyBpZCA9PiB7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmF4aW9zLnBvc3QodGhpcy51cmwoYGdldC91c2VyL212cC90ZWFtLyR7aWR9YCkpXG4gICAgfVxuXG4gICAgZGVsZXRlTXZwVGVhbSA9IGFzeW5jIGlkID0+IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuYXhpb3MucG9zdCh0aGlzLnVybChgZGVsZXRlL3VzZXIvbXZwL3RlYW0vJHtpZH1gKSlcbiAgICB9XG5cbiAgICBnZXRUZWFtSW52aXRlVG9rZW4gPSBhc3luYyBpZCA9PiB7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmF4aW9zLnBvc3QodGhpcy51cmwoYG12cC90ZWFtL2dldC9pbnZpdGUvJHtpZH1gKSlcbiAgICB9XG5cbiAgICByZWxvYWRUZWFtSW52aXRlVG9rZW4gPSBhc3luYyBpZCA9PiB7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmF4aW9zLnBvc3QodGhpcy51cmwoYG12cC90ZWFtL3JlbG9hZC9pbnZpdGUvJHtpZH1gKSlcbiAgICB9XG5cbiAgICBnZXRJbnZpdGVUb1RlYW1MaW5rID0gKGlkLCB0b2tlbikgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy51cmwoYG12cC9pbnZpdGUvJHtpZH0vJHt0b2tlbn1gKVxuICAgIH1cblxuICAgIGdldEF1dGhVc2VyID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5heGlvcy5wb3N0KHRoaXMudXJsKCdnZXQvYXV0aCcpKVxuICAgIH1cblxuICAgIGpvaW5NZW1iZXJUb1RlYW0gPSBhc3luYyBpZCA9PiB7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmF4aW9zLnBvc3QodGhpcy51cmwoYG12cC9qb2luL3RvL3RlYW0vJHtpZH1gKSlcbiAgICB9XG5cbiAgICBnZXRVc2VySm9pbmVkVGVhbXMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmF4aW9zLnBvc3QodGhpcy51cmwoYHVzZXIvbXZwL2dldC9qb2luZWQvdGVhbXMvYCkpXG4gICAgfVxuXG4gICAgdXNlckxlYXZlVGVhbUxpbmsgPSBpZCA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnVybChgdXNlci9tdnAvbGVhdmUvdGVhbS8ke2lkfWApXG4gICAgfVxuXG4gICAgZ2V0VG91cm5hbWVudHNCeUdhbWUgPSBhc3luYyBnYW1lID0+IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuYXhpb3MucG9zdCh0aGlzLnVybChgbXZwL2FqYXgvdG91cm5hbWVudHMvJHtnYW1lfWApKVxuICAgIH1cblxuICAgIGdldFByb2ZpbGVMaW5rID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy51cmwoYHVzZXIvc2V0dGluZ3NgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTXZwU2VydmljZTsiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL012cE1haW4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA4NTJkZmJjJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL012cE1haW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9NdnBNYWluLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL0FwcGxpY2F0aW9ucy9NQU1QL2h0ZG9jcy9jaGFtcHNwcm8vbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMDg1MmRmYmMnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMDg1MmRmYmMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMDg1MmRmYmMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL012cE1haW4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA4NTJkZmJjJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzA4NTJkZmJjJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvanMvY29tcG9uZW50cy9tdnAvdG91cm5hbWVudHMvTXZwTWFpbi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL012cE1haW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL012cE1haW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL012cE1haW4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA4NTJkZmJjJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9NdnBUb3VybmFtZW50c0xpc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE4YzE1OTBmJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL012cFRvdXJuYW1lbnRzTGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL012cFRvdXJuYW1lbnRzTGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvY2hhbXBzcHJvL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzE4YzE1OTBmJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzE4YzE1OTBmJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzE4YzE1OTBmJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9NdnBUb3VybmFtZW50c0xpc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE4YzE1OTBmJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzE4YzE1OTBmJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvanMvY29tcG9uZW50cy9tdnAvdG91cm5hbWVudHMvTXZwVG91cm5hbWVudHNMaXN0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTXZwVG91cm5hbWVudHNMaXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NdnBUb3VybmFtZW50c0xpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL012cFRvdXJuYW1lbnRzTGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MThjMTU5MGYmXCIiLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgU1RFQU1fTE9HSU5fTElOSzogJ2h0dHBzOi8vc3RlYW1jb21tdW5pdHkuY29tL29wZW5pZC9sb2dpbj9vcGVuaWQubnM9aHR0cCUzQSUyRiUyRnNwZWNzLm9wZW5pZC5uZXQlMkZhdXRoJTJGMi4wJm9wZW5pZC5tb2RlPWNoZWNraWRfc2V0dXAmb3BlbmlkLnJldHVybl90bz1odHRwcyUzQSUyRiUyRmNoYW1wcy5wcm8lMkZydSUyRm9hdXRoJTJGc3RlYW0lM0ZzdGF0ZT1zdGVhbSZvcGVuaWQucmVhbG09aHR0cHMlM0ElMkYlMkZjaGFtcHMucHJvJTJGcnUlMkZvYXV0aCUyRnN0ZWFtJm9wZW5pZC5ucy5zcmVnPWh0dHAlM0ElMkYlMkZvcGVuaWQubmV0JTJGZXh0ZW5zaW9ucyUyRnNyZWclMkYxLjEmb3BlbmlkLmNsYWltZWRfaWQ9aHR0cCUzQSUyRiUyRnNwZWNzLm9wZW5pZC5uZXQlMkZhdXRoJTJGMi4wJTJGaWRlbnRpZmllcl9zZWxlY3Qmb3BlbmlkLmlkZW50aXR5PWh0dHAlM0ElMkYlMkZzcGVjcy5vcGVuaWQubmV0JTJGYXV0aCUyRjIuMCUyRmlkZW50aWZpZXJfc2VsZWN0Jyxcbn0iLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImxvYWRpbmdpby1zcGlubmVyLWdlYXItbXRwaHdnb3k3OWVcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImxkaW8tcnd1dmFydm5wMXNcIj5cbiAgICAgICAgICAgIDxkaXY+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6IFwiTG9hZFwiXG4gICAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4gICAgQGtleWZyYW1lcyBsZGlvLXJ3dXZhcnZucDFzIHtcbiAgICAgICAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKSB9XG4gICAgICAgIDUwJSB7IHRyYW5zZm9ybTogcm90YXRlKDIyLjVkZWcpIH1cbiAgICAgICAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSB9XG4gICAgfVxuICAgIC5sZGlvLXJ3dXZhcnZucDFzID4gZGl2IHtcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMTAwcHggMTAwcHg7XG4gICAgICAgIGFuaW1hdGlvbjogbGRpby1yd3V2YXJ2bnAxcyAwLjJzIGluZmluaXRlIGxpbmVhcjtcbiAgICB9XG4gICAgLmxkaW8tcnd1dmFydm5wMXMgPiBkaXYgZGl2IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMjJweDtcbiAgICAgICAgaGVpZ2h0OiAxNTJweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmODUwMDtcbiAgICAgICAgbGVmdDogMTAwcHg7XG4gICAgICAgIHRvcDogMTAwcHg7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG4gICAgfVxuICAgIC5sZGlvLXJ3dXZhcnZucDFzID4gZGl2IGRpdjpudGgtY2hpbGQoMSkge1xuICAgICAgICB3aWR0aDogMTIwcHg7XG4gICAgICAgIGhlaWdodDogMTIwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB9XG4gICAgLmxkaW8tcnd1dmFydm5wMXMgPiBkaXYgZGl2Om50aC1jaGlsZCg2KSB7XG4gICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB9LmxkaW8tcnd1dmFydm5wMXMgPiBkaXYgZGl2Om50aC1jaGlsZCgzKSB7XG4gICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpIHJvdGF0ZSg0NWRlZylcbiAgICAgfS5sZGlvLXJ3dXZhcnZucDFzID4gZGl2IGRpdjpudGgtY2hpbGQoNCkge1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSkgcm90YXRlKDkwZGVnKVxuICAgICAgfS5sZGlvLXJ3dXZhcnZucDFzID4gZGl2IGRpdjpudGgtY2hpbGQoNSkge1xuICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpIHJvdGF0ZSgxMzVkZWcpXG4gICAgICAgfVxuICAgIC5sb2FkaW5naW8tc3Bpbm5lci1nZWFyLW10cGh3Z295NzllIHtcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgfVxuICAgIC5sZGlvLXJ3dXZhcnZucDFzIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCkgc2NhbGUoMSk7XG4gICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMCAwOyAvKiBzZWUgbm90ZSBhYm92ZSAqL1xuICAgIH1cbiAgICAubGRpby1yd3V2YXJ2bnAxcyBkaXYgeyBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgfVxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cInNsaWRlc1wiPlxuICAgICAgICA8bG9naW5cbiAgICAgICAgICAgICAgICB2LXNob3c9XCJjaGVja1N0ZXAoJ2xvZ2luJylcIlxuICAgICAgICAgICAgICAgIEBzZXRTdGVwPVwic2V0U3RlcFwiXG4gICAgICAgICAgICAgICAgQGF1dGhMb2dpbj1cImF1dGhMb2dpblwiXG4gICAgICAgICAgICAgICAgQGNsb3NlPVwiY2xvc2VcIlxuICAgICAgICAgICAgICAgIEBpbnB1dEVtYWlsPVwiKHZhbHVlKSA9PiB7ZW1haWwgPSB2YWx1ZX1cIlxuICAgICAgICAgICAgICAgIEBpbnB1dFBhc3N3b3JkPVwiKHZhbHVlKSA9PiB7cGFzc3dvcmQgPSB2YWx1ZX1cIlxuICAgICAgICAgICAgICAgIDplcnJvcj1cImVycm9yXCJcbiAgICAgICAgICAgICAgICA6ZW1haWw9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgOmNoZWNrPVwicGFzc3dvcmRcIj5cbiAgICAgICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgICAgPC9sb2dpbj5cbiAgICAgICAgPHJlZ2lzdHJhdGlvblxuICAgICAgICAgICAgICAgIHYtc2hvdz1cImNoZWNrU3RlcCgncmVnaXN0cmF0aW9uJylcIlxuICAgICAgICAgICAgICAgIEBzZXRTdGVwPVwic2V0U3RlcFwiXG4gICAgICAgICAgICAgICAgQGNsb3NlPVwiY2xvc2VcIlxuICAgICAgICAgICAgICAgIEBpbnB1dEVtYWlsPVwiKHZhbHVlKSA9PiB7ZW1haWwgPSB2YWx1ZX1cIlxuICAgICAgICAgICAgICAgIEBpbnB1dFBhc3N3b3JkPVwiKHZhbHVlKSA9PiB7cGFzc3dvcmQgPSB2YWx1ZX1cIlxuICAgICAgICAgICAgICAgIEBpbnB1dD1cIih2YWx1ZSkgPT4ge2NoZWNrID0gdmFsdWV9XCJcbiAgICAgICAgICAgICAgICBAc2VuZENvbmZpcm1Db2RlPVwic2VuZENvbmZpcm1Db2RlXCJcbiAgICAgICAgICAgICAgICA6ZW1haWw9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgOnBhc3N3b3JkPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIDpjaGVjaz1cImNoZWNrXCI+XG4gICAgICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICAgIDwvcmVnaXN0cmF0aW9uPlxuICAgICAgICA8Y29uZmlybS1jb2RlXG4gICAgICAgICAgICAgICAgdi1zaG93PVwiY2hlY2tTdGVwKCdjb25maXJtQ29kZScpXCJcbiAgICAgICAgICAgICAgICBAc2V0U3RlcD1cInNldFN0ZXBcIlxuICAgICAgICAgICAgICAgIEBjbG9zZT1cImNsb3NlXCJcbiAgICAgICAgICAgICAgICBAcmVnaXN0cmF0aW9uPVwicmVnaXN0cmF0aW9uXCJcbiAgICAgICAgICAgICAgICBAc2VuZENvbmZpcm1Db2RlPVwic2VuZENvbmZpcm1Db2RlXCJcbiAgICAgICAgICAgICAgICA6Y29kZUNvbmZpcm1lZD1cImNvZGVDb25maXJtZWRcIlxuICAgICAgICAgICAgICAgIDplbWFpbD1cImVtYWlsXCI+XG4gICAgICAgIDwvY29uZmlybS1jb2RlPlxuICAgICAgICA8bmljay1uYW1lXG4gICAgICAgICAgICAgICAgdi1zaG93PVwiY2hlY2tTdGVwKCduaWNrbmFtZScpXCJcbiAgICAgICAgICAgICAgICBAc2V0U3RlcD1cInNldFN0ZXBcIlxuICAgICAgICAgICAgICAgIEBjbG9zZT1cImNsb3NlXCJcbiAgICAgICAgICAgICAgICA6ZW1haWw9XCJlbWFpbFwiPlxuICAgICAgICA8L25pY2stbmFtZT5cbiAgICAgICAgPGNvbmdyYXR1bGF0aW9uXG4gICAgICAgICAgICAgICAgdi1zaG93PVwiY2hlY2tTdGVwKCdjb25ncmF0dWxhdGlvbicpXCJcbiAgICAgICAgICAgICAgICBAc2V0U3RlcD1cInNldFN0ZXBcIlxuICAgICAgICAgICAgICAgIEBjbG9zZT1cImNsb3NlXCI+XG4gICAgICAgIDwvY29uZ3JhdHVsYXRpb24+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBOaWNrbmFtZUZvcm0gZnJvbSBcIi4vbG9naW4vTmlja25hbWVGb3JtXCI7XG4gICAgaW1wb3J0IENvbmZpcm1Db2RlRm9ybSBmcm9tIFwiLi9sb2dpbi9Db25maXJtQ29kZUZvcm1cIjtcbiAgICBpbXBvcnQgUmVnaXN0cmF0aW9uRm9ybSBmcm9tIFwiLi9sb2dpbi9SZWdpc3RyYXRpb25Gb3JtXCI7XG4gICAgaW1wb3J0IExvZ2luRm9ybSBmcm9tIFwiLi9sb2dpbi9Mb2dpbkZvcm1cIjtcbiAgICBpbXBvcnQgQ29uZ3JhdHVsYXRpb25zRm9ybSBmcm9tIFwiLi9sb2dpbi9Db25ncmF0dWxhdGlvbnNGb3JtXCI7XG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6IFwiTG9naW5Nb2RhbFwiLFxuICAgICAgICBpbmplY3Q6IFtcbiAgICAgICAgICAgICdheGlvcycsXG4gICAgICAgICAgICAnY29uZmlnJ1xuICAgICAgICBdLFxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgc2hvdzogQm9vbGVhbixcbiAgICAgICAgICAgIHJlZGlyZWN0OiB7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDogbnVsbFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNob3dGaXJzdDoge1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICdsb2dpbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGEoKXtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZXJyb3I6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHN0ZXA6ICdyZWdpc3RyYXRpb24nLFxuICAgICAgICAgICAgICAgIGVtYWlsOiBudWxsLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBudWxsLFxuICAgICAgICAgICAgICAgIGNoZWNrOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBjb25maXJtQ29kZTogbnVsbCxcbiAgICAgICAgICAgICAgICBjb2RlQ29uZmlybWVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IG51bGwsXG4gICAgICAgICAgICAgICAgc3VjY2Vzc01lc3NhZ2U6IG51bGwsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICAgICduaWNrLW5hbWUnOiBOaWNrbmFtZUZvcm0sXG4gICAgICAgICAgICAnY29uZmlybS1jb2RlJzogQ29uZmlybUNvZGVGb3JtLFxuICAgICAgICAgICAgJ3JlZ2lzdHJhdGlvbic6IFJlZ2lzdHJhdGlvbkZvcm0sXG4gICAgICAgICAgICAnbG9naW4nOiBMb2dpbkZvcm0sXG4gICAgICAgICAgICAnY29uZ3JhdHVsYXRpb24nOiBDb25ncmF0dWxhdGlvbnNGb3JtXG4gICAgICAgIH0sXG4gICAgICAgIHdhdGNoOiB7XG4gICAgICAgICAgICBzaG93KCl7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGVwID0gdGhpcy5zaG93Rmlyc3Q7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3RlcChuZXdTdGVwKXtcbiAgICAgICAgICAgICAgICBpZiAobmV3U3RlcCA9PT0gJ2ZpbmlzaCcpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dGhMb2dpbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgc2V0U3RlcChzdGVwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGVwID0gc3RlcDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhdXRoTG9naW4oKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnMTIzJylcbiAgICAgICAgICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcblxuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZW1haWwnLCB0aGlzLmVtYWlsKTtcbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3Bhc3N3b3JkJywgdGhpcy5wYXNzd29yZCk7XG4gICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdfY3NyZl90b2tlbicsIHRoaXMuYXhpb3MuX2NzcmZfdG9rZW4pO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5heGlvcy5wb3N0KCcvcnUvbG9naW4nLCBmb3JtRGF0YSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5kYXRhLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvciA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlZGlyZWN0ICE9PSBudWxsKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmFzc2lnbih0aGlzLnJlZGlyZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlZ2lzdHJhdGlvbigpe1xuICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG5cbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3VzZXJbZW1haWxdJywgdGhpcy5lbWFpbCk7XG4gICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCd1c2VyW3Bhc3N3b3JkXVtmaXJzdF0nLCB0aGlzLnBhc3N3b3JkKTtcbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3VzZXJbcGFzc3dvcmRdW3NlY29uZF0nLCB0aGlzLnBhc3N3b3JkKTtcbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ19jc3JmX3Rva2VuJywgdGhpcy5heGlvcy5fY3NyZl90b2tlbik7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmF4aW9zLnBvc3QoJy9ydS9yZWdpc3RyYXRpb24nLCBmb3JtRGF0YSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5kYXRhLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvciA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbG9zZSgpe1xuICAgICAgICAgICAgICAgIHRoaXMuJHBhcmVudC5zaG93ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93ID0gZmFsc2U7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2hlY2tTdGVwKHN0ZXApe1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNob3cgJiYgdGhpcy5zdGVwID09PSBzdGVwO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlbmRDb25maXJtQ29kZSgpe1xuICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdlbWFpbCcsIHRoaXMuZW1haWwpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5heGlvcy5wb3N0KCcvcnUvZ2VuZXJhdGUvY29uZmlybS9jb2RlJywgZm9ybURhdGEpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNvbnRlbnQpXG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XG4gICAgPHRyYW5zaXRpb24gbmFtZT1cInNsaWRlLWZhZGVzXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbl9mb3JtXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW5fYmxvY2tcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9nb3R5cGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL0NoYW1wc19sb2dvdHlwZS5zdmdcIiBjbGFzcz1cImxvZ290eXBlXCIvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbl90aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICDQn9C+0LTRgtCy0LXRgNC20LTQtdC90LjQtSDQv9C+0YfRgtGLXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvZ2luX2lucHV0IGQtZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiByZXF1aXJlZCB2LW1vZGVsPVwiY29uZmlybUNvZGVcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPtCa0L7QtCDQv9C+0LTRgtCy0LXRgNC20LTQtdC90LjRjzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInF1ZXN0aW9uIHB0LTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1wbGFjZW1lbnQ9XCJyaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCLQndC1INC/0YDQuNGI0LXQuyDQutC+0LQ/INCf0YDQvtCy0LXRgNGM0YLQtSDQv9Cw0L/QutGDINCh0L/QsNC8INC40LvQuCDQv9C+0L/Ri9GC0LDQudGC0LXRgdGMINC+0YLQv9GA0LDQstC40YLRjCDQtdGJ0LUg0YDQsNC3LlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXF1ZXN0aW9uXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VuZFwiIEBjbGljaz1cInNlbmRSZWdpc3RyYXRpb25Db25maXJtXCI+XG4gICAgICAgICAgICAgICAgICAgINCe0YLQv9GA0LDQstC40YLRjFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZW5kIHJlc2VuZFwiXG4gICAgICAgICAgICAgICAgICAgICB2LWlmPVwic3VjY2Vzc01lc3NhZ2UgPT0gbnVsbFwiXG4gICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJyZXNlbmRDb25maXJtQ29kZVwiXG4gICAgICAgICAgICAgICAgICAgICB2LWh0bWw9XCIn0J7RgtC/0YDQsNCy0LjRgtGMINC60L7QtCDQv9C+0LLRgtC+0YDQvdC+ICcgKyB0aW1lck1lc3NhZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwie2Rpc2FibGVkOiB0aW1lciA+IDB9XCI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVycm9yXCIgdi1pZj1cImVycm9yTWVzc2FnZSAhPT0gbnVsbFwiPlxuICAgICAgICAgICAgICAgICAgICB7eyBlcnJvck1lc3NhZ2UgfX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXJyb3IgdGV4dC1zdWNjZXNzXCIgdi1pZj1cInN1Y2Nlc3NNZXNzYWdlICE9PSBudWxsXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7IHN1Y2Nlc3NNZXNzYWdlIH19XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpbmtzIGQtZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXQtMVwiIEBjbGljaz1cIiRlbWl0KCdzZXRTdGVwJywgJ3JlZ2lzdHJhdGlvbicpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5CYWNrPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm10LTFcIiAgQGNsaWNrPVwic2hvd05pY2tuYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiA6Y2xhc3M9XCJ7ZGlzYWJsZWQ6ICFjb2RlQ29uZmlybWVkfVwiPk5leHQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbG9zZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHN2ZyBAY2xpY2s9XCJjbG9zZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiBmaWxsPVwibm9uZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk04Ljg4MzkyIDguMDAwMDRMMTUuODE2OSAxLjA2Njk4QzE2LjA2MSAwLjgyMjg4MiAxNi4wNjEgMC40MjcxMzMgMTUuODE2OSAwLjE4MzA3QzE1LjU3MjggLTAuMDYwOTkyMiAxNS4xNzcxIC0wLjA2MTAyMzQgMTQuOTMzIDAuMTgzMDdMNy45OTk5OCA3LjExNjEzTDEuMDY2OTcgMC4xODMwN0MwLjgyMjg4IC0wLjA2MTAyMzQgMC40MjcxMzIgLTAuMDYxMDIzNCAwLjE4MzA3IDAuMTgzMDdDLTAuMDYwOTkyIDAuNDI3MTY0IC0wLjA2MTAyMzMgMC44MjI5MTQgMC4xODMwNyAxLjA2Njk4TDcuMTE2MDggOEwwLjE4MzA3IDE0LjkzMzFDLTAuMDYxMDIzMyAxNS4xNzcyIC0wLjA2MTAyMzMgMTUuNTcyOSAwLjE4MzA3IDE1LjgxN0MwLjMwNTEwMSAxNS45MzkgMC40NjUwNjkgMTYgMC42MjUwMzcgMTZDMC43ODUwMDUgMTYgMC45NDQ5NDMgMTUuOTM5IDEuMDY3IDE1LjgxN0w3Ljk5OTk4IDguODgzOTRMMTQuOTMzIDE1LjgxN0MxNS4wNTUgMTUuOTM5IDE1LjIxNSAxNiAxNS4zNzUgMTZDMTUuNTM0OSAxNiAxNS42OTQ5IDE1LjkzOSAxNS44MTY5IDE1LjgxN0MxNi4wNjEgMTUuNTcyOSAxNi4wNjEgMTUuMTc3MSAxNS44MTY5IDE0LjkzMzFMOC44ODM5MiA4LjAwMDA0WlwiIGZpbGw9XCIjODY4ODhBXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L3RyYW5zaXRpb24+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbmFtZTogXCJDb25maXJtQ29kZUZvcm1cIixcbiAgICAgICAgaW5qZWN0OiBbXG4gICAgICAgICAgICAnYXhpb3MnLFxuICAgICAgICAgICAgJ2NvbmZpZydcbiAgICAgICAgXSxcbiAgICAgICAgcHJvcHM6IFtcbiAgICAgICAgICAgICdlbWFpbCcsXG4gICAgICAgIF0sXG4gICAgICAgIGRhdGEoKXtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY29kZUNvbmZpcm1lZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgY29uZmlybUNvZGU6IG51bGwsXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBudWxsLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3NNZXNzYWdlOiBudWxsLFxuICAgICAgICAgICAgICAgIHRpbWVyOiAwLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgdGltZXJNZXNzYWdlKCkge1xuICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlID0gJyc7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy50aW1lciA+IDApe1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gYNGH0LXRgNC10LcgPHN0cm9uZz4ke3RoaXMudGltZXJ9PC9zdHJvbmc+INGB0LXQumA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBtZXNzYWdlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIHNlbmRSZWdpc3RyYXRpb25Db25maXJtKCl7XG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMuc3VjY2Vzc01lc3NhZ2UgPSBudWxsO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcblxuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgndXNlcltjb2RlXScsIHRoaXMuY29uZmlybUNvZGUpO1xuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgndXNlcltlbWFpbF0nLCB0aGlzLmVtYWlsKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuYXhpb3MucG9zdCgnL3J1L2NoZWNrL2NvbmZpcm0vY29kZScsIGZvcm1EYXRhKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigoe2RhdGF9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Y2Nlc3NNZXNzYWdlID0gZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29kZUNvbmZpcm1lZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3JlZ2lzdHJhdGlvbicpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdzZXRTdGVwJywgJ25pY2tuYW1lJylcbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKHtyZXNwb25zZX0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29kZUNvbmZpcm1lZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNob3dOaWNrbmFtZSgpe1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvZGVDb25maXJtZWQpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdzZXRTdGVwJywgJ25pY2tuYW1lJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2xvc2UoKXtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdjbG9zZScpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVzZW5kQ29uZmlybUNvZGUoKXtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50aW1lciA9PT0gMCl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGltZXIgPSAzMDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ydW5UaW1lcigpXG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnc2VuZENvbmZpcm1Db2RlJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcnVuVGltZXIoKXtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICAgICAgICAgIGlmIChzZWxmLnRpbWVyID4gMCl7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi50aW1lciAtPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5ydW5UaW1lcigpXG4gICAgICAgICAgICAgICAgICAgIH0sIDEwMDApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICAgJCgnW2RhdGEtdG9nZ2xlPVwidG9vbHRpcFwiXScpLnRvb2x0aXAoKVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4gICAgLnF1ZXN0aW9ue1xuICAgICAgICBvcGFjaXR5OiAuNTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyOiAwIHNvbGlkO1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgIH1cbiAgICAucXVlc3Rpb246aG92ZXJ7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIC5sb2dpbl9mb3JtIC5sb2dpbl9ibG9jayAucmVzZW5ke1xuICAgICAgICBtYXJnaW4tdG9wOiAwLjV2dztcbiAgICAgICAgbWFyZ2luLXRvcDogMC41dnc7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAwLjV2dyAwO1xuICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgYm9yZGVyOiAwLjA0dncgc29saWQgI0NGRENGMztcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiAgICAgICAgZm9udC1zaXplOiAwLjd2dztcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDV2dztcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICAgIH1cbiAgICAubG9naW5fZm9ybSAubG9naW5fYmxvY2sgLnJlc2VuZC5kaXNhYmxlZHtcbiAgICAgICAgb3BhY2l0eTogLjU7XG4gICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgfVxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XG4gICAgPHRyYW5zaXRpb24gbmFtZT1cInNsaWRlLWZhZGVzXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbl9mb3JtXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW5fYmxvY2tcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9nb3R5cGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL0NoYW1wc19sb2dvdHlwZS5zdmdcIiBjbGFzcz1cImxvZ290eXBlXCIvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbl90aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICDQn9C+0LfQtNGA0LDQstC70Y/QtdC8INGBINGD0YHQv9C10YjQvdC+0Lkg0YDQtdCz0LXRgdGC0YDQsNGG0LjQtdC5IVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZW5kXCIgQGNsaWNrPVwiJGVtaXQoJ3NldFN0ZXAnLCAnZmluaXNoJylcIj5cbiAgICAgICAgICAgICAgICAgICAg0JjQs9GA0LDRgtGMXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNsb3NlZFwiICBAY2xpY2s9XCIkZW1pdCgnY2xvc2UnKVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgZmlsbD1cIm5vbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNOC44ODM5MiA4LjAwMDA0TDE1LjgxNjkgMS4wNjY5OEMxNi4wNjEgMC44MjI4ODIgMTYuMDYxIDAuNDI3MTMzIDE1LjgxNjkgMC4xODMwN0MxNS41NzI4IC0wLjA2MDk5MjIgMTUuMTc3MSAtMC4wNjEwMjM0IDE0LjkzMyAwLjE4MzA3TDcuOTk5OTggNy4xMTYxM0wxLjA2Njk3IDAuMTgzMDdDMC44MjI4OCAtMC4wNjEwMjM0IDAuNDI3MTMyIC0wLjA2MTAyMzQgMC4xODMwNyAwLjE4MzA3Qy0wLjA2MDk5MiAwLjQyNzE2NCAtMC4wNjEwMjMzIDAuODIyOTE0IDAuMTgzMDcgMS4wNjY5OEw3LjExNjA4IDhMMC4xODMwNyAxNC45MzMxQy0wLjA2MTAyMzMgMTUuMTc3MiAtMC4wNjEwMjMzIDE1LjU3MjkgMC4xODMwNyAxNS44MTdDMC4zMDUxMDEgMTUuOTM5IDAuNDY1MDY5IDE2IDAuNjI1MDM3IDE2QzAuNzg1MDA1IDE2IDAuOTQ0OTQzIDE1LjkzOSAxLjA2NyAxNS44MTdMNy45OTk5OCA4Ljg4Mzk0TDE0LjkzMyAxNS44MTdDMTUuMDU1IDE1LjkzOSAxNS4yMTUgMTYgMTUuMzc1IDE2QzE1LjUzNDkgMTYgMTUuNjk0OSAxNS45MzkgMTUuODE2OSAxNS44MTdDMTYuMDYxIDE1LjU3MjkgMTYuMDYxIDE1LjE3NzEgMTUuODE2OSAxNC45MzMxTDguODgzOTIgOC4wMDAwNFpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiM4Njg4OEFcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvdHJhbnNpdGlvbj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiBcIkNvbmdyYXR1bGF0aW9uc0Zvcm1cIixcblxuICAgIH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cbiAgICA8dHJhbnNpdGlvbiBuYW1lPVwic2xpZGUtZmFkZXNcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImxvZ2luX2Zvcm1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbl9ibG9ja1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2dvdHlwZVwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvQ2hhbXBzX2xvZ290eXBlLnN2Z1wiIGNsYXNzPVwibG9nb3R5cGVcIi8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvZ2luX3RpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgINCS0YXQvtC0INCyINC70LjRh9C90YvQuSDQutCw0LHQuNC90LXRglxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbl9pbnB1dFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgOnZhbHVlPVwiZW1haWxcIiAgQGlucHV0PVwiJGVtaXQoJ2lucHV0RW1haWwnLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVwiLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+0JDQtNGA0LXRgSDRjdC70LXQutGC0YDQvtC90L3QvtC5INC/0L7Rh9GC0Ys8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvZ2luX2lucHV0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiA6dmFsdWU9XCJwYXNzd29yZFwiICBAaW5wdXQ9XCIkZW1pdCgnaW5wdXRQYXNzd29yZCcsICRldmVudC50YXJnZXQudmFsdWUpXCIvPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj7Qn9Cw0YDQvtC70Yw8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlbmRcIiBAY2xpY2s9XCIkZW1pdCgnYXV0aExvZ2luJylcIj5cbiAgICAgICAgICAgICAgICAgICAg0JLQvtC50YLQuFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlcnJvclwiIHYtaWY9XCJlcnJvclwiPlxuICAgICAgICAgICAgICAgICAgICDQndC10L/RgNCw0LLQuNC70YzQvdGL0Lkg0LvQvtCz0LjQvSDQuNC70Lgg0L/QsNGA0L7Qu9GMXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN1YnRleHRcIj7QmNC70Lgg0LLQvtC50LTQuNGC0LUg0YEg0L/QvtC80L7RidGM0Y48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWx0ZXJuYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlua3NcIiBAY2xpY2s9XCIkZW1pdCgnc2V0U3RlcCcsICdyZWdpc3RyYXRpb24nKVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+0KDQtdCz0LjRgdGC0YDQsNGG0LjRjzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNsb3NlZFwiIEBjbGljaz1cIiRlbWl0KCdjbG9zZScpXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiBmaWxsPVwibm9uZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk04Ljg4MzkyIDguMDAwMDRMMTUuODE2OSAxLjA2Njk4QzE2LjA2MSAwLjgyMjg4MiAxNi4wNjEgMC40MjcxMzMgMTUuODE2OSAwLjE4MzA3QzE1LjU3MjggLTAuMDYwOTkyMiAxNS4xNzcxIC0wLjA2MTAyMzQgMTQuOTMzIDAuMTgzMDdMNy45OTk5OCA3LjExNjEzTDEuMDY2OTcgMC4xODMwN0MwLjgyMjg4IC0wLjA2MTAyMzQgMC40MjcxMzIgLTAuMDYxMDIzNCAwLjE4MzA3IDAuMTgzMDdDLTAuMDYwOTkyIDAuNDI3MTY0IC0wLjA2MTAyMzMgMC44MjI5MTQgMC4xODMwNyAxLjA2Njk4TDcuMTE2MDggOEwwLjE4MzA3IDE0LjkzMzFDLTAuMDYxMDIzMyAxNS4xNzcyIC0wLjA2MTAyMzMgMTUuNTcyOSAwLjE4MzA3IDE1LjgxN0MwLjMwNTEwMSAxNS45MzkgMC40NjUwNjkgMTYgMC42MjUwMzcgMTZDMC43ODUwMDUgMTYgMC45NDQ5NDMgMTUuOTM5IDEuMDY3IDE1LjgxN0w3Ljk5OTk4IDguODgzOTRMMTQuOTMzIDE1LjgxN0MxNS4wNTUgMTUuOTM5IDE1LjIxNSAxNiAxNS4zNzUgMTZDMTUuNTM0OSAxNiAxNS42OTQ5IDE1LjkzOSAxNS44MTY5IDE1LjgxN0MxNi4wNjEgMTUuNTcyOSAxNi4wNjEgMTUuMTc3MSAxNS44MTY5IDE0LjkzMzFMOC44ODM5MiA4LjAwMDA0WlwiIGZpbGw9XCIjODY4ODhBXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L3RyYW5zaXRpb24+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbmFtZTogXCJMb2dpbkZvcm1cIixcbiAgICAgICAgaW5qZWN0OiBbXG4gICAgICAgICAgICAnY29uZmlnJ1xuICAgICAgICBdLFxuICAgICAgICBwcm9wczogW1xuICAgICAgICAgICAgJ2Vycm9yJ1xuICAgICAgICBdLFxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgc3RlYW1Mb2dpbkxpbmsoKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb25maWcuU1RFQU1fTE9HSU5fTElOSztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9XG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XG4gICAgPHRyYW5zaXRpb24gbmFtZT1cInNsaWRlLWZhZGVzXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbl9mb3JtXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW5fYmxvY2tcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9nb3R5cGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL0NoYW1wc19sb2dvdHlwZS5zdmdcIiBjbGFzcz1cImxvZ290eXBlXCIvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbl90aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICDQktCy0LXQtNC40YLQtSDRgdCy0L7QuSDQvdC40LrQvdC10LnQvFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbl9pbnB1dFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZW1haWxcIiByZXF1aXJlZCB2LW1vZGVsPVwibmlja25hbWVcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPtCb0L7Qs9C40L0gKE5pY2tuYW1lKTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXJyb3JcIiB2LWlmPVwiZXJyb3JNZXNzYWdlICE9PSBudWxsXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7IGVycm9yTWVzc2FnZSB9fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZW5kXCIgQGNsaWNrPVwic2V0Tmlja25hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAg0JfQsNCy0LXRgNGI0LjRgtGMINGA0LXQs9C10YHRgtGA0LDRhtC40Y5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2xvc2VkXCIgQGNsaWNrPVwiY2xvc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgdmlld0JveD1cIjAgMCAxNiAxNlwiIGZpbGw9XCJub25lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTguODgzOTIgOC4wMDAwNEwxNS44MTY5IDEuMDY2OThDMTYuMDYxIDAuODIyODgyIDE2LjA2MSAwLjQyNzEzMyAxNS44MTY5IDAuMTgzMDdDMTUuNTcyOCAtMC4wNjA5OTIyIDE1LjE3NzEgLTAuMDYxMDIzNCAxNC45MzMgMC4xODMwN0w3Ljk5OTk4IDcuMTE2MTNMMS4wNjY5NyAwLjE4MzA3QzAuODIyODggLTAuMDYxMDIzNCAwLjQyNzEzMiAtMC4wNjEwMjM0IDAuMTgzMDcgMC4xODMwN0MtMC4wNjA5OTIgMC40MjcxNjQgLTAuMDYxMDIzMyAwLjgyMjkxNCAwLjE4MzA3IDEuMDY2OThMNy4xMTYwOCA4TDAuMTgzMDcgMTQuOTMzMUMtMC4wNjEwMjMzIDE1LjE3NzIgLTAuMDYxMDIzMyAxNS41NzI5IDAuMTgzMDcgMTUuODE3QzAuMzA1MTAxIDE1LjkzOSAwLjQ2NTA2OSAxNiAwLjYyNTAzNyAxNkMwLjc4NTAwNSAxNiAwLjk0NDk0MyAxNS45MzkgMS4wNjcgMTUuODE3TDcuOTk5OTggOC44ODM5NEwxNC45MzMgMTUuODE3QzE1LjA1NSAxNS45MzkgMTUuMjE1IDE2IDE1LjM3NSAxNkMxNS41MzQ5IDE2IDE1LjY5NDkgMTUuOTM5IDE1LjgxNjkgMTUuODE3QzE2LjA2MSAxNS41NzI5IDE2LjA2MSAxNS4xNzcxIDE1LjgxNjkgMTQuOTMzMUw4Ljg4MzkyIDguMDAwMDRaXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjODY4ODhBXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L3RyYW5zaXRpb24+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbmFtZTogXCJOaWNrbmFtZUZvcm1cIixcbiAgICAgICAgaW5qZWN0OiBbXG4gICAgICAgICAgICAnYXhpb3MnLFxuICAgICAgICAgICAgJ2NvbmZpZydcbiAgICAgICAgXSxcbiAgICAgICAgcHJvcHM6IFtcbiAgICAgICAgICAgICdlbWFpbCcsXG4gICAgICAgIF0sXG4gICAgICAgIGRhdGEoKXtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbmlja25hbWU6IG51bGwsXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBudWxsLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBzZXROaWNrbmFtZSgpe1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiB0aGlzLmVtYWlsLFxuICAgICAgICAgICAgICAgICAgICBuaWNrbmFtZTogdGhpcy5uaWNrbmFtZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmF4aW9zLnBvc3QoJy9ydS91c2VyL3NldC9uaWNrbmFtZScsIGRhdGEpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCh7ZGF0YX0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3NldFN0ZXAnLCAnY29uZ3JhdHVsYXRpb24nKVxuICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoe3Jlc3BvbnNlfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSByZXNwb25zZS5kYXRhXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2xvc2UoKXtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdjbG9zZScpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cblxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XG4gICAgPHRyYW5zaXRpb24gbmFtZT1cInNsaWRlLWZhZGVzXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbl9mb3JtXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW5fcmVxXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvZ2luX2Jsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2dvdHlwZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL0NoYW1wc19sb2dvdHlwZS5zdmdcIiBjbGFzcz1cImxvZ290eXBlXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvZ2luX3RpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICDQoNC10LPQuNGB0YLRgNCw0YbQuNGPXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW5faW5wdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6dmFsdWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGlucHV0PVwiJGVtaXQoJ2lucHV0RW1haWwnLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPtCQ0LTRgNC10YEg0Y3Qu9C10LrRgtGA0L7QvdC90L7QuSDQv9C+0YfRgtGLPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvZ2luX2lucHV0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDp2YWx1ZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAaW5wdXQ9XCIkZW1pdCgnaW5wdXRQYXNzd29yZCcsICRldmVudC50YXJnZXQudmFsdWUpXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+0J/QsNGA0L7Qu9GMPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvZ2luX2NoZWNrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjaGVja2VkPVwiY2hlY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2hhbmdlPVwiJGVtaXQoJ2lucHV0JywgJGV2ZW50LnRhcmdldC52YWx1ZSlcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9ydS90ZXJtcy1vZi11c2VcIiB0YXJnZXQ9XCJfYmxhbmtcIj7QntC30L3QsNC60L7QvNC70LXQvSDRgSDQv9GA0LDQstC40LvQsNC80Lgg0LjRgdC/0L7Qu9GM0LfQvtCy0LDQvdC40Y8g0YHQtdGA0LLQuNGB0LAgwqtDaGFtcHPCuzwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZW5kXCIgQGNsaWNrPVwiY2hlY2tJc0VtYWlsVmFsaWRcIiA6c3R5bGU9XCJ7b3BhY2l0eTogJHBhcmVudC5jaGVjayA/ICcxJzogJy41J31cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgINCX0LDRgNC10LPQuNGB0YLRgNC40YDQvtCy0LDRgtGM0YHRj1xuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVycm9yXCIgdi1pZj1cImVycm9yTWVzc2FnZSAhPT0gbnVsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3sgZXJyb3JNZXNzYWdlIH19XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3VidGV4dFwiPtCY0LvQuCDQstC+0LnQtNC40YLQtSDRgSDQv9C+0LzQvtGJ0YzRjjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWx0ZXJuYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlua3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gQGNsaWNrPVwiJGVtaXQoJ3NldFN0ZXAnLCAnbG9naW4nKVwiPtCS0YXQvtC0INCyINC70LjRh9C90YvQuSDQutCw0LHQuNC90LXRgjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNsb3NlZFwiIEBjbGljaz1cImNsb3NlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgZmlsbD1cIm5vbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTguODgzOTIgOC4wMDAwNEwxNS44MTY5IDEuMDY2OThDMTYuMDYxIDAuODIyODgyIDE2LjA2MSAwLjQyNzEzMyAxNS44MTY5IDAuMTgzMDdDMTUuNTcyOCAtMC4wNjA5OTIyIDE1LjE3NzEgLTAuMDYxMDIzNCAxNC45MzMgMC4xODMwN0w3Ljk5OTk4IDcuMTE2MTNMMS4wNjY5NyAwLjE4MzA3QzAuODIyODggLTAuMDYxMDIzNCAwLjQyNzEzMiAtMC4wNjEwMjM0IDAuMTgzMDcgMC4xODMwN0MtMC4wNjA5OTIgMC40MjcxNjQgLTAuMDYxMDIzMyAwLjgyMjkxNCAwLjE4MzA3IDEuMDY2OThMNy4xMTYwOCA4TDAuMTgzMDcgMTQuOTMzMUMtMC4wNjEwMjMzIDE1LjE3NzIgLTAuMDYxMDIzMyAxNS41NzI5IDAuMTgzMDcgMTUuODE3QzAuMzA1MTAxIDE1LjkzOSAwLjQ2NTA2OSAxNiAwLjYyNTAzNyAxNkMwLjc4NTAwNSAxNiAwLjk0NDk0MyAxNS45MzkgMS4wNjcgMTUuODE3TDcuOTk5OTggOC44ODM5NEwxNC45MzMgMTUuODE3QzE1LjA1NSAxNS45MzkgMTUuMjE1IDE2IDE1LjM3NSAxNkMxNS41MzQ5IDE2IDE1LjY5NDkgMTUuOTM5IDE1LjgxNjkgMTUuODE3QzE2LjA2MSAxNS41NzI5IDE2LjA2MSAxNS4xNzcxIDE1LjgxNjkgMTQuOTMzMUw4Ljg4MzkyIDguMDAwMDRaXCIgZmlsbD1cIiM4Njg4OEFcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvZ2luX3JlcV9ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+0KLRgNC10L3QtdGA0YPQudGC0LXRgdGMINCy0LzQtdGB0YLQtSDRgSDQu9GD0YfRiNC40LzQuCDQuNCz0YDQvtC60LDQvNC4INCyINCy0LDRiNC40YUg0LvRjtCx0LjQvNGL0YUg0LjQs9GA0LDRhTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PtCf0L7RgdC70LXQtNC90LjQtSDQvdC+0LLQvtGB0YLQuCDQuCDRgdC+0LHRi9GC0LjRjzwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PtCS0LXQu9C40LrQvtC70LXQv9C90L7QtSDRgdC+0L7QsdGJ0LXRgdGC0LLQvjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PtCi0YDQsNC90YHQu9GP0YbQuNC4INC4INGA0LXQt9GD0LvRjNGC0LDRgtGLINC80LDRgtGH0LXQuTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PtCQ0L3QsNC70LjRgtC40LrQsCDQvtGCINC/0YDQvtGE0LXRgdGB0LjQvtC90LDQu9C+0LI8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC90cmFuc2l0aW9uPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGluamVjdDogW1xuICAgICAgICAgICAgJ2F4aW9zJyxcbiAgICAgICAgICAgICdjb25maWcnXG4gICAgICAgIF0sXG4gICAgICAgIG5hbWU6IFwiUmVnaXN0cmF0aW9uRm9ybVwiLFxuICAgICAgICBwcm9wczogW1xuICAgICAgICAgICAgJ3Bhc3N3b3JkJyxcbiAgICAgICAgICAgICdlbWFpbCcsXG4gICAgICAgICAgICAnY2hlY2snXG4gICAgICAgIF0sXG4gICAgICAgIGRhdGEoKXtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICBzdGVhbUxvZ2luTGluaygpe1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5TVEVBTV9MT0dJTl9MSU5LO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVtYWlsRm9ybSgpe1xuICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdlbWFpbCcsIHRoaXMuZW1haWwpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvcm1EYXRhO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBnZW5lcmF0ZUNvbmZpcm1Db2RlKCl7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2spIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnc2VuZENvbmZpcm1Db2RlJylcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnc2V0U3RlcCcsICdjb25maXJtQ29kZScpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNoZWNrSXNFbWFpbFZhbGlkKCl7XG4gICAgICAgICAgICAgICAgdGhpcy5heGlvcy5wb3N0KCcvcnUvdXNlci9jaGVjay9lbWFpbCcsIHRoaXMuZW1haWxGb3JtKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigoe2RhdGF9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdlbmVyYXRlQ29uZmlybUNvZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKHtyZXNwb25zZX0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbG9zZSgpe1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2Nsb3NlJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9XG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImdyaWRcIj5cbiAgICAgICAgPGEgY2xhc3M9XCJncmlkLXJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGFcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICB7eyB0ZWFtLm5hbWUgfX1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3R0b21cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPtCd0LDQt9Cy0LDQvdC40LU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0YVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7IHRlYW0udGFnIH19XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm90dG9tXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7QotC10LM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0YVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7IHRlYW0ubWVtYmVycy5sZW5ndGggfX1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3R0b21cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPtCj0YfQsNGB0L3QuNC60L7Qsjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRhIHB0LTJcIj5cbiAgICAgICAgICAgICAgICA8YSA6aHJlZj1cImh0dHAuZ2V0VGVhbUxpbmsodGVhbS5pZClcIiBjbGFzcz1cImJ0bi1vcmFuZ2UgdGV4dC1saWdodCBwLTIgcG9pbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICDQn9C+0YHQvNC+0YLRgNC10YLRjFxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2E+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbmFtZTogXCJNdnBKb2luZWRUZWFtXCIsXG4gICAgICAgIHByb3BzOiBbJ3RlYW0nXSxcbiAgICAgICAgaW5qZWN0OiBbXG4gICAgICAgICAgICAnaHR0cCdcbiAgICAgICAgXVxuICAgIH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiZXZlbnRzX3ZpZXdcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21wb25lbnQgdXBjb21pbmdfZXZlbnRzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxtdnAtam9pbmVkLXRlYW0gOnRlYW09XCJ0ZWFtXCIgOmtleT1cImtleVwiIHYtZm9yPVwiKHRlYW0sIGtleSkgaW4gdGVhbXNcIi8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBNdnBKb2luZWRUZWFtIGZyb20gXCIuL012cEpvaW5lZFRlYW1cIjtcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbmFtZTogXCJNdnBKb2luZWRUZWFtc1wiLFxuICAgICAgICBpbmplY3Q6IFtcbiAgICAgICAgICAgICdodHRwJ1xuICAgICAgICBdLFxuICAgICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICAgICAnbXZwLWpvaW5lZC10ZWFtJzogTXZwSm9pbmVkVGVhbVxuICAgICAgICB9LFxuICAgICAgICBkYXRhKCl7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHRlYW1zOiBbXVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBnZXRKb2luZWRUZWFtcygpe1xuICAgICAgICAgICAgICAgIHRoaXMuaHR0cC5nZXRVc2VySm9pbmVkVGVhbXMoKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigoe2RhdGF9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRlYW1zID0gZGF0YVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICAgdGhpcy5nZXRKb2luZWRUZWFtcygpXG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cblxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlciBtdC0zXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGZ0XCI+XG4gICAgICAgICAgICAgICAgPGEgOmNsYXNzPVwie2FjdGl2ZTogYWN0aXZlID09PSAnY29tbWFuZHMnfVwiIEBjbGljaz1cIiBhY3RpdmUgPSAnY29tbWFuZHMnXCI+0JrQntCc0JDQndCU0Ks8L2E+XG4gICAgICAgICAgICAgICAgPGEgOmNsYXNzPVwie2FjdGl2ZTogYWN0aXZlID09PSAndG91cm5hbWVudHMnfVwiIEBjbGljaz1cIiBhY3RpdmUgPSAndG91cm5hbWVudHMnXCI+0KLQo9Cg0J3QmNCg0Ks8L2E+XG4gICAgICAgICAgICAgICAgPGEgOmNsYXNzPVwie2FjdGl2ZTogYWN0aXZlID09PSAnbWF0Y2hlcyd9XCIgQGNsaWNrPVwiIGFjdGl2ZSA9ICdtYXRjaGVzJ1wiPtCc0JDQotCn0Jg8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgPE12cFRlYW1zPjwvTXZwVGVhbXM+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBNdnBUZWFtcyBmcm9tIFwiLi9NdnBUZWFtc1wiO1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiBcIk12cFBhZ2VcIixcbiAgICAgICAgY29tcG9uZW50czoge1xuICAgICAgICAgICAgTXZwVGVhbXNcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YSgpe1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBhY3RpdmU6ICdjb21tYW5kcycsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcblxuICAgICAgICB9LFxuICAgIH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiY2FyZCB3LTUwIG1yLTIgYm9yZGVyLXJhZGl1cy0wXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIiB2LWlmPVwidGVhbSA9PT0gdW5kZWZpbmVkXCI+XG4gICAgICAgICAgICA8aDUgY2xhc3M9XCJjYXJkLXRpdGxlIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgIHt7IHRpdGxlIH19XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZSBiYWRnZS13YXJuaW5nIGJvcmRlci1yYWRpdXMtMFwiPnt7IHR5cGUgfX08L3NwYW4+XG4gICAgICAgICAgICA8L2g1PlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkLXRleHRcIj5cbiAgICAgICAgICAgICAgICB7eyBkZXNjcmlwdGlvbiB9fVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGEgY2xhc3M9XCJidG4tb3JhbmdlIHRleHQtbGlnaHQgcC0yIHBvaW50ZXJcIlxuICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJtb2RhbFwiXG4gICAgICAgICAgICAgICBAY2xpY2s9XCIkZW1pdCgnc2V0Q2FwYWNpdHknLCBjYXBhY2l0eSlcIlxuICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9XCIjbWFrZUNvbWFuZE1vZGFsXCI+XG4gICAgICAgICAgICAgICAg0KHQvtC30LTQsNGC0Ywg0LrQvtC80LDQvdC00YMge3sgdHlwZSB9fVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiIHYtaWY9XCJ0ZWFtICE9PSB1bmRlZmluZWRcIj5cbiAgICAgICAgICAgIDxoNSBjbGFzcz1cImNhcmQtdGl0bGUgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAge3sgdGVhbS5uYW1lIH19XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZSBiYWRnZS13YXJuaW5nIGJvcmRlci1yYWRpdXMtMFwiPlxuICAgICAgICAgICAgICAgICAgICB7eyB0eXBlIH19XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9oNT5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZC10ZXh0XCI+IHt7IHRlYW0ubWVtYmVycy5sZW5ndGggfX0g0YPRh9Cw0YHQvdC40LrQvtCyPC9wPlxuICAgICAgICAgICAgPGEgY2xhc3M9XCJidG4tb3JhbmdlIHRleHQtbGlnaHQgcC0yIHBvaW50ZXJcIiA6aHJlZj1cImh0dHAuZ2V0VGVhbUxpbmsodGVhbS5pZClcIj5cbiAgICAgICAgICAgICAgICDQn9C+0YHQvNC+0YLRgNC10YLRjFxuICAgICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6IFwiTXZwVGVhbVwiLFxuICAgICAgICBpbmplY3Q6IFtcbiAgICAgICAgICAgICdodHRwJ1xuICAgICAgICBdLFxuICAgICAgICBwcm9wczogW1xuICAgICAgICAgICAgJ3RlYW1zJyxcbiAgICAgICAgICAgICd0aXRsZScsXG4gICAgICAgICAgICAnZGVzY3JpcHRpb24nLFxuICAgICAgICAgICAgJ3R5cGUnLFxuICAgICAgICAgICAgJ2NhcGFjaXR5J1xuICAgICAgICBdLFxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgdGVhbSgpe1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRlYW1zLmZpbmQodGVhbSA9PiBOdW1iZXIodGVhbS5jYXBhY2l0eSkgPT09IE51bWJlcih0aGlzLmNhcGFjaXR5KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImdyaWRcIj5cbiAgICAgICAgPGEgY2xhc3M9XCJncmlkLXJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvZ29cIj5cbiAgICAgICAgICAgICAgICA8aW1nIHYtaWY9XCJtZW1iZXIuaW1hZ2UgIT09IG51bGxcIi8+XG4gICAgICAgICAgICAgICAgPGltZyB2LWVsc2Ugc3JjPVwiL2ltYWdlcy9ub0xvZ28ucG5nXCIvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0YVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7IG1lbWJlci5uaWNrbmFtZSB9fVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvdHRvbVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+0J3QuNC6PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGFcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cImlzQ2FwdGFpblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAg0JrQsNC/0LjRgtCw0L1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWVsc2U+XG4gICAgICAgICAgICAgICAgICAgICAgICDQmNCz0YDQvtC6XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm90dG9tXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7QoNC+0LvRjDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRhXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgOmhyZWY9XCJnZXRTdGVhbUxpbmsobWVtYmVyLnN0ZWFtKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgd2lkdGg9XCIyMHB4XCIgc3JjPVwiL2ltYWdlcy9sb2dpbl9zdGVhbS5zdmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3R0b21cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPtCh0YLQuNC8PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2E+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbmFtZTogXCJNdnBUZWFtTWVtYmVyXCIsXG4gICAgICAgIHByb3BzOiBbXG4gICAgICAgICAgICAnbWVtYmVyJyxcbiAgICAgICAgICAgICdpc0NhcHRhaW4nXG4gICAgICAgIF0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGdldFN0ZWFtTGluazogKHN0ZWFtSWQpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYGh0dHBzOi8vc3RlYW1jb21tdW5pdHkuY29tL3Byb2ZpbGVzLyR7c3RlYW1JZH1gXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlciBtdC0zIGQtYmxvY2tcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZnRcIj5cbiAgICAgICAgICAgICAgICA8YSA6aHJlZj1cImh0dHAuZ2V0TXZwTGluaygpXCI+0J3QsNC30LDQtDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV2ZW50c192aWV3XCIgaWQ9XCJ0ZWFtTWVtYmVyc1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbXBvbmVudCB1cGNvbWluZ19ldmVudHNcIiBpZD1cInVwY29taW5nX2V2ZW50c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdW5kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxpbWcgc3JjPVwiL2ltYWdlcy9sYW1wLnN2Z1wiIGFsdD1cImxhbXBcIiAvPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQo9GH0LDRgdGC0L3QuNC60LhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG12cC10ZWFtLW1lbWJlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cInRlYW0uaGFzT3duUHJvcGVydHkoJ21lbWJlcnMnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWZvcj1cIihtZW1iZXIsIGtleSkgaW4gdGVhbS5tZW1iZXJzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDptZW1iZXI9XCJtZW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmtleT1cImtleVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6aXMtY2FwdGFpbj1cImNoZWNrTWVtYmVySXNDYXB0YWluKG1lbWJlcilcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L212cC10ZWFtLW1lbWJlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBtdC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGZ0XCIgdi1pZj1cImlzQ3JlYXRvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIEBjbGljaz1cImRlbGV0ZVRlYW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0KPQtNCw0LvQuNGC0Ywg0LrQvtC80LDQvdC00YNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJidG4tb3JhbmdlIHRleHQtbGlnaHQgcG9pbnRlclwiIEBjbGljaz1cInNob3dBZGRNb2RhbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1wbHVzXCI+PC9pPiZuYnNwOyZuYnNwO9CU0L7QsdCw0LLQuNGC0Ywg0YPRh9Cw0YHQvdC40LrQvtCyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGZ0XCIgdi1lbHNlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYnRuLW9yYW5nZSB0ZXh0LWxpZ2h0IHBvaW50ZXJcIiA6aHJlZj1cImh0dHAudXNlckxlYXZlVGVhbUxpbmsodGVhbUlkKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQn9C+0LrQuNC90YPRgtGMINC60L7QvNCw0L3QtNGDXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgU3dhbCBmcm9tICdzd2VldGFsZXJ0MidcbiAgICBpbXBvcnQgTXZwVGVhbU1lbWJlciBmcm9tIFwiLi9NdnBUZWFtTWVtYmVyXCI7XG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6IFwiTXZwVGVhbVBhZ2VcIixcbiAgICAgICAgaW5qZWN0OiBbXG4gICAgICAgICAgICAnaHR0cCdcbiAgICAgICAgXSxcbiAgICAgICAgcHJvcHM6IFtcbiAgICAgICAgICAgICd0ZWFtSWQnXG4gICAgICAgIF0sXG4gICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICAgICdtdnAtdGVhbS1tZW1iZXInOiBNdnBUZWFtTWVtYmVyLFxuICAgICAgICB9LFxuICAgICAgICBkYXRhKCl7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHRlYW06IHt9LFxuICAgICAgICAgICAgICAgIGludml0ZVRva2VuOiBudWxsLFxuICAgICAgICAgICAgICAgIHVzZXI6IG51bGwsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICBpc0NyZWF0b3IoKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy51c2VyICE9PSBudWxsICYmIHRoaXMudXNlci5pZCA9PT0gdGhpcy50ZWFtLmNyZWF0b3IuaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGdldFRlYW0oKXtcbiAgICAgICAgICAgICAgICB0aGlzLmh0dHAuZ2V0TXZwVGVhbSh0aGlzLnRlYW1JZClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHtkYXRhfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50ZWFtID0gZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaGVja01lbWJlcklzQ2FwdGFpbihtZW1iZXIpe1xuICAgICAgICAgICAgICAgIHJldHVybiBtZW1iZXIuaWQgPT09IHRoaXMudGVhbS5jcmVhdG9yLmlkXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0U3RlYW1MaW5rKHN0ZWFtSWQpe1xuICAgICAgICAgICAgICAgIHJldHVybiBgaHR0cHM6Ly9zdGVhbWNvbW11bml0eS5jb20vcHJvZmlsZXMvJHtzdGVhbUlkfWBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaG93QWRkTW9kYWwoKXtcbiAgICAgICAgICAgICAgICB0aGlzLmh0dHAuZ2V0VGVhbUludml0ZVRva2VuKHRoaXMudGVhbUlkKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigoe2RhdGF9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dJbnZpdGVNb2RhbChkYXRhKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNob3dJbnZpdGVNb2RhbCh0b2tlbil7XG4gICAgICAgICAgICAgICAgY29uc3QgaW52aXRlTGluayA9IHRoaXMuaHR0cC5nZXRJbnZpdGVUb1RlYW1MaW5rKHRoaXMudGVhbUlkLCB0b2tlbilcblxuICAgICAgICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn0JTQvtCx0LDQstC40YLRjCDRg9GH0LDRgdGC0L3QuNC60L7QsicsXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICfQntGC0L/RgNCw0LLRjCDRjdGC0YMg0YHRgdGL0LvQutGDINC40LPRgNC+0LrQsNC8LCDQutC+0YLQvtGA0YvRhSDRhdC+0YfQtdGI0Ywg0L/RgNC40LPQu9Cw0YHQuNGC0Ywg0LIg0LrQvtC80LDQvdC00YMnLFxuICAgICAgICAgICAgICAgICAgICBodG1sOiBgPHRleHRhcmVhIGNsYXNzPVwic3dhbDItdGV4dGFyZWFcIiBwbGFjZWhvbGRlcj1cIlwiIHN0eWxlPVwiZGlzcGxheTogZmxleDtcIj4ke2ludml0ZUxpbmt9PC90ZXh0YXJlYT5gLFxuICAgICAgICAgICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBzaG93Q29uZmlybUJ1dHRvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICfQntCx0L3QvtCy0LjRgtGMJyxcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogJ9CX0LDQutGA0YvRgtGMJyxcbiAgICAgICAgICAgICAgICAgICAgcHJlQ29uZmlybTogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5odHRwLnJlbG9hZFRlYW1JbnZpdGVUb2tlbih0aGlzLnRlYW1JZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigoe2RhdGF9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0ludml0ZU1vZGFsKGRhdGEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVsZXRlVGVhbSgpe1xuICAgICAgICAgICAgICAgIHRoaXMuaHR0cC5kZWxldGVNdnBUZWFtKHRoaXMudGVhbUlkKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSB0aGlzLmh0dHAuZ2V0TXZwTGluaygpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0VXNlcigpe1xuICAgICAgICAgICAgICAgIHRoaXMuaHR0cC5nZXRBdXRoVXNlcigpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCh7ZGF0YX0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXNlciA9IGRhdGFcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICB0aGlzLmdldFRlYW0oKTtcbiAgICAgICAgICAgIHRoaXMuZ2V0VXNlcigpO1xuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJjb250XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgY29tbWFuZHMgcC0wIG10LTNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTc1IGQtZmxleFwiPlxuICAgICAgICAgICAgICAgIDxtdnAtdGVhbVxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cItCd0LDRgdGC0YDQvtC10L0g0LjQs9GA0LDRgtGMINGB0LXRgNGM0LXQt9C90L4/XCJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCLQodC+0LfQtNCw0Lkg0YHQstC+0Y4g0LrQvtC80LDQvdC00YMg0LTQu9GPINGC0YPRgNC40LrQvtCyIDV2NSDQuCDQstGA0YvQstCw0LnRgdGPINCyINC60LjQsdC10YDRgdC/0L7RgNGCXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cIjV4NVwiXG4gICAgICAgICAgICAgICAgICAgIGNhcGFjaXR5PVwiNVwiXG4gICAgICAgICAgICAgICAgICAgIEBzZXRDYXBhY2l0eT1cInNldENhcGFjaXR5XCJcbiAgICAgICAgICAgICAgICAgICAgOnRlYW1zPVwidGVhbXNcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPG12cC10ZWFtXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwi0J3QsNC/0LDRgNC90LjQutC4XCJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCLQndC10YIg0L/QvtGB0YLQvtGP0L3QvdC+0Lkg0LrQvtC80LDQvdC00Ys/INCf0L7Qt9C+0LLQuCDQtNGA0YPQs9CwINC4INCy0YvQvdC+0YHQuNGC0LUg0YHQvtC/0LXRgNC90LjQutC+0LIg0LLQvNC10YHRgtC1XCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cIjJ4MlwiXG4gICAgICAgICAgICAgICAgICAgIGNhcGFjaXR5PVwiMlwiXG4gICAgICAgICAgICAgICAgICAgIEBzZXRDYXBhY2l0eT1cInNldENhcGFjaXR5XCJcbiAgICAgICAgICAgICAgICAgICAgOnRlYW1zPVwidGVhbXNcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbCBmYWRlXCIgaWQ9XCJtYWtlQ29tYW5kTW9kYWxcIiB0YWJpbmRleD1cIi0xXCIgYXJpYS1sYWJlbGxlZGJ5PVwiZXhhbXBsZU1vZGFsTGFiZWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZGlhbG9nXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50IGJvcmRlci1yYWRpdXMtMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cIm1vZGFsLXRpdGxlXCIgaWQ9XCJleGFtcGxlTW9kYWxMYWJlbFwiPtCh0L7Qt9C00LDRgtGMINC60L7QvNCw0L3QtNGDPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQn9GA0LjQtNGD0LzQsNC5INC90LDQt9Cy0LDQvdC40LUgKNGB0LzQvtC20LXRiNGMINC/0L7QvNC10L3Rj9GC0Ywg0L/QvtGC0L7QvClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD7QndCw0LfQstCw0L3QuNC1INC60L7QvNCw0L3QtNGLPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHYtbW9kZWw9XCJjb21tYW5kLm5hbWVcIiB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sIGJvcmRlci1yYWRpdXMtMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJmb3JtLXRleHQgdGV4dC1tdXRlZFwiIHYtaWY9XCIhbWVzc2FnZXMuZXJyb3IuaGFzT3duUHJvcGVydHkoJ25hbWUnKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0JzQvtC20L3QviDQu9Cw0YLQuNC90YHQutC40LUg0LHRg9C60LLRiyDQuCDRhtC40YTRgNGLXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cImZvcm0tdGV4dCB0ZXh0LWRhbmdlclwiIHYtaWY9XCJtZXNzYWdlcy5lcnJvci5oYXNPd25Qcm9wZXJ0eSgnbmFtZScpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBtZXNzYWdlcy5lcnJvci5uYW1lWzBdIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPtCi0LXQsyDQutC+0LzQsNC90LTRizwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2LW1vZGVsPVwiY29tbWFuZC50YWdcIiB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sIGJvcmRlci1yYWRpdXMtMCB3LTUwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cImZvcm0tdGV4dCB0ZXh0LW11dGVkXCIgdi1pZj1cIiFtZXNzYWdlcy5lcnJvci5oYXNPd25Qcm9wZXJ0eSgndGFnJylcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCc0LDQutGB0LjQvNGD0LwgNiDRgdC40LzQstC+0LvQvtCyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cImZvcm0tdGV4dCB0ZXh0LWRhbmdlclwiIHYtaWY9XCJtZXNzYWdlcy5lcnJvci5oYXNPd25Qcm9wZXJ0eSgndGFnJylcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IG1lc3NhZ2VzLmVycm9yLnRhZ1swXSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1zdWNjZXNzXCIgdi1pZj1cIm1lc3NhZ2VzLnN1Y2Nlc3MgIT09IG51bGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IG1lc3NhZ2VzLnN1Y2Nlc3MgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBAY2xpY2s9XCJjcmVhdGVUZWFtXCIgY2xhc3M9XCJidG4tb3JhbmdlIHRleHQtbGlnaHQgcC0yIHRleHQtY2VudGVyIHBvaW50ZXIgdy0xMDBcIiA+0KHQvtC30LTQsNGC0Ywg0LrQvtC80LDQvdC00YM8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIiBjbGFzcz1cImJ0bi1ncmV5IHBvaW50ZXIgdGV4dC1jZW50ZXIgdGV4dC1saWdodCBib3JkZXItcmFkaXVzLTAgcC0yIHctNzVcIj7QntGC0LzQtdC90LjRgtGMPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiMTIzXCI+XG4gICAgICAgICAgICAgICAgPG12cC1qb2luZWQtdGVhbXMvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgTXZwVGVhbSBmcm9tIFwiLi9NdnBUZWFtXCI7XG4gICAgaW1wb3J0IE12cEpvaW5lZFRlYW1zIGZyb20gXCIuL012cEpvaW5lZFRlYW1zXCI7XG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6IFwiTXZwVGVhbXNcIixcbiAgICAgICAgY29tcG9uZW50czoge1xuICAgICAgICAgICAgJ212cC10ZWFtJzogTXZwVGVhbSxcbiAgICAgICAgICAgICdtdnAtam9pbmVkLXRlYW1zJzogTXZwSm9pbmVkVGVhbXNcbiAgICAgICAgfSxcbiAgICAgICAgaW5qZWN0OiBbJ2h0dHAnXSxcbiAgICAgICAgZGF0YSgpe1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0ZWFtczogW10sXG4gICAgICAgICAgICAgICAgY29tbWFuZDoge1xuICAgICAgICAgICAgICAgICAgICBjYXBhY2l0eTogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgdGFnOiBudWxsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBtZXNzYWdlczoge1xuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBlcnJvcjoge30sXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBjcmVhdGVUZWFtKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHtjYXBhY2l0eSwgbmFtZSwgdGFnfSA9IHRoaXMuY29tbWFuZDtcblxuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZXMuc3VjY2VzcyA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlcy5lcnJvciA9IHt9O1xuXG4gICAgICAgICAgICAgICAgdGhpcy5odHRwLmNyZWF0ZU12cFRlYW0oY2FwYWNpdHksIG5hbWUsIHRhZylcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHtkYXRhfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlcy5zdWNjZXNzID0gZGF0YS5tZXNzYWdlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50ZWFtcy5wdXNoKGRhdGEudGVhbSk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoe3Jlc3BvbnNlfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlcy5lcnJvciA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0VXNlclRlYW1zKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaHR0cC5nZXRVc2VyVGVhbXMoKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigoe2RhdGF9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRlYW1zID0gZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXRDYXBhY2l0eShjYXBhY2l0eSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZC5jYXBhY2l0eSA9IGNhcGFjaXR5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICAgdGhpcy5nZXRVc2VyVGVhbXMoKVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJldmVudHNfdmlld1wiIGlkPVwidGVhbU1lbWJlcnNcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21wb25lbnQgdXBjb21pbmdfZXZlbnRzXCIgaWQ9XCJ1cGNvbWluZ19ldmVudHNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdW5kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48aW1nIHNyYz1cIi9pbWFnZXMvbGFtcC5zdmdcIiBhbHQ9XCJsYW1wXCIgLz48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgdGVhbS5uYW1lIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxtdnAtdGVhbS1tZW1iZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwidGVhbS5oYXNPd25Qcm9wZXJ0eSgnbWVtYmVycycpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWZvcj1cIihtZW1iZXIsIGtleSkgaW4gdGVhbS5tZW1iZXJzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bWVtYmVyPVwibWVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6a2V5PVwia2V5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6aXMtY2FwdGFpbj1cImNoZWNrTWVtYmVySXNDYXB0YWluKG1lbWJlcilcIj5cbiAgICAgICAgICAgICAgICAgICAgPC9tdnAtdGVhbS1tZW1iZXI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgbXQtM1wiIHYtaWY9XCJpc0F1dGhvcml6ZSAmJiBpc0ZyZWVQbGFjZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJidG4tb3JhbmdlIHRleHQtbGlnaHQgcG9pbnRlclwiIEBjbGljaz1cImpvaW5UZWFtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1wbHVzXCI+PC9pPiZuYnNwOyZuYnNwO9Cf0YDQuNGB0L7QtdC00LXQvdC40YLRgdGPXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGxvZ2luLW1vZGFsIDpzaG93PVwiIWlzQXV0aG9yaXplXCIvPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgTXZwVGVhbU1lbWJlciBmcm9tIFwiLi4vY2FiaW5ldC9NdnBUZWFtTWVtYmVyXCI7XG4gICAgaW1wb3J0IExvZ2luTW9kYWwgZnJvbSBcIi4uLy4uL0xvZ2luTW9kYWxcIjtcbiAgICBpbXBvcnQgU3dhbCBmcm9tICdzd2VldGFsZXJ0MidcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbmFtZTogXCJNdnBJbnZpdGVUZWFtUGFnZVwiLFxuICAgICAgICBpbmplY3Q6IFtcbiAgICAgICAgICAgICdodHRwJyxcbiAgICAgICAgICAgICdjb25maWcnXG4gICAgICAgIF0sXG4gICAgICAgIHByb3BzOiBbXG4gICAgICAgICAgICAndGVhbUlkJyxcbiAgICAgICAgICAgICdpc0F1dGhvcml6ZSdcbiAgICAgICAgXSxcbiAgICAgICAgY29tcG9uZW50czoge1xuICAgICAgICAgICAgJ212cC10ZWFtLW1lbWJlcic6IE12cFRlYW1NZW1iZXIsXG4gICAgICAgICAgICAnbG9naW4tbW9kYWwnOiBMb2dpbk1vZGFsXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGEoKXtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdGVhbToge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBudWxsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBhdXRoVXNlcjogbnVsbCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIGlzRnJlZVBsYWNlKCl7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGVhbS5oYXNPd25Qcm9wZXJ0eSgnbWVtYmVycycpKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudGVhbS5tZW1iZXJzLmxlbmd0aCA8IHRoaXMudGVhbS5jYXBhY2l0eTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBnZXRUZWFtKCl7XG4gICAgICAgICAgICAgICAgdGhpcy5odHRwLmdldE12cFRlYW0odGhpcy50ZWFtSWQpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCh7ZGF0YX0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGVhbSA9IGRhdGFcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaGVja01lbWJlcklzQ2FwdGFpbihtZW1iZXIpe1xuICAgICAgICAgICAgICAgIHJldHVybiBtZW1iZXIuaWQgPT09IHRoaXMudGVhbS5jcmVhdG9yLmlkXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgam9pblRlYW0oKXtcbiAgICAgICAgICAgICAgICB0aGlzLmh0dHAuZ2V0QXV0aFVzZXIoKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigoe2RhdGF9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dGhVc2VyID0gZGF0YTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmVlZFN0ZWFtID0gdGhpcy5jaGVja05lZWRTdGVhbUZvckpvaW4oKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFuZWVkU3RlYW0pe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaHR0cC5qb2luTWVtYmVyVG9UZWFtKHRoaXMudGVhbUlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFRlYW0oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoe3Jlc3BvbnNlfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvclBvcHVwKHJlc3BvbnNlLmRhdGEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3JQb3B1cChlcnJvcil7XG4gICAgICAgICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfQo9C/0YEuLi4nLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBlcnJvcixcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNoZWNrTmVlZFN0ZWFtRm9ySm9pbigpe1xuICAgICAgICAgICAgICAgIGNvbnN0IGh0bWwgPSBgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg0JTQu9GPINGC0L7Qs9C+INGH0YLQviDQsdGLINGD0YfQsNCy0YHRgtCy0L7QstCw0YLRjCDQsiDRgtGD0YDQvdC40YDQtSwg0L3QtdC+0LHRhdC+0LTQuNC80L4g0L/RgNC40LLRj9C30LDRgtGMINCw0LrQsNGD0L3RglxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIke3RoaXMuY29uZmlnLlNURUFNX0xPR0lOX0xJTkt9XCI+U3RlYW08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInB0LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiR7dGhpcy5jb25maWcuU1RFQU1fTE9HSU5fTElOS31cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9sb2dpbl9zdGVhbS5zdmdcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYXV0aFVzZXIgIT09IG51bGwgKXtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYXV0aFVzZXIuc3RlYW0gPT09IG51bGwgfHwgdGhpcy5hdXRoVXNlci5zdGVhbSA9PT0gJycgfHwgdGhpcy5hdXRoVXNlci5zdGVhbSA9PT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ9Cj0L/RgS4uLicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0Nsb3NlQnV0dG9uOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICAgdGhpcy5nZXRUZWFtKClcbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIHAtMCBtLTBcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciB3aW5kb3ctaGVpZ2h0LTgwIHAtMCBtLTBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIHctMTAwIGgtMTAwXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGZsZXgtY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImJ0bi1vcmFuZ2UgdGV4dC1saWdodCBwLTMgcGwtNSBwci01IGZvbnQtc2l6ZS0yMyBwb2ludGVyXCIgQGNsaWNrPVwic2hvd0xvZ2luTW9kYWxcIj5Kb2luIHRoZSBHYW1lPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctMTAwIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzPVwidGV4dC1saWdodCBmb250LXNpemUtMjNcIj5XaGF0IHdlIG9mZmVyPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy0xMDAgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1saWdodCB3LTUwIGZvbnQtc2l6ZS0xOFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFkIGNvbnNlcXV1bnR1ciBjdWxwYSBjdXBpZGl0YXRlIGRlbGVuaXRpIGRpY3RhIGRpZ25pc3NpbW9zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3RpbmN0aW8gZG9sb3IgZG9sb3JlcyBoaWMgaXBzYSBpdGFxdWUgbGF1ZGFudGl1bSBtb2xlc3RpYXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9sbGl0aWEgbm9zdHJ1bSwgcGVyZmVyZW5kaXMgcHJvdmlkZW50IHF1b3Mgc2FwaWVudGUgdmVybyFcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIHctMTAwIGgtMTAwXCI+XG4gICAgICAgICAgICA8YSBjbGFzcz1cImJ0bi1vcmFuZ2UgdGV4dC1saWdodCBwLTIgcGwtMyBwci0zIHBvaW50ZXJcIiBAY2xpY2s9XCJzaG93TG9naW5Nb2RhbFwiPkpvaW4gdGhlIEdhbWU8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6IFwiTXZwTWFpblwiLFxuICAgICAgICBwcm9wczogW1xuICAgICAgICAgICAgJ2xvZ2luUmVkaXJlY3QnLFxuICAgICAgICAgICAgJ2lzQXV0aG9yaXplJ1xuICAgICAgICBdLFxuICAgICAgICBkYXRhKCl7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIHNob3dMb2dpbk1vZGFsKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzQXV0aG9yaXplKXtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gdGhpcy5sb2dpblJlZGlyZWN0XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbG9naW4uc2hvdyA9IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfVxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbXBvbmVudCB1cGNvbWluZ19ldmVudHNcIiBpZD1cInVwY29taW5nX2V2ZW50c1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdW5kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxpbWcgc3JjPVwiL2ltYWdlcy9sYW1wLnN2Z1wiIGFsdD1cImxhbXBcIiAvPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICDQotGD0YDQvdC40YDRiyB7e2dhbWV9fVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZCB3LTEwMCBoLTEwMCBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXJcIiB2LWlmPVwibG9hZFwiPlxuICAgICAgICAgICAgICAgICAgICA8bG9hZC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyaWRcIiB2LWZvcj1cInRvdXJuYW1lbnQgaW4gdG91cm5hbWVudHNcIiB2LWlmPVwiIWxvYWRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgOmhyZWY9XCInL3J1L212cC90b3VybmFtZW50LycgKyB0b3VybmFtZW50LmlkXCIgY2xhc3M9XCJncmlkLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvZ29cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIDpzcmM9XCJ0b3VybmFtZW50LmxvZ29cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57e3RvdXJuYW1lbnQubmFtZX19ICN7e3RvdXJuYW1lbnQubnVtYmVyfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvdHRvbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+0J3QsNC30LLQsNC90LjQtTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7dG91cm5hbWVudC5kYXRlfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvdHRvbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+0JTQsNGC0LA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57e3RvdXJuYW1lbnQubW9kZX19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3R0b21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPtCg0LXQttC40Lw8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1sb2NrLW9wZW5cIiB2LWlmPVwidG91cm5hbWVudC5hY2Nlc3NcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWxvY2tcIiB2LWVsc2U+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3R0b21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPtCU0L7RgdGC0YPQvzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7dG91cm5hbWVudC5wcml6ZX19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3R0b21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPtCf0YDQuNC3PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBMb2FkIGZyb20gXCIuLi8uLi9Mb2FkXCI7XG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6IFwiTXZwVG91cm5hbWVudHNMaXN0XCIsXG4gICAgICAgIGluamVjdDogW1xuICAgICAgICAgICAgJ2h0dHAnLFxuICAgICAgICAgICAgJ2hlYWRlcidcbiAgICAgICAgXSxcbiAgICAgICAgY29tcG9uZW50czoge1xuICAgICAgICAgICAgJ2xvYWQnOiBMb2FkXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGEoKXtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdG91cm5hbWVudHM6IFtdLFxuICAgICAgICAgICAgICAgIGdhbWVzOiB7XG4gICAgICAgICAgICAgICAgICAgICdDUzpHTyc6ICdjcycsXG4gICAgICAgICAgICAgICAgICAgICdET1RBJzogJ2RvdGEnLFxuICAgICAgICAgICAgICAgICAgICAnVmFsb3JhbnQnOiAndmFsb3JhbnQnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBsb2FkOiBmYWxzZSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgd2F0Y2g6IHtcbiAgICAgICAgICAgIGdhbWUoKXtcbiAgICAgICAgICAgICAgICB0aGlzLmdldFRvdXJuYW1lbnRzQnlHYW1lKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICBnYW1lKCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuICB0aGlzLmhlYWRlci5nYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBnZXRUb3VybmFtZW50c0J5R2FtZSgpe1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmh0dHAuZ2V0VG91cm5hbWVudHNCeUdhbWUodGhpcy5nYW1lc1t0aGlzLmhlYWRlci5nYW1lXSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHtkYXRhfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b3VybmFtZW50cyA9IGRhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY3JlYXRlZCgpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0VG91cm5hbWVudHNCeUdhbWUoKTtcbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX3ZtLl9tKDApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvYWRpbmdpby1zcGlubmVyLWdlYXItbXRwaHdnb3k3OWVcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxkaW8tcnd1dmFydm5wMXNcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICBfYyhcImRpdlwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcInNsaWRlc1wiIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwibG9naW5cIixcbiAgICAgICAge1xuICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uY2hlY2tTdGVwKFwibG9naW5cIiksXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiY2hlY2tTdGVwKCdsb2dpbicpXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIGF0dHJzOiB7IGVycm9yOiBfdm0uZXJyb3IsIGVtYWlsOiBfdm0uZW1haWwsIGNoZWNrOiBfdm0ucGFzc3dvcmQgfSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgc2V0U3RlcDogX3ZtLnNldFN0ZXAsXG4gICAgICAgICAgICBhdXRoTG9naW46IF92bS5hdXRoTG9naW4sXG4gICAgICAgICAgICBjbG9zZTogX3ZtLmNsb3NlLFxuICAgICAgICAgICAgaW5wdXRFbWFpbDogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICAgX3ZtLmVtYWlsID0gdmFsdWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbnB1dFBhc3N3b3JkOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgICBfdm0ucGFzc3dvcmQgPSB2YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW192bS5fdChcImRlZmF1bHRcIildLFxuICAgICAgICAyXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInJlZ2lzdHJhdGlvblwiLFxuICAgICAgICB7XG4gICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5jaGVja1N0ZXAoXCJyZWdpc3RyYXRpb25cIiksXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiY2hlY2tTdGVwKCdyZWdpc3RyYXRpb24nKVwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBhdHRyczogeyBlbWFpbDogX3ZtLmVtYWlsLCBwYXNzd29yZDogX3ZtLnBhc3N3b3JkLCBjaGVjazogX3ZtLmNoZWNrIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIHNldFN0ZXA6IF92bS5zZXRTdGVwLFxuICAgICAgICAgICAgY2xvc2U6IF92bS5jbG9zZSxcbiAgICAgICAgICAgIGlucHV0RW1haWw6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICAgIF92bS5lbWFpbCA9IHZhbHVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaW5wdXRQYXNzd29yZDogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICAgX3ZtLnBhc3N3b3JkID0gdmFsdWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICAgX3ZtLmNoZWNrID0gdmFsdWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZW5kQ29uZmlybUNvZGU6IF92bS5zZW5kQ29uZmlybUNvZGVcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtfdm0uX3QoXCJkZWZhdWx0XCIpXSxcbiAgICAgICAgMlxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImNvbmZpcm0tY29kZVwiLCB7XG4gICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICB2YWx1ZTogX3ZtLmNoZWNrU3RlcChcImNvbmZpcm1Db2RlXCIpLFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJjaGVja1N0ZXAoJ2NvbmZpcm1Db2RlJylcIlxuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgYXR0cnM6IHsgY29kZUNvbmZpcm1lZDogX3ZtLmNvZGVDb25maXJtZWQsIGVtYWlsOiBfdm0uZW1haWwgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBzZXRTdGVwOiBfdm0uc2V0U3RlcCxcbiAgICAgICAgICBjbG9zZTogX3ZtLmNsb3NlLFxuICAgICAgICAgIHJlZ2lzdHJhdGlvbjogX3ZtLnJlZ2lzdHJhdGlvbixcbiAgICAgICAgICBzZW5kQ29uZmlybUNvZGU6IF92bS5zZW5kQ29uZmlybUNvZGVcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJuaWNrLW5hbWVcIiwge1xuICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgdmFsdWU6IF92bS5jaGVja1N0ZXAoXCJuaWNrbmFtZVwiKSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwiY2hlY2tTdGVwKCduaWNrbmFtZScpXCJcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIGF0dHJzOiB7IGVtYWlsOiBfdm0uZW1haWwgfSxcbiAgICAgICAgb246IHsgc2V0U3RlcDogX3ZtLnNldFN0ZXAsIGNsb3NlOiBfdm0uY2xvc2UgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJjb25ncmF0dWxhdGlvblwiLCB7XG4gICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICB2YWx1ZTogX3ZtLmNoZWNrU3RlcChcImNvbmdyYXR1bGF0aW9uXCIpLFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJjaGVja1N0ZXAoJ2NvbmdyYXR1bGF0aW9uJylcIlxuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgb246IHsgc2V0U3RlcDogX3ZtLnNldFN0ZXAsIGNsb3NlOiBfdm0uY2xvc2UgfVxuICAgICAgfSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJ0cmFuc2l0aW9uXCIsIHsgYXR0cnM6IHsgbmFtZTogXCJzbGlkZS1mYWRlc1wiIH0gfSwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9naW5fZm9ybVwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9naW5fYmxvY2tcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9nb3R5cGVcIiB9LCBbXG4gICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibG9nb3R5cGVcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogXCIvaW1hZ2VzL0NoYW1wc19sb2dvdHlwZS5zdmdcIiB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9naW5fdGl0bGVcIiB9LCBbXG4gICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgINCf0L7QtNGC0LLQtdGA0LbQtNC10L3QuNC1INC/0L7Rh9GC0YtcXG4gICAgICAgICAgICBcIilcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9naW5faW5wdXQgZC1mbGV4XCIgfSwgW1xuICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uY29uZmlybUNvZGUsXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJjb25maXJtQ29kZVwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiwgcmVxdWlyZWQ6IFwiXCIgfSxcbiAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uY29uZmlybUNvZGUgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfdm0uY29uZmlybUNvZGUgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi0JrQvtC0INC/0L7QtNGC0LLQtdGA0LbQtNC10L3QuNGPXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInF1ZXN0aW9uIHB0LTJcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIFwiZGF0YS10b2dnbGVcIjogXCJ0b29sdGlwXCIsXG4gICAgICAgICAgICAgICAgXCJkYXRhLXBsYWNlbWVudFwiOiBcInJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgdGl0bGU6XG4gICAgICAgICAgICAgICAgICBcItCd0LUg0L/RgNC40YjQtdC7INC60L7QtD8g0J/RgNC+0LLQtdGA0YzRgtC1INC/0LDQv9C60YMg0KHQv9Cw0Lwg0LjQu9C4INC/0L7Qv9GL0YLQsNC50YLQtdGB0Ywg0L7RgtC/0YDQsNCy0LjRgtGMINC10YnQtSDRgNCw0LcuXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtcXVlc3Rpb25cIiB9KV1cbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwic2VuZFwiLCBvbjogeyBjbGljazogX3ZtLnNlbmRSZWdpc3RyYXRpb25Db25maXJtIH0gfSxcbiAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgINCe0YLQv9GA0LDQstC40YLRjFxcbiAgICAgICAgICAgIFwiKV1cbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX3ZtLnN1Y2Nlc3NNZXNzYWdlID09IG51bGxcbiAgICAgICAgICA/IF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic2VuZCByZXNlbmRcIixcbiAgICAgICAgICAgICAgY2xhc3M6IHsgZGlzYWJsZWQ6IF92bS50aW1lciA+IDAgfSxcbiAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICBpbm5lckhUTUw6IF92bS5fcyhcItCe0YLQv9GA0LDQstC40YLRjCDQutC+0LQg0L/QvtCy0YLQvtGA0L3QviBcIiArIF92bS50aW1lck1lc3NhZ2UpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0ucmVzZW5kQ29uZmlybUNvZGUgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfdm0uZXJyb3JNZXNzYWdlICE9PSBudWxsXG4gICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVycm9yXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5lcnJvck1lc3NhZ2UpICtcbiAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfdm0uc3VjY2Vzc01lc3NhZ2UgIT09IG51bGxcbiAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZXJyb3IgdGV4dC1zdWNjZXNzXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5zdWNjZXNzTWVzc2FnZSkgK1xuICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGlua3MgZC1mbGV4XCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibXQtMVwiLFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJGVtaXQoXCJzZXRTdGVwXCIsIFwicmVnaXN0cmF0aW9uXCIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW19jKFwic3BhblwiLCBbX3ZtLl92KFwiQmFja1wiKV0pXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm10LTFcIiwgb246IHsgY2xpY2s6IF92bS5zaG93Tmlja25hbWUgfSB9LCBbXG4gICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBjbGFzczogeyBkaXNhYmxlZDogIV92bS5jb2RlQ29uZmlybWVkIH0gfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXCJOZXh0XCIpXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNsb3NlZFwiIH0sIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwic3ZnXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxNlwiLFxuICAgICAgICAgICAgICAgIGhlaWdodDogXCIxNlwiLFxuICAgICAgICAgICAgICAgIHZpZXdCb3g6IFwiMCAwIDE2IDE2XCIsXG4gICAgICAgICAgICAgICAgZmlsbDogXCJub25lXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5jbG9zZSB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInBhdGhcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBkOlxuICAgICAgICAgICAgICAgICAgICBcIk04Ljg4MzkyIDguMDAwMDRMMTUuODE2OSAxLjA2Njk4QzE2LjA2MSAwLjgyMjg4MiAxNi4wNjEgMC40MjcxMzMgMTUuODE2OSAwLjE4MzA3QzE1LjU3MjggLTAuMDYwOTkyMiAxNS4xNzcxIC0wLjA2MTAyMzQgMTQuOTMzIDAuMTgzMDdMNy45OTk5OCA3LjExNjEzTDEuMDY2OTcgMC4xODMwN0MwLjgyMjg4IC0wLjA2MTAyMzQgMC40MjcxMzIgLTAuMDYxMDIzNCAwLjE4MzA3IDAuMTgzMDdDLTAuMDYwOTkyIDAuNDI3MTY0IC0wLjA2MTAyMzMgMC44MjI5MTQgMC4xODMwNyAxLjA2Njk4TDcuMTE2MDggOEwwLjE4MzA3IDE0LjkzMzFDLTAuMDYxMDIzMyAxNS4xNzcyIC0wLjA2MTAyMzMgMTUuNTcyOSAwLjE4MzA3IDE1LjgxN0MwLjMwNTEwMSAxNS45MzkgMC40NjUwNjkgMTYgMC42MjUwMzcgMTZDMC43ODUwMDUgMTYgMC45NDQ5NDMgMTUuOTM5IDEuMDY3IDE1LjgxN0w3Ljk5OTk4IDguODgzOTRMMTQuOTMzIDE1LjgxN0MxNS4wNTUgMTUuOTM5IDE1LjIxNSAxNiAxNS4zNzUgMTZDMTUuNTM0OSAxNiAxNS42OTQ5IDE1LjkzOSAxNS44MTY5IDE1LjgxN0MxNi4wNjEgMTUuNTcyOSAxNi4wNjEgMTUuMTc3MSAxNS44MTY5IDE0LjkzMzFMOC44ODM5MiA4LjAwMDA0WlwiLFxuICAgICAgICAgICAgICAgICAgZmlsbDogXCIjODY4ODhBXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJ0cmFuc2l0aW9uXCIsIHsgYXR0cnM6IHsgbmFtZTogXCJzbGlkZS1mYWRlc1wiIH0gfSwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9naW5fZm9ybVwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9naW5fYmxvY2tcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9nb3R5cGVcIiB9LCBbXG4gICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibG9nb3R5cGVcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogXCIvaW1hZ2VzL0NoYW1wc19sb2dvdHlwZS5zdmdcIiB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9naW5fdGl0bGVcIiB9LCBbXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAg0J/QvtC30LTRgNCw0LLQu9GP0LXQvCDRgSDRg9GB0L/QtdGI0L3QvtC5INGA0LXQs9C10YHRgtGA0LDRhtC40LXQuSFcXG4gICAgICAgICAgICBcIlxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic2VuZFwiLFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJGVtaXQoXCJzZXRTdGVwXCIsIFwiZmluaXNoXCIpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAg0JjQs9GA0LDRgtGMXFxuICAgICAgICAgICAgXCIpXVxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNsb3NlZFwiLFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJGVtaXQoXCJjbG9zZVwiKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJzdmdcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTZcIixcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxNlwiLFxuICAgICAgICAgICAgICAgICAgdmlld0JveDogXCIwIDAgMTYgMTZcIixcbiAgICAgICAgICAgICAgICAgIGZpbGw6IFwibm9uZVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJwYXRoXCIsIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGQ6XG4gICAgICAgICAgICAgICAgICAgICAgXCJNOC44ODM5MiA4LjAwMDA0TDE1LjgxNjkgMS4wNjY5OEMxNi4wNjEgMC44MjI4ODIgMTYuMDYxIDAuNDI3MTMzIDE1LjgxNjkgMC4xODMwN0MxNS41NzI4IC0wLjA2MDk5MjIgMTUuMTc3MSAtMC4wNjEwMjM0IDE0LjkzMyAwLjE4MzA3TDcuOTk5OTggNy4xMTYxM0wxLjA2Njk3IDAuMTgzMDdDMC44MjI4OCAtMC4wNjEwMjM0IDAuNDI3MTMyIC0wLjA2MTAyMzQgMC4xODMwNyAwLjE4MzA3Qy0wLjA2MDk5MiAwLjQyNzE2NCAtMC4wNjEwMjMzIDAuODIyOTE0IDAuMTgzMDcgMS4wNjY5OEw3LjExNjA4IDhMMC4xODMwNyAxNC45MzMxQy0wLjA2MTAyMzMgMTUuMTc3MiAtMC4wNjEwMjMzIDE1LjU3MjkgMC4xODMwNyAxNS44MTdDMC4zMDUxMDEgMTUuOTM5IDAuNDY1MDY5IDE2IDAuNjI1MDM3IDE2QzAuNzg1MDA1IDE2IDAuOTQ0OTQzIDE1LjkzOSAxLjA2NyAxNS44MTdMNy45OTk5OCA4Ljg4Mzk0TDE0LjkzMyAxNS44MTdDMTUuMDU1IDE1LjkzOSAxNS4yMTUgMTYgMTUuMzc1IDE2QzE1LjUzNDkgMTYgMTUuNjk0OSAxNS45MzkgMTUuODE2OSAxNS44MTdDMTYuMDYxIDE1LjU3MjkgMTYuMDYxIDE1LjE3NzEgMTUuODE2OSAxNC45MzMxTDguODgzOTIgOC4wMDAwNFpcIixcbiAgICAgICAgICAgICAgICAgICAgZmlsbDogXCIjODY4ODhBXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApXG4gICAgICAgICAgXVxuICAgICAgICApXG4gICAgICBdKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcInRyYW5zaXRpb25cIiwgeyBhdHRyczogeyBuYW1lOiBcInNsaWRlLWZhZGVzXCIgfSB9LCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2dpbl9mb3JtXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2dpbl9ibG9ja1wiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2dvdHlwZVwiIH0sIFtcbiAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsb2dvdHlwZVwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBcIi9pbWFnZXMvQ2hhbXBzX2xvZ290eXBlLnN2Z1wiIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2dpbl90aXRsZVwiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAg0JLRhdC+0LQg0LIg0LvQuNGH0L3Ri9C5INC60LDQsdC40L3QtdGCXFxuICAgICAgICAgICAgXCIpXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvZ2luX2lucHV0XCIgfSwgW1xuICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJlbWFpbFwiIH0sXG4gICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmVtYWlsIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kZW1pdChcImlucHV0RW1haWxcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLQkNC00YDQtdGBINGN0LvQtdC60YLRgNC+0L3QvdC+0Lkg0L/QvtGH0YLRi1wiKV0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvZ2luX2lucHV0XCIgfSwgW1xuICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJwYXNzd29yZFwiIH0sXG4gICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnBhc3N3b3JkIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kZW1pdChcImlucHV0UGFzc3dvcmRcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLQn9Cw0YDQvtC70YxcIildKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzZW5kXCIsXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kZW1pdChcImF1dGhMb2dpblwiKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgINCS0L7QudGC0LhcXG4gICAgICAgICAgICBcIildXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF92bS5lcnJvclxuICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlcnJvclwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgINCd0LXQv9GA0LDQstC40LvRjNC90YvQuSDQu9C+0LPQuNC9INC40LvQuCDQv9Cw0YDQvtC70YxcXG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic3VidGV4dFwiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoXCLQmNC70Lgg0LLQvtC50LTQuNGC0LUg0YEg0L/QvtC80L7RidGM0Y5cIilcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYWx0ZXJuYXRlXCIgfSwgW192bS5fdChcImRlZmF1bHRcIildLCAyKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsaW5rc1wiLFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJGVtaXQoXCJzZXRTdGVwXCIsIFwicmVnaXN0cmF0aW9uXCIpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfYyhcImRpdlwiLCBbX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLQoNC10LPQuNGB0YLRgNCw0YbQuNGPXCIpXSldKV1cbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjbG9zZWRcIixcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRlbWl0KFwiY2xvc2VcIilcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwic3ZnXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjE2XCIsXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTZcIixcbiAgICAgICAgICAgICAgICAgIHZpZXdCb3g6IFwiMCAwIDE2IDE2XCIsXG4gICAgICAgICAgICAgICAgICBmaWxsOiBcIm5vbmVcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwicGF0aFwiLCB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBkOlxuICAgICAgICAgICAgICAgICAgICAgIFwiTTguODgzOTIgOC4wMDAwNEwxNS44MTY5IDEuMDY2OThDMTYuMDYxIDAuODIyODgyIDE2LjA2MSAwLjQyNzEzMyAxNS44MTY5IDAuMTgzMDdDMTUuNTcyOCAtMC4wNjA5OTIyIDE1LjE3NzEgLTAuMDYxMDIzNCAxNC45MzMgMC4xODMwN0w3Ljk5OTk4IDcuMTE2MTNMMS4wNjY5NyAwLjE4MzA3QzAuODIyODggLTAuMDYxMDIzNCAwLjQyNzEzMiAtMC4wNjEwMjM0IDAuMTgzMDcgMC4xODMwN0MtMC4wNjA5OTIgMC40MjcxNjQgLTAuMDYxMDIzMyAwLjgyMjkxNCAwLjE4MzA3IDEuMDY2OThMNy4xMTYwOCA4TDAuMTgzMDcgMTQuOTMzMUMtMC4wNjEwMjMzIDE1LjE3NzIgLTAuMDYxMDIzMyAxNS41NzI5IDAuMTgzMDcgMTUuODE3QzAuMzA1MTAxIDE1LjkzOSAwLjQ2NTA2OSAxNiAwLjYyNTAzNyAxNkMwLjc4NTAwNSAxNiAwLjk0NDk0MyAxNS45MzkgMS4wNjcgMTUuODE3TDcuOTk5OTggOC44ODM5NEwxNC45MzMgMTUuODE3QzE1LjA1NSAxNS45MzkgMTUuMjE1IDE2IDE1LjM3NSAxNkMxNS41MzQ5IDE2IDE1LjY5NDkgMTUuOTM5IDE1LjgxNjkgMTUuODE3QzE2LjA2MSAxNS41NzI5IDE2LjA2MSAxNS4xNzcxIDE1LjgxNjkgMTQuOTMzMUw4Ljg4MzkyIDguMDAwMDRaXCIsXG4gICAgICAgICAgICAgICAgICAgIGZpbGw6IFwiIzg2ODg4QVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF1cbiAgICAgICAgKVxuICAgICAgXSlcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJ0cmFuc2l0aW9uXCIsIHsgYXR0cnM6IHsgbmFtZTogXCJzbGlkZS1mYWRlc1wiIH0gfSwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9naW5fZm9ybVwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9naW5fYmxvY2tcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9nb3R5cGVcIiB9LCBbXG4gICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibG9nb3R5cGVcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogXCIvaW1hZ2VzL0NoYW1wc19sb2dvdHlwZS5zdmdcIiB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9naW5fdGl0bGVcIiB9LCBbXG4gICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgINCS0LLQtdC00LjRgtC1INGB0LLQvtC5INC90LjQutC90LXQudC8XFxuICAgICAgICAgICAgXCIpXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvZ2luX2lucHV0XCIgfSwgW1xuICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ubmlja25hbWUsXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJuaWNrbmFtZVwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiwgbmFtZTogXCJlbWFpbFwiLCByZXF1aXJlZDogXCJcIiB9LFxuICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5uaWNrbmFtZSB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF92bS5uaWNrbmFtZSA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLQm9C+0LPQuNC9IChOaWNrbmFtZSlcIildKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX3ZtLmVycm9yTWVzc2FnZSAhPT0gbnVsbFxuICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlcnJvclwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZXJyb3JNZXNzYWdlKSArXG4gICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzZW5kXCIsIG9uOiB7IGNsaWNrOiBfdm0uc2V0Tmlja25hbWUgfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgINCX0LDQstC10YDRiNC40YLRjCDRgNC10LPQtdGB0YLRgNCw0YbQuNGOXFxuICAgICAgICAgICAgXCIpXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNsb3NlZFwiLCBvbjogeyBjbGljazogX3ZtLmNsb3NlIH0gfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJzdmdcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjE2XCIsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjE2XCIsXG4gICAgICAgICAgICAgICAgdmlld0JveDogXCIwIDAgMTYgMTZcIixcbiAgICAgICAgICAgICAgICBmaWxsOiBcIm5vbmVcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInBhdGhcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBkOlxuICAgICAgICAgICAgICAgICAgICBcIk04Ljg4MzkyIDguMDAwMDRMMTUuODE2OSAxLjA2Njk4QzE2LjA2MSAwLjgyMjg4MiAxNi4wNjEgMC40MjcxMzMgMTUuODE2OSAwLjE4MzA3QzE1LjU3MjggLTAuMDYwOTkyMiAxNS4xNzcxIC0wLjA2MTAyMzQgMTQuOTMzIDAuMTgzMDdMNy45OTk5OCA3LjExNjEzTDEuMDY2OTcgMC4xODMwN0MwLjgyMjg4IC0wLjA2MTAyMzQgMC40MjcxMzIgLTAuMDYxMDIzNCAwLjE4MzA3IDAuMTgzMDdDLTAuMDYwOTkyIDAuNDI3MTY0IC0wLjA2MTAyMzMgMC44MjI5MTQgMC4xODMwNyAxLjA2Njk4TDcuMTE2MDggOEwwLjE4MzA3IDE0LjkzMzFDLTAuMDYxMDIzMyAxNS4xNzcyIC0wLjA2MTAyMzMgMTUuNTcyOSAwLjE4MzA3IDE1LjgxN0MwLjMwNTEwMSAxNS45MzkgMC40NjUwNjkgMTYgMC42MjUwMzcgMTZDMC43ODUwMDUgMTYgMC45NDQ5NDMgMTUuOTM5IDEuMDY3IDE1LjgxN0w3Ljk5OTk4IDguODgzOTRMMTQuOTMzIDE1LjgxN0MxNS4wNTUgMTUuOTM5IDE1LjIxNSAxNiAxNS4zNzUgMTZDMTUuNTM0OSAxNiAxNS42OTQ5IDE1LjkzOSAxNS44MTY5IDE1LjgxN0MxNi4wNjEgMTUuNTcyOSAxNi4wNjEgMTUuMTc3MSAxNS44MTY5IDE0LjkzMzFMOC44ODM5MiA4LjAwMDA0WlwiLFxuICAgICAgICAgICAgICAgICAgZmlsbDogXCIjODY4ODhBXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJ0cmFuc2l0aW9uXCIsIHsgYXR0cnM6IHsgbmFtZTogXCJzbGlkZS1mYWRlc1wiIH0gfSwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9naW5fZm9ybVwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9naW5fcmVxXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvZ2luX2Jsb2NrXCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9nb3R5cGVcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxvZ290eXBlXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogXCIvaW1hZ2VzL0NoYW1wc19sb2dvdHlwZS5zdmdcIiB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2dpbl90aXRsZVwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAg0KDQtdCz0LjRgdGC0YDQsNGG0LjRj1xcbiAgICAgICAgICAgICAgICBcIilcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9naW5faW5wdXRcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIgfSxcbiAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5lbWFpbCB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJGVtaXQoXCJpbnB1dEVtYWlsXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcItCQ0LTRgNC10YEg0Y3Qu9C10LrRgtGA0L7QvdC90L7QuSDQv9C+0YfRgtGLXCIpXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9naW5faW5wdXRcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJwYXNzd29yZFwiIH0sXG4gICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ucGFzc3dvcmQgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRlbWl0KFwiaW5wdXRQYXNzd29yZFwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLQn9Cw0YDQvtC70YxcIildKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2dpbl9jaGVja1wiIH0sIFtcbiAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW1xuICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImNoZWNrYm94XCIgfSxcbiAgICAgICAgICAgICAgICBkb21Qcm9wczogeyBjaGVja2VkOiBfdm0uY2hlY2sgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kZW1pdChcImlucHV0XCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyBocmVmOiBcIi9ydS90ZXJtcy1vZi11c2VcIiwgdGFyZ2V0OiBcIl9ibGFua1wiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgIFwi0J7Qt9C90LDQutC+0LzQu9C10L0g0YEg0L/RgNCw0LLQuNC70LDQvNC4INC40YHQv9C+0LvRjNC30L7QstCw0L3QuNGPINGB0LXRgNCy0LjRgdCwIMKrQ2hhbXBzwrtcIlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic2VuZFwiLFxuICAgICAgICAgICAgICBzdHlsZTogeyBvcGFjaXR5OiBfdm0uJHBhcmVudC5jaGVjayA/IFwiMVwiIDogXCIuNVwiIH0sXG4gICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uY2hlY2tJc0VtYWlsVmFsaWQgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICDQl9Cw0YDQtdCz0LjRgdGC0YDQuNGA0L7QstCw0YLRjNGB0Y9cXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uZXJyb3JNZXNzYWdlICE9PSBudWxsXG4gICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZXJyb3JcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5lcnJvck1lc3NhZ2UpICtcbiAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzdWJ0ZXh0XCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwi0JjQu9C4INCy0L7QudC00LjRgtC1INGBINC/0L7QvNC+0YnRjNGOXCIpXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImFsdGVybmF0ZVwiIH0sIFtfdm0uX3QoXCJkZWZhdWx0XCIpXSwgMiksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxpbmtzXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kZW1pdChcInNldFN0ZXBcIiwgXCJsb2dpblwiKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwi0JLRhdC+0LQg0LIg0LvQuNGH0L3Ri9C5INC60LDQsdC40L3QtdGCXCIpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjbG9zZWRcIiwgb246IHsgY2xpY2s6IF92bS5jbG9zZSB9IH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInN2Z1wiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gICAgICAgICAgICAgICAgICB3aWR0aDogXCIxNlwiLFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjE2XCIsXG4gICAgICAgICAgICAgICAgICB2aWV3Qm94OiBcIjAgMCAxNiAxNlwiLFxuICAgICAgICAgICAgICAgICAgZmlsbDogXCJub25lXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcInBhdGhcIiwge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgZDpcbiAgICAgICAgICAgICAgICAgICAgICBcIk04Ljg4MzkyIDguMDAwMDRMMTUuODE2OSAxLjA2Njk4QzE2LjA2MSAwLjgyMjg4MiAxNi4wNjEgMC40MjcxMzMgMTUuODE2OSAwLjE4MzA3QzE1LjU3MjggLTAuMDYwOTkyMiAxNS4xNzcxIC0wLjA2MTAyMzQgMTQuOTMzIDAuMTgzMDdMNy45OTk5OCA3LjExNjEzTDEuMDY2OTcgMC4xODMwN0MwLjgyMjg4IC0wLjA2MTAyMzQgMC40MjcxMzIgLTAuMDYxMDIzNCAwLjE4MzA3IDAuMTgzMDdDLTAuMDYwOTkyIDAuNDI3MTY0IC0wLjA2MTAyMzMgMC44MjI5MTQgMC4xODMwNyAxLjA2Njk4TDcuMTE2MDggOEwwLjE4MzA3IDE0LjkzMzFDLTAuMDYxMDIzMyAxNS4xNzcyIC0wLjA2MTAyMzMgMTUuNTcyOSAwLjE4MzA3IDE1LjgxN0MwLjMwNTEwMSAxNS45MzkgMC40NjUwNjkgMTYgMC42MjUwMzcgMTZDMC43ODUwMDUgMTYgMC45NDQ5NDMgMTUuOTM5IDEuMDY3IDE1LjgxN0w3Ljk5OTk4IDguODgzOTRMMTQuOTMzIDE1LjgxN0MxNS4wNTUgMTUuOTM5IDE1LjIxNSAxNiAxNS4zNzUgMTZDMTUuNTM0OSAxNiAxNS42OTQ5IDE1LjkzOSAxNS44MTY5IDE1LjgxN0MxNi4wNjEgMTUuNTcyOSAxNi4wNjEgMTUuMTc3MSAxNS44MTY5IDE0LjkzMzFMOC44ODM5MiA4LjAwMDA0WlwiLFxuICAgICAgICAgICAgICAgICAgICBmaWxsOiBcIiM4Njg4OEFcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2dpbl9yZXFfYmxvY2tcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpdGVtXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgXCLQotGA0LXQvdC10YDRg9C50YLQtdGB0Ywg0LLQvNC10YHRgtC1INGBINC70YPRh9GI0LjQvNC4INC40LPRgNC+0LrQsNC80Lgg0LIg0LLQsNGI0LjRhSDQu9GO0LHQuNC80YvRhSDQuNCz0YDQsNGFXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaXRlbVwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIpLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtfdm0uX3YoXCLQn9C+0YHQu9C10LTQvdC40LUg0L3QvtCy0L7RgdGC0Lgg0Lgg0YHQvtCx0YvRgtC40Y9cIildKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpdGVtXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgW192bS5fdihcItCS0LXQu9C40LrQvtC70LXQv9C90L7QtSDRgdC+0L7QsdGJ0LXRgdGC0LLQvlwiKV0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIml0ZW1cIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCBbX3ZtLl92KFwi0KLRgNCw0L3RgdC70Y/RhtC40Lgg0Lgg0YDQtdC30YPQu9GM0YLQsNGC0Ysg0LzQsNGC0YfQtdC5XCIpXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaXRlbVwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIpLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtfdm0uX3YoXCLQkNC90LDQu9C40YLQuNC60LAg0L7RgiDQv9GA0L7RhNC10YHRgdC40L7QvdCw0LvQvtCyXCIpXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJncmlkXCIgfSwgW1xuICAgIF9jKFwiYVwiLCB7IHN0YXRpY0NsYXNzOiBcImdyaWQtcm93XCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkYXRhXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRpdGxlXCIgfSwgW1xuICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgX3ZtLl9zKF92bS50ZWFtLm5hbWUpICtcbiAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfdm0uX20oMClcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZGF0YVwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0aXRsZVwiIH0sIFtcbiAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgIF92bS5fcyhfdm0udGVhbS50YWcpICtcbiAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfdm0uX20oMSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZGF0YVwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0aXRsZVwiIH0sIFtcbiAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgIF92bS5fcyhfdm0udGVhbS5tZW1iZXJzLmxlbmd0aCkgK1xuICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF92bS5fbSgyKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkYXRhIHB0LTJcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0bi1vcmFuZ2UgdGV4dC1saWdodCBwLTIgcG9pbnRlclwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogX3ZtLmh0dHAuZ2V0VGVhbUxpbmsoX3ZtLnRlYW0uaWQpIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAg0J/QvtGB0LzQvtGC0YDQtdGC0YxcXG4gICAgICAgICAgICBcIildXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYm90dG9tXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkYXRlXCIgfSwgW19jKFwic3BhblwiLCBbX3ZtLl92KFwi0J3QsNC30LLQsNC90LjQtVwiKV0pXSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJvdHRvbVwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZGF0ZVwiIH0sIFtfYyhcInNwYW5cIiwgW192bS5fdihcItCi0LXQs1wiKV0pXSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJvdHRvbVwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZGF0ZVwiIH0sIFtfYyhcInNwYW5cIiwgW192bS5fdihcItCj0YfQsNGB0L3QuNC60L7QslwiKV0pXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJldmVudHNfdmlld1wiIH0sIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lclwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29tcG9uZW50IHVwY29taW5nX2V2ZW50c1wiIH0sXG4gICAgICAgICAgX3ZtLl9sKF92bS50ZWFtcywgZnVuY3Rpb24odGVhbSwga2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gX2MoXCJtdnAtam9pbmVkLXRlYW1cIiwgeyBrZXk6IGtleSwgYXR0cnM6IHsgdGVhbTogdGVhbSB9IH0pXG4gICAgICAgICAgfSksXG4gICAgICAgICAgMVxuICAgICAgICApXG4gICAgICBdKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaGVhZGVyIG10LTNcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGZ0XCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNsYXNzOiB7IGFjdGl2ZTogX3ZtLmFjdGl2ZSA9PT0gXCJjb21tYW5kc1wiIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgX3ZtLmFjdGl2ZSA9IFwiY29tbWFuZHNcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCLQmtCe0JzQkNCd0JTQq1wiKV1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY2xhc3M6IHsgYWN0aXZlOiBfdm0uYWN0aXZlID09PSBcInRvdXJuYW1lbnRzXCIgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uYWN0aXZlID0gXCJ0b3VybmFtZW50c1wiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihcItCi0KPQoNCd0JjQoNCrXCIpXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjbGFzczogeyBhY3RpdmU6IF92bS5hY3RpdmUgPT09IFwibWF0Y2hlc1wiIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgX3ZtLmFjdGl2ZSA9IFwibWF0Y2hlc1wiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihcItCc0JDQotCn0JhcIildXG4gICAgICAgICAgKVxuICAgICAgICBdKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJNdnBUZWFtc1wiKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQgdy01MCBtci0yIGJvcmRlci1yYWRpdXMtMFwiIH0sIFtcbiAgICBfdm0udGVhbSA9PT0gdW5kZWZpbmVkXG4gICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1ib2R5XCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJoNVwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjYXJkLXRpdGxlIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS50aXRsZSkgKyBcIlxcbiAgICAgICAgICAgIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJiYWRnZSBiYWRnZS13YXJuaW5nIGJvcmRlci1yYWRpdXMtMFwiIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLnR5cGUpKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLXRleHRcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uZGVzY3JpcHRpb24pICsgXCJcXG4gICAgICAgIFwiKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuLW9yYW5nZSB0ZXh0LWxpZ2h0IHAtMiBwb2ludGVyXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgXCJkYXRhLXRvZ2dsZVwiOiBcIm1vZGFsXCIsXG4gICAgICAgICAgICAgICAgXCJkYXRhLXRhcmdldFwiOiBcIiNtYWtlQ29tYW5kTW9kYWxcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJGVtaXQoXCJzZXRDYXBhY2l0eVwiLCBfdm0uY2FwYWNpdHkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICDQodC+0LfQtNCw0YLRjCDQutC+0LzQsNC90LTRgyBcIiArXG4gICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnR5cGUpICtcbiAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICBcIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKVxuICAgICAgICBdKVxuICAgICAgOiBfdm0uX2UoKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF92bS50ZWFtICE9PSB1bmRlZmluZWRcbiAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLWJvZHlcIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImg1XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNhcmQtdGl0bGUgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLnRlYW0ubmFtZSkgKyBcIlxcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYmFkZ2UgYmFkZ2Utd2FybmluZyBib3JkZXItcmFkaXVzLTBcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLnR5cGUpICsgXCJcXG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLXRleHRcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIgKyBfdm0uX3MoX3ZtLnRlYW0ubWVtYmVycy5sZW5ndGgpICsgXCIg0YPRh9Cw0YHQvdC40LrQvtCyXCIpXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4tb3JhbmdlIHRleHQtbGlnaHQgcC0yIHBvaW50ZXJcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogX3ZtLmh0dHAuZ2V0VGVhbUxpbmsoX3ZtLnRlYW0uaWQpIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICAgICAg0J/QvtGB0LzQvtGC0YDQtdGC0YxcXG4gICAgICAgIFwiKV1cbiAgICAgICAgICApXG4gICAgICAgIF0pXG4gICAgICA6IF92bS5fZSgpXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImdyaWRcIiB9LCBbXG4gICAgX2MoXCJhXCIsIHsgc3RhdGljQ2xhc3M6IFwiZ3JpZC1yb3dcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvZ29cIiB9LCBbXG4gICAgICAgIF92bS5tZW1iZXIuaW1hZ2UgIT09IG51bGxcbiAgICAgICAgICA/IF9jKFwiaW1nXCIpXG4gICAgICAgICAgOiBfYyhcImltZ1wiLCB7IGF0dHJzOiB7IHNyYzogXCIvaW1hZ2VzL25vTG9nby5wbmdcIiB9IH0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImRhdGFcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGl0bGVcIiB9LCBbXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLm1lbWJlci5uaWNrbmFtZSkgK1xuICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF92bS5fbSgwKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkYXRhXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRpdGxlXCIgfSwgW1xuICAgICAgICAgIF92bS5pc0NhcHRhaW5cbiAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgINCa0LDQv9C40YLQsNC9XFxuICAgICAgICAgICAgICAgIFwiKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgOiBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAg0JjQs9GA0L7QulxcbiAgICAgICAgICAgICAgICBcIilcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF92bS5fbSgxKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkYXRhXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRpdGxlXCIgfSwgW1xuICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBocmVmOiBfdm0uZ2V0U3RlYW1MaW5rKF92bS5tZW1iZXIuc3RlYW0pIH0gfSwgW1xuICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgd2lkdGg6IFwiMjBweFwiLCBzcmM6IFwiL2ltYWdlcy9sb2dpbl9zdGVhbS5zdmdcIiB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfdm0uX20oMilcbiAgICAgIF0pXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYm90dG9tXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkYXRlXCIgfSwgW19jKFwic3BhblwiLCBbX3ZtLl92KFwi0J3QuNC6XCIpXSldKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYm90dG9tXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkYXRlXCIgfSwgW19jKFwic3BhblwiLCBbX3ZtLl92KFwi0KDQvtC70YxcIildKV0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJib3R0b21cIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImRhdGVcIiB9LCBbX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLQodGC0LjQvFwiKV0pXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaGVhZGVyIG10LTMgZC1ibG9ja1wiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGZ0XCIgfSwgW1xuICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBocmVmOiBfdm0uaHR0cC5nZXRNdnBMaW5rKCkgfSB9LCBbX3ZtLl92KFwi0J3QsNC30LDQtFwiKV0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImV2ZW50c192aWV3XCIsIGF0dHJzOiB7IGlkOiBcInRlYW1NZW1iZXJzXCIgfSB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyXCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjb21wb25lbnQgdXBjb21pbmdfZXZlbnRzXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwidXBjb21pbmdfZXZlbnRzXCIgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX3ZtLl9sKF92bS50ZWFtLm1lbWJlcnMsIGZ1bmN0aW9uKG1lbWJlciwga2V5KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnRlYW0uaGFzT3duUHJvcGVydHkoXCJtZW1iZXJzXCIpXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJtdnAtdGVhbS1tZW1iZXJcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBtZW1iZXI6IG1lbWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpcy1jYXB0YWluXCI6IF92bS5jaGVja01lbWJlcklzQ2FwdGFpbihtZW1iZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDJcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93IG10LTJcIiB9LCBbXG4gICAgICAgICAgICBfdm0uaXNDcmVhdG9yXG4gICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsZnRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImFcIiwgeyBvbjogeyBjbGljazogX3ZtLmRlbGV0ZVRlYW0gfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDQo9C00LDQu9C40YLRjCDQutC+0LzQsNC90LTRg1xcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0bi1vcmFuZ2UgdGV4dC1saWdodCBwb2ludGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5zaG93QWRkTW9kYWwgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLXBsdXNcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLCoMKg0JTQvtCx0LDQstC40YLRjCDRg9GH0LDRgdC90LjQutC+0LJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIilcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIDogX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsZnRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4tb3JhbmdlIHRleHQtbGlnaHQgcG9pbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IF92bS5odHRwLnVzZXJMZWF2ZVRlYW1MaW5rKF92bS50ZWFtSWQpIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgINCf0L7QutC40L3Rg9GC0Ywg0LrQvtC80LDQvdC00YNcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaGVhZGVyXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3VuZFwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgIF9jKFwiaW1nXCIsIHsgYXR0cnM6IHsgc3JjOiBcIi9pbWFnZXMvbGFtcC5zdmdcIiwgYWx0OiBcImxhbXBcIiB9IH0pXG4gICAgICAgIF0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRpdGxlXCIgfSwgW1xuICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCj0YfQsNGB0YLQvdC40LrQuFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICApXG4gICAgICBdKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRcIiB9LCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXIgY29tbWFuZHMgcC0wIG10LTNcIiB9LCBbXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ3LTc1IGQtZmxleFwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcIm12cC10ZWFtXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIHRpdGxlOiBcItCd0LDRgdGC0YDQvtC10L0g0LjQs9GA0LDRgtGMINGB0LXRgNGM0LXQt9C90L4/XCIsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgICAgIFwi0KHQvtC30LTQsNC5INGB0LLQvtGOINC60L7QvNCw0L3QtNGDINC00LvRjyDRgtGD0YDQuNC60L7QsiA1djUg0Lgg0LLRgNGL0LLQsNC50YHRjyDQsiDQutC40LHQtdGA0YHQv9C+0YDRglwiLFxuICAgICAgICAgICAgICB0eXBlOiBcIjV4NVwiLFxuICAgICAgICAgICAgICBjYXBhY2l0eTogXCI1XCIsXG4gICAgICAgICAgICAgIHRlYW1zOiBfdm0udGVhbXNcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbjogeyBzZXRDYXBhY2l0eTogX3ZtLnNldENhcGFjaXR5IH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwibXZwLXRlYW1cIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgdGl0bGU6IFwi0J3QsNC/0LDRgNC90LjQutC4XCIsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgICAgIFwi0J3QtdGCINC/0L7RgdGC0L7Rj9C90L3QvtC5INC60L7QvNCw0L3QtNGLPyDQn9C+0LfQvtCy0Lgg0LTRgNGD0LPQsCDQuCDQstGL0L3QvtGB0LjRgtC1INGB0L7Qv9C10YDQvdC40LrQvtCyINCy0LzQtdGB0YLQtVwiLFxuICAgICAgICAgICAgICB0eXBlOiBcIjJ4MlwiLFxuICAgICAgICAgICAgICBjYXBhY2l0eTogXCIyXCIsXG4gICAgICAgICAgICAgIHRlYW1zOiBfdm0udGVhbXNcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbjogeyBzZXRDYXBhY2l0eTogX3ZtLnNldENhcGFjaXR5IH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwibW9kYWwgZmFkZVwiLFxuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICBpZDogXCJtYWtlQ29tYW5kTW9kYWxcIixcbiAgICAgICAgICAgIHRhYmluZGV4OiBcIi0xXCIsXG4gICAgICAgICAgICBcImFyaWEtbGFiZWxsZWRieVwiOiBcImV4YW1wbGVNb2RhbExhYmVsXCIsXG4gICAgICAgICAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtb2RhbC1kaWFsb2dcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLWNvbnRlbnQgYm9yZGVyLXJhZGl1cy0wXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtYm9keVwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX20oMSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCLQndCw0LfQstCw0L3QuNC1INC60L7QvNCw0L3QtNGLXCIpXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uY29tbWFuZC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJjb21tYW5kLm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sIGJvcmRlci1yYWRpdXMtMFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmNvbW1hbmQubmFtZSB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5jb21tYW5kLCBcIm5hbWVcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICFfdm0ubWVzc2FnZXMuZXJyb3IuaGFzT3duUHJvcGVydHkoXCJuYW1lXCIpXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJzbWFsbFwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tdGV4dCB0ZXh0LW11dGVkXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0JzQvtC20L3QviDQu9Cw0YLQuNC90YHQutC40LUg0LHRg9C60LLRiyDQuCDRhtC40YTRgNGLXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0ubWVzc2FnZXMuZXJyb3IuaGFzT3duUHJvcGVydHkoXCJuYW1lXCIpXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJzbWFsbFwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLm1lc3NhZ2VzLmVycm9yLm5hbWVbMF0pICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihcItCi0LXQsyDQutC+0LzQsNC90LTRi1wiKV0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmNvbW1hbmQudGFnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJjb21tYW5kLnRhZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2wgYm9yZGVyLXJhZGl1cy0wIHctNTBcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5jb21tYW5kLnRhZyB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5jb21tYW5kLCBcInRhZ1wiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgIV92bS5tZXNzYWdlcy5lcnJvci5oYXNPd25Qcm9wZXJ0eShcInRhZ1wiKVxuICAgICAgICAgICAgICAgICAgICA/IF9jKFwic21hbGxcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLXRleHQgdGV4dC1tdXRlZFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCc0LDQutGB0LjQvNGD0LwgNiDRgdC40LzQstC+0LvQvtCyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0ubWVzc2FnZXMuZXJyb3IuaGFzT3duUHJvcGVydHkoXCJ0YWdcIilcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNtYWxsXCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ubWVzc2FnZXMuZXJyb3IudGFnWzBdKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0ubWVzc2FnZXMuc3VjY2VzcyAhPT0gbnVsbFxuICAgICAgICAgICAgICAgICAgICA/IF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtc3VjY2Vzc1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLm1lc3NhZ2VzLnN1Y2Nlc3MpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLWZvb3RlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYnRuLW9yYW5nZSB0ZXh0LWxpZ2h0IHAtMiB0ZXh0LWNlbnRlciBwb2ludGVyIHctMTAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5jcmVhdGVUZWFtIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcItCh0L7Qt9C00LDRgtGMINC60L7QvNCw0L3QtNGDXCIpXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYnRuLWdyZXkgcG9pbnRlciB0ZXh0LWNlbnRlciB0ZXh0LWxpZ2h0IGJvcmRlci1yYWRpdXMtMCBwLTIgdy03NVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiZGF0YS1kaXNtaXNzXCI6IFwibW9kYWxcIiwgXCJhcmlhLWxhYmVsXCI6IFwiQ2xvc2VcIiB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLQntGC0LzQtdC90LjRgtGMXCIpXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiMTIzXCIgfSwgW19jKFwibXZwLWpvaW5lZC10ZWFtc1wiKV0sIDEpXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtaGVhZGVyXCIgfSwgW1xuICAgICAgX2MoXG4gICAgICAgIFwiaDVcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtb2RhbC10aXRsZVwiLCBhdHRyczogeyBpZDogXCJleGFtcGxlTW9kYWxMYWJlbFwiIH0gfSxcbiAgICAgICAgW192bS5fdihcItCh0L7Qt9C00LDRgtGMINC60L7QvNCw0L3QtNGDXCIpXVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJhXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJjbG9zZVwiLFxuICAgICAgICAgIGF0dHJzOiB7IFwiZGF0YS1kaXNtaXNzXCI6IFwibW9kYWxcIiwgXCJhcmlhLWxhYmVsXCI6IFwiQ2xvc2VcIiB9XG4gICAgICAgIH0sXG4gICAgICAgIFtfYyhcInNwYW5cIiwgeyBhdHRyczogeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiIH0gfSwgW192bS5fdihcIsOXXCIpXSldXG4gICAgICApXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0XCIgfSwgW1xuICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgX3ZtLl92KFxuICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQn9GA0LjQtNGD0LzQsNC5INC90LDQt9Cy0LDQvdC40LUgKNGB0LzQvtC20LXRiNGMINC/0L7QvNC10L3Rj9GC0Ywg0L/QvtGC0L7QvClcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgKVxuICAgICAgXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImV2ZW50c192aWV3XCIsIGF0dHJzOiB7IGlkOiBcInRlYW1NZW1iZXJzXCIgfSB9LFxuICAgIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbXBvbmVudCB1cGNvbWluZ19ldmVudHNcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwidXBjb21pbmdfZXZlbnRzXCIgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJoZWFkZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0aXRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS50ZWFtLm5hbWUpICtcbiAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLl9sKF92bS50ZWFtLm1lbWJlcnMsIGZ1bmN0aW9uKG1lbWJlciwga2V5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS50ZWFtLmhhc093blByb3BlcnR5KFwibWVtYmVyc1wiKVxuICAgICAgICAgICAgICAgICAgPyBfYyhcIm12cC10ZWFtLW1lbWJlclwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lbWJlcjogbWVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJpcy1jYXB0YWluXCI6IF92bS5jaGVja01lbWJlcklzQ2FwdGFpbihtZW1iZXIpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDJcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfdm0uaXNBdXRob3JpemUgJiYgX3ZtLmlzRnJlZVBsYWNlXG4gICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvdyBtdC0zXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxmdFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4tb3JhbmdlIHRleHQtbGlnaHQgcG9pbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmpvaW5UZWFtIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS1wbHVzXCIgfSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIsKgwqDQn9GA0LjRgdC+0LXQtNC10L3QuNGC0YHRj1xcbiAgICAgICAgICAgICAgICBcIilcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwibG9naW4tbW9kYWxcIiwgeyBhdHRyczogeyBzaG93OiAhX3ZtLmlzQXV0aG9yaXplIH0gfSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3VuZFwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgX2MoXCJpbWdcIiwgeyBhdHRyczogeyBzcmM6IFwiL2ltYWdlcy9sYW1wLnN2Z1wiLCBhbHQ6IFwibGFtcFwiIH0gfSlcbiAgICAgIF0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyIHAtMCBtLTBcIiB9LCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXIgd2luZG93LWhlaWdodC04MCBwLTAgbS0wXCIgfSwgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgIFwicm93IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciB3LTEwMCBoLTEwMFwiXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGZsZXgtY29sdW1uXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBtYi0zXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgIFwiYnRuLW9yYW5nZSB0ZXh0LWxpZ2h0IHAtMyBwbC01IHByLTUgZm9udC1zaXplLTIzIHBvaW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5zaG93TG9naW5Nb2RhbCB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW192bS5fdihcIkpvaW4gdGhlIEdhbWVcIildXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0uX20oMSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApXG4gICAgICAgIF1cbiAgICAgIClcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgXCJyb3cgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIHctMTAwIGgtMTAwXCJcbiAgICAgIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0bi1vcmFuZ2UgdGV4dC1saWdodCBwLTIgcGwtMyBwci0zIHBvaW50ZXJcIixcbiAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uc2hvd0xvZ2luTW9kYWwgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihcIkpvaW4gdGhlIEdhbWVcIildXG4gICAgICAgIClcbiAgICAgIF1cbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInctMTAwIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCIgfSwgW1xuICAgICAgX2MoXCJzdHJvbmdcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWxpZ2h0IGZvbnQtc2l6ZS0yM1wiIH0sIFtcbiAgICAgICAgX3ZtLl92KFwiV2hhdCB3ZSBvZmZlclwiKVxuICAgICAgXSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInctMTAwIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCIgfSwgW1xuICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1saWdodCB3LTUwIGZvbnQtc2l6ZS0xOFwiIH0sIFtcbiAgICAgICAgX3ZtLl92KFxuICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXFxuICAgICAgICAgICAgICAgICAgICAgICAgQWQgY29uc2VxdXVudHVyIGN1bHBhIGN1cGlkaXRhdGUgZGVsZW5pdGkgZGljdGEgZGlnbmlzc2ltb3MsXFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzdGluY3RpbyBkb2xvciBkb2xvcmVzIGhpYyBpcHNhIGl0YXF1ZSBsYXVkYW50aXVtIG1vbGVzdGlhcyxcXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2xsaXRpYSBub3N0cnVtLCBwZXJmZXJlbmRpcyBwcm92aWRlbnQgcXVvcyBzYXBpZW50ZSB2ZXJvIVxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgKVxuICAgICAgXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXJcIiB9LCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbXBvbmVudCB1cGNvbWluZ19ldmVudHNcIixcbiAgICAgICAgICBhdHRyczogeyBpZDogXCJ1cGNvbWluZ19ldmVudHNcIiB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImhlYWRlclwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgINCi0YPRgNC90LjRgNGLIFwiICtcbiAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZ2FtZSkgK1xuICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS5sb2FkXG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgIFwibG9hZCB3LTEwMCBoLTEwMCBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXJcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW19jKFwibG9hZFwiKV0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLl9sKF92bS50b3VybmFtZW50cywgZnVuY3Rpb24odG91cm5hbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuICFfdm0ubG9hZFxuICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZ3JpZFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImdyaWQtcm93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogXCIvcnUvbXZwL3RvdXJuYW1lbnQvXCIgKyB0b3VybmFtZW50LmlkIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9nb1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHsgYXR0cnM6IHsgc3JjOiB0b3VybmFtZW50LmxvZ28gfSB9KVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkYXRhXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0aXRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3ModG91cm5hbWVudC5uYW1lKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICNcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyh0b3VybmFtZW50Lm51bWJlcilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX20oMSwgdHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZGF0YVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyh0b3VybmFtZW50LmRhdGUpKV0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX20oMiwgdHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZGF0YVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyh0b3VybmFtZW50Lm1vZGUpKV0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX20oMywgdHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZGF0YVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvdXJuYW1lbnQuYWNjZXNzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtbG9jay1vcGVuXCIgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS1sb2NrXCIgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbSg0LCB0cnVlKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkYXRhXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0aXRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKHRvdXJuYW1lbnQucHJpemUpKV0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX20oNSwgdHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDJcbiAgICAgIClcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3VuZFwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgX2MoXCJpbWdcIiwgeyBhdHRyczogeyBzcmM6IFwiL2ltYWdlcy9sYW1wLnN2Z1wiLCBhbHQ6IFwibGFtcFwiIH0gfSlcbiAgICAgIF0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJib3R0b21cIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImRhdGVcIiB9LCBbX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLQndCw0LfQstCw0L3QuNC1XCIpXSldKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYm90dG9tXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkYXRlXCIgfSwgW19jKFwic3BhblwiLCBbX3ZtLl92KFwi0JTQsNGC0LBcIildKV0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJib3R0b21cIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImRhdGVcIiB9LCBbX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLQoNC10LbQuNC8XCIpXSldKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYm90dG9tXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkYXRlXCIgfSwgW19jKFwic3BhblwiLCBbX3ZtLl92KFwi0JTQvtGB0YLRg9C/XCIpXSldKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYm90dG9tXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkYXRlXCIgfSwgW19jKFwic3BhblwiLCBbX3ZtLl92KFwi0J/RgNC40LdcIildKV0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwic291cmNlUm9vdCI6IiJ9
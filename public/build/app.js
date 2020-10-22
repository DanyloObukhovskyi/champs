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
/* harmony import */ var _components_mvp_tournaments_MvpPageHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/mvp/tournaments/MvpPageHeader */ "./assets/js/components/mvp/tournaments/MvpPageHeader.vue");
/* harmony import */ var _components_LoginModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/LoginModal */ "./assets/js/components/LoginModal.vue");
/* harmony import */ var _components_mvp_tournaments_MvpMain__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/mvp/tournaments/MvpMain */ "./assets/js/components/mvp/tournaments/MvpMain.vue");
/* harmony import */ var _components_mvp_tournaments_MvpTournamentsList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/mvp/tournaments/MvpTournamentsList */ "./assets/js/components/mvp/tournaments/MvpTournamentsList.vue");
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


Vue.component('mvp-main', _components_mvp_tournaments_MvpMain__WEBPACK_IMPORTED_MODULE_8__["default"]);
Vue.component('mvp-page', _components_mvp_cabinet_MvpPage__WEBPACK_IMPORTED_MODULE_3__["default"]);
Vue.component('mvp-team-page', _components_mvp_cabinet_MvpTeamPage__WEBPACK_IMPORTED_MODULE_4__["default"]);
Vue.component('mvp-invite-page', _components_mvp_invite_MvpInviteTeamPage__WEBPACK_IMPORTED_MODULE_5__["default"]);
Vue.component('mvp-header', _components_mvp_tournaments_MvpPageHeader__WEBPACK_IMPORTED_MODULE_6__["default"]);
Vue.component('mvp-tournaments-list', _components_mvp_tournaments_MvpTournamentsList__WEBPACK_IMPORTED_MODULE_9__["default"]);
Vue.component('login-form', _components_LoginModal__WEBPACK_IMPORTED_MODULE_7__["default"]);
new Vue({
  el: '#app',
  provide: {
    http: new _components_mvp_services_MvpService_js__WEBPACK_IMPORTED_MODULE_1__["default"](axios),
    axios: axios,
    config: _config__WEBPACK_IMPORTED_MODULE_2__["default"],
    header: header
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
/* harmony import */ var _ConfirmCodeForm_vue_vue_type_template_id_6962b3ba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConfirmCodeForm.vue?vue&type=template&id=6962b3ba& */ "./assets/js/components/login/ConfirmCodeForm.vue?vue&type=template&id=6962b3ba&");
/* harmony import */ var _ConfirmCodeForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConfirmCodeForm.vue?vue&type=script&lang=js& */ "./assets/js/components/login/ConfirmCodeForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ConfirmCodeForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ConfirmCodeForm_vue_vue_type_template_id_6962b3ba___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ConfirmCodeForm_vue_vue_type_template_id_6962b3ba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
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

/***/ "./assets/js/components/login/ConfirmCodeForm.vue?vue&type=template&id=6962b3ba&":
/*!***************************************************************************************!*\
  !*** ./assets/js/components/login/ConfirmCodeForm.vue?vue&type=template&id=6962b3ba& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfirmCodeForm_vue_vue_type_template_id_6962b3ba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ConfirmCodeForm.vue?vue&type=template&id=6962b3ba& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/login/ConfirmCodeForm.vue?vue&type=template&id=6962b3ba&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfirmCodeForm_vue_vue_type_template_id_6962b3ba___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfirmCodeForm_vue_vue_type_template_id_6962b3ba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../config */ "./assets/js/config.js");









var MvpService = function MvpService(axios) {
  var _this = this;

  Object(_Applications_MAMP_htdocs_champspro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MvpService);

  Object(_Applications_MAMP_htdocs_champspro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(this, "baseUrl", "https://".concat(window.location.hostname, "/"));

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

/***/ "./assets/js/components/mvp/tournaments/MvpPageHeader.vue":
/*!****************************************************************!*\
  !*** ./assets/js/components/mvp/tournaments/MvpPageHeader.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MvpPageHeader_vue_vue_type_template_id_7c8d3a25_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MvpPageHeader.vue?vue&type=template&id=7c8d3a25&scoped=true& */ "./assets/js/components/mvp/tournaments/MvpPageHeader.vue?vue&type=template&id=7c8d3a25&scoped=true&");
/* harmony import */ var _MvpPageHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MvpPageHeader.vue?vue&type=script&lang=js& */ "./assets/js/components/mvp/tournaments/MvpPageHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MvpPageHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MvpPageHeader_vue_vue_type_template_id_7c8d3a25_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MvpPageHeader_vue_vue_type_template_id_7c8d3a25_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7c8d3a25",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/components/mvp/tournaments/MvpPageHeader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/components/mvp/tournaments/MvpPageHeader.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./assets/js/components/mvp/tournaments/MvpPageHeader.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MvpPageHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MvpPageHeader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/mvp/tournaments/MvpPageHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MvpPageHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/components/mvp/tournaments/MvpPageHeader.vue?vue&type=template&id=7c8d3a25&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./assets/js/components/mvp/tournaments/MvpPageHeader.vue?vue&type=template&id=7c8d3a25&scoped=true& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MvpPageHeader_vue_vue_type_template_id_7c8d3a25_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MvpPageHeader.vue?vue&type=template&id=7c8d3a25&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/mvp/tournaments/MvpPageHeader.vue?vue&type=template&id=7c8d3a25&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MvpPageHeader_vue_vue_type_template_id_7c8d3a25_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MvpPageHeader_vue_vue_type_template_id_7c8d3a25_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
      this.show = false;
    },
    checkStep: function checkStep(step) {
      return this.show && this.step === step;
    }
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      successMessage: null
    };
  },
  methods: {
    sendRegistrationConfirm: function sendRegistrationConfirm() {
      var _this = this;

      var formData = new FormData();
      formData.append('user[code]', this.confirmCode);
      formData.append('user[email]', this.email);
      this.axios.post('/ru/check/confirm/code', formData).then(function (_ref) {
        var data = _ref.data;
        _this.errorMessage = null;
        _this.successMessage = data;
        _this.codeConfirmed = true;

        _this.$emit('registration');
      })["catch"](function (_ref2) {
        var response = _ref2.response;
        _this.errorMessage = response.data;
      });
    },
    showNickname: function showNickname() {
      if (this.codeConfirmed) {
        this.$emit('setStep', 'nickname');
      }
    },
    close: function close() {
      this.$emit('close');
    }
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
  props: ['email', 'check'],
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
        this.axios.post('/ru/generate/confirm/code', this.emailForm);
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
    update: function update(value) {
      this.$emit('input', value);
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
/* harmony import */ var _LoginModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../LoginModal */ "./assets/js/components/LoginModal.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    'login-modal': _LoginModal__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
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
        this.$refs.loginModal.show = true;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/mvp/tournaments/MvpPageHeader.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/mvp/tournaments/MvpPageHeader.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "MvpPageHeader",
  inject: ['http'],
  props: ['isAuthorize', 'showLoginForm'],
  data: function data() {
    return {
      show: false
    };
  },
  methods: {
    showLoginForm: function showLoginForm() {
      header.view = 2;
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
      _c("login", {
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
      }),
      _vm._v(" "),
      _c("registration", {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.checkStep("registration"),
            expression: "checkStep('registration')"
          }
        ],
        attrs: { email: _vm.email, check: _vm.check },
        on: {
          setStep: _vm.setStep,
          close: _vm.close,
          inputEmail: function(value) {
            _vm.email = value
          },
          inputPassword: function(value) {
            _vm.password = value
          }
        },
        model: {
          value: _vm.check,
          callback: function($$v) {
            _vm.check = $$v
          },
          expression: "check"
        }
      }),
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
          registration: _vm.registration
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/login/ConfirmCodeForm.vue?vue&type=template&id=6962b3ba&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/login/ConfirmCodeForm.vue?vue&type=template&id=6962b3ba& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
        _c("div", { staticClass: "login_input" }, [
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
          _c("span", [_vm._v("Код подтверждения")])
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "send", on: { click: _vm.sendRegistrationConfirm } },
          [_vm._v("\n                Отправить\n            ")]
        ),
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
          [_vm._v("\n                Play\n            ")]
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
        _c("div", { staticClass: "alternate" }, [
          _c("a", { attrs: { href: _vm.steamLoginLink } }, [
            _c("img", { attrs: { src: "/images/login_steam.svg" } })
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
          _vm._v("\n                Finish Registration\n            ")
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
                    return _vm.update($event.target.checked)
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
              style: { opacity: _vm.check ? "1" : ".5" },
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
            _c("a", { attrs: { href: _vm.steamLoginLink } }, [
              _c("img", { attrs: { src: "/images/login_steam.svg" } })
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
  return _c(
    "div",
    { staticClass: "container p-0 m-0" },
    [
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
                _c(
                  "div",
                  { staticClass: "d-flex justify-content-center mb-3" },
                  [
                    _c(
                      "a",
                      {
                        staticClass:
                          "btn-orange text-light p-3 pl-5 pr-5 font-size-23 pointer",
                        on: { click: _vm.showLoginModal }
                      },
                      [_vm._v("Join the Game")]
                    )
                  ]
                ),
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
      ),
      _vm._v(" "),
      _c("login-modal", {
        ref: "loginModal",
        attrs: {
          redirect: _vm.loginRedirect,
          show: _vm.show,
          "show-first": "registration"
        }
      })
    ],
    1
  )
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/mvp/tournaments/MvpPageHeader.vue?vue&type=template&id=7c8d3a25&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/mvp/tournaments/MvpPageHeader.vue?vue&type=template&id=7c8d3a25&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
    "nav",
    { staticClass: "navbar navbar-expand-lg navbar-light bg-light navbar-mvp" },
    [
      _c(
        "button",
        {
          staticClass: "navbar-toggler border-none",
          class: { collapsed: !_vm.show },
          attrs: {
            type: "button",
            "data-toggle": "collapse",
            "data-target": "#navbarSupportedContent",
            "aria-controls": "navbarSupportedContent",
            "aria-expanded": "false",
            "aria-label": "Toggle navigation"
          }
        },
        [
          _c("span", {
            staticClass: "navbar-toggler-icon",
            on: {
              click: function($event) {
                _vm.show = !_vm.show
              }
            }
          })
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "navbar-collapse collapse",
          class: { show: _vm.show },
          attrs: { id: "navbarSupportedContent" }
        },
        [
          _c(
            "ul",
            {
              staticClass: "navbar-nav mr-auto d-flex w-100 justify-content-end"
            },
            [
              !_vm.isAuthorize
                ? _c("li", { staticClass: "nav-item" }, [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link",
                        attrs: { href: "#" },
                        on: { click: _vm.showLoginForm }
                      },
                      [
                        _vm._v(
                          "\n                    Зарегестрировать профиль\n                "
                        )
                      ]
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm._m(0),
              _vm._v(" "),
              _vm._m(1),
              _vm._v(" "),
              _vm.isAuthorize
                ? _c("li", { staticClass: "nav-item" }, [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link",
                        attrs: { href: _vm.http.getProfileLink() }
                      },
                      [
                        _vm._v(
                          "\n                    My Gaming Profile\n                "
                        )
                      ]
                    )
                  ])
                : _vm._e()
            ]
          )
        ]
      )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "nav-item" }, [
      _c("a", { staticClass: "nav-link", attrs: { href: "#" } }, [
        _vm._v("\n                    Help\n                ")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "nav-item" }, [
      _c("a", { staticClass: "nav-link", attrs: { href: "#" } }, [
        _vm._v(
          "\n                    Отправить письмо поддержке\n                "
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Mb2FkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Mb2FkLnZ1ZT9hYTljIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0xvYWQudnVlPzdkOTUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvTG9hZC52dWU/MDg1MCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Mb2dpbk1vZGFsLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Mb2dpbk1vZGFsLnZ1ZT8xYTc1Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0xvZ2luTW9kYWwudnVlPzkwNTUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4vQ29uZmlybUNvZGVGb3JtLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9sb2dpbi9Db25maXJtQ29kZUZvcm0udnVlPzIxN2QiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4vQ29uZmlybUNvZGVGb3JtLnZ1ZT81OGNhIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xvZ2luL0NvbmdyYXR1bGF0aW9uc0Zvcm0udnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xvZ2luL0NvbmdyYXR1bGF0aW9uc0Zvcm0udnVlPzA3Y2IiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4vQ29uZ3JhdHVsYXRpb25zRm9ybS52dWU/NjQ0MCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9sb2dpbi9Mb2dpbkZvcm0udnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xvZ2luL0xvZ2luRm9ybS52dWU/ZjQ0OSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9sb2dpbi9Mb2dpbkZvcm0udnVlP2VhMzIiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4vTmlja25hbWVGb3JtLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9sb2dpbi9OaWNrbmFtZUZvcm0udnVlP2QxZDUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4vTmlja25hbWVGb3JtLnZ1ZT84ZTMwIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xvZ2luL1JlZ2lzdHJhdGlvbkZvcm0udnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xvZ2luL1JlZ2lzdHJhdGlvbkZvcm0udnVlP2ZhNmIiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4vUmVnaXN0cmF0aW9uRm9ybS52dWU/MTJjOSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tdnAvY2FiaW5ldC9NdnBKb2luZWRUZWFtLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tdnAvY2FiaW5ldC9NdnBKb2luZWRUZWFtLnZ1ZT9kYTg0Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL212cC9jYWJpbmV0L012cEpvaW5lZFRlYW0udnVlPzRkYmYiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL2NhYmluZXQvTXZwSm9pbmVkVGVhbXMudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL212cC9jYWJpbmV0L012cEpvaW5lZFRlYW1zLnZ1ZT9lNjU2Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL212cC9jYWJpbmV0L012cEpvaW5lZFRlYW1zLnZ1ZT83MmQwIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL212cC9jYWJpbmV0L012cFBhZ2UudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL212cC9jYWJpbmV0L012cFBhZ2UudnVlPzQxODciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL2NhYmluZXQvTXZwUGFnZS52dWU/YTUwMyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tdnAvY2FiaW5ldC9NdnBUZWFtLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tdnAvY2FiaW5ldC9NdnBUZWFtLnZ1ZT9lNmFkIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL212cC9jYWJpbmV0L012cFRlYW0udnVlPzkwOTciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL2NhYmluZXQvTXZwVGVhbU1lbWJlci52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL2NhYmluZXQvTXZwVGVhbU1lbWJlci52dWU/MzkyZiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tdnAvY2FiaW5ldC9NdnBUZWFtTWVtYmVyLnZ1ZT83NGRhIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL212cC9jYWJpbmV0L012cFRlYW1QYWdlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tdnAvY2FiaW5ldC9NdnBUZWFtUGFnZS52dWU/NTAxZiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tdnAvY2FiaW5ldC9NdnBUZWFtUGFnZS52dWU/NzRjMSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tdnAvY2FiaW5ldC9NdnBUZWFtcy52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL2NhYmluZXQvTXZwVGVhbXMudnVlPzcyMGMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL2NhYmluZXQvTXZwVGVhbXMudnVlP2VmZDAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL2ludml0ZS9NdnBJbnZpdGVUZWFtUGFnZS52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL2ludml0ZS9NdnBJbnZpdGVUZWFtUGFnZS52dWU/M2YyMiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tdnAvaW52aXRlL012cEludml0ZVRlYW1QYWdlLnZ1ZT9jYzU1Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL212cC9zZXJ2aWNlcy9NdnBTZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL212cC90b3VybmFtZW50cy9NdnBNYWluLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tdnAvdG91cm5hbWVudHMvTXZwTWFpbi52dWU/ZDA3MiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tdnAvdG91cm5hbWVudHMvTXZwTWFpbi52dWU/YjFjMCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tdnAvdG91cm5hbWVudHMvTXZwUGFnZUhlYWRlci52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL3RvdXJuYW1lbnRzL012cFBhZ2VIZWFkZXIudnVlP2ViODciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL3RvdXJuYW1lbnRzL012cFBhZ2VIZWFkZXIudnVlPzJmYmQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL3RvdXJuYW1lbnRzL012cFRvdXJuYW1lbnRzTGlzdC52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL3RvdXJuYW1lbnRzL012cFRvdXJuYW1lbnRzTGlzdC52dWU/M2Y0MSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tdnAvdG91cm5hbWVudHMvTXZwVG91cm5hbWVudHNMaXN0LnZ1ZT82NTI5Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy9qcy9jb21wb25lbnRzL0xvYWQudnVlIiwid2VicGFjazovLy9hc3NldHMvanMvY29tcG9uZW50cy9Mb2dpbk1vZGFsLnZ1ZSIsIndlYnBhY2s6Ly8vYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4vQ29uZmlybUNvZGVGb3JtLnZ1ZSIsIndlYnBhY2s6Ly8vYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4vQ29uZ3JhdHVsYXRpb25zRm9ybS52dWUiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xvZ2luL0xvZ2luRm9ybS52dWUiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xvZ2luL05pY2tuYW1lRm9ybS52dWUiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xvZ2luL1JlZ2lzdHJhdGlvbkZvcm0udnVlIiwid2VicGFjazovLy9hc3NldHMvanMvY29tcG9uZW50cy9tdnAvY2FiaW5ldC9NdnBKb2luZWRUZWFtLnZ1ZSIsIndlYnBhY2s6Ly8vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL2NhYmluZXQvTXZwSm9pbmVkVGVhbXMudnVlIiwid2VicGFjazovLy9hc3NldHMvanMvY29tcG9uZW50cy9tdnAvY2FiaW5ldC9NdnBQYWdlLnZ1ZSIsIndlYnBhY2s6Ly8vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL2NhYmluZXQvTXZwVGVhbS52dWUiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy9qcy9jb21wb25lbnRzL212cC9jYWJpbmV0L012cFRlYW1NZW1iZXIudnVlIiwid2VicGFjazovLy9hc3NldHMvanMvY29tcG9uZW50cy9tdnAvY2FiaW5ldC9NdnBUZWFtUGFnZS52dWUiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy9qcy9jb21wb25lbnRzL212cC9jYWJpbmV0L012cFRlYW1zLnZ1ZSIsIndlYnBhY2s6Ly8vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL2ludml0ZS9NdnBJbnZpdGVUZWFtUGFnZS52dWUiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy9qcy9jb21wb25lbnRzL212cC90b3VybmFtZW50cy9NdnBNYWluLnZ1ZSIsIndlYnBhY2s6Ly8vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL3RvdXJuYW1lbnRzL012cFBhZ2VIZWFkZXIudnVlIiwid2VicGFjazovLy9hc3NldHMvanMvY29tcG9uZW50cy9tdnAvdG91cm5hbWVudHMvTXZwVG91cm5hbWVudHNMaXN0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Mb2FkLnZ1ZT8zM2JhIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0xvYWQudnVlP2UwMTciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvTG9naW5Nb2RhbC52dWU/NmViMCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9sb2dpbi9Db25maXJtQ29kZUZvcm0udnVlP2U3NTIiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4vQ29uZ3JhdHVsYXRpb25zRm9ybS52dWU/MDZmMSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9sb2dpbi9Mb2dpbkZvcm0udnVlPzc5ODMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4vTmlja25hbWVGb3JtLnZ1ZT84NmJmIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xvZ2luL1JlZ2lzdHJhdGlvbkZvcm0udnVlPzU5ZmUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL2NhYmluZXQvTXZwSm9pbmVkVGVhbS52dWU/ZDViMyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tdnAvY2FiaW5ldC9NdnBKb2luZWRUZWFtcy52dWU/OTEyOCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tdnAvY2FiaW5ldC9NdnBQYWdlLnZ1ZT9kYjBhIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL212cC9jYWJpbmV0L012cFRlYW0udnVlP2MzZGIiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL2NhYmluZXQvTXZwVGVhbU1lbWJlci52dWU/NjM3YyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tdnAvY2FiaW5ldC9NdnBUZWFtUGFnZS52dWU/NzU1YyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tdnAvY2FiaW5ldC9NdnBUZWFtcy52dWU/NTQyYSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tdnAvaW52aXRlL012cEludml0ZVRlYW1QYWdlLnZ1ZT81OWE3Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL212cC90b3VybmFtZW50cy9NdnBNYWluLnZ1ZT9mYTNjIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL212cC90b3VybmFtZW50cy9NdnBQYWdlSGVhZGVyLnZ1ZT9iMDRjIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL212cC90b3VybmFtZW50cy9NdnBUb3VybmFtZW50c0xpc3QudnVlP2ZmOTgiXSwibmFtZXMiOlsid2luZG93IiwiYXhpb3MiLCJyZXF1aXJlIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiY29tbW9uIiwidG9rZW4iLCJkb2N1bWVudCIsImhlYWQiLCJxdWVyeVNlbGVjdG9yIiwiX2NzcmZfdG9rZW4iLCJjb250ZW50IiwiY29uc29sZSIsImVycm9yIiwiVnVlIiwiY29tcG9uZW50IiwiTXZwTWFpbiIsIk12cFBhZ2UiLCJNdnBUZWFtUGFnZSIsIk12cEludml0ZVRlYW1QYWdlIiwiTXZwUGFnZUhlYWRlciIsIk12cFRvdXJuYW1lbnRzTGlzdCIsIkxvZ2luTW9kYWwiLCJlbCIsInByb3ZpZGUiLCJodHRwIiwiTXZwU2VydmljZSIsImNvbmZpZyIsImhlYWRlciIsImxvY2F0aW9uIiwiaG9zdG5hbWUiLCJwYXRoIiwiYmFzZVVybCIsImNhcGFjaXR5IiwibmFtZSIsInRhZyIsInBvc3QiLCJ1cmwiLCJpZCIsImdhbWUiLCJTVEVBTV9MT0dJTl9MSU5LIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1Qzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsTUFBTSxDQUFDQyxLQUFQLEdBQWVDLG1CQUFPLENBQUMsNENBQUQsQ0FBdEI7QUFDQUYsTUFBTSxDQUFDQyxLQUFQLENBQWFFLFFBQWIsQ0FBc0JDLE9BQXRCLENBQThCQyxNQUE5QixDQUFxQyxrQkFBckMsSUFBMkQsZ0JBQTNEO0FBRUEsSUFBSUMsS0FBSyxHQUFHQyxRQUFRLENBQUNDLElBQVQsQ0FBY0MsYUFBZCxDQUE0Qix5QkFBNUIsQ0FBWjs7QUFFQSxJQUFJSCxLQUFKLEVBQVc7QUFDUE4sUUFBTSxDQUFDQyxLQUFQLENBQWFTLFdBQWIsR0FBMkJKLEtBQUssQ0FBQ0ssT0FBakM7QUFDSCxDQUZELE1BRU87QUFDSEMsU0FBTyxDQUFDQyxLQUFSLENBQWMsc0JBQWQ7QUFDSCxDLENBRUQ7QUFDQTs7O0FBRUFDLEdBQUcsQ0FBQ0MsU0FBSixDQUFjLFVBQWQsRUFBMEJDLDJFQUExQjtBQUNBRixHQUFHLENBQUNDLFNBQUosQ0FBYyxVQUFkLEVBQTBCRSx1RUFBMUI7QUFDQUgsR0FBRyxDQUFDQyxT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eHRyYWN0LXBsdWdpbiIsIi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5pbXBvcnQgJy4uL2Nzcy9hcHAuY3NzJztcbmltcG9ydCBNdnBTZXJ2aWNlIGZyb20gXCIuL2NvbXBvbmVudHMvbXZwL3NlcnZpY2VzL012cFNlcnZpY2UuanNcIjtcbmltcG9ydCBjb25maWcgZnJvbSBcIi4vY29uZmlnXCI7XG5pbXBvcnQgTXZwUGFnZSBmcm9tIFwiLi9jb21wb25lbnRzL212cC9jYWJpbmV0L012cFBhZ2VcIjtcbmltcG9ydCBNdnBUZWFtUGFnZSBmcm9tIFwiLi9jb21wb25lbnRzL212cC9jYWJpbmV0L012cFRlYW1QYWdlXCI7XG5pbXBvcnQgTXZwSW52aXRlVGVhbVBhZ2UgZnJvbSBcIi4vY29tcG9uZW50cy9tdnAvaW52aXRlL012cEludml0ZVRlYW1QYWdlXCI7XG5pbXBvcnQgTXZwUGFnZUhlYWRlciBmcm9tIFwiLi9jb21wb25lbnRzL212cC90b3VybmFtZW50cy9NdnBQYWdlSGVhZGVyXCI7XG5pbXBvcnQgTG9naW5Nb2RhbCBmcm9tIFwiLi9jb21wb25lbnRzL0xvZ2luTW9kYWxcIjtcbmltcG9ydCBNdnBNYWluIGZyb20gXCIuL2NvbXBvbmVudHMvbXZwL3RvdXJuYW1lbnRzL012cE1haW5cIjtcbmltcG9ydCBNdnBUb3VybmFtZW50c0xpc3QgZnJvbSBcIi4vY29tcG9uZW50cy9tdnAvdG91cm5hbWVudHMvTXZwVG91cm5hbWVudHNMaXN0XCI7XG5cbndpbmRvdy5heGlvcyA9IHJlcXVpcmUoJ2F4aW9zJyk7XG53aW5kb3cuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ1gtUmVxdWVzdGVkLVdpdGgnXSA9ICdYTUxIdHRwUmVxdWVzdCc7XG5cbmxldCB0b2tlbiA9IGRvY3VtZW50LmhlYWQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwiY3NyZi10b2tlblwiXScpO1xuXG5pZiAodG9rZW4pIHtcbiAgICB3aW5kb3cuYXhpb3MuX2NzcmZfdG9rZW4gPSB0b2tlbi5jb250ZW50O1xufSBlbHNlIHtcbiAgICBjb25zb2xlLmVycm9yKCdDU1JGIHRva2VuIG5vdCBmb3VuZCcpO1xufVxuXG4vLyBOZWVkIGpRdWVyeT8gSW5zdGFsbCBpdCB3aXRoIFwieWFybiBhZGQganF1ZXJ5XCIsIHRoZW4gdW5jb21tZW50IHRvIGltcG9ydCBpdC5cbi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cblZ1ZS5jb21wb25lbnQoJ212cC1tYWluJywgTXZwTWFpbilcblZ1ZS5jb21wb25lbnQoJ212cC1wYWdlJywgTXZwUGFnZSlcblZ1ZS5jb21wb25lbnQoJ212cC10ZWFtLXBhZ2UnLCBNdnBUZWFtUGFnZSlcblZ1ZS5jb21wb25lbnQoJ212cC1pbnZpdGUtcGFnZScsIE12cEludml0ZVRlYW1QYWdlKVxuVnVlLmNvbXBvbmVudCgnbXZwLWhlYWRlcicsIE12cFBhZ2VIZWFkZXIpXG5WdWUuY29tcG9uZW50KCdtdnAtdG91cm5hbWVudHMtbGlzdCcsIE12cFRvdXJuYW1lbnRzTGlzdClcblxuVnVlLmNvbXBvbmVudCgnbG9naW4tZm9ybScsIExvZ2luTW9kYWwpXG5cbm5ldyBWdWUoe1xuICAgIGVsOiAnI2FwcCcsXG4gICAgcHJvdmlkZToge1xuICAgICAgICBodHRwOiBuZXcgTXZwU2VydmljZShheGlvcyksXG4gICAgICAgIGF4aW9zLFxuICAgICAgICBjb25maWcsXG4gICAgICAgIGhlYWRlclxuICAgIH1cbn0pXG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0xvYWQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUwN2NmNGYyJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0xvYWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Mb2FkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9Mb2FkLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTUwN2NmNGYyJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI1MDdjZjRmMlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvY2hhbXBzcHJvL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzUwN2NmNGYyJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzUwN2NmNGYyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzUwN2NmNGYyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Mb2FkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01MDdjZjRmMiZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc1MDdjZjRmMicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2pzL2NvbXBvbmVudHMvTG9hZC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xvYWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xvYWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS1vbmVPZi0xLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTG9hZC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01MDdjZjRmMiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS1vbmVPZi0xLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTG9hZC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01MDdjZjRmMiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2FkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01MDdjZjRmMiZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTG9naW5Nb2RhbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzY5YzRiYTUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTG9naW5Nb2RhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0xvZ2luTW9kYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvQXBwbGljYXRpb25zL01BTVAvaHRkb2NzL2NoYW1wc3Byby9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCczNjljNGJhNScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCczNjljNGJhNScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCczNjljNGJhNScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTG9naW5Nb2RhbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzY5YzRiYTUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMzY5YzRiYTUnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy9qcy9jb21wb25lbnRzL0xvZ2luTW9kYWwudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2dpbk1vZGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2dpbk1vZGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2dpbk1vZGFsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNjljNGJhNSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQ29uZmlybUNvZGVGb3JtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02OTYyYjNiYSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Db25maXJtQ29kZUZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Db25maXJtQ29kZUZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvQXBwbGljYXRpb25zL01BTVAvaHRkb2NzL2NoYW1wc3Byby9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2OTYyYjNiYScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2OTYyYjNiYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2OTYyYjNiYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQ29uZmlybUNvZGVGb3JtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02OTYyYjNiYSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2OTYyYjNiYScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4vQ29uZmlybUNvZGVGb3JtLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ29uZmlybUNvZGVGb3JtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Db25maXJtQ29kZUZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NvbmZpcm1Db2RlRm9ybS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Njk2MmIzYmEmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0NvbmdyYXR1bGF0aW9uc0Zvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY3OTlhMmMyJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0NvbmdyYXR1bGF0aW9uc0Zvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Db25ncmF0dWxhdGlvbnNGb3JtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNjc5OWEyYzJcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvQXBwbGljYXRpb25zL01BTVAvaHRkb2NzL2NoYW1wc3Byby9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2Nzk5YTJjMicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2Nzk5YTJjMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2Nzk5YTJjMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQ29uZ3JhdHVsYXRpb25zRm9ybS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Njc5OWEyYzImc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNjc5OWEyYzInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy9qcy9jb21wb25lbnRzL2xvZ2luL0NvbmdyYXR1bGF0aW9uc0Zvcm0udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Db25ncmF0dWxhdGlvbnNGb3JtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Db25ncmF0dWxhdGlvbnNGb3JtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Db25ncmF0dWxhdGlvbnNGb3JtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02Nzk5YTJjMiZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTG9naW5Gb3JtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hNzk2ZjFkNCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Mb2dpbkZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Mb2dpbkZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvQXBwbGljYXRpb25zL01BTVAvaHRkb2NzL2NoYW1wc3Byby9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdhNzk2ZjFkNCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdhNzk2ZjFkNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdhNzk2ZjFkNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTG9naW5Gb3JtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hNzk2ZjFkNCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdhNzk2ZjFkNCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4vTG9naW5Gb3JtLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTG9naW5Gb3JtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2dpbkZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xvZ2luRm9ybS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YTc5NmYxZDQmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL05pY2tuYW1lRm9ybS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZWJiZjE5Y2Umc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTmlja25hbWVGb3JtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vTmlja25hbWVGb3JtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiZWJiZjE5Y2VcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvQXBwbGljYXRpb25zL01BTVAvaHRkb2NzL2NoYW1wc3Byby9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdlYmJmMTljZScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdlYmJmMTljZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdlYmJmMTljZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTmlja25hbWVGb3JtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lYmJmMTljZSZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdlYmJmMTljZScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4vTmlja25hbWVGb3JtLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTmlja25hbWVGb3JtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9OaWNrbmFtZUZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL05pY2tuYW1lRm9ybS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZWJiZjE5Y2Umc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1JlZ2lzdHJhdGlvbkZvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRkN2QwOGU0JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1JlZ2lzdHJhdGlvbkZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9SZWdpc3RyYXRpb25Gb3JtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL0FwcGxpY2F0aW9ucy9NQU1QL2h0ZG9jcy9jaGFtcHNwcm8vbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNGQ3ZDA4ZTQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNGQ3ZDA4ZTQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNGQ3ZDA4ZTQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1JlZ2lzdHJhdGlvbkZvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRkN2QwOGU0JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzRkN2QwOGU0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvanMvY29tcG9uZW50cy9sb2dpbi9SZWdpc3RyYXRpb25Gb3JtLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUmVnaXN0cmF0aW9uRm9ybS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUmVnaXN0cmF0aW9uRm9ybS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUmVnaXN0cmF0aW9uRm9ybS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGQ3ZDA4ZTQmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL012cEpvaW5lZFRlYW0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM2NjAzYjFkJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL012cEpvaW5lZFRlYW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9NdnBKb2luZWRUZWFtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMzY2MDNiMWRcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvQXBwbGljYXRpb25zL01BTVAvaHRkb2NzL2NoYW1wc3Byby9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCczNjYwM2IxZCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCczNjYwM2IxZCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCczNjYwM2IxZCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTXZwSm9pbmVkVGVhbS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzY2MDNiMWQmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMzY2MDNiMWQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy9qcy9jb21wb25lbnRzL212cC9jYWJpbmV0L012cEpvaW5lZFRlYW0udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NdnBKb2luZWRUZWFtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NdnBKb2luZWRUZWFtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NdnBKb2luZWRUZWFtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNjYwM2IxZCZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTXZwSm9pbmVkVGVhbXMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWNkNWE2Y2I0JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL012cEpvaW5lZFRlYW1zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vTXZwSm9pbmVkVGVhbXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJjZDVhNmNiNFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvY2hhbXBzcHJvL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2NkNWE2Y2I0JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2NkNWE2Y2I0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2NkNWE2Y2I0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9NdnBKb2luZWRUZWFtcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Y2Q1YTZjYjQmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignY2Q1YTZjYjQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy9qcy9jb21wb25lbnRzL212cC9jYWJpbmV0L012cEpvaW5lZFRlYW1zLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTXZwSm9pbmVkVGVhbXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL012cEpvaW5lZFRlYW1zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NdnBKb2luZWRUZWFtcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Y2Q1YTZjYjQmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL012cFBhZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA3YWUwOWI0JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL012cFBhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9NdnBQYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMDdhZTA5YjRcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvQXBwbGljYXRpb25zL01BTVAvaHRkb2NzL2NoYW1wc3Byby9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcwN2FlMDliNCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcwN2FlMDliNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcwN2FlMDliNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTXZwUGFnZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDdhZTA5YjQmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMDdhZTA5YjQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy9qcy9jb21wb25lbnRzL212cC9jYWJpbmV0L012cFBhZ2UudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NdnBQYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NdnBQYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NdnBQYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wN2FlMDliNCZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTXZwVGVhbS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjU3YTQzZjQmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTXZwVGVhbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL012cFRlYW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvQXBwbGljYXRpb25zL01BTVAvaHRkb2NzL2NoYW1wc3Byby9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2NTdhNDNmNCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2NTdhNDNmNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2NTdhNDNmNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTXZwVGVhbS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjU3YTQzZjQmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNjU3YTQzZjQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy9qcy9jb21wb25lbnRzL212cC9jYWJpbmV0L012cFRlYW0udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NdnBUZWFtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NdnBUZWFtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NdnBUZWFtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NTdhNDNmNCZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTXZwVGVhbU1lbWJlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjA0MDU4YWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTXZwVGVhbU1lbWJlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL012cFRlYW1NZW1iZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvQXBwbGljYXRpb25zL01BTVAvaHRkb2NzL2NoYW1wc3Byby9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcyMDQwNThhZScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcyMDQwNThhZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcyMDQwNThhZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTXZwVGVhbU1lbWJlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjA0MDU4YWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMjA0MDU4YWUnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy9qcy9jb21wb25lbnRzL212cC9jYWJpbmV0L012cFRlYW1NZW1iZXIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NdnBUZWFtTWVtYmVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NdnBUZWFtTWVtYmVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NdnBUZWFtTWVtYmVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yMDQwNThhZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTXZwVGVhbVBhZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTMzNDcxZDIzJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL012cFRlYW1QYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vTXZwVGVhbVBhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvQXBwbGljYXRpb25zL01BTVAvaHRkb2NzL2NoYW1wc3Byby9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCczMzQ3MWQyMycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCczMzQ3MWQyMycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCczMzQ3MWQyMycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTXZwVGVhbVBhZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTMzNDcxZDIzJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzMzNDcxZDIzJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvanMvY29tcG9uZW50cy9tdnAvY2FiaW5ldC9NdnBUZWFtUGFnZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL012cFRlYW1QYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NdnBUZWFtUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTXZwVGVhbVBhZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTMzNDcxZDIzJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9NdnBUZWFtcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGQ3OWRiYWYmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTXZwVGVhbXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9NdnBUZWFtcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvY2hhbXBzcHJvL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzRkNzlkYmFmJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzRkNzlkYmFmJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzRkNzlkYmFmJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9NdnBUZWFtcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGQ3OWRiYWYmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNGQ3OWRiYWYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy9qcy9jb21wb25lbnRzL212cC9jYWJpbmV0L012cFRlYW1zLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTXZwVGVhbXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL012cFRlYW1zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NdnBUZWFtcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGQ3OWRiYWYmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL012cEludml0ZVRlYW1QYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xOWMzNTUwMiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9NdnBJbnZpdGVUZWFtUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL012cEludml0ZVRlYW1QYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL0FwcGxpY2F0aW9ucy9NQU1QL2h0ZG9jcy9jaGFtcHNwcm8vbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMTljMzU1MDInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMTljMzU1MDInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMTljMzU1MDInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL012cEludml0ZVRlYW1QYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xOWMzNTUwMiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcxOWMzNTUwMicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL2ludml0ZS9NdnBJbnZpdGVUZWFtUGFnZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL012cEludml0ZVRlYW1QYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NdnBJbnZpdGVUZWFtUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTXZwSW52aXRlVGVhbVBhZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE5YzM1NTAyJlwiIiwiaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi4vLi4vLi4vY29uZmlnXCI7XG5cbmNsYXNzIE12cFNlcnZpY2Uge1xuXG4gICAgYmFzZVVybCA9IGBodHRwczovLyR7d2luZG93LmxvY2F0aW9uLmhvc3RuYW1lfS9gO1xuXG4gICAgY29uc3RydWN0b3IoYXhpb3MpIHtcbiAgICAgICAgdGhpcy5heGlvcyA9IGF4aW9zXG4gICAgfVxuXG4gICAgdXJsID0gcGF0aCA9PiB7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLmJhc2VVcmx9cnUvJHtwYXRofWA7XG4gICAgfVxuXG4gICAgY3JlYXRlTXZwVGVhbSA9IGFzeW5jIChjYXBhY2l0eSwgbmFtZSwgdGFnKSA9PiB7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmF4aW9zLnBvc3QodGhpcy51cmwoJ3VzZXIvbXZwL2NyZWF0ZS90ZWFtJyksIHtcbiAgICAgICAgICAgIGNhcGFjaXR5LCBuYW1lLCB0YWdcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBnZXRVc2VyVGVhbXMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmF4aW9zLnBvc3QodGhpcy51cmwoJ3VzZXIvbXZwL2dldC90ZWFtcycpKVxuICAgIH1cblxuICAgIGdldFRlYW1MaW5rID0gKGlkKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnVybChgdXNlci9tdnAvdGVhbS8ke2lkfWApXG4gICAgfVxuXG4gICAgZ2V0TXZwTGluayA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXJsKCd1c2VyL212cC8nKVxuICAgIH1cblxuICAgIGdldE12cFRlYW0gPSBhc3luYyBpZCA9PiB7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmF4aW9zLnBvc3QodGhpcy51cmwoYGdldC91c2VyL212cC90ZWFtLyR7aWR9YCkpXG4gICAgfVxuXG4gICAgZGVsZXRlTXZwVGVhbSA9IGFzeW5jIGlkID0+IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuYXhpb3MucG9zdCh0aGlzLnVybChgZGVsZXRlL3VzZXIvbXZwL3RlYW0vJHtpZH1gKSlcbiAgICB9XG5cbiAgICBnZXRUZWFtSW52aXRlVG9rZW4gPSBhc3luYyBpZCA9PiB7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmF4aW9zLnBvc3QodGhpcy51cmwoYG12cC90ZWFtL2dldC9pbnZpdGUvJHtpZH1gKSlcbiAgICB9XG5cbiAgICByZWxvYWRUZWFtSW52aXRlVG9rZW4gPSBhc3luYyBpZCA9PiB7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmF4aW9zLnBvc3QodGhpcy51cmwoYG12cC90ZWFtL3JlbG9hZC9pbnZpdGUvJHtpZH1gKSlcbiAgICB9XG5cbiAgICBnZXRJbnZpdGVUb1RlYW1MaW5rID0gKGlkLCB0b2tlbikgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy51cmwoYG12cC9pbnZpdGUvJHtpZH0vJHt0b2tlbn1gKVxuICAgIH1cblxuICAgIGdldEF1dGhVc2VyID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5heGlvcy5wb3N0KHRoaXMudXJsKCdnZXQvYXV0aCcpKVxuICAgIH1cblxuICAgIGpvaW5NZW1iZXJUb1RlYW0gPSBhc3luYyBpZCA9PiB7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmF4aW9zLnBvc3QodGhpcy51cmwoYG12cC9qb2luL3RvL3RlYW0vJHtpZH1gKSlcbiAgICB9XG5cbiAgICBnZXRVc2VySm9pbmVkVGVhbXMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmF4aW9zLnBvc3QodGhpcy51cmwoYHVzZXIvbXZwL2dldC9qb2luZWQvdGVhbXMvYCkpXG4gICAgfVxuXG4gICAgdXNlckxlYXZlVGVhbUxpbmsgPSBpZCA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnVybChgdXNlci9tdnAvbGVhdmUvdGVhbS8ke2lkfWApXG4gICAgfVxuXG4gICAgZ2V0VG91cm5hbWVudHNCeUdhbWUgPSBhc3luYyBnYW1lID0+IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuYXhpb3MucG9zdCh0aGlzLnVybChgbXZwL2FqYXgvdG91cm5hbWVudHMvJHtnYW1lfWApKVxuICAgIH1cblxuICAgIGdldFByb2ZpbGVMaW5rID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy51cmwoYHVzZXIvc2V0dGluZ3NgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTXZwU2VydmljZTsiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL012cE1haW4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA4NTJkZmJjJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL012cE1haW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9NdnBNYWluLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL0FwcGxpY2F0aW9ucy9NQU1QL2h0ZG9jcy9jaGFtcHNwcm8vbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMDg1MmRmYmMnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMDg1MmRmYmMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMDg1MmRmYmMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL012cE1haW4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA4NTJkZmJjJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzA4NTJkZmJjJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvanMvY29tcG9uZW50cy9tdnAvdG91cm5hbWVudHMvTXZwTWFpbi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL012cE1haW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL012cE1haW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL012cE1haW4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA4NTJkZmJjJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9NdnBQYWdlSGVhZGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03YzhkM2EyNSZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9NdnBQYWdlSGVhZGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vTXZwUGFnZUhlYWRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjdjOGQzYTI1XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL0FwcGxpY2F0aW9ucy9NQU1QL2h0ZG9jcy9jaGFtcHNwcm8vbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnN2M4ZDNhMjUnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnN2M4ZDNhMjUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnN2M4ZDNhMjUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL012cFBhZ2VIZWFkZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdjOGQzYTI1JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzdjOGQzYTI1Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvanMvY29tcG9uZW50cy9tdnAvdG91cm5hbWVudHMvTXZwUGFnZUhlYWRlci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL012cFBhZ2VIZWFkZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL012cFBhZ2VIZWFkZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL012cFBhZ2VIZWFkZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdjOGQzYTI1JnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9NdnBUb3VybmFtZW50c0xpc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE4YzE1OTBmJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL012cFRvdXJuYW1lbnRzTGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL012cFRvdXJuYW1lbnRzTGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvY2hhbXBzcHJvL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzE4YzE1OTBmJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzE4YzE1OTBmJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzE4YzE1OTBmJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9NdnBUb3VybmFtZW50c0xpc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE4YzE1OTBmJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzE4YzE1OTBmJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvanMvY29tcG9uZW50cy9tdnAvdG91cm5hbWVudHMvTXZwVG91cm5hbWVudHNMaXN0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTXZwVG91cm5hbWVudHNMaXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NdnBUb3VybmFtZW50c0xpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL012cFRvdXJuYW1lbnRzTGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MThjMTU5MGYmXCIiLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgU1RFQU1fTE9HSU5fTElOSzogJ2h0dHBzOi8vc3RlYW1jb21tdW5pdHkuY29tL29wZW5pZC9sb2dpbj9vcGVuaWQubnM9aHR0cCUzQSUyRiUyRnNwZWNzLm9wZW5pZC5uZXQlMkZhdXRoJTJGMi4wJm9wZW5pZC5tb2RlPWNoZWNraWRfc2V0dXAmb3BlbmlkLnJldHVybl90bz1odHRwcyUzQSUyRiUyRmNoYW1wcy5wcm8lMkZydSUyRm9hdXRoJTJGc3RlYW0lM0ZzdGF0ZT1zdGVhbSZvcGVuaWQucmVhbG09aHR0cHMlM0ElMkYlMkZjaGFtcHMucHJvJTJGcnUlMkZvYXV0aCUyRnN0ZWFtJm9wZW5pZC5ucy5zcmVnPWh0dHAlM0ElMkYlMkZvcGVuaWQubmV0JTJGZXh0ZW5zaW9ucyUyRnNyZWclMkYxLjEmb3BlbmlkLmNsYWltZWRfaWQ9aHR0cCUzQSUyRiUyRnNwZWNzLm9wZW5pZC5uZXQlMkZhdXRoJTJGMi4wJTJGaWRlbnRpZmllcl9zZWxlY3Qmb3BlbmlkLmlkZW50aXR5PWh0dHAlM0ElMkYlMkZzcGVjcy5vcGVuaWQubmV0JTJGYXV0aCUyRjIuMCUyRmlkZW50aWZpZXJfc2VsZWN0Jyxcbn0iLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImxvYWRpbmdpby1zcGlubmVyLWdlYXItbXRwaHdnb3k3OWVcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImxkaW8tcnd1dmFydm5wMXNcIj5cbiAgICAgICAgICAgIDxkaXY+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6IFwiTG9hZFwiXG4gICAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4gICAgQGtleWZyYW1lcyBsZGlvLXJ3dXZhcnZucDFzIHtcbiAgICAgICAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKSB9XG4gICAgICAgIDUwJSB7IHRyYW5zZm9ybTogcm90YXRlKDIyLjVkZWcpIH1cbiAgICAgICAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSB9XG4gICAgfVxuICAgIC5sZGlvLXJ3dXZhcnZucDFzID4gZGl2IHtcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMTAwcHggMTAwcHg7XG4gICAgICAgIGFuaW1hdGlvbjogbGRpby1yd3V2YXJ2bnAxcyAwLjJzIGluZmluaXRlIGxpbmVhcjtcbiAgICB9XG4gICAgLmxkaW8tcnd1dmFydm5wMXMgPiBkaXYgZGl2IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMjJweDtcbiAgICAgICAgaGVpZ2h0OiAxNTJweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmODUwMDtcbiAgICAgICAgbGVmdDogMTAwcHg7XG4gICAgICAgIHRvcDogMTAwcHg7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG4gICAgfVxuICAgIC5sZGlvLXJ3dXZhcnZucDFzID4gZGl2IGRpdjpudGgtY2hpbGQoMSkge1xuICAgICAgICB3aWR0aDogMTIwcHg7XG4gICAgICAgIGhlaWdodDogMTIwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB9XG4gICAgLmxkaW8tcnd1dmFydm5wMXMgPiBkaXYgZGl2Om50aC1jaGlsZCg2KSB7XG4gICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB9LmxkaW8tcnd1dmFydm5wMXMgPiBkaXYgZGl2Om50aC1jaGlsZCgzKSB7XG4gICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpIHJvdGF0ZSg0NWRlZylcbiAgICAgfS5sZGlvLXJ3dXZhcnZucDFzID4gZGl2IGRpdjpudGgtY2hpbGQoNCkge1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSkgcm90YXRlKDkwZGVnKVxuICAgICAgfS5sZGlvLXJ3dXZhcnZucDFzID4gZGl2IGRpdjpudGgtY2hpbGQoNSkge1xuICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpIHJvdGF0ZSgxMzVkZWcpXG4gICAgICAgfVxuICAgIC5sb2FkaW5naW8tc3Bpbm5lci1nZWFyLW10cGh3Z295NzllIHtcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgfVxuICAgIC5sZGlvLXJ3dXZhcnZucDFzIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCkgc2NhbGUoMSk7XG4gICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMCAwOyAvKiBzZWUgbm90ZSBhYm92ZSAqL1xuICAgIH1cbiAgICAubGRpby1yd3V2YXJ2bnAxcyBkaXYgeyBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgfVxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cInNsaWRlc1wiPlxuICAgICAgICA8bG9naW5cbiAgICAgICAgICAgICAgICB2LXNob3c9XCJjaGVja1N0ZXAoJ2xvZ2luJylcIlxuICAgICAgICAgICAgICAgIEBzZXRTdGVwPVwic2V0U3RlcFwiXG4gICAgICAgICAgICAgICAgQGF1dGhMb2dpbj1cImF1dGhMb2dpblwiXG4gICAgICAgICAgICAgICAgQGNsb3NlPVwiY2xvc2VcIlxuICAgICAgICAgICAgICAgIEBpbnB1dEVtYWlsPVwiKHZhbHVlKSA9PiB7ZW1haWwgPSB2YWx1ZX1cIlxuICAgICAgICAgICAgICAgIEBpbnB1dFBhc3N3b3JkPVwiKHZhbHVlKSA9PiB7cGFzc3dvcmQgPSB2YWx1ZX1cIlxuICAgICAgICAgICAgICAgIDplcnJvcj1cImVycm9yXCJcbiAgICAgICAgICAgICAgICA6ZW1haWw9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgOmNoZWNrPVwicGFzc3dvcmRcIj5cbiAgICAgICAgPC9sb2dpbj5cbiAgICAgICAgPHJlZ2lzdHJhdGlvblxuICAgICAgICAgICAgICAgIHYtc2hvdz1cImNoZWNrU3RlcCgncmVnaXN0cmF0aW9uJylcIlxuICAgICAgICAgICAgICAgIEBzZXRTdGVwPVwic2V0U3RlcFwiXG4gICAgICAgICAgICAgICAgQGNsb3NlPVwiY2xvc2VcIlxuICAgICAgICAgICAgICAgIEBpbnB1dEVtYWlsPVwiKHZhbHVlKSA9PiB7ZW1haWwgPSB2YWx1ZX1cIlxuICAgICAgICAgICAgICAgIEBpbnB1dFBhc3N3b3JkPVwiKHZhbHVlKSA9PiB7cGFzc3dvcmQgPSB2YWx1ZX1cIlxuICAgICAgICAgICAgICAgIDplbWFpbD1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICA6Y2hlY2s9XCJjaGVja1wiXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cImNoZWNrXCI+XG4gICAgICAgIDwvcmVnaXN0cmF0aW9uPlxuICAgICAgICA8Y29uZmlybS1jb2RlXG4gICAgICAgICAgICAgICAgdi1zaG93PVwiY2hlY2tTdGVwKCdjb25maXJtQ29kZScpXCJcbiAgICAgICAgICAgICAgICBAc2V0U3RlcD1cInNldFN0ZXBcIlxuICAgICAgICAgICAgICAgIEBjbG9zZT1cImNsb3NlXCJcbiAgICAgICAgICAgICAgICBAcmVnaXN0cmF0aW9uPVwicmVnaXN0cmF0aW9uXCJcbiAgICAgICAgICAgICAgICA6Y29kZUNvbmZpcm1lZD1cImNvZGVDb25maXJtZWRcIlxuICAgICAgICAgICAgICAgIDplbWFpbD1cImVtYWlsXCI+XG4gICAgICAgIDwvY29uZmlybS1jb2RlPlxuICAgICAgICA8bmljay1uYW1lXG4gICAgICAgICAgICAgICAgdi1zaG93PVwiY2hlY2tTdGVwKCduaWNrbmFtZScpXCJcbiAgICAgICAgICAgICAgICBAc2V0U3RlcD1cInNldFN0ZXBcIlxuICAgICAgICAgICAgICAgIEBjbG9zZT1cImNsb3NlXCJcbiAgICAgICAgICAgICAgICA6ZW1haWw9XCJlbWFpbFwiPlxuICAgICAgICA8L25pY2stbmFtZT5cbiAgICAgICAgPGNvbmdyYXR1bGF0aW9uXG4gICAgICAgICAgICAgICAgdi1zaG93PVwiY2hlY2tTdGVwKCdjb25ncmF0dWxhdGlvbicpXCJcbiAgICAgICAgICAgICAgICBAc2V0U3RlcD1cInNldFN0ZXBcIlxuICAgICAgICAgICAgICAgIEBjbG9zZT1cImNsb3NlXCI+XG4gICAgICAgIDwvY29uZ3JhdHVsYXRpb24+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBOaWNrbmFtZUZvcm0gZnJvbSBcIi4vbG9naW4vTmlja25hbWVGb3JtXCI7XG4gICAgaW1wb3J0IENvbmZpcm1Db2RlRm9ybSBmcm9tIFwiLi9sb2dpbi9Db25maXJtQ29kZUZvcm1cIjtcbiAgICBpbXBvcnQgUmVnaXN0cmF0aW9uRm9ybSBmcm9tIFwiLi9sb2dpbi9SZWdpc3RyYXRpb25Gb3JtXCI7XG4gICAgaW1wb3J0IExvZ2luRm9ybSBmcm9tIFwiLi9sb2dpbi9Mb2dpbkZvcm1cIjtcbiAgICBpbXBvcnQgQ29uZ3JhdHVsYXRpb25zRm9ybSBmcm9tIFwiLi9sb2dpbi9Db25ncmF0dWxhdGlvbnNGb3JtXCI7XG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6IFwiTG9naW5Nb2RhbFwiLFxuICAgICAgICBpbmplY3Q6IFtcbiAgICAgICAgICAgICdheGlvcycsXG4gICAgICAgICAgICAnY29uZmlnJ1xuICAgICAgICBdLFxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgc2hvdzogQm9vbGVhbixcbiAgICAgICAgICAgIHJlZGlyZWN0OiB7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDogbnVsbFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNob3dGaXJzdDoge1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICdsb2dpbidcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZGF0YSgpe1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBlcnJvcjogZmFsc2UsXG4gICAgICAgICAgICAgICAgc3RlcDogJ3JlZ2lzdHJhdGlvbicsXG4gICAgICAgICAgICAgICAgZW1haWw6IG51bGwsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IG51bGwsXG4gICAgICAgICAgICAgICAgY2hlY2s6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNvbmZpcm1Db2RlOiBudWxsLFxuICAgICAgICAgICAgICAgIGNvZGVDb25maXJtZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogbnVsbCxcbiAgICAgICAgICAgICAgICBzdWNjZXNzTWVzc2FnZTogbnVsbCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29tcG9uZW50czoge1xuICAgICAgICAgICAgJ25pY2stbmFtZSc6IE5pY2tuYW1lRm9ybSxcbiAgICAgICAgICAgICdjb25maXJtLWNvZGUnOiBDb25maXJtQ29kZUZvcm0sXG4gICAgICAgICAgICAncmVnaXN0cmF0aW9uJzogUmVnaXN0cmF0aW9uRm9ybSxcbiAgICAgICAgICAgICdsb2dpbic6IExvZ2luRm9ybSxcbiAgICAgICAgICAgICdjb25ncmF0dWxhdGlvbic6IENvbmdyYXR1bGF0aW9uc0Zvcm1cbiAgICAgICAgfSxcbiAgICAgICAgd2F0Y2g6IHtcbiAgICAgICAgICAgIHNob3coKXtcbiAgICAgICAgICAgICAgICB0aGlzLnN0ZXAgPSB0aGlzLnNob3dGaXJzdDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdGVwKG5ld1N0ZXApe1xuICAgICAgICAgICAgICAgIGlmIChuZXdTdGVwID09PSAnZmluaXNoJyl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0aExvZ2luKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBzZXRTdGVwKHN0ZXApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0ZXAgPSBzdGVwO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGF1dGhMb2dpbigpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcxMjMnKVxuICAgICAgICAgICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuXG4gICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdlbWFpbCcsIHRoaXMuZW1haWwpO1xuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgncGFzc3dvcmQnLCB0aGlzLnBhc3N3b3JkKTtcbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ19jc3JmX3Rva2VuJywgdGhpcy5heGlvcy5fY3NyZl90b2tlbik7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmF4aW9zLnBvc3QoJy9ydS9sb2dpbicsIGZvcm1EYXRhKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmRhdGEuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucmVkaXJlY3QgIT09IG51bGwpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uYXNzaWduKHRoaXMucmVkaXJlY3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVnaXN0cmF0aW9uKCl7XG4gICAgICAgICAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcblxuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgndXNlcltlbWFpbF0nLCB0aGlzLmVtYWlsKTtcbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3VzZXJbcGFzc3dvcmRdW2ZpcnN0XScsIHRoaXMucGFzc3dvcmQpO1xuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgndXNlcltwYXNzd29yZF1bc2Vjb25kXScsIHRoaXMucGFzc3dvcmQpO1xuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnX2NzcmZfdG9rZW4nLCB0aGlzLmF4aW9zLl9jc3JmX3Rva2VuKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuYXhpb3MucG9zdCgnL3J1L3JlZ2lzdHJhdGlvbicsIGZvcm1EYXRhKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmRhdGEuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNsb3NlKCl7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93ID0gZmFsc2U7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2hlY2tTdGVwKHN0ZXApe1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNob3cgJiYgdGhpcy5zdGVwID09PSBzdGVwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxuICAgIDx0cmFuc2l0aW9uIG5hbWU9XCJzbGlkZS1mYWRlc1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW5fZm9ybVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvZ2luX2Jsb2NrXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvZ290eXBlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9DaGFtcHNfbG9nb3R5cGUuc3ZnXCIgY2xhc3M9XCJsb2dvdHlwZVwiLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW5fdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAg0J/QvtC00YLQstC10YDQttC00LXQvdC40LUg0L/QvtGH0YLRi1xuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbl9pbnB1dFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiByZXF1aXJlZCB2LW1vZGVsPVwiY29uZmlybUNvZGVcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPtCa0L7QtCDQv9C+0LTRgtCy0LXRgNC20LTQtdC90LjRjzwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VuZFwiIEBjbGljaz1cInNlbmRSZWdpc3RyYXRpb25Db25maXJtXCI+XG4gICAgICAgICAgICAgICAgICAgINCe0YLQv9GA0LDQstC40YLRjFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlcnJvclwiIHYtaWY9XCJlcnJvck1lc3NhZ2UgIT09IG51bGxcIj5cbiAgICAgICAgICAgICAgICAgICAge3sgZXJyb3JNZXNzYWdlIH19XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVycm9yIHRleHQtc3VjY2Vzc1wiIHYtaWY9XCJzdWNjZXNzTWVzc2FnZSAhPT0gbnVsbFwiPlxuICAgICAgICAgICAgICAgICAgICB7eyBzdWNjZXNzTWVzc2FnZSB9fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaW5rcyBkLWZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm10LTFcIiBAY2xpY2s9XCIkZW1pdCgnc2V0U3RlcCcsICdyZWdpc3RyYXRpb24nKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+QmFjazwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtdC0xXCIgIEBjbGljaz1cInNob3dOaWNrbmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gOmNsYXNzPVwie2Rpc2FibGVkOiAhY29kZUNvbmZpcm1lZH1cIj5OZXh0PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2xvc2VkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzdmcgQGNsaWNrPVwiY2xvc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgZmlsbD1cIm5vbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNOC44ODM5MiA4LjAwMDA0TDE1LjgxNjkgMS4wNjY5OEMxNi4wNjEgMC44MjI4ODIgMTYuMDYxIDAuNDI3MTMzIDE1LjgxNjkgMC4xODMwN0MxNS41NzI4IC0wLjA2MDk5MjIgMTUuMTc3MSAtMC4wNjEwMjM0IDE0LjkzMyAwLjE4MzA3TDcuOTk5OTggNy4xMTYxM0wxLjA2Njk3IDAuMTgzMDdDMC44MjI4OCAtMC4wNjEwMjM0IDAuNDI3MTMyIC0wLjA2MTAyMzQgMC4xODMwNyAwLjE4MzA3Qy0wLjA2MDk5MiAwLjQyNzE2NCAtMC4wNjEwMjMzIDAuODIyOTE0IDAuMTgzMDcgMS4wNjY5OEw3LjExNjA4IDhMMC4xODMwNyAxNC45MzMxQy0wLjA2MTAyMzMgMTUuMTc3MiAtMC4wNjEwMjMzIDE1LjU3MjkgMC4xODMwNyAxNS44MTdDMC4zMDUxMDEgMTUuOTM5IDAuNDY1MDY5IDE2IDAuNjI1MDM3IDE2QzAuNzg1MDA1IDE2IDAuOTQ0OTQzIDE1LjkzOSAxLjA2NyAxNS44MTdMNy45OTk5OCA4Ljg4Mzk0TDE0LjkzMyAxNS44MTdDMTUuMDU1IDE1LjkzOSAxNS4yMTUgMTYgMTUuMzc1IDE2QzE1LjUzNDkgMTYgMTUuNjk0OSAxNS45MzkgMTUuODE2OSAxNS44MTdDMTYuMDYxIDE1LjU3MjkgMTYuMDYxIDE1LjE3NzEgMTUuODE2OSAxNC45MzMxTDguODgzOTIgOC4wMDAwNFpcIiBmaWxsPVwiIzg2ODg4QVwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC90cmFuc2l0aW9uPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6IFwiQ29uZmlybUNvZGVGb3JtXCIsXG4gICAgICAgIGluamVjdDogW1xuICAgICAgICAgICAgJ2F4aW9zJyxcbiAgICAgICAgICAgICdjb25maWcnXG4gICAgICAgIF0sXG4gICAgICAgIHByb3BzOiBbXG4gICAgICAgICAgICAnZW1haWwnLFxuICAgICAgICBdLFxuICAgICAgICBkYXRhKCl7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGNvZGVDb25maXJtZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNvbmZpcm1Db2RlOiBudWxsLFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogbnVsbCxcbiAgICAgICAgICAgICAgICBzdWNjZXNzTWVzc2FnZTogbnVsbCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgc2VuZFJlZ2lzdHJhdGlvbkNvbmZpcm0oKXtcbiAgICAgICAgICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuXG4gICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCd1c2VyW2NvZGVdJywgdGhpcy5jb25maXJtQ29kZSk7XG4gICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCd1c2VyW2VtYWlsXScsIHRoaXMuZW1haWwpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5heGlvcy5wb3N0KCcvcnUvY2hlY2svY29uZmlybS9jb2RlJywgZm9ybURhdGEpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCh7ZGF0YX0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3VjY2Vzc01lc3NhZ2UgPSBkYXRhO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvZGVDb25maXJtZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgncmVnaXN0cmF0aW9uJylcbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKHtyZXNwb25zZX0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaG93Tmlja25hbWUoKXtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb2RlQ29uZmlybWVkKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnc2V0U3RlcCcsICduaWNrbmFtZScpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNsb3NlKCl7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xvc2UnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XG4gICAgPHRyYW5zaXRpb24gbmFtZT1cInNsaWRlLWZhZGVzXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbl9mb3JtXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW5fYmxvY2tcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9nb3R5cGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL0NoYW1wc19sb2dvdHlwZS5zdmdcIiBjbGFzcz1cImxvZ290eXBlXCIvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbl90aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICDQn9C+0LfQtNGA0LDQstC70Y/QtdC8INGBINGD0YHQv9C10YjQvdC+0Lkg0YDQtdCz0LXRgdGC0YDQsNGG0LjQtdC5IVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZW5kXCIgQGNsaWNrPVwiJGVtaXQoJ3NldFN0ZXAnLCAnZmluaXNoJylcIj5cbiAgICAgICAgICAgICAgICAgICAgUGxheVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbG9zZWRcIiAgQGNsaWNrPVwiJGVtaXQoJ2Nsb3NlJylcIj5cbiAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgdmlld0JveD1cIjAgMCAxNiAxNlwiIGZpbGw9XCJub25lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTguODgzOTIgOC4wMDAwNEwxNS44MTY5IDEuMDY2OThDMTYuMDYxIDAuODIyODgyIDE2LjA2MSAwLjQyNzEzMyAxNS44MTY5IDAuMTgzMDdDMTUuNTcyOCAtMC4wNjA5OTIyIDE1LjE3NzEgLTAuMDYxMDIzNCAxNC45MzMgMC4xODMwN0w3Ljk5OTk4IDcuMTE2MTNMMS4wNjY5NyAwLjE4MzA3QzAuODIyODggLTAuMDYxMDIzNCAwLjQyNzEzMiAtMC4wNjEwMjM0IDAuMTgzMDcgMC4xODMwN0MtMC4wNjA5OTIgMC40MjcxNjQgLTAuMDYxMDIzMyAwLjgyMjkxNCAwLjE4MzA3IDEuMDY2OThMNy4xMTYwOCA4TDAuMTgzMDcgMTQuOTMzMUMtMC4wNjEwMjMzIDE1LjE3NzIgLTAuMDYxMDIzMyAxNS41NzI5IDAuMTgzMDcgMTUuODE3QzAuMzA1MTAxIDE1LjkzOSAwLjQ2NTA2OSAxNiAwLjYyNTAzNyAxNkMwLjc4NTAwNSAxNiAwLjk0NDk0MyAxNS45MzkgMS4wNjcgMTUuODE3TDcuOTk5OTggOC44ODM5NEwxNC45MzMgMTUuODE3QzE1LjA1NSAxNS45MzkgMTUuMjE1IDE2IDE1LjM3NSAxNkMxNS41MzQ5IDE2IDE1LjY5NDkgMTUuOTM5IDE1LjgxNjkgMTUuODE3QzE2LjA2MSAxNS41NzI5IDE2LjA2MSAxNS4xNzcxIDE1LjgxNjkgMTQuOTMzMUw4Ljg4MzkyIDguMDAwMDRaXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjODY4ODhBXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L3RyYW5zaXRpb24+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbmFtZTogXCJDb25ncmF0dWxhdGlvbnNGb3JtXCIsXG5cbiAgICB9XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cblxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XG4gICAgPHRyYW5zaXRpb24gbmFtZT1cInNsaWRlLWZhZGVzXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbl9mb3JtXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW5fYmxvY2tcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9nb3R5cGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL0NoYW1wc19sb2dvdHlwZS5zdmdcIiBjbGFzcz1cImxvZ290eXBlXCIvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbl90aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICDQktGF0L7QtCDQsiDQu9C40YfQvdGL0Lkg0LrQsNCx0LjQvdC10YJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW5faW5wdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIDp2YWx1ZT1cImVtYWlsXCIgIEBpbnB1dD1cIiRlbWl0KCdpbnB1dEVtYWlsJywgJGV2ZW50LnRhcmdldC52YWx1ZSlcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPtCQ0LTRgNC10YEg0Y3Qu9C10LrRgtGA0L7QvdC90L7QuSDQv9C+0YfRgtGLPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbl9pbnB1dFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgOnZhbHVlPVwicGFzc3dvcmRcIiAgQGlucHV0PVwiJGVtaXQoJ2lucHV0UGFzc3dvcmQnLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVwiLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+0J/QsNGA0L7Qu9GMPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZW5kXCIgQGNsaWNrPVwiJGVtaXQoJ2F1dGhMb2dpbicpXCI+XG4gICAgICAgICAgICAgICAgICAgINCS0L7QudGC0LhcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXJyb3JcIiB2LWlmPVwiZXJyb3JcIj5cbiAgICAgICAgICAgICAgICAgICAg0J3QtdC/0YDQsNCy0LjQu9GM0L3Ri9C5INC70L7Qs9C40L0g0LjQu9C4INC/0LDRgNC+0LvRjFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdWJ0ZXh0XCI+0JjQu9C4INCy0L7QudC00LjRgtC1INGBINC/0L7QvNC+0YnRjNGOPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFsdGVybmF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8YSA6aHJlZj1cInN0ZWFtTG9naW5MaW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvbG9naW5fc3RlYW0uc3ZnXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpbmtzXCIgQGNsaWNrPVwiJGVtaXQoJ3NldFN0ZXAnLCAncmVnaXN0cmF0aW9uJylcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPtCg0LXQs9C40YHRgtGA0LDRhtC40Y88L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbG9zZWRcIiBAY2xpY2s9XCIkZW1pdCgnY2xvc2UnKVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgZmlsbD1cIm5vbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNOC44ODM5MiA4LjAwMDA0TDE1LjgxNjkgMS4wNjY5OEMxNi4wNjEgMC44MjI4ODIgMTYuMDYxIDAuNDI3MTMzIDE1LjgxNjkgMC4xODMwN0MxNS41NzI4IC0wLjA2MDk5MjIgMTUuMTc3MSAtMC4wNjEwMjM0IDE0LjkzMyAwLjE4MzA3TDcuOTk5OTggNy4xMTYxM0wxLjA2Njk3IDAuMTgzMDdDMC44MjI4OCAtMC4wNjEwMjM0IDAuNDI3MTMyIC0wLjA2MTAyMzQgMC4xODMwNyAwLjE4MzA3Qy0wLjA2MDk5MiAwLjQyNzE2NCAtMC4wNjEwMjMzIDAuODIyOTE0IDAuMTgzMDcgMS4wNjY5OEw3LjExNjA4IDhMMC4xODMwNyAxNC45MzMxQy0wLjA2MTAyMzMgMTUuMTc3MiAtMC4wNjEwMjMzIDE1LjU3MjkgMC4xODMwNyAxNS44MTdDMC4zMDUxMDEgMTUuOTM5IDAuNDY1MDY5IDE2IDAuNjI1MDM3IDE2QzAuNzg1MDA1IDE2IDAuOTQ0OTQzIDE1LjkzOSAxLjA2NyAxNS44MTdMNy45OTk5OCA4Ljg4Mzk0TDE0LjkzMyAxNS44MTdDMTUuMDU1IDE1LjkzOSAxNS4yMTUgMTYgMTUuMzc1IDE2QzE1LjUzNDkgMTYgMTUuNjk0OSAxNS45MzkgMTUuODE2OSAxNS44MTdDMTYuMDYxIDE1LjU3MjkgMTYuMDYxIDE1LjE3NzEgMTUuODE2OSAxNC45MzMxTDguODgzOTIgOC4wMDAwNFpcIiBmaWxsPVwiIzg2ODg4QVwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC90cmFuc2l0aW9uPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6IFwiTG9naW5Gb3JtXCIsXG4gICAgICAgIGluamVjdDogW1xuICAgICAgICAgICAgJ2NvbmZpZydcbiAgICAgICAgXSxcbiAgICAgICAgcHJvcHM6IFtcbiAgICAgICAgICAgICdlcnJvcidcbiAgICAgICAgXSxcbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIHN0ZWFtTG9naW5MaW5rKCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLlNURUFNX0xPR0lOX0xJTks7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfVxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxuICAgIDx0cmFuc2l0aW9uIG5hbWU9XCJzbGlkZS1mYWRlc1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW5fZm9ybVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvZ2luX2Jsb2NrXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvZ290eXBlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9DaGFtcHNfbG9nb3R5cGUuc3ZnXCIgY2xhc3M9XCJsb2dvdHlwZVwiLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW5fdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAg0JLQstC10LTQuNGC0LUg0YHQstC+0Lkg0L3QuNC60L3QtdC50LxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW5faW5wdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImVtYWlsXCIgcmVxdWlyZWQgdi1tb2RlbD1cIm5pY2tuYW1lXCIvPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj7Qm9C+0LPQuNC9IChOaWNrbmFtZSk8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVycm9yXCIgdi1pZj1cImVycm9yTWVzc2FnZSAhPT0gbnVsbFwiPlxuICAgICAgICAgICAgICAgICAgICB7eyBlcnJvck1lc3NhZ2UgfX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VuZFwiIEBjbGljaz1cInNldE5pY2tuYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgIEZpbmlzaCBSZWdpc3RyYXRpb25cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2xvc2VkXCIgQGNsaWNrPVwiY2xvc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgdmlld0JveD1cIjAgMCAxNiAxNlwiIGZpbGw9XCJub25lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTguODgzOTIgOC4wMDAwNEwxNS44MTY5IDEuMDY2OThDMTYuMDYxIDAuODIyODgyIDE2LjA2MSAwLjQyNzEzMyAxNS44MTY5IDAuMTgzMDdDMTUuNTcyOCAtMC4wNjA5OTIyIDE1LjE3NzEgLTAuMDYxMDIzNCAxNC45MzMgMC4xODMwN0w3Ljk5OTk4IDcuMTE2MTNMMS4wNjY5NyAwLjE4MzA3QzAuODIyODggLTAuMDYxMDIzNCAwLjQyNzEzMiAtMC4wNjEwMjM0IDAuMTgzMDcgMC4xODMwN0MtMC4wNjA5OTIgMC40MjcxNjQgLTAuMDYxMDIzMyAwLjgyMjkxNCAwLjE4MzA3IDEuMDY2OThMNy4xMTYwOCA4TDAuMTgzMDcgMTQuOTMzMUMtMC4wNjEwMjMzIDE1LjE3NzIgLTAuMDYxMDIzMyAxNS41NzI5IDAuMTgzMDcgMTUuODE3QzAuMzA1MTAxIDE1LjkzOSAwLjQ2NTA2OSAxNiAwLjYyNTAzNyAxNkMwLjc4NTAwNSAxNiAwLjk0NDk0MyAxNS45MzkgMS4wNjcgMTUuODE3TDcuOTk5OTggOC44ODM5NEwxNC45MzMgMTUuODE3QzE1LjA1NSAxNS45MzkgMTUuMjE1IDE2IDE1LjM3NSAxNkMxNS41MzQ5IDE2IDE1LjY5NDkgMTUuOTM5IDE1LjgxNjkgMTUuODE3QzE2LjA2MSAxNS41NzI5IDE2LjA2MSAxNS4xNzcxIDE1LjgxNjkgMTQuOTMzMUw4Ljg4MzkyIDguMDAwMDRaXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjODY4ODhBXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L3RyYW5zaXRpb24+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbmFtZTogXCJOaWNrbmFtZUZvcm1cIixcbiAgICAgICAgaW5qZWN0OiBbXG4gICAgICAgICAgICAnYXhpb3MnLFxuICAgICAgICAgICAgJ2NvbmZpZydcbiAgICAgICAgXSxcbiAgICAgICAgcHJvcHM6IFtcbiAgICAgICAgICAgICdlbWFpbCcsXG4gICAgICAgIF0sXG4gICAgICAgIGRhdGEoKXtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbmlja25hbWU6IG51bGwsXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBudWxsLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBzZXROaWNrbmFtZSgpe1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiB0aGlzLmVtYWlsLFxuICAgICAgICAgICAgICAgICAgICBuaWNrbmFtZTogdGhpcy5uaWNrbmFtZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmF4aW9zLnBvc3QoJy9ydS91c2VyL3NldC9uaWNrbmFtZScsIGRhdGEpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCh7ZGF0YX0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3NldFN0ZXAnLCAnY29uZ3JhdHVsYXRpb24nKVxuICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoe3Jlc3BvbnNlfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSByZXNwb25zZS5kYXRhXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2xvc2UoKXtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdjbG9zZScpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cblxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XG4gICAgPHRyYW5zaXRpb24gbmFtZT1cInNsaWRlLWZhZGVzXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbl9mb3JtXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW5fcmVxXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvZ2luX2Jsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2dvdHlwZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL0NoYW1wc19sb2dvdHlwZS5zdmdcIiBjbGFzcz1cImxvZ290eXBlXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvZ2luX3RpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICDQoNC10LPQuNGB0YLRgNCw0YbQuNGPXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW5faW5wdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6dmFsdWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGlucHV0PVwiJGVtaXQoJ2lucHV0RW1haWwnLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPtCQ0LTRgNC10YEg0Y3Qu9C10LrRgtGA0L7QvdC90L7QuSDQv9C+0YfRgtGLPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvZ2luX2lucHV0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDp2YWx1ZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAaW5wdXQ9XCIkZW1pdCgnaW5wdXRQYXNzd29yZCcsICRldmVudC50YXJnZXQudmFsdWUpXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+0J/QsNGA0L7Qu9GMPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvZ2luX2NoZWNrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjaGVja2VkPVwiY2hlY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2hhbmdlPVwidXBkYXRlKCRldmVudC50YXJnZXQuY2hlY2tlZClcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PGEgaHJlZj1cIi9ydS90ZXJtcy1vZi11c2VcIiB0YXJnZXQ9XCJfYmxhbmtcIj7QntC30L3QsNC60L7QvNC70LXQvSDRgSDQv9GA0LDQstC40LvQsNC80Lgg0LjRgdC/0L7Qu9GM0LfQvtCy0LDQvdC40Y8g0YHQtdGA0LLQuNGB0LAgwqtDaGFtcHPCuzwvYT48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VuZFwiIEBjbGljaz1cImNoZWNrSXNFbWFpbFZhbGlkXCIgOnN0eWxlPVwie29wYWNpdHk6IGNoZWNrID8gJzEnOiAnLjUnfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAg0JfQsNGA0LXQs9C40YHRgtGA0LjRgNC+0LLQsNGC0YzRgdGPXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXJyb3JcIiB2LWlmPVwiZXJyb3JNZXNzYWdlICE9PSBudWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7eyBlcnJvck1lc3NhZ2UgfX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdWJ0ZXh0XCI+0JjQu9C4INCy0L7QudC00LjRgtC1INGBINC/0L7QvNC+0YnRjNGOPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbHRlcm5hdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIDpocmVmPVwic3RlYW1Mb2dpbkxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvbG9naW5fc3RlYW0uc3ZnXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpbmtzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIEBjbGljaz1cIiRlbWl0KCdzZXRTdGVwJywgJ2xvZ2luJylcIj7QktGF0L7QtCDQsiDQu9C40YfQvdGL0Lkg0LrQsNCx0LjQvdC10YI8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbG9zZWRcIiBAY2xpY2s9XCJjbG9zZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgdmlld0JveD1cIjAgMCAxNiAxNlwiIGZpbGw9XCJub25lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk04Ljg4MzkyIDguMDAwMDRMMTUuODE2OSAxLjA2Njk4QzE2LjA2MSAwLjgyMjg4MiAxNi4wNjEgMC40MjcxMzMgMTUuODE2OSAwLjE4MzA3QzE1LjU3MjggLTAuMDYwOTkyMiAxNS4xNzcxIC0wLjA2MTAyMzQgMTQuOTMzIDAuMTgzMDdMNy45OTk5OCA3LjExNjEzTDEuMDY2OTcgMC4xODMwN0MwLjgyMjg4IC0wLjA2MTAyMzQgMC40MjcxMzIgLTAuMDYxMDIzNCAwLjE4MzA3IDAuMTgzMDdDLTAuMDYwOTkyIDAuNDI3MTY0IC0wLjA2MTAyMzMgMC44MjI5MTQgMC4xODMwNyAxLjA2Njk4TDcuMTE2MDggOEwwLjE4MzA3IDE0LjkzMzFDLTAuMDYxMDIzMyAxNS4xNzcyIC0wLjA2MTAyMzMgMTUuNTcyOSAwLjE4MzA3IDE1LjgxN0MwLjMwNTEwMSAxNS45MzkgMC40NjUwNjkgMTYgMC42MjUwMzcgMTZDMC43ODUwMDUgMTYgMC45NDQ5NDMgMTUuOTM5IDEuMDY3IDE1LjgxN0w3Ljk5OTk4IDguODgzOTRMMTQuOTMzIDE1LjgxN0MxNS4wNTUgMTUuOTM5IDE1LjIxNSAxNiAxNS4zNzUgMTZDMTUuNTM0OSAxNiAxNS42OTQ5IDE1LjkzOSAxNS44MTY5IDE1LjgxN0MxNi4wNjEgMTUuNTcyOSAxNi4wNjEgMTUuMTc3MSAxNS44MTY5IDE0LjkzMzFMOC44ODM5MiA4LjAwMDA0WlwiIGZpbGw9XCIjODY4ODhBXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbl9yZXFfYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PtCi0YDQtdC90LXRgNGD0LnRgtC10YHRjCDQstC80LXRgdGC0LUg0YEg0LvRg9GH0YjQuNC80Lgg0LjQs9GA0L7QutCw0LzQuCDQsiDQstCw0YjQuNGFINC70Y7QsdC40LzRi9GFINC40LPRgNCw0YU8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj7Qn9C+0YHQu9C10LTQvdC40LUg0L3QvtCy0L7RgdGC0Lgg0Lgg0YHQvtCx0YvRgtC40Y88L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj7QktC10LvQuNC60L7Qu9C10L/QvdC+0LUg0YHQvtC+0LHRidC10YHRgtCy0L48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj7QotGA0LDQvdGB0LvRj9GG0LjQuCDQuCDRgNC10LfRg9C70YzRgtCw0YLRiyDQvNCw0YLRh9C10Lk8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj7QkNC90LDQu9C40YLQuNC60LAg0L7RgiDQv9GA0L7RhNC10YHRgdC40L7QvdCw0LvQvtCyPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvdHJhbnNpdGlvbj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBpbmplY3Q6IFtcbiAgICAgICAgICAgICdheGlvcycsXG4gICAgICAgICAgICAnY29uZmlnJ1xuICAgICAgICBdLFxuICAgICAgICBuYW1lOiBcIlJlZ2lzdHJhdGlvbkZvcm1cIixcbiAgICAgICAgcHJvcHM6IFtcbiAgICAgICAgICAgICdlbWFpbCcsXG4gICAgICAgICAgICAnY2hlY2snXG4gICAgICAgIF0sXG4gICAgICAgIGRhdGEoKXtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICBzdGVhbUxvZ2luTGluaygpe1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5TVEVBTV9MT0dJTl9MSU5LO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVtYWlsRm9ybSgpe1xuICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdlbWFpbCcsIHRoaXMuZW1haWwpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvcm1EYXRhO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBnZW5lcmF0ZUNvbmZpcm1Db2RlKCl7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2spIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5heGlvcy5wb3N0KCcvcnUvZ2VuZXJhdGUvY29uZmlybS9jb2RlJywgdGhpcy5lbWFpbEZvcm0pXG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnc2V0U3RlcCcsICdjb25maXJtQ29kZScpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNoZWNrSXNFbWFpbFZhbGlkKCl7XG4gICAgICAgICAgICAgICAgdGhpcy5heGlvcy5wb3N0KCcvcnUvdXNlci9jaGVjay9lbWFpbCcsIHRoaXMuZW1haWxGb3JtKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigoe2RhdGF9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdlbmVyYXRlQ29uZmlybUNvZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKHtyZXNwb25zZX0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1cGRhdGUodmFsdWUpe1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2lucHV0JywgdmFsdWUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNsb3NlKCl7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xvc2UnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH1cbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiZ3JpZFwiPlxuICAgICAgICA8YSBjbGFzcz1cImdyaWQtcm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0YVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7IHRlYW0ubmFtZSB9fVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvdHRvbVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+0J3QsNC30LLQsNC90LjQtTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRhXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAge3sgdGVhbS50YWcgfX1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3R0b21cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPtCi0LXQszwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRhXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAge3sgdGVhbS5tZW1iZXJzLmxlbmd0aCB9fVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvdHRvbVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+0KPRh9Cw0YHQvdC40LrQvtCyPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGEgcHQtMlwiPlxuICAgICAgICAgICAgICAgIDxhIDpocmVmPVwiaHR0cC5nZXRUZWFtTGluayh0ZWFtLmlkKVwiIGNsYXNzPVwiYnRuLW9yYW5nZSB0ZXh0LWxpZ2h0IHAtMiBwb2ludGVyXCI+XG4gICAgICAgICAgICAgICAgICAgINCf0L7RgdC80L7RgtGA0LXRgtGMXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvYT5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiBcIk12cEpvaW5lZFRlYW1cIixcbiAgICAgICAgcHJvcHM6IFsndGVhbSddLFxuICAgICAgICBpbmplY3Q6IFtcbiAgICAgICAgICAgICdodHRwJ1xuICAgICAgICBdXG4gICAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG5cbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJldmVudHNfdmlld1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbXBvbmVudCB1cGNvbWluZ19ldmVudHNcIj5cbiAgICAgICAgICAgICAgICAgICAgPG12cC1qb2luZWQtdGVhbSA6dGVhbT1cInRlYW1cIiA6a2V5PVwia2V5XCIgdi1mb3I9XCIodGVhbSwga2V5KSBpbiB0ZWFtc1wiLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IE12cEpvaW5lZFRlYW0gZnJvbSBcIi4vTXZwSm9pbmVkVGVhbVwiO1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiBcIk12cEpvaW5lZFRlYW1zXCIsXG4gICAgICAgIGluamVjdDogW1xuICAgICAgICAgICAgJ2h0dHAnXG4gICAgICAgIF0sXG4gICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICAgICdtdnAtam9pbmVkLXRlYW0nOiBNdnBKb2luZWRUZWFtXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGEoKXtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdGVhbXM6IFtdXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGdldEpvaW5lZFRlYW1zKCl7XG4gICAgICAgICAgICAgICAgdGhpcy5odHRwLmdldFVzZXJKb2luZWRUZWFtcygpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCh7ZGF0YX0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGVhbXMgPSBkYXRhXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICB0aGlzLmdldEpvaW5lZFRlYW1zKClcbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyIG10LTNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZnRcIj5cbiAgICAgICAgICAgICAgICA8YSA6Y2xhc3M9XCJ7YWN0aXZlOiBhY3RpdmUgPT09ICdjb21tYW5kcyd9XCIgQGNsaWNrPVwiIGFjdGl2ZSA9ICdjb21tYW5kcydcIj7QmtCe0JzQkNCd0JTQqzwvYT5cbiAgICAgICAgICAgICAgICA8YSA6Y2xhc3M9XCJ7YWN0aXZlOiBhY3RpdmUgPT09ICd0b3VybmFtZW50cyd9XCIgQGNsaWNrPVwiIGFjdGl2ZSA9ICd0b3VybmFtZW50cydcIj7QotCj0KDQndCY0KDQqzwvYT5cbiAgICAgICAgICAgICAgICA8YSA6Y2xhc3M9XCJ7YWN0aXZlOiBhY3RpdmUgPT09ICdtYXRjaGVzJ31cIiBAY2xpY2s9XCIgYWN0aXZlID0gJ21hdGNoZXMnXCI+0JzQkNCi0KfQmDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICA8TXZwVGVhbXM+PC9NdnBUZWFtcz5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IE12cFRlYW1zIGZyb20gXCIuL012cFRlYW1zXCI7XG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6IFwiTXZwUGFnZVwiLFxuICAgICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICAgICBNdnBUZWFtc1xuICAgICAgICB9LFxuICAgICAgICBkYXRhKCl7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGFjdGl2ZTogJ2NvbW1hbmRzJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuXG4gICAgICAgIH0sXG4gICAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG5cbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJjYXJkIHctNTAgbXItMiBib3JkZXItcmFkaXVzLTBcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiIHYtaWY9XCJ0ZWFtID09PSB1bmRlZmluZWRcIj5cbiAgICAgICAgICAgIDxoNSBjbGFzcz1cImNhcmQtdGl0bGUgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAge3sgdGl0bGUgfX1cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlIGJhZGdlLXdhcm5pbmcgYm9yZGVyLXJhZGl1cy0wXCI+e3sgdHlwZSB9fTwvc3Bhbj5cbiAgICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtdGV4dFwiPlxuICAgICAgICAgICAgICAgIHt7IGRlc2NyaXB0aW9uIH19XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8YSBjbGFzcz1cImJ0bi1vcmFuZ2UgdGV4dC1saWdodCBwLTIgcG9pbnRlclwiXG4gICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cIm1vZGFsXCJcbiAgICAgICAgICAgICAgIEBjbGljaz1cIiRlbWl0KCdzZXRDYXBhY2l0eScsIGNhcGFjaXR5KVwiXG4gICAgICAgICAgICAgICBkYXRhLXRhcmdldD1cIiNtYWtlQ29tYW5kTW9kYWxcIj5cbiAgICAgICAgICAgICAgICDQodC+0LfQtNCw0YLRjCDQutC+0LzQsNC90LTRgyB7eyB0eXBlIH19XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCIgdi1pZj1cInRlYW0gIT09IHVuZGVmaW5lZFwiPlxuICAgICAgICAgICAgPGg1IGNsYXNzPVwiY2FyZC10aXRsZSBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICB7eyB0ZWFtLm5hbWUgfX1cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlIGJhZGdlLXdhcm5pbmcgYm9yZGVyLXJhZGl1cy0wXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7IHR5cGUgfX1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2g1PlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkLXRleHRcIj4ge3sgdGVhbS5tZW1iZXJzLmxlbmd0aCB9fSDRg9GH0LDRgdC90LjQutC+0LI8L3A+XG4gICAgICAgICAgICA8YSBjbGFzcz1cImJ0bi1vcmFuZ2UgdGV4dC1saWdodCBwLTIgcG9pbnRlclwiIDpocmVmPVwiaHR0cC5nZXRUZWFtTGluayh0ZWFtLmlkKVwiPlxuICAgICAgICAgICAgICAgINCf0L7RgdC80L7RgtGA0LXRgtGMXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbmFtZTogXCJNdnBUZWFtXCIsXG4gICAgICAgIGluamVjdDogW1xuICAgICAgICAgICAgJ2h0dHAnXG4gICAgICAgIF0sXG4gICAgICAgIHByb3BzOiBbXG4gICAgICAgICAgICAndGVhbXMnLFxuICAgICAgICAgICAgJ3RpdGxlJyxcbiAgICAgICAgICAgICdkZXNjcmlwdGlvbicsXG4gICAgICAgICAgICAndHlwZScsXG4gICAgICAgICAgICAnY2FwYWNpdHknXG4gICAgICAgIF0sXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICB0ZWFtKCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudGVhbXMuZmluZCh0ZWFtID0+IE51bWJlcih0ZWFtLmNhcGFjaXR5KSA9PT0gTnVtYmVyKHRoaXMuY2FwYWNpdHkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiZ3JpZFwiPlxuICAgICAgICA8YSBjbGFzcz1cImdyaWQtcm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9nb1wiPlxuICAgICAgICAgICAgICAgIDxpbWcgdi1pZj1cIm1lbWJlci5pbWFnZSAhPT0gbnVsbFwiLz5cbiAgICAgICAgICAgICAgICA8aW1nIHYtZWxzZSBzcmM9XCIvaW1hZ2VzL25vTG9nby5wbmdcIi8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRhXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAge3sgbWVtYmVyLm5pY2tuYW1lIH19XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm90dG9tXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7QndC40Lo8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0YVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWlmPVwiaXNDYXB0YWluXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICDQmtCw0L/QuNGC0LDQvVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtZWxzZT5cbiAgICAgICAgICAgICAgICAgICAgICAgINCY0LPRgNC+0LpcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3R0b21cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPtCg0L7Qu9GMPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGFcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSA6aHJlZj1cImdldFN0ZWFtTGluayhtZW1iZXIuc3RlYW0pXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyB3aWR0aD1cIjIwcHhcIiBzcmM9XCIvaW1hZ2VzL2xvZ2luX3N0ZWFtLnN2Z1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvdHRvbVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+0KHRgtC40Lw8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvYT5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiBcIk12cFRlYW1NZW1iZXJcIixcbiAgICAgICAgcHJvcHM6IFtcbiAgICAgICAgICAgICdtZW1iZXInLFxuICAgICAgICAgICAgJ2lzQ2FwdGFpbidcbiAgICAgICAgXSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgZ2V0U3RlYW1MaW5rOiAoc3RlYW1JZCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBgaHR0cHM6Ly9zdGVhbWNvbW11bml0eS5jb20vcHJvZmlsZXMvJHtzdGVhbUlkfWBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyIG10LTMgZC1ibG9ja1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxmdFwiPlxuICAgICAgICAgICAgICAgIDxhIDpocmVmPVwiaHR0cC5nZXRNdnBMaW5rKClcIj7QndCw0LfQsNC0PC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXZlbnRzX3ZpZXdcIiBpZD1cInRlYW1NZW1iZXJzXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tcG9uZW50IHVwY29taW5nX2V2ZW50c1wiIGlkPVwidXBjb21pbmdfZXZlbnRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm91bmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGltZyBzcmM9XCIvaW1hZ2VzL2xhbXAuc3ZnXCIgYWx0PVwibGFtcFwiIC8+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCj0YfQsNGB0YLQvdC40LrQuFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bXZwLXRlYW0tbWVtYmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwidGVhbS5oYXNPd25Qcm9wZXJ0eSgnbWVtYmVycycpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtZm9yPVwiKG1lbWJlciwga2V5KSBpbiB0ZWFtLm1lbWJlcnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm1lbWJlcj1cIm1lbWJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6a2V5PVwia2V5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDppcy1jYXB0YWluPVwiY2hlY2tNZW1iZXJJc0NhcHRhaW4obWVtYmVyKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbXZwLXRlYW0tbWVtYmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IG10LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZnRcIiB2LWlmPVwiaXNDcmVhdG9yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgQGNsaWNrPVwiZGVsZXRlVGVhbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQo9C00LDQu9C40YLRjCDQutC+0LzQsNC90LTRg1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImJ0bi1vcmFuZ2UgdGV4dC1saWdodCBwb2ludGVyXCIgQGNsaWNrPVwic2hvd0FkZE1vZGFsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXBsdXNcIj48L2k+Jm5ic3A7Jm5ic3A70JTQvtCx0LDQstC40YLRjCDRg9GH0LDRgdC90LjQutC+0LJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZnRcIiB2LWVsc2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJidG4tb3JhbmdlIHRleHQtbGlnaHQgcG9pbnRlclwiIDpocmVmPVwiaHR0cC51c2VyTGVhdmVUZWFtTGluayh0ZWFtSWQpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCf0L7QutC40L3Rg9GC0Ywg0LrQvtC80LDQvdC00YNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBTd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJ1xuICAgIGltcG9ydCBNdnBUZWFtTWVtYmVyIGZyb20gXCIuL012cFRlYW1NZW1iZXJcIjtcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbmFtZTogXCJNdnBUZWFtUGFnZVwiLFxuICAgICAgICBpbmplY3Q6IFtcbiAgICAgICAgICAgICdodHRwJ1xuICAgICAgICBdLFxuICAgICAgICBwcm9wczogW1xuICAgICAgICAgICAgJ3RlYW1JZCdcbiAgICAgICAgXSxcbiAgICAgICAgY29tcG9uZW50czoge1xuICAgICAgICAgICAgJ212cC10ZWFtLW1lbWJlcic6IE12cFRlYW1NZW1iZXIsXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGEoKXtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdGVhbToge30sXG4gICAgICAgICAgICAgICAgaW52aXRlVG9rZW46IG51bGwsXG4gICAgICAgICAgICAgICAgdXNlcjogbnVsbCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIGlzQ3JlYXRvcigpe1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnVzZXIgIT09IG51bGwgJiYgdGhpcy51c2VyLmlkID09PSB0aGlzLnRlYW0uY3JlYXRvci5pZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgZ2V0VGVhbSgpe1xuICAgICAgICAgICAgICAgIHRoaXMuaHR0cC5nZXRNdnBUZWFtKHRoaXMudGVhbUlkKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigoe2RhdGF9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRlYW0gPSBkYXRhO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNoZWNrTWVtYmVySXNDYXB0YWluKG1lbWJlcil7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1lbWJlci5pZCA9PT0gdGhpcy50ZWFtLmNyZWF0b3IuaWRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXRTdGVhbUxpbmsoc3RlYW1JZCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGBodHRwczovL3N0ZWFtY29tbXVuaXR5LmNvbS9wcm9maWxlcy8ke3N0ZWFtSWR9YFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNob3dBZGRNb2RhbCgpe1xuICAgICAgICAgICAgICAgIHRoaXMuaHR0cC5nZXRUZWFtSW52aXRlVG9rZW4odGhpcy50ZWFtSWQpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCh7ZGF0YX0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0ludml0ZU1vZGFsKGRhdGEpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hvd0ludml0ZU1vZGFsKHRva2VuKXtcbiAgICAgICAgICAgICAgICBjb25zdCBpbnZpdGVMaW5rID0gdGhpcy5odHRwLmdldEludml0ZVRvVGVhbUxpbmsodGhpcy50ZWFtSWQsIHRva2VuKVxuXG4gICAgICAgICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfQlNC+0LHQsNCy0LjRgtGMINGD0YfQsNGB0YLQvdC40LrQvtCyJyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ9Ce0YLQv9GA0LDQstGMINGN0YLRgyDRgdGB0YvQu9C60YMg0LjQs9GA0L7QutCw0LwsINC60L7RgtC+0YDRi9GFINGF0L7Rh9C10YjRjCDQv9GA0LjQs9C70LDRgdC40YLRjCDQsiDQutC+0LzQsNC90LTRgycsXG4gICAgICAgICAgICAgICAgICAgIGh0bWw6IGA8dGV4dGFyZWEgY2xhc3M9XCJzd2FsMi10ZXh0YXJlYVwiIHBsYWNlaG9sZGVyPVwiXCIgc3R5bGU9XCJkaXNwbGF5OiBmbGV4O1wiPiR7aW52aXRlTGlua308L3RleHRhcmVhPmAsXG4gICAgICAgICAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHNob3dDb25maXJtQnV0dG9uOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ9Ce0LHQvdC+0LLQuNGC0YwnLFxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiAn0JfQsNC60YDRi9GC0YwnLFxuICAgICAgICAgICAgICAgICAgICBwcmVDb25maXJtOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmh0dHAucmVsb2FkVGVhbUludml0ZVRva2VuKHRoaXMudGVhbUlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCh7ZGF0YX0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93SW52aXRlTW9kYWwoZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWxldGVUZWFtKCl7XG4gICAgICAgICAgICAgICAgdGhpcy5odHRwLmRlbGV0ZU12cFRlYW0odGhpcy50ZWFtSWQpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IHRoaXMuaHR0cC5nZXRNdnBMaW5rKClcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXRVc2VyKCl7XG4gICAgICAgICAgICAgICAgdGhpcy5odHRwLmdldEF1dGhVc2VyKClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHtkYXRhfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VyID0gZGF0YVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0VGVhbSgpO1xuICAgICAgICAgICAgdGhpcy5nZXRVc2VyKCk7XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBjb21tYW5kcyBwLTAgbXQtM1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctNzUgZC1mbGV4XCI+XG4gICAgICAgICAgICAgICAgPG12cC10ZWFtXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwi0J3QsNGB0YLRgNC+0LXQvSDQuNCz0YDQsNGC0Ywg0YHQtdGA0YzQtdC30L3Qvj9cIlxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cItCh0L7Qt9C00LDQuSDRgdCy0L7RjiDQutC+0LzQsNC90LTRgyDQtNC70Y8g0YLRg9GA0LjQutC+0LIgNXY1INC4INCy0YDRi9Cy0LDQudGB0Y8g0LIg0LrQuNCx0LXRgNGB0L/QvtGA0YJcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiNXg1XCJcbiAgICAgICAgICAgICAgICAgICAgY2FwYWNpdHk9XCI1XCJcbiAgICAgICAgICAgICAgICAgICAgQHNldENhcGFjaXR5PVwic2V0Q2FwYWNpdHlcIlxuICAgICAgICAgICAgICAgICAgICA6dGVhbXM9XCJ0ZWFtc1wiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8bXZwLXRlYW1cbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCLQndCw0L/QsNGA0L3QuNC60LhcIlxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cItCd0LXRgiDQv9C+0YHRgtC+0Y/QvdC90L7QuSDQutC+0LzQsNC90LTRiz8g0J/QvtC30L7QstC4INC00YDRg9Cz0LAg0Lgg0LLRi9C90L7RgdC40YLQtSDRgdC+0L/QtdGA0L3QuNC60L7QsiDQstC80LXRgdGC0LVcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiMngyXCJcbiAgICAgICAgICAgICAgICAgICAgY2FwYWNpdHk9XCIyXCJcbiAgICAgICAgICAgICAgICAgICAgQHNldENhcGFjaXR5PVwic2V0Q2FwYWNpdHlcIlxuICAgICAgICAgICAgICAgICAgICA6dGVhbXM9XCJ0ZWFtc1wiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsIGZhZGVcIiBpZD1cIm1ha2VDb21hbmRNb2RhbFwiIHRhYmluZGV4PVwiLTFcIiBhcmlhLWxhYmVsbGVkYnk9XCJleGFtcGxlTW9kYWxMYWJlbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnQgYm9yZGVyLXJhZGl1cy0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwibW9kYWwtdGl0bGVcIiBpZD1cImV4YW1wbGVNb2RhbExhYmVsXCI+0KHQvtC30LTQsNGC0Ywg0LrQvtC80LDQvdC00YM8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCf0YDQuNC00YPQvNCw0Lkg0L3QsNC30LLQsNC90LjQtSAo0YHQvNC+0LbQtdGI0Ywg0L/QvtC80LXQvdGP0YLRjCDQv9C+0YLQvtC8KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPtCd0LDQt9Cy0LDQvdC40LUg0LrQvtC80LDQvdC00Ys8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdi1tb2RlbD1cImNvbW1hbmQubmFtZVwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wgYm9yZGVyLXJhZGl1cy0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cImZvcm0tdGV4dCB0ZXh0LW11dGVkXCIgdi1pZj1cIiFtZXNzYWdlcy5lcnJvci5oYXNPd25Qcm9wZXJ0eSgnbmFtZScpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQnNC+0LbQvdC+INC70LDRgtC40L3RgdC60LjQtSDQsdGD0LrQstGLINC4INGG0LjRhNGA0YtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXCIgdi1pZj1cIm1lc3NhZ2VzLmVycm9yLmhhc093blByb3BlcnR5KCduYW1lJylcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IG1lc3NhZ2VzLmVycm9yLm5hbWVbMF0gfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+0KLQtdCzINC60L7QvNCw0L3QtNGLPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHYtbW9kZWw9XCJjb21tYW5kLnRhZ1wiIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wgYm9yZGVyLXJhZGl1cy0wIHctNTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwiZm9ybS10ZXh0IHRleHQtbXV0ZWRcIiB2LWlmPVwiIW1lc3NhZ2VzLmVycm9yLmhhc093blByb3BlcnR5KCd0YWcnKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0JzQsNC60YHQuNC80YPQvCA2INGB0LjQvNCy0L7Qu9C+0LJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXCIgdi1pZj1cIm1lc3NhZ2VzLmVycm9yLmhhc093blByb3BlcnR5KCd0YWcnKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgbWVzc2FnZXMuZXJyb3IudGFnWzBdIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LXN1Y2Nlc3NcIiB2LWlmPVwibWVzc2FnZXMuc3VjY2VzcyAhPT0gbnVsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgbWVzc2FnZXMuc3VjY2VzcyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1mb290ZXIganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIEBjbGljaz1cImNyZWF0ZVRlYW1cIiBjbGFzcz1cImJ0bi1vcmFuZ2UgdGV4dC1saWdodCBwLTIgdGV4dC1jZW50ZXIgcG9pbnRlciB3LTEwMFwiID7QodC+0LfQtNCw0YLRjCDQutC+0LzQsNC90LTRgzwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiIGNsYXNzPVwiYnRuLWdyZXkgcG9pbnRlciB0ZXh0LWNlbnRlciB0ZXh0LWxpZ2h0IGJvcmRlci1yYWRpdXMtMCBwLTIgdy03NVwiPtCe0YLQvNC10L3QuNGC0Yw8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCIxMjNcIj5cbiAgICAgICAgICAgICAgICA8bXZwLWpvaW5lZC10ZWFtcy8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBNdnBUZWFtIGZyb20gXCIuL012cFRlYW1cIjtcbiAgICBpbXBvcnQgTXZwSm9pbmVkVGVhbXMgZnJvbSBcIi4vTXZwSm9pbmVkVGVhbXNcIjtcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbmFtZTogXCJNdnBUZWFtc1wiLFxuICAgICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICAgICAnbXZwLXRlYW0nOiBNdnBUZWFtLFxuICAgICAgICAgICAgJ212cC1qb2luZWQtdGVhbXMnOiBNdnBKb2luZWRUZWFtc1xuICAgICAgICB9LFxuICAgICAgICBpbmplY3Q6IFsnaHR0cCddLFxuICAgICAgICBkYXRhKCl7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHRlYW1zOiBbXSxcbiAgICAgICAgICAgICAgICBjb21tYW5kOiB7XG4gICAgICAgICAgICAgICAgICAgIGNhcGFjaXR5OiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICB0YWc6IG51bGxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1lc3NhZ2VzOiB7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiB7fSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGNyZWF0ZVRlYW0oKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qge2NhcGFjaXR5LCBuYW1lLCB0YWd9ID0gdGhpcy5jb21tYW5kO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlcy5zdWNjZXNzID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VzLmVycm9yID0ge307XG5cbiAgICAgICAgICAgICAgICB0aGlzLmh0dHAuY3JlYXRlTXZwVGVhbShjYXBhY2l0eSwgbmFtZSwgdGFnKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigoe2RhdGF9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VzLnN1Y2Nlc3MgPSBkYXRhLm1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRlYW1zLnB1c2goZGF0YS50ZWFtKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCh7cmVzcG9uc2V9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VzLmVycm9yID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXRVc2VyVGVhbXMoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5odHRwLmdldFVzZXJUZWFtcygpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCh7ZGF0YX0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGVhbXMgPSBkYXRhO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldENhcGFjaXR5KGNhcGFjaXR5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kLmNhcGFjaXR5ID0gY2FwYWNpdHk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICB0aGlzLmdldFVzZXJUZWFtcygpXG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImV2ZW50c192aWV3XCIgaWQ9XCJ0ZWFtTWVtYmVyc1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbXBvbmVudCB1cGNvbWluZ19ldmVudHNcIiBpZD1cInVwY29taW5nX2V2ZW50c1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm91bmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxpbWcgc3JjPVwiL2ltYWdlcy9sYW1wLnN2Z1wiIGFsdD1cImxhbXBcIiAvPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyB0ZWFtLm5hbWUgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPG12cC10ZWFtLW1lbWJlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJ0ZWFtLmhhc093blByb3BlcnR5KCdtZW1iZXJzJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtZm9yPVwiKG1lbWJlciwga2V5KSBpbiB0ZWFtLm1lbWJlcnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDptZW1iZXI9XCJtZW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XCJrZXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDppcy1jYXB0YWluPVwiY2hlY2tNZW1iZXJJc0NhcHRhaW4obWVtYmVyKVwiPlxuICAgICAgICAgICAgICAgICAgICA8L212cC10ZWFtLW1lbWJlcj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBtdC0zXCIgdi1pZj1cImlzQXV0aG9yaXplICYmIGlzRnJlZVBsYWNlXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxmdFwiPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImJ0bi1vcmFuZ2UgdGV4dC1saWdodCBwb2ludGVyXCIgQGNsaWNrPVwiam9pblRlYW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXBsdXNcIj48L2k+Jm5ic3A7Jm5ic3A70J/RgNC40YHQvtC10LTQtdC90LjRgtGB0Y9cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8bG9naW4tbW9kYWwgOnNob3c9XCIhaXNBdXRob3JpemVcIi8+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBNdnBUZWFtTWVtYmVyIGZyb20gXCIuLi9jYWJpbmV0L012cFRlYW1NZW1iZXJcIjtcbiAgICBpbXBvcnQgTG9naW5Nb2RhbCBmcm9tIFwiLi4vLi4vTG9naW5Nb2RhbFwiO1xuICAgIGltcG9ydCBTd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJ1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiBcIk12cEludml0ZVRlYW1QYWdlXCIsXG4gICAgICAgIGluamVjdDogW1xuICAgICAgICAgICAgJ2h0dHAnLFxuICAgICAgICAgICAgJ2NvbmZpZydcbiAgICAgICAgXSxcbiAgICAgICAgcHJvcHM6IFtcbiAgICAgICAgICAgICd0ZWFtSWQnLFxuICAgICAgICAgICAgJ2lzQXV0aG9yaXplJ1xuICAgICAgICBdLFxuICAgICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICAgICAnbXZwLXRlYW0tbWVtYmVyJzogTXZwVGVhbU1lbWJlcixcbiAgICAgICAgICAgICdsb2dpbi1tb2RhbCc6IExvZ2luTW9kYWxcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YSgpe1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0ZWFtOiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IG51bGxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGF1dGhVc2VyOiBudWxsLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgaXNGcmVlUGxhY2UoKXtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50ZWFtLmhhc093blByb3BlcnR5KCdtZW1iZXJzJykpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50ZWFtLm1lbWJlcnMubGVuZ3RoIDwgdGhpcy50ZWFtLmNhcGFjaXR5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGdldFRlYW0oKXtcbiAgICAgICAgICAgICAgICB0aGlzLmh0dHAuZ2V0TXZwVGVhbSh0aGlzLnRlYW1JZClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHtkYXRhfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50ZWFtID0gZGF0YVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNoZWNrTWVtYmVySXNDYXB0YWluKG1lbWJlcil7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1lbWJlci5pZCA9PT0gdGhpcy50ZWFtLmNyZWF0b3IuaWRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBqb2luVGVhbSgpe1xuICAgICAgICAgICAgICAgIHRoaXMuaHR0cC5nZXRBdXRoVXNlcigpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCh7ZGF0YX0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0aFVzZXIgPSBkYXRhO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZWVkU3RlYW0gPSB0aGlzLmNoZWNrTmVlZFN0ZWFtRm9ySm9pbigpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW5lZWRTdGVhbSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5odHRwLmpvaW5NZW1iZXJUb1RlYW0odGhpcy50ZWFtSWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0VGVhbSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKCh7cmVzcG9uc2V9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yUG9wdXAocmVzcG9uc2UuZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvclBvcHVwKGVycm9yKXtcbiAgICAgICAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ9Cj0L/RgS4uLicsXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IGVycm9yLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2hlY2tOZWVkU3RlYW1Gb3JKb2luKCl7XG4gICAgICAgICAgICAgICAgY29uc3QgaHRtbCA9IGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDQlNC70Y8g0YLQvtCz0L4g0YfRgtC+INCx0Ysg0YPRh9Cw0LLRgdGC0LLQvtCy0LDRgtGMINCyINGC0YPRgNC90LjRgNC1LCDQvdC10L7QsdGF0L7QtNC40LzQviDQv9GA0LjQstGP0LfQsNGC0Ywg0LDQutCw0YPQvdGCXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiR7dGhpcy5jb25maWcuU1RFQU1fTE9HSU5fTElOS31cIj5TdGVhbTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHQtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiJHt0aGlzLmNvbmZpZy5TVEVBTV9MT0dJTl9MSU5LfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2xvZ2luX3N0ZWFtLnN2Z1wiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmA7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hdXRoVXNlciAhPT0gbnVsbCApe1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hdXRoVXNlci5zdGVhbSA9PT0gbnVsbCB8fCB0aGlzLmF1dGhVc2VyLnN0ZWFtID09PSAnJyB8fCB0aGlzLmF1dGhVc2VyLnN0ZWFtID09PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn0KPQv9GBLi4uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93Q2xvc2VCdXR0b246IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICB0aGlzLmdldFRlYW0oKVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgcC0wIG0tMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIHdpbmRvdy1oZWlnaHQtODAgcC0wIG0tMFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgdy0xMDAgaC0xMDBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgZmxleC1jb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYnRuLW9yYW5nZSB0ZXh0LWxpZ2h0IHAtMyBwbC01IHByLTUgZm9udC1zaXplLTIzIHBvaW50ZXJcIiBAY2xpY2s9XCJzaG93TG9naW5Nb2RhbFwiPkpvaW4gdGhlIEdhbWU8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy0xMDAgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3M9XCJ0ZXh0LWxpZ2h0IGZvbnQtc2l6ZS0yM1wiPldoYXQgd2Ugb2ZmZXI8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTEwMCBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LWxpZ2h0IHctNTAgZm9udC1zaXplLTE4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQWQgY29uc2VxdXVudHVyIGN1bHBhIGN1cGlkaXRhdGUgZGVsZW5pdGkgZGljdGEgZGlnbmlzc2ltb3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzdGluY3RpbyBkb2xvciBkb2xvcmVzIGhpYyBpcHNhIGl0YXF1ZSBsYXVkYW50aXVtIG1vbGVzdGlhcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2xsaXRpYSBub3N0cnVtLCBwZXJmZXJlbmRpcyBwcm92aWRlbnQgcXVvcyBzYXBpZW50ZSB2ZXJvIVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgdy0xMDAgaC0xMDBcIj5cbiAgICAgICAgICAgIDxhIGNsYXNzPVwiYnRuLW9yYW5nZSB0ZXh0LWxpZ2h0IHAtMiBwbC0zIHByLTMgcG9pbnRlclwiIEBjbGljaz1cInNob3dMb2dpbk1vZGFsXCI+Sm9pbiB0aGUgR2FtZTwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxsb2dpbi1tb2RhbFxuICAgICAgICAgICAgICAgIHJlZj1cImxvZ2luTW9kYWxcIlxuICAgICAgICAgICAgICAgIDpyZWRpcmVjdD1cImxvZ2luUmVkaXJlY3RcIlxuICAgICAgICAgICAgICAgIDpzaG93PVwic2hvd1wiXG4gICAgICAgICAgICAgICAgc2hvdy1maXJzdD1cInJlZ2lzdHJhdGlvblwiPlxuICAgICAgICA8L2xvZ2luLW1vZGFsPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgTG9naW5Nb2RhbCBmcm9tIFwiLi4vLi4vTG9naW5Nb2RhbFwiO1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiBcIk12cE1haW5cIixcbiAgICAgICAgY29tcG9uZW50czoge1xuICAgICAgICAgICAgJ2xvZ2luLW1vZGFsJzogTG9naW5Nb2RhbFxuICAgICAgICB9LFxuICAgICAgICBwcm9wczogW1xuICAgICAgICAgICAgJ2xvZ2luUmVkaXJlY3QnLFxuICAgICAgICAgICAgJ2lzQXV0aG9yaXplJ1xuICAgICAgICBdLFxuICAgICAgICBkYXRhKCl7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIHNob3dMb2dpbk1vZGFsKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzQXV0aG9yaXplKXtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gdGhpcy5sb2dpblJlZGlyZWN0XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5sb2dpbk1vZGFsLnNob3cgPSB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH1cbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cbiAgICA8bmF2IGNsYXNzPVwibmF2YmFyIG5hdmJhci1leHBhbmQtbGcgbmF2YmFyLWxpZ2h0IGJnLWxpZ2h0IG5hdmJhci1tdnBcIj5cbiAgICAgICAgPGJ1dHRvbiA6Y2xhc3M9XCJ7Y29sbGFwc2VkOiAhc2hvd31cIiBjbGFzcz1cIm5hdmJhci10b2dnbGVyIGJvcmRlci1ub25lXCIgdHlwZT1cImJ1dHRvblwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiNuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCIgYXJpYS1jb250cm9scz1cIm5hdmJhclN1cHBvcnRlZENvbnRlbnRcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBhcmlhLWxhYmVsPVwiVG9nZ2xlIG5hdmlnYXRpb25cIj5cbiAgICAgICAgICAgIDxzcGFuIEBjbGljaz1cInNob3cgPSAhc2hvd1wiIGNsYXNzPVwibmF2YmFyLXRvZ2dsZXItaWNvblwiPjwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxkaXYgOmNsYXNzPVwie3Nob3d9XCIgY2xhc3M9XCJuYXZiYXItY29sbGFwc2UgY29sbGFwc2VcIiBpZD1cIm5hdmJhclN1cHBvcnRlZENvbnRlbnRcIj5cbiAgICAgICAgICAgIDx1bCBjbGFzcz1cIm5hdmJhci1uYXYgbXItYXV0byBkLWZsZXggdy0xMDAganVzdGlmeS1jb250ZW50LWVuZFwiPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtXCIgdi1pZj1cIiFpc0F1dGhvcml6ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8YSBAY2xpY2s9XCJzaG93TG9naW5Gb3JtXCIgY2xhc3M9XCJuYXYtbGlua1wiIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICDQl9Cw0YDQtdCz0LXRgdGC0YDQuNGA0L7QstCw0YLRjCDQv9GA0L7RhNC40LvRjFxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cIm5hdi1saW5rXCIgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEhlbHBcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJuYXYtbGlua1wiIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICDQntGC0L/RgNCw0LLQuNGC0Ywg0L/QuNGB0YzQvNC+INC/0L7QtNC00LXRgNC20LrQtVxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbVwiIHYtaWY9XCJpc0F1dGhvcml6ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cIm5hdi1saW5rXCIgOmhyZWY9XCJodHRwLmdldFByb2ZpbGVMaW5rKClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIE15IEdhbWluZyBQcm9maWxlXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9uYXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbmFtZTogXCJNdnBQYWdlSGVhZGVyXCIsXG4gICAgICAgIGluamVjdDogW1xuICAgICAgICAgICAgJ2h0dHAnXG4gICAgICAgIF0sXG4gICAgICAgIHByb3BzOiBbXG4gICAgICAgICAgICAnaXNBdXRob3JpemUnLFxuICAgICAgICAgICAgJ3Nob3dMb2dpbkZvcm0nXG4gICAgICAgIF0sXG4gICAgICAgIGRhdGEoKXtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgc2hvd0xvZ2luRm9ybSgpe1xuICAgICAgICAgICAgICAgIGhlYWRlci52aWV3ID0gMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21wb25lbnQgdXBjb21pbmdfZXZlbnRzXCIgaWQ9XCJ1cGNvbWluZ19ldmVudHNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3VuZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48aW1nIHNyYz1cIi9pbWFnZXMvbGFtcC5zdmdcIiBhbHQ9XCJsYW1wXCIgLz48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAg0KLRg9GA0L3QuNGA0Ysge3tnYW1lfX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWQgdy0xMDAgaC0xMDAgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyXCIgdi1pZj1cImxvYWRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxvYWQvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncmlkXCIgdi1mb3I9XCJ0b3VybmFtZW50IGluIHRvdXJuYW1lbnRzXCIgdi1pZj1cIiFsb2FkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIDpocmVmPVwiJy9ydS9tdnAvdG91cm5hbWVudC8nICsgdG91cm5hbWVudC5pZFwiIGNsYXNzPVwiZ3JpZC1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2dvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyA6c3JjPVwidG91cm5hbWVudC5sb2dvXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3t0b3VybmFtZW50Lm5hbWV9fSAje3t0b3VybmFtZW50Lm51bWJlcn19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3R0b21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPtCd0LDQt9Cy0LDQvdC40LU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57e3RvdXJuYW1lbnQuZGF0ZX19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3R0b21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPtCU0LDRgtCwPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3t0b3VybmFtZW50Lm1vZGV9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm90dG9tXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7QoNC10LbQuNC8PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtbG9jay1vcGVuXCIgdi1pZj1cInRvdXJuYW1lbnQuYWNjZXNzXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1sb2NrXCIgdi1lbHNlPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm90dG9tXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7QlNC+0YHRgtGD0L88L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57e3RvdXJuYW1lbnQucHJpemV9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm90dG9tXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7Qn9GA0LjQtzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgTG9hZCBmcm9tIFwiLi4vLi4vTG9hZFwiO1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiBcIk12cFRvdXJuYW1lbnRzTGlzdFwiLFxuICAgICAgICBpbmplY3Q6IFtcbiAgICAgICAgICAgICdodHRwJyxcbiAgICAgICAgICAgICdoZWFkZXInXG4gICAgICAgIF0sXG4gICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICAgICdsb2FkJzogTG9hZFxuICAgICAgICB9LFxuICAgICAgICBkYXRhKCl7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHRvdXJuYW1lbnRzOiBbXSxcbiAgICAgICAgICAgICAgICBnYW1lczoge1xuICAgICAgICAgICAgICAgICAgICAnQ1M6R08nOiAnY3MnLFxuICAgICAgICAgICAgICAgICAgICAnRE9UQSc6ICdkb3RhJyxcbiAgICAgICAgICAgICAgICAgICAgJ1ZhbG9yYW50JzogJ3ZhbG9yYW50J1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbG9hZDogZmFsc2UsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHdhdGNoOiB7XG4gICAgICAgICAgICBnYW1lKCl7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRUb3VybmFtZW50c0J5R2FtZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgZ2FtZSgpe1xuICAgICAgICAgICAgICAgIHJldHVybiAgdGhpcy5oZWFkZXIuZ2FtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgZ2V0VG91cm5hbWVudHNCeUdhbWUoKXtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5odHRwLmdldFRvdXJuYW1lbnRzQnlHYW1lKHRoaXMuZ2FtZXNbdGhpcy5oZWFkZXIuZ2FtZV0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCh7ZGF0YX0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG91cm5hbWVudHMgPSBkYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgICAgICB0aGlzLmdldFRvdXJuYW1lbnRzQnlHYW1lKCk7XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF92bS5fbSgwKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2FkaW5naW8tc3Bpbm5lci1nZWFyLW10cGh3Z295NzllXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsZGlvLXJ3dXZhcnZucDFzXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIilcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJzbGlkZXNcIiB9LFxuICAgIFtcbiAgICAgIF9jKFwibG9naW5cIiwge1xuICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgdmFsdWU6IF92bS5jaGVja1N0ZXAoXCJsb2dpblwiKSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwiY2hlY2tTdGVwKCdsb2dpbicpXCJcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIGF0dHJzOiB7IGVycm9yOiBfdm0uZXJyb3IsIGVtYWlsOiBfdm0uZW1haWwsIGNoZWNrOiBfdm0ucGFzc3dvcmQgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBzZXRTdGVwOiBfdm0uc2V0U3RlcCxcbiAgICAgICAgICBhdXRoTG9naW46IF92bS5hdXRoTG9naW4sXG4gICAgICAgICAgY2xvc2U6IF92bS5jbG9zZSxcbiAgICAgICAgICBpbnB1dEVtYWlsOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgX3ZtLmVtYWlsID0gdmFsdWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIGlucHV0UGFzc3dvcmQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBfdm0ucGFzc3dvcmQgPSB2YWx1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJyZWdpc3RyYXRpb25cIiwge1xuICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgdmFsdWU6IF92bS5jaGVja1N0ZXAoXCJyZWdpc3RyYXRpb25cIiksXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcImNoZWNrU3RlcCgncmVnaXN0cmF0aW9uJylcIlxuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgYXR0cnM6IHsgZW1haWw6IF92bS5lbWFpbCwgY2hlY2s6IF92bS5jaGVjayB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIHNldFN0ZXA6IF92bS5zZXRTdGVwLFxuICAgICAgICAgIGNsb3NlOiBfdm0uY2xvc2UsXG4gICAgICAgICAgaW5wdXRFbWFpbDogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIF92bS5lbWFpbCA9IHZhbHVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBpbnB1dFBhc3N3b3JkOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgX3ZtLnBhc3N3b3JkID0gdmFsdWVcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgdmFsdWU6IF92bS5jaGVjayxcbiAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICBfdm0uY2hlY2sgPSAkJHZcbiAgICAgICAgICB9LFxuICAgICAgICAgIGV4cHJlc3Npb246IFwiY2hlY2tcIlxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImNvbmZpcm0tY29kZVwiLCB7XG4gICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICB2YWx1ZTogX3ZtLmNoZWNrU3RlcChcImNvbmZpcm1Db2RlXCIpLFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJjaGVja1N0ZXAoJ2NvbmZpcm1Db2RlJylcIlxuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgYXR0cnM6IHsgY29kZUNvbmZpcm1lZDogX3ZtLmNvZGVDb25maXJtZWQsIGVtYWlsOiBfdm0uZW1haWwgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBzZXRTdGVwOiBfdm0uc2V0U3RlcCxcbiAgICAgICAgICBjbG9zZTogX3ZtLmNsb3NlLFxuICAgICAgICAgIHJlZ2lzdHJhdGlvbjogX3ZtLnJlZ2lzdHJhdGlvblxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcIm5pY2stbmFtZVwiLCB7XG4gICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICB2YWx1ZTogX3ZtLmNoZWNrU3RlcChcIm5pY2tuYW1lXCIpLFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJjaGVja1N0ZXAoJ25pY2tuYW1lJylcIlxuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgYXR0cnM6IHsgZW1haWw6IF92bS5lbWFpbCB9LFxuICAgICAgICBvbjogeyBzZXRTdGVwOiBfdm0uc2V0U3RlcCwgY2xvc2U6IF92bS5jbG9zZSB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImNvbmdyYXR1bGF0aW9uXCIsIHtcbiAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgIHZhbHVlOiBfdm0uY2hlY2tTdGVwKFwiY29uZ3JhdHVsYXRpb25cIiksXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcImNoZWNrU3RlcCgnY29uZ3JhdHVsYXRpb24nKVwiXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBvbjogeyBzZXRTdGVwOiBfdm0uc2V0U3RlcCwgY2xvc2U6IF92bS5jbG9zZSB9XG4gICAgICB9KVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcInRyYW5zaXRpb25cIiwgeyBhdHRyczogeyBuYW1lOiBcInNsaWRlLWZhZGVzXCIgfSB9LCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2dpbl9mb3JtXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2dpbl9ibG9ja1wiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2dvdHlwZVwiIH0sIFtcbiAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsb2dvdHlwZVwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBcIi9pbWFnZXMvQ2hhbXBzX2xvZ290eXBlLnN2Z1wiIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2dpbl90aXRsZVwiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAg0J/QvtC00YLQstC10YDQttC00LXQvdC40LUg0L/QvtGH0YLRi1xcbiAgICAgICAgICAgIFwiKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2dpbl9pbnB1dFwiIH0sIFtcbiAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmNvbmZpcm1Db2RlLFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiY29uZmlybUNvZGVcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIHJlcXVpcmVkOiBcIlwiIH0sXG4gICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmNvbmZpcm1Db2RlIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX3ZtLmNvbmZpcm1Db2RlID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcItCa0L7QtCDQv9C+0LTRgtCy0LXRgNC20LTQtdC90LjRj1wiKV0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwic2VuZFwiLCBvbjogeyBjbGljazogX3ZtLnNlbmRSZWdpc3RyYXRpb25Db25maXJtIH0gfSxcbiAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgINCe0YLQv9GA0LDQstC40YLRjFxcbiAgICAgICAgICAgIFwiKV1cbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX3ZtLmVycm9yTWVzc2FnZSAhPT0gbnVsbFxuICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlcnJvclwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZXJyb3JNZXNzYWdlKSArXG4gICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX3ZtLnN1Y2Nlc3NNZXNzYWdlICE9PSBudWxsXG4gICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVycm9yIHRleHQtc3VjY2Vzc1wiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uc3VjY2Vzc01lc3NhZ2UpICtcbiAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxpbmtzIGQtZmxleFwiIH0sIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm10LTFcIixcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRlbWl0KFwic2V0U3RlcFwiLCBcInJlZ2lzdHJhdGlvblwiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfYyhcInNwYW5cIiwgW192bS5fdihcIkJhY2tcIildKV1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtdC0xXCIsIG9uOiB7IGNsaWNrOiBfdm0uc2hvd05pY2tuYW1lIH0gfSwgW1xuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgY2xhc3M6IHsgZGlzYWJsZWQ6ICFfdm0uY29kZUNvbmZpcm1lZCB9IH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFwiTmV4dFwiKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjbG9zZWRcIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInN2Z1wiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTZcIixcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTZcIixcbiAgICAgICAgICAgICAgICB2aWV3Qm94OiBcIjAgMCAxNiAxNlwiLFxuICAgICAgICAgICAgICAgIGZpbGw6IFwibm9uZVwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uY2xvc2UgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJwYXRoXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgZDpcbiAgICAgICAgICAgICAgICAgICAgXCJNOC44ODM5MiA4LjAwMDA0TDE1LjgxNjkgMS4wNjY5OEMxNi4wNjEgMC44MjI4ODIgMTYuMDYxIDAuNDI3MTMzIDE1LjgxNjkgMC4xODMwN0MxNS41NzI4IC0wLjA2MDk5MjIgMTUuMTc3MSAtMC4wNjEwMjM0IDE0LjkzMyAwLjE4MzA3TDcuOTk5OTggNy4xMTYxM0wxLjA2Njk3IDAuMTgzMDdDMC44MjI4OCAtMC4wNjEwMjM0IDAuNDI3MTMyIC0wLjA2MTAyMzQgMC4xODMwNyAwLjE4MzA3Qy0wLjA2MDk5MiAwLjQyNzE2NCAtMC4wNjEwMjMzIDAuODIyOTE0IDAuMTgzMDcgMS4wNjY5OEw3LjExNjA4IDhMMC4xODMwNyAxNC45MzMxQy0wLjA2MTAyMzMgMTUuMTc3MiAtMC4wNjEwMjMzIDE1LjU3MjkgMC4xODMwNyAxNS44MTdDMC4zMDUxMDEgMTUuOTM5IDAuNDY1MDY5IDE2IDAuNjI1MDM3IDE2QzAuNzg1MDA1IDE2IDAuOTQ0OTQzIDE1LjkzOSAxLjA2NyAxNS44MTdMNy45OTk5OCA4Ljg4Mzk0TDE0LjkzMyAxNS44MTdDMTUuMDU1IDE1LjkzOSAxNS4yMTUgMTYgMTUuMzc1IDE2QzE1LjUzNDkgMTYgMTUuNjk0OSAxNS45MzkgMTUuODE2OSAxNS44MTdDMTYuMDYxIDE1LjU3MjkgMTYuMDYxIDE1LjE3NzEgMTUuODE2OSAxNC45MzMxTDguODgzOTIgOC4wMDAwNFpcIixcbiAgICAgICAgICAgICAgICAgIGZpbGw6IFwiIzg2ODg4QVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwidHJhbnNpdGlvblwiLCB7IGF0dHJzOiB7IG5hbWU6IFwic2xpZGUtZmFkZXNcIiB9IH0sIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvZ2luX2Zvcm1cIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvZ2luX2Jsb2NrXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvZ290eXBlXCIgfSwgW1xuICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxvZ290eXBlXCIsXG4gICAgICAgICAgICBhdHRyczogeyBzcmM6IFwiL2ltYWdlcy9DaGFtcHNfbG9nb3R5cGUuc3ZnXCIgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvZ2luX3RpdGxlXCIgfSwgW1xuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgINCf0L7Qt9C00YDQsNCy0LvRj9C10Lwg0YEg0YPRgdC/0LXRiNC90L7QuSDRgNC10LPQtdGB0YLRgNCw0YbQuNC10LkhXFxuICAgICAgICAgICAgXCJcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNlbmRcIixcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRlbWl0KFwic2V0U3RlcFwiLCBcImZpbmlzaFwiKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgIFBsYXlcXG4gICAgICAgICAgICBcIildXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2xvc2VkXCIsXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kZW1pdChcImNsb3NlXCIpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInN2Z1wiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gICAgICAgICAgICAgICAgICB3aWR0aDogXCIxNlwiLFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjE2XCIsXG4gICAgICAgICAgICAgICAgICB2aWV3Qm94OiBcIjAgMCAxNiAxNlwiLFxuICAgICAgICAgICAgICAgICAgZmlsbDogXCJub25lXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcInBhdGhcIiwge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgZDpcbiAgICAgICAgICAgICAgICAgICAgICBcIk04Ljg4MzkyIDguMDAwMDRMMTUuODE2OSAxLjA2Njk4QzE2LjA2MSAwLjgyMjg4MiAxNi4wNjEgMC40MjcxMzMgMTUuODE2OSAwLjE4MzA3QzE1LjU3MjggLTAuMDYwOTkyMiAxNS4xNzcxIC0wLjA2MTAyMzQgMTQuOTMzIDAuMTgzMDdMNy45OTk5OCA3LjExNjEzTDEuMDY2OTcgMC4xODMwN0MwLjgyMjg4IC0wLjA2MTAyMzQgMC40MjcxMzIgLTAuMDYxMDIzNCAwLjE4MzA3IDAuMTgzMDdDLTAuMDYwOTkyIDAuNDI3MTY0IC0wLjA2MTAyMzMgMC44MjI5MTQgMC4xODMwNyAxLjA2Njk4TDcuMTE2MDggOEwwLjE4MzA3IDE0LjkzMzFDLTAuMDYxMDIzMyAxNS4xNzcyIC0wLjA2MTAyMzMgMTUuNTcyOSAwLjE4MzA3IDE1LjgxN0MwLjMwNTEwMSAxNS45MzkgMC40NjUwNjkgMTYgMC42MjUwMzcgMTZDMC43ODUwMDUgMTYgMC45NDQ5NDMgMTUuOTM5IDEuMDY3IDE1LjgxN0w3Ljk5OTk4IDguODgzOTRMMTQuOTMzIDE1LjgxN0MxNS4wNTUgMTUuOTM5IDE1LjIxNSAxNiAxNS4zNzUgMTZDMTUuNTM0OSAxNiAxNS42OTQ5IDE1LjkzOSAxNS44MTY5IDE1LjgxN0MxNi4wNjEgMTUuNTcyOSAxNi4wNjEgMTUuMTc3MSAxNS44MTY5IDE0LjkzMzFMOC44ODM5MiA4LjAwMDA0WlwiLFxuICAgICAgICAgICAgICAgICAgICBmaWxsOiBcIiM4Njg4OEFcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwidHJhbnNpdGlvblwiLCB7IGF0dHJzOiB7IG5hbWU6IFwic2xpZGUtZmFkZXNcIiB9IH0sIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvZ2luX2Zvcm1cIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvZ2luX2Jsb2NrXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvZ290eXBlXCIgfSwgW1xuICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxvZ290eXBlXCIsXG4gICAgICAgICAgICBhdHRyczogeyBzcmM6IFwiL2ltYWdlcy9DaGFtcHNfbG9nb3R5cGUuc3ZnXCIgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvZ2luX3RpdGxlXCIgfSwgW1xuICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICDQktGF0L7QtCDQsiDQu9C40YfQvdGL0Lkg0LrQsNCx0LjQvdC10YJcXG4gICAgICAgICAgICBcIilcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9naW5faW5wdXRcIiB9LCBbXG4gICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImVtYWlsXCIgfSxcbiAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZW1haWwgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRlbWl0KFwiaW5wdXRFbWFpbFwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcItCQ0LTRgNC10YEg0Y3Qu9C10LrRgtGA0L7QvdC90L7QuSDQv9C+0YfRgtGLXCIpXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9naW5faW5wdXRcIiB9LCBbXG4gICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInBhc3N3b3JkXCIgfSxcbiAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ucGFzc3dvcmQgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRlbWl0KFwiaW5wdXRQYXNzd29yZFwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcItCf0LDRgNC+0LvRjFwiKV0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNlbmRcIixcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRlbWl0KFwiYXV0aExvZ2luXCIpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAg0JLQvtC50YLQuFxcbiAgICAgICAgICAgIFwiKV1cbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX3ZtLmVycm9yXG4gICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVycm9yXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAg0J3QtdC/0YDQsNCy0LjQu9GM0L3Ri9C5INC70L7Qs9C40L0g0LjQu9C4INC/0LDRgNC+0LvRjFxcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzdWJ0ZXh0XCIgfSwgW1xuICAgICAgICAgIF92bS5fdihcItCY0LvQuCDQstC+0LnQtNC40YLQtSDRgSDQv9C+0LzQvtGJ0YzRjlwiKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJhbHRlcm5hdGVcIiB9LCBbXG4gICAgICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgaHJlZjogX3ZtLnN0ZWFtTG9naW5MaW5rIH0gfSwgW1xuICAgICAgICAgICAgX2MoXCJpbWdcIiwgeyBhdHRyczogeyBzcmM6IFwiL2ltYWdlcy9sb2dpbl9zdGVhbS5zdmdcIiB9IH0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGlua3NcIixcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRlbWl0KFwic2V0U3RlcFwiLCBcInJlZ2lzdHJhdGlvblwiKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX2MoXCJkaXZcIiwgW19jKFwic3BhblwiLCBbX3ZtLl92KFwi0KDQtdCz0LjRgdGC0YDQsNGG0LjRj1wiKV0pXSldXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2xvc2VkXCIsXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kZW1pdChcImNsb3NlXCIpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInN2Z1wiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gICAgICAgICAgICAgICAgICB3aWR0aDogXCIxNlwiLFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjE2XCIsXG4gICAgICAgICAgICAgICAgICB2aWV3Qm94OiBcIjAgMCAxNiAxNlwiLFxuICAgICAgICAgICAgICAgICAgZmlsbDogXCJub25lXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcInBhdGhcIiwge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgZDpcbiAgICAgICAgICAgICAgICAgICAgICBcIk04Ljg4MzkyIDguMDAwMDRMMTUuODE2OSAxLjA2Njk4QzE2LjA2MSAwLjgyMjg4MiAxNi4wNjEgMC40MjcxMzMgMTUuODE2OSAwLjE4MzA3QzE1LjU3MjggLTAuMDYwOTkyMiAxNS4xNzcxIC0wLjA2MTAyMzQgMTQuOTMzIDAuMTgzMDdMNy45OTk5OCA3LjExNjEzTDEuMDY2OTcgMC4xODMwN0MwLjgyMjg4IC0wLjA2MTAyMzQgMC40MjcxMzIgLTAuMDYxMDIzNCAwLjE4MzA3IDAuMTgzMDdDLTAuMDYwOTkyIDAuNDI3MTY0IC0wLjA2MTAyMzMgMC44MjI5MTQgMC4xODMwNyAxLjA2Njk4TDcuMTE2MDggOEwwLjE4MzA3IDE0LjkzMzFDLTAuMDYxMDIzMyAxNS4xNzcyIC0wLjA2MTAyMzMgMTUuNTcyOSAwLjE4MzA3IDE1LjgxN0MwLjMwNTEwMSAxNS45MzkgMC40NjUwNjkgMTYgMC42MjUwMzcgMTZDMC43ODUwMDUgMTYgMC45NDQ5NDMgMTUuOTM5IDEuMDY3IDE1LjgxN0w3Ljk5OTk4IDguODgzOTRMMTQuOTMzIDE1LjgxN0MxNS4wNTUgMTUuOTM5IDE1LjIxNSAxNiAxNS4zNzUgMTZDMTUuNTM0OSAxNiAxNS42OTQ5IDE1LjkzOSAxNS44MTY5IDE1LjgxN0MxNi4wNjEgMTUuNTcyOSAxNi4wNjEgMTUuMTc3MSAxNS44MTY5IDE0LjkzMzFMOC44ODM5MiA4LjAwMDA0WlwiLFxuICAgICAgICAgICAgICAgICAgICBmaWxsOiBcIiM4Njg4OEFcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwidHJhbnNpdGlvblwiLCB7IGF0dHJzOiB7IG5hbWU6IFwic2xpZGUtZmFkZXNcIiB9IH0sIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvZ2luX2Zvcm1cIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvZ2luX2Jsb2NrXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvZ290eXBlXCIgfSwgW1xuICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxvZ290eXBlXCIsXG4gICAgICAgICAgICBhdHRyczogeyBzcmM6IFwiL2ltYWdlcy9DaGFtcHNfbG9nb3R5cGUuc3ZnXCIgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvZ2luX3RpdGxlXCIgfSwgW1xuICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICDQktCy0LXQtNC40YLQtSDRgdCy0L7QuSDQvdC40LrQvdC10LnQvFxcbiAgICAgICAgICAgIFwiKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2dpbl9pbnB1dFwiIH0sIFtcbiAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLm5pY2tuYW1lLFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwibmlja25hbWVcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIG5hbWU6IFwiZW1haWxcIiwgcmVxdWlyZWQ6IFwiXCIgfSxcbiAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ubmlja25hbWUgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfdm0ubmlja25hbWUgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi0JvQvtCz0LjQvSAoTmlja25hbWUpXCIpXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF92bS5lcnJvck1lc3NhZ2UgIT09IG51bGxcbiAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZXJyb3JcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmVycm9yTWVzc2FnZSkgK1xuICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic2VuZFwiLCBvbjogeyBjbGljazogX3ZtLnNldE5pY2tuYW1lIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICBGaW5pc2ggUmVnaXN0cmF0aW9uXFxuICAgICAgICAgICAgXCIpXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNsb3NlZFwiLCBvbjogeyBjbGljazogX3ZtLmNsb3NlIH0gfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJzdmdcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjE2XCIsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjE2XCIsXG4gICAgICAgICAgICAgICAgdmlld0JveDogXCIwIDAgMTYgMTZcIixcbiAgICAgICAgICAgICAgICBmaWxsOiBcIm5vbmVcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInBhdGhcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBkOlxuICAgICAgICAgICAgICAgICAgICBcIk04Ljg4MzkyIDguMDAwMDRMMTUuODE2OSAxLjA2Njk4QzE2LjA2MSAwLjgyMjg4MiAxNi4wNjEgMC40MjcxMzMgMTUuODE2OSAwLjE4MzA3QzE1LjU3MjggLTAuMDYwOTkyMiAxNS4xNzcxIC0wLjA2MTAyMzQgMTQuOTMzIDAuMTgzMDdMNy45OTk5OCA3LjExNjEzTDEuMDY2OTcgMC4xODMwN0MwLjgyMjg4IC0wLjA2MTAyMzQgMC40MjcxMzIgLTAuMDYxMDIzNCAwLjE4MzA3IDAuMTgzMDdDLTAuMDYwOTkyIDAuNDI3MTY0IC0wLjA2MTAyMzMgMC44MjI5MTQgMC4xODMwNyAxLjA2Njk4TDcuMTE2MDggOEwwLjE4MzA3IDE0LjkzMzFDLTAuMDYxMDIzMyAxNS4xNzcyIC0wLjA2MTAyMzMgMTUuNTcyOSAwLjE4MzA3IDE1LjgxN0MwLjMwNTEwMSAxNS45MzkgMC40NjUwNjkgMTYgMC42MjUwMzcgMTZDMC43ODUwMDUgMTYgMC45NDQ5NDMgMTUuOTM5IDEuMDY3IDE1LjgxN0w3Ljk5OTk4IDguODgzOTRMMTQuOTMzIDE1LjgxN0MxNS4wNTUgMTUuOTM5IDE1LjIxNSAxNiAxNS4zNzUgMTZDMTUuNTM0OSAxNiAxNS42OTQ5IDE1LjkzOSAxNS44MTY5IDE1LjgxN0MxNi4wNjEgMTUuNTcyOSAxNi4wNjEgMTUuMTc3MSAxNS44MTY5IDE0LjkzMzFMOC44ODM5MiA4LjAwMDA0WlwiLFxuICAgICAgICAgICAgICAgICAgZmlsbDogXCIjODY4ODhBXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJ0cmFuc2l0aW9uXCIsIHsgYXR0cnM6IHsgbmFtZTogXCJzbGlkZS1mYWRlc1wiIH0gfSwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9naW5fZm9ybVwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9naW5fcmVxXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvZ2luX2Jsb2NrXCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9nb3R5cGVcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxvZ290eXBlXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogXCIvaW1hZ2VzL0NoYW1wc19sb2dvdHlwZS5zdmdcIiB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2dpbl90aXRsZVwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAg0KDQtdCz0LjRgdGC0YDQsNGG0LjRj1xcbiAgICAgICAgICAgICAgICBcIilcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9naW5faW5wdXRcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIgfSxcbiAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5lbWFpbCB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJGVtaXQoXCJpbnB1dEVtYWlsXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcItCQ0LTRgNC10YEg0Y3Qu9C10LrRgtGA0L7QvdC90L7QuSDQv9C+0YfRgtGLXCIpXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9naW5faW5wdXRcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJwYXNzd29yZFwiIH0sXG4gICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ucGFzc3dvcmQgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRlbWl0KFwiaW5wdXRQYXNzd29yZFwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLQn9Cw0YDQvtC70YxcIildKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2dpbl9jaGVja1wiIH0sIFtcbiAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW1xuICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImNoZWNrYm94XCIgfSxcbiAgICAgICAgICAgICAgICBkb21Qcm9wczogeyBjaGVja2VkOiBfdm0uY2hlY2sgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS51cGRhdGUoJGV2ZW50LnRhcmdldC5jaGVja2VkKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgaHJlZjogXCIvcnUvdGVybXMtb2YtdXNlXCIsIHRhcmdldDogXCJfYmxhbmtcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICBcItCe0LfQvdCw0LrQvtC80LvQtdC9INGBINC/0YDQsNCy0LjQu9Cw0LzQuCDQuNGB0L/QvtC70YzQt9C+0LLQsNC90LjRjyDRgdC10YDQstC40YHQsCDCq0NoYW1wc8K7XCJcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNlbmRcIixcbiAgICAgICAgICAgICAgc3R5bGU6IHsgb3BhY2l0eTogX3ZtLmNoZWNrID8gXCIxXCIgOiBcIi41XCIgfSxcbiAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5jaGVja0lzRW1haWxWYWxpZCB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgINCX0LDRgNC10LPQuNGB0YLRgNC40YDQvtCy0LDRgtGM0YHRj1xcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS5lcnJvck1lc3NhZ2UgIT09IG51bGxcbiAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlcnJvclwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmVycm9yTWVzc2FnZSkgK1xuICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInN1YnRleHRcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCLQmNC70Lgg0LLQvtC50LTQuNGC0LUg0YEg0L/QvtC80L7RidGM0Y5cIilcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYWx0ZXJuYXRlXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgaHJlZjogX3ZtLnN0ZWFtTG9naW5MaW5rIH0gfSwgW1xuICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7IGF0dHJzOiB7IHNyYzogXCIvaW1hZ2VzL2xvZ2luX3N0ZWFtLnN2Z1wiIH0gfSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxpbmtzXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kZW1pdChcInNldFN0ZXBcIiwgXCJsb2dpblwiKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwi0JLRhdC+0LQg0LIg0LvQuNGH0L3Ri9C5INC60LDQsdC40L3QtdGCXCIpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjbG9zZWRcIiwgb246IHsgY2xpY2s6IF92bS5jbG9zZSB9IH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInN2Z1wiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gICAgICAgICAgICAgICAgICB3aWR0aDogXCIxNlwiLFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjE2XCIsXG4gICAgICAgICAgICAgICAgICB2aWV3Qm94OiBcIjAgMCAxNiAxNlwiLFxuICAgICAgICAgICAgICAgICAgZmlsbDogXCJub25lXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcInBhdGhcIiwge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgZDpcbiAgICAgICAgICAgICAgICAgICAgICBcIk04Ljg4MzkyIDguMDAwMDRMMTUuODE2OSAxLjA2Njk4QzE2LjA2MSAwLjgyMjg4MiAxNi4wNjEgMC40MjcxMzMgMTUuODE2OSAwLjE4MzA3QzE1LjU3MjggLTAuMDYwOTkyMiAxNS4xNzcxIC0wLjA2MTAyMzQgMTQuOTMzIDAuMTgzMDdMNy45OTk5OCA3LjExNjEzTDEuMDY2OTcgMC4xODMwN0MwLjgyMjg4IC0wLjA2MTAyMzQgMC40MjcxMzIgLTAuMDYxMDIzNCAwLjE4MzA3IDAuMTgzMDdDLTAuMDYwOTkyIDAuNDI3MTY0IC0wLjA2MTAyMzMgMC44MjI5MTQgMC4xODMwNyAxLjA2Njk4TDcuMTE2MDggOEwwLjE4MzA3IDE0LjkzMzFDLTAuMDYxMDIzMyAxNS4xNzcyIC0wLjA2MTAyMzMgMTUuNTcyOSAwLjE4MzA3IDE1LjgxN0MwLjMwNTEwMSAxNS45MzkgMC40NjUwNjkgMTYgMC42MjUwMzcgMTZDMC43ODUwMDUgMTYgMC45NDQ5NDMgMTUuOTM5IDEuMDY3IDE1LjgxN0w3Ljk5OTk4IDguODgzOTRMMTQuOTMzIDE1LjgxN0MxNS4wNTUgMTUuOTM5IDE1LjIxNSAxNiAxNS4zNzUgMTZDMTUuNTM0OSAxNiAxNS42OTQ5IDE1LjkzOSAxNS44MTY5IDE1LjgxN0MxNi4wNjEgMTUuNTcyOSAxNi4wNjEgMTUuMTc3MSAxNS44MTY5IDE0LjkzMzFMOC44ODM5MiA4LjAwMDA0WlwiLFxuICAgICAgICAgICAgICAgICAgICBmaWxsOiBcIiM4Njg4OEFcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2dpbl9yZXFfYmxvY2tcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpdGVtXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgXCLQotGA0LXQvdC10YDRg9C50YLQtdGB0Ywg0LLQvNC10YHRgtC1INGBINC70YPRh9GI0LjQvNC4INC40LPRgNC+0LrQsNC80Lgg0LIg0LLQsNGI0LjRhSDQu9GO0LHQuNC80YvRhSDQuNCz0YDQsNGFXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaXRlbVwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIpLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtfdm0uX3YoXCLQn9C+0YHQu9C10LTQvdC40LUg0L3QvtCy0L7RgdGC0Lgg0Lgg0YHQvtCx0YvRgtC40Y9cIildKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpdGVtXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgW192bS5fdihcItCS0LXQu9C40LrQvtC70LXQv9C90L7QtSDRgdC+0L7QsdGJ0LXRgdGC0LLQvlwiKV0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIml0ZW1cIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCBbX3ZtLl92KFwi0KLRgNCw0L3RgdC70Y/RhtC40Lgg0Lgg0YDQtdC30YPQu9GM0YLQsNGC0Ysg0LzQsNGC0YfQtdC5XCIpXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaXRlbVwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIpLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtfdm0uX3YoXCLQkNC90LDQu9C40YLQuNC60LAg0L7RgiDQv9GA0L7RhNC10YHRgdC40L7QvdCw0LvQvtCyXCIpXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJncmlkXCIgfSwgW1xuICAgIF9jKFwiYVwiLCB7IHN0YXRpY0NsYXNzOiBcImdyaWQtcm93XCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkYXRhXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRpdGxlXCIgfSwgW1xuICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgX3ZtLl9zKF92bS50ZWFtLm5hbWUpICtcbiAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfdm0uX20oMClcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZGF0YVwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0aXRsZVwiIH0sIFtcbiAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgIF92bS5fcyhfdm0udGVhbS50YWcpICtcbiAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfdm0uX20oMSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZGF0YVwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0aXRsZVwiIH0sIFtcbiAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgIF92bS5fcyhfdm0udGVhbS5tZW1iZXJzLmxlbmd0aCkgK1xuICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF92bS5fbSgyKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkYXRhIHB0LTJcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0bi1vcmFuZ2UgdGV4dC1saWdodCBwLTIgcG9pbnRlclwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogX3ZtLmh0dHAuZ2V0VGVhbUxpbmsoX3ZtLnRlYW0uaWQpIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAg0J/QvtGB0LzQvtGC0YDQtdGC0YxcXG4gICAgICAgICAgICBcIildXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYm90dG9tXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkYXRlXCIgfSwgW19jKFwic3BhblwiLCBbX3ZtLl92KFwi0J3QsNC30LLQsNC90LjQtVwiKV0pXSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJvdHRvbVwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZGF0ZVwiIH0sIFtfYyhcInNwYW5cIiwgW192bS5fdihcItCi0LXQs1wiKV0pXSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJvdHRvbVwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZGF0ZVwiIH0sIFtfYyhcInNwYW5cIiwgW192bS5fdihcItCj0YfQsNGB0L3QuNC60L7QslwiKV0pXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJldmVudHNfdmlld1wiIH0sIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lclwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29tcG9uZW50IHVwY29taW5nX2V2ZW50c1wiIH0sXG4gICAgICAgICAgX3ZtLl9sKF92bS50ZWFtcywgZnVuY3Rpb24odGVhbSwga2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gX2MoXCJtdnAtam9pbmVkLXRlYW1cIiwgeyBrZXk6IGtleSwgYXR0cnM6IHsgdGVhbTogdGVhbSB9IH0pXG4gICAgICAgICAgfSksXG4gICAgICAgICAgMVxuICAgICAgICApXG4gICAgICBdKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaGVhZGVyIG10LTNcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGZ0XCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNsYXNzOiB7IGFjdGl2ZTogX3ZtLmFjdGl2ZSA9PT0gXCJjb21tYW5kc1wiIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgX3ZtLmFjdGl2ZSA9IFwiY29tbWFuZHNcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCLQmtCe0JzQkNCd0JTQq1wiKV1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY2xhc3M6IHsgYWN0aXZlOiBfdm0uYWN0aXZlID09PSBcInRvdXJuYW1lbnRzXCIgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uYWN0aXZlID0gXCJ0b3VybmFtZW50c1wiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihcItCi0KPQoNCd0JjQoNCrXCIpXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjbGFzczogeyBhY3RpdmU6IF92bS5hY3RpdmUgPT09IFwibWF0Y2hlc1wiIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgX3ZtLmFjdGl2ZSA9IFwibWF0Y2hlc1wiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihcItCc0JDQotCn0JhcIildXG4gICAgICAgICAgKVxuICAgICAgICBdKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJNdnBUZWFtc1wiKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQgdy01MCBtci0yIGJvcmRlci1yYWRpdXMtMFwiIH0sIFtcbiAgICBfdm0udGVhbSA9PT0gdW5kZWZpbmVkXG4gICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1ib2R5XCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJoNVwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjYXJkLXRpdGxlIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS50aXRsZSkgKyBcIlxcbiAgICAgICAgICAgIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJiYWRnZSBiYWRnZS13YXJuaW5nIGJvcmRlci1yYWRpdXMtMFwiIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLnR5cGUpKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLXRleHRcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uZGVzY3JpcHRpb24pICsgXCJcXG4gICAgICAgIFwiKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuLW9yYW5nZSB0ZXh0LWxpZ2h0IHAtMiBwb2ludGVyXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgXCJkYXRhLXRvZ2dsZVwiOiBcIm1vZGFsXCIsXG4gICAgICAgICAgICAgICAgXCJkYXRhLXRhcmdldFwiOiBcIiNtYWtlQ29tYW5kTW9kYWxcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJGVtaXQoXCJzZXRDYXBhY2l0eVwiLCBfdm0uY2FwYWNpdHkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICDQodC+0LfQtNCw0YLRjCDQutC+0LzQsNC90LTRgyBcIiArXG4gICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnR5cGUpICtcbiAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICBcIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKVxuICAgICAgICBdKVxuICAgICAgOiBfdm0uX2UoKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF92bS50ZWFtICE9PSB1bmRlZmluZWRcbiAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLWJvZHlcIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImg1XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNhcmQtdGl0bGUgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLnRlYW0ubmFtZSkgKyBcIlxcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYmFkZ2UgYmFkZ2Utd2FybmluZyBib3JkZXItcmFkaXVzLTBcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLnR5cGUpICsgXCJcXG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLXRleHRcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIgKyBfdm0uX3MoX3ZtLnRlYW0ubWVtYmVycy5sZW5ndGgpICsgXCIg0YPRh9Cw0YHQvdC40LrQvtCyXCIpXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4tb3JhbmdlIHRleHQtbGlnaHQgcC0yIHBvaW50ZXJcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogX3ZtLmh0dHAuZ2V0VGVhbUxpbmsoX3ZtLnRlYW0uaWQpIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICAgICAg0J/QvtGB0LzQvtGC0YDQtdGC0YxcXG4gICAgICAgIFwiKV1cbiAgICAgICAgICApXG4gICAgICAgIF0pXG4gICAgICA6IF92bS5fZSgpXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImdyaWRcIiB9LCBbXG4gICAgX2MoXCJhXCIsIHsgc3RhdGljQ2xhc3M6IFwiZ3JpZC1yb3dcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvZ29cIiB9LCBbXG4gICAgICAgIF92bS5tZW1iZXIuaW1hZ2UgIT09IG51bGxcbiAgICAgICAgICA/IF9jKFwiaW1nXCIpXG4gICAgICAgICAgOiBfYyhcImltZ1wiLCB7IGF0dHJzOiB7IHNyYzogXCIvaW1hZ2VzL25vTG9nby5wbmdcIiB9IH0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImRhdGFcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGl0bGVcIiB9LCBbXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLm1lbWJlci5uaWNrbmFtZSkgK1xuICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF92bS5fbSgwKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkYXRhXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRpdGxlXCIgfSwgW1xuICAgICAgICAgIF92bS5pc0NhcHRhaW5cbiAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgINCa0LDQv9C40YLQsNC9XFxuICAgICAgICAgICAgICAgIFwiKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgOiBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAg0JjQs9GA0L7QulxcbiAgICAgICAgICAgICAgICBcIilcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF92bS5fbSgxKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkYXRhXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRpdGxlXCIgfSwgW1xuICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBocmVmOiBfdm0uZ2V0U3RlYW1MaW5rKF92bS5tZW1iZXIuc3RlYW0pIH0gfSwgW1xuICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgd2lkdGg6IFwiMjBweFwiLCBzcmM6IFwiL2ltYWdlcy9sb2dpbl9zdGVhbS5zdmdcIiB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfdm0uX20oMilcbiAgICAgIF0pXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYm90dG9tXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkYXRlXCIgfSwgW19jKFwic3BhblwiLCBbX3ZtLl92KFwi0J3QuNC6XCIpXSldKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYm90dG9tXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkYXRlXCIgfSwgW19jKFwic3BhblwiLCBbX3ZtLl92KFwi0KDQvtC70YxcIildKV0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJib3R0b21cIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImRhdGVcIiB9LCBbX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLQodGC0LjQvFwiKV0pXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaGVhZGVyIG10LTMgZC1ibG9ja1wiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGZ0XCIgfSwgW1xuICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBocmVmOiBfdm0uaHR0cC5nZXRNdnBMaW5rKCkgfSB9LCBbX3ZtLl92KFwi0J3QsNC30LDQtFwiKV0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImV2ZW50c192aWV3XCIsIGF0dHJzOiB7IGlkOiBcInRlYW1NZW1iZXJzXCIgfSB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyXCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjb21wb25lbnQgdXBjb21pbmdfZXZlbnRzXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwidXBjb21pbmdfZXZlbnRzXCIgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX3ZtLl9sKF92bS50ZWFtLm1lbWJlcnMsIGZ1bmN0aW9uKG1lbWJlciwga2V5KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnRlYW0uaGFzT3duUHJvcGVydHkoXCJtZW1iZXJzXCIpXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJtdnAtdGVhbS1tZW1iZXJcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBtZW1iZXI6IG1lbWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpcy1jYXB0YWluXCI6IF92bS5jaGVja01lbWJlcklzQ2FwdGFpbihtZW1iZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDJcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93IG10LTJcIiB9LCBbXG4gICAgICAgICAgICBfdm0uaXNDcmVhdG9yXG4gICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsZnRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImFcIiwgeyBvbjogeyBjbGljazogX3ZtLmRlbGV0ZVRlYW0gfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDQo9C00LDQu9C40YLRjCDQutC+0LzQsNC90LTRg1xcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0bi1vcmFuZ2UgdGV4dC1saWdodCBwb2ludGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5zaG93QWRkTW9kYWwgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLXBsdXNcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLCoMKg0JTQvtCx0LDQstC40YLRjCDRg9GH0LDRgdC90LjQutC+0LJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIilcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIDogX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsZnRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4tb3JhbmdlIHRleHQtbGlnaHQgcG9pbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IF92bS5odHRwLnVzZXJMZWF2ZVRlYW1MaW5rKF92bS50ZWFtSWQpIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgINCf0L7QutC40L3Rg9GC0Ywg0LrQvtC80LDQvdC00YNcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaGVhZGVyXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3VuZFwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgIF9jKFwiaW1nXCIsIHsgYXR0cnM6IHsgc3JjOiBcIi9pbWFnZXMvbGFtcC5zdmdcIiwgYWx0OiBcImxhbXBcIiB9IH0pXG4gICAgICAgIF0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRpdGxlXCIgfSwgW1xuICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCj0YfQsNGB0YLQvdC40LrQuFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICApXG4gICAgICBdKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRcIiB9LCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXIgY29tbWFuZHMgcC0wIG10LTNcIiB9LCBbXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ3LTc1IGQtZmxleFwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcIm12cC10ZWFtXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIHRpdGxlOiBcItCd0LDRgdGC0YDQvtC10L0g0LjQs9GA0LDRgtGMINGB0LXRgNGM0LXQt9C90L4/XCIsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgICAgIFwi0KHQvtC30LTQsNC5INGB0LLQvtGOINC60L7QvNCw0L3QtNGDINC00LvRjyDRgtGD0YDQuNC60L7QsiA1djUg0Lgg0LLRgNGL0LLQsNC50YHRjyDQsiDQutC40LHQtdGA0YHQv9C+0YDRglwiLFxuICAgICAgICAgICAgICB0eXBlOiBcIjV4NVwiLFxuICAgICAgICAgICAgICBjYXBhY2l0eTogXCI1XCIsXG4gICAgICAgICAgICAgIHRlYW1zOiBfdm0udGVhbXNcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbjogeyBzZXRDYXBhY2l0eTogX3ZtLnNldENhcGFjaXR5IH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwibXZwLXRlYW1cIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgdGl0bGU6IFwi0J3QsNC/0LDRgNC90LjQutC4XCIsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgICAgIFwi0J3QtdGCINC/0L7RgdGC0L7Rj9C90L3QvtC5INC60L7QvNCw0L3QtNGLPyDQn9C+0LfQvtCy0Lgg0LTRgNGD0LPQsCDQuCDQstGL0L3QvtGB0LjRgtC1INGB0L7Qv9C10YDQvdC40LrQvtCyINCy0LzQtdGB0YLQtVwiLFxuICAgICAgICAgICAgICB0eXBlOiBcIjJ4MlwiLFxuICAgICAgICAgICAgICBjYXBhY2l0eTogXCIyXCIsXG4gICAgICAgICAgICAgIHRlYW1zOiBfdm0udGVhbXNcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbjogeyBzZXRDYXBhY2l0eTogX3ZtLnNldENhcGFjaXR5IH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwibW9kYWwgZmFkZVwiLFxuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICBpZDogXCJtYWtlQ29tYW5kTW9kYWxcIixcbiAgICAgICAgICAgIHRhYmluZGV4OiBcIi0xXCIsXG4gICAgICAgICAgICBcImFyaWEtbGFiZWxsZWRieVwiOiBcImV4YW1wbGVNb2RhbExhYmVsXCIsXG4gICAgICAgICAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtb2RhbC1kaWFsb2dcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLWNvbnRlbnQgYm9yZGVyLXJhZGl1cy0wXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtYm9keVwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX20oMSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCLQndCw0LfQstCw0L3QuNC1INC60L7QvNCw0L3QtNGLXCIpXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uY29tbWFuZC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJjb21tYW5kLm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sIGJvcmRlci1yYWRpdXMtMFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmNvbW1hbmQubmFtZSB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5jb21tYW5kLCBcIm5hbWVcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICFfdm0ubWVzc2FnZXMuZXJyb3IuaGFzT3duUHJvcGVydHkoXCJuYW1lXCIpXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJzbWFsbFwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tdGV4dCB0ZXh0LW11dGVkXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0JzQvtC20L3QviDQu9Cw0YLQuNC90YHQutC40LUg0LHRg9C60LLRiyDQuCDRhtC40YTRgNGLXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0ubWVzc2FnZXMuZXJyb3IuaGFzT3duUHJvcGVydHkoXCJuYW1lXCIpXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJzbWFsbFwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLm1lc3NhZ2VzLmVycm9yLm5hbWVbMF0pICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihcItCi0LXQsyDQutC+0LzQsNC90LTRi1wiKV0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmNvbW1hbmQudGFnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJjb21tYW5kLnRhZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2wgYm9yZGVyLXJhZGl1cy0wIHctNTBcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5jb21tYW5kLnRhZyB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5jb21tYW5kLCBcInRhZ1wiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgIV92bS5tZXNzYWdlcy5lcnJvci5oYXNPd25Qcm9wZXJ0eShcInRhZ1wiKVxuICAgICAgICAgICAgICAgICAgICA/IF9jKFwic21hbGxcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLXRleHQgdGV4dC1tdXRlZFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCc0LDQutGB0LjQvNGD0LwgNiDRgdC40LzQstC+0LvQvtCyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0ubWVzc2FnZXMuZXJyb3IuaGFzT3duUHJvcGVydHkoXCJ0YWdcIilcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNtYWxsXCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ubWVzc2FnZXMuZXJyb3IudGFnWzBdKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0ubWVzc2FnZXMuc3VjY2VzcyAhPT0gbnVsbFxuICAgICAgICAgICAgICAgICAgICA/IF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtc3VjY2Vzc1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLm1lc3NhZ2VzLnN1Y2Nlc3MpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLWZvb3RlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYnRuLW9yYW5nZSB0ZXh0LWxpZ2h0IHAtMiB0ZXh0LWNlbnRlciBwb2ludGVyIHctMTAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5jcmVhdGVUZWFtIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcItCh0L7Qt9C00LDRgtGMINC60L7QvNCw0L3QtNGDXCIpXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYnRuLWdyZXkgcG9pbnRlciB0ZXh0LWNlbnRlciB0ZXh0LWxpZ2h0IGJvcmRlci1yYWRpdXMtMCBwLTIgdy03NVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiZGF0YS1kaXNtaXNzXCI6IFwibW9kYWxcIiwgXCJhcmlhLWxhYmVsXCI6IFwiQ2xvc2VcIiB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLQntGC0LzQtdC90LjRgtGMXCIpXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiMTIzXCIgfSwgW19jKFwibXZwLWpvaW5lZC10ZWFtc1wiKV0sIDEpXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtaGVhZGVyXCIgfSwgW1xuICAgICAgX2MoXG4gICAgICAgIFwiaDVcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtb2RhbC10aXRsZVwiLCBhdHRyczogeyBpZDogXCJleGFtcGxlTW9kYWxMYWJlbFwiIH0gfSxcbiAgICAgICAgW192bS5fdihcItCh0L7Qt9C00LDRgtGMINC60L7QvNCw0L3QtNGDXCIpXVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJhXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJjbG9zZVwiLFxuICAgICAgICAgIGF0dHJzOiB7IFwiZGF0YS1kaXNtaXNzXCI6IFwibW9kYWxcIiwgXCJhcmlhLWxhYmVsXCI6IFwiQ2xvc2VcIiB9XG4gICAgICAgIH0sXG4gICAgICAgIFtfYyhcInNwYW5cIiwgeyBhdHRyczogeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiIH0gfSwgW192bS5fdihcIsOXXCIpXSldXG4gICAgICApXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0XCIgfSwgW1xuICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgX3ZtLl92KFxuICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQn9GA0LjQtNGD0LzQsNC5INC90LDQt9Cy0LDQvdC40LUgKNGB0LzQvtC20LXRiNGMINC/0L7QvNC10L3Rj9GC0Ywg0L/QvtGC0L7QvClcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgKVxuICAgICAgXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImV2ZW50c192aWV3XCIsIGF0dHJzOiB7IGlkOiBcInRlYW1NZW1iZXJzXCIgfSB9LFxuICAgIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbXBvbmVudCB1cGNvbWluZ19ldmVudHNcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwidXBjb21pbmdfZXZlbnRzXCIgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJoZWFkZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0aXRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS50ZWFtLm5hbWUpICtcbiAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLl9sKF92bS50ZWFtLm1lbWJlcnMsIGZ1bmN0aW9uKG1lbWJlciwga2V5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS50ZWFtLmhhc093blByb3BlcnR5KFwibWVtYmVyc1wiKVxuICAgICAgICAgICAgICAgICAgPyBfYyhcIm12cC10ZWFtLW1lbWJlclwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lbWJlcjogbWVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJpcy1jYXB0YWluXCI6IF92bS5jaGVja01lbWJlcklzQ2FwdGFpbihtZW1iZXIpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDJcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfdm0uaXNBdXRob3JpemUgJiYgX3ZtLmlzRnJlZVBsYWNlXG4gICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvdyBtdC0zXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxmdFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4tb3JhbmdlIHRleHQtbGlnaHQgcG9pbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmpvaW5UZWFtIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS1wbHVzXCIgfSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIsKgwqDQn9GA0LjRgdC+0LXQtNC10L3QuNGC0YHRj1xcbiAgICAgICAgICAgICAgICBcIilcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwibG9naW4tbW9kYWxcIiwgeyBhdHRyczogeyBzaG93OiAhX3ZtLmlzQXV0aG9yaXplIH0gfSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3VuZFwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgX2MoXCJpbWdcIiwgeyBhdHRyczogeyBzcmM6IFwiL2ltYWdlcy9sYW1wLnN2Z1wiLCBhbHQ6IFwibGFtcFwiIH0gfSlcbiAgICAgIF0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXIgcC0wIG0tMFwiIH0sXG4gICAgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXIgd2luZG93LWhlaWdodC04MCBwLTAgbS0wXCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICBcInJvdyBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgdy0xMDAgaC0xMDBcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgZmxleC1jb2x1bW5cIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBtYi0zXCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnRuLW9yYW5nZSB0ZXh0LWxpZ2h0IHAtMyBwbC01IHByLTUgZm9udC1zaXplLTIzIHBvaW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uc2hvd0xvZ2luTW9kYWwgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkpvaW4gdGhlIEdhbWVcIildXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX3ZtLl9tKDEpXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdXG4gICAgICAgIClcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICBcInJvdyBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgdy0xMDAgaC0xMDBcIlxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuLW9yYW5nZSB0ZXh0LWxpZ2h0IHAtMiBwbC0zIHByLTMgcG9pbnRlclwiLFxuICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLnNob3dMb2dpbk1vZGFsIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwiSm9pbiB0aGUgR2FtZVwiKV1cbiAgICAgICAgICApXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJsb2dpbi1tb2RhbFwiLCB7XG4gICAgICAgIHJlZjogXCJsb2dpbk1vZGFsXCIsXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgcmVkaXJlY3Q6IF92bS5sb2dpblJlZGlyZWN0LFxuICAgICAgICAgIHNob3c6IF92bS5zaG93LFxuICAgICAgICAgIFwic2hvdy1maXJzdFwiOiBcInJlZ2lzdHJhdGlvblwiXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidy0xMDAgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIiB9LCBbXG4gICAgICBfYyhcInN0cm9uZ1wiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtbGlnaHQgZm9udC1zaXplLTIzXCIgfSwgW1xuICAgICAgICBfdm0uX3YoXCJXaGF0IHdlIG9mZmVyXCIpXG4gICAgICBdKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidy0xMDAgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIiB9LCBbXG4gICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWxpZ2h0IHctNTAgZm9udC1zaXplLTE4XCIgfSwgW1xuICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC5cXG4gICAgICAgICAgICAgICAgICAgICAgICBBZCBjb25zZXF1dW50dXIgY3VscGEgY3VwaWRpdGF0ZSBkZWxlbml0aSBkaWN0YSBkaWduaXNzaW1vcyxcXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXN0aW5jdGlvIGRvbG9yIGRvbG9yZXMgaGljIGlwc2EgaXRhcXVlIGxhdWRhbnRpdW0gbW9sZXN0aWFzLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vbGxpdGlhIG5vc3RydW0sIHBlcmZlcmVuZGlzIHByb3ZpZGVudCBxdW9zIHNhcGllbnRlIHZlcm8hXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICApXG4gICAgICBdKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIm5hdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwibmF2YmFyIG5hdmJhci1leHBhbmQtbGcgbmF2YmFyLWxpZ2h0IGJnLWxpZ2h0IG5hdmJhci1tdnBcIiB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwibmF2YmFyLXRvZ2dsZXIgYm9yZGVyLW5vbmVcIixcbiAgICAgICAgICBjbGFzczogeyBjb2xsYXBzZWQ6ICFfdm0uc2hvdyB9LFxuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgXCJkYXRhLXRvZ2dsZVwiOiBcImNvbGxhcHNlXCIsXG4gICAgICAgICAgICBcImRhdGEtdGFyZ2V0XCI6IFwiI25hdmJhclN1cHBvcnRlZENvbnRlbnRcIixcbiAgICAgICAgICAgIFwiYXJpYS1jb250cm9sc1wiOiBcIm5hdmJhclN1cHBvcnRlZENvbnRlbnRcIixcbiAgICAgICAgICAgIFwiYXJpYS1leHBhbmRlZFwiOiBcImZhbHNlXCIsXG4gICAgICAgICAgICBcImFyaWEtbGFiZWxcIjogXCJUb2dnbGUgbmF2aWdhdGlvblwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5hdmJhci10b2dnbGVyLWljb25cIixcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdm0uc2hvdyA9ICFfdm0uc2hvd1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5hdmJhci1jb2xsYXBzZSBjb2xsYXBzZVwiLFxuICAgICAgICAgIGNsYXNzOiB7IHNob3c6IF92bS5zaG93IH0sXG4gICAgICAgICAgYXR0cnM6IHsgaWQ6IFwibmF2YmFyU3VwcG9ydGVkQ29udGVudFwiIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ1bFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYXZiYXItbmF2IG1yLWF1dG8gZC1mbGV4IHctMTAwIGp1c3RpZnktY29udGVudC1lbmRcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgIV92bS5pc0F1dGhvcml6ZVxuICAgICAgICAgICAgICAgID8gX2MoXCJsaVwiLCB7IHN0YXRpY0NsYXNzOiBcIm5hdi1pdGVtXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYXYtbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogXCIjXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uc2hvd0xvZ2luRm9ybSB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICDQl9Cw0YDQtdCz0LXRgdGC0YDQuNGA0L7QstCw0YLRjCDQv9GA0L7RhNC40LvRjFxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5fbSgxKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLmlzQXV0aG9yaXplXG4gICAgICAgICAgICAgICAgPyBfYyhcImxpXCIsIHsgc3RhdGljQ2xhc3M6IFwibmF2LWl0ZW1cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5hdi1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBfdm0uaHR0cC5nZXRQcm9maWxlTGluaygpIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIE15IEdhbWluZyBQcm9maWxlXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApXG4gICAgICAgIF1cbiAgICAgIClcbiAgICBdXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwibGlcIiwgeyBzdGF0aWNDbGFzczogXCJuYXYtaXRlbVwiIH0sIFtcbiAgICAgIF9jKFwiYVwiLCB7IHN0YXRpY0NsYXNzOiBcIm5hdi1saW5rXCIsIGF0dHJzOiB7IGhyZWY6IFwiI1wiIH0gfSwgW1xuICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIEhlbHBcXG4gICAgICAgICAgICAgICAgXCIpXG4gICAgICBdKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwibGlcIiwgeyBzdGF0aWNDbGFzczogXCJuYXYtaXRlbVwiIH0sIFtcbiAgICAgIF9jKFwiYVwiLCB7IHN0YXRpY0NsYXNzOiBcIm5hdi1saW5rXCIsIGF0dHJzOiB7IGhyZWY6IFwiI1wiIH0gfSwgW1xuICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgINCe0YLQv9GA0LDQstC40YLRjCDQv9C40YHRjNC80L4g0L/QvtC00LTQtdGA0LbQutC1XFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyXCIgfSwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJjb21wb25lbnQgdXBjb21pbmdfZXZlbnRzXCIsXG4gICAgICAgICAgYXR0cnM6IHsgaWQ6IFwidXBjb21pbmdfZXZlbnRzXCIgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJoZWFkZXJcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0aXRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICDQotGD0YDQvdC40YDRiyBcIiArXG4gICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmdhbWUpICtcbiAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0ubG9hZFxuICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICBcImxvYWQgdy0xMDAgaC0xMDAgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfYyhcImxvYWRcIildLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS5fbChfdm0udG91cm5hbWVudHMsIGZ1bmN0aW9uKHRvdXJuYW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiAhX3ZtLmxvYWRcbiAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImdyaWRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJncmlkLXJvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiL3J1L212cC90b3VybmFtZW50L1wiICsgdG91cm5hbWVudC5pZCB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvZ29cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7IGF0dHJzOiB7IHNyYzogdG91cm5hbWVudC5sb2dvIH0gfSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZGF0YVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKHRvdXJuYW1lbnQubmFtZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiAjXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3ModG91cm5hbWVudC5udW1iZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9tKDEsIHRydWUpXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImRhdGFcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3ModG91cm5hbWVudC5kYXRlKSldKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9tKDIsIHRydWUpXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImRhdGFcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3ModG91cm5hbWVudC5tb2RlKSldKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9tKDMsIHRydWUpXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImRhdGFcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0b3VybmFtZW50LmFjY2Vzc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLWxvY2stb3BlblwiIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtbG9ja1wiIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX20oNCwgdHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZGF0YVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyh0b3VybmFtZW50LnByaXplKSldKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9tKDUsIHRydWUpXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAyXG4gICAgICApXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm91bmRcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgIF9jKFwiaW1nXCIsIHsgYXR0cnM6IHsgc3JjOiBcIi9pbWFnZXMvbGFtcC5zdmdcIiwgYWx0OiBcImxhbXBcIiB9IH0pXG4gICAgICBdKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYm90dG9tXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkYXRlXCIgfSwgW19jKFwic3BhblwiLCBbX3ZtLl92KFwi0J3QsNC30LLQsNC90LjQtVwiKV0pXSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJvdHRvbVwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZGF0ZVwiIH0sIFtfYyhcInNwYW5cIiwgW192bS5fdihcItCU0LDRgtCwXCIpXSldKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYm90dG9tXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkYXRlXCIgfSwgW19jKFwic3BhblwiLCBbX3ZtLl92KFwi0KDQtdC20LjQvFwiKV0pXSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJvdHRvbVwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZGF0ZVwiIH0sIFtfYyhcInNwYW5cIiwgW192bS5fdihcItCU0L7RgdGC0YPQv1wiKV0pXSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJvdHRvbVwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZGF0ZVwiIH0sIFtfYyhcInNwYW5cIiwgW192bS5fdihcItCf0YDQuNC3XCIpXSldKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sInNvdXJjZVJvb3QiOiIifQ==
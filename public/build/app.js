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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Mb2FkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Mb2FkLnZ1ZT9hYTljIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0xvYWQudnVlPzdkOTUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvTG9hZC52dWU/MDg1MCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Mb2dpbk1vZGFsLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Mb2dpbk1vZGFsLnZ1ZT8xYTc1Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0xvZ2luTW9kYWwudnVlPzkwNTUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4vQ29uZmlybUNvZGVGb3JtLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9sb2dpbi9Db25maXJtQ29kZUZvcm0udnVlPzIxN2QiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4vQ29uZmlybUNvZGVGb3JtLnZ1ZT81OGNhIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xvZ2luL0NvbmdyYXR1bGF0aW9uc0Zvcm0udnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xvZ2luL0NvbmdyYXR1bGF0aW9uc0Zvcm0udnVlPzA3Y2IiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4vQ29uZ3JhdHVsYXRpb25zRm9ybS52dWU/NjQ0MCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9sb2dpbi9Mb2dpbkZvcm0udnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xvZ2luL0xvZ2luRm9ybS52dWU/ZjQ0OSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9sb2dpbi9Mb2dpbkZvcm0udnVlP2VhMzIiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4vTmlja25hbWVGb3JtLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9sb2dpbi9OaWNrbmFtZUZvcm0udnVlP2QxZDUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4vTmlja25hbWVGb3JtLnZ1ZT84ZTMwIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xvZ2luL1JlZ2lzdHJhdGlvbkZvcm0udnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xvZ2luL1JlZ2lzdHJhdGlvbkZvcm0udnVlP2ZhNmIiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4vUmVnaXN0cmF0aW9uRm9ybS52dWU/MTJjOSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tdnAvY2FiaW5ldC9NdnBKb2luZWRUZWFtLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tdnAvY2FiaW5ldC9NdnBKb2luZWRUZWFtLnZ1ZT9kYTg0Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL212cC9jYWJpbmV0L012cEpvaW5lZFRlYW0udnVlPzRkYmYiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL2NhYmluZXQvTXZwSm9pbmVkVGVhbXMudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL212cC9jYWJpbmV0L012cEpvaW5lZFRlYW1zLnZ1ZT9lNjU2Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL212cC9jYWJpbmV0L012cEpvaW5lZFRlYW1zLnZ1ZT83MmQwIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL212cC9jYWJpbmV0L012cFBhZ2UudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL212cC9jYWJpbmV0L012cFBhZ2UudnVlPzQxODciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL2NhYmluZXQvTXZwUGFnZS52dWU/YTUwMyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tdnAvY2FiaW5ldC9NdnBUZWFtLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tdnAvY2FiaW5ldC9NdnBUZWFtLnZ1ZT9lNmFkIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL212cC9jYWJpbmV0L012cFRlYW0udnVlPzkwOTciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL2NhYmluZXQvTXZwVGVhbU1lbWJlci52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL2NhYmluZXQvTXZwVGVhbU1lbWJlci52dWU/MzkyZiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tdnAvY2FiaW5ldC9NdnBUZWFtTWVtYmVyLnZ1ZT83NGRhIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL212cC9jYWJpbmV0L012cFRlYW1QYWdlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tdnAvY2FiaW5ldC9NdnBUZWFtUGFnZS52dWU/NTAxZiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tdnAvY2FiaW5ldC9NdnBUZWFtUGFnZS52dWU/NzRjMSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tdnAvY2FiaW5ldC9NdnBUZWFtcy52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL2NhYmluZXQvTXZwVGVhbXMudnVlPzcyMGMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL2NhYmluZXQvTXZwVGVhbXMudnVlP2VmZDAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL2ludml0ZS9NdnBJbnZpdGVUZWFtUGFnZS52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL2ludml0ZS9NdnBJbnZpdGVUZWFtUGFnZS52dWU/M2YyMiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tdnAvaW52aXRlL012cEludml0ZVRlYW1QYWdlLnZ1ZT9jYzU1Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL212cC9zZXJ2aWNlcy9NdnBTZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL212cC90b3VybmFtZW50cy9NdnBNYWluLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tdnAvdG91cm5hbWVudHMvTXZwTWFpbi52dWU/ZDA3MiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tdnAvdG91cm5hbWVudHMvTXZwTWFpbi52dWU/YjFjMCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tdnAvdG91cm5hbWVudHMvTXZwUGFnZUhlYWRlci52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL3RvdXJuYW1lbnRzL012cFBhZ2VIZWFkZXIudnVlP2ViODciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL3RvdXJuYW1lbnRzL012cFBhZ2VIZWFkZXIudnVlPzJmYmQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL3RvdXJuYW1lbnRzL012cFRvdXJuYW1lbnRzTGlzdC52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL3RvdXJuYW1lbnRzL012cFRvdXJuYW1lbnRzTGlzdC52dWU/M2Y0MSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tdnAvdG91cm5hbWVudHMvTXZwVG91cm5hbWVudHNMaXN0LnZ1ZT82NTI5Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy9qcy9jb21wb25lbnRzL0xvYWQudnVlIiwid2VicGFjazovLy9hc3NldHMvanMvY29tcG9uZW50cy9Mb2dpbk1vZGFsLnZ1ZSIsIndlYnBhY2s6Ly8vYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4vQ29uZmlybUNvZGVGb3JtLnZ1ZSIsIndlYnBhY2s6Ly8vYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4vQ29uZ3JhdHVsYXRpb25zRm9ybS52dWUiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xvZ2luL0xvZ2luRm9ybS52dWUiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xvZ2luL05pY2tuYW1lRm9ybS52dWUiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xvZ2luL1JlZ2lzdHJhdGlvbkZvcm0udnVlIiwid2VicGFjazovLy9hc3NldHMvanMvY29tcG9uZW50cy9tdnAvY2FiaW5ldC9NdnBKb2luZWRUZWFtLnZ1ZSIsIndlYnBhY2s6Ly8vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL2NhYmluZXQvTXZwSm9pbmVkVGVhbXMudnVlIiwid2VicGFjazovLy9hc3NldHMvanMvY29tcG9uZW50cy9tdnAvY2FiaW5ldC9NdnBQYWdlLnZ1ZSIsIndlYnBhY2s6Ly8vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL2NhYmluZXQvTXZwVGVhbS52dWUiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy9qcy9jb21wb25lbnRzL212cC9jYWJpbmV0L012cFRlYW1NZW1iZXIudnVlIiwid2VicGFjazovLy9hc3NldHMvanMvY29tcG9uZW50cy9tdnAvY2FiaW5ldC9NdnBUZWFtUGFnZS52dWUiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy9qcy9jb21wb25lbnRzL212cC9jYWJpbmV0L012cFRlYW1zLnZ1ZSIsIndlYnBhY2s6Ly8vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL2ludml0ZS9NdnBJbnZpdGVUZWFtUGFnZS52dWUiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy9qcy9jb21wb25lbnRzL212cC90b3VybmFtZW50cy9NdnBNYWluLnZ1ZSIsIndlYnBhY2s6Ly8vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL3RvdXJuYW1lbnRzL012cFBhZ2VIZWFkZXIudnVlIiwid2VicGFjazovLy9hc3NldHMvanMvY29tcG9uZW50cy9tdnAvdG91cm5hbWVudHMvTXZwVG91cm5hbWVudHNMaXN0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Mb2FkLnZ1ZT8zM2JhIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0xvYWQudnVlP2UwMTciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvTG9naW5Nb2RhbC52dWU/NmViMCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9sb2dpbi9Db25maXJtQ29kZUZvcm0udnVlP2U3NTIiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4vQ29uZ3JhdHVsYXRpb25zRm9ybS52dWU/MDZmMSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9sb2dpbi9Mb2dpbkZvcm0udnVlPzc5ODMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4vTmlja25hbWVGb3JtLnZ1ZT84NmJmIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xvZ2luL1JlZ2lzdHJhdGlvbkZvcm0udnVlPzU5ZmUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL2NhYmluZXQvTXZwSm9pbmVkVGVhbS52dWU/ZDViMyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tdnAvY2FiaW5ldC9NdnBKb2luZWRUZWFtcy52dWU/OTEyOCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tdnAvY2FiaW5ldC9NdnBQYWdlLnZ1ZT9kYjBhIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL212cC9jYWJpbmV0L012cFRlYW0udnVlP2MzZGIiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL2NhYmluZXQvTXZwVGVhbU1lbWJlci52dWU/NjM3YyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tdnAvY2FiaW5ldC9NdnBUZWFtUGFnZS52dWU/NzU1YyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tdnAvY2FiaW5ldC9NdnBUZWFtcy52dWU/NTQyYSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tdnAvaW52aXRlL012cEludml0ZVRlYW1QYWdlLnZ1ZT81OWE3Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL212cC90b3VybmFtZW50cy9NdnBNYWluLnZ1ZT9mYTNjIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL212cC90b3VybmFtZW50cy9NdnBQYWdlSGVhZGVyLnZ1ZT9iMDRjIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL212cC90b3VybmFtZW50cy9NdnBUb3VybmFtZW50c0xpc3QudnVlP2ZmOTgiXSwibmFtZXMiOlsid2luZG93IiwiYXhpb3MiLCJyZXF1aXJlIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiY29tbW9uIiwidG9rZW4iLCJkb2N1bWVudCIsImhlYWQiLCJxdWVyeVNlbGVjdG9yIiwiX2NzcmZfdG9rZW4iLCJjb250ZW50IiwiY29uc29sZSIsImVycm9yIiwiVnVlIiwiY29tcG9uZW50IiwiTXZwTWFpbiIsIk12cFBhZ2UiLCJNdnBUZWFtUGFnZSIsIk12cEludml0ZVRlYW1QYWdlIiwiTXZwUGFnZUhlYWRlciIsIk12cFRvdXJuYW1lbnRzTGlzdCIsIkxvZ2luTW9kYWwiLCJlbCIsInByb3ZpZGUiLCJodHRwIiwiTXZwU2VydmljZSIsImNvbmZpZyIsImhlYWRlciIsImxvY2F0aW9uIiwiaG9zdG5hbWUiLCJwYXRoIiwiYmFzZVVybCIsImNhcGFjaXR5IiwibmFtZSIsInRhZyIsInBvc3QiLCJ1cmwiLCJpZCIsImdhbWUiLCJTVEVBTV9MT0dJTl9MSU5LIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1Qzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsTUFBTSxDQUFDQyxLQUFQLEdBQWVDLG1CQUFPLENBQUMsNENBQUQsQ0FBdEI7QUFDQUYsTUFBTSxDQUFDQyxLQUFQLENBQWFFLFFBQWIsQ0FBc0JDLE9BQXRCLENBQThCQyxNQUE5QixDQUFxQyxrQkFBckMsSUFBMkQsZ0JBQTNEO0FBRUEsSUFBSUMsS0FBSyxHQUFHQyxRQUFRLENBQUNDLElBQVQsQ0FBY0MsYUFBZCxDQUE0Qix5QkFBNUIsQ0FBWjs7QUFFQSxJQUFJSCxLQUFKLEVBQVc7QUFDUE4sUUFBTSxDQUFDQyxLQUFQLENBQWFTLFdBQWIsR0FBMkJKLEtBQUssQ0FBQ0ssT0FBakM7QUFDSCxDQUZELE1BRU87QUFDSEMsU0FBTyxDQUFDQyxLQUFSLENBQWMsc0JBQWQ7QUFDSCxDLENBRUQ7QUFDQTs7O0FBRUFDLEdBQUcsQ0FBQ0MsU0FBSixDQUFjLFVBQWQsRUFBMEJDLDJFQUExQjtBQUNBRixHQUFHLENBQUNDLFNBQUosQ0FBYyxVQUFkLEVBQTBCRSx1RUFBMUI7QUFDQUgsR0FBRyxDQUFDQyxT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eHRyYWN0LXBsdWdpbiIsIi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5pbXBvcnQgJy4uL2Nzcy9hcHAuY3NzJztcbmltcG9ydCBNdnBTZXJ2aWNlIGZyb20gXCIuL2NvbXBvbmVudHMvbXZwL3NlcnZpY2VzL012cFNlcnZpY2UuanNcIjtcbmltcG9ydCBjb25maWcgZnJvbSBcIi4vY29uZmlnXCI7XG5pbXBvcnQgTXZwUGFnZSBmcm9tIFwiLi9jb21wb25lbnRzL212cC9jYWJpbmV0L012cFBhZ2VcIjtcbmltcG9ydCBNdnBUZWFtUGFnZSBmcm9tIFwiLi9jb21wb25lbnRzL212cC9jYWJpbmV0L012cFRlYW1QYWdlXCI7XG5pbXBvcnQgTXZwSW52aXRlVGVhbVBhZ2UgZnJvbSBcIi4vY29tcG9uZW50cy9tdnAvaW52aXRlL012cEludml0ZVRlYW1QYWdlXCI7XG5pbXBvcnQgTXZwUGFnZUhlYWRlciBmcm9tIFwiLi9jb21wb25lbnRzL212cC90b3VybmFtZW50cy9NdnBQYWdlSGVhZGVyXCI7XG5pbXBvcnQgTG9naW5Nb2RhbCBmcm9tIFwiLi9jb21wb25lbnRzL0xvZ2luTW9kYWxcIjtcbmltcG9ydCBNdnBNYWluIGZyb20gXCIuL2NvbXBvbmVudHMvbXZwL3RvdXJuYW1lbnRzL012cE1haW5cIjtcbmltcG9ydCBNdnBUb3VybmFtZW50c0xpc3QgZnJvbSBcIi4vY29tcG9uZW50cy9tdnAvdG91cm5hbWVudHMvTXZwVG91cm5hbWVudHNMaXN0XCI7XG5cbndpbmRvdy5heGlvcyA9IHJlcXVpcmUoJ2F4aW9zJyk7XG53aW5kb3cuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ1gtUmVxdWVzdGVkLVdpdGgnXSA9ICdYTUxIdHRwUmVxdWVzdCc7XG5cbmxldCB0b2tlbiA9IGRvY3VtZW50LmhlYWQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwiY3NyZi10b2tlblwiXScpO1xuXG5pZiAodG9rZW4pIHtcbiAgICB3aW5kb3cuYXhpb3MuX2NzcmZfdG9rZW4gPSB0b2tlbi5jb250ZW50O1xufSBlbHNlIHtcbiAgICBjb25zb2xlLmVycm9yKCdDU1JGIHRva2VuIG5vdCBmb3VuZCcpO1xufVxuXG4vLyBOZWVkIGpRdWVyeT8gSW5zdGFsbCBpdCB3aXRoIFwieWFybiBhZGQganF1ZXJ5XCIsIHRoZW4gdW5jb21tZW50IHRvIGltcG9ydCBpdC5cbi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cblZ1ZS5jb21wb25lbnQoJ212cC1tYWluJywgTXZwTWFpbilcblZ1ZS5jb21wb25lbnQoJ212cC1wYWdlJywgTXZwUGFnZSlcblZ1ZS5jb21wb25lbnQoJ212cC10ZWFtLXBhZ2UnLCBNdnBUZWFtUGFnZSlcblZ1ZS5jb21wb25lbnQoJ212cC1pbnZpdGUtcGFnZScsIE12cEludml0ZVRlYW1QYWdlKVxuVnVlLmNvbXBvbmVudCgnbXZwLWhlYWRlcicsIE12cFBhZ2VIZWFkZXIpXG5WdWUuY29tcG9uZW50KCdtdnAtdG91cm5hbWVudHMtbGlzdCcsIE12cFRvdXJuYW1lbnRzTGlzdClcblxuVnVlLmNvbXBvbmVudCgnbG9naW4tZm9ybScsIExvZ2luTW9kYWwpXG5cbm5ldyBWdWUoe1xuICAgIGVsOiAnI2FwcCcsXG4gICAgcHJvdmlkZToge1xuICAgICAgICBodHRwOiBuZXcgTXZwU2VydmljZShheGlvcyksXG4gICAgICAgIGF4aW9zLFxuICAgICAgICBjb25maWcsXG4gICAgICAgIGhlYWRlclxuICAgIH1cbn0pXG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0xvYWQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUwN2NmNGYyJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0xvYWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Mb2FkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9Mb2FkLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTUwN2NmNGYyJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI1MDdjZjRmMlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvY2hhbXBzcHJvL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzUwN2NmNGYyJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzUwN2NmNGYyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzUwN2NmNGYyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Mb2FkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01MDdjZjRmMiZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc1MDdjZjRmMicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2pzL2NvbXBvbmVudHMvTG9hZC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xvYWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xvYWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS1vbmVPZi0xLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTG9hZC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01MDdjZjRmMiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS1vbmVPZi0xLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTG9hZC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01MDdjZjRmMiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2FkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01MDdjZjRmMiZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTG9naW5Nb2RhbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzY5YzRiYTUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTG9naW5Nb2RhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0xvZ2luTW9kYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvQXBwbGljYXRpb25zL01BTVAvaHRkb2NzL2NoYW1wc3Byby9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCczNjljNGJhNScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCczNjljNGJhNScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCczNjljNGJhNScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTG9naW5Nb2RhbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzY5YzRiYTUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMzY5YzRiYTUnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy9qcy9jb21wb25lbnRzL0xvZ2luTW9kYWwudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2dpbk1vZGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2dpbk1vZGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2dpbk1vZGFsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNjljNGJhNSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQ29uZmlybUNvZGVGb3JtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02OTYyYjNiYSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Db25maXJtQ29kZUZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Db25maXJtQ29kZUZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvQXBwbGljYXRpb25zL01BTVAvaHRkb2NzL2NoYW1wc3Byby9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2OTYyYjNiYScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2OTYyYjNiYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2OTYyYjNiYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQ29uZmlybUNvZGVGb3JtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02OTYyYjNiYSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2OTYyYjNiYScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4vQ29uZmlybUNvZGVGb3JtLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ29uZmlybUNvZGVGb3JtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Db25maXJtQ29kZUZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NvbmZpcm1Db2RlRm9ybS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Njk2MmIzYmEmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0NvbmdyYXR1bGF0aW9uc0Zvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY3OTlhMmMyJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0NvbmdyYXR1bGF0aW9uc0Zvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Db25ncmF0dWxhdGlvbnNGb3JtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNjc5OWEyYzJcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvQXBwbGljYXRpb25zL01BTVAvaHRkb2NzL2NoYW1wc3Byby9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2Nzk5YTJjMicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2Nzk5YTJjMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2Nzk5YTJjMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQ29uZ3JhdHVsYXRpb25zRm9ybS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Njc5OWEyYzImc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNjc5OWEyYzInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy9qcy9jb21wb25lbnRzL2xvZ2luL0NvbmdyYXR1bGF0aW9uc0Zvcm0udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Db25ncmF0dWxhdGlvbnNGb3JtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Db25ncmF0dWxhdGlvbnNGb3JtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Db25ncmF0dWxhdGlvbnNGb3JtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02Nzk5YTJjMiZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTG9naW5Gb3JtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hNzk2ZjFkNCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Mb2dpbkZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Mb2dpbkZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvQXBwbGljYXRpb25zL01BTVAvaHRkb2NzL2NoYW1wc3Byby9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdhNzk2ZjFkNCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdhNzk2ZjFkNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdhNzk2ZjFkNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTG9naW5Gb3JtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hNzk2ZjFkNCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdhNzk2ZjFkNCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4vTG9naW5Gb3JtLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTG9naW5Gb3JtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2dpbkZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xvZ2luRm9ybS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YTc5NmYxZDQmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL05pY2tuYW1lRm9ybS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZWJiZjE5Y2Umc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTmlja25hbWVGb3JtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vTmlja25hbWVGb3JtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiZWJiZjE5Y2VcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvQXBwbGljYXRpb25zL01BTVAvaHRkb2NzL2NoYW1wc3Byby9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdlYmJmMTljZScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdlYmJmMTljZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdlYmJmMTljZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTmlja25hbWVGb3JtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lYmJmMTljZSZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdlYmJmMTljZScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4vTmlja25hbWVGb3JtLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTmlja25hbWVGb3JtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9OaWNrbmFtZUZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL05pY2tuYW1lRm9ybS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZWJiZjE5Y2Umc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1JlZ2lzdHJhdGlvbkZvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRkN2QwOGU0JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1JlZ2lzdHJhdGlvbkZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9SZWdpc3RyYXRpb25Gb3JtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL0FwcGxpY2F0aW9ucy9NQU1QL2h0ZG9jcy9jaGFtcHNwcm8vbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNGQ3ZDA4ZTQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNGQ3ZDA4ZTQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNGQ3ZDA4ZTQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1JlZ2lzdHJhdGlvbkZvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRkN2QwOGU0JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzRkN2QwOGU0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvanMvY29tcG9uZW50cy9sb2dpbi9SZWdpc3RyYXRpb25Gb3JtLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUmVnaXN0cmF0aW9uRm9ybS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUmVnaXN0cmF0aW9uRm9ybS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUmVnaXN0cmF0aW9uRm9ybS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGQ3ZDA4ZTQmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL012cEpvaW5lZFRlYW0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM2NjAzYjFkJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL012cEpvaW5lZFRlYW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9NdnBKb2luZWRUZWFtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMzY2MDNiMWRcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvQXBwbGljYXRpb25zL01BTVAvaHRkb2NzL2NoYW1wc3Byby9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCczNjYwM2IxZCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCczNjYwM2IxZCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCczNjYwM2IxZCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTXZwSm9pbmVkVGVhbS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzY2MDNiMWQmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMzY2MDNiMWQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy9qcy9jb21wb25lbnRzL212cC9jYWJpbmV0L012cEpvaW5lZFRlYW0udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NdnBKb2luZWRUZWFtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NdnBKb2luZWRUZWFtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NdnBKb2luZWRUZWFtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNjYwM2IxZCZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTXZwSm9pbmVkVGVhbXMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWNkNWE2Y2I0JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL012cEpvaW5lZFRlYW1zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vTXZwSm9pbmVkVGVhbXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJjZDVhNmNiNFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvY2hhbXBzcHJvL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2NkNWE2Y2I0JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2NkNWE2Y2I0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2NkNWE2Y2I0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9NdnBKb2luZWRUZWFtcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Y2Q1YTZjYjQmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignY2Q1YTZjYjQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy9qcy9jb21wb25lbnRzL212cC9jYWJpbmV0L012cEpvaW5lZFRlYW1zLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTXZwSm9pbmVkVGVhbXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL012cEpvaW5lZFRlYW1zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NdnBKb2luZWRUZWFtcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Y2Q1YTZjYjQmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL012cFBhZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA3YWUwOWI0JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL012cFBhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9NdnBQYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMDdhZTA5YjRcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvQXBwbGljYXRpb25zL01BTVAvaHRkb2NzL2NoYW1wc3Byby9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcwN2FlMDliNCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcwN2FlMDliNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcwN2FlMDliNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTXZwUGFnZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDdhZTA5YjQmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMDdhZTA5YjQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy9qcy9jb21wb25lbnRzL212cC9jYWJpbmV0L012cFBhZ2UudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NdnBQYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NdnBQYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NdnBQYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wN2FlMDliNCZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTXZwVGVhbS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjU3YTQzZjQmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTXZwVGVhbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL012cFRlYW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvQXBwbGljYXRpb25zL01BTVAvaHRkb2NzL2NoYW1wc3Byby9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2NTdhNDNmNCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2NTdhNDNmNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2NTdhNDNmNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTXZwVGVhbS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjU3YTQzZjQmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNjU3YTQzZjQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy9qcy9jb21wb25lbnRzL212cC9jYWJpbmV0L012cFRlYW0udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NdnBUZWFtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NdnBUZWFtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NdnBUZWFtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NTdhNDNmNCZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTXZwVGVhbU1lbWJlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjA0MDU4YWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTXZwVGVhbU1lbWJlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL012cFRlYW1NZW1iZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvQXBwbGljYXRpb25zL01BTVAvaHRkb2NzL2NoYW1wc3Byby9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcyMDQwNThhZScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcyMDQwNThhZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcyMDQwNThhZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTXZwVGVhbU1lbWJlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjA0MDU4YWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMjA0MDU4YWUnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy9qcy9jb21wb25lbnRzL212cC9jYWJpbmV0L012cFRlYW1NZW1iZXIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NdnBUZWFtTWVtYmVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NdnBUZWFtTWVtYmVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NdnBUZWFtTWVtYmVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yMDQwNThhZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTXZwVGVhbVBhZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTMzNDcxZDIzJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL012cFRlYW1QYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vTXZwVGVhbVBhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvQXBwbGljYXRpb25zL01BTVAvaHRkb2NzL2NoYW1wc3Byby9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCczMzQ3MWQyMycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCczMzQ3MWQyMycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCczMzQ3MWQyMycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTXZwVGVhbVBhZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTMzNDcxZDIzJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzMzNDcxZDIzJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvanMvY29tcG9uZW50cy9tdnAvY2FiaW5ldC9NdnBUZWFtUGFnZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL012cFRlYW1QYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NdnBUZWFtUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTXZwVGVhbVBhZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTMzNDcxZDIzJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9NdnBUZWFtcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGQ3OWRiYWYmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTXZwVGVhbXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9NdnBUZWFtcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvY2hhbXBzcHJvL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzRkNzlkYmFmJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzRkNzlkYmFmJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzRkNzlkYmFmJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9NdnBUZWFtcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGQ3OWRiYWYmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNGQ3OWRiYWYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy9qcy9jb21wb25lbnRzL212cC9jYWJpbmV0L012cFRlYW1zLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTXZwVGVhbXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL012cFRlYW1zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NdnBUZWFtcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGQ3OWRiYWYmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL012cEludml0ZVRlYW1QYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xOWMzNTUwMiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9NdnBJbnZpdGVUZWFtUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL012cEludml0ZVRlYW1QYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL0FwcGxpY2F0aW9ucy9NQU1QL2h0ZG9jcy9jaGFtcHNwcm8vbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMTljMzU1MDInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMTljMzU1MDInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMTljMzU1MDInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL012cEludml0ZVRlYW1QYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xOWMzNTUwMiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcxOWMzNTUwMicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2pzL2NvbXBvbmVudHMvbXZwL2ludml0ZS9NdnBJbnZpdGVUZWFtUGFnZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL012cEludml0ZVRlYW1QYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NdnBJbnZpdGVUZWFtUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTXZwSW52aXRlVGVhbVBhZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE5YzM1NTAyJlwiIiwiaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi4vLi4vLi4vY29uZmlnXCI7XG5cbmNsYXNzIE12cFNlcnZpY2Uge1xuXG4gICAgYmFzZVVybCA9IGBodHRwczovLyR7d2luZG93LmxvY2F0aW9uLmhvc3RuYW1lfS9gO1xuXG4gICAgY29uc3RydWN0b3IoYXhpb3MpIHtcbiAgICAgICAgdGhpcy5heGlvcyA9IGF4aW9zXG4gICAgfVxuXG4gICAgdXJsID0gcGF0aCA9PiB7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLmJhc2VVcmx9cnUvJHtwYXRofWA7XG4gICAgfVxuXG4gICAgY3JlYXRlTXZwVGVhbSA9IGFzeW5jIChjYXBhY2l0eSwgbmFtZSwgdGFnKSA9PiB7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmF4aW9zLnBvc3QodGhpcy51cmwoJ3VzZXIvbXZwL2NyZWF0ZS90ZWFtJyksIHtcbiAgICAgICAgICAgIGNhcGFjaXR5LCBuYW1lLCB0YWdcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBnZXRVc2VyVGVhbXMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmF4aW9zLnBvc3QodGhpcy51cmwoJ3VzZXIvbXZwL2dldC90ZWFtcycpKVxuICAgIH1cblxuICAgIGdldFRlYW1MaW5rID0gKGlkKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnVybChgdXNlci9tdnAvdGVhbS8ke2lkfWApXG4gICAgfVxuXG4gICAgZ2V0TXZwTGluayA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXJsKCd1c2VyL212cC8nKVxuICAgIH1cblxuICAgIGdldE12cFRlYW0gPSBhc3luYyBpZCA9PiB7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmF4aW9zLnBvc3QodGhpcy51cmwoYGdldC91c2VyL212cC90ZWFtLyR7aWR9YCkpXG4gICAgfVxuXG4gICAgZGVsZXRlTXZwVGVhbSA9IGFzeW5jIGlkID0+IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuYXhpb3MucG9zdCh0aGlzLnVybChgZGVsZXRlL3VzZXIvbXZwL3RlYW0vJHtpZH1gKSlcbiAgICB9XG5cbiAgICBnZXRUZWFtSW52aXRlVG9rZW4gPSBhc3luYyBpZCA9PiB7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmF4aW9zLnBvc3QodGhpcy51cmwoYG12cC90ZWFtL2dldC9pbnZpdGUvJHtpZH1gKSlcbiAgICB9XG5cbiAgICByZWxvYWRUZWFtSW52aXRlVG9rZW4gPSBhc3luYyBpZCA9PiB7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmF4aW9zLnBvc3QodGhpcy51cmwoYG12cC90ZWFtL3JlbG9hZC9pbnZpdGUvJHtpZH1gKSlcbiAgICB9XG5cbiAgICBnZXRJbnZpdGVUb1RlYW1MaW5rID0gKGlkLCB0b2tlbikgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy51cmwoYG12cC9pbnZpdGUvJHtpZH0vJHt0b2tlbn1gKVxuICAgIH1cblxuICAgIGdldEF1dGhVc2VyID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5heGlvcy5wb3N0KHRoaXMudXJsKCdnZXQvYXV0aCcpKVxuICAgIH1cblxuICAgIGpvaW5NZW1iZXJUb1RlYW0gPSBhc3luYyBpZCA9PiB7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmF4aW9zLnBvc3QodGhpcy51cmwoYG12cC9qb2luL3RvL3RlYW0vJHtpZH1gKSlcbiAgICB9XG5cbiAgICBnZXRVc2VySm9pbmVkVGVhbXMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmF4aW9zLnBvc3QodGhpcy51cmwoYHVzZXIvbXZwL2dldC9qb2luZWQvdGVhbXMvYCkpXG4gICAgfVxuXG4gICAgdXNlckxlYXZlVGVhbUxpbmsgPSBpZCA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnVybChgdXNlci9tdnAvbGVhdmUvdGVhbS8ke2lkfWApXG4gICAgfVxuXG4gICAgZ2V0VG91cm5hbWVudHNCeUdhbWUgPSBhc3luYyBnYW1lID0+IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuYXhpb3MucG9zdCh0aGlzLnVybChgbXZwL2FqYXgvdG91cm5hbWVudHMvJHtnYW1lfWApKVxuICAgIH1cblxuICAgIGdldFByb2ZpbGVMaW5rID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy51cmwoYHVzZXIvc2V0dGluZ3NgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTXZwU2VydmljZTsiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL012cE1haW4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA4NTJkZmJjJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL012cE1haW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9NdnBNYWluLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL0FwcGxpY2F0aW9ucy9NQU1QL2h0ZG9jcy9jaGFtcHNwcm8vbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMDg1MmRmYmMnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMDg1MmRmYmMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMDg1MmRmYmMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL012cE1haW4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA4NTJkZmJjJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzA4NTJkZmJjJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvanMvY29tcG9uZW50cy9tdnAvdG91cm5hbWVudHMvTXZwTWFpbi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL012cE1haW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL012cE1haW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL012cE1haW4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA4NTJkZmJjJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9NdnBQYWdlSGVhZGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03YzhkM2EyNSZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9NdnBQYWdlSGVhZGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vTXZwUGFnZUhlYWRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjdjOGQzYTI1XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL0FwcGxpY2F0aW9ucy9NQU1QL2h0ZG9jcy9jaGFtcHNwcm8vbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnN2M4ZDNhMjUnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnN2M4ZDNhMjUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnN2M4ZDNhMjUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL012cFBhZ2VIZWFkZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdjOGQzYTI1JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzdjOGQzYTI1Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvanMvY29tcG9uZW50cy9tdnAvdG91cm5hbWVudHMvTXZwUGFnZUhlYWRlci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL012cFBhZ2VIZWFkZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL012cFBhZ2VIZWFkZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL012cFBhZ2VIZWFkZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdjOGQzYTI1JnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9NdnBUb3VybmFtZW50c0xpc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE4YzE1OTBmJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL012cFRvdXJuYW1lbnRzTGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL012cFRvdXJuYW1lbnRzTGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvY2hhbXBzcHJvL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzE4YzE1OTBmJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzE4YzE1OTBmJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzE4YzE1OTBmJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9NdnBUb3VybmFtZW50c0xpc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE4YzE1OTBmJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzE4YzE1OTBmJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvanMvY29tcG9uZW50cy9tdnAvdG91cm5hbWVudHMvTXZwVG91cm5hbWVudHNMaXN0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTXZwVG91cm5hbWVudHNMaXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NdnBUb3VybmFtZW50c0xpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL012cFRvdXJuYW1lbnRzTGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MThjMTU5MGYmXCIiLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgU1RFQU1fTE9HSU5fTElOSzogJ2h0dHBzOi8vc3RlYW1jb21tdW5pdHkuY29tL29wZW5pZC9sb2dpbj9vcGVuaWQubnM9aHR0cCUzQSUyRiUyRnNwZWNzLm9wZW5pZC5uZXQlMkZhdXRoJTJGMi4wJm9wZW5pZC5tb2RlPWNoZWNraWRfc2V0dXAmb3BlbmlkLnJldHVybl90bz1odHRwcyUzQSUyRiUyRmNoYW1wcy5wcm8lMkZydSUyRm9hdXRoJTJGc3RlYW0lM0ZzdGF0ZT1zdGVhbSZvcGVuaWQucmVhbG09aHR0cHMlM0ElMkYlMkZjaGFtcHMucHJvJTJGcnUlMkZvYXV0aCUyRnN0ZWFtJm9wZW5pZC5ucy5zcmVnPWh0dHAlM0ElMkYlMkZvcGVuaWQubmV0JTJGZXh0ZW5zaW9ucyUyRnNyZWclMkYxLjEmb3BlbmlkLmNsYWltZWRfaWQ9aHR0cCUzQSUyRiUyRnNwZWNzLm9wZW5pZC5uZXQlMkZhdXRoJTJGMi4wJTJGaWRlbnRpZmllcl9zZWxlY3Qmb3BlbmlkLmlkZW50aXR5PWh0dHAlM0ElMkYlMkZzcGVjcy5vcGVuaWQubmV0JTJGYXV0aCUyRjIuMCUyRmlkZW50aWZpZXJfc2VsZWN0Jyxcbn0iLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImxvYWRpbmdpby1zcGlubmVyLWdlYXItbXRwaHdnb3k3OWVcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImxkaW8tcnd1dmFydm5wMXNcIj5cbiAgICAgICAgICAgIDxkaXY+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6IFwiTG9hZFwiXG4gICAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4gICAgQGtleWZyYW1lcyBsZGlvLXJ3dXZhcnZucDFzIHtcbiAgICAgICAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKSB9XG4gICAgICAgIDUwJSB7IHRyYW5zZm9ybTogcm90YXRlKDIyLjVkZWcpIH1cbiAgICAgICAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSB9XG4gICAgfVxuICAgIC5sZGlvLXJ3dXZhcnZucDFzID4gZGl2IHtcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMTAwcHggMTAwcHg7XG4gICAgICAgIGFuaW1hdGlvbjogbGRpby1yd3V2YXJ2bnAxcyAwLjJzIGluZmluaXRlIGxpbmVhcjtcbiAgICB9XG4gICAgLmxkaW8tcnd1dmFydm5wMXMgPiBkaXYgZGl2IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMjJweDtcbiAgICAgICAgaGVpZ2h0OiAxNTJweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmODUwMDtcbiAgICAgICAgbGVmdDogMTAwcHg7XG4gICAgICAgIHRvcDogMTAwcHg7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG4gICAgfVxuICAgIC5sZGlvLXJ3dXZhcnZucDFzID4gZGl2IGRpdjpudGgtY2hpbGQoMSkge1xuICAgICAgICB3aWR0aDogMTIwcHg7XG4gICAgICAgIGhlaWdodDogMTIwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB9XG4gICAgLmxkaW8tcnd1dmFydm5wMXMgPiBkaXYgZGl2Om50aC1jaGlsZCg2KSB7XG4gICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB9LmxkaW8tcnd1dmFydm5wMXMgPiBkaXYgZGl2Om50aC1jaGlsZCgzKSB7XG4gICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpIHJvdGF0ZSg0NWRlZylcbiAgICAgfS5sZGlvLXJ3dXZhcnZucDFzID4gZGl2IGRpdjpudGgtY2hpbGQoNCkge1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSkgcm90YXRlKDkwZGVnKVxuICAgICAgfS5sZGlvLXJ3dXZhcnZucDFzID4gZGl2IGRpdjpudGgtY2hpbGQoNSkge1xuICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpIHJvdGF0ZSgxMzVkZWcpXG4gICAgICAgfVxuICAgIC5sb2FkaW5naW8tc3Bpbm5lci1nZWFyLW10cGh3Z295NzllIHtcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgfVxuICAgIC5sZGlvLXJ3dXZhcnZucDFzIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCkgc2NhbGUoMSk7XG4gICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMCAwOyAvKiBzZWUgbm90ZSBhYm92ZSAqL1xuICAgIH1cbiAgICAubGRpby1yd3V2YXJ2bnAxcyBkaXYgeyBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgfVxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cInNsaWRlc1wiPlxuICAgICAgICA8bG9naW5cbiAgICAgICAgICAgICAgICB2LXNob3c9XCJjaGVja1N0ZXAoJ2xvZ2luJylcIlxuICAgICAgICAgICAgICAgIEBzZXRTdGVwPVwic2V0U3RlcFwiXG4gICAgICAgICAgICAgICAgQGF1dGhMb2dpbj1cImF1dGhMb2dpblwiXG4gICAgICAgICAgICAgICAgQGNsb3NlPVwiY2xvc2VcIlxuICAgICAgICAgICAgICAgIEBpbnB1dEVtYWlsPVwiKHZhbHVlKSA9PiB7ZW1haWwgPSB2YWx1ZX1cIlxuICAgICAgICAgICAgICAgIEBpbnB1dFBhc3N3b3JkPVwiKHZhbHVlKSA9PiB7cGFzc3dvcmQgPSB2YWx1ZX1cIlxuICAgICAgICAgICAgICAgIDplcnJvcj1cImVycm9yXCJcbiAgICAgICAgICAgICAgICA6ZW1haWw9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgOmNoZWNrPVwicGFzc3dvcmRcIj5cbiAgICAgICAgPC9sb2dpbj5cbiAgICAgICAgPHJlZ2lzdHJhdGlvblxuICAgICAgICAgICAgICAgIHYtc2hvdz1cImNoZWNrU3RlcCgncmVnaXN0cmF0aW9uJylcIlxuICAgICAgICAgICAgICAgIEBzZXRTdGVwPVwic2V0U3RlcFwiXG4gICAgICAgICAgICAgICAgQGNsb3NlPVwiY2xvc2VcIlxuICAgICAgICAgICAgICAgIEBpbnB1dEVtYWlsPVwiKHZhbHVlKSA9PiB7ZW1haWwgPSB2YWx1ZX1cIlxuICAgICAgICAgICAgICAgIEBpbnB1dFBhc3N3b3JkPVwiKHZhbHVlKSA9PiB7cGFzc3dvcmQgPSB2YWx1ZX1cIlxuICAgICAgICAgICAgICAgIDplbWFpbD1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICA6Y2hlY2s9XCJjaGVja1wiXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cImNoZWNrXCI+XG4gICAgICAgIDwvcmVnaXN0cmF0aW9uPlxuICAgICAgICA8Y29uZmlybS1jb2RlXG4gICAgICAgICAgICAgICAgdi1zaG93PVwiY2hlY2tTdGVwKCdjb25maXJtQ29kZScpXCJcbiAgICAgICAgICAgICAgICBAc2V0U3RlcD1cInNldFN0ZXBcIlxuICAgICAgICAgICAgICAgIEBjbG9zZT1cImNsb3NlXCJcbiAgICAgICAgICAgICAgICBAcmVnaXN0cmF0aW9uPVwicmVnaXN0cmF0aW9uXCJcbiAgICAgICAgICAgICAgICA6Y29kZUNvbmZpcm1lZD1cImNvZGVDb25maXJtZWRcIlxuICAgICAgICAgICAgICAgIDplbWFpbD1cImVtYWlsXCI+XG4gICAgICAgIDwvY29uZmlybS1jb2RlPlxuICAgICAgICA8bmljay1uYW1lXG4gICAgICAgICAgICAgICAgdi1zaG93PVwiY2hlY2tTdGVwKCduaWNrbmFtZScpXCJcbiAgICAgICAgICAgICAgICBAc2V0U3RlcD1cInNldFN0ZXBcIlxuICAgICAgICAgICAgICAgIEBjbG9zZT1cImNsb3NlXCJcbiAgICAgICAgICAgICAgICA6ZW1haWw9XCJlbWFpbFwiPlxuICAgICAgICA8L25pY2stbmFtZT5cbiAgICAgICAgPGNvbmdyYXR1bGF0aW9uXG4gICAgICAgICAgICAgICAgdi1zaG93PVwiY2hlY2tTdGVwKCdjb25ncmF0dWxhdGlvbicpXCJcbiAgICAgICAgICAgICAgICBAc2V0U3RlcD1cInNldFN0ZXBcIlxuICAgICAgICAgICAgICAgIEBjbG9zZT1cImNsb3NlXCI+XG4gICAgICAgIDwvY29uZ3JhdHVsYXRpb24+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBOaWNrbmFtZUZvcm0gZnJvbSBcIi4vbG9naW4vTmlja25hbWVGb3JtXCI7XG4gICAgaW1wb3J0IENvbmZpcm1Db2RlRm9ybSBmcm9tIFwiLi9sb2dpbi9Db25maXJtQ29kZUZvcm1cIjtcbiAgICBpbXBvcnQgUmVnaXN0cmF0aW9uRm9ybSBmcm9tIFwiLi9sb2dpbi9SZWdpc3RyYXRpb25Gb3JtXCI7XG4gICAgaW1wb3J0IExvZ2luRm9ybSBmcm9tIFwiLi9sb2dpbi9Mb2dpbkZvcm1cIjtcbiAgICBpbXBvcnQgQ29uZ3JhdHVsYXRpb25zRm9ybSBmcm9tIFwiLi9sb2dpbi9Db25ncmF0dWxhdGlvbnNGb3JtXCI7XG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6IFwiTG9naW5Nb2RhbFwiLFxuICAgICAgICBpbmplY3Q6IFtcbiAgICAgICAgICAgICdheGlvcycsXG4gICAgICAgICAgICAnY29uZmlnJ1xuICAgICAgICBdLFxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgc2hvdzogQm9vbGVhbixcbiAgICAgICAgICAgIHJlZGlyZWN0OiB7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDogbnVsbFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNob3dGaXJzdDoge1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICdsb2dpbidcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZGF0YSgpe1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBlcnJvcjogZmFsc2UsXG4gICAgICAgICAgICAgICAgc3RlcDogJ3JlZ2lzdHJhdGlvbicsXG4gICAgICAgICAgICAgICAgZW1haWw6IG51bGwsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IG51bGwsXG4gICAgICAgICAgICAgICAgY2hlY2s6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNvbmZpcm1Db2RlOiBudWxsLFxuICAgICAgICAgICAgICAgIGNvZGVDb25maXJtZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogbnVsbCxcbiAgICAgICAgICAgICAgICBzdWNjZXNzTWVzc2FnZTogbnVsbCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29tcG9uZW50czoge1xuICAgICAgICAgICAgJ25pY2stbmFtZSc6IE5pY2tuYW1lRm9ybSxcbiAgICAgICAgICAgICdjb25maXJtLWNvZGUnOiBDb25maXJtQ29kZUZvcm0sXG4gICAgICAgICAgICAncmVnaXN0cmF0aW9uJzogUmVnaXN0cmF0aW9uRm9ybSxcbiAgICAgICAgICAgICdsb2dpbic6IExvZ2luRm9ybSxcbiAgICAgICAgICAgICdjb25ncmF0dWxhdGlvbic6IENvbmdyYXR1bGF0aW9uc0Zvcm1cbiAgICAgICAgfSxcbiAgICAgICAgd2F0Y2g6IHtcbiAgICAgICAgICAgIHNob3coKXtcbiAgICAgICAgICAgICAgICB0aGlzLnN0ZXAgPSB0aGlzLnNob3dGaXJzdDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdGVwKG5ld1N0ZXApe1xuICAgICAgICAgICAgICAgIGlmIChuZXdTdGVwID09PSAnZmluaXNoJyl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0aExvZ2luKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBzZXRTdGVwKHN0ZXApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0ZXAgPSBzdGVwO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGF1dGhMb2dpbigpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcxMjMnKVxuICAgICAgICAgICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuXG4gICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdlbWFpbCcsIHRoaXMuZW1haWwpO1xuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgncGFzc3dvcmQnLCB0aGlzLnBhc3N3b3JkKTtcbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ19jc3JmX3Rva2VuJywgdGhpcy5heGlvcy5fY3NyZl90b2tlbik7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmF4aW9zLnBvc3QoJy9ydS9sb2dpbicsIGZvcm1EYXRhKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmRhdGEuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucmVkaXJlY3QgIT09IG51bGwpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uYXNzaWduKHRoaXMucmVkaXJlY3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVnaXN0cmF0aW9uKCl7XG4gICAgICAgICAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcblxuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgndXNlcltlbWFpbF0nLCB0aGlzLmVtYWlsKTtcbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3VzZXJbcGFzc3dvcmRdW2ZpcnN0XScsIHRoaXMucGFzc3dvcmQpO1xuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgndXNlcltwYXNzd29yZF1bc2Vjb25kXScsIHRoaXMucGFzc3dvcmQpO1xuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnX2NzcmZfdG9rZW4nLCB0aGlzLmF4aW9zLl9jc3JmX3Rva2VuKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuYXhpb3MucG9zdCgnL3J1L3JlZ2lzdHJhdGlvbicsIGZvcm1EYXRhKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmRhdGEuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNsb3NlKCl7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93ID0gZmFsc2U7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2hlY2tTdGVwKHN0ZXApe1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNob3cgJiYgdGhpcy5zdGVwID09PSBzdGVwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxuICAgIDx0cmFuc2l0aW9uIG5hbWU9XCJzbGlkZS1mYWRlc1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW5fZm9ybVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvZ2luX2Jsb2NrXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvZ290eXBlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9DaGFtcHNfbG9nb3R5cGUuc3ZnXCIgY2xhc3M9XCJsb2dvdHlwZVwiLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW5fdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAg0J/QvtC00YLQstC10YDQttC00LXQvdC40LUg0L/QvtGH0YLRi1xuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbl9pbnB1dFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiByZXF1aXJlZCB2LW1vZGVsPVwiY29uZmlybUNvZGVcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPtCa0L7QtCDQv9C+0LTRgtCy0LXRgNC20LTQtdC90LjRjzwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VuZFwiIEBjbGljaz1cInNlbmRSZWdpc3RyYXRpb25Db25maXJtXCI+XG4gICAgICAgICAgICAgICAgICAgINCe0YLQv9GA0LDQstC40YLRjFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlcnJvclwiIHYtaWY9XCJlcnJvck1lc3NhZ2UgIT09IG51bGxcIj5cbiAgICAgICAgICAgICAgICAgICAge3sgZXJyb3JNZXNzYWdlIH19XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVycm9yIHRleHQtc3VjY2Vzc1wiIHYtaWY9XCJzdWNjZXNzTWVzc2FnZSAhPT0gbnVsbFwiPlxuICAgICAgICAgICAgICAgICAgICB7eyBzdWNjZXNzTWVzc2FnZSB9fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaW5rcyBkLWZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm10LTFcIiBAY2xpY2s9XCIkZW1pdCgnc2V0U3RlcCcsICdyZWdpc3RyYXRpb24nKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+QmFjazwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtdC0xXCIgIEBjbGljaz1cInNob3dOaWNrbmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gOmNsYXNzPVwie2Rpc2FibGVkOiAhY29kZUNvbmZpcm1lZH1cIj5OZXh0PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2xvc2VkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzdmcgQGNsaWNrPVwiY2xvc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgZmlsbD1cIm5vbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNOC44ODM5MiA4LjAwMDA0TDE1LjgxNjkgMS4wNjY5OEMxNi4wNjEgMC44MjI4ODIgMTYuMDYxIDAuNDI3MTMzIDE1LjgxNjkgMC4xODMwN0MxNS41NzI4IC0wLjA2MDk5MjIgMTUuMTc3MSAtMC4wNjEwMjM0IDE0LjkzMyAwLjE4MzA3TDcuOTk5OTggNy4xMTYxM0wxLjA2Njk3IDAuMTgzMDdDMC44MjI4OCAtMC4wNjEwMjM0IDAuNDI3MTMyIC0wLjA2MTAyMzQgMC4xODMwNyAwLjE4MzA3Qy0wLjA2MDk5MiAwLjQyNzE2NCAtMC4wNjEwMjMzIDAuODIyOTE0IDAuMTgzMDcgMS4wNjY5OEw3LjExNjA4IDhMMC4xODMwNyAxNC45MzMxQy0wLjA2MTAyMzMgMTUuMTc3MiAtMC4wNjEwMjMzIDE1LjU3MjkgMC4xODMwNyAxNS44MTdDMC4zMDUxMDEgMTUuOTM5IDAuNDY1MDY5IDE2IDAuNjI1MDM3IDE2QzAuNzg1MDA1IDE2IDAuOTQ0OTQzIDE1LjkzOSAxLjA2NyAxNS44MTdMNy45OTk5OCA4Ljg4Mzk0TDE0LjkzMyAxNS44MTdDMTUuMDU1IDE1LjkzOSAxNS4yMTUgMTYgMTUuMzc1IDE2QzE1LjUzNDkgMTYgMTUuNjk0OSAxNS45MzkgMTUuODE2OSAxNS44MTdDMTYuMDYxIDE1LjU3MjkgMTYuMDYxIDE1LjE3NzEgMTUuODE2OSAxNC45MzMxTDguODgzOTIgOC4wMDAwNFpcIiBmaWxsPVwiIzg2ODg4QVwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC90cmFuc2l0aW9uPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6IFwiQ29uZmlybUNvZGVGb3JtXCIsXG4gICAgICAgIGluamVjdDogW1xuICAgICAgICAgICAgJ2F4aW9zJyxcbiAgICAgICAgICAgICdjb25maWcnXG4gICAgICAgIF0sXG4gICAgICAgIHByb3BzOiBbXG4gICAgICAgICAgICAnZW1haWwnLFxuICAgICAgICBdLFxuICAgICAgICBkYXRhKCl7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGNvZGVDb25maXJtZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNvbmZpcm1Db2RlOiBudWxsLFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogbnVsbCxcbiAgICAgICAgICAgICAgICBzdWNjZXNzTWVzc2FnZTogbnVsbCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgc2VuZFJlZ2lzdHJhdGlvbkNvbmZpcm0oKXtcbiAgICAgICAgICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuXG4gICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCd1c2VyW2NvZGVdJywgdGhpcy5jb25maXJtQ29kZSk7XG4gICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCd1c2VyW2VtYWlsXScsIHRoaXMuZW1haWwpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5heGlvcy5wb3N0KCcvcnUvY2hlY2svY29uZmlybS9jb2RlJywgZm9ybURhdGEpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCh7ZGF0YX0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3VjY2Vzc01lc3NhZ2UgPSBkYXRhO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvZGVDb25maXJtZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgncmVnaXN0cmF0aW9uJylcbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKHtyZXNwb25zZX0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaG93Tmlja25hbWUoKXtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb2RlQ29uZmlybWVkKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnc2V0U3RlcCcsICduaWNrbmFtZScpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNsb3NlKCl7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xvc2UnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XG4gICAgPHRyYW5zaXRpb24gbmFtZT1cInNsaWRlLWZhZGVzXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbl9mb3JtXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW5fYmxvY2tcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9nb3R5cGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL0NoYW1wc19sb2dvdHlwZS5zdmdcIiBjbGFzcz1cImxvZ290eXBlXCIvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbl90aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICDQn9C+0LfQtNGA0LDQstC70Y/QtdC8INGBINGD0YHQv9C10YjQvdC+0Lkg0YDQtdCz0LXRgdGC0YDQsNGG0LjQtdC5IVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZW5kXCIgQGNsaWNrPVwiJGVtaXQoJ3NldFN0ZXAnLCAnZmluaXNoJylcIj5cbiAgICAgICAgICAgICAgICAgICAgUGxheVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbG9zZWRcIiAgQGNsaWNrPVwiJGVtaXQoJ2Nsb3NlJylcIj5cbiAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgdmlld0JveD1cIjAgMCAxNiAxNlwiIGZpbGw9XCJub25lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTguODgzOTIgOC4wMDAwNEwxNS44MTY5IDEuMDY2OThDMTYuMDYxIDAuODIyODgyIDE2LjA2MSAwLjQyNzEzMyAxNS44MTY5IDAuMTgzMDdDMTUuNTcyOCAtMC4wNjA5OTIyIDE1LjE3NzEgLTAuMDYxMDIzNCAxNC45MzMgMC4xODMwN0w3Ljk5OTk4IDcuMTE2MTNMMS4wNjY5NyAwLjE4MzA3QzAuODIyODggLTAuMDYxMDIzNCAwLjQyNzEzMiAtMC4wNjEwMjM0IDAuMTgzMDcgMC4xODMwN0MtMC4wNjA5OTIgMC40MjcxNjQgLTAuMDYxMDIzMyAwLjgyMjkxNCAwLjE4MzA3IDEuMDY2OThMNy4xMTYwOCA4TDAuMTgzMDcgMTQuOTMzMUMtMC4wNjEwMjMzIDE1LjE3NzIgLTAuMDYxMDIzMyAxNS41NzI5IDAuMTgzMDcgMTUuODE3QzAuMzA1MTAxIDE1LjkzOSAwLjQ2NTA2OSAxNiAwLjYyNTAzNyAxNkMwLjc4NTAwNSAxNiAwLjk0NDk0MyAxNS45MzkgMS4wNjcgMTUuODE3TDcuOTk5OTggOC44ODM5NEwxNC45MzMgMTUuODE3QzE1LjA1NSAxNS45MzkgMTUuMjE1IDE2IDE1LjM3NSAxNkMxNS41MzQ5IDE2IDE1LjY5NDkgMTUuOTM5IDE1LjgxNjkgMTUuODE3QzE2LjA2MSAxNS41NzI5IDE2LjA2MSAxNS4xNzcxIDE1LjgxNjkgMTQuOTMzMUw4Ljg4MzkyIDguMDAwMDRaXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjODY4ODhBXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L3RyYW5zaXRpb24+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbmFtZTogXCJDb25ncmF0dWxhdGlvbnNGb3JtXCIsXG5cbiAgICB9XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cblxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XG4gICAgPHRyYW5zaXRpb24gbmFtZT1cInNsaWRlLWZhZGVzXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbl9mb3JtXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW5fYmxvY2tcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9nb3R5cGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL0NoYW1wc19sb2dvdHlwZS5zdmdcIiBjbGFzcz1cImxvZ290eXBlXCIvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbl90aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICDQktGF0L7QtCDQsiDQu9C40YfQvdGL0Lkg0LrQsNCx0LjQvdC10YJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW5faW5wdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIDp2YWx1ZT1cImVtYWlsXCIgIEBpbnB1dD1cIiRlbWl0KCdpbnB1dEVtYWlsJywgJGV2ZW50LnRhcmdldC52YWx1ZSlcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPtCQ0LTRgNC10YEg0Y3Qu9C10LrRgtGA0L7QvdC90L7QuSDQv9C+0YfRgtGLPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbl9pbnB1dFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgOnZhbHVlPVwicGFzc3dvcmRcIiAgQGlucHV0PVwiJGVtaXQoJ2lucHV0UGFzc3dvcmQnLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVwiLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+0J/QsNGA0L7Qu9GMPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZW5kXCIgQGNsaWNrPVwiJGVtaXQoJ2F1dGhMb2dpbicpXCI+XG4gICAgICAgICAgICAgICAgICAgINCS0L7QudGC0LhcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXJyb3JcIiB2LWlmPVwiZXJyb3JcIj5cbiAgICAgICAgICAgICAgICAgICAg0J3QtdC/0YDQsNCy0LjQu9GM0L3Ri9C5INC70L7Qs9C40L0g0LjQu9C4INC/0LDRgNC+0LvRjFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdWJ0ZXh0XCI+0JjQu9C4INCy0L7QudC00LjRgtC1INGBINC/0L7QvNC+0YnRjNGOPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFsdGVybmF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8YSA6aHJlZj1cInN0ZWFtTG9naW5MaW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvbG9naW5fc3RlYW0uc3ZnXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpbmtzXCIgQGNsaWNrPVwiJGVtaXQoJ3NldFN0ZXAnLCAncmVnaXN0cmF0aW9uJylcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPtCg0LXQs9C40YHRgtGA0LDRhtC40Y88L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbG9zZWRcIiBAY2xpY2s9XCIkZW1pdCgnY2xvc2UnKVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgZmlsbD1cIm5vbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNOC44ODM5MiA4LjAwMDA0TDE1LjgxNjkgMS4wNjY5OEMxNi4wNjEgMC44MjI4ODIgMTYuMDYxIDAuNDI3MTMzIDE1LjgxNjkgMC4xODMwN0MxNS41NzI4IC0wLjA2MDk5MjIgMTUuMTc3MSAtMC4wNjEwMjM0IDE0LjkzMyAwLjE4MzA3TDcuOTk5OTggNy4xMTYxM0wxLjA2Njk3IDAuMTgzMDdDMC44MjI4OCAtMC4wNjEwMjM0IDAuNDI3MTMyIC0wLjA2MTAyMzQgMC4xODMwNyAwLjE4MzA3Qy0wLjA2MDk5MiAwLjQyNzE2NCAtMC4wNjEwMjMzIDAuODIyOTE0IDAuMTgzMDcgMS4wNjY5OEw3LjExNjA4IDhMMC4xODMwNyAxNC45MzMxQy0wLjA2MTAyMzMgMTUuMTc3MiAtMC4wNjEwMjMzIDE1LjU3MjkgMC4xODMwNyAxNS44MTdDMC4zMDUxMDEgMTUuOTM5IDAuNDY1MDY5IDE2IDAuNjI1MDM3IDE2QzAuNzg1MDA1IDE2IDAuOTQ0OTQzIDE1LjkzOSAxLjA2NyAxNS44MTdMNy45OTk5OCA4Ljg4Mzk0TDE0LjkzMyAxNS44MTdDMTUuMDU1IDE1LjkzOSAxNS4yMTUgMTYgMTUuMzc1IDE2QzE1LjUzNDkgMTYgMTUuNjk0OSAxNS45MzkgMTUuODE2OSAxNS44MTdDMTYuMDYxIDE1LjU3MjkgMTYuMDYxIDE1LjE3NzEgMTUuODE2OSAxNC45MzMxTDguODgzOTIgOC4wMDAwNFpcIiBmaWxsPVwiIzg2ODg4QVwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC90cmFuc2l0aW9uPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6IFwiTG9naW5Gb3JtXCIsXG4gICAgICAgIGluamVjdDogW1xuICAgICAgICAgICAgJ2NvbmZpZydcbiAgICAgICAgXSxcbiAgICAgICAgcHJvcHM6IFtcbiAgICAgICAgICAgICdlcnJvcidcbiAgICAgICAgXSxcbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIHN0ZWFtTG9naW5MaW5rKCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLlNURUFNX0xPR0lOX0xJTks7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfVxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxuICAgIDx0cmFuc2l0aW9uIG5hbWU9XCJzbGlkZS1mYWRlc1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW5fZm9ybVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvZ2luX2Jsb2NrXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvZ290eXBlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9DaGFtcHNfbG9nb3R5cGUuc3ZnXCIgY2xhc3M9XCJsb2dvdHlwZVwiLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW5fdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAg0JLQstC10LTQuNGC0LUg0YHQstC+0Lkg0L3QuNC60L3QtdC50LxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW5faW5wdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImVtYWlsXCIgcmVxdWlyZWQgdi1tb2RlbD1cIm5pY2tuYW1lXCIvPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj7Qm9C+0LPQuNC9IChOaWNrbmFtZSk8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVycm9yXCIgdi1pZj1cImVycm9yTWVzc2FnZSAhPT0gbnVsbFwiPlxuICAgICAgICAgICAgICAgICAgICB7eyBlcnJvck1lc3NhZ2UgfX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VuZFwiIEBjbGljaz1cInNldE5pY2tuYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgIEZpbmlzaCBSZWdpc3RyYXRpb25cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2xvc2VkXCIgQGNsaWNrPVwiY2xvc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgdmlld0JveD1cIjAgMCAxNiAxNlwiIGZpbGw9XCJub25lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTguODgzOTIgOC4wMDAwNEwxNS44MTY5IDEuMDY2OThDMTYuMDYxIDAuODIyODgyIDE2LjA2MSAwLjQyNzEzMyAxNS44MTY5IDAuMTgzMDdDMTUuNTcyOCAtMC4wNjA5OTIyIDE1LjE3NzEgLTAuMDYxMDIzNCAxNC45MzMgMC4xODMwN0w3Ljk5OTk4IDcuMTE2MTNMMS4wNjY5NyAwLjE4MzA3QzAuODIyODggLTAuMDYxMDIzNCAwLjQyNzEzMiAtMC4wNjEwMjM0IDAuMTgzMDcgMC4xODMwN0MtMC4wNjA5OTIgMC40MjcxNjQgLTAuMDYxMDIzMyAwLjgyMjkxNCAwLjE4MzA3IDEuMDY2OThMNy4xMTYwOCA4TDAuMTgzMDcgMTQuOTMzMUMtMC4wNjEwMjMzIDE1LjE3NzIgLTAuMDYxMDIzMyAxNS41NzI5IDAuMTgzMDcgMTUuODE3QzAuMzA1MTAxIDE1LjkzOSAwLjQ2NTA2OSAxNiAwLjYyNTAzNyAxNkMwLjc4NTAwNSAxNiAwLjk0NDk0MyAxNS45MzkgMS4wNjcgMTUuODE3TDcuOTk5OTggOC44ODM5NEwxNC45MzMgMTUuODE3QzE1LjA1NSAxNS45MzkgMTUuMjE1IDE2IDE1LjM3NSAxNkMxNS41MzQ5IDE2IDE1LjY5NDkgMTUuOTM5IDE1LjgxNjkgMTUuODE3QzE2LjA2MSAxNS41NzI5IDE2LjA2MSAxNS4xNzcxIDE1LjgxNjkgMTQuOTMzMUw4Ljg4MzkyIDguMDAwMDRaXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjODY4ODhBXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L3RyYW5zaXRpb24+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbmFtZTogXCJOaWNrbmFtZUZvcm1cIixcbiAgICAgICAgaW5qZWN0OiBbXG4gICAgICAgICAgICAnYXhpb3MnLFxuICAgICAgICAgICAgJ2NvbmZpZydcbiAgICAgICAgXSxcbiAgICAgICAgcHJvcHM6IFtcbiAgICAgICAgICAgICdlbWFpbCcsXG4gICAgICAgIF0sXG4gICAgICAgIGRhdGEoKXtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbmlja25hbWU6IG51bGwsXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBudWxsLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBzZXROaWNrbmFtZSgpe1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiB0aGlzLmVtYWlsLFxuICAgICAgICAgICAgICAgICAgICBuaWNrbmFtZTogdGhpcy5uaWNrbmFtZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmF4aW9zLnBvc3QoJy9ydS9hamF4L3VzZXIvc2V0L25pY2tuYW1lJywgZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHtkYXRhfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnc2V0U3RlcCcsICdjb25ncmF0dWxhdGlvbicpXG4gICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKCh7cmVzcG9uc2V9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHJlc3BvbnNlLmRhdGFcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbG9zZSgpe1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2Nsb3NlJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cbiAgICA8dHJhbnNpdGlvbiBuYW1lPVwic2xpZGUtZmFkZXNcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImxvZ2luX2Zvcm1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbl9yZXFcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW5fYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvZ290eXBlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvQ2hhbXBzX2xvZ290eXBlLnN2Z1wiIGNsYXNzPVwibG9nb3R5cGVcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW5fdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgINCg0LXQs9C40YHRgtGA0LDRhtC40Y9cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbl9pbnB1dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDp2YWx1ZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAaW5wdXQ9XCIkZW1pdCgnaW5wdXRFbWFpbCcsICRldmVudC50YXJnZXQudmFsdWUpXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+0JDQtNGA0LXRgSDRjdC70LXQutGC0YDQvtC90L3QvtC5INC/0L7Rh9GC0Ys8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW5faW5wdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOnZhbHVlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBpbnB1dD1cIiRlbWl0KCdpbnB1dFBhc3N3b3JkJywgJGV2ZW50LnRhcmdldC52YWx1ZSlcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7Qn9Cw0YDQvtC70Yw8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW5fY2hlY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNoZWNrZWQ9XCJjaGVja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjaGFuZ2U9XCJ1cGRhdGUoJGV2ZW50LnRhcmdldC5jaGVja2VkKVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48YSBocmVmPVwiL3J1L3Rlcm1zLW9mLXVzZVwiIHRhcmdldD1cIl9ibGFua1wiPtCe0LfQvdCw0LrQvtC80LvQtdC9INGBINC/0YDQsNCy0LjQu9Cw0LzQuCDQuNGB0L/QvtC70YzQt9C+0LLQsNC90LjRjyDRgdC10YDQstC40YHQsCDCq0NoYW1wc8K7PC9hPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZW5kXCIgQGNsaWNrPVwiY2hlY2tJc0VtYWlsVmFsaWRcIiA6c3R5bGU9XCJ7b3BhY2l0eTogY2hlY2sgPyAnMSc6ICcuNSd9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICDQl9Cw0YDQtdCz0LjRgdGC0YDQuNGA0L7QstCw0YLRjNGB0Y9cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlcnJvclwiIHYtaWY9XCJlcnJvck1lc3NhZ2UgIT09IG51bGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7IGVycm9yTWVzc2FnZSB9fVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN1YnRleHRcIj7QmNC70Lgg0LLQvtC50LTQuNGC0LUg0YEg0L/QvtC80L7RidGM0Y48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFsdGVybmF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgOmhyZWY9XCJzdGVhbUxvZ2luTGlua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9sb2dpbl9zdGVhbS5zdmdcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlua3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gQGNsaWNrPVwiJGVtaXQoJ3NldFN0ZXAnLCAnbG9naW4nKVwiPtCS0YXQvtC0INCyINC70LjRh9C90YvQuSDQutCw0LHQuNC90LXRgjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNsb3NlZFwiIEBjbGljaz1cImNsb3NlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgZmlsbD1cIm5vbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTguODgzOTIgOC4wMDAwNEwxNS44MTY5IDEuMDY2OThDMTYuMDYxIDAuODIyODgyIDE2LjA2MSAwLjQyNzEzMyAxNS44MTY5IDAuMTgzMDdDMTUuNTcyOCAtMC4wNjA5OTIyIDE1LjE3NzEgLTAuMDYxMDIzNCAxNC45MzMgMC4xODMwN0w3Ljk5OTk4IDcuMTE2MTNMMS4wNjY5NyAwLjE4MzA3QzAuODIyODggLTAuMDYxMDIzNCAwLjQyNzEzMiAtMC4wNjEwMjM0IDAuMTgzMDcgMC4xODMwN0MtMC4wNjA5OTIgMC40MjcxNjQgLTAuMDYxMDIzMyAwLjgyMjkxNCAwLjE4MzA3IDEuMDY2OThMNy4xMTYwOCA4TDAuMTgzMDcgMTQuOTMzMUMtMC4wNjEwMjMzIDE1LjE3NzIgLTAuMDYxMDIzMyAxNS41NzI5IDAuMTgzMDcgMTUuODE3QzAuMzA1MTAxIDE1LjkzOSAwLjQ2NTA2OSAxNiAwLjYyNTAzNyAxNkMwLjc4NTAwNSAxNiAwLjk0NDk0MyAxNS45MzkgMS4wNjcgMTUuODE3TDcuOTk5OTggOC44ODM5NEwxNC45MzMgMTUuODE3QzE1LjA1NSAxNS45MzkgMTUuMjE1IDE2IDE1LjM3NSAxNkMxNS41MzQ5IDE2IDE1LjY5NDkgMTUuOTM5IDE1LjgxNjkgMTUuODE3QzE2LjA2MSAxNS41NzI5IDE2LjA2MSAxNS4xNzcxIDE1LjgxNjkgMTQuOTMzMUw4Ljg4MzkyIDguMDAwMDRaXCIgZmlsbD1cIiM4Njg4OEFcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvZ2luX3JlcV9ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+0KLRgNC10L3QtdGA0YPQudGC0LXRgdGMINCy0LzQtdGB0YLQtSDRgSDQu9GD0YfRiNC40LzQuCDQuNCz0YDQvtC60LDQvNC4INCyINCy0LDRiNC40YUg0LvRjtCx0LjQvNGL0YUg0LjQs9GA0LDRhTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PtCf0L7RgdC70LXQtNC90LjQtSDQvdC+0LLQvtGB0YLQuCDQuCDRgdC+0LHRi9GC0LjRjzwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PtCS0LXQu9C40LrQvtC70LXQv9C90L7QtSDRgdC+0L7QsdGJ0LXRgdGC0LLQvjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PtCi0YDQsNC90YHQu9GP0YbQuNC4INC4INGA0LXQt9GD0LvRjNGC0LDRgtGLINC80LDRgtGH0LXQuTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PtCQ0L3QsNC70LjRgtC40LrQsCDQvtGCINC/0YDQvtGE0LXRgdGB0LjQvtC90LDQu9C+0LI8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC90cmFuc2l0aW9uPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGluamVjdDogW1xuICAgICAgICAgICAgJ2F4aW9zJyxcbiAgICAgICAgICAgICdjb25maWcnXG4gICAgICAgIF0sXG4gICAgICAgIG5hbWU6IFwiUmVnaXN0cmF0aW9uRm9ybVwiLFxuICAgICAgICBwcm9wczogW1xuICAgICAgICAgICAgJ2VtYWlsJyxcbiAgICAgICAgICAgICdjaGVjaydcbiAgICAgICAgXSxcbiAgICAgICAgZGF0YSgpe1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIHN0ZWFtTG9naW5MaW5rKCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLlNURUFNX0xPR0lOX0xJTks7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW1haWxGb3JtKCl7XG4gICAgICAgICAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2VtYWlsJywgdGhpcy5lbWFpbCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZm9ybURhdGE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGdlbmVyYXRlQ29uZmlybUNvZGUoKXtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGVjaykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmF4aW9zLnBvc3QoJy9ydS9nZW5lcmF0ZS9jb25maXJtL2NvZGUnLCB0aGlzLmVtYWlsRm9ybSlcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdzZXRTdGVwJywgJ2NvbmZpcm1Db2RlJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2hlY2tJc0VtYWlsVmFsaWQoKXtcbiAgICAgICAgICAgICAgICB0aGlzLmF4aW9zLnBvc3QoJy9ydS91c2VyL2NoZWNrL2VtYWlsJywgdGhpcy5lbWFpbEZvcm0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCh7ZGF0YX0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVDb25maXJtQ29kZSgpO1xuICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoe3Jlc3BvbnNlfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHVwZGF0ZSh2YWx1ZSl7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnaW5wdXQnLCB2YWx1ZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2xvc2UoKXtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdjbG9zZScpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfVxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJncmlkXCI+XG4gICAgICAgIDxhIGNsYXNzPVwiZ3JpZC1yb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRhXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAge3sgdGVhbS5uYW1lIH19XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm90dG9tXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7QndCw0LfQstCw0L3QuNC1PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGFcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICB7eyB0ZWFtLnRhZyB9fVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvdHRvbVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+0KLQtdCzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGFcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICB7eyB0ZWFtLm1lbWJlcnMubGVuZ3RoIH19XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm90dG9tXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7Qo9GH0LDRgdC90LjQutC+0LI8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0YSBwdC0yXCI+XG4gICAgICAgICAgICAgICAgPGEgOmhyZWY9XCJodHRwLmdldFRlYW1MaW5rKHRlYW0uaWQpXCIgY2xhc3M9XCJidG4tb3JhbmdlIHRleHQtbGlnaHQgcC0yIHBvaW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAg0J/QvtGB0LzQvtGC0YDQtdGC0YxcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9hPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6IFwiTXZwSm9pbmVkVGVhbVwiLFxuICAgICAgICBwcm9wczogWyd0ZWFtJ10sXG4gICAgICAgIGluamVjdDogW1xuICAgICAgICAgICAgJ2h0dHAnXG4gICAgICAgIF1cbiAgICB9XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cblxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImV2ZW50c192aWV3XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tcG9uZW50IHVwY29taW5nX2V2ZW50c1wiPlxuICAgICAgICAgICAgICAgICAgICA8bXZwLWpvaW5lZC10ZWFtIDp0ZWFtPVwidGVhbVwiIDprZXk9XCJrZXlcIiB2LWZvcj1cIih0ZWFtLCBrZXkpIGluIHRlYW1zXCIvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgTXZwSm9pbmVkVGVhbSBmcm9tIFwiLi9NdnBKb2luZWRUZWFtXCI7XG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6IFwiTXZwSm9pbmVkVGVhbXNcIixcbiAgICAgICAgaW5qZWN0OiBbXG4gICAgICAgICAgICAnaHR0cCdcbiAgICAgICAgXSxcbiAgICAgICAgY29tcG9uZW50czoge1xuICAgICAgICAgICAgJ212cC1qb2luZWQtdGVhbSc6IE12cEpvaW5lZFRlYW1cbiAgICAgICAgfSxcbiAgICAgICAgZGF0YSgpe1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0ZWFtczogW11cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgZ2V0Sm9pbmVkVGVhbXMoKXtcbiAgICAgICAgICAgICAgICB0aGlzLmh0dHAuZ2V0VXNlckpvaW5lZFRlYW1zKClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHtkYXRhfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50ZWFtcyA9IGRhdGFcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0Sm9pbmVkVGVhbXMoKVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG5cbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXIgbXQtM1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxmdFwiPlxuICAgICAgICAgICAgICAgIDxhIDpjbGFzcz1cInthY3RpdmU6IGFjdGl2ZSA9PT0gJ2NvbW1hbmRzJ31cIiBAY2xpY2s9XCIgYWN0aXZlID0gJ2NvbW1hbmRzJ1wiPtCa0J7QnNCQ0J3QlNCrPC9hPlxuICAgICAgICAgICAgICAgIDxhIDpjbGFzcz1cInthY3RpdmU6IGFjdGl2ZSA9PT0gJ3RvdXJuYW1lbnRzJ31cIiBAY2xpY2s9XCIgYWN0aXZlID0gJ3RvdXJuYW1lbnRzJ1wiPtCi0KPQoNCd0JjQoNCrPC9hPlxuICAgICAgICAgICAgICAgIDxhIDpjbGFzcz1cInthY3RpdmU6IGFjdGl2ZSA9PT0gJ21hdGNoZXMnfVwiIEBjbGljaz1cIiBhY3RpdmUgPSAnbWF0Y2hlcydcIj7QnNCQ0KLQp9CYPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgIDxNdnBUZWFtcz48L012cFRlYW1zPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgTXZwVGVhbXMgZnJvbSBcIi4vTXZwVGVhbXNcIjtcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbmFtZTogXCJNdnBQYWdlXCIsXG4gICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICAgIE12cFRlYW1zXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGEoKXtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgYWN0aXZlOiAnY29tbWFuZHMnLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG5cbiAgICAgICAgfSxcbiAgICB9XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cblxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImNhcmQgdy01MCBtci0yIGJvcmRlci1yYWRpdXMtMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCIgdi1pZj1cInRlYW0gPT09IHVuZGVmaW5lZFwiPlxuICAgICAgICAgICAgPGg1IGNsYXNzPVwiY2FyZC10aXRsZSBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICB7eyB0aXRsZSB9fVxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2UgYmFkZ2Utd2FybmluZyBib3JkZXItcmFkaXVzLTBcIj57eyB0eXBlIH19PC9zcGFuPlxuICAgICAgICAgICAgPC9oNT5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZC10ZXh0XCI+XG4gICAgICAgICAgICAgICAge3sgZGVzY3JpcHRpb24gfX1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxhIGNsYXNzPVwiYnRuLW9yYW5nZSB0ZXh0LWxpZ2h0IHAtMiBwb2ludGVyXCJcbiAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwibW9kYWxcIlxuICAgICAgICAgICAgICAgQGNsaWNrPVwiJGVtaXQoJ3NldENhcGFjaXR5JywgY2FwYWNpdHkpXCJcbiAgICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI21ha2VDb21hbmRNb2RhbFwiPlxuICAgICAgICAgICAgICAgINCh0L7Qt9C00LDRgtGMINC60L7QvNCw0L3QtNGDIHt7IHR5cGUgfX1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIiB2LWlmPVwidGVhbSAhPT0gdW5kZWZpbmVkXCI+XG4gICAgICAgICAgICA8aDUgY2xhc3M9XCJjYXJkLXRpdGxlIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgIHt7IHRlYW0ubmFtZSB9fVxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2UgYmFkZ2Utd2FybmluZyBib3JkZXItcmFkaXVzLTBcIj5cbiAgICAgICAgICAgICAgICAgICAge3sgdHlwZSB9fVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtdGV4dFwiPiB7eyB0ZWFtLm1lbWJlcnMubGVuZ3RoIH19INGD0YfQsNGB0L3QuNC60L7QsjwvcD5cbiAgICAgICAgICAgIDxhIGNsYXNzPVwiYnRuLW9yYW5nZSB0ZXh0LWxpZ2h0IHAtMiBwb2ludGVyXCIgOmhyZWY9XCJodHRwLmdldFRlYW1MaW5rKHRlYW0uaWQpXCI+XG4gICAgICAgICAgICAgICAg0J/QvtGB0LzQvtGC0YDQtdGC0YxcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiBcIk12cFRlYW1cIixcbiAgICAgICAgaW5qZWN0OiBbXG4gICAgICAgICAgICAnaHR0cCdcbiAgICAgICAgXSxcbiAgICAgICAgcHJvcHM6IFtcbiAgICAgICAgICAgICd0ZWFtcycsXG4gICAgICAgICAgICAndGl0bGUnLFxuICAgICAgICAgICAgJ2Rlc2NyaXB0aW9uJyxcbiAgICAgICAgICAgICd0eXBlJyxcbiAgICAgICAgICAgICdjYXBhY2l0eSdcbiAgICAgICAgXSxcbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIHRlYW0oKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50ZWFtcy5maW5kKHRlYW0gPT4gTnVtYmVyKHRlYW0uY2FwYWNpdHkpID09PSBOdW1iZXIodGhpcy5jYXBhY2l0eSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJncmlkXCI+XG4gICAgICAgIDxhIGNsYXNzPVwiZ3JpZC1yb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2dvXCI+XG4gICAgICAgICAgICAgICAgPGltZyB2LWlmPVwibWVtYmVyLmltYWdlICE9PSBudWxsXCIvPlxuICAgICAgICAgICAgICAgIDxpbWcgdi1lbHNlIHNyYz1cIi9pbWFnZXMvbm9Mb2dvLnBuZ1wiLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGFcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICB7eyBtZW1iZXIubmlja25hbWUgfX1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3R0b21cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPtCd0LjQujwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRhXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtaWY9XCJpc0NhcHRhaW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgINCa0LDQv9C40YLQsNC9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1lbHNlPlxuICAgICAgICAgICAgICAgICAgICAgICAg0JjQs9GA0L7QulxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvdHRvbVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+0KDQvtC70Yw8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0YVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIDpocmVmPVwiZ2V0U3RlYW1MaW5rKG1lbWJlci5zdGVhbSlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHdpZHRoPVwiMjBweFwiIHNyYz1cIi9pbWFnZXMvbG9naW5fc3RlYW0uc3ZnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm90dG9tXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7QodGC0LjQvDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9hPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6IFwiTXZwVGVhbU1lbWJlclwiLFxuICAgICAgICBwcm9wczogW1xuICAgICAgICAgICAgJ21lbWJlcicsXG4gICAgICAgICAgICAnaXNDYXB0YWluJ1xuICAgICAgICBdLFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBnZXRTdGVhbUxpbms6IChzdGVhbUlkKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGBodHRwczovL3N0ZWFtY29tbXVuaXR5LmNvbS9wcm9maWxlcy8ke3N0ZWFtSWR9YFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXIgbXQtMyBkLWJsb2NrXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGZ0XCI+XG4gICAgICAgICAgICAgICAgPGEgOmhyZWY9XCJodHRwLmdldE12cExpbmsoKVwiPtCd0LDQt9Cw0LQ8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJldmVudHNfdmlld1wiIGlkPVwidGVhbU1lbWJlcnNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21wb25lbnQgdXBjb21pbmdfZXZlbnRzXCIgaWQ9XCJ1cGNvbWluZ19ldmVudHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3VuZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48aW1nIHNyYz1cIi9pbWFnZXMvbGFtcC5zdmdcIiBhbHQ9XCJsYW1wXCIgLz48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0KPRh9Cw0YHRgtC90LjQutC4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtdnAtdGVhbS1tZW1iZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJ0ZWFtLmhhc093blByb3BlcnR5KCdtZW1iZXJzJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1mb3I9XCIobWVtYmVyLCBrZXkpIGluIHRlYW0ubWVtYmVyc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bWVtYmVyPVwibWVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XCJrZXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmlzLWNhcHRhaW49XCJjaGVja01lbWJlcklzQ2FwdGFpbihtZW1iZXIpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tdnAtdGVhbS1tZW1iZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgbXQtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxmdFwiIHYtaWY9XCJpc0NyZWF0b3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBAY2xpY2s9XCJkZWxldGVUZWFtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCj0LTQsNC70LjRgtGMINC60L7QvNCw0L3QtNGDXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYnRuLW9yYW5nZSB0ZXh0LWxpZ2h0IHBvaW50ZXJcIiBAY2xpY2s9XCJzaG93QWRkTW9kYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtcGx1c1wiPjwvaT4mbmJzcDsmbmJzcDvQlNC+0LHQsNCy0LjRgtGMINGD0YfQsNGB0L3QuNC60L7QslxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxmdFwiIHYtZWxzZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImJ0bi1vcmFuZ2UgdGV4dC1saWdodCBwb2ludGVyXCIgOmhyZWY9XCJodHRwLnVzZXJMZWF2ZVRlYW1MaW5rKHRlYW1JZClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0J/QvtC60LjQvdGD0YLRjCDQutC+0LzQsNC90LTRg1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInXG4gICAgaW1wb3J0IE12cFRlYW1NZW1iZXIgZnJvbSBcIi4vTXZwVGVhbU1lbWJlclwiO1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiBcIk12cFRlYW1QYWdlXCIsXG4gICAgICAgIGluamVjdDogW1xuICAgICAgICAgICAgJ2h0dHAnXG4gICAgICAgIF0sXG4gICAgICAgIHByb3BzOiBbXG4gICAgICAgICAgICAndGVhbUlkJ1xuICAgICAgICBdLFxuICAgICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICAgICAnbXZwLXRlYW0tbWVtYmVyJzogTXZwVGVhbU1lbWJlcixcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YSgpe1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0ZWFtOiB7fSxcbiAgICAgICAgICAgICAgICBpbnZpdGVUb2tlbjogbnVsbCxcbiAgICAgICAgICAgICAgICB1c2VyOiBudWxsLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgaXNDcmVhdG9yKCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudXNlciAhPT0gbnVsbCAmJiB0aGlzLnVzZXIuaWQgPT09IHRoaXMudGVhbS5jcmVhdG9yLmlkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBnZXRUZWFtKCl7XG4gICAgICAgICAgICAgICAgdGhpcy5odHRwLmdldE12cFRlYW0odGhpcy50ZWFtSWQpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCh7ZGF0YX0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGVhbSA9IGRhdGE7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2hlY2tNZW1iZXJJc0NhcHRhaW4obWVtYmVyKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWVtYmVyLmlkID09PSB0aGlzLnRlYW0uY3JlYXRvci5pZFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdldFN0ZWFtTGluayhzdGVhbUlkKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gYGh0dHBzOi8vc3RlYW1jb21tdW5pdHkuY29tL3Byb2ZpbGVzLyR7c3RlYW1JZH1gXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hvd0FkZE1vZGFsKCl7XG4gICAgICAgICAgICAgICAgdGhpcy5odHRwLmdldFRlYW1JbnZpdGVUb2tlbih0aGlzLnRlYW1JZClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHtkYXRhfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93SW52aXRlTW9kYWwoZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaG93SW52aXRlTW9kYWwodG9rZW4pe1xuICAgICAgICAgICAgICAgIGNvbnN0IGludml0ZUxpbmsgPSB0aGlzLmh0dHAuZ2V0SW52aXRlVG9UZWFtTGluayh0aGlzLnRlYW1JZCwgdG9rZW4pXG5cbiAgICAgICAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ9CU0L7QsdCw0LLQuNGC0Ywg0YPRh9Cw0YHRgtC90LjQutC+0LInLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAn0J7RgtC/0YDQsNCy0Ywg0Y3RgtGDINGB0YHRi9C70LrRgyDQuNCz0YDQvtC60LDQvCwg0LrQvtGC0L7RgNGL0YUg0YXQvtGH0LXRiNGMINC/0YDQuNCz0LvQsNGB0LjRgtGMINCyINC60L7QvNCw0L3QtNGDJyxcbiAgICAgICAgICAgICAgICAgICAgaHRtbDogYDx0ZXh0YXJlYSBjbGFzcz1cInN3YWwyLXRleHRhcmVhXCIgcGxhY2Vob2xkZXI9XCJcIiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7XCI+JHtpbnZpdGVMaW5rfTwvdGV4dGFyZWE+YCxcbiAgICAgICAgICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgc2hvd0NvbmZpcm1CdXR0b246IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAn0J7QsdC90L7QstC40YLRjCcsXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6ICfQl9Cw0LrRgNGL0YLRjCcsXG4gICAgICAgICAgICAgICAgICAgIHByZUNvbmZpcm06ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaHR0cC5yZWxvYWRUZWFtSW52aXRlVG9rZW4odGhpcy50ZWFtSWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHtkYXRhfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dJbnZpdGVNb2RhbChkYXRhKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlbGV0ZVRlYW0oKXtcbiAgICAgICAgICAgICAgICB0aGlzLmh0dHAuZGVsZXRlTXZwVGVhbSh0aGlzLnRlYW1JZClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gdGhpcy5odHRwLmdldE12cExpbmsoKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdldFVzZXIoKXtcbiAgICAgICAgICAgICAgICB0aGlzLmh0dHAuZ2V0QXV0aFVzZXIoKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigoe2RhdGF9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXIgPSBkYXRhXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICAgdGhpcy5nZXRUZWFtKCk7XG4gICAgICAgICAgICB0aGlzLmdldFVzZXIoKTtcbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiY29udFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIGNvbW1hbmRzIHAtMCBtdC0zXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy03NSBkLWZsZXhcIj5cbiAgICAgICAgICAgICAgICA8bXZwLXRlYW1cbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCLQndCw0YHRgtGA0L7QtdC9INC40LPRgNCw0YLRjCDRgdC10YDRjNC10LfQvdC+P1wiXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwi0KHQvtC30LTQsNC5INGB0LLQvtGOINC60L7QvNCw0L3QtNGDINC00LvRjyDRgtGD0YDQuNC60L7QsiA1djUg0Lgg0LLRgNGL0LLQsNC50YHRjyDQsiDQutC40LHQtdGA0YHQv9C+0YDRglwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCI1eDVcIlxuICAgICAgICAgICAgICAgICAgICBjYXBhY2l0eT1cIjVcIlxuICAgICAgICAgICAgICAgICAgICBAc2V0Q2FwYWNpdHk9XCJzZXRDYXBhY2l0eVwiXG4gICAgICAgICAgICAgICAgICAgIDp0ZWFtcz1cInRlYW1zXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxtdnAtdGVhbVxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cItCd0LDQv9Cw0YDQvdC40LrQuFwiXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwi0J3QtdGCINC/0L7RgdGC0L7Rj9C90L3QvtC5INC60L7QvNCw0L3QtNGLPyDQn9C+0LfQvtCy0Lgg0LTRgNGD0LPQsCDQuCDQstGL0L3QvtGB0LjRgtC1INGB0L7Qv9C10YDQvdC40LrQvtCyINCy0LzQtdGB0YLQtVwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCIyeDJcIlxuICAgICAgICAgICAgICAgICAgICBjYXBhY2l0eT1cIjJcIlxuICAgICAgICAgICAgICAgICAgICBAc2V0Q2FwYWNpdHk9XCJzZXRDYXBhY2l0eVwiXG4gICAgICAgICAgICAgICAgICAgIDp0ZWFtcz1cInRlYW1zXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwgZmFkZVwiIGlkPVwibWFrZUNvbWFuZE1vZGFsXCIgdGFiaW5kZXg9XCItMVwiIGFyaWEtbGFiZWxsZWRieT1cImV4YW1wbGVNb2RhbExhYmVsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudCBib3JkZXItcmFkaXVzLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJtb2RhbC10aXRsZVwiIGlkPVwiZXhhbXBsZU1vZGFsTGFiZWxcIj7QodC+0LfQtNCw0YLRjCDQutC+0LzQsNC90LTRgzwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0J/RgNC40LTRg9C80LDQuSDQvdCw0LfQstCw0L3QuNC1ICjRgdC80L7QttC10YjRjCDQv9C+0LzQtdC90Y/RgtGMINC/0L7RgtC+0LwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+0J3QsNC30LLQsNC90LjQtSDQutC+0LzQsNC90LTRizwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2LW1vZGVsPVwiY29tbWFuZC5uYW1lXCIgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbCBib3JkZXItcmFkaXVzLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwiZm9ybS10ZXh0IHRleHQtbXV0ZWRcIiB2LWlmPVwiIW1lc3NhZ2VzLmVycm9yLmhhc093blByb3BlcnR5KCduYW1lJylcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCc0L7QttC90L4g0LvQsNGC0LjQvdGB0LrQuNC1INCx0YPQutCy0Ysg0Lgg0YbQuNGE0YDRi1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcIiB2LWlmPVwibWVzc2FnZXMuZXJyb3IuaGFzT3duUHJvcGVydHkoJ25hbWUnKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgbWVzc2FnZXMuZXJyb3IubmFtZVswXSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD7QotC10LMg0LrQvtC80LDQvdC00Ys8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdi1tb2RlbD1cImNvbW1hbmQudGFnXCIgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbCBib3JkZXItcmFkaXVzLTAgdy01MFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJmb3JtLXRleHQgdGV4dC1tdXRlZFwiIHYtaWY9XCIhbWVzc2FnZXMuZXJyb3IuaGFzT3duUHJvcGVydHkoJ3RhZycpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQnNCw0LrRgdC40LzRg9C8IDYg0YHQuNC80LLQvtC70L7QslxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcIiB2LWlmPVwibWVzc2FnZXMuZXJyb3IuaGFzT3duUHJvcGVydHkoJ3RhZycpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBtZXNzYWdlcy5lcnJvci50YWdbMF0gfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHQtc3VjY2Vzc1wiIHYtaWY9XCJtZXNzYWdlcy5zdWNjZXNzICE9PSBudWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBtZXNzYWdlcy5zdWNjZXNzIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgQGNsaWNrPVwiY3JlYXRlVGVhbVwiIGNsYXNzPVwiYnRuLW9yYW5nZSB0ZXh0LWxpZ2h0IHAtMiB0ZXh0LWNlbnRlciBwb2ludGVyIHctMTAwXCIgPtCh0L7Qt9C00LDRgtGMINC60L7QvNCw0L3QtNGDPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCIgY2xhc3M9XCJidG4tZ3JleSBwb2ludGVyIHRleHQtY2VudGVyIHRleHQtbGlnaHQgYm9yZGVyLXJhZGl1cy0wIHAtMiB3LTc1XCI+0J7RgtC80LXQvdC40YLRjDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIjEyM1wiPlxuICAgICAgICAgICAgICAgIDxtdnAtam9pbmVkLXRlYW1zLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IE12cFRlYW0gZnJvbSBcIi4vTXZwVGVhbVwiO1xuICAgIGltcG9ydCBNdnBKb2luZWRUZWFtcyBmcm9tIFwiLi9NdnBKb2luZWRUZWFtc1wiO1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiBcIk12cFRlYW1zXCIsXG4gICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICAgICdtdnAtdGVhbSc6IE12cFRlYW0sXG4gICAgICAgICAgICAnbXZwLWpvaW5lZC10ZWFtcyc6IE12cEpvaW5lZFRlYW1zXG4gICAgICAgIH0sXG4gICAgICAgIGluamVjdDogWydodHRwJ10sXG4gICAgICAgIGRhdGEoKXtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdGVhbXM6IFtdLFxuICAgICAgICAgICAgICAgIGNvbW1hbmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgY2FwYWNpdHk6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIHRhZzogbnVsbFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbWVzc2FnZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IHt9LFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgY3JlYXRlVGVhbSgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7Y2FwYWNpdHksIG5hbWUsIHRhZ30gPSB0aGlzLmNvbW1hbmQ7XG5cbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VzLnN1Y2Nlc3MgPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZXMuZXJyb3IgPSB7fTtcblxuICAgICAgICAgICAgICAgIHRoaXMuaHR0cC5jcmVhdGVNdnBUZWFtKGNhcGFjaXR5LCBuYW1lLCB0YWcpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCh7ZGF0YX0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZXMuc3VjY2VzcyA9IGRhdGEubWVzc2FnZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGVhbXMucHVzaChkYXRhLnRlYW0pO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKHtyZXNwb25zZX0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZXMuZXJyb3IgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdldFVzZXJUZWFtcygpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmh0dHAuZ2V0VXNlclRlYW1zKClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHtkYXRhfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50ZWFtcyA9IGRhdGE7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0Q2FwYWNpdHkoY2FwYWNpdHkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQuY2FwYWNpdHkgPSBjYXBhY2l0eTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0VXNlclRlYW1zKClcbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiZXZlbnRzX3ZpZXdcIiBpZD1cInRlYW1NZW1iZXJzXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tcG9uZW50IHVwY29taW5nX2V2ZW50c1wiIGlkPVwidXBjb21pbmdfZXZlbnRzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3VuZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGltZyBzcmM9XCIvaW1hZ2VzL2xhbXAuc3ZnXCIgYWx0PVwibGFtcFwiIC8+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHRlYW0ubmFtZSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8bXZwLXRlYW0tbWVtYmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cInRlYW0uaGFzT3duUHJvcGVydHkoJ21lbWJlcnMnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1mb3I9XCIobWVtYmVyLCBrZXkpIGluIHRlYW0ubWVtYmVyc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOm1lbWJlcj1cIm1lbWJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmtleT1cImtleVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmlzLWNhcHRhaW49XCJjaGVja01lbWJlcklzQ2FwdGFpbihtZW1iZXIpXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvbXZwLXRlYW0tbWVtYmVyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IG10LTNcIiB2LWlmPVwiaXNBdXRob3JpemUgJiYgaXNGcmVlUGxhY2VcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGZ0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYnRuLW9yYW5nZSB0ZXh0LWxpZ2h0IHBvaW50ZXJcIiBAY2xpY2s9XCJqb2luVGVhbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtcGx1c1wiPjwvaT4mbmJzcDsmbmJzcDvQn9GA0LjRgdC+0LXQtNC10L3QuNGC0YHRj1xuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxsb2dpbi1tb2RhbCA6c2hvdz1cIiFpc0F1dGhvcml6ZVwiLz5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IE12cFRlYW1NZW1iZXIgZnJvbSBcIi4uL2NhYmluZXQvTXZwVGVhbU1lbWJlclwiO1xuICAgIGltcG9ydCBMb2dpbk1vZGFsIGZyb20gXCIuLi8uLi9Mb2dpbk1vZGFsXCI7XG4gICAgaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInXG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6IFwiTXZwSW52aXRlVGVhbVBhZ2VcIixcbiAgICAgICAgaW5qZWN0OiBbXG4gICAgICAgICAgICAnaHR0cCcsXG4gICAgICAgICAgICAnY29uZmlnJ1xuICAgICAgICBdLFxuICAgICAgICBwcm9wczogW1xuICAgICAgICAgICAgJ3RlYW1JZCcsXG4gICAgICAgICAgICAnaXNBdXRob3JpemUnXG4gICAgICAgIF0sXG4gICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICAgICdtdnAtdGVhbS1tZW1iZXInOiBNdnBUZWFtTWVtYmVyLFxuICAgICAgICAgICAgJ2xvZ2luLW1vZGFsJzogTG9naW5Nb2RhbFxuICAgICAgICB9LFxuICAgICAgICBkYXRhKCl7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHRlYW06IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogbnVsbFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYXV0aFVzZXI6IG51bGwsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICBpc0ZyZWVQbGFjZSgpe1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRlYW0uaGFzT3duUHJvcGVydHkoJ21lbWJlcnMnKSl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRlYW0ubWVtYmVycy5sZW5ndGggPCB0aGlzLnRlYW0uY2FwYWNpdHk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgZ2V0VGVhbSgpe1xuICAgICAgICAgICAgICAgIHRoaXMuaHR0cC5nZXRNdnBUZWFtKHRoaXMudGVhbUlkKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigoe2RhdGF9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRlYW0gPSBkYXRhXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2hlY2tNZW1iZXJJc0NhcHRhaW4obWVtYmVyKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWVtYmVyLmlkID09PSB0aGlzLnRlYW0uY3JlYXRvci5pZFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGpvaW5UZWFtKCl7XG4gICAgICAgICAgICAgICAgdGhpcy5odHRwLmdldEF1dGhVc2VyKClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHtkYXRhfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hdXRoVXNlciA9IGRhdGE7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5lZWRTdGVhbSA9IHRoaXMuY2hlY2tOZWVkU3RlYW1Gb3JKb2luKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbmVlZFN0ZWFtKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmh0dHAuam9pbk1lbWJlclRvVGVhbSh0aGlzLnRlYW1JZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRUZWFtKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKHtyZXNwb25zZX0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JQb3B1cChyZXNwb25zZS5kYXRhKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yUG9wdXAoZXJyb3Ipe1xuICAgICAgICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn0KPQv9GBLi4uJyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogZXJyb3IsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaGVja05lZWRTdGVhbUZvckpvaW4oKXtcbiAgICAgICAgICAgICAgICBjb25zdCBodG1sID0gYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgINCU0LvRjyDRgtC+0LPQviDRh9GC0L4g0LHRiyDRg9GH0LDQstGB0YLQstC+0LLQsNGC0Ywg0LIg0YLRg9GA0L3QuNGA0LUsINC90LXQvtCx0YXQvtC00LjQvNC+INC/0YDQuNCy0Y/Qt9Cw0YLRjCDQsNC60LDRg9C90YJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiJHt0aGlzLmNvbmZpZy5TVEVBTV9MT0dJTl9MSU5LfVwiPlN0ZWFtPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwdC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIke3RoaXMuY29uZmlnLlNURUFNX0xPR0lOX0xJTkt9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvbG9naW5fc3RlYW0uc3ZnXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+YDtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmF1dGhVc2VyICE9PSBudWxsICl7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmF1dGhVc2VyLnN0ZWFtID09PSBudWxsIHx8IHRoaXMuYXV0aFVzZXIuc3RlYW0gPT09ICcnIHx8IHRoaXMuYXV0aFVzZXIuc3RlYW0gPT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfQo9C/0YEuLi4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dDbG9zZUJ1dHRvbjogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0VGVhbSgpXG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBwLTAgbS0wXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgd2luZG93LWhlaWdodC04MCBwLTAgbS0wXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciB3LTEwMCBoLTEwMFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBmbGV4LWNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgbWItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJidG4tb3JhbmdlIHRleHQtbGlnaHQgcC0zIHBsLTUgcHItNSBmb250LXNpemUtMjMgcG9pbnRlclwiIEBjbGljaz1cInNob3dMb2dpbk1vZGFsXCI+Sm9pbiB0aGUgR2FtZTwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTEwMCBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzcz1cInRleHQtbGlnaHQgZm9udC1zaXplLTIzXCI+V2hhdCB3ZSBvZmZlcjwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctMTAwIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHQtbGlnaHQgdy01MCBmb250LXNpemUtMThcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZCBjb25zZXF1dW50dXIgY3VscGEgY3VwaWRpdGF0ZSBkZWxlbml0aSBkaWN0YSBkaWduaXNzaW1vcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXN0aW5jdGlvIGRvbG9yIGRvbG9yZXMgaGljIGlwc2EgaXRhcXVlIGxhdWRhbnRpdW0gbW9sZXN0aWFzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vbGxpdGlhIG5vc3RydW0sIHBlcmZlcmVuZGlzIHByb3ZpZGVudCBxdW9zIHNhcGllbnRlIHZlcm8hXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciB3LTEwMCBoLTEwMFwiPlxuICAgICAgICAgICAgPGEgY2xhc3M9XCJidG4tb3JhbmdlIHRleHQtbGlnaHQgcC0yIHBsLTMgcHItMyBwb2ludGVyXCIgQGNsaWNrPVwic2hvd0xvZ2luTW9kYWxcIj5Kb2luIHRoZSBHYW1lPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGxvZ2luLW1vZGFsXG4gICAgICAgICAgICAgICAgcmVmPVwibG9naW5Nb2RhbFwiXG4gICAgICAgICAgICAgICAgOnJlZGlyZWN0PVwibG9naW5SZWRpcmVjdFwiXG4gICAgICAgICAgICAgICAgOnNob3c9XCJzaG93XCJcbiAgICAgICAgICAgICAgICBzaG93LWZpcnN0PVwicmVnaXN0cmF0aW9uXCI+XG4gICAgICAgIDwvbG9naW4tbW9kYWw+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBMb2dpbk1vZGFsIGZyb20gXCIuLi8uLi9Mb2dpbk1vZGFsXCI7XG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6IFwiTXZwTWFpblwiLFxuICAgICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICAgICAnbG9naW4tbW9kYWwnOiBMb2dpbk1vZGFsXG4gICAgICAgIH0sXG4gICAgICAgIHByb3BzOiBbXG4gICAgICAgICAgICAnbG9naW5SZWRpcmVjdCcsXG4gICAgICAgICAgICAnaXNBdXRob3JpemUnXG4gICAgICAgIF0sXG4gICAgICAgIGRhdGEoKXtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgc2hvd0xvZ2luTW9kYWwoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNBdXRob3JpemUpe1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSB0aGlzLmxvZ2luUmVkaXJlY3RcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLmxvZ2luTW9kYWwuc2hvdyA9IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfVxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxuICAgIDxuYXYgY2xhc3M9XCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1sZyBuYXZiYXItbGlnaHQgYmctbGlnaHQgbmF2YmFyLW12cFwiPlxuICAgICAgICA8YnV0dG9uIDpjbGFzcz1cIntjb2xsYXBzZWQ6ICFzaG93fVwiIGNsYXNzPVwibmF2YmFyLXRvZ2dsZXIgYm9yZGVyLW5vbmVcIiB0eXBlPVwiYnV0dG9uXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiI25hdmJhclN1cHBvcnRlZENvbnRlbnRcIiBhcmlhLWNvbnRyb2xzPVwibmF2YmFyU3VwcG9ydGVkQ29udGVudFwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGFyaWEtbGFiZWw9XCJUb2dnbGUgbmF2aWdhdGlvblwiPlxuICAgICAgICAgICAgPHNwYW4gQGNsaWNrPVwic2hvdyA9ICFzaG93XCIgY2xhc3M9XCJuYXZiYXItdG9nZ2xlci1pY29uXCI+PC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGRpdiA6Y2xhc3M9XCJ7c2hvd31cIiBjbGFzcz1cIm5hdmJhci1jb2xsYXBzZSBjb2xsYXBzZVwiIGlkPVwibmF2YmFyU3VwcG9ydGVkQ29udGVudFwiPlxuICAgICAgICAgICAgPHVsIGNsYXNzPVwibmF2YmFyLW5hdiBtci1hdXRvIGQtZmxleCB3LTEwMCBqdXN0aWZ5LWNvbnRlbnQtZW5kXCI+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibmF2LWl0ZW1cIiB2LWlmPVwiIWlzQXV0aG9yaXplXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIEBjbGljaz1cInNob3dMb2dpbkZvcm1cIiBjbGFzcz1cIm5hdi1saW5rXCIgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgINCX0LDRgNC10LPQtdGB0YLRgNC40YDQvtCy0LDRgtGMINC/0YDQvtGE0LjQu9GMXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibmF2LWxpbmtcIiBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgSGVscFxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cIm5hdi1saW5rXCIgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgINCe0YLQv9GA0LDQstC40YLRjCDQv9C40YHRjNC80L4g0L/QvtC00LTQtdGA0LbQutC1XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtXCIgdi1pZj1cImlzQXV0aG9yaXplXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibmF2LWxpbmtcIiA6aHJlZj1cImh0dHAuZ2V0UHJvZmlsZUxpbmsoKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgTXkgR2FtaW5nIFByb2ZpbGVcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L25hdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiBcIk12cFBhZ2VIZWFkZXJcIixcbiAgICAgICAgaW5qZWN0OiBbXG4gICAgICAgICAgICAnaHR0cCdcbiAgICAgICAgXSxcbiAgICAgICAgcHJvcHM6IFtcbiAgICAgICAgICAgICdpc0F1dGhvcml6ZScsXG4gICAgICAgICAgICAnc2hvd0xvZ2luRm9ybSdcbiAgICAgICAgXSxcbiAgICAgICAgZGF0YSgpe1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBzaG93TG9naW5Gb3JtKCl7XG4gICAgICAgICAgICAgICAgaGVhZGVyLnZpZXcgPSAyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG5cbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbXBvbmVudCB1cGNvbWluZ19ldmVudHNcIiBpZD1cInVwY29taW5nX2V2ZW50c1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdW5kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxpbWcgc3JjPVwiL2ltYWdlcy9sYW1wLnN2Z1wiIGFsdD1cImxhbXBcIiAvPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICDQotGD0YDQvdC40YDRiyB7e2dhbWV9fVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZCB3LTEwMCBoLTEwMCBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXJcIiB2LWlmPVwibG9hZFwiPlxuICAgICAgICAgICAgICAgICAgICA8bG9hZC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyaWRcIiB2LWZvcj1cInRvdXJuYW1lbnQgaW4gdG91cm5hbWVudHNcIiB2LWlmPVwiIWxvYWRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgOmhyZWY9XCInL3J1L212cC90b3VybmFtZW50LycgKyB0b3VybmFtZW50LmlkXCIgY2xhc3M9XCJncmlkLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvZ29cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIDpzcmM9XCJ0b3VybmFtZW50LmxvZ29cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57e3RvdXJuYW1lbnQubmFtZX19ICN7e3RvdXJuYW1lbnQubnVtYmVyfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvdHRvbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+0J3QsNC30LLQsNC90LjQtTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7dG91cm5hbWVudC5kYXRlfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvdHRvbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+0JTQsNGC0LA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57e3RvdXJuYW1lbnQubW9kZX19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3R0b21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPtCg0LXQttC40Lw8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1sb2NrLW9wZW5cIiB2LWlmPVwidG91cm5hbWVudC5hY2Nlc3NcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWxvY2tcIiB2LWVsc2U+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3R0b21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPtCU0L7RgdGC0YPQvzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7dG91cm5hbWVudC5wcml6ZX19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3R0b21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPtCf0YDQuNC3PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBMb2FkIGZyb20gXCIuLi8uLi9Mb2FkXCI7XG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6IFwiTXZwVG91cm5hbWVudHNMaXN0XCIsXG4gICAgICAgIGluamVjdDogW1xuICAgICAgICAgICAgJ2h0dHAnLFxuICAgICAgICAgICAgJ2hlYWRlcidcbiAgICAgICAgXSxcbiAgICAgICAgY29tcG9uZW50czoge1xuICAgICAgICAgICAgJ2xvYWQnOiBMb2FkXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGEoKXtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdG91cm5hbWVudHM6IFtdLFxuICAgICAgICAgICAgICAgIGdhbWVzOiB7XG4gICAgICAgICAgICAgICAgICAgICdDUzpHTyc6ICdjcycsXG4gICAgICAgICAgICAgICAgICAgICdET1RBJzogJ2RvdGEnLFxuICAgICAgICAgICAgICAgICAgICAnVmFsb3JhbnQnOiAndmFsb3JhbnQnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBsb2FkOiBmYWxzZSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgd2F0Y2g6IHtcbiAgICAgICAgICAgIGdhbWUoKXtcbiAgICAgICAgICAgICAgICB0aGlzLmdldFRvdXJuYW1lbnRzQnlHYW1lKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICBnYW1lKCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuICB0aGlzLmhlYWRlci5nYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBnZXRUb3VybmFtZW50c0J5R2FtZSgpe1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmh0dHAuZ2V0VG91cm5hbWVudHNCeUdhbWUodGhpcy5nYW1lc1t0aGlzLmhlYWRlci5nYW1lXSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHtkYXRhfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b3VybmFtZW50cyA9IGRhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY3JlYXRlZCgpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0VG91cm5hbWVudHNCeUdhbWUoKTtcbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX3ZtLl9tKDApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvYWRpbmdpby1zcGlubmVyLWdlYXItbXRwaHdnb3k3OWVcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxkaW8tcnd1dmFydm5wMXNcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICBfYyhcImRpdlwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcInNsaWRlc1wiIH0sXG4gICAgW1xuICAgICAgX2MoXCJsb2dpblwiLCB7XG4gICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICB2YWx1ZTogX3ZtLmNoZWNrU3RlcChcImxvZ2luXCIpLFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJjaGVja1N0ZXAoJ2xvZ2luJylcIlxuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgYXR0cnM6IHsgZXJyb3I6IF92bS5lcnJvciwgZW1haWw6IF92bS5lbWFpbCwgY2hlY2s6IF92bS5wYXNzd29yZCB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIHNldFN0ZXA6IF92bS5zZXRTdGVwLFxuICAgICAgICAgIGF1dGhMb2dpbjogX3ZtLmF1dGhMb2dpbixcbiAgICAgICAgICBjbG9zZTogX3ZtLmNsb3NlLFxuICAgICAgICAgIGlucHV0RW1haWw6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBfdm0uZW1haWwgPSB2YWx1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgaW5wdXRQYXNzd29yZDogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIF92bS5wYXNzd29yZCA9IHZhbHVlXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInJlZ2lzdHJhdGlvblwiLCB7XG4gICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICB2YWx1ZTogX3ZtLmNoZWNrU3RlcChcInJlZ2lzdHJhdGlvblwiKSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwiY2hlY2tTdGVwKCdyZWdpc3RyYXRpb24nKVwiXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBhdHRyczogeyBlbWFpbDogX3ZtLmVtYWlsLCBjaGVjazogX3ZtLmNoZWNrIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgc2V0U3RlcDogX3ZtLnNldFN0ZXAsXG4gICAgICAgICAgY2xvc2U6IF92bS5jbG9zZSxcbiAgICAgICAgICBpbnB1dEVtYWlsOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgX3ZtLmVtYWlsID0gdmFsdWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIGlucHV0UGFzc3dvcmQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBfdm0ucGFzc3dvcmQgPSB2YWx1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICB2YWx1ZTogX3ZtLmNoZWNrLFxuICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgIF92bS5jaGVjayA9ICQkdlxuICAgICAgICAgIH0sXG4gICAgICAgICAgZXhwcmVzc2lvbjogXCJjaGVja1wiXG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiY29uZmlybS1jb2RlXCIsIHtcbiAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgIHZhbHVlOiBfdm0uY2hlY2tTdGVwKFwiY29uZmlybUNvZGVcIiksXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcImNoZWNrU3RlcCgnY29uZmlybUNvZGUnKVwiXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBhdHRyczogeyBjb2RlQ29uZmlybWVkOiBfdm0uY29kZUNvbmZpcm1lZCwgZW1haWw6IF92bS5lbWFpbCB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIHNldFN0ZXA6IF92bS5zZXRTdGVwLFxuICAgICAgICAgIGNsb3NlOiBfdm0uY2xvc2UsXG4gICAgICAgICAgcmVnaXN0cmF0aW9uOiBfdm0ucmVnaXN0cmF0aW9uXG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwibmljay1uYW1lXCIsIHtcbiAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgIHZhbHVlOiBfdm0uY2hlY2tTdGVwKFwibmlja25hbWVcIiksXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcImNoZWNrU3RlcCgnbmlja25hbWUnKVwiXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBhdHRyczogeyBlbWFpbDogX3ZtLmVtYWlsIH0sXG4gICAgICAgIG9uOiB7IHNldFN0ZXA6IF92bS5zZXRTdGVwLCBjbG9zZTogX3ZtLmNsb3NlIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiY29uZ3JhdHVsYXRpb25cIiwge1xuICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgdmFsdWU6IF92bS5jaGVja1N0ZXAoXCJjb25ncmF0dWxhdGlvblwiKSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwiY2hlY2tTdGVwKCdjb25ncmF0dWxhdGlvbicpXCJcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIG9uOiB7IHNldFN0ZXA6IF92bS5zZXRTdGVwLCBjbG9zZTogX3ZtLmNsb3NlIH1cbiAgICAgIH0pXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwidHJhbnNpdGlvblwiLCB7IGF0dHJzOiB7IG5hbWU6IFwic2xpZGUtZmFkZXNcIiB9IH0sIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvZ2luX2Zvcm1cIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvZ2luX2Jsb2NrXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvZ290eXBlXCIgfSwgW1xuICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxvZ290eXBlXCIsXG4gICAgICAgICAgICBhdHRyczogeyBzcmM6IFwiL2ltYWdlcy9DaGFtcHNfbG9nb3R5cGUuc3ZnXCIgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvZ2luX3RpdGxlXCIgfSwgW1xuICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICDQn9C+0LTRgtCy0LXRgNC20LTQtdC90LjQtSDQv9C+0YfRgtGLXFxuICAgICAgICAgICAgXCIpXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvZ2luX2lucHV0XCIgfSwgW1xuICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uY29uZmlybUNvZGUsXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJjb25maXJtQ29kZVwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiwgcmVxdWlyZWQ6IFwiXCIgfSxcbiAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uY29uZmlybUNvZGUgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfdm0uY29uZmlybUNvZGUgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi0JrQvtC0INC/0L7QtNGC0LLQtdGA0LbQtNC10L3QuNGPXCIpXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJzZW5kXCIsIG9uOiB7IGNsaWNrOiBfdm0uc2VuZFJlZ2lzdHJhdGlvbkNvbmZpcm0gfSB9LFxuICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAg0J7RgtC/0YDQsNCy0LjRgtGMXFxuICAgICAgICAgICAgXCIpXVxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfdm0uZXJyb3JNZXNzYWdlICE9PSBudWxsXG4gICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVycm9yXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5lcnJvck1lc3NhZ2UpICtcbiAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfdm0uc3VjY2Vzc01lc3NhZ2UgIT09IG51bGxcbiAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZXJyb3IgdGV4dC1zdWNjZXNzXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5zdWNjZXNzTWVzc2FnZSkgK1xuICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGlua3MgZC1mbGV4XCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibXQtMVwiLFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJGVtaXQoXCJzZXRTdGVwXCIsIFwicmVnaXN0cmF0aW9uXCIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW19jKFwic3BhblwiLCBbX3ZtLl92KFwiQmFja1wiKV0pXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm10LTFcIiwgb246IHsgY2xpY2s6IF92bS5zaG93Tmlja25hbWUgfSB9LCBbXG4gICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBjbGFzczogeyBkaXNhYmxlZDogIV92bS5jb2RlQ29uZmlybWVkIH0gfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXCJOZXh0XCIpXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNsb3NlZFwiIH0sIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwic3ZnXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxNlwiLFxuICAgICAgICAgICAgICAgIGhlaWdodDogXCIxNlwiLFxuICAgICAgICAgICAgICAgIHZpZXdCb3g6IFwiMCAwIDE2IDE2XCIsXG4gICAgICAgICAgICAgICAgZmlsbDogXCJub25lXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5jbG9zZSB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInBhdGhcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBkOlxuICAgICAgICAgICAgICAgICAgICBcIk04Ljg4MzkyIDguMDAwMDRMMTUuODE2OSAxLjA2Njk4QzE2LjA2MSAwLjgyMjg4MiAxNi4wNjEgMC40MjcxMzMgMTUuODE2OSAwLjE4MzA3QzE1LjU3MjggLTAuMDYwOTkyMiAxNS4xNzcxIC0wLjA2MTAyMzQgMTQuOTMzIDAuMTgzMDdMNy45OTk5OCA3LjExNjEzTDEuMDY2OTcgMC4xODMwN0MwLjgyMjg4IC0wLjA2MTAyMzQgMC40MjcxMzIgLTAuMDYxMDIzNCAwLjE4MzA3IDAuMTgzMDdDLTAuMDYwOTkyIDAuNDI3MTY0IC0wLjA2MTAyMzMgMC44MjI5MTQgMC4xODMwNyAxLjA2Njk4TDcuMTE2MDggOEwwLjE4MzA3IDE0LjkzMzFDLTAuMDYxMDIzMyAxNS4xNzcyIC0wLjA2MTAyMzMgMTUuNTcyOSAwLjE4MzA3IDE1LjgxN0MwLjMwNTEwMSAxNS45MzkgMC40NjUwNjkgMTYgMC42MjUwMzcgMTZDMC43ODUwMDUgMTYgMC45NDQ5NDMgMTUuOTM5IDEuMDY3IDE1LjgxN0w3Ljk5OTk4IDguODgzOTRMMTQuOTMzIDE1LjgxN0MxNS4wNTUgMTUuOTM5IDE1LjIxNSAxNiAxNS4zNzUgMTZDMTUuNTM0OSAxNiAxNS42OTQ5IDE1LjkzOSAxNS44MTY5IDE1LjgxN0MxNi4wNjEgMTUuNTcyOSAxNi4wNjEgMTUuMTc3MSAxNS44MTY5IDE0LjkzMzFMOC44ODM5MiA4LjAwMDA0WlwiLFxuICAgICAgICAgICAgICAgICAgZmlsbDogXCIjODY4ODhBXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJ0cmFuc2l0aW9uXCIsIHsgYXR0cnM6IHsgbmFtZTogXCJzbGlkZS1mYWRlc1wiIH0gfSwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9naW5fZm9ybVwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9naW5fYmxvY2tcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9nb3R5cGVcIiB9LCBbXG4gICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibG9nb3R5cGVcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogXCIvaW1hZ2VzL0NoYW1wc19sb2dvdHlwZS5zdmdcIiB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9naW5fdGl0bGVcIiB9LCBbXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAg0J/QvtC30LTRgNCw0LLQu9GP0LXQvCDRgSDRg9GB0L/QtdGI0L3QvtC5INGA0LXQs9C10YHRgtGA0LDRhtC40LXQuSFcXG4gICAgICAgICAgICBcIlxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic2VuZFwiLFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJGVtaXQoXCJzZXRTdGVwXCIsIFwiZmluaXNoXCIpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgUGxheVxcbiAgICAgICAgICAgIFwiKV1cbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjbG9zZWRcIixcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRlbWl0KFwiY2xvc2VcIilcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwic3ZnXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjE2XCIsXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTZcIixcbiAgICAgICAgICAgICAgICAgIHZpZXdCb3g6IFwiMCAwIDE2IDE2XCIsXG4gICAgICAgICAgICAgICAgICBmaWxsOiBcIm5vbmVcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwicGF0aFwiLCB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBkOlxuICAgICAgICAgICAgICAgICAgICAgIFwiTTguODgzOTIgOC4wMDAwNEwxNS44MTY5IDEuMDY2OThDMTYuMDYxIDAuODIyODgyIDE2LjA2MSAwLjQyNzEzMyAxNS44MTY5IDAuMTgzMDdDMTUuNTcyOCAtMC4wNjA5OTIyIDE1LjE3NzEgLTAuMDYxMDIzNCAxNC45MzMgMC4xODMwN0w3Ljk5OTk4IDcuMTE2MTNMMS4wNjY5NyAwLjE4MzA3QzAuODIyODggLTAuMDYxMDIzNCAwLjQyNzEzMiAtMC4wNjEwMjM0IDAuMTgzMDcgMC4xODMwN0MtMC4wNjA5OTIgMC40MjcxNjQgLTAuMDYxMDIzMyAwLjgyMjkxNCAwLjE4MzA3IDEuMDY2OThMNy4xMTYwOCA4TDAuMTgzMDcgMTQuOTMzMUMtMC4wNjEwMjMzIDE1LjE3NzIgLTAuMDYxMDIzMyAxNS41NzI5IDAuMTgzMDcgMTUuODE3QzAuMzA1MTAxIDE1LjkzOSAwLjQ2NTA2OSAxNiAwLjYyNTAzNyAxNkMwLjc4NTAwNSAxNiAwLjk0NDk0MyAxNS45MzkgMS4wNjcgMTUuODE3TDcuOTk5OTggOC44ODM5NEwxNC45MzMgMTUuODE3QzE1LjA1NSAxNS45MzkgMTUuMjE1IDE2IDE1LjM3NSAxNkMxNS41MzQ5IDE2IDE1LjY5NDkgMTUuOTM5IDE1LjgxNjkgMTUuODE3QzE2LjA2MSAxNS41NzI5IDE2LjA2MSAxNS4xNzcxIDE1LjgxNjkgMTQuOTMzMUw4Ljg4MzkyIDguMDAwMDRaXCIsXG4gICAgICAgICAgICAgICAgICAgIGZpbGw6IFwiIzg2ODg4QVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF1cbiAgICAgICAgKVxuICAgICAgXSlcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJ0cmFuc2l0aW9uXCIsIHsgYXR0cnM6IHsgbmFtZTogXCJzbGlkZS1mYWRlc1wiIH0gfSwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9naW5fZm9ybVwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9naW5fYmxvY2tcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9nb3R5cGVcIiB9LCBbXG4gICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibG9nb3R5cGVcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogXCIvaW1hZ2VzL0NoYW1wc19sb2dvdHlwZS5zdmdcIiB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9naW5fdGl0bGVcIiB9LCBbXG4gICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgINCS0YXQvtC0INCyINC70LjRh9C90YvQuSDQutCw0LHQuNC90LXRglxcbiAgICAgICAgICAgIFwiKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2dpbl9pbnB1dFwiIH0sIFtcbiAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiZW1haWxcIiB9LFxuICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5lbWFpbCB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJGVtaXQoXCJpbnB1dEVtYWlsXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi0JDQtNGA0LXRgSDRjdC70LXQutGC0YDQvtC90L3QvtC5INC/0L7Rh9GC0YtcIildKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2dpbl9pbnB1dFwiIH0sIFtcbiAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwicGFzc3dvcmRcIiB9LFxuICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5wYXNzd29yZCB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJGVtaXQoXCJpbnB1dFBhc3N3b3JkXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi0J/QsNGA0L7Qu9GMXCIpXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic2VuZFwiLFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJGVtaXQoXCJhdXRoTG9naW5cIilcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICDQktC+0LnRgtC4XFxuICAgICAgICAgICAgXCIpXVxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfdm0uZXJyb3JcbiAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZXJyb3JcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICDQndC10L/RgNCw0LLQuNC70YzQvdGL0Lkg0LvQvtCz0LjQvSDQuNC70Lgg0L/QsNGA0L7Qu9GMXFxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInN1YnRleHRcIiB9LCBbXG4gICAgICAgICAgX3ZtLl92KFwi0JjQu9C4INCy0L7QudC00LjRgtC1INGBINC/0L7QvNC+0YnRjNGOXCIpXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImFsdGVybmF0ZVwiIH0sIFtcbiAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBocmVmOiBfdm0uc3RlYW1Mb2dpbkxpbmsgfSB9LCBbXG4gICAgICAgICAgICBfYyhcImltZ1wiLCB7IGF0dHJzOiB7IHNyYzogXCIvaW1hZ2VzL2xvZ2luX3N0ZWFtLnN2Z1wiIH0gfSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsaW5rc1wiLFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJGVtaXQoXCJzZXRTdGVwXCIsIFwicmVnaXN0cmF0aW9uXCIpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfYyhcImRpdlwiLCBbX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLQoNC10LPQuNGB0YLRgNCw0YbQuNGPXCIpXSldKV1cbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjbG9zZWRcIixcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRlbWl0KFwiY2xvc2VcIilcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwic3ZnXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjE2XCIsXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTZcIixcbiAgICAgICAgICAgICAgICAgIHZpZXdCb3g6IFwiMCAwIDE2IDE2XCIsXG4gICAgICAgICAgICAgICAgICBmaWxsOiBcIm5vbmVcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwicGF0aFwiLCB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBkOlxuICAgICAgICAgICAgICAgICAgICAgIFwiTTguODgzOTIgOC4wMDAwNEwxNS44MTY5IDEuMDY2OThDMTYuMDYxIDAuODIyODgyIDE2LjA2MSAwLjQyNzEzMyAxNS44MTY5IDAuMTgzMDdDMTUuNTcyOCAtMC4wNjA5OTIyIDE1LjE3NzEgLTAuMDYxMDIzNCAxNC45MzMgMC4xODMwN0w3Ljk5OTk4IDcuMTE2MTNMMS4wNjY5NyAwLjE4MzA3QzAuODIyODggLTAuMDYxMDIzNCAwLjQyNzEzMiAtMC4wNjEwMjM0IDAuMTgzMDcgMC4xODMwN0MtMC4wNjA5OTIgMC40MjcxNjQgLTAuMDYxMDIzMyAwLjgyMjkxNCAwLjE4MzA3IDEuMDY2OThMNy4xMTYwOCA4TDAuMTgzMDcgMTQuOTMzMUMtMC4wNjEwMjMzIDE1LjE3NzIgLTAuMDYxMDIzMyAxNS41NzI5IDAuMTgzMDcgMTUuODE3QzAuMzA1MTAxIDE1LjkzOSAwLjQ2NTA2OSAxNiAwLjYyNTAzNyAxNkMwLjc4NTAwNSAxNiAwLjk0NDk0MyAxNS45MzkgMS4wNjcgMTUuODE3TDcuOTk5OTggOC44ODM5NEwxNC45MzMgMTUuODE3QzE1LjA1NSAxNS45MzkgMTUuMjE1IDE2IDE1LjM3NSAxNkMxNS41MzQ5IDE2IDE1LjY5NDkgMTUuOTM5IDE1LjgxNjkgMTUuODE3QzE2LjA2MSAxNS41NzI5IDE2LjA2MSAxNS4xNzcxIDE1LjgxNjkgMTQuOTMzMUw4Ljg4MzkyIDguMDAwMDRaXCIsXG4gICAgICAgICAgICAgICAgICAgIGZpbGw6IFwiIzg2ODg4QVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF1cbiAgICAgICAgKVxuICAgICAgXSlcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJ0cmFuc2l0aW9uXCIsIHsgYXR0cnM6IHsgbmFtZTogXCJzbGlkZS1mYWRlc1wiIH0gfSwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9naW5fZm9ybVwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9naW5fYmxvY2tcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9nb3R5cGVcIiB9LCBbXG4gICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibG9nb3R5cGVcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogXCIvaW1hZ2VzL0NoYW1wc19sb2dvdHlwZS5zdmdcIiB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9naW5fdGl0bGVcIiB9LCBbXG4gICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgINCS0LLQtdC00LjRgtC1INGB0LLQvtC5INC90LjQutC90LXQudC8XFxuICAgICAgICAgICAgXCIpXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvZ2luX2lucHV0XCIgfSwgW1xuICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ubmlja25hbWUsXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJuaWNrbmFtZVwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiwgbmFtZTogXCJlbWFpbFwiLCByZXF1aXJlZDogXCJcIiB9LFxuICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5uaWNrbmFtZSB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF92bS5uaWNrbmFtZSA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLQm9C+0LPQuNC9IChOaWNrbmFtZSlcIildKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX3ZtLmVycm9yTWVzc2FnZSAhPT0gbnVsbFxuICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlcnJvclwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZXJyb3JNZXNzYWdlKSArXG4gICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzZW5kXCIsIG9uOiB7IGNsaWNrOiBfdm0uc2V0Tmlja25hbWUgfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgIEZpbmlzaCBSZWdpc3RyYXRpb25cXG4gICAgICAgICAgICBcIilcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2xvc2VkXCIsIG9uOiB7IGNsaWNrOiBfdm0uY2xvc2UgfSB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInN2Z1wiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTZcIixcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTZcIixcbiAgICAgICAgICAgICAgICB2aWV3Qm94OiBcIjAgMCAxNiAxNlwiLFxuICAgICAgICAgICAgICAgIGZpbGw6IFwibm9uZVwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwicGF0aFwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIGQ6XG4gICAgICAgICAgICAgICAgICAgIFwiTTguODgzOTIgOC4wMDAwNEwxNS44MTY5IDEuMDY2OThDMTYuMDYxIDAuODIyODgyIDE2LjA2MSAwLjQyNzEzMyAxNS44MTY5IDAuMTgzMDdDMTUuNTcyOCAtMC4wNjA5OTIyIDE1LjE3NzEgLTAuMDYxMDIzNCAxNC45MzMgMC4xODMwN0w3Ljk5OTk4IDcuMTE2MTNMMS4wNjY5NyAwLjE4MzA3QzAuODIyODggLTAuMDYxMDIzNCAwLjQyNzEzMiAtMC4wNjEwMjM0IDAuMTgzMDcgMC4xODMwN0MtMC4wNjA5OTIgMC40MjcxNjQgLTAuMDYxMDIzMyAwLjgyMjkxNCAwLjE4MzA3IDEuMDY2OThMNy4xMTYwOCA4TDAuMTgzMDcgMTQuOTMzMUMtMC4wNjEwMjMzIDE1LjE3NzIgLTAuMDYxMDIzMyAxNS41NzI5IDAuMTgzMDcgMTUuODE3QzAuMzA1MTAxIDE1LjkzOSAwLjQ2NTA2OSAxNiAwLjYyNTAzNyAxNkMwLjc4NTAwNSAxNiAwLjk0NDk0MyAxNS45MzkgMS4wNjcgMTUuODE3TDcuOTk5OTggOC44ODM5NEwxNC45MzMgMTUuODE3QzE1LjA1NSAxNS45MzkgMTUuMjE1IDE2IDE1LjM3NSAxNkMxNS41MzQ5IDE2IDE1LjY5NDkgMTUuOTM5IDE1LjgxNjkgMTUuODE3QzE2LjA2MSAxNS41NzI5IDE2LjA2MSAxNS4xNzcxIDE1LjgxNjkgMTQuOTMzMUw4Ljg4MzkyIDguMDAwMDRaXCIsXG4gICAgICAgICAgICAgICAgICBmaWxsOiBcIiM4Njg4OEFcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcInRyYW5zaXRpb25cIiwgeyBhdHRyczogeyBuYW1lOiBcInNsaWRlLWZhZGVzXCIgfSB9LCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2dpbl9mb3JtXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2dpbl9yZXFcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9naW5fYmxvY2tcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2dvdHlwZVwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibG9nb3R5cGVcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBcIi9pbWFnZXMvQ2hhbXBzX2xvZ290eXBlLnN2Z1wiIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvZ2luX3RpdGxlXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICDQoNC10LPQuNGB0YLRgNCw0YbQuNGPXFxuICAgICAgICAgICAgICAgIFwiKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2dpbl9pbnB1dFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmVtYWlsIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kZW1pdChcImlucHV0RW1haWxcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi0JDQtNGA0LXRgSDRjdC70LXQutGC0YDQvtC90L3QvtC5INC/0L7Rh9GC0YtcIildKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2dpbl9pbnB1dFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInBhc3N3b3JkXCIgfSxcbiAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5wYXNzd29yZCB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJGVtaXQoXCJpbnB1dFBhc3N3b3JkXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcItCf0LDRgNC+0LvRjFwiKV0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvZ2luX2NoZWNrXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbXG4gICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiY2hlY2tib3hcIiB9LFxuICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IGNoZWNrZWQ6IF92bS5jaGVjayB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnVwZGF0ZSgkZXZlbnQudGFyZ2V0LmNoZWNrZWQpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyBocmVmOiBcIi9ydS90ZXJtcy1vZi11c2VcIiwgdGFyZ2V0OiBcIl9ibGFua1wiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgIFwi0J7Qt9C90LDQutC+0LzQu9C10L0g0YEg0L/RgNCw0LLQuNC70LDQvNC4INC40YHQv9C+0LvRjNC30L7QstCw0L3QuNGPINGB0LXRgNCy0LjRgdCwIMKrQ2hhbXBzwrtcIlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic2VuZFwiLFxuICAgICAgICAgICAgICBzdHlsZTogeyBvcGFjaXR5OiBfdm0uY2hlY2sgPyBcIjFcIiA6IFwiLjVcIiB9LFxuICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmNoZWNrSXNFbWFpbFZhbGlkIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAg0JfQsNGA0LXQs9C40YHRgtGA0LjRgNC+0LLQsNGC0YzRgdGPXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLmVycm9yTWVzc2FnZSAhPT0gbnVsbFxuICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVycm9yXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZXJyb3JNZXNzYWdlKSArXG4gICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic3VidGV4dFwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcItCY0LvQuCDQstC+0LnQtNC40YLQtSDRgSDQv9C+0LzQvtGJ0YzRjlwiKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJhbHRlcm5hdGVcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBocmVmOiBfdm0uc3RlYW1Mb2dpbkxpbmsgfSB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHsgYXR0cnM6IHsgc3JjOiBcIi9pbWFnZXMvbG9naW5fc3RlYW0uc3ZnXCIgfSB9KVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGlua3NcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRlbWl0KFwic2V0U3RlcFwiLCBcImxvZ2luXCIpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLQktGF0L7QtCDQsiDQu9C40YfQvdGL0Lkg0LrQsNCx0LjQvdC10YJcIildXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNsb3NlZFwiLCBvbjogeyBjbGljazogX3ZtLmNsb3NlIH0gfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwic3ZnXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjE2XCIsXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTZcIixcbiAgICAgICAgICAgICAgICAgIHZpZXdCb3g6IFwiMCAwIDE2IDE2XCIsXG4gICAgICAgICAgICAgICAgICBmaWxsOiBcIm5vbmVcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwicGF0aFwiLCB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBkOlxuICAgICAgICAgICAgICAgICAgICAgIFwiTTguODgzOTIgOC4wMDAwNEwxNS44MTY5IDEuMDY2OThDMTYuMDYxIDAuODIyODgyIDE2LjA2MSAwLjQyNzEzMyAxNS44MTY5IDAuMTgzMDdDMTUuNTcyOCAtMC4wNjA5OTIyIDE1LjE3NzEgLTAuMDYxMDIzNCAxNC45MzMgMC4xODMwN0w3Ljk5OTk4IDcuMTE2MTNMMS4wNjY5NyAwLjE4MzA3QzAuODIyODggLTAuMDYxMDIzNCAwLjQyNzEzMiAtMC4wNjEwMjM0IDAuMTgzMDcgMC4xODMwN0MtMC4wNjA5OTIgMC40MjcxNjQgLTAuMDYxMDIzMyAwLjgyMjkxNCAwLjE4MzA3IDEuMDY2OThMNy4xMTYwOCA4TDAuMTgzMDcgMTQuOTMzMUMtMC4wNjEwMjMzIDE1LjE3NzIgLTAuMDYxMDIzMyAxNS41NzI5IDAuMTgzMDcgMTUuODE3QzAuMzA1MTAxIDE1LjkzOSAwLjQ2NTA2OSAxNiAwLjYyNTAzNyAxNkMwLjc4NTAwNSAxNiAwLjk0NDk0MyAxNS45MzkgMS4wNjcgMTUuODE3TDcuOTk5OTggOC44ODM5NEwxNC45MzMgMTUuODE3QzE1LjA1NSAxNS45MzkgMTUuMjE1IDE2IDE1LjM3NSAxNkMxNS41MzQ5IDE2IDE1LjY5NDkgMTUuOTM5IDE1LjgxNjkgMTUuODE3QzE2LjA2MSAxNS41NzI5IDE2LjA2MSAxNS4xNzcxIDE1LjgxNjkgMTQuOTMzMUw4Ljg4MzkyIDguMDAwMDRaXCIsXG4gICAgICAgICAgICAgICAgICAgIGZpbGw6IFwiIzg2ODg4QVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvZ2luX3JlcV9ibG9ja1wiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIml0ZW1cIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcItCi0YDQtdC90LXRgNGD0LnRgtC10YHRjCDQstC80LXRgdGC0LUg0YEg0LvRg9GH0YjQuNC80Lgg0LjQs9GA0L7QutCw0LzQuCDQsiDQstCw0YjQuNGFINC70Y7QsdC40LzRi9GFINC40LPRgNCw0YVcIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpdGVtXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgW192bS5fdihcItCf0L7RgdC70LXQtNC90LjQtSDQvdC+0LLQvtGB0YLQuCDQuCDRgdC+0LHRi9GC0LjRj1wiKV0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIml0ZW1cIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCBbX3ZtLl92KFwi0JLQtdC70LjQutC+0LvQtdC/0L3QvtC1INGB0L7QvtCx0YnQtdGB0YLQstC+XCIpXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaXRlbVwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIpLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtfdm0uX3YoXCLQotGA0LDQvdGB0LvRj9GG0LjQuCDQuCDRgNC10LfRg9C70YzRgtCw0YLRiyDQvNCw0YLRh9C10LlcIildKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpdGVtXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgW192bS5fdihcItCQ0L3QsNC70LjRgtC40LrQsCDQvtGCINC/0YDQvtGE0LXRgdGB0LjQvtC90LDQu9C+0LJcIildKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImdyaWRcIiB9LCBbXG4gICAgX2MoXCJhXCIsIHsgc3RhdGljQ2xhc3M6IFwiZ3JpZC1yb3dcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImRhdGFcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGl0bGVcIiB9LCBbXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnRlYW0ubmFtZSkgK1xuICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF92bS5fbSgwKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkYXRhXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRpdGxlXCIgfSwgW1xuICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgX3ZtLl9zKF92bS50ZWFtLnRhZykgK1xuICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF92bS5fbSgxKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkYXRhXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRpdGxlXCIgfSwgW1xuICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgX3ZtLl9zKF92bS50ZWFtLm1lbWJlcnMubGVuZ3RoKSArXG4gICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX3ZtLl9tKDIpXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImRhdGEgcHQtMlwiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJhXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuLW9yYW5nZSB0ZXh0LWxpZ2h0IHAtMiBwb2ludGVyXCIsXG4gICAgICAgICAgICBhdHRyczogeyBocmVmOiBfdm0uaHR0cC5nZXRUZWFtTGluayhfdm0udGVhbS5pZCkgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICDQn9C+0YHQvNC+0YLRgNC10YLRjFxcbiAgICAgICAgICAgIFwiKV1cbiAgICAgICAgKVxuICAgICAgXSlcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJib3R0b21cIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImRhdGVcIiB9LCBbX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLQndCw0LfQstCw0L3QuNC1XCIpXSldKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYm90dG9tXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkYXRlXCIgfSwgW19jKFwic3BhblwiLCBbX3ZtLl92KFwi0KLQtdCzXCIpXSldKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYm90dG9tXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkYXRlXCIgfSwgW19jKFwic3BhblwiLCBbX3ZtLl92KFwi0KPRh9Cw0YHQvdC40LrQvtCyXCIpXSldKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImV2ZW50c192aWV3XCIgfSwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb21wb25lbnQgdXBjb21pbmdfZXZlbnRzXCIgfSxcbiAgICAgICAgICBfdm0uX2woX3ZtLnRlYW1zLCBmdW5jdGlvbih0ZWFtLCBrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBfYyhcIm12cC1qb2luZWQtdGVhbVwiLCB7IGtleToga2V5LCBhdHRyczogeyB0ZWFtOiB0ZWFtIH0gfSlcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAxXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJoZWFkZXIgbXQtM1wiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsZnRcIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY2xhc3M6IHsgYWN0aXZlOiBfdm0uYWN0aXZlID09PSBcImNvbW1hbmRzXCIgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uYWN0aXZlID0gXCJjb21tYW5kc1wiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihcItCa0J7QnNCQ0J3QlNCrXCIpXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjbGFzczogeyBhY3RpdmU6IF92bS5hY3RpdmUgPT09IFwidG91cm5hbWVudHNcIiB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIF92bS5hY3RpdmUgPSBcInRvdXJuYW1lbnRzXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwi0KLQo9Cg0J3QmNCg0KtcIildXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNsYXNzOiB7IGFjdGl2ZTogX3ZtLmFjdGl2ZSA9PT0gXCJtYXRjaGVzXCIgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uYWN0aXZlID0gXCJtYXRjaGVzXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwi0JzQkNCi0KfQmFwiKV1cbiAgICAgICAgICApXG4gICAgICAgIF0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcIk12cFRlYW1zXCIpXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZCB3LTUwIG1yLTIgYm9yZGVyLXJhZGl1cy0wXCIgfSwgW1xuICAgIF92bS50ZWFtID09PSB1bmRlZmluZWRcbiAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLWJvZHlcIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImg1XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNhcmQtdGl0bGUgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLnRpdGxlKSArIFwiXFxuICAgICAgICAgICAgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJhZGdlIGJhZGdlLXdhcm5pbmcgYm9yZGVyLXJhZGl1cy0wXCIgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0udHlwZSkpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtdGV4dFwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5kZXNjcmlwdGlvbikgKyBcIlxcbiAgICAgICAgXCIpXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4tb3JhbmdlIHRleHQtbGlnaHQgcC0yIHBvaW50ZXJcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBcImRhdGEtdG9nZ2xlXCI6IFwibW9kYWxcIixcbiAgICAgICAgICAgICAgICBcImRhdGEtdGFyZ2V0XCI6IFwiI21ha2VDb21hbmRNb2RhbFwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kZW1pdChcInNldENhcGFjaXR5XCIsIF92bS5jYXBhY2l0eSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgINCh0L7Qt9C00LDRgtGMINC60L7QvNCw0L3QtNGDIFwiICtcbiAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0udHlwZSkgK1xuICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgIFwiXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApXG4gICAgICAgIF0pXG4gICAgICA6IF92bS5fZSgpLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX3ZtLnRlYW0gIT09IHVuZGVmaW5lZFxuICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtYm9keVwiIH0sIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiaDVcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC10aXRsZSBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBcIiArIF92bS5fcyhfdm0udGVhbS5uYW1lKSArIFwiXFxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJiYWRnZSBiYWRnZS13YXJuaW5nIGJvcmRlci1yYWRpdXMtMFwiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0udHlwZSkgKyBcIlxcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtdGV4dFwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiArIF92bS5fcyhfdm0udGVhbS5tZW1iZXJzLmxlbmd0aCkgKyBcIiDRg9GH0LDRgdC90LjQutC+0LJcIilcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0bi1vcmFuZ2UgdGV4dC1saWdodCBwLTIgcG9pbnRlclwiLFxuICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBfdm0uaHR0cC5nZXRUZWFtTGluayhfdm0udGVhbS5pZCkgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICDQn9C+0YHQvNC+0YLRgNC10YLRjFxcbiAgICAgICAgXCIpXVxuICAgICAgICAgIClcbiAgICAgICAgXSlcbiAgICAgIDogX3ZtLl9lKClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZ3JpZFwiIH0sIFtcbiAgICBfYyhcImFcIiwgeyBzdGF0aWNDbGFzczogXCJncmlkLXJvd1wiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9nb1wiIH0sIFtcbiAgICAgICAgX3ZtLm1lbWJlci5pbWFnZSAhPT0gbnVsbFxuICAgICAgICAgID8gX2MoXCJpbWdcIilcbiAgICAgICAgICA6IF9jKFwiaW1nXCIsIHsgYXR0cnM6IHsgc3JjOiBcIi9pbWFnZXMvbm9Mb2dvLnBuZ1wiIH0gfSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZGF0YVwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0aXRsZVwiIH0sIFtcbiAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ubWVtYmVyLm5pY2tuYW1lKSArXG4gICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX3ZtLl9tKDApXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImRhdGFcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGl0bGVcIiB9LCBbXG4gICAgICAgICAgX3ZtLmlzQ2FwdGFpblxuICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAg0JrQsNC/0LjRgtCw0L1cXG4gICAgICAgICAgICAgICAgXCIpXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICA6IF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICDQmNCz0YDQvtC6XFxuICAgICAgICAgICAgICAgIFwiKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX3ZtLl9tKDEpXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImRhdGFcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGl0bGVcIiB9LCBbXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IGhyZWY6IF92bS5nZXRTdGVhbUxpbmsoX3ZtLm1lbWJlci5zdGVhbSkgfSB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczogeyB3aWR0aDogXCIyMHB4XCIsIHNyYzogXCIvaW1hZ2VzL2xvZ2luX3N0ZWFtLnN2Z1wiIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF92bS5fbSgyKVxuICAgICAgXSlcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJib3R0b21cIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImRhdGVcIiB9LCBbX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLQndC40LpcIildKV0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJib3R0b21cIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImRhdGVcIiB9LCBbX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLQoNC+0LvRjFwiKV0pXSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJvdHRvbVwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZGF0ZVwiIH0sIFtfYyhcInNwYW5cIiwgW192bS5fdihcItCh0YLQuNC8XCIpXSldKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJoZWFkZXIgbXQtMyBkLWJsb2NrXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsZnRcIiB9LCBbXG4gICAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IGhyZWY6IF92bS5odHRwLmdldE12cExpbmsoKSB9IH0sIFtfdm0uX3YoXCLQndCw0LfQsNC0XCIpXSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZXZlbnRzX3ZpZXdcIiwgYXR0cnM6IHsgaWQ6IFwidGVhbU1lbWJlcnNcIiB9IH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXJcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbXBvbmVudCB1cGNvbWluZ19ldmVudHNcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJ1cGNvbWluZ19ldmVudHNcIiB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnRlYW0ubWVtYmVycywgZnVuY3Rpb24obWVtYmVyLCBrZXkpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0udGVhbS5oYXNPd25Qcm9wZXJ0eShcIm1lbWJlcnNcIilcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcIm12cC10ZWFtLW1lbWJlclwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1lbWJlcjogbWVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImlzLWNhcHRhaW5cIjogX3ZtLmNoZWNrTWVtYmVySXNDYXB0YWluKG1lbWJlcilcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3cgbXQtMlwiIH0sIFtcbiAgICAgICAgICAgIF92bS5pc0NyZWF0b3JcbiAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxmdFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiYVwiLCB7IG9uOiB7IGNsaWNrOiBfdm0uZGVsZXRlVGVhbSB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgINCj0LTQsNC70LjRgtGMINC60L7QvNCw0L3QtNGDXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuLW9yYW5nZSB0ZXh0LWxpZ2h0IHBvaW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLnNob3dBZGRNb2RhbCB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtcGx1c1wiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIsKgwqDQlNC+0LHQsNCy0LjRgtGMINGD0YfQsNGB0L3QuNC60L7QslxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgOiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxmdFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0bi1vcmFuZ2UgdGV4dC1saWdodCBwb2ludGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogX3ZtLmh0dHAudXNlckxlYXZlVGVhbUxpbmsoX3ZtLnRlYW1JZCkgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg0J/QvtC60LjQvdGD0YLRjCDQutC+0LzQsNC90LTRg1xcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJoZWFkZXJcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvdW5kXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgX2MoXCJpbWdcIiwgeyBhdHRyczogeyBzcmM6IFwiL2ltYWdlcy9sYW1wLnN2Z1wiLCBhbHQ6IFwibGFtcFwiIH0gfSlcbiAgICAgICAgXSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGl0bGVcIiB9LCBbXG4gICAgICAgIF92bS5fdihcbiAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0KPRh9Cw0YHRgtC90LjQutC4XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udFwiIH0sIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lciBjb21tYW5kcyBwLTAgbXQtM1wiIH0sIFtcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInctNzUgZC1mbGV4XCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwibXZwLXRlYW1cIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgdGl0bGU6IFwi0J3QsNGB0YLRgNC+0LXQvSDQuNCz0YDQsNGC0Ywg0YHQtdGA0YzQtdC30L3Qvj9cIixcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICAgICAgXCLQodC+0LfQtNCw0Lkg0YHQstC+0Y4g0LrQvtC80LDQvdC00YMg0LTQu9GPINGC0YPRgNC40LrQvtCyIDV2NSDQuCDQstGA0YvQstCw0LnRgdGPINCyINC60LjQsdC10YDRgdC/0L7RgNGCXCIsXG4gICAgICAgICAgICAgIHR5cGU6IFwiNXg1XCIsXG4gICAgICAgICAgICAgIGNhcGFjaXR5OiBcIjVcIixcbiAgICAgICAgICAgICAgdGVhbXM6IF92bS50ZWFtc1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uOiB7IHNldENhcGFjaXR5OiBfdm0uc2V0Q2FwYWNpdHkgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJtdnAtdGVhbVwiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICB0aXRsZTogXCLQndCw0L/QsNGA0L3QuNC60LhcIixcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICAgICAgXCLQndC10YIg0L/QvtGB0YLQvtGP0L3QvdC+0Lkg0LrQvtC80LDQvdC00Ys/INCf0L7Qt9C+0LLQuCDQtNGA0YPQs9CwINC4INCy0YvQvdC+0YHQuNGC0LUg0YHQvtC/0LXRgNC90LjQutC+0LIg0LLQvNC10YHRgtC1XCIsXG4gICAgICAgICAgICAgIHR5cGU6IFwiMngyXCIsXG4gICAgICAgICAgICAgIGNhcGFjaXR5OiBcIjJcIixcbiAgICAgICAgICAgICAgdGVhbXM6IF92bS50ZWFtc1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uOiB7IHNldENhcGFjaXR5OiBfdm0uc2V0Q2FwYWNpdHkgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJtb2RhbCBmYWRlXCIsXG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIGlkOiBcIm1ha2VDb21hbmRNb2RhbFwiLFxuICAgICAgICAgICAgdGFiaW5kZXg6IFwiLTFcIixcbiAgICAgICAgICAgIFwiYXJpYS1sYWJlbGxlZGJ5XCI6IFwiZXhhbXBsZU1vZGFsTGFiZWxcIixcbiAgICAgICAgICAgIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLWRpYWxvZ1wiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtY29udGVudCBib3JkZXItcmFkaXVzLTBcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtb2RhbC1ib2R5XCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fbSgxKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihcItCd0LDQt9Cy0LDQvdC40LUg0LrQvtC80LDQvdC00YtcIildKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5jb21tYW5kLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImNvbW1hbmQubmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2wgYm9yZGVyLXJhZGl1cy0wXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uY29tbWFuZC5uYW1lIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmNvbW1hbmQsIFwibmFtZVwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgIV92bS5tZXNzYWdlcy5lcnJvci5oYXNPd25Qcm9wZXJ0eShcIm5hbWVcIilcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNtYWxsXCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS10ZXh0IHRleHQtbXV0ZWRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQnNC+0LbQvdC+INC70LDRgtC40L3RgdC60LjQtSDQsdGD0LrQstGLINC4INGG0LjRhNGA0YtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5tZXNzYWdlcy5lcnJvci5oYXNPd25Qcm9wZXJ0eShcIm5hbWVcIilcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNtYWxsXCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ubWVzc2FnZXMuZXJyb3IubmFtZVswXSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwi0KLQtdCzINC60L7QvNCw0L3QtNGLXCIpXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uY29tbWFuZC50YWcsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImNvbW1hbmQudGFnXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbCBib3JkZXItcmFkaXVzLTAgdy01MFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmNvbW1hbmQudGFnIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmNvbW1hbmQsIFwidGFnXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAhX3ZtLm1lc3NhZ2VzLmVycm9yLmhhc093blByb3BlcnR5KFwidGFnXCIpXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJzbWFsbFwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tdGV4dCB0ZXh0LW11dGVkXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0JzQsNC60YHQuNC80YPQvCA2INGB0LjQvNCy0L7Qu9C+0LJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5tZXNzYWdlcy5lcnJvci5oYXNPd25Qcm9wZXJ0eShcInRhZ1wiKVxuICAgICAgICAgICAgICAgICAgICA/IF9jKFwic21hbGxcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5tZXNzYWdlcy5lcnJvci50YWdbMF0pICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5tZXNzYWdlcy5zdWNjZXNzICE9PSBudWxsXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1zdWNjZXNzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ubWVzc2FnZXMuc3VjY2VzcykgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtZm9vdGVyIGp1c3RpZnktY29udGVudC1jZW50ZXJcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJidG4tb3JhbmdlIHRleHQtbGlnaHQgcC0yIHRleHQtY2VudGVyIHBvaW50ZXIgdy0xMDBcIixcbiAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmNyZWF0ZVRlYW0gfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi0KHQvtC30LTQsNGC0Ywg0LrQvtC80LDQvdC00YNcIildXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJidG4tZ3JleSBwb2ludGVyIHRleHQtY2VudGVyIHRleHQtbGlnaHQgYm9yZGVyLXJhZGl1cy0wIHAtMiB3LTc1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJkYXRhLWRpc21pc3NcIjogXCJtb2RhbFwiLCBcImFyaWEtbGFiZWxcIjogXCJDbG9zZVwiIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcItCe0YLQvNC10L3QuNGC0YxcIildXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCIxMjNcIiB9LCBbX2MoXCJtdnAtam9pbmVkLXRlYW1zXCIpXSwgMSlcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtb2RhbC1oZWFkZXJcIiB9LCBbXG4gICAgICBfYyhcbiAgICAgICAgXCJoNVwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLXRpdGxlXCIsIGF0dHJzOiB7IGlkOiBcImV4YW1wbGVNb2RhbExhYmVsXCIgfSB9LFxuICAgICAgICBbX3ZtLl92KFwi0KHQvtC30LTQsNGC0Ywg0LrQvtC80LDQvdC00YNcIildXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImFcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNsb3NlXCIsXG4gICAgICAgICAgYXR0cnM6IHsgXCJkYXRhLWRpc21pc3NcIjogXCJtb2RhbFwiLCBcImFyaWEtbGFiZWxcIjogXCJDbG9zZVwiIH1cbiAgICAgICAgfSxcbiAgICAgICAgW19jKFwic3BhblwiLCB7IGF0dHJzOiB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfSB9LCBbX3ZtLl92KFwiw5dcIildKV1cbiAgICAgIClcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHRcIiB9LCBbXG4gICAgICBfYyhcInBcIiwgW1xuICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCf0YDQuNC00YPQvNCw0Lkg0L3QsNC30LLQsNC90LjQtSAo0YHQvNC+0LbQtdGI0Ywg0L/QvtC80LXQvdGP0YLRjCDQv9C+0YLQvtC8KVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICApXG4gICAgICBdKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiZXZlbnRzX3ZpZXdcIiwgYXR0cnM6IHsgaWQ6IFwidGVhbU1lbWJlcnNcIiB9IH0sXG4gICAgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXJcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY29tcG9uZW50IHVwY29taW5nX2V2ZW50c1wiLFxuICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJ1cGNvbWluZ19ldmVudHNcIiB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImhlYWRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnRlYW0ubmFtZSkgK1xuICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0uX2woX3ZtLnRlYW0ubWVtYmVycywgZnVuY3Rpb24obWVtYmVyLCBrZXkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnRlYW0uaGFzT3duUHJvcGVydHkoXCJtZW1iZXJzXCIpXG4gICAgICAgICAgICAgICAgICA/IF9jKFwibXZwLXRlYW0tbWVtYmVyXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVtYmVyOiBtZW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImlzLWNhcHRhaW5cIjogX3ZtLmNoZWNrTWVtYmVySXNDYXB0YWluKG1lbWJlcilcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMlxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF92bS5pc0F1dGhvcml6ZSAmJiBfdm0uaXNGcmVlUGxhY2VcbiAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93IG10LTNcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGZ0XCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0bi1vcmFuZ2UgdGV4dC1saWdodCBwb2ludGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uam9pblRlYW0gfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLXBsdXNcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiwqDCoNCf0YDQuNGB0L7QtdC00LXQvdC40YLRgdGPXFxuICAgICAgICAgICAgICAgIFwiKVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJsb2dpbi1tb2RhbFwiLCB7IGF0dHJzOiB7IHNob3c6ICFfdm0uaXNBdXRob3JpemUgfSB9KVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvdW5kXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICBfYyhcImltZ1wiLCB7IGF0dHJzOiB7IHNyYzogXCIvaW1hZ2VzL2xhbXAuc3ZnXCIsIGFsdDogXCJsYW1wXCIgfSB9KVxuICAgICAgXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lciBwLTAgbS0wXCIgfSxcbiAgICBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lciB3aW5kb3ctaGVpZ2h0LTgwIHAtMCBtLTBcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgIFwicm93IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciB3LTEwMCBoLTEwMFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBmbGV4LWNvbHVtblwiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG1iLTNcIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidG4tb3JhbmdlIHRleHQtbGlnaHQgcC0zIHBsLTUgcHItNSBmb250LXNpemUtMjMgcG9pbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5zaG93TG9naW5Nb2RhbCB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiSm9pbiB0aGUgR2FtZVwiKV1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfdm0uX20oMSlcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF1cbiAgICAgICAgKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgIFwicm93IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciB3LTEwMCBoLTEwMFwiXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4tb3JhbmdlIHRleHQtbGlnaHQgcC0yIHBsLTMgcHItMyBwb2ludGVyXCIsXG4gICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uc2hvd0xvZ2luTW9kYWwgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCJKb2luIHRoZSBHYW1lXCIpXVxuICAgICAgICAgIClcbiAgICAgICAgXVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImxvZ2luLW1vZGFsXCIsIHtcbiAgICAgICAgcmVmOiBcImxvZ2luTW9kYWxcIixcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICByZWRpcmVjdDogX3ZtLmxvZ2luUmVkaXJlY3QsXG4gICAgICAgICAgc2hvdzogX3ZtLnNob3csXG4gICAgICAgICAgXCJzaG93LWZpcnN0XCI6IFwicmVnaXN0cmF0aW9uXCJcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3LTEwMCBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiIH0sIFtcbiAgICAgIF9jKFwic3Ryb25nXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1saWdodCBmb250LXNpemUtMjNcIiB9LCBbXG4gICAgICAgIF92bS5fdihcIldoYXQgd2Ugb2ZmZXJcIilcbiAgICAgIF0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3LTEwMCBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiIH0sIFtcbiAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtbGlnaHQgdy01MCBmb250LXNpemUtMThcIiB9LCBbXG4gICAgICAgIF92bS5fdihcbiAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LlxcbiAgICAgICAgICAgICAgICAgICAgICAgIEFkIGNvbnNlcXV1bnR1ciBjdWxwYSBjdXBpZGl0YXRlIGRlbGVuaXRpIGRpY3RhIGRpZ25pc3NpbW9zLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3RpbmN0aW8gZG9sb3IgZG9sb3JlcyBoaWMgaXBzYSBpdGFxdWUgbGF1ZGFudGl1bSBtb2xlc3RpYXMsXFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9sbGl0aWEgbm9zdHJ1bSwgcGVyZmVyZW5kaXMgcHJvdmlkZW50IHF1b3Mgc2FwaWVudGUgdmVybyFcXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwibmF2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1sZyBuYXZiYXItbGlnaHQgYmctbGlnaHQgbmF2YmFyLW12cFwiIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYXZiYXItdG9nZ2xlciBib3JkZXItbm9uZVwiLFxuICAgICAgICAgIGNsYXNzOiB7IGNvbGxhcHNlZDogIV92bS5zaG93IH0sXG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICBcImRhdGEtdG9nZ2xlXCI6IFwiY29sbGFwc2VcIixcbiAgICAgICAgICAgIFwiZGF0YS10YXJnZXRcIjogXCIjbmF2YmFyU3VwcG9ydGVkQ29udGVudFwiLFxuICAgICAgICAgICAgXCJhcmlhLWNvbnRyb2xzXCI6IFwibmF2YmFyU3VwcG9ydGVkQ29udGVudFwiLFxuICAgICAgICAgICAgXCJhcmlhLWV4cGFuZGVkXCI6IFwiZmFsc2VcIixcbiAgICAgICAgICAgIFwiYXJpYS1sYWJlbFwiOiBcIlRvZ2dsZSBuYXZpZ2F0aW9uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInNwYW5cIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibmF2YmFyLXRvZ2dsZXItaWNvblwiLFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIF92bS5zaG93ID0gIV92bS5zaG93XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwibmF2YmFyLWNvbGxhcHNlIGNvbGxhcHNlXCIsXG4gICAgICAgICAgY2xhc3M6IHsgc2hvdzogX3ZtLnNob3cgfSxcbiAgICAgICAgICBhdHRyczogeyBpZDogXCJuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCIgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInVsXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5hdmJhci1uYXYgbXItYXV0byBkLWZsZXggdy0xMDAganVzdGlmeS1jb250ZW50LWVuZFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAhX3ZtLmlzQXV0aG9yaXplXG4gICAgICAgICAgICAgICAgPyBfYyhcImxpXCIsIHsgc3RhdGljQ2xhc3M6IFwibmF2LWl0ZW1cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5hdi1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBcIiNcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5zaG93TG9naW5Gb3JtIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgINCX0LDRgNC10LPQtdGB0YLRgNC40YDQvtCy0LDRgtGMINC/0YDQvtGE0LjQu9GMXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLl9tKDEpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0uaXNBdXRob3JpemVcbiAgICAgICAgICAgICAgICA/IF9jKFwibGlcIiwgeyBzdGF0aWNDbGFzczogXCJuYXYtaXRlbVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibmF2LWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IF92bS5odHRwLmdldFByb2ZpbGVMaW5rKCkgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgTXkgR2FtaW5nIFByb2ZpbGVcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgICAgICAgXVxuICAgICAgKVxuICAgIF1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJsaVwiLCB7IHN0YXRpY0NsYXNzOiBcIm5hdi1pdGVtXCIgfSwgW1xuICAgICAgX2MoXCJhXCIsIHsgc3RhdGljQ2xhc3M6IFwibmF2LWxpbmtcIiwgYXR0cnM6IHsgaHJlZjogXCIjXCIgfSB9LCBbXG4gICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgSGVscFxcbiAgICAgICAgICAgICAgICBcIilcbiAgICAgIF0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJsaVwiLCB7IHN0YXRpY0NsYXNzOiBcIm5hdi1pdGVtXCIgfSwgW1xuICAgICAgX2MoXCJhXCIsIHsgc3RhdGljQ2xhc3M6IFwibmF2LWxpbmtcIiwgYXR0cnM6IHsgaHJlZjogXCIjXCIgfSB9LCBbXG4gICAgICAgIF92bS5fdihcbiAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAg0J7RgtC/0YDQsNCy0LjRgtGMINC/0LjRgdGM0LzQviDQv9C+0LTQtNC10YDQttC60LVcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgKVxuICAgICAgXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXJcIiB9LCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbXBvbmVudCB1cGNvbWluZ19ldmVudHNcIixcbiAgICAgICAgICBhdHRyczogeyBpZDogXCJ1cGNvbWluZ19ldmVudHNcIiB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImhlYWRlclwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgINCi0YPRgNC90LjRgNGLIFwiICtcbiAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZ2FtZSkgK1xuICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS5sb2FkXG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgIFwibG9hZCB3LTEwMCBoLTEwMCBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXJcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW19jKFwibG9hZFwiKV0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLl9sKF92bS50b3VybmFtZW50cywgZnVuY3Rpb24odG91cm5hbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuICFfdm0ubG9hZFxuICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZ3JpZFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImdyaWQtcm93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogXCIvcnUvbXZwL3RvdXJuYW1lbnQvXCIgKyB0b3VybmFtZW50LmlkIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9nb1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHsgYXR0cnM6IHsgc3JjOiB0b3VybmFtZW50LmxvZ28gfSB9KVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkYXRhXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0aXRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3ModG91cm5hbWVudC5uYW1lKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICNcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyh0b3VybmFtZW50Lm51bWJlcilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX20oMSwgdHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZGF0YVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyh0b3VybmFtZW50LmRhdGUpKV0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX20oMiwgdHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZGF0YVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyh0b3VybmFtZW50Lm1vZGUpKV0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX20oMywgdHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZGF0YVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvdXJuYW1lbnQuYWNjZXNzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtbG9jay1vcGVuXCIgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS1sb2NrXCIgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbSg0LCB0cnVlKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkYXRhXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0aXRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKHRvdXJuYW1lbnQucHJpemUpKV0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX20oNSwgdHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDJcbiAgICAgIClcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3VuZFwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgX2MoXCJpbWdcIiwgeyBhdHRyczogeyBzcmM6IFwiL2ltYWdlcy9sYW1wLnN2Z1wiLCBhbHQ6IFwibGFtcFwiIH0gfSlcbiAgICAgIF0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJib3R0b21cIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImRhdGVcIiB9LCBbX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLQndCw0LfQstCw0L3QuNC1XCIpXSldKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYm90dG9tXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkYXRlXCIgfSwgW19jKFwic3BhblwiLCBbX3ZtLl92KFwi0JTQsNGC0LBcIildKV0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJib3R0b21cIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImRhdGVcIiB9LCBbX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLQoNC10LbQuNC8XCIpXSldKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYm90dG9tXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkYXRlXCIgfSwgW19jKFwic3BhblwiLCBbX3ZtLl92KFwi0JTQvtGB0YLRg9C/XCIpXSldKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYm90dG9tXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkYXRlXCIgfSwgW19jKFwic3BhblwiLCBbX3ZtLl92KFwi0J/RgNC40LdcIildKV0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwic291cmNlUm9vdCI6IiJ9
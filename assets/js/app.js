/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import '../css/app.css';
import MvpPage from "./components/mvp/cabinet/MvpPage";
// Need jQuery? Install it with "yarn add jquery", then uncomment to import it.
// import $ from 'jquery';

Vue.component('mvp-page', MvpPage)

new Vue({
    el: '#app',
})

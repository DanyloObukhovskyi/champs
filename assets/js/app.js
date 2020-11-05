/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import '../css/app.css';
import '../css/animations.css';

import Header from './layouts/header';
import LiveMatches from "./components/matches/LiveMatches";
import VideoSlider from "./components/video-slider/VideoSlider";
import NewsHome from "./components/news/NewsHome";

window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

const token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    window.axios._csrf_token = token.content;
} else {
    console.error('CSRF token not found');
}
window.header = Header;

Vue.component('live-matches', LiveMatches)
Vue.component('video-slider', VideoSlider)
Vue.component('news-home', NewsHome)

// Need jQuery? Install it with "yarn add jquery", then uncomment to import it.
// import $ from 'jquery';

new Vue({
    el: '#app',
    provide: {
        axios,
        header
    }
})
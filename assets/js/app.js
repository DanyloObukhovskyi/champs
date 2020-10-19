/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import '../css/app.css';
import MvpService from "./components/mvp/services/MvpService.js";
import config from "./config";
import MvpPage from "./components/mvp/cabinet/MvpPage";
import MvpTeamPage from "./components/mvp/cabinet/MvpTeamPage";
import MvpInviteTeamPage from "./components/mvp/invite/MvpInviteTeamPage";
import MvpPageHeader from "./components/mvp/tournaments/MvpPageHeader";
import LoginModal from "./components/LoginModal";
import MvpMain from "./components/mvp/tournaments/MvpMain";
import MvpTournamentsList from "./components/mvp/tournaments/MvpTournamentsList";

window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

let token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    window.axios._csrf_token = token.content;
} else {
    console.error('CSRF token not found');
}

// Need jQuery? Install it with "yarn add jquery", then uncomment to import it.
// import $ from 'jquery';

Vue.component('mvp-main', MvpMain)
Vue.component('mvp-page', MvpPage)
Vue.component('mvp-team-page', MvpTeamPage)
Vue.component('mvp-invite-page', MvpInviteTeamPage)
Vue.component('mvp-header', MvpPageHeader)
Vue.component('mvp-tournaments-list', MvpTournamentsList)

Vue.component('login-form', LoginModal)

new Vue({
    el: '#app',
    provide: {
        http: new MvpService(axios),
        axios,
        config,
        header
    }
})

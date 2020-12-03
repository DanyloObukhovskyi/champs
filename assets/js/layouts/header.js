import NavBar from "../components/header/NavBar";
import LoginModal from "../components/LoginModal";
import SubNavbar from "../components/header/SubNavbar";

Vue.component('nav-bar', NavBar);
Vue.component('sub-nav-bar', SubNavbar);
Vue.component('login-modal', LoginModal);

const axios = require('axios');
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

const token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    axios._csrf_token = token.content;
} else {
    console.error('CSRF token not found');
}

export default new Vue({
    el: '#header',
    data: {
        show: false,
        isPageStart: true,
        game: 'cs',
    },
    methods: {
        showLoginModal() {
            this.show = true;
        },
        setGame(game){
            this.game = game;
        }
    },
    mounted() {
        const self = this;

        document.onscroll = function () {
            self.isPageStart = window.pageYOffset === 0;
        }
    }
})
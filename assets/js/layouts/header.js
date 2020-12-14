import NavBar from "../components/header/NavBar";
import LoginModal from "../components/LoginModal";
import SubNavbar from "../components/header/SubNavbar";

Vue.component('nav-bar', NavBar);
Vue.component('sub-nav-bar', SubNavbar);
Vue.component('login-modal', LoginModal);

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
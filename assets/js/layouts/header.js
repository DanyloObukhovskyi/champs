import NavBar from "../components/header/NavBar";
import LoginModal from "../components/LoginModal";
import SubNavbar from "../components/header/SubNavbar";
import Service from "../services/Service";

Vue.component('nav-bar', NavBar);
Vue.component('sub-nav-bar', SubNavbar);
Vue.component('login-modal', LoginModal);

export default new Vue({
    el: '#header',
    data: {
        show: false,
        isPageStart: true,
        game: null,
        games: []
    },
    methods: {
        showLoginModal() {
            this.show = true;
        },
        setGame(game){
            this.game = game;
        },
        getGames() {
            const service = new Service();

            service.getGames()
                .then(games => {
                    this.games = games;

                    this.game = this.games[0].code
                })
        }
    },
    mounted() {
        const self = this;

        document.onscroll = function () {
            self.isPageStart = window.pageYOffset === 0;
        }
        this.getGames();
    }
})
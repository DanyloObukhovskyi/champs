<template>
    <header>
        <nav-bar
                :social="social"
                :is-page-start="isPageStart"
                @show="showLoginModal"
                :router="router"
                :is-trainer="isTrainer"
                :is-authorize="isAuthorize">
        </nav-bar>
        <sub-nav-bar @setgame="setGame" :games="games">
        </sub-nav-bar>
        <login-modal
                :show-first="router == 'mvp' ? 'registration': 'login'"
                :show="showLogin">
        </login-modal>
    </header>
</template>

<script>
    import { mapGetters } from 'vuex';

    import NavBar from "./NavBar";
    import SubNavbar from "./SubNavbar";
    import LoginModal from "../LoginModal";
    import Service from "../../services/Service";

    Vue.component('nav-bar', NavBar);
    Vue.component('sub-nav-bar', SubNavbar);
    Vue.component('login-modal', LoginModal);

    const service = new Service();
    export default {
        name: "Header",
        props: [
            'social',
            'isTrainer',
            'isAuthorize',
            'router'
        ],
        data() {
            return {
                isPageStart: true,
            }
        },
        computed: {
            ...mapGetters([
                'games',
                'game',
                'user',
                'showLogin'
            ])
        },
        methods: {
            showLoginModal() {
                this.$store.dispatch('showLogin');
            },
            setGame(game) {
                this.$store.commit('setGame', game)
            },
            getGames() {
                service.getGames()
                    .then(games => {
                        this.$store.commit('setGames', games)
                        this.$store.commit('setGame', games[0].code)
                    })
            },
            getAuthUser() {
                this.$store.commit('setLoadUser', true);
                this.$store.dispatch('getAuthUser');
            }
        },
        mounted() {
            const self = this;

            document.onscroll = function () {
                self.isPageStart = window.pageYOffset === 0;
            }
            this.getGames();
            this.getAuthUser();
        }
    }
</script>
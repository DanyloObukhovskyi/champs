<template>
    <header>
        <div v-if="isMobile" style="position: fixed; width: 100%; height: calc(100% - (100% - 88px) ); z-index: 1030">
            <NavBarMobile
                    :social="social"
                    :is-page-start="isPageStart"
                    @show="showLoginModal"
                    :router="router"
                    :is-trainer="isTrainer"
                    :is-authorize="isAuthorize">
            </NavBarMobile>

            <SubNavbarMobile @setgame="setGame" :games="games"></SubNavbarMobile>
        </div>
<!--        <sub-nav-bar @setgame="setGame" :games="[]">-->
<!--        </sub-nav-bar>-->
        <div v-else>
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
        </div>

        <login-modal
                :token="token"
                :show-first="router === 'mvp' || token ? 'registration': 'login'"
                :isMobile="isMobile"
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
    import NavBarMobile from "./NavBarMobile";
    import SubNavbarMobile from "./SubNavbarMobile";

    Vue.component('nav-bar', NavBar);
    Vue.component('sub-nav-bar', SubNavbar);
    Vue.component('login-modal', LoginModal);

    const service = new Service();
    export default {
        name: "Header",
      components: {SubNavbarMobile, NavBarMobile},
      props: [
            'social',
            'isTrainer',
            'isAuthorize',
            'router',
            'token'
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
                'showLogin',
                'isMobile'
            ])
        },
        methods: {
            showLoginModal() {
                if (this.user === null) {
                    this.$store.dispatch('showLogin');
                }
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
            if (this.token !== undefined && this.token !== null && this.token !== '') {
                this.showLoginModal();
            }
            this.getGames();
            this.getAuthUser();
        }
    }
</script>
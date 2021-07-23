<template>
    <nav class="sub-nav fixed-top align-items-center d-flex justify-content-between"
         :class="isPageStart ? 'ml-8 mr-8 pl-7': 'pl-10 pl-8_5 top-3'">
        <div class="d-flex">
            <div class="theme-toggle d-flex align-items-center">
                <i class="fas fa-sun sun"></i>
                <div class="toggler" :class="{active: theme === 'dark'}" @click="toggleTheme">
                </div>
                <i class="fas fa-moon moon"></i>
            </div>
            <div class="timezone">
                <i class="far fa-clock"></i>
                {{ user !== null && user.gmt !== null ? user.gmt : 'GMT+3' }}
            </div>
            <div class="games d-flex">
                <div class="cs d-flex align-items-center" v-for="game in games"
                     v-if="game.active"
                     @click="setGame(game.code)">
                    <a :href="'/ru/' + game.code">
                        <img :src="`/uploads/games/${game.sidebarIcon}`">
                        {{ game.name }}
                    </a>
                </div>
            </div>
        </div>
        <div class="help d-flex">
            <a href="https://discord.gg/rakSKuE" target="_blank">
                <svg class="discord" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                     aria-hidden="true"
                     focusable="false"
                     style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);"
                     preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32">
                    <path d="M12.656 4.906L11.875 5s-3.504.383-6.063 2.438h-.03l-.032.03c-.574.528-.824 1.177-1.219 2.126a30.69 30.69 0 0 0-1.187 3.5C2.602 15.777 2 19.027 2 22v.25l.125.25c.926 1.625 2.57 2.66 4.094 3.375c1.523.715 2.84 1.094 3.75 1.125l.594.031l.312-.531l1.094-1.938c1.16.262 2.496.438 4.031.438c1.535 0 2.871-.176 4.031-.438l1.094 1.938l.313.531l.593-.031c.91-.031 2.227-.41 3.75-1.125c1.524-.715 3.168-1.75 4.094-3.375l.125-.25V22c0-2.973-.602-6.223-1.344-8.906a30.69 30.69 0 0 0-1.187-3.5c-.395-.95-.645-1.598-1.219-2.125l-.031-.032h-.032C23.63 5.383 20.125 5 20.125 5l-.781-.094l-.282.719s-.289.73-.468 1.563A20.095 20.095 0 0 0 16 7c-.535 0-1.46.035-2.594.188c-.18-.833-.469-1.563-.469-1.563zm-1.375 2.282c.043.14.086.261.125.375c-1.293.32-2.672.808-3.937 1.593l1.062 1.688C11.125 9.234 14.851 9 16 9c1.148 0 4.875.234 7.469 1.844l1.062-1.688c-1.265-.785-2.644-1.273-3.937-1.594c.039-.113.082-.234.125-.375c.933.188 2.715.618 4.187 1.782c-.008.004.375.582.719 1.406c.352.848.742 1.977 1.094 3.25c.676 2.441 1.207 5.414 1.25 8.031c-.63.961-1.797 1.828-3.032 2.407a9.744 9.744 0 0 1-2.437.78L22 24c.297-.11.59-.23.844-.344c1.539-.676 2.375-1.406 2.375-1.406l-1.313-1.5s-.562.516-1.875 1.094C20.72 22.422 18.715 23 16 23s-4.719-.578-6.031-1.156c-1.313-.578-1.875-1.094-1.875-1.094l-1.313 1.5s.836.73 2.375 1.406c.254.114.547.235.844.344l-.5.844a9.744 9.744 0 0 1-2.438-.782c-1.234-.578-2.402-1.445-3.03-2.406c.042-2.617.573-5.59 1.25-8.031a28.663 28.663 0 0 1 1.093-3.25c.344-.824.727-1.402.719-1.406c1.472-1.164 3.254-1.594 4.187-1.781zM12.5 14c-.773 0-1.457.441-1.875 1c-.418.559-.625 1.246-.625 2s.207 1.441.625 2c.418.559 1.102 1 1.875 1c.773 0 1.457-.441 1.875-1c.418-.559.625-1.246.625-2s-.207-1.441-.625-2c-.418-.559-1.102-1-1.875-1zm7 0c-.773 0-1.457.441-1.875 1c-.418.559-.625 1.246-.625 2s.207 1.441.625 2c.418.559 1.102 1 1.875 1c.773 0 1.457-.441 1.875-1c.418-.559.625-1.246.625-2s-.207-1.441-.625-2c-.418-.559-1.102-1-1.875-1zm-7 2c.055 0 .125.02.25.188c.125.167.25.46.25.812c0 .352-.125.645-.25.813c-.125.167-.195.187-.25.187c-.055 0-.125-.02-.25-.188A1.401 1.401 0 0 1 12 17c0-.352.125-.645.25-.813c.125-.167.195-.187.25-.187zm7 0c.055 0 .125.02.25.188c.125.167.25.46.25.812c0 .352-.125.645-.25.813c-.125.167-.195.187-.25.187c-.055 0-.125-.02-.25-.188A1.401 1.401 0 0 1 19 17c0-.352.125-.645.25-.813c.125-.167.195-.187.25-.187z"
                          fill="black"/>
                    <rect x="0" y="0" width="32" height="32"/>
                </svg>
            </a>
            <a href="">
                <i class="far fa-question-circle zendesk"></i>
            </a>
            <a href="mailto:support@champs.pro" target="_blank">
                <i class="fas fa-envelope letter"></i>
            </a>
        </div>
    </nav>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    name: "SubNavbar",
    props: ['games'],
    data() {
        return {
            theme: null,
        }
    },
    computed: {
        ...mapGetters([
            'user'
        ]),
        isPageStart() {
            return this.$parent.isPageStart;
        }
    },
    methods: {
        setGame(game) {
            this.$emit('setgame', game);
        },
        setTheme(themeName) {
            localStorage.setItem('theme', themeName);
            document.documentElement.className = themeName;
        },
        toggleTheme() {
            if (this.theme === 'dark') {
                this.setTheme('light');
            } else {
                this.setTheme('dark');
            }
            this.theme = localStorage.getItem('theme');
        },
        setDefaultTheme() {
            if (localStorage.getItem('theme') === null) {
                this.setTheme('light');
            } else {
                this.setTheme(localStorage.getItem('theme'));
            }
            this.theme = localStorage.getItem('theme');
        },
    },
    mounted() {
        this.setDefaultTheme()
    }
}
</script>

<style scoped>
.sub-nav {
    z-index: 5;
    top: 3.8vw;
    background: white;
    height: 2.7vw;
    transition: all .3s ease-in-out;
}

.dark .sub-nav {
    background: #26292c;
}

.dark .theme-toggle .toggler {
    border: 2px solid #2d3135;
}

.theme-toggle .toggler {
    padding: .25vw;
    height: 1.6vw;
    width: 2.5vw;
    border-radius: 99px;
    cursor: pointer;
    font-weight: 400;
    vertical-align: middle;
    border: 2px solid #e5e5e5;
    transition: background-color .4s ease, border-color .4s ease, padding-left .4s ease;
    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCAxIDEiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPgo8bGluZWFyR3JhZGllbnQgaWQ9InBvZGxvemhrYSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIwJSIgeTE9IjUwJSIgeDI9IjEwMCUiIHkyPSI1MCUiPgo8c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMzYzQxNDYiIHN0b3Atb3BhY2l0eT0iMSIgLz4KPHN0b3Agb2Zmc2V0PSIyNS40Mzk0NTMlIiBzdG9wLWNvbG9yPSIjM2EzZjQ0IiBzdG9wLW9wYWNpdHk9IjEiIC8+CjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzM1MzkzZSIgc3RvcC1vcGFjaXR5PSIwIiAvPgo8L2xpbmVhckdyYWRpZW50Pgo8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJ1cmwoI3BvZGxvemhrYSkiIC8+PC9zdmc+), #202225;
    background: -moz-linear-gradient(0deg, #3c4146 0, #3a3f44 25.439453%, rgba(53, 57, 62, 0.0) 100%), #202225;
    background: -o-linear-gradient(0deg, #3c4146 0, #3a3f44 25.439453%, rgba(53, 57, 62, 0.0) 100%), #202225;
    background: -webkit-linear-gradient(0deg, #3c4146 0, #3a3f44 25.439453%, rgba(53, 57, 62, 0.0) 100%), #202225;
    background: -webkit-gradient(linear, left top, right top, color-stop(0, #3c4146), color-stop(25.439453%, #3a3f44), to(rgba(53, 57, 62, 0.0))), #202225;
    background: -webkit-linear-gradient(left, #3c4146 0, #3a3f44 25.439453%, rgba(53, 57, 62, 0.0) 100%), #202225;
    background: -moz-linear-gradient(left, #3c4146 0, #3a3f44 25.439453%, rgba(53, 57, 62, 0.0) 100%), #202225;
    background: -o-linear-gradient(left, #3c4146 0, #3a3f44 25.439453%, rgba(53, 57, 62, 0.0) 100%), #202225;
    background: linear-gradient(90deg, #3c4146 0, #3a3f44 25.439453%, rgba(53, 57, 62, 0.0) 100%), #202225;
}

.theme-toggle .toggler::before {
    display: inline-block;
    width: .8vw;
    height: .8vw;
    background-color: white;
    content: "";
    text-align: center;
    vertical-align: top;
    line-height: 1.2vw;
    border-radius: 99px;
}

.theme-toggle .toggler.active {
    padding-left: 1.1vw !important;
}

.theme-toggle .toggler.active::before {
    background-color: #fff;
    content: "";
}

.ml-8 {
    margin-left: 8vw;
}

.mr-8 {
    margin-right: 8vw;
}

.pl-7 {
    padding-left: 7vw;
}

.pl-8_5 {
    padding-right: 8.5vw !important;
}

.pl-10 {
    padding-left: 10vw;
}

.top-3 {
    top: 2.8vw;
}

.sun {
    color: #ff6d1d;
    font-size: .8vw;
    margin-right: .3vw;
}

.moon {
    color: #8298ac;
    font-size: .8vw;
    margin-left: .3vw;
}

.timezone {
    margin-top: .2vw;
    color: #b7b9ba;
    font-size: .9vw;
    margin-left: 1vw;
    cursor: pointer;
}

.games {
    margin-left: 3vw;
    font-size: .9vw;
    color: #ff6d1d;
}

.games a {
    color: #ff6d1d;
}

.games img {
    width: 1vw;
    margin-right: .3vw;
}

.games div {
    cursor: pointer;
    margin-right: 1.4vw;
}

.help {
  position: absolute;
  right: 0;
}

.help img {
    margin-right: .5vw;
}

.help a {
    margin-right: .7vw;
    display: flex;
}

.help a .zendesk {
    /*font-size: 1.2vw;*/
    /*margin-top: .3vw;*/

    font-size: 1.2vw;
    margin-top: .3vw;
    color: black;
}

.help a .letter {
    /*font-size: 1.5vw;*/
    /*margin-top: .2vw;*/
  font-size: 1.2vw;
  margin-top: .3vw;
  color: black;
}

.dark .help a .zendesk, .dark .help a .letter {
    color: white;
}

.help a .discord {
    margin-top: .1vw;
    width: 1.6vw;
}

.help a .discord {
    fill: rgba(0, 0, 0, 0);
}

.dark .help a .discord {
    margin-top: .1vw;
    width: 1.6vw;
}

.dark .help a .discord path {
    fill: white;
}

.help a letter {
    width: 1.5vw;
}
</style>